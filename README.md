
# 项目使用

## 安装依赖包

```
npm i -d
```

## 目录结构
```
app/router.js 用于配置路由规则

app/controller/** 用于解析用户的输入，处理后返回相应的结果

app/service/** 用于编写业务逻辑层

app/middleware/** 用于编写中间件

app/public/** 用于放置静态资源

app/extend/** 用于框架的扩展

config/config.{env}.js 用于编写配置文件

config/plugin.js 用于配置需要加载的插件

server.js 为入口文件
```

## 开发环境

启动项目

```
npm run dev
```

## 测试环境
```
通过环境变量EGG_SERVER_ENV来区分
test 为测试环境
可在run.sh中查看

```

## 生产环境 

```
通过环境变量EGG_SERVER_ENV来区分
prod 为生产环境
可在run.sh中查看

```

# 开发规范

## git 提交注意事项

为了代码的整洁，注意只提交源码、必要的素材，其他的文件不要提交到 `git` 仓库，忽略提交文件，可在 `.gitignore` 添加.

## 尽量使用 `es6`,`es7` 的新特性
