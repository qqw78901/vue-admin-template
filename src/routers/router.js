import error401 from '../views/ErrorPage/401.vue';
import error403 from '../views/ErrorPage/403.vue';
import error404 from '../views/ErrorPage/404.vue';
import menus from '../routers/menu';


const Routers = [{
    path: '/',
    redirect: '/index',
    name: '首页',
    meta: {
      id: 1,
      icon: 'fa-dashboard',
    },
  },
  {
    path: '/401',
    name: "401",
    component: error401,
    meta: {
      id: 2
    }
  },
  {
    path: '/403',
    name: "403",
    component: error403,
    meta: {
      id: 2
    }
  },
  {
    path: '*',
    component: error404,
    meta: {
      id: 2
    }
  }

].concat(menus);
export default Routers;
