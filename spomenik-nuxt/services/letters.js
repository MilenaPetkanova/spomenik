export default function ({ $axios }, inject) {

  const lettersUrl = `${$axios.defaults.baseURL}/letters`;
  
  const lettersService = {
    async getAll() {
      return await $axios.$get(lettersUrl)
    },
    async create(newRecord) {
      await $axios.$post(lettersUrl, newRecord)
    },
    async update(letterId, letterValue) {
      await $axios.$put(`${lettersUrl}/${letterId}`, letterValue)
    },
    async delete(letterId) {
      await $axios.$delete(`${lettersUrl}/${letterId}`)
    },
  }

  inject('lettersService', lettersService)
}