<script setup>
import { useOrderStore } from '../../../stores/order'

defineProps({
  orders: Array
})

const store = useOrderStore()

const getColors = value => {
  if (value === 'Aguardando') {
    return 'badge-warning'
  } else if (value === 'Deferido') {
    return 'badge-success'
  } else if (value === 'Indeferido') {
    return 'badge-error'
  } else {
    return 'badge-info'
  }
}
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
            <th>
              <div>
                <RouterLink
                  :to="{ name: 'manager', params: { id: order.id } }"
                  class="font-bold"
                >
                  {{ order.name }}
                </RouterLink>
                <div class="text-sm opacity-50">{{ order.email }}</div>
              </div>
            </th>
            <td>{{ order.register }}</td>
            <td>{{ order.course }}</td>
            <th>
              <div class="badge badge-outline" :class="getColors(order.status)">
                {{ order.status }}
              </div>
            </th>
            <td>
              <span :class="order.provided ? 'text-success' : 'text-error'">{{
                order.provided ? 'Sim' : 'Não'
              }}</span>
            </td>
            <td>
              <RouterLink
                :to="{ name: 'manager', params: { id: order.id } }"
                class="btn btn-square btn-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </RouterLink>
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
        class="btn btn-primary btn-sm"
        @click="store.loadMore"
        v-if="store.btnLoadMoreVisible"
      >
        Exibir mais...
      </button>
      <!-- <p v-else>Não há mais registros para exibir.</p> -->
    </div>
  </div>
</template>
