import Modals from '../constants/enums';

export const state = () => ({
  shownModal: null,
})
  
export const mutations = {
  showModal(state, modal) {
    state.shownModal = modal
  },
}

export const actions = {
  showModal({ commit }, modal) {
    commit('showModal', modal);
  },
}

export const getters = {
  shownModal: (state) => {
    return state.shownModal
  },
  modalsEnum() {
    return Modals
  },
}