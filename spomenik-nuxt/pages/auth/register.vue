<template>
  <div class="page is-register">
    <div class="page__conatiner container py-8">
      <RegisterForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterPage',
  layout: 'auth',
  head() {
    return {
      title: 'Register',
    };
  },
})
</script>
