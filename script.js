// Configuración y variables globales
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 70,
    loadingDuration: 2000
};

// Translations
const TRANSLATIONS = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Tecnologías',
            projects: 'Proyectos',
            services: 'Servicios',
            contact: 'Contacto'
        },
        hero: {
            greeting: 'Hola, soy',
            title: 'Desarrollador Full Stack & Especialista en Automatización',
            description: '4+ años creando soluciones web escalables, automatizaciones y aplicaciones modernas. Transformo ideas en experiencias digitales excepcionales.',
            viewProjects: 'Ver Proyectos',
            contact: 'Contactar'
        },
        about: {
            title: 'Sobre mí',
            subtitle: 'Desarrollador apasionado por la innovación y la automatización',
            description1: 'Soy un desarrollador Full Stack con más de 4 años de experiencia especializado en crear soluciones web escalables y sistemas de automatización. Mi pasión por la tecnología me impulsa a estar siempre actualizado con las últimas tendencias y mejores prácticas.',
            description2: 'Me enfoco en escribir código limpio, mantenible y eficiente, siempre buscando optimizar procesos y mejorar la experiencia del usuario. Disfruto trabajando tanto en el frontend como en el backend, creando aplicaciones completas desde la concepción hasta el despliegue.',
            stats: {
                experience: 'Años de Experiencia',
                projects: 'Proyectos Completados',
                satisfaction: 'Satisfacción del Cliente'
            }
        },
        skills: {
            title: 'Stack Técnico',
            subtitle: 'Tecnologías y herramientas que domino',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de Datos',
            devops: 'DevOps',
            automation: 'Automatización'
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Algunos de mis trabajos más recientes',
            viewProject: 'Ver Proyecto',
            fittracker: {
                title: 'FitTracker Pro - App Fitness',
                description: 'Landing multilingüe (ES/EN/FR) con React y diseño responsive. Aplicación completa para seguimiento de rutinas de ejercicio y progreso fitness.'
            },
            taskflow: {
                title: 'TaskFlow AI - SaaS Dashboard',
                description: 'Dashboard interactivo para automatización y productividad. Plataforma SaaS con IA integrada para optimización de flujos de trabajo.'
            },
            stylehub: {
                title: 'StyleHub - E-commerce',
                description: 'Tienda online con carrito funcional y gestión de productos. E-commerce completo con pasarela de pagos y panel de administración.'
            }
        },
        services: {
            title: 'Servicios',
            subtitle: 'Soluciones tecnológicas adaptadas a tus necesidades',
            development: {
                title: 'Desarrollo desde cero',
                description: 'Creación de aplicaciones web completas desde la planificación hasta el despliegue, utilizando las mejores prácticas y tecnologías modernas.'
            },
            cms: {
                title: 'CMS/WordPress personalizado',
                description: 'Desarrollo de sitios web con WordPress personalizado, temas a medida y funcionalidades específicas para tu negocio.'
            },
            nocode: {
                title: 'No-code/Low-code',
                description: 'Implementación rápida de soluciones usando plataformas como Wix, Webflow y otras herramientas no-code para proyectos ágiles.'
            },
            automation: {
                title: 'Automatización de procesos',
                description: 'Creación de bots y flujos automatizados para optimizar procesos empresariales y aumentar la productividad.'
            },
            migration: {
                title: 'Migración y modernización',
                description: 'Actualización de sistemas legacy a tecnologías modernas, mejorando rendimiento, seguridad y mantenibilidad.'
            }
        },
        contact: {
            title: 'Contacto',
            subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
            ready: {
                title: '¿Listo para comenzar tu proyecto?',
                description: 'Estoy disponible para nuevos proyectos y colaboraciones. No dudes en contactarme para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel.'
            },
            email: 'Email',
            phone: 'Teléfono',
            location: 'Ubicación',
            remote: 'Disponible para trabajo remoto',
            form: {
                name: 'Nombre *',
                email: 'Email *',
                subject: 'Asunto *',
                message: 'Mensaje *',
                namePlaceholder: 'Tu nombre',
                emailPlaceholder: 'tu@email.com',
                subjectPlaceholder: 'Asunto del mensaje',
                messagePlaceholder: 'Cuéntame sobre tu proyecto...',
                send: 'Enviar Mensaje',
                sending: 'Enviando...'
            }
        },
        footer: {
            copyright: '© 2024 Jostin - Full Stack Developer. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Technologies',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I\'m',
            title: 'Full Stack Developer & Automation Specialist',
            description: '4+ years creating scalable web solutions, automations and modern applications. I transform ideas into exceptional digital experiences.',
            viewProjects: 'View Projects',
            contact: 'Contact'
        },
        about: {
            title: 'About Me',
            subtitle: 'Developer passionate about innovation and automation',
            description1: 'I am a Full Stack developer with over 4 years of experience specialized in creating scalable web solutions and automation systems. My passion for technology drives me to always stay updated with the latest trends and best practices.',
            description2: 'I focus on writing clean, maintainable and efficient code, always seeking to optimize processes and improve user experience. I enjoy working on both frontend and backend, creating complete applications from conception to deployment.',
            stats: {
                experience: 'Years of Experience',
                projects: 'Completed Projects',
                satisfaction: 'Client Satisfaction'
            }
        },
        skills: {
            title: 'Technical Stack',
            subtitle: 'Technologies and tools I master',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Databases',
            devops: 'DevOps',
            automation: 'Automation'
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Some of my most recent work',
            viewProject: 'View Project',
            fittracker: {
                title: 'FitTracker Pro - Fitness App',
                description: 'Multilingual landing page (ES/EN/FR) with React and responsive design. Complete application for tracking exercise routines and fitness progress.'
            },
            taskflow: {
                title: 'TaskFlow AI - SaaS Dashboard',
                description: 'Interactive dashboard for automation and productivity. SaaS platform with integrated AI for workflow optimization.'
            },
            stylehub: {
                title: 'StyleHub - E-commerce',
                description: 'Online store with functional cart and product management. Complete e-commerce with payment gateway and admin panel.'
            }
        },
        services: {
            title: 'Services',
            subtitle: 'Technology solutions tailored to your needs',
            development: {
                title: 'Development from scratch',
                description: 'Creation of complete web applications from planning to deployment, using best practices and modern technologies.'
            },
            cms: {
                title: 'Custom CMS/WordPress',
                description: 'Development of websites with custom WordPress, custom themes and specific functionalities for your business.'
            },
            nocode: {
                title: 'No-code/Low-code',
                description: 'Rapid implementation of solutions using platforms like Wix, Webflow and other no-code tools for agile projects.'
            },
            automation: {
                title: 'Process automation',
                description: 'Creation of bots and automated workflows to optimize business processes and increase productivity.'
            },
            migration: {
                title: 'Migration and modernization',
                description: 'Updating legacy systems to modern technologies, improving performance, security and maintainability.'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Have a project in mind? Let\'s talk!',
            ready: {
                title: 'Ready to start your project?',
                description: 'I am available for new projects and collaborations. Feel free to contact me to discuss how I can help you achieve your goals.'
            },
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            remote: 'Available for remote work',
            form: {
                name: 'Name *',
                email: 'Email *',
                subject: 'Subject *',
                message: 'Message *',
                namePlaceholder: 'Your name',
                emailPlaceholder: 'your@email.com',
                subjectPlaceholder: 'Message subject',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                sending: 'Sending...'
            }
        },
        footer: {
            copyright: '© 2024 Jostin - Full Stack Developer. All rights reserved.'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            skills: 'Technologies',
            projects: 'Projets',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Bonjour, je suis',
            title: 'Développeur Full Stack & Spécialiste en Automatisation',
            description: '4+ années créant des solutions web évolutives, automatisations et applications modernes. Je transforme les idées en expériences numériques exceptionnelles.',
            viewProjects: 'Voir les Projets',
            contact: 'Contact'
        },
        about: {
            title: 'À propos de moi',
            subtitle: 'Développeur passionné par l\'innovation et l\'automatisation',
            description1: 'Je suis un développeur Full Stack avec plus de 4 ans d\'expérience spécialisé dans la création de solutions web évolutives et de systèmes d\'automatisation. Ma passion pour la technologie me pousse à rester toujours à jour avec les dernières tendances et meilleures pratiques.',
            description2: 'Je me concentre sur l\'écriture de code propre, maintenable et efficace, cherchant toujours à optimiser les processus et améliorer l\'expérience utilisateur. J\'aime travailler aussi bien sur le frontend que le backend, créant des applications complètes de la conception au déploiement.',
            stats: {
                experience: 'Années d\'Expérience',
                projects: 'Projets Terminés',
                satisfaction: 'Satisfaction Client'
            }
        },
        skills: {
            title: 'Stack Technique',
            subtitle: 'Technologies et outils que je maîtrise',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de données',
            devops: 'DevOps',
            automation: 'Automatisation'
        },
        projects: {
            title: 'Projets en vedette',
            subtitle: 'Quelques-uns de mes travaux les plus récents',
            viewProject: 'Voir le projet',
            fittracker: {
                title: 'FitTracker Pro - App Fitness',
                description: 'Page d\'atterrissage multilingue (ES/EN/FR) avec React et design responsive. Application complète pour le suivi des routines d\'exercice et des progrès fitness.'
            },
            taskflow: {
                title: 'TaskFlow AI - Tableau de bord SaaS',
                description: 'Tableau de bord interactif pour l\'automatisation et la productivité. Plateforme SaaS avec IA intégrée pour l\'optimisation des flux de travail.'
            },
            stylehub: {
                title: 'StyleHub - E-commerce',
                description: 'Boutique en ligne avec panier fonctionnel et gestion des produits. E-commerce complet avec passerelle de paiement et panneau d\'administration.'
            }
        },
        services: {
            title: 'Services',
            subtitle: 'Solutions technologiques adaptées à vos besoins',
            development: {
                title: 'Développement à partir de zéro',
                description: 'Création d\'applications web complètes de la planification au déploiement, en utilisant les meilleures pratiques et technologies modernes.'
            },
            cms: {
                title: 'CMS/WordPress personnalisé',
                description: 'Développement de sites web avec WordPress personnalisé, thèmes sur mesure et fonctionnalités spécifiques pour votre entreprise.'
            },
            nocode: {
                title: 'No-code/Low-code',
                description: 'Implémentation rapide de solutions utilisant des plateformes comme Wix, Webflow et autres outils no-code pour des projets agiles.'
            },
            automation: {
                title: 'Automatisation des processus',
                description: 'Création de bots et de flux automatisés pour optimiser les processus d\'entreprise et augmenter la productivité.'
            },
            migration: {
                title: 'Migration et modernisation',
                description: 'Mise à jour des systèmes legacy vers des technologies modernes, améliorant les performances, la sécurité et la maintenabilité.'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Vous avez un projet en tête ? Parlons-en !',
            ready: {
                title: 'Prêt à commencer votre projet ?',
                description: 'Je suis disponible pour de nouveaux projets et collaborations. N\'hésitez pas à me contacter pour discuter de la façon dont je peux vous aider à atteindre vos objectifs.'
            },
            email: 'Email',
            phone: 'Téléphone',
            location: 'Localisation',
            remote: 'Disponible pour le travail à distance',
            form: {
                name: 'Nom *',
                email: 'Email *',
                subject: 'Sujet *',
                message: 'Message *',
                namePlaceholder: 'Votre nom',
                emailPlaceholder: 'votre@email.com',
                subjectPlaceholder: 'Sujet du message',
                messagePlaceholder: 'Parlez-moi de votre projet...',
                send: 'Envoyer le message',
                sending: 'Envoi en cours...'
            }
        },
        footer: {
            copyright: '© 2024 Jostin - Développeur Full Stack. Tous droits réservés.'
        }
    }
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

// Clase para manejar el cambio de idiomas
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'es';
        this.init();
    }

    init() {
        this.setupLanguageButtons();
        this.translatePage(this.currentLanguage);
        this.updateActiveLanguage();
    }

    setupLanguageButtons() {
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const language = button.dataset.lang;
                this.changeLanguage(language);
            });
        });
    }

    changeLanguage(language) {
        if (language === this.currentLanguage) return;
        
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        this.translatePage(language);
        this.updateActiveLanguage();
    }

    translatePage(language) {
        const translations = TRANSLATIONS[language];
        if (!translations) return;

        // Traducir elementos con data-translate
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getNestedTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Traducir placeholders
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.dataset.translatePlaceholder;
            const translation = this.getNestedTranslation(translations, key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Actualizar el atributo lang del documento
        document.documentElement.lang = language;
    }

    getNestedTranslation(obj, key) {
        return key.split('.').reduce((o, k) => o && o[k], obj);
    }

    updateActiveLanguage() {
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.lang === this.currentLanguage);
        });
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
            new LanguageSwitcher();
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