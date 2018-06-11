import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Notfound from '@/views/Notfound'
import Aboutme from '@/views/Aboutme'
import Address from '@/views/Aboutme'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: {name: 'Home'}},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:name',
      name: 'User',
      component: User
    },
    {
      path: '/about',
      name: 'Aboutme',
      component: Aboutme,
      children: [
        {
          path: 'address',
          name: 'Address',
          component: Address
        }
      ]
    },
    {
      path: '*',
      name: 'Notfound',
      component: Notfound
    },
  ]
})
