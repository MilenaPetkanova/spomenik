<template>
  <div class="page is-register">
    <div class="page__conatiner container py-8">
      <Register />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterPage',
  head() {
    return {
      title: 'Register',
    };
  },
})
</script>
