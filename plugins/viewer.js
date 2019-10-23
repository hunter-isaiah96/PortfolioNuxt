import Vue from 'vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Viewer, {
  defaultOptions: {
    inline: false,
    button: false,
    navbar: false,
    title: false,
    toolbar: false,
    tooltip: false,
    movable: false,
    zoomable: false,
    rotatable: false,
    scalable: false,
    transition: true,
    fullscreen: true,
    keyboard: false,
    url: 'data-source'
  }
})
