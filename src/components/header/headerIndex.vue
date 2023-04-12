<template>
  <div id="header">
    <el-row>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <div class="demo-image">
            <div class="block">
              <img src="@/assets/logo.svg"/>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
      <el-col :span="2">
        <div class="grid-content ep-bg-purple">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
};
</script>

<style scoped>
.demo-image .block {
  padding: 5px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
