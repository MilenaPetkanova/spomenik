<template>
	<section class="gallery-list py-8">
		<ul class="gallery-list__images">
			<li 
			  class="gallery-list__image"
				v-for="(image, index) in getGallery" :key="index"
			>
				<img
					class="gallery-list__image"
					:src="image.thumb"
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
  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    grid-gap: 2rem;
  }
}
</style>