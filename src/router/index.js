import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/requerimento',
      name: 'create',
      component: () => import('../components/FormView.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../components/SuccessView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/AdminView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/LoginView.vue')
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   document.title = `${to.meta.title} | FireAuth`;

//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const requiresUnauth = to.matched.some(
//     (record) => record.meta.requiresUnauth
//   );

//   const isAutenticated = await getUserState();

//   if (requiresAuth && !isAutenticated) next({ name: "login" });
//   else if (requiresUnauth && isAutenticated) next({ name: "home" });
//   else next();
// });

export default router
