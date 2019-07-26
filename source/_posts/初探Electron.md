---
title: 初探Electron
date: 2019-02-23 15:43:06
comments: true
toc: true
categories:
- Electron
tags:
- Electron
---

# 关于Electron
前端开发桌面应用程序这个概念已经出现一段时间了，一些相关技术也趋于成熟，是时候开始探一探了~~~
[Electron](http://electronjs.org/) 是由 `Github` 开发，用 `HTML`、`CSS` 和 `JavaScript` 来构建跨平台桌面应用程序的一个开源库。接下来就开始研究研究~~~

## Electron的安装
瞧了一眼官网， `Electron` 发布了三个版本，这里博主用的是 **latest** 版本。
安装方法如下：
``` markdown
  1、npm 安装
  npm i -D electron@latest

  2、npm 全局安装
  npm i -g electron@latest -D

  3、yarn 安装
  yarn add electron@latest -D

  4、yarn 全局安装
  yarn add glogal electron@latest -D
```

## 初使用Electron
安装成功之后，官方提供了一个快速上手 [Demo](https://github.com/electron/electron#quick-start--electron-fiddle).

```markdown
  git clone https://github.com/electron/electron-quick-start
  cd electron-quick-start
  npm install
  npm start
```

执行完上述步骤，一个简单的实例就运行起来了~~~