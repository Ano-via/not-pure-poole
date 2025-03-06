---
layout: post
title: 浏览器被劫持怎么办
tags: [浏览器]
date: 2025-02-23 09:58 +0800
---

有时候浏览器打开首页并不是自己设置的主页，而是hao123之类的网站。此时在桌面新建一个文本文档，然后复制粘贴下面的代码到文档中。保存。修改后缀为 **.bat** 。然后双击运行即可。

```
taskkill /f /im explorer.exe

del %USERPROFILE%\AppData\Local\umaster\umastershellext64.dll
del %USERPROFILE%\AppData\Local\umaster\umastershellext32.dll

del C:\programdata\umaster\umastershellext64.dll
del C:\programdata\umaster\umastershellext32.dll

del C:\windows\temp\umastershellext.exe

start explorer.exe
```
