
export default function ({ $axios }, inject) {
  
  const galleryService = {
    async getAll() {
      return await $axios.$get('http://localhost:8000/gallery')
    },
    async create(newRecord) {
      await $axios.$post('http://localhost:8000/gallery', newRecord)
    },
  }

  inject('galleryService', galleryService)
}