document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  // Helper to apply dark mode
  function applyDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);

    // Update toggle UI if it's a checkbox or switch
    if (toggle.type === 'checkbox') {
      toggle.checked = isDark;
    }
  }

  // =========================
  // Load saved theme from localStorage
  // =========================
  let savedTheme = localStorage.getItem('theme');

  if (savedTheme === null) {
    // Optional: respect system preference for first-time visitors
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false';
  }

  applyDarkMode(savedTheme === 'true');

  // =========================
  // Toggle dark mode on click
  // =========================
  toggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyDarkMode(isDark);
    localStorage.setItem('theme', isDark);
  });

  // =========================
  // Scroll reveal (unchanged)
  // =========================
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
});
