---
title: egg-jwt
date: 2019-02-27 10:44:07
comments: true # 是否可评论
toc: true # 是否显示目录
categories: # 分类
- 后端
- egg
- egg-jwt
tags: # 标签
- egg
- egg-jwt
---

# 关于egg-jwt
由于涉及到登录注册的操作，所以考虑到需要生成 `Token` 来做验证登录信息（其实一开始并没有考虑到这方面，而是直接把用户信息直接 set 到浏览器的 `cookie` 里面，连加密都不带的，果然还是太年轻。后来经高人指点，才改成使用生成 `Token` 的方式来实现验证登录，都不必把用户信息丢到 `cookie` 里面了，想想也是不错的。）

这里使用 [egg-jwt](https://github.com/okoala/egg-jwt) 来生成 `Token` 以及相关的校验操作。期间也踩了不少堪称弱智的坑...... 想了想还是做一下简单的记录，防止以后又陷进去。

<!-- more -->

# egg-jwt 的引入以及相关配置
引入插件，插件的引入有几种写法:
```markdown
npm i egg-jwt --save
```
或者
```markdown
yarn add egg-jwt --save
```
两种方法引入。

在 `app/config/plugin.js` 配置如下：
```markdown
exports.jwt = {
  enable: true,
  package:  'egg-jwt'
};
```

继续配置 `app/config/config.default.js`：
```markdown
config.jwt = {
  secret: '123456' // 这里的字符串参数可任意定义，作为加签与解签的盐值
}
```

到这里基本上就完成相关配置了，接下来就可以正式使用（踩坑）了。
注：这里的踩坑顺序是按照博主自己开发的时候的开发顺序进行排序。

用户执行登录操作的时候，后端会对前端传回来的数据进行数据库匹配，如果匹配到符合的数据，则返回成功的信息并且返回相对应的用户信息（用来生成 `Token` 的载体 `"payload"` ）。好的，一号坑出现。

**1、sign方法的参数问题**

`egg-jwt` 生成 `Token` 的方法为 `jwt.sign()`，带有四个参数，分别是 `"payload"`、`"secret"`、`"options"`、`"callback"`。博主自己只用了前三个参数，所以偷个懒，只解释前三个就好了。
* `secret` —— 关于这个参数前文有解释，是加签与解签时所需要的盐值。
* `options` —— 生成 `Token` 所配置的一些其他参数。博主这里只设置了一个有效期的参数，即 `expiresIn`，值的话可任意定义，例如为 `60s` 则代表60秒, `10h` 代表10小时， `1d` 则代表1天（一般 `Token` 有效期不会太长，所以知道有这几个单位基本就够用了）。
* `payload` —— 生成 `Token` 的载体，参数格式为 `object`。博主第一个坑就贡献在这里了。


**_问题场景_**
登录成功之后，返回相对应的登录的用户相关信息，用来生成`Token`。

**_问题描述_**
* 直接将数据库查询返回的数据 `RowDataPacket` 作为`payload` 的话，报错信息为：
```markdown
Expected "payload" to be a plain object.
```
控制台打印了一下 `RowDataPacket` 的数据格式为 `object` ( 貌似没有什么卵用。。。

* 使用 `toJSON()` 继续摸索，然后就继续 ERROR：
```markdown
TypeError: xxx.toJSON is not a function
```
好吧此路不通。。。那就换条路。

* 使用 `JSON.stringify()` 进行序列化操作，解锁错误新成就：
```markdown
Error: invalid expiresIn option for string payload
```
好的打扰了。。。

**_问题解决_**
Google 了一下，Get 到了一个比较相似的 [Issue](https://github.com/auth0/node-jsonwebtoken/issues/326) 。琢磨了半天，尝试了一下 ~~对序列化后的数据再进行反序列化操作 —— `JSON.parse()`~~ 直接使用 `Object.assign()` 进行转化，然后，就没有然后了。居然成功了。。。莫非一开始拿到的值并不是一个真正意义上的 `object` ?这里博主暂时没有琢磨透，等琢磨透了再来更新。


其实对一些人来说，一号坑可能遇都不会遇到，可能是博主比较菜，所以还是踩了一小段时间的，记录一下只是防止以后再犯类似的错误。

到这里博主基本已经完成了登录成功之后签发 `Token` 的步骤了，并且将之存储在了浏览器的 `cookie` 里面，具体操作可参考 `Egg`  [cookie-and-session](https://eggjs.org/zh-cn/core/cookie-and-session.html)。之后的每次请求，前端部分都将`Token`的值放在了请求头的 `authorization` 里面，传到后端的时候再从请求头里面将该参数取出并解签。

**2、verify方法的参数问题**

这里博主定义了一个中间件（`Middleware`，具体操作可参考 [中间件 (Middleware)](https://eggjs.org/zh-cn/basics/middleware.html)）用来判断请求头是否存在该参数(具体哪些接口需要判断 `Token` 就要视业务情况来定了)。
* 不存在，则直接返回 **401** 状态码以及相关的错误信息，并且不继续请求接口操作。
* 若存在，则取出，使用 `jwt.verify()` 方法对参数进行解签，和 `jwt.sign()` 一样，也带有四个参数，参数名一致。这里博主只用到了前两个参数，所以只简单解释一下前两个参数。
    * `payload` —— 需要解签的 `Token`
    * `secret` —— 一开始定义的盐值

好的，博主在这里遇到了二号坑。

**_问题场景_**
前端请求后台数据时，首先进行 `Token` 的有效期校验操作。若解签时 `Token` 仍处于有效期，则需要重新加签分发，并且重新设置有效期。

**_问题描述_**
直接对解签之后的数据进行加签操作 (即作为 `jwt.sign()` 的 `payload`)，解锁错误新成就：
```markdown
Error: Bad "options.expiresIin" option the payload already has an "exp" property
```
将之前解签出来的数据打印出来，发现比原数据多了两个参数：`iat` 和 `exp`。其中 `iat` 代表的应该时加签分发时的时间戳，`exp` 代表的则是加签分发时设置的过期时间戳。因为分发时需要重新设置有效期，导致出现了重复的属性，才出现了上面的错误。

**_问题解决_**
对解签得到的数据进行 `delect` 操作，移除属性 `exp` 就可以了，因为 `iat` 属性会重新生成一个值。`delete` 语法为： `delete Object.property` 或者 `delete Object['property']`。

目前位置在这个方面博主就踩过上述两个坑了。封装了一个简单的解签操作，在需要获取相关信息的 `Controller` 里面调用该方法解签之后获取相关信息就可以愉快的使用了~~~