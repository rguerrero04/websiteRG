// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for same-page links
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Project filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.dataset.filter;
  cards.forEach(c => {
    const tags = c.dataset.tags.split(' ');
    c.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
  });
}));

// Theme toggle & system preference
const themeToggle = document.getElementById('themeToggle');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
const saved = localStorage.getItem('theme');
if (saved) document.body.classList.toggle('light', saved === 'light');
else document.body.classList.toggle('light', prefersLight.matches);

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
