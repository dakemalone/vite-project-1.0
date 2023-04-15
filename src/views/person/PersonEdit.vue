<template>
<div id="personEdit">
    <h2>person edit</h2>
    <bar-echarts></bar-echarts>
    <pie-echarts></pie-echarts>
</div>
</template>

<script>
import barEcharts from '../../components/echarts/barEcharts.vue'
import PieEcharts from '../../components/echarts/pieEcharts.vue'
export default {
  components: { barEcharts, PieEcharts },
    name: "PersonEdit"
}
</script>

<style scoped>

</style>