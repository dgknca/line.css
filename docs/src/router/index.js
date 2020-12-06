import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '@/components/GettingStarted.vue'

import GlobalsDoc from '@/components/docs/GlobalsDoc.vue'
import ButtonDoc from '@/components/docs/ButtonDoc.vue'
import InputDoc from '@/components/docs/InputDoc.vue'
import TextareaDoc from '@/components/docs/TextareaDoc.vue'
import CheckboxDoc from '@/components/docs/CheckboxDoc.vue'
import RadioDoc from '@/components/docs/RadioDoc.vue'
import RangeDoc from '@/components/docs/RangeDoc.vue'
import SelectDoc from '@/components/docs/SelectDoc.vue'
import FileInputDoc from '@/components/docs/FileInputDoc.vue'
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
        component: GettingStarted
      },
      {
        path: 'globals',
        component: GlobalsDoc
      },
      {
        path: 'elements/button',
        component: ButtonDoc
      },
      {
        path: 'form/input',
        component: InputDoc
      },
      {
        path: 'form/textarea',
        component: TextareaDoc
      },
      {
        path: 'form/checkbox',
        component: CheckboxDoc
      },
      {
        path: 'form/radio',
        component: RadioDoc
      },
      {
        path: 'form/file',
        component: FileInputDoc
      },
      {
        path: 'form/range',
        component: RangeDoc
      },
      {
        path: 'form/select',
        component: SelectDoc
      },
      {
        path: 'components/slider',
        component: SliderDoc
      }
    ]
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
