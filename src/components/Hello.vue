<template>
  <div class="hello">
    <form @submit.prevent="setUser">
      <label>First name:</label>
      <input type="text" v-model="user.firstName">
      <label>Last name:</label>
      <input type="text" v-model="user.lastName">
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
      hello: '',
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
    setUser() {
      this.$store.commit('SET_USER', this.user);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
