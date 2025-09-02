---
layout: page
title: 搜索
permalink: /search/
---

<input type="text" id="search-input" placeholder="输入关键词或标签搜索，用空格或逗号分隔..." style="width:100%">
<ul id="results"></ul>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.7.2/simple-jekyll-search.min.js"></script>
<script>
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results');

  const sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsContainer,
    json: '/search.json',
    searchResultTemplate: `
      <li>
        <a href="{url}">{title}</a> <small>({date})</small><br>
        <strong>标签：</strong> {tags}<br>
        <span style="color:#666;font-size:90%;">{content}</span>
      </li>
    `,
    noResultsText: '没有找到结果 😢',
    fuzzy: false,
    limit: 10
  });

  // 高亮函数
  function highlight(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // 监听输入框变化，在结果里高亮关键词
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim();
    if (!keyword) return;

    // 延迟一点点，等 Simple-Jekyll-Search 渲染结果
    setTimeout(() => {
      resultsContainer.querySelectorAll('li').forEach(li => {
        li.innerHTML = highlight(li.innerHTML, keyword);
      });
    }, 100);
  });
</script>

<style>
mark {
  background: yellow;
  font-weight: bold;
}

ul#results {
  list-style: none; /* 去掉所有li前的圆点 */
  padding-left: 0;  /* 去掉默认缩进 */
  margin-left: 0;
}
</style>

