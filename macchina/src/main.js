import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component('cafe-component', {
  template: '<h2><hr><toggle-button>Wesh</toggle-button></h2>'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
