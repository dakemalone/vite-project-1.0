<template>
  <div id="checkStation">
    <el-form label-width="120px">
      <el-form-item label="工位">
        <el-input />
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <el-button>修改</el-button>
        <el-button>添加</el-button>
      </el-form-item>
      <el-form-item label="科室">
        <el-input />
      </el-form-item>
      <el-form-item label="组别">
        <el-input />
      </el-form-item>
      <el-form-item label="备注">
        <el-input />
      </el-form-item>
    </el-form>
    <grid-table-1 :urlStr="url"></grid-table-1>
  </div>
</template>

<script>
import gridTable1 from '../../components/gridTable/gridTable1.vue';
export default {
  data(){
    return {
      url: 'http://www.baidu.com'
    }
  },
  components: { gridTable1 },};
</script>

<style>
.el-form-item__label{
  width: 60px !important;
}
</style>
