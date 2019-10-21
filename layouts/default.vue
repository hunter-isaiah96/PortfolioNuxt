<template>
  <div>
    <Header></Header>
    <nuxt />
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