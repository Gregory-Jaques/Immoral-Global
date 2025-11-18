(()=>{
  const overlay = document.getElementById('mobileMenuOverlay');
  const openBtn = document.getElementById('mobileMenuOpenBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');

  if (!overlay || !openBtn || !closeBtn) return;

  const open = () => {
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const close = () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    // Colapsar submenús al cerrar
    document.querySelectorAll('#mobileMenuOverlay [id^="mobile-submenu-"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('#mobileMenuOverlay [data-target]').forEach(btn => {
      btn.setAttribute('aria-expanded','false');
      const icon = btn.querySelector('.arrow-icon');
      if (icon) icon.classList.remove('rotate-180');
    });
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // Despliegue de submenús
  document.querySelectorAll('#mobileMenuOverlay [data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (!target) return;

      const isHidden = target.classList.contains('hidden');
      // Cerrar otros submenús
      document.querySelectorAll('#mobileMenuOverlay [id^="mobile-submenu-"]').forEach(el => {
        if (el !== target) el.classList.add('hidden');
      });
      document.querySelectorAll('#mobileMenuOverlay [data-target]').forEach(b => {
        if (b !== btn) {
          b.setAttribute('aria-expanded', 'false');
          const i = b.querySelector('.arrow-icon');
          if (i) i.classList.remove('rotate-180');
        }
      });

      if (isHidden) {
        target.classList.remove('hidden');
        btn.setAttribute('aria-expanded','true');
        const icon = btn.querySelector('.arrow-icon');
        if (icon) icon.classList.add('rotate-180');
      } else {
        target.classList.add('hidden');
        btn.setAttribute('aria-expanded','false');
        const icon = btn.querySelector('.arrow-icon');
        if (icon) icon.classList.remove('rotate-180');
      }
    });
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      close();
    }
  });
})();