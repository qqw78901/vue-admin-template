import Vue from 'vue'; //Vue是整个框架的主类
import VueRouter from 'vue-router'; //VueRouter是框架的路由管理器
import iView from 'iview'; //iView是项目的ui组件库

import router from './routers'; //router是项目路由配置
import App from './App.vue'; //App是整个应用的根元素

import './theme/index.less'; //用来控制页面iview组件的样式主题
import './index.css'; //是页面主要自定义样式


import './utils/permission'; //permission是项目的权限管理
import './utils/http'; //网络请求方法
import './utils/moment'; //时间处理方法
import './API'; //API是接口配置
import './common/index.js';

import Common from './utils/common'; //Common是项目公共功能方法

Common.init(); //初始化Common

//注入VueRouter和iView
Vue.use(VueRouter);
Vue.use(iView);

export function render() {
  //使用new关键字能够创建Vue的实例，构造函数会接收包含三个属性的配置对象。
  new Vue({
    el: '#app', //Vue应用的容器节点
    router, //挂载根路由
    render: h => h(App) //渲染vue组件
  })
}

// 判断用户是否登录
Common.isLogin(function (res) {
  if (res) {
    // 已登录，渲染页面
    render();
  } else {
    // 未登录，唤起登录
    Common.login();
  }
})
