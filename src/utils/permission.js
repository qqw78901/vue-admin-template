import router from '../routers/index';
import Vue from 'vue';
import iView from 'iview';

var permissionIds = [1, 2, 3, 4, 6, 7, 8];
iView.LoadingBar.config({
    color: '#ff9900',
    failedColor: '#ed4014',
    height: 4
});
var permission = {
    bindChangePage() {
        // 路由跳转之前
        router.beforeEach((to, from, next) => {
            iView.LoadingBar.start();
            // 面包屑
            var routeList = [];
            Common.isLogin(res => {
                if (res) { // 判断是否已经登录
                    if (this.hasPermission(to.meta.id) && to.meta.id !== undefined) {
                        var index = routeList.indexOf(to.name)
                        if (index !== -1) {
                            //如果存在路由列表，则把之后的路由都删掉
                            routeList.splice(index + 1, routeList.length - index - 1)
                        } else {
                            routeList.push(to.name)
                        }
                        to.meta.routeList = routeList;
                        next()
                    } else {
                        next({
                            path: '/403',
                            replace: true,
                            query: {
                                noGoBack: true
                            },
                            meta: {
                                id: 1
                            }
                        })
                    }
                } else {
                    Common.login()
                }
            });
        });
        router.afterEach((to,from)=>{
            iView.LoadingBar.finish();
        })
    },
    // 更新菜单权限
    updateMenulist(menuRouter) {
        let menuList = [];
        menuRouter.forEach((item, index) => {
            if (item.meta.id !== undefined && this.hasPermission(item.meta.id)) {
                if (item.children === undefined || item.children.length === 0) {
                    menuList.push(item);
                } else {
                    let len = menuList.push(item);
                    let childrenArr = [];
                    childrenArr = this.updateMenulist(item.children);
                    menuList[len - 1].children = childrenArr;
                }
            }
        });
        return menuList;
    },
    // 权限判断
    hasPermission(id) {
        // if (roles.indexOf('admin') >= 0) return true // admin 直接进入页面
        if (permissionIds.length === 0) return false;
        return permissionIds.indexOf(id) >= 0;
    },
    // 拉取权限菜单
    getPermissionMenuList(){
        return Vue.http(Vue.API.listProductByPassport).then(response=>{
            const {status,data} = response;
            if(status===1){
                return data;
            }else{
                return [];
            }
        })

    }
}

export default permission;