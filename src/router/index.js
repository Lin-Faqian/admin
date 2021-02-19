import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 继承/home路由
        name: 'home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
