<template>
  <ag-grid-vue
    style="width: 700px; height: 400px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    return {
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          children: [
            { headerName: "name", field: "name" },
            { headerName: "sex", field: "sex" },
          ],
        },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
      ],
      rowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000,
          name: "dake",
          sex: "MAN",
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000,
          name: "dake",
          sex: "MAN",
        },
        {
          make: "Porsche",
          model: "Boxster",
          price: 72000,
          name: "dake",
          sex: "MAN",
        },
      ],
    };
  },
};
</script>
