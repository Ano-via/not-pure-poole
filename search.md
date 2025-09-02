---
layout: page
title: 搜索
permalink: /search/
---

<input type="text" id="search-input" placeholder="输入关键词或标签搜索，用空格或逗号分隔..." style="width:100%">
<ul id="results"></ul>
<div id="pagination" style="margin-top:10px; display:none;">
  <button id="prev-page" disabled>上一页</button>
  <span id="page-info">第 1 页</span>
  <button id="next-page" disabled>下一页</button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.7.2/simple-jekyll-search.min.js"></script>
<script>
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.createElement('div'); // 临时容器
  const ulContainer = document.getElementById('results');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');

  const resultsPerPage = 10;
  let currentPage = 1;
  let allResults = [];

  const sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsContainer,
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
    limit: 1000,
    searchableFields: ['title', 'tags', 'content'],
    searchCallback: function(results) {
      allResults = results;
      currentPage = 1;
      renderPage();
    }
  });

  // 高亮函数（多关键词）
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

  // 渲染分页
  function renderPage() {
    const keywords = searchInput.value.trim().split(/\s+/);
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const pageResults = allResults.slice(start, end);

    ulContainer.innerHTML = '';
    pageResults.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = highlight(
        r.title + ` <small>(${r.date})</small><br><strong>Tags:</strong> ${r.tags}<br><span style="color:#666;font-size:90%;">${r.content}</span>`,
        keywords
      );
      li.querySelector('a').href = r.url;
      ulContainer.appendChild(li);
    });

    // 更新分页按钮和页码
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

  // 清空输入时隐藏结果
  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
      ulContainer.innerHTML = '';
      pageInfo.textContent = '';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
    }
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

