<template>
  <div>
    <v-container class="d-flex flex-column full-height text-center" fluid>
      <v-toolbar class="px-0" elevation="0" max-height="128">
        <v-toolbar-title>Isaiah Hunter</v-toolbar-title>
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
      <v-row
        style="padding-bottom: 128px;"
        class="flex-grow-1"
        align="center"
        no-gutters
      >
        <v-col md="7" xs="12" class="mx-auto">
          <v-avatar size="180" class="mb-12">
            <v-img :src="require('../assets/me.jpg')"></v-img>
          </v-avatar>
          <h1 class="black--text display-3 font-weight-bold mb-2">
            Isaiah Hunter
          </h1>
          <h1 class="mt-12 font-weight-light grey--text text--darken-3">
            I'm a Graphic, UI/UX developer, and full-stack JavaScript developer
            with 6 years of experience working in freelance and startups.
          </h1>
        </v-col>
      </v-row>
      <v-icon class="chev">mdi-chevron-down</v-icon>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          class="animated pa-sm-12 pa-xs-0"
          cols="12"
          sm="6"
          v-for="i in 2"
          :key="i"
          v-intersect="{
            handler: animate,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }"
          animation="fadeInUp"
        >
          <v-img
            :src="
              require('../assets/krisztian-tabori-IyaNci0CyRk-unsplash.jpg')
            "
            max-height="260px"
            min-height="260px"
          ></v-img>
          <h1 class="title mt-5">Design doesn't have to be difficult</h1>
          <h3 class="font-weight-regular grey--text text--darken-3 my-5">
            Stop approaching design as something that has to be difficult to be
            beautiful
          </h3>
          <h3 class="font-weight-regular font-weight-regular">
            <a href="#" class="underlined grey--text text--darken-3"
              >Read the article</a
            >
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.mouse {
  animation: mover 1s infinite;
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
.menu-button {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
}
.chev {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      years: new Date().getFullYear() - 2014,
      menu_open: false
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'menu/drawer'
    }),
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '3em'
        default:
          return '5em'
      }
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('menu/TOGGLE_DRAWER', !this.drawer)
    },
    animate(entries, observer, isIntersecting) {
      if (isIntersecting) {
        // console.log(entries[0].target.attributes.animation)
        entries[0].target.classList.add(
          entries[0].target.getAttribute('animation')
        )
      }
    }
  }
}
// import { createClient } from '~/plugins/contentful.js'
// const client = createClient()
// import image from '@/assets/me.jpg'
// export default {
//   components: {
//     DevDesign,
//     Podcast
//   },
//   data: () => ({
//     title: "Isaiah Hunter's Portfolio",
//     description: 'This is the portfolio of Isaiah Hunter',
//     type: 'projects'
//   }),
//   head() {
//     return {
//       title: "Isaiah Hunter's Portfolio",
//       meta: [
//         { hid: 'description', name: 'description', content: this.description },
//         {
//           hid: 'og:description',
//           name: 'og:description',
//           content: this.description
//         },
//         { hid: 'og:title', name: 'og:title', content: this.title },
//         {
//           hid: 'og:image',
//           name: 'og:image',
//           content: process.env.baseUrl + image.substring(1)
//         },
//         { hid: 'twitter:title', name: 'twitter:title', content: this.title },
//         {
//           hid: 'twitter:description',
//           name: 'twitter:description',
//           content: this.description
//         },
//         {
//           hid: 'twitter:image',
//           name: 'twitter:image',
//           content: process.env.baseUrl + image.substring(1)
//         }
//       ]
//     }
//   },
//   async asyncData({ error, req }) {
//     try {
//       const data = await client.getEntries({ limit: 15 })
//       return { posts: data.items }
//     } catch (e) {
//       console.log(e)
//       error({ statusCode: 404, message: 'There was a problem querying' })
//     }
//   }
// }
</script>
