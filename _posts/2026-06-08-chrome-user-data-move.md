---
layout: post
title: Chrome谷歌浏览器数据迁移
tags: [Chrome]
date: 2025-5-19 11:15 +0800
---

1. 关闭所有谷歌浏览器的窗口。打开谷歌浏览器数据存放路径
```
"%LOCALAPPDATA%\Google\Chrome\User Data"
```

2. 复制到任意文件夹，如 D:\ChromeData\User Data

3. 复制好之后重命名原来的文件夹，如 User Data 1

4. 管理员模式打开命令行工具，然后输入下面的代码
```
mklink /D "%LOCALAPPDATA%\Google\Chrome\User Data" "D:\ChromeData\User Data"
``` 

5. 打开谷歌浏览器检查是否正常。使用一段时间确认可以正常使用后再删除原来的文件夹。