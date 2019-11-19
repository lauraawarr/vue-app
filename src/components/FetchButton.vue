<template>
  <MdButton class="button md-raised" @click="fetchData">{{ message }}</MdButton>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.component('FetchButton', {
  name: 'FetchButton',
  props: {
    message: String,
  },
  methods: mapActions(['fetchData']),
  mounted () {
    this.fetchData()
  },
})
</script>

<style scoped>
.button {
  padding-left: 1em;
  padding-right: 1em;
}
</style>
