/* responsive.js — Immo24.tn | Shared mobile nav logic */
(function () {
  function init() {
    var btn = document.querySelector('.nav-hamburger');
    var menu = document.querySelector('.nav-mobile');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) close();
    });

    // Close on any nav link click
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });

    function close() {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
