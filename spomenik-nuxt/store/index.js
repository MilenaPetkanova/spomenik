export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }) {

    const cookie = this.$cookies.get('authentication');
    if (cookie) {
      commit('authentication/setTokens', cookie.authentication);
    }

    if (state.authentication.accessToken) {
      try {
        // TODO:
        // await dispatch('authentication/refresh')
      } catch (e) {
        await dispatch('authentication/logout')
      }
    }
  },
}