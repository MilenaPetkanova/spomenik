<template>
  <v-navigation-drawer
    floating
    permanent
    fixed
    class="background">
    <v-list class="d-flex flex-column justify-center" height="100%">
      <v-list-item class="primary--btn"
        v-for="item in items"
        :key="item.title"
        link>
        <v-list-item-icon>
          <v-icon class="primary--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'вкъщи', icon: 'home' },
          { title: 'писания', icon: 'library_books' },
          { title: 'медия', icon: 'collections' },
          { title: 'писма', icon: 'mail_outline' },
        ],
      }
    },
  }
</script>
