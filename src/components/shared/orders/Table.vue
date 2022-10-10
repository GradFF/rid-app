<script setup>
import { useOrderStore } from '../../../stores/order'

defineProps({
  orders: Array
})

const store = useOrderStore()
</script>
<template>
  <div>
    <!-- TABLE -->
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Aluno</th>
            <th>DRE</th>
            <th>Curso</th>
            <th>Status</th>
            <th>Efetivado/SIGA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="order in orders" :key="order.id">
            <td>
              <div>
                <div class="font-bold">{{ order.name }}</div>
                <div class="text-sm opacity-50">{{ order.email }}</div>
              </div>
            </td>
            <td>{{ order.register }}</td>
            <td>{{ order.course }}</td>
            <th>
              <div class="badge badge-warning badge-outline">
                {{ order.status }}
              </div>
            </th>
            <th>{{ order.provided }}</th>
            <td>
              <button @click="$emit('show')" class="btn btn-ghost btn-xs">
                Parecer
              </button>
            </td>
          </tr>
          <tr v-if="orders.length === 0">
            <td colspan="6" class="text-center">Nenhum registro encontrado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center py-4">
      <button
        type="button"
        class="btn btn-primary"
        @click="store.loadMore"
        v-if="store.btnLoadMoreVisible"
      >
        Exibir mais...
      </button>
      <!-- <p v-else>Não há mais registros para exibir.</p> -->
    </div>
  </div>
</template>
