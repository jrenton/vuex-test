export default {
  saveUser({commit}, user) {
    // Simulate an api call.
    setTimeout(() => {
      commit('SET_USER', user);
    }, 10);
  },
};
