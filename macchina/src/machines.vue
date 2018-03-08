<template>
  <div id="machine">
    <hr>
    <h2>Machine de composant mono-fichier</h2>
    <toggle-button v-for="machine in machines" :machine="machines"></toggle-button>
  </div>
</template>

<script>
    export default {
      props: ['machine'],
      data (){
        return {
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
      }
    }
</script>

<style scoped>

</style>
