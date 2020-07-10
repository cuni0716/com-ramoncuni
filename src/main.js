// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import CV from './pages/CV';


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/cv', component: CV },
  ],
});

/* eslint-disable no-new */
new Vue({ router, template: '<router-view></router-view>' }).$mount('#app');
