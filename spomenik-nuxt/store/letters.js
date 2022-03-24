export const state = () => ({
  letters: [],
  shownLetter: {},
})
  
export const mutations = {
  initLetters(state, letters) {
    state.letters = letters
  },
  setShownLetter(state, letter) {
    state.shownLetter = letter
  },
  updateLetter(state, letter) {
    const outdatedLetter = state.letters.find(l => l.id === letter.id)
    Object.assign(outdatedLetter, letter)
  },
  removeLetter(state, letterId) {
    state.letters = state.letters.filter((letter) => letter.id !== letterId)
  },
}

export const actions = {
  initLetters({ commit }, letters) {
    commit('initLetters', letters)
  },
  setShownLetter({ commit }, letter) {
    commit('setShownLetter', letter)
  },
  updateLetter({ commit }, letter) {
    commit('updateLetter', letter)
  },
  removeLetter({ commit }, letterId) {
    commit('removeLetter', letterId)
  },
}

export const getters = {
  letters: (state) => {
    return state.letters
  },
  shownLetter: (state) => {
    return state.shownLetter
  },
}