<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useOrderStore } from '@/stores/order'
import { settings } from '@/services'
import Alert from '../Alert.vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const error = ref(null)
const loading = ref(false)
const setting = ref(null)

const handleFilter = async () => {
  error.value = null
  if (filters.value.status.length == 0) {
    error.value = 'Selecione pelo menos um status.'
    return
  }
  loading.value = true
  try {
    await store.fetch()
    close()
  } catch (error) {
    console.log(error)
    error.value = 'Ocorreu um problema. Tente novamente.'
  } finally {
    loading.value = false
  }
}

const close = () => {
  emit('close')
}

const store = useOrderStore()
const { filters } = storeToRefs(store)

onMounted(async () => {
  setting.value = await settings.find()
})
</script>
<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" class="modal-toggle" v-model="isOpen" />

    <!-- FILTERS -->
    <div class="modal">
      <div class="modal-box relative">
        <button
          @click="close"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>

        <Alert :show="error != null" type="error" class="mt-6 mb-2">
          {{ error }}
        </Alert>

        <h3 class="text-lg font-bold mb-6">Filtrar Solicitações</h3>

        <fieldset class="p-2 mb-2 border border-base-200 rounded-md">
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
        <fieldset
          class="p-2 mb-2 border border-base-200 rounded-md"
          v-if="setting"
        >
          <legend class="text-content text-sm font-semibold">Status</legend>
          <div
            class="form-control"
            v-for="item in setting.status"
            :key="item.title"
          >
            <label class="label cursor-pointer" v-if="item.show">
              <span class="label-text">{{ item.title }}</span>
              <input
                type="checkbox"
                class="checkbox"
                v-model="filters.status"
                :value="item.title"
              />
            </label>
          </div>
        </fieldset>
        <div class="form-control mt-6">
          <button
            @click="handleFilter"
            class="btn btn-primary"
            :class="loading && 'loading'"
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
