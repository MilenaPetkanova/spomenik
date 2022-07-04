
export default function ({ $axios }, inject) {
  
  const galleryService = {
    async getAll() {
      return await $axios.$get('http://localhost:8000/images')
    },
    async create(newRecord) {
      await $axios.$post('http://localhost:8000/images', newRecord)
    },
  }

  inject('galleryService', galleryService)
}