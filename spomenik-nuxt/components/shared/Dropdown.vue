<template>
  <div class="dropdown relative">
    <button
      class="dropdown__btn btn is-primary is-icon"
      :class="btnClasses"
      v-if="!isOpen"
      @click="toggleIsOpen(true)">
      <font-awesome-icon :icon="btnIcon" />
    </button>
    <button
      class="dropdown__btn-create btn is-primary is-icon mr-0 ml-auto"
      :class="btnClasses"
      v-if="isOpen"
      @click="toggleIsOpen(false)">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </button>
    <transition name="slide-down">
      <menu
        class="dropdown__menu absolute right-0 top-full min-w-max z-50 
        bg-black border-b-2 border-r-2 border-blue-custom-400 pt-4"
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
    btnIcon: {
      default: null,
      type: [String, Array],
    },
    btnClasses: {
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