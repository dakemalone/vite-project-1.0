import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(router)
app.use(element)

//创建一个pinia，和vuex的store相类似
const pinia = createPinia()
app.use(pinia)
for(const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
app.mount('#app')
