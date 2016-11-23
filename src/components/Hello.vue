<template>
  <div class="hello">
    <h2>Hello, {{ userDisplayName }}</h2>
    <form @submit.prevent="saveUser">
      <input type="text"
             placeholder="First name"
             v-model="user.firstName">
      <input type="text"
             placeholder="Last name"
             v-model="user.lastName">
      <button type="submit">Set name</button>
    </form>
    <h2>State:</h2>
    <p>{{ state }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
      },
    };
  },

  computed: {
    state() {
      return this.$store.state;
    },

    userDisplayName() {
      return this.$store.getters.userDisplayName;
    },
  },

  methods: {
    saveUser() {
      this.$store.dispatch('saveUser', Object.assign({}, this.user));
    },

    // setUser assigns the global state 'user' to the local
    // component's state. This is one of several ways
    // to sync with your store's state while avoiding
    // directly mutating it in your form.
    // See https://vuex.vuejs.org/en/forms.html.
    setUser() {
      this.user = Object.assign({}, this.$store.state.user);
    },
  },

  mounted() {
    this.setUser();
  },
};
</script>
