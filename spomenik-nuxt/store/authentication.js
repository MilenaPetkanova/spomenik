export const state = () => ({
  accessToken: null,
  refreshToken: null,
  user: null,
})

export const mutations = {
  setTokens(state, { accessToken, refreshToken = null }) {
    state.accessToken = accessToken
    if (refreshToken) {
      state.refreshToken = refreshToken
    }
  },
  setUser(state, user) {
    state.user = user
  },
  logout(state) {
    state.accessToken = null
    state.refreshToken = null
    state.user = null
  }
}

export const actions = {
  setTokens({commit}, tokens) {
    commit('setTokens', tokens)
  },
  setUser({commit}, user) {
    commit('setUser', user)
  }
}

export const getters = {
  user: (state) => {
    return state.user
  },
  isAuthenticated: (state) => {
    console.log('state.accessToken :>> ', state.accessToken);
    return !!state.accessToken
  },
  
}