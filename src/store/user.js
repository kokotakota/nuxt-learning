export default {
  state: () => ({
    authenticated: false,
    id: '',
    name: ''
  }),

  mutations: {
    setUser (state, { id, name }) {
      state.authenticated = true
      state.id = id
      state.name = name
    },
    clearUser (state) {
      state.authenticated = false
      state.userId = ''
      state.userName = ''
    }
  },

  actions: {
    async signIn ({ commit }, { id, password }) {
      // ログイン処理・・・
      await new Promise(resolve => setTimeout(resolve, 500))
      commit('setUser', { id: '<ユーザーID>', name: '<ユーザー名>' })
    },
    async signOut ({ commit }) {
      // ログアウト処理・・・
      await new Promise(resolve => setTimeout(resolve, 500))
      commit('clearUser')
    }
  }
}
