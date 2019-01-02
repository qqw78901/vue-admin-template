import http from './utils/http'; //网络请求方法
import api from './API'; //网络请求方法


/**
 * 
 * BackendService
 * 后端服务接口
 * 在vue组件内,调用api.js可以用this.api, 使用请求可以用 this.$http
 */
const BS={
    /**
     * 增加用户
     * @param {*} name 名字
     */
    addUser(name){
       return http(api.addUser,{
            name
        },"GET");
    }
}
export default BS;