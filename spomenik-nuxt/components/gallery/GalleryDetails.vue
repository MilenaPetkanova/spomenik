<template>
	<div class="gallery-post h-full">
		<img 
			class="gallery-post__media"
			:src="post.src" 
			alt="media" /> 
		<div class="gallery-post__heading">
			<div class="container flex justify-between py-2 pr-1">
				<span class="flex">
					<div v-if="post.year" class="flex items-center mr-6">
						<font-awesome-icon icon="calendar" size="xs" />
						<p class="text-sm ml-2">{{post.year}}</p>
					</div>
					<div v-if="post.location" class="flex items-center mr-6">
						<font-awesome-icon icon="location-dot" size="xs" />
						<p class="text-sm ml-2">{{post.location}}</p>
					</div>
				</span>
			</div>
		</div>
		<div class="gallery-post__body">
			<div class="container py-2">
				<p class="text-sm text-left">{{post.caption}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			default: null,
			type: Object,
		}
	},
}
</script>

<style lang="scss" scoped>
.gallery-post {
	&__media {
		width: 100vw;
		max-height: 100vw;
	}
}
</style>
