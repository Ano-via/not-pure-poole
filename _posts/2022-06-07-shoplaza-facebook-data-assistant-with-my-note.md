---
layout: post
title: 店匠Facebook数据辅助工具加批注
tags: [Shoplaza, Shoplazza, 店匠, Facebook, Meta, 数据辅助工具]
date: 2022-06-07 11:08:22 +0800
---
# Facebook数据辅助工具

## 一、安装工具，添加关联Facebook广告账号编号

1.安装Facebook数据辅助工具

![安装Facebook数据辅助工具](https://helpcenter.shoplazza.com/hc/article_attachments/4409408773529/unnamed__2_.png)
2.关联Facebook广告账户(ACT)

![关联Facebook广告账户(ACT)](https://helpcenter.shoplazza.com/hc/article_attachments/4409400542361/unnamed__3_.png)

3.在弹窗输入Facebook广告账户编号以及正确选择Facebook账户时区，此时区必须与广告账户时区一致，确保店铺订单数据正确同步

![输入Facebook广告账户编号和Facebook账户时区](https://helpcenter.shoplazza.com/hc/article_attachments/4409348882841/image-2.png)
[如何获取Facebook广告账户与时区的获取？](https://helpcenter.shoplazza.com/hc/zh-cn/articles/4409263121049)

## 二、安装Chrome浏览器数据辅助插件，建立连接

1.点击下载按钮，下载Chrome数据辅助插件

![下载Chrome数据辅助插件](https://helpcenter.shoplazza.com/hc/article_attachments/4409400544281/unnamed__4_.png)

2.将下载下来的Chrome数据辅助插件进行解压并安装包（解压的文件不可删除，删除会导致Chrome插件不可用）

![解压并安装包](https://helpcenter.shoplazza.com/hc/article_attachments/4409342018585/image-4.png)

3.打开Chrome浏览器插件管理页面

![打开Chrome浏览器插件管理页面](https://helpcenter.shoplazza.com/hc/article_attachments/4409348883097/image-5.png)

4.开启开发者模式

![开启开发者模式](https://helpcenter.shoplazza.com/hc/article_attachments/4409358002329/image-6.png)

5.选择解压文件夹进行插件安装

![选择解压文件夹进行插件安装](https://helpcenter.shoplazza.com/hc/article_attachments/4409348883353/image-7.png)

6.安装完成即可在插件列表显示

![插件列表显示](https://helpcenter.shoplazza.com/hc/article_attachments/4409358003481/image-8.png)

7.在Facebook广告管理后台页面打开后上角插件列表找到数据辅助工具插件开启“数据辅助上报”开关

> 📘 Tips:
> 
> 一定需打开了店铺对应的广告管理后台页面后，再开启“数据辅助上报”开关才能成功上报，在别的页面打开开关无效果

![数据辅助上报](https://helpcenter.shoplazza.com/hc/article_attachments/4409358003737/image-9.png)

## 三、创建广告，添加UTM参数，订单广告数据双向匹配

1.复制给定的UTM参数后，来到Facebook广告管理工具，在配置广告时，将复制好的UTM添加要投放的网站链接结尾处组成新的投放链接

![复制UTM](https://helpcenter.shoplazza.com/hc/article_attachments/4409358003225/image-10.png)

2.创建广告时在目标网址后粘贴UTM跟踪参数后缀

![粘贴UTM](https://helpcenter.shoplazza.com/hc/article_attachments/4409348884249/image-11.png)

## **备注**

如果粘贴的目标网址**已携带有参数**，粘贴过程中要用 **“&”** 符号进行连接。例如复制的参数后缀为```?utm_campaign={{campaign.id}}&utm_adset={{adset.id}}&utm_ad={{ad.id}}```时，需要将utm前的 **“?”** 修改为 **“&”**。粘贴的参数正确格式为 ```&utm_campaign={{campaign.id}}&utm_adset={{adset.id}}&utm_ad={{ad.id}}```

3.已创建好的广告添加跟踪后缀

对于之前**已经创建好存量**的广告，在跟踪网址后粘贴UTM参数后缀发布保存即可，但之前已产生的订单数据不做统计

```&utm_campaign={{campaign.id}}&utm_adset={{adset.id}}&utm_ad={{ad.id}}```

![添加跟踪后缀](https://helpcenter.shoplazza.com/hc/article_attachments/4409348884889/image-12.png)

## 四、自定义广告数据栏目，查看精准广告数据

1.在Facebook广告管理工具，进入到广告系列中，点击数据报表右上角的栏：自定义-定制栏中

![自定义定制栏](https://helpcenter.shoplazza.com/hc/article_attachments/4409342019737/image-13.png)

2.在定制栏中，**一定要**勾选以下6个维度 **（少一个都不会显示）** ：

* 表现
  * 成效
  * 花费金额
* 设置
  * 对象名称和编号
  * 广告系列编号
  * 广告组编号
  * 广告编号
* 转化量
  * 标准事件
  * 广告花费汇报（ROAS）-购物

![勾选6个维度](https://helpcenter.shoplazza.com/hc/article_attachments/4409348884633/image-14.png)

3.按照下图调整好显示的顺序：

![调整顺序](https://helpcenter.shoplazza.com/hc/article_attachments/4409342019353/image-15.png)

## **此时可能要刷新网页**

4.在广告数据展示展示页面上，可以看到Facebook绿色的图标，所展示的就是真实的广告成效数据

![](https://helpcenter.shoplazza.com/hc/article_attachments/4409404261657/unnamed__5_.png)

5.插件根据店铺订单来源所附带的UTM参数将数据匹配给Facebook对应的广告系列，这样商家就能准确地将订单与对应的广告一一匹配在一起，优化的方向就清晰明了了。

![](https://helpcenter.shoplazza.com/hc/article_attachments/4409342020377/image-17.png)

**注意事项**

1.在关联广告账户步骤中，绑定时区时，一定要确保所选择的时区与Facebook广告账户的时区相一致。店匠店铺成效数据才能正确进行转换统计。

![确保时区一致](https://helpcenter.shoplazza.com/hc/article_attachments/4409348882841/image-2.png)

2.一个Facebook广告账户只能与一个店铺进行绑定，不能与多个店铺绑定，否则多个店铺的成效将会在一个广告账户中混淆。

一个店铺可以拥有多个Facebook广告账户，店铺的成效数据可以在多个Facebook广告账户中分别上报显示。

3.在使用Chrome浏览器时，打开Facebook数据辅助工具时，没有对应的关联店铺，需在店匠后台-Facebook数据辅助工具插件内正确关联店铺对应的广告账户，并且当前登陆的Facebook广告账户需被关联的账户。

![没有对应的关联店铺](https://helpcenter.shoplazza.com/hc/article_attachments/4409348885145/image-18.png)

4.Facebook 数据辅助工具当前对新创建的广告和存量广告数据都支持添加对应的后缀，在开启功能和添加后缀后，开始记录所有上报的数据。

在关联了A账户的，开启了功能的同时，若B账户的广告也有该店铺成效数据，后续再绑定B账户，对应的成效数据也会直接传送给B账户。

5.将下载下来的Chrome数据辅助插件进行解压并安装包 **（解压的文件不可删除，删除会导致Chrome插件不可用）**
