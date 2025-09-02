---
layout: page
title: 搜索
permalink: /search/
---

<input type="text" id="search-input" placeholder="输入关键词或标签搜索..." style="width:100%">
<ul id="results"></ul>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.7.2/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results'),
    json: '/search.json',
    searchResultTemplate: `
      <li>
        <a href="{url}">{title}</a> <small>({date})</small><br>
        <strong>Tags:</strong> {tags}<br>
        <span style="color:#666;font-size:90%;">{content}</span>
      </li>
    `,
    noResultsText: '没有找到结果 😢',
    fuzzy: false,
    limit: 10
  });
</script>