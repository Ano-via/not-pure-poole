document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
  
    fetch('/search.json')
      .then(res => res.json())
      .then(data => {
        searchInput.addEventListener('input', function() {
          let results = [];
          const query = this.value.toLowerCase();
          
          if (query.length > 2) {
            results = data.filter(item => 
              item.title.toLowerCase().includes(query) || 
              item.content.toLowerCase().includes(query)
            );
          }
  
          showResults(results);
        });
      });
  
    function showResults(results) {
      resultsContainer.innerHTML = '';
      results.forEach(result => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${result.url}">${result.title}</a>`;
        resultsContainer.appendChild(li);
      });
    }
  });