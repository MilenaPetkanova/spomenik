<template>
	<div class="gallery-create h-full">
		<Button 
			classes="is-secondary w-full h-full"
			v-on:click.native="showModal(modalsEnum.GalleryCreateStep1)">
			<template v-slot:content>
				<font-awesome-icon icon="circle-plus" />
				<p class="btn--full__text text-xs">Добавете</p> 
			</template>
		</Button>
		<GalleryCreateStep1 v-if="shownModal === modalsEnum.GalleryCreateStep1" />
		<GalleryCreateStep2 v-if="shownModal === modalsEnum.GalleryCreateStep2" />
		<GalleryCreateStep3 v-if="shownModal === modalsEnum.GalleryCreateStep3" />
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
	},
}
</script>
