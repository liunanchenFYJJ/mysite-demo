import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
import Layout from '@/views/Layout' //Layout 中写布局
const Home = () => import('@/views/Home') // 懒加载
import Blog from '@/views/Blog'
import Notfound from '@/views/Notfound'
import Aboutme from '@/views/Aboutme'
import Address from '@/views/Address'
import User from '@/views/User'
import Login from '@/views/Login' // 登陆页面
import Registe from '@/views/Registe' // 注册页面
import Success from '@/views/Success' // 注册成功页面

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
      // redirect: '/layout/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          alias: 'about'  //路由别名
        },
        {
          path: 'blog',
          component: Blog,
        },
        {
          path: 'address',
          name: 'Address',
          components: {
            default: Address,
            custom: Aboutme
          }
        }
      ]
    },
    // {
    //   path: '/user/:name',
    //   component: User,
    //   children: [
    //     {
    //       path: '',
    //       component: Address
    //     },
    //     {
    //       path: 'address',
    //       name: 'address',  // 命名路由，使编程导航更加方便(父级路由中则不需要)
    //       component: Address
    //     }
    //   ]
    // },
    // {
    //   path: '/about',
    //   // name: 'Aboutme',
    //   component: Aboutme,
    //   children: [
    //     // {
    //     //   path: '',  // 这样可以单独访问
    //     //   component: Aboutme
    //     // },
    //     {
    //       path: 'address',
    //       // name: 'Address',
    //       component: Address
    //     }
    //   ]
    // },
    {
      path: '/login',
      component: Login
    },    
    {
      path: '/registe',
      component: Registe
    },
    {
      path: '/success',
      component: Success
    },
    {
      path: '*',
      // name: 'Notfound',
      component: Notfound
    }
  ]
})
