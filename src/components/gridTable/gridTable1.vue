<template>
  <ag-grid-vue
    style="height: 300px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>

  <!-- <el-table :data="rowData" border style="width: 100%">
      <el-table-column prop="idsysline" label="ID" width="180" />
      <el-table-column prop="line" label="Line" width="180" />
      <el-table-column prop="region" label="Region" />
    </el-table> -->
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { ref, toRefs } from "vue";
import { linelist } from "@/api/test.js";

export default {
  name: "App",
  props: {
    urlStr: String,
  },
  components: {
    AgGridVue,
  },

  setup(props) {
    const { urlStr } = toRefs(props);
    console.log(`url:${urlStr.value}`);
    let responseDate = ref([]);

    let promiseResult = linelist();
    promiseResult.then((res) => {
      responseDate.value = res.data.data;
    });
    setTimeout(() => {
      console.log(responseDate.value);
    }, 1000);

    return {
      columnDefs: [
        {
          headerName: "序号",
          cellRenderer: function (params) {
            return parseInt(params.node.id) + 1;
          },
          cellStyle: {
            // 设置本栏的CSS样式
            "text-align": "left",
            "text-indent": "20px",
          },
        },
        {
          headerName: "品牌",
          field: "idsysline",
        },
        {
          headerName: "类型",
          field: "line",
        },
        {
          headerName: "价格",
          field: "region",
        },
      ],
      rowData: responseDate,
    };
  },
};
</script>
