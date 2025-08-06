// Configuración y variables globales
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 70,
    loadingDuration: 2000
};

// Utilidades
const utils = {
    // Selector de elementos
    $(selector) {
        return document.querySelector(selector);
    },
    
    // Selector múltiple
    $$(selector) {
        return document.querySelectorAll(selector);
    },
    
    // Agregar event listener
    on(element, event, handler) {
        if (element) {
            element.addEventListener(event, handler);
        }
    },
    
    // Throttle function para optimizar eventos
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },
    
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Gestión de la pantalla de carga
class LoadingManager {
    constructor() {
        this.loadingScreen = utils.$('#loading-screen');
        this.init();
    }
    
    init() {
        // Simular tiempo de carga
        setTimeout(() => {
            this.hideLoading();
        }, CONFIG.loadingDuration);
        
        // Ocultar cuando todo esté cargado
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoading();
            }, 500);
        });
    }
    
    hideLoading() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }
}

// Gestión de la navegación
class NavigationManager {
    constructor() {
        this.navbar = utils.$('.navbar');
        this.navToggle = utils.$('#nav-toggle');
        this.navMenu = utils.$('#nav-menu');
        this.navLinks = utils.$$('.nav-link');
        this.sections = utils.$$('section[id]');
        
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupActiveLinks();
    }
    
    setupMobileMenu() {
        utils.on(this.navToggle, 'click', () => {
            this.navMenu.classList.toggle('active');
            this.navToggle.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        this.navLinks.forEach(link => {
            utils.on(link, 'click', () => {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer click fuera
        utils.on(document, 'click', (e) => {
            if (!this.navToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
            }
        });
    }
    
    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            utils.on(link, 'click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = utils.$(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - CONFIG.scrollOffset;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    setupScrollEffects() {
        const handleScroll = utils.throttle(() => {
            // Efecto de navbar al hacer scroll
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, 10);
        
        utils.on(window, 'scroll', handleScroll);
    }
    
    setupActiveLinks() {
        const handleScroll = utils.throttle(() => {
            let current = '';
            
            this.sections.forEach(section => {
                const sectionTop = section.offsetTop - CONFIG.scrollOffset - 50;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 10);
        
        utils.on(window, 'scroll', handleScroll);
    }
}

// Gestión de animaciones de scroll
class ScrollAnimations {
    constructor() {
        this.elements = utils.$$('.fade-in, .skill-category, .project-card, .service-card, .stat-item');
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.addFadeInClasses();
    }
    
    addFadeInClasses() {
        this.elements.forEach(element => {
            if (!element.classList.contains('fade-in')) {
                element.classList.add('fade-in');
            }
        });
    }
    
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);
        
        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Gestión del formulario de contacto
class ContactForm {
    constructor() {
        this.form = utils.$('#contact-form');
        this.fields = {
            name: utils.$('#name'),
            email: utils.$('#email'),
            subject: utils.$('#subject'),
            message: utils.$('#message')
        };
        this.submitBtn = utils.$('.btn-submit');
        
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.setupValidation();
        this.setupSubmission();
    }
    
    setupValidation() {
        // Validación en tiempo real
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            if (field) {
                utils.on(field, 'blur', () => this.validateField(fieldName));
                utils.on(field, 'input', () => this.clearError(fieldName));
            }
        });
    }
    
    validateField(fieldName) {
        const field = this.fields[fieldName];
        const value = field.value.trim();
        const errorElement = utils.$(`#${fieldName}-error`);
        
        let isValid = true;
        let errorMessage = '';
        
        // Validaciones específicas
        switch (fieldName) {
            case 'name':
                if (!value) {
                    errorMessage = 'El nombre es requerido';
                    isValid = false;
                } else if (value.length < 2) {
                    errorMessage = 'El nombre debe tener al menos 2 caracteres';
                    isValid = false;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    errorMessage = 'El email es requerido';
                    isValid = false;
                } else if (!emailRegex.test(value)) {
                    errorMessage = 'Por favor ingresa un email válido';
                    isValid = false;
                }
                break;
                
            case 'subject':
                if (!value) {
                    errorMessage = 'El asunto es requerido';
                    isValid = false;
                } else if (value.length < 5) {
                    errorMessage = 'El asunto debe tener al menos 5 caracteres';
                    isValid = false;
                }
                break;
                
            case 'message':
                if (!value) {
                    errorMessage = 'El mensaje es requerido';
                    isValid = false;
                } else if (value.length < 10) {
                    errorMessage = 'El mensaje debe tener al menos 10 caracteres';
                    isValid = false;
                }
                break;
        }
        
        // Mostrar/ocultar error
        if (errorElement) {
            errorElement.textContent = errorMessage;
            if (isValid) {
                errorElement.classList.remove('show');
                field.style.borderColor = '#10b981';
            } else {
                errorElement.classList.add('show');
                field.style.borderColor = '#ef4444';
            }
        }
        
        return isValid;
    }
    
    clearError(fieldName) {
        const field = this.fields[fieldName];
        const errorElement = utils.$(`#${fieldName}-error`);
        
        if (errorElement && field.value.trim()) {
            errorElement.classList.remove('show');
            field.style.borderColor = '';
        }
    }
    
    validateForm() {
        let isValid = true;
        
        Object.keys(this.fields).forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    setupSubmission() {
        utils.on(this.form, 'submit', async (e) => {
            e.preventDefault();
            
            if (!this.validateForm()) {
                this.showNotification('Por favor corrige los errores en el formulario', 'error');
                return;
            }
            
            await this.submitForm();
        });
    }
    
    async submitForm() {
        // Mostrar estado de carga
        this.submitBtn.classList.add('loading');
        this.submitBtn.disabled = true;
        
        try {
            // Simular envío del formulario
            await this.simulateFormSubmission();
            
            // Éxito
            this.showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
            this.form.reset();
            this.clearAllErrors();
            
        } catch (error) {
            // Error
            this.showNotification('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
            console.error('Error al enviar formulario:', error);
            
        } finally {
            // Restaurar estado del botón
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }
    
    simulateFormSubmission() {
        return new Promise((resolve, reject) => {
            // Simular tiempo de envío
            setTimeout(() => {
                // Simular éxito (90% de probabilidad)
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Error simulado'));
                }
            }, 2000);
        });
    }
    
    clearAllErrors() {
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            const errorElement = utils.$(`#${fieldName}-error`);
            
            if (errorElement) {
                errorElement.classList.remove('show');
            }
            if (field) {
                field.style.borderColor = '';
            }
        });
    }
    
    showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Agregar estilos si no existen
        if (!utils.$('.notification-styles')) {
            const styles = document.createElement('style');
            styles.className = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    z-index: 10000;
                    transform: translateX(400px);
                    transition: transform 0.3s ease;
                    max-width: 400px;
                }
                .notification.show {
                    transform: translateX(0);
                }
                .notification-success {
                    border-left: 4px solid #10b981;
                }
                .notification-error {
                    border-left: 4px solid #ef4444;
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 20px;
                }
                .notification-success i {
                    color: #10b981;
                }
                .notification-error i {
                    color: #ef4444;
                }
                .notification-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #6b7280;
                    margin-left: auto;
                }
                .notification-close:hover {
                    color: #374151;
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Agregar al DOM
        document.body.appendChild(notification);
        
        // Mostrar con animación
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Configurar cierre
        const closeBtn = notification.querySelector('.notification-close');
        const closeNotification = () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };
        
        utils.on(closeBtn, 'click', closeNotification);
        
        // Auto-cerrar después de 5 segundos
        setTimeout(closeNotification, 5000);
    }
}

// Efectos adicionales
class EffectsManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupHoverEffects();
        this.setupParallaxEffect();
        this.setupTypingEffect();
    }
    
    setupHoverEffects() {
        // Efecto de hover en cards
        const cards = utils.$$('.project-card, .service-card, .skill-category');
        cards.forEach(card => {
            utils.on(card, 'mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            utils.on(card, 'mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
    
    setupParallaxEffect() {
        const heroSection = utils.$('.hero');
        if (!heroSection) return;
        
        const handleScroll = utils.throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${rate}px)`;
            }
        }, 10);
        
        utils.on(window, 'scroll', handleScroll);
    }
    
    setupTypingEffect() {
        const subtitle = utils.$('.hero-subtitle');
        if (!subtitle) return;
        
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Iniciar después de que se oculte la pantalla de carga
        setTimeout(typeWriter, CONFIG.loadingDuration + 500);
    }
}

// Gestión de rendimiento
class PerformanceManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }
    
    lazyLoadImages() {
        const images = utils.$$('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback para navegadores sin soporte
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
    
    preloadCriticalResources() {
        // Precargar fuentes críticas
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
    }
}

// Inicialización de la aplicación
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }
    
    initializeComponents() {
        try {
            // Inicializar componentes
            new LoadingManager();
            new NavigationManager();
            new ScrollAnimations();
            new ContactForm();
            new EffectsManager();
            new PerformanceManager();
            
            console.log('✅ Portafolio inicializado correctamente');
        } catch (error) {
            console.error('❌ Error al inicializar el portafolio:', error);
        }
    }
}

// Inicializar la aplicación
new App();

// Exportar para uso global si es necesario
window.PortfolioApp = {
    utils,
    CONFIG
};

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registro falló: ', registrationError);
            });
    });
}

// Manejo de errores globales
window.addEventListener('error', (event) => {
    console.error('Error global capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesa rechazada no manejada:', event.reason);
});