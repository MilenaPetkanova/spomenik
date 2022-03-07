<template>
  <nav class="nav">
    <ul class="flex">
      <li 
        class="nav__element font-semibold ml-8" 
        v-for="(element, index) in navElements" 
        :key="index"
      >
        <NuxtLink :to="element.route">
          {{element.label}}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  data() {
    return {
      navElements: [
        {
          route: '/letters',
          label: 'Писма'
        },
        {
          route: '/mail',
          label: 'Поща'
        },
        {
          route: '/gallery',
          label: 'Галерия'
        },
      ]
    }
  }
}
</script>
