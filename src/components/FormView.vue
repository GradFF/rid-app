<script setup>
import { computed, onMounted, ref } from 'vue'
import { orders } from '../services'
import { settings } from '../services'
import { getCurrentDate } from '../utils/date'
import { nanoid } from 'nanoid'
import { useRoute, useRouter } from 'vue-router'
import Alert from './shared/Alert.vue'

const { isActiveSetting } = settings
const semesterActive = ref(null)

const router = useRouter()
const route = useRoute()

const order = ref({})
const setting = ref(null)
const loading = ref(false)
const crid = ref(null)
const doc = ref(null)
const errors = ref([])

const orderId = computed(() => route.params.id || null)

onMounted(async () => {
  setting.value = await settings.find()
  semesterActive.value = await isActiveSetting()
  // console.log(semesterActive.value.length)
  // if (!semesterActive.value || semesterActive.value.length === 0) {
  //   return router.replace({ name: 'home' })
  // }

  orderId.value
    ? (order.value = await orders.find(orderId.value))
    : (order.value = {
        semester: setting.value.semesters[0].title || '2022-2',
        course: '',
        register: '',
        name: '',
        email: '',
        problems: [],
        justification: '',
        term: false,
        status: 'Aguardando',
        created_at: getCurrentDate(),
        code: nanoid(6),
        opinio: '',
        responsible: '',
        provided: ''
      })
})

const handleCridUpload = async e => {
  if (e.target.files[0].size > 1024000) {
    alert('O arquivo deve ter no máximo 1MG.')
    e.target.value = ''
    return
  }
  crid.value = e.target.files[0]
}

const handleDocUpload = async e => {
  if (e.target.files[0].size > 1024000) {
    alert('O arquivo deve ter no máximo 1MG.')
    e.target.value = ''
    return
  }
  doc.value = e.target.files[0]
}

const handleSubmit = async () => {
  errors.value = []
  if (order.value.problems.length === 0) {
    errors.value.push('Selecione pelo menos uma irregularidade.')
    return
  }

  loading.value = true
  try {
    if (crid.value !== null) {
      const cridURL = await orders.upload(
        crid.value,
        `CRID-${order.value.code}`
      )
      order.value.crid = cridURL
    }
    if (doc.value !== null) {
      const docURL = await orders.upload(doc.value, `DOC-${order.value.code}`)
      order.value.doc = docURL
    }
    order.value.name = order.value.name.toUpperCase()
    const result = orderId.value
      ? await orders.update(order.value, orderId.value)
      : await orders.create(order.value)
    router.replace({ name: 'success', params: { id: result } })
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div class="max-w-screen-md mx-auto px-4 py-12">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold my-8">Requerimento de regularização</h1>
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost">
        Voltar
      </RouterLink>
    </div>

    <!-- Alert -->
    <Alert
      :show="order.status === 'Deferido' || order.status === 'Deferido/Parcial'"
      type="success"
    >
      <!-- <p class="text-lg font-bold">Solicitação {{ order.status }}</p> -->
      <p class="mb-4">{{ order.opinio }}</p>
      <p v-if="order.provided">
        Autorização efetivada no SIGA. Verifique sua CRID para confirmar
      </p>
      <p v-else>A autorização será lançada na sua CRID em breve.</p>
    </Alert>
    <Alert :show="order.status === 'Indeferido'" type="error">
      <!-- <p class="text-lg font-bold">Solicitação {{ order.status }}.</p> -->
      <p>{{ order.opinio }}</p>
    </Alert>
    <Alert :show="order.status === 'Aguardando' && orderId != null" type="info">
      <p>Solicitação aguardando parecer da coordenação</p>
    </Alert>

    <div>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Curso</span>
            </label>
            <select
              class="select select-bordered"
              v-model="order.course"
              required
            >
              <option disabled selected>Selecione o curso</option>
              <option>Integral</option>
              <option>Noturno</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">DRE</span>
            </label>
            <input
              type="text"
              placeholder="DRE"
              class="input input-bordered"
              v-model="order.register"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nome Completo</span>
            </label>
            <input
              type="text"
              placeholder="Nome completo"
              class="input input-bordered"
              v-model="order.name"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              v-model="order.email"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <fieldset
              v-if="setting"
              class="py-4 px-2 mb-4 border border-base-300 rounded-md col-span-2"
              :class="
                order.problems && order.problems.length === 0 && 'border-error'
              "
            >
              <legend class="text-content text-sm font-semibold px-2">
                Qual(is) irregularidade(s) da CRID deseja regularizar?
              </legend>
              <div
                class="form-control mb-4"
                v-for="item in setting.problems"
                :key="item.title"
              >
                <label class="label cursor-pointer">
                  <div class="label-text font-medium">
                    <span>{{ item.title }}</span>
                    <small class="px-4 block">{{ item.description }}</small>
                  </div>
                  <input
                    type="checkbox"
                    class="checkbox"
                    :value="item.title"
                    v-model="order.problems"
                  />
                </label>
              </div>
            </fieldset>
          </div>
          <div class="form-control sm:col-span-2 mb-4">
            <label class="label">
              <span class="label-text"
                >Justificativa (Cite especificamente cada disciplina com
                irregularidade e a respectiva justificativa para a solicitação):
              </span>
            </label>
            <textarea
              rows="5"
              class="textarea textarea-bordered w-full"
              placeholder="Jusquifique o parecer"
              v-model="order.justification"
              required
            ></textarea>
          </div>

          <!-- UPLOAD -->
          <template v-if="order.status && order.status === 'Aguardando'">
            <div class="form-control sm:col-span-2 mb-4">
              <label class="label">
                <span class="label-text">
                  Anexe sua CRID mais recente (contendo as irregularidades)
                </span>
              </label>
              <label class="block">
                <span class="sr-only">Choose File</span>
                <input
                  accept="application/pdf"
                  @change="handleCridUpload"
                  type="file"
                  class="block w-full text-sm file:mr-4 file:btn file:btn-primary file:btn-outline"
                  :required="crid != null || !order.crid"
                />
              </label>
              <a
                v-if="order.crid"
                :href="order.crid"
                class="btn btn-link"
                target="_blank"
                rel="noopener noreferrer"
                >Visualizar CRID</a
              >
            </div>
          </template>
          <template v-if="order.status && order.status === 'Aguardando'">
            <div class="form-control sm:col-span-2 mb-4">
              <label class="label">
                <span class="label-text">
                  Outro documento (Se necessário)
                </span>
              </label>
              <label class="block">
                <span class="sr-only">Choose file</span>
                <input
                  accept="application/pdf"
                  @change="handleDocUpload"
                  type="file"
                  class="block w-full text-sm file:mr-4 file:btn file:btn-primary file:btn-outline"
                />
              </label>
              <a
                v-if="order.doc"
                :href="order.doc"
                class="btn btn-link"
                target="_blank"
                rel="noopener noreferrer"
                >Visualizar Documento</a
              >
            </div>
          </template>

          <!--  -->
          <div class="form-control sm:col-span-2">
            <label class="label cursor-pointer">
              <span class="label-text"
                >Atesto que li, entendi as instruções descritas acima e estou
                ciente dos prazos para os procedimentos relativos a inscrição em
                disciplinas e sua eventual regularização:
              </span>
              <input type="checkbox" class="checkbox" v-model="order.term" />
            </label>
          </div>
        </div>

        <Alert :show="errors.length > 0" type="error" class="my-4">
          <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        </Alert>

        <div class="py-4">
          <div v-if="semesterActive?.length">
            <button
              type="submit"
              class="btn btn-primary px-6 disabled:cursor-not-allowed"
              :class="loading && 'loading'"
              v-if="order.status && order.status === 'Aguardando'"
              :disabled="!order.term || loading"
            >
              Salvar
            </button>
          </div>

          <!-- alert -->
          <Alert
            :show="order.status && order.status !== 'Aguardando'"
            type="info"
          >
            <p>
              Sua solicitação foi analisada pela coordenaçao. Não é possível
              alterar as informações.
            </p>
          </Alert>
        </div>
      </form>
    </div>
  </div>
</template>
