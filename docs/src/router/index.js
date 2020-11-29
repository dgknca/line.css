import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DocIndex from '@/components/DocIndex.vue'

import ButtonDoc from '@/components/docs/ButtonDoc.vue'
import SliderDoc from '@/components/docs/SliderDoc.vue'

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
        path: '',
        component: DocIndex
      },
      {
        path: 'button',
        component: ButtonDoc
      },
      {
        path: 'slider',
        component: SliderDoc
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
