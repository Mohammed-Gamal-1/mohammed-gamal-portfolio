(() => {
  'use strict';
  const menu = document.getElementById('nav-menu');
  const nav = document.getElementById('main-nav');
  if (menu && nav) {
    const close = () => {nav.classList.remove('is-open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation');};
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', e => {if(e.key==='Escape') close();});
    document.addEventListener('click', e => { if(!nav.contains(e.target) && !menu.contains(e.target)) close(); });
  }
  document.querySelectorAll('#year').forEach(el => el.textContent = String(new Date().getFullYear()));
  const targets = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(items => {
      items.forEach(item => {if(item.isIntersecting){item.target.classList.add('is-visible'); observer.unobserve(item.target);}});
    }, {threshold:0.07,rootMargin:'0px 0px -40px 0px'});
    targets.forEach(el => observer.observe(el));
  } else {targets.forEach(el => el.classList.add('is-visible'));}
})();
