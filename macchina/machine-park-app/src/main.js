import Vue from 'vue'
import App from './App.vue'
import ListMachines from './ListMachines'
Vue.component('list-machines', ListMachines)
import MapMachines from './MapMachines.vue'
Vue.component('map-machines', MapMachines)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/mapmachines', component: MapMachines },
  { path: '/listmachines', component: ListMachines }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
