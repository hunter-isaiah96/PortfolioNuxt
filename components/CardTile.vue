<template>
  <v-card elevation="0" tile>
    <v-img :src="image" v-bind:max-height="imgHeight" v-bing:min-height="imgHeight"></v-img>
    <v-card-title class="font-weight-bold px-0">{{title}}</v-card-title>
    <v-card-subtitle class="text--primary px-0">{{subtitle}}</v-card-subtitle>
    <v-card-text class="px-0" v-if="link">
      <a :href="link.url" class="underlined grey--text darken-4">{{link.text}}</a>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    image: {
      type: [String],
      required: true
    },
    imgHeight: {
      type: [Number, String],
      required: false
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    link: {
      type: Object,
      required: false
    }
  }
}
</script>