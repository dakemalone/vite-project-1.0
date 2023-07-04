<script setup>
import BarEcharts from "../../components/echarts/barEcharts.vue";
import PieEcharts from "../../components/echarts/pieEcharts.vue";

const tableData = [
  { key: "生产线别", value: "LINE1" },
  { key: "产品工单", value: "10048998" },
  { key: "产品型号", value: "PCA-PVK0038_Y-01" },
  { key: "产品流程", value: "NOR001" },
  { key: "标准产能", value: "143" },
  { key: "刮刀治具", value: "143" },
  { key: "钢网治具", value: "143" },
  { key: "针床治具", value: "143" },
  { key: "锡膏寿命", value: "143" },
  { key: "当前投入", value: "143" },
];
</script>

<template>
  <div id="smt" style="height: 100%">
    <el-row>
      <el-col :md="24"
        ><el-text tag="p" class="text-center text-gray-950 font-bold text-xl"
          >BOEVX SMT LINE1 生产看板</el-text
        >
      </el-col>
    </el-row>
    <el-row class="borderCol">
      <el-col :md="18">
        <el-row>
          <el-col :md="8">
            <div class="text-sm">
              <el-row
                ><div class="list-data">
                  <el-table
                    :data="tableData"
                    style="width: 100%"
                    :show-header="false"
                  >
                    <el-table-column prop="key" label="Key" width="80" />
                    <el-table-column prop="value" label="Value" width="150" />
                  </el-table></div
              ></el-row>
            </div>
          </el-col>
          <el-col :md="16"
            ><div class="grid-content demo4" style="height: 100%">
              <PieEcharts /></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :md="24"
            ><div class="grid-content demo5" style="height: 100%">
              <BarEcharts /></div
          ></el-col>
        </el-row>
      </el-col>
      <el-col :md="6"><div class="grid-content demo6"></div></el-col>
    </el-row>
  </div>
</template>

<style>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-table {
  --el-table-border: 0px solid var(--el-table-border-color) !important;
}
.el-table .el-table__cell {
  padding: calc(1%) 0 !important;
}

/* .demo1 {
  background-color: antiquewhite;
}
.demo2 {
  background-color: aqua;
}
.demo3 {
  background-color: chocolate;
}
.demo4 {
  background-color: forestgreen;
}
.demo5 {
  background-color: antiquewhite;
}
.demo6 {
  background-color: palevioletred;
} */
</style>
