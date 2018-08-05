import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import "babel-polyfill";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store();

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
