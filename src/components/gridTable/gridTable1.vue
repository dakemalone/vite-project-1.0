<template>
  <ag-grid-vue
    style="height: 560px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :enableColResize="true"
    :gridReady="onGridReady"
    @cellClicked="onCellClicked"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { ref } from "vue";
import { linelist } from "@/api/test.js";

export default {
  name: "App",
  props: {
    urlStr: String,
  },
  components: {
    AgGridVue,
  },
  methods: {
    //ag-grid创建完成后执行的事件
    onGridReady(params) {
      console.log("hello");
      // 获取gridApi
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // 这时就可以通过gridApi调用ag-grid的传统方法了
      this.gridApi.sizeColumnsToFit();
    },
    //单元格点击事件
    onCellClicked(cell) {
      console.log(cell);
      // 获取选中单元格的数据
      console.log(cell.value);
      // 获取选中单元格所在行号
      console.log(cell.rowIndex);
      // 获取选中单元格所在行的数据
      console.log(cell.data);
    },
  },
  setup() {
    let responseDate = ref([]);
    let promiseResult = linelist();
    promiseResult.then((res) => {
      responseDate.value = res.data.data;
    });

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
        {
          headerName: "备注",
          field: "remark",
        },
      ],
      rowData: responseDate,
    };
  },
};
</script>
