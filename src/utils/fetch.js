import Vue from 'vue'; //Vue是整个框架的主类
// import { filterData } from '../data/table_data.js';

export function fetch(settings, type, callback) {
    let requestOpts;

    if (type == 'get') {
        requestOpts = {
            dataType: "jsonp",
            type: "get"
        }
    } else if (type == "post") {
        requestOpts = {
            type: "post"
        }
    }

    settings = $.extend(requestOpts, settings);

    return $.ajax($.extend({
        timeout: 10000,
        success(res) {
            callback && callback(res)
        },
        error() {
            new Vue().$Message.error('您的网络异常，请稍后重试！')
        },
    }, settings || {}));
}

/**
 * 获取数据，通用方法
 * @param {API路径 如： API.test} url 
 * @param {json格式数据} productId 
 * @param {请求方式 get/post} type 
 * @param {获取数据成功后的回调} callback 
 */
export function fetchData(url, type, data, callback) {
    var options = {
        data,
        url
    }
    fetch(options, type, callback)
}

// 表格搜索
export function getList(filterData, options) {
    let res = filterData;
    let dataClone = filterData;
    for (let argu in options) {

        if (!!options[argu]) {
            // 处理数组
            if (Array.isArray(options[argu])) {
                let arr = [];
                for (let i = 0; i < options[argu].length; i++) {
                    let value = options[argu][i];
                    arr = arr.concat(dataClone.filter(item => {
                        return item[argu].indexOf(value) > -1;
                    }));
                }
                res = arr;
            } else {
                res = dataClone.filter(item => {
                    if (argu == 'age') {
                        if (options[argu] == 1) {
                            return item[argu] > 25;
                        } else {
                            return item[argu] <= 25;
                        }
                    } else {
                        return item[argu].indexOf(options[argu]) > -1;
                    }
                })
            }
            dataClone = res;
        }
    }
    return res;
}
// export function getUserRoles(userName, url, callback) {
//     var options = {
//         data: {
//             userName: userName
//         },
//         url
//     }
//     fetch(options, callback)
// }