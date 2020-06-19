import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  mutations: {
    adicionar: function(state, tarefas) {
      state.tarefas.push(tarefas)
    }
  },
  actions: {
  },
  modules: {
  }
})
