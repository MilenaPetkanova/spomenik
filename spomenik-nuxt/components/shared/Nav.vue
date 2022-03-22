<template>
  <nav class="nav" :class="navClasses">
    <ul class="nav__list flex">
      <li
        class="nav__element mr-3" 
        v-for="(element, index) in navElements" 
        :key="index">
        <button 
          class="nav__btn btn is-pill" 
          :class="[currentRoute === element.route ? 'is-primary' : 'is-secondary']"
          @click="redIrectTo(element.route)"
        >
          <font-awesome-icon :icon="element.icon" />
          <span class="ml-2">{{element.label}}</span>
        </button>
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
          icon: ['fas', 'photo-film'],
          type: 'primary',
        },
        {
          route: 'letters',
          label: 'Писма',
          icon: ['fas', 'book'],
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