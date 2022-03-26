<template>
  <div class="page is-login">
    <div class="page__conatiner container py-8">
      <p class="text-red-400 text-center">Server error</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ErrorPage',
  layout: 'auth',
  head() {
    return {
      title: 'Error 500',
    };
  },
})
</script>
