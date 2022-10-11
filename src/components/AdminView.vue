<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch, watchEffect } from 'vue'
import { useOrderStore } from '../stores/order'
import Navbar from './shared/Navbar.vue'
import Table from './shared/orders/Table.vue'
import FilterModal from './shared/orders/FilterModal.vue'
import { settings } from '../services'

const store = useOrderStore()
const { filters, orders } = storeToRefs(store)

const showFilter = ref(false)
const setting = ref(null)

onMounted(async () => {
  await store.fetch()
  setting.value = await settings.find()
})

const handleSubmit = async () => {
  await store.findByName()
}

watch(
  () => filters.value.name,
  newValue => {
    if (newValue === '') {
      store.fetch()
    }
  }
)
</script>
<template>
  <div class="container mx-auto px-4 pb-12">
    <Navbar @search="showFilter = true" />
    <h1 class="text-3xl font-bold my-8">Solicitações</h1>

    <FilterModal @close="showFilter = false" :is-open="showFilter" />
    <!-- SEARCH -->

    <div
      class="flex flex-col dm:flex-row sm:items-center sm:justify-between mb-4"
    >
      <form @submit.prevent="handleSubmit">
        <div class="form-control w-full">
          <div class="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Pesquisar por nome"
              class="input input-bordered input-sm w-full"
              v-model="filters.name"
            />
            <button type="submit" class="btn btn-primary btn-sm">
              Pesquisar
            </button>
          </div>
        </div>
      </form>
      <button
        type="button"
        class="btn btn-primary btn-sm mt-4 sm:mt-0"
        @click="showFilter = true"
      >
        Filtrar
      </button>
    </div>

    <Table :orders="orders" />
  </div>
</template>
