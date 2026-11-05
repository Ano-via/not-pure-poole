---
layout: post
title: 口袋妖怪剑盾exclusives_killer_mod版400宝可梦地区图鉴
tags: [宠物小精灵, 口袋妖怪, 神奇宝贝, 宝可梦, 剑盾]
date: 2026-11-05 10:16 +0800
---
<style>
  td:nth-child(2) {
    min-width: 64px;
  }
  
  td img {
    max-height: 100px<br>
    height: auto;
    width: auto;
    display: block;
  }
  .floating-buttons {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 1000;
    }

    .floating-buttons button {
      padding: 10px 15px;
      border: none;
      border-radius: 8px;
      background-color: #4CAF50;
      color: white;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      transition: background-color 0.3s ease;
    }

    .floating-buttons button:hover {
      background-color: #45a049;
    }
</style>


<div>
<input id="numfilter" placeholder="123,456,789" />
<button onclick="real_numfilter()">筛选特定编号</button>
<button onclick="resetFilters()">重置筛选</button>
</div>

<div id="filters">
  <button onclick="filter('')">全部</button>
  <button onclick="filter('沐光森林')">沐光森林</button>
  <button onclick="filter('３号道路')">３号道路</button>
  <button onclick="filter('２号道路')">２号道路</button>
  <button onclick="filter('道路（１・２）')">道路（１・２）</button>
  <button onclick="filter('微寐森林')">微寐森林</button>
  <button onclick="filter('道路（２）')">道路（２）</button>
  <button onclick="filter('巨人帽岩')">巨人帽岩</button>
  <button onclick="filter('揖礼原野')">揖礼原野</button>
  <button onclick="filter('挑战之路')">挑战之路</button>
  <button onclick="filter('挑战海滩')">挑战海滩</button>
  <button onclick="filter('圆环海湾')">圆环海湾</button>
  <button onclick="filter('锻炼平原')">锻炼平原</button>
  <button onclick="filter('健身之海')">健身之海</button>
  <button onclick="filter('列岛海域')">列岛海域</button>
  <button onclick="filter('离岛海域')">离岛海域</button>
  <button onclick="filter('蜂巢岛')">蜂巢岛</button>
  <button onclick="filter('５号道路')">５号道路</button>
  <button onclick="filter('巨人镜池')">巨人镜池</button>
  <button onclick="filter('巨石原野')">巨石原野</button>
  <button onclick="filter('逆鳞湖')">逆鳞湖</button>
  <button onclick="filter('１号道路')">１号道路</button>
  <button onclick="filter('煦丽草原')">煦丽草原</button>
  <button onclick="filter('牙牙湖东岸')">牙牙湖东岸</button>
  <button onclick="filter('道路（１）')">道路（１）</button>
  <button onclick="filter('美纳斯湖北岸')">美纳斯湖北岸</button>
  <button onclick="filter('瞭望塔旧址')">瞭望塔旧址</button>
  <button onclick="filter('牙牙湖之眼')">牙牙湖之眼</button>
  <button onclick="filter('沙尘洼地')">沙尘洼地</button>
  <button onclick="filter('拳关丘陵')">拳关丘陵</button>
  <button onclick="filter('巨人凳岩')">巨人凳岩</button>
  <button onclick="filter('机擎河岸')">机擎河岸</button>
  <button onclick="filter('机擎市郊外')">机擎市郊外</button>
  <button onclick="filter('桥间空地')">桥间空地</button>
  <button onclick="filter('道路（２・３）')">道路（２・３）</button>
  <button onclick="filter('道路（３）')">道路（３）</button>
  <button onclick="filter('球湖湖畔')">球湖湖畔</button>
  <button onclick="filter('道路（７）')">道路（７）</button>
  <button onclick="filter('巨树丘陵')">巨树丘陵</button>
  <button onclick="filter('巨人睡榻')">巨人睡榻</button>
  <button onclick="filter('尖钉镇郊外')">尖钉镇郊外</button>
  <button onclick="filter('美纳斯湖南岸')">美纳斯湖南岸</button>
  <button onclick="filter('道路（４）')">道路（４）</button>
  <button onclick="filter('起橇雪原')">起橇雪原</button>
  <button onclick="filter('冰点雪原')">冰点雪原</button>
  <button onclick="filter('雪中溪谷')">雪中溪谷</button>
  <button onclick="filter('三岔平原')">三岔平原</button>
  <button onclick="filter('牙牙湖西岸')">牙牙湖西岸</button>
  <button onclick="filter('第二矿山')">第二矿山</button>
  <button onclick="filter('道路（２・４・５）')">道路（２・４・５）</button>
  <button onclick="filter('水舟镇')">水舟镇</button>
  <button onclick="filter('机擎市')">机擎市</button>
  <button onclick="filter('斗志洞窟')">斗志洞窟</button>
  <button onclick="filter('道路（６）')">道路（６）</button>
  <button onclick="filter('清凉湿原')">清凉湿原</button>
  <button onclick="filter('７号道路')">７号道路</button>
  <button onclick="filter('道路（２・４）')">道路（２・４）</button>
  <button onclick="filter('道路（５）')">道路（５）</button>
  <button onclick="filter('４号道路')">４号道路</button>
  <button onclick="filter('大部分地区／水域（泛指）')">大部分地区／水域（泛指）</button>
  <button onclick="filter('远古墓地')">远古墓地</button>
  <button onclick="filter('巨人鞋底')">巨人鞋底</button>
  <button onclick="filter('１０号道路')">１０号道路</button>
  <button onclick="filter('泉烟小路')">泉烟小路</button>
  <button onclick="filter('白丘车站')">白丘车站</button>
  <button onclick="filter('海鸣洞窟')">海鸣洞窟</button>
  <button onclick="filter('登顶隧道')">登顶隧道</button>
  <button onclick="filter('９号道路')">９号道路</button>
  <button onclick="filter('８号道路')">８号道路</button>
  <button onclick="filter('道路（８）')">道路（８）</button>
  <button onclick="filter('草路镇')">草路镇</button>
  <button onclick="filter('专注森林')">专注森林</button>
  <button onclick="filter('蜂巢海')">蜂巢海</button>
  <button onclick="filter('道路（４・５・６）')">道路（４・５・６）</button>
  <button onclick="filter('战竞湾')">战竞湾</button>
  <button onclick="filter('冻海')">冻海</button>
  <button onclick="filter('道路（９）')">道路（９）</button>
  <button onclick="filter('机擎竞技场')">机擎竞技场</button>
  <button onclick="filter('伽勒尔矿山')">伽勒尔矿山</button>
  <button onclick="filter('湖畔洞窟')">湖畔洞窟</button>
  <button onclick="filter('６号道路')">６号道路</button>
  <button onclick="filter('战斗洞窟')">战斗洞窟</button>
  <button onclick="filter('野生原野区F区')">野生原野区F区</button>
  <button onclick="filter('梦世界冰洞')">梦世界冰洞</button>
  <button onclick="filter('浅滩洞穴')">浅滩洞穴</button>
  <button onclick="filter('迷光森林')">迷光森林</button>
  <button onclick="filter('锅底沙漠')">锅底沙漠</button>
  <button onclick="filter('热身洞穴')">热身洞穴</button>
  <button onclick="filter('通顶雪道')">通顶雪道</button>
  <button onclick="filter('道路（１０）')">道路（１０）</button>
  <button onclick="filter('化朗镇')">化朗镇</button>
  <button onclick="filter('对战塔')">对战塔</button>
  
  
</div>

<table>
    <thead>
        <tr>
            <th>编号</th>
            <th>图片</th>
            <th>名称</th>
            <th>地点</th>
            <th>天气</th>
            <th>备注</th>
        </tr>
    </thead>
    <tbody id="pokeTable">
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>沐光森林</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲叶小童</td>
            <td>沐光森林</td>
            <td>所有天气</td>
            <td>［盾版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>沐光森林</td>
            <td>所有天气</td>
            <td>［剑版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>沐光森林</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>沐光森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>001</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/810.png"></td>
            <td>敲音猴</td>
            <td>沐光森林</td>
            <td>晴曝</td>
            <td>【MOD】明雷：晴5%、大晴天20%；暗雷：晴5%（占御三家野外位） 初始御三家</td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>沐光森林</td>
            <td>晴沙</td>
            <td></td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>沐光森林</td>
            <td>晴阴雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>沐光森林</td>
            <td>晴阴雨雷曝雾</td>
            <td></td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>沐光森林</td>
            <td>晴阴雨雷雾</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/272.png"></td>
            <td>乐天河童</td>
            <td>沐光森林</td>
            <td>晴阴雨雷雾</td>
            <td>［盾版限定］ 水之石进化</td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>沐光森林</td>
            <td>晴阴雨雷雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>041</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/275.png"></td>
            <td>狡猾天狗</td>
            <td>沐光森林</td>
            <td>晴阴雨雷雾</td>
            <td>［剑版限定］ 叶之石进化</td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>沐光森林</td>
            <td>晴阴雪沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/045.png"></td>
            <td>霸王花</td>
            <td>沐光森林</td>
            <td>晴阴雾</td>
            <td>叶之石进化</td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>沐光森林</td>
            <td>晴雨曝雪雹沙</td>
            <td></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>沐光森林</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>沐光森林</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>沐光森林</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>沐光森林</td>
            <td>曝沙</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>霸道熊猫</td>
            <td>沐光森林</td>
            <td>曝雪雹沙</td>
            <td>等级32以上与恶属性宝可梦同行</td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>沐光森林</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>沐光森林</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>沐光森林</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>沐光森林</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>沐光森林</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/535.png"></td>
            <td>圆蝌蚪</td>
            <td>沐光森林</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>沐光森林</td>
            <td>雨雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>沐光森林</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>沐光森林</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>沐光森林</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>沐光森林</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>沐光森林</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>004</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/813.png"></td>
            <td>炎兔儿</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td>【MOD】明雷9%（替换齿轮儿）、暗雷2%（替换无畏小子） 初始御三家</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>157</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/568.png"></td>
            <td>破破袋</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>３号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>007</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/816.png"></td>
            <td>泪眼蜥</td>
            <td>２号道路</td>
            <td>所有天气</td>
            <td>【MOD】明雷5%（替换咕咕）、暗雷2%（替换伽勒尔蛇纹熊） 初始御三家</td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>２号道路</td>
            <td>所有天气</td>
            <td>［盾版限定］ 【MOD】明雷10%（替换扒手猫）、暗雷15%（替换狡小狐）</td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>２号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>２号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>２号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>２号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>道路（１・２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>道路（１・２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>道路（１・２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>道路（１・２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>狡小狐</td>
            <td>道路（１・２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝴</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618-g.png"></td>
            <td>泥巴鱼-伽勒尔形态</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>微寐森林</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td>35级晚上进化</td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>道路（２）</td>
            <td>所有天气</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨碳山</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/337.png"></td>
            <td>月石</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>363</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/338.png"></td>
            <td>太阳岩</td>
            <td>巨人帽岩</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>巨人帽岩</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲叶小童</td>
            <td>巨人帽岩</td>
            <td>晴</td>
            <td>［盾版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>巨人帽岩</td>
            <td>晴</td>
            <td>［剑版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>巨人帽岩</td>
            <td>晴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>巨人帽岩</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>巨人帽岩</td>
            <td>晴阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>巨人帽岩</td>
            <td>晴阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>巨人帽岩</td>
            <td>晴阴雨雷曝雪沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>巨人帽岩</td>
            <td>晴阴雨雷曝雪沙雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊-伽勒尔的样子</td>
            <td>巨人帽岩</td>
            <td>晴阴雨雷曝雪沙雾</td>
            <td>普通形态铠岛交换</td>
        </tr>
        <tr>
            <td>331</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/680.png"></td>
            <td>双剑鞘</td>
            <td>巨人帽岩</td>
            <td>晴阴雨雷曝雪雹沙</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>巨人帽岩</td>
            <td>晴阴雨雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>143</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/094.png"></td>
            <td>耿鬼</td>
            <td>巨人帽岩</td>
            <td>晴阴雷曝雹沙雾</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/573.png"></td>
            <td>奇诺栗鼠</td>
            <td>巨人帽岩</td>
            <td>晴阴雾</td>
            <td>光之石进化</td>
        </tr>
        <tr>
            <td>270</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>巨人帽岩</td>
            <td>晴雾</td>
            <td>［盾版限定］ 【MOD】明雷：晴40%（替换长鼻叶）、雾20%（替换夜巡灵）；暗雷：晴35%（替换直冲熊）、雾10%（替换猫头夜鹰）</td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>巨人帽岩</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>巨人帽岩</td>
            <td>曝</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>巨人帽岩</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>巨人帽岩</td>
            <td>曝沙</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>巨人帽岩</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>巨人帽岩</td>
            <td>曝沙</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>巨人帽岩</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/530.png"></td>
            <td>龙头地鼠</td>
            <td>巨人帽岩</td>
            <td>曝沙</td>
            <td>31级进化</td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>巨人帽岩</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>巨人帽岩</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>巨人帽岩</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>巨人帽岩</td>
            <td>阴雨雷</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>巨人帽岩</td>
            <td>阴雾</td>
            <td></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>巨人帽岩</td>
            <td>雨</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>巨人帽岩</td>
            <td>雨</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>巨人帽岩</td>
            <td>雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>巨人帽岩</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>巨人帽岩</td>
            <td>雨雷</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>巨人帽岩</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>280</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冰原熊</td>
            <td>巨人帽岩</td>
            <td>雪</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>巨人帽岩</td>
            <td>雪雹</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>巨人帽岩</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>巨人帽岩</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>巨人帽岩</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>巨人帽岩</td>
            <td>雷</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>巨人帽岩</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>巨人帽岩</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>298</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/447.png"></td>
            <td>利欧路</td>
            <td>巨人帽岩</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>巨人帽岩</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>巨人帽岩</td>
            <td>雾</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>267</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>巨人帽岩</td>
            <td>雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>歌德小童</td>
            <td>巨人帽岩</td>
            <td>雾</td>
            <td>［剑版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>巨人帽岩</td>
            <td>雾</td>
            <td>［盾版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>332</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/681.png"></td>
            <td>坚盾剑怪</td>
            <td>巨人帽岩</td>
            <td>雾</td>
            <td>暗之石进化进化</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>揖礼原野</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>揖礼原野</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>揖礼原野</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>揖礼原野</td>
            <td>所有天气</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>揖礼原野</td>
            <td>晴</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>揖礼原野</td>
            <td>晴阴雨雷曝沙</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>揖礼原野</td>
            <td>晴阴雾</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>揖礼原野</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>揖礼原野</td>
            <td>阴雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>揖礼原野</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>揖礼原野</td>
            <td>雷</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>揖礼原野</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>揖礼原野</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>挑战之路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>244</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/757.png"></td>
            <td>夜盗火蜥</td>
            <td>挑战之路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>245</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/758.png"></td>
            <td>焰后蜥</td>
            <td>挑战之路</td>
            <td>曝</td>
            <td>等级33以上雌性</td>
        </tr>
        <tr>
            <td>392</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>挑战之路</td>
            <td>曝沙雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>挑战之路</td>
            <td>沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>挑战之路</td>
            <td>沙</td>
            <td>东第３区 西第２区 烘烘沙漠</td>
        </tr>
        <tr>
            <td>247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>挑战之路</td>
            <td>阴</td>
            <td>52级进化</td>
        </tr>
        <tr>
            <td>282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>挑战之路</td>
            <td>阴</td>
            <td>［剑版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>挑战之路</td>
            <td>阴</td>
            <td>［盾版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>223</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>挑战之路</td>
            <td>雨雷</td>
            <td>［盾版限定］ 37级进化</td>
        </tr>
        <tr>
            <td>225</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>挑战之路</td>
            <td>雨雷</td>
            <td>［剑版限定］ 39级进化</td>
        </tr>
        <tr>
            <td>123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>挑战之路</td>
            <td>雾</td>
            <td>使用觉醒之石雄性</td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>挑战之路</td>
            <td>雾</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>挑战海滩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>挑战海滩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>挑战海滩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>挑战海滩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>挑战海滩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>挑战海滩</td>
            <td>晴阴雨曝沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>挑战海滩</td>
            <td>晴阴雷曝沙</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>挑战海滩</td>
            <td>晴雨曝沙</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>挑战海滩</td>
            <td>晴雨雷曝沙雾</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>挑战海滩</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>挑战海滩</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>挑战海滩</td>
            <td>阴雨</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>挑战海滩</td>
            <td>阴雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>挑战海滩</td>
            <td>阴雨雷</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>挑战海滩</td>
            <td>阴雨雷雾</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>挑战海滩</td>
            <td>阴雨雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>挑战海滩</td>
            <td>阴雾</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>挑战海滩</td>
            <td>雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>挑战海滩</td>
            <td>雨雾</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>挑战海滩</td>
            <td>雷</td>
            <td>雷之石进化</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>挑战海滩</td>
            <td>雷雾</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>圆环海湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>圆环海湾</td>
            <td>晴曝沙</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>圆环海湾</td>
            <td>晴阴曝沙雾</td>
            <td>学会挑衅时提升等级</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>圆环海湾</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>圆环海湾</td>
            <td>阴雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>圆环海湾</td>
            <td>阴雨雾</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>圆环海湾</td>
            <td>阴雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>圆环海湾</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>圆环海湾</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>圆环海湾</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>锻炼平原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>锻炼平原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>锻炼平原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>锻炼平原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>锻炼平原</td>
            <td>晴阴雨雷曝沙</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>锻炼平原</td>
            <td>晴雨雷曝沙雾</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>锻炼平原</td>
            <td>沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>274</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>锻炼平原</td>
            <td>沙</td>
            <td>与小嘴蜗连接交换进化</td>
        </tr>
        <tr>
            <td>312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>锻炼平原</td>
            <td>沙</td>
            <td>东第３区 西第２区 烘烘沙漠</td>
        </tr>
        <tr>
            <td>392</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>锻炼平原</td>
            <td>沙</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>锻炼平原</td>
            <td>阴</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>锻炼平原</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>锻炼平原</td>
            <td>阴</td>
            <td>52级进化</td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>锻炼平原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>锻炼平原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>锻炼平原</td>
            <td>阴曝</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>锻炼平原</td>
            <td>阴雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>锻炼平原</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>223</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>锻炼平原</td>
            <td>雨雷</td>
            <td>［盾版限定］ 37级进化</td>
        </tr>
        <tr>
            <td>225</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>锻炼平原</td>
            <td>雨雷</td>
            <td>［剑版限定］ 39级进化</td>
        </tr>
        <tr>
            <td>276</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>锻炼平原</td>
            <td>雷</td>
            <td>与盖盖虫连接交换进化</td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>锻炼平原</td>
            <td>雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>锻炼平原</td>
            <td>雾</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>357</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/321.png"></td>
            <td>吼鲸王</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>372</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>373</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/132.png"></td>
            <td>百变怪</td>
            <td>健身之海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>健身之海</td>
            <td>阴雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>健身之海</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>健身之海</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>健身之海</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>列岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>列岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>列岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>列岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>206</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/841.png"></td>
            <td>苹裹龙</td>
            <td>列岛海域</td>
            <td>所有天气</td>
            <td>使用酸酸苹果</td>
        </tr>
        <tr>
            <td>207</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/842.png"></td>
            <td>丰蜜龙</td>
            <td>列岛海域</td>
            <td>所有天气</td>
            <td>使用甜甜苹果</td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>列岛海域</td>
            <td>晴沙</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>列岛海域</td>
            <td>阴雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>列岛海域</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>列岛海域</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>列岛海域</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>离岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>离岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>离岛海域</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>离岛海域</td>
            <td>晴沙</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>离岛海域</td>
            <td>阴雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>离岛海域</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>离岛海域</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>离岛海域</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>蜂巢岛</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/415.png"></td>
            <td>三蜜蜂</td>
            <td>蜂巢岛</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>蜂巢岛</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>蜂巢岛</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>蜂巢岛</td>
            <td>晴沙</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>蜂巢岛</td>
            <td>阴雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>蜂巢岛</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>蜂巢岛</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>蜂巢岛</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲叶小童</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td>［盾版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/290.png"></td>
            <td>土居忍士</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/677.png"></td>
            <td>妙喵</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/684.png"></td>
            <td>绵绵泡芙</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>212</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/682.png"></td>
            <td>粉香香</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td>［盾版限定］ 【MOD】明雷20%（替换妙喵）、暗雷10%（替换果然翁）</td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>218</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/083-g.png"></td>
            <td>大葱鸭</td>
            <td>５号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/530.png"></td>
            <td>龙头地鼠</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>31级进化</td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>携带金属膜连接交换</td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>猫头目</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>巨人镜池</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>058</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/182.png"></td>
            <td>美丽花</td>
            <td>巨人镜池</td>
            <td>晴</td>
            <td>日之石进化</td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>巨人镜池</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>巨人镜池</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/710.png"></td>
            <td>南瓜精</td>
            <td>巨人镜池</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>巨人镜池</td>
            <td>晴阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>巨人镜池</td>
            <td>晴阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>236</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/222-g.png"></td>
            <td>太阳珊瑚</td>
            <td>巨人镜池</td>
            <td>晴阴</td>
            <td>［盾版限定］ 【MOD】明雷：晴24%、阴14%（替换天罩虫）；暗雷：晴10%、阴35%（替换咕咕鸽）</td>
        </tr>
        <tr>
            <td>399</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/889.png"></td>
            <td>藏玛然特</td>
            <td>巨人镜池</td>
            <td>晴阴</td>
            <td>【MOD】明雷/暗雷各2%；野生个体必定携带腐朽的盾 剧情</td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>巨人镜池</td>
            <td>晴阴曝</td>
            <td>32级进化</td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>巨人镜池</td>
            <td>晴阴雨沙</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>狡小狐</td>
            <td>巨人镜池</td>
            <td>晴阴雨雷曝</td>
            <td></td>
        </tr>
        <tr>
            <td>285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>巨人镜池</td>
            <td>晴阴雨雷曝</td>
            <td></td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>巨人镜池</td>
            <td>晴阴雨雷曝雾</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>140</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/068.png"></td>
            <td>怪力</td>
            <td>巨人镜池</td>
            <td>晴阴雷曝雹沙雾</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>巨人镜池</td>
            <td>晴雨</td>
            <td></td>
        </tr>
        <tr>
            <td>251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯-伽勒尔形态</td>
            <td>巨人镜池</td>
            <td>晴雨</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>巨人镜池</td>
            <td>曝</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/058.png"></td>
            <td>卡蒂狗</td>
            <td>巨人镜池</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>巨人镜池</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>巨人镜池</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>巨人镜池</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>巨人镜池</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>巨人镜池</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>314</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/449.png"></td>
            <td>沙河马</td>
            <td>巨人镜池</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>巨人镜池</td>
            <td>沙</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>巨人镜池</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>巨人镜池</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>315</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/450.png"></td>
            <td>河马兽</td>
            <td>巨人镜池</td>
            <td>沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝴</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/106.png"></td>
            <td>飞腿郎</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td>［剑版限定］ 等级20以上攻击 ＞ 防御</td>
        </tr>
        <tr>
            <td>109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/107.png"></td>
            <td>快拳郎</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td>［盾版限定］ 等级20以上攻击 < 防御</td>
        </tr>
        <tr>
            <td>218</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/083-g.png"></td>
            <td>大葱鸭</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>巨人镜池</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/045.png"></td>
            <td>霸王花</td>
            <td>巨人镜池</td>
            <td>阴雨雷雪雹沙</td>
            <td>叶之石进化</td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>巨人镜池</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>巨人镜池</td>
            <td>雨</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>巨人镜池</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>巨人镜池</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>巨人镜池</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>巨人镜池</td>
            <td>雨雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>巨人镜池</td>
            <td>雨雷雪雹沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>巨人镜池</td>
            <td>雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>巨人镜池</td>
            <td>雪</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>巨人镜池</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>巨人镜池</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>巨人镜池</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>巨人镜池</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>巨人镜池</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>巨人镜池</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>巨人镜池</td>
            <td>雷</td>
            <td>摇晃树木</td>
        </tr>
        <tr>
            <td>318</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/694.png"></td>
            <td>伞电蜥</td>
            <td>巨人镜池</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>巨人镜池</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/868.png"></td>
            <td>小仙奶</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/684.png"></td>
            <td>绵绵泡芙</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>212</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/682.png"></td>
            <td>粉香香</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>歌德小童</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>［剑版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>［盾版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>294</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>295</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>340</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/755.png"></td>
            <td>睡睡菇</td>
            <td>巨人镜池</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>137</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/477.png"></td>
            <td>黑夜魔灵</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>携带灵界之布连接交换</td>
        </tr>
        <tr>
            <td>240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td>［盾版限定］ 【MOD】明雷：晴30%（换萌虻）、阴40%（换木棉球）、大晴天20%（换捣蛋小妖）、沙暴30%（换螺钉地鼠）；暗雷：晴35%（换蛇纹熊）、阴10%（换天秤偶）、大晴天30%、沙暴30%</td>
        </tr>
        <tr>
            <td>297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>巨石原野</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>巨石原野</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>巨石原野</td>
            <td>晴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>巨石原野</td>
            <td>晴</td>
            <td>【MOD】暗雷15%（替换无畏小子）</td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>巨石原野</td>
            <td>晴阴</td>
            <td></td>
        </tr>
        <tr>
            <td>188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/743.png"></td>
            <td>蝶结萌虻</td>
            <td>巨石原野</td>
            <td>晴阴</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>巨石原野</td>
            <td>晴阴曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>巨石原野</td>
            <td>晴阴曝沙</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>054</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/763.png"></td>
            <td>甜冷美后</td>
            <td>巨石原野</td>
            <td>晴阴曝雪雹沙雾</td>
            <td>学会踩踏技能</td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>巨石原野</td>
            <td>晴阴曝雪雹沙雾</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊-伽勒尔的样子</td>
            <td>巨石原野</td>
            <td>晴阴雨曝雪雹沙雾</td>
            <td>普通形态铠岛交换</td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>巨石原野</td>
            <td>晴阴雨曝雪雹沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>巨石原野</td>
            <td>晴阴雨雷曝雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/291.png"></td>
            <td>铁面忍者</td>
            <td>巨石原野</td>
            <td>晴雨</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>巨石原野</td>
            <td>晴雷曝雪沙</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>巨石原野</td>
            <td>曝</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>244</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/757.png"></td>
            <td>夜盗火蜥</td>
            <td>巨石原野</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>巨石原野</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>巨石原野</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>巨石原野</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>252</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/438.png"></td>
            <td>盆才怪</td>
            <td>巨石原野</td>
            <td>沙</td>
            <td>携带岩石薰香生蛋</td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>巨石原野</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td>32级进化</td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>223</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td>［盾版限定］ 37级进化</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>225</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td>［剑版限定］ 39级进化</td>
        </tr>
        <tr>
            <td>262</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/546.png"></td>
            <td>木棉球</td>
            <td>巨石原野</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>巨石原野</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>巨石原野</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>巨石原野</td>
            <td>雨雷</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>巨石原野</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>巨石原野</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>巨石原野</td>
            <td>雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>巨石原野</td>
            <td>雨雷雪雹雾</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>巨石原野</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>巨石原野</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>巨石原野</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>巨石原野</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>巨石原野</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>巨石原野</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>巨石原野</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>巨石原野</td>
            <td>雾</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>狡小狐</td>
            <td>巨石原野</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>巨石原野</td>
            <td>雾</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>巨石原野</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>巨石原野</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>258</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/176.png"></td>
            <td>波克基古</td>
            <td>巨石原野</td>
            <td>雾</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>学会挑衅时提升等级</td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>355</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/226.png"></td>
            <td>巨翅飞鱼</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td>铁炮鱼同行时提升等级</td>
        </tr>
        <tr>
            <td>373</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/132.png"></td>
            <td>百变怪</td>
            <td>逆鳞湖</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/470.png"></td>
            <td>叶伊布</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td>叶之石进化</td>
        </tr>
        <tr>
            <td>278</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/606.png"></td>
            <td>大宇怪</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td>［剑版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td>［盾版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>逆鳞湖</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>逆鳞湖</td>
            <td>晴沙</td>
            <td>35级晚上进化</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>逆鳞湖</td>
            <td>晴阴雨雷曝</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>逆鳞湖</td>
            <td>晴阴雷曝沙雾</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>逆鳞湖</td>
            <td>晴雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>346</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/780.png"></td>
            <td>老翁龙</td>
            <td>逆鳞湖</td>
            <td>晴雷</td>
            <td>［盾版限定］ 【MOD】明雷20%（替换穿着熊）</td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>逆鳞湖</td>
            <td>晴雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>069</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/038.png"></td>
            <td>九尾</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>［剑版限定］ 火之石进化</td>
        </tr>
        <tr>
            <td>071</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/059.png"></td>
            <td>风速狗</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>火之石进化</td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨碳山</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/136.png"></td>
            <td>火伊布</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>火之石进化</td>
        </tr>
        <tr>
            <td>288</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>41级进化</td>
        </tr>
        <tr>
            <td>289</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/609.png"></td>
            <td>水晶灯火灵</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>暗之石进化</td>
        </tr>
        <tr>
            <td>313</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>323</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/330.png"></td>
            <td>沙漠蜻蜓</td>
            <td>逆鳞湖</td>
            <td>曝</td>
            <td>45级进化</td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>逆鳞湖</td>
            <td>曝沙</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>逆鳞湖</td>
            <td>曝沙</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>逆鳞湖</td>
            <td>曝沙</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/530.png"></td>
            <td>龙头地鼠</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td>31级进化</td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/197.png"></td>
            <td>月亮伊布</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td>亲密度*220以上或友好度*158以上提升等级夜晚</td>
        </tr>
        <tr>
            <td>226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618-g.png"></td>
            <td>泥巴鱼-伽勒尔形态</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>315</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/450.png"></td>
            <td>河马兽</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>384</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/247.png"></td>
            <td>沙基拉斯</td>
            <td>逆鳞湖</td>
            <td>沙</td>
            <td>［盾版限定］ 30级进化</td>
        </tr>
        <tr>
            <td>110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/237.png"></td>
            <td>战舞郎</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>等级20以上攻击 = 防御</td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>霸道熊猫</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>等级32以上与恶属性宝可梦同行</td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/569.png"></td>
            <td>灰尘山</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>6级进化</td>
        </tr>
        <tr>
            <td>200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/196.png"></td>
            <td>太阳伊布</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>345</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/870.png"></td>
            <td>列阵兵</td>
            <td>逆鳞湖</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>逆鳞湖</td>
            <td>阴曝</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>392</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>逆鳞湖</td>
            <td>阴曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>341</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/756.png"></td>
            <td>灯罩夜菇</td>
            <td>逆鳞湖</td>
            <td>阴雨雷</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>396</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/886.png"></td>
            <td>多龙奇</td>
            <td>逆鳞湖</td>
            <td>阴雨雷雾</td>
            <td>50级进化</td>
        </tr>
        <tr>
            <td>395</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/885.png"></td>
            <td>多龙梅西亚</td>
            <td>逆鳞湖</td>
            <td>阴雷雾</td>
            <td></td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/134.png"></td>
            <td>水伊布</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>235</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/689.png"></td>
            <td>龟足巨铠</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>39级进化</td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/633.png"></td>
            <td>单首龙</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>逆鳞湖</td>
            <td>雨</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>372</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>逆鳞湖</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>逆鳞湖</td>
            <td>雪</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>逆鳞湖</td>
            <td>雪</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>逆鳞湖</td>
            <td>雪</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>逆鳞湖</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>逆鳞湖</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>365</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122-g.png"></td>
            <td>魔枪人偶-伽勒尔形态</td>
            <td>逆鳞湖</td>
            <td>雪</td>
            <td>学会模仿时提升等级</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>逆鳞湖</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/471.png"></td>
            <td>冰伊布</td>
            <td>逆鳞湖</td>
            <td>雪雹</td>
            <td>冰之石进化</td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>48级进化</td>
        </tr>
        <tr>
            <td>198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/135.png"></td>
            <td>雷伊布</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>雷之石进化</td>
        </tr>
        <tr>
            <td>326</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/612.png"></td>
            <td>双斧战龙</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>48级进化</td>
        </tr>
        <tr>
            <td>344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>347</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/776.png"></td>
            <td>爆焰龟兽</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>390</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/705.png"></td>
            <td>黏美儿</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>［盾版限定］ 40级进化</td>
        </tr>
        <tr>
            <td>393</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/783.png"></td>
            <td>鳞甲龙</td>
            <td>逆鳞湖</td>
            <td>雷</td>
            <td>［剑版限定］ 35级进化</td>
        </tr>
        <tr>
            <td>387</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/634.png"></td>
            <td>双首暴龙</td>
            <td>逆鳞湖</td>
            <td>雷沙</td>
            <td>50级进化</td>
        </tr>
        <tr>
            <td>115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/601.png"></td>
            <td>齿轮怪</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td>49级进化</td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>猫头目</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td>52级进化</td>
        </tr>
        <tr>
            <td>303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>331</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/680.png"></td>
            <td>双剑鞘</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>348</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/777.png"></td>
            <td>托戈德玛尔</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>371</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/884.png"></td>
            <td>铝钢龙</td>
            <td>逆鳞湖</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>美丽度达到170以上提升等级 携带美丽鳞片连接交换</td>
        </tr>
        <tr>
            <td>204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/700.png"></td>
            <td>仙子伊布</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>友好度50*或158*以上学会妖精属性招式时提升等级</td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>269</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>［剑版限定］ 41级进化</td>
        </tr>
        <tr>
            <td>272</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td>［盾版限定］ 41级进化</td>
        </tr>
        <tr>
            <td>337</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>逆鳞湖</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>013</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/010.png"></td>
            <td>绿毛虫</td>
            <td>１号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>014</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/011.png"></td>
            <td>铁甲蛹</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td>7级进化</td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝴</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/291.png"></td>
            <td>铁面忍者</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>煦丽草原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>煦丽草原</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/415.png"></td>
            <td>三蜜蜂</td>
            <td>煦丽草原</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>117</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/416.png"></td>
            <td>蜂女王</td>
            <td>煦丽草原</td>
            <td>晴</td>
            <td>等级21以上雌性</td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>煦丽草原</td>
            <td>晴阴曝沙雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>煦丽草原</td>
            <td>晴阴雨曝雪沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>煦丽草原</td>
            <td>晴阴雨曝雪沙雾</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>霸道熊猫</td>
            <td>煦丽草原</td>
            <td>晴阴雨雷曝</td>
            <td>等级32以上与恶属性宝可梦同行</td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>煦丽草原</td>
            <td>晴雪</td>
            <td></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>煦丽草原</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>煦丽草原</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>煦丽草原</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>煦丽草原</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>煦丽草原</td>
            <td>沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>煦丽草原</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>煦丽草原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>煦丽草原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>煦丽草原</td>
            <td>阴雾</td>
            <td></td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>煦丽草原</td>
            <td>雨</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>煦丽草原</td>
            <td>雨</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>煦丽草原</td>
            <td>雨</td>
            <td>［剑版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>煦丽草原</td>
            <td>雨雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>煦丽草原</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>煦丽草原</td>
            <td>雪雹</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>煦丽草原</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>煦丽草原</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>煦丽草原</td>
            <td>雷</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>煦丽草原</td>
            <td>雷</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>煦丽草原</td>
            <td>雹</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>煦丽草原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>煦丽草原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>121</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/281.png"></td>
            <td>奇鲁莉安</td>
            <td>煦丽草原</td>
            <td>雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>煦丽草原</td>
            <td>雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝴</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td>10级进化</td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯-伽勒尔形态</td>
            <td>牙牙湖东岸</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>牙牙湖东岸</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>牙牙湖东岸</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>342</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>牙牙湖东岸</td>
            <td>晴阴</td>
            <td>【MOD】明雷：晴5%（换童偶熊）、阴20%（换泡沫栗鼠）；暗雷：晴25%、阴50%（换童偶熊）</td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>牙牙湖东岸</td>
            <td>晴阴曝沙</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>牙牙湖东岸</td>
            <td>晴阴曝雪雹沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/569.png"></td>
            <td>灰尘山</td>
            <td>牙牙湖东岸</td>
            <td>晴阴雨雷</td>
            <td>6级进化</td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>牙牙湖东岸</td>
            <td>晴阴雨雷雾</td>
            <td></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>牙牙湖东岸</td>
            <td>晴阴雨雷雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>牙牙湖东岸</td>
            <td>晴雷雾</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>牙牙湖东岸</td>
            <td>晴雾</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>牙牙湖东岸</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>牙牙湖东岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>牙牙湖东岸</td>
            <td>曝沙</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>牙牙湖东岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>牙牙湖东岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>牙牙湖东岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>牙牙湖东岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>牙牙湖东岸</td>
            <td>阴曝雪雹沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>牙牙湖东岸</td>
            <td>阴雷曝雪雹沙</td>
            <td></td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>牙牙湖东岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>牙牙湖东岸</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>牙牙湖东岸</td>
            <td>雪雹</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>牙牙湖东岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>牙牙湖东岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>牙牙湖东岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>牙牙湖东岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>牙牙湖东岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>牙牙湖东岸</td>
            <td>雾</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>道路（１）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>道路（１）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>道路（１）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>美纳斯湖北岸</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>美纳斯湖北岸</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>美纳斯湖北岸</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>美纳斯湖北岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>美纳斯湖北岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>305</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/592.png"></td>
            <td>轻飘飘</td>
            <td>美纳斯湖北岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>美纳斯湖北岸</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>美纳斯湖北岸</td>
            <td>晴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>299</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>美纳斯湖北岸</td>
            <td>晴</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>美纳斯湖北岸</td>
            <td>晴曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>美纳斯湖北岸</td>
            <td>晴阴曝沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>美纳斯湖北岸</td>
            <td>晴阴曝雪雹沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>美纳斯湖北岸</td>
            <td>晴阴雨雷</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>美纳斯湖北岸</td>
            <td>晴阴雨雷曝雪雾</td>
            <td></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>美纳斯湖北岸</td>
            <td>晴阴雨雷雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>美纳斯湖北岸</td>
            <td>晴阴雷曝沙</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>美纳斯湖北岸</td>
            <td>晴雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>美纳斯湖北岸</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>美纳斯湖北岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>美纳斯湖北岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>美纳斯湖北岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>美纳斯湖北岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>美纳斯湖北岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>美纳斯湖北岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>美纳斯湖北岸</td>
            <td>阴雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>美纳斯湖北岸</td>
            <td>阴雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>美纳斯湖北岸</td>
            <td>雨曝沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>美纳斯湖北岸</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>美纳斯湖北岸</td>
            <td>雨雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>美纳斯湖北岸</td>
            <td>雨雷沙</td>
            <td></td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>美纳斯湖北岸</td>
            <td>雨雷沙</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>美纳斯湖北岸</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>美纳斯湖北岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>美纳斯湖北岸</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>美纳斯湖北岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>美纳斯湖北岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>美纳斯湖北岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>美纳斯湖北岸</td>
            <td>雾</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>瞭望塔旧址</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>瞭望塔旧址</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>瞭望塔旧址</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>瞭望塔旧址</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>瞭望塔旧址</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/337.png"></td>
            <td>月石</td>
            <td>瞭望塔旧址</td>
            <td>晴</td>
            <td>【MOD】明雷20%（替换甜竹竹）、暗雷25%</td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>瞭望塔旧址</td>
            <td>晴曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>瞭望塔旧址</td>
            <td>晴曝沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>瞭望塔旧址</td>
            <td>晴曝雪</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>瞭望塔旧址</td>
            <td>晴阴</td>
            <td></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>瞭望塔旧址</td>
            <td>晴阴雷曝雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>瞭望塔旧址</td>
            <td>晴雨雷沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>瞭望塔旧址</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>瞭望塔旧址</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>瞭望塔旧址</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>瞭望塔旧址</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>瞭望塔旧址</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/356.png"></td>
            <td>彷徨夜灵</td>
            <td>瞭望塔旧址</td>
            <td>阴雨雷沙</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>瞭望塔旧址</td>
            <td>阴雨雷雹沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>瞭望塔旧址</td>
            <td>阴雨雷雹沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>瞭望塔旧址</td>
            <td>雨雷雹沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>瞭望塔旧址</td>
            <td>雪雹</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>瞭望塔旧址</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>瞭望塔旧址</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>瞭望塔旧址</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>牙牙湖之眼</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>牙牙湖之眼</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>牙牙湖之眼</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>牙牙湖之眼</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>牙牙湖之眼</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>牙牙湖之眼</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/762.png"></td>
            <td>甜舞妮</td>
            <td>牙牙湖之眼</td>
            <td>晴</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>牙牙湖之眼</td>
            <td>晴阴</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>326</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/612.png"></td>
            <td>双斧战龙</td>
            <td>牙牙湖之眼</td>
            <td>晴阴雨曝沙雾</td>
            <td>48级进化</td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>牙牙湖之眼</td>
            <td>晴阴雨雷曝雪雾</td>
            <td>32级进化</td>
        </tr>
        <tr>
            <td>324</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/610.png"></td>
            <td>牙牙</td>
            <td>牙牙湖之眼</td>
            <td>晴阴雨雾</td>
            <td></td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>牙牙湖之眼</td>
            <td>晴阴雷</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>牙牙湖之眼</td>
            <td>晴雨</td>
            <td>【MOD】明雷：晴30%、雨20%（替换掘地兔）；暗雷：晴5%（换豪力）、雨25%（换穿着熊）</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>牙牙湖之眼</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>牙牙湖之眼</td>
            <td>曝沙</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>牙牙湖之眼</td>
            <td>曝沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>牙牙湖之眼</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>牙牙湖之眼</td>
            <td>沙雾</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>牙牙湖之眼</td>
            <td>阴</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>牙牙湖之眼</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/737.png"></td>
            <td>虫电宝</td>
            <td>牙牙湖之眼</td>
            <td>雨</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>牙牙湖之眼</td>
            <td>雨雷</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>牙牙湖之眼</td>
            <td>雨雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>牙牙湖之眼</td>
            <td>雪雹</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>牙牙湖之眼</td>
            <td>雷</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>牙牙湖之眼</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>牙牙湖之眼</td>
            <td>雹</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>牙牙湖之眼</td>
            <td>雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>牙牙湖之眼</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>牙牙湖之眼</td>
            <td>雾</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td>［剑版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td>［盾版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>沙尘洼地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>328</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/867.png"></td>
            <td>迭失板</td>
            <td>沙尘洼地</td>
            <td>—</td>
            <td>长岩门下附近 受到至少50伤害后到</td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>沙尘洼地</td>
            <td>晴</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>沙尘洼地</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/525.png"></td>
            <td>地幔岩</td>
            <td>沙尘洼地</td>
            <td>晴曝沙</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>沙尘洼地</td>
            <td>晴曝沙雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>385</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班吉拉斯</td>
            <td>沙尘洼地</td>
            <td>晴曝雪雹沙雾</td>
            <td>［盾版限定］ 55级进化</td>
        </tr>
        <tr>
            <td>394</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/784.png"></td>
            <td>杖尾鳞甲龙</td>
            <td>沙尘洼地</td>
            <td>晴曝雪雹沙雾</td>
            <td>［剑版限定］ 45级进化</td>
        </tr>
        <tr>
            <td>323</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/330.png"></td>
            <td>沙漠蜻蜓</td>
            <td>沙尘洼地</td>
            <td>晴沙</td>
            <td>45级进化</td>
        </tr>
        <tr>
            <td>253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>沙尘洼地</td>
            <td>晴阴曝雹沙雾</td>
            <td>学会模仿时提升等级进化</td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>狡小狐</td>
            <td>沙尘洼地</td>
            <td>晴阴雨雷曝</td>
            <td></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>沙尘洼地</td>
            <td>晴阴雨雷沙雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>沙尘洼地</td>
            <td>晴阴雨雹沙雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>沙尘洼地</td>
            <td>晴雨</td>
            <td></td>
        </tr>
        <tr>
            <td>251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯-伽勒尔形态</td>
            <td>沙尘洼地</td>
            <td>晴雨</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>沙尘洼地</td>
            <td>晴雨雷雪雹</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>294</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>沙尘洼地</td>
            <td>晴雾</td>
            <td>［盾版限定］ 【MOD】明雷：晴30%（换毛毛角羊）、雾20%（换白蓬蓬）；暗雷：晴15%（换滑滑小子）、雾55%（换果然翁）</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>沙尘洼地</td>
            <td>曝</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/058.png"></td>
            <td>卡蒂狗</td>
            <td>沙尘洼地</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨碳山</td>
            <td>沙尘洼地</td>
            <td>曝</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618-g.png"></td>
            <td>泥巴鱼-伽勒尔形态</td>
            <td>沙尘洼地</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>沙尘洼地</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>314</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/449.png"></td>
            <td>沙河马</td>
            <td>沙尘洼地</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>沙尘洼地</td>
            <td>沙</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>沙尘洼地</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/106.png"></td>
            <td>飞腿郎</td>
            <td>沙尘洼地</td>
            <td>阴</td>
            <td>［剑版限定］ 等级20以上攻击 ＞ 防御</td>
        </tr>
        <tr>
            <td>109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/107.png"></td>
            <td>快拳郎</td>
            <td>沙尘洼地</td>
            <td>阴</td>
            <td>［盾版限定］ 等级20以上攻击 < 防御</td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>沙尘洼地</td>
            <td>阴</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>沙尘洼地</td>
            <td>阴曝沙雾</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>235</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/689.png"></td>
            <td>龟足巨铠</td>
            <td>沙尘洼地</td>
            <td>阴雨雷</td>
            <td>39级进化</td>
        </tr>
        <tr>
            <td>297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>沙尘洼地</td>
            <td>阴雨雷曝雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>沙尘洼地</td>
            <td>阴雨雷雪雹沙雾</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>沙尘洼地</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>沙尘洼地</td>
            <td>雨雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>沙尘洼地</td>
            <td>雨雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>沙尘洼地</td>
            <td>雨雷曝雪</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>沙尘洼地</td>
            <td>雪</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>沙尘洼地</td>
            <td>雪</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>沙尘洼地</td>
            <td>雪</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>沙尘洼地</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>沙尘洼地</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>沙尘洼地</td>
            <td>雪雹</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>沙尘洼地</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/737.png"></td>
            <td>虫电宝</td>
            <td>沙尘洼地</td>
            <td>雷</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>沙尘洼地</td>
            <td>雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>沙尘洼地</td>
            <td>雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/600.png"></td>
            <td>齿轮组</td>
            <td>沙尘洼地</td>
            <td>雹</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>沙尘洼地</td>
            <td>雹</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/678.png"></td>
            <td>超能妙喵</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>259</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/468.png"></td>
            <td>波克斯基</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>光之石进化</td>
        </tr>
        <tr>
            <td>268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>歌德小童</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>［剑版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>［盾版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>295</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>沙尘洼地</td>
            <td>雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td>32级进化</td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/710.png"></td>
            <td>南瓜精</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>192</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/711.png"></td>
            <td>南瓜怪人</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td>链接进化</td>
        </tr>
        <tr>
            <td>303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>320</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/701.png"></td>
            <td>摔角鹰人</td>
            <td>拳关丘陵</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>拳关丘陵</td>
            <td>晴</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>拳关丘陵</td>
            <td>晴阴</td>
            <td></td>
        </tr>
        <tr>
            <td>383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>拳关丘陵</td>
            <td>晴阴曝</td>
            <td>【MOD】明雷：晴25%、阴35%、大晴天15%（替换好啦鱿）；暗雷：晴10%、阴45%（换童偶熊）、大晴天5%（换果然翁）</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>拳关丘陵</td>
            <td>晴阴雨曝雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/600.png"></td>
            <td>齿轮组</td>
            <td>拳关丘陵</td>
            <td>晴阴雨雪</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>拳关丘陵</td>
            <td>晴阴雨雷曝雪雹沙</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>拳关丘陵</td>
            <td>晴阴雨雷曝雹沙</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/677.png"></td>
            <td>妙喵</td>
            <td>拳关丘陵</td>
            <td>晴阴雷曝雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/045.png"></td>
            <td>霸王花</td>
            <td>拳关丘陵</td>
            <td>晴雨雷曝沙</td>
            <td>叶之石进化</td>
        </tr>
        <tr>
            <td>253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>拳关丘陵</td>
            <td>晴雷曝沙</td>
            <td>【MOD】暗雷29%（替换童偶熊） 学会模仿时提升等级进化</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>拳关丘陵</td>
            <td>曝</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/058.png"></td>
            <td>卡蒂狗</td>
            <td>拳关丘陵</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>拳关丘陵</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>拳关丘陵</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>拳关丘陵</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>拳关丘陵</td>
            <td>沙</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>拳关丘陵</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>324</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/610.png"></td>
            <td>牙牙</td>
            <td>拳关丘陵</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>拳关丘陵</td>
            <td>阴</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>061</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/407.png"></td>
            <td>罗丝雷朵</td>
            <td>拳关丘陵</td>
            <td>阴雾</td>
            <td>光之石进化</td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>拳关丘陵</td>
            <td>雨</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>拳关丘陵</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>拳关丘陵</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>拳关丘陵</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>拳关丘陵</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>拳关丘陵</td>
            <td>雪雹</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>拳关丘陵</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/737.png"></td>
            <td>虫电宝</td>
            <td>拳关丘陵</td>
            <td>雷</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>拳关丘陵</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>拳关丘陵</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/601.png"></td>
            <td>齿轮怪</td>
            <td>拳关丘陵</td>
            <td>雷曝雹沙雾</td>
            <td>49级进化</td>
        </tr>
        <tr>
            <td>330</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/679.png"></td>
            <td>独剑鞘</td>
            <td>拳关丘陵</td>
            <td>雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>拳关丘陵</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>拳关丘陵</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>拳关丘陵</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>340</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/755.png"></td>
            <td>睡睡菇</td>
            <td>拳关丘陵</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>巨人凳岩</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>巨人凳岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>巨人凳岩</td>
            <td>所有天气</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>巨人凳岩</td>
            <td>所有天气</td>
            <td>携带金属膜连接交换</td>
        </tr>
        <tr>
            <td>247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>巨人凳岩</td>
            <td>所有天气</td>
            <td>52级进化</td>
        </tr>
        <tr>
            <td>371</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/884.png"></td>
            <td>铝钢龙</td>
            <td>巨人凳岩</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>巨人凳岩</td>
            <td>晴</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>巨人凳岩</td>
            <td>晴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>巨人凳岩</td>
            <td>晴</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>巨人凳岩</td>
            <td>晴沙</td>
            <td></td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>巨人凳岩</td>
            <td>晴阴曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>巨人凳岩</td>
            <td>晴阴雨雷曝雪雹沙</td>
            <td></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>巨人凳岩</td>
            <td>晴阴雪沙</td>
            <td></td>
        </tr>
        <tr>
            <td>018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/738.png"></td>
            <td>锹农炮虫</td>
            <td>巨人凳岩</td>
            <td>晴阴雷曝沙</td>
            <td>雷之石进化</td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲叶小童</td>
            <td>巨人凳岩</td>
            <td>晴雨</td>
            <td>［盾版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>巨人凳岩</td>
            <td>晴雨</td>
            <td>［剑版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>巨人凳岩</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>巨人凳岩</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>巨人凳岩</td>
            <td>曝沙</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>巨人凳岩</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>巨人凳岩</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>巨人凳岩</td>
            <td>沙</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>巨人凳岩</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>巨人凳岩</td>
            <td>阴</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>巨人凳岩</td>
            <td>阴</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>巨人凳岩</td>
            <td>阴雨曝雾</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>巨人凳岩</td>
            <td>阴雨雷</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>巨人凳岩</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>巨人凳岩</td>
            <td>雨</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>巨人凳岩</td>
            <td>雨雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>巨人凳岩</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>巨人凳岩</td>
            <td>雪雹</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>巨人凳岩</td>
            <td>雪雹</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>巨人凳岩</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>巨人凳岩</td>
            <td>雷</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>巨人凳岩</td>
            <td>雷</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>巨人凳岩</td>
            <td>雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/518.png"></td>
            <td>梦梦蚀</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td>月之石进化</td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/356.png"></td>
            <td>彷徨夜灵</td>
            <td>巨人凳岩</td>
            <td>雾</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>机擎河岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>机擎河岸</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>260</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/446.png"></td>
            <td>小卡比兽</td>
            <td>机擎河岸</td>
            <td>晴</td>
            <td>携带饱腹薰香生蛋</td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>机擎河岸</td>
            <td>晴阴</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>机擎河岸</td>
            <td>晴阴曝雪沙雾</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>261</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>机擎河岸</td>
            <td>晴阴雨雷曝雪雹沙</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>机擎河岸</td>
            <td>晴阴雨雷雪雾</td>
            <td>链接交换进化</td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>机擎河岸</td>
            <td>晴雨雷曝</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>机擎河岸</td>
            <td>晴雪</td>
            <td></td>
        </tr>
        <tr>
            <td>287</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/607.png"></td>
            <td>烛光灵</td>
            <td>机擎河岸</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>机擎河岸</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>机擎河岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>机擎河岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>机擎河岸</td>
            <td>曝沙</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>机擎河岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>机擎河岸</td>
            <td>沙</td>
            <td>学会模仿时提升等级进化</td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>机擎河岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>机擎河岸</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>机擎河岸</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>机擎河岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯-伽勒尔形态</td>
            <td>机擎河岸</td>
            <td>阴</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>机擎河岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/743.png"></td>
            <td>蝶结萌虻</td>
            <td>机擎河岸</td>
            <td>阴雪雹沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>机擎河岸</td>
            <td>阴雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>机擎河岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>机擎河岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>机擎河岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>234</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/688.png"></td>
            <td>龟脚脚</td>
            <td>机擎河岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>机擎河岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>机擎河岸</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>机擎河岸</td>
            <td>雨雷曝雪雹沙</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>机擎河岸</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>机擎河岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>机擎河岸</td>
            <td>雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>机擎河岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>机擎河岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>机擎河岸</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>机擎河岸</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>机擎河岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/677.png"></td>
            <td>妙喵</td>
            <td>机擎河岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>机擎河岸</td>
            <td>雾</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>机擎河岸</td>
            <td>雾</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>277</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/605.png"></td>
            <td>小灰怪</td>
            <td>机擎河岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>［盾版限定］ 【MOD】明雷10%（替换咬咬龟）、暗雷15%</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯-伽勒尔形态</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>机擎市郊外</td>
            <td>所有天气</td>
            <td>学会模仿时提升等级进化</td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>21级进化</td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊-伽勒尔的样子</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>普通形态铠岛交换</td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>35级晚上进化</td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/569.png"></td>
            <td>灰尘山</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>6级进化</td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>桥间空地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>桥间空地</td>
            <td>晴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>桥间空地</td>
            <td>晴曝</td>
            <td>15级进化</td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>桥间空地</td>
            <td>晴阴曝雪雾</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>302</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/878.png"></td>
            <td>铜象</td>
            <td>桥间空地</td>
            <td>晴阴曝雹</td>
            <td></td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>桥间空地</td>
            <td>晴阴曝雾</td>
            <td></td>
        </tr>
        <tr>
            <td>188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/743.png"></td>
            <td>蝶结萌虻</td>
            <td>桥间空地</td>
            <td>晴阴曝雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>桥间空地</td>
            <td>晴阴沙</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>桥间空地</td>
            <td>晴阴雨雷曝沙</td>
            <td>使用觉醒之石雄性</td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>桥间空地</td>
            <td>晴阴雨雷曝雹沙雾</td>
            <td>48级进化</td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>桥间空地</td>
            <td>晴阴雨雷雾</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>278</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/606.png"></td>
            <td>大宇怪</td>
            <td>桥间空地</td>
            <td>晴阴雪雹雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>257</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/175.png"></td>
            <td>波克比</td>
            <td>桥间空地</td>
            <td>晴阴雾</td>
            <td></td>
        </tr>
        <tr>
            <td>277</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/605.png"></td>
            <td>小灰怪</td>
            <td>桥间空地</td>
            <td>晴阴雾</td>
            <td></td>
        </tr>
        <tr>
            <td>233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>桥间空地</td>
            <td>晴雨雷</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>桥间空地</td>
            <td>晴雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>桥间空地</td>
            <td>晴雨雷曝雪雹沙雾</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>桥间空地</td>
            <td>曝</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>桥间空地</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>桥间空地</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>桥间空地</td>
            <td>曝沙</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>287</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/607.png"></td>
            <td>烛光灵</td>
            <td>桥间空地</td>
            <td>曝雾</td>
            <td></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>桥间空地</td>
            <td>沙</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>252</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/438.png"></td>
            <td>盆才怪</td>
            <td>桥间空地</td>
            <td>沙</td>
            <td>携带岩石薰香生蛋</td>
        </tr>
        <tr>
            <td>253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>桥间空地</td>
            <td>沙</td>
            <td>学会模仿时提升等级进化</td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>桥间空地</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>桥间空地</td>
            <td>沙</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>桥间空地</td>
            <td>沙</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>桥间空地</td>
            <td>阴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>桥间空地</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>桥间空地</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>桥间空地</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>桥间空地</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>桥间空地</td>
            <td>阴</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>霸道熊猫</td>
            <td>桥间空地</td>
            <td>阴曝</td>
            <td>等级32以上与恶属性宝可梦同行</td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>桥间空地</td>
            <td>阴沙</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>桥间空地</td>
            <td>阴沙</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>桥间空地</td>
            <td>雨</td>
            <td></td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>桥间空地</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>桥间空地</td>
            <td>雨雷</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>桥间空地</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>234</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/688.png"></td>
            <td>龟脚脚</td>
            <td>桥间空地</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>桥间空地</td>
            <td>雨雷雪沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>桥间空地</td>
            <td>雨雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>桥间空地</td>
            <td>雪</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>280</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冰原熊</td>
            <td>桥间空地</td>
            <td>雪</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>桥间空地</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>桥间空地</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>桥间空地</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>桥间空地</td>
            <td>雹</td>
            <td>觉携带锐利之爪提升等级夜晚</td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>桥间空地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/518.png"></td>
            <td>梦梦蚀</td>
            <td>桥间空地</td>
            <td>雾</td>
            <td>月之石进化</td>
        </tr>
        <tr>
            <td>185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/868.png"></td>
            <td>小仙奶</td>
            <td>桥间空地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>桥间空地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>道路（２・３）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊-伽勒尔的样子</td>
            <td>道路（２・３）</td>
            <td>所有天气</td>
            <td>普通形态铠岛交换</td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>道路（３）</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>道路（３）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>道路（３）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>道路（３）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>道路（３）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>球湖湖畔</td>
            <td>所有天气</td>
            <td>摇晃树木</td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>球湖湖畔</td>
            <td>所有天气</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>球湖湖畔</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>球湖湖畔</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>球湖湖畔</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>球湖湖畔</td>
            <td>晴曝</td>
            <td></td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>球湖湖畔</td>
            <td>晴曝</td>
            <td></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>球湖湖畔</td>
            <td>晴阴雨雷曝雪雾</td>
            <td></td>
        </tr>
        <tr>
            <td>260</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/446.png"></td>
            <td>小卡比兽</td>
            <td>球湖湖畔</td>
            <td>晴阴雨雷曝雪雾</td>
            <td>携带饱腹薰香生蛋</td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>球湖湖畔</td>
            <td>晴雨</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>262</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/546.png"></td>
            <td>木棉球</td>
            <td>球湖湖畔</td>
            <td>晴雨</td>
            <td></td>
        </tr>
        <tr>
            <td>263</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/547.png"></td>
            <td>风妖精</td>
            <td>球湖湖畔</td>
            <td>晴雨</td>
            <td>日之石进化</td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>球湖湖畔</td>
            <td>晴雨雷雪雹雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>球湖湖畔</td>
            <td>晴雪</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>球湖湖畔</td>
            <td>晴雪雹</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨碳山</td>
            <td>球湖湖畔</td>
            <td>晴雷曝雪雹沙雾</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>337</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>球湖湖畔</td>
            <td>晴雾</td>
            <td></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>球湖湖畔</td>
            <td>曝</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264-g.png"></td>
            <td>直冲熊</td>
            <td>球湖湖畔</td>
            <td>阴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>球湖湖畔</td>
            <td>阴</td>
            <td>35级晚上进化</td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>球湖湖畔</td>
            <td>阴雨</td>
            <td>48级进化</td>
        </tr>
        <tr>
            <td>344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>球湖湖畔</td>
            <td>阴雷</td>
            <td></td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>球湖湖畔</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>球湖湖畔</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>球湖湖畔</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>球湖湖畔</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>球湖湖畔</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>球湖湖畔</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>球湖湖畔</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>球湖湖畔</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>道路（７）</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>道路（７）</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>道路（７）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>道路（７）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>巨树丘陵</td>
            <td>所有天气</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>巨人睡榻</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>巨人睡榻</td>
            <td>晴</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>巨人睡榻</td>
            <td>晴</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>巨人睡榻</td>
            <td>晴</td>
            <td>链接交换进化</td>
        </tr>
        <tr>
            <td>196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>巨人睡榻</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/470.png"></td>
            <td>叶伊布</td>
            <td>巨人睡榻</td>
            <td>晴</td>
            <td>叶之石进化</td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>巨人睡榻</td>
            <td>晴阴雨雷曝雪</td>
            <td></td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>巨人睡榻</td>
            <td>晴阴雨雷雪雹雾</td>
            <td>摇晃树木 24级进化</td>
        </tr>
        <tr>
            <td>199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/136.png"></td>
            <td>火伊布</td>
            <td>巨人睡榻</td>
            <td>曝</td>
            <td>火之石进化</td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>巨人睡榻</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>巨人睡榻</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264-g.png"></td>
            <td>直冲熊</td>
            <td>巨人睡榻</td>
            <td>阴</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/197.png"></td>
            <td>月亮伊布</td>
            <td>巨人睡榻</td>
            <td>阴</td>
            <td>亲密度*220以上或友好度*158以上提升等级夜晚</td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>巨人睡榻</td>
            <td>阴雨</td>
            <td>35级晚上进化</td>
        </tr>
        <tr>
            <td>288</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>巨人睡榻</td>
            <td>阴雾</td>
            <td>41级进化</td>
        </tr>
        <tr>
            <td>289</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/609.png"></td>
            <td>水晶灯火灵</td>
            <td>巨人睡榻</td>
            <td>阴雾</td>
            <td>暗之石进化</td>
        </tr>
        <tr>
            <td>197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/134.png"></td>
            <td>水伊布</td>
            <td>巨人睡榻</td>
            <td>雨</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>巨人睡榻</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>巨人睡榻</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/196.png"></td>
            <td>太阳伊布</td>
            <td>巨人睡榻</td>
            <td>雪</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>巨人睡榻</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>巨人睡榻</td>
            <td>雪雹</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>巨人睡榻</td>
            <td>雪雹</td>
            <td>雪童子使用觉醒之石雌性</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>巨人睡榻</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/135.png"></td>
            <td>雷伊布</td>
            <td>巨人睡榻</td>
            <td>雷</td>
            <td>雷之石进化</td>
        </tr>
        <tr>
            <td>203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/471.png"></td>
            <td>冰伊布</td>
            <td>巨人睡榻</td>
            <td>雹</td>
            <td>冰之石进化</td>
        </tr>
        <tr>
            <td>153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>美丽度达到170以上提升等级 携带美丽鳞片连接交换</td>
        </tr>
        <tr>
            <td>204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/700.png"></td>
            <td>仙子伊布</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>友好度50*或158*以上学会妖精属性招式时提升等级</td>
        </tr>
        <tr>
            <td>239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>256</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td>月之石进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>巨人睡榻</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>猫头目</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>尖钉镇郊外</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>尖钉镇郊外</td>
            <td>晴</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>尖钉镇郊外</td>
            <td>阴雨雷曝雪雹沙雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>美纳斯湖南岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>美纳斯湖南岸</td>
            <td>晴曝沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲叶小童</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴</td>
            <td>［盾版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴</td>
            <td>［剑版限定］ 14级进化</td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴雨雷曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴雨雷沙</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴雨雷雪</td>
            <td></td>
        </tr>
        <tr>
            <td>102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴雨雷雪雾</td>
            <td></td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>美纳斯湖南岸</td>
            <td>晴阴雪雹沙雾</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>美纳斯湖南岸</td>
            <td>晴雷</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>美纳斯湖南岸</td>
            <td>晴雷</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>美纳斯湖南岸</td>
            <td>晴雷曝沙</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>美纳斯湖南岸</td>
            <td>晴雾</td>
            <td></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>美纳斯湖南岸</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>美纳斯湖南岸</td>
            <td>曝</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>美纳斯湖南岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>美纳斯湖南岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/290.png"></td>
            <td>土居忍士</td>
            <td>美纳斯湖南岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>美纳斯湖南岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>美纳斯湖南岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>美纳斯湖南岸</td>
            <td>阴曝</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/535.png"></td>
            <td>圆蝌蚪</td>
            <td>美纳斯湖南岸</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>美纳斯湖南岸</td>
            <td>雨雷</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>美纳斯湖南岸</td>
            <td>雨雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>美纳斯湖南岸</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>美纳斯湖南岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>美纳斯湖南岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/771.png"></td>
            <td>拳海参</td>
            <td>美纳斯湖南岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>美纳斯湖南岸</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>美纳斯湖南岸</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>美纳斯湖南岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>美纳斯湖南岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>美纳斯湖南岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>美纳斯湖南岸</td>
            <td>雾</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>美纳斯湖南岸</td>
            <td>雾</td>
            <td>美丽度达到170以上提升等级 携带美丽鳞片连接交换</td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>道路（４）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/868.png"></td>
            <td>小仙奶</td>
            <td>道路（４）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>道路（４）</td>
            <td>所有天气</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>起橇雪原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>起橇雪原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>起橇雪原</td>
            <td>所有天气</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>起橇雪原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>起橇雪原</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>起橇雪原</td>
            <td>晴曝</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>261</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>起橇雪原</td>
            <td>晴曝</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/473.png"></td>
            <td>象牙猪</td>
            <td>起橇雪原</td>
            <td>晴阴曝雪雹</td>
            <td>学习原始之力进化</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>起橇雪原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>起橇雪原</td>
            <td>阴</td>
            <td>觉携带锐利之爪提升等级夜晚</td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>起橇雪原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>339</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>起橇雪原</td>
            <td>阴</td>
            <td>链接交换进化</td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>起橇雪原</td>
            <td>雪</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>起橇雪原</td>
            <td>雹</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>起橇雪原</td>
            <td>雹</td>
            <td>雪童子使用觉醒之石雌性</td>
        </tr>
        <tr>
            <td>240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>267</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>歌德小童</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>［剑版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>269</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>［剑版限定］ 41级进化</td>
        </tr>
        <tr>
            <td>270</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>［盾版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>272</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td>［盾版限定］ 41级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>起橇雪原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>冰点雪原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>冰点雪原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>冰点雪原</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>冰点雪原</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>冰点雪原</td>
            <td>晴曝</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>261</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>冰点雪原</td>
            <td>晴阴曝</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>冰点雪原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>冰点雪原</td>
            <td>阴</td>
            <td>觉携带锐利之爪提升等级夜晚</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>冰点雪原</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>冰点雪原</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>267</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>歌德小童</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>［剑版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>269</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>［剑版限定］ 41级进化</td>
        </tr>
        <tr>
            <td>270</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>［盾版限定］ 32级进化</td>
        </tr>
        <tr>
            <td>272</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td>［盾版限定］ 41级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>冰点雪原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>雪中溪谷</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>雪中溪谷</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>雪中溪谷</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>雪中溪谷</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>雪中溪谷</td>
            <td>晴曝</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>雪中溪谷</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>雪中溪谷</td>
            <td>阴</td>
            <td>觉携带锐利之爪提升等级夜晚</td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>雪中溪谷</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>339</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>雪中溪谷</td>
            <td>阴</td>
            <td>链接交换进化</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>雪中溪谷</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>雪中溪谷</td>
            <td>雪雹</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>雪中溪谷</td>
            <td>雪雹</td>
            <td>雪童子使用觉醒之石雌性</td>
        </tr>
        <tr>
            <td>367</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554-g.png"></td>
            <td>火红不倒翁-伽勒尔形态</td>
            <td>雪中溪谷</td>
            <td>雹</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>368</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555-g.png"></td>
            <td>达摩狒狒-伽勒尔形态</td>
            <td>雪中溪谷</td>
            <td>雹</td>
            <td>［剑版限定］ 冰之石进化</td>
        </tr>
        <tr>
            <td>239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>雪中溪谷</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>雪中溪谷</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>雪中溪谷</td>
            <td>雾</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>256</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>雪中溪谷</td>
            <td>雾</td>
            <td>月之石进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>雪中溪谷</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>359</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/713.png"></td>
            <td>冰岩怪</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>三岔平原</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>三岔平原</td>
            <td>晴曝</td>
            <td></td>
        </tr>
        <tr>
            <td>397</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/887.png"></td>
            <td>多龙巴鲁托</td>
            <td>三岔平原</td>
            <td>晴阴雨曝雪雹雾</td>
            <td>60级进化</td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>三岔平原</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>三岔平原</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>三岔平原</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>三岔平原</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>三岔平原</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>三岔平原</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>三岔平原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>三岔平原</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>三岔平原</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>牙牙湖西岸</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>牙牙湖西岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>牙牙湖西岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>牙牙湖西岸</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>牙牙湖西岸</td>
            <td>晴</td>
            <td></td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>牙牙湖西岸</td>
            <td>晴</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>牙牙湖西岸</td>
            <td>晴阴曝雪沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>牙牙湖西岸</td>
            <td>晴阴曝雪雹沙雾</td>
            <td>学会挑衅时提升等级</td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>牙牙湖西岸</td>
            <td>晴阴沙</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/535.png"></td>
            <td>圆蝌蚪</td>
            <td>牙牙湖西岸</td>
            <td>晴阴雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>牙牙湖西岸</td>
            <td>晴阴雨雷雾</td>
            <td></td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>牙牙湖西岸</td>
            <td>晴雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>牙牙湖西岸</td>
            <td>晴雨雷雾</td>
            <td></td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>牙牙湖西岸</td>
            <td>晴雾</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>牙牙湖西岸</td>
            <td>曝</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>牙牙湖西岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>牙牙湖西岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>牙牙湖西岸</td>
            <td>曝沙</td>
            <td></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>牙牙湖西岸</td>
            <td>曝雪雹沙</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>牙牙湖西岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/290.png"></td>
            <td>土居忍士</td>
            <td>牙牙湖西岸</td>
            <td>沙</td>
            <td></td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>牙牙湖西岸</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>牙牙湖西岸</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>牙牙湖西岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>牙牙湖西岸</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>牙牙湖西岸</td>
            <td>阴曝</td>
            <td></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>牙牙湖西岸</td>
            <td>阴雨雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>牙牙湖西岸</td>
            <td>阴雪雹沙雾</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>牙牙湖西岸</td>
            <td>雪</td>
            <td></td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>牙牙湖西岸</td>
            <td>雪雹</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>牙牙湖西岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>牙牙湖西岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>牙牙湖西岸</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>牙牙湖西岸</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>牙牙湖西岸</td>
            <td>雹</td>
            <td></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>牙牙湖西岸</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618-g.png"></td>
            <td>泥巴鱼-伽勒尔形态</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>234</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/688.png"></td>
            <td>龟脚脚</td>
            <td>第二矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>道路（２・４・５）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>水舟镇</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>水舟镇</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>水舟镇</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>水舟镇</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>水舟镇</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>机擎市</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td>水之石进化</td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>斗志洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>斗志洞窟</td>
            <td>晴雨雷曝沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>道路（６）</td>
            <td>所有天气</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>道路（６）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>清凉湿原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>清凉湿原</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>清凉湿原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>清凉湿原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>清凉湿原</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>清凉湿原</td>
            <td>晴阴曝沙</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>清凉湿原</td>
            <td>晴阴雨沙</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>清凉湿原</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>清凉湿原</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>清凉湿原</td>
            <td>阴雨</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>清凉湿原</td>
            <td>雨雷</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>清凉湿原</td>
            <td>雷</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>清凉湿原</td>
            <td>雷</td>
            <td>雷之石进化</td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>猫头目</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/678.png"></td>
            <td>超能妙喵</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>７号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>道路（２・４）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>道路（５）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>道路（５）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>道路（５）</td>
            <td>所有天气</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>182</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/052-g.png"></td>
            <td>喵喵-伽勒尔形态</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/710.png"></td>
            <td>南瓜精</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>４号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>大部分地区／水域（泛指）</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/225.png"></td>
            <td>信使鸟</td>
            <td>大部分地区／水域（泛指）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>大部分地区／水域（泛指）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>大部分地区／水域（泛指）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>062</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/278.png"></td>
            <td>长翅鸥</td>
            <td>大部分地区／水域（泛指）</td>
            <td>—</td>
            <td></td>
        </tr>
        <tr>
            <td>063</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/279.png"></td>
            <td>大嘴鸥</td>
            <td>大部分地区／水域（泛指）</td>
            <td>—</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/129.png"></td>
            <td>鲤鱼王</td>
            <td>大部分地区／水域（泛指）</td>
            <td>—</td>
            <td></td>
        </tr>
        <tr>
            <td>145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>大部分地区／水域（泛指）</td>
            <td>—</td>
            <td>20级进化</td>
        </tr>
        <tr>
            <td>228</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/339.png"></td>
            <td>泥泥鳅</td>
            <td>大部分地区／水域（泛指）</td>
            <td>—</td>
            <td></td>
        </tr>
        <tr>
            <td>072</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/582.png"></td>
            <td>迷你冰</td>
            <td>大部分地区／水域（泛指）</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>远古墓地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>335</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/854.png"></td>
            <td>来悲茶</td>
            <td>远古墓地</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>远古墓地</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>396</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/886.png"></td>
            <td>多龙奇</td>
            <td>远古墓地</td>
            <td>所有天气</td>
            <td>50级进化</td>
        </tr>
        <tr>
            <td>397</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/887.png"></td>
            <td>多龙巴鲁托</td>
            <td>远古墓地</td>
            <td>晴阴雨雷曝雪</td>
            <td>60级进化</td>
        </tr>
        <tr>
            <td>336</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/855.png"></td>
            <td>怖思壶</td>
            <td>远古墓地</td>
            <td>晴雨雷曝雹雾</td>
            <td>使用破裂/缺损的茶壶进化</td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>远古墓地</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>远古墓地</td>
            <td>曝</td>
            <td></td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>远古墓地</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>339</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>远古墓地</td>
            <td>阴</td>
            <td>链接交换进化</td>
        </tr>
        <tr>
            <td>288</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>远古墓地</td>
            <td>阴雾</td>
            <td>41级进化</td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>远古墓地</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>远古墓地</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>远古墓地</td>
            <td>雪雹</td>
            <td>雪童子使用觉醒之石雌性</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>远古墓地</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>远古墓地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>远古墓地</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>远古墓地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>333</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077-g.png"></td>
            <td>小火马-伽勒尔形态</td>
            <td>远古墓地</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>334</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/078-g.png"></td>
            <td>烈焰马</td>
            <td>远古墓地</td>
            <td>雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>302</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/878.png"></td>
            <td>铜象</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>巨人鞋底</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>巨人鞋底</td>
            <td>晴</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>巨人鞋底</td>
            <td>晴</td>
            <td>链接交换进化</td>
        </tr>
        <tr>
            <td>159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>巨人鞋底</td>
            <td>晴曝</td>
            <td></td>
        </tr>
        <tr>
            <td>160</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/851.png"></td>
            <td>焚焰蚣</td>
            <td>巨人鞋底</td>
            <td>晴曝</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>巨人鞋底</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>巨人鞋底</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>巨人鞋底</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>巨人鞋底</td>
            <td>雷</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>巨人鞋底</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>巨人鞋底</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>巨人鞋底</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>巨人鞋底</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/600.png"></td>
            <td>齿轮组</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>280</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冰原熊</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>365</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122-g.png"></td>
            <td>魔枪人偶-伽勒尔形态</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>学会模仿时提升等级</td>
        </tr>
        <tr>
            <td>367</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554-g.png"></td>
            <td>火红不倒翁-伽勒尔形态</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>１０号道路</td>
            <td>所有天气</td>
            <td>［盾版限定］ 【MOD】明雷10%（替换雪吞虫）、暗雷20%（替换喷嚏熊）</td>
        </tr>
        <tr>
            <td>073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/225.png"></td>
            <td>信使鸟</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>367</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554-g.png"></td>
            <td>火红不倒翁-伽勒尔形态</td>
            <td>泉烟小路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>白丘车站</td>
            <td>所有天气</td>
            <td>47级进化</td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>298</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/447.png"></td>
            <td>利欧路</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>299</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td>亲密度*220以上或友好度*158以上提升等级白天</td>
        </tr>
        <tr>
            <td>383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>385</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班吉拉斯</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td>［盾版限定］ 55级进化</td>
        </tr>
        <tr>
            <td>386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/633.png"></td>
            <td>单首龙</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>388</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/635.png"></td>
            <td>三首恶龙</td>
            <td>海鸣洞窟</td>
            <td>所有天气</td>
            <td>64级进化</td>
        </tr>
        <tr>
            <td>079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>登顶隧道</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>登顶隧道</td>
            <td>所有天气</td>
            <td>雪童子使用觉醒之石雌性</td>
        </tr>
        <tr>
            <td>255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>登顶隧道</td>
            <td>所有天气</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>256</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>登顶隧道</td>
            <td>所有天气</td>
            <td>月之石进化</td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td>28级进化</td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>９号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>33级进化</td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>链接交换</td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>313</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>315</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/450.png"></td>
            <td>河马兽</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>345</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/870.png"></td>
            <td>列阵兵</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>348</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/777.png"></td>
            <td>托戈德玛尔</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/337.png"></td>
            <td>月石</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>363</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/338.png"></td>
            <td>太阳岩</td>
            <td>８号道路</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>道路（８）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/356.png"></td>
            <td>彷徨夜灵</td>
            <td>道路（８）</td>
            <td>所有天气</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>草路镇</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>342</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>343</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/766.png"></td>
            <td>投掷猴</td>
            <td>专注森林</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>专注森林</td>
            <td>晴阴曝沙</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>专注森林</td>
            <td>晴阴雨雷</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>274</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>专注森林</td>
            <td>沙</td>
            <td>与小嘴蜗连接交换进化</td>
        </tr>
        <tr>
            <td>312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>专注森林</td>
            <td>沙</td>
            <td>东第３区 西第２区 烘烘沙漠</td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>专注森林</td>
            <td>阴</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>专注森林</td>
            <td>阴</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>专注森林</td>
            <td>阴雨雷</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>276</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>专注森林</td>
            <td>雨</td>
            <td>与盖盖虫连接交换进化</td>
        </tr>
        <tr>
            <td>389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>专注森林</td>
            <td>雨雷</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>专注森林</td>
            <td>雨雷雾</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>193</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/172.png"></td>
            <td>皮丘</td>
            <td>专注森林</td>
            <td>雷</td>
            <td>生蛋</td>
        </tr>
        <tr>
            <td>195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>专注森林</td>
            <td>雷</td>
            <td>雷之石进化</td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>专注森林</td>
            <td>雾</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>蜂巢海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>蜂巢海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>蜂巢海</td>
            <td>晴沙</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>蜂巢海</td>
            <td>阴雾</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>蜂巢海</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>蜂巢海</td>
            <td>雷</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>蜂巢海</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>道路（４・５・６）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>235</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/689.png"></td>
            <td>龟足巨铠</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>39级进化</td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>学会挑衅时提升等级</td>
        </tr>
        <tr>
            <td>353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td>355</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/226.png"></td>
            <td>巨翅飞鱼</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>铁炮鱼同行时提升等级</td>
        </tr>
        <tr>
            <td>356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>357</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/321.png"></td>
            <td>吼鲸王</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>战竞湾</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>冻海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>冻海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>359</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/713.png"></td>
            <td>冰岩怪</td>
            <td>冻海</td>
            <td>所有天气</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>冻海</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>冻海</td>
            <td>所有天气</td>
            <td>携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td>358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>冻海</td>
            <td>晴阴雨雷雪雹雾</td>
            <td></td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>冻海</td>
            <td>阴</td>
            <td></td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>冻海</td>
            <td>雨雷</td>
            <td></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>冻海</td>
            <td>雨雷</td>
            <td>22级进化</td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>冻海</td>
            <td>雪雹</td>
            <td></td>
        </tr>
        <tr>
            <td>353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>冻海</td>
            <td>雷</td>
            <td></td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>冻海</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>冻海</td>
            <td>雾</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>冻海</td>
            <td>雾</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>冻海</td>
            <td>雾</td>
            <td></td>
        </tr>
        <tr>
            <td>156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/771.png"></td>
            <td>拳海参</td>
            <td>道路（９）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>道路（９）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>机擎竞技场</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>171</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/532.png"></td>
            <td>搬运小匠</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>伽勒尔矿山</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td>18级进化</td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨碳山</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td>48级进化</td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>294</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>295</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>湖畔洞窟</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td>26级进化</td>
        </tr>
        <tr>
            <td>285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>314</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/449.png"></td>
            <td>沙河马</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>318</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/694.png"></td>
            <td>伞电蜥</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>320</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/701.png"></td>
            <td>摔角鹰人</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>321</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/328.png"></td>
            <td>大颚蚁</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>324</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/610.png"></td>
            <td>牙牙</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>327</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/562-g.png"></td>
            <td>哭哭面具</td>
            <td>６号道路</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>374</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/880.png"></td>
            <td>雷鸟龙</td>
            <td>６号道路</td>
            <td>—</td>
            <td>组合化石</td>
        </tr>
        <tr>
            <td>375</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/881.png"></td>
            <td>雷鸟海兽</td>
            <td>６号道路</td>
            <td>—</td>
            <td>组合化石</td>
        </tr>
        <tr>
            <td>376</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/882.png"></td>
            <td>鳃鱼龙</td>
            <td>６号道路</td>
            <td>—</td>
            <td>组合化石</td>
        </tr>
        <tr>
            <td>377</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/883.png"></td>
            <td>鳃鱼海兽</td>
            <td>６号道路</td>
            <td>—</td>
            <td>组合化石</td>
        </tr>
        <tr>
            <td>169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/525.png"></td>
            <td>地幔岩</td>
            <td>战斗洞窟</td>
            <td>所有天气</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>战斗洞窟</td>
            <td>所有天气</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>战斗洞窟</td>
            <td>所有天气</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>野生原野区F区</td>
            <td>所有天气</td>
            <td>携带金属膜连接交换</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>梦世界冰洞</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>浅滩洞穴</td>
            <td>所有天气</td>
            <td>27级进化</td>
        </tr>
        <tr>
            <td>238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td>32 级进化</td>
        </tr>
        <tr>
            <td>333</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077-g.png"></td>
            <td>小火马-伽勒尔形态</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td>【MOD】明雷/暗雷10%（替换绵绵泡芙）</td>
        </tr>
        <tr>
            <td>335</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/854.png"></td>
            <td>来悲茶</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>337</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>341</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/756.png"></td>
            <td>灯罩夜菇</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td>24级进化</td>
        </tr>
        <tr>
            <td>342</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>343</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/766.png"></td>
            <td>投掷猴</td>
            <td>迷光森林</td>
            <td>所有天气</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>锅底沙漠</td>
            <td>晴曝沙</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>266</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/464.png"></td>
            <td>超甲狂犀</td>
            <td>锅底沙漠</td>
            <td>晴曝沙雾</td>
            <td>携带护具连接交换</td>
        </tr>
        <tr>
            <td>313</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>锅底沙漠</td>
            <td>晴曝雾</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>锅底沙漠</td>
            <td>晴阴雨曝沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>锅底沙漠</td>
            <td>晴阴雨曝沙雾</td>
            <td>［剑版限定］</td>
        </tr>
        <tr>
            <td>282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>锅底沙漠</td>
            <td>晴阴雨曝沙雾</td>
            <td>［剑版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>锅底沙漠</td>
            <td>晴阴雨曝沙雾</td>
            <td>［盾版限定］</td>
        </tr>
        <tr>
            <td>284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>锅底沙漠</td>
            <td>晴阴雨曝沙雾</td>
            <td>［盾版限定］ 54级进化</td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>锅底沙漠</td>
            <td>晴阴雨曝沙雾</td>
            <td></td>
        </tr>
        <tr>
            <td>312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>锅底沙漠</td>
            <td>沙</td>
            <td>东第３区 西第２区 烘烘沙漠</td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>热身洞穴</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>通顶雪道</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>350</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/873.png"></td>
            <td>雪绒蛾</td>
            <td>通顶雪道</td>
            <td>所有天气</td>
            <td>友好度158以上提升等级夜晚</td>
        </tr>
        <tr>
            <td>371</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/884.png"></td>
            <td>铝钢龙</td>
            <td>道路（１０）</td>
            <td>所有天气</td>
            <td></td>
        </tr>
        <tr>
            <td>378</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/004.png"></td>
            <td>小火龙</td>
            <td>化朗镇</td>
            <td>—</td>
            <td>赫普的家中 二周目</td>
        </tr>
        <tr>
            <td>381</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/772.png"></td>
            <td>属性空</td>
            <td>对战塔</td>
            <td>—</td>
            <td>赠送</td>
        </tr>
        <tr>
            <td>002</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/811.png"></td>
            <td>啪咚猴</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/812.png"></td>
            <td>轰擂金刚猩</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>005</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/814.png"></td>
            <td>腾蹴小将</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/815.png"></td>
            <td>闪焰王牌</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>008</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/817.png"></td>
            <td>变涩蜥</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/818.png"></td>
            <td>千面避役</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>106</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/292.png"></td>
            <td>脱壳忍者</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>包包中有精灵球*；且同行宝可梦中有空位</td>
        </tr>
        <tr>
            <td>129</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/421.png"></td>
            <td>樱花儿</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td>184</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/053.png"></td>
            <td>猫老大</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>无野外遭遇；通过宝可梦HOME传入关都形态喵喵；28级进化</td>
        </tr>
        <tr>
            <td>186</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/869.png"></td>
            <td>霜奶仙</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>主角结束原地旋转携带糖饰</td>
        </tr>
        <tr>
            <td>211</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/685.png"></td>
            <td>胖甜妮</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>携带泡沫奶油连接交换</td>
        </tr>
        <tr>
            <td>213</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/683.png"></td>
            <td>芳香精</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>携带香袋连接交换</td>
        </tr>
        <tr>
            <td>216</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/360.png"></td>
            <td>小果然</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>果然翁携带悠闲薰香生蛋</td>
        </tr>
        <tr>
            <td>219</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/865.png"></td>
            <td>葱游兵</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>对战中击中要害3次或以上结束对战</td>
        </tr>
        <tr>
            <td>237</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/864.png"></td>
            <td>魔灵珊瑚</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>254</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/173.png"></td>
            <td>皮宝宝</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>生蛋</td>
        </tr>
        <tr>
            <td>311</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/849.png"></td>
            <td>颤弦蝾螈</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td>319</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/695.png"></td>
            <td>光电伞蜥</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>光之石进化</td>
        </tr>
        <tr>
            <td>322</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/329.png"></td>
            <td>超音波幼虫</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>325</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/611.png"></td>
            <td>斧牙龙</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td>329</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/563.png"></td>
            <td>迭失棺</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td>366</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/866.png"></td>
            <td>踏冰人偶</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td>379</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/005.png"></td>
            <td>火恐龙</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>380</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/006.png"></td>
            <td>喷火龙</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>382</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/773.png"></td>
            <td>银伴战兽</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>391</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/706.png"></td>
            <td>黏美龙</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>50级进化</td>
        </tr>
        <tr>
            <td>398</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/888.png"></td>
            <td>苍响</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>剧情</td>
        </tr>
        <tr>
            <td>400</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/890.png"></td>
            <td>无极汰那</td>
            <td>（进化·剧情·特殊获取，无固定地点）</td>
            <td>—</td>
            <td>剧情</td>
        </tr>
    </tbody>
</table>

<script>
let currentWayFilter = "";
let currentNumFilter = "";

function applyFilters() {
    const rows = document.querySelectorAll("#pokeTable tr");

    const numKeywords = currentNumFilter
        ? currentNumFilter.split(/[,，/|;；]+/)
        : [];

    rows.forEach(row => {
        const num = row.cells[0].innerText;
        const way = row.cells[3].innerText;

        // 方式筛选
        const wayMatch =
            currentWayFilter === "" ||
            way.includes(currentWayFilter);

        // 编号筛选
        const numMatch =
            currentNumFilter === "" ||
            numKeywords.some(k => num.includes(k));

        // 两个条件同时满足
        row.style.display = wayMatch && numMatch ? "" : "none";
    });
}

function filter(keyword) {
    currentWayFilter = keyword;
    applyFilters();
}

function real_numfilter() {
    currentNumFilter =
        document.getElementById("numfilter").value.trim();
    applyFilters();
}
function resetFilters() {
    currentWayFilter = "";
    currentNumFilter = "";

    // 清空输入框
    document.getElementById("numfilter").value = "";

    // 显示全部
    applyFilters();
}
</script>
