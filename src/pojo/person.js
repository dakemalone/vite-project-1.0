import {reactive} from "vue";

let person = reactive({
    name: {
        key: '姓名',
        value: '',
    },
    password: {
        key:'密码',
        value: '',
    },
    gender: {
        key:'性别',
        value: '',
    },
    age: {
        key:'年龄',
        value: 0,
    },
    factory: {
        key:'工厂',
        value: '',
    },
    department: {
        key:'部门',
        value: '',
    },
    role: {
        key:'角色',
        value: [],
    },
    email: {
        key:'邮箱',
        value: '',
    },
    telephone: {
        key:'电话',
        value: '',
    },
    createTime: {
        key:'时间',
        value: Date,
    },
})
export default person
