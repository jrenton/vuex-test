export default {
  userDisplayName(state) {
    return `${state.user.firstName} ${state.user.lastName}`;
  },
};
