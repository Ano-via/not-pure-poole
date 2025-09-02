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

  // 截取 content 长度函数
  function truncateContent(content, length = 100) {
    if (!content) return '';
    return content.length > length ? content.slice(0, length) + '…' : content;
  }

  // 根据屏幕宽度决定截断长度
  function getContentDisplay(content) {
    if (window.innerWidth <= 768) { // 手机端
      return truncateContent(content, 100);
    } else { // 桌面端
      return content;
    }
  }

  const sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsContainer,
    json: '/search.json',
    searchResultTemplate: `
      <li>
        <a href="{url}">{title}</a> <small>({date})</small><br>
        <strong>标签：</strong> {tags}<br>
        <span class="search-content" style="color:#666;font-size:90%;">{content}</span>
      </li>
    `,
    noResultsText: '没有找到结果 😢',
    fuzzy: false,
    limit: 10
  });

  // 渲染完成后处理 content 截断
  function updateContentDisplay() {
    resultsContainer.querySelectorAll('.search-content').forEach(span => {
      span.textContent = getContentDisplay(span.textContent);
    });
  }

  // 初始渲染后处理一次
  setTimeout(updateContentDisplay, 200);

  // 监听输入框变化，高亮并截断
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim();
    if (!keyword) return;

    setTimeout(() => {
      resultsContainer.querySelectorAll('li').forEach(li => {
        li.innerHTML = li.innerHTML.replace(/<mark>|<\/mark>/g, ''); // 去掉旧高亮
        const contentSpan = li.querySelector('.search-content');
        if (contentSpan) {
          contentSpan.textContent = getContentDisplay(contentSpan.textContent);
        }
        li.innerHTML = li.innerHTML.replace(new RegExp(`(${keyword})`, 'gi'), '<mark>$1</mark>');
      });
    }, 100);
  });

  // 屏幕尺寸改变时重新处理 content
  window.addEventListener('resize', updateContentDisplay);
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
</style>
