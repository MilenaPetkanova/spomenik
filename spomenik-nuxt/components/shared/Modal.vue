<template>
  <div 
		class="modal w-full h-full fixed top-0 left-0 flex justify-center" 
		@click="$emit('close-modal')">
    <div 
			class="modal__window w-full h-full bg-black text-center" 
			@click.stop>
			<header class="modal__header border-b border-blue-custom-400 py-4">
				<slot name="header"></slot>
			</header>
			<section class="modal__body">
				<slot name="body"></slot>
			</section>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		headerClasses: {
			default: '',
			type: [String, Array],
		}
	},
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: #000000da;
}
</style>