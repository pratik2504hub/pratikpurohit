(function(){
  var d = document;

  // Mobile menu
  var menuBtn = d.querySelector('.menu-btn'), nav = d.getElementById('nav');
  if (menuBtn && nav) {
    var setMenu = function(open){
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    menuBtn.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); });
    nav.addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
    d.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  // Case study accordion (homepage)
  d.querySelectorAll('.case').forEach(function(c){
    var btn = c.querySelector('.case-btn');
    if (!btn) return;
    btn.addEventListener('click', function(){
      btn.setAttribute('aria-expanded', String(c.classList.toggle('open')));
    });
  });

  // Case study index: highlight the study in view
  var index = d.querySelector('[data-spy]');
  if (index && 'IntersectionObserver' in window) {
    var links = {};
    index.querySelectorAll('a[href^="#"]').forEach(function(a){ links[a.getAttribute('href').slice(1)] = a; });
    var current = null;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting || !links[en.target.id]) return;
        if (current) current.removeAttribute('aria-current');
        current = links[en.target.id];
        current.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(links).forEach(function(id){ var s = d.getElementById(id); if (s) io.observe(s); });
  }

  // Skills: core-only toggle
  var toggle = d.querySelector('[data-core-toggle]');
  if (toggle) {
    var target = d.getElementById(toggle.getAttribute('aria-controls'));
    toggle.hidden = false;
    toggle.addEventListener('click', function(){
      var on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', String(on));
      if (target) target.classList.toggle('core-only', on);
    });
  }

  // Contact: copy to clipboard
  d.querySelectorAll('[data-copy]').forEach(function(b){
    if (!navigator.clipboard) return;
    b.hidden = false;
    var label = b.textContent;
    b.addEventListener('click', function(){
      navigator.clipboard.writeText(b.getAttribute('data-copy')).then(function(){
        b.textContent = 'Copied';
        setTimeout(function(){ b.textContent = label; }, 1800);
      });
    });
  });
})();
