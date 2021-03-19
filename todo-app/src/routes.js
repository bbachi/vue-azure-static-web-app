import Vue from "vue";
import Router from "vue-router";

import Detail from "./components/Detail.vue";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    { path: '/detail', component: Detail }
  ]
});