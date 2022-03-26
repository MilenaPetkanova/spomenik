<template>
	<section class="gallery-list py-2">
		<ul class="gallery-list__elements">
			<li class="gallery-list__element px-1 mb-2">
				<GalleryCreate />
			</li>
			<li 
			  class="gallery-list__element px-1 mb-2"
				v-for="(element, index) in gallery" :key="index"
			>
				<img
					class="gallery-list__thumb h-full object-cover"
					:src="element.thumb"
					@click="openGallery(index)"
				>
			</li>
		</ul>
		<ShareModal v-if="shownModal === modalsEnum.Share" postUrl="test" />
		<client-only v-if="isLoaded">
			<light-box     
				class="gallery-list__lightbox"   
				ref="lightbox"
				:media="gallery"         
				:show-caption="true"
				:show-light-box="false" 
			/>
		</client-only>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
			index: null,
			isLoaded: false,
    }
  },
	computed:{
    ...mapGetters('gallery', ['gallery']),
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	async mounted() {
    await this.fetchGallery();
  },
	methods: {
		...mapActions('gallery', ['initGallery']),
		async fetchGallery() {
      try {
        const gallery = await this.$galleryService.getAll();
        this.initGallery(gallery)
				this.isLoaded = true
      } catch (error) {
        console.error(error)
      }
    },
		openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },
	}
}
</script>

<style scoped lang="scss">
.gallery-list {
	&__elements {
		display: flex;
		flex-wrap: wrap;
	}
  &__element {
		flex: 25%;
		max-width: 25%;
		@media screen and (max-width: 768px) {
			flex: 33.33%;
			max-width: 33.33%;
		}
  }
}
</style>