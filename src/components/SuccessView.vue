<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { orders } from '../services'
import { formatDateTime } from '../utils/date'
import { jsPDF } from 'jspdf'

const route = useRoute()

const orderId = computed(() => route.params.id)
const order = ref({})

onMounted(async () => {
  order.value = await orders.find(orderId.value)
})

const handlePrint = () => {
  const doc = new jsPDF()

  doc.setFont(undefined, 'bold')
  doc.text(20, 20, 'Faculdade de Farmácia - UFRJ')
  doc.setFontSize(14)
  doc.text(
    20,
    40,
    'Comprovante de solicitação de Regularização de inscrição em disciplina'
  )

  doc.setFont(undefined, 'normal')
  doc.setFontSize(10)
  doc.text(20, 60, `Aluno(a): ${order.value.name}`)
  doc.text(20, 65, `DRE: ${order.value.register}`)
  doc.text(
    20,
    70,
    `Data da Solicitação: ${formatDateTime(order.value.created_at)}`
  )
  doc.text(20, 75, `Semestre: ${order.value.semester || '2022-2'}`)

  doc.setFont(undefined, 'bold')
  doc.setFontSize(12)
  doc.text(20, 90, `Código de acesso`)

  doc.setFontSize(48)
  doc.text(20, 110, order.value.code)

  doc.setFontSize(12)
  doc.text(
    20,
    130,
    'Use o código acima para acompanhar a sua solicitação e editar se necessário.'
  )

  doc.save(`Comprovante ${order.value.name}.pdf`)
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
  </div>
</template>
