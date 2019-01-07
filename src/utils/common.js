
import http from './http';
import api from '../API';
var Common = {
    islogin: false,
    userInfo: null,
    init() {
        // var options = {
        //     pro: 'yygame',
        //     eid: 'GLXT',
        //     eid_desc: '管理系统'
        // };
        // f2eGame.port.statpid.loginStat(options);
        this.isLogin();
    },
    login(url) {
        f2eGame.port.udb.login({
            url: '/'
        });
    },
    logout() {
        f2eGame.port.udb.logout('/');
    },
    isLogin(callback) {
        f2eGame.port.udb.isLogin().then((res) => {
            this.islogin = res;
            !!callback && callback(res);
        });
    },
};
export default Common;
