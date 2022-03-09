<template>
  <div class="gallery-upload w-full h-full">
		<h1 clas="gallery-upload__title">Добавяне на нова снимка</h1>
		<div 
			class="gallery-upload__state-one h-full flex flex-col justify-center items-center"
			v-if="imageSrc === null"
		>
			<label class="gallery-upload__file-input-clickable cursor-pointer">
				<input
					class="gallery-upload__file-input"
					type="file"
					accept=".jpeg,.jpg,.png,image/jpeg,image/png"
					aria-label="upload image button"
					@change="selectFile"
				/>
				Изберете снимка
			</label>
		</div>
		<div
			class="gallery-upload__state-two h-full flex flex-col justify-center items-center" 
			v-else
		>
			<div
				class="gallery-upload__image-preview"
				:style="{ 'background-image': `url(${imageSrc})` }">
	    </div>
			<input 
				class="gallery-upload__text-input"
				type="text" 
				v-model="caption"
			/>
			<button
				class="gallery-upload__submit"
				@click="createGalleryRecord"
			>
				Създайте
			</button>
		</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	data() {
		return {
			imageSrc: null,
			caption: '',
		}
	},
	methods: {
		...mapActions('gallery', ['initGallery']),
		async selectFile(e) {
      const file = e.target.files[0];

      if (!file) return;

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
				this.imageSrc = result.secure_url
			})
    },
		async createGalleryRecord() {
			await this.$axios.$post('http://localhost:8000/gallery', {
			  src: this.imageSrc,
				caption: this.caption
			})
			const gallery = await this.$axios.$get('http://localhost:8000/gallery')
			this.initGallery(gallery)
			this.$emit('close-modal')
		}
	}
} 
</script>

<style scoped lang="scss">
.gallery-upload {
	&__title {
		padding: 15px 0;
	} 
	&__image-preview {
		width: 250px;
		height: 250px;
		display: block;
		cursor: pointer;
		margin: 0 auto 30px;
		background-size: cover;
		background-position: center center;
	}
	&__file-input-clickable {
		border: 1px solid #ccc;
		background: #ccc;
		display: inline-block;
		padding: 6px 12px;
	}
	&__file-input {
    display: none;
	}
}
</style>
