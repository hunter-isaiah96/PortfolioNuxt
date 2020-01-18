<template>
  <v-app-bar class="px-md-6" app>
    <v-spacer></v-spacer>
    <a class="menu-button">
      <span class="mb-1"></span>
      <span class="mb-1"></span>
      <span></span>
    </a>
  </v-app-bar>
</template>

<style lang="scss">
.v-toolbar .menu-button {
  &:hover {
    span:after {
      width: 0%;
    }
  }
  span {
    display: block;
    position: relative;
    width: 30px;
    height: 3px;
    @for $i from 0 through 3 {
      &:nth-child(#{$i}):after {
        transition: all #{$i * 90}ms ease-in;
      }
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    &:before {
      width: 100%;
      background-color: lightgray;
    }
    &:after {
      width: 100%;
      background-color: #202020;
      transition: width 0.2s ease;
    }
  }
}
</style>