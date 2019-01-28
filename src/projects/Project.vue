<template lang="html">
  <div id="projector" class="projectContainer">
    <div v-for="(project) in Project" :key="project.id">
      <router-view />
      <div class="innerProject"
        :id=project.tag
        :style="{'background-image': backgroundImage(project.src)}">
          <h1 class="projectTitle" >{{project.title}}</h1>
          <p class="projectDescription">{{project.description}}</p>
          <div class="techDiv">
            <p class="techList" v-for="(skill, index) in project.tech" :key="index">
               - {{skill}} -
            </p>
          </div>
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
    // this.getProjects()
    this.updateProject()
  },
  props: {
    projectId: String
  },
  data () {
    return {
      Project: Project.project,
      Id: this.projectId,
      // width: window.innerWidth,
      // height: window.innerHeight,
      projectObj: {},
      divId: 0
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

<style lang="css" scoped>
.innerProject {
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  transition: 2s;
  filter: brightness(30%);
}
.innerProject:hover {
  transition: 1s;
  -webkit-filter: brightness(100%);
  filter: brightness(100%);
}
.projectTitle {
  position: relative;
  text-align: center;
  padding-top: 15vh;
  /* padding-left:5vw; */
}
.projectDescription {
  text-align: center;
  /* padding-left: 5vw; */
}
.topLeft {
  position: fixed;
  top: 8px;
  left: 16px;
  font-size: 18px;
}
.techDiv {
  text-align: center;
  /* max-width: 20em; */
  /* padding-left: 35vw; */
}
.techList {
  display: inline-block;
  text-align: center;
}
/* .bg {
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
}
.projectImage {
  max-width: 100%;
} */

@media screen and (max-width: 600px), (max-height: 600px){
  .innerProject {
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
  }
  .innerProject:hover {
    transition: 1s;
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
  }
}
</style>
