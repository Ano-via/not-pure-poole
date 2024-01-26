---
layout: post
title: 店匠去掉网址URL SPM参数
tags: [Shoplaza, Shoplazza, SPM, URL]
date: 2024-01-26 14:17 +0800
---
## 通过添加代码删除spm参数

* 进入店铺主页，从专辑页跳转到商品详情页，查看商品链接是否带有spm参数。

![](https://img.fantaskycdn.com/745248c769027226356a5a85d57c94fb.png)

* 登录您的 **Shoplazza管理后台** ，点击 **在线商店 ** >  **主题装修 ** >** ...** > ** 主题代码** 。

![](https://img.fantaskycdn.com/474bf59518ba3f9aa84d045fe54cfaaf.png)

* 进入编辑主题代码页面，选择**layout** > **theme.liquid**文件，在“html”标签后添加**disable-spm**属性，并保存。

![](https://img.fantaskycdn.com/67cd9ba213d31bbe933deaad20bef9fa.png)

* 添加成功后，返回店铺主页，从专辑页进入商品详情页，可查看商品链接是否优化成功。

![](https://img.fantaskycdn.com/472e601ef62758c89323d9a57b4fd69e.png)

**提示**

删除spm参数不会影响用户访问该网页，商家可以直接使用没有添加spm参数的网站URL设置广告。
