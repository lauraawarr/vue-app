import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataset: [],
  },
  mutations: {
    updateDataset (state, data) {
      state.dataset = data
    },
  },
  actions: {
    fetchData ({ commit }) {
      axios.get('https://randomdataprovider.azurewebsites.net/api/DataPoints/random')
        .then(res => commit('updateDataset', res.data))
        .catch();
    },
  },
  modules: {
  }
})
