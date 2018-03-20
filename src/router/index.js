import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'

/*** Vue ***/
import VueLanding from '@/components/vue/pages/VueLanding'
import VueClick from '@/components/vue/pages/VueClick'
import VueBinding from '@/components/vue/pages/VueBinding'
import VueComputed from '@/components/vue/pages/VueComputed'
import VueConditions from '@/components/vue/pages/VueConditions'
import VueFilters from '@/components/vue/pages/VueFilters'
import VueLists from '@/components/vue/pages/VueLists'
import VueComponents from '@/components/vue/pages/VueComponents'
import VueProps from '@/components/vue/pages/VueProps'
import VueRouter from '@/components/vue/pages/VueRouter'
import VueEvents from '@/components/vue/pages/VueEvents'

/*** Vue ***/
import ReactLanding from '@/components/react/pages/ReactLanding'


/*** 404 ***/
import NotFound from '@/components/notfound/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    /*** Vue ***/
    {
      path: '/vue',
      name: 'VueLanding',
      component: VueLanding
    },
    {
      path: '/vue/click',
      name: 'VueClick',
      component: VueClick
    },
    {
      path: '/vue/bind',
      name: 'VueBinding',
      component: VueBinding
  	},
    {
      path: '/vue/computed',
      name: 'VueComputed',
      component: VueComputed
    },
    {
      path: '/vue/conditions',
      name: 'VueConditions',
      component: VueConditions
    },
    {
      path: '/vue/filters',
      name: 'VueFilters',
      component: VueFilters
    },
    {
      path: '/vue/lists',
      name: 'VueLists',
      component: VueLists
    },
    {
      path: '/vue/components',
      name: 'VueComponents',
      component: VueComponents
    },
    {
      path: '/vue/props',
      name: 'VueProps',
      component: VueProps
    },
    {
      path: '/vue/router',
      name: 'VueRouter',
      component: VueRouter
    },
    {
      path: '/vue/events',
      name: 'VueEvents',
      component: VueEvents
    },
    /*** React ***/
    {
      path: '/react',
      name: 'ReactLanding',
      component: ReactLanding
    },
    /*** 404 ***/
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
