import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.use(Vuex);

const state = {
  user: {
    firstName: 'Bob',
    lastName: 'Dole',
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
});

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
});
