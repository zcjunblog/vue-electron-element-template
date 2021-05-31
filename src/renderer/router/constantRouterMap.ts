import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect:'/index'},
    { path: '/index', name: '首页', component: () => import('@renderer/views/index/index.vue') },
    { path: '/login', name: '确认身份', component: () => import('@renderer/views/login.vue') },
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    { path: '/land', name: '总览', component: () => import('@renderer/components/LandingPage.vue') },
]

export default routes
