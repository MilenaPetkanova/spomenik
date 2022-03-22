<template>
	<section class="gallery-list py-8">
		<ul class="gallery-list__elements">
			<li class="gallery-list__element px-1 mb-2">
        <button class="btn" @click="showModal = true">Добавете</button>
    		<Modal v-show="showModal" @close-modal="showModal = false" >
          <GalleryUpload @close-modal="showModal = false" />
        </Modal>
			</li>
			<li 
			  class="gallery-list__element px-1 mb-2"
				v-for="(element, index) in getGallery" :key="index"
			>
				<img
					class="gallery-list__thumb h-full object-cover"
					:src="element.thumb"
					@click="openGallery(index)"
				>
			</li>
		</ul>
		<client-only v-if="isLoaded">
			<light-box     
				class="gallery-list__lightbox"   
				ref="lightbox"
				:media="getGallery"         
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
			showModal: false,
    }
  },
	computed:{
    ...mapGetters('gallery', [ 'getGallery', ]) 
	},
	async mounted() {
    await this.fetchGallery();
  },
	methods: {
		...mapActions('gallery', ['initGallery']),
		async fetchGallery() {
      try {
        const gallery = await this.$axios.$get('http://localhost:8000/gallery')
        this.initGallery(gallery)
				this.isLoaded = true
      } catch (error) {
        console.error(error)
      }
    },
		openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
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