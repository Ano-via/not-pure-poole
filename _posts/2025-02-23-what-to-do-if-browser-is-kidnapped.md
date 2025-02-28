---
layout: post
title: 浏览器被劫持怎么办
tags: [浏览器]
date: 2025-02-21 09:58 +0800
---
```
taskkill /f /im explorer.exe

del %USERPROFILE%\AppData\Local\umaster\umastershellext64.dll
del %USERPROFILE%\AppData\Local\umaster\umastershellext32.dll

del C:\programdata\umaster\umastershellext64.dll
del C:\programdata\umaster\umastershellext32.dll

del C:\windows\temp\umastershellext.exe

start explorer.exe
```