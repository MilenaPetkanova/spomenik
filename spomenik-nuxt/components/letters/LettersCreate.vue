<template>
	<div class="letter-create h-full">
    <Button 
			classes="letter-create__btn is-secondary w-full h-full h-32 mb-12"
			v-on:click.native="showModal(modalsEnum.LetterCreateStep1)">
			<template v-slot:content>
				<font-awesome-icon icon="circle-plus" />
				<p class="btn--full__text text-xs">Добавете</p> 
			</template>
		</Button>
    <LettersCreateStep1 v-if="shownModal === modalsEnum.LetterCreateStep1" />
    <LettersCreateStep2 v-if="shownModal === modalsEnum.LetterCreateStep2" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed:{
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
    ...mapActions('modals', ['showModal']),
	}
}
</script>

<style lang="scss" scoped>
.letter-create {
  &__btn {
    max-width: 100%;
  }
}
</style>