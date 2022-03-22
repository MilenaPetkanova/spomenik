<template>
  <div class="page is-letters">
    <div class="page__conatiner container py-8">
      <LettersCreate />
      <LettersList />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LettersPage',
  transition: 'page-transition',
  head() {
    return {
      title: 'Letters',
    };
  },
}
</script>
