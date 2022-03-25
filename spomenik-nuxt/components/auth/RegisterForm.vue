<template>
  <form class="register-form" @submit.prevent="">
    <div class="register-form__group w-full mb-4">
      <input 
        class="register-form__input mb-2"
        type="name" 
        name="name" 
        placeholder="Име" 
        v-model="name" />
      <p 
        class="text-sm text-red-400" 
        v-if="validation.hasError('name')">
        {{ validation.firstError('name') }}
      </p>
    </div>
    <div class="register-form__group w-full mb-4">
      <input 
        class="register-form__input mb-2"
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
    <div class="register-form__group w-full mb-6">
      <input 
        class="register-form__input mb-2"
        type="password" 
        name="password" 
        placeholder="Парола"
        v-model="password" />
      <p 
        class="text-sm text-red-400" 
        v-if="validation.hasError('password')"
        v-html="validation.firstError('password')">
      </p>
    </div>
    <Button
      class="register-form__btn"
      classes="is-primary"
      label="Регистрация"
      @click.native="register">
    </Button>
    <div 
      class="register-form__error mt-6 border-2 border-red-400 p-4"
      v-if="error">
      <p class="text-sm text-red-400" v-html="error"></p>
    </div>
    <div class="regoster-form__more-actions flex justify-end py-12">
      <Button
        class="is-link"
        label="Вход"
        @click.native="navigateTo('/auth/login')">
      </Button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Validator } from 'simple-vue-validator'
import authService from '~/services/auth.service'
export default {
  data() {
    return {
      name: '',
			email: '',
      password: '',
      error: null,
    }
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required()
    },
    email: function (value) {
      return Validator.value(value).required().email()
    },  
    password: function (value) {
      return Validator.value(value).required().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$'),
        `The password provided failed to match the following rules: <br>
        1. It must contain ONLY the following characters: lower case, upper case, numerics. <br>
        2. It must be at least 8 characters in length and not greater than 32 characters in length.`
      )
    }
  },
	methods: {
    ...mapActions('auth', ['setTokens', 'setUser']),
    async register() {
      try {
        const response = await authService.register({
          email: this.email, 
          password: this.password, 
          name: this.name, 
        })
        this.setTokens(response.data.tokens)
        this.setUser(response.data.user)
        this.$router.push('/gallery')
      } catch (error) {
        console.error(error);        
        this.error = error.response.data.error;
      }
    },
    navigateTo(path) {
      this.$router.push({path})
    },
	}
}
</script>

<style lang="scss" scoped>
.register-form {
  max-width: 280px;
  margin: 0 auto;
  &__btn {
    width: 100%;
    max-width: 100%;
  }
}
</style>