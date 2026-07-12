/**
 * animations.js
 * Módulo de Motion Design.
 * Inyecta clases dinámicas para activar animaciones GPU.
 */

window.AppAnimations = (() => {
    // Definimos qué elementos requieren revelado en pantalla
    const revealSelectors = [
        '.section-title',
        '.about-content',
        '.card-education',
        '.tech-category',
        '.skills-column',
        '.card-project',
        '.card-certificate',
        '.contact-card'
    ];

    const setupRevealElements = () => {
        const elements = document.querySelectorAll(revealSelectors.join(', '));
        
        // Preparamos elementos agregando la clase base estática
        elements.forEach(el => {
            el.classList.add('reveal-element');
        });

        // Observer optimizado para rendimiento
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Evita reflows usando requestAnimationFrame
                    requestAnimationFrame(() => {
                        entry.target.classList.add('is-visible');
                    });
                    // Dejar de observar una vez revelado (animación de entrada única)
                    obs.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -15% 0px', // Trigger al 15% del borde inferior
            threshold: 0
        });

        elements.forEach(el => observer.observe(el));
    };

    const animateHero = () => {
        // La secuencia de entrada del Hero inicia después de preparar el DOM
        const heroElements = document.querySelectorAll('.hero-content > *, .hero-image-wrapper');
        heroElements.forEach((el, index) => {
            el.classList.add('reveal-element');
            // Staggered effect (cascada temporal) usando un delay calculable
            setTimeout(() => {
                requestAnimationFrame(() => {
                    el.classList.add('is-visible');
                });
            }, index * 100); 
        });
    };

    return {
        init: () => {
            // Deshabilitar animaciones si el usuario prefiere movimiento reducido (Accesibilidad)
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) return;

            setupRevealElements();
            animateHero();
        }
    };
})();