import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '@/components/GettingStarted.vue'

import GlobalsDoc from '@/components/docs/GlobalsDoc.vue'

// Elements
import ButtonDoc from '@/components/docs/ButtonDoc.vue'
import ImageDoc from '@/components/docs/ImageDoc.vue'
import BlockquoteDoc from '@/components/docs/BlockquoteDoc.vue'
import ProgressDoc from '@/components/docs/ProgressDoc.vue'
import DeleteDoc from '@/components/docs/DeleteDoc.vue'
import BoxDoc from '@/components/docs/BoxDoc.vue'

// Form
import InputDoc from '@/components/docs/InputDoc.vue'
import TextareaDoc from '@/components/docs/TextareaDoc.vue'
import CheckboxDoc from '@/components/docs/CheckboxDoc.vue'
import RadioDoc from '@/components/docs/RadioDoc.vue'
import RangeDoc from '@/components/docs/RangeDoc.vue'
import SelectDoc from '@/components/docs/SelectDoc.vue'
import FileInputDoc from '@/components/docs/FileInputDoc.vue'
import FormExamplesDoc from '@/components/docs/FormExamplesDoc.vue'

// Components
import SliderDoc from '@/components/docs/SliderDoc.vue'
import AccordionDoc from '@/components/docs/AccordionDoc.vue'
import DropdownDoc from '@/components/docs/DropdownDoc.vue'
import CardDoc from '@/components/docs/CardDoc.vue'
import NotificationDoc from '@/components/docs/NotificationDoc.vue'

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
        component: GlobalsDoc,
        meta: { title: 'Global Variables' }
      },
      {
        path: 'elements/button',
        component: ButtonDoc,
        meta: { title: 'Button' }
      },
      {
        path: 'elements/delete',
        component: DeleteDoc,
        meta: { title: 'Delete' }
      },
      {
        path: 'elements/image',
        component: ImageDoc,
        meta: { title: 'Image' }
      },
      {
        path: 'elements/blockquote',
        component: BlockquoteDoc,
        meta: { title: 'Blockquote' }
      },
      {
        path: 'elements/progress',
        component: ProgressDoc,
        meta: { title: 'Progress' }
      },
      {
        path: 'elements/notification',
        component: NotificationDoc,
        meta: { title: 'Notification' }
      },
      {
        path: 'elements/box',
        component: BoxDoc,
        meta: { title: 'Box' }
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
        path: 'form/form',
        component: FormExamplesDoc,
        meta: { title: 'Form Examples' }
      },
      {
        path: 'components/slider',
        component: SliderDoc,
        meta: { title: 'Slider' }
      },
      {
        path: 'components/dropdown',
        component: DropdownDoc,
        meta: { title: 'Dropdown' }
      },
      {
        path: 'components/card',
        component: CardDoc,
        meta: { title: 'Card' }
      },
      {
        path: 'components/accordion',
        component: AccordionDoc,
        meta: { title: 'Accordion' }
      },
      {
        path: '*',
        name: 'catchAll',
        component: Home
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
