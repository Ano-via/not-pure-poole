---
layout: post
title: 口袋妖怪剑盾 Ultimate GBA 宝可梦图鉴
tags: [宠物小精灵, 口袋妖怪, 神奇宝贝, 宝可梦, 剑盾]
date: 2026-10-09 10:16 +0800
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

<div class="floating-buttons">
  <button onclick="location.hash='#001'">Gen 1</button>
  <button onclick="location.hash='#152'">Gen 2</button>
  <button onclick="location.hash='#252'">Gen 3</button>
  <button onclick="location.hash='#387'">Gen 4</button>
  <button onclick="location.hash='#494'">Gen 5</button>
  <button onclick="location.hash='#650'">Gen 6</button>
  <button onclick="location.hash='#722'">Gen 7</button>
  <button onclick="location.hash='#810'">Gen 8</button>
  <button onclick="location.hash='#898'">↓</button>
</div>
<div>
<input id="numfilter" placeholder="123,456,789" />
<button onclick="real_numfilter()">筛选特定编号</button>
<button onclick="resetFilters()">重置筛选</button>
</div>

<div id="filters">
  <button onclick="filter('')">全部</button>
  
</div>

<table>
    <thead>
        <tr>
            <th>全国ID</th>
            <th>图片</th>
            <th>名称</th>
            <th>英文名称</th>
            <th>获取方式</th>
        </tr>
    </thead>
    <tbody id="pokeTable">
        <tr>
            <td id="001">001</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/001.png"></td>
            <td>妙蛙种子</td>
            <td>Bulbasaur</td>
            <td>旷野地带 1 Southwest（露营点）：(通关后) 露营点 区域 可通过 NPC 前往；遭遇概率：100；铠岛 武馆（赠送）：赠送 from Mustard 完成岛屿挑战后；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="002">002</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/002.png"></td>
            <td>妙蛙草</td>
            <td>Ivysaur</td>
            <td>进化方式：由 Bulbasaur 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="003">003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/003.png"></td>
            <td>妙蛙花</td>
            <td>Mega Venusaur</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：3.2</td>
        </tr>
        <tr>
            <td id="003">003</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/003.png"></td>
            <td>妙蛙花</td>
            <td>Venusaur</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Ivysaur 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="004">004</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/004.png"></td>
            <td>小火龙</td>
            <td>Charmander</td>
            <td>微寂镇（赠送）：通关后， Leon will leave you a Charmander at his and Hop's house.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="005">005</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/005.png"></td>
            <td>火恐龙</td>
            <td>Charmeleon</td>
            <td>进化方式：由 Charmander 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="006">006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/006.png"></td>
            <td>喷火龙</td>
            <td>Charizard</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：4；进化方式：由 Charmeleon 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="006">006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/006.png"></td>
            <td>喷火龙</td>
            <td>Mega Charizard X</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="006">006</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/006.png"></td>
            <td>喷火龙</td>
            <td>Mega Charizard Y</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="007">007</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/007.png"></td>
            <td>杰尼龟</td>
            <td>Squirtle</td>
            <td>旷野地带 1 Southwest（露营点）：(通关后) 露营点 区域 可通过 NPC 前往；遭遇概率：100；铠岛 武馆（赠送）：赠送 from Mustard 完成岛屿挑战后；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="008">008</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/008.png"></td>
            <td>卡咪龟</td>
            <td>Wartortle</td>
            <td>进化方式：由 Squirtle 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="009">009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/009.png"></td>
            <td>水箭龟</td>
            <td>Blastoise</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Wartortle 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="009">009</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/009.png"></td>
            <td>水箭龟</td>
            <td>Mega Blastoise</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="010">010</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/010.png"></td>
            <td>绿毛虫</td>
            <td>Caterpie</td>
            <td>道路 1（草丛）；遭遇概率：20；旷野地带 1 Southwest（草丛）；遭遇概率：2；旷野地带 1 Southeast（草丛）；遭遇概率：2；旷野地带 1 Northeast（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="011">011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/011.png"></td>
            <td>铁甲蛹</td>
            <td>Metapod</td>
            <td>进化方式：由 Caterpie 进化（升级至等级 7）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="012">012</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/012.png"></td>
            <td>巴大蝶</td>
            <td>Butterfree</td>
            <td>旷野地带 1 Southwest（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 2 (Bear)（草丛）；遭遇概率：4；旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Slumbering Area（草丛）；遭遇概率：5；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Metapod 进化（升级至等级 10）</td>
        </tr>
        <tr>
            <td id="013">013</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/013.png"></td>
            <td>独角虫</td>
            <td>Weedle</td>
            <td></td>
        </tr>
        <tr>
            <td id="014">014</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/014.png"></td>
            <td>铁壳蛹</td>
            <td>Kakuna</td>
            <td>进化方式：由 Weedle 进化（升级至等级 7）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="015">015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/015.png"></td>
            <td>大针蜂</td>
            <td>Beedrill</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：4；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Kakuna 进化（升级至等级 10）</td>
        </tr>
        <tr>
            <td id="015">015</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/015.png"></td>
            <td>大针蜂</td>
            <td>Mega Beedrill</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="016">016</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/016.png"></td>
            <td>波波</td>
            <td>Pidgey</td>
            <td></td>
        </tr>
        <tr>
            <td id="017">017</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/017.png"></td>
            <td>比比鸟</td>
            <td>Pidgeotto</td>
            <td>进化方式：由 Pidgey 进化（升级至等级 18）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="018">018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/018.png"></td>
            <td>大比鸟</td>
            <td>Mega Pidgeot</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="018">018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/018.png"></td>
            <td>大比鸟</td>
            <td>Pidgeot</td>
            <td>铠岛 5（明雷遭遇）；遭遇概率：100；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100；进化方式：由 Pidgeotto 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="019">019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/019.png"></td>
            <td>小拉达</td>
            <td>Rattata Alolan</td>
            <td></td>
        </tr>
        <tr>
            <td id="019">019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/019.png"></td>
            <td>小拉达</td>
            <td>Rattata</td>
            <td></td>
        </tr>
        <tr>
            <td id="020">020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/020.png"></td>
            <td>拉达</td>
            <td>Raticate Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100；进化方式：由 Rattata-Alola 进化（等级 Up: Nighttime + 等级 20）</td>
        </tr>
        <tr>
            <td id="020">020</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/020.png"></td>
            <td>拉达</td>
            <td>Raticate</td>
            <td>铠岛 1（草丛）；遭遇概率：20；进化方式：由 Rattata 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="021">021</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/021.png"></td>
            <td>烈雀</td>
            <td>Spearow</td>
            <td></td>
        </tr>
        <tr>
            <td id="022">022</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/022.png"></td>
            <td>大嘴雀</td>
            <td>Fearow</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；铠岛 1（草丛）；遭遇概率：20；进化方式：由 Spearow 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="023">023</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/023.png"></td>
            <td>阿柏蛇</td>
            <td>Ekans</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="024">024</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/024.png"></td>
            <td>阿柏怪</td>
            <td>Arbok</td>
            <td>Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：5；Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：5；进化方式：由 Ekans 进化（升级至等级 22）</td>
        </tr>
        <tr>
            <td id="025">025</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/025.png"></td>
            <td>皮卡丘</td>
            <td>Pikachu</td>
            <td>旷野地带 1 Southwest（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 1 Northwest（草丛）；遭遇概率：20；旷野地带 1 Southeast（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）：Gigantamax form；遭遇概率：2；道路 4（草丛）；遭遇概率：20；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）：Forms: Flying, Hoenn Cap, Original Cap, Rock Star, 冲浪；遭遇概率：10；进化方式：由 Pichu 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="026">026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>Raichu Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100；进化方式：由 Pikachu 进化（使用Item: Water Stone）</td>
        </tr>
        <tr>
            <td id="026">026</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/026.png"></td>
            <td>雷丘</td>
            <td>Raichu</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Pikachu 进化（使用Item: Thunder Stone）</td>
        </tr>
        <tr>
            <td id="027">027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/027.png"></td>
            <td>穿山鼠</td>
            <td>Sandshrew Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="027">027</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/027.png"></td>
            <td>穿山鼠</td>
            <td>Sandshrew</td>
            <td></td>
        </tr>
        <tr>
            <td id="028">028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/028.png"></td>
            <td>穿山王</td>
            <td>Sandslash Alolan</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：10；进化方式：由 Sandshrew-Alola 进化（使用Item: Ice Stone）</td>
        </tr>
        <tr>
            <td id="028">028</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/028.png"></td>
            <td>穿山王</td>
            <td>Sandslash</td>
            <td>进化方式：由 Sandshrew 进化（升级至等级 22）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="029">029</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/029.png"></td>
            <td>尼多兰</td>
            <td>Nidoran F</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="030">030</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/030.png"></td>
            <td>尼多娜</td>
            <td>Nidorina</td>
            <td>进化方式：由 Nidoran♀ 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="031">031</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/031.png"></td>
            <td>尼多后</td>
            <td>Nidoqueen</td>
            <td>冠之雪原 Graveyard（草丛）；遭遇概率：20；进化方式：由 Nidorina 进化（使用Item: Moon Stone）</td>
        </tr>
        <tr>
            <td id="032">032</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/032.png"></td>
            <td>尼多朗</td>
            <td>Nidoran M</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="033">033</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/033.png"></td>
            <td>尼多力诺</td>
            <td>Nidorino</td>
            <td>进化方式：由 Nidoran♂ 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="034">034</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/034.png"></td>
            <td>尼多王</td>
            <td>Nidoking</td>
            <td>冠之雪原 Graveyard（草丛）；遭遇概率：20；进化方式：由 Nidorino 进化（使用Item: Moon Stone）</td>
        </tr>
        <tr>
            <td id="035">035</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/035.png"></td>
            <td>皮皮</td>
            <td>Clefairy</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：20；Glimwood Tangle（草丛）；遭遇概率：10；进化方式：由 Cleffa 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="036">036</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/036.png"></td>
            <td>皮可西</td>
            <td>Clefable</td>
            <td>冠之雪原 Snowy East（草丛）；遭遇概率：1；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Clefairy 进化（使用Item: Moon Stone）</td>
        </tr>
        <tr>
            <td id="037">037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>Vulpix Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="037">037</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/037.png"></td>
            <td>六尾</td>
            <td>Vulpix</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="038">038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/038.png"></td>
            <td>九尾</td>
            <td>Ninetales Alolan</td>
            <td>进化方式：由 Vulpix-Alola 进化（使用Item: Ice Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="038">038</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/038.png"></td>
            <td>九尾</td>
            <td>Ninetales</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Vulpix 进化（使用Item: Fire Stone）</td>
        </tr>
        <tr>
            <td id="039">039</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/039.png"></td>
            <td>胖丁</td>
            <td>Jigglypuff</td>
            <td>进化方式：由 Igglybuff 进化（等级 Up: Happiness + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="040">040</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/040.png"></td>
            <td>胖可丁</td>
            <td>Wigglytuff</td>
            <td>进化方式：由 Jigglypuff 进化（使用Item: Moon Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="041">041</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/041.png"></td>
            <td>超音蝠</td>
            <td>Zubat</td>
            <td>道路 8 洞窟（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="042">042</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/042.png"></td>
            <td>大嘴蝠</td>
            <td>Golbat</td>
            <td>Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：5；Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：20；Tanoby Key (冠之雪原)（草丛）；遭遇概率：4；进化方式：由 Zubat 进化（升级至等级 22）</td>
        </tr>
        <tr>
            <td id="043">043</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/043.png"></td>
            <td>走路草</td>
            <td>Oddish</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（草丛）；遭遇概率：10；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="044">044</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/044.png"></td>
            <td>臭臭花</td>
            <td>Gloom</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Oddish 进化（升级至等级 21）</td>
        </tr>
        <tr>
            <td id="045">045</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/045.png"></td>
            <td>霸王花</td>
            <td>Vileplume</td>
            <td>进化方式：由 Gloom 进化（使用Item: Leaf Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="046">046</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/046.png"></td>
            <td>派拉斯</td>
            <td>Paras</td>
            <td></td>
        </tr>
        <tr>
            <td id="047">047</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/047.png"></td>
            <td>派拉斯特</td>
            <td>Parasect</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；铠岛 1（草丛）；遭遇概率：10；进化方式：由 Paras 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="048">048</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/048.png"></td>
            <td>毛球</td>
            <td>Venonat</td>
            <td>铠岛 1（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="049">049</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/049.png"></td>
            <td>摩鲁蛾</td>
            <td>Venomoth</td>
            <td>进化方式：由 Venonat 进化（升级至等级 31）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="050">050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>Diglett Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="050">050</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/050.png"></td>
            <td>地鼠</td>
            <td>Diglett</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；Galar Mine 1（草丛）；遭遇概率：14；旷野地带 5 (Desert) South（草丛）；遭遇概率：20；道路 8 洞窟（草丛）；遭遇概率：19</td>
        </tr>
        <tr>
            <td id="051">051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>Dugtrio Alolan</td>
            <td>进化方式：由 Diglett-Alola 进化（升级至等级 26）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="051">051</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/051.png"></td>
            <td>三地鼠</td>
            <td>Dugtrio</td>
            <td>道路 6（草丛）；遭遇概率：10；旷野地带 5 (Desert) North（草丛）；遭遇概率：20；进化方式：由 Diglett 进化（升级至等级 26）</td>
        </tr>
        <tr>
            <td id="052">052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/052.png"></td>
            <td>喵喵</td>
            <td>Meowth Alolan</td>
            <td></td>
        </tr>
        <tr>
            <td id="052">052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/052.png"></td>
            <td>喵喵</td>
            <td>Meowth Galarian</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；道路 4（明雷遭遇）；遭遇概率：100；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；铠岛 7（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="052">052</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/052.png"></td>
            <td>喵喵</td>
            <td>Meowth</td>
            <td>旷野地带 1 Southwest（极巨巢穴）：Gigantamax form available；遭遇概率：4；旷野地带 1 Southeast（极巨巢穴）：Gigantamax form available；遭遇概率：4；旷野地带 1 Northeast（极巨巢穴）：Gigantamax form available；遭遇概率：4；旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 East（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="053">053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/053.png"></td>
            <td>猫老大</td>
            <td>Persian Alolan</td>
            <td>进化方式：由 Meowth-Alola 进化（等级 Up: Happiness + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="053">053</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/053.png"></td>
            <td>猫老大</td>
            <td>Persian</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：5；进化方式：由 Meowth 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="054">054</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/054.png"></td>
            <td>可达鸭</td>
            <td>Psyduck</td>
            <td>Glimwood Tangle（Surf）；遭遇概率：60；Glimwood Tangle（钓鱼   Super Rod）；遭遇概率：40</td>
        </tr>
        <tr>
            <td id="055">055</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/055.png"></td>
            <td>哥达鸭</td>
            <td>Golduck</td>
            <td>Glimwood Tangle（Surf）；遭遇概率：40；铠岛 1（Surf）；遭遇概率：40；进化方式：由 Psyduck 进化（升级至等级 33）</td>
        </tr>
        <tr>
            <td id="056">056</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/056.png"></td>
            <td>猴怪</td>
            <td>Mankey</td>
            <td>道路 8 洞窟（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="057">057</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/057.png"></td>
            <td>火暴猴</td>
            <td>Primeape</td>
            <td>Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：10；铠岛 1（草丛）；遭遇概率：10；进化方式：由 Mankey 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="058">058</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/058.png"></td>
            <td>卡蒂狗</td>
            <td>Growlithe</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="059">059</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/059.png"></td>
            <td>风速狗</td>
            <td>Arcanine</td>
            <td>进化方式：由 Growlithe 进化（使用Item: Fire Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="060">060</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/060.png"></td>
            <td>蚊香蝌蚪</td>
            <td>Poliwag</td>
            <td>Glimwood Tangle（钓鱼   Good Rod）；遭遇概率：33</td>
        </tr>
        <tr>
            <td id="061">061</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/061.png"></td>
            <td>蚊香君</td>
            <td>Poliwhirl</td>
            <td>铠岛 1（Surf）；遭遇概率：40；进化方式：由 Poliwag 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="062">062</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/062.png"></td>
            <td>蚊香泳士</td>
            <td>Poliwrath</td>
            <td>道路 2（钓鱼   Super Rod）；遭遇概率：20；铠岛 2（Surf）；遭遇概率：20；进化方式：由 Poliwhirl 进化（使用Item: Water Stone）</td>
        </tr>
        <tr>
            <td id="063">063</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/063.png"></td>
            <td>凯西</td>
            <td>Abra</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="064">064</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/064.png"></td>
            <td>勇基拉</td>
            <td>Kadabra</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：10；进化方式：由 Abra 进化（升级至等级 16）</td>
        </tr>
        <tr>
            <td id="065">065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/065.png"></td>
            <td>胡地</td>
            <td>Alakazam</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Kadabra 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="065">065</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/065.png"></td>
            <td>胡地</td>
            <td>Mega Alakazam</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="066">066</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/066.png"></td>
            <td>腕力</td>
            <td>Machop</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；道路 3（草丛）；遭遇概率：40；Galar Mine 1（草丛）；遭遇概率：5；旷野地带 3 South（草丛）；遭遇概率：10；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="067">067</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/067.png"></td>
            <td>豪力</td>
            <td>Machoke</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：1；进化方式：由 Machop 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="068">068</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/068.png"></td>
            <td>怪力</td>
            <td>Machamp</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Machoke 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="069">069</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/069.png"></td>
            <td>喇叭芽</td>
            <td>Bellsprout</td>
            <td></td>
        </tr>
        <tr>
            <td id="070">070</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/070.png"></td>
            <td>口呆花</td>
            <td>Weepinbell</td>
            <td>进化方式：由 Bellsprout 进化（升级至等级 21）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="071">071</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/071.png"></td>
            <td>大食花</td>
            <td>Victreebel</td>
            <td>铠岛 6（草丛）；遭遇概率：10；进化方式：由 Weepinbell 进化（使用Item: Leaf Stone）</td>
        </tr>
        <tr>
            <td id="072">072</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/072.png"></td>
            <td>玛瑙水母</td>
            <td>Tentacool</td>
            <td>旷野地带 1 Northwest（钓鱼   Old Rod）；遭遇概率：50；铠岛 6（Surf）；遭遇概率：40</td>
        </tr>
        <tr>
            <td id="073">073</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/073.png"></td>
            <td>毒刺水母</td>
            <td>Tentacruel</td>
            <td>进化方式：由 Tentacool 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="074">074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/074.png"></td>
            <td>小拳石</td>
            <td>Geodude Alolan</td>
            <td></td>
        </tr>
        <tr>
            <td id="074">074</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/074.png"></td>
            <td>小拳石</td>
            <td>Geodude</td>
            <td>Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：20；Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="075">075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/075.png"></td>
            <td>隆隆石</td>
            <td>Graveler Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100；进化方式：由 Geodude-Alola 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="075">075</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/075.png"></td>
            <td>隆隆石</td>
            <td>Graveler</td>
            <td>Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：20；Tanoby Key (冠之雪原)（草丛）；遭遇概率：20；进化方式：由 Geodude 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="076">076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/076.png"></td>
            <td>隆隆岩</td>
            <td>Golem Alolan</td>
            <td>进化方式：由 Graveler-Alola 进化（使用Item: Link Cable）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="076">076</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/076.png"></td>
            <td>隆隆岩</td>
            <td>Golem</td>
            <td>Warm Up Tunnel (铠岛)（草丛）；遭遇概率：5；进化方式：由 Graveler 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="077">077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077.png"></td>
            <td>小火马</td>
            <td>Ponyta Galarian</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；Glimwood Tangle（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="077">077</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/077.png"></td>
            <td>小火马</td>
            <td>Ponyta</td>
            <td></td>
        </tr>
        <tr>
            <td id="078">078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/078.png"></td>
            <td>烈焰马</td>
            <td>Rapidash Galarian</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；进化方式：由 Ponyta-Galar 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="078">078</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/078.png"></td>
            <td>烈焰马</td>
            <td>Rapidash</td>
            <td>铠岛 6（草丛）；遭遇概率：10；进化方式：由 Ponyta 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="079">079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/079.png"></td>
            <td>呆呆兽</td>
            <td>Slowpoke Galarian</td>
            <td>木杆镇（明雷遭遇）：Battle as part of the Isle of Armor at the station.；遭遇概率：100；铠岛 1（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="079">079</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/079.png"></td>
            <td>呆呆兽</td>
            <td>Slowpoke</td>
            <td></td>
        </tr>
        <tr>
            <td id="080">080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/080.png"></td>
            <td>呆壳兽</td>
            <td>Mega Slowbro</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="080">080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/080.png"></td>
            <td>呆壳兽</td>
            <td>Slowbro Galarian</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；进化方式：由 Slowpoke-Galar 进化（使用Item: Galar Cuff）</td>
        </tr>
        <tr>
            <td id="080">080</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/080.png"></td>
            <td>呆壳兽</td>
            <td>Slowbro</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Slowpoke 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="081">081</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/081.png"></td>
            <td>小磁怪</td>
            <td>Magnemite</td>
            <td></td>
        </tr>
        <tr>
            <td id="082">082</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/082.png"></td>
            <td>三合一磁怪</td>
            <td>Magneton</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：20；铠岛 6（草丛）；遭遇概率：10；进化方式：由 Magnemite 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="083">083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/083.png"></td>
            <td>大葱鸭</td>
            <td>Farfetchd Galarian</td>
            <td>道路 5（明雷遭遇）；遭遇概率：100；旷野地带 3 West（明雷遭遇）；遭遇概率：100；铠岛 5（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="083">083</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/083.png"></td>
            <td>大葱鸭</td>
            <td>Farfetchd</td>
            <td>旷野地带 6 East（草丛）；遭遇概率：1；铠岛 6（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="084">084</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/084.png"></td>
            <td>嘟嘟</td>
            <td>Doduo</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="085">085</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/085.png"></td>
            <td>嘟嘟利</td>
            <td>Dodrio</td>
            <td>进化方式：由 Doduo 进化（升级至等级 31）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="086">086</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/086.png"></td>
            <td>小海狮</td>
            <td>Seel</td>
            <td></td>
        </tr>
        <tr>
            <td id="087">087</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/087.png"></td>
            <td>白海狮</td>
            <td>Dewgong</td>
            <td>道路 9（Surf）；遭遇概率：20；进化方式：由 Seel 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="088">088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/088.png"></td>
            <td>臭泥</td>
            <td>Grimer Alolan</td>
            <td></td>
        </tr>
        <tr>
            <td id="088">088</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/088.png"></td>
            <td>臭泥</td>
            <td>Grimer</td>
            <td></td>
        </tr>
        <tr>
            <td id="089">089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/089.png"></td>
            <td>臭臭泥</td>
            <td>Muk Alolan</td>
            <td>进化方式：由 Grimer-Alola 进化（升级至等级 38）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="089">089</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/089.png"></td>
            <td>臭臭泥</td>
            <td>Muk</td>
            <td>冠之雪原 草丛y East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="090">090</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/090.png"></td>
            <td>大舌贝</td>
            <td>Shellder</td>
            <td>旷野地带 1 Southwest（钓鱼   Old Rod）；遭遇概率：50</td>
        </tr>
        <tr>
            <td id="091">091</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/091.png"></td>
            <td>刺甲贝</td>
            <td>Cloyster</td>
            <td>进化方式：由 Shellder 进化（使用Item: Water Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="092">092</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/092.png"></td>
            <td>鬼斯</td>
            <td>Gastly</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="093">093</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/093.png"></td>
            <td>鬼斯通</td>
            <td>Haunter</td>
            <td>道路 8（草丛）；遭遇概率：5；进化方式：由 Gastly 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="094">094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/094.png"></td>
            <td>耿鬼</td>
            <td>Gengar</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form available；遭遇概率：3；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Haunter 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="094">094</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/094.png"></td>
            <td>耿鬼</td>
            <td>Mega Gengar</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="095">095</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/095.png"></td>
            <td>大岩蛇</td>
            <td>Onix</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：20；旷野地带 3 (Volcano)（明雷遭遇）；遭遇概率：100；Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：10；铠岛 Desert（明雷遭遇）；遭遇概率：100；Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：10；Brawlers 洞窟 (铠岛)（明雷遭遇）；遭遇概率：100；Warm Up Tunnel (铠岛)（明雷遭遇）；遭遇概率：100；Scifub Chamber (冠之雪原)（明雷遭遇）；遭遇概率：100；Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：6；Liptoo Chamber (冠之雪原)（明雷遭遇）；遭遇概率：100；Tanoby Key (冠之雪原)（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="096">096</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/096.png"></td>
            <td>催眠貘</td>
            <td>Drowzee</td>
            <td>Glimwood Tangle（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="097">097</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/097.png"></td>
            <td>引梦貘人</td>
            <td>Hypno</td>
            <td>铠岛 1（草丛）；遭遇概率：5；进化方式：由 Drowzee 进化（升级至等级 26）</td>
        </tr>
        <tr>
            <td id="098">098</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/098.png"></td>
            <td>大钳蟹</td>
            <td>Krabby</td>
            <td>旷野地带 3 North（Surf）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="099">099</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/099.png"></td>
            <td>巨钳蟹</td>
            <td>Kingler</td>
            <td>旷野地带 3 North（钓鱼   Old Rod）；遭遇概率：50；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；道路 9（草丛）；遭遇概率：20；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；铠岛 6（草丛）；遭遇概率：4；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Krabby 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="100">100</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/100.png"></td>
            <td>霹雳电球</td>
            <td>Voltorb</td>
            <td></td>
        </tr>
        <tr>
            <td id="101">101</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/101.png"></td>
            <td>顽皮雷弹</td>
            <td>Electrode</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；铠岛 1（草丛）；遭遇概率：4；进化方式：由 Voltorb 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td>1011</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/1011.png"></td>
            <td>裹蜜虫</td>
            <td>Dipplin</td>
            <td>进化方式：由 Applin 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td>1018</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/1018.png"></td>
            <td>铝钢桥龙</td>
            <td>Archaludon</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Duraludon 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td>1019</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/1019.png"></td>
            <td>蜜集大蛇</td>
            <td>Hydrapple</td>
            <td>进化方式：由 Dipplin 进化（升级至等级 44）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="102">102</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/102.png"></td>
            <td>蛋蛋</td>
            <td>Exeggcute</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="103">103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/103.png"></td>
            <td>椰蛋树</td>
            <td>Exeggutor Alolan</td>
            <td>Hulbury（Purchase 来自 NPC）；遭遇概率：100；进化方式：由 Exeggcute 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="103">103</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/103.png"></td>
            <td>椰蛋树</td>
            <td>Exeggutor</td>
            <td>进化方式：由 Exeggcute 进化（使用Item: Leaf Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="104">104</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/104.png"></td>
            <td>卡拉卡拉</td>
            <td>Cubone</td>
            <td>旷野地带 5 (Desert) North（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="105">105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/105.png"></td>
            <td>嘎啦嘎啦</td>
            <td>Marowak Alolan</td>
            <td>进化方式：由 Cubone 进化（使用Item: Fire Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="105">105</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/105.png"></td>
            <td>嘎啦嘎啦</td>
            <td>Marowak</td>
            <td>旷野地带 5 (Desert) North（草丛）；遭遇概率：1；Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：5；进化方式：由 Cubone 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="106">106</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/106.png"></td>
            <td>飞腿郎</td>
            <td>Hitmonlee</td>
            <td>机擎市 East（草丛）；遭遇概率：5；进化方式：由 Tyrogue 进化（等级 Up: Attack > Defense + 等级 20）</td>
        </tr>
        <tr>
            <td id="107">107</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/107.png"></td>
            <td>快拳郎</td>
            <td>Hitmonchan</td>
            <td>机擎市 East（草丛）；遭遇概率：5；进化方式：由 Tyrogue 进化（等级 Up: Attack < Defense + 等级 20）</td>
        </tr>
        <tr>
            <td id="108">108</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/108.png"></td>
            <td>大舌头</td>
            <td>Lickitung</td>
            <td>铠岛 1（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="109">109</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/109.png"></td>
            <td>瓦斯弹</td>
            <td>Koffing</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：20；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；机擎市 East（草丛）；遭遇概率：4；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（草丛）；遭遇概率：1；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="110">110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110.png"></td>
            <td>双弹瓦斯</td>
            <td>Weezing Galarian</td>
            <td>Slumbering Area（草丛）；遭遇概率：30；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；进化方式：由 Koffing 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="110">110</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/110.png"></td>
            <td>双弹瓦斯</td>
            <td>Weezing</td>
            <td>Glimwood Tangle（草丛）；遭遇概率：10；进化方式：由 Koffing 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="111">111</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/111.png"></td>
            <td>独角犀牛</td>
            <td>Rhyhorn</td>
            <td>道路 8（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="112">112</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/112.png"></td>
            <td>钻角犀兽</td>
            <td>Rhydon</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 3 South（草丛）；遭遇概率：20；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（草丛）；遭遇概率：5；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；道路 10（草丛）；遭遇概率：5；进化方式：由 Rhyhorn 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="113">113</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/113.png"></td>
            <td>吉利蛋</td>
            <td>Chansey</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：4；旷野地带 6 East（草丛）；遭遇概率：5；进化方式：由 Happiny 进化（等级 Up: Oval Stone）</td>
        </tr>
        <tr>
            <td id="114">114</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/114.png"></td>
            <td>蔓藤怪</td>
            <td>Tangela</td>
            <td>铠岛 1（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="115">115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/115.png"></td>
            <td>袋兽</td>
            <td>Kangaskhan</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：20；铠岛 6（草丛）；遭遇概率：20；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="115">115</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/115.png"></td>
            <td>袋兽</td>
            <td>Mega Kangaskhan</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：3.2</td>
        </tr>
        <tr>
            <td id="116">116</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/116.png"></td>
            <td>墨海马</td>
            <td>Horsea</td>
            <td>旷野地带 1 Southwest（钓鱼   Good Rod）；遭遇概率：33；旷野地带 1 Northwest（Surf）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="117">117</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/117.png"></td>
            <td>海刺龙</td>
            <td>Seadra</td>
            <td>旷野地带 1 Northwest（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Horsea 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="118">118</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/118.png"></td>
            <td>角金鱼</td>
            <td>Goldeen</td>
            <td>旷野地带 1 Southwest（钓鱼   Good Rod）；遭遇概率：33；Glimwood Tangle（钓鱼   Good Rod）；遭遇概率：33；Glimwood Tangle（钓鱼   Super Rod）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="119">119</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/119.png"></td>
            <td>金鱼王</td>
            <td>Seaking</td>
            <td>旷野地带 3 North（钓鱼   Super Rod）；遭遇概率：20；Glimwood Tangle（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Goldeen 进化（升级至等级 33）</td>
        </tr>
        <tr>
            <td id="120">120</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/120.png"></td>
            <td>海星星</td>
            <td>Staryu</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；Galar Mine 2（钓鱼   Good Rod）；遭遇概率：33；铠岛 3（Surf）；遭遇概率：40；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="121">121</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/121.png"></td>
            <td>宝石海星</td>
            <td>Starmie</td>
            <td>铠岛 3（Surf）；遭遇概率：60；进化方式：由 Staryu 进化（使用Item: Water Stone）</td>
        </tr>
        <tr>
            <td id="122">122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122.png"></td>
            <td>魔墙人偶</td>
            <td>Mr Mime Galarian</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；道路 10（草丛）；遭遇概率：20；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；Freezington (冠之雪原)（草丛）；遭遇概率：10；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：4；进化方式：由 Mime Jr. 进化（使用Item: Ice Stone）</td>
        </tr>
        <tr>
            <td id="122">122</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/122.png"></td>
            <td>魔墙人偶</td>
            <td>Mr Mime</td>
            <td>道路 7（草丛）；遭遇概率：10；进化方式：由 Mime Jr. 进化（等级 Up: Learn Mimic (等级 15) + 等级 Up）</td>
        </tr>
        <tr>
            <td id="123">123</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/123.png"></td>
            <td>飞天螳螂</td>
            <td>Scyther</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（草丛）；遭遇概率：10；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="124">124</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/124.png"></td>
            <td>迷唇姐</td>
            <td>Jynx</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：20；战竞镇（游戏内交换）：通信交换 Polywhirl for Jynx；遭遇概率：100；Freezington (冠之雪原)（草丛）；遭遇概率：10；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Smoochum 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="125">125</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/125.png"></td>
            <td>电击兽</td>
            <td>Electabuzz</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Elekid 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="126">126</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/126.png"></td>
            <td>鸭嘴火兽</td>
            <td>Magmar</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 3 West（草丛）；遭遇概率：1；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Magby 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="127">127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/127.png"></td>
            <td>凯罗斯</td>
            <td>Mega Pinsir</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="127">127</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/127.png"></td>
            <td>凯罗斯</td>
            <td>Pinsir</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 6 West（草丛）；遭遇概率：20；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="128">128</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/128.png"></td>
            <td>肯泰罗</td>
            <td>Tauros</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：20；旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 6 East（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="129">129</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/129.png"></td>
            <td>鲤鱼王</td>
            <td>Magikarp</td>
            <td>旷野地带 1 Northwest（Surf）；遭遇概率：20；旷野地带 1 Northwest（钓鱼   Good Rod）；遭遇概率：33；Galar Mine 2（钓鱼   Good Rod）；遭遇概率：33；旷野地带 3 North（钓鱼   Super Rod）；遭遇概率：20；Glimwood Tangle（钓鱼   Old Rod）；遭遇概率：100；Glimwood Tangle（钓鱼   Good Rod）；遭遇概率：33</td>
        </tr>
        <tr>
            <td id="130">130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>Gyarados</td>
            <td>Galar Mine 2（钓鱼   Super Rod）；遭遇概率：20；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；Glimwood Tangle（钓鱼   Super Rod）；遭遇概率：20；旷野地带 6 East（钓鱼   Old Rod）；遭遇概率：50；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（钓鱼   Super Rod）；遭遇概率：20；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Magikarp 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="130">130</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/130.png"></td>
            <td>暴鲤龙</td>
            <td>Mega Gyarados</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="131">131</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/131.png"></td>
            <td>拉普拉斯</td>
            <td>Lapras</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 3 South（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 West（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 North（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 4 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) East（Surf）；遭遇概率：20；旷野地带 7 (Ice) East（钓鱼   Super Rod）；遭遇概率：20；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（Surf）；遭遇概率：20；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 East（极巨巢穴）：Gigantamax form；遭遇概率：2；道路 9（Surf）；遭遇概率：20；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="132">132</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/132.png"></td>
            <td>百变怪</td>
            <td>Ditto</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="133">133</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/133.png"></td>
            <td>伊布</td>
            <td>Eevee</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：20；旷野地带 1 Southwest（极巨巢穴）：Gigantamax form available；遭遇概率：4；旷野地带 1 Southeast（草丛）；遭遇概率：10；旷野地带 1 Southeast（极巨巢穴）：Gigantamax form available；遭遇概率：4；旷野地带 1 Northeast（极巨巢穴）：Gigantamax form available；遭遇概率：4；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；道路 4（草丛）；遭遇概率：20；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；冠之雪原 Graveyard（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="134">134</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/134.png"></td>
            <td>水伊布</td>
            <td>Vaporeon</td>
            <td>道路 9（草丛）；遭遇概率：4；进化方式：由 Eevee 进化（使用Item: Water Stone）</td>
        </tr>
        <tr>
            <td id="135">135</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/135.png"></td>
            <td>雷伊布</td>
            <td>Jolteon</td>
            <td>进化方式：由 Eevee 进化（使用Item: Thunder Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="136">136</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/136.png"></td>
            <td>火伊布</td>
            <td>Flareon</td>
            <td>进化方式：由 Eevee 进化（使用Item: Fire Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="137">137</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/137.png"></td>
            <td>多边兽</td>
            <td>Porygon</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；Turffield（赠送）；遭遇概率：100；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="138">138</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/138.png"></td>
            <td>菊石兽</td>
            <td>Omanyte</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="139">139</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/139.png"></td>
            <td>多刺菊石兽</td>
            <td>Omastar</td>
            <td>Warm Up Tunnel (铠岛)（草丛）；遭遇概率：1；进化方式：由 Omanyte 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="140">140</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/140.png"></td>
            <td>化石盔</td>
            <td>Kabuto</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="141">141</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/141.png"></td>
            <td>镰刀盔</td>
            <td>Kabutops</td>
            <td>Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：10；Tanoby Key (冠之雪原)（草丛）；遭遇概率：20；进化方式：由 Kabuto 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="142">142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/142.png"></td>
            <td>化石翼龙</td>
            <td>Aerodactyl</td>
            <td>Warm Up Tunnel (铠岛)（草丛）；遭遇概率：5；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；冠之雪原 Graveyard（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="142">142</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/142.png"></td>
            <td>化石翼龙</td>
            <td>Mega Aerodactyl</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：4.8</td>
        </tr>
        <tr>
            <td id="143">143</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/143.png"></td>
            <td>卡比兽</td>
            <td>Snorlax</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 3 South（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 West（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 North（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 4 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 East（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；Freezington (冠之雪原)（草丛）；遭遇概率：5；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：20；进化方式：由 Munchlax 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="144">144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/144.png"></td>
            <td>急冻鸟</td>
            <td>Articuno Galarian</td>
            <td></td>
        </tr>
        <tr>
            <td id="144">144</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/144.png"></td>
            <td>急冻鸟</td>
            <td>Articuno</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="145">145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/145.png"></td>
            <td>闪电鸟</td>
            <td>Zapdos Galarian</td>
            <td>旷野地带 4 West（Legendary）：Return to 旷野地带 4 West, southeast corner, after encountering the Galarian Birds at the Tree in the 冠之雪原.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="145">145</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/145.png"></td>
            <td>闪电鸟</td>
            <td>Zapdos</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="146">146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/146.png"></td>
            <td>火焰鸟</td>
            <td>Moltres Galarian</td>
            <td>铠岛 4（Legendary）：Return to the Isle of Armor, east of the dojo on the beach after encountering the Galarian Birds at the Tree in the 冠之雪原.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="146">146</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/146.png"></td>
            <td>火焰鸟</td>
            <td>Moltres</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="147">147</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/147.png"></td>
            <td>迷你龙</td>
            <td>Dratini</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 3 North（钓鱼   Super Rod）；遭遇概率：40；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；旷野地带 6 East（钓鱼   Super Rod）；遭遇概率：20；道路 9（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="148">148</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/148.png"></td>
            <td>哈克龙</td>
            <td>Dragonair</td>
            <td>旷野地带 6 East（Surf）；遭遇概率：20；进化方式：由 Dratini 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="149">149</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/149.png"></td>
            <td>快龙</td>
            <td>Dragonite</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 9 (Dragon)（草丛）；遭遇概率：4；进化方式：由 Dragonair 进化（升级至等级 55）</td>
        </tr>
        <tr>
            <td id="150">150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/150.png"></td>
            <td>超梦</td>
            <td>Mega Mewtwo X</td>
            <td></td>
        </tr>
        <tr>
            <td id="150">150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/150.png"></td>
            <td>超梦</td>
            <td>Mega Mewtwo Y</td>
            <td></td>
        </tr>
        <tr>
            <td id="150">150</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/150.png"></td>
            <td>超梦</td>
            <td>Mewtwo</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="151">151</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/151.png"></td>
            <td>梦幻</td>
            <td>Mew</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="152">152</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/152.png"></td>
            <td>菊草叶</td>
            <td>Chikorita</td>
            <td>木杆镇（游戏内交换）：通信交换 Eldegoss for Chikorita；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="153">153</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/153.png"></td>
            <td>月桂叶</td>
            <td>Bayleef</td>
            <td>进化方式：由 Chikorita 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="154">154</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/154.png"></td>
            <td>大竺葵</td>
            <td>Meganium</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；进化方式：由 Bayleef 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="155">155</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/155.png"></td>
            <td>火球鼠</td>
            <td>Cyndaquil</td>
            <td>道路 2（游戏内交换）：通信交换 for Carkol；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="156">156</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/156.png"></td>
            <td>火岩鼠</td>
            <td>Quilava</td>
            <td>进化方式：由 Cyndaquil 进化（升级至等级 14）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="157">157</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/157.png"></td>
            <td>火暴兽</td>
            <td>Typhlosion</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）：Hisuian variant；遭遇概率：2；进化方式：由 Quilava 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="158">158</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/158.png"></td>
            <td>小锯鳄</td>
            <td>Totodile</td>
            <td>旷野地带 1 Southwest（游戏内交换）：通信交换 Drednaw for Totodile；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="159">159</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/159.png"></td>
            <td>蓝鳄</td>
            <td>Croconaw</td>
            <td>进化方式：由 Totodile 进化（升级至等级 18）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="160">160</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/160.png"></td>
            <td>大力鳄</td>
            <td>Feraligatr</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；进化方式：由 Croconaw 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="161">161</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/161.png"></td>
            <td>尾立</td>
            <td>Sentret</td>
            <td></td>
        </tr>
        <tr>
            <td id="162">162</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/162.png"></td>
            <td>大尾立</td>
            <td>Furret</td>
            <td>铠岛 1（草丛）；遭遇概率：1；进化方式：由 Sentret 进化（升级至等级 15）</td>
        </tr>
        <tr>
            <td id="163">163</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/163.png"></td>
            <td>咕咕</td>
            <td>Hoothoot</td>
            <td>Slumbering Weald（草丛）；遭遇概率：15；道路 1（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="164">164</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/164.png"></td>
            <td>猫头夜鹰</td>
            <td>Noctowl</td>
            <td>机擎市 East（草丛）；遭遇概率：20；旷野地带 4 East（草丛）；遭遇概率：10；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100；进化方式：由 Hoothoot 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="165">165</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/165.png"></td>
            <td>芭瓢虫</td>
            <td>Ledyba</td>
            <td></td>
        </tr>
        <tr>
            <td id="166">166</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/166.png"></td>
            <td>安瓢虫</td>
            <td>Ledian</td>
            <td>铠岛 2（草丛）；遭遇概率：20；进化方式：由 Ledyba 进化（升级至等级 18）</td>
        </tr>
        <tr>
            <td id="167">167</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/167.png"></td>
            <td>圆丝蛛</td>
            <td>Spinarak</td>
            <td></td>
        </tr>
        <tr>
            <td id="168">168</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/168.png"></td>
            <td>阿利多斯</td>
            <td>Ariados</td>
            <td>铠岛 2（草丛）；遭遇概率：20；进化方式：由 Spinarak 进化（升级至等级 22）</td>
        </tr>
        <tr>
            <td id="169">169</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/169.png"></td>
            <td>叉字蝠</td>
            <td>Crobat</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：5；进化方式：由 Golbat 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="170">170</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/170.png"></td>
            <td>灯笼鱼</td>
            <td>Chinchou</td>
            <td></td>
        </tr>
        <tr>
            <td id="171">171</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/171.png"></td>
            <td>电灯怪</td>
            <td>Lanturn</td>
            <td>旷野地带 3 North（Surf）；遭遇概率：20；旷野地带 6 East（Surf）；遭遇概率：20；旷野地带 6 East（钓鱼   Good Rod）；遭遇概率：33；进化方式：由 Chinchou 进化（升级至等级 27）</td>
        </tr>
        <tr>
            <td id="172">172</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/172.png"></td>
            <td>皮丘</td>
            <td>Pichu</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="173">173</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/173.png"></td>
            <td>皮宝宝</td>
            <td>Cleffa</td>
            <td></td>
        </tr>
        <tr>
            <td id="174">174</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/174.png"></td>
            <td>宝宝丁</td>
            <td>Igglybuff</td>
            <td>铠岛 1（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="175">175</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/175.png"></td>
            <td>波克比</td>
            <td>Togepi</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="176">176</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/176.png"></td>
            <td>波克基古</td>
            <td>Togetic</td>
            <td>进化方式：由 Togepi 进化（等级 Up: Happiness + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="177">177</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/177.png"></td>
            <td>天然雀</td>
            <td>Natu</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="178">178</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/178.png"></td>
            <td>天然鸟</td>
            <td>Xatu</td>
            <td>进化方式：由 Natu 进化（升级至等级 25）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="179">179</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/179.png"></td>
            <td>咩利羊</td>
            <td>Mareep</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="180">180</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/180.png"></td>
            <td>茸茸羊</td>
            <td>Flaaffy</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Mareep 进化（升级至等级 15）</td>
        </tr>
        <tr>
            <td id="181">181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/181.png"></td>
            <td>电龙</td>
            <td>Ampharos</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Flaaffy 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="181">181</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/181.png"></td>
            <td>电龙</td>
            <td>Mega Ampharos</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="182">182</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/182.png"></td>
            <td>美丽花</td>
            <td>Bellossom</td>
            <td>旷野地带 6 East（草丛）；遭遇概率：10；进化方式：由 Gloom 进化（使用Item: Sun Stone）</td>
        </tr>
        <tr>
            <td id="183">183</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/183.png"></td>
            <td>玛力露</td>
            <td>Marill</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Azurill 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="184">184</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/184.png"></td>
            <td>玛力露丽</td>
            <td>Azumarill</td>
            <td>铠岛 2（草丛）；遭遇概率：10；进化方式：由 Marill 进化（升级至等级 18）</td>
        </tr>
        <tr>
            <td id="185">185</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/185.png"></td>
            <td>树才怪</td>
            <td>Sudowoodo</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：5；机擎市 East（草丛）；遭遇概率：4；旷野地带 5 (Desert) North（草丛）；遭遇概率：1；进化方式：由 Bonsly 进化（等级 Up: Learn Mimic (等级 15) + 等级 Up）</td>
        </tr>
        <tr>
            <td id="186">186</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/186.png"></td>
            <td>蚊香蛙皇</td>
            <td>Politoed</td>
            <td>道路 2（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Poliwhirl 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="187">187</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/187.png"></td>
            <td>毽子草</td>
            <td>Hoppip</td>
            <td></td>
        </tr>
        <tr>
            <td id="188">188</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/188.png"></td>
            <td>毽子花</td>
            <td>Skiploom</td>
            <td>铠岛 2（草丛）；遭遇概率：10；进化方式：由 Hoppip 进化（升级至等级 18）</td>
        </tr>
        <tr>
            <td id="189">189</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/189.png"></td>
            <td>毽子棉</td>
            <td>Jumpluff</td>
            <td>进化方式：由 Skiploom 进化（升级至等级 27）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="190">190</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/190.png"></td>
            <td>长尾怪手</td>
            <td>Aipom</td>
            <td>铠岛 2（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="191">191</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/191.png"></td>
            <td>向日种子</td>
            <td>Sunkern</td>
            <td></td>
        </tr>
        <tr>
            <td id="192">192</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/192.png"></td>
            <td>向日花怪</td>
            <td>Sunflora</td>
            <td>铠岛 2（草丛）；遭遇概率：10；进化方式：由 Sunkern 进化（使用Item: Sun Stone）</td>
        </tr>
        <tr>
            <td id="193">193</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/193.png"></td>
            <td>蜻蜻蜓</td>
            <td>Yanma</td>
            <td></td>
        </tr>
        <tr>
            <td id="194">194</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/194.png"></td>
            <td>乌波</td>
            <td>Wooper</td>
            <td>道路 2（Surf）；遭遇概率：100；旷野地带 1 Southwest（Surf）；遭遇概率：20；旷野地带 1 Southwest（钓鱼   Old Rod）；遭遇概率：50；旷野地带 1 Northwest（Surf）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="195">195</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/195.png"></td>
            <td>沼王</td>
            <td>Quagsire</td>
            <td>旷野地带 6 East（Surf）；遭遇概率：20；进化方式：由 Wooper 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="196">196</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/196.png"></td>
            <td>太阳伊布</td>
            <td>Espeon</td>
            <td>进化方式：由 Eevee 进化（等级 Up: Happiness + Daytime + 等级 Up OR Sun Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="197">197</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/197.png"></td>
            <td>月亮伊布</td>
            <td>Umbreon</td>
            <td>进化方式：由 Eevee 进化（等级 Up: Happiness + Nighttime + 等级 Up OR Moon Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="198">198</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/198.png"></td>
            <td>黑暗鸦</td>
            <td>Murkrow</td>
            <td></td>
        </tr>
        <tr>
            <td id="199">199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/199.png"></td>
            <td>呆呆王</td>
            <td>Slowking Galarian</td>
            <td>进化方式：由 Slowpoke-Galar 进化（使用Item: Galar Wreath）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="199">199</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/199.png"></td>
            <td>呆呆王</td>
            <td>Slowking</td>
            <td>进化方式：由 Slowpoke 进化（使用Item: King's Rock）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="200">200</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/200.png"></td>
            <td>梦妖</td>
            <td>Misdreavus</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：20；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="201">201</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/201.png"></td>
            <td>未知图腾</td>
            <td>Unown</td>
            <td>旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="202">202</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/202.png"></td>
            <td>果然翁</td>
            <td>Wobbuffet</td>
            <td>道路 5（草丛）；遭遇概率：10；旷野地带 4 West（草丛）；遭遇概率：1；进化方式：由 Wynaut 进化（升级至等级 15）</td>
        </tr>
        <tr>
            <td id="203">203</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/203.png"></td>
            <td>麒麟奇</td>
            <td>Girafarig</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="204">204</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/204.png"></td>
            <td>榛果球</td>
            <td>Pineco</td>
            <td></td>
        </tr>
        <tr>
            <td id="205">205</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/205.png"></td>
            <td>佛烈托斯</td>
            <td>Forretress</td>
            <td>铠岛 2（草丛）；遭遇概率：5；进化方式：由 Pineco 进化（升级至等级 31）</td>
        </tr>
        <tr>
            <td id="206">206</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/206.png"></td>
            <td>土龙弟弟</td>
            <td>Dunsparce</td>
            <td>铠岛 2（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="207">207</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/207.png"></td>
            <td>天蝎</td>
            <td>Gligar</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：5；旷野地带 3 (Volcano)（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="208">208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>Mega Steelix</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="208">208</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/208.png"></td>
            <td>大钢蛇</td>
            <td>Steelix</td>
            <td>Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：10；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Onix 进化（使用Item: Metal Coat）</td>
        </tr>
        <tr>
            <td id="209">209</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/209.png"></td>
            <td>布鲁</td>
            <td>Snubbull</td>
            <td></td>
        </tr>
        <tr>
            <td id="210">210</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/210.png"></td>
            <td>布鲁皇</td>
            <td>Granbull</td>
            <td>Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：10；铠岛 2（草丛）；遭遇概率：4；进化方式：由 Snubbull 进化（升级至等级 23）</td>
        </tr>
        <tr>
            <td id="211">211</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/211.png"></td>
            <td>千针鱼</td>
            <td>Qwilfish</td>
            <td>Galar Mine 1（钓鱼   Good Rod）；遭遇概率：33；铠岛 2（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="212">212</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/212.png"></td>
            <td>巨钳螳螂</td>
            <td>Mega Scizor</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：3.2</td>
        </tr>
        <tr>
            <td id="212">212</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/212.png"></td>
            <td>巨钳螳螂</td>
            <td>Scizor</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Scyther 进化（使用Item: Metal Coat）</td>
        </tr>
        <tr>
            <td id="213">213</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/213.png"></td>
            <td>壶壶</td>
            <td>Shuckle</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：10；Galar Mine 2（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="214">214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/214.png"></td>
            <td>赫拉克罗斯</td>
            <td>Heracross</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：10；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="214">214</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/214.png"></td>
            <td>赫拉克罗斯</td>
            <td>Mega Heracross</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="215">215</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/215.png"></td>
            <td>狃拉</td>
            <td>Sneasel</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：20；道路 8 (Snow)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="216">216</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/216.png"></td>
            <td>熊宝宝</td>
            <td>Teddiursa</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="217">217</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/217.png"></td>
            <td>圈圈熊</td>
            <td>Ursaring</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：4；进化方式：由 Teddiursa 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="218">218</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/218.png"></td>
            <td>熔岩虫</td>
            <td>Slugma</td>
            <td></td>
        </tr>
        <tr>
            <td id="219">219</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/219.png"></td>
            <td>熔岩蜗牛</td>
            <td>Magcargo</td>
            <td>铠岛 2（草丛）；遭遇概率：1；进化方式：由 Slugma 进化（升级至等级 38）</td>
        </tr>
        <tr>
            <td id="220">220</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/220.png"></td>
            <td>小山猪</td>
            <td>Swinub</td>
            <td></td>
        </tr>
        <tr>
            <td id="221">221</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/221.png"></td>
            <td>长毛猪</td>
            <td>Piloswine</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：10；进化方式：由 Swinub 进化（升级至等级 33）</td>
        </tr>
        <tr>
            <td id="222">222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/222.png"></td>
            <td>太阳珊瑚</td>
            <td>Corsola Galarian</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="222">222</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/222.png"></td>
            <td>太阳珊瑚</td>
            <td>Corsola</td>
            <td>铠岛 2（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="223">223</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/223.png"></td>
            <td>铁炮鱼</td>
            <td>Remoraid</td>
            <td>旷野地带 3 North（Surf）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="224">224</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/224.png"></td>
            <td>章鱼桶</td>
            <td>Octillery</td>
            <td>旷野地带 6 East（钓鱼   Super Rod）；遭遇概率：20；道路 9（草丛）；遭遇概率：20；进化方式：由 Remoraid 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="225">225</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/225.png"></td>
            <td>信使鸟</td>
            <td>Delibird</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：10；道路 8 (Snow)（草丛）；遭遇概率：10；冠之雪原 Snowy East（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="226">226</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/226.png"></td>
            <td>巨翅飞鱼</td>
            <td>Mantine</td>
            <td>旷野地带 1 Southwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 1 Northwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 6 East（钓鱼   Good Rod）；遭遇概率：33；道路 9（草丛）；遭遇概率：1；旷野地带 9 (Dragon)（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Mantyke 进化（等级 Up: Remoraid in Team + 等级 Up）</td>
        </tr>
        <tr>
            <td id="227">227</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/227.png"></td>
            <td>盔甲鸟</td>
            <td>Skarmory</td>
            <td>铠岛 3（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="228">228</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/228.png"></td>
            <td>戴鲁比</td>
            <td>Houndour</td>
            <td>旷野地带 3 South（明雷遭遇）；遭遇概率：100；旷野地带 3 West（草丛）；遭遇概率：20；旷野地带 3 West（明雷遭遇）；遭遇概率：100；旷野地带 3 (Volcano)（明雷遭遇）；遭遇概率：100；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：10；铠岛 7（明雷遭遇）；遭遇概率：100；冠之雪原 草丛y East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="229">229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/229.png"></td>
            <td>黑鲁加</td>
            <td>Houndoom</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Houndour 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="229">229</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/229.png"></td>
            <td>黑鲁加</td>
            <td>Mega Houndoom</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="230">230</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/230.png"></td>
            <td>刺龙王</td>
            <td>Kingdra</td>
            <td>旷野地带 7 (Ice) East（Surf）；遭遇概率：20；旷野地带 7 (Ice) West（Surf）；遭遇概率：20；旷野地带 9 (Dragon)（Surf）；遭遇概率：20；旷野地带 9 (Dragon)（钓鱼   Good Rod）；遭遇概率：33；进化方式：由 Seadra 进化（使用Item: Dragon Scale）</td>
        </tr>
        <tr>
            <td id="231">231</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/231.png"></td>
            <td>小小象</td>
            <td>Phanpy</td>
            <td>旷野地带 5 (Desert) South（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="232">232</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/232.png"></td>
            <td>顿甲</td>
            <td>Donphan</td>
            <td>旷野地带 5 (Desert) North（草丛）；遭遇概率：10；进化方式：由 Phanpy 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="233">233</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/233.png"></td>
            <td>多边兽Ⅱ</td>
            <td>Porygon2</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Porygon 进化（使用Item: Up-Grade）</td>
        </tr>
        <tr>
            <td id="234">234</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/234.png"></td>
            <td>惊角鹿</td>
            <td>Stantler</td>
            <td>铠岛 3（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="235">235</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/235.png"></td>
            <td>图图犬</td>
            <td>Smeargle</td>
            <td>铠岛 3（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="236">236</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/236.png"></td>
            <td>无畏小子</td>
            <td>Tyrogue</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="237">237</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/237.png"></td>
            <td>战舞郎</td>
            <td>Hitmontop</td>
            <td>进化方式：由 Tyrogue 进化（等级 Up: Attack = Defense + 等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="238">238</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/238.png"></td>
            <td>迷唇娃</td>
            <td>Smoochum</td>
            <td></td>
        </tr>
        <tr>
            <td id="239">239</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/239.png"></td>
            <td>电击怪</td>
            <td>Elekid</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="240">240</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/240.png"></td>
            <td>鸭嘴宝宝</td>
            <td>Magby</td>
            <td></td>
        </tr>
        <tr>
            <td id="241">241</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/241.png"></td>
            <td>大奶罐</td>
            <td>Miltank</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：4；旷野地带 6 East（草丛）；遭遇概率：4；铠岛 6（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="242">242</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/242.png"></td>
            <td>幸福蛋</td>
            <td>Blissey</td>
            <td>进化方式：由 Chansey 进化（等级 Up: Happiness + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="243">243</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/243.png"></td>
            <td>雷公</td>
            <td>Raikou</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="244">244</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/244.png"></td>
            <td>炎帝</td>
            <td>Entei</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="245">245</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/245.png"></td>
            <td>水君</td>
            <td>Suicune</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="246">246</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/246.png"></td>
            <td>幼基拉斯</td>
            <td>Larvitar</td>
            <td>机擎市 East（草丛）；遭遇概率：1；旷野地带 3 North（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="247">247</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/247.png"></td>
            <td>沙基拉斯</td>
            <td>Pupitar</td>
            <td>进化方式：由 Larvitar 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="248">248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班基拉斯</td>
            <td>Mega Tyranitar</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="248">248</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/248.png"></td>
            <td>班基拉斯</td>
            <td>Tyranitar</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：4；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Tanoby Key (冠之雪原)（草丛）；遭遇概率：1；进化方式：由 Pupitar 进化（升级至等级 55）</td>
        </tr>
        <tr>
            <td id="249">249</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/249.png"></td>
            <td>洛奇亚</td>
            <td>Lugia</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="250">250</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/250.png"></td>
            <td>凤王</td>
            <td>Ho Oh</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="251">251</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/251.png"></td>
            <td>时拉比</td>
            <td>Celebi</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="252">252</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/252.png"></td>
            <td>木守宫</td>
            <td>Treecko</td>
            <td>旷野地带 1 Northeast（游戏内交换）：通信交换 Girafarig for Treecko；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="253">253</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/253.png"></td>
            <td>森林蜥蜴</td>
            <td>Grovyle</td>
            <td>进化方式：由 Treecko 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="254">254</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/254.png"></td>
            <td>蜥蜴王</td>
            <td>Mega Sceptile</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="254">254</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/254.png"></td>
            <td>蜥蜴王</td>
            <td>Sceptile</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Grovyle 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="255">255</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/255.png"></td>
            <td>火稚鸡</td>
            <td>Torchic</td>
            <td>机擎市（游戏内交换）：通信交换 Kanto-Diglett for Torchic；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="256">256</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/256.png"></td>
            <td>力壮鸡</td>
            <td>Combusken</td>
            <td>进化方式：由 Torchic 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="257">257</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/257.png"></td>
            <td>火焰鸡</td>
            <td>Blaziken</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Combusken 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="257">257</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/257.png"></td>
            <td>火焰鸡</td>
            <td>Mega Blaziken</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="258">258</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/258.png"></td>
            <td>水跃鱼</td>
            <td>Mudkip</td>
            <td>道路 5（游戏内交换）：通信交换 Thievul for Mudkip；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="259">259</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/259.png"></td>
            <td>沼跃鱼</td>
            <td>Marshtomp</td>
            <td>进化方式：由 Mudkip 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="260">260</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/260.png"></td>
            <td>巨沼怪</td>
            <td>Mega Swampert</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="260">260</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/260.png"></td>
            <td>巨沼怪</td>
            <td>Swampert</td>
            <td>Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Marshtomp 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="261">261</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/261.png"></td>
            <td>土狼犬</td>
            <td>Poochyena</td>
            <td></td>
        </tr>
        <tr>
            <td id="262">262</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/262.png"></td>
            <td>大狼犬</td>
            <td>Mightyena</td>
            <td>铠岛 3（草丛）；遭遇概率：10；进化方式：由 Poochyena 进化（升级至等级 18）</td>
        </tr>
        <tr>
            <td id="263">263</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263.png"></td>
            <td>蛇纹熊</td>
            <td>Zigzagoon Galarian</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 2（明雷遭遇）；遭遇概率：100；道路 3（明雷遭遇）；遭遇概率：100；旷野地带 8 (Spooky)（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="263">263</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/263.png"></td>
            <td>蛇纹熊</td>
            <td>Zigzagoon</td>
            <td></td>
        </tr>
        <tr>
            <td id="264">264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264.png"></td>
            <td>直冲熊</td>
            <td>Linoone Galarian</td>
            <td>进化方式：由 Zigzagoon-Galar 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="264">264</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/264.png"></td>
            <td>直冲熊</td>
            <td>Linoone</td>
            <td>铠岛 3（草丛）；遭遇概率：10；进化方式：由 Zigzagoon 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="265">265</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/265.png"></td>
            <td>刺尾虫</td>
            <td>Wurmple</td>
            <td></td>
        </tr>
        <tr>
            <td id="266">266</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/266.png"></td>
            <td>甲壳茧</td>
            <td>Silcoon</td>
            <td>进化方式：由 Wurmple 进化（升级至等级 7）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="267">267</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/267.png"></td>
            <td>狩猎凤蝶</td>
            <td>Beautifly</td>
            <td>铠岛 3（草丛）；遭遇概率：10；进化方式：由 Silcoon 进化（升级至等级 10）</td>
        </tr>
        <tr>
            <td id="268">268</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/268.png"></td>
            <td>盾甲茧</td>
            <td>Cascoon</td>
            <td>进化方式：由 Wurmple 进化（升级至等级 7）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="269">269</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/269.png"></td>
            <td>毒粉蛾</td>
            <td>Dustox</td>
            <td>旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：10；铠岛 3（草丛）；遭遇概率：5；进化方式：由 Cascoon 进化（升级至等级 10）</td>
        </tr>
        <tr>
            <td id="270">270</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/270.png"></td>
            <td>莲叶童子</td>
            <td>Lotad</td>
            <td>道路 2（草丛）；遭遇概率：20；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Northwest（草丛）；遭遇概率：10；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="271">271</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/271.png"></td>
            <td>莲帽小童</td>
            <td>Lombre</td>
            <td>道路 5（草丛）；遭遇概率：5；进化方式：由 Lotad 进化（升级至等级 14）</td>
        </tr>
        <tr>
            <td id="272">272</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/272.png"></td>
            <td>乐天河童</td>
            <td>Ludicolo</td>
            <td>进化方式：由 Lombre 进化（使用Item: Water Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="273">273</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/273.png"></td>
            <td>橡实果</td>
            <td>Seedot</td>
            <td>道路 2（草丛）；遭遇概率：20；旷野地带 1 Southwest（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="274">274</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/274.png"></td>
            <td>长鼻叶</td>
            <td>Nuzleaf</td>
            <td>道路 5（草丛）；遭遇概率：5；进化方式：由 Seedot 进化（升级至等级 14）</td>
        </tr>
        <tr>
            <td id="275">275</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/275.png"></td>
            <td>狡猾天狗</td>
            <td>Shiftry</td>
            <td>进化方式：由 Nuzleaf 进化（使用Item: Leaf Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="276">276</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/276.png"></td>
            <td>傲骨燕</td>
            <td>Taillow</td>
            <td>旷野地带 1 Southwest（明雷遭遇）；遭遇概率：100；旷野地带 4 West（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="277">277</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/277.png"></td>
            <td>大王燕</td>
            <td>Swellow</td>
            <td>进化方式：由 Taillow 进化（升级至等级 22）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="278">278</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/278.png"></td>
            <td>长翅鸥</td>
            <td>Wingull</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="279">279</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/279.png"></td>
            <td>大嘴鸥</td>
            <td>Pelipper</td>
            <td>旷野地带 6 East（Surf）；遭遇概率：20；道路 9（草丛）；遭遇概率：5；道路 9（Surf）；遭遇概率：20；铠岛 1（明雷遭遇）；遭遇概率：100；铠岛 2（明雷遭遇）；遭遇概率：100；铠岛 5（明雷遭遇）；遭遇概率：100；铠岛 9（明雷遭遇）；遭遇概率：100；进化方式：由 Wingull 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="280">280</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/280.png"></td>
            <td>拉鲁拉丝</td>
            <td>Ralts</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Northwest（草丛）；遭遇概率：10；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="281">281</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/281.png"></td>
            <td>奇鲁莉安</td>
            <td>Kirlia</td>
            <td>进化方式：由 Ralts 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="282">282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>Gardevoir</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Kirlia 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="282">282</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/282.png"></td>
            <td>沙奈朵</td>
            <td>Mega Gardevoir</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="283">283</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/283.png"></td>
            <td>溜溜糖球</td>
            <td>Surskit</td>
            <td></td>
        </tr>
        <tr>
            <td id="284">284</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/284.png"></td>
            <td>雨翅蛾</td>
            <td>Masquerain</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；铠岛 3（草丛）；遭遇概率：5；进化方式：由 Surskit 进化（升级至等级 22）</td>
        </tr>
        <tr>
            <td id="285">285</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/285.png"></td>
            <td>蘑蘑菇</td>
            <td>Shroomish</td>
            <td></td>
        </tr>
        <tr>
            <td id="286">286</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/286.png"></td>
            <td>斗笠菇</td>
            <td>Breloom</td>
            <td>铠岛 3（草丛）；遭遇概率：4；进化方式：由 Shroomish 进化（升级至等级 23）</td>
        </tr>
        <tr>
            <td id="287">287</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/287.png"></td>
            <td>懒人獭</td>
            <td>Slakoth</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="288">288</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/288.png"></td>
            <td>过动猿</td>
            <td>Vigoroth</td>
            <td>进化方式：由 Slakoth 进化（升级至等级 18）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="289">289</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/289.png"></td>
            <td>请假王</td>
            <td>Slaking</td>
            <td>进化方式：由 Vigoroth 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="290">290</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/290.png"></td>
            <td>土居忍士</td>
            <td>Nincada</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：10；道路 5（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="291">291</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/291.png"></td>
            <td>铁面忍者</td>
            <td>Ninjask</td>
            <td>进化方式：由 Nincada 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="292">292</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/292.png"></td>
            <td>脱壳忍者</td>
            <td>Shedinja</td>
            <td>旷野地带 5 (Desert) South（草丛）；遭遇概率：1；进化方式：由 Nincada 进化（使用Item: Dusk Stone）</td>
        </tr>
        <tr>
            <td id="293">293</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/293.png"></td>
            <td>咕妞妞</td>
            <td>Whismur</td>
            <td></td>
        </tr>
        <tr>
            <td id="294">294</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/294.png"></td>
            <td>吼爆弹</td>
            <td>Loudred</td>
            <td>铠岛 3（草丛）；遭遇概率：4；进化方式：由 Whismur 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="295">295</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/295.png"></td>
            <td>爆音怪</td>
            <td>Exploud</td>
            <td>进化方式：由 Loudred 进化（升级至等级 40）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="296">296</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/296.png"></td>
            <td>幕下力士</td>
            <td>Makuhita</td>
            <td></td>
        </tr>
        <tr>
            <td id="297">297</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/297.png"></td>
            <td>铁掌力士</td>
            <td>Hariyama</td>
            <td>铠岛 3（草丛）；遭遇概率：1；进化方式：由 Makuhita 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="298">298</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/298.png"></td>
            <td>露力丽</td>
            <td>Azurill</td>
            <td></td>
        </tr>
        <tr>
            <td id="299">299</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/299.png"></td>
            <td>朝北鼻</td>
            <td>Nosepass</td>
            <td>旷野地带 5 (Desert) North（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="300">300</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/300.png"></td>
            <td>向尾喵</td>
            <td>Skitty</td>
            <td></td>
        </tr>
        <tr>
            <td id="301">301</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/301.png"></td>
            <td>优雅猫</td>
            <td>Delcatty</td>
            <td>铠岛 3（草丛）；遭遇概率：1；进化方式：由 Skitty 进化（使用Item: Moon Stone）</td>
        </tr>
        <tr>
            <td id="302">302</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>Mega Sableye</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="302">302</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/302.png"></td>
            <td>勾魂眼</td>
            <td>Sableye</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：20；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="303">303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>Mawile</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：1；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；道路 10（草丛）；遭遇概率：10；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="303">303</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/303.png"></td>
            <td>大嘴娃</td>
            <td>Mega Mawile</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：3.2</td>
        </tr>
        <tr>
            <td id="304">304</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/304.png"></td>
            <td>可可多拉</td>
            <td>Aron</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="305">305</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/305.png"></td>
            <td>可多拉</td>
            <td>Lairon</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Aron 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="306">306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/306.png"></td>
            <td>波士可多拉</td>
            <td>Aggron</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Lairon 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="306">306</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/306.png"></td>
            <td>波士可多拉</td>
            <td>Mega Aggron</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：3.2</td>
        </tr>
        <tr>
            <td id="307">307</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/307.png"></td>
            <td>玛沙那</td>
            <td>Meditite</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="308">308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/308.png"></td>
            <td>恰雷姆</td>
            <td>Medicham</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Meditite 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="308">308</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/308.png"></td>
            <td>恰雷姆</td>
            <td>Mega Medicham</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="309">309</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/309.png"></td>
            <td>落雷兽</td>
            <td>Electrike</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：5；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="310">310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>Manectric</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Electrike 进化（升级至等级 26）</td>
        </tr>
        <tr>
            <td id="310">310</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/310.png"></td>
            <td>雷电兽</td>
            <td>Mega Manectric</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="311">311</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/311.png"></td>
            <td>正电拍拍</td>
            <td>Plusle</td>
            <td>铠岛 4（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="312">312</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/312.png"></td>
            <td>负电拍拍</td>
            <td>Minun</td>
            <td>铠岛 4（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="313">313</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/313.png"></td>
            <td>电萤虫</td>
            <td>Volbeat</td>
            <td>铠岛 4（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="314">314</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/314.png"></td>
            <td>甜甜萤</td>
            <td>Illumise</td>
            <td>铠岛 4（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="315">315</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/315.png"></td>
            <td>毒蔷薇</td>
            <td>Roselia</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Budew 进化（等级 Up: Happiness + Daytime + 等级 Up）</td>
        </tr>
        <tr>
            <td id="316">316</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/316.png"></td>
            <td>溶食兽</td>
            <td>Gulpin</td>
            <td></td>
        </tr>
        <tr>
            <td id="317">317</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/317.png"></td>
            <td>吞食兽</td>
            <td>Swalot</td>
            <td>铠岛 4（草丛）；遭遇概率：10；进化方式：由 Gulpin 进化（升级至等级 26）</td>
        </tr>
        <tr>
            <td id="318">318</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/318.png"></td>
            <td>利牙鱼</td>
            <td>Carvanha</td>
            <td>旷野地带 1 Southwest（Surf）；遭遇概率：20；旷野地带 1 Northwest（Surf）；遭遇概率：20；旷野地带 1 Northwest（钓鱼   Good Rod）；遭遇概率：33；旷野地带 4 East（Surf）；遭遇概率：40</td>
        </tr>
        <tr>
            <td id="319">319</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/319.png"></td>
            <td>巨牙鲨</td>
            <td>Meag Sharpedo</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="319">319</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/319.png"></td>
            <td>巨牙鲨</td>
            <td>Mega Sharpedo</td>
            <td></td>
        </tr>
        <tr>
            <td id="319">319</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/319.png"></td>
            <td>巨牙鲨</td>
            <td>Sharpedo</td>
            <td>旷野地带 6 East（钓鱼   Good Rod）；遭遇概率：33；旷野地带 9 (Dragon)（Surf）；遭遇概率：20；旷野地带 9 (Dragon)（钓鱼   Old Rod）；遭遇概率：50；旷野地带 9 (Dragon)（明雷遭遇）；遭遇概率：100；铠岛 1（明雷遭遇）；遭遇概率：100；铠岛 2（明雷遭遇）；遭遇概率：100；铠岛 3（明雷遭遇）；遭遇概率：100；铠岛 5（明雷遭遇）；遭遇概率：100；铠岛 7（明雷遭遇）；遭遇概率：100；铠岛 9（明雷遭遇）；遭遇概率：100；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Carvanha 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="320">320</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/320.png"></td>
            <td>吼吼鲸</td>
            <td>Wailmer</td>
            <td>旷野地带 3 North（Surf）；遭遇概率：20；旷野地带 3 North（钓鱼   Good Rod）；遭遇概率：33</td>
        </tr>
        <tr>
            <td id="321">321</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/321.png"></td>
            <td>吼鲸王</td>
            <td>Wailord</td>
            <td>旷野地带 7 (Ice) East（钓鱼   Good Rod）；遭遇概率：33；道路 9（Surf）；遭遇概率：20；旷野地带 9 (Dragon)（钓鱼   Old Rod）；遭遇概率：50；铠岛 2（明雷遭遇）；遭遇概率：100；铠岛 3（明雷遭遇）；遭遇概率：100；铠岛 7（明雷遭遇）；遭遇概率：100；冠之雪原 Snowy East（明雷遭遇）；遭遇概率：100；进化方式：由 Wailmer 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="322">322</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/322.png"></td>
            <td>呆火驼</td>
            <td>Numel</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="323">323</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/323.png"></td>
            <td>喷火驼</td>
            <td>Camerupt</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Numel 进化（升级至等级 33）</td>
        </tr>
        <tr>
            <td id="323">323</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/323.png"></td>
            <td>喷火驼</td>
            <td>Mega Camerupt</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="324">324</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/324.png"></td>
            <td>煤炭龟</td>
            <td>Torkoal</td>
            <td>Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：14</td>
        </tr>
        <tr>
            <td id="325">325</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/325.png"></td>
            <td>跳跳猪</td>
            <td>Spoink</td>
            <td></td>
        </tr>
        <tr>
            <td id="326">326</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/326.png"></td>
            <td>噗噗猪</td>
            <td>Grumpig</td>
            <td>铠岛 4（草丛）；遭遇概率：10；进化方式：由 Spoink 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="327">327</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/327.png"></td>
            <td>晃晃斑</td>
            <td>Spinda</td>
            <td>铠岛 4（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="328">328</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/328.png"></td>
            <td>大颚蚁</td>
            <td>Trapinch</td>
            <td>道路 6（草丛）；遭遇概率：10；旷野地带 5 (Desert) North（草丛）；遭遇概率：10；旷野地带 5 (Desert) North（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) South（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="329">329</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/329.png"></td>
            <td>超音波幼虫</td>
            <td>Vibrava</td>
            <td>道路 6（草丛）；遭遇概率：1；旷野地带 5 (Desert) South（草丛）；遭遇概率：10；进化方式：由 Trapinch 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="330">330</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/330.png"></td>
            <td>沙漠蜻蜓</td>
            <td>Flygon</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：4；进化方式：由 Vibrava 进化（升级至等级 45）</td>
        </tr>
        <tr>
            <td id="331">331</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/331.png"></td>
            <td>刺球仙人掌</td>
            <td>Cacnea</td>
            <td></td>
        </tr>
        <tr>
            <td id="332">332</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/332.png"></td>
            <td>梦歌仙人掌</td>
            <td>Cacturne</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：4；进化方式：由 Cacnea 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="333">333</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/333.png"></td>
            <td>青绵鸟</td>
            <td>Swablu</td>
            <td></td>
        </tr>
        <tr>
            <td id="334">334</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/334.png"></td>
            <td>七夕青鸟</td>
            <td>Altaria</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（草丛）；遭遇概率：10；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Freezington (冠之雪原)（草丛）；遭遇概率：4；冠之雪原 草丛y East（草丛）；遭遇概率：5；进化方式：由 Swablu 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="334">334</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/334.png"></td>
            <td>七夕青鸟</td>
            <td>Mega Altaria</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="335">335</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/335.png"></td>
            <td>猫鼬斩</td>
            <td>Zangoose</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="336">336</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/336.png"></td>
            <td>饭匙蛇</td>
            <td>Seviper</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="337">337</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/337.png"></td>
            <td>月石</td>
            <td>Lunatone</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：1；道路 8（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="338">338</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/338.png"></td>
            <td>太阳岩</td>
            <td>Solrock</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：4；道路 8（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="339">339</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/339.png"></td>
            <td>泥泥鳅</td>
            <td>Barboach</td>
            <td>Galar Mine 2（钓鱼   Good Rod）；遭遇概率：33；旷野地带 4 East（钓鱼   Old Rod）；遭遇概率：100；旷野地带 4 East（钓鱼   Good Rod）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="340">340</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/340.png"></td>
            <td>鲶鱼王</td>
            <td>Whiscash</td>
            <td>旷野地带 4 East（钓鱼   Super Rod）；遭遇概率：100；进化方式：由 Barboach 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="341">341</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/341.png"></td>
            <td>龙虾小兵</td>
            <td>Corphish</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="342">342</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/342.png"></td>
            <td>铁螯龙虾</td>
            <td>Crawdaunt</td>
            <td>进化方式：由 Corphish 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="343">343</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/343.png"></td>
            <td>天秤偶</td>
            <td>Baltoy</td>
            <td>旷野地带 5 (Desert) South（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="344">344</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/344.png"></td>
            <td>念力土偶</td>
            <td>Claydol</td>
            <td>旷野地带 5 (Desert) North（草丛）；遭遇概率：5；冠之雪原 草丛y East（草丛）；遭遇概率：10；Tree Base (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Baltoy 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="345">345</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/345.png"></td>
            <td>触手百合</td>
            <td>Lileep</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="346">346</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/346.png"></td>
            <td>摇篮百合</td>
            <td>Cradily</td>
            <td>Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：10；Tanoby Key (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Lileep 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="347">347</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/347.png"></td>
            <td>太古羽虫</td>
            <td>Anorith</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="348">348</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/348.png"></td>
            <td>太古盔甲</td>
            <td>Armaldo</td>
            <td>Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：10；Tanoby Key (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Anorith 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="349">349</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/349.png"></td>
            <td>丑丑鱼</td>
            <td>Feebas</td>
            <td>旷野地带 1 Southwest（Surf）；遭遇概率：20；旷野地带 1 Northwest（钓鱼   Super Rod）；遭遇概率：20；Galar Mine 2（钓鱼   Old Rod）；遭遇概率：50；旷野地带 3 North（钓鱼   Super Rod）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="350">350</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/350.png"></td>
            <td>美纳斯</td>
            <td>Milotic</td>
            <td>旷野地带 1 Southwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 6 East（钓鱼   Old Rod）；遭遇概率：50；旷野地带 9 (Dragon)（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Feebas 进化（使用Item: Prism Scale）</td>
        </tr>
        <tr>
            <td id="351">351</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/351.png"></td>
            <td>飘浮泡泡</td>
            <td>Castform</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；铠岛 6（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="352">352</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/352.png"></td>
            <td>变隐龙</td>
            <td>Kecleon</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="353">353</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/353.png"></td>
            <td>怨影娃娃</td>
            <td>Shuppet</td>
            <td></td>
        </tr>
        <tr>
            <td id="354">354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/354.png"></td>
            <td>诅咒娃娃</td>
            <td>Banette</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：10；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Shuppet 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="354">354</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/354.png"></td>
            <td>诅咒娃娃</td>
            <td>Mega Banette</td>
            <td></td>
        </tr>
        <tr>
            <td id="355">355</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/355.png"></td>
            <td>夜巡灵</td>
            <td>Duskull</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：1；旷野地带 3 North（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="356">356</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/356.png"></td>
            <td>彷徨夜灵</td>
            <td>Dusclops</td>
            <td>道路 8（草丛）；遭遇概率：10；进化方式：由 Duskull 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="357">357</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/357.png"></td>
            <td>热带龙</td>
            <td>Tropius</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="358">358</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/358.png"></td>
            <td>风铃铃</td>
            <td>Chimecho</td>
            <td>铠岛 4（草丛）；遭遇概率：5；进化方式：由 Chingling 进化（等级 Up: Happiness + Nighttime + 等级 Up）</td>
        </tr>
        <tr>
            <td id="359">359</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/359.png"></td>
            <td>阿勃梭鲁</td>
            <td>Absol</td>
            <td>旷野地带 7 (Ice) West（草丛）；遭遇概率：6；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；冠之雪原 Snowy East（草丛）；遭遇概率：4；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="359">359</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/359.png"></td>
            <td>阿勃梭鲁</td>
            <td>Mega Absol</td>
            <td></td>
        </tr>
        <tr>
            <td id="360">360</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/360.png"></td>
            <td>小果然</td>
            <td>Wynaut</td>
            <td></td>
        </tr>
        <tr>
            <td id="361">361</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/361.png"></td>
            <td>雪童子</td>
            <td>Snorunt</td>
            <td>道路 8 (Snow)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="362">362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>Glalie</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：10；道路 10（草丛）；遭遇概率：10；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Freezington (冠之雪原)（草丛）；遭遇概率：1；进化方式：由 Snorunt 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="362">362</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/362.png"></td>
            <td>冰鬼护</td>
            <td>Mega Glalie</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="363">363</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/363.png"></td>
            <td>海豹球</td>
            <td>Spheal</td>
            <td></td>
        </tr>
        <tr>
            <td id="364">364</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/364.png"></td>
            <td>海魔狮</td>
            <td>Sealeo</td>
            <td>进化方式：由 Spheal 进化（升级至等级 32）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="365">365</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/365.png"></td>
            <td>帝牙海狮</td>
            <td>Walrein</td>
            <td>旷野地带 7 (Ice) East（Surf）；遭遇概率：20；旷野地带 7 (Ice) West（Surf）；遭遇概率：20；进化方式：由 Sealeo 进化（升级至等级 44）</td>
        </tr>
        <tr>
            <td id="366">366</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/366.png"></td>
            <td>珍珠贝</td>
            <td>Clamperl</td>
            <td></td>
        </tr>
        <tr>
            <td id="367">367</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/367.png"></td>
            <td>猎斑鱼</td>
            <td>Huntail</td>
            <td>铠岛 6（Surf）；遭遇概率：60；进化方式：由 Clamperl 进化（使用Item: Deep Sea Tooth）</td>
        </tr>
        <tr>
            <td id="368">368</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/368.png"></td>
            <td>樱花鱼</td>
            <td>Gorebyss</td>
            <td>铠岛 5（Surf）；遭遇概率：100；进化方式：由 Clamperl 进化（使用Item: Deep Sea Scale）</td>
        </tr>
        <tr>
            <td id="369">369</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/369.png"></td>
            <td>古空棘鱼</td>
            <td>Relicanth</td>
            <td>旷野地带 7 (Ice) East（Surf）；遭遇概率：20；旷野地带 7 (Ice) East（钓鱼   Good Rod）；遭遇概率：33；旷野地带 7 (Ice) West（Surf）；遭遇概率：20；冠之雪原 Snowy East（Surf）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="370">370</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/370.png"></td>
            <td>爱心鱼</td>
            <td>Luvdisc</td>
            <td>铠岛 4（Surf）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="371">371</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/371.png"></td>
            <td>宝贝龙</td>
            <td>Bagon</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；机擎市 East（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="372">372</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/372.png"></td>
            <td>甲壳龙</td>
            <td>Shelgon</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：10；进化方式：由 Bagon 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="373">373</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/373.png"></td>
            <td>暴飞龙</td>
            <td>Mega Salamence</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="373">373</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/373.png"></td>
            <td>暴飞龙</td>
            <td>Salamence</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：14；进化方式：由 Shelgon 进化（升级至等级 50）</td>
        </tr>
        <tr>
            <td id="374">374</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/374.png"></td>
            <td>铁哑铃</td>
            <td>Beldum</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="375">375</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/375.png"></td>
            <td>金属怪</td>
            <td>Metang</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：10；进化方式：由 Beldum 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="376">376</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/376.png"></td>
            <td>巨金怪</td>
            <td>Mega Metagross</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="376">376</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/376.png"></td>
            <td>巨金怪</td>
            <td>Metagross</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；冠之雪原 Snowy East（草丛）；遭遇概率：20；进化方式：由 Metang 进化（升级至等级 45）</td>
        </tr>
        <tr>
            <td id="377">377</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/377.png"></td>
            <td>雷吉洛克</td>
            <td>Regirock</td>
            <td>冠之雪原 草丛y East（Legendary）：Bring an Everstone to the door of the temple.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="378">378</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/378.png"></td>
            <td>雷吉艾斯</td>
            <td>Regice</td>
            <td>Resting Spot Entrance (冠之雪原)（Legendary）：Bring a Nevermeltice to the temple door.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="379">379</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/379.png"></td>
            <td>雷吉斯奇鲁</td>
            <td>Registeel</td>
            <td>冠之雪原 Graveyard（Legendary）：Bring a Metal Coat to the door of the temple.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="380">380</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/380.png"></td>
            <td>拉帝亚斯</td>
            <td>Latias</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="380">380</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/380.png"></td>
            <td>拉帝亚斯</td>
            <td>Mega Latias</td>
            <td></td>
        </tr>
        <tr>
            <td id="381">381</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/381.png"></td>
            <td>拉帝欧斯</td>
            <td>Latios</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="381">381</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/381.png"></td>
            <td>拉帝欧斯</td>
            <td>Mega Latios</td>
            <td></td>
        </tr>
        <tr>
            <td id="382">382</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/382.png"></td>
            <td>盖欧卡</td>
            <td>Kyogre</td>
            <td>旷野地带 7 (Ice) East（Legendary）：Bring Relicanth and Wailord to Dive locations, surf in 旷野地带 6 to encounter Kyogre；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="382">382</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/382.png"></td>
            <td>盖欧卡</td>
            <td>Primal Kyogre</td>
            <td></td>
        </tr>
        <tr>
            <td id="383">383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/383.png"></td>
            <td>固拉多</td>
            <td>Groudon</td>
            <td>旷野地带 3 (Volcano)（Legendary）：Bring Relicanth and Wailord to Dive locations, return to Volcano to encounter Groudon；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="383">383</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/383.png"></td>
            <td>固拉多</td>
            <td>Mega Groudon</td>
            <td></td>
        </tr>
        <tr>
            <td id="384">384</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/384.png"></td>
            <td>烈空坐</td>
            <td>Mega Rayquaza</td>
            <td>Stow-On-Side（Legendary）：Teach Dragon Ascent to Rayquaza in ուրբ；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="384">384</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/384.png"></td>
            <td>烈空坐</td>
            <td>Rayquaza</td>
            <td>Wyndon（Legendary）：Return to Rose Tower after beating 游戏 and beat all 7 trainers and Leon. Walk all the way to the right to encounter Rayquaza.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="385">385</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/385.png"></td>
            <td>基拉祈</td>
            <td>Jirachi</td>
            <td>铠岛 9（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="386">386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/386.png"></td>
            <td>代欧奇希斯</td>
            <td>Deoxys Attack</td>
            <td>Stow-On-Side（Legendary）：Interact with Meteorite with Deoxys to change form；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="386">386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/386.png"></td>
            <td>代欧奇希斯</td>
            <td>Deoxys Defense</td>
            <td>Stow-On-Side（Legendary）：Interact with Meteorite with Deoxys to change form；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="386">386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/386.png"></td>
            <td>代欧奇希斯</td>
            <td>Deoxys Speed</td>
            <td>Stow-On-Side（Legendary）：Interact with Meteorite with Deoxys to change form；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="386">386</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/386.png"></td>
            <td>代欧奇希斯</td>
            <td>Deoxys</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="387">387</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/387.png"></td>
            <td>草苗龟</td>
            <td>Turtwig</td>
            <td>机擎市 East（游戏内交换）：通信交换 Dubwool for Turtwig；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="388">388</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/388.png"></td>
            <td>树林龟</td>
            <td>Grotle</td>
            <td>进化方式：由 Turtwig 进化（升级至等级 18）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="389">389</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/389.png"></td>
            <td>土台龟</td>
            <td>Torterra</td>
            <td>进化方式：由 Grotle 进化（升级至等级 32）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="390">390</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/390.png"></td>
            <td>小火焰猴</td>
            <td>Chimchar</td>
            <td>Galar Mine 2（游戏内交换）：通信交换 Flareon for Chimchar；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="391">391</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/391.png"></td>
            <td>猛火猴</td>
            <td>Monferno</td>
            <td>进化方式：由 Chimchar 进化（升级至等级 14）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="392">392</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/392.png"></td>
            <td>烈焰猴</td>
            <td>Infernape</td>
            <td>进化方式：由 Monferno 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="393">393</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/393.png"></td>
            <td>波加曼</td>
            <td>Piplup</td>
            <td>道路 1（游戏内交换）：通信交换 for Eevee；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="394">394</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/394.png"></td>
            <td>波皇子</td>
            <td>Prinplup</td>
            <td>进化方式：由 Piplup 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="395">395</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/395.png"></td>
            <td>帝王拿波</td>
            <td>Empoleon</td>
            <td>进化方式：由 Prinplup 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="396">396</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/396.png"></td>
            <td>姆克儿</td>
            <td>Starly</td>
            <td></td>
        </tr>
        <tr>
            <td id="397">397</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/397.png"></td>
            <td>姆克鸟</td>
            <td>Staravia</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：5；旷野地带 4 East（草丛）；遭遇概率：20；进化方式：由 Starly 进化（升级至等级 14）</td>
        </tr>
        <tr>
            <td id="398">398</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/398.png"></td>
            <td>姆克鹰</td>
            <td>Staraptor</td>
            <td>进化方式：由 Staravia 进化（升级至等级 34）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="399">399</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/399.png"></td>
            <td>大牙狸</td>
            <td>Bidoof</td>
            <td>道路 2（钓鱼   Old Rod）；遭遇概率：50</td>
        </tr>
        <tr>
            <td id="400">400</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/400.png"></td>
            <td>大尾狸</td>
            <td>Bibarel</td>
            <td>铠岛 4（草丛）；遭遇概率：4；Tree Base (冠之雪原)（Surf）；遭遇概率：100；进化方式：由 Bidoof 进化（升级至等级 15）</td>
        </tr>
        <tr>
            <td id="401">401</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/401.png"></td>
            <td>圆法师</td>
            <td>Kricketot</td>
            <td></td>
        </tr>
        <tr>
            <td id="402">402</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/402.png"></td>
            <td>音箱蟀</td>
            <td>Kricketune</td>
            <td>铠岛 4（草丛）；遭遇概率：4；进化方式：由 Kricketot 进化（升级至等级 10）</td>
        </tr>
        <tr>
            <td id="403">403</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/403.png"></td>
            <td>小猫怪</td>
            <td>Shinx</td>
            <td>道路 3（游戏内交换）：通信交换 Yamper for Shinx；遭遇概率：100；旷野地带 3 North（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="404">404</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/404.png"></td>
            <td>勒克猫</td>
            <td>Luxio</td>
            <td>进化方式：由 Shinx 进化（升级至等级 15）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="405">405</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/405.png"></td>
            <td>伦琴猫</td>
            <td>Luxray</td>
            <td>进化方式：由 Luxio 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="406">406</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/406.png"></td>
            <td>含羞苞</td>
            <td>Budew</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：1；道路 4（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="407">407</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/407.png"></td>
            <td>罗丝雷朵</td>
            <td>Roserade</td>
            <td>进化方式：由 Roselia 进化（使用Item: Shiny Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="408">408</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/408.png"></td>
            <td>头盖龙</td>
            <td>Cranidos</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="409">409</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/409.png"></td>
            <td>战槌龙</td>
            <td>Rampardos</td>
            <td>Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：20；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：4；进化方式：由 Cranidos 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="410">410</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/410.png"></td>
            <td>盾甲龙</td>
            <td>Shieldon</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="411">411</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/411.png"></td>
            <td>护城龙</td>
            <td>Bastiodon</td>
            <td>Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：10；进化方式：由 Shieldon 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="412">412</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/412.png"></td>
            <td>结草儿</td>
            <td>Burmy Sandy</td>
            <td></td>
        </tr>
        <tr>
            <td id="412">412</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/412.png"></td>
            <td>结草儿</td>
            <td>Burmy Trash</td>
            <td></td>
        </tr>
        <tr>
            <td id="412">412</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/412.png"></td>
            <td>结草儿</td>
            <td>Burmy</td>
            <td>铠岛 4（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="413">413</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/413.png"></td>
            <td>结草贵妇</td>
            <td>Wormadam Sandy</td>
            <td></td>
        </tr>
        <tr>
            <td id="413">413</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/413.png"></td>
            <td>结草贵妇</td>
            <td>Wormadam Trash</td>
            <td></td>
        </tr>
        <tr>
            <td id="413">413</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/413.png"></td>
            <td>结草贵妇</td>
            <td>Wormadam</td>
            <td>进化方式：由 Burmy 进化（等级 Up: Female + 等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="414">414</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/414.png"></td>
            <td>绅士蛾</td>
            <td>Mothim</td>
            <td>进化方式：由 Burmy 进化（等级 Up: Male + 等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="415">415</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/415.png"></td>
            <td>三蜜蜂</td>
            <td>Combee</td>
            <td>旷野地带 1 Southeast（明雷遭遇）；遭遇概率：100；旷野地带 1 Northeast（草丛）；遭遇概率：5；旷野地带 1 Northeast（明雷遭遇）；遭遇概率：100；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="416">416</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/416.png"></td>
            <td>蜂女王</td>
            <td>Vespiquen</td>
            <td>旷野地带 1 Northeast（明雷遭遇）；遭遇概率：100；旷野地带 3 South（明雷遭遇）；遭遇概率：100；旷野地带 6 East（草丛）；遭遇概率：10；进化方式：由 Combee 进化（等级 Up: Female + 等级 21）</td>
        </tr>
        <tr>
            <td id="417">417</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/417.png"></td>
            <td>帕奇利兹</td>
            <td>Pachirisu</td>
            <td>铠岛 5（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="418">418</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/418.png"></td>
            <td>泳圈鼬</td>
            <td>Buizel</td>
            <td>旷野地带 3 North（Surf）；遭遇概率：20；旷野地带 3 North（钓鱼   Good Rod）；遭遇概率：33</td>
        </tr>
        <tr>
            <td id="419">419</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/419.png"></td>
            <td>浮潜鼬</td>
            <td>Floatzel</td>
            <td>进化方式：由 Buizel 进化（升级至等级 26）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="420">420</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/420.png"></td>
            <td>樱花宝</td>
            <td>Cherubi</td>
            <td>道路 3（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="421">421</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/421.png"></td>
            <td>樱花儿</td>
            <td>Cherrim</td>
            <td>铠岛 5（草丛）；遭遇概率：20；进化方式：由 Cherubi 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="422">422</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/422.png"></td>
            <td>无壳海兔</td>
            <td>Shellos</td>
            <td>旷野地带 1 Southwest（Surf）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="423">423</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/423.png"></td>
            <td>海兔兽</td>
            <td>Gastrodon</td>
            <td>道路 9（草丛）；遭遇概率：10；铠岛 5（草丛）；遭遇概率：20；进化方式：由 Shellos 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="424">424</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/424.png"></td>
            <td>双尾怪手</td>
            <td>Ambipom</td>
            <td>进化方式：由 Aipom 进化（等级 Up: Learn Double Hit (等级 32) + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="425">425</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/425.png"></td>
            <td>飘飘球</td>
            <td>Drifloon</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="426">426</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/426.png"></td>
            <td>随风球</td>
            <td>Drifblim</td>
            <td>进化方式：由 Drifloon 进化（升级至等级 28）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="427">427</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/427.png"></td>
            <td>卷卷耳</td>
            <td>Buneary</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="428">428</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/428.png"></td>
            <td>长耳兔</td>
            <td>Lopunny</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Buneary 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="428">428</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/428.png"></td>
            <td>长耳兔</td>
            <td>Mega Lopunny</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="429">429</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/429.png"></td>
            <td>梦妖魔</td>
            <td>Mismagius</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：4；进化方式：由 Misdreavus 进化（使用Item: Dusk Stone）</td>
        </tr>
        <tr>
            <td id="430">430</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/430.png"></td>
            <td>乌鸦头头</td>
            <td>Honchkrow</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：10；进化方式：由 Murkrow 进化（使用Item: Dusk Stone）</td>
        </tr>
        <tr>
            <td id="431">431</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/431.png"></td>
            <td>魅力喵</td>
            <td>Glameow</td>
            <td></td>
        </tr>
        <tr>
            <td id="432">432</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/432.png"></td>
            <td>东施喵</td>
            <td>Purugly</td>
            <td>铠岛 5（草丛）；遭遇概率：10；进化方式：由 Glameow 进化（升级至等级 38）</td>
        </tr>
        <tr>
            <td id="433">433</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/433.png"></td>
            <td>铃铛响</td>
            <td>Chingling</td>
            <td></td>
        </tr>
        <tr>
            <td id="434">434</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/434.png"></td>
            <td>臭鼬噗</td>
            <td>Stunky</td>
            <td></td>
        </tr>
        <tr>
            <td id="435">435</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/435.png"></td>
            <td>坦克臭鼬</td>
            <td>Skuntank</td>
            <td>铠岛 5（草丛）；遭遇概率：10；进化方式：由 Stunky 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="436">436</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/436.png"></td>
            <td>铜镜怪</td>
            <td>Bronzor</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：10；旷野地带 3 (Volcano)（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="437">437</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/437.png"></td>
            <td>青铜钟</td>
            <td>Bronzong</td>
            <td>道路 8（草丛）；遭遇概率：10；冠之雪原 Graveyard（草丛）；遭遇概率：10；冠之雪原 草丛y East（草丛）；遭遇概率：20；Tree Base (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Bronzor 进化（升级至等级 33）</td>
        </tr>
        <tr>
            <td id="438">438</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/438.png"></td>
            <td>盆才怪</td>
            <td>Bonsly</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="439">439</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/439.png"></td>
            <td>魔尼尼</td>
            <td>Mime Jr</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="440">440</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/440.png"></td>
            <td>小福蛋</td>
            <td>Happiny</td>
            <td></td>
        </tr>
        <tr>
            <td id="441">441</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/441.png"></td>
            <td>聒噪鸟</td>
            <td>Chatot</td>
            <td>铠岛 5（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="442">442</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/442.png"></td>
            <td>花岩怪</td>
            <td>Spiritomb</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="443">443</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/443.png"></td>
            <td>圆陆鲨</td>
            <td>Gible</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：10；旷野地带 3 (Volcano)（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="444">444</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/444.png"></td>
            <td>尖牙陆鲨</td>
            <td>Gabite</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Gible 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="445">445</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/445.png"></td>
            <td>烈咬陆鲨</td>
            <td>Garchomp</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：5；进化方式：由 Gabite 进化（升级至等级 48）</td>
        </tr>
        <tr>
            <td id="445">445</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/445.png"></td>
            <td>烈咬陆鲨</td>
            <td>Mega Garchomp</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：3.2</td>
        </tr>
        <tr>
            <td id="446">446</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/446.png"></td>
            <td>小卡比兽</td>
            <td>Munchlax</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="447">447</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/447.png"></td>
            <td>利欧路</td>
            <td>Riolu</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 5（草丛）；遭遇概率：1；旷野地带 3 West（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="448">448</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>Lucario</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Tanoby Key (冠之雪原)（草丛）；遭遇概率：5；进化方式：由 Riolu 进化（等级 Up: Happiness + Daytime + 等级 Up）</td>
        </tr>
        <tr>
            <td id="448">448</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/448.png"></td>
            <td>路卡利欧</td>
            <td>Mega Lucario</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="449">449</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/449.png"></td>
            <td>沙河马</td>
            <td>Hippopotas</td>
            <td>Galar Mine 1（草丛）；遭遇概率：10；Galar Mine 2（草丛）；遭遇概率：10；道路 6（草丛）；遭遇概率：4；旷野地带 5 (Desert) North（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="450">450</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/450.png"></td>
            <td>河马兽</td>
            <td>Hippowdon</td>
            <td>旷野地带 5 (Desert) South（草丛）；遭遇概率：10；道路 8（草丛）；遭遇概率：10；进化方式：由 Hippopotas 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="451">451</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/451.png"></td>
            <td>钳尾蝎</td>
            <td>Skorupi</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="452">452</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/452.png"></td>
            <td>龙王蝎</td>
            <td>Drapion</td>
            <td>进化方式：由 Skorupi 进化（升级至等级 40）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="453">453</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/453.png"></td>
            <td>不良蛙</td>
            <td>Croagunk</td>
            <td>旷野地带 1 Northeast（草丛）；遭遇概率：4；Galar Mine 2（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="454">454</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/454.png"></td>
            <td>毒骷蛙</td>
            <td>Toxicroak</td>
            <td>铠岛 6（草丛）；遭遇概率：5；进化方式：由 Croagunk 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="455">455</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/455.png"></td>
            <td>尖牙笼</td>
            <td>Carnivine</td>
            <td>铠岛 5（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="456">456</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/456.png"></td>
            <td>荧光鱼</td>
            <td>Finneon</td>
            <td>铠岛 1（Surf）；遭遇概率：20；铠岛 2（Surf）；遭遇概率：40</td>
        </tr>
        <tr>
            <td id="457">457</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/457.png"></td>
            <td>霓虹鱼</td>
            <td>Lumineon</td>
            <td>铠岛 2（Surf）；遭遇概率：40；进化方式：由 Finneon 进化（升级至等级 31）</td>
        </tr>
        <tr>
            <td id="458">458</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/458.png"></td>
            <td>小球飞鱼</td>
            <td>Mantyke</td>
            <td></td>
        </tr>
        <tr>
            <td id="459">459</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/459.png"></td>
            <td>雪笠怪</td>
            <td>Snover</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：5；旷野地带 7 (Ice) East（明雷遭遇）；遭遇概率：100；旷野地带 7 (Ice) West（明雷遭遇）；遭遇概率：100；道路 8 (Snow)（草丛）；遭遇概率：10；道路 8 (Snow)（明雷遭遇）；遭遇概率：100；道路 10（草丛）；遭遇概率：10；道路 10（明雷遭遇）；遭遇概率：100；冠之雪原 Snowy East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="460">460</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>Abomasnow</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；Freezington (冠之雪原)（草丛）；遭遇概率：1；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：20；进化方式：由 Snover 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="460">460</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/460.png"></td>
            <td>暴雪王</td>
            <td>Mega Abomasnow</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="461">461</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/461.png"></td>
            <td>玛狃拉</td>
            <td>Weavile</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：4；Freezington (冠之雪原)（草丛）；遭遇概率：4；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Sneasel 进化（等级 Up: Razor Claw）</td>
        </tr>
        <tr>
            <td id="462">462</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/462.png"></td>
            <td>自爆磁怪</td>
            <td>Magnezone</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；进化方式：由 Magneton 进化（使用Item: Thunder Stone）</td>
        </tr>
        <tr>
            <td id="463">463</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/463.png"></td>
            <td>大舌舔</td>
            <td>Lickilicky</td>
            <td>进化方式：由 Lickitung 进化（等级 Up: Learn Rollout (等级 33) + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="464">464</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/464.png"></td>
            <td>超甲狂犀</td>
            <td>Rhyperior</td>
            <td>Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：20；进化方式：由 Rhydon 进化（使用Item: Protector）</td>
        </tr>
        <tr>
            <td id="465">465</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/465.png"></td>
            <td>巨蔓藤</td>
            <td>Tangrowth</td>
            <td>进化方式：由 Tangela 进化（等级 Up: Learn Ancient Power (等级 38) + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="466">466</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/466.png"></td>
            <td>电击魔兽</td>
            <td>Electivire</td>
            <td>冠之雪原 草丛y East（草丛）；遭遇概率：4；Tree Base (冠之雪原)（草丛）；遭遇概率：4；进化方式：由 Electabuzz 进化（使用Item: Electirizer）</td>
        </tr>
        <tr>
            <td id="467">467</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/467.png"></td>
            <td>鸭嘴炎兽</td>
            <td>Magmortar</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；冠之雪原 草丛y East（草丛）；遭遇概率：1；进化方式：由 Magmar 进化（使用Item: Magmarizer）</td>
        </tr>
        <tr>
            <td id="468">468</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/468.png"></td>
            <td>波克基斯</td>
            <td>Togekiss</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Togetic 进化（使用Item: Shiny Stone）</td>
        </tr>
        <tr>
            <td id="469">469</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/469.png"></td>
            <td>远古巨蜓</td>
            <td>Yanmega</td>
            <td>铠岛 6（草丛）；遭遇概率：10；进化方式：由 Yanma 进化（等级 Up: Learn Ancient Power (等级 33) + 等级 Up）</td>
        </tr>
        <tr>
            <td id="470">470</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/470.png"></td>
            <td>叶伊布</td>
            <td>Leafeon</td>
            <td>进化方式：由 Eevee 进化（使用Item: Leaf Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="471">471</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/471.png"></td>
            <td>冰伊布</td>
            <td>Glaceon</td>
            <td>Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：1；进化方式：由 Eevee 进化（使用Item: Ice Stone）</td>
        </tr>
        <tr>
            <td id="472">472</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/472.png"></td>
            <td>天蝎王</td>
            <td>Gliscor</td>
            <td>进化方式：由 Gligar 进化（使用Item: Razor Fang）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="473">473</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/473.png"></td>
            <td>象牙猪</td>
            <td>Mamoswine</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：1；旷野地带 7 (Ice) East（明雷遭遇）；遭遇概率：100；旷野地带 7 (Ice) West（草丛）；遭遇概率：5；旷野地带 7 (Ice) West（明雷遭遇）；遭遇概率：100；Freezington (冠之雪原)（草丛）；遭遇概率：10；Freezington (冠之雪原)（明雷遭遇）；遭遇概率：100；冠之雪原 Snowy East（明雷遭遇）；遭遇概率：100；Scifub Chamber (冠之雪原)（明雷遭遇）；遭遇概率：100；Tanoby Key (冠之雪原)（草丛）；遭遇概率：5；Tanoby Key (冠之雪原)（明雷遭遇）；遭遇概率：100；进化方式：由 Piloswine 进化（等级 Up: Learn Ancient Power (等级 1 Relearn) + 等级 Up）</td>
        </tr>
        <tr>
            <td id="474">474</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/474.png"></td>
            <td>多边兽Ｚ</td>
            <td>Porygon Z</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Porygon2 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="475">475</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>Gallade</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2；进化方式：由 Kirlia 进化（使用Item: Male + Dawn Stone）</td>
        </tr>
        <tr>
            <td id="475">475</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/475.png"></td>
            <td>艾路雷朵</td>
            <td>Mega Gallade</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="476">476</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/476.png"></td>
            <td>大朝北鼻</td>
            <td>Probopass</td>
            <td>旷野地带 5 (Desert) South（草丛）；遭遇概率：5；进化方式：由 Nosepass 进化（使用Item: Thunder Stone）</td>
        </tr>
        <tr>
            <td id="477">477</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/477.png"></td>
            <td>黑夜魔灵</td>
            <td>Dusknoir</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：1；进化方式：由 Dusclops 进化（使用Item: Repear Cloth）</td>
        </tr>
        <tr>
            <td id="478">478</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/478.png"></td>
            <td>雪妖女</td>
            <td>Froslass</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：4；冠之雪原 Snowy East（草丛）；遭遇概率：5；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：24；进化方式：由 Snorunt 进化（使用Item: Female + Dawn Stone）</td>
        </tr>
        <tr>
            <td id="479">479</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>Rotom Fan</td>
            <td>拳关市（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="479">479</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>Rotom Frost</td>
            <td>拳关市（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="479">479</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>Rotom Heat</td>
            <td>拳关市（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="479">479</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>Rotom Mow</td>
            <td>拳关市（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="479">479</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>Rotom Wash</td>
            <td>拳关市（Purchase 来自 NPC）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="479">479</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/479.png"></td>
            <td>洛托姆</td>
            <td>Rotom</td>
            <td>铠岛 5（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="480">480</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/480.png"></td>
            <td>由克希</td>
            <td>Uxie</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="481">481</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/481.png"></td>
            <td>艾姆利多</td>
            <td>Mesprit</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="482">482</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/482.png"></td>
            <td>亚克诺姆</td>
            <td>Azelf</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="483">483</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/483.png"></td>
            <td>帝牙卢卡</td>
            <td>Dialga Origin</td>
            <td></td>
        </tr>
        <tr>
            <td id="483">483</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/483.png"></td>
            <td>帝牙卢卡</td>
            <td>Dialga</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="484">484</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/484.png"></td>
            <td>帕路奇亚</td>
            <td>Palkia Origin</td>
            <td></td>
        </tr>
        <tr>
            <td id="484">484</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/484.png"></td>
            <td>帕路奇亚</td>
            <td>Palkia</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="485">485</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/485.png"></td>
            <td>席多蓝恩</td>
            <td>Heatran</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="486">486</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/486.png"></td>
            <td>雷吉奇卡斯</td>
            <td>Regigigas</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="487">487</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/487.png"></td>
            <td>骑拉帝纳</td>
            <td>Giratina Origin</td>
            <td></td>
        </tr>
        <tr>
            <td id="487">487</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/487.png"></td>
            <td>骑拉帝纳</td>
            <td>Giratina</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="488">488</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/488.png"></td>
            <td>克雷色利亚</td>
            <td>Cresselia</td>
            <td>道路 8 (Snow)（Legendary）：Get back into the bed after seeing Darkrai；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="489">489</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/489.png"></td>
            <td>霏欧纳</td>
            <td>Phione</td>
            <td>Underwater（Legendary）：Enter the submarine. Manaphy and Phione eggs will be inside.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="490">490</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/490.png"></td>
            <td>玛纳霏</td>
            <td>Manaphy</td>
            <td>Underwater（Legendary）：Enter the submarine. Manaphy and Phione eggs will be inside.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="491">491</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/491.png"></td>
            <td>达克莱伊</td>
            <td>Darkrai</td>
            <td>道路 8 (Snow)（Legendary）：Defeat the Garbodor the the old hermit's house, then get in the bed.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="492">492</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/492.png"></td>
            <td>谢米</td>
            <td>Shaymin Sky</td>
            <td>进化方式：由 Shaymin 进化（使用Item: Gracidea）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="492">492</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/492.png"></td>
            <td>谢米</td>
            <td>Shaymin</td>
            <td>旷野地带 2 (Bear)（Legendary）：Complete In-Game trades for Snivy, Oshawott, and Tepig.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="493">493</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/493.png"></td>
            <td>阿尔宙斯</td>
            <td>Arceus</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="494">494</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/494.png"></td>
            <td>比克提尼</td>
            <td>Victini</td>
            <td></td>
        </tr>
        <tr>
            <td id="495">495</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/495.png"></td>
            <td>藤藤蛇</td>
            <td>Snivy</td>
            <td>Stow-On-Side（游戏内交换）：通信交换 Galarian Meowth for Snivy；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="496">496</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/496.png"></td>
            <td>青藤蛇</td>
            <td>Servine</td>
            <td>进化方式：由 Snivy 进化（升级至等级 17）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="497">497</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/497.png"></td>
            <td>君主蛇</td>
            <td>Serperior</td>
            <td>进化方式：由 Servine 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="498">498</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/498.png"></td>
            <td>暖暖猪</td>
            <td>Tepig</td>
            <td>Stow-On-Side（游戏内交换）：通信交换 Eevee for Tepig；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="499">499</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/499.png"></td>
            <td>炒炒猪</td>
            <td>Pignite</td>
            <td>进化方式：由 Tepig 进化（升级至等级 17）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="500">500</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/500.png"></td>
            <td>炎武王</td>
            <td>Emboar</td>
            <td>进化方式：由 Pignite 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="501">501</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/501.png"></td>
            <td>水水獭</td>
            <td>Oshawott</td>
            <td>Glimwood Tangle（游戏内交换）：通信交换 Houndour for Oshawott；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="502">502</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/502.png"></td>
            <td>双刃丸</td>
            <td>Dewott</td>
            <td>进化方式：由 Oshawott 进化（升级至等级 17）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="503">503</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/503.png"></td>
            <td>大剑鬼</td>
            <td>Samurott</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）：Hisuian variant；遭遇概率：2；进化方式：由 Dewott 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="504">504</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/504.png"></td>
            <td>探探鼠</td>
            <td>Patrat</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="505">505</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/505.png"></td>
            <td>步哨鼠</td>
            <td>Watchog</td>
            <td>进化方式：由 Patrat 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="506">506</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/506.png"></td>
            <td>小约克</td>
            <td>Lillipup</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="507">507</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/507.png"></td>
            <td>哈约克</td>
            <td>Herdier</td>
            <td>进化方式：由 Lillipup 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="508">508</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/508.png"></td>
            <td>长毛狗</td>
            <td>Stoutland</td>
            <td>铠岛 6（草丛）；遭遇概率：20；进化方式：由 Herdier 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="509">509</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/509.png"></td>
            <td>扒手猫</td>
            <td>Purrloin</td>
            <td>道路 2（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="510">510</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/510.png"></td>
            <td>酷豹</td>
            <td>Liepard</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：5；进化方式：由 Purrloin 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="511">511</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/511.png"></td>
            <td>花椰猴</td>
            <td>Pansage</td>
            <td></td>
        </tr>
        <tr>
            <td id="512">512</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/512.png"></td>
            <td>花椰猿</td>
            <td>Simisage</td>
            <td>铠岛 5（草丛）；遭遇概率：4；进化方式：由 Pansage 进化（使用Item: Leaf Stone）</td>
        </tr>
        <tr>
            <td id="513">513</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/513.png"></td>
            <td>爆香猴</td>
            <td>Pansear</td>
            <td></td>
        </tr>
        <tr>
            <td id="514">514</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/514.png"></td>
            <td>爆香猿</td>
            <td>Simisear</td>
            <td>铠岛 5（草丛）；遭遇概率：1；进化方式：由 Pansear 进化（使用Item: Fire Stone）</td>
        </tr>
        <tr>
            <td id="515">515</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/515.png"></td>
            <td>冷水猴</td>
            <td>Panpour</td>
            <td></td>
        </tr>
        <tr>
            <td id="516">516</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/516.png"></td>
            <td>冷水猿</td>
            <td>Simipour</td>
            <td>Galar Mine 2（钓鱼   Super Rod）；遭遇概率：20；铠岛 5（草丛）；遭遇概率：1；进化方式：由 Panpour 进化（使用Item: Water Stone）</td>
        </tr>
        <tr>
            <td id="517">517</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/517.png"></td>
            <td>食梦梦</td>
            <td>Munna</td>
            <td>Slumbering Area（草丛）；遭遇概率：25</td>
        </tr>
        <tr>
            <td id="518">518</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/518.png"></td>
            <td>梦梦蚀</td>
            <td>Musharna</td>
            <td>进化方式：由 Munna 进化（使用Item: Moon Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="519">519</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/519.png"></td>
            <td>豆豆鸽</td>
            <td>Pidove</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="520">520</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/520.png"></td>
            <td>咕咕鸽</td>
            <td>Tranquill</td>
            <td>铠岛 7（草丛）；遭遇概率：20；进化方式：由 Pidove 进化（升级至等级 21）</td>
        </tr>
        <tr>
            <td id="521">521</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/521.png"></td>
            <td>高傲雉鸡</td>
            <td>Unfezant</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；铠岛 7（草丛）；遭遇概率：20；进化方式：由 Tranquill 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="522">522</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/522.png"></td>
            <td>斑斑马</td>
            <td>Blitzle</td>
            <td></td>
        </tr>
        <tr>
            <td id="523">523</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/523.png"></td>
            <td>雷电斑马</td>
            <td>Zebstrika</td>
            <td>铠岛 7（草丛）；遭遇概率：10；进化方式：由 Blitzle 进化（升级至等级 27）</td>
        </tr>
        <tr>
            <td id="524">524</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/524.png"></td>
            <td>石丸子</td>
            <td>Roggenrola</td>
            <td>Galar Mine 1（草丛）；遭遇概率：10；Galar Mine 2（草丛）；遭遇概率：9；机擎市 East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="525">525</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/525.png"></td>
            <td>地幔岩</td>
            <td>Boldore</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：10；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：10；道路 8（草丛）；遭遇概率：4；进化方式：由 Roggenrola 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="526">526</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/526.png"></td>
            <td>庞岩怪</td>
            <td>Gigalith</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：5；Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：14；进化方式：由 Boldore 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="527">527</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/527.png"></td>
            <td>滚滚蝙蝠</td>
            <td>Woobat</td>
            <td>道路 8 洞窟（草丛）；遭遇概率：20；Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="528">528</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/528.png"></td>
            <td>心蝙蝠</td>
            <td>Swoobat</td>
            <td>Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：10；Tanoby Key (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Woobat 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="529">529</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/529.png"></td>
            <td>螺钉地鼠</td>
            <td>Drilbur</td>
            <td>Galar Mine 1（草丛）；遭遇概率：4；Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：9</td>
        </tr>
        <tr>
            <td id="530">530</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/530.png"></td>
            <td>龙头地鼠</td>
            <td>Excadrill</td>
            <td>Liptoo Chamber (冠之雪原)（草丛）；遭遇概率：5；Tanoby Key (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Drilbur 进化（升级至等级 31）</td>
        </tr>
        <tr>
            <td id="531">531</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/531.png"></td>
            <td>差不多娃娃</td>
            <td>Audino</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="531">531</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/531.png"></td>
            <td>差不多娃娃</td>
            <td>Mega Audino</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="532">532</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/532.png"></td>
            <td>搬运小匠</td>
            <td>Timburr</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：10；Galar Mine 1（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="533">533</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/533.png"></td>
            <td>铁骨土人</td>
            <td>Gurdurr</td>
            <td>道路 8（草丛）；遭遇概率：1；进化方式：由 Timburr 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="534">534</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/534.png"></td>
            <td>修建老匠</td>
            <td>Conkeldurr</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；冠之雪原 Graveyard（草丛）；遭遇概率：5；进化方式：由 Gurdurr 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="535">535</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/535.png"></td>
            <td>圆蝌蚪</td>
            <td>Tympole</td>
            <td>机擎市 East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="536">536</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/536.png"></td>
            <td>蓝蟾蜍</td>
            <td>Palpitoad</td>
            <td>旷野地带 1 Northwest（钓鱼   Good Rod）；遭遇概率：33；进化方式：由 Tympole 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="537">537</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/537.png"></td>
            <td>蟾蜍王</td>
            <td>Seismitoad</td>
            <td>Galar Mine 2（钓鱼   Super Rod）；遭遇概率：20；旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 6 East（Surf）；遭遇概率：20；旷野地带 9 (Dragon)（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Palpitoad 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="538">538</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/538.png"></td>
            <td>投摔鬼</td>
            <td>Throh</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：1；道路 8 (Snow)（草丛）；遭遇概率：5；Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：8</td>
        </tr>
        <tr>
            <td id="539">539</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/539.png"></td>
            <td>打击鬼</td>
            <td>Sawk</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 4 East（草丛）；遭遇概率：1；道路 8 (Snow)（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="540">540</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/540.png"></td>
            <td>虫宝包</td>
            <td>Sewaddle</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="541">541</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/541.png"></td>
            <td>宝包茧</td>
            <td>Swadloon</td>
            <td>进化方式：由 Sewaddle 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="542">542</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/542.png"></td>
            <td>保姆虫</td>
            <td>Leavanny</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；铠岛 6（草丛）；遭遇概率：4；进化方式：由 Swadloon 进化（等级 Up: Happiness + 等级 Up）</td>
        </tr>
        <tr>
            <td id="543">543</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/543.png"></td>
            <td>百足蜈蚣</td>
            <td>Venipede</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="544">544</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/544.png"></td>
            <td>车轮球</td>
            <td>Whirlipede</td>
            <td>进化方式：由 Venipede 进化（升级至等级 22）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="545">545</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/545.png"></td>
            <td>蜈蚣王</td>
            <td>Scolipede</td>
            <td>进化方式：由 Whirlipede 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="546">546</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/546.png"></td>
            <td>木棉球</td>
            <td>Cottonee</td>
            <td></td>
        </tr>
        <tr>
            <td id="547">547</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/547.png"></td>
            <td>风妖精</td>
            <td>Whimsicott</td>
            <td>铠岛 7（草丛）；遭遇概率：10；进化方式：由 Cottonee 进化（使用Item: Sun Stone）</td>
        </tr>
        <tr>
            <td id="548">548</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/548.png"></td>
            <td>百合根娃娃</td>
            <td>Petilil</td>
            <td></td>
        </tr>
        <tr>
            <td id="549">549</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/549.png"></td>
            <td>裙儿小姐</td>
            <td>Lilligant</td>
            <td>铠岛 7（草丛）；遭遇概率：10；进化方式：由 Petilil 进化（使用Item: Sun Stone）</td>
        </tr>
        <tr>
            <td id="550">550</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>Basculin Blue Striped</td>
            <td>道路 2（钓鱼   Super Rod）；遭遇概率：20；Galar Mine 1（钓鱼   Super Rod）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="550">550</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/550.png"></td>
            <td>野蛮鲈鱼</td>
            <td>Basculin</td>
            <td>道路 2（钓鱼   Super Rod）；遭遇概率：20；铠岛 10（Surf）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="551">551</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/551.png"></td>
            <td>黑眼鳄</td>
            <td>Sandile</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="552">552</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/552.png"></td>
            <td>混混鳄</td>
            <td>Krokorok</td>
            <td>进化方式：由 Sandile 进化（升级至等级 29）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="553">553</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/553.png"></td>
            <td>流氓鳄</td>
            <td>Krookodile</td>
            <td>进化方式：由 Krokorok 进化（升级至等级 40）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="554">554</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554.png"></td>
            <td>火红不倒翁</td>
            <td>Darumaka Galarian</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) East（明雷遭遇）；遭遇概率：10；旷野地带 7 (Ice) West（明雷遭遇）；遭遇概率：100；道路 8 (Snow)（草丛）；遭遇概率：26；道路 8 (Snow)（明雷遭遇）；遭遇概率：100；道路 10（草丛）；遭遇概率：4；道路 10（明雷遭遇）；遭遇概率：100；Freezington (冠之雪原)（明雷遭遇）；遭遇概率：100；冠之雪原 Snowy East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="554">554</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/554.png"></td>
            <td>火红不倒翁</td>
            <td>Darumaka</td>
            <td></td>
        </tr>
        <tr>
            <td id="555">555</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555.png"></td>
            <td>达摩狒狒</td>
            <td>Darmanitan Galarian</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；冠之雪原 Snowy East（草丛）；遭遇概率：4；进化方式：由 Darumaka-Galar 进化（使用Item: Ice Stone）</td>
        </tr>
        <tr>
            <td id="555">555</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555.png"></td>
            <td>达摩狒狒</td>
            <td>Darmanitan Zen Galarian</td>
            <td></td>
        </tr>
        <tr>
            <td id="555">555</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555.png"></td>
            <td>达摩狒狒</td>
            <td>Darmanitan Zen</td>
            <td></td>
        </tr>
        <tr>
            <td id="555">555</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/555.png"></td>
            <td>达摩狒狒</td>
            <td>Darmanitan</td>
            <td>铠岛 7（草丛）；遭遇概率：10；进化方式：由 Darumaka 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="556">556</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/556.png"></td>
            <td>沙铃仙人掌</td>
            <td>Maractus</td>
            <td>道路 6（草丛）；遭遇概率：10；铠岛 7（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="557">557</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/557.png"></td>
            <td>石居蟹</td>
            <td>Dwebble</td>
            <td>旷野地带 5 (Desert) South（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="558">558</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/558.png"></td>
            <td>岩殿居蟹</td>
            <td>Crustle</td>
            <td>Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：10；进化方式：由 Dwebble 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="559">559</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/559.png"></td>
            <td>滑滑小子</td>
            <td>Scraggy</td>
            <td>旷野地带 1 Northwest（明雷遭遇）；遭遇概率：100；旷野地带 4 West（草丛）；遭遇概率：10；旷野地带 4 West（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="560">560</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/560.png"></td>
            <td>头巾混混</td>
            <td>Scrafty</td>
            <td>进化方式：由 Scraggy 进化（升级至等级 39）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="561">561</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/561.png"></td>
            <td>象征鸟</td>
            <td>Sigilyph</td>
            <td>铠岛 7（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="562">562</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/562.png"></td>
            <td>哭哭面具</td>
            <td>Yamask Galarian</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 6（草丛）；遭遇概率：10；道路 6（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) North（草丛）；遭遇概率：4；旷野地带 5 (Desert) North（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) South（明雷遭遇）；遭遇概率：100；道路 8 (Desert)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="562">562</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/562.png"></td>
            <td>哭哭面具</td>
            <td>Yamask</td>
            <td>冠之雪原 草丛y East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="563">563</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/563.png"></td>
            <td>死神棺</td>
            <td>Cofagrigus</td>
            <td>铠岛 7（草丛）；遭遇概率：4；进化方式：由 Yamask 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="564">564</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/564.png"></td>
            <td>原盖海龟</td>
            <td>Tirtouga</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="565">565</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/565.png"></td>
            <td>肋骨海龟</td>
            <td>Carracosta</td>
            <td>Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：5；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：20；进化方式：由 Tirtouga 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="566">566</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/566.png"></td>
            <td>始祖小鸟</td>
            <td>Archen</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="567">567</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/567.png"></td>
            <td>始祖大鸟</td>
            <td>Archeops</td>
            <td>Brawlers 洞窟 (铠岛)（草丛）；遭遇概率：10；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：10；冠之雪原 草丛y East（草丛）；遭遇概率：10；进化方式：由 Archen 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="568">568</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/568.png"></td>
            <td>破破袋</td>
            <td>Trubbish</td>
            <td>旷野地带 1 Southwest（明雷遭遇）；遭遇概率：100；旷野地带 1 Northeast（明雷遭遇）；遭遇概率：100；旷野地带 6 West（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="569">569</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/569.png"></td>
            <td>灰尘山</td>
            <td>Garbodor</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 3 South（明雷遭遇）；遭遇概率：100；旷野地带 3 South（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 West（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 North（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 4 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（明雷遭遇）；遭遇概率：100；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Trubbish 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="570">570</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/570.png"></td>
            <td>索罗亚</td>
            <td>Zorua</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="571">571</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/571.png"></td>
            <td>索罗亚克</td>
            <td>Zoroark</td>
            <td>进化方式：由 Zorua 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="572">572</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/572.png"></td>
            <td>泡沫栗鼠</td>
            <td>Minccino</td>
            <td>道路 5（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="573">573</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/573.png"></td>
            <td>奇诺栗鼠</td>
            <td>Cinccino</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；铠岛 7（草丛）；遭遇概率：4；进化方式：由 Minccino 进化（使用Item: Shiny Stone）</td>
        </tr>
        <tr>
            <td id="574">574</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/574.png"></td>
            <td>哥德宝宝</td>
            <td>Gothita</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="575">575</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/575.png"></td>
            <td>哥德小童</td>
            <td>Gothorita</td>
            <td>进化方式：由 Gothita 进化（升级至等级 32）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="576">576</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/576.png"></td>
            <td>哥德小姐</td>
            <td>Gothitelle</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Gothorita 进化（升级至等级 41）</td>
        </tr>
        <tr>
            <td id="577">577</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/577.png"></td>
            <td>单卵细胞球</td>
            <td>Solosis</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="578">578</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/578.png"></td>
            <td>双卵细胞球</td>
            <td>Duosion</td>
            <td>进化方式：由 Solosis 进化（升级至等级 32）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="579">579</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/579.png"></td>
            <td>人造细胞卵</td>
            <td>Reuniclus</td>
            <td>进化方式：由 Duosion 进化（升级至等级 41）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="580">580</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/580.png"></td>
            <td>鸭宝宝</td>
            <td>Ducklett</td>
            <td></td>
        </tr>
        <tr>
            <td id="581">581</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/581.png"></td>
            <td>舞天鹅</td>
            <td>Swanna</td>
            <td>铠岛 7（草丛）；遭遇概率：1；进化方式：由 Ducklett 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="582">582</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/582.png"></td>
            <td>迷你冰</td>
            <td>Vanillite</td>
            <td></td>
        </tr>
        <tr>
            <td id="583">583</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/583.png"></td>
            <td>多多冰</td>
            <td>Vanillish</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：1；道路 8 (Snow)（草丛）；遭遇概率：4；道路 10（草丛）；遭遇概率：5；进化方式：由 Vanillite 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="584">584</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/584.png"></td>
            <td>双倍多多冰</td>
            <td>Vanilluxe</td>
            <td>道路 10（草丛）；遭遇概率：10；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：5；进化方式：由 Vanillish 进化（升级至等级 47）</td>
        </tr>
        <tr>
            <td id="585">585</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/585.png"></td>
            <td>四季鹿</td>
            <td>Deerling</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="586">586</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/586.png"></td>
            <td>萌芽鹿</td>
            <td>Sawsbuck</td>
            <td>进化方式：由 Deerling 进化（升级至等级 34）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="587">587</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/587.png"></td>
            <td>电飞鼠</td>
            <td>Emolga</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="588">588</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/588.png"></td>
            <td>盖盖虫</td>
            <td>Karrablast</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：10；道路 7（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="589">589</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/589.png"></td>
            <td>骑士蜗牛</td>
            <td>Escavalier</td>
            <td>进化方式：由 Karrablast 进化（使用Item: Link Cable）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="590">590</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/590.png"></td>
            <td>哎呀球菇</td>
            <td>Foongus</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="591">591</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/591.png"></td>
            <td>败露球菇</td>
            <td>Amoonguss</td>
            <td>旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：2；铠岛 7（草丛）；遭遇概率：1；进化方式：由 Foongus 进化（升级至等级 39）</td>
        </tr>
        <tr>
            <td id="592">592</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/592.png"></td>
            <td>轻飘飘</td>
            <td>Frillish</td>
            <td></td>
        </tr>
        <tr>
            <td id="593">593</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/593.png"></td>
            <td>胖嘟嘟</td>
            <td>Jellicent</td>
            <td>旷野地带 1 Southwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；道路 9（草丛）；遭遇概率：4；进化方式：由 Frillish 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="594">594</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/594.png"></td>
            <td>保母曼波</td>
            <td>Alomomola</td>
            <td>铠岛 7（Surf）；遭遇概率：40</td>
        </tr>
        <tr>
            <td id="595">595</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/595.png"></td>
            <td>电电虫</td>
            <td>Joltik</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="596">596</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/596.png"></td>
            <td>电蜘蛛</td>
            <td>Galvantula</td>
            <td>道路 7（草丛）；遭遇概率：4；冠之雪原 草丛y East（草丛）；遭遇概率：1；Tree Base (冠之雪原)（草丛）；遭遇概率：5；进化方式：由 Joltik 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="597">597</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/597.png"></td>
            <td>种子铁球</td>
            <td>Ferroseed</td>
            <td>Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="598">598</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/598.png"></td>
            <td>坚果哑铃</td>
            <td>Ferrothorn</td>
            <td>Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：10；进化方式：由 Ferroseed 进化（升级至等级 40）</td>
        </tr>
        <tr>
            <td id="599">599</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/599.png"></td>
            <td>齿轮儿</td>
            <td>Klink</td>
            <td>道路 3（草丛）；遭遇概率：20；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="600">600</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/600.png"></td>
            <td>齿轮组</td>
            <td>Klang</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；铠岛 8（草丛）；遭遇概率：20；进化方式：由 Klink 进化（升级至等级 38）</td>
        </tr>
        <tr>
            <td id="601">601</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/601.png"></td>
            <td>齿轮怪</td>
            <td>Klinklang</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Klang 进化（升级至等级 49）</td>
        </tr>
        <tr>
            <td id="602">602</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/602.png"></td>
            <td>麻麻小鱼</td>
            <td>Tynamo</td>
            <td>旷野地带 4 East（Surf）；遭遇概率：60</td>
        </tr>
        <tr>
            <td id="603">603</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/603.png"></td>
            <td>麻麻鳗</td>
            <td>Eelektrik</td>
            <td>进化方式：由 Tynamo 进化（升级至等级 39）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="604">604</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/604.png"></td>
            <td>麻麻鳗鱼王</td>
            <td>Eelektross</td>
            <td>进化方式：由 Eelektrik 进化（使用Item: Thunder Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="605">605</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/605.png"></td>
            <td>小灰怪</td>
            <td>Elgyem</td>
            <td></td>
        </tr>
        <tr>
            <td id="606">606</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/606.png"></td>
            <td>大宇怪</td>
            <td>Beheeyem</td>
            <td>铠岛 8（草丛）；遭遇概率：20；进化方式：由 Elgyem 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="607">607</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/607.png"></td>
            <td>烛光灵</td>
            <td>Litwick</td>
            <td>道路 8 洞窟（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="608">608</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/608.png"></td>
            <td>灯火幽灵</td>
            <td>Lampent</td>
            <td>进化方式：由 Litwick 进化（升级至等级 41）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="609">609</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/609.png"></td>
            <td>水晶灯火灵</td>
            <td>Chandelure</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 8 (Spooky)（草丛）；遭遇概率：5；冠之雪原 Graveyard（草丛）；遭遇概率：1；进化方式：由 Lampent 进化（使用Item: Dusk Stone）</td>
        </tr>
        <tr>
            <td id="610">610</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/610.png"></td>
            <td>牙牙</td>
            <td>Axew</td>
            <td>道路 6（草丛）；遭遇概率：20；道路 8 洞窟（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="611">611</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/611.png"></td>
            <td>斧牙龙</td>
            <td>Fraxure</td>
            <td>进化方式：由 Axew 进化（升级至等级 38）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="612">612</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/612.png"></td>
            <td>双斧战龙</td>
            <td>Haxorus</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：20；进化方式：由 Fraxure 进化（升级至等级 48）</td>
        </tr>
        <tr>
            <td id="613">613</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/613.png"></td>
            <td>喷嚏熊</td>
            <td>Cubchoo</td>
            <td>旷野地带 7 (Ice) East（明雷遭遇）；遭遇概率：100；旷野地带 7 (Ice) West（明雷遭遇）；遭遇概率：100；道路 8 洞窟（草丛）；遭遇概率：1；道路 10（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="614">614</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/614.png"></td>
            <td>冻原熊</td>
            <td>Beartic</td>
            <td>旷野地带 7 (Ice) West（草丛）；遭遇概率：9；冠之雪原 Snowy East（草丛）；遭遇概率：10；进化方式：由 Cubchoo 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="615">615</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/615.png"></td>
            <td>几何雪花</td>
            <td>Cryogonal</td>
            <td></td>
        </tr>
        <tr>
            <td id="616">616</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/616.png"></td>
            <td>小嘴蜗</td>
            <td>Shelmet</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 3 West（草丛）；遭遇概率：10；道路 7（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="617">617</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/617.png"></td>
            <td>敏捷虫</td>
            <td>Accelgor</td>
            <td>进化方式：由 Shelmet 进化（使用Item: Link Cable）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="618">618</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618.png"></td>
            <td>泥巴鱼</td>
            <td>Stunfisk Galarian</td>
            <td>Galar Mine 2（草丛）；遭遇概率：20；Galar Mine 2（明雷遭遇）；遭遇概率：100；旷野地带 3 (Volcano)（明雷遭遇）；遭遇概率：100；Slumbering Area（草丛）；遭遇概率：5；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；Brawlers 洞窟 (铠岛)（明雷遭遇）；遭遇概率：100；Warm Up Tunnel (铠岛)（明雷遭遇）；遭遇概率：100；Scifub Chamber (冠之雪原)（明雷遭遇）；遭遇概率：100；Tanoby Key (冠之雪原)（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="618">618</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/618.png"></td>
            <td>泥巴鱼</td>
            <td>Stunfisk</td>
            <td>铠岛 8（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="619">619</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/619.png"></td>
            <td>功夫鼬</td>
            <td>Mienfoo</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="620">620</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/620.png"></td>
            <td>师父鼬</td>
            <td>Mienshao</td>
            <td>进化方式：由 Mienfoo 进化（升级至等级 50）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="621">621</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/621.png"></td>
            <td>赤面龙</td>
            <td>Druddigon</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：10；Tree Base (冠之雪原)（草丛）；遭遇概率：4；冠之雪原 Snowy East（草丛）；遭遇概率：10；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：11</td>
        </tr>
        <tr>
            <td id="622">622</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/622.png"></td>
            <td>泥偶小人</td>
            <td>Golett</td>
            <td></td>
        </tr>
        <tr>
            <td id="623">623</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/623.png"></td>
            <td>泥偶巨人</td>
            <td>Golurk</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：4；Tree Base (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Golett 进化（升级至等级 43）</td>
        </tr>
        <tr>
            <td id="624">624</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/624.png"></td>
            <td>驹刀小兵</td>
            <td>Pawniard</td>
            <td></td>
        </tr>
        <tr>
            <td id="625">625</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/625.png"></td>
            <td>劈斩司令</td>
            <td>Bisharp</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：4；进化方式：由 Pawniard 进化（升级至等级 52）</td>
        </tr>
        <tr>
            <td id="626">626</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/626.png"></td>
            <td>爆炸头水牛</td>
            <td>Bouffalant</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：10；旷野地带 6 East（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="627">627</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/627.png"></td>
            <td>毛头小鹰</td>
            <td>Rufflet</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="628">628</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/628.png"></td>
            <td>勇士雄鹰</td>
            <td>Braviary</td>
            <td>进化方式：由 Rufflet 进化（升级至等级 54）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="629">629</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/629.png"></td>
            <td>秃鹰丫头</td>
            <td>Vullaby</td>
            <td></td>
        </tr>
        <tr>
            <td id="630">630</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/630.png"></td>
            <td>秃鹰娜</td>
            <td>Mandibuzz</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：20；旷野地带 4 East（草丛）；遭遇概率：5；铠岛 8（草丛）；遭遇概率：10；进化方式：由 Vullaby 进化（升级至等级 54）</td>
        </tr>
        <tr>
            <td id="631">631</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/631.png"></td>
            <td>熔蚁兽</td>
            <td>Heatmor</td>
            <td>道路 6（草丛）；遭遇概率：4；铠岛 8（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="632">632</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/632.png"></td>
            <td>铁蚁</td>
            <td>Durant</td>
            <td>道路 6（草丛）；遭遇概率：1；铠岛 8（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="633">633</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/633.png"></td>
            <td>单首龙</td>
            <td>Deino</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；道路 7（草丛）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="634">634</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/634.png"></td>
            <td>双首暴龙</td>
            <td>Zweilous</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（草丛）；遭遇概率：10；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Deino 进化（升级至等级 50）</td>
        </tr>
        <tr>
            <td id="635">635</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/635.png"></td>
            <td>三首恶龙</td>
            <td>Hydreigon</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；Tanoby Key (冠之雪原)（草丛）；遭遇概率：4；进化方式：由 Zweilous 进化（升级至等级 64）</td>
        </tr>
        <tr>
            <td id="636">636</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/636.png"></td>
            <td>燃烧虫</td>
            <td>Larvesta</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="637">637</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/637.png"></td>
            <td>火神蛾</td>
            <td>Volcarona</td>
            <td>进化方式：由 Larvesta 进化（升级至等级 59）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="638">638</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/638.png"></td>
            <td>勾帕路翁</td>
            <td>Cobalion</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="639">639</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/639.png"></td>
            <td>代拉基翁</td>
            <td>Terrakion</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="640">640</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/640.png"></td>
            <td>毕力吉翁</td>
            <td>Virizion</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="641">641</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/641.png"></td>
            <td>龙卷云</td>
            <td>Tornadus Therian</td>
            <td>进化方式：由 Tornadus 进化（使用Item: Reveal Glass）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="641">641</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/641.png"></td>
            <td>龙卷云</td>
            <td>Tornadus</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="642">642</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/642.png"></td>
            <td>雷电云</td>
            <td>Thundurus Therian</td>
            <td>进化方式：由 Thundurus 进化（使用Item: Reveal Glass）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="642">642</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/642.png"></td>
            <td>雷电云</td>
            <td>Thundurus</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="643">643</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/643.png"></td>
            <td>莱希拉姆</td>
            <td>Reshiram</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="644">644</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/644.png"></td>
            <td>捷克罗姆</td>
            <td>Zekrom</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="645">645</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/645.png"></td>
            <td>土地云</td>
            <td>Landorus Therian</td>
            <td>进化方式：由 Landorus 进化（使用Item: Reveal Glass）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="645">645</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/645.png"></td>
            <td>土地云</td>
            <td>Landorus</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="646">646</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/646.png"></td>
            <td>酋雷姆</td>
            <td>Kyurem</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="647">647</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/647.png"></td>
            <td>凯路迪欧</td>
            <td>Keldeo</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="648">648</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/648.png"></td>
            <td>美洛耶塔</td>
            <td>Meloetta Pirouette</td>
            <td></td>
        </tr>
        <tr>
            <td id="648">648</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/648.png"></td>
            <td>美洛耶塔</td>
            <td>Meloetta</td>
            <td>战竞镇（Legendary）：Pay the woman in Wyndon to play the Pokeflute and return to 战竞镇 Restaurant. Meloetta will be there.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="649">649</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/649.png"></td>
            <td>盖诺赛克特</td>
            <td>Genesect</td>
            <td>Brawlers 洞窟 (铠岛)（Legendary）：Collect and revive the 4 Galar fossils；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="650">650</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/650.png"></td>
            <td>哈力栗</td>
            <td>Chespin</td>
            <td>旷野地带 1 Southwest（游戏内交换）：通信交换 Dreepy for Chespin；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="651">651</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/651.png"></td>
            <td>胖胖哈力</td>
            <td>Quilladin</td>
            <td>进化方式：由 Chespin 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="652">652</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/652.png"></td>
            <td>布里卡隆</td>
            <td>Chesnaught</td>
            <td>进化方式：由 Quilladin 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="653">653</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/653.png"></td>
            <td>火狐狸</td>
            <td>Fennekin</td>
            <td>机擎市（游戏内交换）：通信交换 Greedent for Fennekin；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="654">654</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/654.png"></td>
            <td>长尾火狐</td>
            <td>Braixen</td>
            <td>进化方式：由 Fennekin 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="655">655</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/655.png"></td>
            <td>妖火红狐</td>
            <td>Delphox</td>
            <td>进化方式：由 Braixen 进化（升级至等级 36）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="656">656</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/656.png"></td>
            <td>呱呱泡蛙</td>
            <td>Froakie</td>
            <td>道路 5（游戏内交换）：通信交换 Corvisquire for Froakie；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="657">657</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/657.png"></td>
            <td>呱头蛙</td>
            <td>Frogadier</td>
            <td>进化方式：由 Froakie 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="658">658</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/658.png"></td>
            <td>甲贺忍蛙</td>
            <td>Greninja</td>
            <td>旷野地带 9 (Dragon)（赠送）：Defeat the battle tower in the Dragon 旷野地带 to have a choice to battle a Battle-bond Greninja；遭遇概率：100；进化方式：由 Frogadier 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="659">659</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/659.png"></td>
            <td>掘掘兔</td>
            <td>Bunnelby</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="660">660</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/660.png"></td>
            <td>掘地兔</td>
            <td>Diggersby</td>
            <td>进化方式：由 Bunnelby 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="661">661</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/661.png"></td>
            <td>小箭雀</td>
            <td>Fletchling</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="662">662</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/662.png"></td>
            <td>火箭雀</td>
            <td>Fletchinder</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：10；进化方式：由 Fletchling 进化（升级至等级 17）</td>
        </tr>
        <tr>
            <td id="663">663</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/663.png"></td>
            <td>烈箭鹰</td>
            <td>Talonflame</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；进化方式：由 Fletchinder 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="664">664</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/664.png"></td>
            <td>粉蝶虫</td>
            <td>Scatterbug</td>
            <td></td>
        </tr>
        <tr>
            <td id="665">665</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/665.png"></td>
            <td>粉蝶蛹</td>
            <td>Spewpa</td>
            <td>进化方式：由 Scatterbug 进化（升级至等级 9）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="666">666</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/666.png"></td>
            <td>彩粉蝶</td>
            <td>Vivillon</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；铠岛 8（草丛）；遭遇概率：5；进化方式：由 Spewpa 进化（升级至等级 12）</td>
        </tr>
        <tr>
            <td id="667">667</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/667.png"></td>
            <td>小狮狮</td>
            <td>Litleo</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="668">668</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/668.png"></td>
            <td>火炎狮</td>
            <td>Pyroar</td>
            <td>旷野地带 6 West（明雷遭遇）；遭遇概率：100；旷野地带 6 East（明雷遭遇）；遭遇概率：100；旷野地带 9 (Dragon)（明雷遭遇）；遭遇概率：100；铠岛 8（明雷遭遇）；遭遇概率：100；进化方式：由 Litleo 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="669">669</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/669.png"></td>
            <td>花蓓蓓</td>
            <td>Flabebe</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：4；旷野地带 1 Northwest（明雷遭遇）；遭遇概率：100；旷野地带 2 (Bear)（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="670">670</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/670.png"></td>
            <td>花叶蒂</td>
            <td>Floette</td>
            <td>进化方式：由 Flabébé 进化（升级至等级 19）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="671">671</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/671.png"></td>
            <td>花洁夫人</td>
            <td>Florges</td>
            <td>进化方式：由 Floette 进化（使用Item: Shiny Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="672">672</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/672.png"></td>
            <td>坐骑小羊</td>
            <td>Skiddo</td>
            <td>旷野地带 1 Southwest（草丛）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="673">673</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/673.png"></td>
            <td>坐骑山羊</td>
            <td>Gogoat</td>
            <td>旷野地带 4 East（明雷遭遇）；遭遇概率：100；铠岛 8（明雷遭遇）；遭遇概率：100；进化方式：由 Skiddo 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="674">674</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/674.png"></td>
            <td>顽皮熊猫</td>
            <td>Pancham</td>
            <td>道路 3（草丛）；遭遇概率：8；旷野地带 3 South（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="675">675</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/675.png"></td>
            <td>流氓熊猫</td>
            <td>Pangoro</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（草丛）；遭遇概率：1；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Pancham 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="676">676</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/676.png"></td>
            <td>多丽米亚</td>
            <td>Furfrou</td>
            <td>铠岛 8（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="677">677</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/677.png"></td>
            <td>妙喵</td>
            <td>Espurr</td>
            <td>道路 5（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="678">678</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/678.png"></td>
            <td>超能妙喵</td>
            <td>Meowstic Male</td>
            <td>道路 7（草丛）；遭遇概率：4；铠岛 8（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="679">679</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/679.png"></td>
            <td>独剑鞘</td>
            <td>Honedge</td>
            <td>Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="680">680</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/680.png"></td>
            <td>双剑鞘</td>
            <td>Doublade</td>
            <td>旷野地带 4 West（草丛）；遭遇概率：5；Courageous 洞窟rn (道路 10)（草丛）；遭遇概率：1；进化方式：由 Honedge 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="681">681</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/681.png"></td>
            <td>坚盾剑怪</td>
            <td>Aegislash Blade</td>
            <td></td>
        </tr>
        <tr>
            <td id="681">681</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/681.png"></td>
            <td>坚盾剑怪</td>
            <td>Aegislash</td>
            <td>进化方式：由 Doublade 进化（使用Item: Dusk Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="682">682</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/682.png"></td>
            <td>粉香香</td>
            <td>Spritzee</td>
            <td>道路 5（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="683">683</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/683.png"></td>
            <td>芳香精</td>
            <td>Aromatisse</td>
            <td>铠岛 8（草丛）；遭遇概率：4；进化方式：由 Spritzee 进化（使用Item: Sachet）</td>
        </tr>
        <tr>
            <td id="684">684</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/684.png"></td>
            <td>绵绵泡芙</td>
            <td>Swirlix</td>
            <td></td>
        </tr>
        <tr>
            <td id="685">685</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/685.png"></td>
            <td>胖甜妮</td>
            <td>Slurpuff</td>
            <td>铠岛 8（草丛）；遭遇概率：1；进化方式：由 Swirlix 进化（使用Item: Whip Dream）</td>
        </tr>
        <tr>
            <td id="686">686</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/686.png"></td>
            <td>好啦鱿</td>
            <td>Inkay</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="687">687</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/687.png"></td>
            <td>乌贼王</td>
            <td>Malamar</td>
            <td>进化方式：由 Inkay 进化（升级至等级 30）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="688">688</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/688.png"></td>
            <td>龟脚脚</td>
            <td>Binacle</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="689">689</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/689.png"></td>
            <td>龟足巨铠</td>
            <td>Barbaracle</td>
            <td>进化方式：由 Binacle 进化（升级至等级 39）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="690">690</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/690.png"></td>
            <td>垃垃藻</td>
            <td>Skrelp</td>
            <td>旷野地带 1 Northwest（钓鱼   Old Rod）；遭遇概率：50；Galar Mine 1（钓鱼   Good Rod）；遭遇概率：33</td>
        </tr>
        <tr>
            <td id="691">691</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/691.png"></td>
            <td>毒藻龙</td>
            <td>Dragalge</td>
            <td>旷野地带 9 (Dragon)（Surf）；遭遇概率：20；进化方式：由 Skrelp 进化（升级至等级 48）</td>
        </tr>
        <tr>
            <td id="692">692</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/692.png"></td>
            <td>铁臂枪虾</td>
            <td>Clauncher</td>
            <td>Galar Mine 1（钓鱼   Old Rod）；遭遇概率：50；旷野地带 3 North（钓鱼   Good Rod）；遭遇概率：33</td>
        </tr>
        <tr>
            <td id="693">693</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/693.png"></td>
            <td>钢炮臂虾</td>
            <td>Clawitzer</td>
            <td>道路 2（钓鱼   Super Rod）；遭遇概率：20；旷野地带 9 (Dragon)（钓鱼   Good Rod）；遭遇概率：33；进化方式：由 Clauncher 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="694">694</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/694.png"></td>
            <td>伞电蜥</td>
            <td>Helioptile</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：1；道路 6（草丛）；遭遇概率：5</td>
        </tr>
        <tr>
            <td id="695">695</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/695.png"></td>
            <td>光电伞蜥</td>
            <td>Heliolisk</td>
            <td>进化方式：由 Helioptile 进化（使用Item: Sun Stone）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="696">696</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/696.png"></td>
            <td>宝宝暴龙</td>
            <td>Tyrunt</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="697">697</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/697.png"></td>
            <td>怪颚龙</td>
            <td>Tyrantrum</td>
            <td>进化方式：由 Tyrunt 进化（等级 Up: Daytime + 等级 39）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="698">698</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/698.png"></td>
            <td>冰雪龙</td>
            <td>Amaura</td>
            <td>道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="699">699</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/699.png"></td>
            <td>冰雪巨龙</td>
            <td>Aurorus</td>
            <td>Freezington (冠之雪原)（草丛）；遭遇概率：10；冠之雪原 Snowy East（草丛）；遭遇概率：10；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Amaura 进化（等级 Up: Nighttime + 等级 39）</td>
        </tr>
        <tr>
            <td id="700">700</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/700.png"></td>
            <td>仙子伊布</td>
            <td>Sylveon</td>
            <td>Glimwood Tangle（草丛）；遭遇概率：1；进化方式：由 Aurorus 进化（等级 Up: Happiness + Fairy-type move + 等级 Up）</td>
        </tr>
        <tr>
            <td id="701">701</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/701.png"></td>
            <td>摔角鹰人</td>
            <td>Hawlucha</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：10；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；道路 6（草丛）；遭遇概率：5；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="702">702</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/702.png"></td>
            <td>咚咚鼠</td>
            <td>Dedenne</td>
            <td>旷野地带 1 Northwest（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="703">703</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/703.png"></td>
            <td>小碎钻</td>
            <td>Carbink</td>
            <td>旷野地带 3 (Volcano)（草丛）；遭遇概率：10；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：11</td>
        </tr>
        <tr>
            <td id="704">704</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/704.png"></td>
            <td>黏黏宝</td>
            <td>Goomy</td>
            <td>道路 5（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="705">705</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/705.png"></td>
            <td>黏美儿</td>
            <td>Sliggoo</td>
            <td>进化方式：由 Goomy 进化（升级至等级 40）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="706">706</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/706.png"></td>
            <td>黏美龙</td>
            <td>Goodra</td>
            <td>进化方式：由 Sliggoo 进化（等级 Up: Rain + 等级 50）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="707">707</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/707.png"></td>
            <td>钥圈儿</td>
            <td>Klefki</td>
            <td>铠岛 8（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="708">708</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/708.png"></td>
            <td>小木灵</td>
            <td>Phantump</td>
            <td></td>
        </tr>
        <tr>
            <td id="709">709</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/709.png"></td>
            <td>朽木妖</td>
            <td>Trevenant</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：10；Freezington (冠之雪原)（草丛）；遭遇概率：5；进化方式：由 Phantump 进化（使用Item: Link Cable）</td>
        </tr>
        <tr>
            <td id="710">710</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/710.png"></td>
            <td>南瓜精</td>
            <td>Pumpkaboo Average</td>
            <td>道路 4（草丛）；遭遇概率：10；机擎市 East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="711">711</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/711.png"></td>
            <td>南瓜怪人</td>
            <td>Gourgeist Average</td>
            <td>旷野地带 8 (Spooky)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="712">712</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/712.png"></td>
            <td>冰宝</td>
            <td>Bergmite</td>
            <td></td>
        </tr>
        <tr>
            <td id="713">713</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/713.png"></td>
            <td>冰岩怪</td>
            <td>Avalugg</td>
            <td>旷野地带 7 (Ice) East（钓鱼   Super Rod）；遭遇概率：60；旷野地带 7 (Ice) West（草丛）；遭遇概率：20；Tree Base (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Bergmite 进化（升级至等级 37）</td>
        </tr>
        <tr>
            <td id="714">714</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/714.png"></td>
            <td>嗡蝠</td>
            <td>Noibat</td>
            <td>Galar Mine 1（草丛）；遭遇概率：11；Galar Mine 2（草丛）；遭遇概率：24；旷野地带 3 (Volcano)（草丛）；遭遇概率：10；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：20；道路 8 洞窟（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="715">715</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/715.png"></td>
            <td>音波龙</td>
            <td>Noivern</td>
            <td>Tree Base (冠之雪原)（草丛）；遭遇概率：20；Scifub Chamber (冠之雪原)（草丛）；遭遇概率：25；Tanoby Key (冠之雪原)（草丛）；遭遇概率：1；进化方式：由 Noibat 进化（升级至等级 48）</td>
        </tr>
        <tr>
            <td id="716">716</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/716.png"></td>
            <td>哲尔尼亚斯</td>
            <td>Xerneas</td>
            <td>Glimwood Tangle（Legendary）：After capturing 90 Pokemon, speak with Sonia. Return to the Glimwood Tangle and cut the trees to battle Xerneas.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="717">717</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/717.png"></td>
            <td>伊裴尔塔尔</td>
            <td>Yveltal</td>
            <td>道路 5（Legendary）：Catch 90 Pokémon and speak with Sonia. A new cave will appear where Yveltal awaits.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="718">718</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/718.png"></td>
            <td>基格尔德</td>
            <td>Zygarde 50</td>
            <td></td>
        </tr>
        <tr>
            <td id="718">718</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/718.png"></td>
            <td>基格尔德</td>
            <td>Zygarde Complete</td>
            <td>Galar Mine 2（Legendary）：Gather 100% Zygarde cells and go up the stairs in Galar Mine 2. Complete Zygarde should appear.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="718">718</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/718.png"></td>
            <td>基格尔德</td>
            <td>Zygarde</td>
            <td>Turffield（Legendary）：Transform your Complete form Zygarde using the Zygarde Cube obtained from an NPC in Turffield.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="719">719</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/719.png"></td>
            <td>蒂安希</td>
            <td>Diancie</td>
            <td>Courageous 洞窟rn (铠岛)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="719">719</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/719.png"></td>
            <td>蒂安希</td>
            <td>Mega Diancie</td>
            <td></td>
        </tr>
        <tr>
            <td id="720">720</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/720.png"></td>
            <td>胡帕</td>
            <td>Hoopa Unbound</td>
            <td>进化方式：由 Hoopa 进化（使用Item: Prison Bottle）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="720">720</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/720.png"></td>
            <td>胡帕</td>
            <td>Hoopa</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="721">721</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/721.png"></td>
            <td>波尔凯尼恩</td>
            <td>Volcanion</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="722">722</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/722.png"></td>
            <td>木木枭</td>
            <td>Rowlet</td>
            <td>舞姿镇（游戏内交换）：通信交换 Leafeon for Rowlet；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="723">723</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/723.png"></td>
            <td>投羽枭</td>
            <td>Dartrix</td>
            <td>进化方式：由 Rowlet 进化（升级至等级 17）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="724">724</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/724.png"></td>
            <td>狙射树枭</td>
            <td>Decidueye</td>
            <td>极巨探险 (冠之雪原)（极巨巢穴）：Hisuian variant；遭遇概率：2；进化方式：由 Dartrix 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="725">725</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/725.png"></td>
            <td>火斑喵</td>
            <td>Litten</td>
            <td>舞姿镇（游戏内交换）：通信交换 Galarian Zigzagoon for Litten；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="726">726</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/726.png"></td>
            <td>炎热喵</td>
            <td>Torracat</td>
            <td>进化方式：由 Litten 进化（升级至等级 17）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="727">727</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/727.png"></td>
            <td>炽焰咆哮虎</td>
            <td>Incineroar</td>
            <td>进化方式：由 Torracat 进化（升级至等级 34）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="728">728</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/728.png"></td>
            <td>球球海狮</td>
            <td>Popplio</td>
            <td>战竞镇（游戏内交换）：通信交换 Galarian-Yamask for Popplio；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="729">729</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/729.png"></td>
            <td>花漾海狮</td>
            <td>Brionne</td>
            <td>进化方式：由 Popplio 进化（升级至等级 17）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="730">730</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/730.png"></td>
            <td>西狮海壬</td>
            <td>Primarina</td>
            <td>进化方式：由 Brionne 进化（升级至等级 34）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="731">731</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/731.png"></td>
            <td>小笃儿</td>
            <td>Pikipek</td>
            <td></td>
        </tr>
        <tr>
            <td id="732">732</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/732.png"></td>
            <td>喇叭啄鸟</td>
            <td>Trumbeak</td>
            <td>旷野地带 2 (Bear)（草丛）；遭遇概率：2；进化方式：由 Pikipek 进化（升级至等级 14）</td>
        </tr>
        <tr>
            <td id="733">733</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/733.png"></td>
            <td>铳嘴大鸟</td>
            <td>Toucannon</td>
            <td>旷野地带 6 East（草丛）；遭遇概率：5；进化方式：由 Trumbeak 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="734">734</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/734.png"></td>
            <td>猫鼬少</td>
            <td>Yungoos</td>
            <td></td>
        </tr>
        <tr>
            <td id="735">735</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/735.png"></td>
            <td>猫鼬探长</td>
            <td>Gumshoos</td>
            <td>铠岛 9（草丛）；遭遇概率：20；进化方式：由 Yungoos 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="736">736</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/736.png"></td>
            <td>强颚鸡母虫</td>
            <td>Grubbin</td>
            <td>Slumbering Weald（草丛）；遭遇概率：5；旷野地带 1 Northwest（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="737">737</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/737.png"></td>
            <td>虫电宝</td>
            <td>Charjabug</td>
            <td>进化方式：由 Grubbin 进化（升级至等级 20）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="738">738</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/738.png"></td>
            <td>锹农炮虫</td>
            <td>Vikavolt</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；进化方式：由 Charjabug 进化（使用Item: Thunder Stone）</td>
        </tr>
        <tr>
            <td id="739">739</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/739.png"></td>
            <td>好胜蟹</td>
            <td>Crabrawler</td>
            <td></td>
        </tr>
        <tr>
            <td id="740">740</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/740.png"></td>
            <td>好胜毛蟹</td>
            <td>Crabominable</td>
            <td>铠岛 9（草丛）；遭遇概率：20；进化方式：由 Crabrawler 进化（: Ice Stone）</td>
        </tr>
        <tr>
            <td id="741">741</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/741.png"></td>
            <td>花舞鸟</td>
            <td>Oricorio Pau</td>
            <td></td>
        </tr>
        <tr>
            <td id="741">741</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/741.png"></td>
            <td>花舞鸟</td>
            <td>Oricorio Pom Pom</td>
            <td></td>
        </tr>
        <tr>
            <td id="741">741</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/741.png"></td>
            <td>花舞鸟</td>
            <td>Oricorio Sensu</td>
            <td></td>
        </tr>
        <tr>
            <td id="741">741</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/741.png"></td>
            <td>花舞鸟</td>
            <td>Oricorio</td>
            <td>铠岛 9（草丛）；遭遇概率：30</td>
        </tr>
        <tr>
            <td id="742">742</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/742.png"></td>
            <td>萌虻</td>
            <td>Cutiefly</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="743">743</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/743.png"></td>
            <td>蝶结萌虻</td>
            <td>Ribombee</td>
            <td>铠岛 9（草丛）；遭遇概率：10；进化方式：由 Cutiefly 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="744">744</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/744.png"></td>
            <td>岩狗狗</td>
            <td>Rockruff</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（明雷遭遇）；遭遇概率：100；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；机擎市（赠送）：House to the right of PokeCenter；遭遇概率：100；旷野地带 3 West（明雷遭遇）；遭遇概率：100；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（草丛）；遭遇概率：1；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；铠岛 1（明雷遭遇）；遭遇概率：100；铠岛 2（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="745">745</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/745.png"></td>
            <td>鬃岩狼人</td>
            <td>Lycanroc Dusk</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Rockruff 进化（等级 Up: 5pm-8pm + 等级 25 OR Dusk Stone）</td>
        </tr>
        <tr>
            <td id="745">745</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/745.png"></td>
            <td>鬃岩狼人</td>
            <td>Lycanroc Midnight</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：5；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Rockruff 进化（等级 Up: 8pm-4am + 等级 25 OR Moon Stone）</td>
        </tr>
        <tr>
            <td id="745">745</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/745.png"></td>
            <td>鬃岩狼人</td>
            <td>Lycanroc</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：10；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="746">746</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/746.png"></td>
            <td>弱丁鱼</td>
            <td>Wishiwashi Solo</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 9（草丛）；遭遇概率：10；铠岛 9（Surf）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="747">747</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/747.png"></td>
            <td>好坏星</td>
            <td>Mareanie</td>
            <td>旷野地带 6 West（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="748">748</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/748.png"></td>
            <td>超坏星</td>
            <td>Toxapex</td>
            <td>旷野地带 9 (Dragon)（Surf）；遭遇概率：20；旷野地带 9 (Dragon)（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 M区域nie 进化（升级至等级 38）</td>
        </tr>
        <tr>
            <td id="749">749</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/749.png"></td>
            <td>泥驴仔</td>
            <td>Mudbray</td>
            <td>旷野地带 4 East（草丛）；遭遇概率：5；旷野地带 5 (Desert) South（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="750">750</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/750.png"></td>
            <td>重泥挽马</td>
            <td>Mudsdale</td>
            <td>旷野地带 3 South（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) North（明雷遭遇）；遭遇概率：100；铠岛 Desert（明雷遭遇）；遭遇概率：100；进化方式：由 Mudbray 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="751">751</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/751.png"></td>
            <td>滴蛛</td>
            <td>Dewpider</td>
            <td>道路 5（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="752">752</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/752.png"></td>
            <td>滴蛛霸</td>
            <td>Araquanid</td>
            <td>旷野地带 1 Southwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 1 Northwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 9 (Dragon)（Surf）；遭遇概率：20；冠之雪原 草丛y East（草丛）；遭遇概率：4；Tree Base (冠之雪原)（草丛）；遭遇概率：5；进化方式：由 Dewpider 进化（升级至等级 22）</td>
        </tr>
        <tr>
            <td id="753">753</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/753.png"></td>
            <td>伪螳草</td>
            <td>Fomantis</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="754">754</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/754.png"></td>
            <td>兰螳花</td>
            <td>Lurantis</td>
            <td>铠岛 9（草丛）；遭遇概率：5；进化方式：由 Fomantis 进化（等级 Up: Daytime + 等级 34）</td>
        </tr>
        <tr>
            <td id="755">755</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/755.png"></td>
            <td>睡睡菇</td>
            <td>Morelull</td>
            <td>Glimwood Tangle（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="756">756</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/756.png"></td>
            <td>灯罩夜菇</td>
            <td>Shiinotic</td>
            <td>铠岛 9（草丛）；遭遇概率：5；进化方式：由 Morelull 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="757">757</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/757.png"></td>
            <td>夜盗火蜥</td>
            <td>Salandit</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="758">758</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/758.png"></td>
            <td>焰后蜥</td>
            <td>Salazzle</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（草丛）；遭遇概率：5；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Salandit 进化（等级 Up: Female + 等级 33）</td>
        </tr>
        <tr>
            <td id="759">759</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/759.png"></td>
            <td>童偶熊</td>
            <td>Stufful</td>
            <td>旷野地带 1 Southeast（草丛）；遭遇概率：1；道路 5（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="760">760</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/760.png"></td>
            <td>穿著熊</td>
            <td>Bewear</td>
            <td>进化方式：由 Stufful 进化（升级至等级 27）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="761">761</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/761.png"></td>
            <td>甜竹竹</td>
            <td>Bounsweet</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Northwest（草丛）；遭遇概率：1；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="762">762</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/762.png"></td>
            <td>甜舞妮</td>
            <td>Steenee</td>
            <td>进化方式：由 Bounsweet 进化（升级至等级 18）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="763">763</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/763.png"></td>
            <td>甜冷美后</td>
            <td>Tsareena</td>
            <td>进化方式：由 Steenee 进化（等级 Up: Learn Stomp (等级 29) + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="764">764</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/764.png"></td>
            <td>花疗环环</td>
            <td>Comfey</td>
            <td>铠岛 9（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="765">765</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/765.png"></td>
            <td>智挥猩</td>
            <td>Oranguru</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="766">766</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/766.png"></td>
            <td>投掷猴</td>
            <td>Passimian</td>
            <td>旷野地带 3 West（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="767">767</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/767.png"></td>
            <td>胆小虫</td>
            <td>Wimpod</td>
            <td>Galar Mine 2（钓鱼   Old Rod）；遭遇概率：50</td>
        </tr>
        <tr>
            <td id="768">768</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/768.png"></td>
            <td>具甲武者</td>
            <td>Golisopod</td>
            <td>旷野地带 1 Northwest（钓鱼   Super Rod）；遭遇概率：20；Galar Mine 2（钓鱼   Super Rod）；遭遇概率：40；旷野地带 9 (Dragon)（钓鱼   Good Rod）；遭遇概率：33；进化方式：由 Wimpod 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="769">769</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/769.png"></td>
            <td>沙丘娃</td>
            <td>Sandygast</td>
            <td>旷野地带 6 East（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="770">770</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/770.png"></td>
            <td>噬沙堡爷</td>
            <td>Palossand</td>
            <td>旷野地带 5 (Desert) North（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) South（明雷遭遇）；遭遇概率：100；旷野地带 9 (Dragon)（明雷遭遇）；遭遇概率：100；铠岛 Desert（明雷遭遇）；遭遇概率：100；进化方式：由 Sandygast 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="771">771</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/771.png"></td>
            <td>拳海参</td>
            <td>Pyukumuku</td>
            <td>道路 9（草丛）；遭遇概率：5；铠岛 9（草丛）；遭遇概率：4</td>
        </tr>
        <tr>
            <td id="772">772</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/772.png"></td>
            <td>属性：空</td>
            <td>Type Null</td>
            <td>拳关市（Legendary）：Interact with the chalkboard in the empty house to unveil a secret base. Clear the secret base to get a Type: Null.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="773">773</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/773.png"></td>
            <td>银伴战兽</td>
            <td>Silvally</td>
            <td>进化方式：由 Type: Null 进化（等级 Up: Happiness + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="774">774</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/774.png"></td>
            <td>小陨星</td>
            <td>Minior Red Meteor</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 6 (Rixy Chamber)（草丛）；遭遇概率：8；铠岛 9（草丛）；遭遇概率：1；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="775">775</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/775.png"></td>
            <td>树枕尾熊</td>
            <td>Komala</td>
            <td>铠岛 9（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="776">776</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/776.png"></td>
            <td>爆焰龟兽</td>
            <td>Turtonator</td>
            <td>旷野地带 3 South（草丛）；遭遇概率：20；旷野地带 9 (Dragon)（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="777">777</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/777.png"></td>
            <td>托戈德玛尔</td>
            <td>Togedemaru</td>
            <td>Courageous 洞窟rn (铠岛)（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="778">778</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/778.png"></td>
            <td>谜拟Ｑ</td>
            <td>Mimikyu Disguised</td>
            <td>旷野地带 3 North（草丛）；遭遇概率：10；Tree Base (冠之雪原)（草丛）；遭遇概率：1</td>
        </tr>
        <tr>
            <td id="779">779</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/779.png"></td>
            <td>磨牙彩皮鱼</td>
            <td>Bruxish</td>
            <td>道路 2（钓鱼   Good Rod）；遭遇概率：33；旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；铠岛 7（Surf）；遭遇概率：60</td>
        </tr>
        <tr>
            <td id="780">780</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/780.png"></td>
            <td>老翁龙</td>
            <td>Drampa</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：20；旷野地带 9 (Dragon)（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="781">781</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/781.png"></td>
            <td>破破舵轮</td>
            <td>Dhelmise</td>
            <td>旷野地带 1 Southwest（钓鱼   Super Rod）；遭遇概率：20；旷野地带 3 North（钓鱼   Old Rod）；遭遇概率：50</td>
        </tr>
        <tr>
            <td id="782">782</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/782.png"></td>
            <td>心鳞宝</td>
            <td>Jangmo O</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 3 North（草丛）；遭遇概率：20；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="783">783</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/783.png"></td>
            <td>鳞甲龙</td>
            <td>Hakamo O</td>
            <td>进化方式：由 Jangmo-o 进化（升级至等级 35）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="784">784</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/784.png"></td>
            <td>杖尾鳞甲龙</td>
            <td>Kommo O</td>
            <td>旷野地带 9 (Dragon)（草丛）；遭遇概率：1；进化方式：由 Hakamo-o 进化（升级至等级 45）</td>
        </tr>
        <tr>
            <td id="785">785</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/785.png"></td>
            <td>卡璞・鸣鸣</td>
            <td>Tapu Koko</td>
            <td>铠岛 1（Legendary）：Purchase a Pokeflute from the man in Isle of Armor 3 and play it for the little girl in Isle of Armor 6.  All Tapus will now appear around the Isle of Armor.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="786">786</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/786.png"></td>
            <td>卡璞・蝶蝶</td>
            <td>Tapu Lele</td>
            <td>铠岛 10（Legendary）：Purchase a Pokeflute from the man in Isle of Armor 3 and play it for the little girl in Isle of Armor 6.  All Tapus will now appear around the Isle of Armor；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="787">787</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/787.png"></td>
            <td>卡璞・哞哞</td>
            <td>Tapu Bulu</td>
            <td>铠岛 1（Legendary）：Purchase a Pokeflute from the man in Isle of Armor 3 and play it for the little girl in Isle of Armor 6.  All Tapus will now appear around the Isle of Armor；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="788">788</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/788.png"></td>
            <td>卡璞・鳍鳍</td>
            <td>Tapu Fini</td>
            <td>铠岛 7（Legendary）：Purchase a Pokeflute from the man in Isle of Armor 3 and play it for the little girl in Isle of Armor 6.  All Tapus will now appear around the Isle of Armor；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="789">789</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/789.png"></td>
            <td>科斯莫古</td>
            <td>Cosmog</td>
            <td>冠之雪原 草丛y East（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="790">790</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/790.png"></td>
            <td>科斯莫姆</td>
            <td>Cosmoem</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100；进化方式：由 Cosmog 进化（升级至等级 43）</td>
        </tr>
        <tr>
            <td id="791">791</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/791.png"></td>
            <td>索尔迦雷欧</td>
            <td>Solgaleo</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100；进化方式：由 Cosmoem 进化（等级 Up: Daytime + 等级 53）</td>
        </tr>
        <tr>
            <td id="792">792</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/792.png"></td>
            <td>露奈雅拉</td>
            <td>Lunala</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100；进化方式：由 Cosmoem 进化（等级 Up: Nighttime + 等级 53）</td>
        </tr>
        <tr>
            <td id="793">793</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/793.png"></td>
            <td>虚吾伊德</td>
            <td>Nihilego</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="794">794</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/794.png"></td>
            <td>爆肌蚊</td>
            <td>Buzzwole</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="795">795</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/795.png"></td>
            <td>费洛美螂</td>
            <td>Pheromosa</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="796">796</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/796.png"></td>
            <td>电束木</td>
            <td>Xurkitree</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="797">797</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/797.png"></td>
            <td>铁火辉夜</td>
            <td>Celesteela</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="798">798</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/798.png"></td>
            <td>纸御剑</td>
            <td>Kartana</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="799">799</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/799.png"></td>
            <td>恶食大王</td>
            <td>Guzzlord</td>
            <td>冠之雪原 Graveyard（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="800">800</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/800.png"></td>
            <td>奈克洛兹玛</td>
            <td>Necrozma</td>
            <td>极巨探险 (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="801">801</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/801.png"></td>
            <td>玛机雅娜</td>
            <td>Magearna</td>
            <td>机擎市 East（Legendary）：House north of small tree (requires Cutter item)；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="802">802</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/802.png"></td>
            <td>玛夏多</td>
            <td>Marshadow</td>
            <td>旷野地带 8 (Spooky)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="803">803</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/803.png"></td>
            <td>毒贝比</td>
            <td>Poipole</td>
            <td>冠之雪原 草丛y East（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="804">804</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/804.png"></td>
            <td>四颚针龙</td>
            <td>Naganadel</td>
            <td>进化方式：由 Poipole 进化（等级 Up: Learn Dragon Pulse (等级 1 Re-learn) + 等级 Up）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="805">805</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/805.png"></td>
            <td>垒磊石</td>
            <td>Stakataka</td>
            <td>冠之雪原 草丛y East（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="806">806</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/806.png"></td>
            <td>砰头小丑</td>
            <td>Blacephalon</td>
            <td>冠之雪原 草丛y East（Legendary）：Interact with Ultrawormhole.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="807">807</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/807.png"></td>
            <td>捷拉奥拉</td>
            <td>Zeraora</td>
            <td>拳关市（Legendary）：Show the little girl in the apartment building a Drifloon, Zeraora awaits on the roof.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="808">808</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/808.png"></td>
            <td>美录坦</td>
            <td>Meltan</td>
            <td>舞姿镇（Legendary）：Win the Gym Challenge Championship by defeating Leon and return to 舞姿镇 to find a Meltan.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="809">809</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/809.png"></td>
            <td>美录梅塔</td>
            <td>Melmetal</td>
            <td>Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="810">810</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/810.png"></td>
            <td>敲音猴</td>
            <td>Grookey</td>
            <td>微寂镇（赠送）：Starter Pokémon；遭遇概率：100；木杆镇（赠送）：(通关后) Defeat Jeanstars；遭遇概率：100；旷野地带 1 Southwest（露营点）：(通关后) 露营点 区域 可通过 NPC 前往；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="811">811</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/811.png"></td>
            <td>啪咚猴</td>
            <td>Thwackey</td>
            <td>进化方式：由 Grookey 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="812">812</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/812.png"></td>
            <td>轰擂金刚猩</td>
            <td>Rillaboom</td>
            <td>Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Thwackey 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="813">813</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/813.png"></td>
            <td>炎兔儿</td>
            <td>Scorbunny</td>
            <td>微寂镇（赠送）：Starter Pokémon；遭遇概率：100；木杆镇（赠送）：(通关后) Defeat Jeanstars；遭遇概率：100；旷野地带 1 Southwest（露营点）：(通关后) 露营点 区域 可通过 NPC 前往；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="814">814</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/814.png"></td>
            <td>腾蹴小将</td>
            <td>Raboot</td>
            <td>进化方式：由 Scorbunny 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="815">815</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/815.png"></td>
            <td>闪焰王牌</td>
            <td>Cinderace</td>
            <td>Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Raboot 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="816">816</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/816.png"></td>
            <td>泪眼蜥</td>
            <td>Sobble</td>
            <td>微寂镇（赠送）：Starter Pokémon；遭遇概率：100；木杆镇（赠送）：(通关后) Defeat Jeanstars；遭遇概率：100；旷野地带 1 Southwest（露营点）：(通关后) 露营点 区域 可通过 NPC 前往；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="817">817</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/817.png"></td>
            <td>变涩蜥</td>
            <td>Drizzile</td>
            <td>进化方式：由 Sobble 进化（升级至等级 16）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="818">818</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/818.png"></td>
            <td>千面避役</td>
            <td>Inteleon</td>
            <td>Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Drizzile 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="819">819</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/819.png"></td>
            <td>贪心栗鼠</td>
            <td>Skwovet</td>
            <td>Slumbering Weald（草丛）；遭遇概率：50；道路 1（草丛）；遭遇概率：20；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 3（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="820">820</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/820.png"></td>
            <td>藏饱栗鼠</td>
            <td>Greedent</td>
            <td>冠之雪原 Graveyard（草丛）；遭遇概率：4；进化方式：由 Skwovet 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="821">821</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/821.png"></td>
            <td>稚山雀</td>
            <td>Rookidee</td>
            <td>Slumbering Weald（草丛）；遭遇概率：20；道路 1（草丛）；遭遇概率：8；道路 2（明雷遭遇）；遭遇概率：100；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 3（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="822">822</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/822.png"></td>
            <td>蓝鸦</td>
            <td>Corvisquire</td>
            <td>进化方式：由 Rookidee 进化（升级至等级 18）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="823">823</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/823.png"></td>
            <td>钢铠鸦</td>
            <td>Corviknight</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form available；遭遇概率：3；道路 7（草丛）；遭遇概率：10；旷野地带 8 (Spooky)（明雷遭遇）；遭遇概率：100；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form available；遭遇概率：3；Slumbering Area（草丛）；遭遇概率：20；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100；进化方式：由 Corvisquire 进化（升级至等级 38）</td>
        </tr>
        <tr>
            <td id="824">824</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/824.png"></td>
            <td>索侦虫</td>
            <td>Blipbug</td>
            <td>Slumbering Weald（草丛）；遭遇概率：10；道路 1（草丛）；遭遇概率：10；道路 2（草丛）；遭遇概率：40；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="825">825</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/825.png"></td>
            <td>天罩虫</td>
            <td>Dottler</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；道路 5（草丛）；遭遇概率：20；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Blipbug 进化（升级至等级 10）</td>
        </tr>
        <tr>
            <td id="826">826</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/826.png"></td>
            <td>以欧路普</td>
            <td>Orbeetle</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Slumbering Area（草丛）；遭遇概率：10；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Dottler 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="827">827</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/827.png"></td>
            <td>偷儿狐</td>
            <td>Nickit</td>
            <td>道路 1（草丛）；遭遇概率：2；道路 2（明雷遭遇）；遭遇概率：100；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；道路 7（明雷遭遇）；遭遇概率：100；道路 9（明雷遭遇）；遭遇概率：100；旷野地带 8 (Spooky)（明雷遭遇）；遭遇概率：100；铠岛 2（明雷遭遇）；遭遇概率：100；铠岛 9（明雷遭遇）；遭遇概率：100；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="828">828</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/828.png"></td>
            <td>狐大盗</td>
            <td>Thievul</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；道路 7（草丛）；遭遇概率：20；旷野地带 8 (Spooky)（草丛）；遭遇概率：4；进化方式：由 Nickit 进化（升级至等级 18）</td>
        </tr>
        <tr>
            <td id="829">829</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/829.png"></td>
            <td>幼棉棉</td>
            <td>Gossifleur</td>
            <td>旷野地带 1 Southwest（明雷遭遇）；遭遇概率：100；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（明雷遭遇）；遭遇概率：100；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 3（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="830">830</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/830.png"></td>
            <td>白蓬蓬</td>
            <td>Eldegoss</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；进化方式：由 Gossifleur 进化（升级至等级 20）</td>
        </tr>
        <tr>
            <td id="831">831</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/831.png"></td>
            <td>毛辫羊</td>
            <td>Wooloo</td>
            <td>道路 1（草丛）；遭遇概率：20；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 4 East（明雷遭遇）；遭遇概率：100；Freezington (冠之雪原)（明雷遭遇）；遭遇概率：100；冠之雪原 Snowy East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="832">832</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/832.png"></td>
            <td>毛毛角羊</td>
            <td>Dubwool</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（草丛）；遭遇概率：4；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；Freezington (冠之雪原)（草丛）；遭遇概率：20；冠之雪原 Graveyard（草丛）；遭遇概率：10；冠之雪原 Snowy East（草丛）；遭遇概率：10；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：10；进化方式：由 Wooloo 进化（升级至等级 24）</td>
        </tr>
        <tr>
            <td id="833">833</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/833.png"></td>
            <td>咬咬龟</td>
            <td>Chewtle</td>
            <td>道路 2（草丛）；遭遇概率：8；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（明雷遭遇）；遭遇概率：100；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 4（草丛）；遭遇概率：8；Galar Mine 2（草丛）；遭遇概率：25；机擎市 East（草丛）；遭遇概率：20；铠岛 2（明雷遭遇）；遭遇概率：100；铠岛 5（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="834">834</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/834.png"></td>
            <td>暴噬龟</td>
            <td>Drednaw</td>
            <td>道路 2（钓鱼   Good Rod）；遭遇概率：33；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 East（钓鱼   Super Rod）；遭遇概率：20；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form available；遭遇概率：3；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Chewtle 进化（升级至等级 22）</td>
        </tr>
        <tr>
            <td id="835">835</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/835.png"></td>
            <td>来电汪</td>
            <td>Yamper</td>
            <td>道路 2（草丛）；遭遇概率：10；道路 2（明雷遭遇）；遭遇概率：100；旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="836">836</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/836.png"></td>
            <td>逐电犬</td>
            <td>Boltund</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Yamper 进化（升级至等级 25）</td>
        </tr>
        <tr>
            <td id="837">837</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/837.png"></td>
            <td>小炭仔</td>
            <td>Rolycoly</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；Galar Mine 1（草丛）；遭遇概率：21；Galar Mine 1（明雷遭遇）；遭遇概率：100；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；Brawlers 洞窟 (铠岛)（明雷遭遇）；遭遇概率：100；Warm Up Tunnel (铠岛)（明雷遭遇）；遭遇概率：100；Scifub Chamber (冠之雪原)（明雷遭遇）；遭遇概率：100；Liptoo Chamber (冠之雪原)（明雷遭遇）；遭遇概率：100；Tanoby Key (冠之雪原)（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="838">838</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/838.png"></td>
            <td>大炭车</td>
            <td>Carkol</td>
            <td>Galar Mine 1（草丛）；遭遇概率：20；旷野地带 3 (Volcano)（草丛）；遭遇概率：4；进化方式：由 Rolycoly 进化（升级至等级 18）</td>
        </tr>
        <tr>
            <td id="839">839</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/839.png"></td>
            <td>巨炭山</td>
            <td>Coalossal</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：10；进化方式：由 Carkol 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="840">840</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/840.png"></td>
            <td>啃果虫</td>
            <td>Applin</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；道路 5（明雷遭遇）；遭遇概率：100；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；铠岛 3（明雷遭遇）；遭遇概率：100；铠岛 5（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="841">841</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/841.png"></td>
            <td>苹裹龙</td>
            <td>Flapple</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Applin 进化（使用Item: Tart Apple）</td>
        </tr>
        <tr>
            <td id="842">842</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/842.png"></td>
            <td>丰蜜龙</td>
            <td>Appletun</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Applin 进化（使用Item: Sweet Apple）</td>
        </tr>
        <tr>
            <td id="843">843</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/843.png"></td>
            <td>沙包蛇</td>
            <td>Silicobra</td>
            <td>道路 6（草丛）；遭遇概率：20；道路 6（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) North（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) South（明雷遭遇）；遭遇概率：100；铠岛 Desert（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="844">844</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/844.png"></td>
            <td>沙螺蟒</td>
            <td>Sandaconda</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）：Gigantamax form；遭遇概率：7；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（草丛）；遭遇概率：4；道路 8（草丛）；遭遇概率：20；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Silicobra 进化（升级至等级 36）</td>
        </tr>
        <tr>
            <td id="845">845</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/845.png"></td>
            <td>古月鸟</td>
            <td>Cramorant</td>
            <td>旷野地带 3 North（明雷遭遇）；遭遇概率：100；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（钓鱼   Super Rod）；遭遇概率：20；道路 9（草丛）；遭遇概率：10；道路 9（Surf）；遭遇概率：20；道路 9（明雷遭遇）；遭遇概率：100；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；铠岛 7（明雷遭遇）；遭遇概率：100；铠岛 8（明雷遭遇）；遭遇概率：100；冠之雪原 草丛y East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="846">846</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/846.png"></td>
            <td>刺梭鱼</td>
            <td>Arrokuda</td>
            <td>道路 2（钓鱼   Old Rod）；遭遇概率：50；机擎市（明雷遭遇）；遭遇概率：100；Galar Mine 1（钓鱼   Old Rod）；遭遇概率：50；Galar Mine 1（钓鱼   Good Rod）；遭遇概率：33；旷野地带 3 North（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="847">847</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/847.png"></td>
            <td>戽斗尖梭</td>
            <td>Barraskewda</td>
            <td>道路 2（钓鱼   Good Rod）；遭遇概率：33；Galar Mine 1（钓鱼   Super Rod）；遭遇概率：60；旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) East（Surf）；遭遇概率：20；旷野地带 7 (Ice) East（钓鱼   Old Rod）；遭遇概率：50；旷野地带 7 (Ice) East（钓鱼   Good Rod）；遭遇概率：33；旷野地带 7 (Ice) West（Surf）；遭遇概率：20；旷野地带 6 East（钓鱼   Super Rod）；遭遇概率：20；进化方式：由 Arrokuda 进化（升级至等级 26）</td>
        </tr>
        <tr>
            <td id="848">848</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/848.png"></td>
            <td>毒电婴</td>
            <td>Toxel</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；道路 5（赠送）：Old woman in Daycare；遭遇概率：100；道路 7（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="849">849</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/849.png"></td>
            <td>颤弦蝾螈</td>
            <td>Toxtricity</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：3；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：3；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：3；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：3；Isle or Armor 2（极巨巢穴）：Gigantamax form available；遭遇概率：7；Isle of Armor 4（极巨巢穴）：Gigantamax form available；遭遇概率：7；Isle of Armor 5（极巨巢穴）：Gigantamax form available；遭遇概率：7；Isle of Armor 6（极巨巢穴）：Gigantamax form available；遭遇概率：7；Isle of Armor 7（极巨巢穴）：Gigantamax form available；遭遇概率：7</td>
        </tr>
        <tr>
            <td id="850">850</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/850.png"></td>
            <td>烧火蚣</td>
            <td>Sizzlipede</td>
            <td>道路 3（草丛）；遭遇概率：20</td>
        </tr>
        <tr>
            <td id="851">851</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/851.png"></td>
            <td>焚焰蚣</td>
            <td>Centiskorch</td>
            <td>旷野地带 3 South（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 West（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 3 North（极巨巢穴）：Gigantamax form；遭遇概率：4；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；冠之雪原 草丛y East（草丛）；遭遇概率：10；进化方式：由 Sizzlipede 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="852">852</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/852.png"></td>
            <td>拳拳蛸</td>
            <td>Clobbopus</td>
            <td>旷野地带 3 North（明雷遭遇）；遭遇概率：100；铠岛 3（明雷遭遇）；遭遇概率：100；铠岛 4（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="853">853</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/853.png"></td>
            <td>八爪武师</td>
            <td>Grapploct</td>
            <td>旷野地带 6 East（草丛）；遭遇概率：10；进化方式：由 Clobbopus 进化（等级 Up: Learn Taunt (等级 35) + 等级 Up）</td>
        </tr>
        <tr>
            <td id="854">854</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/854.png"></td>
            <td>来悲茶</td>
            <td>Sinistea</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；Glimwood Tangle（草丛）；遭遇概率：11；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="855">855</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/855.png"></td>
            <td>怖思壶</td>
            <td>Polteageist</td>
            <td>进化方式：由 Sinistea 进化（使用Item: Chipped Pot）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="856">856</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/856.png"></td>
            <td>迷布莉姆</td>
            <td>Hatenna</td>
            <td>旷野地带 1 Southwest（极巨巢穴）；遭遇概率：2；旷野地带 1 Southeast（极巨巢穴）；遭遇概率：2；旷野地带 1 Northeast（极巨巢穴）；遭遇概率：2；机擎市 East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="857">857</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/857.png"></td>
            <td>提布莉姆</td>
            <td>Hattrem</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；Glimwood Tangle（草丛）；遭遇概率：10；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Hatenna 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="858">858</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/858.png"></td>
            <td>布莉姆温</td>
            <td>Hatterene</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 4 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 4 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 6 East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；Tree Base (冠之雪原)（草丛）；遭遇概率：1；进化方式：由 Hattrem 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="859">859</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/859.png"></td>
            <td>捣蛋小妖</td>
            <td>Impidimp</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；Glimwood Tangle（草丛）；遭遇概率：20；Glimwood Tangle（明雷遭遇）；遭遇概率：100；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="860">860</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/860.png"></td>
            <td>诈唬魔</td>
            <td>Morgrem</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；进化方式：由 Impidimp 进化（升级至等级 32）</td>
        </tr>
        <tr>
            <td id="861">861</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/861.png"></td>
            <td>长毛巨魔</td>
            <td>Grimmsnarl</td>
            <td>旷野地带 3 (Volcano)（极巨巢穴）；遭遇概率：7；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；冠之雪原 Snowy East（草丛）；遭遇概率：1；进化方式：由 Morgrem 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="862">862</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/862.png"></td>
            <td>堵拦熊</td>
            <td>Obstagoon</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（草丛）；遭遇概率：5；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；冠之雪原 Graveyard（草丛）；遭遇概率：1；进化方式：由 Linoone-Galar 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="863">863</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/863.png"></td>
            <td>喵头目</td>
            <td>Perrserker</td>
            <td>道路 7（草丛）；遭遇概率：5；进化方式：由 Meowth-Galar 进化（升级至等级 28）</td>
        </tr>
        <tr>
            <td id="864">864</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/864.png"></td>
            <td>魔灵珊瑚</td>
            <td>Cursola</td>
            <td>进化方式：由 Corsola-Galar 进化（升级至等级 38）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="865">865</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/865.png"></td>
            <td>葱游兵</td>
            <td>Sirfetchd</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2；进化方式：由 Farfetch'd-Galar 进化（升级至等级 30）</td>
        </tr>
        <tr>
            <td id="866">866</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/866.png"></td>
            <td>踏冰人偶</td>
            <td>Mr Rime</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；Resting Spot Entrance (冠之雪原)（草丛）；遭遇概率：4；进化方式：由 Mr. Mime-Galar 进化（升级至等级 42）</td>
        </tr>
        <tr>
            <td id="867">867</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/867.png"></td>
            <td>死神板</td>
            <td>Runerigus</td>
            <td>冠之雪原 Graveyard（草丛）；遭遇概率：4；进化方式：由 Yamask-Galar 进化（升级至等级 35）</td>
        </tr>
        <tr>
            <td id="868">868</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/868.png"></td>
            <td>小仙奶</td>
            <td>Milcery</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；道路 4（草丛）；遭遇概率：40；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="869">869</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/869.png"></td>
            <td>霜奶仙</td>
            <td>Alcremie</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；进化方式：由 Milcery 进化（使用Item: Sweets）</td>
        </tr>
        <tr>
            <td id="870">870</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/870.png"></td>
            <td>列阵兵</td>
            <td>Falinks</td>
            <td>Stow-On-Side（赠送）；遭遇概率：100；道路 8（草丛）；遭遇概率：20；道路 8（明雷遭遇）；遭遇概率：100；道路 8 洞窟（草丛）；遭遇概率：15；铠岛 7（明雷遭遇）；遭遇概率：100；铠岛 8（明雷遭遇）；遭遇概率：100；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="871">871</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/871.png"></td>
            <td>啪嚓海胆</td>
            <td>Pincurchin</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；道路 9（草丛）；遭遇概率：10；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="872">872</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/872.png"></td>
            <td>雪吞虫</td>
            <td>Snom</td>
            <td>道路 8 (Snow)（草丛）；遭遇概率：20；道路 8 (Snow)（明雷遭遇）；遭遇概率：100；道路 10（草丛）；遭遇概率：4；道路 10（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="873">873</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/873.png"></td>
            <td>雪绒蛾</td>
            <td>Frosmoth</td>
            <td>旷野地带 7 (Ice) West（草丛）；遭遇概率：20；Freezington (冠之雪原)（草丛）；遭遇概率：20；Freezington (冠之雪原)（明雷遭遇）；遭遇概率：100；冠之雪原 Snowy East（草丛）；遭遇概率：20；冠之雪原 Snowy East（明雷遭遇）；遭遇概率：100；进化方式：由 Snom 进化（等级 Up: Happiness + Nighttime + 等级 Up）</td>
        </tr>
        <tr>
            <td id="874">874</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/874.png"></td>
            <td>巨石丁</td>
            <td>Stonjourner</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) West（草丛）；遭遇概率：20；旷野地带 5 (Desert) South（草丛）；遭遇概率：1；道路 10（草丛）；遭遇概率：1；Warm Up Tunnel (铠岛)（草丛）；遭遇概率：1；冠之雪原 Graveyard（草丛）；遭遇概率：10；冠之雪原 草丛y East（草丛）；遭遇概率：10</td>
        </tr>
        <tr>
            <td id="875">875</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>Eiscue Noice</td>
            <td></td>
        </tr>
        <tr>
            <td id="875">875</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/875.png"></td>
            <td>冰砌鹅</td>
            <td>Eiscue</td>
            <td>旷野地带 7 (Ice) East（草丛）；遭遇概率：5；旷野地带 7 (Ice) East（钓鱼   Old Rod）；遭遇概率：50；旷野地带 7 (Ice) East（钓鱼   Super Rod）；遭遇概率：20；旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="876">876</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>Indeedee Female</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；Glimwood Tangle（草丛）；遭遇概率：5；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="876">876</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/876.png"></td>
            <td>爱管侍</td>
            <td>Indeedee Male</td>
            <td>旷野地带 7 (Ice) East（极巨巢穴）；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）；遭遇概率：2；Glimwood Tangle（草丛）；遭遇概率：5；道路 10（草丛）；遭遇概率：1；旷野地带 8 (Spooky)（极巨巢穴）；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="877">877</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/877.png"></td>
            <td>莫鲁贝可</td>
            <td>Morpeko Full Belly</td>
            <td>道路 7（草丛）；遭遇概率：5；道路 7（明雷遭遇）；遭遇概率：100；道路 9（明雷遭遇）；遭遇概率：100；铠岛 5（明雷遭遇）；遭遇概率：100；冠之雪原 Graveyard（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="878">878</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/878.png"></td>
            <td>铜象</td>
            <td>Cufant</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（草丛）；遭遇概率：10；旷野地带 6 East（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="879">879</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/879.png"></td>
            <td>大王铜象</td>
            <td>Copperajah</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form；遭遇概率：2；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；铠岛 5（明雷遭遇）；遭遇概率：100；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；冠之雪原 草丛y East（草丛）；遭遇概率：20；冠之雪原 草丛y East（明雷遭遇）；遭遇概率：100；进化方式：由 Cufant 进化（升级至等级 34）</td>
        </tr>
        <tr>
            <td id="880">880</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/880.png"></td>
            <td>雷鸟龙</td>
            <td>Dracozolt</td>
            <td>道路 6（赠送）；遭遇概率：100；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="881">881</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/881.png"></td>
            <td>雷鸟海兽</td>
            <td>Arctozolt</td>
            <td>道路 6（赠送）；遭遇概率：100；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="882">882</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/882.png"></td>
            <td>鳃鱼龙</td>
            <td>Dracovish</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2；道路 6（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="883">883</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/883.png"></td>
            <td>鳃鱼海兽</td>
            <td>Arctovish</td>
            <td>道路 6（赠送）；遭遇概率：100；Isle or Armor 2（极巨巢穴）；遭遇概率：2；Isle of Armor 4（极巨巢穴）；遭遇概率：2；Isle of Armor 5（极巨巢穴）；遭遇概率：2；Isle of Armor 6（极巨巢穴）；遭遇概率：2；Isle of Armor 7（极巨巢穴）；遭遇概率：2</td>
        </tr>
        <tr>
            <td id="884">884</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/884.png"></td>
            <td>铝钢龙</td>
            <td>Duraludon</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 4 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 7 (Ice) West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) North（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 5 (Desert) South（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 West（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 West（明雷遭遇）；遭遇概率：100；旷野地带 6 East（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 6 East（草丛）；遭遇概率：20；道路 10（明雷遭遇）；遭遇概率：100；旷野地带 8 (Spooky)（极巨巢穴）：Gigantamax form available；遭遇概率：3；旷野地带 9 (Dragon)（极巨巢穴）：Gigantamax form available；遭遇概率：3；Isle or Armor 2（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 4（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 5（极巨巢穴）：Gigantamax form；遭遇概率：2；Isle of Armor 6（极巨巢穴）：Gigantamax form；遭遇概率：2；铠岛 7（明雷遭遇）；遭遇概率：100；Isle of Armor 7（极巨巢穴）：Gigantamax form；遭遇概率：2；铠岛 8（明雷遭遇）；遭遇概率：100；冠之雪原 草丛y East（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="885">885</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/885.png"></td>
            <td>多龙梅西亚</td>
            <td>Dreepy</td>
            <td>旷野地带 2 (Bear)（极巨巢穴）；遭遇概率：2；旷野地带 3 West（明雷遭遇）；遭遇概率：100；旷野地带 4 West（明雷遭遇）；遭遇概率：100；旷野地带 4 East（极巨巢穴）；遭遇概率：2；旷野地带 4 West（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) North（极巨巢穴）；遭遇概率：2；旷野地带 5 (Desert) South（极巨巢穴）；遭遇概率：2；旷野地带 6 West（极巨巢穴）；遭遇概率：2；旷野地带 6 East（极巨巢穴）；遭遇概率：2；铠岛 3（明雷遭遇）；遭遇概率：100；铠岛 4（明雷遭遇）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="886">886</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/886.png"></td>
            <td>多龙奇</td>
            <td>Drakloak</td>
            <td>进化方式：由 Dreepy 进化（升级至等级 50）；Wiki 未列出其他获取地点</td>
        </tr>
        <tr>
            <td id="887">887</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/887.png"></td>
            <td>多龙巴鲁托</td>
            <td>Dragapult</td>
            <td>旷野地带 3 South（极巨巢穴）；遭遇概率：4；旷野地带 3 West（极巨巢穴）；遭遇概率：4；旷野地带 3 North（极巨巢穴）；遭遇概率：4；Tree Base (冠之雪原)（草丛）；遭遇概率：20；进化方式：由 Drakloak 进化（升级至等级 60）</td>
        </tr>
        <tr>
            <td id="888">888</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/888.png"></td>
            <td>苍响</td>
            <td>Zacian Crowned</td>
            <td>Slumbering Area（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="888">888</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/888.png"></td>
            <td>苍响</td>
            <td>Zacian</td>
            <td></td>
        </tr>
        <tr>
            <td id="889">889</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/889.png"></td>
            <td>藏玛然特</td>
            <td>Zamazenta Crowned</td>
            <td>Slumbering Area（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="889">889</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/889.png"></td>
            <td>藏玛然特</td>
            <td>Zamazenta</td>
            <td></td>
        </tr>
        <tr>
            <td id="890">890</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/890.png"></td>
            <td>无极汰那</td>
            <td>Eternatus</td>
            <td>拳关市（Legendary）：Unlocked as part of story mode；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="891">891</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/891.png"></td>
            <td>熊徒弟</td>
            <td>Kubfu</td>
            <td>铠岛 武馆（赠送）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="892">892</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/892.png"></td>
            <td>武道熊师</td>
            <td>Urshifu Rapid Strike</td>
            <td>铠岛 5（Legendary）；遭遇概率：100；进化方式：由 Kubfu 进化（使用Item: Parchment W (Scroll of Water)）</td>
        </tr>
        <tr>
            <td id="892">892</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/892.png"></td>
            <td>武道熊师</td>
            <td>Urshifu</td>
            <td>铠岛 8（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="893">893</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/893.png"></td>
            <td>萨戮德</td>
            <td>Zarude</td>
            <td>旷野地带 9 (Dragon)（Legendary）：Defeat the battle tower in the Dragon 旷野地带 to have a choice to battle Zarude；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="894">894</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/894.png"></td>
            <td>雷吉艾勒奇</td>
            <td>Regieleki</td>
            <td>冠之雪原 Snowy East（Legendary）：Bring Regirock, Regice, and Registeel to the temple door.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="895">895</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/895.png"></td>
            <td>雷吉铎拉戈</td>
            <td>Regidrago</td>
            <td>冠之雪原 Snowy East（Legendary）：Bring Regirock, Regice, and Registeel to the temple door.；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="896">896</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/896.png"></td>
            <td>雪暴马</td>
            <td>Glastrier</td>
            <td>Resting Spot (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="897">897</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/897.png"></td>
            <td>灵幽马</td>
            <td>Spectrier</td>
            <td>Resting Spot (冠之雪原)（Legendary）；遭遇概率：100</td>
        </tr>
        <tr>
            <td id="898">898</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/898.png"></td>
            <td>蕾冠王</td>
            <td>Calyrex Ice Rider</td>
            <td></td>
        </tr>
        <tr>
            <td id="898">898</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/898.png"></td>
            <td>蕾冠王</td>
            <td>Calyrex Shadow Rider</td>
            <td></td>
        </tr>
        <tr>
            <td id="898">898</td>
            <td><img src="https://www.serebii.net/swordshield/pokemon/898.png"></td>
            <td>蕾冠王</td>
            <td>Calyrex</td>
            <td>Resting Spot (冠之雪原)（Legendary）；遭遇概率：100</td>
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
        const way = row.cells[4].innerText;

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
