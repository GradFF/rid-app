import { auth } from '../utils/firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
  getUserState: () =>
    new Promise((resolve, reject) => {
      onAuthStateChanged(auth, resolve, reject)
    }),

  useAuthState: () => {
    const user = ref(null)
    const error = ref(null)

    let unsubscribe
    onMounted(async () => {
      unsubscribe = onAuthStateChanged(
        auth,
        u => (user.value = u),
        e => (user.value = e)
      )
    })
    onUnmounted(() => unsubscribe())

    const loggedIn = computed(() => user.value != null)

    return { user, error, loggedIn }
  },

  // loginWithGoogle: async () => {
  //   const provider = new GoogleAuthProvider()
  //   return signInWithPopup(auth, provider)
  // },

  loginWithEmailAndPassword: async (email, password) =>
    signInWithEmailAndPassword(auth, email, password),

  logoutUser: async () => signOut(auth)
}
