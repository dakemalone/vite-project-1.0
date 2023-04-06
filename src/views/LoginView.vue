<template>
    <div id="login">
        用户名:
        <el-input v-model="userName" type="info"></el-input>
        密码:
        <el-input v-model="passWord" type="password"></el-input>
        <el-button :plain="true" @click="subLogin()" type="success">{{ login }}</el-button>
        <el-button :plain="true" @click="subRegister()" type="info">{{ register }}</el-button>
    </div>
</template>

<script>
import {ref} from "vue";
import router from '../router'
import {ElMessage} from 'element-plus'

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
#login {
    margin: auto;
    width: 50%;
    height: 50%;
    border: 3px solid green;
    padding: 20px;
}

</style>