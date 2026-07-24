---
layout: post
title: 精灵宝可梦Let's Go！皮卡丘／Let's Go！伊布去皮去伊地区分布
tags: [宠物小精灵, 口袋妖怪, 神奇宝贝, 宝可梦, 去皮去伊]
date: 2026-07-24 11:15 +0800
---
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>宝可梦 去皮去伊 - 完整遭遇数据（命名空间CSS）</title>
    <style>
        /* 所有样式限定在 .pokemon-encounter-app 下，避免全局冲突 */
        .pokemon-encounter-app {
            font-family: "Microsoft YaHei", sans-serif;
            background: #f4f4f4;
            margin: 20px;
        }
        .pokemon-encounter-app .nav-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
            padding: 15px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .pokemon-encounter-app .nav-buttons a {
            display: inline-block;
            padding: 8px 16px;
            background: #3b4cca;
            color: white;
            text-decoration: none;
            border-radius: 20px;
            font-size: 14px;
            transition: background 0.3s;
        }
        .pokemon-encounter-app .nav-buttons a:hover { background: #2a3a9e; }
        .pokemon-encounter-app table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 40px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        .pokemon-encounter-app th {
            background: #3b4cca;
            color: white;
            padding: 12px 8px;
            text-align: center;
            font-size: 16px;
        }
        .pokemon-encounter-app td {
            padding: 8px 6px;
            text-align: center;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }
        .pokemon-encounter-app tr:nth-child(even) { background-color: #f9f9f9; }
        .pokemon-encounter-app tr:hover { background-color: #e6f0ff; }
        .pokemon-encounter-app .zone-header {
            background: #ffcb05;
            color: #2a3a9e;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
        }
        .pokemon-encounter-app .zone-header th {
            background: #ffcb05;
            color: #2a3a9e;
            font-size: 22px;
        }
        .pokemon-encounter-app .capture-badge {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        .pokemon-encounter-app .badge-normal { background: #a8a878; color: white; }
        .pokemon-encounter-app .badge-water { background: #6890f0; color: white; }
        .pokemon-encounter-app .badge-sky { background: #a890f0; color: white; }
        .pokemon-encounter-app img {
            vertical-align: middle;
            width: 40px;
            height: 40px;
        }
        @media (max-width: 600px) {
            .pokemon-encounter-app table { font-size: 12px; }
            .pokemon-encounter-app td, .pokemon-encounter-app th { padding: 4px; }
            .pokemon-encounter-app img { width: 30px; height: 30px; }
        }
        .pokemon-encounter-app .loading {
            text-align: center;
            padding: 50px;
            font-size: 20px;
            color: #3b4cca;
        }
    </style>
</head>
<body>
    <div class="pokemon-encounter-app">
        <h1 style="text-align:center; color:#3b4cca;">宝可梦 去皮去伊 - 完整遭遇数据（归一化+排序）</h1>
        <div id="nav" class="nav-buttons"></div>
        <div id="tables-container"></div>
        <div id="loading" class="loading">⏳ 正在解析数据并生成表格…</div>
    </div>

    <script>
        // ============================================================
        // 1. 原始数据（直接粘贴自您的提供）
        // ============================================================
        const rawData = `
Zone: Cinnabar Island
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Fuchsia City
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Vermilion City
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Lavender Town
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Cerulean City
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Pewter City
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Viridian City
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Pallet Town
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Pokémon Mansion
    Normal Encounters:
        Levels: 39-44
            Ditto (10%)
            Magmar (10%)
            Raticate (20%)
            Grimer (20%)
            Muk (10%)
            Koffing (30%)
Zone: Pokémon Mansion
    Normal Encounters:
        Levels: 39-44
            Mew (01%)
            Magmar (14%)
            Ditto (20%)
            Koffing (20%)
            Weezing (05%)
            Grimer (40%)
Zone: Pokémon Mansion
    Normal Encounters:
        Levels: 39-44
            Mew (01%)
            Magmar (14%)
            Ditto (20%)
            Grimer (20%)
            Weezing (05%)
            Koffing (40%)
Zone: Pokémon Mansion
    Normal Encounters:
        Levels: 39-44
            Mew (01%)
            Magmar (14%)
            Ditto (20%)
            Grimer (20%)
            Muk (05%)
            Koffing (40%)
Zone: Pokémon Tower
    Normal Encounters:
        Levels: 27-32
            Cubone (10%)
            Golbat (05%)
            Zubat (05%)
            Haunter (20%)
            Gastly (60%)
Zone: Pokémon Tower
    Normal Encounters:
        Levels: 27-32
            Cubone (10%)
            Golbat (05%)
            Zubat (05%)
            Haunter (10%)
            Gastly (70%)
Zone: Pokémon Tower
    Normal Encounters:
        Levels: 27-32
            Cubone (10%)
            Golbat (05%)
            Zubat (05%)
            Haunter (05%)
            Gastly (75%)
Zone: Pokémon Tower
    Normal Encounters:
        Levels: 27-32
            Haunter (05%)
            Golbat (05%)
            Zubat (05%)
            Cubone (10%)
            Gastly (75%)
Zone: Cerulean Cave
    Normal Encounters:
        Levels: 51-56
            Psyduck (05%)
            Rhydon (05%)
            Rhyhorn (10%)
            Lickitung (10%)
            Ditto (05%)
            Golduck (15%)
            Graveler (15%)
            Geodude (10%)
            Golbat (15%)
            Zubat (10%)
    Water Encounters:
        Levels: 51-56
            Poliwrath (01%)
            Poliwhirl (09%)
            Poliwag (45%)
            Magikarp (45%)
Zone: Cerulean Cave
        Levels: 51-56
            Chansey (10%)
            Rhyhorn (10%)
            Lickitung (15%)
            Ditto (05%)
            Rhydon (10%)
            Graveler (20%)
            Geodude (05%)
            Golbat (20%)
            Zubat (05%)
Zone: Cerulean Cave
    Normal Encounters:
        Levels: 51-56
            Psyduck (05%)
            Rhydon (05%)
            Rhyhorn (10%)
            Lickitung (10%)
            Ditto (05%)
            Golduck (15%)
            Graveler (15%)
            Geodude (10%)
            Golbat (15%)
            Zubat (10%)
    Water Encounters:
        Levels: 51-56
            Poliwrath (01%)
            Poliwhirl (09%)
            Poliwag (45%)
            Magikarp (45%)
Zone: Route 25
    Normal Encounters:
        Levels: 09-14
            Psyduck (20%)
            Meowth (20%)
            Bellsprout (20%)
            Venonat (20%)
            Gloom (20%)
    Water Encounters:
        Levels: 09-14
            Poliwhirl (10%)
            Poliwag (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 24
    Normal Encounters:
        Levels: 07-12
            Psyduck (20%)
            Meowth (20%)
            Meowth (20%)
            Venonat (20%)
            Pidgey (20%)
    Water Encounters:
        Levels: 07-12
            Tentacruel (10%)
            Tentacool (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 23
    Normal Encounters:
        Levels: 41-46
            Exeggcute (14%)
            Nidorina (19%)
            Nidoran♀ (10%)
            Nidorino (19%)
            Nidoran♂ (10%)
            Nidoqueen (01%)
            Nidoking (01%)
            Exeggutor (01%)
            Fearow (15%)
            Spearow (10%)
    Water Encounters:
        Levels: 41-46
            Poliwhirl (10%)
            Poliwag (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 22
    Normal Encounters:
        Levels: 03-04
            Nidoran♀ (20%)
            Nidoran♂ (20%)
            Rattata (30%)
            Spearow (30%)
    Water Encounters:
        Levels: 03-04
            Poliwhirl (10%)
            Poliwag (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 21
    Normal Encounters:
        Levels: 37-42
            Victreebel (01%)
            Weepinbell (14%)
            Gloom (10%)
            Tangela (15%)
            Pidgeotto (20%)
            Gloom (10%)
            Raticate (20%)
            Rattata (10%)
    Water Encounters:
        Levels: 37-42
            Starmie (01%)
            Tentacruel (09%)
            Staryu (30%)
            Tentacool (30%)
            Magikarp (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 20
    Water Encounters:
        Levels: 39-44
            Gyarados (05%)
            Tentacruel (05%)
            Tentacool (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 20
    Water Encounters:
        Levels: 37-42
            Gyarados (05%)
            Tentacruel (05%)
            Tentacool (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 19
    Water Encounters:
        Levels: 37-42
            Starmie (01%)
            Tentacruel (09%)
            Staryu (30%)
            Tentacool (30%)
            Magikarp (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 18
    Normal Encounters:
        Levels: 33-38
            Dodrio (10%)
            Doduo (20%)
            Raticate (15%)
            Rattata (15%)
            Pidgeotto (20%)
            Pidgey (20%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 18
    Water Encounters:
        Levels: 33-38
            Starmie (01%)
            Tentacruel (09%)
            Staryu (30%)
            Tentacool (30%)
            Magikarp (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 17
    Normal Encounters:
        Levels: 33-38
            Psyduck (15%)
            Rapidash (05%)
            Ponyta (20%)
            Dodrio (05%)
            Doduo (20%)
            Raticate (05%)
            Rattata (05%)
            Eevee (05%)
            Pidgeotto (10%)
            Pidgey (10%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 16
    Normal Encounters:
        Levels: 31-36
            Doduo (25%)
            Raticate (15%)
            Rattata (15%)
            Dodrio (05%)
            Pidgeotto (20%)
            Pidgey (20%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 16
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 15
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 15
    Normal Encounters:
        Levels: 33-38
            Scyther (01%)
            Weepinbell (15%)
            Gloom (15%)
            Venomoth (09%)
            Venonat (15%)
            Tauros (05%)
            Pidgeotto (20%)
            Pidgey (20%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 14
    Normal Encounters:
        Levels: 33-38
            Pinsir (01%)
            Weepinbell (15%)
            Gloom (15%)
            Venomoth (09%)
            Venonat (15%)
            Tauros (05%)
            Pidgeotto (20%)
            Pidgey (20%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 13
    Normal Encounters:
        Levels: 33-38
            Krabby (15%)
            Farfetch’d (10%)
            Weepinbell (15%)
            Gloom (15%)
            Kingler (05%)
            Pidgeotto (20%)
            Pidgey (20%)
    Water Encounters:
        Levels: 33-38
            Seadra (05%)
            Tentacruel (05%)
            Horsea (30%)
            Tentacool (30%)
            Magikarp (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 12
    Normal Encounters:
        Levels: 31-36
            Krabby (15%)
            Farfetch’d (10%)
            Weepinbell (15%)
            Gloom (15%)
            Kingler (05%)
            Pidgeotto (20%)
            Pidgey (20%)
    Water Encounters:
        Levels: 31-36
            Seadra (05%)
            Tentacruel (05%)
            Horsea (30%)
            Tentacool (30%)
            Magikarp (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 11
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 11
    Normal Encounters:
        Levels: 13-18
            Raticate (10%)
            Pidgeotto (10%)
            Mr. Mime (05%)
            Drowzee (25%)
            Rattata (25%)
            Pidgey (25%)
    Water Encounters:
        Levels: 13-18
            Seadra (05%)
            Tentacruel (05%)
            Horsea (30%)
            Tentacool (30%)
            Magikarp (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 10
    Normal Encounters:
        Levels: 18-23
            Krabby (10%)
            Nidorina (05%)
            Nidorino (05%)
            Nidoran♀ (15%)
            Nidoran♂ (15%)
            Raticate (10%)
            Fearow (10%)
            Rattata (15%)
            Spearow (15%)
    Water Encounters:
        Levels: 18-23
            Dragonair (01%)
            Tentacruel (05%)
            Dratini (04%)
            Tentacool (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 10
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 9
    Normal Encounters:
        Levels: 17-22
            Nidorina (05%)
            Nidorino (05%)
            Nidoran♀ (15%)
            Nidoran♂ (15%)
            Raticate (10%)
            Fearow (10%)
            Rattata (20%)
            Spearow (20%)
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 8
    Normal Encounters:
        Levels: 22-27
            Ninetales (01%)
            Kadabra (01%)
            Raticate (15%)
            Pidgeotto (15%)
            Abra (04%)
            Jigglypuff (15%)
            Vulpix (19%)
            Rattata (15%)
            Growlithe (15%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 7
    Normal Encounters:
        Levels: 22-27
            Arcanine (01%)
            Kadabra (01%)
            Raticate (15%)
            Pidgeotto (15%)
            Abra (04%)
            Jigglypuff (15%)
            Growlithe (19%)
            Rattata (15%)
            Vulpix (15%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 6
    Normal Encounters:
        Levels: 11-16
            Pidgeotto (10%)
            Psyduck (10%)
            Abra (05%)
            Jigglypuff (15%)
            Vulpix (20%)
            Growlithe (20%)
            Pidgey (20%)
    Water Encounters:
        Levels: 11-16
            Seaking (10%)
            Goldeen (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 5
    Normal Encounters:
        Levels: 11-16
            Pidgeotto (10%)
            Abra (05%)
            Jigglypuff (15%)
            Vulpix (20%)
            Rattata (30%)
            Growlithe (20%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 4
    Normal Encounters:
        Levels: 07-12
            Psyduck (05%)
            Ekans (20%)
            Sandshrew (35%)
            Mankey (40%)
    Water Encounters:
        Levels: 07-12
            Tentacruel (10%)
            Tentacool (45%)
            Magikarp (45%)
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 4
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 3
    Normal Encounters:
        Levels: 03-08
            Sandshrew (20%)
            Ekans (40%)
            Spearow (40%)
    Sky Encounters:
        Levels: 03-56
            Fearow (40%)
            Spearow (60%)
Zone: Route 2
    Normal Encounters:
        Levels: 03-08
            Bellsprout (20%)
            Oddish (15%)
            Caterpie (15%)
            Rattata (20%)
            Pidgey (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 2
    Normal Encounters:
        Levels: 03-04
            Oddish (20%)
            Weedle (15%)
            Bellsprout (15%)
            Rattata (20%)
            Pidgey (30%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Route 1
    Normal Encounters:
        Levels: 03-04
            Rattata (40%)
            Pidgey (60%)
    Sky Encounters:
        Levels: 03-56
            Pidgeot (05%)
            Pidgeotto (35%)
            Pidgey (60%)
Zone: Victory Road
    Normal Encounters:
        Levels: 41-46
            Rhydon (05%)
            Rhyhorn (10%)
            Onix (10%)
            Machoke (15%)
            Machop (10%)
            Graveler (15%)
            Geodude (10%)
            Golbat (15%)
            Zubat (10%)
Zone: Victory Road
    Normal Encounters:
        Levels: 41-46
            Rhydon (05%)
            Rhyhorn (10%)
            Onix (10%)
            Machoke (15%)
            Machop (10%)
            Graveler (15%)
            Geodude (10%)
            Golbat (15%)
            Zubat (10%)
Zone: Victory Road
    Normal Encounters:
        Levels: 41-46
            Rhydon (05%)
            Rhyhorn (10%)
            Onix (10%)
            Machoke (15%)
            Machop (10%)
            Graveler (15%)
            Geodude (10%)
            Golbat (15%)
            Zubat (10%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (10%)
            Seel (15%)
            Slowbro (10%)
            Slowpoke (15%)
            Golbat (20%)
            Zubat (16%)
    Water Encounters:
        Levels: 39-44
            Cloyster (01%)
            Tentacruel (09%)
            Shellder (30%)
            Tentacool (30%)
            Magikarp (30%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (10%)
            Seel (15%)
            Slowbro (10%)
            Slowpoke (15%)
            Golbat (20%)
            Zubat (16%)
    Water Encounters:
        Levels: 39-44
            Cloyster (01%)
            Tentacruel (09%)
            Shellder (30%)
            Tentacool (30%)
            Magikarp (30%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (05%)
            Seel (20%)
            Slowbro (05%)
            Slowpoke (20%)
            Golbat (20%)
            Zubat (16%)
    Water Encounters:
        Levels: 39-44
            Cloyster (01%)
            Tentacruel (09%)
            Shellder (30%)
            Tentacool (30%)
            Magikarp (30%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (05%)
            Seel (20%)
            Slowbro (05%)
            Slowpoke (20%)
            Golbat (20%)
            Zubat (16%)
    Water Encounters:
        Levels: 39-44
            Cloyster (01%)
            Tentacruel (09%)
            Shellder (30%)
            Tentacool (30%)
            Magikarp (30%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (05%)
            Seel (20%)
            Slowbro (05%)
            Slowpoke (20%)
            Golbat (20%)
            Zubat (16%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (05%)
            Seel (20%)
            Slowbro (05%)
            Slowpoke (20%)
            Golbat (20%)
            Zubat (16%)
Zone: Seafoam Islands
    Normal Encounters:
        Levels: 39-44
            Jynx (14%)
            Dewgong (05%)
            Seel (20%)
            Slowbro (05%)
            Slowpoke (20%)
            Golbat (20%)
            Zubat (16%)
Zone: Diglett’s Cave
    Normal Encounters:
        Levels: 13-18
            Zubat (10%)
            Dugtrio (05%)
            Diglett (85%)
Zone: Power Plant
    Normal Encounters:
        Levels: 37-42
            Electabuzz (14%)
            Muk (05%)
            Koffing (25%)
            Electrode (05%)
            Voltorb (23%)
            Magneton (05%)
            Magnemite (23%)
Zone: Rock Tunnel
    Normal Encounters:
        Levels: 18-23
            Kangaskhan (01%)
            Cubone (09%)
            Rhyhorn (10%)
            Onix (10%)
            Machop (10%)
            Graveler (20%)
            Golbat (20%)
            Geodude (10%)
            Zubat (10%)
Zone: Rock Tunnel
    Normal Encounters:
        Levels: 18-23
            Kangaskhan (01%)
            Cubone (09%)
            Rhyhorn (10%)
            Onix (10%)
            Machop (10%)
            Graveler (10%)
            Golbat (10%)
            Geodude (20%)
            Zubat (20%)
Zone: Mt. Moon
    Normal Encounters:
        Levels: 05-10
            Clefable (01%)
            Onix (01%)
            Clefairy (09%)
            Paras (15%)
            Geodude (34%)
            Zubat (40%)
Zone: Mt. Moon
    Normal Encounters:
        Levels: 05-10
            Onix (01%)
            Clefairy (04%)
            Paras (15%)
            Geodude (40%)
            Zubat (40%)
Zone: Mt. Moon
    Normal Encounters:
        Levels: 05-10
            Onix (01%)
            Clefairy (04%)
            Paras (15%)
            Geodude (40%)
            Zubat (40%)
Zone: Viridian Forest
    Normal Encounters:
        Levels: 03-06
            Bellsprout (10%)
            Beedrill (01%)
            Pikachu (05%)
            Oddish (10%)
            Metapod (10%)
            Weedle (25%)
            Caterpie (24%)
            Pidgey (15%)
        `;

        // ============================================================
        // 2. 中文映射
        // ============================================================
        const nameMap = {
            'Pidgeot': '大比鸟', 'Pidgeotto': '比比鸟', 'Pidgey': '波波',
            'Ditto': '百变怪', 'Magmar': '鸭嘴火兽', 'Raticate': '拉达',
            'Grimer': '臭泥', 'Muk': '臭臭泥', 'Koffing': '瓦斯弹',
            'Mew': '梦幻', 'Weezing': '双弹瓦斯',
            'Cubone': '卡拉卡拉', 'Golbat': '大嘴蝠', 'Zubat': '超音蝠',
            'Haunter': '鬼斯通', 'Gastly': '鬼斯',
            'Psyduck': '可达鸭', 'Rhydon': '钻角犀兽', 'Rhyhorn': '独角犀牛',
            'Lickitung': '大舌头', 'Golduck': '哥达鸭', 'Graveler': '隆隆石',
            'Geodude': '小拳石', 'Poliwrath': '蚊香泳士', 'Poliwhirl': '蚊香君',
            'Poliwag': '蚊香蝌蚪', 'Magikarp': '鲤鱼王', 'Chansey': '吉利蛋',
            'Meowth': '喵喵', 'Bellsprout': '喇叭芽', 'Venonat': '毛球',
            'Gloom': '臭臭花', 'Tentacruel': '毒刺水母', 'Tentacool': '玛瑙水母',
            'Exeggcute': '蛋蛋', 'Nidorina': '尼多娜', 'Nidoran♀': '尼多兰',
            'Nidorino': '尼多力诺', 'Nidoran♂': '尼多朗', 'Nidoqueen': '尼多后',
            'Nidoking': '尼多王', 'Exeggutor': '椰蛋树', 'Fearow': '大嘴雀',
            'Spearow': '烈雀', 'Rattata': '小拉达', 'Victreebel': '大食花',
            'Weepinbell': '口呆花', 'Tangela': '蔓藤怪', 'Starmie': '宝石海星',
            'Staryu': '海星星', 'Gyarados': '暴鲤龙', 'Dodrio': '嘟嘟利',
            'Doduo': '嘟嘟', 'Rapidash': '烈焰马', 'Ponyta': '小火马',
            'Eevee': '伊布', 'Scyther': '飞天螳螂', 'Venomoth': '摩鲁蛾',
            'Tauros': '肯泰罗', 'Pinsir': '凯罗斯', 'Krabby': '大钳蟹',
            'Farfetch’d': '大葱鸭', 'Kingler': '巨钳蟹', 'Seadra': '海刺龙',
            'Horsea': '墨海马', 'Mr. Mime': '魔墙人偶', 'Drowzee': '催眠貘',
            'Dragonair': '哈克龙', 'Dratini': '迷你龙', 'Ninetales': '九尾',
            'Kadabra': '勇基拉', 'Abra': '凯西', 'Jigglypuff': '胖丁',
            'Vulpix': '六尾', 'Growlithe': '卡蒂狗', 'Arcanine': '风速狗',
            'Seaking': '金鱼王', 'Goldeen': '角金鱼', 'Ekans': '阿柏蛇',
            'Sandshrew': '穿山鼠', 'Mankey': '猴怪', 'Oddish': '走路草',
            'Caterpie': '绿毛虫', 'Weedle': '独角虫', 'Onix': '大岩蛇',
            'Machoke': '豪力', 'Machop': '腕力', 'Jynx': '迷唇姐',
            'Dewgong': '白海狮', 'Seel': '小海狮', 'Slowbro': '呆壳兽',
            'Slowpoke': '呆呆兽', 'Cloyster': '刺甲贝', 'Shellder': '大舌贝',
            'Dugtrio': '三地鼠', 'Diglett': '地鼠', 'Electabuzz': '电击兽',
            'Electrode': '顽皮雷弹', 'Voltorb': '霹雳电球', 'Magneton': '三合一磁怪',
            'Magnemite': '小磁怪', 'Kangaskhan': '袋兽', 'Clefable': '皮可西',
            'Clefairy': '皮皮', 'Paras': '派拉斯', 'Beedrill': '大针蜂',
            'Pikachu': '皮卡丘', 'Metapod': '铁甲蛹'
        };

        const zoneMap = {
            'Cinnabar Island': '红莲镇',
            'Fuchsia City': '浅红市',
            'Vermilion City': '枯叶市',
            'Lavender Town': '紫苑镇',
            'Cerulean City': '华蓝市',
            'Pewter City': '深灰市',
            'Viridian City': '常青市',
            'Pallet Town': '真新镇',
            'Pokémon Mansion': '宝可梦屋',
            'Pokémon Tower': '宝可梦塔',
            'Cerulean Cave': '华蓝洞窟',
            'Route 25': '25号道路',
            'Route 24': '24号道路',
            'Route 23': '23号道路',
            'Route 22': '22号道路',
            'Route 21': '21号道路',
            'Route 20': '20号水路',
            'Route 19': '19号水路',
            'Route 18': '18号道路',
            'Route 17': '17号道路',
            'Route 16': '16号道路',
            'Route 15': '15号道路',
            'Route 14': '14号道路',
            'Route 13': '13号道路',
            'Route 12': '12号道路',
            'Route 11': '11号道路',
            'Route 10': '10号道路',
            'Route 9': '9号道路',
            'Route 8': '8号道路',
            'Route 7': '7号道路',
            'Route 6': '6号道路',
            'Route 5': '5号道路',
            'Route 4': '4号道路',
            'Route 3': '3号道路',
            'Route 2': '2号道路',
            'Route 1': '1号道路',
            'Victory Road': '冠军之路',
            'Seafoam Islands': '双子岛',
            'Diglett’s Cave': '地鼠洞穴',
            'Power Plant': '无人发电厂',
            'Rock Tunnel': '岩山隧道',
            'Mt. Moon': '月见山',
            'Viridian Forest': '常青森林'
        };

        const typeOrder = { 'Normal': 1, 'Water': 2, 'Sky': 3 };

        function getChineseName(eng) { return nameMap[eng] || eng; }
        function getChineseZone(eng) { return zoneMap[eng] || eng; }

        // ============================================================
        // 3. 解析函数
        // ============================================================
        function parseRawData(text) {
            const zones = {};
            const blocks = text.split(/Zone:\s*/).filter(b => b.trim().length > 0);
            for (const block of blocks) {
                const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
                if (lines.length === 0) continue;
                const zoneName = lines[0];
                if (!zones[zoneName]) {
                    zones[zoneName] = { encounters: [] };
                }
                let currentType = null;
                let currentLevels = null;
                let currentPokemon = [];
                let i = 1;
                while (i < lines.length) {
                    const line = lines[i];
                    if (line.includes('Encounters:')) {
                        if (currentType && currentPokemon.length > 0) {
                            zones[zoneName].encounters.push({
                                type: currentType,
                                level: currentLevels,
                                pokemon: currentPokemon.slice()
                            });
                            currentPokemon = [];
                        }
                        if (line.includes('Normal')) currentType = 'Normal';
                        else if (line.includes('Water')) currentType = 'Water';
                        else if (line.includes('Sky')) currentType = 'Sky';
                        else currentType = 'Normal';
                        i++;
                        continue;
                    }
                    if (line.startsWith('Levels:')) {
                        currentLevels = line.replace('Levels:', '').trim();
                        i++;
                        continue;
                    }
                    const match = line.match(/^(.+?)\s*\((\d+)%\)$/);
                    if (match) {
                        const engName = match[1].trim();
                        const chance = parseInt(match[2], 10);
                        currentPokemon.push({ eng: engName, chance });
                    }
                    i++;
                }
                if (currentType && currentPokemon.length > 0) {
                    zones[zoneName].encounters.push({
                        type: currentType,
                        level: currentLevels,
                        pokemon: currentPokemon.slice()
                    });
                }
            }
            return zones;
        }

        // ============================================================
        // 4. 渲染（归一化 + 排序）
        // ============================================================
        function renderTables(zones) {
            const container = document.getElementById('tables-container');
            const nav = document.getElementById('nav');
            container.innerHTML = '';
            nav.innerHTML = '';

            // 编号映射
            const idMap = {
                'Pidgeot': 18, 'Pidgeotto': 17, 'Pidgey': 16,
                'Ditto': 132, 'Magmar': 126, 'Raticate': 20,
                'Grimer': 88, 'Muk': 89, 'Koffing': 109,
                'Mew': 151, 'Weezing': 110,
                'Cubone': 104, 'Golbat': 42, 'Zubat': 41,
                'Haunter': 93, 'Gastly': 92,
                'Psyduck': 54, 'Rhydon': 112, 'Rhyhorn': 111,
                'Lickitung': 108, 'Golduck': 55, 'Graveler': 75,
                'Geodude': 74, 'Poliwrath': 62, 'Poliwhirl': 61,
                'Poliwag': 60, 'Magikarp': 129, 'Chansey': 113,
                'Meowth': 52, 'Bellsprout': 69, 'Venonat': 48,
                'Gloom': 44, 'Tentacruel': 73, 'Tentacool': 72,
                'Exeggcute': 102, 'Nidorina': 30, 'Nidoran♀': 29,
                'Nidorino': 33, 'Nidoran♂': 32, 'Nidoqueen': 31,
                'Nidoking': 34, 'Exeggutor': 103, 'Fearow': 22,
                'Spearow': 21, 'Rattata': 19, 'Victreebel': 71,
                'Weepinbell': 70, 'Tangela': 114, 'Starmie': 121,
                'Staryu': 120, 'Gyarados': 130, 'Dodrio': 85,
                'Doduo': 84, 'Rapidash': 78, 'Ponyta': 77,
                'Eevee': 133, 'Scyther': 123, 'Venomoth': 49,
                'Tauros': 128, 'Pinsir': 127, 'Krabby': 98,
                'Farfetch’d': 83, 'Kingler': 99, 'Seadra': 117,
                'Horsea': 116, 'Mr. Mime': 122, 'Drowzee': 96,
                'Dragonair': 148, 'Dratini': 147, 'Ninetales': 38,
                'Kadabra': 64, 'Abra': 63, 'Jigglypuff': 39,
                'Vulpix': 37, 'Growlithe': 58, 'Arcanine': 59,
                'Seaking': 119, 'Goldeen': 118, 'Ekans': 23,
                'Sandshrew': 27, 'Mankey': 56, 'Oddish': 43,
                'Caterpie': 10, 'Weedle': 13, 'Onix': 95,
                'Machoke': 67, 'Machop': 66, 'Jynx': 124,
                'Dewgong': 87, 'Seel': 86, 'Slowbro': 80,
                'Slowpoke': 79, 'Cloyster': 91, 'Shellder': 90,
                'Dugtrio': 51, 'Diglett': 50, 'Electabuzz': 125,
                'Electrode': 101, 'Voltorb': 100, 'Magneton': 82,
                'Magnemite': 81, 'Kangaskhan': 115, 'Clefable': 36,
                'Clefairy': 35, 'Paras': 46, 'Beedrill': 15,
                'Pikachu': 25, 'Metapod': 11
            };

            // ---- 第一步：为每个区域生成最终的行列表（已聚合概率） ----
            const zoneRowsMap = new Map(); // zoneName -> { rows: [], title: chineseName }
            for (const engName of Object.keys(zones)) {
                const data = zones[engName];
                const chineseName = getChineseZone(engName);
                const rawRows = [];
                for (const enc of data.encounters) {
                    const type = enc.type;
                    for (const pkm of enc.pokemon) {
                        const eng = pkm.eng;
                        const chance = pkm.chance;
                        const numId = idMap[eng] || 9999;
                        const chinese = getChineseName(eng);
                        const imgUrl = `https://s.pokeuniv.com/pokemon/icon/${numId}.png`;
                        rawRows.push({
                            id: numId,
                            img: imgUrl,
                            name: chinese,
                            type: type,
                            chance: chance,
                            typeOrder: typeOrder[type] || 99
                        });
                    }
                }
                // 按 (id, type) 聚合概率
                const groupMap = new Map();
                for (const row of rawRows) {
                    const key = `${row.id}|${row.type}`;
                    if (groupMap.has(key)) {
                        groupMap.get(key).chance += row.chance;
                    } else {
                        groupMap.set(key, {
                            id: row.id,
                            img: row.img,
                            name: row.name,
                            type: row.type,
                            typeOrder: row.typeOrder,
                            chance: row.chance
                        });
                    }
                }
                const groupedRows = Array.from(groupMap.values());
                // 排序
                groupedRows.sort((a, b) => {
                    if (a.typeOrder !== b.typeOrder) return a.typeOrder - b.typeOrder;
                    return a.id - b.id;
                });
                zoneRowsMap.set(engName, { rows: groupedRows, title: chineseName });
            }

            // ---- 第二步：按内容（行列表）分组 ----
            const contentGroups = new Map(); // key: 序列化的行字符串 -> { zones: [], rows: [] }
            for (const [engName, { rows, title }] of zoneRowsMap) {
                const rowStrings = rows.map(r => `${r.id}|${r.type}|${r.chance}`).join(';');
                if (!contentGroups.has(rowStrings)) {
                    contentGroups.set(rowStrings, { zones: [], rows: rows });
                }
                contentGroups.get(rowStrings).zones.push(title);
            }

            // ---- 第三步：构建表格数据，并对每个表格进行概率归一化 ----
            const tableData = [];
            for (const [key, group] of contentGroups) {
                const zonesList = group.zones;
                const rows = group.rows;
                const title = zonesList.join(' / ');

                // 归一化：按捕获方式分组，分别将概率总和调整为100
                const typeGroups = new Map(); // type -> array of rows
                for (const row of rows) {
                    if (!typeGroups.has(row.type)) typeGroups.set(row.type, []);
                    typeGroups.get(row.type).push(row);
                }
                const normalizedRows = [];
                for (const [type, typeRows] of typeGroups) {
                    const total = typeRows.reduce((sum, r) => sum + r.chance, 0);
                    if (total === 0) continue;
                    const scale = 100 / total;
                    for (const row of typeRows) {
                        // 保留一位小数
                        const newChance = Math.round(row.chance * scale * 10) / 10;
                        normalizedRows.push({ ...row, chance: newChance });
                    }
                }
                // 重新排序
                normalizedRows.sort((a, b) => {
                    if (a.typeOrder !== b.typeOrder) return a.typeOrder - b.typeOrder;
                    return a.id - b.id;
                });

                tableData.push({ title, rows: normalizedRows });
            }

            // ---- 第四步：按标题升序排序 ----
            tableData.sort((a, b) => a.title.localeCompare(b.title, 'zh'));

            // ---- 第五步：生成表格 ----
            for (const { title, rows } of tableData) {
                const id = 'zone-' + title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-');

                // 导航按钮
                const link = document.createElement('a');
                link.href = '#' + id;
                link.textContent = title;
                nav.appendChild(link);

                // 表格
                const table = document.createElement('table');
                table.id = id;
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                headerRow.className = 'zone-header';
                const th = document.createElement('th');
                th.colSpan = 5;
                th.textContent = title;
                headerRow.appendChild(th);
                thead.appendChild(headerRow);
                table.appendChild(thead);

                const colRow = document.createElement('tr');
                ['编号', '图片', '名称', '捕获方式', '捕获概率'].forEach(text => {
                    const th = document.createElement('th');
                    th.textContent = text;
                    colRow.appendChild(th);
                });
                table.appendChild(colRow);

                const tbody = document.createElement('tbody');
                for (const row of rows) {
                    const tr = document.createElement('tr');
                    // 编号
                    const tdId = document.createElement('td');
                    tdId.textContent = row.id === 9999 ? '??' : row.id;
                    tr.appendChild(tdId);
                    // 图片
                    const tdImg = document.createElement('td');
                    const img = document.createElement('img');
                    img.src = row.img;
                    img.alt = row.name;
                    img.loading = 'lazy';
                    tdImg.appendChild(img);
                    tr.appendChild(tdImg);
                    // 名称
                    const tdName = document.createElement('td');
                    tdName.textContent = row.name;
                    tr.appendChild(tdName);
                    // 捕获方式
                    const tdType = document.createElement('td');
                    let badgeClass = 'badge-normal';
                    if (row.type === 'Water') badgeClass = 'badge-water';
                    else if (row.type === 'Sky') badgeClass = 'badge-sky';
                    const span = document.createElement('span');
                    span.className = `capture-badge ${badgeClass}`;
                    span.textContent = row.type === 'Normal' ? '普通' : (row.type === 'Water' ? '水上' : '天空');
                    tdType.appendChild(span);
                    tr.appendChild(tdType);
                    // 概率
                    const tdChance = document.createElement('td');
                    tdChance.textContent = row.chance + '%';
                    tr.appendChild(tdChance);
                    tbody.appendChild(tr);
                }
                table.appendChild(tbody);
                container.appendChild(table);
            }

            document.getElementById('loading').style.display = 'none';
        }

        // ============================================================
        // 5. 执行
        // ============================================================
        (function() {
            const zones = parseRawData(rawData);
            renderTables(zones);
        })();
    </script>
</body>
</html>