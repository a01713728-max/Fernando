/**
 * certificates.js
 * Módulo de Acciones Transaccionales.
 * Gestión de PDFs, copias al portapapeles y notificaciones Toast.
 */

window.AppCertificates = (() => {
    
    const handleViewCertificate = (e) => {
        const btn = e.currentTarget;
        const certId = btn.getAttribute('data-cert-id');
        
        // RUTA CORREGIDA: Apunta a tu estructura física real
        const pdfUrl = `/assets/certificates/certificate-${certId}.pdf`;
        
        // Abrir PDF en pestaña nueva garantizando seguridad
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    const handleCopyEmail = async (e) => {
        const btn = e.currentTarget;
        const email = btn.getAttribute('data-email');
        const toast = document.getElementById('copy-feedback');

        try {
            await navigator.clipboard.writeText(email);
            showToast(toast);
        } catch (err) {
            console.error('Fallo al copiar el correo: ', err);
            // Fallback para navegadores antiguos
            fallbackCopyTextToClipboard(email);
            showToast(toast);
        }
    };

    const showToast = (toastElement) => {
        if (!toastElement) return;
        
        // Reseteamos clases para re-activar la animación
        toastElement.classList.remove('is-active');
        toastElement.setAttribute('aria-hidden', 'false');
        
        requestAnimationFrame(() => {
            toastElement.classList.add('is-active');
        });

        // Ocultar automáticamente después de 3 segundos
        setTimeout(() => {
            toastElement.classList.remove('is-active');
            toastElement.setAttribute('aria-hidden', 'true');
        }, 3000);
    };

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Evitar scroll lateral
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback falló', err);
        }
        document.body.removeChild(textArea);
    };

    return {
        init: () => {
            // Event Delegation para un mejor rendimiento
            const certBtns = document.querySelectorAll('[data-action="view-cert"]');
            certBtns.forEach(btn => btn.addEventListener('click', handleViewCertificate));

            const copyBtns = document.querySelectorAll('[data-action="copy-email"]');
            copyBtns.forEach(btn => btn.addEventListener('click', handleCopyEmail));
        }
    };
})();