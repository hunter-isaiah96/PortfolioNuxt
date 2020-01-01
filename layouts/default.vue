<template>
  <div>
    <v-app style="background-color: #212735;">
      <v-content>
        <Header></Header>
        <v-container style="max-width: 1500px">
          <!-- <transition name="slide-x-fade" mode="out-in"> -->
          <nuxt />
          <!-- </transition> -->
        </v-container>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list-item-group v-model="group">
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-navigation-drawer>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      items: [
        { title: 'Home', to: '/' },
        { title: 'Dev', to: '/dev' },
        { title: 'Design', to: '/design' }
      ]
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.menu.drawer
      },
      set(value) {
        this.$store.dispatch('menu/toggleDrawer', value)
      }
    },
    group: {
      get() {
        return this.items.findIndex(item => item.to === this.$route.path)
      },
      set(value) {
        this.$store.dispatch('menu/toggleDrawer', false)
        return value
      }
    }
  }
}
</script>