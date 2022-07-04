<template>
	<Modal 
		class="letter-create-s1"
		v-show="shownModal === modalsEnum.LetterCreateStep1" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
					<Button
						class="is-tertiary is-icon"
						icon="xmark"
						@click.native="showModal(null)">
					</Button>
					<h1>Добавяне на писмо</h1>
				</span>
				<Button
					class="is-tertiary is-icon"
					icon="arrow-right-long"
					@click.native="createLetter">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="container py-8">
        <vue-editor v-model="content" :editorToolbar="editorToolbar" />
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      content: '',
      editorToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
    }
  },
  computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
    ...mapActions('modals', ['showModal']),
    ...mapActions('letters', ['initLetters', 'setShownLetter']),
    async fetchLetters() {
      try {
        const letters = await this.$lettersService.getAll()
        this.initLetters(letters)
      } catch (error) {
        console.error(error)
      }
    },
		async createLetter() {
      try {
				const newLetter = {
					content: this.content,
				}
				await this.$lettersService.create(newLetter)
        this.fetchLetters()
        newLetter.createdAt = this.$moment()
        this.setShownLetter(newLetter)
        this.showModal(this.modalsEnum.LetterCreateStep2)
      } catch (error) {
        console.error(error)
      }
    }
	}
}
</script>
