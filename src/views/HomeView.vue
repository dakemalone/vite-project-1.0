<script setup>
import HeaderIndex from "@/components/header/headerIndex.vue";
import MenuList from "@/components/list/menuList.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderIndex></HeaderIndex>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <MenuList></MenuList>
        </el-aside>
        <el-main>
          <!-- <TagList></TagList> 路由历史暂时不会用-->
          <router-view style="max-height: 560px;min-height: 560px;"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-main {
  border-top: white 1px solid;
  border-right: white 1px solid;
  border-bottom: white 1px solid;
}
.el-header {
  background-color: #77DDFF;
}
.el-aside {
  min-height: 610px;
  max-height: 610px;
  background-color: #545c64;
}
/*隐藏菜单滑动条*/
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>
