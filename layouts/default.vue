<template>
  <div>
    <v-app class="mx-auto" style="background-color: white;">
      <nuxt />
      <transition name="fade">
        <div class="nav-overlay" v-show="drawer">
          <v-container class="full-height" style="max-width: 1024px;">
            <v-toolbar
              color="transparent"
              class="px-0"
              elevation="0"
              max-height="128"
            >
              <v-spacer></v-spacer>
              <button
                :class="{ 'is-active': drawer }"
                class="hamburger hamburger--squeeze"
                type="button"
                @click="toggleMenu()"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </v-toolbar>
          </v-container>
        </div>
      </transition>
    </v-app>
  </div>
</template>
<style lang="scss" scoped>
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.87);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      drawer: 'menu/drawer'
    })
  },
  methods: {
    toggleMenu() {
      this.$store.commit('menu/TOGGLE_DRAWER', !this.drawer)
    }
  }
}
</script>
