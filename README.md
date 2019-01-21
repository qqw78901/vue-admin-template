# vue-admin后台管理框架使用文档

## 介绍

**文档地址：[线上地址](https://yygame.gitbook.io/vue-admin-yygame/)**


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

## Maven配置

如果你使用maven命令来运行该项目，添加上下面的配置：

```javascript

   <plugin>
                <groupId>com.github.eirslett</groupId>
                <artifactId>frontend-maven-plugin</artifactId>
                <version>1.6</version>
                <configuration>
                    <installDirectory>target</installDirectory>
                    <workingDirectory>src/main/front-end</workingDirectory>
                    <nodeVersion>v8.9.1</nodeVersion>
                    <npmVersion>5.5.0</npmVersion>
                </configuration>
                <executions>
                    <!-- Install our node and npm version to run npm/node scripts-->
                    <execution>
                        <id>install node and npm</id>
                        <goals>
                            <goal>install-node-and-npm</goal>
                        </goals>
                        <configuration>
                            <nodeVersion>v8.9.1</nodeVersion>
                            <npmVersion>5.5.0</npmVersion>
                            <!-- optional: where to download node from. Defaults to https://nodejs.org/dist/ -->
                            <nodeDownloadRoot>https://npm.taobao.org/dist/</nodeDownloadRoot>
                            <!-- optional: where to download npm from. Defaults to https://registry.npmjs.org/npm/-/ -->
                            <npmDownloadRoot>https://registry.npm.taobao.org/npm/-/</npmDownloadRoot>
                        </configuration>
                    </execution>
                    <!-- Install all project dependencies -->
                    <execution>
                        <id>npm install</id>
                        <goals>
                            <goal>npm</goal>
                        </goals>
                        <!-- Optional configuration which provides for running any npm command -->
                        <configuration>
                            <arguments>install</arguments>
                        </configuration>
                    </execution>
                    <execution>
                        <id>npm-run-dev</id>
                        <phase>test</phase>
                        <goals>
                            <goal>npm</goal>
                        </goals>
                        <configuration>
                            <arguments>run serve</arguments>
                        </configuration>
                    </execution>
                    <!-- Build and minify static files -->
                    <execution>
                        <id>npm-run-build</id>
                        <goals>
                            <goal>npm</goal>
                        </goals>
                        <configuration>
                            <arguments>run build</arguments>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
```

然后在java-web项目执行maven命令：
[线上地址](https://yygame.gitbook.io/vue-admin-yygame/kuai-su-shang-shou)







## 只跑该前端项目

### 安装依赖
```javascript
npm install
```
### 开启调试服务器
```javascript
npm run serve
```
### 打包
```javascript
npm run build
```



## DEMO项目
