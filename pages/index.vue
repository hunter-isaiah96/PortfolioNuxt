<template>
  <div class="container">
    <ul class="no-padding">
      <Project
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :header="project.data.sections[0].header[0].text"
        :project_type="project.data.project_type"
        :year="project.data.year"
        :image="project.data.sections[0].media.url"
      ></Project>
    </ul>
  </div>
</template>

<script>
import Project from '@/components/Project'
import prismic from 'prismic-javascript'
import image from '@/assets/me.jpg'

export default {
  components: {
    Project
  },
  data() {
    return {
      title: "Isaiah Hunter's Portfolio",
      description: 'This is the portfolio of Isaiah Hunter'
    }
  },
  head() {
    return {
      title: "Isaiah Hunter's Portfolio",
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:image', name: 'og:image', content: process.env.baseUrl + image.substring(1) },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description },
        { hid: 'twitter:image', name: 'twitter:image', content: process.env.baseUrl + image.substring(1) },
      ]
    }
  },
  asyncData() {
    return prismic
      .getApi('https://distropaper.cdn.prismic.io/api/v2')
      .then(api =>
        api.query(prismic.Predicates.at('document.type', 'project'), {
          orderings:
            '[my.project.year desc, document.first_publication_date desc]'
        })
      )
      .then(response => {
        let projects = response.results
        return { projects }
      })
  }
}
</script>