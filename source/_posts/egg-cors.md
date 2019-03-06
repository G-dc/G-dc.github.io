---
title: egg-cors
date: 2019-02-28 17:04:42
comments: true
toc: true
categories:
- 后端
- egg
- egg-cors
tags:
- egg
- egg-cors
---

# 关于egg-cors
前后端分离的项目开发，跨域往往是一个避不开的坎。所以这里使用了[egg-cors](https://github.com/eggjs/egg-cors)来完成跨域的相关配置。在这里做一下简单的记录。

<!-- more -->

# egg-cors 的引入以及相关配置
插件的引入有几种写法：
```markdown
npm i egg-cors --save
```
或者
```markdown
yarn add egg-cors --save
```
两种方法引入。

在 `app/config/plugin.js` 配置如下：
```markdown
exports.cors = {
  enable: true,
  package: 'egg-cors'
};
```

继续配置 `app/config/config.default.js`：
```markdown
config.cors = {
  origins: ctx => ctx.get('origin'),
  allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
  credentials:  true
}
```

**这里对以上几个参数的配置做一下简单的介绍。**
* 当 `credentials` 参数不设置的时候 ( 或者设置为 **`false`** )，即默认前端发起请求的时候不允许在请求头与响应头里面携带 `cookie` 参数。此时可以设置 `origin` 参数为 **`'*'`**。然后也可以配合 `egg-security` 插件配置白名单 ( 这里博主还没有做过多研究，就简单带过 )。
* 当 `credentials` 参数设置为 **`true`** 的时候，前端配合设置 `withCredentials` 参数为 **`true`** ( 这里博主前端采用的技术栈是 **`axios`** )，即可以实现前端发起请求的时候允许携带 `cookie` 参数信息。但是这里有需要注意的地方，**划重点划重点！！！**

当设置 `credentials` 为 **`true`** 时，`origin` 参数 _不允许为 **`'*'`**!_ _不允许为 **`'*'`**!_ _不允许为 **`'*'`**!_ 而是只能设置为一个固定的 `origin` ( 连数组都不允许设置，感觉相当不友好啊，也不知道是不是博主自己配置错误了Orz...)。导致博主在本地开发的时候需要设置一个本地的 `origin`,部署到服务器的时候又要改成一个服务器的 `origin`，相当麻烦。

好在后来 Google 到了一个比较好的解决方案。就是按照之前所配置的写法，即：**`origin: ctx => ctx.get('origin')`**，直接在 `ctx` 里面取出相关的参数进行设置。这样就不用频繁去切换本地与服务端的参数值了~~~