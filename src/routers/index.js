import VueRouter from 'vue-router';
import Routers from './router';
import iView from 'iview'
import permission from '../utils/permission';
// 路由配置
const RouterConfig = {
  mode: 'hash',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

const turnTo = (to, next) => {
  permission.checkPermission(to).then(hadPermission => {
    if (hadPermission) {
    next() // 有权限，可访问
  } else {
    next({
      replace: true,
      name: '401'
    }) // 无权限，重定向到401页面
  }
  })
}

const LOGIN_PAGE_NAME = 'login';
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const isLogin = true;
  if (isLogin) {
    turnTo(to, next);
  } else if (to.name === LOGIN_PAGE_NAME) {
    //未登录，跳转登录页
    next();
  } else {
    //未登录
    next({
      name: LOGIN_PAGE_NAME
    });
  }
});
router.afterEach(to => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0)
});
export default router;
