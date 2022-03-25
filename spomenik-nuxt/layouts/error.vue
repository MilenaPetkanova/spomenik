<template>
  <div class="page is-error">
    <div class="page__conatiner container py-8">
      <p 
        class="text-red-400 text-center" 
        v-if="error.statusCode === 404">
        Page not found
      </p>
      <p 
        class="text-red-400 text-center" 
        v-else>
        An error occurred
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'auth'
}
</script>