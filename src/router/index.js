import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import auth from '../services/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' }
    },
    {
      path: '/requerimento',
      name: 'create',
      component: () => import('../components/FormView.vue'),
      meta: { title: 'Requerimento' }
    },
    {
      path: '/requerimento/:id',
      name: 'update',
      component: () => import('../components/FormView.vue'),
      meta: { title: 'Requerimento' }
    },
    {
      path: '/success/:id',
      name: 'success',
      component: () => import('../components/SuccessView.vue'),
      meta: { title: 'Success' }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/AdminView.vue'),
      meta: { requiresAuth: true, title: 'Admin' }
    },
    {
      path: '/admin/:id',
      name: 'manager',
      component: () => import('../components/ManagerView.vue'),
      meta: { requiresAuth: true, title: 'Manager' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/LoginView.vue'),
      meta: { requiresUnauth: true, title: 'Login' }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | Farmácia UFRJ`

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAutenticated = await auth.getUserState()

  if (requiresAuth && !isAutenticated) next({ name: 'login' })
  else if (requiresUnauth && isAutenticated) next({ name: 'admin' })
  else next()
})

export default router
