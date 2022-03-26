<template>
	<div class="letter-create">
		<div class="letter-create__editor">
			<client-only>
				<vue-editor v-model="letterValue.content" :editorToolbar="editorToolbar" />
			</client-only>
		</div>
		<div class="letter-create__cta flex justify-end py-4">
			<Button
        class="is-primary"
        label="Запазете промените" 
        @click.native="update">
      </Button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ['letter'],
  data() {
    return {
      letterValue: {},
      editorToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
    }
  },
  mounted() {
    this.letterValue = Object.assign({}, this.letter)
  },
  methods: {
    ...mapActions('letters', ['updateLetter']),
    async update() {
      try {
        await this.$lettersService.update(this.letterValue.id, this.letterValue)
        this.updateLetter(this.letterValue);
        this.$emit('updated', true)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>