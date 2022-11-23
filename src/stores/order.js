import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '../utils/firebase'
import {
  collection,
  orderBy,
  limit,
  getDocs,
  query,
  where,
  startAfter
} from 'firebase/firestore'

export const useOrderStore = defineStore('order', () => {
  const lmt = ref(5) //Limit
  const orders = ref([])
  const filters = reactive({
    course: 'Todos',
    status: ['Aguardando'],
    name: ''
  })
  const lastDocument = ref(null)
  const btnLoadMoreVisible = computed(
    () => lastDocument.value != null && orders.value.length > lmt.value - 1
  )

  const fetch = async () => {
    let q

    if (filters.course != 'Todos') {
      q = query(
        collection(db, 'orders'),
        where('course', '==', filters.course),
        where('status', 'in', filters.status),
        orderBy('name'),
        // limit(lmt.value)
      )
    } else {
      q = query(
        collection(db, 'orders'),
        where('status', 'in', filters.status),
        orderBy('name'),
        // limit(lmt.value)
      )
    }

    await getDocs(q).then(snapshot => {
      lastDocument.value = snapshot.docs[snapshot.docs.length - 1]
      orders.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  }

  const loadMore = async () => {
    let q

    if (filters.course != 'Todos') {
      q = query(
        collection(db, 'orders'),
        where('course', '==', filters.course),
        where('status', 'in', filters.status),
        orderBy('name'),
        // startAfter(lastDocument.value),
        // limit(lmt.value)
      )
    } else {
      q = query(
        collection(db, 'orders'),
        where('status', 'in', filters.status),
        orderBy('name'),
        // startAfter(lastDocument.value),
        // limit(lmt.value)
      )
    }

    await getDocs(q).then(snapshot => {
      lastDocument.value = snapshot.docs[snapshot.docs.length - 1]
      snapshot.forEach(doc => {
        orders.value.push({ id: doc.id, ...doc.data() })
      })
    })
  }

  const findByName = async () => {
    orderBy.value = []
    lastDocument.value = null
    let q

    if (filters.name) {
      q = query(
        collection(db, 'orders'),
        where('name', '>=', filters.name && filters.name.toUpperCase()),
        where(
          'name',
          '<=',
          filters.name && filters.name.toUpperCase() + '\uf8ff'
        ),
        orderBy('name'),
        // limit(lmt.value)
      )
      await getDocs(q).then(snapshot => {
        orders.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      })
    } else {
      fetch()
    }
  }

  return { orders, filters, fetch, findByName, btnLoadMoreVisible, loadMore }
})
