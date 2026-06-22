/* responsive.js — Immo24.tn | Shared mobile nav logic */
(function () {
  function init() {
    var btn = document.querySelector('.nav-hamburger');
    var menu = document.querySelector('.nav-mobile');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
      btn.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
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
      btn.classList.remove('active');
      document.body.style.overflow = '';
      if (btn.querySelector('i')) btn.querySelector('i').className = 'fas fa-bars';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
