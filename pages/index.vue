<template>
  <div>
    <v-container
      :class="{ 'full-height': this.$vuetify.breakpoint.name !== 'xs' }"
      class="d-flex flex-column container-width"
      fluid
    >
      <v-toolbar class="toolbar px-0" elevation="0" max-height="128" height="128">
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
        :style="
          `padding-bottom: ${
            this.$vuetify.breakpoint.name === 'xs' ? '0' : '128px'
          };`
        "
        class="flex-grow-1"
        align="center"
        no-gutters
      >
        <v-col md="7" xs="12" class="mx-auto text-center">
          <v-avatar size="180" class="my-5">
            <v-img :src="require('../assets/me.jpg')"></v-img>
          </v-avatar>
          <h1 class="black--text display-3 font-weight-bold mb-2">Isaiah Hunter</h1>
          <h2 class="mt-12 font-weight-light grey--text text--darken-3">
            I'm a Graphic, UI/UX designer, and full-stack JavaScript developer
            with 6 years of experience working in freelance and startups. I hope
            to show you why I'd be great to work with.
          </h2>
        </v-col>
      </v-row>
    </v-container>
    <!-- <h1 class="text-center">Technologies & Software</h1> -->
    <v-container class="container-width">
      <v-row>
        <v-col class="pa-sm-10 pa-xs-0" cols="12" sm="6" v-for="i in 2" :key="i">
          <CardTile
            img-height="320"
            :image="
              require('../assets/krisztian-tabori-IyaNci0CyRk-unsplash.jpg')
            "
            title="How to choose a color palette for your new website"
            subtitle="A good color palette makes your website identifiable, let's see just how."
            :link="{ text: 'Read More', link: '#' }"
          ></CardTile>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="animated pa-sm-10 pa-xs-0"
          cols="12"
          sm="4"
          v-for="(skill, i) in skills"
          :key="i"
          animation="fadeInUp"
        >
          <CardTile
            img-height="450"
            :image="
              require('../assets/krisztian-tabori-IyaNci0CyRk-unsplash.jpg')
            "
            :title="skill.name"
            :subtitle="skill.description"
            :link="{ text: 'Read More', link: '#' }"
          ></CardTile>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col align-self="center" cols="7">
          <v-carousel
            height="400"
            hide-delimiters
            :show-arrows="false"
            interval="3000"
            cycle
            continuous
          >
            <v-carousel-item
              v-for="(testimonial, i) in testimonials"
              :key="i"
              reverse-transition="slide-y-transition"
              transition="slide-y-reverse-transition"
            >
              <v-row class="text-center">
                <v-col cols="12">
                  <v-avatar>
                    <v-img :src="testimonial.image"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="12">
                  <h2>{{ testimonial.testimony }}</h2>
                </v-col>
                <v-col cols="12">- {{ testimonial.name }}, Front-end dev at Gen.video</v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
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
</style>
<script>
import { mapGetters } from 'vuex'
import CardTile from '@/components/CardTile'
export default {
  components: {
    CardTile
  },
  data() {
    return {
      years: new Date().getFullYear() - 2014,
      menu_open: false,
      technologies: [
        require('../assets/svg/Angular-icon.svg'),
        require('../assets/svg/AngularJS-icon.svg'),
        require('../assets/svg/Nodejs-icon.svg'),
        require('../assets/svg/React-icon.svg'),
        require('../assets/svg/Vue-icon.svg'),
        require('../assets/svg/AffinityDesigner-icon.svg'),
        require('../assets/svg/Invision-icon.svg'),
        require('../assets/svg/Photoshop-icon.svg')
      ],
      skills: [
        {
          image: require('@/assets/graphic_design.jpg'),
          name: 'Beautiful Graphics',
          description:
            'Beautiful graphics go a long way to establish visual feedback without text.'
        },
        {
          image: require('@/assets/ui_ux.jpg'),
          name: 'Simple UI/UX',
          description:
            'I aim for simplicity in UI/UX, no need to over produce your design because everyone else is doing it. KISS!'
        },
        {
          image: require('@/assets/production_ready.jpg'),
          name: 'Production Ready Code',
          description:
            "Unit Testing, E2E testing, best practices, you name it, I treat every project as if it's my own."
        }
      ],
      testimonials: [
        {
          name: 'Andre Jordan',
          testimony:
            'An insatiable thirst for knowledge as a developer and in general. Willingness to share that knowledge to help those around you grow. Team player, ready to fill whatever roles need to be filled.',
          image: require('@/assets/andre-jordan.jpg')
        },
        {
          name: 'Haggai Weiser',
          testimony:
            'Isaiah is a talented full stack developer with an aptitude for figuring things out on the fly. Isaiah is passionate about best practices, gaining and sharing knowledge, and would be an asset to any teams culture.',
          image: require('@/assets/haggai.jpg')
        }
      ]
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
