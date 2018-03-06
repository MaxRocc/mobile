<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div v-for="machine in machines">
        <h2>{{ machine.name }}</h2>
        <toggle-button v-model="machine.active"></toggle-button>
    </div>
    <cafe-component></cafe-component>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Appli de gestion des machines à café',
      machines : [
        {
          name: 'Machine 1',
          active: false},
        {
          name: 'Machine 2',
          active: false},
        {
          name: 'Machine 3',
          active: false}
      ]
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
