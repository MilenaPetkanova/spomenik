<template>
	<div class="letter-create">
		<div class="letter-create__editor">
			<client-only>
				<vue-editor v-model="letterValue.content" />
			</client-only>
		</div>
		<div class="letter-create__cta flex justify-end py-8">
			<Button
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