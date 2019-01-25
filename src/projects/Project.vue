<template lang="html">
  <div class="projectContainer">
    <h1 v-if="Project">{{Project.title}}</h1>
    <!-- <p>{{Project.description}}</p> -->
    <!-- <img class="projectImage" :src="Project.src" alt="Project Name"> -->
  </div>
</template>

<script>
import projects from '../data/projects'
import { mapActions } from 'vuex'

export default {
  name: 'Project',
  created () {
    this.getProjects()
  },
  updated () {
    this.getProjects()
  },
  props: {
    projectId: {
      type: String
    }
  },
  data () {
    return {
      projects,
      Id: this.projectId
    }
  },
  computed: {
    Project () {
      const { projectId } = this
      return this.$store.state.projects.projects.projects[projectId]
      // return this.$store.state.projects.projects.project[+projectId]
    }
  },
  methods: {
    ...mapActions('projects', ['getProjects', 'updateProjects'])
  }
}
</script>

<style lang="css" scoped>
.projectContainer {
  background-color: white;
}
.projectImage {
  max-width: 100%;
}
</style>
