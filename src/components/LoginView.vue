<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../services'

const router = useRouter()

const loading = ref(false)

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  loading.value = true
  try {
    await auth.loginWithEmailAndPassword(email.value, password.value)
    router.replace({ name: 'admin' })
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-3xl font-bold text-center">Farmácia UFRJ</h1>
          <p class="text-center my-4">
            Acesso exclusivo da Coordenação e Secretaria Acadêmica de graduação
          </p>
          <form @submit.prevent="handleSubmit">
            <div class="form-control">
              <label class="label">
                <span class="label-text">E-mail</span>
              </label>
              <input
                type="eamil"
                class="input input-bordered"
                required
                v-model="email"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Senha</span>
              </label>
              <input
                type="password"
                class="input input-bordered"
                v-model="password"
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary"
                :class="loading && 'loading'"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
