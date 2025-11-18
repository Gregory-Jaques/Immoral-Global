// Simple testimonials carousel
class SimpleTestimonials {
    constructor() {
        this.carousel = document.getElementById('simple-testimonials-carousel');
        this.track = this.carousel.querySelector('.testimonials-track');
        this.slides = this.carousel.querySelectorAll('.testimonial-card');
        this.prevBtn = document.getElementById('simple-testimonials-prev');
        this.nextBtn = document.getElementById('simple-testimonials-next');
        
        this.currentIndex = 0;
        this.slideWidth = this.slides[0].offsetWidth;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        // Set initial position
        this.updatePosition();
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Responsive handling
        window.addEventListener('resize', () => {
            this.slideWidth = this.slides[0].offsetWidth;
            this.updatePosition();
        });
    }
    
    updatePosition() {
        const offset = -this.currentIndex * this.slideWidth;
        this.track.style.transform = `translateX(${offset}px)`;
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updatePosition();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updatePosition();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SimpleTestimonials();
});