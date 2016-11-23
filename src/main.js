import Vue from 'vue';
import App from './App';
import store from './store';

/* eslint-disable no-new */
new Vue({
  // Inject the Vuex store into the Vue component.
  store,
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
});
