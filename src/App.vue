<template>
    <div class="layout">
        <MyHeader :userInfo="userInfo" />
        <aside class="main-sidebar">
            <sidebar-menu :router="router()" :product-list="productList" />
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
    import MyHeader from './components/header/MyHeader.vue';
    import sidebarMenu from './components/sider/SidebarMenu.vue';
    import breadCrumb from './components/Breadcrumb';
    import permission from './utils/permission';
    import menuRouter from './routers/menu';
    import directive from './utils/directive'
    import kpiCodes from './utils/kpiCodes'
    //export 导出了app组件
    export default {
        data() {
            return {
                isRouterAlive:true,
                isCollapsed: false,
                userInfo: null,
                productList:[{
                    product: "ALL",
                    description: "全部产品"
                }]
            }
        },
        //声明了对于MyHeader,sidebarMenu,breadCrumb组件的引用
        components: {
            MyHeader,
            sidebarMenu,
            breadCrumb
        },
        //实例创建前：这个阶段实例的data、methods是读不到的
        beforeCreate() {
            f2eGame.port.udb.getUserInfo().then((res) => {
                this.userInfo = res;
            });

        },
        //实例被创建之后：这个阶段已经完成了数据观测(data observer)，
        //属性和方法的运算， watch/event 事件回调。
        //mount挂载阶段还没开始，$el 属性目前不可见，数据并没有在DOM元素上进行渲染
        created() {
            permission.getPermissionMenuList().then(data=>{
                this.productList = this.productList.concat(data);
            });
            kpiCodes.init();
        },
        //这个状态下数据更新并且DOM重新渲染，
        //当这个生命周期函数被调用时，组件 DOM 已经更新，
        //所以你现在可以执行依赖于 DOM 的操作。
        //当实例每次进行数据更新时updated都会执行
        updated() {
        },
        watch:{
            '$route':'reload'
        },
        methods: {
            reload(){
                this.isRouterAlive = false;
                this.$nextTick(() => (this.isRouterAlive = true))
            },
            router(){
                return permission.updateMenulist(menuRouter)
            },
        }
    }
</script>
