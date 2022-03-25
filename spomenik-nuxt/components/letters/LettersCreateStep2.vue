<template>
	<Modal 
		class="letter-create-s2"
		v-show="shownModal === modalsEnum.LetterCreateStep2" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<Button
					class="is-tertiary is-icon"
					icon="xmark"
					@click.native="showModal(null)">
				</Button>
				<span class="flex items-center">
					<Button
						class="is-tertiary is-icon"
						icon="share-nodes"
						@click.native="showModal(modalsEnum.Share)">
					</Button>
				</span>
			</div>
		</template>
		<template v-slot:body>
			<LettersDetails />
		</template>
	</Modal>
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
