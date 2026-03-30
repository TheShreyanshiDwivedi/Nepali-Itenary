// ── NAV SCROLL EFFECT ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ──
const burger = document.getElementById('burger');
const navMobile = document.getElementById('nav-mobile');
burger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

// ── DAY TABS ──
const dtabs = document.querySelectorAll('.dtab');
const dayPanels = document.querySelectorAll('.day-panel');
dtabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const day = tab.dataset.day;
    dtabs.forEach(t => t.classList.remove('active'));
    dayPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById('day-' + day);
    if (target) target.classList.add('active');
  });
});

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.overview-card, .food-card, .market-card, .rule-card, .buy-item, .pack-cat'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => io.observe(el));

// ── SMOOTH NAV ACTIVE HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + id
          ? 'var(--saffron)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── HERO PARALLAX ──
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }
});