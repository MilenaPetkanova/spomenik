export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }) {

    const cookie = this.$cookies.get('auth');
    if (cookie) {
      commit('auth/setTokens', cookie.auth);
    }

    if (state.auth.accessToken) {
      try {
        // TODO:
        // await dispatch('auth/refresh')
      } catch (e) {
        await dispatch('auth/logout')
      }
    }
  },
}