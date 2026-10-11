const servicesData = {
    gogo: {
        en: {
            title: "Go-Go <span>Dancers</span>",
            desc: "Energetic performers who enhance nightlife venues with captivating dance and stage presence, adding glamour and vibrancy to the atmosphere."
        },
        es: {
            title: "Bailarines <span>Go-Go</span>",
            desc: "Bailarines enérgicos que realzan los lugares nocturnos con una presencia cautivadora, aportando glamour y vitalidad a la atmósfera."
        },
        path: "./assets/static/img/gogo/gogo",
        count: 4
    },
    greeters: {
        en: {
            title: "Greeters <span>& Hostesses</span>",
            desc: "Embodying elegance and allure, they welcome guests with charm and transform hospitality into an art of unforgettable moments."
        },
        es: {
            title: "Recepción <span>y Hostesses</span>",
            desc: "Encarnando la elegancia y el encanto, dan la bienvenida a los invitados transformando la hospitalidad en un arte de momentos inolvidables."
        },
        path: "./assets/static/img/greeters/greeters",
        count: 8
    },
    burlesque: {
        en: {
            title: "Burlesque <span>Art</span>",
            desc: "A refined art form performed by professional dancers, featuring uniquely designed costumes and original choreography that blend elegance, charm, and theatricality."
        },
        es: {
            title: "Arte <span>Burlesque</span>",
            desc: "Una forma de arte refinada interpretada por bailarines profesionales, con vestuarios de diseño único y coreografías originales que combinan elegancia y teatralidad."
        },
        path: "./assets/static/img/burlesque/burlesque",
        count: 10
    },
    flamenco: {
        en: {
            title: "Flamenco <span>Burlesque</span>",
            desc: "A captivating fusion of tradition and charm. The show begins with the passion of authentic flamenco, then transforms into burlesque—playful, glamorous, and irresistibly seductive."
        },
        es: {
            title: "Flamenco <span>Burlesque</span>",
            desc: "Una fusión cautivadora de tradición y encanto. El show comienza con la pasión del flamenco auténtico y se transforma en un burlesque glamoroso y seductor."
        },
        path: "./assets/static/img/flamenco/flamenco",
        count: 6
    },
    vintage: {
        en: {
            title: "Vintage <span>Jazz Shows</span>",
            desc: "A show that captures the spirit of the Roaring Twenties, blending Charleston, Swing, and Jazz. It revives the energy and sophistication of an unforgettable era."
        },
        es: {
            title: "Shows de <span>Jazz Vintage</span>",
            desc: "Un espectáculo que captura el espíritu de los años 20, combinando Charleston, Swing y Jazz. Revive la energía y sofisticación de una era inolvidable."
        },
        path: "./assets/static/img/vintage/vintage",
        count: 6
    },
    fire: {
        en: {
            title: "Fire Belly <span>Dance</span>",
            desc: "An enchanting belly dance ablaze with fire — where timeless elegance and fierce energy collide in a spectacle of light and allure."
        },
        es: {
            title: "Danza <span>del Vientre y Fuego</span>",
            desc: "Una encantadora danza del vientre envuelta en fuego, donde la elegancia atemporal y la energía feroz chocan en un espectáculo de luz."
        },
        path: "./assets/static/img/fire/fire",
        count: 4
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Selección de elementos principales
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('service-modal');
    const closeBtn = document.querySelector('.modal__close');
    
    // Elementos internos del carrusel
    const galleryContainer = document.getElementById('modal-gallery');
    const counterDisplay = document.getElementById('current-img');
    const totalDisplay = document.getElementById('total-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // 2. Estado del carrusel
    let currentIndex = 1;
    let currentData = null;
    let activeServiceId = null; // Para rastrear qué servicio está abierto

    // 3. Función para renderizar la imagen
    const renderImage = () => {
        if (!currentData || !galleryContainer) return;
        
        // Las imágenes no cambian por idioma, se mantienen igual
        const imgUrl = `${currentData.path}${currentIndex}.webp`;
        const lang = localStorage.getItem('language') || 'en';
        galleryContainer.innerHTML = `<img src="${imgUrl}" alt="${currentData[lang].title}">`;
        
        if (counterDisplay) counterDisplay.textContent = currentIndex;
    };

    // 4. Función para abrir el modal
    const openModal = (id) => {
        currentData = servicesData[id];
        if (!currentData) return;

        activeServiceId = id; // Guardamos el ID actual
        currentIndex = 1;

        // Detectar idioma activo
        const lang = localStorage.getItem('language') || 'en';

        // Llenar textos dinámicos según el idioma
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-description');
        
        if (modalTitle) modalTitle.innerHTML = currentData[lang].title;
        if (modalDesc) modalDesc.innerHTML = currentData[lang].desc; // innerHTML para los spans
        if (totalDisplay) totalDisplay.textContent = currentData.count;

        renderImage();

        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('data-current-service', id); // Atributo para el switch de idioma
            document.body.style.overflow = 'hidden';
        }
    };

    // 5. Asignar eventos a las cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-service');
            openModal(serviceId);
        });
    });

    // 6. Navegación del Carrusel
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!currentData) return;
            currentIndex = (currentIndex < currentData.count) ? currentIndex + 1 : 1;
            renderImage();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!currentData) return;
            currentIndex = (currentIndex > 1) ? currentIndex - 1 : currentData.count;
            renderImage();
        });
    }

    // 7. Funciones de cierre
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('active');
            modal.removeAttribute('data-current-service');
            document.body.style.overflow = 'auto';
        }
    };

    if (closeBtn) closeBtn.onclick = closeModal;

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeModal();
    });



    
    // --- LOGICA PARA TRADUCIR EL MODAL SI SE CAMBIA EL IDIOMA MIENTRAS ESTÁ ABIERTO ---
    // Esta función debe llamarse desde tus botones de EN/ES
    window.updateModalLanguage = (lang) => {
        const modalActive = document.getElementById('service-modal');
        const id = modalActive.getAttribute('data-current-service');
        if (modalActive.classList.contains('active') && id) {
            const titleEl = document.getElementById('modal-title');
            const descEl = document.getElementById('modal-description');
            titleEl.innerHTML = servicesData[id][lang].title;
            descEl.innerHTML = servicesData[id][lang].desc;
        }
    };
});






const form = document.querySelector('.contact__form');
const inputs = form.querySelectorAll('input, textarea');

// Desactivar las burbujas por defecto
form.setAttribute('novalidate', true);

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        inputs.forEach(input => {
            const error = input.nextElementSibling;
            if (!input.validity.valid) {
                error.style.opacity = '1';
                error.style.transform = 'translateY(0)';
            }
        });
    }
});