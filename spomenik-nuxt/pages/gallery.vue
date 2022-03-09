<template>
  <div class="page is-gallery">
    <div class="page__conatiner container py-8">
      <section class="flex justify-end">
        <button class="btn" @click="showModal = true">Добавете</button>
    		<Modal v-show="showModal" @close-modal="showModal = false" >
          <GalleryUpload @close-modal="showModal = false" />
        </Modal>
      </section>
      
      <GalleryList />
    </div>
  </div>
</template>

<script>
export default{
  name: 'GalleryPage',
  head() {
    return {
      title: 'Gallery',
    };
  },
  data() {
		return {
			showModal: false,
		}
	},
}
</script>
