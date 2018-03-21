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
import VueRouterHome from '@/components/vue/VueRouter/VueRouterHome'
import VueRouterUsers from '@/components/vue/VueRouter/VueRouterUsers'
import VueEvents from '@/components/vue/pages/VueEvents'

/*** Vue ***/
import ReactLanding from '@/components/react/pages/ReactLanding'



/*** 404 ***/
import NotFound from '@/components/notfound/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Landing',
        component: Landing
      },
      {
      path: '/vue/',
      name: 'VueLanding',
      component: VueLanding,
      children: [
         {
          path: 'click',
          name: 'VueClick',
          component: VueClick
        }, {
          path: 'bind',
          name: 'VueBinding',
          component: VueBinding
        }, {
          path: 'computed',
          name: 'VueComputed',
          component: VueComputed
        }, {
          path: 'conditions',
          name: 'VueConditions',
          component: VueConditions
        }, {
          path: 'filters',
          name: 'VueFilters',
          component: VueFilters
        }, {
          path: 'lists',
          name: 'VueLists',
          component: VueLists
        }, {
          path: 'components',
          name: 'VueComponents',
          component: VueComponents
        }, {
          path: 'props',
          name: 'VueProps',
          component: VueProps
        },
        {
          path: 'events',
          name: 'VueEvents',
          component: VueEvents
        },
        {
        path: '/routing/',
        name: 'VueRouter',
        component: VueRouter,
        children: [
          {
            path: "home",
            //name: "VueRouterHome",
            component: VueRouterHome
          },
          {
            path: "users",
            // name: 'VueRouterUsers',
            component: VueRouterUsers
          }
        ]
      },
      ]
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
