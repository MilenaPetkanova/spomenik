<template>
  <div class="dropdown relative">
    <Button
      class="dropdown__btn-open "
      :classes="`is-primary is-icon ${classes}`"
      :icon="icon"
      v-if="!isOpen"
      v-on:click.native="toggleIsOpen(true)">
    </Button>
    <Button
      class="dropdown__btn-close"
      :classes="`is-primary is-icon ${classes}`"
      icon="xmark"
      v-if="isOpen"
      v-on:click.native="toggleIsOpen(false)">
    </Button>
    <transition name="slide-down">
      <menu
        class="dropdown__menu absolute right-0 top-full min-w-max z-50 
        bg-black-custom-600 border-b-2 border-r-2 border-blue-custom-400 pt-4"
        v-if="isOpen">
        <slot name="list"></slot>
      </menu>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: null,
      type: [String, Array],
    },
    classes: {
      default: null,
      type: String,
    },
    menuClasses: {
      default: null,
      type: String,
    },
  },
  methods: {
    toggleIsOpen(state) {
      this.$emit("toggle-is-open", state);
    }
  }
}
</script>