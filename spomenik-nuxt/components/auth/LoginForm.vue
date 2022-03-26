<template>
  <form class="login-form" @submit.prevent="">
    <div class="login-form__group w-full mb-4">
      <input 
        class="login-form__input mb-2"
        type="email" 
        autocomplete="off"
        name="email" 
        placeholder="Имейл" 
        v-model="email" />
      <p 
        class="text-sm text-red-400" 
        v-if="validation.hasError('email')">
        {{ validation.firstError('email') }}
      </p>
    </div>
    <div class="login-form__group w-full mb-6">
      <input 
        class="login-form__input mb-2"
        type="password" 
        name="password" 
        placeholder="Парола"
        v-model="password" />
      <p 
        class="text-sm text-red-400" 
        v-if="validation.hasError('password')"
        v-html="validation.firstError('password')">
      </p>
      <Button
        class="is-link text-sm mr-0 ml-auto"
        label="Забравена парола?">
      </Button>
    </div>
    <Button
      class="login-form__btn"
      classes="is-primary"
      label="Вход"
      @click.native="login">
    </Button>
    <div 
      class="login-form__error mt-6 border-2 border-red-400 p-4"
      v-if="error">
      <p class="text-sm text-red-400" v-html="error"></p>
    </div>
    <div class="regoster-form__more-actions flex justify-end py-12">
      <Button
        class="is-link text-sm"
        label="Регистрация"
        @click.native="$router.push('/auth/register')">
      </Button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Validator } from 'simple-vue-validator'
import authService from '~/services/auth'
export default {
  data() {
    return {
			email: null,
      password: null,
      error: null,
    }
  },
  validators: {
    email: function (value) {
      return Validator.value(value).required().email()
    },  
    password: function (value) {
      return Validator.value(value).required()
    }
  },
  computed:{
    ...mapGetters('auth', [ 'user', 'isAuthenticated' ]) 
	},
	methods: {
    ...mapActions('auth', ['setTokens', 'setUser']),
    async login() {
      try {
        const response = await authService.login({
          email: this.email, 
          password: this.password, 
        })
        this.setTokens(response.data.tokens)
        this.setUser(response.data.user)
        this.$router.push('/gallery')
      } catch (error) {
        console.error(error);        
        this.error = error.response.data.error;
      }
    },
	}
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 280px;
  margin: 0 auto;
  &__btn {
    width: 100%;
    max-width: 100%;
  }
}
</style>