import Vue from 'vue'
import Router from 'vue-router'
import PhotoGrid from 'vue-photo-grid'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Bwself from '@/components/Bwself'
import Contact from '@/components/Contact'
import Lastvacation from '@/components/Lastvacation'
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
      path: '/bwself',
      name: 'Bwself',
      component: Bwself
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/lastvacation',
      name: 'Lastvacation',
      component: Lastvacation
    }

  ]
})
