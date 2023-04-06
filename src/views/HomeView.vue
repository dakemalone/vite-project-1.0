<script setup>
import homeChildren from "@/router/homeChildren";
import router from '@/router'

const subRedirct = (path1, path2) => {
    console.log('/' + path1 + '/' + path2)
    router.push('/' + path1 + '/' + path2)
}
const backToHome = () => {
    router.push('/');
}
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-button @click="backToHome()">
                    <span>
                        Header
                    </span>
                </el-button>
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
                                    router="true"
                            >
                                <div v-for="subRouter in homeChildren" :key="subRouter">
                                    <el-sub-menu v-if="subRouter.children != null" v-bind:index="subRouter.path">
                                        <template #title>
                                            <el-icon>
                                                <User/>
                                            </el-icon>
                                            <span>{{ subRouter.name }}</span>
                                        </template>
                                        <el-menu-item
                                                v-for="secondRouter in subRouter.children"
                                                :index="'/'+subRouter.path+'/'+secondRouter.path"
                                                :key="secondRouter.path"
                                        >{{ secondRouter.name }}
                                        </el-menu-item>
                                    </el-sub-menu>
                                    <el-menu-item v-else-if="subRouter.children == null" :index="'/'+subRouter.path">
                                        <el-icon>
                                            <EditPen/>
                                        </el-icon>
                                        <span>{{ subRouter.name }}</span>
                                    </el-menu-item>
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

