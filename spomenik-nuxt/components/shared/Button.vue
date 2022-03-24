<template>
  <button class="btn" :class="classes">
    <font-awesome-icon
      class="btn__icon mr-2" 
      v-if="icon"
      :icon="icon" 
    />
    <span
      class="btn__label"
      v-if="!isIconType">
      {{label}}
    </span>
    <slot name="content"></slot>
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      default: '',
      type: [String, Array],
    },
    label: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: [String, Array],
    },
  },
  computed: {
    isIconType() {
      return this.classes.includes('is-icon')
    }
  }
}
</script>

<style lang="scss">
.btn {
  @apply block cursor-pointer max-w-max font-semibold py-3 px-4;

  .svg-inline--fa {
    @apply text-black;
  }

  &.is-primary {
    @apply bg-blue-custom-400 text-black;
  }

  &.is-secondary {
    @apply bg-black-custom-600 text-blue-custom-400 border-2 border-blue-custom-400;
    .svg-inline--fa {
      @apply text-blue-custom-400;
    }
  }

  &.is-tertiary {
    @apply bg-black-custom-600 text-blue-custom-400;
    .svg-inline--fa {
      @apply text-blue-custom-400;
    }
  }

  &.is-icon {
    @apply w-12 h-12;
  }

  &.is-pill {
    @apply rounded-4xl py-2 px-4;
  }
}
</style>