<template>
  <div id="equipment">
    <router-view></router-view>
  </div>
</template>

<script>
import { linelist } from "@/api/test.js";
import { ref } from "vue";
export default {
  setup() {
    let rowData = ref([]);
    const responseData = linelist();
    responseData.then((result) => {
      rowData.value = result.data.data;
    });
    return {
      rowData,
    };
  },
};
</script>

<style></style>
