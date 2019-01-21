/** var Layout =()=>import('../views/Layout/layout.vue')可以按需引入路由，相当于
 var  layout=function(){var component = require('xxxx.vue')  return component }
 需要执行到这个function的时候才回去require某个组件
 如果不需要按需加载，直接 import Layout from '../views/layout/layout.vue'
 */
const Layout = () => import( /* webpackChunkName: "layout"*/ '../views/Layout/layout.vue')
const Dashboard = () => import( /* webpackChunkName: "dashboard"*/ '../views/Dashboard/')

const menus = [{
    path: '/index',
    name: 'index',
    component: Dashboard,
    hidden: true,
    meta: {
      // 页面的权限id，与权限系统对应，如果不受权限系统控制，则删除该属性
      //页面标题
      title: "首页",
      //菜单icon
      icon: 'fa-home'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    hidden: false,
    meta: {
      title: "概要",
      //菜单icon
      icon: 'fa-home'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: Dashboard,
    hidden: false,
    meta: {
      privilegeId: 8,
      title: "菜单1",
      //菜单icon
      icon: 'fa-user'
    }
  },
  {
    path: '/dept',
    name: 'dept',
    component: Dashboard,
    hidden: false,
    meta: {
      privilegeId: 1,
      title: "菜单2",
      //菜单icon
      icon: 'fa-tree'
    }
  },
  {
    path: '/menus',
    name: 'menus',
    component: Layout,
    hidden: false,
    meta: {
      privilegeId: 1,
      title: "二级菜单",
      //菜单icon
      icon: 'fa-book'
    },
    children:[
      {
        path: 'sub1',
        name: 'sub1',
        component: Dashboard,
        hidden: false,
        meta: {
          privilegeId: 1,
          title: "二级菜单1",
          //菜单icon
          icon: 'fa-book'
        },
      },
      {
        path: 'sub2',
        name: 'sub2',
        component: Dashboard,
        hidden: false,
        meta: {
          privilegeId: 1,
          title: "二级菜单1",
          //菜单icon
          icon: 'fa-book'
        },
      }
    ]
  },
];
export default menus;
