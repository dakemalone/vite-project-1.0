<script setup>
import HeaderIndex from "@/components/header/headerIndex.vue";
import MenuList from "@/components/list/menuList.vue";
import TagList from "../layout/components/TagList.vue";
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
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-main {
  min-height: 600px;
  background-color: darkgrey;
}
.el-aside {
  min-height: 610px;
  max-height: 610px;
}
/*隐藏菜单滑动条*/
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>
