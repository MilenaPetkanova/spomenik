export const state = () => ({
  gallery: [],
})
  
export const mutations = {
  initGallery(state, gallery) {
    state.gallery = gallery
  },
  addGallery(state, item) {
    state.gallery.push(item)
  },
  updateGallery(state, item) {
    const outdatedItem = state.gallery.find(i => i.id === item.id);
    Object.assign(outdatedItem, item);
  },
  removeGallery(state, itemId) {
    state.gallery = state.gallery.filter((item) => item.id !== itemId)
  },
}

export const actions = {
  initGallery({ commit }, gallery) {
    gallery.forEach(item => {
      item.thumb = item.src
    })
    commit('initGallery', gallery);
  },
  addGallery({ commit }, item) {
    commit('addGallery', item);
  },
  updateGallery({ commit }, item) {
    commit('updateGallery', item);
  },
  removeGallery({ commit }, itemId) {
    commit('removeGallery', itemId);
  },
}

export const getters = {
  getGallery: (state) => {
    return state.gallery
  },
}