<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../../services'

const router = useRouter()

const { loggedIn } = auth.useAuthState()

const loading = ref(false)

const logout = async () => {
  loading.value = true
  try {
    await auth.logoutUser()
    router.replace({ name: 'home' })
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown" v-if="loggedIn">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
        >
          <li><a>Settings</a></li>
          <li><RouterLink :to="{ name: 'admin' }">Admin</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <RouterLink
        :to="{ name: 'home' }"
        class="btn btn-ghost normal-case text-xl"
        >Farmácia UFRJ</RouterLink
      >
    </div>
    <div class="navbar-end">
      <!-- login -->
      <RouterLink
        :to="{ name: 'login' }"
        v-if="!loggedIn"
        class="btn btn-ghost btn-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </RouterLink>
      <!-- Logout -->
      <button
        v-else
        class="btn btn-ghost btn-circle"
        @click="logout"
        :class="loading && 'loading'"
      >
        <div class="indicator" v-if="!loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>
