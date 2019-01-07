<template>
  <div class="layout">
    <my-header :userInfo="userInfo" />
    <aside class="main-sidebar">
      <sidebar-menu :router="menu" />
    </aside>
    <div class="content-wrapper">
      <!--<bread-crumb/>-->
      <div class="content">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/Header/MyHeader.vue';
  import SidebarMenu from './components/Sider/SidebarMenu.vue';
  import permission from '@/utils/permission';
  import menu from '@/routers/menu'
  //export 导出了app组件
  export default {
    data() {
      return {
        isRouterAlive: true,
        isCollapsed: false,
        userInfo: null,
        menu: []
      }
    },
    //声明了对于MyHeader,sidebarMenu,breadCrumb组件的引用
    components: {
      MyHeader,
      SidebarMenu
    },
    //实例创建前：这个阶段实例的data、methods是读不到的
    beforeCreate() {
       f2eGame.port.udb.getUserInfo().then((res) => {
           this.userInfo = res;
       });
      permission.getPermissionList().then(()=> {
        this.menu = permission.getMenuByRouter(menu)
      });
    },
    //实例被创建之后：这个阶段已经完成了数据观测(data observer)，
    //属性和方法的运算， watch/event 事件回调。
    //mount挂载阶段还没开始，$el 属性目前不可见，数据并没有在DOM元素上进行渲染
    created() {
    },
    //这个状态下数据更新并且DOM重新渲染，
    //当这个生命周期函数被调用时，组件 DOM 已经更新，
    //所以你现在可以执行依赖于 DOM 的操作。
    //当实例每次进行数据更新时updated都会执行
    updated() {},
    watch: {
      '$route': 'reload'
    },
    methods: {
      reload() {
         this.isRouterAlive = false;
         this.$nextTick(() => (this.isRouterAlive = true))
      }
    }
  }
</script>
