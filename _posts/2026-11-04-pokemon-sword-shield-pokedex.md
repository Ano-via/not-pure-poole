---
layout: post
title: 口袋妖怪剑盾exclusives_killer_mod版400宝可梦图鉴
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
            <th>捕获方式</th>
        </tr>
    </thead>
    <tbody id="pokeTable">
        <tr>
            <td id="001">001</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/810.png"></td>
            <td>敲音猴</td>
            <td>初始御三家 【MOD新增】沐光森林 明雷（晴5%、大晴天20%）、暗雷（晴5%）</td>
        </tr>
        <tr>
            <td id="002">002</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/811.png"></td>
            <td>啪咚猴</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td id="003">003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/812.png"></td>
            <td>轰擂金刚猩</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td id="004">004</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/813.png"></td>
            <td>炎兔儿</td>
            <td>初始御三家 【MOD新增】３号道路 明雷（9%）、暗雷（2%）</td>
        </tr>
        <tr>
            <td id="005">005</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/814.png"></td>
            <td>腾蹴小将</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td id="006">006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/815.png"></td>
            <td>闪焰王牌</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td id="007">007</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/816.png"></td>
            <td>泪眼蜥</td>
            <td>初始御三家 【MOD新增】２号道路 明雷（5%）、暗雷（2%）</td>
        </tr>
        <tr>
            <td id="008">008</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/817.png"></td>
            <td>变涩蜥</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td id="009">009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/818.png"></td>
            <td>千面避役</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td id="010">010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>道路（1・2），微寐森林所有天气，道路（2），微寐森林所有天气，巨人帽岩晴，揖礼原野，挑战之路，挑战海滩，圆环海湾，锻炼平原，健身之海，列岛海域，离岛海域，蜂巢岛所有天气，锻炼平原</td>
        </tr>
        <tr>
            <td id="011">011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>５号道路所有天气，巨人帽岩晴阴雨雷雪雹沙雾，巨人镜池晴阴雨沙，巨石原野雾，巨人帽岩所有天气，10级进化</td>
        </tr>
        <tr>
            <td id="012">012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>微寐森林所有天气，逆鳞湖晴，微寐森林所有天气，巨人帽岩所有天气，沐光森林所有天气。35级进化</td>
        </tr>
        <tr>
            <td id="013">013</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/010.png"></td>
            <td>绿毛虫</td>
            <td>１号道路所有天气</td>
        </tr>
        <tr>
            <td id="014">014</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/011.png"></td>
            <td>铁甲蛹</td>
            <td>煦丽草原所有天气，7级进化</td>
        </tr>
        <tr>
            <td id="015">015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝴</td>
            <td>微寐森林所有天气，煦丽草原，牙牙湖东岸所有天气 巨人镜池阴，10级进化</td>
        </tr>
        <tr>
            <td id="016">016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>道路（1），微寐森林所有天气，沐光森林雨雷，美纳斯湖北岸雨雷，瞭望塔旧址雷，牙牙湖东岸雨，微寐森林所有天气，牙牙湖东岸雨</td>
        </tr>
        <tr>
            <td id="017">017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/737.png"></td>
            <td>虫电宝</td>
            <td>牙牙湖之眼雨，沙尘洼地雷，拳关丘陵雷，20级进化</td>
        </tr>
        <tr>
            <td id="018">018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/738.png"></td>
            <td>锹农炮虫</td>
            <td>巨人凳岩晴阴曝沙，雷之石进化</td>
        </tr>
        <tr>
            <td id="019">019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>道路（1・2），微寐森林所有天气，巨人帽岩晴阴雨雷雪曝沙雾，沐光森林晴阴雪沙雾</td>
        </tr>
        <tr>
            <td id="020">020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>机擎河岸晴阴曝雪沙雾，机擎市郊外所有天气，巨人帽岩晴阴雨雷曝雪沙雾，桥间空地雪，20级进化</td>
        </tr>
        <tr>
            <td id="021">021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>道路（2・3），微寐森林所有天气，道路（1・2），微寐森林所有天气，机擎河岸阴</td>
        </tr>
        <tr>
            <td id="022">022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>机擎河岸所有天气，拳关丘陵晴，巨人镜池，拳关丘陵所有天气，道路（3）所有天气，球湖湖畔晴雪，18级进化</td>
        </tr>
        <tr>
            <td id="023">023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>道路（7），微寐森林，逆鳞湖所有天气，沙尘洼地雪，微寐森林所有天气，巨人帽岩，拳关丘陵，瞭望塔旧址，美纳斯湖北岸所有天气，机擎河岸雨雷曝雪雹沙，球湖湖畔晴雪雹，38级进化</td>
        </tr>
        <tr>
            <td id="024">024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>道路（1），微寐森林所有天气,道路（1・2），微寐森林所有天气,	列岛海域所有天气,球湖湖畔晴阴雨雷曝雪雾,列岛海域，球湖湖畔所有天气.摇晃树木</td>
        </tr>
        <tr>
            <td id="025">025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>桥间空地所有天气，球湖湖畔，巨树丘陵所有天气 巨人睡榻晴阴雨雷雪雹雾，摇晃树木，24级进化</td>
        </tr>
        <tr>
            <td id="026">026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>牙牙湖东岸晴，瞭望塔旧址晴雨雷沙雾，美纳斯湖北岸晴，煦丽草原，牙牙湖东岸所有天气</td>
        </tr>
        <tr>
            <td id="027">027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>巨人凳岩晴，桥间空地，巨石原野，巨人镜池所有天气，21级进化</td>
        </tr>
        <tr>
            <td id="028">028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>牙牙湖之眼晴阴雨雷曝雪雾，拳关丘陵所有天气	，巨石原野阴，巨人镜池晴阴曝，32级进化</td>
        </tr>
        <tr>
            <td id="029">029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>狡小狐</td>
            <td>道路（1・2）所有天气，巨人镜池晴阴雨雷曝，沙尘洼地晴阴雨雷曝，巨石原野雾</td>
        </tr>
        <tr>
            <td id="030">030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>猾大狐</td>
            <td>尖钉镇郊外所有天气，桥间空地晴阴曝雪雾，巨石原野雾，拳关丘陵阴，道路（7）所有天气	，美纳斯湖南岸所有天气，18级进化</td>
        </tr>
        <tr>
            <td id="031">031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263-g.png"></td>
            <td>蛇纹熊-伽勒尔的样子</td>
            <td>道路（2・3），桥间空地所有天气，巨石原野晴阴雨曝雪雹沙雾，巨人帽岩晴阴雨雷曝雪沙雾。普通形态铠岛交换</td>
        </tr>
        <tr>
            <td id="032">032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264-g.png"></td>
            <td>直冲熊</td>
            <td>巨人睡榻阴，球湖湖畔阴，20级进化</td>
        </tr>
        <tr>
            <td id="033">033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>逆鳞湖晴沙，道路（2），桥间空地所有天气，巨人睡榻阴雨，球湖湖畔阴，35级晚上进化</td>
        </tr>
        <tr>
            <td id="034">034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>道路（4）所有天气，道路（1）所有天气机擎河岸晴雪，起橇雪原，冰点雪原，巨人睡榻，雪中溪谷，三岔平原晴曝</td>
        </tr>
        <tr>
            <td id="035">035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>机擎河岸晴阴，沙尘洼地晴，拳关丘陵晴，煦丽草原所有天气，起橇雪原晴曝，冰点雪原晴曝，巨人睡榻晴，雪中溪谷晴曝，24级进化</td>
        </tr>
        <tr>
            <td id="036">036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>盾限定。２号道路所有天气，煦丽草原雨，沐光森林晴阴雨雷雾，牙牙湖西岸阴 【MOD新增】２号道路 明雷（10%替换扒手猫）、暗雷（15%替换狡小狐）</td>
        </tr>
        <tr>
            <td id="037">037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲叶小童</td>
            <td>盾限定。５号道路所有天气，巨人凳岩雨，巨人帽岩晴，沐光森林所有天气，美纳斯湖南岸晴阴，巨人凳岩晴雨，14级进化</td>
        </tr>
        <tr>
            <td id="038">038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/272.png"></td>
            <td>乐天河童</td>
            <td>盾限定。沐光森林晴阴雨雷雾，水之石进化</td>
        </tr>
        <tr>
            <td id="039">039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>剑限定。２号道路所有天气，煦丽草原雨，沐光森林晴阴雨雷雾，牙牙湖西岸阴</td>
        </tr>
        <tr>
            <td id="040">040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>剑限定。５号道路所有天气，巨人凳岩雨，煦丽草原雨，巨人帽岩晴，沐光森林所有天气，美纳斯湖南岸晴阴，巨人凳岩晴雨，14级进化</td>
        </tr>
        <tr>
            <td id="041">041</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/275.png"></td>
            <td>狡猾天狗</td>
            <td>剑限定。沐光森林晴阴雨雷雾，叶之石进化</td>
        </tr>
        <tr>
            <td id="042">042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>道路（2），机擎市郊外，第二矿山所有天气，道路（2），第二矿山，巨人帽岩所有天气，机擎河岸雨，巨人镜池雨，道路（2・4・5），水舟镇，机擎市，第二矿山所有天气，道路（2）所有天气，斗志洞窟所有天气</td>
        </tr>
        <tr>
            <td id="043">043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>逆鳞湖雷，沙尘洼地雷，巨人帽岩雨雷，道路（6），桥间空地，巨人镜池所有天气，第二矿山，巨人帽岩，道路（2），牙牙湖西岸所有天气，	斗志洞窟所有天气，揖礼原野晴，清凉湿原晴阴曝沙，挑战海滩晴阴雷曝沙，圆环海湾晴曝沙，22级进化</td>
        </tr>
        <tr>
            <td id="044">044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>２号道路所有天气，沐光森林雾，瞭望塔旧址雾，牙牙湖东岸雾，机擎河岸所有天气，沐光森林雾，牙牙湖西岸晴阴曝雪沙雾，瞭望塔旧址雨雷雹沙雾，美纳斯湖北岸阴雨雷雪雹雾，沐光森林雾，瞭望塔旧址雾，牙牙湖东岸雾</td>
        </tr>
        <tr>
            <td id="045">045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>７号道路、尖钉镇郊外所有天气，牙牙湖之眼雾，巨人凳岩雾，桥间空地晴，７号道路所有天气，巨人帽岩晴	，美纳斯湖北岸所有天气，20级进化</td>
        </tr>
        <tr>
            <td id="046">046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>道路（2・4）所有天气，机擎河岸雷，巨石原野雷，巨人镜池雷，道路（2）所有天气，球湖湖畔晴阴雨雷曝雪雾</td>
        </tr>
        <tr>
            <td id="047">047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>机擎河岸雷，沙尘洼地雷，逆鳞湖雷，美纳斯湖北岸所有天气，球湖湖畔晴雨雷雪雹雾，25级进化</td>
        </tr>
        <tr>
            <td id="048">048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>牙牙湖东岸晴，煦丽草原晴阴雨曝雪沙雾，沐光森林晴雨曝雪雹沙，牙牙湖西岸曝沙，美纳斯湖北岸晴曝沙，巨人帽岩沙</td>
        </tr>
        <tr>
            <td id="049">049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>牙牙湖之眼所有天气，巨人凳岩晴，美纳斯湖北岸晴，桥间空地阴，巨人镜池沙，巨人帽岩曝沙，煦丽草原所有天气，牙牙湖西岸曝雪雹沙，20级进化</td>
        </tr>
        <tr>
            <td id="050">050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>煦丽草原晴雪，牙牙湖东岸阴曝雪雹沙雾，道路（5），巨人帽岩所有天气</td>
        </tr>
        <tr>
            <td id="051">051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/573.png"></td>
            <td>奇诺栗鼠</td>
            <td>巨人帽岩晴阴雾，光之石进化</td>
        </tr>
        <tr>
            <td id="052">052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>煦丽草原晴，沐光森林晴沙，瞭望塔旧址晴阴，牙牙湖西岸晴，巨石原野所有天气，牙牙湖东岸晴</td>
        </tr>
        <tr>
            <td id="053">053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/762.png"></td>
            <td>甜舞妮</td>
            <td>牙牙湖之眼晴，18级进化</td>
        </tr>
        <tr>
            <td id="054">054</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/763.png"></td>
            <td>甜冷美后</td>
            <td>巨石原野晴阴曝雪雹沙雾，学会踩踏技能</td>
        </tr>
        <tr>
            <td id="055">055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>牙牙湖东岸晴阴雨雷，煦丽草原阴	，牙牙湖东岸晴阴雷雾，沐光森林晴阴雨雷，瞭望塔旧址阴</td>
        </tr>
        <tr>
            <td id="056">056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>牙牙湖之眼阴，巨人镜池晴阴雨雷曝雾，美纳斯湖北岸晴阴雨雷，巨人帽岩阴雨雷，21级进化</td>
        </tr>
        <tr>
            <td id="057">057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/045.png"></td>
            <td>霸王花</td>
            <td>沐光森林晴阴雾，拳关丘陵晴雨雷曝沙，巨人镜池阴雨雷雪雹沙，叶之石进化</td>
        </tr>
        <tr>
            <td id="058">058</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/182.png"></td>
            <td>美丽花</td>
            <td>巨人镜池晴，日之石进化</td>
        </tr>
        <tr>
            <td id="059">059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>４号道路所有天气，沐光森林晴阴雨雷曝雾，煦丽草原阴，牙牙湖东岸阴，巨人镜池晴，牙牙湖西岸阴</td>
        </tr>
        <tr>
            <td id="060">060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>美纳斯湖南岸阴曝，牙牙湖之眼阴，沙尘洼地阴，巨人镜池阴，煦丽草原晴阴雨曝雪沙雾，亲密度*220以上或友好度*158以上提升等级（白天）</td>
        </tr>
        <tr>
            <td id="061">061</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/407.png"></td>
            <td>罗丝雷朵</td>
            <td>拳关丘陵阴雾，光之石进化</td>
        </tr>
        <tr>
            <td id="062">062</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/278.png"></td>
            <td>长翅鸥</td>
            <td>大部分地区都有</td>
        </tr>
        <tr>
            <td id="063">063</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/279.png"></td>
            <td>大嘴鸥</td>
            <td>大部分地区都有，25级进化</td>
        </tr>
        <tr>
            <td id="064">064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>４号道路所有天气，煦丽草原雷，沐光森林雷，牙牙湖西岸雷，牙牙湖东岸雷，美纳斯湖南岸雷，美纳斯湖北岸雷，巨人镜池雷，巨人帽岩雷，美纳斯湖南岸雷，巨人镜池雷</td>
        </tr>
        <tr>
            <td id="065">065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>７号道路所有天气，逆鳞湖雷	，美纳斯湖南岸所有天气，巨人帽岩雷，巨人凳岩雨雷，巨人睡榻雷，远古墓地雷，巨人鞋底雷，三岔平原雷，球湖湖畔雷	，巨人睡榻雷，球湖湖畔雷，36级进化</td>
        </tr>
        <tr>
            <td id="066">066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>煦丽草原雷，瞭望塔旧址雷，牙牙湖西岸雷，牙牙湖东岸雷，美纳斯湖南岸雷，４号道路所有天气，煦丽草原雷，沐光森林雷，牙牙湖西岸雷，牙牙湖东岸雷，巨人凳岩雷，沙尘洼地雨雷，巨人镜池雨雷</td>
        </tr>
        <tr>
            <td id="067">067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>牙牙湖之眼雷，巨人凳岩雷	，巨人帽岩雷	，煦丽草原雷，26级进化</td>
        </tr>
        <tr>
            <td id="068">068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>剑：煦丽草原曝，沐光森林曝，瞭望塔旧址曝，牙牙湖西岸曝，牙牙湖东岸曝，美纳斯湖南岸曝，牙牙湖之眼曝，３号道路所有天气，煦丽草原曝，沐光森林曝，瞭望塔旧址曝，牙牙湖西岸曝，牙牙湖东岸曝，美纳斯湖南岸曝，美纳斯湖北岸曝，牙牙湖之眼曝，巨人凳岩曝 盾：拳关丘陵曝，沙尘洼地曝，巨人镜池曝</td>
        </tr>
        <tr>
            <td id="069">069</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/038.png"></td>
            <td>九尾</td>
            <td>剑：逆鳞湖曝，火之石进化</td>
        </tr>
        <tr>
            <td id="070">070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/058.png"></td>
            <td>卡蒂狗</td>
            <td>剑：拳关丘陵曝，沙尘洼地曝，巨人镜池曝</td>
        </tr>
        <tr>
            <td id="071">071</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/059.png"></td>
            <td>风速狗</td>
            <td>盾 逆鳞湖曝，火之石进化</td>
        </tr>
        <tr>
            <td id="072">072</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/582.png"></td>
            <td>迷你冰</td>
            <td>大部分地区雪雹天气出现</td>
        </tr>
        <tr>
            <td id="073">073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>１０号道路所有天气，泉烟小路所有天气，大部分地区雪雹天气出现，35级进化</td>
        </tr>
        <tr>
            <td id="074">074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>白丘车站所有天气，逆鳞湖雪雹，牙牙湖西岸雪雹，牙牙湖东岸雪雹，美纳斯湖北岸雪雹，美纳斯湖南岸雪雹，桥间空地雪雹，逆鳞湖雪雹，冰点雪原雪雹，巨人睡榻雪雹，雪中溪谷雪雹，球湖湖畔雪雹，47级进化</td>
        </tr>
        <tr>
            <td id="075">075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>煦丽草原雪雹，巨人凳岩雪雹，巨人镜池雪雹，拳关丘陵雪，起橇雪原所有天气</td>
        </tr>
        <tr>
            <td id="076">076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>沙尘洼地雪，逆鳞湖雪，煦丽草原雪雹，牙牙湖东岸雪雹，沙尘洼地雪雹，起橇雪原，海鸣洞窟所有天气，33级进化</td>
        </tr>
        <tr>
            <td id="077">077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/473.png"></td>
            <td>象牙猪</td>
            <td>起橇雪原晴阴曝雪雹，学习原始之力进化</td>
        </tr>
        <tr>
            <td id="078">078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/225.png"></td>
            <td>信使鸟</td>
            <td>泉烟小路所有天气，大部分地区雪天</td>
        </tr>
        <tr>
            <td id="079">079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>泉烟小路所有天气，登顶隧道所有天气，大部分地区雪天</td>
        </tr>
        <tr>
            <td id="080">080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>１０号道路所有天气，逆鳞湖雪，９号道路所有天气 瞭望塔旧址雪雹，巨人凳岩雪雹，巨人帽岩雪雹，起橇雪原雹，巨人睡榻雪雹，雪中溪谷雪雹，42级进化</td>
        </tr>
        <tr>
            <td id="081">081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>登顶隧道所有天气，起橇雪原雹，巨人睡榻雪雹，远古墓地雪雹，雪中溪谷雪雹，雪童子使用觉醒之石（雌性）</td>
        </tr>
        <tr>
            <td id="082">082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>煦丽草原曝沙，沐光森林沙，牙牙湖东岸沙，牙牙湖西岸曝沙，牙牙湖之眼沙，美纳斯湖南岸曝沙，美纳斯湖北岸曝沙，拳关丘陵曝，巨人帽岩曝，煦丽草原沙，沐光森林曝沙，牙牙湖东岸沙，桥间空地曝沙，巨石原野晴阴曝沙</td>
        </tr>
        <tr>
            <td id="083">083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>逆鳞湖雾，牙牙湖之眼沙雾，沐光森林曝沙，沙尘洼地阴曝沙雾，巨石原野晴阴曝沙，桥间空地沙，巨人鞋底，三岔平原所有天气，36级进化</td>
        </tr>
        <tr>
            <td id="084">084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>道路（3）所有天气，煦丽草原曝，沐光森林曝，牙牙湖东岸曝，牙牙湖西岸沙，美纳斯湖北岸曝沙，巨人帽岩沙	，牙牙湖东岸曝沙，美纳斯湖南岸曝沙，巨人凳岩曝</td>
        </tr>
        <tr>
            <td id="085">085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>牙牙湖之眼曝沙，巨人凳岩曝沙，沙尘洼地曝，牙牙湖之眼曝沙，煦丽草原晴阴曝沙雾，牙牙湖东岸曝沙，巨人凳岩曝，沙尘洼地晴曝沙雾，30级进化</td>
        </tr>
        <tr>
            <td id="086">086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>煦丽草原沙，瞭望塔旧址沙，牙牙湖东岸沙，巨人凳岩曝沙，美纳斯湖北岸沙，拳关丘陵沙，牙牙湖西岸曝沙，美纳斯湖南岸沙，美纳斯湖北岸曝沙，巨石原野晴阴雨曝雪雹沙雾，斗志洞窟，圆环海湾所有天气</td>
        </tr>
        <tr>
            <td id="087">087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>牙牙湖之眼曝沙	，８号道路所有天气，煦丽草原沙，巨石原野晴阴曝雪雹沙雾，美纳斯湖南岸曝，	斗志洞窟所有天气，挑战之路沙，锻炼平原沙，34级进化</td>
        </tr>
        <tr>
            <td id="088">088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>煦丽草原沙，瞭望塔旧址晴曝沙，沐光森林沙，巨人帽岩曝沙，道路（8），巨石原野所有天气，瞭望塔旧址晴，美纳斯湖北岸沙，巨人凳岩沙</td>
        </tr>
        <tr>
            <td id="089">089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>逆鳞湖所有天气，巨石原野所有天气，瞭望塔旧址晴曝沙，沙尘洼地阴雨雷雪雹沙雾，巨人凳岩沙，三岔平原所有天气，34级进化</td>
        </tr>
        <tr>
            <td id="090">090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>微寐森林所有天气，煦丽草原雾，牙牙湖东岸雾，牙牙湖之眼雾，巨人帽岩阴雾	，微寐森林所有天气，牙牙湖东岸雾，桥间空地雾，巨石原野雾，巨人凳岩雾</td>
        </tr>
        <tr>
            <td id="091">091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/518.png"></td>
            <td>梦梦蚀</td>
            <td>桥间空地雾，巨人凳岩雾，月之石进化</td>
        </tr>
        <tr>
            <td id="092">092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>煦丽草原雾，牙牙湖西岸雾，美纳斯湖北岸雾，美纳斯湖南岸雾，巨人镜池雨雷雪雹雾，巨人凳岩雾</td>
        </tr>
        <tr>
            <td id="093">093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>巨人凳岩雾，牙牙湖东岸晴阴曝雪雹沙雾，美纳斯湖北岸晴阴曝雪雹沙雾，巨人镜池雨雷雪雹沙雾，25级进化</td>
        </tr>
        <tr>
            <td id="094">094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>牙牙湖东岸所有天气，沐光森林阴，美纳斯湖北岸晴阴雨雷曝雪雾，道路（5），牙牙湖东岸所有天气，巨人凳岩晴沙，桥间空地雨雷雪沙雾，拳关丘陵晴阴</td>
        </tr>
        <tr>
            <td id="095">095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿着熊</td>
            <td>巨人凳岩所有天气，牙牙湖之眼晴，逆鳞湖晴，牙牙湖之眼所有天气。沐光森林所有天气，桥间空地晴雨雷曝雪雹沙雾，27级进化</td>
        </tr>
        <tr>
            <td id="096">096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>泉烟小路所有天气，１０号道路所有天气，冰点雪原所有天气，大部分冰雪天</td>
        </tr>
        <tr>
            <td id="097">097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>１０号道路所有天气，沙尘洼地雪，逆鳞湖雪，路（10）所有天气，牙牙湖之眼雪雹，拳关丘陵雪雹，巨人镜池雪，巨人凳岩雪雹，冰点雪原所有天气，起橇雪原雪，40级进化</td>
        </tr>
        <tr>
            <td id="098">098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>巨人帽岩所有天气，牙牙湖西岸晴阴雨雷雾，美纳斯湖南岸晴阴雨雷雪，	揖礼原野雨雷，圆环海湾雨雷</td>
        </tr>
        <tr>
            <td id="099">099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>９号道路所有天气，牙牙湖之眼晴阴雷，牙牙湖西岸晴，美纳斯湖南岸晴雷，揖礼原野晴阴雨雷曝沙，挑战海滩晴雨曝沙，锻炼平原晴阴雨雷曝沙，28级进化</td>
        </tr>
        <tr>
            <td id="100">100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>美纳斯湖南岸沙，牙牙湖西岸晴雨雷雾，巨人帽岩雨雷，巨人凳岩雨，清凉湿原所有天气</td>
        </tr>
        <tr>
            <td id="101">101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>巨人凳岩雨，逆鳞湖雨，巨人帽岩雨雷，清凉湿原所有天气，20级进化</td>
        </tr>
        <tr>
            <td id="102">102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>美纳斯湖南岸晴阴雨雷雪雾，第二矿山，巨人帽岩所有天气</td>
        </tr>
        <tr>
            <td id="103">103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>巨人凳岩雷，牙牙湖之眼雨雷，草路镇所有天气，美纳斯湖南岸晴雷，专注森林阴雨雷，挑战海滩阴雨雷，锻炼平原阴，30级进化</td>
        </tr>
        <tr>
            <td id="104">104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/290.png"></td>
            <td>土居忍士</td>
            <td>５号道路所有天气，牙牙湖西岸沙，美纳斯湖南岸曝沙</td>
        </tr>
        <tr>
            <td id="105">105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/291.png"></td>
            <td>铁面忍者</td>
            <td>巨石原野晴雨，煦丽草原所有天气，20级进化</td>
        </tr>
        <tr>
            <td id="106">106</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/292.png"></td>
            <td>脱壳忍者</td>
            <td>包包中有精灵球*，且同行宝可梦中有空位</td>
        </tr>
        <tr>
            <td id="107">107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>牙牙湖西岸阴，美纳斯湖南岸阴	，３号道路，煦丽草原，美纳斯湖南岸所有天气，沐光森林阴，巨人凳岩阴，巨石原野晴</td>
        </tr>
        <tr>
            <td id="108">108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/106.png"></td>
            <td>飞腿郎</td>
            <td>剑：沙尘洼地阴，巨人镜池阴，等级20以上攻击 ＞ 防御</td>
        </tr>
        <tr>
            <td id="109">109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/107.png"></td>
            <td>快拳郎</td>
            <td>盾：沙尘洼地阴，巨人镜池阴，等级20以上攻击 < 防御</td>
        </tr>
        <tr>
            <td id="110">110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/237.png"></td>
            <td>战舞郎</td>
            <td>逆鳞湖阴，等级20以上攻击 = 防御</td>
        </tr>
        <tr>
            <td id="111">111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>３号道路所有天气，牙牙湖西岸阴曝，煦丽草原所有天气，牙牙湖东岸阴雷曝雪雹沙</td>
        </tr>
        <tr>
            <td id="112">112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>霸道熊猫</td>
            <td>逆鳞湖阴，煦丽草原晴阴雨雷曝，沐光森林曝雪雹沙，桥间空地阴曝，等级32以上（与恶属性宝可梦同行）</td>
        </tr>
        <tr>
            <td id="113">113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>３号道路，拳关丘陵所有天气，沐光森林雹，牙牙湖西岸雹，牙牙湖之眼雹，美纳斯湖南岸雹，牙牙湖西岸雹，美纳斯湖南岸雹，美纳斯湖北岸雹</td>
        </tr>
        <tr>
            <td id="114">114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/600.png"></td>
            <td>齿轮组</td>
            <td>１０号道路所有天气，沙尘洼地雹	，拳关丘陵晴阴雨雪，38级进化</td>
        </tr>
        <tr>
            <td id="115">115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/601.png"></td>
            <td>齿轮怪</td>
            <td>逆鳞湖雹，拳关丘陵雷曝雹沙雾，49级进化</td>
        </tr>
        <tr>
            <td id="116">116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/415.png"></td>
            <td>三蜜蜂</td>
            <td>煦丽草原晴，蜂巢岛所有天气</td>
        </tr>
        <tr>
            <td id="117">117</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/416.png"></td>
            <td>蜂女王</td>
            <td>煦丽草原晴，等级21以上（雌性）</td>
        </tr>
        <tr>
            <td id="118">118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>美纳斯湖南岸雾，桥间空地雨雷，巨石原野雨雷雪雹雾，巨人凳岩晴阴雨雷曝雪雹沙，巨人鞋底，三岔平原所有天气</td>
        </tr>
        <tr>
            <td id="119">119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>８号道路所有天气，沙尘洼地雹，逆鳞湖雾	，牙牙湖之眼雹，巨人凳岩阴雨雷，沙尘洼地晴雨雷雪雹，巨石原野雨雷雪雹雾，牙牙湖东岸雾，桥间空地雨雷，巨人睡榻，巨人鞋底，三岔平原所有天气，33级进化</td>
        </tr>
        <tr>
            <td id="120">120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>煦丽草原阴雾，沐光森林雾，瞭望塔旧址雾，美纳斯湖北岸雾，美纳斯湖南岸雾，揖礼原野雾</td>
        </tr>
        <tr>
            <td id="121">121</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/281.png"></td>
            <td>奇鲁莉安</td>
            <td>煦丽草原雾，20级进化</td>
        </tr>
        <tr>
            <td id="122">122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>沙尘洼地雾，逆鳞湖雾，煦丽草原雾，逆鳞湖晴雾，专注森林雾，锻炼平原雾，30级进化</td>
        </tr>
        <tr>
            <td id="123">123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>桥间空地晴阴雨雷曝沙，挑战之路雾，使用觉醒之石（雄性）</td>
        </tr>
        <tr>
            <td id="124">124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>瞭望塔旧址晴曝雪雹，５号道路所有天气，瞭望塔旧址晴阴雷曝雪，美纳斯湖北岸雾，美纳斯湖南岸晴雾，	圆环海湾雾	，揖礼原野雾，圆环海湾雾，健身之海雾，离岛海域雾，列岛海域雾，蜂巢海雾，蜂巢岛雾</td>
        </tr>
        <tr>
            <td id="125">125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>牙牙湖之眼雾	，瞭望塔旧址晴曝雪，美纳斯湖北岸雾，美纳斯湖南岸雾，挑战海滩阴雾，挑战之路雾，锻炼平原雾，28级进化</td>
        </tr>
        <tr>
            <td id="126">126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>道路（2）所有天气	，道路（3）所有天气，机擎河岸晴。球湖湖畔晴曝</td>
        </tr>
        <tr>
            <td id="127">127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>机擎河岸晴，巨石原野晴，沙尘洼地晴阴雨雷沙雾，巨人帽岩晴阴雨雾，道路（5），机擎河岸所有天气，球湖湖畔晴雨，20级进化</td>
        </tr>
        <tr>
            <td id="128">128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>３号道路，煦丽草原，瞭望塔旧址，牙牙湖之眼，巨人凳岩，沐光森林，美纳斯湖北岸，机擎河岸，桥间空地，巨人镜池，拳关丘陵，巨人帽岩，逆鳞湖所有天气</td>
        </tr>
        <tr>
            <td id="129">129</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/421.png"></td>
            <td>樱花儿</td>
            <td>25级进化</td>
        </tr>
        <tr>
            <td id="130">130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>沐光森林阴，巨人帽岩晴，道路（3）所有天气，美纳斯湖南岸晴阴雨雷曝沙，美纳斯湖北岸晴阴曝沙雾</td>
        </tr>
        <tr>
            <td id="131">131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>沙尘洼地阴，逆鳞湖阴，美纳斯湖南岸晴阴雪雹沙雾，美纳斯湖北岸雨曝沙，沙尘洼地阴，34级进化</td>
        </tr>
        <tr>
            <td id="132">132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/535.png"></td>
            <td>圆蝌蚪</td>
            <td>沐光森林雨雷，牙牙湖西岸晴阴雨雷雪雹雾，美纳斯湖南岸雨雷</td>
        </tr>
        <tr>
            <td id="133">133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>桥间空地所有天气，巨人帽岩雨，巨人凳岩雷，沙尘洼地雨雷，美纳斯湖北岸雨雷，巨人镜池雨雷，拳关丘陵雨，牙牙湖西岸阴雪雹沙雾，美纳斯湖南岸雨雷，25级进化</td>
        </tr>
        <tr>
            <td id="134">134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>７号道路所有天气，牙牙湖之眼雨雷，逆鳞湖雨	，沐光森林雨雷，牙牙湖之眼雷，美纳斯湖北岸阴雷，沙尘洼地雨雷，桥间空地晴阴雨雷雾，巨人帽岩雨，巨人镜池雨，36级进化</td>
        </tr>
        <tr>
            <td id="135">135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>沙尘洼地雾，道路（6）所有天气，瞭望塔旧址阴雨雷曝雪雹沙雾巨人帽岩雾，瞭望塔旧址晴阴雨雷曝雪雾，巨人凳岩雾，机擎河岸雾</td>
        </tr>
        <tr>
            <td id="136">136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/356.png"></td>
            <td>彷徨夜灵</td>
            <td>道路（8）所有天气，巨人凳岩雾，瞭望塔旧址阴雨雷沙，37级进化</td>
        </tr>
        <tr>
            <td id="137">137</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/477.png"></td>
            <td>黑夜魔灵</td>
            <td>巨石原野所有天气，携带灵界之布连接交换</td>
        </tr>
        <tr>
            <td id="138">138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>３号道路，巨人镜池所有天气，瞭望塔旧址阴，美纳斯湖南岸晴阴雨雷雪雹雾，美纳斯湖北岸阴，美纳斯湖南岸所有天气，巨人凳岩晴阴雪沙，巨石原野晴阴</td>
        </tr>
        <tr>
            <td id="139">139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>巨人凳岩阴，拳关丘陵阴，牙牙湖之眼晴阴，拳关丘陵晴阴雨雷曝雹沙，巨石原野阴，美纳斯湖南岸所有天气，28级进化</td>
        </tr>
        <tr>
            <td id="140">140</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/068.png"></td>
            <td>怪力</td>
            <td>巨人镜池晴阴雷曝雹沙雾，链接交换</td>
        </tr>
        <tr>
            <td id="141">141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>瞭望塔旧址阴，美纳斯湖北岸阴	，瞭望塔旧址阴雨雷雹沙雾，巨人凳岩阴雨曝雾，拳关丘陵雾</td>
        </tr>
        <tr>
            <td id="142">142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>８号道路所有天气，巨人凳岩阴，瞭望塔旧址阴雨雷雹沙雾，煦丽草原雨雷，25级进化</td>
        </tr>
        <tr>
            <td id="143">143</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/094.png"></td>
            <td>耿鬼</td>
            <td>巨人帽岩晴阴雷曝雹沙雾，链接交换</td>
        </tr>
        <tr>
            <td id="144">144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/129.png"></td>
            <td>鲤鱼王</td>
            <td>大部分水域</td>
        </tr>
        <tr>
            <td id="145">145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>大部分水域，20级进化</td>
        </tr>
        <tr>
            <td id="146">146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>道路（4・5・6），牙牙湖西岸，牙牙湖东岸，巨人帽岩所有天气，桥间空地，美纳斯湖南岸所有天气，牙牙湖东岸晴阴雨雷曝雹沙雾，美纳斯湖北岸雨雷沙，牙牙湖西岸晴阴雨雷曝雹沙雾，专注森林所有天气</td>
        </tr>
        <tr>
            <td id="147">147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>美纳斯湖南岸晴阴雨雷沙，美纳斯湖北岸雨雷沙，牙牙湖西岸晴阴沙，牙牙湖东岸晴阴曝沙，桥间空地晴阴沙，逆鳞湖晴阴雷曝沙雾，33级进化</td>
        </tr>
        <tr>
            <td id="148">148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>美纳斯湖南岸，牙牙湖西岸所有天气，战竞湾所有天气，牙牙湖西岸晴阴雨雷曝沙雾，揖礼原野，健身之海所有天气</td>
        </tr>
        <tr>
            <td id="149">149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>９号道路，牙牙湖之眼所有天气，战竞湾所有天气，美纳斯湖南岸晴曝沙雾，25级进化</td>
        </tr>
        <tr>
            <td id="150">150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>牙牙湖东岸所有天气，牙牙湖西岸雪，斗志洞窟，圆环海湾所有天气</td>
        </tr>
        <tr>
            <td id="151">151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>巨人凳岩所有天气	，牙牙湖西岸晴雾，牙牙湖东岸晴雾，斗志洞窟，圆环海湾所有天气，挑战海滩雨雾，圆环海湾雨，水之石进化</td>
        </tr>
        <tr>
            <td id="152">152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>２号道路所有天气，球湖湖畔所有天气，巨人鞋底，海鸣洞窟所有天气，巨人睡榻晴阴雨雷曝雪</td>
        </tr>
        <tr>
            <td id="153">153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>美纳斯湖南岸雾、逆鳞湖雾，巨人睡榻雾，美丽度达到170以上提升等级，携带美丽鳞片连接交换</td>
        </tr>
        <tr>
            <td id="154">154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>水舟镇，美纳斯湖北岸，机擎河岸所有天气	，机擎河岸所有天气，巨人睡榻，雪中溪谷，巨人鞋底，冻海，球湖湖畔所有天气</td>
        </tr>
        <tr>
            <td id="155">155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>９号道路，水舟镇，牙牙湖东岸，牙牙湖西岸，牙牙湖之眼所有天气，挑战海滩，列岛海域，离岛海域，蜂巢海，蜂巢岛所有天气</td>
        </tr>
        <tr>
            <td id="156">156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/771.png"></td>
            <td>拳海参</td>
            <td>道路（9）所有天气，美纳斯湖南岸雷</td>
        </tr>
        <tr>
            <td id="157">157</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/568.png"></td>
            <td>破破袋</td>
            <td>３号道路所有天气</td>
        </tr>
        <tr>
            <td id="158">158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/569.png"></td>
            <td>灰尘山</td>
            <td>3逆鳞湖阴，桥间空地所有天气，牙牙湖东岸晴阴雨雷，6级进化</td>
        </tr>
        <tr>
            <td id="159">159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>３号道路所有天气	，机擎竞技场，巨人鞋底晴曝</td>
        </tr>
        <tr>
            <td id="160">160</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/851.png"></td>
            <td>焚焰蚣</td>
            <td>巨人鞋底晴曝，28级进化</td>
        </tr>
        <tr>
            <td id="161">161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>伽勒尔矿山所有天气，道路（3），伽勒尔矿山，巨人帽岩所有天气，机擎河岸曝沙</td>
        </tr>
        <tr>
            <td id="162">162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>桥间空地曝，巨石原野曝，巨人帽岩曝沙，伽勒尔矿山所有天气，湖畔洞窟所有天气，球湖湖畔曝，18级进化</td>
        </tr>
        <tr>
            <td id="163">163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨碳山</td>
            <td>沙尘洼地曝，逆鳞湖曝，巨人帽岩所有天气，湖畔洞窟所有天气，球湖湖畔晴雷曝雪雹沙雾，34级进化</td>
        </tr>
        <tr>
            <td id="164">164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>伽勒尔矿山所有天气，巨人镜池曝	，伽勒尔矿山，煦丽草原所有天气，４号道路所有天气</td>
        </tr>
        <tr>
            <td id="165">165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>沙尘洼地沙，拳关丘陵沙，巨人帽岩曝，逆鳞湖沙	，６号道路，巨人镜池所有天气，26级进化</td>
        </tr>
        <tr>
            <td id="166">166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>伽勒尔矿山所有天气，巨石原野曝沙，拳关丘陵沙，巨人帽岩曝沙，伽勒尔矿山所有天气，沙尘洼地曝沙，巨人镜池曝沙</td>
        </tr>
        <tr>
            <td id="167">167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/530.png"></td>
            <td>龙头地鼠</td>
            <td>巨人镜池所有天气，逆鳞湖沙，巨人帽岩曝沙，31级进化</td>
        </tr>
        <tr>
            <td id="168">168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>伽勒尔矿山，机擎市郊外所有天气	，伽勒尔矿山，煦丽草原所有天气，巨石原野沙</td>
        </tr>
        <tr>
            <td id="169">169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/525.png"></td>
            <td>地幔岩</td>
            <td>沙尘洼地晴曝沙，战斗洞窟所有天气，25级进化</td>
        </tr>
        <tr>
            <td id="170">170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>巨石原野晴雷曝雪沙，８号道路，巨人镜池，巨人帽岩所有天气，逆鳞湖沙，链接交换金海</td>
        </tr>
        <tr>
            <td id="171">171</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/532.png"></td>
            <td>搬运小匠</td>
            <td>伽勒尔矿山所有天气</td>
        </tr>
        <tr>
            <td id="172">172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>沙尘洼地雪，８号道路所有天气，巨人睡榻晴，巨人鞋底晴，25级进化</td>
        </tr>
        <tr>
            <td id="173">173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>机擎河岸晴阴雨雷雪雾，巨人睡榻晴，巨人鞋底晴，链接交换进化</td>
        </tr>
        <tr>
            <td id="174">174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>伽勒尔矿山所有天气，伽勒尔矿山，瞭望塔旧址，桥间空地所有天气，巨人镜池晴</td>
        </tr>
        <tr>
            <td id="175">175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>战斗洞窟，斗志洞窟所有天气，锻炼平原阴，挑战海滩阴，亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td id="176">176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>第二矿山所有天气，桥间空地雷	，第二矿山，瞭望塔旧址，桥间空地所有天气</td>
        </tr>
        <tr>
            <td id="177">177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>逆鳞湖雷，桥间空地晴阴雨雷曝雹沙雾，湖畔洞窟所有天气 球湖湖畔阴雨，48级进化</td>
        </tr>
        <tr>
            <td id="178">178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>牙牙湖东岸曝沙，巨人凳岩晴阴曝沙，机擎河岸沙，煦丽草原所有天气</td>
        </tr>
        <tr>
            <td id="179">179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>巨人凳岩，巨人镜池所有天气，野生原野区F区，携带金属膜连接交换</td>
        </tr>
        <tr>
            <td id="180">180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>道路（2），水舟镇，机擎河岸所有天气，道路（2），机擎河岸所有天气，专注森林所有天气，锻炼平原所有天气</td>
        </tr>
        <tr>
            <td id="181">181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戾斗尖梭</td>
            <td>逆鳞湖，沙尘洼地，机擎河岸所有天气，道路（2），逆鳞湖所有天气，专注森林雨雷雾，挑战海滩晴雨雷曝沙雾，锻炼平原晴雨雷曝沙雾，26级进化</td>
        </tr>
        <tr>
            <td id="182">182</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/052-g.png"></td>
            <td>喵喵-伽勒尔形态</td>
            <td>４号道路所有天气</td>
        </tr>
        <tr>
            <td id="183">183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>猫头目</td>
            <td>尖钉镇郊外所有天气，逆鳞湖雹，７号道路所有天气，巨人镜池所有天气，28级进化</td>
        </tr>
        <tr>
            <td id="184">184</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/053.png"></td>
            <td>猫老大</td>
            <td>无野外遭遇；通过宝可梦HOME传入关都形态喵喵，28级进化</td>
        </tr>
        <tr>
            <td id="185">185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/868.png"></td>
            <td>小仙奶</td>
            <td>道路（4）所有天气，桥间空地雾，巨人镜池雾</td>
        </tr>
        <tr>
            <td id="186">186</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/869.png"></td>
            <td>霜奶仙</td>
            <td>主角结束原地旋转（携带糖饰）</td>
        </tr>
        <tr>
            <td id="187">187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>４号道路所有天气，机擎河岸阴雪雹雾，桥间空地晴阴曝雾，巨人镜池雾</td>
        </tr>
        <tr>
            <td id="188">188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/743.png"></td>
            <td>蝶结萌虻</td>
            <td>巨石原野晴阴，机擎河岸阴雪雹沙雾，桥间空地晴阴曝雾，25级进化 【MOD新增】巨石原野 暗雷（晴15%替换无畏小子）</td>
        </tr>
        <tr>
            <td id="189">189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>４号道路，桥间空地所有天气，机擎河岸雹	，巨石原野雹，湖畔洞窟所有天气</td>
        </tr>
        <tr>
            <td id="190">190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>沙尘洼地雹	，桥间空地所有天气，	湖畔洞窟所有天气，40级进化</td>
        </tr>
        <tr>
            <td id="191">191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/710.png"></td>
            <td>南瓜精</td>
            <td>４号道路，拳关丘陵所有天气，巨人镜池晴</td>
        </tr>
        <tr>
            <td id="192">192</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/711.png"></td>
            <td>南瓜怪人</td>
            <td>拳关丘陵所有天气，链接进化</td>
        </tr>
        <tr>
            <td id="193">193</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/172.png"></td>
            <td>皮丘</td>
            <td>专注森林雷，生蛋</td>
        </tr>
        <tr>
            <td id="194">194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>巨石原野雨，道路（4）所有天气，巨石原野雷	，煦丽草原雷，揖礼原野雷，清凉湿原雷，专注森林晴阴雨雷，亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td id="195">195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>挑战海滩雷，清凉湿原雷，专注森林雷，雷之石进化</td>
        </tr>
        <tr>
            <td id="196">196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>４号道路所有天气，冰点雪原雹，巨人睡榻晴</td>
        </tr>
        <tr>
            <td id="197">197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/134.png"></td>
            <td>水伊布</td>
            <td>逆鳞湖雨，巨人睡榻雨，水之石进化</td>
        </tr>
        <tr>
            <td id="198">198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/135.png"></td>
            <td>雷伊布</td>
            <td>逆鳞湖雷，巨人睡榻雷，雷之石进化</td>
        </tr>
        <tr>
            <td id="199">199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/136.png"></td>
            <td>火伊布</td>
            <td>逆鳞湖曝，巨人睡榻曝，火之石进化</td>
        </tr>
        <tr>
            <td id="200">200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/196.png"></td>
            <td>太阳伊布</td>
            <td>逆鳞湖阴，巨人睡榻雪，亲密度*220以上或友好度*158以上提升等级（白天）</td>
        </tr>
        <tr>
            <td id="201">201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/197.png"></td>
            <td>月亮伊布</td>
            <td>逆鳞湖沙，巨人睡榻阴，亲密度*220以上或友好度*158以上提升等级（夜晚）</td>
        </tr>
        <tr>
            <td id="202">202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/470.png"></td>
            <td>叶伊布</td>
            <td>逆鳞湖晴，巨人睡榻晴，叶之石进化</td>
        </tr>
        <tr>
            <td id="203">203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/471.png"></td>
            <td>冰伊布</td>
            <td>逆鳞湖雪雹，巨人睡榻雹，冰之石进化</td>
        </tr>
        <tr>
            <td id="204">204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/700.png"></td>
            <td>仙子伊布</td>
            <td>逆鳞湖雾，巨人睡榻雾，友好度50*或158*以上学会妖精属性招式时提升等级</td>
        </tr>
        <tr>
            <td id="205">205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>５号道路所有天气，揖礼原野，清凉湿原，专注森林，圆环海湾，锻炼平原，挑战海滩，健身之海，列岛海域，离岛海域所有天气，巨石原野雷，沙尘洼地晴，巨人镜池雷，摇晃树木</td>
        </tr>
        <tr>
            <td id="206">206</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/841.png"></td>
            <td>苹裹龙</td>
            <td>列岛海域所有天气，使用酸酸苹果</td>
        </tr>
        <tr>
            <td id="207">207</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/842.png"></td>
            <td>丰蜜龙</td>
            <td>列岛海域所有天气，使用甜甜苹果</td>
        </tr>
        <tr>
            <td id="208">208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/677.png"></td>
            <td>妙喵</td>
            <td>５号道路所有天气，机擎河岸雾，拳关丘陵晴阴雷曝雪雹雾</td>
        </tr>
        <tr>
            <td id="209">209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/678.png"></td>
            <td>超能妙喵</td>
            <td>７号道路所有天气，沙尘洼地雾，25级进化</td>
        </tr>
        <tr>
            <td id="210">210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/684.png"></td>
            <td>绵绵泡芙</td>
            <td>剑：５号道路所有天气，巨人镜池雾</td>
        </tr>
        <tr>
            <td id="211">211</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/685.png"></td>
            <td>胖甜妮</td>
            <td>携带泡沫奶油连接交换</td>
        </tr>
        <tr>
            <td id="212">212</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/682.png"></td>
            <td>粉香香</td>
            <td>盾：５号道路所有天气巨人镜池雾 【MOD新增】５号道路 明雷（20%替换妙喵）、暗雷（10%替换果然翁）</td>
        </tr>
        <tr>
            <td id="213">213</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/683.png"></td>
            <td>芳香精</td>
            <td>携带香袋连接交换</td>
        </tr>
        <tr>
            <td id="214">214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>５号道路所有天气，机擎河岸雨，巨石原野雨雷，巨人睡榻雨雷，远古墓地雨雷，巨人鞋底雨雷，冻海雨雷，三岔平原雨雷，球湖湖畔雨雷</td>
        </tr>
        <tr>
            <td id="215">215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>逆鳞湖雨，巨石原野雨雷，巨人睡榻雨雷，远古墓地雨雷，巨人鞋底雨雷，冻海雨雷，三岔平原雨雷，球湖湖畔雨雷，22级进化</td>
        </tr>
        <tr>
            <td id="216">216</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/360.png"></td>
            <td>小果然</td>
            <td>果然翁携带悠闲薰香生蛋</td>
        </tr>
        <tr>
            <td id="217">217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>５号道路所有天气，机擎河岸雾，桥间空地晴曝，沙尘洼地雾，巨人镜池雾，拳关丘陵晴阴雨雷曝雪雹沙，逆鳞湖雾，15级进化</td>
        </tr>
        <tr>
            <td id="218">218</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/083-g.png"></td>
            <td>大葱鸭</td>
            <td>５号道路所有天气，巨人镜池阴</td>
        </tr>
        <tr>
            <td id="219">219</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/865.png"></td>
            <td>葱游兵</td>
            <td>对战中击中要害3次或以上结束对战</td>
        </tr>
        <tr>
            <td id="220">220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>水舟镇，巨人镜池所有天气，牙牙湖东岸雷，牙牙湖西岸雷，	健身之海雷，列岛海域雷，离岛海域雷，蜂巢海雷，蜂巢岛雷</td>
        </tr>
        <tr>
            <td id="221">221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>桥间空地，沙尘洼地，逆鳞湖所有天气，美纳斯湖南岸雷，牙牙湖东岸晴雷雾，牙牙湖西岸雷，桥间空地雷，逆鳞湖晴雷梦世界冰洞，浅滩洞穴，健身之海雷，列岛海域雷，离岛海域雷，蜂巢海雷，蜂巢岛雷，挑战海滩雷雾，圆环海湾雷，27级进化</td>
        </tr>
        <tr>
            <td id="222">222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>盾：机擎市郊外，第二矿山所有天气，第二矿山所有天气，桥间空地阴沙，巨石原野阴，巨人镜池晴阴，巨人镜池晴阴，巨人帽岩晴阴清凉湿原阴，专注森林阴，清凉湿原阴 【MOD新增】机擎市郊外 明雷（10%替换咬咬龟）、暗雷（15%）</td>
        </tr>
        <tr>
            <td id="223">223</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>盾：挑战之路雨雷，锻炼平原雨雷，巨石原野阴，37级进化</td>
        </tr>
        <tr>
            <td id="224">224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>剑：机擎市郊外，第二矿山所有天气，第二矿山所有天气，桥间空地阴沙，巨石原野阴，巨人镜池晴阴，巨人镜池晴阴，巨人帽岩晴阴清凉湿原阴，专注森林阴，清凉湿原阴</td>
        </tr>
        <tr>
            <td id="225">225</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>剑：挑战之路雨雷，锻炼平原雨雷，巨石原野阴，39级进化</td>
        </tr>
        <tr>
            <td id="226">226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618-g.png"></td>
            <td>泥巴鱼-伽勒尔形态</td>
            <td>微寐森林，第二矿山所有天气，沙尘洼地曝，逆鳞湖沙</td>
        </tr>
        <tr>
            <td id="227">227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>第二矿山所有天气，瞭望塔旧址曝沙，沙尘洼地沙，巨人帽岩沙，巨人镜池沙	，沙尘洼地所有天气，球湖湖畔晴曝</td>
        </tr>
        <tr>
            <td id="228">228</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/339.png"></td>
            <td>泥泥鳅</td>
            <td>大部分地区垂钓或者冲浪可遇到</td>
        </tr>
        <tr>
            <td id="229">229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>微寐森林所有天气	，美纳斯湖北岸晴阴雷曝沙，美纳斯湖南岸晴雷曝沙，斗志洞窟，战斗洞窟，巨人睡榻所有天气，专注森林晴阴曝沙，30级进化</td>
        </tr>
        <tr>
            <td id="230">230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>第二矿山所有天气，机擎河岸雷，桥间空地雨雷，巨石原野雨，巨人镜池雨，巨人帽岩雨雷</td>
        </tr>
        <tr>
            <td id="231">231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>战竞湾所有天气，９号道路所有天气，沙尘洼地，巨人镜池，第二矿山所有天气，30级进化</td>
        </tr>
        <tr>
            <td id="232">232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>第二矿山所有天气，机擎河岸雨，巨人镜池雨，拳关丘陵雷，斗志洞窟晴雨雷曝沙雾</td>
        </tr>
        <tr>
            <td id="233">233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>逆鳞湖雨，巨人帽岩雨，桥间空地晴雨雷，斗志洞窟所有天气，挑战海滩雨，30级进化</td>
        </tr>
        <tr>
            <td id="234">234</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/688.png"></td>
            <td>龟脚脚</td>
            <td>第二矿山所有天气，机擎河岸雨，桥间空地雨雷</td>
        </tr>
        <tr>
            <td id="235">235</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/689.png"></td>
            <td>龟足巨铠</td>
            <td>沙尘洼地雨，逆鳞湖雨，战竞湾所有天气，沙尘洼地阴雨雷，39级进化</td>
        </tr>
        <tr>
            <td id="236">236</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/222-g.png"></td>
            <td>太阳珊瑚</td>
            <td>盾：巨人镜池阴 【MOD新增】巨人镜池 明雷（晴24%替换天罩虫）、暗雷（晴10%、阴35%替换咕咕鸽）</td>
        </tr>
        <tr>
            <td id="237">237</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/864.png"></td>
            <td>魔灵珊瑚</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td id="238">238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>机擎市郊外所有天气，巨石原野晴阴雨雷曝雪雹雾，巨人镜池雾，拳关丘陵雾，迷光森林所有天气</td>
        </tr>
        <tr>
            <td id="239">239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>迷光森林所有天气，巨人睡榻雾，雪中溪谷雾，巨人鞋底雾，32 级进化</td>
        </tr>
        <tr>
            <td id="240">240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>逆鳞湖阴，巨石原野所有天气，巨人睡榻雾，雪中溪谷雾，起橇雪原雾，42级进化</td>
        </tr>
        <tr>
            <td id="241">241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>拳关丘陵雾，机擎市郊外所有天气，巨石原野雾起橇雪原雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾</td>
        </tr>
        <tr>
            <td id="242">242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>迷光森林所有天气，沙尘洼地晴阴雨雹沙雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾	，起橇雪原雾，32 级进化</td>
        </tr>
        <tr>
            <td id="243">243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>逆鳞湖雾，逆鳞湖所有天气，冰点雪原雾，巨人睡榻雾，冻海雾，球湖湖畔雾，42级进化</td>
        </tr>
        <tr>
            <td id="244">244</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/757.png"></td>
            <td>夜盗火蜥</td>
            <td>巨石原野曝，挑战之路所有天气</td>
        </tr>
        <tr>
            <td id="245">245</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/758.png"></td>
            <td>焰后蜥</td>
            <td>挑战之路曝，等级33以上（雌性）</td>
        </tr>
        <tr>
            <td id="246">246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>机擎市郊外所有天气，机擎河岸雹，巨石原野雹，巨人帽岩雹	，８号道路所有天气，机擎河岸雹，巨人镜池雹</td>
        </tr>
        <tr>
            <td id="247">247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>逆鳞湖雹，巨人凳岩所有天气，挑战之路阴，锻炼平原阴，52级进化</td>
        </tr>
        <tr>
            <td id="248">248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>盾：泉烟小路，机擎市郊外所有天气，桥间空地阴，机擎河岸阴，巨人镜池阴</td>
        </tr>
        <tr>
            <td id="249">249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>剑：泉烟小路，机擎市郊外所有天气，桥间空地阴，机擎河岸阴，巨人镜池阴</td>
        </tr>
        <tr>
            <td id="250">250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>机擎市郊外所有天气，机擎河岸阴，沙尘洼地晴雨，巨人镜池晴雨</td>
        </tr>
        <tr>
            <td id="251">251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110-g.png"></td>
            <td>双弹瓦斯-伽勒尔形态</td>
            <td>机擎市郊外所有天气，机擎河岸阴，沙尘洼地晴雨，巨人镜池晴雨	，牙牙湖东岸所有天气，35级进化</td>
        </tr>
        <tr>
            <td id="252">252</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/438.png"></td>
            <td>盆才怪</td>
            <td>桥间空地沙，巨石原野沙，携带岩石薰香生蛋</td>
        </tr>
        <tr>
            <td id="253">253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>桥间空地沙，沙尘洼地沙，机擎市郊外所有天气，机擎河岸沙，拳关丘陵晴雷曝沙，沙尘洼地晴阴曝雹沙雾，学会模仿时提升等级进化 【MOD新增】拳关丘陵 暗雷（晴29%替换童偶熊）</td>
        </tr>
        <tr>
            <td id="254">254</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/173.png"></td>
            <td>皮宝宝</td>
            <td>生蛋</td>
        </tr>
        <tr>
            <td id="255">255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>机擎河岸雾，巨人帽岩雾，登顶隧道所有天气，巨人睡榻雾，雪中溪谷雾，亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td id="256">256</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>登顶隧道所有天气，巨人睡榻雾，雪中溪谷雾，月之石进化</td>
        </tr>
        <tr>
            <td id="257">257</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/175.png"></td>
            <td>波克比</td>
            <td>桥间空地晴阴雾</td>
        </tr>
        <tr>
            <td id="258">258</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/176.png"></td>
            <td>波克基古</td>
            <td>巨石原野雾，亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td id="259">259</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/468.png"></td>
            <td>波克斯基</td>
            <td>沙尘洼地雾，光之石进化</td>
        </tr>
        <tr>
            <td id="260">260</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/446.png"></td>
            <td>小卡比兽</td>
            <td>机擎河岸晴，球湖湖畔晴阴雨雷曝雪雾，携带饱腹薰香生蛋</td>
        </tr>
        <tr>
            <td id="261">261</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>机擎河岸晴阴雨雷曝雪雹沙，起橇雪原晴曝，冰点雪原晴阴曝，亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td id="262">262</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/546.png"></td>
            <td>木棉球</td>
            <td>巨石原野阴，球湖湖畔晴雨</td>
        </tr>
        <tr>
            <td id="263">263</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/547.png"></td>
            <td>风妖精</td>
            <td>球湖湖畔晴雨，日之石进化</td>
        </tr>
        <tr>
            <td id="264">264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>８号道路所有天气，机擎河岸曝沙，桥间空地沙，巨石原野沙，巨人帽岩所有天气，巨人镜池沙，锅底沙漠晴阴雨曝沙雾</td>
        </tr>
        <tr>
            <td id="265">265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀牛</td>
            <td>１０号道路所有天气，沙尘洼地曝，逆鳞湖曝，巨石原野所有天气机擎河岸曝沙，巨人凳岩晴，沙尘洼地雨雷雪，桥间空地曝沙，逆鳞湖沙，锅底沙漠晴曝沙，42级进化</td>
        </tr>
        <tr>
            <td id="266">266</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/464.png"></td>
            <td>超甲狂犀</td>
            <td>锅底沙漠晴曝沙雾，携带护具连接交换</td>
        </tr>
        <tr>
            <td id="267">267</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>剑：巨人帽岩雾，起橇雪原雾，冰点雪原雾</td>
        </tr>
        <tr>
            <td id="268">268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>歌德小童</td>
            <td>剑：巨人帽岩雾，巨人镜池雾，沙尘洼地雾，起橇雪原雾，冰点雪原雾，32级进化</td>
        </tr>
        <tr>
            <td id="269">269</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>剑：逆鳞湖雾，起橇雪原雾，冰点雪原雾，41级进化</td>
        </tr>
        <tr>
            <td id="270">270</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>盾：巨人帽岩雾，起橇雪原雾，冰点雪原雾 【MOD新增】巨人帽岩 明雷（晴40%替换长鼻叶、雾20%替换夜巡灵）、暗雷（晴35%替换直冲熊、雾10%替换猫头夜鹰）</td>
        </tr>
        <tr>
            <td id="271">271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>盾：巨人帽岩雾，巨人镜池雾，沙尘洼地雾，起橇雪原雾，冰点雪原雾，32级进化</td>
        </tr>
        <tr>
            <td id="272">272</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>盾：逆鳞湖雾，起橇雪原雾，冰点雪原雾，41级进化</td>
        </tr>
        <tr>
            <td id="273">273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，专注森林，远古墓地所有天气，锻炼平原阴</td>
        </tr>
        <tr>
            <td id="274">274</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>专注森林沙，锻炼平原沙，与小嘴蜗连接交换进化</td>
        </tr>
        <tr>
            <td id="275">275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>７号道路所有天气，机擎河岸雨，桥间空地阴，拳关丘陵雨，清凉湿原，巨人睡榻所有天气，锻炼平原雨</td>
        </tr>
        <tr>
            <td id="276">276</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>专注森林雨，锻炼平原雷，与盖盖虫连接交换进化</td>
        </tr>
        <tr>
            <td id="277">277</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/605.png"></td>
            <td>小灰怪</td>
            <td>机擎河岸雾，桥间空地雾，桥间空地晴阴雾</td>
        </tr>
        <tr>
            <td id="278">278</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/606.png"></td>
            <td>大宇怪</td>
            <td>逆鳞湖晴，桥间空地晴阴雪雹雾，42级进化</td>
        </tr>
        <tr>
            <td id="279">279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>桥间空地雹，巨石原野雪雹，巨人镜池雪雹	，１０号道路所有天气，桥间空地雪雹，沙尘洼地雪雹，拳关丘陵雪</td>
        </tr>
        <tr>
            <td id="280">280</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冰原熊</td>
            <td>１０号道路所有天气，桥间空地雪，巨人帽岩雪，37级进化</td>
        </tr>
        <tr>
            <td id="281">281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>剑：桥间空地沙	，８号道路，巨石原野所有天气，锅底沙漠晴阴雨曝沙雾</td>
        </tr>
        <tr>
            <td id="282">282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>剑：沙尘洼地所有天气，逆鳞湖晴，挑战之路阴，锅底沙漠晴阴雨曝沙雾，54级进化</td>
        </tr>
        <tr>
            <td id="283">283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>盾：桥间空地沙	，８号道路，巨石原野所有天气，锅底沙漠晴阴雨曝沙雾 【MOD新增】巨石原野 明雷（晴30%替换萌虻、阴40%替换木棉球、大晴天20%替换捣蛋小妖、沙暴30%替换螺钉地鼠）、暗雷（晴35%替换蛇纹熊、阴10%替换天秤偶、大晴天30%、沙暴30%）</td>
        </tr>
        <tr>
            <td id="284">284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>盾：沙尘洼地所有天气，逆鳞湖晴，挑战之路阴，锅底沙漠晴阴雨曝沙雾，54级进化</td>
        </tr>
        <tr>
            <td id="285">285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>６号道路所有天气，机擎河岸阴，巨人镜池晴阴雨雷曝，清凉湿原所有天气</td>
        </tr>
        <tr>
            <td id="286">286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>８号道路所有天气，逆鳞湖阴，桥间空地阴，机擎河岸晴雨雷曝，清凉湿原晴阴雨沙，挑战海滩阴雨，锻炼平原阴曝，40级进化</td>
        </tr>
        <tr>
            <td id="287">287</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/607.png"></td>
            <td>烛光灵</td>
            <td>机擎河岸曝，桥间空地曝雾</td>
        </tr>
        <tr>
            <td id="288">288</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>逆鳞湖曝，巨人睡榻阴雾，远古墓地阴雾，41级进化</td>
        </tr>
        <tr>
            <td id="289">289</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/609.png"></td>
            <td>水晶灯火灵</td>
            <td>逆鳞湖曝，巨人睡榻阴雾，暗之石进化</td>
        </tr>
        <tr>
            <td id="290">290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>战竞湾所有天气，桥间空地晴雨雷曝雪雹沙，拳关丘陵晴阴雨曝雪雹雾，道路（7），桥间空地所有天气，沙尘洼地雪，巨人镜池雪，揖礼原野阴，挑战海滩阴，圆环海湾阴，锻炼平原阴</td>
        </tr>
        <tr>
            <td id="291">291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>揖礼原野阴雨，清凉湿原阴雨，挑战海滩阴雨，圆环海湾阴雨，锻炼平原阴雨，30级进化</td>
        </tr>
        <tr>
            <td id="292">292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>１０号道路，泉烟小路所有天气，机擎河岸雪雹，桥间空地雪雹，巨石原野雪雹，沙尘洼地雪，拳关丘陵雪雹，巨人帽岩雪雹,巨人镜池雪，起橇雪原阴，冰点雪原阴，雪中溪谷阴，冻海阴</td>
        </tr>
        <tr>
            <td id="293">293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>桥间空地雹，起橇雪原阴，冰点雪原阴，雪中溪谷阴，觉携带锐利之爪提升等级（夜晚）</td>
        </tr>
        <tr>
            <td id="294">294</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>盾：沙尘洼地雾，巨人镜池雾，湖畔洞窟所有天气 【MOD新增】沙尘洼地 明雷（晴30%替换毛毛角羊、雾20%替换白蓬蓬）、暗雷（晴15%替换滑滑小子、雾55%替换果然翁）</td>
        </tr>
        <tr>
            <td id="295">295</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>剑：沙尘洼地雾，巨人镜池雾，湖畔洞窟所有天气</td>
        </tr>
        <tr>
            <td id="296">296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>６号道路所有天气，桥间空地曝，巨石原野曝，拳关丘陵曝</td>
        </tr>
        <tr>
            <td id="297">297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>机擎河岸所有天气，巨石原野所有天气，逆鳞湖晴，沙尘洼地阴雨雷曝雪雹雾</td>
        </tr>
        <tr>
            <td id="298">298</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/447.png"></td>
            <td>利欧路</td>
            <td>巨人帽岩雹，海鸣洞窟所有天气</td>
        </tr>
        <tr>
            <td id="299">299</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>美纳斯湖北岸晴，海鸣洞窟所有天气，亲密度*220以上或友好度*158以上提升等级（白天）</td>
        </tr>
        <tr>
            <td id="300">300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>６号道路所有天气，巨人镜池曝，机擎河岸曝，巨人帽岩曝，热身洞穴所有天气，锅底沙漠晴阴雨曝沙雾</td>
        </tr>
        <tr>
            <td id="301">301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Q</td>
            <td>巨人镜池雾，桥间空地雾，起橇雪原雾，冰点雪原雾，巨人睡榻雾，远古墓地雾，雪中溪谷雾，巨人鞋底雾，冻海雾，三岔平原雾，球湖湖畔雾</td>
        </tr>
        <tr>
            <td id="302">302</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/878.png"></td>
            <td>铜象</td>
            <td>桥间空地晴阴曝雹，巨人鞋底所有天气</td>
        </tr>
        <tr>
            <td id="303">303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>逆鳞湖雹，拳关丘陵所有天气，巨人鞋底所有天气，34级进化</td>
        </tr>
        <tr>
            <td id="304">304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>沙尘洼地，逆鳞湖所有天气，９号道路，桥间空地所有天气</td>
        </tr>
        <tr>
            <td id="305">305</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/592.png"></td>
            <td>轻飘飘</td>
            <td>美纳斯湖北岸所有天气</td>
        </tr>
        <tr>
            <td id="306">306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>逆鳞湖雷，９号道路所有天气，尖钉镇郊外阴雨雷曝雪雹沙雾，美纳斯湖南岸雨雾，美纳斯湖北岸晴阴雨雷雾，牙牙湖东岸晴阴雨雷雾，牙牙湖西岸阴雨雾，桥间空地雨雾，逆鳞湖晴阴雨雷曝，列岛海域阴雾，健身之海阴雾，离岛海域阴雾，蜂巢海阴雾，蜂巢岛阴雾，挑战海滩阴雨雾，圆环海湾阴雾，40级进化</td>
        </tr>
        <tr>
            <td id="307">307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>机擎河岸，巨人镜池所有天气，道路（9），尖钉镇郊外所有天气，圆环海湾所有天气</td>
        </tr>
        <tr>
            <td id="308">308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>战竞湾所有天气，尖钉镇郊外晴，揖礼原野晴阴雾，挑战海滩阴雨雷雾，圆环海湾阴雨雾，38级进化</td>
        </tr>
        <tr>
            <td id="309">309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>９号道路所有天气，逆鳞湖雨，巨石原野雨，桥间空地雨，牙牙湖之眼所有天气，锻炼平原所有天气，专注森林所有天气，挑战海滩晴阴雨曝沙雾</td>
        </tr>
        <tr>
            <td id="310">310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>道路（7）所有天气，巨石原野雷，巨人帽岩雷，拳关丘陵雷，机擎河岸雷，桥间空地晴雨雷</td>
        </tr>
        <tr>
            <td id="311">311</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/849.png"></td>
            <td>颤弦蝾螈</td>
            <td>30级进化</td>
        </tr>
        <tr>
            <td id="312">312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>东第３区，西第２区，烘烘沙漠，专注森林沙，挑战之路沙，锻炼平原沙，锅底沙漠沙</td>
        </tr>
        <tr>
            <td id="313">313</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>８号道路所有天气，逆鳞湖曝，锅底沙漠晴曝雾，36级进化</td>
        </tr>
        <tr>
            <td id="314">314</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/449.png"></td>
            <td>沙河马</td>
            <td>６号道路所有天气	，沙尘洼地曝沙，巨人镜池曝沙</td>
        </tr>
        <tr>
            <td id="315">315</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/450.png"></td>
            <td>河马兽</td>
            <td>８号道路所有天气，巨人镜池沙，逆鳞湖沙，34级进化</td>
        </tr>
        <tr>
            <td id="316">316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>６号道路所有天气，巨人镜池曝，逆鳞湖曝，巨人睡榻曝，远古墓地曝，三岔平原曝</td>
        </tr>
        <tr>
            <td id="317">317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>６号道路所有天气	，巨人镜池曝，逆鳞湖曝，巨人睡榻曝，远古墓地曝，三岔平原曝</td>
        </tr>
        <tr>
            <td id="318">318</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/694.png"></td>
            <td>伞电蜥</td>
            <td>６号道路所有天气，巨人镜池雷</td>
        </tr>
        <tr>
            <td id="319">319</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/695.png"></td>
            <td>光电伞蜥</td>
            <td>光之石进化</td>
        </tr>
        <tr>
            <td id="320">320</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/701.png"></td>
            <td>摔角鹰人</td>
            <td>６号道路所有天气，拳关丘陵所有天气</td>
        </tr>
        <tr>
            <td id="321">321</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/328.png"></td>
            <td>大颚蚁</td>
            <td>６号道路所有天气</td>
        </tr>
        <tr>
            <td id="322">322</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/329.png"></td>
            <td>超音波幼虫</td>
            <td>35级进化</td>
        </tr>
        <tr>
            <td id="323">323</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/330.png"></td>
            <td>沙漠蜻蜓</td>
            <td>逆鳞湖曝，沙尘洼地晴沙，45级进化</td>
        </tr>
        <tr>
            <td id="324">324</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/610.png"></td>
            <td>牙牙</td>
            <td>拳关丘陵沙，６号道路所有天气，牙牙湖之眼晴阴雨雾</td>
        </tr>
        <tr>
            <td id="325">325</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/611.png"></td>
            <td>斧牙龙</td>
            <td>38级进化</td>
        </tr>
        <tr>
            <td id="326">326</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/612.png"></td>
            <td>双斧战龙</td>
            <td>逆鳞湖雷，牙牙湖之眼晴阴雨曝沙雾，48级进化</td>
        </tr>
        <tr>
            <td id="327">327</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/562-g.png"></td>
            <td>哭哭面具</td>
            <td>６号道路所有天气</td>
        </tr>
        <tr>
            <td id="328">328</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/867.png"></td>
            <td>迭失板</td>
            <td>受到至少50伤害后到沙尘洼地长岩门下附近</td>
        </tr>
        <tr>
            <td id="329">329</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/563.png"></td>
            <td>迭失棺</td>
            <td>34级进化</td>
        </tr>
        <tr>
            <td id="330">330</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/679.png"></td>
            <td>独剑鞘</td>
            <td>拳关丘陵雹雾</td>
        </tr>
        <tr>
            <td id="331">331</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/680.png"></td>
            <td>双剑鞘</td>
            <td>逆鳞湖雹，巨人帽岩晴阴雨雷曝雪雹沙，35级进化</td>
        </tr>
        <tr>
            <td id="332">332</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/681.png"></td>
            <td>坚盾剑怪</td>
            <td>巨人帽岩雾，暗之石进化进化</td>
        </tr>
        <tr>
            <td id="333">333</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077-g.png"></td>
            <td>小火马-伽勒尔形态</td>
            <td>迷光森林所有天气，远古墓地雾 【MOD新增】迷光森林 明雷（10%替换绵绵泡芙）、暗雷（10%替换绵绵泡芙）</td>
        </tr>
        <tr>
            <td id="334">334</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/078-g.png"></td>
            <td>烈焰马</td>
            <td>远古墓地雾，40级进化</td>
        </tr>
        <tr>
            <td id="335">335</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/854.png"></td>
            <td>来悲茶</td>
            <td>迷光森林所有天气，远古墓地所有天气</td>
        </tr>
        <tr>
            <td id="336">336</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/855.png"></td>
            <td>怖思壶</td>
            <td>远古墓地晴雨雷曝雹雾，使用破裂/缺损的茶壶进化</td>
        </tr>
        <tr>
            <td id="337">337</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>迷光森林所有天气，逆鳞湖雾，球湖湖畔晴雾</td>
        </tr>
        <tr>
            <td id="338">338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>迷光森林所有天气，起橇雪原阴，远古墓地阴，雪中溪谷阴，巨人鞋底阴，三岔平原阴</td>
        </tr>
        <tr>
            <td id="339">339</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>起橇雪原阴，远古墓地阴，雪中溪谷阴，链接交换进化</td>
        </tr>
        <tr>
            <td id="340">340</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/755.png"></td>
            <td>睡睡菇</td>
            <td>巨人镜池雾，拳关丘陵雾</td>
        </tr>
        <tr>
            <td id="341">341</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/756.png"></td>
            <td>灯罩夜菇</td>
            <td>迷光森林所有天气，逆鳞湖阴雨雷，24级进化</td>
        </tr>
        <tr>
            <td id="342">342</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>盾：迷光森林所有天气，专注森林所有天气 【MOD新增】牙牙湖东岸 明雷（晴5%替换童偶熊、阴20%替换泡沫栗鼠）、暗雷（晴25%、阴50%替换童偶熊）</td>
        </tr>
        <tr>
            <td id="343">343</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/766.png"></td>
            <td>投掷猴</td>
            <td>剑：迷光森林所有天气，专注森林所有天气</td>
        </tr>
        <tr>
            <td id="344">344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>尖钉镇郊外所有天气，７号道路所有天气，逆鳞湖雷，挑战海滩所有天气，球湖湖畔阴雷</td>
        </tr>
        <tr>
            <td id="345">345</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/870.png"></td>
            <td>列阵兵</td>
            <td>８号道路所有天气，逆鳞湖阴</td>
        </tr>
        <tr>
            <td id="346">346</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/780.png"></td>
            <td>老翁龙</td>
            <td>盾：逆鳞湖雷 【MOD新增】逆鳞湖 明雷（晴20%替换穿着熊）</td>
        </tr>
        <tr>
            <td id="347">347</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/776.png"></td>
            <td>爆焰龟兽</td>
            <td>剑：逆鳞湖雷</td>
        </tr>
        <tr>
            <td id="348">348</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/777.png"></td>
            <td>托戈德玛尔</td>
            <td>逆鳞湖雹，８号道路所有天气</td>
        </tr>
        <tr>
            <td id="349">349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>泉烟小路，１０号道路所有天气，逆鳞湖雪，起橇雪原，雪中溪谷，通顶雪道所有天气</td>
        </tr>
        <tr>
            <td id="350">350</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/873.png"></td>
            <td>雪绒蛾</td>
            <td>通顶雪道所有天气，友好度158以上提升等级（夜晚）</td>
        </tr>
        <tr>
            <td id="351">351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>战竞湾，尖钉镇郊外所有天气，圆环海湾所有天气	，斗志洞窟所有天气</td>
        </tr>
        <tr>
            <td id="352">352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>战竞湾，逆鳞湖所有天气，牙牙湖西岸晴阴曝雪雹沙雾，圆环海湾晴阴曝沙雾，学会挑衅时提升等级</td>
        </tr>
        <tr>
            <td id="353">353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>９号道路，战竞湾所有天气，斗志洞窟，圆环海湾所有天气 冻海雷</td>
        </tr>
        <tr>
            <td id="354">354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>战竞湾，机擎河岸，逆鳞湖所有天气，揖礼原野，健身之海所有天气，列岛海域晴沙，离岛海域晴沙，蜂巢海晴沙，蜂巢岛晴沙，携带涟漪薰香生蛋</td>
        </tr>
        <tr>
            <td id="355">355</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/226.png"></td>
            <td>巨翅飞鱼</td>
            <td>战竞湾，逆鳞湖所有天气，铁炮鱼同行时提升等级</td>
        </tr>
        <tr>
            <td id="356">356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>战竞湾所有天气，机擎河岸所有天气，蜂巢海，蜂巢岛，冻海所有天气</td>
        </tr>
        <tr>
            <td id="357">357</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/321.png"></td>
            <td>吼鲸王</td>
            <td>战竞湾所有天气，健身之海所有天气，40级进化</td>
        </tr>
        <tr>
            <td id="358">358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>战竞湾，尖钉镇郊外所有天气，逆鳞湖雪，三岔平原所有天气 冻海晴阴雨雷雪雹雾</td>
        </tr>
        <tr>
            <td id="359">359</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/713.png"></td>
            <td>冰岩怪</td>
            <td>三岔平原，冻海所有天气，37级进化</td>
        </tr>
        <tr>
            <td id="360">360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>战竞湾，尖钉镇郊外所有天气，挑战海滩，冻海所有天气</td>
        </tr>
        <tr>
            <td id="361">361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>战竞湾所有天气，２号道路所有天气，美纳斯湖北岸晴雨雷雪雹雾，牙牙湖西岸晴雨雷雪雹雾，逆鳞湖晴雨雷雪雹雾，冻海雪雹</td>
        </tr>
        <tr>
            <td id="362">362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/337.png"></td>
            <td>月石</td>
            <td>盾：８号道路，巨人帽岩所有天气 【MOD新增】瞭望塔旧址 明雷（晴20%替换甜竹竹）、暗雷（晴25%）</td>
        </tr>
        <tr>
            <td id="363">363</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/338.png"></td>
            <td>太阳岩</td>
            <td>剑：８号道路，巨人帽岩所有天气</td>
        </tr>
        <tr>
            <td id="364">364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>煦丽草原雹，起橇雪原，冰点雪原，巨人睡榻，远古墓地，雪中溪谷，巨人鞋底，冻海，三岔平原，球湖湖畔所有天气，携带奇异薰香生蛋</td>
        </tr>
        <tr>
            <td id="365">365</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122-g.png"></td>
            <td>魔枪人偶-伽勒尔形态</td>
            <td>逆鳞湖雪，１０号道路所有天气，学会模仿时提升等级</td>
        </tr>
        <tr>
            <td id="366">366</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/866.png"></td>
            <td>踏冰人偶</td>
            <td>42级进化</td>
        </tr>
        <tr>
            <td id="367">367</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554-g.png"></td>
            <td>火红不倒翁-伽勒尔形态</td>
            <td>剑：泉烟小路，１０号道路所有天气，雪中溪谷雹</td>
        </tr>
        <tr>
            <td id="368">368</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555-g.png"></td>
            <td>达摩狒狒-伽勒尔形态</td>
            <td>剑：雪中溪谷雹，冰之石进化</td>
        </tr>
        <tr>
            <td id="369">369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>剑：１０号道路所有天气，逆鳞湖曝沙，巨人睡榻，巨人鞋底所有天气</td>
        </tr>
        <tr>
            <td id="370">370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>盾：１０号道路所有天气，逆鳞湖曝沙，巨人睡榻，巨人鞋底所有天气 【MOD新增】１０号道路 明雷（10%替换雪吞虫）、暗雷（20%替换喷嚏熊）</td>
        </tr>
        <tr>
            <td id="371">371</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/884.png"></td>
            <td>铝钢龙</td>
            <td>逆鳞湖雹，道路（10）所有天气，巨人凳岩所有天气</td>
        </tr>
        <tr>
            <td id="372">372</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>逆鳞湖雨雷，健身之海所有天气</td>
        </tr>
        <tr>
            <td id="373">373</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/132.png"></td>
            <td>百变怪</td>
            <td>逆鳞湖所有天气，	健身之海所有天气</td>
        </tr>
        <tr>
            <td id="374">374</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/880.png"></td>
            <td>雷鸟龙</td>
            <td>６号道路组合化石</td>
        </tr>
        <tr>
            <td id="375">375</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/881.png"></td>
            <td>雷鸟海兽</td>
            <td>６号道路组合化石</td>
        </tr>
        <tr>
            <td id="376">376</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/882.png"></td>
            <td>鳃鱼龙</td>
            <td>６号道路组合化石</td>
        </tr>
        <tr>
            <td id="377">377</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/883.png"></td>
            <td>鳃鱼海兽</td>
            <td>６号道路组合化石</td>
        </tr>
        <tr>
            <td id="378">378</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/004.png"></td>
            <td>小火龙</td>
            <td>二周目化朗镇赫普的家中</td>
        </tr>
        <tr>
            <td id="379">379</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/005.png"></td>
            <td>火恐龙</td>
            <td>16级进化</td>
        </tr>
        <tr>
            <td id="380">380</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/006.png"></td>
            <td>喷火龙</td>
            <td>36级进化</td>
        </tr>
        <tr>
            <td id="381">381</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/772.png"></td>
            <td>属性空</td>
            <td>对战塔赠送</td>
        </tr>
        <tr>
            <td id="382">382</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/773.png"></td>
            <td>银伴战兽</td>
            <td>亲密度*220以上或友好度*158以上提升等级</td>
        </tr>
        <tr>
            <td id="383">383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>盾：逆鳞湖阴曝，海鸣洞窟所有天气 【MOD新增】拳关丘陵 明雷（晴25%、阴35%、大晴天15%替换好啦鱿）、暗雷（晴10%替换树才怪、阴45%替换童偶熊、大晴天5%替换果然翁）</td>
        </tr>
        <tr>
            <td id="384">384</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/247.png"></td>
            <td>沙基拉斯</td>
            <td>盾：逆鳞湖沙，30级进化</td>
        </tr>
        <tr>
            <td id="385">385</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班吉拉斯</td>
            <td>盾：沙尘洼地晴曝雪雹沙雾，	海鸣洞窟所有天气，55级进化</td>
        </tr>
        <tr>
            <td id="386">386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/633.png"></td>
            <td>单首龙</td>
            <td>剑：逆鳞湖雨，海鸣洞窟所有天气</td>
        </tr>
        <tr>
            <td id="387">387</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/634.png"></td>
            <td>双首暴龙</td>
            <td>逆鳞湖雷沙，50级进化</td>
        </tr>
        <tr>
            <td id="388">388</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/635.png"></td>
            <td>三首恶龙</td>
            <td>海鸣洞窟所有天气，64级进化</td>
        </tr>
        <tr>
            <td id="389">389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>盾：逆鳞湖雨，清凉湿原雨雷，专注森林雨雷 【MOD新增】牙牙湖之眼 明雷（晴30%、雨20%替换掘地兔）、暗雷（晴5%替换豪力、雨25%替换穿着熊）</td>
        </tr>
        <tr>
            <td id="390">390</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/705.png"></td>
            <td>黏美儿</td>
            <td>盾：逆鳞湖雷，40级进化</td>
        </tr>
        <tr>
            <td id="391">391</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/706.png"></td>
            <td>黏美龙</td>
            <td>50级进化</td>
        </tr>
        <tr>
            <td id="392">392</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>剑：逆鳞湖阴曝，挑战之路曝沙雾，锻炼平原沙</td>
        </tr>
        <tr>
            <td id="393">393</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/783.png"></td>
            <td>鳞甲龙</td>
            <td>剑：逆鳞湖雷，35级进化</td>
        </tr>
        <tr>
            <td id="394">394</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/784.png"></td>
            <td>杖尾鳞甲龙</td>
            <td>剑：沙尘洼地晴曝雪雹沙雾，45级进化</td>
        </tr>
        <tr>
            <td id="395">395</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/885.png"></td>
            <td>多龙梅西亚</td>
            <td>逆鳞湖阴雷雾</td>
        </tr>
        <tr>
            <td id="396">396</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/886.png"></td>
            <td>多龙奇</td>
            <td>逆鳞湖阴雨雷雾，远古墓地所有天气，50级进化</td>
        </tr>
        <tr>
            <td id="397">397</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/887.png"></td>
            <td>多龙巴鲁托</td>
            <td>远古墓地晴阴雨雷曝雪，三岔平原晴阴雨曝雪雹雾，60级进化</td>
        </tr>
        <tr>
            <td id="398">398</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/888.png"></td>
            <td>苍响</td>
            <td>剧情</td>
        </tr>
        <tr>
            <td id="399">399</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/889.png"></td>
            <td>藏玛然特</td>
            <td>剧情 【MOD新增】巨人镜池 明雷/暗雷（晴、阴各2%）；野生个体必定携带腐朽的盾</td>
        </tr>
        <tr>
            <td id="400">400</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/890.png"></td>
            <td>无极汰那</td>
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
