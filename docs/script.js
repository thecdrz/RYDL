function applyThemeAssets(isTeal) {
  const logo = document.getElementById('pageLogo');
  if (logo) {
    const tealSrc = logo.getAttribute('data-teal') || 'RYDL-Logo-Teal.png';
    const lightSrc = logo.getAttribute('data-light') || 'RYDL-Logo-Light.png';
    logo.src = isTeal ? tealSrc : lightSrc;
  }
}

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
    applyThemeAssets(false);
  } else {
    body.classList.add('teal-theme');
    if (favicon) favicon.href = 'app-icon-teal.png';
    if (appleFavicon) appleFavicon.href = 'app-icon-teal.png';
    localStorage.setItem('theme', 'teal');
    applyThemeAssets(true);
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
    applyThemeAssets(true);
  } else {
    applyThemeAssets(false);
  }
});