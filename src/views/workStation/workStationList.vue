<template>
  <div id="workStationList">
    <h2>work list</h2>
    <grid-table-1></grid-table-1>
    <el-button type="success" @click="getstr()">success</el-button>
  </div>
</template>

<script>
import axios from "axios";
import gridTable1 from '../../components/gridTable/gridTable1.vue';
export default {
  components: { gridTable1 },
  name: "workStationList",
  created() {
    axios.get("https://api.kanye.rest/").then((res) => {
      console.log(res);
    });
  },
  methods:{
    getstr(){
      axios.get("https://api.kanye.rest/").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped></style>
