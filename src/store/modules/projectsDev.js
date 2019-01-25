// import axios from 'axios'

import Projects from '../../data/projects'

export default {
  namespaced: true,
  state: {
    projects: Projects
  },
  mutations: {
    updateProjects (state, projects) {
      state.projects = projects
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
