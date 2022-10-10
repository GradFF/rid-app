<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '../../../stores/order'

defineProps({
  showForm: Boolean
})

const emit = defineEmits(['close'])

const handleSubmit = async () => {
  await store.fetch()
  close()
}

const close = () => {
  emit('close')
}

const store = useOrderStore()
const { filters } = storeToRefs(store)
</script>
<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input
      type="checkbox"
      id="form-modal"
      class="modal-toggle"
      v-model="showForm"
    />

    <!-- FILTERS -->
    <div class="modal">
      <div class="modal-box relative">
        <button
          @click="close"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 class="text-lg font-bold mb-6">Solicitação</h3>

        <div class="form-control mt-6">
          <button @click="handleSubmit" class="btn btn-primary">Filtrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
