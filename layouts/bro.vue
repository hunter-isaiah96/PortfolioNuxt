<template>
  <div>{{ year }}</div>
</template>
<script>
export default {
  data: () => ({
    year: 2019
  }),
  methods: {
    HappyNewYear() {
      this.year++
    }
  }
}
</script>