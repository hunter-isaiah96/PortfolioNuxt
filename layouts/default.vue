<template>
  <div>
    <v-app class="mx-auto">
      <v-container id="scrolling-techniques-6" class="pa-0 white" fluid>
        <v-app-bar class="px-md-6" elevation="0" app>
          <v-spacer></v-spacer>
          <a class="menu-button">
            <span class="mb-1"></span>
            <span class="mb-1"></span>
            <span></span>
          </a>
        </v-app-bar>
        <nuxt />
        <v-container class="grey lighten-5 d-flex align-center pa-0 full-height" fluid>
          <v-row justify="end">
            <v-col cols="2" v-for="(item, key) of navigation" :key="key">
              <h1 class="text-capitalize">{{key}}</h1>
              <v-list color="transparent">
                <v-list-item class="pa-0" v-for="(item, i) in item" :key="i">
                  <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
        <transition name="fade">
          <v-container class="d-flex align-center nav-overlay grey darken-4" v-if="drawer" fluid>
            <v-row justify="end">
              <v-col cols="2" v-for="(item, key) of navigation" :key="key">
                <h1 class="grey--text text-capitalize">{{key}}</h1>
                <v-list color="transparent">
                  <v-list-item class="pa-0" v-for="(item, i) in item" :key="i">
                    <v-list-item-title class="white--text darken-1">{{item.text}}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </transition>
      </v-container>
    </v-app>
  </div>
</template>
<style lang="scss" scoped>
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
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
import Header from '@/components/Header'
export default {
  data() {
    return {
      navigation: {
        general: [
          {
            text: 'Home',
            path: '#'
          },
          {
            text: 'About',
            path: '#'
          },
          {
            text: 'Blog',
            path: '#'
          },
          {
            text: 'Music',
            path: '#'
          }
        ],
        work: [
          {
            text: 'Code Projects',
            path: '#'
          },
          {
            text: 'UI/UX',
            path: '#'
          },
          {
            text: 'Graphic Design',
            path: '#'
          }
        ],
        social: [
          {
            text: 'Instagram',
            path: '#'
          },
          {
            text: 'Uplabs',
            path: '#'
          },
          {
            text: 'Github',
            path: '#'
          },
          {
            text: 'LinkedIn',
            path: '#'
          }
        ]
      }
    }
  },
  components: {
    Header
  },
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
