<template>
  <div id="x-spreadsheet-demo"></div>
</template>

<script>
import { onMounted } from "vue";
import Spreadsheet from "x-data-spreadsheet";

export default {
  setup() {
    const options = {
      mode: "edit", // edit | read
      showToolbar: true,
      showGrid: true,
      showContextmenu: true,
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.documentElement.clientWidth,
      },
      row: {
        len: 100,
        height: 25,
      },
      col: {
        len: 13,
        width: 100,
        indexWidth: 60,
        minWidth: 60,
      },
      style: {
        border: {
          bottom: ['medium', '#fff'],
        },
        color: "#ddd",
        bgColor: "#eee",
        font: {
          italic: true,
          size: 16,
          name: "YaHei",
          bold: true,
        },
        underline: true,
        valign: "middle",
        align: "center",
      },
    };
    onMounted(() => {
      // If you need to override the default options, you can set the override
      // const options = {};
      // new Spreadsheet('#x-spreadsheet-demo', options);
      const s = new Spreadsheet("#x-spreadsheet-demo", options)
        .loadData({}) // load data
        .change((data) => {
          // save data to db
          console.log(data)
        });

      // data validation
      s.validate();
    });
  },
};
</script>

<style></style>
