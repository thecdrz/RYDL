function toggleTheme() {
  const body = document.body;
  const favicon = document.getElementById('favicon');
  const appleFavicon = document.getElementById('appleFavicon');
  const isTeal = body.classList.contains('teal-theme');

  if (isTeal) {
    body.classList.remove('teal-theme');
    if (favicon) favicon.href = 'app-icon-cream.png';
    if (appleFavicon) appleFavicon.href = 'app-icon-cream.png';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('teal-theme');
    if (favicon) favicon.href = 'app-icon-teal.png';
    if (appleFavicon) appleFavicon.href = 'app-icon-teal.png';
    localStorage.setItem('theme', 'teal');
  }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const favicon = document.getElementById('favicon');
  const appleFavicon = document.getElementById('appleFavicon');

  if (savedTheme === 'teal') {
    document.body.classList.add('teal-theme');
    if (favicon) favicon.href = 'app-icon-teal.png';
    if (appleFavicon) appleFavicon.href = 'app-icon-teal.png';
  }
});