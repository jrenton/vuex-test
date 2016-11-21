<template>
  <div class="hello">
    Hello, {{ user.firstName }} {{ user.lastName }}
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
      // user: {
      //   firstName: '',
      //   lastName: '',
      // },
    };
  },

  computed: {
    state() {
      return this.$store.state;
    },

    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    saveUser() {
      this.$store.dispatch('saveUser', Object.assign({}, this.user));
    },

    setUser() {
      this.user = Object.assign({}, this.$store.state.user);
    },

    inputChanged(e) {
      this.$store.dispatch('saveUser', Object.assign({}, this.user));
    },
  },

  mounted() {
    this.setUser();
  },
};
</script>

<style scoped>

</style>
