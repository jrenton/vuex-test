export default {
  // A getter is a computed property that can be
  // shared across components.
  userDisplayName(state) {
    return `${state.user.firstName} ${state.user.lastName}`;
  },
};
