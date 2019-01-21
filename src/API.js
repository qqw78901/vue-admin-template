import Vue from "vue";

const isDevMod = process.env.NODE_ENV === "development";
/**
 * 根据当前运行环境决定使用哪个Host，开发环境 host是/api ,  正式环境是xx 某一层的相对路径
 */
const host = isDevMod ? '/api' : "..";
const permissionHost = isDevMod ? '/permission' : "..";
const API = {
  /**
   * demo
   */
  getUserByPage: `${host}/user/list.do`,
  addUser: `${host}/user/add.do`,
  updateUser: `${host}/user/update.do`,
  deleteUser: `${host}/user/delete.do`,



  //是否登录
  isLogin:`${host}/login/checkLogin`,
  getPermission:`${permissionHost}`

};
Vue.prototype.$api = API;
Vue.api = API;
export default API;
