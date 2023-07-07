<template>
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
        <template v-for="routes in homeChildren" v-bind:key="routes">
          <template v-if="routes.children != null">
            <el-sub-menu :index="routes.path">
              <template #title>
                <el-icon>
                  <component :is="routes.meta.icon"></component>
                </el-icon>
                <span>{{ routes.name }}</span>
              </template>
              <template v-if="routes.children != null">
                <template v-for="croutes in routes.children" :key="croutes">
                  <el-menu-item
                    :index="'/' + routes.path + '/' + croutes.path"
                    >{{ croutes.name }}</el-menu-item
                  >
                </template>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="'/' + routes.path">
              <el-icon>
                <component :is="routes.meta.icon"></component>
              </el-icon>
              <span>{{ routes.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import homeChildren from "@/router/routes";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.tac {
  height: 100%;
}
</style>
