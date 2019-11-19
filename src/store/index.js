import Vue from 'vue'
import Vuex from 'vuex'

import rawData from '../assets/data.json';

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
      const keys = Object.keys(rawData[0]);
      const sortBy = keys[Math.floor(Math.random() * keys.length)];
      const startSlice = Math.floor(Math.random() * rawData.length);
      const endSlice = startSlice + Math.ceil(Math.random() * rawData.length);
      const randomData = rawData
        .sort((a, b) => {
          if (a[sortBy] === b[sortBy]) return 0;
          return a[sortBy] > b[sortBy] ? 1 : -1;
        })
        .slice(startSlice, endSlice);
      commit('updateDataset', randomData);
    },
  },
  modules: {
  }
})
