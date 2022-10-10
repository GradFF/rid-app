<script setup>
import { onMounted, ref } from 'vue'
import { orders } from '../services'
import { settings } from '../services'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const order = ref({})
const setting = ref(null)
const loading = ref(false)

onMounted(async () => {
  setting.value = await settings.find()
  route.params.id
    ? (order.value = await orders.find(route.params.id))
    : console.log('Not found')
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
  <div class="max-w-screen-sm mx-auto px-4 py-12">
    <div class="flex items-start justify-between">
      <div class="mb-6">
        <h1 class="text-3xl font-bold">{{ order.name }}</h1>
        <p>DRE: {{ order.register }}</p>
        <p>Curso: {{ order.course }}</p>
        <a
          v-if="order.url"
          :href="order.url"
          class="btn btn-link"
          target="_blank"
          rel="noopener noreferrer"
          >Visualizar CRID</a
        >
      </div>
      <RouterLink :to="{ name: 'admin' }" class="btn btn-ghost">
        Voltar
      </RouterLink>
    </div>

    <form @submit.prevent="handleSubmit">
      <fieldset
        class="p-2 mb-4 border border-base-300 rounded-md"
        v-if="setting"
      >
        <legend class="text-content text-sm font-semibold px-2 uppercase">
          Coordenador Responsável
        </legend>
        <div
          class="form-control"
          v-for="item in setting.teachers"
          :key="item.name"
        >
          <label class="label cursor-pointer" v-if="item.show">
            <span
              class="label-text"
              :class="
                item.name == order.responsible
                  ? 'text-primary font-medium text-lg'
                  : ''
              "
              >{{ item.name }}</span
            >
            <input
              type="radio"
              class="radio"
              v-model="order.responsible"
              :value="item.name"
            />
          </label>
        </div>
      </fieldset>
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
          @click="handleSubmit"
          class="btn btn-primary"
          :class="loading && 'loading'"
        >
          Confirmar
        </button>
      </div>
    </form>
  </div>
</template>
