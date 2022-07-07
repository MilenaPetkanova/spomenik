export default function ({ $axios }, inject) {
  
  const imagessUrl = `${$axios.defaults.baseURL}/images`;

  const galleryService = {
    async getAll() {
      return await $axios.$get(imagessUrl)
    },
    async create(newRecord) {
      await $axios.$post(imagessUrl, newRecord)
    },
  }

  inject('galleryService', galleryService)
}