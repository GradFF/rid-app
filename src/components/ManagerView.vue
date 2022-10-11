<script setup>
import { onMounted, ref } from 'vue'
import { orders } from '../services'
import { settings } from '../services'

import { useRoute, useRouter } from 'vue-router'
import Alert from './shared/Alert.vue'

const router = useRouter()
const route = useRoute()

const order = ref({})
const setting = ref(null)
const error = ref(null)
const loading = ref(false)
const loadingForm = ref(false)

onMounted(async () => {
  loadingForm.value = true
  try {
    setting.value = await settings.find()
    route.params.id
      ? (order.value = await orders.find(route.params.id))
      : console.log('Not found')
  } catch (error) {
    console.log(error)
  } finally {
    loadingForm.value = false
  }
})

const handleSubmit = async () => {
  loading.value = true
  try {
    await orders.update(order.value, route.params.id)
    router.replace({ name: 'admin' })
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div v-if="loadingForm" class="h-screen flex items-center justify-center">
    <h1 class="text-2xl">Carregando ...</h1>
  </div>
  <div class="max-w-screen-sm mx-auto px-4 py-12" v-if="!loadingForm">
    <div class="flex justify-end">
      <RouterLink :to="{ name: 'admin' }" class="btn btn-ghost">
        Voltar
      </RouterLink>
    </div>
    <Alert :show="error != null" type="error" class="mt-6 mb-2">
      {{ error }}
    </Alert>

    <div class="mb-6">
      <h1 class="text-3xl font-bold">{{ order.name }}</h1>
      <p>DRE: {{ order.register }}</p>
      <p>Curso: {{ order.course }}</p>
      <div class="divider"></div>
      <b>Irregularidade(s)</b>
      <p v-for="item in order.problems" :key="item">{{ item }}</p>
      <div class="divider"></div>
      <b>Justificativa</b>
      <p>{{ order.justification }}</p>
      <div class="flex">
        <a
          v-if="order.crid"
          :href="order.crid"
          class="btn btn-link"
          target="_blank"
          rel="noopener noreferrer"
          >Visualizar CRID</a
        >
        <a
          v-if="order.doc"
          :href="order.doc"
          class="btn btn-link"
          target="_blank"
          rel="noopener noreferrer"
          >Outros</a
        >
      </div>
    </div>
    <div class="divider"></div>
    <form @submit.prevent="handleSubmit">
      <!-- RESPONSIBLE -->
      <div class="form-control mb-4" v-if="setting">
        <label class="label">
          <span class="label-text">Coordenador</span>
        </label>
        <select
          class="select select-bordered"
          v-model="order.responsible"
          required
        >
          <option disabled selected>Selecione o curso</option>
          <option v-for="item in setting.teachers" :key="item.name">
            {{ item.name }}
          </option>
        </select>
      </div>

      <!-- STATUS -->
      <fieldset
        class="p-2 mb-4 border border-base-300 rounded-md"
        v-if="setting"
      >
        <legend class="text-content text-sm font-semibold px-2 uppercase">
          Parecer
        </legend>
        <div
          class="form-control"
          v-for="item in setting.status"
          :key="item.title"
        >
          <label class="label cursor-pointer" v-if="item.show">
            <span
              class="label-text"
              :class="
                item.title == order.status
                  ? 'text-primary font-medium text-lg'
                  : ''
              "
              >{{ item.title }}</span
            >
            <input
              type="radio"
              class="radio"
              v-model="order.status"
              :value="item.title"
            />
          </label>
        </div>
      </fieldset>
      <div class="form-control mb-4">
        <textarea
          class="textarea textarea-bordered textarea-sm w-full"
          placeholder="Jusquifique o parecer"
          v-model="order.opinio"
        ></textarea>
      </div>

      <div class="form-control px-2">
        <label class="label cursor-pointer">
          <span class="label-text">Efetivado no SIGA</span>
          <input type="checkbox" class="checkbox" v-model="order.provided" />
        </label>
      </div>

      <div class="form-control pt-4">
        <button
          type="submit"
          class="btn btn-primary"
          :class="loading && 'loading'"
        >
          Confirmar
        </button>
      </div>
    </form>
  </div>
</template>
