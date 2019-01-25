import axios from 'axios'

// import Projects from '../../data/projects'

export default {
  namespaced: true,
  state: {
    projects: null
  },
  mutations: {
    updateProjects (state, projects) {
      state.projects = projects
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
