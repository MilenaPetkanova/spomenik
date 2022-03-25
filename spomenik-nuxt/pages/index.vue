<template>
  <div class="page is-index">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: 'redirect',
  transition: 'page-transition',
  head() {
    return {
      title: 'Homepage Title',
    };
  },
})
</script>
