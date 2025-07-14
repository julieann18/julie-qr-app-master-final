export const state = () => ({
  user: null,
  isAuthenticated: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    state.isAuthenticated = !!user
  },
  clearUser(state) {
    state.user = null
    state.isAuthenticated = false
  }
}

export const actions = {
  login({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    commit('clearUser')
  }
}

export const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isAuthenticated
}
