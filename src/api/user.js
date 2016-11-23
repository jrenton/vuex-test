export default {
  saveUser(user) {
    return new Promise((resolve, reject) => {
      // Simulate an api call.
      setTimeout(() => {
        resolve(user);
      }, 500);
    });
  },
};
