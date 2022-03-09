<template>
  <div 
		class="modal w-full h-full fixed top-0 left-0 flex justify-center" 
		@click="$emit('close-modal')"
	>
    <div 
			class="modal__window bg-current rounded-md text-center" 
			@click.stop
		>
			<slot></slot>
    </div>
    <button 
			class="modal__close pointer" 
			@click="$emit('close-modal')"
		>
			X
		</button>
  </div>
</template>

<script>
  export default {
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: #000000da;
	&__window {
		height: 500px;
		width: 500px;
		margin-top: 10%;
	}
}
</style>