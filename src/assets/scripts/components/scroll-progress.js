const bar = document.createElement('div');
bar.id = 'scroll-progress';
bar.setAttribute('aria-hidden', 'true');
document.body.prepend(bar);

function update() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  bar.style.setProperty('--scroll', pct + '%');
}

window.addEventListener('scroll', update, { passive: true });
update();
