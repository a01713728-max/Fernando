/**
 * main.js
 * Orquestador Principal.
 * Coordina el ciclo de vida del sitio, espera al DOM y levanta la arquitectura.
 */

(() => {
    'use strict';

    // Función de arranque de la aplicación
    const bootstrapApplication = () => {
        try {
            // Inicialización estructurada y ordenada
            window.AppLanguage.init();
            window.AppNavigation.init();
            window.AppAnimations.init();
            window.AppCertificates.init();
            
            console.info("⚙️ Portfolio Architecture Loaded - All modules operational.");
            
        } catch (error) {
            // Graceful degradation para evitar que la página se rompa
            console.error("Error crítico durante la inicialización de módulos:", error);
        }
    };

    // Garantizar que todo el HTML ha sido procesado antes de inyectar lógica
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapApplication);
    } else {
        bootstrapApplication();
    }
})();