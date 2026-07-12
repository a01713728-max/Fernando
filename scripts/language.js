/**
 * language.js
 * Módulo de Internacionalización (i18n).
 * Gestiona el cambio de idioma, persistencia y actualización del DOM.
 */

window.AppLanguage = (() => {
    const DICTIONARY = {
        es: {
            "nav.home": "Inicio",
            "nav.about": "Sobre mí",
            "nav.education": "Formación",
            "nav.technologies": "Tecnologías",
            "nav.projects": "Proyectos",
            "nav.certifications": "Certificaciones",
            "nav.contact": "Contacto",
            "hero.name": "Fernando Zavala Domínguez",
            "hero.title": "Estudiante de Ingeniería en Control Automático y Robótica",
            "hero.headline": "Ingeniería de control aplicada al desarrollo y optimización de sistemas dinámicos.",
            "hero.description": "Orientado al diseño, simulación e implementación de soluciones en automatización y control industrial. Enfocado en la integración efectiva en entornos de planta mediante el aprendizaje continuo y la resolución metodológica de problemas.",
            "hero.btnPrimary": "Ver Proyectos",
            "hero.btnSecondary": "Descargar CV (PDF)",
            "about.title": "Sobre mí",
            "about.p1": "Como estudiante de Ingeniería en Control Automático y Robótica, mi objetivo es integrar sólidamente los fundamentos teóricos del control de procesos con la práctica operativa en entornos de planta y mantenimiento industrial.",
            "about.p2": "Mi formación académica me ha permitido desarrollar un enfoque estructurado para el diagnóstico y resolución de problemas técnicos. Me caracterizo por una adaptabilidad acelerada ante nuevas herramientas tecnológicas, disposición para el trabajo colaborativo en equipos multidisciplinarios y un compromiso firme con la educación continua para aportar valor medible a la industria.",
            "education.title": "Formación Académica",
            "education.uni.degree": "Ingeniería en Control Automático y Robótica",
            "education.uni.status": "En curso",
            "education.uni.institution": "Universidad Autónoma del Estado de Hidalgo (UAEH)",
            "education.uni.description": "Formación integral enfocada en instrumentación industrial, modelado matemático de sistemas físicos, control automático (clásico y moderno), robótica manipuladora y móvil, así como en la programación e integración de controladores lógicos programables (PLC) aplicados a líneas de producción autónomas.",
            "technologies.title": "Software y Tecnologías",
            "tech.cat.control": "Control y Simulación",
            "tech.cat.automation": "Automatización e Integración",
            "tech.cat.dev": "Desarrollo y Código",
            "projects.title": "Proyectos Aplicados",
            "projects.p1.name": "Aeropéndulo",
            "projects.p1.desc": "Diseño, modelado e implementación de un sistema de aeropéndulo para el análisis de algoritmos de control de velocidad y posición angular mediante un motor DC acoplado a una hélice de empuje.",
            "projects.p2.name": "Péndulo Invertido",
            "projects.p2.desc": "Desarrollo de un sistema mecánico subastreado clásico. Modelado de variables de estado y diseño de un controlador dinámico orientado a la estabilización vertical en el punto de equilibrio inestable.",
            "projects.p3.name": "Robot Evasor",
            "projects.p3.desc": "Vehículo autónomo móvil equipado con sensores ultrasónicos e infrarrojos. Programación de lógicas algorítmicas de evasión reactiva en tiempo real y optimización de consumo energético en motores.",
            "projects.p4.name": "Banda Transportadora Automatizada",
            "projects.p4.desc": "Diseño e integración de una línea de transporte automatizada controlada por PLC. Clasificación física de objetos mediante sensores inductivos, capacitivos y ópticos con indexación de tiempos.",
            "certifications.title": "Certificaciones Técnicas",
            "certs.btnView": "Ver",
            "contact.title": "Contacto",
            "contact.lead": "¿Interesado en colaborar, realizar proyectos de desarrollo tecnológico o consultorías técnicas?",
            "contact.btnCopy": "Copiar Correo",
            "contact.btnDownload": "Descargar Currículum Vitae Completo (PDF)",
            "contact.copySuccess": "¡Correo copiado al portapapeles!",
            "footer.rights": "Todos los derechos reservados."
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.education": "Education",
            "nav.technologies": "Technologies",
            "nav.projects": "Projects",
            "nav.certifications": "Certifications",
            "nav.contact": "Contact",
            "hero.name": "Fernando Zavala Domínguez",
            "hero.title": "Automatic Control and Robotics Engineering Student",
            "hero.headline": "Control engineering applied to the development and optimization of dynamic systems.",
            "hero.description": "Focused on the design, simulation, and implementation of solutions in automation and industrial control. Dedicated to effective plant integration through continuous learning and methodical problem-solving.",
            "hero.btnPrimary": "View Projects",
            "hero.btnSecondary": "Download CV (PDF)",
            "about.title": "About me",
            "about.p1": "As an Automatic Control and Robotics Engineering student, my goal is to solidly integrate the theoretical foundations of process control with practical operations within plant environments and industrial maintenance.",
            "about.p2": "My academic background has enabled me to develop a structured approach for diagnosing and resolving technical issues. I am characterized by an accelerated adaptability to new technological tools, readiness for collaborative work in multidisciplinary teams, and a firm commitment to continuous education to deliver measurable value to the industry.",
            "education.title": "Education",
            "education.uni.degree": "B.S. Automatic Control and Robotics Engineering",
            "education.uni.status": "In progress",
            "education.uni.institution": "Autonomous University of Hidalgo State (UAEH)",
            "education.uni.description": "Comprehensive training focused on industrial instrumentation, mathematical modeling of physical systems, automatic control (classical and modern), manipulative and mobile robotics, as well as the programming and integration of programmable logic controllers (PLCs) applied to autonomous production lines.",
            "technologies.title": "Software and Technologies",
            "tech.cat.control": "Control & Simulation",
            "tech.cat.automation": "Automation & Integration",
            "tech.cat.dev": "Development & Code",
            "projects.title": "Featured Projects",
            "projects.p1.name": "Aeropendulum",
            "projects.p1.desc": "Design, modeling, and implementation of an aeropendulum system to analyze speed and angular position control algorithms using a DC motor coupled with a thrust propeller.",
            "projects.p2.name": "Inverted Pendulum",
            "projects.p2.desc": "Development of a classical underactuated mechanical system. State-variable modeling and dynamic controller design aimed at vertical stabilization at the unstable equilibrium point.",
            "projects.p3.name": "Obstacle-Avoiding Robot",
            "projects.p3.desc": "Autonomous mobile vehicle equipped with ultrasonic and infrared sensors. Programming of real-time reactive evasion algorithmic logic and optimization of motor energy consumption.",
            "projects.p4.name": "Automated Conveyor Belt",
            "projects.p4.desc": "Design and integration of an automated transport line controlled by PLC. Physical classification of objects using inductive, capacitive, and optical sensors with time indexing.",
            "certifications.title": "Technical Certifications",
            "certs.btnView": "View",
            "contact.title": "Contact",
            "contact.lead": "Interested in collaborating, developing technological projects, or technical consulting?",
            "contact.btnCopy": "Copy Email",
            "contact.btnDownload": "Download Full Resume (PDF)",
            "contact.copySuccess": "Email copied to clipboard!",
            "footer.rights": "All rights reserved."
        }
    };

    let currentLang = 'es';

    const getInitialLanguage = () => {
        const storedLang = localStorage.getItem('site_lang');
        if (storedLang) return storedLang;
        
        const browserLang = navigator.language.slice(0, 2);
        return DICTIONARY[browserLang] ? browserLang : 'es';
    };

    const updateDOM = () => {
        document.documentElement.lang = currentLang;
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            // Reemplazo seguro si existe la traducción
            if (DICTIONARY[currentLang] && DICTIONARY[currentLang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = DICTIONARY[currentLang][key];
                } else {
                    el.innerHTML = DICTIONARY[currentLang][key];
                }
            }
        });
    };

    const setLanguage = (lang) => {
        if (!DICTIONARY[lang]) return;
        currentLang = lang;
        localStorage.setItem('site_lang', currentLang);
        updateDOM();
        
        // Comunicación modular: Emitimos evento global
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: currentLang } 
        }));
    };

    const toggleLanguage = () => {
        setLanguage(currentLang === 'es' ? 'en' : 'es');
    };

    const bindEvents = () => {
        const langBtns = document.querySelectorAll('[data-action="switch-language"]');
        langBtns.forEach(btn => {
            btn.addEventListener('click', toggleLanguage);
        });
    };

    return {
        init: () => {
            currentLang = getInitialLanguage();
            updateDOM();
            bindEvents();
        },
        getCurrentLang: () => currentLang
    };
})();