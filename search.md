---
layout: page
title: 搜索
permalink: /search/
---

<input type="text" id="search-input" placeholder="输入关键词或标签搜索..." style="width:100%">
<ul id="results"></ul>

<div id="pagination" style="margin-top:10px;">
  <button id="prev-page" disabled>上一页</button>
  <span id="page-info"></span>
  <button id="next-page" disabled>下一页</button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.7.2/simple-jekyll-search.min.js"></script>
<script>
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');

  const resultsPerPage = 10;
  let currentPage = 1;
  let allResults = [];

  const sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: document.createElement('div'), // 临时容器，不直接显示
    json: '/search.json',
    searchResultTemplate: `
      <li>
        <a href="{url}">{title}</a> <small>({date})</small><br>
        <strong>Tags:</strong> {tags}<br>
        <span style="color:#666;font-size:90%;">{content}</span>
      </li>
    `,
    noResultsText: '',
    fuzzy: false,
    limit: 1000, // 先获取所有匹配结果
    searchableFields: ['title', 'tags', 'content'],
    searchCallback: function(results) {
      allResults = results;
      currentPage = 1;
      renderPage();
    }
  });

  // 多关键词高亮函数
  function highlight(text, keywords) {
    if (!keywords || keywords.length === 0) return text;
    keywords.forEach(word => {
      if (word) {
        const regex = new RegExp(`(${word})`, 'gi');
        text = text.replace(regex, '<mark>$1</mark>');
      }
    });
    return text;
  }

  // 渲染分页结果
  function renderPage() {
    const keywordArr = searchInput.value.trim().split(/\s+/);
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const pageResults = allResults.slice(start, end);

    resultsContainer.innerHTML = '';
    pageResults.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = highlight(
        r.title + ` <small>(${r.date})</small><br><strong>Tags:</strong> ${r.tags}<br><span style="color:#666;font-size:90%;">${r.content}</span>`,
        keywordArr
      );
      li.querySelector('a').href = r.url;
      resultsContainer.appendChild(li);
    });

    // 更新显示
    const ul = document.getElementById('results');
    ul.innerHTML = '';
    Array.from(resultsContainer.children).forEach(li => ul.appendChild(li));

    // 更新分页按钮
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= allResults.length;
    pageInfo.textContent = `第 ${currentPage} 页 / 共 ${Math.ceil(allResults.length / resultsPerPage)} 页`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage * resultsPerPage < allResults.length) {
      currentPage++;
      renderPage();
    }
  });

  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
      resultsContainer.innerHTML = '';
      pageInfo.textContent = '';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
    }
  });
</script>

<style>
  mark { background: yellow; font-weight: bold; }
  #pagination button { margin: 0 5px; }
</style>