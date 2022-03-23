<template>
	<Modal 
		class="gallery-create-s2"
		v-show="shownModal === modalsEnum.GalleryCreateStep2" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<span class="flex items-center">
					<Button
						class="is-tertiary is-icon"
						icon="xmark"
						v-on:click.native="showModal(null)">
					</Button>
					<h1>Добавяне на снимка / видео</h1>
				</span>
				<Button
					class="is-tertiary is-icon"
					icon="check"
					v-on:click.native="createGalleryRecord(3)">
				</Button>
			</div>
		</template>
		<template v-slot:body>
			<div class="row flex px-4 py-8">
				<img class="w-32 h-32 object-cover" :src="newRecordSrc" alt="image-preview" /> 
				<div class="flex flex-col pl-4">
					<label for="year">Година</label>
					<input 
						class="w-full mb-4"
						type="text" 
						name="year"
						v-model="year"
					/>
					<label for="location">Локация</label>
					<input 
						class="w-full"
						type="text" 
						name="location"
						v-model="location"
					/>
				</div>
			</div>
			<div class="row px-4">
				<!-- <label for="caption">История към снимка</label> -->
				<textarea 
					class="w-full"
					type="text" 
					name="caption"
					placeholder="Напишете нещо..."
					v-model="caption"
				/>
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			year: null,
			location: null,
			caption: null,
		}
	},
	computed:{
    ...mapGetters('gallery', ['newRecordSrc']),
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
		...mapActions('gallery', ['initGallery', 'updateNewRecord']),
		...mapActions('modals', ['showModal']),
		async createGalleryRecord() {
			// const newRecord = {
			// 	year: this.year,
			// 	location: this.location,
			// 	caption: this.caption,
			// }
			// this.updateNewRecord(newRecord);
			// await this.$axios.$post('http://localhost:8000/gallery', newRecord)
			// const gallery = await this.$axios.$get('http://localhost:8000/gallery')
			// this.initGallery(gallery)
			this.showModal(this.modalsEnum.GalleryCreateStep3)
		}
	}
} 
</script>
