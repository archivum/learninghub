import Vue from 'vue'
import Router from 'vue-router'
import Prj1 from '@/components/vue/Prj1'
import Prj2 from '@/components/vue/Prj2'
import Prj3 from '@/components/vue/Prj3'
import Prj4 from '@/components/vue/Prj4'
import Prj5 from '@/components/vue/Prj5'
import Prj6 from '@/components/vue/Prj6'
import Prj7 from '@/components/vue/Prj7'
import Prj8 from '@/components/vue/Prj8'
import Prj9 from '@/components/vue/Prj9'
import Prj10 from '@/components/vue/Prj10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Prj1',
      component: Prj1
    },
    {
      path: '/2',
      name: 'Prj2',
      component: Prj2
  	},
    {
      path: '/3',
      name: 'Prj3',
      component: Prj3
    },
    {
      path: '/4',
      name: 'Prj4',
      component: Prj4
    },
    {
      path: '/5',
      name: 'Prj5',
      component: Prj5
    },
    {
      path: '/6',
      name: 'Prj6',
      component: Prj6
    },
    {
      path: '/7',
      name: 'Prj7',
      component: Prj7
    },
    {
      path: '/8',
      name: 'Prj8',
      component: Prj8
    },
    {
      path: '/9',
      name: 'Prj9',
      component: Prj9
    },
    {
      path: '/10',
      name: 'Prj10',
      component: Prj10
    }
  ]
})
