<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <button id="button1" v-on:click="onMachinesListClick()">Consulter la liste des machines</button>
    </div>
    <router-view></router-view>
    <div>
      <button id="button2" v-on:click="onMapClick()">Voir la carte</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Que voulez-vous faire ?'
    }
  },
  methods: {
    onMachinesListClick() {
      alert('What do you want ?')
    },
    onMapClick() {
      alert('You clicked \'Voir la carte\'')
    }
  }
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

#button1 {
  background-color: #950980;
  padding: 15px 32px;
  cursor: pointer;
  display: inline-block;
  color: wheat;
}

#button2 {
  background-color: #950980;
  padding: 15px 32px;
  cursor: pointer;
  display: inline-block;
  color: wheat;
}

</style>
