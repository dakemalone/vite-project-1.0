<script setup>
import homeChildren from "@/router/homeChildren";
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
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
                            >
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon>
                                            <location/>
                                        </el-icon>
                                        <span>Navigator One</span>
                                    </template>
                                    <el-menu-item-group title="Group One">
                                        <el-menu-item index="1-1">item one</el-menu-item>
                                        <el-menu-item index="1-2">item two</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group Two">
                                        <el-menu-item index="1-3">item three</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="1-4">
                                        <template #title>item four</template>
                                        <el-menu-item index="1-4-1">item one</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                                <el-menu-item index="2">
                                    <el-icon>
                                        <icon-menu/>
                                    </el-icon>
                                    <span>Navigator Two</span>
                                </el-menu-item>
                                <el-menu-item index="3" disabled>
                                    <el-icon>
                                        <document/>
                                    </el-icon>
                                    <span>Navigator Three</span>
                                </el-menu-item>
                                <el-menu-item index="4">
                                    <el-icon>
                                        <setting/>
                                    </el-icon>
                                    <span>Navigator Four</span>
                                </el-menu-item>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>
                    <li v-for="item in homeChildren" v-bind:key="item">{{item.name}}
                     <span v-if="item.children !== null">
                         <li v-for="itemChildren in item.children" v-bind:key="itemChildren">{{itemChildren.name}}</li>
                     </span>
                    </li>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.el-main {
    min-height: 600px;
    background-color:darkgrey;
}
.el-aside{
    min-height: 600px;
    background-color: aquamarine;
}
.el-menu {
    min-height: 600px;
}
</style>

