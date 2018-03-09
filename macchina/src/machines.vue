<template>
  <div id="machine">
    <hr>
    <h2>Machine de composant mono-fichier</h2>
    <toggle-button v-for="machine in machineList"></toggle-button>
  </div>
</template>

<script>
    export default {
      props: ['machineList'],
    }
</script>

<style scoped>

</style>
