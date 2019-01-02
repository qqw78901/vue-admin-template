import moment from 'moment';
import Vue from 'vue';
moment.locale('zh-cn');
Vue.prototype.$moment = moment;
Vue.moment = moment;
const smartGetMoment = (time) => {
  let result;
  if (time instanceof Date) {
    result = moment(time)
  } else if (String(time).length === 13) {
    result = moment(time, 'x');
  } else if (String(time).length === 19) {
    result = moment(time, 'YYYY-MM-DD HH:mm:ss');
  } else {
    result = moment(time);
  }
  return result;
}
Vue.prototype.$fd = function (time) {
  return smartGetMoment(time).format('YYYY-MM-DD');
};
Vue.Fdt = Vue.prototype.$fdt = function (time) {
  return smartGetMoment(time).format('YYYY-MM-DD HH:mm');
};
Vue.prototype.$ft = function (time) {
  return smartGetMoment(time).format('HH:mm');
};
Vue.prototype.$smartGetMoment = function(time) {
  return smartGetMoment(time);
}
