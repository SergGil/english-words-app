// English Words App — js/core/theme.ts
// Dark/light theme toggle

(function() {
  const saved = localStorage.getItem('ew_theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = '☀️';
  }
})();

document.getElementById('btn-theme')!.addEventListener('click', function() {
  const isDark = document.body.classList.toggle('dark');
  this.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('ew_theme', isDark ? 'dark' : 'light');
});
