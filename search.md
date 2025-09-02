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
const resultsContainer = document.getElementById('results');
const pagination = document.getElementById('pagination');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

let allResults = [];
let currentPage = 1;
const resultsPerPage = 10; // 每页10条

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
  noResultsText: '没有找到结果 😢',
  fuzzy: false,
  limit: 1000
});

// 高亮多个关键词
function highlightMultiple(text, keywords) {
  if (!keywords || keywords.length === 0) return text;
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// 计算匹配度：匹配关键词数量
function computeScore(item, keywords) {
  if (!keywords || keywords.length === 0) return 0;
  let score = 0;
  const text = [item.title, item.tags, item.content].join(' ').toLowerCase();
  keywords.forEach(k => {
    if (k) {
      const regex = new RegExp(k.toLowerCase(), 'g');
      const matches = text.match(regex);
      if (matches) score += matches.length;
    }
  });
  return score;
}

// 渲染当前页
function renderPage(page) {
  const start = (page - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  const pageResults = allResults.slice(start, end);

  resultsContainer.innerHTML = pageResults.map(r => `
    <li>
      <a href="${r.url}">${r.title}</a> <small>(${r.date})</small><br>
      <strong>Tags:</strong> ${r.tags}<br>
      <span style="color:#666;font-size:90%;">${r.content}</span>
    </li>
  `).join('');

  const keywordInput = searchInput.value.trim();
  const keywords = keywordInput ? keywordInput.split(/[\s,]+/) : [];
  resultsContainer.querySelectorAll('li').forEach(li => {
    li.innerHTML = highlightMultiple(li.innerHTML, keywords);
  });

  if (allResults.length === 0) {
    pagination.style.display = 'none';
  } else {
    pagination.style.display = 'block';
    prevBtn.disabled = page === 1;
    nextBtn.disabled = end >= allResults.length;
    pageInfo.textContent = `第 ${page} 页`;
  }
}

// 监听搜索结果生成
searchInput.addEventListener('input', () => {
  currentPage = 1;
  setTimeout(() => {
    const keywordInput = searchInput.value.trim();
    const keywords = keywordInput ? keywordInput.split(/[\s,]+/) : [];

    // 提取结果
    allResults = Array.from(resultsContainer.querySelectorAll('li')).map(li => ({
      url: li.querySelector('a').href,
      title: li.querySelector('a').textContent,
      date: li.querySelector('small').textContent.replace(/[()]/g,''),
      tags: li.querySelector('strong + text') ? li.querySelector('strong + text').textContent : '',
      content: li.querySelector('span').textContent
    }));

    // 根据匹配度排序
    allResults.forEach(r => r.score = computeScore(r, keywords));
    allResults.sort((a,b) => b.score - a.score);

    renderPage(currentPage);
  }, 100);
});

// 分页按钮事件
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});
nextBtn.addEventListener('click', () => {
  if (currentPage * resultsPerPage < allResults.length) {
    currentPage++;
    renderPage(currentPage);
  }
});
</script>

<style>
mark {
  background: yellow;
  font-weight: bold;
}
</style>

