import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';



// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
export default router;