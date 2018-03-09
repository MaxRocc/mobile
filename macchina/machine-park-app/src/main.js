import Vue from 'vue'
import App from './App.vue'
import ListMachines from './ListMachines'
Vue.component('list-machines', ListMachines)
import MapMachines from './MapMachines.vue'
Vue.component('map-machines', MapMachines)

new Vue({
  el: '#app',
  render: h => h(App),
})
