// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Logo
import Logo from '@/components/Logo'
// Header
import Header from '@/components/Header'
// List / Menu
import List from '@/components/List'
// Projects
import Prj1 from '@/components/vue/Prj1'
import Prj2 from '@/components/vue/Prj2'
import Prj3 from '@/components/vue/Prj3'
import Prj4 from '@/components/vue/Prj4'
import Prj5 from '@/components/vue/Prj5'
import Prj6 from '@/components/vue/Prj6'
import Prj7 from '@/components/vue/Prj7'
import Prj8 from '@/components/vue/Prj8'
import Prj9 from '@/components/vue/Prj9'

import './assets/css/style.css'

Vue.component('Logo', Logo);
Vue.component('Header', Header);
Vue.component('List', List);
Vue.component('Prj1', Prj1);
Vue.component('Prj2', Prj2);
Vue.component('Prj3', Prj3);
Vue.component('Prj4', Prj4);
Vue.component('Prj5', Prj5);
Vue.component('Prj6', Prj6);
Vue.component('Prj7', Prj7);
Vue.component('Prj8', Prj8);
Vue.component('Prj9', Prj9);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
