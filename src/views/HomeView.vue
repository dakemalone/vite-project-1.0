<script setup>
import homeChildren from "@/router/homeChildren";
import HeaderIndex from "@/components/header/headerIndex.vue";

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderIndex></HeaderIndex>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
                router="true"
              >
                <div v-for="routes in homeChildren" v-bind:key="routes">
                  <el-sub-menu :index="routes.path">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>{{ routes.name }}</span>
                    </template>
                    <div v-if="routes.children != null">
                      <el-menu-item-group title="">
                        <div v-for="croutes in routes.children" :key="croutes">
                          <el-menu-item
                            :index="'/' + routes.path + '/' + croutes.path"
                            >{{ croutes.name }}</el-menu-item
                          >
                        </div>
                      </el-menu-item-group>
                    </div>
                  </el-sub-menu>
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
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
  min-height: 600px;
  background-color: aquamarine;
}

.el-menu {
  min-height: 600px;
}
</style>
