<template lang="html">
  <div id="projector" class="projectContainer">
    <div v-for="(project) in Project" :key="project.id">
      <router-view />
      <div class="innerProject"
        :id=project.tag
        :style="{'background-image': backgroundImage(project.src)}">
        <div class="infoContainer">
          <h1 id="projectTitle" >{{project.title}}</h1>
          <p id="projectDescription">{{project.description}}</p>
          <div id="website">
            Website: <a :href=project.url>{{project.url}}</a>
          </div>
          <h3 id="skillsHeader">Skills Used: </h3>
          <p id="techList" v-for="(skill, index) in project.tech" :key="index">
            - {{skill}} -
          </p>
          <div class="summary">
            <p>
              {{project.summary}}
            </p>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// import Project from '../data/projects'
import { mapActions } from 'vuex'

export default {
  name: 'Project',
  created () {
    this.getProjects()
    this.updateProject()
  },
  props: {
    projectId: String
  },
  data () {
    return {
      // Project: Project.project,
      Id: this.projectId,
      projectObj: {},
      divId: 0
    }
  },
  computed: {
    Project () {
      const { projectId } = this
      if (this.$store.state.projects.projects === undefined) {
        return
      }
      return this.$store.state.projects.projects
    }
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
  border-radius: 8px;
}
.projector:hover {
  padding: 2vh;
  transition: 1s;
  -webkit-filter: brightness(100%);
  filter: brightness(100%);
}
#projectTitle {
  position: relative;
  text-align: center;
  padding-top: 15vh;
}
#projectDescription {
  text-align: center;
}
.topLeft {
  position: fixed;
  top: 8px;
  left: 16px;
  font-size: 18px;
}
.techDiv {
  text-align: center;
}
#techList {
  display: inline-block;
  text-align: center;
}
.infoContainer {
  background-color: rgba(255,255,255,.8);
  margin: 0 auto;
  width: 60vw;
  height: 80vh;
  border-radius: 8px;
}
#skillsHeader {
  margin-bottom: 0;
}
#website {
overflow: hidden;
}
@media screen and (max-width: 900px), (max-height: 900px){
  .innerProject {
    -webkit-filter: brightness(30%);
    filter: brightness(30%);
    padding-top: 2vh;

  }
  .innerProject:hover {
    transition: 1s;
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
  }
  .infoContainer {
    width: 80vw;
    height: 80vh;
  }
  .infoContainer p{
    font-size: 1em;
  }
  .summary {
    padding: 2.5vw;
    font-size: .85em;
  }
}

@media screen and (max-width: 700px), (max-height: 600px){
  .innerProject {
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
    padding-top: 2vh;
  }
  .innerProject:hover {
    transition: 1s;
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
  }
  .infoContainer {
    width: 90vw;
    height: 90vh;
  }
  .infoContainer p{
    font-size: .9em;
  }
  .summary {
    padding: 2.5vw;
    font-size: .8em;
  }
}
@media screen and (max-width: 400px) {
  .infoContainer p{
    font-size: .8em;
  }
.summary {
  font-size: .75em;
}
}
</style>
