<template>
	<Modal 
		class="gallery-create-s1"
		v-show="shownModal === modalsEnum.GalleryCreateStep1" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
					<Button
						class="is-tertiary is-icon"
						icon="xmark"
						@click.native="showModal(null)">
					</Button>
					<h1>Добавяне на снимка / видео</h1>
				</span>
				<Button
					v-if="newRecordSrc"
					class="is-tertiary is-icon"
					icon="arrow-right-long"
					@click.native="showModal(modalsEnum.GalleryCreateStep2)">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="h-full flex flex-col items-center">
				<template v-if="!newRecordSrc">
					<font-awesome-icon
						class="mt-12 mb-8" 
						icon="photo-film" 
						size="4x" />
					<label class="btn is-primary text-base">
						<input
							class="hidden"
							type="file"
							accept=".jpeg,.jpg,.png,image/jpeg,image/png"
							aria-label="upload image button"
							@change="selectFile"
						/>
						Изберете от устройството си
					</label>
				</template>
				<!-- TODO: Add loader -->
				<template v-else>
					<img :src="newRecordSrc" alt="image-preview" /> 
				</template>
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed:{
    ...mapGetters('gallery', ['newRecordSrc']),
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
		...mapActions('gallery', ['startNewRecord']),
		...mapActions('modals', ['showModal']),
		async selectFile(e) {
      const file = e.target.files[0];
      if (!file) {
				return
			}
      const readData = (f) =>  new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
      });
      const data = await readData(file);
      this.$cloudinary.upload(data, {
        folder: 'spomenik',
        uploadPreset: 'vyokv4nd',
      }).then(result => {
				this.startNewRecord(result.secure_url)
			})
    },
	}
} 
</script>

<style scoped>
img {
	width: 100vw;
	max-height: 100vw;
}
</style>
