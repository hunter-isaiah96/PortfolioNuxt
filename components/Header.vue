<template>
  <v-container class="header mb-4">
    <v-row align="center">
      <v-col cols="auto">
        <v-btn class="ma-2" text icon @click="toggleDrawer" x-large>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <router-link to="/">
          <img class="logo" src="@/assets/logo.svg" height="100" />
        </router-link>
      </v-col>
      <v-col cols="auto">
        <div class="social">
          <a href="https://www.uplabs.com/rhynoartworks" target="_blank" title="Uplab">
            <img src="@/assets/uplabs.svg" />
          </a>
          <a href="https://www.instagram.com/rhynoartworks/" target="_blank" title="Instagram">
            <img src="@/assets/instagram-icon.svg" />
          </a>
          <a href="https://github.com/hunter-isaiah96" target="_blank" title="Github">
            <img src="@/assets/github-icon.svg" />
          </a>
          <a href="mailto:hunter.isaiah96@gmail.com" target="_blank" title="Email">
            <img src="@/assets/email-icon.svg" />
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.dispatch('menu/toggleDrawer', !this.$store.state.menu.drawer)
    }
  }
}
</script>

<style lang="scss">
.header {
  .logo {
    width: 220px;
    margin-bottom: 25px;
  }
  .social img {
    width: 20px;
    margin-right: 30px;
  }
}
</style>
