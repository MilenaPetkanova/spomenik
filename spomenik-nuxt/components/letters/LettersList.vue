<template>
  <section class="letters-list">
    <ul class="letters-list__elements">
      <li 
        class="letters-list__element relative mb-12" 
        v-for="letter in letters" :key="letter.id" 
        @mouseover="hoveredId = letter.id" 
        @mouseout="hoveredId = null"
      >
        <div class="letters-list__date mb-4">
          <p>{{ $moment(letter.created_on).format('LL') }}</p>
        </div>
        <div 
          class="letters-list__cta absolute top-0 right-0" 
          v-if="editedId !== letter.id" 
          v-show="hoveredId === letter.id"
        >
          <button class="mr-4" @click="startUpdating(letter.id)">
            <font-awesome-icon icon="pen" />
          </button>
          <button @click="deleteLetter(letter.id)">
            <font-awesome-icon icon="trash-can" />
          </button>
        </div>
        <div class="letters-list__content">
          <div v-if="editedId !== letter.id" v-html="letter.content"></div>
          <LettersUpdate v-else :letter="letter" @updated="finishUpdating" />
        </div>
      </li>
    </ul>
    <ShareModal v-if="shownModal === modalsEnum.Share" postUrl="test" />
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      hoveredId: null,
      editedId: null,
    }
  },
  computed:{
    ...mapGetters('letters', ['letters']),
    ...mapGetters('modals', ['shownModal', 'modalsEnum']),
  },
  async mounted() {
    await this.fetchLetters();
  },
	methods: {
    ...mapActions('letters', ['initLetters', 'removeLetter']),
		async fetchLetters() {
      try {
        const letters = await this.$axios.$get('http://localhost:8000/letters')
        this.initLetters(letters)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteLetter(letterId) {
      try {
        await this.$axios.$delete(`http://localhost:8000/letters/${letterId}`)
        this.removeLetter(letterId);
      } catch (error) {
        console.error(error)
      }
    },
    startUpdating(letterId) {
      this.editedId = letterId
    },
    finishUpdating() {
      this.editedId = null
    }
	}
}
</script>
