import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
import machine from './Machines.vue' //importing Component's div called Machines, stored in machines.vue in the same folder
Vue.use(ToggleButton);
Vue.component('machine', machine);

new Vue({
  el: '#app',
  render: h => h(App)
})
