<template>
  <div id="personEdit">
    <h2>person edit</h2>
    <el-row class="tac">
      <el-col :span="12">
        <bar-echarts></bar-echarts>
      </el-col>
      <el-col :span="12">
        <pie-echarts></pie-echarts>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import barEcharts from "../../components/echarts/barEcharts.vue";
import PieEcharts from "../../components/echarts/pieEcharts.vue";
export default {
  components: { barEcharts, PieEcharts },
  name: "PersonEdit",
};
</script>

<style scoped></style>
