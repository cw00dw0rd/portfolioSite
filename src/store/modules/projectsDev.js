// import axios from 'axios'

import Projects from '../../data/projects'

export default {
  namespaced: true,
  state: {
    projects: [],
    projectTags: [],
    projectIcons: []
  },
  mutations: {
    updateProjects (state, projects) {
      state.projects = projects.project
      if (projects.project !== undefined && state.projectTags.length === 0) {
        for (let i = 0; i < projects.project.length; i++) {
          state.projectTags.push(projects.project[i].tag)
          state.projectIcons.push(projects.project[i].icon)
        }
      }
    }
  },
  actions: {
    getProjects ({ commit }) {
      commit('updateProjects', Projects)
      // axios.get('/api/projects')
      //   .then(result => {
      //   }
      //   )
      //   .catch((e) => console.error('Error from axios: ' + e))
    }
  }
}
