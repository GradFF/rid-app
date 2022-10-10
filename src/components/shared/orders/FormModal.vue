<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '../../../stores/order'

defineProps({
  showForm: Boolean
})

const emit = defineEmits(['close'])

const handleSubmit = async () => {
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
      <form @submit.prevent="handleSubmit" class="modal-box relative">
        <button
          type="button"
          @click="close"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 class="text-lg font-bold mb-6">Solicitação</h3>
        <form @submit.prevent="" class="py-4">
          <div class="form-control mb-4">
            <select class="select select-bordered select-sm w-full" required>
              <option disabled selected>Responsável</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <fieldset class="p-2 mb-4 border border-base-300 rounded-md">
            <legend class="text-content text-sm font-semibold px-2">
              Parecer
            </legend>
            <div
              class="form-control"
              v-for="label in ['Deferido', 'Indeferido']"
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
          <div class="form-control mb-4">
            <textarea
              class="textarea textarea-bordered textarea-sm w-full"
              placeholder="Jusquifique o parecer"
            ></textarea>
          </div>

          <div class="form-control px-2">
            <label class="label cursor-pointer">
              <span class="label-text">Efetivado no SIGA</span>
              <input type="checkbox" class="checkbox" />
            </label>
          </div>
        </form>
        <div class="form-control py-4">
          <button type="ssubmit" @click="handleSubmit" class="btn btn-primary">
            Filtrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
