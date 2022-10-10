<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '../../../stores/order'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const handleFilter = async () => {
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

      class="modal-toggle"
      v-model="isOpen"
    />

    <!-- FILTERS -->
    <div class="modal">
      <div class="modal-box relative">
        <button @click="close"
          
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</button
        >
        <h3 class="text-lg font-bold mb-6">Filtrar Solicitações</h3>

        <fieldset class="p-4 mb-4 border border-base-200 rounded-md">
          <legend class="text-content text-sm font-semibold">Curso</legend>
          <div
            class="form-control"
            v-for="label in ['Todos', 'Integral', 'Noturno']"
            :key="label"
          >
            <label class="label cursor-pointer">
              <span class="label-text">{{ label }}</span>
              <input
                type="radio"
                name="radio-6"
                class="radio"
                v-model="filters.course"
                :value="label"
              />
            </label>
          </div>
        </fieldset>
        <fieldset class="p-4 mb-4 border border-base-200 rounded-md">
          <legend class="text-content text-sm font-semibold">Status</legend>
          <div
            class="form-control"
            v-for="label in ['Aguardando', 'Deferido', 'Indeferido']"
            :key="label"
          >
            <label class="label cursor-pointer">
              <span class="label-text">{{ label }}</span>
              <input
                type="checkbox"
                class="checkbox"
                v-model="filters.status"
                :value="label"
              />
            </label>
          </div>
        </fieldset>
        <div class="form-control mt-6">
          <button @click="handleFilter" class="btn btn-primary">Filtrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
