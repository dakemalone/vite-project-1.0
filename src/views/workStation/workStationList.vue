<template>
  <div id="workStationList">
    <h2>work list</h2>
    <el-button type="success" @click="getstr()">success</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
