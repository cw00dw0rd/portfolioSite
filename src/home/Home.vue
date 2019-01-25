<template>
  <div class="home">
    <img alt="My picture" src="../assets/myPhoto.jpeg">
    <HomeIntro msg="Portfolio Site for Chris Woodward"/>
    <Project projectId='0'/>
    <Project projectId='1'/>
    <Project projectId='2'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/home/HomeIntro.vue'
import Project from '@/projects/Project.vue'

export default {
  name: 'home',
  components: {
    HomeIntro,
    Project
  }
}
</script>

<style scoped>
  .home {
    text-align: left;
    background-color: rgb(186,186,186);
    /* height: 1000px; */
    width: 80%;
    margin: 0 auto;
  }
</style>
