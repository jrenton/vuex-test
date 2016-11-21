import UserService from '../api/user';

export default {
  saveUser({ commit }, user) {
    commit('SET_USER_SAVING');

    UserService.saveUser(user).then(() => {
      commit('SET_USER', user);
    });
  },
};
