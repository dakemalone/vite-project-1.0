<template>
  <div id="workStationList">
    <grid-table-1></grid-table-1>
    <el-button type="success" @click="getstr()">success</el-button>
    <span>{{ say }}</span>
  </div>
</template>

<script>
import axios from "axios";
import gridTable1 from "../../components/gridTable/gridTable1.vue";
export default {
  components: { gridTable1 },
  name: "workStationList",
  data() {
    var say;
    return {
      say,
    };
  },
  created() {
    // axios.get("https://api.kanye.rest/").then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    getstr() {
      axios.get("https://api.kanye.rest/").then((res) => {
        this.say = res.data;
        return this.say;
      });
    },
  },
};
</script>

<style scoped></style>
