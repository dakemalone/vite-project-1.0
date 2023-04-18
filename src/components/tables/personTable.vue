<template>
  <div id="personTable" style="width: 100%">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="540"
      row-class-name="success-row"
      @cell-mouse-enter="handleCellEnter"
      @cell-mouse-leave="handleCellLeave"
    >
      <el-table-column
        prop="boardBarcode"
        label="boardBarcode"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="boardName"
        label="boardName"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="boardBarcode"
        label="boardBarcode"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="elemntPosition"
        label="elemntPosition"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="judgment"
        label="judgment"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="workOrder"
        label="workOrder"
        width="180"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  // data(){
  //   return {
  //     tableData:[]
  //   }
  // },
  // beforeCreate(){
  //   console.log('beforeCreated is start')
  //   var _this = this;
  //   axios.get("http://172.20.10.2:8080/sample").then((res) => {
  //     // console.log(res.data)
  //     for (let index = 0; index < res.data.length - 5; index++) {
  //       // console.log(res.data[index])
  //       const element = res.data[index];
  //       _this.tableData.push(element);
  //     }
  //   });
  // },
  setup() {
    const handleCellEnter = (row, column, cell, event) => {
      row.isEdit = true
    };
    /** 鼠标移出cell */
    const handleCellLeave = (row, column, cell, event) => {
      row.isEdit = false
    }
    console.log("setup is start");
    const tableData = ref([]);
    axios.get("http://172.20.10.2:8080/sample").then((res) => {
      // console.log(res.data)
      for (let index = 0; index < res.data.length; index++) {
        // console.log(res.data[index])
        const element = res.data[index];
        tableData.value.push(element);
      }
    });
    return {
      tableData,
      handleCellEnter,
      handleCellLeave
    };
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
  },
};
</script>
