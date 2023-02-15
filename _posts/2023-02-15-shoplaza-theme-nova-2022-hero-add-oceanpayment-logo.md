---
layout: post
title: 店匠Nova2022以及Hero主题添加钱海支付图标
tags: [Shoplaza, Shoplazza, 店匠, Nova2022, Hero, 钱海, 支付图标]
date: 2023-02-15 14:22 +0800
---
自动给 **店匠Nova 2022** 以及 **Hero** 主题添加 **钱海支付图标** ，更适用于推广，小白也能轻松上手。

放在 **自定义代码** 里面就好，有HTML基础的可以根据自己需要进行修改

`````
<script>
if ($("#shoplaza-section-footer > div > div.tw-overflow-hidden.tw-border-0.tw-border-t.tw-border-solid.tw-border-footer-border-color > div > span").length) {
  $("#shoplaza-section-footer > div > div.tw-overflow-hidden.tw-border-0.tw-border-t.tw-border-solid.tw-border-footer-border-color > div > span").after("<br><br><img width='200' src='https://cdn.shoplazza.com/01420b05e8e9523464ea5281d589b3a2.png'>");
} else if ($("#shoplaza-section-footer > div.tw-py-\\[30px\\].md\\:tw-container.tw-text-footer-color.tw-text-\\[13px\\].tw-bg-footer.tw-flex.tw-flex-wrap.tw-items-center.tw-justify-center > div").length) {
  $("#shoplaza-section-footer > div.tw-py-\\[30px\\].md\\:tw-container.tw-text-footer-color.tw-text-\\[13px\\].tw-bg-footer.tw-flex.tw-flex-wrap.tw-items-center.tw-justify-center > div").after("<br><br><img width='200' src='https://cdn.shoplazza.com/01420b05e8e9523464ea5281d589b3a2.png'>");
} else if ($("#shoplaza-section-footer > div.tw-py-\\[30px\\].md\\:tw-container.tw-text-footer-color.tw-text-\\[13px\\].tw-bg-footer.tw-flex.tw-flex-wrap.tw-items-center.tw-justify-center > span").length) {
  $("#shoplaza-section-footer > div.tw-py-\\[30px\\].md\\:tw-container.tw-text-footer-color.tw-text-\\[13px\\].tw-bg-footer.tw-flex.tw-flex-wrap.tw-items-center.tw-justify-center > span").after("<br><br><img width='200' src='https://cdn.shoplazza.com/01420b05e8e9523464ea5281d589b3a2.png'>");
}
</script>
`````
