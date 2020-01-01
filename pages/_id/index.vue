<template>
  <div>
    <h1 class="post-title my-3">{{post.fields.title}}</h1>
    <h3 class="subheading my-3">{{post.fields.title}}</h3>
    <v-img :src="post.fields.thumbnail.fields.file.url"></v-img>

    <v-container class="mt-5 pa-12 grey darken-4">
      <div v-html="documentToHtmlString(post.fields.body, options)"></div>
    </v-container>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  data: () => ({
    documentToHtmlString,
    options: {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          if (node.data.target.fields.file.contentType.includes('video'))
            return `<video width="100%" muted loop autoplay><source src="${node.data.target.fields.file.url}" type="${node.data.target.fields.file.contentType}"></video>`
          if (node.data.target.fields.file.contentType.includes('image'))
            return `<img src="${node.data.target.fields.file.url}" width="100%"/>`
        },
        [BLOCKS.PARAGRAPH]: (node, next) =>
          `<p class="body-1">${next(node.content)}</p>`,
        [BLOCKS.HEADING_1]: (node, next) =>
          `<h1 class="my-3">${next(node.content)}</h1>`
      }
    }
  }),
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.fields.body.content[0].content[0].value
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.fields.body.content[0].content[0].value
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.post.fields.body.content[0].content[0].value
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.fields.thumbnail.fields.file.url
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: process.env.baseUrl + this.post.sys.id
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: "Isaiah Hunter's Portfolio"
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.fields.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.fields.body.content[0].content[0].value
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.post.fields.thumbnail.fields.file.url
        }
      ],
      link: [{ rel: 'canonical', href: process.env.baseUrl + this.post.sys.id }]
    }
  },
  async asyncData({ params }) {
    try {
      let post = await client.getEntry(params.id)
      return { post }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
