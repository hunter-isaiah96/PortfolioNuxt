<template>
  <!-- <v-hover v-slot:default="{ hover }">
    <nuxt-link :to="{ name: 'id', params: { id: post.sys.id } }">
    <div :class="{active: hover}" class="hover-panel">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <v-card tile v-tilt>
      <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      ></v-img>
      <v-card-title>
        {{ post.fields.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ `${post.fields.commission} - ${post.fields.year}` }}
      </v-card-subtitle>
    </v-card>
    </nuxt-link>
  </v-hover>-->
  <v-hover v-slot:default="{ hover }">
    <nuxt-link :to="{ name: 'id', params: { id: post.sys.id } }">
      <div :class="{active: hover}" class="hover-panel">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <v-card color="#31394C" style="overflow: hidden;" class="ma-6" :elevation="hover ? 5 : 0">
        <overdrive id="element" :duration="350">
          <v-img :src="post.fields.thumbnail.fields.file.url">
            <!-- <v-row align="end" class="lightbox white--text pa-6 fill-height" no-gutters>
            <v-col>
              <div class="subheading">{{post.fields.title}}</div>
              <div class="body-1">{{post.fields.commission}} - {{post.fields.year}}</div>
            </v-col>
            </v-row>-->
          </v-img>
        </overdrive>
        <!-- <v-row class="d-flex flex-no-wrap" no-gutters>
          <v-col md="7" order-md="2">
            <v-avatar size="100%" tile>
              <v-img :src="post.fields.thumbnail.fields.file.url"></v-img>
            </v-avatar>
          </v-col>
          <v-col md="5" order-md="1">
            <v-card-title
              style="word-break: normal;"
              class="display-1 mb-4 font-weight-medium"
              v-text="post.fields.title"
            ></v-card-title>
            <v-card-subtitle class="subtitle-1">{{post.fields.commission}} - {{post.fields.year}}</v-card-subtitle>
          </v-col>
        </v-row>-->
      </v-card>
    </nuxt-link>
  </v-hover>
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
<style lang="scss" scoped>
$border: 2px solid #fff;
.hover-panel {
  position: absolute;
  width: 95%;
  height: 90%;
  top: 50%;
  left: 50%;
  transition: height 0.2s ease, width 0.2s ease, padding 0.2s ease,
    opacity 0.2s ease;
  transform: translate(-50%, -50%);
  opacity: 0;
  &.active {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  span {
    position: absolute;
    width: 50px;
    height: 50px;
    border-color: #fff;
    &:nth-child(1) {
      top: 0;
      left: 0;
      border-left: $border;
      border-top: $border;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
      border-top: $border;
      border-right: $border;
    }
    &:nth-child(3) {
      bottom: 0;
      right: 0;
      border-right: $border;
      border-bottom: $border;
    }
    &:nth-child(4) {
      bottom: 0;
      left: 0;
      border-bottom: $border;
      border-left: $border;
    }
  }
}
</style>