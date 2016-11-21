import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions';

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

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createLogger()],
});
