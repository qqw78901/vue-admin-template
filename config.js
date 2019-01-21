var path = require('path');
/**
 * 本文件抽离了常用的配置，高级配置详情看vue.config.jf和代理配置proxy.config.js
 */
module.exports = {
  /**
   * -----------开发时相关配置-----------
   * 下面配置仅在开发（run-dev）过程生效
   */
  proxyDomain: "http://gviewportal.game.yy.com",
  // 如果是接口服务器是根目录 则填根目录"/"
  // 如果接口服务器不是在根目录 则填目录"/xxx"
  proxyPath:"/",
  /*前端服务器端口，不要跟java服务器重复*/
  port: 9090,
  /**
   * 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 baseUrl 而不要直接修改 webpack 的
   * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/
   * 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
   */
  baseUrl: "/",
  /**
   * --------------打包相关的配置--------------
   */
  /**打包输出的路径，注意目标目录在构建之前会被执行清除命令*/
  outputDir: path.join(__dirname, '../webapp'),
  /* 需要清除的文件夹 */
  dirNeedToClean:['js', 'img', 'fonts', 'lib', 'css']
};
