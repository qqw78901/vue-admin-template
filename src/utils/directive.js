/**
 * 注册全局自定义指令
 * 使用时在标签内加上 v-mypermit='true',值为boolean值或者权限id
 */
import Vue from 'vue';
import permission from './permission';
//注册一个全局自定义指令 `app-auth`
Vue.directive('mypermit', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el, binding, vnode, oldVnode, isDestroy) {
        var enable = false;
        if (typeof(binding.value) === 'boolean') {
            // boolean
            enable = binding.value;
        } else {
            // id
            enable = permission.hasPermission(binding.value);
        }
        if (!enable) {
            $(el).hide();
        } else {
            $(el).show();
        }
    }

});