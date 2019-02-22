# vue-admin后台管理框架使用文档

## 介绍

**文档地址：[线上地址](https://yygame.gitbook.io/vue-admin-yygame/)**


该后台管理框架UI层使用iview+adminlte+bootstrap，结合基于业务封装一些组件。开发部署方面使用vue-cli以及maven里的frontend-maven-plugin免去后端手工安装node的成本。

## 文件目录

```text

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


## nodejs 版本

> Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

使用 8.11.0

### demo的host
221.228.81.29 gviewportal.game.yy.com

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
