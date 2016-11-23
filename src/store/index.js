import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

// This will be the state of our application.
const state = {
  user: {
    firstName: 'Bob',
    lastName: 'Dole',
  },

  isSavingUser: false,
};

// Mutations are the means by which we mutate the state.
const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isSavingUser = false;
  },

  SET_USER_SAVING(state) {
    state.isSavingUser = true;
  },
};

// Initialize the vuex store.
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()],
});
