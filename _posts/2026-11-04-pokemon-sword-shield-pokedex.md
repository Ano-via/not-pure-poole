---
layout: post
title: 口袋妖怪剑盾Crowned Sword & Armored Shield版400+211+210宝可梦图鉴（也支持exclusives_killer_mod和免通讯进化MOD）
tags: [宠物小精灵, 口袋妖怪, 神奇宝贝, 宝可梦, 剑盾]
date: 2026-11-04 10:16 +0800
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

    .mod1,
    .mod2 {
    display: none;
    }
</style>


<div>
<input id="numfilter" placeholder="123,456,789" />
<button onclick="real_numfilter()">筛选特定编号（本体）</button>
<button onclick="resetFilters()">重置筛选</button>
</div>

<div>
<input id="numfilter1" placeholder="123,456,789" />
<button onclick="real_numfilter1()">筛选特定编号（铠岛）</button>
<button onclick="resetFilters1()">重置筛选</button>
</div>

<div>
<input id="numfilter2" placeholder="123,456,789" />
<button onclick="real_numfilter2()">筛选特定编号（冠之雪原）</button>
<button onclick="resetFilters2()">重置筛选</button>
</div>

<div>
<label>
    <input type="checkbox" onchange="toggleMod(this, 'mod1')">
    exclusives_killer_mod
</label>

<label>
    <input type="checkbox" onchange="toggleMod(this, 'mod2')">
    免通讯进化MOD
</label>

<label>
    <input type="checkbox" onchange="toggleMod(this, 'mod3')">
    Crowned Sword & Armored Shield
</label>
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
            <th>捕获方式</th>
        </tr>
    </thead>
    <tbody id="pokeTable">
        <tr>
            <td>001</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/810.png"></td>
            <td>敲音猴</td>
            <td>初始御三家<br><span class="mod1">沐光森林（晴）·草丛随机遇敌 新增5%（替换甜竹竹）；沐光森林（曝）·草丛随机遇敌 新增20%（替换掘掘兔）；沐光森林（晴）·地图可见 新增5%（替换长鼻叶）</span><br><span class="mod3">本体：沐光森林·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>002</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/811.png"></td>
            <td>啪咚猴</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/812.png"></td>
            <td>轰擂金刚猩</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>004</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/813.png"></td>
            <td>炎兔儿</td>
            <td>初始御三家<br><span class="mod1">3号道路·草丛随机遇敌 新增9%（替换齿轮儿）；3号道路·地图可见 新增2%（替换无畏小子）</span><br><span class="mod3">本体：煦丽草原·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>005</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/814.png"></td>
            <td>腾蹴小将</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/815.png"></td>
            <td>闪焰王牌</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>007</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/816.png"></td>
            <td>泪眼蜥</td>
            <td>初始御三家<br><span class="mod1">2号道路·草丛随机遇敌 新增5%（替换咕咕）；2号道路·地图可见 新增2%（替换蛇纹熊（伽勒尔））</span><br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>008</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/817.png"></td>
            <td>变涩蜥</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/818.png"></td>
            <td>千面避役</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>道路（1・2），微寐森林所有天气，道路（2），微寐森林所有天气，巨人帽岩晴，揖礼原野，挑战之路，挑战海滩，圆环海湾，锻炼平原，健身之海，列岛海域，离岛海域，蜂巢岛所有天气，锻炼平原。<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%；铠岛：圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>５号道路所有天气，巨人帽岩晴阴雨雷雪雹沙雾，巨人镜池晴阴雨沙，巨石原野雾，巨人帽岩所有天气，10级进化<br><span class="mod1">巨人镜池（晴）·草丛随机遇敌 移除20%（被太阳珊瑚（伽勒尔）替换）；巨人镜池（阴）·草丛随机遇敌 出现率10%→14%</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 5%；铠岛：专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>微寐森林所有天气，逆鳞湖晴，微寐森林所有天气，巨人帽岩所有天气，沐光森林所有天气。35级进化<br><span class="mod3">本体：沐光森林·定点[超极巨] Lv15、逆鳞湖·定点[超极巨] Lv51、微寐森林·草丛 Lv57–60 15%；铠岛：专注森林·定点[超极巨] Lv17、蜂巢岛·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>013</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/010.png"></td>
            <td>绿毛虫</td>
            <td>１号道路所有天气<br><span class="mod3">本体：1号道路·草丛 Lv2–5 10%、煦丽草原·树果树 Lv7–10 20%</span></td>
        </tr>
        <tr>
            <td>014</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/011.png"></td>
            <td>铁甲蛹</td>
            <td>煦丽草原所有天气，7级进化<br><span class="mod3">本体：沐光森林·草丛 Lv7–10 5%、沐光森林·树果树 Lv7–10 10%、瞭望塔旧址·树果树 Lv7–10 20%</span></td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝶</td>
            <td>微寐森林所有天气，煦丽草原，牙牙湖东岸所有天气，巨人镜池阴，10级进化<br><span class="mod1">巨人镜池（阴）·地图可见 出现率40%→35%</span><br><span class="mod3">本体：煦丽草原·空中 Lv7–10 10%、瞭望塔旧址·树果树 Lv7–10 10%、4号道路·树果树 Lv17–20 10%、9号道路（尖钉镇郊外）·树果树 Lv40–43 40%、牙牙湖之眼·树果树 Lv43–46 20%、逆鳞湖·定点[超极巨] Lv51</span></td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>道路（1），微寐森林所有天气，沐光森林雨雷，美纳斯湖北岸雨雷，瞭望塔旧址雷，牙牙湖东岸雨，微寐森林所有天气，牙牙湖东岸雨。<br><span class="mod3">本体：1号道路·草丛 Lv2–5 10%</span></td>
        </tr>
        <tr>
            <td>017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/737.png"></td>
            <td>虫电宝</td>
            <td>牙牙湖之眼雨，沙尘洼地雷，拳关丘陵雷，20级进化<br><span class="mod3">本体：煦丽草原·定点 Lv15、美纳斯湖北岸·草丛 Lv7–10 10%</span></td>
        </tr>
        <tr>
            <td>018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/738.png"></td>
            <td>锹农炮虫</td>
            <td>巨人凳岩晴阴曝沙，雷之石进化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>道路（1・2），微寐森林所有天气，巨人帽岩晴阴雨雷雪曝沙雾，沐光森林晴阴雪沙雾<br><span class="mod1">2号道路·草丛随机遇敌 移除5%（被泪眼蜥替换）</span><br><span class="mod3">本体：1号道路·草丛 Lv2–5 5%、瞭望塔旧址·树果树 Lv7–10 40%、瞭望塔旧址·空中 Lv7–10 10%、桥间空地·树果树 Lv27–30 20%、巨人镜池·树果树 Lv27–30 20%</span></td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>机擎河岸晴阴曝雪沙雾，机擎市郊外所有天气，巨人帽岩晴阴雨雷曝雪沙雾，桥间空地雪，20级进化<br><span class="mod1">机擎市郊外·地图可见 出现率40%→30%；巨人帽岩（雾）·地图可见 移除10%（被单卵细胞球替换）</span><br><span class="mod3">本体：瞭望塔旧址·树果树 Lv7–10 10%、桥间空地·树果树 Lv27–30 10%、桥间空地·空中 Lv27–30 30%、桥间空地·定点 Lv35、巨人镜池·树果树 Lv27–30 10%、9号道路（战竞湾）·树果树 Lv40–43 20%</span></td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>道路（2・3），微寐森林所有天气，道路（1・2），微寐森林所有天气，机擎河岸阴，肝帝威的游戏笔记<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·空中 Lv7–10 30%、牙牙湖东岸·空中 Lv7–10 30%、美纳斯湖南岸·空中 Lv7–10 30%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>机擎河岸所有天气，拳关丘陵晴，巨人镜池，拳关丘陵所有天气，道路（3）所有天气，球湖湖畔晴雪，18级进化<br><span class="mod3">本体：牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、3号道路·定点 Lv23、拳关丘陵·空中 Lv27–30 30%</span></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>道路（7），微寐森林，逆鳞湖所有天气，沙尘洼地雪，微寐森林所有天气，巨人帽岩，拳关丘陵，瞭望塔旧址，美纳斯湖北岸所有天气，机擎河岸雨雷曝雪雹沙，球湖湖畔晴雪雹，38级进化<br><span class="mod3">本体：瞭望塔旧址·定点[超极巨] Lv15、拳关丘陵·空中 Lv27–30 10%、拳关丘陵·定点[超极巨] Lv35</span></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>道路（1），微寐森林所有天气,道路（1・2），微寐森林所有天气,列岛海域所有天气,球湖湖畔晴阴雨雷曝雪雾,列岛海域，球湖湖畔所有天气.摇晃树木<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·树果树 Lv7–10 40%、美纳斯湖北岸·树果树 Lv7–10 20%、巨人凳岩·树果树 Lv7–10 40%、3号道路·树果树 Lv15–18 40%、桥间空地·树果树 Lv27–30 40%、巨人帽岩·树果树 Lv27–30 20%；铠岛：揖礼原野·树果树 Lv9–12 40%、清凉湿原·树果树 Lv9–12 40%、挑战海滩·树果树 Lv9–12 40%；冠之雪原：起橇雪原·树果树 Lv11–14 20%、冰点雪原·树果树 Lv11–14 20%、巨人睡榻·树果树 Lv11–14 40%、巨人鞋底·树果树 Lv11–14 40%</span></td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>桥间空地所有天气，球湖湖畔，巨树丘陵所有天气，巨人睡榻晴阴雨雷雪雹雾，摇晃树木，24级进化<br><span class="mod3">本体：桥间空地·树果树 Lv27–30 10%、桥间空地·定点 Lv35、巨人帽岩·树果树 Lv27–30 10%、6号道路·树果树 Lv29–32 40%、7号道路·树果树 Lv36–39 40%、9号道路（战竞湾）·树果树 Lv40–43 20%、逆鳞湖·树果树 Lv43–46 40%；铠岛：揖礼原野·树果树 Lv9–12 10%、挑战海滩·树果树 Lv9–12 10%、健身之海·树果树 Lv45–48 40%；冠之雪原：巨人睡榻·树果树 Lv11–14 10%、巨人睡榻·定点 Lv19、球湖湖畔·树果树 Lv47–50 10%、球湖湖畔·定点 Lv55、巨树丘陵·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>牙牙湖东岸晴，瞭望塔旧址晴雨雷沙雾，美纳斯湖北岸晴，煦丽草原，牙牙湖东岸所有天气<br><span class="mod3">本体：1号道路·草丛 Lv2–5 5%、煦丽草原·空中 Lv7–10 30%、牙牙湖东岸·空中 Lv7–10 20%</span></td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>巨人凳岩晴，桥间空地，巨石原野，巨人镜池所有天气，21级进化<br><span class="mod1">巨人镜池（晴）·地图可见 移除10%（被太阳珊瑚（伽勒尔）替换）；巨人镜池（阴）·地图可见 移除35%（被太阳珊瑚（伽勒尔）替换）</span><br><span class="mod3">本体：桥间空地·空中 Lv27–30 30%、拳关丘陵·空中 Lv27–30 30%</span></td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>牙牙湖之眼晴阴雨雷曝雪雾，拳关丘陵所有天气，巨石原野阴，巨人镜池晴阴曝，32级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、拳关丘陵·空中 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>狡小狐</td>
            <td>道路（1・2）所有天气，巨人镜池晴阴雨雷曝，沙尘洼地晴阴雨雷曝，巨石原野雾<br><span class="mod1">2号道路·地图可见 移除15%（被莲叶童子替换）；巨人镜池（晴）·地图可见 移除4%</span><br><span class="mod3">本体：2号道路·草丛 Lv4–7 15%、瞭望塔旧址·草丛 Lv7–10 10%</span></td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>尖钉镇郊外所有天气，桥间空地晴阴曝雪雾，巨石原野雾，拳关丘陵阴，道路（7）所有天气，美纳斯湖南岸所有天气，18级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 15%、美纳斯湖南岸·定点 Lv15、7号道路·草丛 Lv36–39 15%</span></td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊（伽勒尔的样子）</td>
            <td>道路（2・3），桥间空地所有天气，巨石原野晴阴雨曝雪雹沙雾，巨人帽岩晴阴雨雷曝雪沙雾。普通形态铠岛交换<br><span class="mod1">2号道路·地图可见 移除2%（被泪眼蜥替换）；巨石原野（晴）·地图可见 移除35%（被秃鹰丫头替换）；巨石原野（曝）·地图可见 移除30%（被秃鹰丫头替换）；巨石原野（沙）·地图可见 移除30%（被秃鹰丫头替换）</span><br><span class="mod3">本体：2号道路·草丛[伽勒尔] Lv4–7 15%、瞭望塔旧址·草丛[伽勒尔] Lv7–10 10%、桥间空地·草丛[伽勒尔] Lv27–30 15%、桥间空地·草丛 Lv27–30 5%；冠之雪原：冰点雪原·草丛 Lv11–14 10%、巨人睡榻·草丛[伽勒尔] Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264-g.png"></td>
            <td>直冲熊（伽勒尔的样子）</td>
            <td>巨人睡榻阴，球湖湖畔阴，20级进化<br><span class="mod1">巨人帽岩（晴）·地图可见 移除35%（被单卵细胞球替换）</span><br><span class="mod3">本体：2号道路（湖畔）·草丛[伽勒尔] Lv43–46 15%、桥间空地·定点 Lv35、桥间空地·定点[伽勒尔] Lv35、9号道路（尖钉镇郊外）·草丛[伽勒尔] Lv40–43 10%；冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点[伽勒尔] Lv19</span></td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>逆鳞湖晴沙，道路（2），桥间空地所有天气，巨人睡榻阴雨，球湖湖畔阴，35级晚上进化<br><span class="mod3">本体：2号道路（湖畔）·定点 Lv51、桥间空地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>道路（4）所有天气，道路（1）所有天气机擎河岸晴雪，起橇雪原，冰点雪原，巨人睡榻，雪中溪谷，三岔平原晴曝<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·草丛 Lv7–10 15%；冠之雪原：冰点雪原·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>机擎河岸晴阴，沙尘洼地晴，拳关丘陵晴，煦丽草原所有天气，起橇雪原晴曝，冰点雪原晴曝，巨人睡榻晴，雪中溪谷晴曝，24级进化<br><span class="mod1">沙尘洼地（晴）·草丛随机遇敌 移除30%（被勾魂眼替换）</span><br><span class="mod3">本体：煦丽草原·定点 Lv15；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>盾限定。２号道路所有天气，煦丽草原雨，沐光森林晴阴雨雷雾，牙牙湖西岸阴<br><span class="mod1">2号道路·草丛随机遇敌 新增10%（替换扒手猫）；2号道路·地图可见 新增15%（替换狡小狐）</span><br><span class="mod3">本体：2号道路·草丛 Lv4–7 10%、沐光森林·草丛 Lv7–10 10%、美纳斯湖南岸·草丛 Lv7–10 5%、5号道路·钓鱼 Lv20–23 15%</span></td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲帽小童</td>
            <td>盾限定。５号道路所有天气，巨人凳岩雨，巨人帽岩晴，沐光森林所有天气，美纳斯湖南岸晴阴，巨人凳岩晴雨，14级进化<br><span class="mod3">本体：沐光森林·定点 Lv15、牙牙湖西岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、机擎河岸·草丛 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/272.png"></td>
            <td>乐天河童</td>
            <td>盾限定。沐光森林晴阴雨雷雾，水之石进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 5%、机擎河岸·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>剑限定。２号道路所有天气，煦丽草原雨，沐光森林晴阴雨雷雾，牙牙湖西岸阴<br><span class="mod3">本体：2号道路·草丛 Lv4–7 10%、沐光森林·草丛 Lv7–10 10%、沐光森林·树果树 Lv7–10 10%、美纳斯湖北岸·草丛 Lv7–10 5%、美纳斯湖北岸·树果树 Lv7–10 20%</span></td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>剑限定。５号道路所有天气，巨人凳岩雨，煦丽草原雨，巨人帽岩晴，沐光森林所有天气，美纳斯湖南岸晴阴，巨人凳岩晴雨，14级进化<br><span class="mod1">沐光森林（晴）·地图可见 移除5%（被敲音猴替换）；巨人帽岩（晴）·草丛随机遇敌 移除40%（被单卵细胞球替换）</span><br><span class="mod3">本体：沐光森林·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、机擎河岸·草丛 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>041</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/275.png"></td>
            <td>狡猾天狗</td>
            <td>剑限定。沐光森林晴阴雨雷雾，叶之石进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 5%、机擎河岸·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>道路（2），机擎市郊外，第二矿山所有天气，道路（2），第二矿山，巨人帽岩所有天气，机擎河岸雨，巨人镜池雨，道路（2・4・5），水舟镇，机擎市，第二矿山所有天气，道路（2）所有天气，斗志洞窟所有天气<br><span class="mod1">机擎市郊外·草丛随机遇敌 移除10%（被不良蛙替换）</span><br><span class="mod3">本体：2号道路·草丛 Lv4–7 15%、2号道路·钓鱼 Lv4–7 25%、牙牙湖西岸·草丛 Lv7–10 15%、牙牙湖东岸·草丛 Lv7–10 15%、美纳斯湖北岸·草丛 Lv7–10 15%、美纳斯湖南岸·草丛 Lv7–10 15%、水舟镇·钓鱼 Lv21–24 5%、第二矿山·草丛 Lv23–26 15%；铠岛：清凉湿原·水洼 Lv9–12 30%</span></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>逆鳞湖雷，沙尘洼地雷，巨人帽岩雨雷，道路（6），桥间空地，巨人镜池所有天气，第二矿山，巨人帽岩，道路（2），牙牙湖西岸所有天气，斗志洞窟所有天气，揖礼原野晴，清凉湿原晴阴曝沙，挑战海滩晴阴雷曝沙，圆环海湾晴曝沙，22级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 15%、2号道路（湖畔）·钓鱼 Lv43–46 5%、2号道路（湖畔）·定点[超极巨] Lv51、牙牙湖西岸·定点[超极巨] Lv15、第二矿山·定点[超极巨] Lv31、9号道路（战竞湾）·草丛 Lv40–43 15%；铠岛：揖礼原野·定点[超极巨] Lv17、清凉湿原·定点[超极巨] Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>２号道路所有天气，沐光森林雾，瞭望塔旧址雾，牙牙湖东岸雾，机擎河岸所有天气，沐光森林雾，牙牙湖西岸晴阴曝雪沙雾，瞭望塔旧址雨雷雹沙雾，美纳斯湖北岸阴雨雷雪雹雾，沐光森林雾，瞭望塔旧址雾，牙牙湖东岸雾<br><span class="mod1">2号道路·草丛随机遇敌 移除10%（被莲叶童子替换）</span><br><span class="mod3">本体：2号道路·草丛 Lv4–7 5%、瞭望塔旧址·草丛 Lv7–10 5%</span></td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>７号道路、尖钉镇郊外所有天气，牙牙湖之眼雾，巨人凳岩雾，桥间空地晴，７号道路所有天气，巨人帽岩晴，美纳斯湖北岸所有天气，20级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 15%、7号道路·草丛 Lv36–39 15%</span></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>道路（2・4）所有天气，机擎河岸雷，巨石原野雷，巨人镜池雷，道路（2）所有天气，球湖湖畔晴阴雨雷曝雪雾<br><span class="mod3">本体：2号道路·草丛 Lv4–7 15%、美纳斯湖北岸·草丛 Lv7–10 10%、4号道路·草丛 Lv17–20 10%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>机擎河岸雷，沙尘洼地雷，逆鳞湖雷，美纳斯湖北岸所有天气，球湖湖畔晴雨雷雪雹雾，25级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 10%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、7号道路·草丛 Lv36–39 10%；冠之雪原：巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>牙牙湖东岸晴，煦丽草原晴阴雨曝雪沙雾，沐光森林晴雨曝雪雹沙，牙牙湖西岸曝沙，美纳斯湖北岸晴曝沙，巨人帽岩沙<br><span class="mod1">沐光森林（曝）·草丛随机遇敌 移除20%（被敲音猴替换）</span><br><span class="mod3">本体：1号道路·草丛 Lv2–5 5%、煦丽草原·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>牙牙湖之眼所有天气，巨人凳岩晴，美纳斯湖北岸晴，桥间空地阴，巨人镜池沙，巨人帽岩曝沙，煦丽草原所有天气，牙牙湖西岸曝雪雹沙，20级进化<br><span class="mod1">牙牙湖之眼（晴）·草丛随机遇敌 移除30%（被黏黏宝替换）；牙牙湖之眼（雨）·草丛随机遇敌 移除20%（被黏黏宝替换）</span><br><span class="mod3">本体：煦丽草原·定点 Lv15、牙牙湖西岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>煦丽草原晴雪，牙牙湖东岸阴曝雪雹沙雾，道路（5），巨人帽岩所有天气<br><span class="mod1">牙牙湖东岸（阴）·草丛随机遇敌 移除20%（被智挥猩替换）</span><br><span class="mod3">本体：1号道路·草丛 Lv2–5 5%</span></td>
        </tr>
        <tr>
            <td>051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/573.png"></td>
            <td>奇诺栗鼠</td>
            <td>巨人帽岩晴阴雾，光之石进化</td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>煦丽草原晴，沐光森林晴沙，瞭望塔旧址晴阴，牙牙湖西岸晴，巨石原野所有天气，牙牙湖东岸晴<br><span class="mod1">沐光森林（晴）·草丛随机遇敌 移除5%（被敲音猴替换）；瞭望塔旧址（晴）·草丛随机遇敌 移除20%（被月石替换）</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/762.png"></td>
            <td>甜舞妮</td>
            <td>牙牙湖之眼晴，18级进化<br><span class="mod3">本体：机擎河岸·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>054</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/763.png"></td>
            <td>甜冷美后</td>
            <td>巨石原野晴阴曝雪雹沙雾，学会踩踏技能<br><span class="mod3">本体：机擎河岸·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>牙牙湖东岸晴阴雨雷，煦丽草原阴，牙牙湖东岸晴阴雷雾，沐光森林晴阴雨雷，瞭望塔旧址阴<br><span class="mod1">牙牙湖东岸（晴）·地图可见 出现率35%→25%</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>牙牙湖之眼阴，巨人镜池晴阴雨雷曝雾，美纳斯湖北岸晴阴雨雷，巨人帽岩阴雨雷，21级进化<br><span class="mod3">本体：沐光森林·定点 Lv15、机擎河岸·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/045.png"></td>
            <td>霸王花</td>
            <td>沐光森林晴阴雾，拳关丘陵晴雨雷曝沙，巨人镜池阴雨雷雪雹沙，叶之石进化</td>
        </tr>
        <tr>
            <td>058</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/182.png"></td>
            <td>美丽花</td>
            <td>巨人镜池晴，日之石进化</td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>４号道路所有天气，沐光森林晴阴雨雷曝雾，煦丽草原阴，牙牙湖东岸阴，巨人镜池晴，牙牙湖西岸阴<br><span class="mod1">巨人镜池（晴）·草丛随机遇敌 出现率10%→14%</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>美纳斯湖南岸阴曝，牙牙湖之眼阴，沙尘洼地阴，巨人镜池阴，煦丽草原晴阴雨曝雪沙雾，亲密度*220以上或友好度*158以上提升等级（白天）<br><span class="mod3">本体：沐光森林·定点 Lv15、机擎河岸·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>061</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/407.png"></td>
            <td>罗丝雷朵</td>
            <td>拳关丘陵阴雾，光之石进化<br><span class="mod3">本体：微寐森林·草丛 Lv57–60 15%</span></td>
        </tr>
        <tr>
            <td>062</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/278.png"></td>
            <td>长翅鸥</td>
            <td>大部分地区都有<br><span class="mod3">本体：2号道路·草丛 Lv4–7 5%、牙牙湖东岸·空中 Lv7–10 30%、美纳斯湖北岸·草丛 Lv7–10 15%、美纳斯湖南岸·草丛 Lv7–10 15%、美纳斯湖南岸·空中 Lv7–10 30%；铠岛：揖礼原野·冲浪 Lv45–48 15%、清凉湿原·水洼 Lv9–12 20%</span></td>
        </tr>
        <tr>
            <td>063</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/279.png"></td>
            <td>大嘴鸥</td>
            <td>大部分地区都有，25级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 5%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 25%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 25%、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、9号道路·草丛 Lv40–43 15%、逆鳞湖·定点 Lv51；铠岛：锻炼平原·定点 Lv17、挑战海滩·冲浪 Lv45–48 15%、挑战海滩·定点 Lv17、离岛海域·冲浪 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>４号道路所有天气，煦丽草原雷，沐光森林雷，牙牙湖西岸雷，牙牙湖东岸雷，美纳斯湖南岸雷，美纳斯湖北岸雷，巨人镜池雷，巨人帽岩雷，美纳斯湖南岸雷，巨人镜池雷<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 10%、4号道路·草丛 Lv17–20 5%；冠之雪原：巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>７号道路所有天气，逆鳞湖雷，美纳斯湖南岸所有天气，巨人帽岩雷，巨人凳岩雨雷，巨人睡榻雷，远古墓地雷，巨人鞋底雷，三岔平原雷，球湖湖畔雷，巨人睡榻雷，球湖湖畔雷，36级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、巨人凳岩·定点 Lv15、巨人帽岩·定点 Lv35、7号道路·草丛 Lv36–39 15%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>煦丽草原雷，瞭望塔旧址雷，牙牙湖西岸雷，牙牙湖东岸雷，美纳斯湖南岸雷，４号道路所有天气，煦丽草原雷，沐光森林雷，牙牙湖西岸雷，牙牙湖东岸雷，巨人凳岩雷，沙尘洼地雨雷，巨人镜池雨雷<br><span class="mod3">本体：2号道路·草丛 Lv4–7 5%、美纳斯湖南岸·草丛 Lv7–10 10%、4号道路·草丛 Lv17–20 10%</span></td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>牙牙湖之眼雷，巨人凳岩雷，巨人帽岩雷，煦丽草原雷，26级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 10%、美纳斯湖南岸·定点 Lv15、7号道路·草丛 Lv36–39 10%</span></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>剑：煦丽草原曝，沐光森林曝，瞭望塔旧址曝，牙牙湖西岸曝，牙牙湖东岸曝，美纳斯湖南岸曝，牙牙湖之眼曝，３号道路所有天气，煦丽草原曝，沐光森林曝，瞭望塔旧址曝，牙牙湖西岸曝，牙牙湖东岸曝，美纳斯湖南岸曝，美纳斯湖北岸曝，牙牙湖之眼曝，巨人凳岩曝肝帝威的游戏笔记，盾：拳关丘陵曝，沙尘洼地曝，巨人镜池曝<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 5%、煦丽草原·定点[阿罗拉] Lv15、3号道路·草丛 Lv15–18 10%、机擎竞技场·定点 Lv30、巨人帽岩·草丛[阿罗拉] Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>069</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/038.png"></td>
            <td>九尾</td>
            <td>剑：逆鳞湖曝，火之石进化<br><span class="mod3">本体：巨人帽岩·定点[阿罗拉] Lv35、8号道路（泉烟小路）·草丛[阿罗拉] Lv37–40 10%</span></td>
        </tr>
        <tr>
            <td>070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/058.png"></td>
            <td>卡蒂狗</td>
            <td>剑：拳关丘陵曝，沙尘洼地曝，巨人镜池曝，盾：煦丽草原曝，沐光森林曝，瞭望塔旧址曝，牙牙湖西岸曝，牙牙湖东岸曝，美纳斯湖南岸曝，牙牙湖之眼曝，３号道路所有天气，煦丽草原曝，沐光森林曝，瞭望塔旧址曝，牙牙湖西岸曝，牙牙湖东岸曝，美纳斯湖南岸曝，美纳斯湖北岸曝，牙牙湖之眼曝，巨人凳岩曝<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 5%、3号道路·草丛 Lv15–18 10%</span></td>
        </tr>
        <tr>
            <td>071</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/059.png"></td>
            <td>风速狗</td>
            <td>盾 逆鳞湖曝，火之石进化</td>
        </tr>
        <tr>
            <td>072</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/582.png"></td>
            <td>迷你冰</td>
            <td>大部分地区雪雹天气出现<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 15%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>１０号道路所有天气，泉烟小路所有天气，大部分地区雪雹天气出现，35级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、8号道路（泉烟小路）·草丛 Lv37–40 15%；冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、冻海·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>白丘车站所有天气，逆鳞湖雪雹，牙牙湖西岸雪雹，牙牙湖东岸雪雹，美纳斯湖北岸雪雹，美纳斯湖南岸雪雹，桥间空地雪雹，逆鳞湖雪雹，冰点雪原雪雹，巨人睡榻雪雹，雪中溪谷雪雹，球湖湖畔雪雹，47级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、巨人帽岩·定点 Lv35、逆鳞湖·定点 Lv51、10号道路·草丛 Lv50–53 15%；冠之雪原：冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>煦丽草原雪雹，巨人凳岩雪雹，巨人镜池雪雹，拳关丘陵雪，起橇雪原所有天气<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 5%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>沙尘洼地雪，逆鳞湖雪，煦丽草原雪雹，牙牙湖东岸雪雹，沙尘洼地雪雹，起橇雪原，海鸣洞窟所有天气，33级进化<br><span class="mod3">本体：煦丽草原·定点 Lv15、沙尘洼地·定点 Lv35、巨人帽岩·地面 Lv27–30 20%；冠之雪原：起橇雪原·定点 Lv19、海鸣洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/473.png"></td>
            <td>象牙猪</td>
            <td>起橇雪原晴阴曝雪雹，学习原始之力进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、10号道路·定点 Lv58</span></td>
        </tr>
        <tr>
            <td>078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/225.png"></td>
            <td>信使鸟</td>
            <td>泉烟小路所有天气，大部分地区雪天<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%、8号道路（泉烟小路）·草丛 Lv37–40 5%；冠之雪原：起橇雪原·草丛 Lv11–14 5%、起橇雪原·定点 Lv19、冰点雪原·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>泉烟小路所有天气，登顶隧道所有天气，大部分地区雪天<br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 5%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>１０号道路所有天气，逆鳞湖雪，９号道路所有天气，瞭望塔旧址雪雹，巨人凳岩雪雹，巨人帽岩雪雹，起橇雪原雹，巨人睡榻雪雹，雪中溪谷雪雹，42级进化<br><span class="mod3">本体：9号道路·草丛 Lv40–43 5%、9号道路·定点 Lv48；冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19、雪中溪谷·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>登顶隧道所有天气，起橇雪原雹，巨人睡榻雪雹，远古墓地雪雹，雪中溪谷雪雹，雪童子使用觉醒之石（雌性）<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15、9号道路·草丛 Lv40–43 5%；冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19、远古墓地·定点 Lv19、雪中溪谷·定点 Lv19、登顶隧道·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>煦丽草原曝沙，沐光森林沙，牙牙湖东岸沙，牙牙湖西岸曝沙，牙牙湖之眼沙，美纳斯湖南岸曝沙，美纳斯湖北岸曝沙，拳关丘陵曝，巨人帽岩曝，煦丽草原沙，沐光森林曝沙，牙牙湖东岸沙，桥间空地曝沙，巨石原野晴阴曝沙，<br><span class="mod1">巨石原野（阴）·地图可见 移除10%（被秃鹰丫头替换）</span><br><span class="mod3">本体：煦丽草原·地面 Lv7–10 30%、沙尘洼地·草丛 Lv27–30 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>逆鳞湖雾，牙牙湖之眼沙雾，沐光森林曝沙，沙尘洼地阴曝沙雾，巨石原野晴阴曝沙，桥间空地沙，巨人鞋底，三岔平原所有天气，36级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35；冠之雪原：巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>道路（3）所有天气，煦丽草原曝，沐光森林曝，牙牙湖东岸曝，牙牙湖西岸沙，美纳斯湖北岸曝沙，巨人帽岩沙，牙牙湖东岸曝沙，美纳斯湖南岸曝沙，巨人凳岩曝<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 10%</span></td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>牙牙湖之眼曝沙，巨人凳岩曝沙，沙尘洼地曝，牙牙湖之眼曝沙，煦丽草原晴阴曝沙雾，牙牙湖东岸曝沙，巨人凳岩曝，沙尘洼地晴曝沙雾，30级进化<br><span class="mod3">本体：煦丽草原·定点 Lv15、沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>煦丽草原沙，瞭望塔旧址沙，牙牙湖东岸沙，巨人凳岩曝沙，美纳斯湖北岸沙，拳关丘陵沙，牙牙湖西岸曝沙，美纳斯湖南岸沙，美纳斯湖北岸曝沙，巨石原野晴阴雨曝雪雹沙雾，斗志洞窟，圆环海湾所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 15%、巨石原野·草丛 Lv27–30 15%；铠岛：战斗洞窟·草丛 Lv9–12 10%、专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>牙牙湖之眼曝沙，８号道路所有天气，煦丽草原沙，巨石原野晴阴曝雪雹沙雾，美纳斯湖南岸曝，斗志洞窟所有天气，挑战之路沙，锻炼平原沙，34级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、8号道路·定点 Lv45；铠岛：专注森林·定点 Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>煦丽草原沙，瞭望塔旧址晴曝沙，沐光森林沙，巨人帽岩曝沙，道路（8），巨石原野所有天气，瞭望塔旧址晴，美纳斯湖北岸沙，巨人凳岩沙<br><span class="mod1">瞭望塔旧址（晴）·地图可见 出现率60%→40%</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 15%、沙尘洼地·草丛 Lv27–30 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>逆鳞湖所有天气，巨石原野所有天气，瞭望塔旧址晴曝沙，沙尘洼地阴雨雷雪雹沙雾，巨人凳岩沙，三岔平原所有天气，34级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35；冠之雪原：巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>微寐森林所有天气，煦丽草原雾，牙牙湖东岸雾，牙牙湖之眼雾，巨人帽岩阴雾，微寐森林所有天气，牙牙湖东岸雾，桥间空地雾，巨石原野雾，巨人凳岩雾<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/518.png"></td>
            <td>梦梦蚀</td>
            <td>桥间空地雾，巨人凳岩雾，月之石进化<br><span class="mod3">本体：巨人镜池·定点 Lv35、微寐森林·草丛 Lv57–60 15%</span></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>煦丽草原雾，牙牙湖西岸雾，美纳斯湖北岸雾，美纳斯湖南岸雾，巨人镜池雨雷雪雹雾，巨人凳岩雾<br><span class="mod3">本体：瞭望塔旧址·树果树 Lv7–10 20%、瞭望塔旧址·空中 Lv7–10 10%、美纳斯湖南岸·空中 Lv7–10 10%、巨人镜池·树果树 Lv27–30 20%</span></td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>巨人凳岩雾，牙牙湖东岸晴阴曝雪雹沙雾，美纳斯湖北岸晴阴曝雪雹沙雾，巨人镜池雨雷雪雹沙雾，25级进化<br><span class="mod3">本体：桥间空地·空中 Lv27–30 10%、桥间空地·定点 Lv35、巨人镜池·树果树 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>牙牙湖东岸所有天气，沐光森林阴，美纳斯湖北岸晴阴雨雷曝雪雾，道路（5），牙牙湖东岸所有天气，巨人凳岩晴沙，桥间空地雨雷雪沙雾，拳关丘陵晴阴<br><span class="mod1">牙牙湖东岸（晴）·草丛随机遇敌 移除5%（被智挥猩替换）；牙牙湖东岸（晴）·地图可见 出现率50%→35%；牙牙湖东岸（阴）·地图可见 移除50%（被智挥猩替换）；拳关丘陵（晴）·地图可见 移除29%（被树才怪替换）；拳关丘陵（阴）·地图可见 移除45%（被幼基拉斯替换）</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 5%、5号道路·草丛 Lv20–23 5%</span></td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>巨人凳岩所有天气，牙牙湖之眼晴，逆鳞湖晴，牙牙湖之眼所有天气。沐光森林所有天气，桥间空地晴雨雷曝雪雹沙雾，27级进化<br><span class="mod1">逆鳞湖（晴）·草丛随机遇敌 移除20%（被老翁龙替换）；牙牙湖之眼（雨）·地图可见 移除25%（被黏黏宝替换）</span><br><span class="mod3">本体：桥间空地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>泉烟小路所有天气，１０号道路所有天气，冰点雪原所有天气，大部分冰雪天<br><span class="mod3">本体：沐光森林·定点 Lv15、巨人帽岩·草丛 Lv27–30 15%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>１０号道路所有天气，沙尘洼地雪，逆鳞湖雪，路（10）所有天气，牙牙湖之眼雪雹，拳关丘陵雪雹，巨人镜池雪，巨人凳岩雪雹，冰点雪原所有天气，起橇雪原雪，40级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、8号道路（泉烟小路）·草丛 Lv37–40 15%、10号道路·草丛 Lv50–53 15%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>巨人帽岩所有天气，牙牙湖西岸晴阴雨雷雾，美纳斯湖南岸晴阴雨雷雪，揖礼原野雨雷，圆环海湾雨雷<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 15%；铠岛：揖礼原野·沙滩 Lv9–12 25%、锻炼平原·沙滩 Lv9–12 20%、斗志洞窟·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>９号道路所有天气，牙牙湖之眼晴阴雷，牙牙湖西岸晴，美纳斯湖南岸晴雷，揖礼原野晴阴雨雷曝沙，挑战海滩晴雨曝沙，锻炼平原晴阴雨雷曝沙，28级进化<br><span class="mod3">本体：牙牙湖西岸·定点[超极巨] Lv15、9号道路·草丛 Lv40–43 10%；铠岛：揖礼原野·定点[超极巨] Lv17、锻炼平原·定点[超极巨] Lv17、挑战海滩·定点[超极巨] Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>美纳斯湖南岸沙，牙牙湖西岸晴雨雷雾，巨人帽岩雨雷，巨人凳岩雨，清凉湿原所有天气<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 15%、4号道路·钓鱼 Lv17–20 15%；铠岛：清凉湿原·水洼 Lv9–12 25%</span></td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>巨人凳岩雨，逆鳞湖雨，巨人帽岩雨雷，清凉湿原所有天气，20级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15；铠岛：清凉湿原·定点 Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>美纳斯湖南岸晴阴雨雷雪雾，第二矿山，巨人帽岩所有天气，，锻炼平原，专注森林所有天气<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 15%；铠岛：揖礼原野·沙滩 Lv9–12 20%、挑战海滩·冲浪（河流） Lv45–48 30%、斗志洞窟·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>巨人凳岩雷，牙牙湖之眼雨雷，草路镇所有天气，美纳斯湖南岸晴雷，专注森林阴雨雷，挑战海滩阴雨雷，锻炼平原阴，30级进化<br><span class="mod3">本体：牙牙湖东岸·定点 Lv15、9号道路·草丛 Lv40–43 10%；铠岛：锻炼平原·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/290.png"></td>
            <td>土居忍士</td>
            <td>５号道路所有天气，牙牙湖西岸沙，美纳斯湖南岸曝沙<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 5%</span></td>
        </tr>
        <tr>
            <td>105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/291.png"></td>
            <td>铁面忍者</td>
            <td>巨石原野晴雨，煦丽草原所有天气，20级进化<br><span class="mod3">本体：煦丽草原·空中 Lv7–10 10%、煦丽草原·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>106</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/292.png"></td>
            <td>脱壳忍者</td>
            <td>包包中有精灵球*，且同行宝可梦中有空位<br><span class="mod3">本体：煦丽草原·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>牙牙湖西岸阴，美纳斯湖南岸阴，３号道路，煦丽草原，美纳斯湖南岸所有天气，沐光森林阴，巨人凳岩阴，巨石原野晴<br><span class="mod1">3号道路·地图可见 移除2%（被炎兔儿替换）；巨石原野（晴）·地图可见 移除15%（被蝶结萌虻替换）</span><br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/106.png"></td>
            <td>飞腿郎</td>
            <td>剑：沙尘洼地阴，巨人镜池阴，等级20以上攻击 ＞ 防御</td>
        </tr>
        <tr>
            <td>109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/107.png"></td>
            <td>快拳郎</td>
            <td>盾：沙尘洼地阴，巨人镜池阴，等级20以上攻击 < 防御</td>
        </tr>
        <tr>
            <td>110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/237.png"></td>
            <td>战舞郎</td>
            <td>逆鳞湖阴，等级20以上攻击 = 防御</td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>３号道路所有天气，牙牙湖西岸阴曝，煦丽草原所有天气，牙牙湖东岸阴雷曝雪雹沙<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>霸道熊猫</td>
            <td>逆鳞湖阴，煦丽草原晴阴雨雷曝，沐光森林曝雪雹沙，桥间空地阴曝，等级32以上（与恶属性宝可梦同行）<br><span class="mod3">本体：煦丽草原·定点 Lv15、沐光森林·定点 Lv15、桥间空地·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%</span></td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>３号道路，拳关丘陵所有天气，沐光森林雹，牙牙湖西岸雹，牙牙湖之眼雹，美纳斯湖南岸雹，牙牙湖西岸雹，美纳斯湖南岸雹，美纳斯湖北岸雹<br><span class="mod1">3号道路·草丛随机遇敌 移除9%（被炎兔儿替换）</span><br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 15%、拳关丘陵·草丛 Lv27–30 15%</span></td>
        </tr>
        <tr>
            <td>114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/600.png"></td>
            <td>齿轮组</td>
            <td>１０号道路所有天气，沙尘洼地雹，拳关丘陵晴阴雨雪，38级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15、拳关丘陵·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/601.png"></td>
            <td>齿轮怪</td>
            <td>逆鳞湖雹，拳关丘陵雷曝雹沙雾，49级进化<br><span class="mod3">本体：拳关丘陵·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/415.png"></td>
            <td>三蜜蜂</td>
            <td>煦丽草原晴，蜂巢岛所有天气<br><span class="mod3">本体：煦丽草原·树果树 Lv7–10 20%、煦丽草原·空中 Lv7–10 20%、3号道路·树果树 Lv15–18 20%、4号道路·树果树 Lv17–20 40%、机擎河岸·树果树 Lv27–30 20%；铠岛：挑战海滩·树果树 Lv9–12 20%、健身之海·树果树 Lv45–48 20%、蜂巢岛·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>117</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/416.png"></td>
            <td>蜂女王</td>
            <td>煦丽草原晴，等级21以上（雌性）<br><span class="mod3">本体：煦丽草原·定点 Lv15、6号道路·树果树 Lv29–32 20%、牙牙湖之眼·树果树 Lv43–46 20%；铠岛：专注森林·定点 Lv17、挑战海滩·树果树 Lv9–12 10%、健身之海·树果树 Lv45–48 10%、蜂巢岛·草丛 Lv45–48 15%、蜂巢岛·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>美纳斯湖南岸雾，桥间空地雨雷，巨石原野雨雷雪雹雾，巨人凳岩晴阴雨雷曝雪雹沙，巨人鞋底，三岔平原所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 15%、伽勒尔矿山·草丛 Lv16–19 5%、巨人帽岩·岩石 Lv27–30 20%、拳关丘陵·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>８号道路所有天气，沙尘洼地雹，逆鳞湖雾，牙牙湖之眼雹，巨人凳岩阴雨雷，沙尘洼地晴雨雷雪雹，巨石原野雨雷雪雹雾，牙牙湖东岸雾，桥间空地雨雷，巨人睡榻，巨人鞋底，三岔平原所有天气，33级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15；冠之雪原：巨人睡榻·定点 Lv19、雪中溪谷·定点 Lv19、三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>煦丽草原阴雾，沐光森林雾，瞭望塔旧址雾，美纳斯湖北岸雾，美纳斯湖南岸雾，揖礼原野雾<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 5%；铠岛：揖礼原野·草丛 Lv9–12 10%、圆环海湾·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>121</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/281.png"></td>
            <td>奇鲁莉安</td>
            <td>煦丽草原雾，20级进化<br><span class="mod3">铠岛：专注森林·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>沙尘洼地雾，逆鳞湖雾，煦丽草原雾，逆鳞湖晴雾，专注森林雾，锻炼平原雾，30级进化<br><span class="mod3">本体：桥间空地·定点 Lv35；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17、圆环海湾·定点 Lv17、离岛海域·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>桥间空地晴阴雨雷曝沙，挑战之路雾，使用觉醒之石（雄性）<br><span class="mod3">本体：桥间空地·定点 Lv35；铠岛：挑战之路·定点 Lv17、圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>瞭望塔旧址晴曝雪雹，５号道路所有天气，瞭望塔旧址晴阴雷曝雪，美纳斯湖北岸雾，美纳斯湖南岸晴雾，圆环海湾雾，揖礼原野雾，圆环海湾雾，健身之海雾，离岛海域雾，列岛海域雾，蜂巢海雾，蜂巢岛雾<br><span class="mod1">瞭望塔旧址（晴）·地图可见 出现率15%→10%</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 15%、瞭望塔旧址·空中 Lv7–10 30%、机擎市郊外·草丛 Lv24–27 10%；铠岛：挑战海滩·草丛 Lv9–12 5%、斗志洞窟·草丛 Lv9–12 10%、圆环海湾·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>牙牙湖之眼雾，瞭望塔旧址晴曝雪，美纳斯湖北岸雾，美纳斯湖南岸雾，挑战海滩阴雾，挑战之路雾，锻炼平原雾，28级进化<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15、巨石原野·空中 Lv27–30 10%、巨人镜池·空中 Lv27–30 30%；铠岛：锻炼平原·定点 Lv17、挑战之路·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>道路（2）所有天气，道路（3）所有天气，机擎河岸晴。球湖湖畔晴曝<br><span class="mod3">本体：沐光森林·草丛 Lv7–10 15%、4号道路·草丛 Lv17–20 15%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>机擎河岸晴，巨石原野晴，沙尘洼地晴阴雨雷沙雾，巨人帽岩晴阴雨雾，道路（5），机擎河岸所有天气，球湖湖畔晴雨，20级进化<br><span class="mod1">沙尘洼地（雾）·草丛随机遇敌 移除20%（被勾魂眼替换）</span><br><span class="mod3">本体：5号道路·定点 Lv28、机擎河岸·定点 Lv35；冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>３号道路，煦丽草原，瞭望塔旧址，牙牙湖之眼，巨人凳岩，沐光森林，美纳斯湖北岸，机擎河岸，桥间空地，巨人镜池，拳关丘陵，巨人帽岩，逆鳞湖所有天气<br><span class="mod3">本体：沐光森林·树果树 Lv7–10 40%、美纳斯湖北岸·树果树 Lv7–10 40%、3号道路·树果树 Lv15–18 20%、4号道路·树果树 Lv17–20 20%、5号道路·树果树 Lv20–23 20%、机擎河岸·树果树 Lv27–30 40%</span></td>
        </tr>
        <tr>
            <td>129</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/421.png"></td>
            <td>樱花儿</td>
            <td>25级进化<br><span class="mod3">本体：机擎河岸·树果树 Lv27–30 10%、6号道路·树果树 Lv29–32 20%、9号道路（尖钉镇郊外）·树果树 Lv40–43 20%、牙牙湖之眼·树果树 Lv43–46 40%</span></td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>沐光森林阴，巨人帽岩晴，道路（3）所有天气，美纳斯湖南岸晴阴雨雷曝沙，美纳斯湖北岸晴阴曝沙雾<br><span class="mod3">本体：3号道路·草丛 Lv15–18 15%、巨石原野·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>沙尘洼地阴，逆鳞湖阴，美纳斯湖南岸晴阴雪雹沙雾，美纳斯湖北岸雨曝沙，沙尘洼地阴，34级进化<br><span class="mod3">本体：9号道路（尖钉镇郊外）·草丛 Lv40–43 5%</span></td>
        </tr>
        <tr>
            <td>132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/535.png"></td>
            <td>圆蝌蚪</td>
            <td>沐光森林雨雷，牙牙湖西岸晴阴雨雷雪雹雾，美纳斯湖南岸雨雷<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 15%、4号道路·钓鱼 Lv17–20 5%</span></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>桥间空地所有天气，巨人帽岩雨，巨人凳岩雷，沙尘洼地雨雷，美纳斯湖北岸雨雷，巨人镜池雨雷，拳关丘陵雨，牙牙湖西岸阴雪雹沙雾，美纳斯湖南岸雨雷，25级进化<br><span class="mod3">本体：牙牙湖东岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>７号道路所有天气，牙牙湖之眼雨雷，逆鳞湖雨，沐光森林雨雷，牙牙湖之眼雷，美纳斯湖北岸阴雷，沙尘洼地雨雷，桥间空地晴阴雨雷雾，巨人帽岩雨，巨人镜池雨，36级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>沙尘洼地雾，道路（6）所有天气，瞭望塔旧址阴雨雷曝雪雹沙雾巨人帽岩雾，瞭望塔旧址晴阴雨雷曝雪雾，巨人凳岩雾，机擎河岸雾<br><span class="mod1">巨人帽岩（雾）·草丛随机遇敌 移除20%（被单卵细胞球替换）</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 15%</span></td>
        </tr>
        <tr>
            <td>136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/356.png"></td>
            <td>彷徨夜灵</td>
            <td>道路（8）所有天气，巨人凳岩雾，瞭望塔旧址阴雨雷沙，37级进化<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>137</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/477.png"></td>
            <td>黑夜魔灵</td>
            <td>巨石原野所有天气，携带灵界之布连接交换<br><span class="mod2">灵界之布 ; Lv 45</span></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>３号道路，巨人镜池所有天气，瞭望塔旧址阴，美纳斯湖南岸晴阴雨雷雪雹雾，美纳斯湖北岸阴，美纳斯湖南岸所有天气，巨人凳岩晴阴雪沙，巨石原野晴阴<br><span class="mod1">巨人镜池（晴）·草丛随机遇敌 移除2%（被藏玛然特替换）；巨人镜池（阴）·草丛随机遇敌 出现率10%→14%</span><br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 10%、伽勒尔矿山·草丛 Lv16–19 10%</span></td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>巨人凳岩阴，拳关丘陵阴，牙牙湖之眼晴阴，拳关丘陵晴阴雨雷曝雹沙，巨石原野阴，美纳斯湖南岸所有天气，28级进化<br><span class="mod1">牙牙湖之眼（晴）·地图可见 移除5%（被黏黏宝替换）</span><br><span class="mod3">本体：8号道路·草丛 Lv37–40 5%</span></td>
        </tr>
        <tr>
            <td>140</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/068.png"></td>
            <td>怪力</td>
            <td>巨人镜池晴阴雷曝雹沙雾，链接交换<br><span class="mod2">Lv 40</span><br><span class="mod3">本体：桥间空地·定点[超极巨] Lv35</span></td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>瞭望塔旧址阴，美纳斯湖北岸阴，瞭望塔旧址阴雨雷雹沙雾，巨人凳岩阴雨曝雾，拳关丘陵雾<br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 15%、瞭望塔旧址·空中 Lv7–10 30%</span></td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>８号道路所有天气，巨人凳岩阴，瞭望塔旧址阴雨雷雹沙雾，煦丽草原雨雷，25级进化<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15、巨石原野·空中 Lv27–30 10%、巨人镜池·空中 Lv27–30 30%</span></td>
        </tr>
        <tr>
            <td>143</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/094.png"></td>
            <td>耿鬼</td>
            <td>巨人帽岩晴阴雷曝雹沙雾，链接交换<br><span class="mod2">Lv 40</span><br><span class="mod3">本体：巨石原野·定点[超极巨] Lv35</span></td>
        </tr>
        <tr>
            <td>144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/129.png"></td>
            <td>鲤鱼王</td>
            <td>大部分水域<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 30%、牙牙湖西岸·钓鱼 Lv7–10 30%、牙牙湖东岸·钓鱼 Lv7–10 30%、美纳斯湖北岸·钓鱼 Lv7–10 30%、美纳斯湖南岸·钓鱼 Lv7–10 30%、巨人凳岩·钓鱼 Lv7–10 30%、机擎市·钓鱼 Lv13–16 30%、4号道路·钓鱼 Lv17–20 30%、5号道路·钓鱼 Lv20–23 30%、水舟镇·钓鱼 Lv21–24 25%、桥间空地·冲浪 Lv43–46 30%、桥间空地·钓鱼 Lv27–30 30%；铠岛：揖礼原野·钓鱼 Lv9–12 30%、专注森林·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 30%、锻炼平原·冲浪 Lv45–48 25%、锻炼平原·钓鱼 Lv9–12 30%、健身之海·钓鱼 Lv45–48 30%、蜂巢岛·钓鱼 Lv45–48 25%；冠之雪原：巨人睡榻·冲浪 Lv47–50 30%、巨人睡榻·钓鱼 Lv11–14 30%、球湖湖畔·钓鱼 Lv47–50 30%</span></td>
        </tr>
        <tr>
            <td>145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>大部分水域，20级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 25%、2号道路（湖畔）·钓鱼 Lv43–46 25%、2号道路（湖畔）·定点[异色] Lv51、牙牙湖西岸·冲浪 Lv43–46 5%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·冲浪 Lv43–46 5%、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 5%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 5%、美纳斯湖南岸·定点 Lv15、桥间空地·钓鱼 Lv27–30 5%、桥间空地·定点 Lv35、沙尘洼地·定点 Lv35、9号道路·冲浪 Lv40–43 5%、逆鳞湖·冲浪 Lv43–46 30%、逆鳞湖·钓鱼 Lv43–46 25%、逆鳞湖·定点 Lv51；铠岛：挑战海滩·冲浪 Lv45–48 5%、挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、健身之海·冲浪 Lv45–48 5%、健身之海·钓鱼 Lv45–48 5%、蜂巢海·冲浪 Lv45–48 15%、蜂巢海·钓鱼 Lv45–48 25%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>道路（4・5・6），牙牙湖西岸，牙牙湖东岸，巨人帽岩所有天气，桥间空地，美纳斯湖南岸所有天气，牙牙湖东岸晴阴雨雷曝雹沙雾，美纳斯湖北岸雨雷沙，牙牙湖西岸晴阴雨雷曝雹沙雾，专注森林所有天气<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 15%、牙牙湖东岸·钓鱼 Lv7–10 25%、桥间空地·冲浪 Lv43–46 25%；铠岛：揖礼原野·钓鱼 Lv9–12 15%、专注森林·冲浪 Lv45–48 15%、锻炼平原·冲浪 Lv45–48 30%、锻炼平原·钓鱼 Lv9–12 25%、离岛海域·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>美纳斯湖南岸晴阴雨雷沙，美纳斯湖北岸雨雷沙，牙牙湖西岸晴阴沙，牙牙湖东岸晴阴曝沙，桥间空地晴阴沙，逆鳞湖晴阴雷曝沙雾，33级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 15%、2号道路（湖畔）·钓鱼 Lv43–46 30%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·冲浪 Lv43–46 25%、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、9号道路·冲浪 Lv40–43 25%、逆鳞湖·定点 Lv51；铠岛：锻炼平原·冲浪 Lv45–48 5%、离岛海域·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>美纳斯湖南岸，牙牙湖西岸所有天气，战竞湾所有天气，牙牙湖西岸晴阴雨雷曝沙雾，揖礼原野，健身之海所有天气<br><span class="mod3">本体：牙牙湖东岸·钓鱼 Lv7–10 15%、机擎河岸·冲浪 Lv43–46 15%、9号道路·钓鱼 Lv40–43 15%；铠岛：揖礼原野·冲浪 Lv45–48 25%、揖礼原野·钓鱼 Lv9–12 5%、圆环海湾·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>９号道路，牙牙湖之眼所有天气，战竞湾所有天气，美纳斯湖南岸晴曝沙雾，25级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、9号道路·草丛 Lv40–43 15%；铠岛：挑战海滩·定点 Lv17、圆环海湾·冲浪 Lv45–48 25%、圆环海湾·定点 Lv17、列岛海域·冲浪 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>牙牙湖东岸所有天气，牙牙湖西岸雪，斗志洞窟，圆环海湾所有天气<br><span class="mod3">本体：美纳斯湖北岸·钓鱼 Lv7–10 25%、机擎市·钓鱼 Lv13–16 25%、桥间空地·冲浪 Lv43–46 15%、巨人帽岩·钓鱼 Lv27–30 30%、9号道路·钓鱼 Lv40–43 30%；铠岛：锻炼平原·钓鱼 Lv9–12 15%、斗志洞窟·冲浪 Lv45–48 30%、斗志洞窟·钓鱼 Lv9–12 30%、圆环海湾·钓鱼 Lv9–12 30%、离岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>巨人凳岩所有天气，牙牙湖西岸晴雾，牙牙湖东岸晴雾，斗志洞窟，圆环海湾所有天气，挑战海滩雨雾，圆环海湾雨，水之石进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 25%、巨人帽岩·钓鱼 Lv27–30 5%、9号道路·冲浪 Lv40–43 30%、9号道路·钓鱼 Lv40–43 5%；铠岛：挑战海滩·定点 Lv17、斗志洞窟·冲浪 Lv45–48 5%、圆环海湾·冲浪 Lv45–48 5%、圆环海湾·定点 Lv17、离岛海域·冲浪 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>２号道路所有天气，球湖湖畔所有天气，巨人鞋底，海鸣洞窟所有天气，巨人睡榻晴阴雨雷曝雪<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 5%、5号道路·钓鱼 Lv20–23 5%、水舟镇·钓鱼 Lv21–24 25%、沙尘洼地·冲浪 Lv43–46 25%、巨人镜池·冲浪 Lv43–46 25%、巨人镜池·钓鱼 Lv27–30 30%；冠之雪原：巨人睡榻·冲浪 Lv47–50 15%、巨人睡榻·钓鱼 Lv11–14 15%、球湖湖畔·钓鱼 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>美纳斯湖南岸雾、逆鳞湖雾，巨人睡榻雾，美丽度达到170以上提升等级，携带美丽鳞片连接交换<br><span class="mod2">美丽鳞片 ; Lv 36</span><br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 30%、2号道路（湖畔）·钓鱼 Lv43–46 15%、美纳斯湖南岸·冲浪 Lv43–46 15%、美纳斯湖南岸·定点 Lv15、巨人镜池·钓鱼 Lv27–30 5%、逆鳞湖·冲浪 Lv43–46 15%、逆鳞湖·钓鱼 Lv43–46 25%、逆鳞湖·定点 Lv51、微寐森林·钓鱼 Lv57–60 30%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>水舟镇，美纳斯湖北岸，机擎河岸所有天气，机擎河岸所有天气，巨人睡榻，雪中溪谷，巨人鞋底，冻海，球湖湖畔所有天气<br><span class="mod3">本体：牙牙湖西岸·冲浪[蓝条纹] Lv43–46 25%、牙牙湖西岸·钓鱼[蓝条纹] Lv7–10 5%、牙牙湖东岸·冲浪[红条纹] Lv43–46 25%、牙牙湖东岸·钓鱼[红条纹] Lv7–10 5%、机擎河岸·冲浪[蓝条纹] Lv43–46 25%、机擎河岸·冲浪[红条纹] Lv43–46 25%、机擎河岸·钓鱼[蓝条纹] Lv27–30 25%、机擎河岸·钓鱼[红条纹] Lv27–30 25%；冠之雪原：巨人睡榻·冲浪[蓝条纹] Lv47–50 25%、巨人睡榻·冲浪[红条纹] Lv47–50 25%、雪中溪谷·钓鱼[蓝条纹] Lv11–14 25%、雪中溪谷·钓鱼[红条纹] Lv11–14 25%、球湖湖畔·钓鱼[蓝条纹] Lv47–50 25%、球湖湖畔·钓鱼[红条纹] Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>９号道路，水舟镇，牙牙湖东岸，牙牙湖西岸，牙牙湖之眼所有天气，挑战海滩，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气<br><span class="mod3">本体：牙牙湖西岸·钓鱼 Lv7–10 25%、桥间空地·钓鱼 Lv27–30 25%；铠岛：揖礼原野·钓鱼 Lv9–12 25%、蜂巢海·钓鱼 Lv45–48 25%、蜂巢岛·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/771.png"></td>
            <td>拳海参</td>
            <td>道路（9）所有天气，美纳斯湖南岸雷<br><span class="mod3">本体：美纳斯湖北岸·钓鱼 Lv7–10 5%、第二矿山·钓鱼 Lv23–26 15%、桥间空地·钓鱼 Lv27–30 25%、9号道路·草丛 Lv40–43 5%、9号道路·钓鱼 Lv40–43 25%、牙牙湖之眼·钓鱼 Lv43–46 25%</span></td>
        </tr>
        <tr>
            <td>157</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/568.png"></td>
            <td>破破袋</td>
            <td>３号道路所有天气<br><span class="mod3">本体：3号道路·草丛 Lv15–18 5%、巨石原野·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/569.png"></td>
            <td>灰尘山</td>
            <td>3逆鳞湖阴，桥间空地所有天气，牙牙湖东岸晴阴雨雷，6级进化<br><span class="mod3">本体：9号道路（尖钉镇郊外）·草丛 Lv40–43 5%、逆鳞湖·定点[超极巨] Lv51</span></td>
        </tr>
        <tr>
            <td>159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>３号道路所有天气，机擎竞技场，巨人鞋底晴曝<br><span class="mod3">本体：3号道路·草丛 Lv15–18 15%、机擎竞技场·定点 Lv30；冠之雪原：巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>160</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/851.png"></td>
            <td>焚焰蚣</td>
            <td>巨人鞋底晴曝，28级进化<br><span class="mod3">本体：逆鳞湖·定点[超极巨] Lv51；冠之雪原：巨人鞋底·定点[超极巨] Lv19、球湖湖畔·草丛 Lv47–50 10%、球湖湖畔·定点[超极巨] Lv55</span></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>伽勒尔矿山所有天气，道路（3），伽勒尔矿山，巨人帽岩所有天气，机擎河岸曝沙<br><span class="mod3">本体：伽勒尔矿山·草丛 Lv16–19 15%；冠之雪原：球湖湖畔·定点 Lv55、湖畔洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>桥间空地曝，巨石原野曝，巨人帽岩曝沙，伽勒尔矿山所有天气，湖畔洞窟所有天气，球湖湖畔曝，18级进化<br><span class="mod3">本体：伽勒尔矿山·定点 Lv24、巨人帽岩·地面 Lv27–30 30%；冠之雪原：湖畔洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨炭山</td>
            <td>沙尘洼地曝，逆鳞湖曝，巨人帽岩所有天气，湖畔洞窟所有天气，球湖湖畔晴雷曝雪雹沙雾，34级进化<br><span class="mod3">本体：巨人帽岩·定点[超极巨] Lv35；冠之雪原：球湖湖畔·定点[超极巨] Lv55、湖畔洞窟·定点[超极巨] Lv55</span></td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>伽勒尔矿山所有天气，巨人镜池曝，伽勒尔矿山，煦丽草原所有天气，４号道路所有天气<br><span class="mod3">本体：煦丽草原·地面 Lv7–10 30%、煦丽草原·地面[阿罗拉] Lv7–10 10%、伽勒尔矿山·草丛 Lv16–19 15%</span></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>沙尘洼地沙，拳关丘陵沙，巨人帽岩曝，逆鳞湖沙，６号道路，巨人镜池所有天气，26级进化<br><span class="mod3">本体：4号道路·定点 Lv25、巨人镜池·地面 Lv27–30 30%、巨人帽岩·地面[阿罗拉] Lv27–30 30%、6号道路·草丛 Lv29–32 15%</span></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>伽勒尔矿山所有天气，巨石原野曝沙，拳关丘陵沙，巨人帽岩曝沙，伽勒尔矿山所有天气，沙尘洼地曝沙，巨人镜池曝沙<br><span class="mod1">巨石原野（沙）·草丛随机遇敌 移除30%（被秃鹰丫头替换）</span><br><span class="mod3">本体：煦丽草原·地面 Lv7–10 10%、伽勒尔矿山·草丛 Lv16–19 15%</span></td>
        </tr>
        <tr>
            <td>167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/530.png"></td>
            <td>龙头地鼠</td>
            <td>巨人镜池所有天气，逆鳞湖沙，巨人帽岩曝沙，31级进化<br><span class="mod3">本体：巨人镜池·地面 Lv27–30 20%</span></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>伽勒尔矿山，机擎市郊外所有天气，伽勒尔矿山，煦丽草原所有天气，巨石原野沙<br><span class="mod3">本体：煦丽草原·地面 Lv7–10 20%、巨人凳岩·草丛 Lv7–10 15%、伽勒尔矿山·草丛 Lv16–19 15%；铠岛：战斗洞窟·草丛 Lv9–12 10%、热身洞穴·草丛 Lv9–12 15%、锅底沙漠·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/525.png"></td>
            <td>地幔岩</td>
            <td>沙尘洼地晴曝沙，战斗洞窟所有天气，25级进化<br><span class="mod3">本体：煦丽草原·定点 Lv15、巨人凳岩·定点 Lv15、巨人镜池·地面 Lv27–30 30%、8号道路·草丛 Lv37–40 15%；铠岛：战斗洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>巨石原野晴雷曝雪沙，８号道路，巨人镜池，巨人帽岩所有天气，逆鳞湖沙，链接交换金海<br><span class="mod2">Lv 40</span><br><span class="mod3">本体：沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>171</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/532.png"></td>
            <td>搬运小匠</td>
            <td>伽勒尔矿山所有天气<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 10%、伽勒尔矿山·草丛 Lv16–19 10%；冠之雪原：冰点雪原·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>沙尘洼地雪，８号道路所有天气，巨人睡榻晴，巨人鞋底晴，25级进化<br><span class="mod3">本体：8号道路·草丛 Lv37–40 5%；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>机擎河岸晴阴雨雷雪雾，巨人睡榻晴，巨人鞋底晴，链接交换进化<br><span class="mod2">Lv 40</span></td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>伽勒尔矿山所有天气，伽勒尔矿山，瞭望塔旧址，桥间空地所有天气，巨人镜池晴<br><span class="mod3">本体：瞭望塔旧址·空中 Lv7–10 20%、美纳斯湖南岸·空中 Lv7–10 20%、伽勒尔矿山·草丛 Lv16–19 5%、伽勒尔矿山·定点 Lv24；铠岛：战斗洞窟·草丛 Lv9–12 15%、斗志洞窟·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>战斗洞窟，斗志洞窟所有天气，锻炼平原阴，挑战海滩阴，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：巨人镜池·空中 Lv27–30 10%；铠岛：战斗洞窟·定点 Lv17、锻炼平原·定点 Lv17、斗志洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>第二矿山所有天气，桥间空地雷，第二矿山，瞭望塔旧址，桥间空地所有天气<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 5%、牙牙湖东岸·空中 Lv7–10 10%、第二矿山·草丛 Lv23–26 5%、桥间空地·空中 Lv27–30 20%；冠之雪原：通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>逆鳞湖雷，桥间空地晴阴雨雷曝雹沙雾，湖畔洞窟所有天气，球湖湖畔阴雨，48级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、拳关丘陵·空中 Lv27–30 20%、牙牙湖之眼·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>牙牙湖东岸曝沙，巨人凳岩晴阴曝沙，机擎河岸沙，煦丽草原所有天气，<br><span class="mod3">本体：煦丽草原·定点 Lv15、巨人凳岩·草丛 Lv7–10 10%</span></td>
        </tr>
        <tr>
            <td>179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>巨人凳岩，巨人镜池所有天气，野生原野区F区，携带金属膜连接交换<br><span class="mod2">金属外套 ; Lv 40</span><br><span class="mod3">本体：巨人凳岩·定点 Lv15、机擎河岸·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>道路（2），水舟镇，机擎河岸所有天气，道路（2），机擎河岸所有天气，专注森林所有天气，锻炼平原所有天气<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 25%、牙牙湖西岸·钓鱼 Lv7–10 25%、牙牙湖东岸·钓鱼 Lv7–10 25%、美纳斯湖北岸·钓鱼 Lv7–10 25%、美纳斯湖南岸·钓鱼 Lv7–10 25%、巨人凳岩·钓鱼 Lv7–10 25%、机擎市·钓鱼 Lv13–16 25%、4号道路·钓鱼 Lv17–20 25%、5号道路·钓鱼 Lv20–23 25%、水舟镇·钓鱼 Lv21–24 30%、机擎河岸·冲浪 Lv43–46 30%、机擎河岸·钓鱼 Lv27–30 30%；铠岛：揖礼原野·钓鱼 Lv9–12 25%、专注森林·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 25%、锻炼平原·冲浪 Lv45–48 25%、离岛海域·钓鱼 Lv45–48 30%</span></td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戽斗尖梭</td>
            <td>逆鳞湖，沙尘洼地，机擎河岸所有天气，道路（2），逆鳞湖所有天气，专注森林雨雷雾，挑战海滩晴雨雷曝沙雾，锻炼平原晴雨雷曝沙雾，26级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 25%、2号道路（湖畔）·钓鱼 Lv43–46 25%、牙牙湖西岸·冲浪 Lv43–46 30%、牙牙湖东岸·冲浪 Lv43–46 30%、美纳斯湖北岸·冲浪 Lv43–46 30%、美纳斯湖南岸·冲浪 Lv43–46 30%、机擎河岸·钓鱼 Lv27–30 5%、9号道路·冲浪 Lv40–43 15%；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17、挑战海滩·定点 Lv17、离岛海域·冲浪 Lv45–48 30%、离岛海域·钓鱼 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>182</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/052-g.png"></td>
            <td>喵喵（伽勒尔的样子）</td>
            <td>４号道路所有天气<br><span class="mod3">本体：4号道路·草丛[伽勒尔] Lv17–20 15%、桥间空地·草丛 Lv27–30 10%、桥间空地·草丛[阿罗拉] Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>喵头目</td>
            <td>尖钉镇郊外所有天气，逆鳞湖雹，７号道路所有天气，巨人镜池所有天气，28级进化<br><span class="mod3">本体：巨人镜池·定点 Lv35、7号道路·草丛 Lv36–39 15%</span></td>
        </tr>
        <tr>
            <td>184</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/053.png"></td>
            <td>猫老大</td>
            <td><span class="mod3">本体：桥间空地·定点 Lv35、桥间空地·定点[阿罗拉] Lv35、9号道路（尖钉镇郊外）·草丛[阿罗拉] Lv40–43 10%</span></td>
        </tr>
        <tr>
            <td>185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/868.png"></td>
            <td>小仙奶</td>
            <td>道路（4）所有天气，桥间空地雾，巨人镜池雾<br><span class="mod3">本体：5号道路·草丛 Lv20–23 15%</span></td>
        </tr>
        <tr>
            <td>186</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/869.png"></td>
            <td>霜奶仙</td>
            <td>主角结束原地旋转（携带糖饰）<br><span class="mod3">本体：逆鳞湖·定点[三色综合][超极巨] Lv51</span></td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>４号道路所有天气，机擎河岸阴雪雹雾，桥间空地晴阴曝雾，巨人镜池雾<br><span class="mod3">本体：4号道路·草丛 Lv17–20 5%、巨石原野·草丛 Lv27–30 15%</span></td>
        </tr>
        <tr>
            <td>188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/743.png"></td>
            <td>蝶结萌虻</td>
            <td>巨石原野晴阴，机擎河岸阴雪雹沙雾，桥间空地晴阴曝雾，25级进化<br><span class="mod1">巨石原野（晴）·草丛随机遇敌 移除30%（被秃鹰丫头替换）；巨石原野（晴）·地图可见 新增15%（替换无畏小子）</span><br><span class="mod3">本体：巨石原野·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>４号道路，桥间空地所有天气，机擎河岸雹，巨石原野雹，湖畔洞窟所有天气<br><span class="mod3">本体：4号道路·草丛 Lv17–20 15%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>沙尘洼地雹，桥间空地所有天气，湖畔洞窟所有天气，40级进化<br><span class="mod3">冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/710.png"></td>
            <td>南瓜精</td>
            <td>４号道路，拳关丘陵所有天气，巨人镜池晴<br><span class="mod1">巨人镜池（晴）·地图可见 出现率1%→3%</span><br><span class="mod3">本体：机擎市郊外·草丛[小尺寸] Lv24–27 5%、机擎市郊外·草丛[特大尺寸] Lv24–27 5%</span></td>
        </tr>
        <tr>
            <td>192</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/711.png"></td>
            <td>南瓜怪人</td>
            <td>拳关丘陵所有天气，链接进化<br><span class="mod2">Lv 36 ; Lv 30 夜间</span></td>
        </tr>
        <tr>
            <td>193</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/172.png"></td>
            <td>皮丘</td>
            <td>专注森林雷，生蛋<br><span class="mod3">本体：2号道路·草丛 Lv4–7 5%、美纳斯湖北岸·草丛 Lv7–10 5%、美纳斯湖南岸·草丛 Lv7–10 5%；铠岛：专注森林·定点 Lv17、挑战海滩·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>巨石原野雨，道路（4）所有天气，巨石原野雷，煦丽草原雷，揖礼原野雷，清凉湿原雷，专注森林晴阴雨雷，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：2号道路·定点 Lv10、4号道路·草丛 Lv17–20 5%；铠岛：专注森林·定点 Lv17、挑战海滩·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>挑战海滩雷，清凉湿原雷，专注森林雷，雷之石进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 5%；铠岛：清凉湿原·定点[阿罗拉] Lv17、清凉湿原·定点 Lv17、专注森林·定点 Lv17、专注森林·定点[阿罗拉] Lv17、挑战海滩·定点 Lv17、挑战海滩·定点[阿罗拉] Lv17、离岛海域·草丛 Lv45–48 10%、离岛海域·草丛[阿罗拉] Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>４号道路所有天气，冰点雪原雹，巨人睡榻晴<br><span class="mod3">本体：2号道路·定点 Lv10、4号道路·草丛 Lv17–20 5%；冠之雪原：巨人睡榻·草丛 Lv11–14 5%、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/134.png"></td>
            <td>水伊布</td>
            <td>逆鳞湖雨，巨人睡榻雨，水之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/135.png"></td>
            <td>雷伊布</td>
            <td>逆鳞湖雷，巨人睡榻雷，雷之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/136.png"></td>
            <td>火伊布</td>
            <td>逆鳞湖曝，巨人睡榻曝，火之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/196.png"></td>
            <td>太阳伊布</td>
            <td>逆鳞湖阴，巨人睡榻雪，亲密度*220以上或友好度*158以上提升等级（白天）<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/197.png"></td>
            <td>月亮伊布</td>
            <td>逆鳞湖沙，巨人睡榻阴，亲密度*220以上或友好度*158以上提升等级（夜晚）<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/470.png"></td>
            <td>叶伊布</td>
            <td>逆鳞湖晴，巨人睡榻晴，叶之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/471.png"></td>
            <td>冰伊布</td>
            <td>逆鳞湖雪雹，巨人睡榻雹，冰之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/700.png"></td>
            <td>仙子伊布</td>
            <td>逆鳞湖雾，巨人睡榻雾，友好度50*或158*以上学会妖精属性招式时提升等级<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>５号道路所有天气，揖礼原野，清凉湿原，专注森林，圆环海湾，锻炼平原，挑战海滩，健身之海，列岛海域，离岛海域所有天气，巨石原野雷，沙尘洼地晴，巨人镜池雷，摇晃树木<br><span class="mod3">本体：煦丽草原·树果树 Lv7–10 10%、沐光森林·树果树 Lv7–10 20%、美纳斯湖北岸·树果树 Lv7–10 10%、巨人凳岩·树果树 Lv7–10 20%、4号道路·草丛 Lv17–20 15%、4号道路·树果树 Lv17–20 10%、5号道路·树果树 Lv20–23 20%、拳关丘陵·树果树 Lv27–30 40%；铠岛：清凉湿原·树果树 Lv9–12 10%、专注森林·树果树 Lv9–12 40%</span></td>
        </tr>
        <tr>
            <td>206</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/841.png"></td>
            <td>苹裹龙</td>
            <td>列岛海域所有天气，使用酸酸苹果<br><span class="mod2">夜间亲密度升级</span><br><span class="mod3">本体：5号道路·树果树 Lv20–23 10%、拳关丘陵·树果树 Lv27–30 10%、7号道路·树果树 Lv36–39 10%、9号道路（战竞湾）·树果树 Lv40–43 10%、牙牙湖之眼·草丛 Lv43–46 10%、牙牙湖之眼·树果树 Lv43–46 10%、牙牙湖之眼·定点[超极巨] Lv51、逆鳞湖·树果树 Lv43–46 20%；铠岛：专注森林·树果树 Lv9–12 10%、离岛海域·树果树 Lv45–48 20%、蜂巢岛·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>207</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/842.png"></td>
            <td>丰蜜龙</td>
            <td>列岛海域所有天气，使用甜甜苹果<br><span class="mod2">夜间亲密度升级</span><br><span class="mod3">本体：5号道路·树果树 Lv20–23 10%、拳关丘陵·树果树 Lv27–30 10%、7号道路·树果树 Lv36–39 10%、9号道路（战竞湾）·树果树 Lv40–43 10%、牙牙湖之眼·草丛 Lv43–46 10%、牙牙湖之眼·树果树 Lv43–46 10%、牙牙湖之眼·定点[超极巨] Lv51、逆鳞湖·树果树 Lv43–46 20%；铠岛：专注森林·树果树 Lv9–12 10%、离岛海域·树果树 Lv45–48 20%、蜂巢岛·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/677.png"></td>
            <td>妙喵</td>
            <td>５号道路所有天气，机擎河岸雾，拳关丘陵晴阴雷曝雪雹雾<br><span class="mod1">5号道路·草丛随机遇敌 移除20%（被粉香香替换）</span><br><span class="mod3">本体：5号道路·草丛 Lv20–23 5%</span></td>
        </tr>
        <tr>
            <td>209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/678.png"></td>
            <td>超能妙喵</td>
            <td>７号道路所有天气，沙尘洼地雾，25级进化</td>
        </tr>
        <tr>
            <td>210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/684.png"></td>
            <td>绵绵泡芙</td>
            <td>剑：５号道路所有天气，巨人镜池雾<br><span class="mod1">迷光森林·草丛随机遇敌 移除10%（被小火马（伽勒尔）替换）；迷光森林·地图可见 移除10%（被小火马（伽勒尔）替换）</span><br><span class="mod3">本体：5号道路·草丛 Lv20–23 10%</span></td>
        </tr>
        <tr>
            <td>211</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/685.png"></td>
            <td>胖甜妮</td>
            <td>携带泡沫奶油连接交换<br><span class="mod2">泡沫奶油 ; 亲密度升级</span></td>
        </tr>
        <tr>
            <td>212</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/682.png"></td>
            <td>粉香香</td>
            <td>盾：５号道路所有天气巨人镜池雾<br><span class="mod1">5号道路·草丛随机遇敌 新增20%（替换妙喵）；5号道路·地图可见 新增10%（替换果然翁）</span><br><span class="mod3">本体：5号道路·草丛 Lv20–23 10%</span></td>
        </tr>
        <tr>
            <td>213</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/683.png"></td>
            <td>芳香精</td>
            <td>携带香袋连接交换<br><span class="mod2">香囊 ; 亲密度升级</span></td>
        </tr>
        <tr>
            <td>214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>５号道路所有天气，机擎河岸雨，巨石原野雨雷，巨人睡榻雨雷，远古墓地雨雷，巨人鞋底雨雷，冻海雨雷，三岔平原雨雷，球湖湖畔雨雷肝帝威的游戏笔记<br><span class="mod3">本体：煦丽草原·定点 Lv15、美纳斯湖北岸·草丛 Lv7–10 15%、5号道路·钓鱼 Lv20–23 25%、巨石原野·草丛 Lv27–30 15%；冠之雪原：巨人睡榻·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>逆鳞湖雨，巨石原野雨雷，巨人睡榻雨雷，远古墓地雨雷，巨人鞋底雨雷，冻海雨雷，三岔平原雨雷，球湖湖畔雨雷，22级进化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15、巨石原野·定点 Lv35、9号道路（战竞湾）·草丛 Lv40–43 15%；冠之雪原：巨人睡榻·定点 Lv19、巨人鞋底·定点 Lv19、冻海·草丛 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>216</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/360.png"></td>
            <td>小果然</td>
            <td>果然翁携带悠闲薰香生蛋<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 5%</span></td>
        </tr>
        <tr>
            <td>217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>５号道路所有天气，机擎河岸雾，桥间空地晴曝，沙尘洼地雾，巨人镜池雾，拳关丘陵晴阴雨雷曝雪雹沙，逆鳞湖雾，15级进化<br><span class="mod1">5号道路·地图可见 移除10%（被粉香香替换）；沙尘洼地（雾）·地图可见 移除55%（被勾魂眼替换）；拳关丘陵（曝）·地图可见 移除5%（被幼基拉斯替换）</span></td>
        </tr>
        <tr>
            <td>218</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/083-g.png"></td>
            <td>大葱鸭（伽勒尔的样子）</td>
            <td>５号道路所有天气，巨人镜池阴<br><span class="mod1">巨人镜池（阴）·地图可见 出现率5%→8%</span><br><span class="mod3">本体：5号道路·草丛[伽勒尔] Lv20–23 15%、桥间空地·草丛[伽勒尔] Lv27–30 15%、桥间空地·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>219</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/865.png"></td>
            <td>葱游兵</td>
            <td>对战中击中要害3次或以上结束对战<br><span class="mod3">本体：桥间空地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>水舟镇，巨人镜池所有天气，牙牙湖东岸雷，牙牙湖西岸雷，健身之海雷，列岛海域雷，离岛海域雷，蜂巢海雷，蜂巢岛雷<br><span class="mod3">本体：美纳斯湖南岸·钓鱼 Lv7–10 25%、机擎市·钓鱼 Lv13–16 15%、水舟镇·钓鱼 Lv21–24 15%、沙尘洼地·冲浪 Lv43–46 5%、巨人镜池·冲浪 Lv43–46 5%；铠岛：战斗洞窟·冲浪 Lv45–48 25%、圆环海湾·钓鱼 Lv9–12 15%、离岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>桥间空地，沙尘洼地，逆鳞湖所有天气，美纳斯湖南岸雷，牙牙湖东岸晴雷雾，牙牙湖西岸雷，桥间空地雷，逆鳞湖晴雷梦世界冰洞，浅滩洞穴，健身之海雷，列岛海域雷，离岛海域雷，蜂巢海雷，蜂巢岛雷，挑战海滩雷雾，圆环海湾雷，27级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 25%、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、9号道路·冲浪 Lv40–43 25%、逆鳞湖·定点 Lv51、微寐森林·钓鱼 Lv57–60 25%；铠岛：挑战海滩·定点 Lv17、圆环海湾·冲浪 Lv45–48 15%、圆环海湾·定点 Lv17、离岛海域·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>盾：机擎市郊外，第二矿山所有天气，第二矿山所有天气，桥间空地阴沙，巨石原野阴，巨人镜池晴阴，巨人镜池晴阴，巨人帽岩晴阴清凉湿原阴，专注森林阴，清凉湿原阴<br><span class="mod1">机擎市郊外·草丛随机遇敌 新增10%（替换咬咬龟）；机擎市郊外·地图可见 新增15%</span><br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、第二矿山·草丛 Lv23–26 10%；铠岛：清凉湿原·草丛 Lv9–12 15%、挑战之路·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>223</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>盾：挑战之路雨雷，锻炼平原雨雷，巨石原野阴，37级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、巨石原野·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%</span></td>
        </tr>
        <tr>
            <td>224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>剑：机擎市郊外，第二矿山所有天气，第二矿山所有天气，桥间空地阴沙，巨石原野阴，巨人镜池晴阴，巨人镜池晴阴，巨人帽岩晴阴清凉湿原阴，专注森林阴，清凉湿原阴<br><span class="mod1">沙尘洼地（晴）·地图可见 移除15%（被勾魂眼替换）</span><br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 5%、第二矿山·草丛 Lv23–26 10%；铠岛：清凉湿原·草丛 Lv9–12 15%、挑战之路·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>225</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>剑：挑战之路雨雷，锻炼平原雨雷，巨石原野阴，39级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、巨石原野·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%</span></td>
        </tr>
        <tr>
            <td>226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618-g.png"></td>
            <td>泥巴鱼（伽勒尔的样子）</td>
            <td>微寐森林，第二矿山所有天气，沙尘洼地曝，逆鳞湖沙<br><span class="mod3">本体：第二矿山·钓鱼 Lv23–26 5%、第二矿山·定点[伽勒尔] Lv31、沙尘洼地·钓鱼 Lv27–30 15%、6号道路·钓鱼 Lv29–32 15%、10号道路·草丛[伽勒尔] Lv50–53 5%、微寐森林·定点[伽勒尔] Lv65</span></td>
        </tr>
        <tr>
            <td>227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>第二矿山所有天气，瞭望塔旧址曝沙，沙尘洼地沙，巨人帽岩沙，巨人镜池沙，沙尘洼地所有天气，球湖湖畔晴曝<br><span class="mod3">本体：第二矿山·草丛 Lv23–26 15%、巨石原野·草丛 Lv27–30 10%；冠之雪原：巨人睡榻·草丛 Lv11–14 5%、球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>228</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/339.png"></td>
            <td>泥泥鳅</td>
            <td>大部分地区垂钓或者冲浪可遇到<br><span class="mod3">本体：牙牙湖西岸·钓鱼 Lv7–10 15%、巨人凳岩·钓鱼 Lv7–10 25%、4号道路·钓鱼 Lv17–20 25%、第二矿山·钓鱼 Lv23–26 30%、沙尘洼地·冲浪 Lv43–46 25%、沙尘洼地·钓鱼 Lv27–30 30%、巨人镜池·冲浪 Lv43–46 25%；铠岛：清凉湿原·钓鱼 Lv9–12 25%、战斗洞窟·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 25%、斗志洞窟·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 15%；冠之雪原：巨人鞋底·冲浪 Lv47–50 30%、巨人鞋底·钓鱼 Lv11–14 30%、海鸣洞窟·冲浪 Lv47–50 30%</span></td>
        </tr>
        <tr>
            <td>229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>微寐森林所有天气，美纳斯湖北岸晴阴雷曝沙，美纳斯湖南岸晴雷曝沙，斗志洞窟，战斗洞窟，巨人睡榻所有天气，专注森林晴阴曝沙，30级进化<br><span class="mod3">本体：牙牙湖西岸·冲浪 Lv43–46 25%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、沙尘洼地·钓鱼 Lv27–30 5%；铠岛：战斗洞窟·定点 Lv17、专注森林·定点 Lv17、斗志洞窟·定点 Lv17、列岛海域·冲浪 Lv45–48 25%；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>第二矿山所有天气，机擎河岸雷，桥间空地雨雷，巨石原野雨，巨人镜池雨，巨人帽岩雨雷<br><span class="mod3">本体：牙牙湖西岸·草丛[西海] Lv7–10 15%、牙牙湖东岸·草丛[东海] Lv7–10 15%、伽勒尔矿山·草丛[西海] Lv16–19 5%、第二矿山·草丛[东海] Lv23–26 5%、沙尘洼地·冲浪[东海] Lv43–46 30%、巨人镜池·冲浪[东海] Lv43–46 30%</span></td>
        </tr>
        <tr>
            <td>231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>战竞湾所有天气，９号道路所有天气，沙尘洼地，巨人镜池，第二矿山所有天气，30级进化<br><span class="mod3">本体：牙牙湖西岸·定点[西海] Lv15、牙牙湖东岸·定点[东海] Lv15、第二矿山·定点[东海] Lv31、沙尘洼地·定点[东海] Lv35、巨人镜池·定点[东海] Lv35</span></td>
        </tr>
        <tr>
            <td>232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>第二矿山所有天气，机擎河岸雨，巨人镜池雨，拳关丘陵雷，斗志洞窟晴雨雷曝沙雾<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 15%、第二矿山·草丛 Lv23–26 15%；铠岛：挑战海滩·沙滩 Lv9–12 20%、斗志洞窟·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>逆鳞湖雨，巨人帽岩雨，桥间空地晴雨雷，斗志洞窟所有天气，挑战海滩雨，30级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、9号道路（战竞湾）·草丛 Lv40–43 10%；铠岛：挑战海滩·定点 Lv17、斗志洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>234</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/688.png"></td>
            <td>龟脚脚</td>
            <td>第二矿山所有天气，机擎河岸雨，桥间空地雨雷<br><span class="mod3">本体：巨人凳岩·钓鱼 Lv7–10 15%、第二矿山·草丛 Lv23–26 15%、沙尘洼地·钓鱼 Lv27–30 25%</span></td>
        </tr>
        <tr>
            <td>235</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/689.png"></td>
            <td>龟足巨铠</td>
            <td>沙尘洼地雨，逆鳞湖雨，战竞湾所有天气，沙尘洼地阴雨雷，39级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35、9号道路（战竞湾）·草丛 Lv40–43 10%</span></td>
        </tr>
        <tr>
            <td>236</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/222-g.png"></td>
            <td>太阳珊瑚（伽勒尔的样子）</td>
            <td>盾：巨人镜池阴<br><span class="mod1">巨人镜池（晴）·草丛随机遇敌 新增20%（替换天罩虫）；巨人镜池（晴）·草丛随机遇敌 出现率20%→24%；巨人镜池（晴）·地图可见 新增10%（替换咕咕鸽）；巨人镜池（阴）·地图可见 新增35%（替换咕咕鸽）</span><br><span class="mod3">本体：美纳斯湖南岸·钓鱼 Lv7–10 15%、巨人凳岩·钓鱼 Lv7–10 5%、第二矿山·钓鱼[伽勒尔] Lv23–26 25%、机擎河岸·钓鱼 Lv27–30 15%、沙尘洼地·钓鱼 Lv27–30 25%、巨人镜池·草丛[伽勒尔] Lv27–30 5%、巨人镜池·钓鱼[伽勒尔] Lv27–30 25%、6号道路·钓鱼 Lv29–32 25%、6号道路·钓鱼[伽勒尔] Lv29–32 25%、9号道路（战竞湾）·钓鱼 Lv40–43 25%、牙牙湖之眼·钓鱼 Lv43–46 15%</span></td>
        </tr>
        <tr>
            <td>237</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/864.png"></td>
            <td>魔灵珊瑚</td>
            <td>38级进化<br><span class="mod3">本体：巨人镜池·定点 Lv35、微寐森林·钓鱼 Lv57–60 5%</span></td>
        </tr>
        <tr>
            <td>238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>机擎市郊外所有天气，巨石原野晴阴雨雷曝雪雹雾，巨人镜池雾，拳关丘陵雾，迷光森林所有天气<br><span class="mod1">巨石原野（曝）·草丛随机遇敌 移除20%（被秃鹰丫头替换）</span><br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 15%、巨人镜池·草丛 Lv27–30 15%、迷光森林·定点 Lv40、微寐森林·定点 Lv65；冠之雪原：远古墓地·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>迷光森林所有天气，巨人睡榻雾，雪中溪谷雾，巨人鞋底雾，32 级进化<br><span class="mod3">本体：迷光森林·定点 Lv40；冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>逆鳞湖阴，巨石原野所有天气，巨人睡榻雾，雪中溪谷雾，起橇雪原雾，42级进化<br><span class="mod3">本体：巨石原野·定点[超极巨] Lv35、巨人镜池·定点[超极巨] Lv35、微寐森林·草丛 Lv57–60 10%</span></td>
        </tr>
        <tr>
            <td>241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>拳关丘陵雾，机擎市郊外所有天气，巨石原野雾起橇雪原雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 15%、巨人镜池·草丛 Lv27–30 15%、微寐森林·定点 Lv65；冠之雪原：远古墓地·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>迷光森林所有天气，沙尘洼地晴阴雨雹沙雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾，起橇雪原雾，32 级进化<br><span class="mod3">本体：迷光森林·草丛 Lv32–35 15%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>逆鳞湖雾，逆鳞湖所有天气，冰点雪原雾，巨人睡榻雾，冻海雾，球湖湖畔雾，42级进化<br><span class="mod3">本体：巨人镜池·定点[超极巨] Lv35、逆鳞湖·定点[超极巨] Lv51、微寐森林·草丛 Lv57–60 10%</span></td>
        </tr>
        <tr>
            <td>244</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/757.png"></td>
            <td>夜盗火蜥</td>
            <td>巨石原野曝，挑战之路所有天气<br><span class="mod3">本体：3号道路·草丛 Lv15–18 15%、巨石原野·草丛 Lv27–30 5%；铠岛：热身洞穴·草丛 Lv9–12 15%、锅底沙漠·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>245</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/758.png"></td>
            <td>焰后蜥</td>
            <td>挑战之路曝，等级33以上（雌性）<br><span class="mod3">铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>机擎市郊外所有天气，机擎河岸雹，巨石原野雹，巨人帽岩雹，８号道路所有天气，机擎河岸雹，巨人镜池雹<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、第二矿山·草丛 Lv23–26 5%；铠岛：清凉湿原·草丛 Lv9–12 15%、清凉湿原·定点 Lv17、挑战之路·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>逆鳞湖雹，巨人凳岩所有天气，挑战之路阴，锻炼平原阴，52级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%；铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>盾：泉烟小路，机擎市郊外所有天气，桥间空地阴，机擎河岸阴，巨人镜池阴<br><span class="mod3">本体：桥间空地·草丛 Lv27–30 5%、8号道路（泉烟小路）·草丛 Lv37–40 5%</span></td>
        </tr>
        <tr>
            <td>249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>剑：泉烟小路，机擎市郊外所有天气，桥间空地阴，机擎河岸阴，巨人镜池阴<br><span class="mod3">本体：桥间空地·草丛 Lv27–30 5%、8号道路（泉烟小路）·草丛 Lv37–40 5%</span></td>
        </tr>
        <tr>
            <td>250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>机擎市郊外所有天气，机擎河岸阴，沙尘洼地晴雨，巨人镜池晴雨<br><span class="mod1">巨人镜池（阴）·草丛随机遇敌 出现率30%→25%</span><br><span class="mod3">本体：3号道路·草丛 Lv15–18 5%、巨石原野·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯（伽勒尔的样子）</td>
            <td>机擎市郊外所有天气，机擎河岸阴，沙尘洼地晴雨，巨人镜池晴雨，牙牙湖东岸所有天气，35级进化<br><span class="mod3">本体：牙牙湖东岸·定点[伽勒尔] Lv15、微寐森林·草丛[伽勒尔] Lv57–60 15%</span></td>
        </tr>
        <tr>
            <td>252</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/438.png"></td>
            <td>盆才怪</td>
            <td>桥间空地沙，巨石原野沙，携带岩石薰香生蛋<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 10%、机擎市郊外·草丛 Lv24–27 15%、巨石原野·草丛 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>桥间空地沙，沙尘洼地沙，机擎市郊外所有天气，机擎河岸沙，拳关丘陵晴雷曝沙，沙尘洼地晴阴曝雹沙雾，学会模仿时提升等级进化<br><span class="mod1">机擎市郊外·地图可见 出现率30%→25%；拳关丘陵（晴）·地图可见 新增29%（替换童偶熊）；拳关丘陵（晴）·地图可见 移除10%（被幼基拉斯替换）</span><br><span class="mod3">本体：巨人凳岩·定点 Lv15、沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>254</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/173.png"></td>
            <td>皮宝宝</td>
            <td>生蛋<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 15%；冠之雪原：登顶隧道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>机擎河岸雾，巨人帽岩雾，登顶隧道所有天气，巨人睡榻雾，雪中溪谷雾，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、登顶隧道·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>256</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>登顶隧道所有天气，巨人睡榻雾，雪中溪谷雾，月之石进化<br><span class="mod3">本体：巨人镜池·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>257</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/175.png"></td>
            <td>波克比</td>
            <td>桥间空地晴阴雾<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 15%</span></td>
        </tr>
        <tr>
            <td>258</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/176.png"></td>
            <td>波克基古</td>
            <td>巨石原野雾，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：桥间空地·空中 Lv27–30 10%、巨人镜池·空中 Lv27–30 20%</span></td>
        </tr>
        <tr>
            <td>259</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/468.png"></td>
            <td>波克基斯</td>
            <td>沙尘洼地雾，光之石进化<br><span class="mod3">本体：桥间空地·定点 Lv35、巨人镜池·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>260</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/446.png"></td>
            <td>小卡比兽</td>
            <td>机擎河岸晴，球湖湖畔晴阴雨雷曝雪雾，携带饱腹薰香生蛋<br><span class="mod3">本体：煦丽草原·树果树 Lv7–10 10%、巨人凳岩·树果树 Lv7–10 20%、机擎河岸·树果树 Lv27–30 10%、桥间空地·树果树 Lv27–30 20%、巨人帽岩·树果树 Lv27–30 20%；冠之雪原：起橇雪原·树果树 Lv11–14 20%、冰点雪原·草丛 Lv11–14 5%、冰点雪原·树果树 Lv11–14 10%、巨人鞋底·树果树 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>261</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>机擎河岸晴阴雨雷曝雪雹沙，起橇雪原晴曝，冰点雪原晴阴曝，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：巨人凳岩·定点[超极巨] Lv15、机擎河岸·定点[超极巨] Lv35、桥间空地·定点[超极巨] Lv35；冠之雪原：起橇雪原·定点[超极巨] Lv19、冰点雪原·定点[超极巨] Lv19、巨人睡榻·定点[超极巨] Lv19</span></td>
        </tr>
        <tr>
            <td>262</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/546.png"></td>
            <td>木棉球</td>
            <td>巨石原野阴，球湖湖畔晴雨，<br><span class="mod1">巨石原野（阴）·草丛随机遇敌 移除40%（被秃鹰丫头替换）</span><br><span class="mod3">本体：沐光森林·树果树 Lv7–10 20%、美纳斯湖北岸·树果树 Lv7–10 10%、4号道路·树果树 Lv17–20 20%、5号道路·草丛 Lv20–23 15%、5号道路·树果树 Lv20–23 40%、机擎河岸·树果树 Lv27–30 20%、巨人镜池·树果树 Lv27–30 40%；冠之雪原：冰点雪原·树果树 Lv11–14 20%</span></td>
        </tr>
        <tr>
            <td>263</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/547.png"></td>
            <td>风妖精</td>
            <td>球湖湖畔晴雨，日之石进化<br><span class="mod3">本体：机擎河岸·定点 Lv35、9号道路（尖钉镇郊外）·树果树 Lv40–43 20%；冠之雪原：球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·树果树 Lv47–50 40%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>８号道路所有天气，机擎河岸曝沙，桥间空地沙，巨石原野沙，巨人帽岩所有天气，巨人镜池沙，锅底沙漠晴阴雨曝沙雾<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 5%；铠岛：战斗洞窟·草丛 Lv9–12 5%、热身洞穴·草丛 Lv9–12 5%、锅底沙漠·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀兽</td>
            <td>１０号道路所有天气，沙尘洼地曝，逆鳞湖曝，巨石原野所有天气机擎河岸曝沙，巨人凳岩晴，沙尘洼地雨雷雪，桥间空地曝沙，逆鳞湖沙，锅底沙漠晴曝沙，42级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、沙尘洼地·定点 Lv35、8号道路·草丛 Lv37–40 15%；铠岛：锅底沙漠·定点 Lv17、列岛海域·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>266</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/464.png"></td>
            <td>超甲狂犀</td>
            <td>锅底沙漠晴曝沙雾，携带护具连接交换<br><span class="mod2">护具 ; Lv 60</span><br><span class="mod3">铠岛：锅底沙漠·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>267</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>剑：巨人帽岩雾，起橇雪原雾，冰点雪原雾<br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 5%、5号道路·草丛 Lv20–23 5%；冠之雪原：通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>哥德小童</td>
            <td>剑：巨人帽岩雾，巨人镜池雾，沙尘洼地雾，起橇雪原雾，冰点雪原雾，32级进化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>269</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>剑：逆鳞湖雾，起橇雪原雾，冰点雪原雾，41级进化<br><span class="mod3">本体：微寐森林·草丛 Lv57–60 5%</span></td>
        </tr>
        <tr>
            <td>270</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>盾：巨人帽岩雾，起橇雪原雾，冰点雪原雾<br><span class="mod1">巨人帽岩（晴）·草丛随机遇敌 新增40%（替换长鼻叶）；巨人帽岩（雾）·草丛随机遇敌 新增20%（替换夜巡灵）；巨人帽岩（晴）·地图可见 新增35%（替换直冲熊（伽勒尔））；巨人帽岩（雾）·地图可见 新增10%（替换猫头夜鹰）</span><br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 5%、5号道路·草丛 Lv20–23 5%；冠之雪原：通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>盾：巨人帽岩雾，巨人镜池雾，沙尘洼地雾，起橇雪原雾，冰点雪原雾，32级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>272</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>盾：逆鳞湖雾，起橇雪原雾，冰点雪原雾，41级进化<br><span class="mod3">本体：微寐森林·草丛 Lv57–60 5%</span></td>
        </tr>
        <tr>
            <td>273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，专注森林，远古墓地所有天气，锻炼平原阴<br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 5%；铠岛：锻炼平原·草丛 Lv9–12 10%、锻炼平原·定点 Lv17；冠之雪原：巨人睡榻·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>274</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>专注森林沙，锻炼平原沙，与小嘴蜗连接交换进化<br><span class="mod2">队伍中有小嘴蜗 or 敏捷虫 升级</span><br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，清凉湿原，巨人睡榻所有天气，锻炼平原雨<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 5%；铠岛：锻炼平原·草丛 Lv9–12 10%、锻炼平原·定点 Lv17；冠之雪原：巨人睡榻·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>276</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>专注森林雨，锻炼平原雷，与盖盖虫连接交换进化<br><span class="mod2">队伍中有 盖盖虫 or 骑士蜗牛 升级</span><br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>277</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/605.png"></td>
            <td>小灰怪</td>
            <td>机擎河岸雾，桥间空地雾，桥间空地晴阴雾肝帝威的游戏笔记<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>278</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/606.png"></td>
            <td>大宇怪</td>
            <td>逆鳞湖晴，桥间空地晴阴雪雹雾，42级进化</td>
        </tr>
        <tr>
            <td>279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>桥间空地雹，巨石原野雪雹，巨人镜池雪雹，１０号道路所有天气，桥间空地雪雹，沙尘洼地雪雹，拳关丘陵雪<br><span class="mod1">10号道路·地图可见 移除20%（被冰砌鹅替换）</span><br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>280</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冻原熊</td>
            <td>１０号道路所有天气，桥间空地雪，巨人帽岩雪，37级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、10号道路·草丛 Lv50–53 10%；冠之雪原：雪中溪谷·定点 Lv19、冻海·草丛 Lv47–50 5%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>剑：桥间空地沙，８号道路，巨石原野所有天气，锅底沙漠晴阴雨曝沙雾<br><span class="mod3">本体：巨石原野·空中 Lv27–30 30%、沙尘洼地·空中 Lv27–30 30%；铠岛：挑战之路·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>剑：沙尘洼地所有天气，逆鳞湖晴，挑战之路阴，锅底沙漠晴阴雨曝沙雾，54级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、沙尘洼地·空中 Lv27–30 10%；铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>盾：桥间空地沙，８号道路，巨石原野所有天气，锅底沙漠晴阴雨曝沙雾<br><span class="mod1">巨石原野（晴）·草丛随机遇敌 新增30%（替换蝶结萌虻）；巨石原野（阴）·草丛随机遇敌 新增40%（替换木棉球）；巨石原野（曝）·草丛随机遇敌 新增20%（替换捣蛋小妖）；巨石原野（沙）·草丛随机遇敌 新增30%（替换螺钉地鼠）；巨石原野（晴）·地图可见 新增35%（替换蛇纹熊（伽勒尔））；巨石原野（阴）·地图可见 新增10%（替换天秤偶）；巨石原野（曝）·地图可见 新增30%（替换蛇纹熊（伽勒尔））；巨石原野（沙）·地图可见 新增30%（替换蛇纹熊（伽勒尔））</span><br><span class="mod3">本体：巨石原野·空中 Lv27–30 30%、沙尘洼地·空中 Lv27–30 30%；铠岛：挑战之路·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>盾：沙尘洼地所有天气，逆鳞湖晴，挑战之路阴，锅底沙漠晴阴雨曝沙雾，54级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、沙尘洼地·空中 Lv27–30 10%；铠岛：锅底沙漠·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>６号道路所有天气，机擎河岸阴，巨人镜池晴阴雨雷曝，清凉湿原所有天气<br><span class="mod1">巨人镜池（阴）·草丛随机遇敌 出现率30%→25%</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 5%、3号道路·草丛 Lv15–18 15%、巨石原野·草丛 Lv27–30 15%；铠岛：清凉湿原·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>８号道路所有天气，逆鳞湖阴，桥间空地阴，机擎河岸晴雨雷曝，清凉湿原晴阴雨沙，挑战海滩阴雨，锻炼平原阴曝，40级进化<br><span class="mod3">本体：9号道路（尖钉镇郊外）·草丛 Lv40–43 5%；铠岛：清凉湿原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>287</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/607.png"></td>
            <td>烛光灵</td>
            <td>机擎河岸曝，桥间空地曝雾<br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 5%、机擎竞技场·定点 Lv30；冠之雪原：远古墓地·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>288</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>逆鳞湖曝，巨人睡榻阴雾，远古墓地阴雾，41级进化<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15；冠之雪原：巨人鞋底·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>289</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/609.png"></td>
            <td>水晶灯火灵</td>
            <td>逆鳞湖曝，巨人睡榻阴雾，暗之石进化<br><span class="mod3">冠之雪原：三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>战竞湾所有天气，桥间空地晴雨雷曝雪雹沙，拳关丘陵晴阴雨曝雪雹雾，道路（7），桥间空地所有天气，沙尘洼地雪，巨人镜池雪，揖礼原野阴，挑战海滩阴，圆环海湾阴，锻炼平原阴<br><span class="mod1">拳关丘陵（晴）·草丛随机遇敌 移除25%（被幼基拉斯替换）；拳关丘陵（阴）·草丛随机遇敌 移除35%（被幼基拉斯替换）；拳关丘陵（曝）·草丛随机遇敌 移除15%（被幼基拉斯替换）</span><br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 15%、美纳斯湖南岸·草丛 Lv7–10 15%；铠岛：清凉湿原·草丛 Lv9–12 5%、圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>揖礼原野阴雨，清凉湿原阴雨，挑战海滩阴雨，圆环海湾阴雨，锻炼平原阴雨，30级进化<br><span class="mod2">Lv 30</span><br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、7号道路·草丛 Lv36–39 5%；铠岛：圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>１０号道路，泉烟小路所有天气，机擎河岸雪雹，桥间空地雪雹，巨石原野雪雹，沙尘洼地雪，拳关丘陵雪雹，巨人帽岩雪雹,巨人镜池雪，起橇雪原阴，冰点雪原阴，雪中溪谷阴，冻海阴<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%；冠之雪原：冰点雪原·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>桥间空地雹，起橇雪原阴，冰点雪原阴，雪中溪谷阴，觉携带锐利之爪提升等级（夜晚）<br><span class="mod3">本体：桥间空地·定点 Lv35、巨人帽岩·定点 Lv35、8号道路（泉烟小路）·草丛 Lv37–40 15%、10号道路·草丛 Lv50–53 10%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、冻海·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>294</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>盾：沙尘洼地雾，巨人镜池雾，湖畔洞窟所有天气<br><span class="mod1">沙尘洼地（晴）·草丛随机遇敌 新增30%（替换毛毛角羊）；沙尘洼地（雾）·草丛随机遇敌 新增20%（替换白蓬蓬）；沙尘洼地（晴）·地图可见 新增15%（替换滑滑小子）；沙尘洼地（雾）·地图可见 新增55%（替换果然翁）</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 5%；冠之雪原：远古墓地·草丛 Lv11–14 10%、湖畔洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>295</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>剑：沙尘洼地雾，巨人镜池雾，湖畔洞窟所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%、巨人凳岩·定点 Lv15；冠之雪原：远古墓地·草丛 Lv11–14 10%、湖畔洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>６号道路所有天气，桥间空地曝，巨石原野曝，拳关丘陵曝<br><span class="mod3">本体：机擎河岸·草丛 Lv27–30 5%、6号道路·草丛 Lv29–32 5%</span></td>
        </tr>
        <tr>
            <td>297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>机擎河岸所有天气，巨石原野所有天气，逆鳞湖晴，沙尘洼地阴雨雷曝雪雹雾<br><span class="mod3">本体：巨石原野·空中 Lv27–30 20%、沙尘洼地·空中 Lv27–30 20%、沙尘洼地·定点 Lv35、巨人镜池·空中 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>298</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/447.png"></td>
            <td>利欧路</td>
            <td>巨人帽岩雹，海鸣洞窟所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%、桥间空地·草丛 Lv27–30 15%；冠之雪原：冰点雪原·草丛 Lv11–14 5%、海鸣洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>299</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>美纳斯湖北岸晴，海鸣洞窟所有天气，亲密度*220以上或友好度*158以上提升等级（白天）<br><span class="mod3">本体：巨人凳岩·定点 Lv15、桥间空地·定点 Lv35；冠之雪原：冰点雪原·定点 Lv19、海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>６号道路所有天气，巨人镜池曝，机擎河岸曝，巨人帽岩曝，热身洞穴所有天气，锅底沙漠晴阴雨曝沙雾<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 5%、6号道路·草丛 Lv29–32 5%；铠岛：热身洞穴·草丛 Lv9–12 5%、锅底沙漠·草丛 Lv9–12 5%、锅底沙漠·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟丘</td>
            <td>巨人镜池雾，桥间空地雾，起橇雪原雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，雪中溪谷雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 5%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、远古墓地·草丛 Lv11–14 5%、远古墓地·定点 Lv19、雪中溪谷·定点 Lv19、巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>302</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/878.png"></td>
            <td>铜象</td>
            <td>桥间空地晴阴曝雹，巨人鞋底所有天气<br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>逆鳞湖雹，拳关丘陵所有天气，巨人鞋底所有天气，34级进化<br><span class="mod3">本体：拳关丘陵·定点[超极巨] Lv35；冠之雪原：雪中溪谷·定点[超极巨] Lv19</span></td>
        </tr>
        <tr>
            <td>304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>沙尘洼地，逆鳞湖所有天气，９号道路，桥间空地所有天气<br><span class="mod3">本体：美纳斯湖北岸·钓鱼 Lv7–10 15%、机擎市·钓鱼 Lv13–16 5%、桥间空地·冲浪 Lv43–46 25%、桥间空地·钓鱼 Lv27–30 15%、9号道路（战竞湾）·钓鱼 Lv40–43 25%、牙牙湖之眼·钓鱼 Lv43–46 30%</span></td>
        </tr>
        <tr>
            <td>305</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/592.png"></td>
            <td>轻飘飘</td>
            <td>美纳斯湖北岸所有天气，牙牙湖东岸晴阴雨曝雪沙雾，牙牙湖西岸晴阴雨曝雪雹沙雾，桥间空地雷，沙尘洼地晴阴雨雷曝雹沙雾，巨人镜池晴阴雨雷曝雹沙雾，列岛海域所有天气<br><span class="mod3">本体：沙尘洼地·冲浪 Lv43–46 15%、巨人镜池·冲浪 Lv43–46 15%、巨人镜池·钓鱼 Lv27–30 25%、6号道路·钓鱼 Lv29–32 30%；铠岛：挑战海滩·冲浪（河流） Lv45–48 15%、挑战海滩·钓鱼 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>逆鳞湖雷，９号道路所有天气，尖钉镇郊外阴雨雷曝雪雹沙雾，美纳斯湖南岸雨雾，美纳斯湖北岸晴阴雨雷雾，牙牙湖东岸晴阴雨雷雾，牙牙湖西岸阴雨雾，桥间空地雨雾，逆鳞湖晴阴雨雷曝，列岛海域阴雾，健身之海阴雾，离岛海域阴雾，蜂巢海阴雾，蜂巢岛阴雾，挑战海滩阴雨雾，圆环海湾阴雾，40级进化<br><span class="mod3">本体：牙牙湖西岸·冲浪 Lv43–46 15%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、6号道路·钓鱼 Lv29–32 5%、9号道路（战竞湾）·冲浪 Lv40–43 15%、逆鳞湖·定点 Lv51、微寐森林·钓鱼 Lv57–60 25%；铠岛：挑战海滩·冲浪 Lv45–48 25%、挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、列岛海域·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>机擎河岸，巨人镜池所有天气，道路（9），尖钉镇郊外所有天气，圆环海湾所有天气<br><span class="mod3">本体：第二矿山·钓鱼 Lv23–26 25%、机擎河岸·草丛 Lv27–30 15%；铠岛：揖礼原野·沙滩 Lv9–12 10%、圆环海湾·沙滩 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>战竞湾所有天气，尖钉镇郊外晴，揖礼原野晴阴雾，挑战海滩阴雨雷雾，圆环海湾阴雨雾，38级进化<br><span class="mod3">本体：机擎河岸·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 5%；铠岛：揖礼原野·定点 Lv17、圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>９号道路所有天气，逆鳞湖雨，巨石原野雨，桥间空地雨，牙牙湖之眼所有天气，锻炼平原所有天气，专注森林所有天气，挑战海滩晴阴雨曝沙雾<br><span class="mod3">本体：牙牙湖东岸·空中 Lv7–10 10%、美纳斯湖南岸·空中 Lv7–10 10%、机擎河岸·草丛 Lv27–30 15%、9号道路·草丛 Lv40–43 15%、牙牙湖之眼·定点 Lv51；铠岛：挑战海滩·草丛 Lv9–12 5%、挑战海滩·冲浪（河流） Lv45–48 5%、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>电音婴</td>
            <td>道路（7）所有天气，巨石原野雷，巨人帽岩雷，拳关丘陵雷，机擎河岸雷，桥间空地晴雨雷<br><span class="mod3">本体：机擎河岸·草丛 Lv27–30 15%</span></td>
        </tr>
        <tr>
            <td>311</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/849.png"></td>
            <td>颤弦蝾螈</td>
            <td>30级进化<br><span class="mod3">本体：机擎河岸·定点[高调][超极巨] Lv35、机擎河岸·定点[低调][超极巨] Lv35、7号道路·草丛[高调] Lv36–39 5%、7号道路·草丛[低调] Lv36–39 5%</span></td>
        </tr>
        <tr>
            <td>312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>东第３区，西第２区，烘烘沙漠，专注森林沙，挑战之路沙，锻炼平原沙，锅底沙漠沙<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 5%、6号道路·草丛 Lv29–32 15%；铠岛：锅底沙漠·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>313</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>８号道路所有天气，逆鳞湖曝，锅底沙漠晴曝雾，36级进化<br><span class="mod3">本体：沙尘洼地·定点[超极巨] Lv35、8号道路·草丛 Lv37–40 15%；铠岛：锅底沙漠·定点[超极巨] Lv17</span></td>
        </tr>
        <tr>
            <td>314</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/449.png"></td>
            <td>沙河马</td>
            <td>６号道路所有天气，沙尘洼地曝沙，巨人镜池曝沙<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 10%、6号道路·草丛 Lv29–32 15%</span></td>
        </tr>
        <tr>
            <td>315</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/450.png"></td>
            <td>河马兽</td>
            <td>８号道路所有天气，巨人镜池沙，逆鳞湖沙，34级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35、8号道路·草丛 Lv37–40 15%</span></td>
        </tr>
        <tr>
            <td>316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>６号道路所有天气，巨人镜池曝，逆鳞湖曝，巨人睡榻曝，远古墓地曝，三岔平原曝<br><span class="mod3">本体：巨人凳岩·树果树 Lv7–10 10%、3号道路·树果树 Lv15–18 10%、拳关丘陵·树果树 Lv27–30 20%、6号道路·草丛 Lv29–32 5%、6号道路·树果树 Lv29–32 10%、7号道路·树果树 Lv36–39 20%、9号道路（尖钉镇郊外）·树果树 Lv40–43 10%、逆鳞湖·树果树 Lv43–46 10%；冠之雪原：巨人睡榻·树果树 Lv11–14 20%、巨人睡榻·定点 Lv19、巨人鞋底·树果树 Lv11–14 20%、球湖湖畔·树果树 Lv47–50 20%</span></td>
        </tr>
        <tr>
            <td>317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>６号道路所有天气，巨人镜池曝，逆鳞湖曝，巨人睡榻曝，远古墓地曝，三岔平原曝<br><span class="mod3">本体：巨人凳岩·树果树 Lv7–10 10%、3号道路·树果树 Lv15–18 10%、拳关丘陵·树果树 Lv27–30 20%、6号道路·草丛 Lv29–32 5%、6号道路·树果树 Lv29–32 10%、7号道路·树果树 Lv36–39 20%、9号道路（尖钉镇郊外）·树果树 Lv40–43 10%、逆鳞湖·树果树 Lv43–46 10%；冠之雪原：巨人睡榻·树果树 Lv11–14 20%、巨人睡榻·定点 Lv19、巨人鞋底·树果树 Lv11–14 20%、球湖湖畔·树果树 Lv47–50 20%</span></td>
        </tr>
        <tr>
            <td>318</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/694.png"></td>
            <td>伞电蜥</td>
            <td>６号道路所有天气，巨人镜池雷<br><span class="mod3">本体：6号道路·草丛 Lv29–32 10%</span></td>
        </tr>
        <tr>
            <td>319</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/695.png"></td>
            <td>光电伞蜥</td>
            <td>光之石进化</td>
        </tr>
        <tr>
            <td>320</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/701.png"></td>
            <td>摔角鹰人</td>
            <td>６号道路所有天气，拳关丘陵所有天气<br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 5%</span></td>
        </tr>
        <tr>
            <td>321</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/328.png"></td>
            <td>大颚蚁</td>
            <td>６号道路所有天气<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 10%、6号道路·草丛 Lv29–32 10%</span></td>
        </tr>
        <tr>
            <td>322</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/329.png"></td>
            <td>超音波幼虫</td>
            <td>35级进化<br><span class="mod3">本体：巨人镜池·地面 Lv27–30 10%、巨人帽岩·地面 Lv27–30 10%</span></td>
        </tr>
        <tr>
            <td>323</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/330.png"></td>
            <td>沙漠蜻蜓</td>
            <td>逆鳞湖曝，沙尘洼地晴沙，45级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35、巨人帽岩·定点 Lv35、牙牙湖之眼·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>324</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/610.png"></td>
            <td>牙牙</td>
            <td>拳关丘陵沙，６号道路所有天气，牙牙湖之眼晴阴雨雾<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、牙牙湖东岸·草丛 Lv7–10 5%、牙牙湖之眼·草丛 Lv43–46 15%</span></td>
        </tr>
        <tr>
            <td>325</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/611.png"></td>
            <td>斧牙龙</td>
            <td>38级进化<br><span class="mod3">本体：牙牙湖之眼·草丛 Lv43–46 15%</span></td>
        </tr>
        <tr>
            <td>326</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/612.png"></td>
            <td>双斧战龙</td>
            <td>逆鳞湖雷，牙牙湖之眼晴阴雨曝沙雾，48级进化<br><span class="mod3">本体：牙牙湖之眼·草丛 Lv43–46 5%、牙牙湖之眼·定点 Lv51</span></td>
        </tr>
        <tr>
            <td>327</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/562-g.png"></td>
            <td>哭哭面具（伽勒尔的样子）</td>
            <td>６号道路所有天气<br><span class="mod3">本体：沙尘洼地·草丛[伽勒尔] Lv27–30 15%、沙尘洼地·草丛 Lv27–30 15%、6号道路·草丛[伽勒尔] Lv29–32 15%</span></td>
        </tr>
        <tr>
            <td>328</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/867.png"></td>
            <td>迭失板</td>
            <td>受到至少50伤害后到沙尘洼地长岩门下附近<br><span class="mod3">本体：沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>329</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/563.png"></td>
            <td>迭失棺</td>
            <td>34级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>330</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/679.png"></td>
            <td>独剑鞘</td>
            <td>拳关丘陵雹雾<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 5%、拳关丘陵·草丛 Lv27–30 15%</span></td>
        </tr>
        <tr>
            <td>331</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/680.png"></td>
            <td>双剑鞘</td>
            <td>逆鳞湖雹，巨人帽岩晴阴雨雷曝雪雹沙，35级进化<br><span class="mod3">本体：拳关丘陵·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>332</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/681.png"></td>
            <td>坚盾剑怪</td>
            <td>巨人帽岩雾，暗之石进化进化<br><span class="mod3">本体：拳关丘陵·定点 Lv35、牙牙湖之眼·草丛 Lv43–46 5%、微寐森林·草丛 Lv57–60 5%</span></td>
        </tr>
        <tr>
            <td>333</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077-g.png"></td>
            <td>小火马（伽勒尔的样子）</td>
            <td>迷光森林所有天气，远古墓地雾<br><span class="mod1">迷光森林·草丛随机遇敌 新增10%（替换绵绵泡芙）；迷光森林·地图可见 新增10%（替换绵绵泡芙）</span><br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 10%、煦丽草原·定点[伽勒尔] Lv15、3号道路·草丛 Lv15–18 5%、5号道路·草丛[伽勒尔] Lv20–23 15%、迷光森林·草丛[伽勒尔] Lv32–35 15%；冠之雪原：巨人睡榻·草丛[伽勒尔] Lv11–14 15%、巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>334</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/078-g.png"></td>
            <td>烈焰马（伽勒尔的样子）</td>
            <td>远古墓地雾，40级进化<br><span class="mod3">本体：迷光森林·草丛[伽勒尔] Lv32–35 5%；冠之雪原：巨人睡榻·定点[伽勒尔] Lv19、球湖湖畔·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>335</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/854.png"></td>
            <td>来悲茶</td>
            <td>迷光森林所有天气，远古墓地所有天气<br><span class="mod3">本体：迷光森林·草丛[赝品] Lv32–35 15%、迷光森林·草丛[真品] Lv32–35 5%；冠之雪原：远古墓地·草丛[赝品] Lv11–14 15%、远古墓地·草丛[真品] Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>336</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/855.png"></td>
            <td>怖思壶</td>
            <td>远古墓地晴雨雷曝雹雾，使用破裂/缺损的茶壶进化<br><span class="mod2">Lv 36</span><br><span class="mod3">冠之雪原：远古墓地·定点[真品] Lv19</span></td>
        </tr>
        <tr>
            <td>337</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>迷光森林所有天气，逆鳞湖雾，球湖湖畔晴雾<br><span class="mod3">本体：迷光森林·草丛[♂] Lv32–35 10%、迷光森林·草丛[♀] Lv32–35 10%；冠之雪原：通顶雪道·草丛[♂] Lv11–14 5%、通顶雪道·草丛[♀] Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>迷光森林所有天气，起橇雪原阴，远古墓地阴，雪中溪谷阴，巨人鞋底阴，三岔平原阴<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 10%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>339</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>起橇雪原阴，远古墓地阴，雪中溪谷阴，链接交换进化<br><span class="mod2">Lv 36 ; Lv 20 专注森林 ; Lv 30 夜间</span><br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、远古墓地·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>340</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/755.png"></td>
            <td>睡睡菇</td>
            <td>巨人镜池雾，拳关丘陵雾<br><span class="mod3">本体：机擎河岸·草丛 Lv27–30 15%</span></td>
        </tr>
        <tr>
            <td>341</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/756.png"></td>
            <td>灯罩夜菇</td>
            <td>迷光森林所有天气，逆鳞湖阴雨雷，24级进化<br><span class="mod3">本体：迷光森林·草丛 Lv32–35 15%</span></td>
        </tr>
        <tr>
            <td>342</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>盾：迷光森林所有天气，专注森林所有天气<br><span class="mod1">牙牙湖东岸（晴）·草丛随机遇敌 新增5%（替换童偶熊）；牙牙湖东岸（阴）·草丛随机遇敌 新增20%（替换泡沫栗鼠）；牙牙湖东岸（晴）·地图可见 新增25%；牙牙湖东岸（阴）·地图可见 新增50%（替换童偶熊）</span><br><span class="mod3">本体：迷光森林·草丛 Lv32–35 5%；铠岛：专注森林·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>343</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/766.png"></td>
            <td>投掷猴</td>
            <td>剑：迷光森林所有天气，专注森林所有天气<br><span class="mod3">本体：迷光森林·草丛 Lv32–35 5%；铠岛：专注森林·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>尖钉镇郊外所有天气，７号道路所有天气，逆鳞湖雷，挑战海滩所有天气，球湖湖畔阴雷<br><span class="mod3">本体：桥间空地·草丛 Lv27–30 15%、7号道路·草丛 Lv36–39 5%；铠岛：挑战海滩·草丛 Lv9–12 15%、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>345</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/870.png"></td>
            <td>列阵兵</td>
            <td>８号道路所有天气，逆鳞湖阴<br><span class="mod3">本体：8号道路·草丛 Lv37–40 10%、8号道路·定点 Lv45</span></td>
        </tr>
        <tr>
            <td>346</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/780.png"></td>
            <td>老翁龙</td>
            <td>盾：逆鳞湖雷<br><span class="mod1">逆鳞湖（晴）·草丛随机遇敌 新增20%（替换穿着熊）</span><br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 10%、逆鳞湖·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>347</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/776.png"></td>
            <td>爆焰龟兽</td>
            <td>剑：逆鳞湖雷<br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 10%、逆鳞湖·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>348</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/777.png"></td>
            <td>托戈德玛尔</td>
            <td>逆鳞湖雹，８号道路所有天气<br><span class="mod3">本体：煦丽草原·定点 Lv15、拳关丘陵·草丛 Lv27–30 5%、8号道路·草丛 Lv37–40 10%</span></td>
        </tr>
        <tr>
            <td>349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>泉烟小路，１０号道路所有天气，逆鳞湖雪，起橇雪原，雪中溪谷，通顶雪道所有天气<br><span class="mod1">10号道路·草丛随机遇敌 移除10%（被冰砌鹅替换）</span><br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%、巨人帽岩·树果树 Lv27–30 40%、8号道路（泉烟小路）·草丛 Lv37–40 15%；冠之雪原：起橇雪原·草丛 Lv11–14 5%、起橇雪原·树果树 Lv11–14 40%、冰点雪原·树果树 Lv11–14 40%、通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>350</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/873.png"></td>
            <td>雪绒蛾</td>
            <td>通顶雪道所有天气，友好度158以上提升等级（夜晚）<br><span class="mod3">本体：巨人帽岩·树果树 Lv27–30 10%、8号道路（泉烟小路）·草丛 Lv37–40 5%、9号道路（战竞湾）·树果树 Lv40–43 40%、10号道路·草丛 Lv50–53 15%；冠之雪原：起橇雪原·树果树 Lv11–14 10%、起橇雪原·定点 Lv19、通顶雪道·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>战竞湾，尖钉镇郊外所有天气，圆环海湾所有天气，斗志洞窟所有天气<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 10%、牙牙湖东岸·草丛 Lv7–10 10%、9号道路·草丛 Lv40–43 15%；铠岛：战斗洞窟·草丛 Lv9–12 15%、斗志洞窟·冲浪 Lv45–48 15%、圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>战竞湾，逆鳞湖所有天气，牙牙湖西岸晴阴曝雪雹沙雾，圆环海湾晴阴曝沙雾，学会挑衅时提升等级<br><span class="mod3">本体：9号道路（战竞湾）·草丛 Lv40–43 15%、9号道路（战竞湾）·定点 Lv48；铠岛：圆环海湾·定点 Lv17、健身之海·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>９号道路，战竞湾所有天气，斗志洞窟，圆环海湾所有天气，冻海雷<br><span class="mod3">本体：美纳斯湖南岸·钓鱼 Lv7–10 5%、9号道路·草丛 Lv40–43 5%、9号道路·钓鱼 Lv40–43 25%、牙牙湖之眼·钓鱼 Lv43–46 25%；铠岛：挑战海滩·沙滩 Lv9–12 10%、圆环海湾·沙滩 Lv9–12 20%、圆环海湾·定点 Lv17、离岛海域·草丛 Lv45–48 15%；冠之雪原：冻海·草丛 Lv47–50 15%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>战竞湾，机擎河岸，逆鳞湖所有天气，揖礼原野，健身之海所有天气，列岛海域晴沙，离岛海域晴沙，蜂巢海晴沙，蜂巢岛晴沙，携带涟漪薰香生蛋<br><span class="mod3">本体：机擎河岸·冲浪 Lv43–46 5%、巨人帽岩·钓鱼 Lv27–30 25%、9号道路（战竞湾）·钓鱼 Lv40–43 15%；铠岛：揖礼原野·冲浪 Lv45–48 25%、挑战海滩·钓鱼 Lv9–12 5%、圆环海湾·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>355</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/226.png"></td>
            <td>巨翅飞鱼</td>
            <td>战竞湾，逆鳞湖所有天气，铁炮鱼同行时提升等级<br><span class="mod3">本体：牙牙湖东岸·冲浪 Lv43–46 15%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、9号道路（战竞湾）·冲浪 Lv40–43 25%、逆鳞湖·冲浪 Lv43–46 25%；铠岛：圆环海湾·冲浪 Lv45–48 25%、列岛海域·冲浪 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>战竞湾所有天气，机擎河岸所有天气，蜂巢海，蜂巢岛，冻海所有天气<br><span class="mod3">本体：机擎河岸·定点 Lv35、桥间空地·冲浪 Lv43–46 5%、巨人帽岩·钓鱼 Lv27–30 25%、9号道路（战竞湾）·钓鱼 Lv40–43 30%；铠岛：揖礼原野·冲浪 Lv45–48 5%、挑战海滩·钓鱼 Lv9–12 25%、健身之海·冲浪 Lv45–48 30%</span></td>
        </tr>
        <tr>
            <td>357</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/321.png"></td>
            <td>吼鲸王</td>
            <td>战竞湾所有天气，健身之海所有天气，40级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、9号道路（战竞湾）·冲浪 Lv40–43 25%、逆鳞湖·冲浪 Lv43–46 25%；铠岛：健身之海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>战竞湾，尖钉镇郊外所有天气，逆鳞湖雪，三岔平原所有天气，冻海晴阴雨雷雪雹雾<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>359</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/713.png"></td>
            <td>冰岩怪</td>
            <td>三岔平原，冻海所有天气，37级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、9号道路（战竞湾）·草丛 Lv40–43 15%；冠之雪原：雪中溪谷·定点 Lv19、冻海·冲浪 Lv47–50 25%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>战竞湾，尖钉镇郊外所有天气，挑战海滩，冻海所有天气<br><span class="mod3">本体：草路镇·定点 Lv51、巨人镜池·钓鱼 Lv27–30 15%、9号道路（战竞湾）·草丛 Lv40–43 5%、9号道路（战竞湾）·钓鱼 Lv40–43 5%、牙牙湖之眼·钓鱼 Lv43–46 5%、微寐森林·钓鱼 Lv57–60 15%；冠之雪原：雪中溪谷·钓鱼 Lv11–14 5%、冻海·冲浪 Lv47–50 5%、冻海·钓鱼 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>战竞湾所有天气，２号道路所有天气，美纳斯湖北岸晴雨雷雪雹雾，牙牙湖西岸晴雨雷雪雹雾，逆鳞湖晴雨雷雪雹雾，冻海雪雹<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 5%、牙牙湖西岸·定点[超极巨] Lv15、美纳斯湖北岸·冲浪 Lv43–46 15%、美纳斯湖北岸·定点[超极巨] Lv15、巨人帽岩·钓鱼 Lv27–30 15%、9号道路（战竞湾）·冲浪 Lv40–43 30%、逆鳞湖·冲浪 Lv43–46 5%、逆鳞湖·定点[超极巨] Lv51；冠之雪原：雪中溪谷·钓鱼 Lv11–14 15%、冻海·冲浪 Lv47–50 30%、冻海·钓鱼 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/337.png"></td>
            <td>月石</td>
            <td>盾：８号道路，巨人帽岩所有天气<br><span class="mod1">瞭望塔旧址（晴）·草丛随机遇敌 新增20%（替换甜竹竹）；瞭望塔旧址（晴）·地图可见 新增25%</span><br><span class="mod3">本体：巨人帽岩·岩石 Lv27–30 40%、8号道路·草丛 Lv37–40 5%</span></td>
        </tr>
        <tr>
            <td>363</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/338.png"></td>
            <td>太阳岩</td>
            <td>剑：８号道路，巨人帽岩所有天气<br><span class="mod3">本体：巨人帽岩·岩石 Lv27–30 40%、8号道路·草丛 Lv37–40 5%</span></td>
        </tr>
        <tr>
            <td>364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>煦丽草原雹，起橇雪原，冰点雪原，巨人睡榻，远古墓地，雪中溪谷，巨人鞋底，冻海，三岔平原，球湖湖畔所有天气，携带奇异薰香生蛋<br><span class="mod3">本体：煦丽草原·定点 Lv15、机擎市郊外·草丛 Lv24–27 15%；冠之雪原：起橇雪原·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>365</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122-g.png"></td>
            <td>魔墙人偶（伽勒尔的样子）</td>
            <td>逆鳞湖雪，１０号道路所有天气，学会模仿时提升等级<br><span class="mod3">本体：10号道路·草丛[伽勒尔] Lv50–53 15%；冠之雪原：起橇雪原·定点[伽勒尔] Lv19、冰点雪原·定点[伽勒尔] Lv19、巨人睡榻·定点 Lv19、通顶雪道·草丛 Lv11–14 10%、通顶雪道·草丛[伽勒尔] Lv11–14 10%、冻海·草丛[伽勒尔] Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>366</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/866.png"></td>
            <td>踏冰人偶</td>
            <td>42级进化<br><span class="mod3">本体：10号道路·定点 Lv58；冠之雪原：雪中溪谷·定点 Lv19、冻海·定点 Lv55、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>367</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554-g.png"></td>
            <td>火红不倒翁（伽勒尔的样子）</td>
            <td>剑：泉烟小路，１０号道路所有天气，雪中溪谷雹<br><span class="mod3">本体：3号道路·草丛 Lv15–18 5%、巨人帽岩·草丛[伽勒尔] Lv27–30 10%；冠之雪原：起橇雪原·草丛[伽勒尔] Lv11–14 5%、巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>368</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555-g.png"></td>
            <td>达摩狒狒（伽勒尔的样子）</td>
            <td>剑：雪中溪谷雹，冰之石进化<br><span class="mod3">本体：巨人帽岩·定点[伽勒尔] Lv35、8号道路（泉烟小路）·草丛[伽勒尔] Lv37–40 10%；冠之雪原：巨人睡榻·定点[伽勒尔] Lv19、球湖湖畔·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>剑：１０号道路所有天气，逆鳞湖曝沙，巨人睡榻，巨人鞋底所有天气<br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 5%、9号道路（战竞湾）·草丛 Lv40–43 5%、10号道路·草丛 Lv50–53 5%；冠之雪原：雪中溪谷·草丛 Lv11–14 5%、雪中溪谷·定点 Lv19、湖畔洞窟·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>盾：１０号道路所有天气，逆鳞湖曝沙，巨人睡榻，巨人鞋底所有天气<br><span class="mod1">10号道路·草丛随机遇敌 新增10%（替换雪吞虫）；10号道路·地图可见 新增20%（替换喷嚏熊）</span><br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%、9号道路（战竞湾）·草丛 Lv40–43 5%、10号道路·草丛 Lv50–53 5%；冠之雪原：雪中溪谷·草丛 Lv11–14 5%、雪中溪谷·定点 Lv19、冻海·草丛 Lv47–50 15%、冻海·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>371</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/884.png"></td>
            <td>铝钢龙</td>
            <td>逆鳞湖雹，道路（10）所有天气，巨人凳岩所有天气<br><span class="mod3">本体：巨人凳岩·定点[超极巨] Lv15、拳关丘陵·草丛 Lv27–30 5%、拳关丘陵·定点[超极巨] Lv35、逆鳞湖·草丛 Lv43–46 10%、10号道路·草丛 Lv50–53 5%</span></td>
        </tr>
        <tr>
            <td>372</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>逆鳞湖雨雷，健身之海所有天气肝帝威的游戏笔记<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 5%、牙牙湖之眼·草丛 Lv43–46 15%；铠岛：健身之海·定点[切割] Lv53、健身之海·定点[旋转] Lv53、健身之海·定点[结冰] Lv53、健身之海·定点[清洗] Lv53、健身之海·定点[加热] Lv53、健身之海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>373</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/132.png"></td>
            <td>百变怪</td>
            <td>逆鳞湖所有天气，健身之海所有天气<br><span class="mod3">本体：牙牙湖之眼·草丛 Lv43–46 15%；铠岛：锻炼平原·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 5%、健身之海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>374</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/880.png"></td>
            <td>雷鸟龙</td>
            <td>６号道路组合化石<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>375</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/881.png"></td>
            <td>雷鸟海兽</td>
            <td>６号道路组合化石<br><span class="mod3">本体：9号道路（战竞湾）·草丛 Lv40–43 5%</span></td>
        </tr>
        <tr>
            <td>376</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/882.png"></td>
            <td>鳃鱼龙</td>
            <td>６号道路组合化石<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>377</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/883.png"></td>
            <td>鳃鱼海兽</td>
            <td>６号道路组合化石<br><span class="mod3">本体：9号道路（战竞湾）·冲浪 Lv40–43 5%</span></td>
        </tr>
        <tr>
            <td>378</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/004.png"></td>
            <td>小火龙</td>
            <td>二周目化朗镇赫普的家中<br><span class="mod3">本体：巨人凳岩·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>379</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/005.png"></td>
            <td>火恐龙</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>380</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/006.png"></td>
            <td>喷火龙</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>381</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/772.png"></td>
            <td>属性：空</td>
            <td>对战塔赠送</td>
        </tr>
        <tr>
            <td>382</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/773.png"></td>
            <td>银伴战兽</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td>383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>盾：逆鳞湖阴曝，海鸣洞窟所有天气<br><span class="mod1">拳关丘陵（晴）·草丛随机遇敌 新增25%（替换好啦鱿）；拳关丘陵（阴）·草丛随机遇敌 新增35%（替换好啦鱿）；拳关丘陵（曝）·草丛随机遇敌 新增15%（替换好啦鱿）；拳关丘陵（晴）·地图可见 新增10%（替换树才怪）；拳关丘陵（阴）·地图可见 新增45%（替换童偶熊）；拳关丘陵（曝）·地图可见 新增5%（替换果然翁）</span><br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%、伽勒尔矿山·草丛 Lv16–19 5%、沙尘洼地·草丛 Lv27–30 5%；冠之雪原：登顶隧道·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>384</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/247.png"></td>
            <td>沙基拉斯</td>
            <td>盾：逆鳞湖沙，30级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15、巨人镜池·地面 Lv27–30 10%、巨人帽岩·地面 Lv27–30 10%、逆鳞湖·草丛 Lv43–46 15%；冠之雪原：海鸣洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>385</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班基拉斯</td>
            <td>盾：沙尘洼地晴曝雪雹沙雾，海鸣洞窟所有天气，55级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35；冠之雪原：海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/633.png"></td>
            <td>单首龙</td>
            <td>剑：逆鳞湖雨，海鸣洞窟所有天气<br><span class="mod3">本体：第二矿山·草丛 Lv23–26 5%；冠之雪原：登顶隧道·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>387</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/634.png"></td>
            <td>双首暴龙</td>
            <td>逆鳞湖雷沙，50级进化<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 15%；冠之雪原：海鸣洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>388</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/635.png"></td>
            <td>三首恶龙</td>
            <td>海鸣洞窟所有天气，64级进化<br><span class="mod3">冠之雪原：海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>盾：逆鳞湖雨，清凉湿原雨雷，专注森林雨雷<br><span class="mod1">牙牙湖之眼（晴）·草丛随机遇敌 新增30%（替换掘地兔）；牙牙湖之眼（雨）·草丛随机遇敌 新增20%（替换掘地兔）；牙牙湖之眼（晴）·地图可见 新增5%（替换豪力）；牙牙湖之眼（雨）·地图可见 新增25%（替换穿着熊）</span><br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、逆鳞湖·钓鱼 Lv43–46 30%；铠岛：清凉湿原·水洼 Lv9–12 10%、专注森林·钓鱼 Lv9–12 5%、蜂巢岛·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>390</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/705.png"></td>
            <td>黏美儿</td>
            <td>盾：逆鳞湖雷，40级进化<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 15%、逆鳞湖·钓鱼 Lv43–46 15%；铠岛：专注森林·定点 Lv17、蜂巢海·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>391</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/706.png"></td>
            <td>黏美龙</td>
            <td>50级进化<br><span class="mod3">本体：逆鳞湖·钓鱼 Lv43–46 5%；铠岛：蜂巢海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>392</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>剑：逆鳞湖阴曝，挑战之路曝沙雾，锻炼平原沙<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%；铠岛：战斗洞窟·草丛 Lv9–12 5%、挑战之路·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>393</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/783.png"></td>
            <td>鳞甲龙</td>
            <td>剑：逆鳞湖雷，35级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15、逆鳞湖·草丛 Lv43–46 15%；铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>394</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/784.png"></td>
            <td>杖尾鳞甲龙</td>
            <td>剑：沙尘洼地晴曝雪雹沙雾，45级进化<br><span class="mod3">铠岛：离岛海域·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>395</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/885.png"></td>
            <td>多龙梅西亚</td>
            <td>逆鳞湖阴雷雾<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 5%、微寐森林·定点 Lv65；冠之雪原：远古墓地·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>396</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/886.png"></td>
            <td>多龙奇</td>
            <td>逆鳞湖阴雨雷雾，远古墓地所有天气，50级进化<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 10%；冠之雪原：远古墓地·定点 Lv19、三岔平原·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>397</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/887.png"></td>
            <td>多龙巴鲁托</td>
            <td>远古墓地晴阴雨雷曝雪，三岔平原晴阴雨曝雪雹雾，60级进化<br><span class="mod3">本体：巨人镜池·定点 Lv35、逆鳞湖·定点 Lv51、微寐森林·草丛 Lv57–60 5%；冠之雪原：三岔平原·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>398</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/888.png"></td>
            <td>苍响</td>
            <td>剧情</td>
        </tr>
        <tr>
            <td>399</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/889.png"></td>
            <td>藏玛然特</td>
            <td>剧情<br><span class="mod1">野生藏玛然特必定携带腐朽的盾</span></td>
        </tr>
        <tr>
            <td>400</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/890.png"></td>
            <td>无极汰那</td>
            <td>剧情<br><span class="mod3">本体：能源工厂·定点 Lv70</span></td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>编号</th>
            <th>图片</th>
            <th>名称</th>
            <th>捕获方式</th>
        </tr>
    </thead>
    <tbody id="pokeTable1">
        <tr>
            <td>001</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/079-g.png"></td>
            <td>呆呆兽（伽勒尔的样子）</td>
            <td>木杆镇车站，揖礼原野所有天气<br><span class="mod3">本体：木杆镇·定点[伽勒尔] Lv10；铠岛：揖礼原野·沙滩[伽勒尔] Lv9–12 30%、清凉湿原·定点[伽勒尔] Lv17、锻炼平原·沙滩 Lv9–12 30%、挑战海滩·沙滩 Lv9–12 30%、圆环海湾·沙滩[伽勒尔] Lv9–12 30%</span></td>
        </tr>
        <tr>
            <td>002</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/080-g.png"></td>
            <td>呆壳兽（伽勒尔的样子）</td>
            <td>使用伽勒豆蔻手环<br><span class="mod3">铠岛：挑战海滩·定点 Lv17、圆环海湾·定点[伽勒尔] Lv17</span></td>
        </tr>
        <tr>
            <td>003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/199-g.png"></td>
            <td>呆呆王（伽勒尔的样子）</td>
            <td>使用伽勒豆蔻花圈<br><span class="mod2">王者之证，潮湿石头；Lv 37</span><br><span class="mod3">铠岛：挑战海滩·定点 Lv17、圆环海湾·定点[伽勒尔] Lv17</span></td>
        </tr>
        <tr>
            <td>004</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/427.png"></td>
            <td>卷卷耳</td>
            <td>揖礼原野，挑战海滩所有天气<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>005</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/428.png"></td>
            <td>长耳兔</td>
            <td>揖礼原野晴曝沙，清凉湿原晴沙，挑战海滩晴沙雾，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17、健身之海·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/440.png"></td>
            <td>小福蛋</td>
            <td>揖礼原野，清凉湿原，专注森林，挑战之路，挑战海滩，圆环海湾，锻炼平原，健身之海，列岛海域，离岛海域，蜂巢岛所有天气，携带幸运薰香生蛋<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 15%、揖礼原野·树果树 Lv9–12 20%、圆环海湾·树果树 Lv9–12 40%</span></td>
        </tr>
        <tr>
            <td>007</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/113.png"></td>
            <td>吉利蛋</td>
            <td>揖礼原野晴阴雨雷曝沙，清凉湿原晴阴雨雷曝沙，专注森林晴阴雨雷曝沙，挑战海滩晴阴雨雷曝沙，战斗洞窟晴阴雨雷曝沙，挑战之路晴阴雨雷曝沙，斗志洞窟晴阴雨雷曝沙，圆环海湾晴阴雨雷曝沙，锻炼平原晴阴雨雷曝沙，热身洞穴晴阴雨雷曝沙，锅底沙漠晴阴雨雷曝沙，健身之海晴阴雨雷曝沙，列岛海域晴阴雨雷曝沙，蜂巢岛晴阴雨雷曝沙，携带浑圆之石提升等级（白天）<br><span class="mod3">铠岛：揖礼原野·树果树 Lv9–12 10%、揖礼原野·定点 Lv17、清凉湿原·草丛 Lv9–12 5%、清凉湿原·树果树 Lv9–12 10%、清凉湿原·定点 Lv17、锻炼平原·树果树 Lv9–12 10%、圆环海湾·树果树 Lv9–12 20%、健身之海·树果树 Lv45–48 20%</span></td>
        </tr>
        <tr>
            <td>008</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/242.png"></td>
            <td>幸福蛋</td>
            <td>揖礼原野雾，清凉湿原雾，专注森林雾，挑战海滩雾，战斗洞窟雾，挑战之路雾，斗志洞窟雾，圆环海湾雾，锻炼平原雾，热身洞穴雾，锅底沙漠雾，健身之海雾，列岛海域雾，蜂巢岛雾，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">铠岛：清凉湿原·定点 Lv17、锻炼平原·定点 Lv17、健身之海·草丛 Lv45–48 5%、健身之海·树果树 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>道路（1），微寐森林所有天气,道路（1・2），微寐森林所有天气,列岛海域所有天气,球湖湖畔晴阴雨雷曝雪雾,列岛海域，球湖湖畔所有天气.摇晃树木<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·树果树 Lv7–10 40%、美纳斯湖北岸·树果树 Lv7–10 20%、巨人凳岩·树果树 Lv7–10 40%、3号道路·树果树 Lv15–18 40%、桥间空地·树果树 Lv27–30 40%、巨人帽岩·树果树 Lv27–30 20%；铠岛：揖礼原野·树果树 Lv9–12 40%、清凉湿原·树果树 Lv9–12 40%、挑战海滩·树果树 Lv9–12 40%；冠之雪原：起橇雪原·树果树 Lv11–14 20%、冰点雪原·树果树 Lv11–14 20%、巨人睡榻·树果树 Lv11–14 40%、巨人鞋底·树果树 Lv11–14 40%</span></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>桥间空地所有天气，球湖湖畔，巨树丘陵所有天气，巨人睡榻晴阴雨雷雪雹雾，摇晃树木，24级进化<br><span class="mod3">本体：桥间空地·树果树 Lv27–30 10%、桥间空地·定点 Lv35、巨人帽岩·树果树 Lv27–30 10%、6号道路·树果树 Lv29–32 40%、7号道路·树果树 Lv36–39 40%、9号道路（战竞湾）·树果树 Lv40–43 20%、逆鳞湖·树果树 Lv43–46 40%；铠岛：揖礼原野·树果树 Lv9–12 10%、挑战海滩·树果树 Lv9–12 10%、健身之海·树果树 Lv45–48 40%；冠之雪原：巨人睡榻·树果树 Lv11–14 10%、巨人睡榻·定点 Lv19、球湖湖畔·树果树 Lv47–50 10%、球湖湖畔·定点 Lv55、巨树丘陵·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/174.png"></td>
            <td>宝宝丁</td>
            <td>生蛋<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/039.png"></td>
            <td>胖丁</td>
            <td>挑战海滩，揖礼原野所有天气，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">铠岛：专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>013</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/040.png"></td>
            <td>胖可丁</td>
            <td>揖礼原野雾，清凉湿原雾，专注森林雾，挑战海滩雾，圆环海湾雾，锻炼平原雾，月之石进化<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17、专注森林·定点 Lv17、锻炼平原·定点 Lv17、健身之海·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>014</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>道路（1・2），微寐森林所有天气，道路（2），微寐森林所有天气，巨人帽岩晴，揖礼原野，挑战之路，挑战海滩，圆环海湾，锻炼平原，健身之海，列岛海域，离岛海域，蜂巢岛所有天气，锻炼平原。<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%；铠岛：圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>５号道路所有天气，巨人帽岩晴阴雨雷雪雹沙雾，巨人镜池晴阴雨沙，巨石原野雾，巨人帽岩所有天气，10级进化<br><span class="mod1">巨人镜池（晴）·草丛随机遇敌 移除20%（被太阳珊瑚（伽勒尔）替换）；巨人镜池（阴）·草丛随机遇敌 出现率10%→14%</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 5%；铠岛：专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>微寐森林所有天气，逆鳞湖晴，微寐森林所有天气，巨人帽岩所有天气，沐光森林所有天气。35级进化<br><span class="mod3">本体：沐光森林·定点[超极巨] Lv15、逆鳞湖·定点[超极巨] Lv51、微寐森林·草丛 Lv57–60 15%；铠岛：专注森林·定点[超极巨] Lv17、蜂巢岛·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/753.png"></td>
            <td>伪螳草</td>
            <td>揖礼原野曝，清凉湿原曝，挑战海滩曝，专注森林曝，锻炼平原曝<br><span class="mod3">铠岛：专注森林·草丛 Lv9–12 15%、专注森林·树果树 Lv9–12 20%、圆环海湾·树果树 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/754.png"></td>
            <td>兰螳花</td>
            <td>专注森林曝，挑战海滩曝，等级34以上（白天）<br><span class="mod3">铠岛：专注森林·定点 Lv17、挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、蜂巢岛·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>５号道路所有天气，揖礼原野，清凉湿原，专注森林，圆环海湾，锻炼平原，挑战海滩，健身之海，列岛海域，离岛海域所有天气，巨石原野雷，沙尘洼地晴，巨人镜池雷，摇晃树木<br><span class="mod3">本体：煦丽草原·树果树 Lv7–10 10%、沐光森林·树果树 Lv7–10 20%、美纳斯湖北岸·树果树 Lv7–10 10%、巨人凳岩·树果树 Lv7–10 20%、4号道路·草丛 Lv17–20 15%、4号道路·树果树 Lv17–20 10%、5号道路·树果树 Lv20–23 20%、拳关丘陵·树果树 Lv27–30 40%；铠岛：清凉湿原·树果树 Lv9–12 10%、专注森林·树果树 Lv9–12 40%</span></td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/841.png"></td>
            <td>苹裹龙</td>
            <td>列岛海域所有天气，使用酸酸苹果<br><span class="mod2">夜间亲密度升级</span><br><span class="mod3">本体：5号道路·树果树 Lv20–23 10%、拳关丘陵·树果树 Lv27–30 10%、7号道路·树果树 Lv36–39 10%、9号道路（战竞湾）·树果树 Lv40–43 10%、牙牙湖之眼·草丛 Lv43–46 10%、牙牙湖之眼·树果树 Lv43–46 10%、牙牙湖之眼·定点[超极巨] Lv51、逆鳞湖·树果树 Lv43–46 20%；铠岛：专注森林·树果树 Lv9–12 10%、离岛海域·树果树 Lv45–48 20%、蜂巢岛·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/842.png"></td>
            <td>丰蜜龙</td>
            <td>列岛海域所有天气，使用甜甜苹果<br><span class="mod2">夜间亲密度升级</span><br><span class="mod3">本体：5号道路·树果树 Lv20–23 10%、拳关丘陵·树果树 Lv27–30 10%、7号道路·树果树 Lv36–39 10%、9号道路（战竞湾）·树果树 Lv40–43 10%、牙牙湖之眼·草丛 Lv43–46 10%、牙牙湖之眼·树果树 Lv43–46 10%、牙牙湖之眼·定点[超极巨] Lv51、逆鳞湖·树果树 Lv43–46 20%；铠岛：专注森林·树果树 Lv9–12 10%、离岛海域·树果树 Lv45–48 20%、蜂巢岛·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/661.png"></td>
            <td>小箭雀</td>
            <td>挑战之路曝，圆环海湾曝，锅底沙漠曝<br><span class="mod3">铠岛：锅底沙漠·草丛 Lv9–12 5%、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/662.png"></td>
            <td>火箭雀</td>
            <td>揖礼原野曝，清凉湿原曝，挑战海滩曝，锻炼平原曝，17级进化<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/663.png"></td>
            <td>烈箭鹰</td>
            <td>清凉湿原曝，圆环海湾曝，锻炼平原曝，35级进化<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/403.png"></td>
            <td>小猫怪</td>
            <td>挑战海滩雨雷，挑战之路雨雷，锻炼平原雨雷，锅底沙漠雨<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 5%、挑战之路·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/404.png"></td>
            <td>勒克猫</td>
            <td>揖礼原野雷，清凉湿原雷，圆环海湾雷，锻炼平原雷，15级进化<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/405.png"></td>
            <td>伦琴猫</td>
            <td>专注森林雷，清凉湿原雷，挑战海滩雷，圆环海湾雷，锻炼平原雷，30级进化<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、离岛海域·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/707.png"></td>
            <td>钥圈儿</td>
            <td>揖礼原野所有天气<br><span class="mod3">铠岛：斗志洞窟·草丛 Lv9–12 5%、圆环海湾·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>机擎市郊外所有天气，机擎河岸雹，巨石原野雹，巨人帽岩雹，８号道路所有天气，机擎河岸雹，巨人镜池雹<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、第二矿山·草丛 Lv23–26 5%；铠岛：清凉湿原·草丛 Lv9–12 15%、清凉湿原·定点 Lv17、挑战之路·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>逆鳞湖雹，巨人凳岩所有天气，挑战之路阴，锻炼平原阴，52级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%；铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/063.png"></td>
            <td>凯西</td>
            <td>揖礼原野所有天气<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 10%、圆环海湾·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/064.png"></td>
            <td>勇基拉</td>
            <td>揖礼原野雾，清凉湿原雾，16级进化<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/065.png"></td>
            <td>胡地</td>
            <td>圆环海湾晴雨沙，离岛海域雾，链接交换<br><span class="mod2">Lv 36</span><br><span class="mod3">铠岛：圆环海湾·定点 Lv17、离岛海域·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>煦丽草原阴雾，沐光森林雾，瞭望塔旧址雾，美纳斯湖北岸雾，美纳斯湖南岸雾，揖礼原野雾<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 5%；铠岛：揖礼原野·草丛 Lv9–12 10%、圆环海湾·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/281.png"></td>
            <td>奇鲁莉安</td>
            <td>煦丽草原雾，20级进化<br><span class="mod3">铠岛：专注森林·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>沙尘洼地雾，逆鳞湖雾，煦丽草原雾，逆鳞湖晴雾，专注森林雾，锻炼平原雾，30级进化<br><span class="mod3">本体：桥间空地·定点 Lv35；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17、圆环海湾·定点 Lv17、离岛海域·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>桥间空地晴阴雨雷曝沙，挑战之路雾，使用觉醒之石（雄性）<br><span class="mod3">本体：桥间空地·定点 Lv35；铠岛：挑战之路·定点 Lv17、圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>巨人帽岩所有天气，牙牙湖西岸晴阴雨雷雾，美纳斯湖南岸晴阴雨雷雪，揖礼原野雨雷，圆环海湾雨雷<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 15%；铠岛：揖礼原野·沙滩 Lv9–12 25%、锻炼平原·沙滩 Lv9–12 20%、斗志洞窟·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>９号道路所有天气，牙牙湖之眼晴阴雷，牙牙湖西岸晴，美纳斯湖南岸晴雷，揖礼原野晴阴雨雷曝沙，挑战海滩晴雨曝沙，锻炼平原晴阴雨雷曝沙，28级进化<br><span class="mod3">本体：牙牙湖西岸·定点[超极巨] Lv15、9号道路·草丛 Lv40–43 10%；铠岛：揖礼原野·定点[超极巨] Lv17、锻炼平原·定点[超极巨] Lv17、挑战海滩·定点[超极巨] Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/072.png"></td>
            <td>玛瑙水母</td>
            <td>揖礼原野，斗志洞窟，健身之海，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气，挑战海滩晴阴雨雷曝沙，圆环海湾雾<br><span class="mod3">铠岛：揖礼原野·冲浪 Lv45–48 30%、清凉湿原·钓鱼 Lv9–12 30%、挑战海滩·钓鱼 Lv9–12 30%、斗志洞窟·冲浪 Lv45–48 25%、列岛海域·钓鱼 Lv45–48 30%</span></td>
        </tr>
        <tr>
            <td>041</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/073.png"></td>
            <td>毒刺水母</td>
            <td>揖礼原野阴，挑战海滩阴，健身之海阴，列岛海域阴，离岛海域阴，蜂巢海阴，蜂巢岛阴，斗志洞窟所有天气，挑战海滩晴阴雨曝沙，圆环海湾晴阴雨曝沙，30级进化<br><span class="mod3">铠岛：挑战海滩·冲浪 Lv45–48 30%、挑战海滩·定点 Lv17、斗志洞窟·定点 Lv17、圆环海湾·冲浪 Lv45–48 30%、圆环海湾·定点 Lv17、健身之海·冲浪 Lv45–48 15%、列岛海域·冲浪 Lv45–48 30%、列岛海域·钓鱼 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/129.png"></td>
            <td>鲤鱼王</td>
            <td>大部分水域<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 30%、牙牙湖西岸·钓鱼 Lv7–10 30%、牙牙湖东岸·钓鱼 Lv7–10 30%、美纳斯湖北岸·钓鱼 Lv7–10 30%、美纳斯湖南岸·钓鱼 Lv7–10 30%、巨人凳岩·钓鱼 Lv7–10 30%、机擎市·钓鱼 Lv13–16 30%、4号道路·钓鱼 Lv17–20 30%、5号道路·钓鱼 Lv20–23 30%、水舟镇·钓鱼 Lv21–24 25%、桥间空地·冲浪 Lv43–46 30%、桥间空地·钓鱼 Lv27–30 30%；铠岛：揖礼原野·钓鱼 Lv9–12 30%、专注森林·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 30%、锻炼平原·冲浪 Lv45–48 25%、锻炼平原·钓鱼 Lv9–12 30%、健身之海·钓鱼 Lv45–48 30%、蜂巢岛·钓鱼 Lv45–48 25%；冠之雪原：巨人睡榻·冲浪 Lv47–50 30%、巨人睡榻·钓鱼 Lv11–14 30%、球湖湖畔·钓鱼 Lv47–50 30%</span></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>大部分水域，20级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 25%、2号道路（湖畔）·钓鱼 Lv43–46 25%、2号道路（湖畔）·定点[异色] Lv51、牙牙湖西岸·冲浪 Lv43–46 5%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·冲浪 Lv43–46 5%、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 5%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 5%、美纳斯湖南岸·定点 Lv15、桥间空地·钓鱼 Lv27–30 5%、桥间空地·定点 Lv35、沙尘洼地·定点 Lv35、9号道路·冲浪 Lv40–43 5%、逆鳞湖·冲浪 Lv43–46 30%、逆鳞湖·钓鱼 Lv43–46 25%、逆鳞湖·定点 Lv51；铠岛：挑战海滩·冲浪 Lv45–48 5%、挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、健身之海·冲浪 Lv45–48 5%、健身之海·钓鱼 Lv45–48 5%、蜂巢海·冲浪 Lv45–48 15%、蜂巢海·钓鱼 Lv45–48 25%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>美纳斯湖南岸，牙牙湖西岸所有天气，战竞湾所有天气，牙牙湖西岸晴阴雨雷曝沙雾，揖礼原野，健身之海所有天气<br><span class="mod3">本体：牙牙湖东岸·钓鱼 Lv7–10 15%、机擎河岸·冲浪 Lv43–46 15%、9号道路·钓鱼 Lv40–43 15%；铠岛：揖礼原野·冲浪 Lv45–48 25%、揖礼原野·钓鱼 Lv9–12 5%、圆环海湾·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>９号道路，牙牙湖之眼所有天气，战竞湾所有天气，美纳斯湖南岸晴曝沙雾，25级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、9号道路·草丛 Lv40–43 15%；铠岛：挑战海滩·定点 Lv17、圆环海湾·冲浪 Lv45–48 25%、圆环海湾·定点 Lv17、列岛海域·冲浪 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>战竞湾，机擎河岸，逆鳞湖所有天气，揖礼原野，健身之海所有天气，列岛海域晴沙，离岛海域晴沙，蜂巢海晴沙，蜂巢岛晴沙，携带涟漪薰香生蛋<br><span class="mod3">本体：机擎河岸·冲浪 Lv43–46 5%、巨人帽岩·钓鱼 Lv27–30 25%、9号道路（战竞湾）·钓鱼 Lv40–43 15%；铠岛：揖礼原野·冲浪 Lv45–48 25%、挑战海滩·钓鱼 Lv9–12 5%、圆环海湾·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/226.png"></td>
            <td>巨翅飞鱼</td>
            <td>战竞湾，逆鳞湖所有天气，铁炮鱼同行时提升等级<br><span class="mod3">本体：牙牙湖东岸·冲浪 Lv43–46 15%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、9号道路（战竞湾）·冲浪 Lv40–43 25%、逆鳞湖·冲浪 Lv43–46 25%；铠岛：圆环海湾·冲浪 Lv45–48 25%、列岛海域·冲浪 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/278.png"></td>
            <td>长翅鸥</td>
            <td>大部分地区都有<br><span class="mod3">本体：2号道路·草丛 Lv4–7 5%、牙牙湖东岸·空中 Lv7–10 30%、美纳斯湖北岸·草丛 Lv7–10 15%、美纳斯湖南岸·草丛 Lv7–10 15%、美纳斯湖南岸·空中 Lv7–10 30%；铠岛：揖礼原野·冲浪 Lv45–48 15%、清凉湿原·水洼 Lv9–12 20%</span></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/279.png"></td>
            <td>大嘴鸥</td>
            <td>大部分地区都有，25级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 5%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 25%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 25%、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、9号道路·草丛 Lv40–43 15%、逆鳞湖·定点 Lv51；铠岛：锻炼平原·定点 Lv17、挑战海滩·冲浪 Lv45–48 15%、挑战海滩·定点 Lv17、离岛海域·冲浪 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>６号道路所有天气，机擎河岸阴，巨人镜池晴阴雨雷曝，清凉湿原所有天气<br><span class="mod1">巨人镜池（阴）·草丛随机遇敌 出现率30%→25%</span><br><span class="mod3">本体：沐光森林·草丛 Lv7–10 5%、3号道路·草丛 Lv15–18 15%、巨石原野·草丛 Lv27–30 15%；铠岛：清凉湿原·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>８号道路所有天气，逆鳞湖阴，桥间空地阴，机擎河岸晴雨雷曝，清凉湿原晴阴雨沙，挑战海滩阴雨，锻炼平原阴曝，40级进化<br><span class="mod3">本体：9号道路（尖钉镇郊外）·草丛 Lv40–43 5%；铠岛：清凉湿原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/206.png"></td>
            <td>土龙弟弟</td>
            <td>清凉湿原所有天气<br><span class="mod3">铠岛：清凉湿原·草丛 Lv9–12 5%、斗志洞窟·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/626.png"></td>
            <td>爆炸头水牛</td>
            <td>清凉湿原所有天气<br><span class="mod3">铠岛：锻炼平原·草丛 Lv9–12 15%、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>054</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/108.png"></td>
            <td>大舌头</td>
            <td>清凉湿原，战斗洞窟所有天气<br><span class="mod3">铠岛：清凉湿原·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/463.png"></td>
            <td>大舌舔</td>
            <td>清凉湿原晴雨沙，学会滚动时提升等级<br><span class="mod3">铠岛：清凉湿原·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>道路（2），机擎市郊外，第二矿山所有天气，道路（2），第二矿山，巨人帽岩所有天气，机擎河岸雨，巨人镜池雨，道路（2・4・5），水舟镇，机擎市，第二矿山所有天气，道路（2）所有天气，斗志洞窟所有天气<br><span class="mod1">机擎市郊外·草丛随机遇敌 移除10%（被不良蛙替换）</span><br><span class="mod3">本体：2号道路·草丛 Lv4–7 15%、2号道路·钓鱼 Lv4–7 25%、牙牙湖西岸·草丛 Lv7–10 15%、牙牙湖东岸·草丛 Lv7–10 15%、美纳斯湖北岸·草丛 Lv7–10 15%、美纳斯湖南岸·草丛 Lv7–10 15%、水舟镇·钓鱼 Lv21–24 5%、第二矿山·草丛 Lv23–26 15%；铠岛：清凉湿原·水洼 Lv9–12 30%</span></td>
        </tr>
        <tr>
            <td>057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>逆鳞湖雷，沙尘洼地雷，巨人帽岩雨雷，道路（6），桥间空地，巨人镜池所有天气，第二矿山，巨人帽岩，道路（2），牙牙湖西岸所有天气，斗志洞窟所有天气，揖礼原野晴，清凉湿原晴阴曝沙，挑战海滩晴阴雷曝沙，圆环海湾晴曝沙，22级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 15%、2号道路（湖畔）·钓鱼 Lv43–46 5%、2号道路（湖畔）·定点[超极巨] Lv51、牙牙湖西岸·定点[超极巨] Lv15、第二矿山·定点[超极巨] Lv31、9号道路（战竞湾）·草丛 Lv40–43 15%；铠岛：揖礼原野·定点[超极巨] Lv17、清凉湿原·定点[超极巨] Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>058</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>美纳斯湖南岸沙，牙牙湖西岸晴雨雷雾，巨人帽岩雨雷，巨人凳岩雨，清凉湿原所有天气<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 15%、4号道路·钓鱼 Lv17–20 15%；铠岛：清凉湿原·水洼 Lv9–12 25%</span></td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>巨人凳岩雨，逆鳞湖雨，巨人帽岩雨雷，清凉湿原所有天气，20级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15；铠岛：清凉湿原·定点 Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>盾：逆鳞湖雨，清凉湿原雨雷，专注森林雨雷<br><span class="mod1">牙牙湖之眼（晴）·草丛随机遇敌 新增30%（替换掘地兔）；牙牙湖之眼（雨）·草丛随机遇敌 新增20%（替换掘地兔）；牙牙湖之眼（晴）·地图可见 新增5%（替换豪力）；牙牙湖之眼（雨）·地图可见 新增25%（替换穿着熊）</span><br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、逆鳞湖·钓鱼 Lv43–46 30%；铠岛：清凉湿原·水洼 Lv9–12 10%、专注森林·钓鱼 Lv9–12 5%、蜂巢岛·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>061</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/705.png"></td>
            <td>黏美儿</td>
            <td>盾：逆鳞湖雷，40级进化<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 15%、逆鳞湖·钓鱼 Lv43–46 15%；铠岛：专注森林·定点 Lv17、蜂巢海·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>062</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/706.png"></td>
            <td>黏美龙</td>
            <td>50级进化<br><span class="mod3">本体：逆鳞湖·钓鱼 Lv43–46 5%；铠岛：蜂巢海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>063</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/621.png"></td>
            <td>赤面龙</td>
            <td>战斗洞窟，斗志洞窟，登顶隧道所有天气，雪中溪谷晴曝，通顶雪道晴<br><span class="mod3">铠岛：战斗洞窟·草丛 Lv9–12 5%、战斗洞窟·定点 Lv17、斗志洞窟·草丛 Lv9–12 5%、斗志洞窟·定点 Lv17；冠之雪原：雪中溪谷·定点 Lv19、登顶隧道·草丛 Lv11–14 10%、登顶隧道·定点 Lv19、通顶雪道·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，清凉湿原，巨人睡榻所有天气，锻炼平原雨<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 5%；铠岛：锻炼平原·草丛 Lv9–12 10%、锻炼平原·定点 Lv17；冠之雪原：巨人睡榻·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>专注森林雨，锻炼平原雷，与盖盖虫连接交换进化<br><span class="mod2">队伍中有 盖盖虫 or 骑士蜗牛 升级</span><br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，专注森林，远古墓地所有天气，锻炼平原阴<br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 5%；铠岛：锻炼平原·草丛 Lv9–12 10%、锻炼平原·定点 Lv17；冠之雪原：巨人睡榻·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>专注森林沙，锻炼平原沙，与小嘴蜗连接交换进化<br><span class="mod2">队伍中有小嘴蜗 or 敏捷虫 升级</span><br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/001.png"></td>
            <td>妙蛙种子</td>
            <td>马师傅武馆完成第一个修行后，2选1，可超极巨化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>069</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/002.png"></td>
            <td>妙蛙草</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/003.png"></td>
            <td>妙蛙花</td>
            <td>32级进化</td>
        </tr>
        <tr>
            <td>071</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/007.png"></td>
            <td>杰尼龟</td>
            <td>马师傅武馆完成第一个修行后，2选1，可超极巨化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>072</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/008.png"></td>
            <td>卡咪龟</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td>073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/009.png"></td>
            <td>水箭龟</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/543.png"></td>
            <td>百足蜈蚣</td>
            <td>专注森林所有天气<br><span class="mod3">铠岛：清凉湿原·树果树 Lv9–12 20%、专注森林·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/544.png"></td>
            <td>车轮球</td>
            <td>22级进化<br><span class="mod3">铠岛：专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/545.png"></td>
            <td>蜈蚣王</td>
            <td>专注森林阴，30级进化<br><span class="mod3">铠岛：专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/590.png"></td>
            <td>哎呀球菇</td>
            <td><span class="mod3">铠岛：专注森林·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/591.png"></td>
            <td>败露球菇</td>
            <td><span class="mod3">铠岛：专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/764.png"></td>
            <td>花疗环环</td>
            <td>揖礼原野晴沙，清凉湿原晴曝沙雾，专注森林曝雾，挑战海滩晴曝雾，锻炼平原雾，离岛海域雾，蜂巢岛雾<br><span class="mod3">铠岛：专注森林·草丛 Lv9–12 5%、专注森林·定点 Lv17、挑战海滩·定点 Lv17、离岛海域·定点 Lv53、蜂巢岛·草丛 Lv45–48 5%、蜂巢岛·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/114.png"></td>
            <td>蔓藤怪</td>
            <td>专注森林所有天气<br><span class="mod3">铠岛：专注森林·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/465.png"></td>
            <td>巨蔓藤</td>
            <td>专注森林晴曝，学会原始之力时提升等级<br><span class="mod3">铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>盾：机擎市郊外，第二矿山所有天气，第二矿山所有天气，桥间空地阴沙，巨石原野阴，巨人镜池晴阴，巨人镜池晴阴，巨人帽岩晴阴清凉湿原阴，专注森林阴，清凉湿原阴<br><span class="mod1">机擎市郊外·草丛随机遇敌 新增10%（替换咬咬龟）；机擎市郊外·地图可见 新增15%</span><br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 5%、第二矿山·草丛 Lv23–26 10%；铠岛：清凉湿原·草丛 Lv9–12 15%、挑战之路·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>盾：挑战之路雨雷，锻炼平原雨雷，巨石原野阴，37级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、巨石原野·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%</span></td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/172.png"></td>
            <td>皮丘</td>
            <td>专注森林雷，生蛋<br><span class="mod3">本体：2号道路·草丛 Lv4–7 5%、美纳斯湖北岸·草丛 Lv7–10 5%、美纳斯湖南岸·草丛 Lv7–10 5%；铠岛：专注森林·定点 Lv17、挑战海滩·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>巨石原野雨，道路（4）所有天气，巨石原野雷，煦丽草原雷，揖礼原野雷，清凉湿原雷，专注森林晴阴雨雷，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：2号道路·定点 Lv10、4号道路·草丛 Lv17–20 5%；铠岛：专注森林·定点 Lv17、挑战海滩·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>挑战海滩雷，清凉湿原雷，专注森林雷，雷之石进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 5%；铠岛：清凉湿原·定点[阿罗拉] Lv17、清凉湿原·定点 Lv17、专注森林·定点 Lv17、专注森林·定点[阿罗拉] Lv17、挑战海滩·定点 Lv17、挑战海滩·定点[阿罗拉] Lv17、离岛海域·草丛 Lv45–48 10%、离岛海域·草丛[阿罗拉] Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/570.png"></td>
            <td>索罗亚</td>
            <td>揖礼原野阴雾，清凉湿原阴雾，专注森林雾<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 5%、揖礼原野·定点 Lv17、清凉湿原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/571.png"></td>
            <td>索罗亚克</td>
            <td>圆环海湾阴雾，离岛海域阴，30级进化<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>盾：迷光森林所有天气，专注森林所有天气<br><span class="mod1">牙牙湖东岸（晴）·草丛随机遇敌 新增5%（替换童偶熊）；牙牙湖东岸（阴）·草丛随机遇敌 新增20%（替换泡沫栗鼠）；牙牙湖东岸（晴）·地图可见 新增25%；牙牙湖东岸（阴）·地图可见 新增50%（替换童偶熊）</span><br><span class="mod3">本体：迷光森林·草丛 Lv32–35 5%；铠岛：专注森林·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/766.png"></td>
            <td>投掷猴</td>
            <td>剑：迷光森林所有天气，专注森林所有天气<br><span class="mod3">本体：迷光森林·草丛 Lv32–35 5%；铠岛：专注森林·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>美纳斯湖南岸晴阴雨雷雪雾，第二矿山，巨人帽岩所有天气，，锻炼平原，专注森林所有天气<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 15%；铠岛：揖礼原野·沙滩 Lv9–12 20%、挑战海滩·冲浪（河流） Lv45–48 30%、斗志洞窟·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>巨人凳岩雷，牙牙湖之眼雨雷，草路镇所有天气，美纳斯湖南岸晴雷，专注森林阴雨雷，挑战海滩阴雨雷，锻炼平原阴，30级进化<br><span class="mod3">本体：牙牙湖东岸·定点 Lv15、9号道路·草丛 Lv40–43 10%；铠岛：锻炼平原·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>９号道路所有天气，逆鳞湖雨，巨石原野雨，桥间空地雨，牙牙湖之眼所有天气，锻炼平原所有天气，专注森林所有天气，挑战海滩晴阴雨曝沙雾<br><span class="mod3">本体：牙牙湖东岸·空中 Lv7–10 10%、美纳斯湖南岸·空中 Lv7–10 10%、机擎河岸·草丛 Lv27–30 15%、9号道路·草丛 Lv40–43 15%、牙牙湖之眼·定点 Lv51；铠岛：挑战海滩·草丛 Lv9–12 5%、挑战海滩·冲浪（河流） Lv45–48 5%、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>道路（4・5・6），牙牙湖西岸，牙牙湖东岸，巨人帽岩所有天气，桥间空地，美纳斯湖南岸所有天气，牙牙湖东岸晴阴雨雷曝雹沙雾，美纳斯湖北岸雨雷沙，牙牙湖西岸晴阴雨雷曝雹沙雾，专注森林所有天气<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 15%、牙牙湖东岸·钓鱼 Lv7–10 25%、桥间空地·冲浪 Lv43–46 25%；铠岛：揖礼原野·钓鱼 Lv9–12 15%、专注森林·冲浪 Lv45–48 15%、锻炼平原·冲浪 Lv45–48 30%、锻炼平原·钓鱼 Lv9–12 25%、离岛海域·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>美纳斯湖南岸晴阴雨雷沙，美纳斯湖北岸雨雷沙，牙牙湖西岸晴阴沙，牙牙湖东岸晴阴曝沙，桥间空地晴阴沙，逆鳞湖晴阴雷曝沙雾，33级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 15%、2号道路（湖畔）·钓鱼 Lv43–46 30%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·冲浪 Lv43–46 25%、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、9号道路·冲浪 Lv40–43 25%、逆鳞湖·定点 Lv51；铠岛：锻炼平原·冲浪 Lv45–48 5%、离岛海域·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>道路（2），水舟镇，机擎河岸所有天气，道路（2），机擎河岸所有天气，专注森林所有天气，锻炼平原所有天气<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 25%、牙牙湖西岸·钓鱼 Lv7–10 25%、牙牙湖东岸·钓鱼 Lv7–10 25%、美纳斯湖北岸·钓鱼 Lv7–10 25%、美纳斯湖南岸·钓鱼 Lv7–10 25%、巨人凳岩·钓鱼 Lv7–10 25%、机擎市·钓鱼 Lv13–16 25%、4号道路·钓鱼 Lv17–20 25%、5号道路·钓鱼 Lv20–23 25%、水舟镇·钓鱼 Lv21–24 30%、机擎河岸·冲浪 Lv43–46 30%、机擎河岸·钓鱼 Lv27–30 30%；铠岛：揖礼原野·钓鱼 Lv9–12 25%、专注森林·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 25%、锻炼平原·冲浪 Lv45–48 25%、离岛海域·钓鱼 Lv45–48 30%</span></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戽斗尖梭</td>
            <td>逆鳞湖，沙尘洼地，机擎河岸所有天气，道路（2），逆鳞湖所有天气，专注森林雨雷雾，挑战海滩晴雨雷曝沙雾，锻炼平原晴雨雷曝沙雾，26级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 25%、2号道路（湖畔）·钓鱼 Lv43–46 25%、牙牙湖西岸·冲浪 Lv43–46 30%、牙牙湖东岸·冲浪 Lv43–46 30%、美纳斯湖北岸·冲浪 Lv43–46 30%、美纳斯湖南岸·冲浪 Lv43–46 30%、机擎河岸·钓鱼 Lv27–30 5%、9号道路·冲浪 Lv40–43 15%；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17、挑战海滩·定点 Lv17、离岛海域·冲浪 Lv45–48 30%、离岛海域·钓鱼 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/120.png"></td>
            <td>海星星</td>
            <td>挑战海滩，锻炼平原所有天气<br><span class="mod3">铠岛：揖礼原野·沙滩 Lv9–12 15%、锻炼平原·沙滩 Lv9–12 25%、挑战海滩·沙滩 Lv9–12 15%、斗志洞窟·冲浪 Lv45–48 25%、圆环海湾·沙滩 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/121.png"></td>
            <td>宝石海星</td>
            <td>挑战海滩，揖礼原野所有天气，水之石进化<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、挑战海滩·冲浪 Lv45–48 25%、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/891.png"></td>
            <td>熊徒弟</td>
            <td>完成3大修行后</td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/892.png"></td>
            <td>武道熊师</td>
            <td>使用恶之挂轴或水之挂轴</td>
        </tr>
        <tr>
            <td>102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/587.png"></td>
            <td>电飞鼠</td>
            <td>专注森林所有天气摇晃树木<br><span class="mod3">铠岛：清凉湿原·树果树 Lv9–12 20%、专注森林·定点 Lv17、挑战海滩·草丛 Lv9–12 15%、挑战海滩·树果树 Lv9–12 20%、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 15%、离岛海域·树果树 Lv45–48 40%</span></td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/702.png"></td>
            <td>咚咚鼠</td>
            <td>挑战海滩所有天气<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17、挑战海滩·草丛 Lv9–12 15%、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>尖钉镇郊外所有天气，７号道路所有天气，逆鳞湖雷，挑战海滩所有天气，球湖湖畔阴雷<br><span class="mod3">本体：桥间空地·草丛 Lv27–30 15%、7号道路·草丛 Lv36–39 5%；铠岛：挑战海滩·草丛 Lv9–12 15%、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/081.png"></td>
            <td>小磁怪</td>
            <td>挑战海滩所有天气<br><span class="mod3">铠岛：挑战海滩·草丛 Lv9–12 5%、圆环海湾·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>106</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/082.png"></td>
            <td>三合一磁怪</td>
            <td>挑战海滩雷，挑战之路雷，锻炼平原雷，30级进化<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、挑战之路·定点 Lv17、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/462.png"></td>
            <td>自爆磁怪</td>
            <td>离岛海域雷，挑战海滩雷，圆环海湾雷，雷之石进化<br><span class="mod3">铠岛：挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、离岛海域·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>战竞湾所有天气，桥间空地晴雨雷曝雪雹沙，拳关丘陵晴阴雨曝雪雹雾，道路（7），桥间空地所有天气，沙尘洼地雪，巨人镜池雪，揖礼原野阴，挑战海滩阴，圆环海湾阴，锻炼平原阴<br><span class="mod1">拳关丘陵（晴）·草丛随机遇敌 移除25%（被幼基拉斯替换）；拳关丘陵（阴）·草丛随机遇敌 移除35%（被幼基拉斯替换）；拳关丘陵（曝）·草丛随机遇敌 移除15%（被幼基拉斯替换）</span><br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 15%、美纳斯湖南岸·草丛 Lv7–10 15%；铠岛：清凉湿原·草丛 Lv9–12 5%、圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>揖礼原野阴雨，清凉湿原阴雨，挑战海滩阴雨，圆环海湾阴雨，锻炼平原阴雨，30级进化<br><span class="mod2">Lv 30</span><br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、7号道路·草丛 Lv36–39 5%；铠岛：圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>９号道路，水舟镇，牙牙湖东岸，牙牙湖西岸，牙牙湖之眼所有天气，挑战海滩，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气<br><span class="mod3">本体：牙牙湖西岸·钓鱼 Lv7–10 25%、桥间空地·钓鱼 Lv27–30 25%；铠岛：揖礼原野·钓鱼 Lv9–12 25%、蜂巢海·钓鱼 Lv45–48 25%、蜂巢岛·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/318.png"></td>
            <td>利牙鱼</td>
            <td>锻炼平原所有天气<br><span class="mod3">铠岛：清凉湿原·钓鱼 Lv9–12 25%、锻炼平原·冲浪 Lv45–48 15%、挑战海滩·钓鱼 Lv9–12 25%、斗志洞窟·钓鱼 Lv9–12 25%、健身之海·钓鱼 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/319.png"></td>
            <td>巨牙鲨</td>
            <td>健身之海，列岛海域，离岛海域，蜂巢海所有天气，30级进化<br><span class="mod3">铠岛：健身之海·冲浪（追逐） Lv45–48 100%、列岛海域·冲浪（追逐） Lv45–48 100%、离岛海域·冲浪（追逐） Lv45–48 100%、蜂巢海·冲浪（追逐） Lv45–48 100%</span></td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/506.png"></td>
            <td>小约克</td>
            <td>锻炼平原所有天气<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 5%、锻炼平原·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/507.png"></td>
            <td>哈约克</td>
            <td>锻炼平原晴雾，16级进化<br><span class="mod3">铠岛：锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/508.png"></td>
            <td>长毛狗</td>
            <td>锻炼平原晴，32级进化<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、健身之海·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/128.png"></td>
            <td>肯泰罗</td>
            <td>锻炼平原所有天气肝帝威的游戏笔记<br><span class="mod3">铠岛：锻炼平原·草丛 Lv9–12 15%、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>117</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/241.png"></td>
            <td>大奶罐</td>
            <td>锻炼平原所有天气<br><span class="mod3">铠岛：锻炼平原·草丛 Lv9–12 15%、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/123.png"></td>
            <td>飞天螳螂</td>
            <td>锻炼平原所有天气<br><span class="mod3">铠岛：锻炼平原·草丛 Lv9–12 5%、锻炼平原·树果树 Lv9–12 40%、锻炼平原·定点 Lv17、列岛海域·树果树 Lv45–48 20%</span></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/212.png"></td>
            <td>巨钳螳螂</td>
            <td>携带金属膜连接交换<br><span class="mod2">金属外套 ; Lv 40</span><br><span class="mod3">铠岛：锻炼平原·树果树 Lv9–12 10%、锻炼平原·定点 Lv17、挑战之路·定点 Lv17、列岛海域·树果树 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/127.png"></td>
            <td>凯罗斯</td>
            <td>专注森林曝，挑战之路曝，锻炼平原晴曝<br><span class="mod3">铠岛：锻炼平原·草丛 Lv9–12 5%、锻炼平原·树果树 Lv9–12 20%、锻炼平原·定点 Lv17、列岛海域·树果树 Lv45–48 20%</span></td>
        </tr>
        <tr>
            <td>121</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/214.png"></td>
            <td>赫拉克罗斯</td>
            <td>专注森林曝，挑战之路曝，锻炼平原晴曝<br><span class="mod3">铠岛：锻炼平原·草丛 Lv9–12 5%、锻炼平原·树果树 Lv9–12 20%、锻炼平原·定点 Lv17、列岛海域·树果树 Lv45–48 40%</span></td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>煦丽草原沙，瞭望塔旧址沙，牙牙湖东岸沙，巨人凳岩曝沙，美纳斯湖北岸沙，拳关丘陵沙，牙牙湖西岸曝沙，美纳斯湖南岸沙，美纳斯湖北岸曝沙，巨石原野晴阴雨曝雪雹沙雾，斗志洞窟，圆环海湾所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 15%、巨石原野·草丛 Lv27–30 15%；铠岛：战斗洞窟·草丛 Lv9–12 10%、专注森林·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>牙牙湖之眼曝沙，８号道路所有天气，煦丽草原沙，巨石原野晴阴曝雪雹沙雾，美纳斯湖南岸曝，斗志洞窟所有天气，挑战之路沙，锻炼平原沙，34级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、8号道路·定点 Lv45；铠岛：专注森林·定点 Lv17、列岛海域·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>第二矿山所有天气，机擎河岸雨，巨人镜池雨，拳关丘陵雷，斗志洞窟晴雨雷曝沙雾<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 15%、第二矿山·草丛 Lv23–26 15%；铠岛：挑战海滩·沙滩 Lv9–12 20%、斗志洞窟·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>逆鳞湖雨，巨人帽岩雨，桥间空地晴雨雷，斗志洞窟所有天气，挑战海滩雨，30级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、9号道路（战竞湾）·草丛 Lv40–43 10%；铠岛：挑战海滩·定点 Lv17、斗志洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>９号道路，战竞湾所有天气，斗志洞窟，圆环海湾所有天气，冻海雷<br><span class="mod3">本体：美纳斯湖南岸·钓鱼 Lv7–10 5%、9号道路·草丛 Lv40–43 5%、9号道路·钓鱼 Lv40–43 25%、牙牙湖之眼·钓鱼 Lv43–46 25%；铠岛：挑战海滩·沙滩 Lv9–12 10%、圆环海湾·沙滩 Lv9–12 20%、圆环海湾·定点 Lv17、离岛海域·草丛 Lv45–48 15%；冠之雪原：冻海·草丛 Lv47–50 15%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>机擎河岸，巨人镜池所有天气，道路（9），尖钉镇郊外所有天气，圆环海湾所有天气<br><span class="mod3">本体：第二矿山·钓鱼 Lv23–26 25%、机擎河岸·草丛 Lv27–30 15%；铠岛：揖礼原野·沙滩 Lv9–12 10%、圆环海湾·沙滩 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>战竞湾所有天气，尖钉镇郊外晴，揖礼原野晴阴雾，挑战海滩阴雨雷雾，圆环海湾阴雨雾，38级进化<br><span class="mod3">本体：机擎河岸·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 5%；铠岛：揖礼原野·定点 Lv17、圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>129</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>战竞湾，尖钉镇郊外所有天气，圆环海湾所有天气，斗志洞窟所有天气<br><span class="mod3">本体：牙牙湖西岸·草丛 Lv7–10 10%、牙牙湖东岸·草丛 Lv7–10 10%、9号道路·草丛 Lv40–43 15%；铠岛：战斗洞窟·草丛 Lv9–12 15%、斗志洞窟·冲浪 Lv45–48 15%、圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>战竞湾，逆鳞湖所有天气，牙牙湖西岸晴阴曝雪雹沙雾，圆环海湾晴阴曝沙雾，学会挑衅时提升等级<br><span class="mod3">本体：9号道路（战竞湾）·草丛 Lv40–43 15%、9号道路（战竞湾）·定点 Lv48；铠岛：圆环海湾·定点 Lv17、健身之海·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>牙牙湖东岸所有天气，牙牙湖西岸雪，斗志洞窟，圆环海湾所有天气<br><span class="mod3">本体：美纳斯湖北岸·钓鱼 Lv7–10 25%、机擎市·钓鱼 Lv13–16 25%、桥间空地·冲浪 Lv43–46 15%、巨人帽岩·钓鱼 Lv27–30 30%、9号道路·钓鱼 Lv40–43 30%；铠岛：锻炼平原·钓鱼 Lv9–12 15%、斗志洞窟·冲浪 Lv45–48 30%、斗志洞窟·钓鱼 Lv9–12 30%、圆环海湾·钓鱼 Lv9–12 30%、离岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>巨人凳岩所有天气，牙牙湖西岸晴雾，牙牙湖东岸晴雾，斗志洞窟，圆环海湾所有天气，挑战海滩雨雾，圆环海湾雨，水之石进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 25%、巨人帽岩·钓鱼 Lv27–30 5%、9号道路·冲浪 Lv40–43 30%、9号道路·钓鱼 Lv40–43 5%；铠岛：挑战海滩·定点 Lv17、斗志洞窟·冲浪 Lv45–48 5%、圆环海湾·冲浪 Lv45–48 5%、圆环海湾·定点 Lv17、离岛海域·冲浪 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/769.png"></td>
            <td>沙丘娃</td>
            <td>圆环海湾所有天气<br><span class="mod3">铠岛：挑战海滩·沙滩 Lv9–12 25%、圆环海湾·沙滩 Lv9–12 25%</span></td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/770.png"></td>
            <td>噬沙堡爷</td>
            <td>圆环海湾阴沙雾，42级进化<br><span class="mod3">铠岛：挑战海滩·定点 Lv17、圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>瞭望塔旧址晴曝雪雹，５号道路所有天气，瞭望塔旧址晴阴雷曝雪，美纳斯湖北岸雾，美纳斯湖南岸晴雾，圆环海湾雾，揖礼原野雾，圆环海湾雾，健身之海雾，离岛海域雾，列岛海域雾，蜂巢海雾，蜂巢岛雾<br><span class="mod1">瞭望塔旧址（晴）·地图可见 出现率15%→10%</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 15%、瞭望塔旧址·空中 Lv7–10 30%、机擎市郊外·草丛 Lv24–27 10%；铠岛：挑战海滩·草丛 Lv9–12 5%、斗志洞窟·草丛 Lv9–12 10%、圆环海湾·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>牙牙湖之眼雾，瞭望塔旧址晴曝雪，美纳斯湖北岸雾，美纳斯湖南岸雾，挑战海滩阴雾，挑战之路雾，锻炼平原雾，28级进化<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15、巨石原野·空中 Lv27–30 10%、巨人镜池·空中 Lv27–30 30%；铠岛：锻炼平原·定点 Lv17、挑战之路·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>137</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/339.png"></td>
            <td>泥泥鳅</td>
            <td>大部分地区垂钓或者冲浪可遇到<br><span class="mod3">本体：牙牙湖西岸·钓鱼 Lv7–10 15%、巨人凳岩·钓鱼 Lv7–10 25%、4号道路·钓鱼 Lv17–20 25%、第二矿山·钓鱼 Lv23–26 30%、沙尘洼地·冲浪 Lv43–46 25%、沙尘洼地·钓鱼 Lv27–30 30%、巨人镜池·冲浪 Lv43–46 25%；铠岛：清凉湿原·钓鱼 Lv9–12 25%、战斗洞窟·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 25%、斗志洞窟·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 15%；冠之雪原：巨人鞋底·冲浪 Lv47–50 30%、巨人鞋底·钓鱼 Lv11–14 30%、海鸣洞窟·冲浪 Lv47–50 30%</span></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>微寐森林所有天气，美纳斯湖北岸晴阴雷曝沙，美纳斯湖南岸晴雷曝沙，斗志洞窟，战斗洞窟，巨人睡榻所有天气，专注森林晴阴曝沙，30级进化<br><span class="mod3">本体：牙牙湖西岸·冲浪 Lv43–46 25%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、沙尘洼地·钓鱼 Lv27–30 5%；铠岛：战斗洞窟·定点 Lv17、专注森林·定点 Lv17、斗志洞窟·定点 Lv17、列岛海域·冲浪 Lv45–48 25%；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/298.png"></td>
            <td>露力丽</td>
            <td>战斗洞窟所有天气，携带海潮薰香生蛋<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>140</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/183.png"></td>
            <td>玛力露</td>
            <td>揖礼原野雨，清凉湿原雨，挑战海滩晴沙，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·草丛 Lv9–12 10%、清凉湿原·定点 Lv17、挑战海滩·草丛 Lv9–12 10%、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/184.png"></td>
            <td>玛力露丽</td>
            <td>专注森林雾，清凉湿原雾，挑战海滩雾，锻炼平原雾<br><span class="mod3">铠岛：清凉湿原·定点 Lv17、专注森林·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/060.png"></td>
            <td>蚊香蝌蚪</td>
            <td>战斗洞窟所有天气<br><span class="mod3">铠岛：清凉湿原·水洼 Lv9–12 15%、战斗洞窟·草丛 Lv9–12 15%、战斗洞窟·冲浪 Lv45–48 30%、锻炼平原·沙滩 Lv9–12 10%、蜂巢岛·冲浪 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>143</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/061.png"></td>
            <td>蚊香君</td>
            <td>清凉湿原雨雷雾，25级进化<br><span class="mod3">铠岛：清凉湿原·定点 Lv17、战斗洞窟·冲浪 Lv45–48 15%、战斗洞窟·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/062.png"></td>
            <td>蚊香泳士</td>
            <td>战斗洞窟所有天气，水之石进化<br><span class="mod3">铠岛：战斗洞窟·冲浪 Lv45–48 5%、战斗洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/186.png"></td>
            <td>蚊香蛙皇</td>
            <td>清凉湿原雨雷，携带王者之证链接交换<br><span class="mod2">王者之证 ;Lv 40</span><br><span class="mod3">铠岛：清凉湿原·定点 Lv17、蜂巢海·冲浪 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/054.png"></td>
            <td>可达鸭</td>
            <td>挑战海滩所有天气，战斗洞窟沙雾<br><span class="mod3">铠岛：清凉湿原·草丛 Lv9–12 10%、锻炼平原·沙滩 Lv9–12 15%、圆环海湾·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/055.png"></td>
            <td>哥达鸭</td>
            <td>战斗洞窟所有天气，专注森林雨，挑战海滩雷曝，锻炼平原晴阴雨雷曝，33级进化<br><span class="mod3">铠岛：清凉湿原·定点 Lv17、锻炼平原·定点 Lv17、圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/293.png"></td>
            <td>咕妞妞</td>
            <td>战斗洞窟所有天气肝帝威的游戏笔记<br><span class="mod3">铠岛：战斗洞窟·草丛 Lv9–12 15%、热身洞穴·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/294.png"></td>
            <td>吼爆弹</td>
            <td>战斗洞窟所有天气，20级进化<br><span class="mod3">铠岛：战斗洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/295.png"></td>
            <td>爆音怪</td>
            <td>40级进化</td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>伽勒尔矿山所有天气，伽勒尔矿山，瞭望塔旧址，桥间空地所有天气，巨人镜池晴<br><span class="mod3">本体：瞭望塔旧址·空中 Lv7–10 20%、美纳斯湖南岸·空中 Lv7–10 20%、伽勒尔矿山·草丛 Lv16–19 5%、伽勒尔矿山·定点 Lv24；铠岛：战斗洞窟·草丛 Lv9–12 15%、斗志洞窟·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>战斗洞窟，斗志洞窟所有天气，锻炼平原阴，挑战海滩阴，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：巨人镜池·空中 Lv27–30 10%；铠岛：战斗洞窟·定点 Lv17、锻炼平原·定点 Lv17、斗志洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/227.png"></td>
            <td>盔甲鸟</td>
            <td>挑战之路，锻炼平原沙<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、锅底沙漠·草丛 Lv9–12 5%、挑战之路·草丛 Lv9–12 5%、挑战之路·定点 Lv17、列岛海域·树果树 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>伽勒尔矿山，机擎市郊外所有天气，伽勒尔矿山，煦丽草原所有天气，巨石原野沙<br><span class="mod3">本体：煦丽草原·地面 Lv7–10 20%、巨人凳岩·草丛 Lv7–10 15%、伽勒尔矿山·草丛 Lv16–19 15%；铠岛：战斗洞窟·草丛 Lv9–12 10%、热身洞穴·草丛 Lv9–12 15%、锅底沙漠·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/525.png"></td>
            <td>地幔岩</td>
            <td>沙尘洼地晴曝沙，战斗洞窟所有天气，25级进化<br><span class="mod3">本体：煦丽草原·定点 Lv15、巨人凳岩·定点 Lv15、巨人镜池·地面 Lv27–30 30%、8号道路·草丛 Lv37–40 15%；铠岛：战斗洞窟·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>巨石原野晴雷曝雪沙，８号道路，巨人镜池，巨人帽岩所有天气，逆鳞湖沙，链接交换金海<br><span class="mod2">Lv 40</span><br><span class="mod3">本体：沙尘洼地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>157</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/744.png"></td>
            <td>岩狗狗</td>
            <td>揖礼原野晴阴，清凉湿原晴，挑战之路晴阴曝雾，圆环海湾晴<br><span class="mod3">铠岛：揖礼原野·草丛 Lv9–12 5%、揖礼原野·定点[我行我素] Lv17、清凉湿原·定点[我行我素] Lv17、锻炼平原·定点[黄昏] Lv17、挑战之路·草丛 Lv9–12 15%、挑战之路·定点[我行我素] Lv17</span></td>
        </tr>
        <tr>
            <td>158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/745.png"></td>
            <td>鬃岩狼人</td>
            <td>挑战之路晴阴，25级进化注意进化时间<br><span class="mod3">铠岛：锻炼平原·定点[黄昏] Lv17、挑战之路·定点[白昼] Lv17、挑战之路·定点[黑夜] Lv17、挑战之路·定点[黄昏] Lv17、列岛海域·草丛[白昼] Lv45–48 5%、列岛海域·草丛[黑夜] Lv45–48 5%、列岛海域·草丛[黄昏] Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/757.png"></td>
            <td>夜盗火蜥</td>
            <td>巨石原野曝，挑战之路所有天气<br><span class="mod3">本体：3号道路·草丛 Lv15–18 15%、巨石原野·草丛 Lv27–30 5%；铠岛：热身洞穴·草丛 Lv9–12 15%、锅底沙漠·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>160</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/758.png"></td>
            <td>焰后蜥</td>
            <td>挑战之路曝，等级33以上（雌性）<br><span class="mod3">铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>剑：机擎市郊外，第二矿山所有天气，第二矿山所有天气，桥间空地阴沙，巨石原野阴，巨人镜池晴阴，巨人镜池晴阴，巨人帽岩晴阴清凉湿原阴，专注森林阴，清凉湿原阴<br><span class="mod1">沙尘洼地（晴）·地图可见 移除15%（被勾魂眼替换）</span><br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 5%、第二矿山·草丛 Lv23–26 10%；铠岛：清凉湿原·草丛 Lv9–12 15%、挑战之路·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>剑：挑战之路雨雷，锻炼平原雨雷，巨石原野阴，39级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、巨石原野·定点 Lv35、9号道路（尖钉镇郊外）·草丛 Lv40–43 15%</span></td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/619.png"></td>
            <td>功夫鼬</td>
            <td>挑战之路所有天气<br><span class="mod3">铠岛：战斗洞窟·草丛 Lv9–12 5%、挑战之路·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/620.png"></td>
            <td>师父鼬</td>
            <td>挑战之路晴，50级进化<br><span class="mod3">铠岛：挑战之路·定点 Lv17、健身之海·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>剑：逆鳞湖阴曝，挑战之路曝沙雾，锻炼平原沙<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%；铠岛：战斗洞窟·草丛 Lv9–12 5%、挑战之路·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/783.png"></td>
            <td>鳞甲龙</td>
            <td>剑：逆鳞湖雷，35级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15、逆鳞湖·草丛 Lv43–46 15%；铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/784.png"></td>
            <td>杖尾鳞甲龙</td>
            <td>剑：沙尘洼地晴曝雪雹沙雾，45级进化<br><span class="mod3">铠岛：离岛海域·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/027.png"></td>
            <td>穿山鼠</td>
            <td>热身洞穴所有天气。阿罗拉形态揖礼原野地鼠训练家赠送<br><span class="mod3">铠岛：热身洞穴·草丛 Lv9–12 10%、锅底沙漠·草丛 Lv9–12 15%、斗志洞窟·草丛[阿罗拉] Lv9–12 15%、斗志洞窟·定点[阿罗拉] Lv17</span></td>
        </tr>
        <tr>
            <td>169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/028.png"></td>
            <td>穿山王</td>
            <td>专注森林沙，锅底沙漠沙，25级进化，阿罗拉形态冰之石进化<br><span class="mod3">铠岛：锅底沙漠·定点 Lv17、斗志洞窟·定点[阿罗拉] Lv17、列岛海域·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/104.png"></td>
            <td>卡拉卡拉</td>
            <td>热身洞穴所有天气，专注森林沙<br><span class="mod3">铠岛：热身洞穴·草丛 Lv9–12 10%、锅底沙漠·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>171</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/105.png"></td>
            <td>嘎啦嘎啦</td>
            <td>锅底沙漠晴曝雾，阿罗拉形态揖礼原野地鼠训练家赠送，凯岛交换，等级28以上<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、锅底沙漠·定点[阿罗拉] Lv17、挑战之路·定点 Lv17、列岛海域·草丛 Lv45–48 10%</span></td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/115.png"></td>
            <td>袋兽</td>
            <td>热身洞穴所有天气，锻炼平原晴阴<br><span class="mod3">铠岛：锻炼平原·定点 Lv17、热身洞穴·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>６号道路所有天气，巨人镜池曝，机擎河岸曝，巨人帽岩曝，热身洞穴所有天气，锅底沙漠晴阴雨曝沙雾<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 5%、6号道路·草丛 Lv29–32 5%；铠岛：热身洞穴·草丛 Lv9–12 5%、锅底沙漠·草丛 Lv9–12 5%、锅底沙漠·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>东第３区，西第２区，烘烘沙漠，专注森林沙，挑战之路沙，锻炼平原沙，锅底沙漠沙<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 5%、6号道路·草丛 Lv29–32 15%；铠岛：锅底沙漠·草丛 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>８号道路所有天气，逆鳞湖曝，锅底沙漠晴曝雾，36级进化<br><span class="mod3">本体：沙尘洼地·定点[超极巨] Lv35、8号道路·草丛 Lv37–40 15%；铠岛：锅底沙漠·定点[超极巨] Lv17</span></td>
        </tr>
        <tr>
            <td>176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/551.png"></td>
            <td>黑眼鳄</td>
            <td>锅底沙漠晴阴雨曝沙雾<br><span class="mod3">铠岛：热身洞穴·草丛 Lv9–12 15%、锅底沙漠·草丛 Lv9–12 15%、挑战海滩·草丛 Lv9–12 5%、斗志洞窟·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/552.png"></td>
            <td>混混鳄</td>
            <td>锅底沙漠阴雨，29级进化<br><span class="mod3">铠岛：锅底沙漠·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/553.png"></td>
            <td>流氓鳄</td>
            <td>锅底沙漠阴雨，40级进化<br><span class="mod3">铠岛：锅底沙漠·定点 Lv17、挑战海滩·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>剑：桥间空地沙，８号道路，巨石原野所有天气，锅底沙漠晴阴雨曝沙雾<br><span class="mod3">本体：巨石原野·空中 Lv27–30 30%、沙尘洼地·空中 Lv27–30 30%；铠岛：挑战之路·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>剑：沙尘洼地所有天气，逆鳞湖晴，挑战之路阴，锅底沙漠晴阴雨曝沙雾，54级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、沙尘洼地·空中 Lv27–30 10%；铠岛：挑战之路·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>盾：桥间空地沙，８号道路，巨石原野所有天气，锅底沙漠晴阴雨曝沙雾<br><span class="mod1">巨石原野（晴）·草丛随机遇敌 新增30%（替换蝶结萌虻）；巨石原野（阴）·草丛随机遇敌 新增40%（替换木棉球）；巨石原野（曝）·草丛随机遇敌 新增20%（替换捣蛋小妖）；巨石原野（沙）·草丛随机遇敌 新增30%（替换螺钉地鼠）；巨石原野（晴）·地图可见 新增35%（替换蛇纹熊（伽勒尔））；巨石原野（阴）·地图可见 新增10%（替换天秤偶）；巨石原野（曝）·地图可见 新增30%（替换蛇纹熊（伽勒尔））；巨石原野（沙）·地图可见 新增30%（替换蛇纹熊（伽勒尔））</span><br><span class="mod3">本体：巨石原野·空中 Lv27–30 30%、沙尘洼地·空中 Lv27–30 30%；铠岛：挑战之路·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>182</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>盾：沙尘洼地所有天气，逆鳞湖晴，挑战之路阴，锅底沙漠晴阴雨曝沙雾，54级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、沙尘洼地·空中 Lv27–30 10%；铠岛：锅底沙漠·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>８号道路所有天气，机擎河岸曝沙，桥间空地沙，巨石原野沙，巨人帽岩所有天气，巨人镜池沙，锅底沙漠晴阴雨曝沙雾<br><span class="mod3">本体：沙尘洼地·草丛 Lv27–30 5%；铠岛：战斗洞窟·草丛 Lv9–12 5%、热身洞穴·草丛 Lv9–12 5%、锅底沙漠·草丛 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>184</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀兽</td>
            <td>１０号道路所有天气，沙尘洼地曝，逆鳞湖曝，巨石原野所有天气机擎河岸曝沙，巨人凳岩晴，沙尘洼地雨雷雪，桥间空地曝沙，逆鳞湖沙，锅底沙漠晴曝沙，42级进化<br><span class="mod3">本体：巨石原野·定点 Lv35、沙尘洼地·定点 Lv35、8号道路·草丛 Lv37–40 15%；铠岛：锅底沙漠·定点 Lv17、列岛海域·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/464.png"></td>
            <td>超甲狂犀</td>
            <td>锅底沙漠晴曝沙雾，携带护具连接交换<br><span class="mod2">护具 ; Lv 60</span><br><span class="mod3">铠岛：锅底沙漠·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>186</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/636.png"></td>
            <td>燃烧虫</td>
            <td>专注森林曝，圆环海湾曝沙<br><span class="mod3">铠岛：专注森林·草丛 Lv9–12 5%、热身洞穴·草丛 Lv9–12 5%</span></td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/637.png"></td>
            <td>火神蛾</td>
            <td>挑战海滩曝，离岛海域曝，锅底沙漠曝，59级进化<br><span class="mod3">铠岛：专注森林·定点 Lv17、锅底沙漠·定点 Lv17、离岛海域·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>水舟镇，巨人镜池所有天气，牙牙湖东岸雷，牙牙湖西岸雷，健身之海雷，列岛海域雷，离岛海域雷，蜂巢海雷，蜂巢岛雷<br><span class="mod3">本体：美纳斯湖南岸·钓鱼 Lv7–10 25%、机擎市·钓鱼 Lv13–16 15%、水舟镇·钓鱼 Lv21–24 15%、沙尘洼地·冲浪 Lv43–46 5%、巨人镜池·冲浪 Lv43–46 5%；铠岛：战斗洞窟·冲浪 Lv45–48 25%、圆环海湾·钓鱼 Lv9–12 15%、离岛海域·钓鱼 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>桥间空地，沙尘洼地，逆鳞湖所有天气，美纳斯湖南岸雷，牙牙湖东岸晴雷雾，牙牙湖西岸雷，桥间空地雷，逆鳞湖晴雷梦世界冰洞，浅滩洞穴，健身之海雷，列岛海域雷，离岛海域雷，蜂巢海雷，蜂巢岛雷，挑战海滩雷雾，圆环海湾雷，27级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 25%、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、9号道路·冲浪 Lv40–43 25%、逆鳞湖·定点 Lv51、微寐森林·钓鱼 Lv57–60 25%；铠岛：挑战海滩·定点 Lv17、圆环海湾·冲浪 Lv45–48 15%、圆环海湾·定点 Lv17、离岛海域·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>战竞湾所有天气，机擎河岸所有天气，蜂巢海，蜂巢岛，冻海所有天气<br><span class="mod3">本体：机擎河岸·定点 Lv35、桥间空地·冲浪 Lv43–46 5%、巨人帽岩·钓鱼 Lv27–30 25%、9号道路（战竞湾）·钓鱼 Lv40–43 30%；铠岛：揖礼原野·冲浪 Lv45–48 5%、挑战海滩·钓鱼 Lv9–12 25%、健身之海·冲浪 Lv45–48 30%</span></td>
        </tr>
        <tr>
            <td>191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/321.png"></td>
            <td>吼鲸王</td>
            <td>战竞湾所有天气，健身之海所有天气，40级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、9号道路（战竞湾）·冲浪 Lv40–43 25%、逆鳞湖·冲浪 Lv43–46 25%；铠岛：健身之海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>192</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/592.png"></td>
            <td>轻飘飘</td>
            <td>美纳斯湖北岸所有天气，牙牙湖东岸晴阴雨曝雪沙雾，牙牙湖西岸晴阴雨曝雪雹沙雾，桥间空地雷，沙尘洼地晴阴雨雷曝雹沙雾，巨人镜池晴阴雨雷曝雹沙雾，列岛海域所有天气<br><span class="mod3">本体：沙尘洼地·冲浪 Lv43–46 15%、巨人镜池·冲浪 Lv43–46 15%、巨人镜池·钓鱼 Lv27–30 25%、6号道路·钓鱼 Lv29–32 30%；铠岛：挑战海滩·冲浪（河流） Lv45–48 15%、挑战海滩·钓鱼 Lv9–12 15%</span></td>
        </tr>
        <tr>
            <td>193</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>逆鳞湖雷，９号道路所有天气，尖钉镇郊外阴雨雷曝雪雹沙雾，美纳斯湖南岸雨雾，美纳斯湖北岸晴阴雨雷雾，牙牙湖东岸晴阴雨雷雾，牙牙湖西岸阴雨雾，桥间空地雨雾，逆鳞湖晴阴雨雷曝，列岛海域阴雾，健身之海阴雾，离岛海域阴雾，蜂巢海阴雾，蜂巢岛阴雾，挑战海滩阴雨雾，圆环海湾阴雾，40级进化<br><span class="mod3">本体：牙牙湖西岸·冲浪 Lv43–46 15%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、6号道路·钓鱼 Lv29–32 5%、9号道路（战竞湾）·冲浪 Lv40–43 15%、逆鳞湖·定点 Lv51、微寐森林·钓鱼 Lv57–60 25%；铠岛：挑战海滩·冲浪 Lv45–48 25%、挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、列岛海域·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/690.png"></td>
            <td>垃垃藻</td>
            <td>盾：健身之海，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气<br><span class="mod3">铠岛：清凉湿原·钓鱼 Lv9–12 15%、挑战海滩·冲浪（河流） Lv45–48 25%、斗志洞窟·钓鱼 Lv9–12 5%、健身之海·钓鱼 Lv45–48 25%、蜂巢岛·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/691.png"></td>
            <td>毒藻龙</td>
            <td>盾：健身之海，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气，48级进化<br><span class="mod3">铠岛：健身之海·冲浪 Lv45–48 25%、蜂巢海·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/692.png"></td>
            <td>铁臂枪虾</td>
            <td>剑：健身之海，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气<br><span class="mod3">铠岛：清凉湿原·钓鱼 Lv9–12 5%、挑战海滩·冲浪（河流） Lv45–48 25%、斗志洞窟·钓鱼 Lv9–12 15%、健身之海·钓鱼 Lv45–48 25%、蜂巢岛·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/693.png"></td>
            <td>钢炮臂虾</td>
            <td>剑：健身之海，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气，37级进化<br><span class="mod3">铠岛：健身之海·冲浪 Lv45–48 25%、蜂巢海·冲浪 Lv45–48 25%</span></td>
        </tr>
        <tr>
            <td>198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/116.png"></td>
            <td>墨海马</td>
            <td>离岛海域所有天气<br><span class="mod3">铠岛：专注森林·冲浪 Lv45–48 30%、专注森林·钓鱼 Lv9–12 15%、锻炼平原·钓鱼 Lv9–12 25%、圆环海湾·钓鱼 Lv9–12 5%、蜂巢岛·冲浪 Lv45–48 30%、蜂巢岛·钓鱼 Lv45–48 30%</span></td>
        </tr>
        <tr>
            <td>199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/117.png"></td>
            <td>海刺龙</td>
            <td>蜂巢海晴阴雨曝沙雾，32级进化<br><span class="mod3">铠岛：专注森林·冲浪 Lv45–48 5%、锻炼平原·钓鱼 Lv9–12 5%、蜂巢海·冲浪 Lv45–48 30%、蜂巢海·钓鱼 Lv45–48 30%、蜂巢岛·冲浪 Lv45–48 5%、蜂巢岛·钓鱼 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/230.png"></td>
            <td>刺龙王</td>
            <td>蜂巢海雷，携带龙之鳞片链接交换进化<br><span class="mod2">龙鳞 ; Lv 50</span><br><span class="mod3">铠岛：蜂巢海·钓鱼 Lv45–48 5%、蜂巢海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/548.png"></td>
            <td>百合根娃娃</td>
            <td>蜂巢岛所有天气<br><span class="mod3">铠岛：专注森林·草丛 Lv9–12 15%、专注森林·树果树 Lv9–12 20%、圆环海湾·树果树 Lv9–12 10%</span></td>
        </tr>
        <tr>
            <td>202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/549.png"></td>
            <td>裙儿小姐</td>
            <td>清凉湿原曝，挑战海滩曝，锻炼平原曝，蜂巢岛晴曝沙，日之石进化<br><span class="mod3">铠岛：清凉湿原·定点 Lv17、专注森林·定点 Lv17、圆环海湾·定点 Lv17、蜂巢岛·草丛 Lv45–48 15%、蜂巢岛·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/415.png"></td>
            <td>三蜜蜂</td>
            <td>煦丽草原晴，蜂巢岛所有天气<br><span class="mod3">本体：煦丽草原·树果树 Lv7–10 20%、煦丽草原·空中 Lv7–10 20%、3号道路·树果树 Lv15–18 20%、4号道路·树果树 Lv17–20 40%、机擎河岸·树果树 Lv27–30 20%；铠岛：挑战海滩·树果树 Lv9–12 20%、健身之海·树果树 Lv45–48 20%、蜂巢岛·草丛 Lv45–48 15%</span></td>
        </tr>
        <tr>
            <td>204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/416.png"></td>
            <td>蜂女王</td>
            <td>煦丽草原晴，等级21以上（雌性）<br><span class="mod3">本体：煦丽草原·定点 Lv15、6号道路·树果树 Lv29–32 20%、牙牙湖之眼·树果树 Lv43–46 20%；铠岛：专注森林·定点 Lv17、挑战海滩·树果树 Lv9–12 10%、健身之海·树果树 Lv45–48 10%、蜂巢岛·草丛 Lv45–48 15%、蜂巢岛·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/102.png"></td>
            <td>蛋蛋</td>
            <td><span class="mod3">铠岛：揖礼原野·树果树 Lv9–12 20%、专注森林·草丛 Lv9–12 10%、圆环海湾·树果树 Lv9–12 20%</span></td>
        </tr>
        <tr>
            <td>206</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/103.png"></td>
            <td>椰蛋树</td>
            <td><span class="mod3">铠岛：揖礼原野·定点 Lv17、清凉湿原·定点 Lv17、清凉湿原·定点[阿罗拉] Lv17、健身之海·定点 Lv53、离岛海域·树果树 Lv45–48 10%、离岛海域·树果树[阿罗拉] Lv45–48 10%、离岛海域·定点 Lv53、离岛海域·定点[阿罗拉] Lv53、蜂巢岛·草丛 Lv45–48 5%、蜂巢岛·草丛[阿罗拉] Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>207</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/132.png"></td>
            <td>百变怪</td>
            <td>逆鳞湖所有天气，健身之海所有天气<br><span class="mod3">本体：牙牙湖之眼·草丛 Lv43–46 15%；铠岛：锻炼平原·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 5%、健身之海·定点 Lv53</span></td>
        </tr>
        <tr>
            <td>208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/137.png"></td>
            <td>多边兽</td>
            <td><span class="mod3">铠岛：圆环海湾·草丛 Lv9–12 5%、健身之海·草丛 Lv45–48 5%</span></td>
        </tr>
        <tr>
            <td>209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/233.png"></td>
            <td>多边兽Ⅱ</td>
            <td><span class="mod2">升级数据 ; Lv 22</span><br><span class="mod3">铠岛：圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/474.png"></td>
            <td>多边兽Ｚ</td>
            <td><span class="mod2">可疑补丁 ; Lv 44</span><br><span class="mod3">铠岛：圆环海湾·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>211</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/893.png"></td>
            <td>萨戮德</td>
            <td></td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>编号</th>
            <th>图片</th>
            <th>名称</th>
            <th>捕获方式</th>
        </tr>
    </thead>
    <tbody id="pokeTable2">
        <tr>
            <td>001</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>泉烟小路，１０号道路所有天气，逆鳞湖雪，起橇雪原，雪中溪谷，通顶雪道所有天气<br><span class="mod1">10号道路·草丛随机遇敌 移除10%（被冰砌鹅替换）</span><br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%、巨人帽岩·树果树 Lv27–30 40%、8号道路（泉烟小路）·草丛 Lv37–40 15%；冠之雪原：起橇雪原·草丛 Lv11–14 5%、起橇雪原·树果树 Lv11–14 40%、冰点雪原·树果树 Lv11–14 40%、通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>002</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/873.png"></td>
            <td>雪绒蛾</td>
            <td>通顶雪道所有天气，友好度158以上提升等级（夜晚）<br><span class="mod3">本体：巨人帽岩·树果树 Lv27–30 10%、8号道路（泉烟小路）·草丛 Lv37–40 5%、9号道路（战竞湾）·树果树 Lv40–43 40%、10号道路·草丛 Lv50–53 15%；冠之雪原：起橇雪原·树果树 Lv11–14 10%、起橇雪原·定点 Lv19、通顶雪道·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>道路（4）所有天气，道路（1）所有天气机擎河岸晴雪，起橇雪原，冰点雪原，巨人睡榻，雪中溪谷，三岔平原晴曝<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·草丛 Lv7–10 15%；冠之雪原：冰点雪原·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>004</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>机擎河岸晴阴，沙尘洼地晴，拳关丘陵晴，煦丽草原所有天气，起橇雪原晴曝，冰点雪原晴曝，巨人睡榻晴，雪中溪谷晴曝，24级进化<br><span class="mod1">沙尘洼地（晴）·草丛随机遇敌 移除30%（被勾魂眼替换）</span><br><span class="mod3">本体：煦丽草原·定点 Lv15；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>005</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>道路（1），微寐森林所有天气,道路（1・2），微寐森林所有天气,列岛海域所有天气,球湖湖畔晴阴雨雷曝雪雾,列岛海域，球湖湖畔所有天气.摇晃树木<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·树果树 Lv7–10 40%、美纳斯湖北岸·树果树 Lv7–10 20%、巨人凳岩·树果树 Lv7–10 40%、3号道路·树果树 Lv15–18 40%、桥间空地·树果树 Lv27–30 40%、巨人帽岩·树果树 Lv27–30 20%；铠岛：揖礼原野·树果树 Lv9–12 40%、清凉湿原·树果树 Lv9–12 40%、挑战海滩·树果树 Lv9–12 40%；冠之雪原：起橇雪原·树果树 Lv11–14 20%、冰点雪原·树果树 Lv11–14 20%、巨人睡榻·树果树 Lv11–14 40%、巨人鞋底·树果树 Lv11–14 40%</span></td>
        </tr>
        <tr>
            <td>006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>桥间空地所有天气，球湖湖畔，巨树丘陵所有天气，巨人睡榻晴阴雨雷雪雹雾，摇晃树木，24级进化<br><span class="mod3">本体：桥间空地·树果树 Lv27–30 10%、桥间空地·定点 Lv35、巨人帽岩·树果树 Lv27–30 10%、6号道路·树果树 Lv29–32 40%、7号道路·树果树 Lv36–39 40%、9号道路（战竞湾）·树果树 Lv40–43 20%、逆鳞湖·树果树 Lv43–46 40%；铠岛：揖礼原野·树果树 Lv9–12 10%、挑战海滩·树果树 Lv9–12 10%、健身之海·树果树 Lv45–48 40%；冠之雪原：巨人睡榻·树果树 Lv11–14 10%、巨人睡榻·定点 Lv19、球湖湖畔·树果树 Lv47–50 10%、球湖湖畔·定点 Lv55、巨树丘陵·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>007</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>煦丽草原雪雹，巨人凳岩雪雹，巨人镜池雪雹，拳关丘陵雪，起橇雪原所有天气<br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 5%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>008</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>沙尘洼地雪，逆鳞湖雪，煦丽草原雪雹，牙牙湖东岸雪雹，沙尘洼地雪雹，起橇雪原，海鸣洞窟所有天气，33级进化<br><span class="mod3">本体：煦丽草原·定点 Lv15、沙尘洼地·定点 Lv35、巨人帽岩·地面 Lv27–30 20%；冠之雪原：起橇雪原·定点 Lv19、海鸣洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/473.png"></td>
            <td>象牙猪</td>
            <td>起橇雪原晴阴曝雪雹，学习原始之力进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、10号道路·定点 Lv58</span></td>
        </tr>
        <tr>
            <td>010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>煦丽草原雹，起橇雪原，冰点雪原，巨人睡榻，远古墓地，雪中溪谷，巨人鞋底，冻海，三岔平原，球湖湖畔所有天气，携带奇异薰香生蛋<br><span class="mod3">本体：煦丽草原·定点 Lv15、机擎市郊外·草丛 Lv24–27 15%；冠之雪原：起橇雪原·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122-g.png"></td>
            <td>魔墙人偶（伽勒尔的样子）</td>
            <td>逆鳞湖雪，１０号道路所有天气，学会模仿时提升等级<br><span class="mod3">本体：10号道路·草丛[伽勒尔] Lv50–53 15%；冠之雪原：起橇雪原·定点[伽勒尔] Lv19、冰点雪原·定点[伽勒尔] Lv19、巨人睡榻·定点 Lv19、通顶雪道·草丛 Lv11–14 10%、通顶雪道·草丛[伽勒尔] Lv11–14 10%、冻海·草丛[伽勒尔] Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/866.png"></td>
            <td>踏冰人偶</td>
            <td>42级进化<br><span class="mod3">本体：10号道路·定点 Lv58；冠之雪原：雪中溪谷·定点 Lv19、冻海·定点 Lv55、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>013</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/238.png"></td>
            <td>迷唇娃</td>
            <td>起橇雪原，冰点雪原所有天气<br><span class="mod3">冠之雪原：起橇雪原·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>014</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/124.png"></td>
            <td>迷唇姐</td>
            <td>起橇雪原，冰点雪原所有天气，30级进化<br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、冻海·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/239.png"></td>
            <td>电击怪</td>
            <td>巨人睡榻雷，远古墓地雷，巨人鞋底雷，冻海雷，三岔平原雷，球湖湖畔雷<br><span class="mod3">冠之雪原：巨人鞋底·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/125.png"></td>
            <td>电击兽</td>
            <td>巨人睡榻雷，远古墓地雷，巨人鞋底雷，冻海雷，三岔平原雷，球湖湖畔雷，30级进化<br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19、巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 10%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/466.png"></td>
            <td>电击魔兽</td>
            <td>巨人睡榻雷，冻海雷，三岔平原雷，球湖湖畔雷，携带电力増幅器链接交换<br><span class="mod2">电力增幅器 ; lv 45</span><br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19、冻海·定点 Lv55、三岔平原·定点 Lv55、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/240.png"></td>
            <td>鸭嘴宝宝</td>
            <td>起橇雪原曝，冰点雪原曝，巨人睡榻曝，远古墓地曝，雪中溪谷曝，巨人鞋底曝，三岔平原曝，球湖湖畔曝<br><span class="mod3">冠之雪原：巨人鞋底·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/126.png"></td>
            <td>鸭嘴火兽</td>
            <td>起橇雪原曝，冰点雪原曝，巨人睡榻曝，远古墓地曝，雪中溪谷曝，巨人鞋底曝，三岔平原曝，球湖湖畔曝，30级进化<br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、雪中溪谷·定点 Lv19、巨人鞋底·定点 Lv19、球湖湖畔·草丛 Lv47–50 10%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/467.png"></td>
            <td>鸭嘴炎兽</td>
            <td>起橇雪原曝，巨人睡榻曝，雪中溪谷曝，冻海曝，球湖湖畔曝，携带熔岩増幅器链接交换<br><span class="mod2">熔岩增幅器 ; Lv 45</span><br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19、雪中溪谷·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/531.png"></td>
            <td>差不多娃娃</td>
            <td>起橇雪原，冰点雪原，巨人睡榻，远古墓地，雪中溪谷，登顶隧道，通顶雪道，巨人鞋底，海鸣洞窟，冻海，三岔平原，湖畔洞窟所有天气，球湖湖畔晴阴雨雷曝雪沙雾<br><span class="mod3">冠之雪原：起橇雪原·树果树 Lv11–14 10%、起橇雪原·定点 Lv19、冰点雪原·树果树 Lv11–14 10%、冰点雪原·定点 Lv19、巨人睡榻·草丛 Lv11–14 5%、巨人睡榻·树果树 Lv11–14 10%、巨人睡榻·定点 Lv19、巨人鞋底·树果树 Lv11–14 10%、巨人鞋底·定点 Lv19、球湖湖畔·树果树 Lv47–50 10%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/582.png"></td>
            <td>迷你冰</td>
            <td>大部分地区雪雹天气出现<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 15%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>１０号道路所有天气，泉烟小路所有天气，大部分地区雪雹天气出现，35级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、8号道路（泉烟小路）·草丛 Lv37–40 15%；冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、冻海·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>白丘车站所有天气，逆鳞湖雪雹，牙牙湖西岸雪雹，牙牙湖东岸雪雹，美纳斯湖北岸雪雹，美纳斯湖南岸雪雹，桥间空地雪雹，逆鳞湖雪雹，冰点雪原雪雹，巨人睡榻雪雹，雪中溪谷雪雹，球湖湖畔雪雹，47级进化<br><span class="mod3">本体：牙牙湖西岸·定点 Lv15、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、桥间空地·定点 Lv35、巨人帽岩·定点 Lv35、逆鳞湖·定点 Lv51、10号道路·草丛 Lv50–53 15%；冠之雪原：冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>泉烟小路所有天气，登顶隧道所有天气，大部分地区雪天<br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 5%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>１０号道路所有天气，逆鳞湖雪，９号道路所有天气，瞭望塔旧址雪雹，巨人凳岩雪雹，巨人帽岩雪雹，起橇雪原雹，巨人睡榻雪雹，雪中溪谷雪雹，42级进化<br><span class="mod3">本体：9号道路·草丛 Lv40–43 5%、9号道路·定点 Lv48；冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19、雪中溪谷·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>登顶隧道所有天气，起橇雪原雹，巨人睡榻雪雹，远古墓地雪雹，雪中溪谷雪雹，雪童子使用觉醒之石（雌性）<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15、9号道路·草丛 Lv40–43 5%；冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19、远古墓地·定点 Lv19、雪中溪谷·定点 Lv19、登顶隧道·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>１０号道路，泉烟小路所有天气，机擎河岸雪雹，桥间空地雪雹，巨石原野雪雹，沙尘洼地雪，拳关丘陵雪雹，巨人帽岩雪雹,巨人镜池雪，起橇雪原阴，冰点雪原阴，雪中溪谷阴，冻海阴<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%；冠之雪原：冰点雪原·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>桥间空地雹，起橇雪原阴，冰点雪原阴，雪中溪谷阴，觉携带锐利之爪提升等级（夜晚）<br><span class="mod3">本体：桥间空地·定点 Lv35、巨人帽岩·定点 Lv35、8号道路（泉烟小路）·草丛 Lv37–40 15%、10号道路·草丛 Lv50–53 10%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、冻海·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/615.png"></td>
            <td>几何雪花</td>
            <td>起橇雪原雪雹，冰点雪原雪雹，巨人睡榻雪雹，远古墓地雪雹，雪中溪谷雪雹，巨人鞋底雪雹，三岔平原雪雹，球湖湖畔雪<br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、雪中溪谷·草丛 Lv11–14 5%、雪中溪谷·定点 Lv19、巨人鞋底·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>泉烟小路所有天气，１０号道路所有天气，冰点雪原所有天气，大部分冰雪天<br><span class="mod3">本体：沐光森林·定点 Lv15、巨人帽岩·草丛 Lv27–30 15%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>１０号道路所有天气，沙尘洼地雪，逆鳞湖雪，路（10）所有天气，牙牙湖之眼雪雹，拳关丘陵雪雹，巨人镜池雪，巨人凳岩雪雹，冰点雪原所有天气，起橇雪原雪，40级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、8号道路（泉烟小路）·草丛 Lv37–40 15%、10号道路·草丛 Lv50–53 15%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>迷光森林所有天气，起橇雪原阴，远古墓地阴，雪中溪谷阴，巨人鞋底阴，三岔平原阴<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 10%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>起橇雪原阴，远古墓地阴，雪中溪谷阴，链接交换进化<br><span class="mod2">Lv 36 ; Lv 20 专注森林 ; Lv 30 夜间</span><br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、远古墓地·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/333.png"></td>
            <td>青绵鸟</td>
            <td>起橇雪原阴，冰点雪原阴，巨人睡榻阴，通顶雪道阴，巨人鞋底阴，冻海阴，三岔平原阴，球湖湖畔阴<br><span class="mod3">冠之雪原：起橇雪原·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/334.png"></td>
            <td>七夕青鸟</td>
            <td>巨人鞋底阴，通顶雪道阴，巨人睡榻阴，冻海阴，球湖湖畔阴,35级进化<br><span class="mod3">冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、通顶雪道·定点 Lv19、巨人鞋底·定点 Lv19、冻海·定点 Lv55、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>机擎市郊外所有天气，巨石原野晴阴雨雷曝雪雹雾，巨人镜池雾，拳关丘陵雾，迷光森林所有天气<br><span class="mod1">巨石原野（曝）·草丛随机遇敌 移除20%（被秃鹰丫头替换）</span><br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 15%、巨人镜池·草丛 Lv27–30 15%、迷光森林·定点 Lv40、微寐森林·定点 Lv65；冠之雪原：远古墓地·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>迷光森林所有天气，巨人睡榻雾，雪中溪谷雾，巨人鞋底雾，32 级进化<br><span class="mod3">本体：迷光森林·定点 Lv40；冠之雪原：起橇雪原·定点 Lv19、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>逆鳞湖阴，巨石原野所有天气，巨人睡榻雾，雪中溪谷雾，起橇雪原雾，42级进化<br><span class="mod3">本体：巨石原野·定点[超极巨] Lv35、巨人镜池·定点[超极巨] Lv35、微寐森林·草丛 Lv57–60 10%</span></td>
        </tr>
        <tr>
            <td>040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>拳关丘陵雾，机擎市郊外所有天气，巨石原野雾起橇雪原雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾<br><span class="mod3">本体：机擎市郊外·草丛 Lv24–27 15%、巨人镜池·草丛 Lv27–30 15%、微寐森林·定点 Lv65；冠之雪原：远古墓地·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>041</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>迷光森林所有天气，沙尘洼地晴阴雨雹沙雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾，起橇雪原雾，32 级进化<br><span class="mod3">本体：迷光森林·草丛 Lv32–35 15%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>逆鳞湖雾，逆鳞湖所有天气，冰点雪原雾，巨人睡榻雾，冻海雾，球湖湖畔雾，42级进化<br><span class="mod3">本体：巨人镜池·定点[超极巨] Lv35、逆鳞湖·定点[超极巨] Lv51、微寐森林·草丛 Lv57–60 10%</span></td>
        </tr>
        <tr>
            <td>043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/173.png"></td>
            <td>皮宝宝</td>
            <td>生蛋<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 15%；冠之雪原：登顶隧道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>机擎河岸雾，巨人帽岩雾，登顶隧道所有天气，巨人睡榻雾，雪中溪谷雾，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、登顶隧道·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>登顶隧道所有天气，巨人睡榻雾，雪中溪谷雾，月之石进化<br><span class="mod3">本体：巨人镜池·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟丘</td>
            <td>巨人镜池雾，桥间空地雾，起橇雪原雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，雪中溪谷雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 5%；冠之雪原：起橇雪原·定点 Lv19、冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、远古墓地·草丛 Lv11–14 5%、远古墓地·定点 Lv19、雪中溪谷·定点 Lv19、巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/442.png"></td>
            <td>花岩怪</td>
            <td>球湖湖畔所有天气<br><span class="mod3">冠之雪原：远古墓地·草丛 Lv11–14 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/607.png"></td>
            <td>烛光灵</td>
            <td>机擎河岸曝，桥间空地曝雾<br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 5%、机擎竞技场·定点 Lv30；冠之雪原：远古墓地·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>逆鳞湖曝，巨人睡榻阴雾，远古墓地阴雾，41级进化<br><span class="mod3">本体：瞭望塔旧址·定点 Lv15；冠之雪原：巨人鞋底·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/609.png"></td>
            <td>水晶灯火灵</td>
            <td>逆鳞湖曝，巨人睡榻阴雾，暗之石进化<br><span class="mod3">冠之雪原：三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>剑：巨人帽岩雾，起橇雪原雾，冰点雪原雾<br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 5%、5号道路·草丛 Lv20–23 5%；冠之雪原：通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>哥德小童</td>
            <td>剑：巨人帽岩雾，巨人镜池雾，沙尘洼地雾，起橇雪原雾，冰点雪原雾，32级进化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>剑：逆鳞湖雾，起橇雪原雾，冰点雪原雾，41级进化<br><span class="mod3">本体：微寐森林·草丛 Lv57–60 5%</span></td>
        </tr>
        <tr>
            <td>054</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>盾：巨人帽岩雾，起橇雪原雾，冰点雪原雾<br><span class="mod1">巨人帽岩（晴）·草丛随机遇敌 新增40%（替换长鼻叶）；巨人帽岩（雾）·草丛随机遇敌 新增20%（替换夜巡灵）；巨人帽岩（晴）·地图可见 新增35%（替换直冲熊（伽勒尔））；巨人帽岩（雾）·地图可见 新增10%（替换猫头夜鹰）</span><br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 5%、5号道路·草丛 Lv20–23 5%；冠之雪原：通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>盾：巨人帽岩雾，巨人镜池雾，沙尘洼地雾，起橇雪原雾，冰点雪原雾，32级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>盾：逆鳞湖雾，起橇雪原雾，冰点雪原雾，41级进化<br><span class="mod3">本体：微寐森林·草丛 Lv57–60 5%</span></td>
        </tr>
        <tr>
            <td>057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/532.png"></td>
            <td>搬运小匠</td>
            <td>伽勒尔矿山所有天气<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 10%、伽勒尔矿山·草丛 Lv16–19 10%；冠之雪原：冰点雪原·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>058</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>沙尘洼地雪，８号道路所有天气，巨人睡榻晴，巨人鞋底晴，25级进化<br><span class="mod3">本体：8号道路·草丛 Lv37–40 5%；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>机擎河岸晴阴雨雷雪雾，巨人睡榻晴，巨人鞋底晴，链接交换进化<br><span class="mod2">Lv 40</span></td>
        </tr>
        <tr>
            <td>060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/339.png"></td>
            <td>泥泥鳅</td>
            <td>大部分地区垂钓或者冲浪可遇到<br><span class="mod3">本体：牙牙湖西岸·钓鱼 Lv7–10 15%、巨人凳岩·钓鱼 Lv7–10 25%、4号道路·钓鱼 Lv17–20 25%、第二矿山·钓鱼 Lv23–26 30%、沙尘洼地·冲浪 Lv43–46 25%、沙尘洼地·钓鱼 Lv27–30 30%、巨人镜池·冲浪 Lv43–46 25%；铠岛：清凉湿原·钓鱼 Lv9–12 25%、战斗洞窟·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 25%、斗志洞窟·钓鱼 Lv9–12 25%、列岛海域·钓鱼 Lv45–48 15%；冠之雪原：巨人鞋底·冲浪 Lv47–50 30%、巨人鞋底·钓鱼 Lv11–14 30%、海鸣洞窟·冲浪 Lv47–50 30%</span></td>
        </tr>
        <tr>
            <td>061</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>微寐森林所有天气，美纳斯湖北岸晴阴雷曝沙，美纳斯湖南岸晴雷曝沙，斗志洞窟，战斗洞窟，巨人睡榻所有天气，专注森林晴阴曝沙，30级进化<br><span class="mod3">本体：牙牙湖西岸·冲浪 Lv43–46 25%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、沙尘洼地·钓鱼 Lv27–30 5%；铠岛：战斗洞窟·定点 Lv17、专注森林·定点 Lv17、斗志洞窟·定点 Lv17、列岛海域·冲浪 Lv45–48 25%；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>062</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/129.png"></td>
            <td>鲤鱼王</td>
            <td>大部分水域<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 30%、牙牙湖西岸·钓鱼 Lv7–10 30%、牙牙湖东岸·钓鱼 Lv7–10 30%、美纳斯湖北岸·钓鱼 Lv7–10 30%、美纳斯湖南岸·钓鱼 Lv7–10 30%、巨人凳岩·钓鱼 Lv7–10 30%、机擎市·钓鱼 Lv13–16 30%、4号道路·钓鱼 Lv17–20 30%、5号道路·钓鱼 Lv20–23 30%、水舟镇·钓鱼 Lv21–24 25%、桥间空地·冲浪 Lv43–46 30%、桥间空地·钓鱼 Lv27–30 30%；铠岛：揖礼原野·钓鱼 Lv9–12 30%、专注森林·冲浪 Lv45–48 25%、专注森林·钓鱼 Lv9–12 30%、锻炼平原·冲浪 Lv45–48 25%、锻炼平原·钓鱼 Lv9–12 30%、健身之海·钓鱼 Lv45–48 30%、蜂巢岛·钓鱼 Lv45–48 25%；冠之雪原：巨人睡榻·冲浪 Lv47–50 30%、巨人睡榻·钓鱼 Lv11–14 30%、球湖湖畔·钓鱼 Lv47–50 30%</span></td>
        </tr>
        <tr>
            <td>063</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>大部分水域，20级进化<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 25%、2号道路（湖畔）·钓鱼 Lv43–46 25%、2号道路（湖畔）·定点[异色] Lv51、牙牙湖西岸·冲浪 Lv43–46 5%、牙牙湖西岸·定点 Lv15、牙牙湖东岸·冲浪 Lv43–46 5%、牙牙湖东岸·定点 Lv15、美纳斯湖北岸·冲浪 Lv43–46 5%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·冲浪 Lv43–46 5%、美纳斯湖南岸·定点 Lv15、桥间空地·钓鱼 Lv27–30 5%、桥间空地·定点 Lv35、沙尘洼地·定点 Lv35、9号道路·冲浪 Lv40–43 5%、逆鳞湖·冲浪 Lv43–46 30%、逆鳞湖·钓鱼 Lv43–46 25%、逆鳞湖·定点 Lv51；铠岛：挑战海滩·冲浪 Lv45–48 5%、挑战海滩·定点 Lv17、圆环海湾·定点 Lv17、健身之海·冲浪 Lv45–48 5%、健身之海·钓鱼 Lv45–48 5%、蜂巢海·冲浪 Lv45–48 15%、蜂巢海·钓鱼 Lv45–48 25%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>水舟镇，美纳斯湖北岸，机擎河岸所有天气，机擎河岸所有天气，巨人睡榻，雪中溪谷，巨人鞋底，冻海，球湖湖畔所有天气<br><span class="mod3">本体：牙牙湖西岸·冲浪[蓝条纹] Lv43–46 25%、牙牙湖西岸·钓鱼[蓝条纹] Lv7–10 5%、牙牙湖东岸·冲浪[红条纹] Lv43–46 25%、牙牙湖东岸·钓鱼[红条纹] Lv7–10 5%、机擎河岸·冲浪[蓝条纹] Lv43–46 25%、机擎河岸·冲浪[红条纹] Lv43–46 25%、机擎河岸·钓鱼[蓝条纹] Lv27–30 25%、机擎河岸·钓鱼[红条纹] Lv27–30 25%；冠之雪原：巨人睡榻·冲浪[蓝条纹] Lv47–50 25%、巨人睡榻·冲浪[红条纹] Lv47–50 25%、雪中溪谷·钓鱼[蓝条纹] Lv11–14 25%、雪中溪谷·钓鱼[红条纹] Lv11–14 25%、球湖湖畔·钓鱼[蓝条纹] Lv47–50 25%、球湖湖畔·钓鱼[红条纹] Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/029.png"></td>
            <td>尼多兰</td>
            <td>冰点雪原，巨人睡榻，远古墓地所有天气<br><span class="mod3">冠之雪原：巨人睡榻·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/030.png"></td>
            <td>尼多娜</td>
            <td>巨人睡榻所有天气，16级进化<br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/031.png"></td>
            <td>尼多后</td>
            <td>巨人睡榻晴阴雨曝雪雹雾，月之石进化<br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19、海鸣洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/032.png"></td>
            <td>尼多朗</td>
            <td>冰点雪原，巨人睡榻，远古墓地所有天气<br><span class="mod3">冠之雪原：巨人睡榻·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>069</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/033.png"></td>
            <td>尼多力诺</td>
            <td>巨人睡榻所有天气，16级进化<br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/034.png"></td>
            <td>尼多王</td>
            <td>巨人睡榻晴阴雨曝雪雹雾，月之石进化<br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19、海鸣洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>071</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊（伽勒尔的样子）</td>
            <td>道路（2・3），桥间空地所有天气，巨石原野晴阴雨曝雪雹沙雾，巨人帽岩晴阴雨雷曝雪沙雾。普通形态铠岛交换<br><span class="mod1">2号道路·地图可见 移除2%（被泪眼蜥替换）；巨石原野（晴）·地图可见 移除35%（被秃鹰丫头替换）；巨石原野（曝）·地图可见 移除30%（被秃鹰丫头替换）；巨石原野（沙）·地图可见 移除30%（被秃鹰丫头替换）</span><br><span class="mod3">本体：2号道路·草丛[伽勒尔] Lv4–7 15%、瞭望塔旧址·草丛[伽勒尔] Lv7–10 10%、桥间空地·草丛[伽勒尔] Lv27–30 15%、桥间空地·草丛 Lv27–30 5%；冠之雪原：冰点雪原·草丛 Lv11–14 10%、巨人睡榻·草丛[伽勒尔] Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>072</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264-g.png"></td>
            <td>直冲熊（伽勒尔的样子）</td>
            <td>巨人睡榻阴，球湖湖畔阴，20级进化<br><span class="mod1">巨人帽岩（晴）·地图可见 移除35%（被单卵细胞球替换）</span><br><span class="mod3">本体：2号道路（湖畔）·草丛[伽勒尔] Lv43–46 15%、桥间空地·定点 Lv35、桥间空地·定点[伽勒尔] Lv35、9号道路（尖钉镇郊外）·草丛[伽勒尔] Lv40–43 10%；冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点[伽勒尔] Lv19</span></td>
        </tr>
        <tr>
            <td>073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>逆鳞湖晴沙，道路（2），桥间空地所有天气，巨人睡榻阴雨，球湖湖畔阴，35级晚上进化<br><span class="mod3">本体：2号道路（湖畔）·定点 Lv51、桥间空地·定点 Lv35</span></td>
        </tr>
        <tr>
            <td>074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>４号道路所有天气，冰点雪原雹，巨人睡榻晴<br><span class="mod3">本体：2号道路·定点 Lv10、4号道路·草丛 Lv17–20 5%；冠之雪原：巨人睡榻·草丛 Lv11–14 5%、巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/134.png"></td>
            <td>水伊布</td>
            <td>逆鳞湖雨，巨人睡榻雨，水之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/135.png"></td>
            <td>雷伊布</td>
            <td>逆鳞湖雷，巨人睡榻雷，雷之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/136.png"></td>
            <td>火伊布</td>
            <td>逆鳞湖曝，巨人睡榻曝，火之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/197.png"></td>
            <td>月亮伊布</td>
            <td>逆鳞湖沙，巨人睡榻阴，亲密度*220以上或友好度*158以上提升等级（夜晚）<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/196.png"></td>
            <td>太阳伊布</td>
            <td>逆鳞湖阴，巨人睡榻雪，亲密度*220以上或友好度*158以上提升等级（白天）<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/471.png"></td>
            <td>冰伊布</td>
            <td>逆鳞湖雪雹，巨人睡榻雹，冰之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/470.png"></td>
            <td>叶伊布</td>
            <td>逆鳞湖晴，巨人睡榻晴，叶之石进化<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/700.png"></td>
            <td>仙子伊布</td>
            <td>逆鳞湖雾，巨人睡榻雾，友好度50*或158*以上学会妖精属性招式时提升等级<br><span class="mod3">本体：逆鳞湖·定点 Lv51；冠之雪原：巨人睡榻·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/696.png"></td>
            <td>宝宝暴龙</td>
            <td>球湖湖畔所有天气<br><span class="mod3">冠之雪原：雪中溪谷·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/697.png"></td>
            <td>怪颚龙</td>
            <td>球湖湖畔所有天气，39级进化（白天）<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/698.png"></td>
            <td>冰雪龙</td>
            <td>起橇雪原，冰点雪原，雪中溪谷所有天气<br><span class="mod3">冠之雪原：雪中溪谷·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/699.png"></td>
            <td>冰雪巨龙</td>
            <td>雪中溪谷晴阴雪雹雾，39级进化（夜晚）<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>美纳斯湖南岸雾，桥间空地雨雷，巨石原野雨雷雪雹雾，巨人凳岩晴阴雨雷曝雪雹沙，巨人鞋底，三岔平原所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 15%、伽勒尔矿山·草丛 Lv16–19 5%、巨人帽岩·岩石 Lv27–30 20%、拳关丘陵·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>８号道路所有天气，沙尘洼地雹，逆鳞湖雾，牙牙湖之眼雹，巨人凳岩阴雨雷，沙尘洼地晴雨雷雪雹，巨石原野雨雷雪雹雾，牙牙湖东岸雾，桥间空地雨雷，巨人睡榻，巨人鞋底，三岔平原所有天气，33级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15；冠之雪原：巨人睡榻·定点 Lv19、雪中溪谷·定点 Lv19、三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>剑：１０号道路所有天气，逆鳞湖曝沙，巨人睡榻，巨人鞋底所有天气<br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 5%、9号道路（战竞湾）·草丛 Lv40–43 5%、10号道路·草丛 Lv50–53 5%；冠之雪原：雪中溪谷·草丛 Lv11–14 5%、雪中溪谷·定点 Lv19、湖畔洞窟·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>盾：１０号道路所有天气，逆鳞湖曝沙，巨人睡榻，巨人鞋底所有天气<br><span class="mod1">10号道路·草丛随机遇敌 新增10%（替换雪吞虫）；10号道路·地图可见 新增20%（替换喷嚏熊）</span><br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%、9号道路（战竞湾）·草丛 Lv40–43 5%、10号道路·草丛 Lv50–53 5%；冠之雪原：雪中溪谷·草丛 Lv11–14 5%、雪中溪谷·定点 Lv19、冻海·草丛 Lv47–50 15%、冻海·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>５号道路所有天气，机擎河岸雨，巨石原野雨雷，巨人睡榻雨雷，远古墓地雨雷，巨人鞋底雨雷，冻海雨雷，三岔平原雨雷，球湖湖畔雨雷肝帝威的游戏笔记<br><span class="mod3">本体：煦丽草原·定点 Lv15、美纳斯湖北岸·草丛 Lv7–10 15%、5号道路·钓鱼 Lv20–23 25%、巨石原野·草丛 Lv27–30 15%；冠之雪原：巨人睡榻·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>逆鳞湖雨，巨石原野雨雷，巨人睡榻雨雷，远古墓地雨雷，巨人鞋底雨雷，冻海雨雷，三岔平原雨雷，球湖湖畔雨雷，22级进化<br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15、巨石原野·定点 Lv35、9号道路（战竞湾）·草丛 Lv40–43 15%；冠之雪原：巨人睡榻·定点 Lv19、巨人鞋底·定点 Lv19、冻海·草丛 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>４号道路所有天气，煦丽草原雷，沐光森林雷，牙牙湖西岸雷，牙牙湖东岸雷，美纳斯湖南岸雷，美纳斯湖北岸雷，巨人镜池雷，巨人帽岩雷，美纳斯湖南岸雷，巨人镜池雷<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 10%、4号道路·草丛 Lv17–20 5%；冠之雪原：巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>７号道路所有天气，逆鳞湖雷，美纳斯湖南岸所有天气，巨人帽岩雷，巨人凳岩雨雷，巨人睡榻雷，远古墓地雷，巨人鞋底雷，三岔平原雷，球湖湖畔雷，巨人睡榻雷，球湖湖畔雷，36级进化<br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15、巨人凳岩·定点 Lv15、巨人帽岩·定点 Lv35、7号道路·草丛 Lv36–39 15%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，专注森林，远古墓地所有天气，锻炼平原阴<br><span class="mod3">本体：美纳斯湖北岸·草丛 Lv7–10 5%；铠岛：锻炼平原·草丛 Lv9–12 10%、锻炼平原·定点 Lv17；冠之雪原：巨人睡榻·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>专注森林沙，锻炼平原沙，与小嘴蜗连接交换进化<br><span class="mod2">队伍中有小嘴蜗 or 敏捷虫 升级</span><br><span class="mod3">本体：美纳斯湖北岸·定点 Lv15；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，清凉湿原，巨人睡榻所有天气，锻炼平原雨<br><span class="mod3">本体：美纳斯湖南岸·草丛 Lv7–10 5%；铠岛：锻炼平原·草丛 Lv9–12 10%、锻炼平原·定点 Lv17；冠之雪原：巨人睡榻·草丛 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>专注森林雨，锻炼平原雷，与盖盖虫连接交换进化<br><span class="mod2">队伍中有 盖盖虫 or 骑士蜗牛 升级</span><br><span class="mod3">本体：美纳斯湖南岸·定点 Lv15；铠岛：专注森林·定点 Lv17、锻炼平原·定点 Lv17</span></td>
        </tr>
        <tr>
            <td>099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>３号道路所有天气，机擎竞技场，巨人鞋底晴曝<br><span class="mod3">本体：3号道路·草丛 Lv15–18 15%、机擎竞技场·定点 Lv30；冠之雪原：巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/851.png"></td>
            <td>焚焰蚣</td>
            <td>巨人鞋底晴曝，28级进化<br><span class="mod3">本体：逆鳞湖·定点[超极巨] Lv51；冠之雪原：巨人鞋底·定点[超极巨] Lv19、球湖湖畔·草丛 Lv47–50 10%、球湖湖畔·定点[超极巨] Lv55</span></td>
        </tr>
        <tr>
            <td>101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>６号道路所有天气，巨人镜池曝，逆鳞湖曝，巨人睡榻曝，远古墓地曝，三岔平原曝<br><span class="mod3">本体：巨人凳岩·树果树 Lv7–10 10%、3号道路·树果树 Lv15–18 10%、拳关丘陵·树果树 Lv27–30 20%、6号道路·草丛 Lv29–32 5%、6号道路·树果树 Lv29–32 10%、7号道路·树果树 Lv36–39 20%、9号道路（尖钉镇郊外）·树果树 Lv40–43 10%、逆鳞湖·树果树 Lv43–46 10%；冠之雪原：巨人睡榻·树果树 Lv11–14 20%、巨人睡榻·定点 Lv19、巨人鞋底·树果树 Lv11–14 20%、球湖湖畔·树果树 Lv47–50 20%</span></td>
        </tr>
        <tr>
            <td>102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>６号道路所有天气，巨人镜池曝，逆鳞湖曝，巨人睡榻曝，远古墓地曝，三岔平原曝<br><span class="mod3">本体：巨人凳岩·树果树 Lv7–10 10%、3号道路·树果树 Lv15–18 10%、拳关丘陵·树果树 Lv27–30 20%、6号道路·草丛 Lv29–32 5%、6号道路·树果树 Lv29–32 10%、7号道路·树果树 Lv36–39 20%、9号道路（尖钉镇郊外）·树果树 Lv40–43 10%、逆鳞湖·树果树 Lv43–46 10%；冠之雪原：巨人睡榻·树果树 Lv11–14 20%、巨人睡榻·定点 Lv19、巨人鞋底·树果树 Lv11–14 20%、球湖湖畔·树果树 Lv47–50 20%</span></td>
        </tr>
        <tr>
            <td>103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554-g.png"></td>
            <td>火红不倒翁（伽勒尔的样子）</td>
            <td>剑：泉烟小路，１０号道路所有天气，雪中溪谷雹<br><span class="mod3">本体：3号道路·草丛 Lv15–18 5%、巨人帽岩·草丛[伽勒尔] Lv27–30 10%；冠之雪原：起橇雪原·草丛[伽勒尔] Lv11–14 5%、巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555-g.png"></td>
            <td>达摩狒狒（伽勒尔的样子）</td>
            <td>剑：雪中溪谷雹，冰之石进化<br><span class="mod3">本体：巨人帽岩·定点[伽勒尔] Lv35、8号道路（泉烟小路）·草丛[伽勒尔] Lv37–40 10%；冠之雪原：巨人睡榻·定点[伽勒尔] Lv19、球湖湖畔·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077-g.png"></td>
            <td>小火马（伽勒尔的样子）</td>
            <td>迷光森林所有天气，远古墓地雾<br><span class="mod1">迷光森林·草丛随机遇敌 新增10%（替换绵绵泡芙）；迷光森林·地图可见 新增10%（替换绵绵泡芙）</span><br><span class="mod3">本体：煦丽草原·草丛 Lv7–10 10%、煦丽草原·定点[伽勒尔] Lv15、3号道路·草丛 Lv15–18 5%、5号道路·草丛[伽勒尔] Lv20–23 15%、迷光森林·草丛[伽勒尔] Lv32–35 15%；冠之雪原：巨人睡榻·草丛[伽勒尔] Lv11–14 15%、巨人鞋底·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>106</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/078-g.png"></td>
            <td>烈焰马（伽勒尔的样子）</td>
            <td>远古墓地雾，40级进化<br><span class="mod3">本体：迷光森林·草丛[伽勒尔] Lv32–35 5%；冠之雪原：巨人睡榻·定点[伽勒尔] Lv19、球湖湖畔·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/359.png"></td>
            <td>阿勃梭鲁</td>
            <td>冰点雪原雹，巨人睡榻雹，雪中溪谷雹，通顶雪道雹，巨人鞋底雹<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、通顶雪道·草丛 Lv11–14 5%、通顶雪道·定点 Lv19、巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/878.png"></td>
            <td>铜象</td>
            <td>桥间空地晴阴曝雹，巨人鞋底所有天气<br><span class="mod3">本体：拳关丘陵·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>逆鳞湖雹，拳关丘陵所有天气，巨人鞋底所有天气，34级进化<br><span class="mod3">本体：拳关丘陵·定点[超极巨] Lv35；冠之雪原：雪中溪谷·定点[超极巨] Lv19</span></td>
        </tr>
        <tr>
            <td>110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/885.png"></td>
            <td>多龙梅西亚</td>
            <td>逆鳞湖阴雷雾<br><span class="mod3">本体：巨人镜池·草丛 Lv27–30 5%、微寐森林·定点 Lv65；冠之雪原：远古墓地·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/886.png"></td>
            <td>多龙奇</td>
            <td>逆鳞湖阴雨雷雾，远古墓地所有天气，50级进化<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 10%；冠之雪原：远古墓地·定点 Lv19、三岔平原·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/887.png"></td>
            <td>多龙巴鲁托</td>
            <td>远古墓地晴阴雨雷曝雪，三岔平原晴阴雨曝雪雹雾，60级进化<br><span class="mod3">本体：巨人镜池·定点 Lv35、逆鳞湖·定点 Lv51、微寐森林·草丛 Lv57–60 5%；冠之雪原：三岔平原·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/371.png"></td>
            <td>宝贝龙</td>
            <td>剑：登顶隧道所有天气<br><span class="mod3">冠之雪原：登顶隧道·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/372.png"></td>
            <td>甲壳龙</td>
            <td>30级进化<br><span class="mod3">冠之雪原：登顶隧道·定点 Lv19、通顶雪道·定点 Lv19、湖畔洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/373.png"></td>
            <td>暴飞龙</td>
            <td>剑：登顶隧道所有天气，通顶雪道晴，50级进化<br><span class="mod3">冠之雪原：球湖湖畔·定点 Lv55、湖畔洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/443.png"></td>
            <td>圆陆鲨</td>
            <td>盾：登顶隧道所有天气<br><span class="mod3">冠之雪原：登顶隧道·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>117</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/444.png"></td>
            <td>尖牙陆鲨</td>
            <td>24级进化<br><span class="mod3">冠之雪原：登顶隧道·定点 Lv19、湖畔洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/445.png"></td>
            <td>烈咬陆鲨</td>
            <td>盾：登顶隧道所有天气通顶雪道曝，48级进化<br><span class="mod3">冠之雪原：湖畔洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/621.png"></td>
            <td>赤面龙</td>
            <td>战斗洞窟，斗志洞窟，登顶隧道所有天气，雪中溪谷晴曝，通顶雪道晴<br><span class="mod3">铠岛：战斗洞窟·草丛 Lv9–12 5%、战斗洞窟·定点 Lv17、斗志洞窟·草丛 Lv9–12 5%、斗志洞窟·定点 Lv17；冠之雪原：雪中溪谷·定点 Lv19、登顶隧道·草丛 Lv11–14 10%、登顶隧道·定点 Lv19、通顶雪道·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/225.png"></td>
            <td>信使鸟</td>
            <td>泉烟小路所有天气，大部分地区雪天<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 5%、8号道路（泉烟小路）·草丛 Lv37–40 5%；冠之雪原：起橇雪原·草丛 Lv11–14 5%、起橇雪原·定点 Lv19、冰点雪原·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>121</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>桥间空地雹，巨石原野雪雹，巨人镜池雪雹，１０号道路所有天气，桥间空地雪雹，沙尘洼地雪雹，拳关丘陵雪<br><span class="mod1">10号道路·地图可见 移除20%（被冰砌鹅替换）</span><br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冻原熊</td>
            <td>１０号道路所有天气，桥间空地雪，巨人帽岩雪，37级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、10号道路·草丛 Lv50–53 10%；冠之雪原：雪中溪谷·定点 Lv19、冻海·草丛 Lv47–50 5%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/138.png"></td>
            <td>菊石兽</td>
            <td>剑：巨人鞋底，海鸣洞窟所有天气<br><span class="mod3">冠之雪原：巨人鞋底·冲浪 Lv47–50 25%、巨人鞋底·钓鱼 Lv11–14 25%、海鸣洞窟·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/139.png"></td>
            <td>多刺菊石兽</td>
            <td>剑：海鸣洞窟所有天气，40级进化<br><span class="mod3">冠之雪原：海鸣洞窟·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/140.png"></td>
            <td>化石盔</td>
            <td>盾：巨人鞋底，海鸣洞窟所有天气<br><span class="mod3">冠之雪原：巨人鞋底·冲浪 Lv47–50 25%、巨人鞋底·钓鱼 Lv11–14 25%、海鸣洞窟·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/141.png"></td>
            <td>镰刀盔</td>
            <td>盾：海鸣洞窟所有天气，40级进化<br><span class="mod3">冠之雪原：海鸣洞窟·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/142.png"></td>
            <td>化石翼龙</td>
            <td>巨人睡榻所有天气<br><span class="mod3">冠之雪原：巨人睡榻·定点 Lv19、通顶雪道·草丛 Lv11–14 5%、湖畔洞窟·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/703.png"></td>
            <td>小碎钻</td>
            <td>登顶隧道，海鸣洞窟，湖畔洞窟所有天气<br><span class="mod3">冠之雪原：登顶隧道·草丛 Lv11–14 15%、登顶隧道·定点 Lv19、海鸣洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>129</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/374.png"></td>
            <td>铁哑铃</td>
            <td>雪中溪谷所有天气<br><span class="mod3">冠之雪原：雪中溪谷·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/375.png"></td>
            <td>金属怪</td>
            <td>雪中溪谷所有天气，20级进化<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、三岔平原·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/376.png"></td>
            <td>巨金怪</td>
            <td>雪中溪谷所有天气，45级进化<br><span class="mod3">冠之雪原：三岔平原·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/854.png"></td>
            <td>来悲茶</td>
            <td>迷光森林所有天气，远古墓地所有天气<br><span class="mod3">本体：迷光森林·草丛[赝品] Lv32–35 15%、迷光森林·草丛[真品] Lv32–35 5%；冠之雪原：远古墓地·草丛[赝品] Lv11–14 15%、远古墓地·草丛[真品] Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/855.png"></td>
            <td>怖思壶</td>
            <td>远古墓地晴雨雷曝雹雾，使用破裂/缺损的茶壶进化<br><span class="mod2">Lv 36</span><br><span class="mod3">冠之雪原：远古墓地·定点[真品] Lv19</span></td>
        </tr>
        <tr>
            <td>134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/447.png"></td>
            <td>利欧路</td>
            <td>巨人帽岩雹，海鸣洞窟所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%、桥间空地·草丛 Lv27–30 15%；冠之雪原：冰点雪原·草丛 Lv11–14 5%、海鸣洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>美纳斯湖北岸晴，海鸣洞窟所有天气，亲密度*220以上或友好度*158以上提升等级（白天）<br><span class="mod3">本体：巨人凳岩·定点 Lv15、桥间空地·定点 Lv35；冠之雪原：冰点雪原·定点 Lv19、海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/633.png"></td>
            <td>单首龙</td>
            <td>剑：逆鳞湖雨，海鸣洞窟所有天气<br><span class="mod3">本体：第二矿山·草丛 Lv23–26 5%；冠之雪原：登顶隧道·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>137</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/634.png"></td>
            <td>双首暴龙</td>
            <td>逆鳞湖雷沙，50级进化<br><span class="mod3">本体：逆鳞湖·草丛 Lv43–46 15%；冠之雪原：海鸣洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/635.png"></td>
            <td>三首恶龙</td>
            <td>海鸣洞窟所有天气，64级进化<br><span class="mod3">冠之雪原：海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>盾：逆鳞湖阴曝，海鸣洞窟所有天气<br><span class="mod1">拳关丘陵（晴）·草丛随机遇敌 新增25%（替换好啦鱿）；拳关丘陵（阴）·草丛随机遇敌 新增35%（替换好啦鱿）；拳关丘陵（曝）·草丛随机遇敌 新增15%（替换好啦鱿）；拳关丘陵（晴）·地图可见 新增10%（替换树才怪）；拳关丘陵（阴）·地图可见 新增45%（替换童偶熊）；拳关丘陵（曝）·地图可见 新增5%（替换果然翁）</span><br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%、伽勒尔矿山·草丛 Lv16–19 5%、沙尘洼地·草丛 Lv27–30 5%；冠之雪原：登顶隧道·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>140</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/247.png"></td>
            <td>沙基拉斯</td>
            <td>盾：逆鳞湖沙，30级进化<br><span class="mod3">本体：巨人凳岩·定点 Lv15、巨人镜池·地面 Lv27–30 10%、巨人帽岩·地面 Lv27–30 10%、逆鳞湖·草丛 Lv43–46 15%；冠之雪原：海鸣洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班基拉斯</td>
            <td>盾：沙尘洼地晴曝雪雹沙雾，海鸣洞窟所有天气，55级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35；冠之雪原：海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>战竞湾，尖钉镇郊外所有天气，逆鳞湖雪，三岔平原所有天气，冻海晴阴雨雷雪雹雾<br><span class="mod3">本体：巨人帽岩·草丛 Lv27–30 15%；冠之雪原：雪中溪谷·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>143</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/713.png"></td>
            <td>冰岩怪</td>
            <td>三岔平原，冻海所有天气，37级进化<br><span class="mod3">本体：巨人帽岩·定点 Lv35、9号道路（战竞湾）·草丛 Lv40–43 15%；冠之雪原：雪中溪谷·定点 Lv19、冻海·冲浪 Lv47–50 25%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/041.png"></td>
            <td>超音蝠</td>
            <td>登顶隧道，海鸣洞窟，湖畔洞窟所有天气<br><span class="mod3">冠之雪原：登顶隧道·草丛 Lv11–14 15%、海鸣洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/042.png"></td>
            <td>大嘴蝠</td>
            <td>登顶隧道，海鸣洞窟所有天气，22级进化<br><span class="mod3">冠之雪原：登顶隧道·定点 Lv19、海鸣洞窟·定点 Lv55、湖畔洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/169.png"></td>
            <td>叉字蝠</td>
            <td>亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">冠之雪原：登顶隧道·定点 Lv19、海鸣洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/564.png"></td>
            <td>原盖海龟</td>
            <td>冻海晴阴雨雷雪雹雾<br><span class="mod3">冠之雪原：巨人鞋底·钓鱼 Lv11–14 15%、巨人鞋底·定点 Lv19、冻海·冲浪 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/565.png"></td>
            <td>肋骨海龟</td>
            <td>冻海晴雨雷曝，37级进化<br><span class="mod3">冠之雪原：冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/566.png"></td>
            <td>始祖小鸟</td>
            <td>巨人鞋底所有天气<br><span class="mod3">冠之雪原：登顶隧道·草丛 Lv11–14 10%、巨人鞋底·定点 Lv19</span></td>
        </tr>
        <tr>
            <td>150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/567.png"></td>
            <td>始祖大鸟</td>
            <td>37级进化</td>
        </tr>
        <tr>
            <td>151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>煦丽草原曝沙，沐光森林沙，牙牙湖东岸沙，牙牙湖西岸曝沙，牙牙湖之眼沙，美纳斯湖南岸曝沙，美纳斯湖北岸曝沙，拳关丘陵曝，巨人帽岩曝，煦丽草原沙，沐光森林曝沙，牙牙湖东岸沙，桥间空地曝沙，巨石原野晴阴曝沙，<br><span class="mod1">巨石原野（阴）·地图可见 移除10%（被秃鹰丫头替换）</span><br><span class="mod3">本体：煦丽草原·地面 Lv7–10 30%、沙尘洼地·草丛 Lv27–30 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>逆鳞湖雾，牙牙湖之眼沙雾，沐光森林曝沙，沙尘洼地阴曝沙雾，巨石原野晴阴曝沙，桥间空地沙，巨人鞋底，三岔平原所有天气，36级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35；冠之雪原：巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>煦丽草原沙，瞭望塔旧址晴曝沙，沐光森林沙，巨人帽岩曝沙，道路（8），巨石原野所有天气，瞭望塔旧址晴，美纳斯湖北岸沙，巨人凳岩沙<br><span class="mod1">瞭望塔旧址（晴）·地图可见 出现率60%→40%</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 15%、沙尘洼地·草丛 Lv27–30 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>逆鳞湖所有天气，巨石原野所有天气，瞭望塔旧址晴曝沙，沙尘洼地阴雨雷雪雹沙雾，巨人凳岩沙，三岔平原所有天气，34级进化<br><span class="mod3">本体：沙尘洼地·定点 Lv35；冠之雪原：巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>道路（2・4）所有天气，机擎河岸雷，巨石原野雷，巨人镜池雷，道路（2）所有天气，球湖湖畔晴阴雨雷曝雪雾<br><span class="mod3">本体：2号道路·草丛 Lv4–7 15%、美纳斯湖北岸·草丛 Lv7–10 10%、4号道路·草丛 Lv17–20 10%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>机擎河岸雷，沙尘洼地雷，逆鳞湖雷，美纳斯湖北岸所有天气，球湖湖畔晴雨雷雪雹雾，25级进化<br><span class="mod3">本体：2号道路（湖畔）·草丛 Lv43–46 10%、美纳斯湖北岸·定点 Lv15、美纳斯湖南岸·定点 Lv15、7号道路·草丛 Lv36–39 10%；冠之雪原：巨人鞋底·定点 Lv19、三岔平原·草丛 Lv47–50 10%</span></td>
        </tr>
        <tr>
            <td>157</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>尖钉镇郊外所有天气，７号道路所有天气，逆鳞湖雷，挑战海滩所有天气，球湖湖畔阴雷<br><span class="mod3">本体：桥间空地·草丛 Lv27–30 15%、7号道路·草丛 Lv36–39 5%；铠岛：挑战海滩·草丛 Lv9–12 15%、挑战海滩·定点 Lv17、离岛海域·草丛 Lv45–48 15%；冠之雪原：巨人鞋底·草丛 Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>９号道路，战竞湾所有天气，斗志洞窟，圆环海湾所有天气，冻海雷<br><span class="mod3">本体：美纳斯湖南岸·钓鱼 Lv7–10 5%、9号道路·草丛 Lv40–43 5%、9号道路·钓鱼 Lv40–43 25%、牙牙湖之眼·钓鱼 Lv43–46 25%；铠岛：挑战海滩·沙滩 Lv9–12 10%、圆环海湾·沙滩 Lv9–12 20%、圆环海湾·定点 Lv17、离岛海域·草丛 Lv45–48 15%；冠之雪原：冻海·草丛 Lv47–50 15%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/363.png"></td>
            <td>海豹球</td>
            <td>冻海所有天气<br><span class="mod3">冠之雪原：雪中溪谷·钓鱼 Lv11–14 30%、冻海·草丛 Lv47–50 15%、冻海·钓鱼 Lv47–50 30%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>160</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/364.png"></td>
            <td>海魔狮</td>
            <td>冻海所有天气，32级进化<br><span class="mod3">冠之雪原：冻海·草丛 Lv47–50 15%、冻海·钓鱼 Lv47–50 25%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/365.png"></td>
            <td>帝牙海狮</td>
            <td>冻海晴阴雪雹雾，44级进化<br><span class="mod3">冠之雪原：冻海·钓鱼 Lv47–50 5%、冻海·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>战竞湾，尖钉镇郊外所有天气，挑战海滩，冻海所有天气<br><span class="mod3">本体：草路镇·定点 Lv51、巨人镜池·钓鱼 Lv27–30 15%、9号道路（战竞湾）·草丛 Lv40–43 5%、9号道路（战竞湾）·钓鱼 Lv40–43 5%、牙牙湖之眼·钓鱼 Lv43–46 5%、微寐森林·钓鱼 Lv57–60 15%；冠之雪原：雪中溪谷·钓鱼 Lv11–14 5%、冻海·冲浪 Lv47–50 5%、冻海·钓鱼 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>道路（2・3），微寐森林所有天气，道路（1・2），微寐森林所有天气，机擎河岸阴，肝帝威的游戏笔记<br><span class="mod3">本体：1号道路·草丛 Lv2–5 15%、煦丽草原·空中 Lv7–10 30%、牙牙湖东岸·空中 Lv7–10 30%、美纳斯湖南岸·空中 Lv7–10 30%；冠之雪原：起橇雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>机擎河岸所有天气，拳关丘陵晴，巨人镜池，拳关丘陵所有天气，道路（3）所有天气，球湖湖畔晴雪，18级进化<br><span class="mod3">本体：牙牙湖东岸·定点 Lv15、美纳斯湖北岸·定点 Lv15、3号道路·定点 Lv23、拳关丘陵·空中 Lv27–30 30%</span></td>
        </tr>
        <tr>
            <td>165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>道路（7），微寐森林，逆鳞湖所有天气，沙尘洼地雪，微寐森林所有天气，巨人帽岩，拳关丘陵，瞭望塔旧址，美纳斯湖北岸所有天气，机擎河岸雨雷曝雪雹沙，球湖湖畔晴雪雹，38级进化<br><span class="mod3">本体：瞭望塔旧址·定点[超极巨] Lv15、拳关丘陵·空中 Lv27–30 10%、拳关丘陵·定点[超极巨] Lv35</span></td>
        </tr>
        <tr>
            <td>166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>道路（2）所有天气，道路（3）所有天气，机擎河岸晴。球湖湖畔晴曝<br><span class="mod3">本体：沐光森林·草丛 Lv7–10 15%、4号道路·草丛 Lv17–20 15%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>机擎河岸晴，巨石原野晴，沙尘洼地晴阴雨雷沙雾，巨人帽岩晴阴雨雾，道路（5），机擎河岸所有天气，球湖湖畔晴雨，20级进化<br><span class="mod1">沙尘洼地（雾）·草丛随机遇敌 移除20%（被勾魂眼替换）</span><br><span class="mod3">本体：5号道路·定点 Lv28、机擎河岸·定点 Lv35；冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/546.png"></td>
            <td>木棉球</td>
            <td>巨石原野阴，球湖湖畔晴雨，<br><span class="mod1">巨石原野（阴）·草丛随机遇敌 移除40%（被秃鹰丫头替换）</span><br><span class="mod3">本体：沐光森林·树果树 Lv7–10 20%、美纳斯湖北岸·树果树 Lv7–10 10%、4号道路·树果树 Lv17–20 20%、5号道路·草丛 Lv20–23 15%、5号道路·树果树 Lv20–23 40%、机擎河岸·树果树 Lv27–30 20%、巨人镜池·树果树 Lv27–30 40%；冠之雪原：冰点雪原·树果树 Lv11–14 20%</span></td>
        </tr>
        <tr>
            <td>169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/547.png"></td>
            <td>风妖精</td>
            <td>球湖湖畔晴雨，日之石进化<br><span class="mod3">本体：机擎河岸·定点 Lv35、9号道路（尖钉镇郊外）·树果树 Lv40–43 20%；冠之雪原：球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·树果树 Lv47–50 40%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>第二矿山所有天气，瞭望塔旧址曝沙，沙尘洼地沙，巨人帽岩沙，巨人镜池沙，沙尘洼地所有天气，球湖湖畔晴曝<br><span class="mod3">本体：第二矿山·草丛 Lv23–26 15%、巨石原野·草丛 Lv27–30 10%；冠之雪原：巨人睡榻·草丛 Lv11–14 5%、球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>171</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>迷光森林所有天气，逆鳞湖雾，球湖湖畔晴雾<br><span class="mod3">本体：迷光森林·草丛[♂] Lv32–35 10%、迷光森林·草丛[♀] Lv32–35 10%；冠之雪原：通顶雪道·草丛[♂] Lv11–14 5%、通顶雪道·草丛[♀] Lv11–14 5%</span></td>
        </tr>
        <tr>
            <td>172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/446.png"></td>
            <td>小卡比兽</td>
            <td>机擎河岸晴，球湖湖畔晴阴雨雷曝雪雾，携带饱腹薰香生蛋<br><span class="mod3">本体：煦丽草原·树果树 Lv7–10 10%、巨人凳岩·树果树 Lv7–10 20%、机擎河岸·树果树 Lv27–30 10%、桥间空地·树果树 Lv27–30 20%、巨人帽岩·树果树 Lv27–30 20%；冠之雪原：起橇雪原·树果树 Lv11–14 20%、冰点雪原·草丛 Lv11–14 5%、冰点雪原·树果树 Lv11–14 10%、巨人鞋底·树果树 Lv11–14 10%</span></td>
        </tr>
        <tr>
            <td>173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>机擎河岸晴阴雨雷曝雪雹沙，起橇雪原晴曝，冰点雪原晴阴曝，亲密度*220以上或友好度*158以上提升等级<br><span class="mod3">本体：巨人凳岩·定点[超极巨] Lv15、机擎河岸·定点[超极巨] Lv35、桥间空地·定点[超极巨] Lv35；冠之雪原：起橇雪原·定点[超极巨] Lv19、冰点雪原·定点[超极巨] Lv19、巨人睡榻·定点[超极巨] Lv19</span></td>
        </tr>
        <tr>
            <td>174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>盾：沙尘洼地雾，巨人镜池雾，湖畔洞窟所有天气<br><span class="mod1">沙尘洼地（晴）·草丛随机遇敌 新增30%（替换毛毛角羊）；沙尘洼地（雾）·草丛随机遇敌 新增20%（替换白蓬蓬）；沙尘洼地（晴）·地图可见 新增15%（替换滑滑小子）；沙尘洼地（雾）·地图可见 新增55%（替换果然翁）</span><br><span class="mod3">本体：瞭望塔旧址·草丛 Lv7–10 5%；冠之雪原：远古墓地·草丛 Lv11–14 10%、湖畔洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>剑：沙尘洼地雾，巨人镜池雾，湖畔洞窟所有天气<br><span class="mod3">本体：巨人凳岩·草丛 Lv7–10 5%、巨人凳岩·定点 Lv15；冠之雪原：远古墓地·草丛 Lv11–14 10%、湖畔洞窟·草丛 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>伽勒尔矿山所有天气，道路（3），伽勒尔矿山，巨人帽岩所有天气，机擎河岸曝沙<br><span class="mod3">本体：伽勒尔矿山·草丛 Lv16–19 15%；冠之雪原：球湖湖畔·定点 Lv55、湖畔洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>桥间空地曝，巨石原野曝，巨人帽岩曝沙，伽勒尔矿山所有天气，湖畔洞窟所有天气，球湖湖畔曝，18级进化<br><span class="mod3">本体：伽勒尔矿山·定点 Lv24、巨人帽岩·地面 Lv27–30 30%；冠之雪原：湖畔洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨炭山</td>
            <td>沙尘洼地曝，逆鳞湖曝，巨人帽岩所有天气，湖畔洞窟所有天气，球湖湖畔晴雷曝雪雹沙雾，34级进化<br><span class="mod3">本体：巨人帽岩·定点[超极巨] Lv35；冠之雪原：球湖湖畔·定点[超极巨] Lv55、湖畔洞窟·定点[超极巨] Lv55</span></td>
        </tr>
        <tr>
            <td>179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>４号道路，桥间空地所有天气，机擎河岸雹，巨石原野雹，湖畔洞窟所有天气<br><span class="mod3">本体：4号道路·草丛 Lv17–20 15%；冠之雪原：冰点雪原·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>沙尘洼地雹，桥间空地所有天气，湖畔洞窟所有天气，40级进化<br><span class="mod3">冠之雪原：冰点雪原·定点 Lv19、巨人睡榻·定点 Lv19、球湖湖畔·草丛 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>第二矿山所有天气，桥间空地雷，第二矿山，瞭望塔旧址，桥间空地所有天气<br><span class="mod3">本体：牙牙湖东岸·草丛 Lv7–10 5%、牙牙湖东岸·空中 Lv7–10 10%、第二矿山·草丛 Lv23–26 5%、桥间空地·空中 Lv27–30 20%；冠之雪原：通顶雪道·草丛 Lv11–14 15%</span></td>
        </tr>
        <tr>
            <td>182</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>逆鳞湖雷，桥间空地晴阴雨雷曝雹沙雾，湖畔洞窟所有天气，球湖湖畔阴雨，48级进化<br><span class="mod3">本体：桥间空地·定点 Lv35、拳关丘陵·空中 Lv27–30 20%、牙牙湖之眼·草丛 Lv43–46 5%</span></td>
        </tr>
        <tr>
            <td>183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/345.png"></td>
            <td>触手百合</td>
            <td>巨人睡榻，巨人鞋底所有天气垂钓<br><span class="mod3">冠之雪原：巨人睡榻·钓鱼 Lv11–14 25%、巨人鞋底·冲浪 Lv47–50 5%、海鸣洞窟·冲浪 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>184</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/346.png"></td>
            <td>摇篮百合</td>
            <td>40级进化<br><span class="mod3">冠之雪原：球湖湖畔·草丛 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/347.png"></td>
            <td>太古羽虫</td>
            <td>球湖湖畔所有天气<br><span class="mod3">冠之雪原：巨人睡榻·钓鱼 Lv11–14 25%、巨人鞋底·冲浪 Lv47–50 15%、海鸣洞窟·冲浪 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>186</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/348.png"></td>
            <td>太古盔甲</td>
            <td>球湖湖畔雨雷定点，40级进化<br><span class="mod3">冠之雪原：球湖湖畔·草丛 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/369.png"></td>
            <td>古空棘鱼</td>
            <td>球湖湖畔晴阴雨雷曝雪雹<br><span class="mod3">冠之雪原：巨人鞋底·钓鱼 Lv11–14 5%、球湖湖畔·冲浪 Lv47–50 15%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>２号道路所有天气，球湖湖畔所有天气，巨人鞋底，海鸣洞窟所有天气，巨人睡榻晴阴雨雷曝雪<br><span class="mod3">本体：2号道路·钓鱼 Lv4–7 5%、5号道路·钓鱼 Lv20–23 5%、水舟镇·钓鱼 Lv21–24 25%、沙尘洼地·冲浪 Lv43–46 25%、巨人镜池·冲浪 Lv43–46 25%、巨人镜池·钓鱼 Lv27–30 30%；冠之雪原：巨人睡榻·冲浪 Lv47–50 15%、巨人睡榻·钓鱼 Lv11–14 15%、球湖湖畔·钓鱼 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>美纳斯湖南岸雾、逆鳞湖雾，巨人睡榻雾，美丽度达到170以上提升等级，携带美丽鳞片连接交换<br><span class="mod2">美丽鳞片 ; Lv 36</span><br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 30%、2号道路（湖畔）·钓鱼 Lv43–46 15%、美纳斯湖南岸·冲浪 Lv43–46 15%、美纳斯湖南岸·定点 Lv15、巨人镜池·钓鱼 Lv27–30 5%、逆鳞湖·冲浪 Lv43–46 15%、逆鳞湖·钓鱼 Lv43–46 25%、逆鳞湖·定点 Lv51、微寐森林·钓鱼 Lv57–60 30%；冠之雪原：巨人睡榻·定点 Lv19、球湖湖畔·冲浪 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>战竞湾所有天气，２号道路所有天气，美纳斯湖北岸晴雨雷雪雹雾，牙牙湖西岸晴雨雷雪雹雾，逆鳞湖晴雨雷雪雹雾，冻海雪雹<br><span class="mod3">本体：2号道路（湖畔）·冲浪 Lv43–46 5%、牙牙湖西岸·定点[超极巨] Lv15、美纳斯湖北岸·冲浪 Lv43–46 15%、美纳斯湖北岸·定点[超极巨] Lv15、巨人帽岩·钓鱼 Lv27–30 15%、9号道路（战竞湾）·冲浪 Lv40–43 30%、逆鳞湖·冲浪 Lv43–46 5%、逆鳞湖·定点[超极巨] Lv51；冠之雪原：雪中溪谷·钓鱼 Lv11–14 15%、冻海·冲浪 Lv47–50 30%、冻海·钓鱼 Lv47–50 25%</span></td>
        </tr>
        <tr>
            <td>191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/304.png"></td>
            <td>可可多拉</td>
            <td>湖畔洞窟所有天气，球湖湖畔所有天气<br><span class="mod3">冠之雪原：登顶隧道·草丛 Lv11–14 15%、湖畔洞窟·草丛 Lv47–50 15%</span></td>
        </tr>
        <tr>
            <td>192</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/305.png"></td>
            <td>可多拉</td>
            <td>湖畔洞窟所有天气，32级进化<br><span class="mod3">冠之雪原：雪中溪谷·定点 Lv19、湖畔洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>193</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/306.png"></td>
            <td>波士可多拉</td>
            <td>湖畔洞窟所有天气，42级进化<br><span class="mod3">冠之雪原：湖畔洞窟·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/147.png"></td>
            <td>迷你龙</td>
            <td>球湖湖畔所有天气<br><span class="mod3">冠之雪原：巨人睡榻·冲浪 Lv47–50 5%、巨人睡榻·钓鱼 Lv11–14 5%、球湖湖畔·冲浪 Lv47–50 30%、球湖湖畔·钓鱼 Lv47–50 5%</span></td>
        </tr>
        <tr>
            <td>195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/148.png"></td>
            <td>哈克龙</td>
            <td>球湖湖畔雷雾，30级进化<br><span class="mod3">冠之雪原：球湖湖畔·冲浪 Lv47–50 5%、球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/149.png"></td>
            <td>快龙</td>
            <td>球湖湖畔雨雷，55级进化<br><span class="mod3">冠之雪原：球湖湖畔·定点 Lv55</span></td>
        </tr>
        <tr>
            <td>197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/377.png"></td>
            <td>雷吉洛克</td>
            <td>岩山遗迹同行宝可梦首位携带不变之石<br><span class="mod3">冠之雪原：岩山遗迹·定点 Lv30</span></td>
        </tr>
        <tr>
            <td>198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/378.png"></td>
            <td>雷吉艾斯</td>
            <td>冰山遗迹同行宝可梦首位为几何雪花<br><span class="mod3">冠之雪原：冰山遗迹·定点 Lv30</span></td>
        </tr>
        <tr>
            <td>199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/379.png"></td>
            <td>雷吉斯奇鲁</td>
            <td>黑金遗迹在门前吹响指哨<br><span class="mod3">冠之雪原：黑金遗迹·定点 Lv30</span></td>
        </tr>
        <tr>
            <td>200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/894.png"></td>
            <td>雷吉艾勒奇</td>
            <td>抉择遗迹，队伍中同时有雷吉洛克、雷吉艾斯和雷吉斯奇鲁，点出雷吉艾勒奇的图形<br><span class="mod3">冠之雪原：抉择遗迹·定点 Lv50</span></td>
        </tr>
        <tr>
            <td>201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/895.png"></td>
            <td>雷吉铎拉戈</td>
            <td>抉择遗迹，队伍中同时有雷吉洛克、雷吉艾斯和雷吉斯奇鲁，点出雷吉铎拉戈的图形<br><span class="mod3">冠之雪原：抉择遗迹·定点 Lv50</span></td>
        </tr>
        <tr>
            <td>202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/144-g.png"></td>
            <td>急冻鸟（伽勒尔的样子）</td>
            <td>王冠雪原全境传说的鸟宝可梦剧情<br><span class="mod3">冠之雪原：巨树丘陵·定点[伽勒尔] Lv55</span></td>
        </tr>
        <tr>
            <td>203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/145-g.png"></td>
            <td>闪电鸟（伽勒尔的样子）</td>
            <td>旷野地带所有区域传说的鸟宝可梦剧情<br><span class="mod3">冠之雪原：巨树丘陵·定点[伽勒尔] Lv55</span></td>
        </tr>
        <tr>
            <td>204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/146-g.png"></td>
            <td>火焰鸟（伽勒尔的样子）</td>
            <td>铠岛全境传说的鸟宝可梦剧情<br><span class="mod3">冠之雪原：巨树丘陵·定点[伽勒尔] Lv55</span></td>
        </tr>
        <tr>
            <td>205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/638.png"></td>
            <td>勾帕路翁</td>
            <td>冻海所有天气，搜集所有铁心宝可梦的线索并向索妮亚汇报</td>
        </tr>
        <tr>
            <td>206</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/639.png"></td>
            <td>代拉基翁</td>
            <td>湖畔洞窟所有天气，搜集所有铁心宝可梦的线索并向索妮亚汇报</td>
        </tr>
        <tr>
            <td>207</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/640.png"></td>
            <td>毕力吉翁</td>
            <td>巨人睡榻所有天气，搜集所有铁心宝可梦的线索并向索妮亚汇报</td>
        </tr>
        <tr>
            <td>208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/896.png"></td>
            <td>雪暴马</td>
            <td>王冠神殿<br><span class="mod3">冠之雪原：冻凝村·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/897.png"></td>
            <td>灵幽马</td>
            <td>王冠神殿<br><span class="mod3">冠之雪原：冻凝村·定点 Lv15</span></td>
        </tr>
        <tr>
            <td>210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/898.png"></td>
            <td>蕾冠王</td>
            <td>王冠神殿<br><span class="mod3">冠之雪原：冻凝村·定点 Lv15</span></td>
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
function applyFilters1() {
    const rows = document.querySelectorAll("#pokeTable1 tr");

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
function applyFilters2() {
    const rows = document.querySelectorAll("#pokeTable2 tr");

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
function real_numfilter1() {
    currentNumFilter =
        document.getElementById("numfilter1").value.trim();
    applyFilters1();
    document.getElementById("numfilter2").value = "-";
    applyFilters2();
}
function resetFilters1() {
    currentWayFilter = "";
    currentNumFilter = "";

    // 清空输入框
    document.getElementById("numfilter1").value = "";

    // 显示全部
    applyFilters1();
}
function real_numfilter2() {
    currentNumFilter =
        document.getElementById("numfilter2").value.trim();
    applyFilters2();
        document.getElementById("numfilter1").value = "-";
    applyFilters1();
        document.getElementById("numfilter").value = "-";
    applyFilters();
}
function resetFilters2() {
    currentWayFilter = "";
    currentNumFilter = "";

    // 清空输入框
    document.getElementById("numfilter2").value = "";

    // 显示全部
    applyFilters2();
}

function toggleMod(checkbox, className) {
    document.querySelectorAll('.' + className).forEach(el => {
        el.style.display = checkbox.checked ? '' : 'none';
    });
}
</script>
