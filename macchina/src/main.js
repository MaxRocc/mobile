import Vue from 'vue'
import App from './App.vue'
import machine from './Machines.vue' //importing Component's div called Machines, stored in machines.vue in the same folder
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
Vue.component('toto', machine);

new Vue({
  el: '#app',
  render: h => h(App)
})
