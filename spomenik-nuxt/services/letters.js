
export default function ({ $axios }, inject) {
  
  const lettersService = {
    async getAll() {
      return await $axios.$get('http://localhost:8000/letters')
    },
    async create(newRecord) {
      await $axios.$post('http://localhost:8000/letters', newRecord)
    },
    async update(letterId, letterValue) {
      await $axios.$put(`http://localhost:8000/letters/${letterId}`, letterValue)
    },
    async delete(letterId) {
      await $axios.$delete(`http://localhost:8000/letters/${letterId}`)
    },
  }

  inject('lettersService', lettersService)
}