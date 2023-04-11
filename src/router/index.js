import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import homeChildren from "@/router/homeChildren";
import aside from "@/components/aside/asideIndex.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    }
  ]
})

export default router
