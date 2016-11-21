import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  user: {
    firstName: 'Bob',
    lastName: 'Dole',
  },

  isSavingUser: false,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isSavingUser = false;
  },

  SET_USER_SAVING(state) {
    state.isSavingUser = true;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()],
});
