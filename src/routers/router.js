import error403 from '../views/errorpage/403.vue';
import error404 from '../views/errorpage/404.vue'
import menus from '../routers/menu';
import DetailTable from '../components/tables/DetailTable';


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
        path: '/skipDetail',
        title: '跳转详情',
        name: '跳转详情',
        component: DetailTable, //带参数跳转
        meta: {
            id: 1,
        }
    },
    {
        path: '/403',
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
