export default {
  create: ({ payload }) => HTTPClient.post('/users', payload),

  etUserState: () =>
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

  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  },

  loginWithEmailAndPassword: async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  },

  logoutUser: async () => {
    return await signOut(auth)
  }
}
