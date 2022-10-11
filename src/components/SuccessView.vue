<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { orders } from '../services'
import { formatDateTime } from '../utils/date'

const route = useRoute()

const orderId = computed(() => route.params.id)
const order = ref({})

onMounted(async () => {
  order.value = await orders.find(orderId.value)
})

const handlePrint = () => {
  var doc = document.getElementById('home').innerHTML
  var win = window.open()
  win.document.write(doc)
  win.print()
  win.close() //Fecha após a impressã
}
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h2 class="text-2xl font-bold">Solicitação enviada com sucesso!</h2>
        <p class="py-6">
          Clique no botão abaixo para salvar o seu comprovante e use o código de
          acesso para acompanhar a solicitação e editar suas resposta, se
          necessário.
        </p>
        <h1 class="text-5xl font-bold mb-8">{{ order.code }}</h1>

        <div class="flex flex-col items-center justify-center space-x-4">
          <button class="btn btn-primary mb-4" @click="handlePrint">
            Imprimir Comprovante
          </button>
          <RouterLink :to="{ name: 'home' }" class="btn btn-link"
            >sair</RouterLink
          >
        </div>
      </div>
    </div>
    <div id="home" class="hidden" style="text-align: center">
      <div style="font-size: 1rem; margin-bottom: 2rem">
        Faculdade de Farmácia - UFRJ
      </div>
      <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 2rem">
        Solicitação enviada com sucesso!
      </h2>

      <h4>
        Comprovante de solicitação de Regularização de inscrição em disciplina
      </h4>
      <p>Aluno(a): {{ order.name }}</p>
      <p>DRE: {{ order.register }}</p>
      <p>Data da Solicitação: {{ formatDateTime(order.created_at) }}</p>
      <p>Período: {{ order.semester || '2022-2' }}</p>

      <p style="margin-bottom: 1rem">Código de acesso</p>
      <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 2rem">
        {{ order.code }}
      </h1>

      <p style="margin-bottom: 2rem">
        Use o código acima para acompanhar a sua solicitação e editar se
        necessário.
      </p>

      <p style="color: red">
        Guarde seu código de acesso. Não será possível recuperá-lo.
      </p>
    </div>
  </div>
</template>
<style>
.home {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
