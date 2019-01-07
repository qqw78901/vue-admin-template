import Vue from 'vue';
const permission = {
  // 拥有的权限列表
  permissionList: [8],
  /**
   * 获取权限列表
   * @returns {Promise.<TResult>|Q.Promise<any>}
   */
  getPermissionList(){
    return Vue.http(Vue.api.getPermission).then(resp=>{
      console.log(resp);
      const {data} =resp;
      const {privileges}=data;
      this.permissionList=privileges.map(item=>item.privilegeId);
    })
  },
  /**
   * 权限判断
   * @param {*} id
   */
  hasPermission(id) {
    if (this.permissionList.length === 0) return false;
    return this.permissionList.indexOf(id) >= 0;
  },
  /**
   * 判断是否需要显示到菜单上
   */
  showThisMenuEle(item) {
    if (item.meta && typeof item.meta.privilegeId !== "undefined") {
      if (this.hasPermission(item.meta.privilegeId)) return true;
      else return false
    } else return true
  },

  /**
   * @param {Array} list 通过路由列表得到菜单列表
   * @returns {Array}
   */
  getMenuByRouter(list) {
    let res = [];
    const hasChild = (item) => {
      return item.children && item.children.length !== 0
    }
    list.forEach(item => {

      if (!item.hidden) {
        if (hasChild(item) && this.showThisMenuEle(item)) {
          let children = this.getMenuByRouter(item.children);
          item.children=children;
        }
        if (item.meta && item.meta.href) item.href = item.meta.href
        if (this.showThisMenuEle(item)) res.push(item)
      }
    });
    return res;
  },

}
export default permission;
