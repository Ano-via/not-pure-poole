---
layout: post
title: BM被封后移除网域
tags: Facebook, Meta, 移除网域, BM受限, BM被封
date: 2021-11-24 11:07 +0800
---
Facebook/Meta BM 被封后，事件管理器一秒去除限制，可以移除网域。

事件管理器按 **F12** 打开开发者工具，点击 **Console** ，输入以下代码并按回车。
```
var dd = document.getElementsByClassName("uiLayer");
if (dd != undefined) {
    for (var i = 0; i < dd.length; i++) { dd[i].remove(); }
}

var dd = document.getElementsByClassName("n5k64dc8");
if (dd != undefined) {
    for (var i = 0; i < dd.length; i++) { dd[i].remove(); }
}

document.getElementsByClassName("pu94sjp6")[0].classList.remove("pu94sjp6");
```
P.S. 可能需要多粘贴执行几次代码

---
当然，也不是每次都要花半天去搜索代码这么麻烦

你也可以尝试更加优雅的方法

比如：将上述代码添加到你输入法的 **自定义短语** 中就可以省去每次使用都要找文档的繁琐
