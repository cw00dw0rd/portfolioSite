<template>
  <div class="home">
    <img alt="My picture" src="../assets/myPhoto.jpeg">
    <HomeIntro msg="Portfolio Site for Chris Woodward"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/home/HomeIntro.vue'

export default {
  name: 'home',
  components: {
    HomeIntro
  }
}
</script>

<style scoped>
  .home {
    text-align: left;
  }
</style>
