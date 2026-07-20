(function () {
  'use strict';

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 2000);
  });

  const menuBtn = document.getElementById('menuBtn');
  const menuClose = document.getElementById('menuClose');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  menuBtn.addEventListener('click', () => {
    fullscreenMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  menuClose.addEventListener('click', closeMenu);

  fullscreenMenu.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    fullscreenMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  const revealEls = document.querySelectorAll('.reveal, .section, .stat-card');
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(el => observer.observe(el));
})();