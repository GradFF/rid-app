<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { orders, settings } from '../services'
import Navbar from './shared/Navbar.vue'

const { isActiveSetting } = settings
const semesterActive = ref(null)

const router = useRouter()

const search = ref('')
const loading = ref(false)
const error = ref(null)

const handleSubmit = async () => {
  error.value = null
  loading.value = true
  try {
    const result = await orders.get('code', search.value)
    if (result.length) {
      router.push({ name: 'update', params: { id: result[0].id } })
    } else {
      error.value =
        'Não foi possível localizar o registro com o código informado.'
    }
  } catch (error) {
    console.log('error')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  semesterActive.value = await isActiveSetting()
})
</script>
<template>
  <div class="min-h-screen bg-base-200">
    <Navbar />
    <div class="hero mt-12">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 v-if="semesterActive?.length" class="text-2xl font-bold mb-8">
            Regularização de inscrição em disciplina
            {{ semesterActive && semesterActive[0]?.title }}
          </h1>
          <h1 v-else class="text-2xl font-bold mb-4">
            Período de regularização de inscrição em disciplina encerrado.
          </h1>

          <!-- BTN -->
          <template v-if="semesterActive && semesterActive.length > 0">
            <RouterLink :to="{ name: 'create' }" class="btn btn-primary mb-4">
              Solicitar Regularização
            </RouterLink>
            <div class="divider">OU</div>
          </template>
          <p>
            Infome no campo abaixo o código de acesso que recebeu quando
            preencheu o requerimento.
          </p>

          <!-- SEARCH -->
          <form @submit.prevent="handleSubmit">
            <div class="form-control mt-4">
              <div class="flex items-center space-x-2">
                <input
                  type="search"
                  placeholder="Informe o código"
                  class="input input-bordered w-full"
                  required
                  v-model="search"
                />
                <button
                  type="submit"
                  class="btn btn-primary btn-outline"
                  :class="loading && 'loading'"
                >
                  Pesquisar
                </button>
              </div>
            </div>
          </form>
          <p v-if="error" class="text-error py-2">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
