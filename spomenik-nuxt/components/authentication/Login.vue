<template>
	<div class="login">
    <form name="login" @submit.prevent="login">
      <input 
        type="email" 
        name="email" 
        placeholder="email" 
        v-model="email" />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        v-model="password" />
      <p v-html="error"></p>
      <button 
        type="submit">Login</button>
      <p>{{getUser}}</p>
    </form>
	</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
			email: null,
      password: null,
      error: null,
    }
  },
  computed:{
    ...mapGetters('authentication', [ 'getUser' ]) 
	},
	methods: {
    ...mapActions('authentication', ['setToken', 'setUser']),
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email, 
          password: this.password, 
        })
        this.setToken(response.data.token)
        this.setUser(response.data.user)
      } catch (error) {
        console.error(error);        
        this.error = error.response.data.error;
      }
    }
	}
}
</script>