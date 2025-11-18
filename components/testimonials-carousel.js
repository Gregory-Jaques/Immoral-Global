/* Testimonials Carousel - Standalone Module
 * Uso: incluir este archivo en una página que tenga la siguiente estructura HTML:
 * - Contenedor del carrusel: <div id="testimonials-carousel">
 * - Pista deslizante: <div class="testimonials-track"> (contiene las slides)
 * - Slides: <div class="testimonial-slide">...</div>
 * - Botones opcionales: <button id="testimonials-prev"></button> y <button id="testimonials-next"></button>
 * Nota: Asegúrate de tener estilos para .testimonials-track y .testimonial-slide.
 */
(function(){
  function initTestimonialsCarousel() {
    const container = document.getElementById('testimonials-carousel');
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('testimonials-prev');
    const nextBtn = document.getElementById('testimonials-next');

    if (!container || !track || slides.length === 0) return;

    // Variables para el arrastre
    let currentTranslateX = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let initialTransform = 0;
    let slideWidth = 0;
    let maxTranslateX = 0;
    let minTranslateX = 0;
    let hasDragged = false;
    const dragThreshold = 5;
    let autoplayInterval;
    let currentSlideIndex = 0;

    // Calcular dimensiones
    function calculateDimensions() {
      // Cada card ocupa el 100% del contenedor para centrado perfecto
      slideWidth = container.offsetWidth;
      maxTranslateX = 0;
      minTranslateX = -(slideWidth * (slides.length - 1));
    }

    // Actualizar posición del carrusel
    function updateCarousel() {
      track.style.transform = `translateX(${currentTranslateX}px)`;
    }

    // Mover a la siguiente slide
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      currentTranslateX = -currentSlideIndex * slideWidth;
      track.style.transition = 'transform 0.3s ease-out';
      updateCarousel();
      setTimeout(() => { track.style.transition = 'none'; }, 300);
    }

    // Mover a la slide anterior
    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      currentTranslateX = -currentSlideIndex * slideWidth;
      track.style.transition = 'transform 0.3s ease-out';
      updateCarousel();
      setTimeout(() => { track.style.transition = 'none'; }, 300);
    }

    // Iniciar autoplay
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    // Detener autoplay
    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Snap a la slide más cercana
    function snapToClosestSlide() {
      const slideIndex = Math.round(-currentTranslateX / slideWidth);
      const targetTranslateX = -slideIndex * slideWidth;
      // Limitar dentro de los bounds
      currentTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, targetTranslateX));
      currentSlideIndex = Math.round(-currentTranslateX / slideWidth);
      track.style.transition = 'transform 0.3s ease-out';
      updateCarousel();
      setTimeout(() => { track.style.transition = 'none'; }, 300);
    }

    // Eventos de mouse
    function handleMouseDown(e) {
      isDragging = true;
      hasDragged = false;
      startX = e.clientX;
      currentX = e.clientX;
      initialTransform = currentTranslateX;
      container.style.cursor = 'grabbing';
      track.style.transition = 'none';
      stopAutoplay();
      e.preventDefault();
    }

    function handleMouseMove(e) {
      if (!isDragging) return;
      currentX = e.clientX;
      const deltaX = currentX - startX;
      if (Math.abs(deltaX) > dragThreshold) {
        hasDragged = true;
      }
      currentTranslateX = initialTransform + deltaX;
      // Limitar el arrastre
      currentTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, currentTranslateX));
      updateCarousel();
    }

    function handleMouseUp() {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = 'grab';
      if (hasDragged) {
        snapToClosestSlide();
      }
      startAutoplay();
    }

    // Eventos de touch
    function handleTouchStart(e) {
      isDragging = true;
      hasDragged = false;
      startX = e.touches[0].clientX;
      currentX = e.touches[0].clientX;
      initialTransform = currentTranslateX;
      track.style.transition = 'none';
      stopAutoplay();
      e.preventDefault();
    }

    function handleTouchMove(e) {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      if (Math.abs(deltaX) > dragThreshold) {
        hasDragged = true;
      }
      currentTranslateX = initialTransform + deltaX;
      // Limitar el arrastre
      currentTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, currentTranslateX));
      updateCarousel();
      e.preventDefault();
    }

    function handleTouchEnd() {
      if (!isDragging) return;
      isDragging = false;
      if (hasDragged) {
        snapToClosestSlide();
      }
      startAutoplay();
    }

    // Botones de navegación móvil
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
      });
    }

    // Hover: pausar/reanudar autoplay
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Event listeners principales
    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Solo habilitar eventos táctiles en desktop (pantallas >= 1280px)
    function checkScreenSize() { return window.innerWidth >= 1280; }
    function updateTouchEvents() {
      if (checkScreenSize()) {
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd);
      } else {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    }

    // Inicialización
    updateTouchEvents();
    window.addEventListener('resize', updateTouchEvents);
    window.addEventListener('resize', () => { calculateDimensions(); snapToClosestSlide(); });
    calculateDimensions();
    updateCarousel();
    startAutoplay();
  }

  // Exponer y auto-inicializar
  window.initTestimonialsCarousel = initTestimonialsCarousel;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
  } else {
    initTestimonialsCarousel();
  }
})();