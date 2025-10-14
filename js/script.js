// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Sticky header effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Typing Animation
document.addEventListener('DOMContentLoaded', function () {
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        const typed = new Typed('#typed-name', {
            strings: ['NANDIPHA ZIGWEBILE'],
            typeSpeed: 80,
            backSpeed: 30,
            loop: false,
            showCursor: true,
            startDelay: 300,
            onComplete: (self) => {
                self.cursor.style.animation = 'blink 1s infinite';
            }
        });
    }
});

// Projects Carousel Auto-Scroll
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("projectsCarousel");
    if (carousel) {
        let scrollSpeed = 1;
        let animationId;

        function autoScroll() {
            carousel.scrollLeft += scrollSpeed;
            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
                carousel.scrollLeft = 0;
            }
            animationId = requestAnimationFrame(autoScroll);
        }

        autoScroll();

        carousel.addEventListener("mouseenter", () => {
            cancelAnimationFrame(animationId);
        });

        carousel.addEventListener("mouseleave", () => {
            autoScroll();
        });
    }
});

// Education Timeline Reveal
const timelineItems = document.querySelectorAll('.timeline-item');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    timelineItems.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            item.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Scroll to top button (safe check)
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}