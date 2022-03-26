<template>
  <div class="page is-login">
    <div class="page__conatiner container py-8">
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  layout: 'auth',
  head() {
    return {
      title: 'Login',
    };
  },
})
</script>
