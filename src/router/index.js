import Vue from 'vue'
import Router from 'vue-router'
import VueClick from '@/components/vue/pages/VueClick'
import VueBinding from '@/components/vue/pages/VueBinding'
import VueComputed from '@/components/vue/pages/VueComputed'
import VueConditions from '@/components/vue/pages/VueConditions'
import VueFilters from '@/components/vue/pages/VueFilters'
import VueLists from '@/components/vue/pages/VueLists'
import VueComponents from '@/components/vue/pages/VueComponents'
import VueProps from '@/components/vue/pages/VueProps'
import VueRouter from '@/components/vue/pages/VueRouter'
import VueRouterLink from '@/components/vue/VueRouter/VueRouterLink'
import VueEvents from '@/components/vue/pages/VueEvents'
import VueRouterHome from '@/components/vue/VueRouter/VueRouterHome'
import VueRouterUsers from '@/components/vue/VueRouter/VueRouterUsers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueClick',
      component: VueClick
    },
    {
      path: '/2',
      name: 'VueBinding',
      component: VueBinding
  	},
    {
      path: '/3',
      name: 'VueComputed',
      component: VueComputed
    },
    {
      path: '/4',
      name: 'VueConditions',
      component: VueConditions
    },
    {
      path: '/5',
      name: 'VueFilters',
      component: VueFilters
    },
    {
      path: '/6',
      name: 'VueLists',
      component: VueLists
    },
    {
      path: '/7',
      name: 'VueComponents',
      component: VueComponents
    },
    {
      path: '/8',
      name: 'VueProps',
      component: VueProps
    },
    {
      path: '/9/:id',
      name: 'VueRouter',
      component: VueRouter,
      children: [ 
      {
        path:'',
        component: VueRouter
      },
      {

        path: '/home',
        // name: 'VueRouterHome',
        component: VueRouterHome
      },
      {

        path: '/users',
        // name: 'VueRouterUsers',
        component: VueRouterUsers
      }
      ]
    },
    {
      path: '/10',
      name: 'VueEvents',
      component: VueEvents
    }
  ]
})
