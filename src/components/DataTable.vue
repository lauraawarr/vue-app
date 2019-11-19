<template>
  <MdTable md-card>
    <MdTableRow>
      <MdTableHead v-for="title in headers" v-bind:key="title">
        {{ title }}
      </MdTableHead>
    </MdTableRow>

    <MdTableRow v-for="rowData in dataset" v-bind:key="rowData.id">
      <MdTableCell v-for="cell in rowData" v-bind:key="cell">
        {{ cell }}
      </MdTableCell>
    </MdTableRow>
  </MdTable>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DataTable',
  computed: mapState({
    dataset: 'dataset',
    headers: state => state.dataset[0] ? Object.keys(state.dataset[0]) : [],
  }),
}
</script>

<style>
.md-card {
  max-width: 1000px;
  margin: 1em auto;
}
.md-table-row {
  text-align: left;
  font-size: 1em;
}
.md-table-head {
  background: #ddd;
  text-transform: uppercase
}
.md-table-head, .md-table-cell {
  border-right: 1px solid #ddd;
  width: 33%;
}
.md-table-head-label {
  font-weight: 600;
}
</style>
