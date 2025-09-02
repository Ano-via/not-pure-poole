---
layout: page
title: 搜索
permalink: /search/
---

<input type="text" id="search-input" placeholder="输入关键词或标签搜索，用空格或逗号分隔..." style="width:100%">
<ul id="results"></ul>
<div id="pagination" style="text-align:center; margin-top:10px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.7.2/simple-jekyll-search.min.js"></script>
<script>
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');
const paginationContainer = document.getElementById('pagination');

let allResults = []; 
let currentPage = 1;
const perPage = 10;
const maxPageButtons = 5; // 显示当前页附近最多5个分页按钮

const sjs = SimpleJekyllSearch({
  searchInput: searchInput,
  resultsContainer: resultsContainer,
  json: '/search.json',
  searchResultTemplate: '',
  noResultsText: '没有找到结果 😢',
  fuzzy: false,
  limit: 1000, 
  searchCallback: function(results) {
    allResults = results;
    currentPage = 1;
    renderPage();
  }
});

function highlight(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function renderPage() {
  const keyword = searchInput.value.trim();
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pageResults = allResults.slice(start, end);

  resultsContainer.innerHTML = pageResults.map(item => {
    let html = `
      <li>
        <a href="${item.url}">${item.title}</a> <small>(${item.date})</small><br>
        <strong>标签：</strong> ${item.tags}<br>
        <span style="color:#666;font-size:90%;">${item.content}</span>
      </li>
    `;
    return highlight(html, keyword);
  }).join('');

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(allResults.length / perPage);
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let html = '';

  // 上一页
  html += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="goPage(${currentPage-1})">上一页</button> `;

  // 当前页附近分页按钮
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons/2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button ${i === currentPage ? 'disabled' : ''} onclick="goPage(${i})">${i}</button> `;
  }

  // 下一页
  html += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="goPage(${currentPage+1})">下一页</button>`;

  paginationContainer.innerHTML = html;
}

function goPage(page) {
  if (page < 1 || page > Math.ceil(allResults.length / perPage)) return;
  currentPage = page;
  renderPage();
}

searchInput.addEventListener('input', () => {
  if (allResults.length > 0) renderPage();
});
</script>

<style>
mark {
  background: yellow;
  font-weight: bold;
}
ul#results {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}
#pagination button {
  margin: 0 3px;
  padding: 3px 8px;
  cursor: pointer;
}
#pagination button[disabled] {
  font-weight: bold;
  background-color: #eee;
  cursor: default;
}
</style>
