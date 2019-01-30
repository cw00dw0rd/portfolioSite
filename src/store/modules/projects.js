import axios from 'axios'

// import Projects from '../../data/projects'

export default {
  namespaced: true,
  state: {
    projects: [],
    projectTags: [],
    projectIcons: []
  },
  mutations: {
    updateProjects (state, projects) {
      state.projects = projects.projects
      if (projects.projects !== undefined && state.projectTags.length === 0) {
        for (let i = 0; i < projects.projects.length; i++) {
          state.projectTags.push(projects.projects[i].tag)
          state.projectIcons.push(projects.projects[i].icon)
        }
      }
    }
  },
  getters: {
    getTags: (state) => {
      if (state.projects !== undefined && state.projectTags.length === 0) {
        for (let i = 0; i < state.projects.length; i++) {
          state.projectTags.push(state.projects.projects[i].tag)
        }
      }
      return state.projectTags
    }
  },
  actions: {
    getProjects ({ commit }) {
      axios.get('/api/projects')
        .then(result => {
          commit('updateProjects', result.data)
        }
        )
        .catch((e) => console.error('Error from axios: ' + e))
    }
  }
}
