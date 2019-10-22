<template>
  <div>
    <Header></Header>
    <transition name="page" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>
<style lang="scss" src="@/styles/normalize.scss"></style>
<style lang="scss" src="@/styles/styles.scss"></style>