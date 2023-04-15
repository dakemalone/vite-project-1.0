<template>
  <div id="personTable">
    <template v-for="data in tableData" :key="data">
      <li>{{ data }}</li>
    </template>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="boardBarcode" label="boardBarcode"></el-table-column>
      <el-table-column prop="boardName" label="boardName"></el-table-column>
      <el-table-column prop="boardName" label="boardName"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      tableData:[]
    }
  },
  beforeCreate(){
    var _this = this;
    axios.get("http://172.20.10.2:8080/sample").then((res) => {
      // console.log(res.data)
      for (let index = 0; index < res.data.length - 5; index++) {
        // console.log(res.data[index])
        const element = res.data[index];
        _this.tableData.push(element);
      }
    });
  },
  setup() {
    // var tableData = [];
    // axios.get("http://172.20.10.2:8080/sample").then((res) => {
    //   // console.log(res.data)
    //   for (let index = 0; index < res.data.length - 5; index++) {
    //     // console.log(res.data[index])
    //     const element = res.data[index];
    //     tableData.push(element);
    //   }
    // });

    // const tableData = [
    //   {
    //     'date': "2016-05-03",
    //     'name': "Tom",
    //     state: "California",
    //     city: "Los Angeles",
    //     address: "No. 189, Grove St, Los Angeles",
    //     zip: "CA 90036",
    //   },
    //   {
    //     'date': "2016-05-01",
    //     'name': "Tom",
    //     state: "California",
    //     city: "Los Angeles",
    //     address: "No. 189, Grove St, Los Angeles",
    //     zip: "CA 90036",
    //   },
    //   {
    //     'date': "2016-05-08",
    //     'name': "Tom",
    //     state: "California",
    //     city: "Los Angeles",
    //     address: "No. 189, Grove St, Los Angeles",
    //     zip: "CA 90036",
    //   },
    // ];
    // console.log(tableData);
    // return {
    //   tableData,
    // };
  },
};
</script>
