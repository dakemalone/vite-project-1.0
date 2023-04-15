<template>
    <div id="login">
        <el-form style="max-width: 460px;min-height: 266px;">
            <el-form-item label="用户名:">
                <el-input v-model="userName" type="info"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="passWord" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :plain="true" @click="subRegister()" type="info">{{ register }}</el-button>
                <el-button :plain="true" @click="subLogin()" type="success">{{ login }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {ref} from "vue";
import router from '../router'
import {ElMessage} from 'element-plus'
import { setToken } from '@/utils/token'

export default {
    name: "LoginView",
    computed: {
        username() {
            return this.$router.params.username
        }
    },
    setup() {
        const login = '登录';
        const register = '注册';
        const userName = ref('');
        const passWord = ref('');

        const open2 = () => {
            ElMessage({
                message: 'login success' + userName.value + passWord.value,
                type: 'success',
            })
        }
        const open3 = () => {
            ElMessage({
                message: 'please register',
                type: 'warning',
            })
        }
        const subLogin = () => {
            if (!userName.value || !passWord.value) {
                open3()
                router.push('/register')
            } else {
                open2();
                setToken({name:'dake',passWord:'12345'})
                router.push('/');
            }
        };
        const subRegister = () => {
            open3()
            // router.push({name:'about',param: { userName}})
            router.push('/register')
        }
        return {
            login,
            register,
            userName,
            passWord,

            subLogin,
            subRegister,
            open2,
        }
    }
}
</script>

<style scoped>
.el-form {
    margin: 15% auto;
    width: 50%;
    height: 50%;
    border: 3px solid green;
    padding: 20px;
}

</style>