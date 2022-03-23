<template>
	<Modal 
		class="gallery-create-s3"
		v-show="shownModal === modalsEnum.GalleryCreateStep3" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<Button
					class="is-tertiary is-icon"
					icon="xmark"
					v-on:click.native="showModal(null)">
				</Button>
				<span class="flex items-center">
					<Button
						class="is-tertiary is-icon"
						icon="share-nodes"
						v-on:click.native="showShareModal">
					</Button>
				</span>
			</div>
		</template>
		<template v-slot:body>
			<GalleryPost :post="newRecord" />
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed:{
    ...mapGetters('gallery', ['newRecord']),
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
	...mapActions('modals', ['showModal']),
		showShareModal() {
			this.showModal(this.modalsEnum.Share)
		}
	}
} 
</script>
