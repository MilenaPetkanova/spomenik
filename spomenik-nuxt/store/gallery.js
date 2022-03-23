export const state = () => ({
  gallery: [],
  newRecordSrc: null,
  newRecord: {},
})
  
export const mutations = {
  initGallery(state, gallery) {
    state.gallery = gallery
  },
  startNewRecord(state, src) {
    state.newRecordSrc = src
  },
  updateNewRecord(state, item) {
    state.newRecord = item
    state.newRecord.src = state.newRecordSrc
  },
}

export const actions = {
  initGallery({ commit }, gallery) {
    gallery.forEach(item => {
      item.thumb = item.src
    })
    commit('initGallery', gallery);
  },
  startNewRecord({ commit }, src) {
    commit('startNewRecord', src);
  },
  updateNewRecord({ commit }, item) {
    commit('updateNewRecord', item);
  },
}

export const getters = {
  gallery: (state) => {
    return state.gallery
  },
  newRecordSrc: (state) => {
    return state.newRecordSrc
  },
  newRecord: (state) => {
    return state.newRecord
  },
}