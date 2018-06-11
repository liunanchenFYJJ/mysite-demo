import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Layout from '@/views/Layout' //Layout 中写布局
import Notfound from '@/views/Notfound'
import Aboutme from '@/views/Aboutme'
import Address from '@/views/Address'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  routes: [
    {path: '/', redirect: {name: 'Layout'}},
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      redirect: '/layout/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        }
      ]
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
