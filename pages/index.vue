<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col
          class="py-0"
          style="position: relative;"
          v-for="(post, index) in posts"
          :key="index"
          cols="4"
        >
          <dev-design v-if="post.sys.contentType.sys.id === 'project'" :post="post"></dev-design>
          <!-- <podcast v-if="item.type === 'podcast'" :post="item"></podcast> -->
        </v-col>
      </v-row>
      <!-- <v-pagination v-if="total_pages > 1" v-model="page" :length="total_pages" circle></v-pagination> -->
    </v-container>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
import image from '@/assets/me.jpg'

import DevDesign from '@/components/DevDesign'
import Podcast from '@/components/Podcast'

export default {
  components: {
    DevDesign,
    Podcast
  },
  data: () => ({
    title: "Isaiah Hunter's Portfolio",
    description: 'This is the portfolio of Isaiah Hunter',
    type: 'projects'
  }),
  head() {
    return {
      title: "Isaiah Hunter's Portfolio",
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        { hid: 'og:title', name: 'og:title', content: this.title },
        {
          hid: 'og:image',
          name: 'og:image',
          content: process.env.baseUrl + image.substring(1)
        },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: process.env.baseUrl + image.substring(1)
        }
      ]
    }
  },
  async asyncData({ error, req }) {
    try {
      const data = await client.getEntries({ limit: 15 })
      return { posts: data.items }
    } catch (e) {
      console.log(e)
      error({ statusCode: 404, message: 'There was a problem querying' })
    }
  }
}
</script>