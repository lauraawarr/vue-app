<template>
  <div id="app">
    <TheHeader />
    <DataTable />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import DataTable from './components/DataTable.vue'

export default {
  name: 'app',
  components: {
    TheHeader,
    DataTable,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
