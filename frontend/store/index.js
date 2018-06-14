import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
    counter: 0,
    currentPage: 'Ololo trololo',
  },
  mutations: {
    increment (state) {
      state.counter++
    },

    setCurrentPage (state, payload) {
      state.currentPage = payload;
    },
  }
});

export default store
