<template>
  <div class="viewer" v-if="post">
    <div class="viewer-section" v-for="(item, index) in post.sections" :key="index">
      <h2 v-if="item.header[0].text" class="project-info full no-margin">
        {{item.header[0].text}}
        <p
          v-for="(body, index) in item.body"
          :key="index"
          class="description no-margin"
        >{{body.text}}</p>
      </h2>
      <div class="media" v-viewer v-if="item.media.url">
        <img :src="item.media.url" v-if="item.media.kind == 'image'" />
        <video preload="auto" loop muted autoplay v-else>
          <source :src="item.media.url" />
        </video>
      </div>
    </div>
    <a class="source" v-if="post.source_code.url" :href="post.source_code.url">Source Code</a>
  </div>
</template>

<script>
import prismic from 'prismic-javascript'
export default {
  head() {
    return {
      title: this.post.sections[0].header[0].text,
      meta: [
        { hid: 'description', name: 'description', content: this.post.sections[0].body[0].text },
        { hid: 'og:description', name: 'og:description', content: this.post.sections[0].body[0].text },
        { hid: 'og:title', name: 'og:title', content: this.post.sections[0].header[0].text },
        { hid: 'og:image', name: 'og:image', content: this.post.sections[0].media.url.replace('https://', 'http://') },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:url', name: 'og:url', content: process.env.baseUrl + this.id },
        { hid: 'og:site_name', name: 'og:site_name', content: "Isaiah Hunter's Portfolio" },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.sections[0].header[0].text },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.sections[0].body[0].text },
        { hid: 'twitter:image', name: 'twitter:image', content: this.post.sections[0].media.url.replace('https://', 'http://') },
      ],
      link: [
        { rel: 'canonical', href: process.env.baseUrl + this.id  }
      ]
    }
  },
  asyncData({ params }) {
    return prismic
      .getApi('https://distropaper.cdn.prismic.io/api/v2')
      .then(api => api.getByID(params.id))
      .then(response => {
        let post = response.data
        let id = response.id
        return { post, id }
      })
  },
}
</script>

<style lang="scss">
.viewer {
  margin-bottom: 4em;
  .media {
    margin-bottom: 30px;
    img,
    video {
      width: 100%;
      max-height: 800px;
    }
    img {
      cursor: pointer;
    }
  }
  a.source {
    display: block;
    margin-top: 30px;
    font-weight: 600;
  }
}
</style>