const SERVICE_DATA = {
    gogo: {
        en: {
            title: "Go-Go <span>Dancers</span>",
            description: "Energetic and charismatic dancers that set the perfect vibe for any nightlife event. Our professional talent brings high energy and stunning presence to the stage."
        },
        es: {
            title: "Bailarines <span>Go-Go</span>",
            description: "Bailarines enérgicos y carismáticos que crean el ambiente perfecto para cualquier evento nocturno. Nuestro talento profesional aporta gran energía y una presencia impactante en el escenario."
        }
    },
    greeters: {
        en: {
            title: "Greeters <span>& Hostesses</span>",
            description: "The first impression is everything. Our elegant greeters and hostesses welcome your guests with sophistication and style, wearing custom-themed costumes."
        },
        es: {
            title: "Recepción <span>y Hostesses</span>",
            description: "La primera impresión lo es todo. Nuestros elegantes recepcionistas y hostesses dan la bienvenida a sus invitados con sofisticación y estilo, luciendo vestuarios temáticos personalizados."
        }
    },
    burlesque: {
        en: {
            title: "Burlesque <span>Art</span>",
            description: "Classic burlesque performances that combine the elegance of the golden era with a modern Miami touch. Sophistication, mystery, and high-end costumes."
        },
        es: {
            title: "Arte <span>Burlesque</span>",
            description: "Actuaciones de burlesque clásico que combinan la elegancia de la era dorada con un toque moderno de Miami. Sofisticación, misterio y vestuarios de alta gama."
        }
    },
    flamenco: {
        en: {
            title: "Flamenco <span>Burlesque</span>",
            description: "A passionate fusion of traditional Spanish Flamenco and the art of Burlesque. A unique, rhythmic, and visually stunning experience."
        },
        es: {
            title: "Flamenco <span>Burlesque</span>",
            description: "Una fusión apasionada del flamenco tradicional español y el arte del burlesque. Una experiencia única, rítmica y visualmente impactante."
        }
    },
    vintage: {
        en: {
            title: "Vintage <span>Jazz Shows</span>",
            description: "Immerse your audience in the soul of jazz. Our vintage shows feature choreographed performances inspired by the Great Gatsby era and classic cabaret."
        },
        es: {
            title: "Shows de <span>Jazz Vintage</span>",
            description: "Sumerja a su audiencia en el alma del jazz. Nuestros shows vintage presentan coreografías inspiradas en la era del Gran Gatsby y el cabaret clásico."
        }
    },
    fire: {
        en: {
            title: "Fire <span>Belly Dance</span>",
            description: "An hypnotic display of skill and seduction. Our performers combine the fluidity of belly dance with the danger and excitement of live fire elements."
        },
        es: {
            title: "Danza <span>del Vientre y Fuego</span>",
            description: "Una exhibición hipnótica de habilidad y seducción. Nuestras artistas combinan la fluidez de la danza del vientre con el peligro y la emoción de elementos de fuego en vivo."
        }
    }
};

const TRANSLATIONS = {
    en: {
        //NAV
        "nav-services": "Services",
        "nav-about": "About Us",
        "nav-contact": "Let's work together",
        "btn-contact": "CONTACT",
        // HERO
        "hero-title": "Entertainment <span class='hero__title--accent'>Elevated</span>",
        "hero-text": "Féerie is a boutique entertainment company specializing in high-end show productions and talent curation. We offer high-quality performances featuring eye-catching costumes, professional talent, and strong attention to detail.",
        // ABOUT
        "about-pre": "Our Mission",
        "about-title": "Elevating Miami's <span class='highlight-text'>Nightlife</span>",
        "about-p1": "With solid experience in Miami’s nightlife and event scene, our mission is to create immersive, unforgettable moments—bringing energy, beauty, and creativity to every type of event.",
        "about-p2": "Féerie brings unique costumes, top-tier dancers, and unforgettable performances — taking your event to the next level.",
        "about-caption": "Féerie Production",
        // SERVICES
        "services-title": "Services",
        "service-gogo": "Go-Go <span>Dancers</span>",
        "service-greeters": "Greeters <span>& Hostesses</span>",
        "service-burlesque": "Burlesque <span>Art</span>",
        "service-flamenco": "Flamenco <span>Burlesque</span>",
        "service-vintage": "Vintage <span>Jazz Shows</span>",
        "service-fire": "Fire <span>Belly Dance</span>",
        //MODAL DIVIDER
        "modal-divider": "/",
        // CONTACT SECTION
        "contact-title": "<span class='main-title'><span>Let's work</span> together</span> <span class='contact-us'>Contact us</span>",
        "form-name": "Full Name",
        "error-name": "Please, tell us who you are",
        "form-email": "Your Email",
        "error-email": "We need a valid email to reach you",
        "form-msg": "Tell us about your event...",
        "error-msg": "Don't be shy, tell us more",
        "form-btn": "Send Message",
        // FOOTER
        "nav-services": "Services",
        "nav-about": "About Us",
        "nav-contact": "Let's work together",
        "footer-legal": "&copy; 2026 Miami Feerie. All rights reserved.",
        "footer-created": "Web created by"
    },
    es: {
        //NAV
        "nav-services": "Servicios",
        "nav-about": "Nosotros",
        "nav-contact": "Trabajemos juntos",
        "btn-contact": "CONTACTO",
        // HERO
        "hero-title": "Entretenimiento de <span class='hero__title--accent'>Alto Nivel</span>",
        "hero-text": "Féerie es una compañía de entretenimiento boutique especializada en producciones de espectáculos de lujo y curaduría de talentos. Ofrecemos actuaciones de alta calidad con vestuarios impactantes, talento profesional y una sólida atención al detalle.",
        // ABOUT
        "about-pre": "Nuestra Misión",
        "about-title": "Elevando la <span class='highlight-text'>Noche</span> de Miami",
        "about-p1": "Con una sólida experiencia en la escena de eventos y vida nocturna de Miami, nuestra misión es crear momentos inmersivos e inolvidables, aportando energía, belleza y creatividad a cada evento.",
        "about-p2": "Féerie ofrece vestuarios únicos, bailarines de primer nivel y actuaciones inolvidables, llevando su evento al siguiente nivel.",
        "about-caption": "Producción Féerie",
        // SERVICES
        "services-title": "Servicios",
        "service-gogo": "Bailarines <span>Go-Go</span>",
        "service-greeters": "Recepción <span>y Hostesses</span>",
        "service-burlesque": "Arte <span>Burlesque</span>",
        "service-flamenco": "Flamenco <span>Burlesque</span>",
        "service-vintage": "Shows de <span>Jazz Vintage</span>",
        "service-fire": "Danza <span>del Vientre y Fuego</span>",
        //MODAL DIVIDER
        "modal-divider": "de",
        //CONTACT SECTION
        "contact-title": "<span class='main-title'><span>Trabajemos</span> juntos</span> <span class='contact-us'>Contáctanos</span>",
        "form-name": "Nombre Completo",
        "error-name": "Por favor, cuéntanos quién eres",
        "form-email": "Tu Email",
        "error-email": "Necesitamos un email válido para contactarte",
        "form-msg": "Cuéntanos sobre tu evento...",
        "error-msg": "No seas tímido, dinos más",
        "form-btn": "Enviar Mensaje",
        // FOOTER
        "nav-services": "Servicios",
        "nav-about": "Nosotros",
        "nav-contact": "Trabajemos juntos",
        "footer-legal": "&copy; 2026 Miami Feerie. Todos los derechos reservados.",
        "footer-created": "Web creada por"


    }
};









document.addEventListener('DOMContentLoaded', () => {
    // 1. DETERMINAR IDIOMA INICIAL
    let currentLang = localStorage.getItem('language') || 
                      (navigator.language.startsWith('es') ? 'es' : 'en');

    /**
     * FUNCIÓN DE TRADUCCIÓN
     */
    const updateTexts = (lang) => {
        // Textos estándar
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (TRANSLATIONS[lang][key]) {
                el.innerHTML = TRANSLATIONS[lang][key];
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (TRANSLATIONS[lang][key]) {
                el.placeholder = TRANSLATIONS[lang][key];
            }
        });

        // Botones de idioma
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('is-active');
        });
        const activeBtn = document.getElementById(`lang-${lang}`);
        if(activeBtn) activeBtn.classList.add('is-active');
        
        localStorage.setItem('language', lang);
        currentLang = lang;

        // IMPORTANTE: Si el modal está abierto, actualizarlo también
        const modal = document.getElementById('service-modal');
        if (modal && modal.classList.contains('is-open')) {
            const activeService = modal.getAttribute('data-active-service');
            if (activeService) window.openServiceModal(activeService);
        }
    };

    /**
     * LÓGICA DEL MODAL
     */
    window.openServiceModal = (serviceId) => {
        const modal = document.getElementById('service-modal');
        const titleEl = document.getElementById('modal-title');
        const descEl = document.getElementById('modal-description');
        
        if (!SERVICE_DATA[serviceId]) return;

        const content = SERVICE_DATA[serviceId][currentLang];
        titleEl.innerHTML = content.title;
        descEl.innerHTML = content.description;

        // Guardamos qué servicio está abierto para poder re-traducirlo al vuelo
        modal.setAttribute('data-active-service', serviceId);
        modal.classList.add('is-open');
        
        // Aquí iría tu lógica de galería (dots, flechas, etc.)
    };

    /**
     * LISTENERS
     */
    const btnEn = document.getElementById('lang-en');
    const btnEs = document.getElementById('lang-es');

    if (btnEn) {
        btnEn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentLang !== 'en') updateTexts('en');
        });
    }

    if (btnEs) {
        btnEs.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentLang !== 'es') updateTexts('es');
        });
    }

    // Inicializar
    updateTexts(currentLang);
});