<template>
  <div class="home">
    <!-- <div class="greeting">
      <img alt="My picture" src="../assets/myPhoto.jpeg">
      <HomeIntro msg="Portfolio Site for Chris Woodward"/>
    </div> -->
    <Project projectId="passed"/>
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
position: relative;
/* z-index: 1; */
/* width: 99%; */
/* top: 60px; */
/* bottom: -10px; */
margin: auto 0;
background-repeat: no-repeat;
/* background-size: cover; */
-webkit-filter: brightness(80%);
filter: brightness(80%);
}

</style>
