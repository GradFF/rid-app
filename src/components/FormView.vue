<script setup>
import { onMounted, ref } from 'vue'
import { orders } from '../services'
import { settings } from '../services'
import { getCurrentDate } from '../utils/date'
import { nanoid } from 'nanoid'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const order = ref({})
const setting = ref(null)
const loading = ref(false)
const file = ref(null)

onMounted(async () => {
  setting.value = await settings.find()
  route.params.id
    ? (order.value = await orders.find(route.params.id))
    : (order.value = {
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

const handleFileUpload = async e => {
  file.value = e.target.files[0]
}

const handleSubmit = async () => {
  loading.value = true
  try {
    const url = await orders.upload(file.value, order.value.code)
    order.value.url = url
    order.value.name = order.value.name.toUpperCase()
    const result = route.params.id
      ? await orders.update(order.value, route.params.id)
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
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold my-8">Solicitações</h1>
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost">
        Voltar
      </RouterLink>
    </div>

    <div
      v-if="order.status !== 'Aguardando'"
      class="alert alert-success shadow-lg mb-6"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          <p class="text-lg font-bold">
            {{ order.status }}
          </p>
          <p v-if="order.opinio">{{ order.opinio }}</p>
        </span>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        <fieldset
          v-if="setting"
          class="py-4 px-2 mb-4 border border-base-300 rounded-md col-span-2"
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
        <div class="form-control sm:col-span-2">
          <label class="label cursor-pointer">
            <span class="label-text"
              >Atesto que li, entendi as instruções e estou ciente dos prazos
              para os procedimentos relativos a inscrição em disciplinas e sua
              eventual regularização:
            </span>
            <input type="checkbox" class="checkbox" v-model="order.term" />
          </label>
        </div>

        <div class="form-control sm:col-span-2">
          <label class="label">
            <span class="label-text"
              >Justificativa (Cite especificamente cada disciplina com
              irregularidade e a respectiva justificativa para a solicitação):
            </span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full"
            placeholder="Jusquifique o parecer"
            v-model="order.justification"
          ></textarea>
        </div>

        <div class="form-control sm:col-span-2">
          <a
            v-if="order.url"
            :href="order.url"
            class="btn btn-link"
            target="_blank"
            rel="noopener noreferrer"
            >Visualizar CRID</a
          >
          <label class="label">
            <span class="label-text">
              Anexe sua CRID mais recente (contendo as irregularidades)
            </span>
          </label>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              accept="application/pdf"
              @change="handleFileUpload"
              type="file"
              class="block w-full text-sm file:mr-4 file:btn file:btn-primary file:btn-outline"
            />
          </label>
        </div>

        <div class="py-4 sm:col-span-2">
          <button
            type="submit"
            class="btn btn-primary px-6 disabled:cursor-not-allowed"
            :class="loading && 'loading'"
            v-if="order.status && order.status === 'Aguardando'"
            :disabled="!order.term"
          >
            Salvar
          </button>

          <!-- alert -->
          <div
            v-if="order.status && order.status !== 'Aguardando'"
            class="alert alert-warning shadow-lg mt-2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Sua solicitação foi analisada pela coordenaçao. Não é possível
                alterar as informações.
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
