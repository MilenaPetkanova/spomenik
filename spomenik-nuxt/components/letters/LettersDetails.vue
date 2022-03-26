<template>
	<div class="letter-post h-full">
		<div class="letter-post__heading">
			<div class="container flex justify-between py-4">
				<span class="flex">
					<div v-if="shownLetter.created_on" class="flex items-center mr-6">
						<font-awesome-icon icon="calendar" size="xs" />
						<p class="text-sm ml-2">{{ $moment(shownLetter.created_on).format('LL') }}</p>
					</div>
				</span>
			</div>
		</div>
		<div class="letter-post__body">
			<div class="container py-2">
				<div class="letter-post__content text-left" v-html="shownLetter.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed:{
		...mapGetters('letters', ['shownLetter']),
	},
}
</script>
