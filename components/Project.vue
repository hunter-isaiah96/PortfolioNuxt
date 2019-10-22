<template>
  <li>
    <h1 class="project-info no-margin">
      <nuxt-link class="fade" :to="{ name: 'id', params: { id: id }}">{{header}}</nuxt-link>
      <p>{{project_type}} - {{year}}</p>
    </h1>
    <nuxt-link class="media" :to="{ name: 'id', params: { id: id }}">
      <img class="fade" :src="image" />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'header', 'project_type', 'year', 'image']
}
</script>

<style lang="scss">
li {
  display: grid;
  grid-template-columns: 35% 65%;
  margin-bottom: 4em;
  .media {
    padding-left: 5%;
    img {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1280px) {
  li {
    display: block;
    .media {
      padding-left: 0;
    }
  }
}
</style>
