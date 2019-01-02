// vue.config.js
var path = require('path')
var proxyConfig = require('./proxy.config');
module.exports = {
  configureWebpack: config => {
    config.plugins.push(new(require('webpack')).IgnorePlugin(/^\.\/locale$/, /moment$/))
    if (process.env.NODE_ENV === 'production') {
      Object.assign(config.optimization.minimizer[0].options.terserOptions, {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        output: {
          preamble: `/**发布时间：${new Date().toLocaleString()}**/`
        },
      });
    }
  },
  // configureWebpack: {
  //   plugins: [

  //   ]
  // },
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    port: 9090,
    disableHostCheck: true,
    proxy: proxyConfig
  },
  /**
   * 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 baseUrl 而不要直接修改 webpack 的
   * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/
   * 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
   */
  baseUrl: '/',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // assetsDir:'./',
  // 打包输出的路径，注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: path.join(__dirname, '../webapp'),
  // assetsDir: 'static',
  // vue-cli3设置iview自定义主题
  css: { // 配置css模块
    loaderOptions: { // 向预处理器 Loader 传递配置选项
      less: { // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false
}
