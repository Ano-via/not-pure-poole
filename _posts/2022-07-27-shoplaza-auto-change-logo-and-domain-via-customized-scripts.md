---
layout: post
title: 店匠根据域名自动切换logo和域名信息
tags: [Shoplaza, Shoplazza, 店匠, logo, 多域名]
date: 2022-07-27 14:08 +0800
---
代码是我找同行的网站的时候发现的，主要改最前的几行就够了，放在 **自定义代码** 里面就好，修改很方便，比上一篇帖子的强大。

**mainSiteName** 是待替换的域名，最好用主域名

 **name**, **logo**, **icon** 构成一组，分别对应 **新域名**、**新网站logo** 和 **新favicon（左上角小图标）**。

如图就是3组，一共可以自动改成3种新域名。要添加或减少则自行增删。

`````
<script> try { 
  const mainSiteName = "civicsmile"
  const sites = [{
    name: "betteruu",
    logo: "https://img.staticdj.com/313f5ad28f0e204b4cd0f0fa1316a30a.png",
    icon: "https://img.staticdj.com/b1cfc0ffd4943fbc681f3bc58efae126.jpg"
  },{
    name: "boydanny",
    logo: "https://cdn.shoplazza.com/dc04ae1c7c36c1764488ee8e7a20b8d7.png",
    icon: "https://img.staticdj.com/6563b178904c757503687a8acd3043a7_32x32.jpg"
  },{
    name: "AnDigest",
    logo: "https://cdn.shoplazza.com/be4891fcc3cd1734354910116df6610d.png",
    icon: "https://cdn.shoplazza.com/c2a63fe2aeb5185d88cdc16cb5c52bdd_32x32.jpg"
  }
]
  const zqFun_duoyuming = (name, logo, icon) => {
    let old_name = mainSiteName;
    let new_name = name;
    const new_icon = icon;
    const new_logo = logo;
    // 转小写
    old_name = old_name.toLowerCase();
    new_name = new_name.toLowerCase();
    // 转大写
    const old_name_d = old_name.toUpperCase();
    const new_name_d = new_name.toUpperCase();
    // 转首字母大写
    const old_name_id = old_name.slice(0, 1).toUpperCase() + old_name.slice(1);
    const new_name_id = new_name.slice(0, 1).toUpperCase() + new_name.slice(1);
    // 替换店名
    const replaceName = $content => {
      $content.each(function (index, element) {
        let reg = new RegExp(`(${old_name})`, "g");
        let content_html = $(this).html().replace(reg, new_name);
        reg = new RegExp(`(${old_name_d})`, "g");
        content_html = content_html.replace(reg, new_name_d);
        reg = new RegExp(`(${old_name_id})`, "g");
        content_html = content_html.replace(reg, new_name_id);
        $(this).html(content_html);
      });
    }
    const hostname = location.hostname;
    if (hostname.indexOf(`${new_name}.`) !== -1) {
      $('title').text(new_name_id);
      $('link[rel="shortcut icon"]').attr({
        'href': new_icon
      });
      $('.header a[href="/"] > img, .checkout__logo a > img, .header-logo a[href="/"] > img').attr({
        'src': new_logo,
        'data-src': new_logo
      });

      $(`img[src='${new_logo}']`).load(function(){
        $(this).animate({opacity: 1});
      });
      replaceName($('[data-section-type="footer"]'));
      replaceName($('.product_detail_description_content'));
      replaceName($('[data-section-type="page_detail"]'));
      replaceName($('[data-section-type="blog_collection"]'));
      replaceName($('[data-section-type="article"]'));
      replaceName($('.checkout__logo'));
      return true;
    } else {
      return false;
    }
  }
  $(function () {
    let isUpdateHostName = false;
    sites.forEach(site => {
      const rel = zqFun_duoyuming(site.name, site.logo, site.icon);
      if (rel) isUpdateHostName = true;
    });
    if (!isUpdateHostName) {
      $("a[href='/'] > img").animate({opacity: 1});
    }
  });
 } catch(e){  }</script>
`````
