export const state = () => ({
  token: null,
  user: null,
  isLoggedIn: false,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
    if(user) {
      state.isLoggedIn = true
    } else {
      state.isLoggedIn = false
    }
  }
}

export const actions = {
  setToken({commit}, token) {
    commit('setToken', token)
  },
  setUser({commit}, user) {
    commit('setUser', user)
  }
}

export const getters = {
  getUser: (state) => {
    return state.user
  },
  getIsLoggedIn: (state) => {
    return state.isLoggedIn
  },
}