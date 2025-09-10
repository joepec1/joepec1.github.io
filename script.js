// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
  const nav = document.querySelector('.site-nav');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
  }
});
