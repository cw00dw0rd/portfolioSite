<template>
  <div class="home">
    <!-- <div class="greeting">
      <img alt="My picture" src="../assets/myPhoto.jpeg">
      <HomeIntro msg="Portfolio Site for Chris Woodward"/>
    </div> -->
    <Project />
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
  },
  computed: {
    // Project () {
    //   const { projectId } = this
    //   return this.$store.state.projects.projects.projects[projectId]
    //   // return this.$store.state.projects.projects.project[+projectId]
    // }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
  .home {
    /* text-align: left; */
    background-color: rgb(186,186,186);
    width: 90%;
    margin: 0 auto;
  }
  .greeting {
  }
  .greeting img {
    text-align: left;
    max-width: 60%;
    height: 200px;
  }
</style>
