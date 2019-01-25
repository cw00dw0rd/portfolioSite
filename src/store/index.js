import Vue from 'vue'
import Vuex from 'vuex'

// import projectsModule from './modules/projects'
import projectsModule from './modules/projectsDev'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects: projectsModule
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
