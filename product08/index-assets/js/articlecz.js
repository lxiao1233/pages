(function () {
  var target = document.getElementById('article-date');
  if (!target) return;
  target.textContent = new Intl.DateTimeFormat('cs-CZ', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(new Date());
}());
