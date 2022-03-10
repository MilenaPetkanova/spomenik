<template>
	<div class="register">
    <!-- <form autocomplete="off"> -->
      <input 
        type="email" 
        name="email" 
        placeholder="email" 
        v-model="email" />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        autocomplete="new-password" 
        v-model="password" v-cloak/>
      <button
        @click="register">Register</button>
    <!-- </form> -->
	</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
			email: null,
      password: null,
    }
  },
	methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email, 
        password: this.password, 
      })
    }
	}
}
</script>