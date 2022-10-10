<script setup>
import { ref, watchEffect } from 'vue'
import { orders } from '../../../services'

const props = defineProps({
  showForm: Boolean,
  item: Object,
  setting: { type: Object, default: () => {} }
})

const emit = defineEmits(['close'])

const order = ref({})

const loading = ref(false)

watchEffect(async () => {
  if (props.showForm) {
    order.value = await orders.find(props.item.id)
  }
})

const handleSubmit = async () => {
  loading.value = true
  try {
    await orders.update(order.value, props.item.id)
    close()
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

const close = () => {
  emit('close')
}
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
          type="button"
          @click="close"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <small>Aluno:</small>
        <h4 class="text-lg font-bold">{{ order && order.name }}</h4>
        <p class="text-md font-bold mb-6">{{ order && order.course }}</p>
        <form @submit.prevent="handleSubmit">
          <div class="form-control mb-4">
            <select
              v-if="setting"
              class="select select-bordered select-sm w-full"
              v-model="order.responsible"
              required
            >
              <option disabled selected>Responsável</option>
              <option
                v-for="teacher in setting.teachers"
                :key="teacher.name"
                :value="teacher.name"
              >
                {{ teacher.name }}
              </option>
            </select>
          </div>
          <fieldset
            class="p-2 mb-4 border border-base-300 rounded-md"
            v-if="setting"
          >
            <legend class="text-content text-sm font-semibold px-2">
              Parecer
            </legend>
            <div
              class="form-control"
              v-for="item in setting.status"
              :key="item.title"
            >
              <label class="label cursor-pointer" v-if="item.show">
                <span class="label-text">{{ item.title }}</span>
                <input
                  type="radio"
                  name="radio-6"
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
              <input
                type="checkbox"
                class="checkbox"
                v-model="order.provided"
              />
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
    </div>
  </div>
</template>
