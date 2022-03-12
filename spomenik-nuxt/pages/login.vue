<template>
  <div class="page is-login">
    <div class="page__conatiner container py-8">
      <Login />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  head() {
    return {
      title: 'Login',
    };
  },
})
</script>
