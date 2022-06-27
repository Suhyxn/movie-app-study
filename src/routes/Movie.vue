<template>
  <h1>Movie!</h1>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
    console.log('hello')
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    })
  }
}
</script>