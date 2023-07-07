<template>
  <div id="materialBoard">
    物料看板
    <el-row>
      <el-col :span="8" class="demo1">
        <vxe-table :data="tableData" align="center">
          <vxe-column field="model" title="序号" width="160">
            <template #default="{ row }">
              <el-text class="mx-1" size="small">{{ row.model }}</el-text>
            </template>
          </vxe-column>
          <vxe-column field="amount" title="ID" width="80">
            <template #default="{ row }">
              <el-text class="mx-1" size="small">{{ row.amount }}</el-text>
            </template>
          </vxe-column>
        </vxe-table>
      </el-col>
      <el-col :span="12" class="demo2">
        <el-space wrap>
          <el-card
            v-for="i in 3"
            :key="i"
            class="box-card"
            style="width: 120px"
          >
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ "List item " + o }}
            </div>
          </el-card>
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableData = ref([
  { model: "CCC-A2255K-XD", amount: 1273 },
  { model: "DIO-SMD26PLHE-01", amount: 5400 },
  { model: "CRE-SOOO-J6D-H", amount: 1000 },
]);
</script>

<style scoped>
.el-row {
  background-color: aqua;
}
.demo1 {
  background-color: plum;
}
.demo2 {
  background-color: bisque;
}
</style>
