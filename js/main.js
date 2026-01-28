// =======================
// Dark mode toggle & persistence
// =======================
const toggle = document.getElementById('themeToggle');

// Function to apply dark mode
function applyDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  
  // Update toggle UI (if checkbox)
  if (toggle.type === 'checkbox') {
    toggle.checked = isDark;
  }
}

// Apply saved theme on page load
let savedTheme = localStorage.getItem('theme');
if (savedTheme === null) {
  // First visit: optional system preference
  savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false';
}
applyDarkMode(savedTheme === 'true');

// Toggle click handler
toggle.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  applyDarkMode(isDark);
  localStorage.setItem('theme', isDark);
});

// =======================
// Scroll reveal
// =======================
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));
