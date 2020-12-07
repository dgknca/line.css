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
import AccordionDoc from '@/components/docs/AccordionDoc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
    meta: { title: 'Line.css' }
  },
  {
    path: '/docs',
    name: 'Doc',
    component: () => import(/* webpackChunkName: "doc" */ '../views/Doc.vue'),
    children: [
      {
        path: '',
        component: GettingStarted,
        meta: { title: 'Line.css' }
      },
      {
        path: 'globals',
        component: GlobalsDoc
      },
      {
        path: 'elements/button',
        component: ButtonDoc,
        meta: { title: 'Button' }
      },
      {
        path: 'form/input',
        component: InputDoc,
        meta: { title: 'Input' }
      },
      {
        path: 'form/textarea',
        component: TextareaDoc,
        meta: { title: 'Textarea' }
      },
      {
        path: 'form/checkbox',
        component: CheckboxDoc,
        meta: { title: 'Checkbox' }
      },
      {
        path: 'form/radio',
        component: RadioDoc,
        meta: { title: 'Radio' }
      },
      {
        path: 'form/file',
        component: FileInputDoc,
        meta: { title: 'File' }
      },
      {
        path: 'form/range',
        component: RangeDoc,
        meta: { title: 'Range' }
      },
      {
        path: 'form/select',
        component: SelectDoc,
        meta: { title: 'Select' }
      },
      {
        path: 'components/slider',
        component: SliderDoc,
        meta: { title: 'Slider' }
      },
      {
        path: 'components/accordion',
        component: AccordionDoc,
        meta: { title: 'Accordion' }
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
