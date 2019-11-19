<template>
  <MdToolbar class="header md-primary">
    <h2>Random Data</h2>
    <FetchButton message="Fetch Data"/>
  </MdToolbar>
</template>

<script>
import { mapState } from 'vuex'
import FetchButton from './FetchButton'

export default {
  name: 'TheHeader',
  computed: {
    ...mapState({ dataset: 'dataset' }),
  },
  components: {
    FetchButton
  },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 0 2em
}
</style>
