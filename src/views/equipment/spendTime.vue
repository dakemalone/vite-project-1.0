<template>
  <div id="spendTime">
    <vxe-table :data="tableData" align="center">
      <vxe-column type="seq" title="序号" width="60"></vxe-column>
      <vxe-column field="id" title="ID" width="210"></vxe-column>
      <vxe-column field="order" title="工单" width="100"></vxe-column>
      <vxe-column field="model" title="型号" width="160"></vxe-column>
      <vxe-colgroup title="过站时长">
        <vxe-column field="p1" title="镭雕" width="80">
          <template #default="{ row }">
            <template v-if="row.p1 > 12">
              <span style="color: red">{{ row.p1 }}</span>
            </template>
          </template>
        </vxe-column>
        <vxe-column field="p1" title="印刷" width="80"></vxe-column>
        <vxe-column field="p1" title="spi" width="80"></vxe-column>
        <vxe-column field="p1" title="高速贴片" width="80"></vxe-column>
        <vxe-column field="p1" title="多功能贴片" width="80"></vxe-column>
        <vxe-column field="p1" title="2D AOI" width="80"></vxe-column>
        <vxe-column field="p1" title="回流炉" width="80"></vxe-column>
        <vxe-column field="p1" title="3D AOI" width="80"></vxe-column>
        <vxe-column field="p1" title="AXI" width="80"></vxe-column>
        <vxe-column field="p2" title="ICT" width="80">
          <template #default="{ row }">
            <vxe-button>删除</vxe-button>
          </template>
        </vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tableData = ref([
  {
    id: "P000S001005123136L000090",
    order: "10051231",
    model: "PCA-VLWH001_P-01",
    p1: 14,
    p2: "Shenzhen",
  },
]);
</script>
