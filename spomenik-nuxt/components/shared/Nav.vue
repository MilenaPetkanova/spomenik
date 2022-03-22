<template>
  <nav class="nav" :class="navClasses">
    <ul class="nav__list flex">
      <li
        class="nav__element mr-3" 
        v-for="(element, index) in navElements" 
        :key="index">
        <Button 
          class="nav__btn" 
          :classes="[currentRoute === element.route ? 'is-primary is-pill' : 'is-secondary is-pill']"
          :label="element.label"
          :icon="element.icon"
          v-on:click.native="redIrectTo(element.route)">
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navClasses: String,
  },
  data() {
    return {
      navElements: [
        {
          route: 'gallery',
          label: 'Галерия',
          icon: 'photo-film',
          type: 'primary',
        },
        {
          route: 'letters',
          label: 'Писма',
          icon: 'book',
          type: 'primary',
        },
      ],
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    redIrectTo(path) {
      this.$router.push({ path })
    }
  }
}
</script>