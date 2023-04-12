import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import homeChildren from "@/router/routes";
import aside from "@/components/aside/asideIndex.vue"
import NotFound from "@/views/404.vue"
import asyncRoutes from './routes'


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: homeChildren,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      hidden: false,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      hidden: false,
    },
    {
      path: '/aside',
      name: 'aside',
      component: aside,
      hidden: false,
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound, 
      meta: { title: "404" } 
    },

]
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 动态添加路由的方法
export function addRoutes(menus) {
  // 是否有新的路由
  let hasNewRoutes = false
  const findRoutes = arr => {
    arr.forEach(item => {
      // 查找匹配的路由并添加到默认路由的child中
      let route = asyncRoutes.find(e => e.path == item.frontpath)
      if (route && !router.hasRoute(route.path)) {
        router.addRoute("admin", route)
        hasNewRoutes = true
      }
      // 如果有子路由则递归
      if (item.child && item.child.length > 0) {
        findRoutes(item.child)
      }
    });
  }
  findRoutes(menus)
  return hasNewRoutes
}

export default router

