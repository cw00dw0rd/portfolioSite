<template lang="html">
  <div id="projector" class="projectContainer">
    <div v-for="(project) in Project" :key="project.id">
      <div :style="{'background-image': backgroundImage(project.src)}" class="bg">
      <h1>{{project.title}}</h1>
      <p>{{project.description}}</p>
      <img class="projectImage" :src="project.src" alt="Project Name">
    </div>
    </div>
  </div>
</template>

<script>
import Project from '../data/projects'
import { mapActions } from 'vuex'

export default {
  name: 'Project',
  created () {
    this.getProjects()
    this.updateProject()
  },
  props: {
    projectId: {
      type: String
    }
  },
  data () {
    return {
      Project: Project.project,
      Id: this.projectId,
      projectObj: {}

    }
  },
  computed: {
    // Project () {
    //   const { projectId } = this
    //   if (this.$store.state.projects.projects.projects === undefined) {
    //     return
    //   }
    //   return this.$store.state.projects.projects.projects[projectId]
    // }
  },
  methods: {
    ...mapActions('projects', ['getProjects', 'updateProjects']),
    updateProject () {
      this.projectObj = this.Project
    },
    backgroundImage (url) {
      let overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))'
      return 'url("' + url + '"), ' + overlay
    }
  }
}
</script>
<style lang="css">
body {
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
}

</style>
<style lang="css" scoped>
.projectContainer {
  background-color: white;
}
.bg {
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
}
.projectImage {
  max-width: 100%;
}
</style>
