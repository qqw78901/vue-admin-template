var config = require('./config');
/**
 *
 * 代理转发，如：
 * 访问前端测试服务器 localhost:frontPort/api/addUser.do 则转发到=> localhost:backenPort/addUser.do
 * onProxyRes可以任意处理请求头，demo将请求头cookie的域重置成了根目录
 */
module.exports = {
  '/api': {
    target: config.proxyPath,
    changeOrigin: true,
    onProxyRes: function (proxyRes) {
      var resCookie = proxyRes.headers['set-cookie'];
      if (resCookie != null && resCookie.length > 0) {
        var resultArr = resCookie[0].split(";");
        var resultStr = '';
        for (var i in resultArr) {
          if (resultArr[i].toLowerCase().indexOf('path=') >= 0) {
            resultStr += 'Path=/;';
          } else {
            resultStr += resultArr[i] + ';'
          }
        }
        proxyRes.headers['set-cookie'][0] = resultStr;
      }
    },
    pathRewrite: {
      // 如果是接口服务器是根目录 则直接重写到根目录"/"
      '^/api': '/'
      // 如果接口服务器不是在根目录 则重写到目录"/xxx"
      // '^/api': '/xxx'
    }
  }
}
