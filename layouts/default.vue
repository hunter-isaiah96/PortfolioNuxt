<template>
  <div>
    <div class="cursor"></div>
    <v-app style="background-color: #111;">
      <v-container class="pa-0" fluid>
        <!-- <v-row class="navigation headline" color="transparent">
          <v-col cols="auto" class="mb-4">Intro</v-col>
          <v-col cols="auto" class="mb-4">Portfolio</v-col>
          <v-col cols="auto">Blog</v-col>
        </v-row>-->
        <v-row class="full-height" no-gutters>
          <v-col class="pr-6" cols="6">
            <v-row class="fill-height" align-content="center" justify="end">
              <v-col class="intro-content pl-5" cols="auto" style="max-width: 400px;">
                <h1 class="text-right mb-6 display-1 font-weight-bold">Isaiah Hunter</h1>
                <!-- <v-img class="mb-6 ml-auto" :src="require('../assets/logo.svg')" width="50%"></v-img> -->
                <p
                  class="mb-6 text-right"
                >Welcome! I’m Isaiah and clearly, I need professional photos. I’m a passionate self taught developer & graphic designer, check out some of my work and feel free to contact me.</p>
                <v-row justify="end">
                  <v-col cols="auto" v-for="(link, i) in social" :key="i">
                    <nuxt-link to="/">
                      <v-img height="20" width="20" :src="require(`../assets/${link.icon}.svg`)"></v-img>
                    </nuxt-link>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6">
            <v-img class="intro-image" :src="me" height="100vh" transition="slide-y-transition"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <nuxt />
    </v-app>
  </div>
</template>

<script>
import me from '@/assets/me.jpg'
export default {
  data() {
    return {
      me,
      social: [
        {
          icon: 'github-icon'
        },
        {
          icon: 'instagram-icon'
        },
        {
          icon: 'uplabs-icon'
        },
        {
          icon: 'email-icon'
        }
      ]
    }
  },
  mounted() {
    let moveWithCursor = true
    let cursorA = document.getElementsByClassName('cursor')[0]
    let links = document.getElementsByTagName('a')
    // for (let link of links) {
    //   link.addEventListener('mouseover', e => {
    //     cursorA.classList.add('expand')
    //   })
    //   link.addEventListener('mouseout', e => {
    //     defaultCursor()
    //   })
    // }

    document.addEventListener('mousemove', e => {
      if (moveWithCursor) {
        cursorA.style.left = `${e.pageX}px`
        cursorA.style.top = `${e.pageY}px`
      }
    })
    document.addEventListener('mousedown', e => {
      cursorA.classList.add('expand')
    })
    document.addEventListener('mouseup', e => {
      cursorA.classList.remove('expand')
    })
  }
}
</script>
<style lang="scss">
.intro-image .v-responsive__sizer {
  padding-bottom: 0 !important;
}
</style>
<style lang="scss" scoped>
.intro-content {
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 110%;
    height: 100%;
    background-color: #111;
    z-index: 1;
    animation: a-ltr-before 1.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    animation: a-ltr-after 1.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  }
}
@keyframes a-ltr-after {
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(-99%);
  }
}

@keyframes a-ltr-before {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-110%);
  }
}
.navigation {
  position: fixed;
  left: 80px;
  top: 40px;
  transform: rotate(90deg);
  transform-origin: top left;
}
</style>
