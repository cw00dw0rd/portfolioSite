<template>
  <div class="home">
      <HomeIntro />
      <Project />
  </div>
</template>

<script>
import HomeIntro from '@/home/HomeIntro.vue'
import Projects from '../data/projects'
import Project from '@/projects/Project.vue'

export default {
  name: 'home',
  data () {
    return {
      Projects: Projects.project
    }
  },
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
padding-top: 5vh;
position: relative;
margin: auto 0;
background-repeat: no-repeat;
-webkit-filter: brightness(80%);
filter: brightness(80%);
}

</style>
