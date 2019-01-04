# vue-admin后台管理框架使用文档

## 介绍

文档地址：[线上地址](https://yygame.gitbook.io/vue-admin-yygame/)


该后台管理框架UI层使用iview+adminlte+bootstrap，结合基于业务封装一些组件。开发部署方面使用vue-cli以及maven里的frontend-maven-plugin免去后端手工安装node的成本。

## 文件目录

```text
├── babel.config.js
├── clean.js
├── ES6常用新语法.md
├── package.json
├── postcss.config.js
├── proxy.config.js
├── public
|  ├── fonts
|  |  ├── fontawesome-webfont.eot
|  |  ├── fontawesome-webfont.svg
|  |  ├── fontawesome-webfont.ttf
|  |  ├── fontawesome-webfont.woff
|  |  ├── fontawesome-webfont.woff2
|  |  └── FontAwesome.otf
|  ├── index.html
|  └── lib
|     ├── adminlte.js
|     ├── AdminLTE.min.css
|     ├── adminlte.min.js
|     ├── bootstrap.css
|     ├── bootstrap.min.js
|     ├── fastclick.js
|     ├── font-awesome.min.css
|     ├── ionicons.min.css
|     ├── jquery-ui.min.js
|     ├── jquery.min.js
|     ├── jquery.slimscroll.min.js
|     └── _all-skins.min.css
├── README.md
├── src
|  ├── API.js
|  ├── App.vue
|  ├── assets
|  |  └── logo.png
|  ├── BS.js
|  ├── common
|  |  ├── Cards
|  |  |  └── DataPanel.vue
|  |  ├── Charts
|  |  |  ├── FunnelChart.vue
|  |  |  ├── PieChart.vue
|  |  |  └── vm-chart-bar-line.vue
|  |  ├── Forms
|  |  ├── SearchBar
|  |  |  └── SearchBar.vue
|  |  └── Tables
|  |     ├── DataTable.vue
|  |     ├── SimpleTable
|  |     ├── SimpleTable.vue
|  |     └── vm-table.vue
|  ├── components
|  ├── components.less
|  ├── index.css
|  ├── index.html
|  ├── main.js
|  ├── routers
|  |  ├── index.js
|  |  ├── menu.js
|  |  └── router.js
|  ├── theme
|  |  ├── index.less
|  |  └── variable.less
|  ├── utils
|  |  ├── bus.js
|  |  ├── common.js
|  |  ├── directive.js
|  |  ├── fetch.js
|  |  ├── http.js
|  |  ├── moment.js
|  |  └── permission.js
|  └── views
├── vue.config.js
└── 组件使用说明.md
```


## DEMO项目
