<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watchEffect } from 'vue'
import { useOrderStore } from '../stores/order'
import Navbar from './shared/Navbar.vue'
import Table from './shared/orders/Table.vue'
import FilterModal from './shared/orders/FilterModal.vue'
import FormModal from './shared/orders/FormModal.vue'

const store = useOrderStore()
const { filters, orders, btnLoadMoreVisible } = storeToRefs(store)

const showFilter = ref(false)
const showForm = ref(false)

onMounted(async () => {
  store.fetch()
})

const handleSubmit = async () => {
  await store.findByName()
}
</script>
<template>
  <div class="container mx-auto px-4 pb-12">
    <Navbar @search="showFilter = true" />
    <div class="container py-8">
      <h1 class="text-3xl font-bold">Solicitações</h1>
    </div>

    <FilterModal @close="showFilter = false" :is-open="showFilter" />
    <!-- SEARCH -->

    <div class="flex items-center sm:justify-between mb-4">
      <form @submit.prevent="handleSubmit">
        <div class="form-control w-full">
          <div class="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Pesquisar por nome"
              class="input input-bordered input-sm"
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
        class="btn btn-primary btn-sm"
        @click="showFilter = true"
      >
        Filtrar
      </button>
    </div>

    <Table :orders="orders" @show="showForm = true" />
    <FormModal @close="showForm = false" :show-form="showForm" />
  </div>
</template>
