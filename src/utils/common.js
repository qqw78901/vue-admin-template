var Common = {
    islogin: false,
    userInfo: null,
    init() {
        var options = {
            pro: 'yygame',
            eid: 'GLXT',
            eid_desc: '管理系统'
        };
        f2eGame.port.statpid.loginStat(options);
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
    debounce(func, wait, immediate) {
        let timeout, args, context, timestamp, result

        const later = function() {
            // 据上一次触发时间间隔
            const last = +new Date() - timestamp

            // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last)
            } else {
                timeout = null
                    // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
                if (!immediate) {
                    result = func.apply(context, args)
                    if (!timeout) context = args = null
                }
            }
        }

        return function(...args) {
            context = this
            timestamp = +new Date()
            const callNow = immediate && !timeout
                // 如果延时不存在，重新设定延时
            if (!timeout) timeout = setTimeout(later, wait)
            if (callNow) {
                result = func.apply(context, args)
                context = args = null
            }

            return result
        }
    }

    // Function.prototype.bind=function(context){
    //     var args=Array.prototype.slice(arguments,1);
    //     var _this = this;
    //     return function(){
    //         var args2 = Array.prototype.slice(arguments,0);
    //         _this.apply(context?context:window,args.concat(args2));
    //     }

    // }
}
export default Common;