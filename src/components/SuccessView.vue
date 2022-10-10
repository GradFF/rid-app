<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { orders } from '../services'

const route = useRoute()

const orderId = computed(() => route.params.id)
const order = ref({})

onMounted(async () => {
  order.value = await orders.find(orderId.value)
})
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h2 class="text-2xl font-bold">Solicitação enviada com sucesso!</h2>
        <p class="py-6">
          Salve o código abaixo para acompanhar sua solicitação.
        </p>
        <h1 class="text-5xl font-bold mb-8">{{ order.code }}</h1>

        <div class="flex items-center justify-center space-x-4">
          <button class="btn btn-primary">Salvar</button>
          <RouterLink
            :to="{ name: 'home' }"
            class="btn btn-primary btn-outline px-6"
            >Home</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
