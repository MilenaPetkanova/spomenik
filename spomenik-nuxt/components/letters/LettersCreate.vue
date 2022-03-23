<template>
	<div class="letter-create">
		<div class="letter-create__editor">
			<client-only>
				<vue-editor v-model="content" />
			</client-only>
		</div>
    <Button
      class="letter-create__cta flex justify-end py-8"
      label="Създайте" 
      v-on:click.native="createLetter">
    </Button>
	</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
			letters: [],
      content: '',
    }
  },
	methods: {
    ...mapActions('letters', ['initLetters']),
    async fetchLetters() {
      try {
        const letters = await this.$axios.$get('http://localhost:8000/letters')
        this.initLetters(letters)
      } catch (error) {
        console.error(error)
      }
    },
		async createLetter() {
      try {
        await this.$axios.$post('http://localhost:8000/letters', {
          content: this.content
        })
        this.fetchLetters()
        this.content = ''
      } catch (error) {
        console.error(error)
      }
    }
	}
}
</script>