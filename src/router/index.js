import Vue from 'vue'
import Router from 'vue-router'
import PhotoGrid from 'vue-photo-grid'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Self from '@/components/Self'
import Collab from '@/components/Collab'
import Lastvacation from '@/components/Lastvacation'
import Winter from '@/components/Winter'
import Riis from '@/components/Riis'

Vue.use(Router)
Vue.use(PhotoGrid)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },

    {
      path: '/collab',
      name: 'Collab',
      component: Collab
    },

    {
      path: '/lastvacation',
      name: 'Lastvacation',
      component: Lastvacation
    },

    {
      path: '/winter',
      name: 'Winter',
      component: Winter
    },
    {
      path: '/riis',
      name: 'Riis',
      component: Riis
    }

  ]
})
