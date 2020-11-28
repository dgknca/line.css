import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ButtonDoc from '@/components/ButtonDoc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/docs',
    name: 'Doc',
    component: () => import(/* webpackChunkName: "doc" */ '../views/Doc.vue'),
    children: [
      {
        path: 'button',
        component: ButtonDoc
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
