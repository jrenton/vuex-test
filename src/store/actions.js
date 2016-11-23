import UserService from '../api/user';

export default {
  // First parameter has dispatch, commit, state, getters.
  // Second parameter is the user input.
  saveUser({ commit, state }, user) {
    commit('SET_USER_SAVING');

    // saveUser is calling a service api endpoint and returning a promise.
    UserService.saveUser(user).then(() => {
      commit('SET_USER', user);
    });
  },
};
