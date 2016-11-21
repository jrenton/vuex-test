<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <meta charset="utf-8">
    <style>
      @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
      @import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic);
      @import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic);

      body { font-family: 'Droid Serif'; }
      h1, h2, h3 {
        font-family: 'Yanone Kaffeesatz';
        font-weight: normal;
      }
      .remark-code, .remark-inline-code { font-family: 'Ubuntu Mono'; }
    </style>
  </head>
  <body>
    <textarea id="source">
    # Immutable state with VueJS and Vuex

    Many people that maintain large javascript applications can agree that it is difficult to keep track of the "state" of your application. When a change happens, it is not always clear what is responsible for that change, especially when you have an event system that serves as the means of state changes. Debugging these issues can be a major pain and a more predictable and reliable solution is needed for optimum reliability and long term maintenance.

    These are the problems that an immutable state can help solve. ReactJS popularized the idea of an immutable state with their implementation of Redux, and the motivation stated well in their documentation: "At some point, you no longer understand what happens in your app as you have *lost control over the when, why, and how of its state*. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features." Many other front end frameworks have followed suit, including VueJS with its implementation of VueX. Let's check out an example:

    ```javascript
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    // This will be the state of our application.
    const state = {
      user: {
        firstName: 'Bob',
        lastName: 'Dole',
      },
    };

    // Mutations are the means by which we mutate the state.
    const mutations = {
      SET_USER(state, user) {
        state.user = user;
      },
    };

    // Initialize the vuex store.
    const store = new Vuex.Store({
      state,
      mutations,
    });

    new Vue({
      el: '#app',
      // Inject the store into the Vue component.
      store,
      data() {
        return {
          user: {
            firstName: '',
            lastName: '',
          },
        };
      },
      template: `
        <div class="app">
          <form @submit.prevent="setUser">
            <label>First name:</label>
            <input type="text" v-model="user.firstName">
            <label>Last name:</label>
            <input type="text" v-model="user.lastName">
            <button type="submit">Set name</button>
          </form>
        </div>
      `,
      methods: {
        setUser() {
          this.$store.commit('SET_USER', this.user);
        },
      },
    });
    ```

    And our html file:
    ```html
    <html>
      <body>
        <div id="app"></div>
      </body>
    </html>
    ```

    So now we have the most basic setup to test Vue with Vuex.

    </textarea>
    <script src="https://gnab.github.io/remark/downloads/remark-latest.min.js">
    </script>
    <script>
      var slideshow = remark.create();
    </script>
  </body>
</html>
