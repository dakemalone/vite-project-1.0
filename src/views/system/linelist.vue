<template>
  <div id="checkStation">
    <grid-table-1 :urlStr="url"></grid-table-1>
  </div>
</template>

<script>
import gridTable1 from "../../components/gridTable/gridTable1.vue";
export default {
  data() {
    return {
      url: "http://localhost:8080/test",
    };
  },
  components: { gridTable1 },
};
</script>

<style>
.el-form-item__label {
  width: 60px !important;
}
</style>
