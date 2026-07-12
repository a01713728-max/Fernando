/**
 * navigation.js
 * Módulo de Navegación.
 * Gestiona el header dinámico, menú móvil, scrollspy y scroll suave.
 */

window.AppNavigation = (() => {
    // Variables para selectores
    let header, menuToggle, primaryNav, navLinks, sections;

    // --- Control Visual del Header (Scroll) ---
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };

    // --- Accesibilidad y Menú Móvil ---
    const toggleMenu = (forceClose = false) => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        const willExpand = forceClose ? false : !isExpanded;

        menuToggle.setAttribute('aria-expanded', willExpand);
        primaryNav.classList.toggle('is-open', willExpand);
        
        // Bloqueo de scroll en body para evitar scroll en el fondo
        document.body.style.overflow = willExpand ? 'hidden' : '';
    };

    const handleEscape = (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            toggleMenu(true);
            menuToggle.focus(); // Retorna el foco de forma lógica
        }
    };

    // --- Navegación Suave (Smooth Scroll) ---
    const handleSmoothScroll = (e) => {
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            toggleMenu(true); // Cierra menú móvil si estaba abierto
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // --- Scrollspy de Alto Rendimiento (Intersection Observer) ---
    const setupScrollspy = () => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Detecta la sección que ocupa el centro de la pantalla
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.removeAttribute('aria-current');
                        link.classList.remove('is-active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.setAttribute('aria-current', 'page');
                            link.classList.add('is-active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    };

    return {
        init: () => {
            // Asignación de selectores
            header = document.getElementById('header');
            menuToggle = document.querySelector('[data-action="toggle-menu"]');
            primaryNav = document.getElementById('primary-navigation');
            navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
            sections = document.querySelectorAll('section[id]');

            // Protección contra nulos
            if (!header || !menuToggle || !primaryNav) return;

            // Event Listeners Optimizados
            window.addEventListener('scroll', handleScroll, { passive: true });
            menuToggle.addEventListener('click', () => toggleMenu());
            document.addEventListener('keydown', handleEscape);
            
            navLinks.forEach(link => {
                link.addEventListener('click', handleSmoothScroll);
            });

            setupScrollspy();
            handleScroll(); // Trigger inicial
        }
    };
})();