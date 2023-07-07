<script setup>
import HeaderIndex from "@/components/header/headerIndex.vue";
import MenuList from "@/components/list/menuList.vue";
</script>

<template>
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
        <router-view style="max-height: 560px; min-height: 560px"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #77ddff;
}
.el-container {
  height: 100%;
}

/*隐藏菜单滑动条*/
.el-aside::-webkit-scrollbar {
  display: none;
  height: 100%;
}
</style>
