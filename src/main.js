import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
// vxe-tbale
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入axios vue-axios轻度封装 先导入axios 再导入vue-axios ，app.use(VueAxios,axios)
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(element)
//调用
app.use(VueAxios,axios)

//创建一个pinia，和vuex的store相类似
const pinia = createPinia()
app.use(pinia)
for(const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
app.use(VXETable)

app.mount('#app')
