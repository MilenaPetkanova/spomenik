export const state = () => ({
  letters: [],
})
  
export const mutations = {
  initLetters(state, letters) {
    state.letters = letters
  },
  addLetter(state, letter) {
    state.products.push(letter)
  },
  updateLetter(state, letter) {
    const outdatedLetter = state.letters.find(l => l.id === letter.id);
    Object.assign(outdatedLetter, letter);
  },
  removeLetter(state, letterId) {
    state.letters = state.letters.filter((letter) => letter.id !== letterId)
  },
}

export const actions = {
  initLetters({ commit }, letters) {
    commit('initLetters', letters);
  },
  addLetter({ commit }, letter) {
    commit('addLetter', letter);
  },
  updateLetter({ commit }, letter) {
    commit('updateLetter', letter);
  },
  removeLetter({ commit }, letterId) {
    commit('removeLetter', letterId);
  },
}

export const getters = {
  getLetters: (state) => {
    return state.letters
  },
}