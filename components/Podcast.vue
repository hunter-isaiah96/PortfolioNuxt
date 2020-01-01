<template>
  <v-card elevation="0">
    <v-card-title
      style="word-break: normal;"
      class="display-1 mb-4 font-weight-medium"
      v-text="post.data.title[0].text"
    ></v-card-title>
    <v-card-subtitle class="subtitle-1">
      {{ post.first_publication_date | moment('utc') | moment('LL') }}
      <!-- <v-chip class="ma-2" color="secondary">Podcast</v-chip> -->
    </v-card-subtitle>

    <!-- <v-card-subtitle class="subtitle-1" v-text="`${post.data.type} - ${post.data.year}`"></v-card-subtitle> -->
  </v-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>