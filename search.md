---
layout: page
title: 搜索
permalink: /search/
---

<form action="https://www.google.com/search" method="get" target="_blank">
  <input type="hidden" name="q" value="site:rwho.top">
  <input type="text" name="q" id="search-box" placeholder="请输入搜索内容" onfocus="this.value=''">
  <button type="submit">搜索</button>
</form>


<input type="text" id="search-input" placeholder="Search...">
<ul id="results"></ul>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.7.2/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: 'No results found'
  });
</script>
