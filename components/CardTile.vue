<template>
  <v-card elevation="0" tile>
    <v-img :src="image" :max-height="imgHeight" :min-height="imgHeight"></v-img>
    <v-card-title class="font-weight-bold px-0">{{ title }}</v-card-title>
    <v-card-subtitle class="text--primary px-0">{{ subtitle }}</v-card-subtitle>
    <v-card-text class="px-0" v-if="link">
      <v-btn
        elevation="0"
        href="#"
        class="underlined grey--text darken-4 px-0 font-weight-bold"
        :ripple="false"
        text
      >
        {{ link.text }}
      </v-btn>
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
