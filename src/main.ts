import './style.css'

// === TRANSLATIONS ===
interface Translations {
    collections: string;
    shop: string;
    heroSubtitle: string;
    heroTitle: string;
    heroDescription: string;
    explore: string;
    allItems: string;
    outerwear: string;
    trousers: string;
    knitwear: string;
    accessories: string;
    footwear: string;
    archive: string;
    newArrivals: string;
    displaying: string;
    loadMore: string;
    aboutTitle: string;
    aboutDescription: string;
    info: string;
    follow: string;
    newsletter: string;
    subscribe: string;
    searchPlaceholder: string;
    selectSize: string;
    findMySize: string;
    addToBag: string;
    fabricResearch: string;
    styleFit: string;
    compositionCare: string;
    shippingReturn: string;
    color: string;
    fit: string;
    styleItems: string[];
    careItems: string[];
    shippingItems: string[];
    sizeNote: string;
    authentic: string;
    support: string;
    delivery: string;
    fcLabel: string;
    fcButton: string;
    quotes: string[];
}

const translationsData: Record<'en' | 'ru', Translations> = {
    en: {
        collections: 'Collections',
        shop: 'Shop',
        heroSubtitle: 'SS/26 COLLECTION',
        heroTitle: 'FUNCTIONAL<br>PROTECTION',
        heroDescription: 'Advanced technical apparel designed for urban utility and protection against the elements.',
        explore: 'Explore Collection',
        allItems: 'All Items',
        outerwear: 'Outerwear',
        trousers: 'Trousers',
        knitwear: 'Knitwear',
        accessories: 'Accessories',
        footwear: 'Footwear',
        archive: 'Archive',
        newArrivals: 'New Arrivals',
        displaying: 'Displaying 1-6 of 24 Units',
        loadMore: 'Load More',
        aboutTitle: 'Technical Apparel for Urban Environments',
        aboutDescription: 'We curate the finest technical and functional clothing from leading brands like Stone Island, Alpha Industries, and exclusive collaborations. Each piece is selected for its innovative materials, construction quality, and urban utility.',
        shop: 'Shop',
        info: 'Info',
        follow: 'Contact',
        newsletter: 'Newsletter',
        subscribe: 'Subscribe for exclusive drops and early access.',
        searchPlaceholder: 'SEARCH PRODUCTS...',
        selectSize: 'SIZE:',
        findMySize: 'FIND MY SIZE',
        addToBag: 'ORDER ON TELEGRAM',
        fabricResearch: 'FABRIC AND RESEARCH',
        styleFit: 'STYLE AND FIT',
        compositionCare: 'COMPOSITION AND CARE',
        shippingReturn: 'SHIPPING & RETURN',
        color: 'COLOR:',
        fit: 'FIT: Regular. The model is wearing size L and is 185cm tall.',
        styleItems: ['Regular fit', 'Stand collar with concealed hood', 'Two-way front zipper', 'Removable Stone Island badge on left sleeve', 'Ribbed cuffs and hem'],
        careItems: ['Shell: 100% Nylon', 'Lining: 100% Polyester', 'Machine wash cold, gentle cycle', 'Do not bleach', 'Tumble dry low'],
        shippingItems: ['Free standard shipping on orders over $300', 'Express delivery: 2-3 business days', 'Free returns within 30 days', 'Items must be unworn with tags attached'],
        sizeNote: '* Garment measures in cm',
        authentic: 'Authentic',
        support: 'Support',
        delivery: 'Delivery',
        fcLabel: 'PROJECT MAYHEM // REBIRTH',
        fcButton: 'GENERATE CHAOS',
        quotes: [
            "It's only after we've lost everything that we're free to do anything.",
            "This is your life and it's ending one minute at a time.",
            "The things you own end up owning you.",
            "Losing all hope was freedom.",
            "Self-improvement is masturbation. Now self-destruction is the answer.",
            "You are not your job, you're not how much money you have in the bank.",
            "We have no Great War. No Great Depression. Our Great War's a spiritual war.",
            "Reject the basic assumptions of civilization, especially the importance of material possessions."
        ]
    },
    ru: {
        collections: 'Коллекции',
        shop: 'Магазин',
        heroSubtitle: 'SS/26 КОЛЛЕКЦИЯ',
        heroTitle: 'ФУНКЦИОНАЛЬНАЯ<br>ЗАЩИТА',
        heroDescription: 'Продвинутая техническая одежда для городской утилитарности и защиты от стихий.',
        explore: 'Смотреть коллекцию',
        allItems: 'Все товары',
        outerwear: 'Верхняя одежда',
        trousers: 'Брюки',
        knitwear: 'Трикотаж',
        accessories: 'Аксессуары',
        footwear: 'Обувь',
        archive: 'Архив',
        newArrivals: 'Новинки',
        displaying: 'Показано 1-6 из 24',
        loadMore: 'Загрузить ещё',
        aboutTitle: 'Техническая одежда для городской среды',
        aboutDescription: 'Мы курируем лучшую техническую и функциональную одежду от ведущих брендов: Stone Island, Alpha Industries и эксклюзивные коллаборации. Каждая вещь выбрана за инновационные материалы, качество конструкции и городскую утилитарность.',
        shop: 'Магазин',
        info: 'Информация',
        follow: 'Контакты',
        newsletter: 'Рассылка',
        subscribe: 'Подпишитесь на эксклюзивные дропы и ранний доступ.',
        searchPlaceholder: 'ПОИСК ТОВАРОВ...',
        selectSize: 'РАЗМЕР:',
        findMySize: 'ПОДОБРАТЬ РАЗМЕР',
        addToBag: 'ЗАКАЗАТЬ В TELEGRAM',
        fabricResearch: 'МАТЕРИАЛ И ТЕХНОЛОГИИ',
        styleFit: 'СТИЛЬ И ПОСАДКА',
        compositionCare: 'СОСТАВ И УХОД',
        shippingReturn: 'ДОСТАВКА И ВОЗВРАТ',
        color: 'ЦВЕТ:',
        fit: 'ПОСАДКА: Regular. Модель носит размер L, рост 185см.',
        styleItems: ['Обычный крой', 'Стойка воротник со скрытым капюшоном', 'Двусторонняя молния', 'Съёмный бейдж Stone Island на левом рукаве', 'Рифлёные манжеты и низ'],
        careItems: ['Верх: 100% Нейлон', 'Подкладка: 100% Полиэстер', 'Машинная стирка, деликатный режим', 'Не отбеливать', 'Сушка при низкой температуре'],
        shippingItems: ['Бесплатная доставка при заказе от $300', 'Экспресс-доставка: 2-3 рабочих дня', 'Бесплатный возврат в течение 30 дней', 'Товар должен быть без следов носки с бирками'],
        sizeNote: '* Размеры изделия в см',
        authentic: 'Оригинал',
        support: 'Поддержка',
        delivery: 'Доставка',
        fcLabel: 'ПРОЕКТ РАЗГРОМ // ВОЗРОЖДЕНИЕ',
        fcButton: 'ГЕНЕРИРОВАТЬ ХАОС',
        quotes: [
            "Лишь утратив всё до конца, мы обретаем свободу делать всё что угодно.",
            "Это твоя жизнь, и она становится короче с каждой минутой.",
            "Вещи, которыми ты владеешь, в конце концов начинают владеть тобой.",
            "Потерять всякую надежду — вот что такое свобода.",
            "Самосовершенствование — онанизм. Саморазрушение — вот что нам нужно.",
            "Ты — это не твоя работа. Ты — это не твой счет в банке.",
            "У нас нет Великой войны. Нет Великой депрессии. Наша Великая война — духовная.",
            "Отринь базовые устои цивилизации, особенно важность материального."
        ]
    }
};

// === PRODUCT DATA (Bilingual) ===
const productData: Record<string, {
    subtitle: string;
    intro: { en: string; ru: string };
    fabric: { en: string; ru: string };
    features: { en: string[]; ru: string[] };
}> = {
    'Poly Shell Jacket': {
        subtitle: 'NYLON METAL IN ECONYL® / 4100001',
        intro: {
            en: 'Stand collar jacket in Nylon Metal, featuring three-dimensional zipper pockets, tape trims, and dedicated packaging.',
            ru: 'Куртка со стойкой воротником из Nylon Metal с объёмными карманами на молнии, окантовкой и фирменной упаковкой.'
        },
        fabric: {
            en: 'Stand collar jacket in Stone Island\'s Nylon Metal fabric. Uses ECONYL® regenerated yarns.',
            ru: 'Куртка из фирменной ткани Nylon Metal от Stone Island. Используется регенерированная пряжа ECONYL®.'
        },
        features: {
            en: ['⬡ DOUBLE DYE FORMULA', '⬡ INNER RESIN COATING', '⬡ ANTI-DROP FINISH'],
            ru: ['⬡ ДВОЙНОЕ ОКРАШИВАНИЕ', '⬡ СМОЛЯНОЕ ПОКРЫТИЕ', '⬡ АНТИКАПЕЛЬНАЯ ОБРАБОТКА']
        }
    },
    'Stone Island x Supreme': {
        subtitle: 'NYLON METAL IN ECONYL® / COLLAB',
        intro: {
            en: 'Exclusive collaboration between Stone Island and Supreme. Limited edition technical jacket.',
            ru: 'Эксклюзивная коллаборация Stone Island и Supreme. Лимитированная техническая куртка.'
        },
        fabric: {
            en: 'Premium Nylon Metal fabric with signature Stone Island dyeing process and Supreme branding.',
            ru: 'Премиальная ткань Nylon Metal с фирменным окрашиванием Stone Island и брендингом Supreme.'
        },
        features: {
            en: ['⬡ LIMITED EDITION', '⬡ NYLON METAL', '⬡ DUAL BRANDING'],
            ru: ['⬡ ЛИМИТИРОВАННАЯ СЕРИЯ', '⬡ NYLON METAL', '⬡ ДВОЙНОЙ БРЕНДИНГ']
        }
    },
    'CWU 45/P Bomber': {
        subtitle: 'MIL-SPEC FLIGHT JACKET / MA-1',
        intro: {
            en: 'Originally designed for the U.S. Air Force in the late 1950s. Maintains authentic construction details.',
            ru: 'Изначально разработана для ВВС США в конце 1950-х. Сохраняет аутентичные детали конструкции.'
        },
        fabric: {
            en: 'Flight jacket constructed with MIL-SPEC nylon outer shell.',
            ru: 'Лётная куртка из нейлона MIL-SPEC.'
        },
        features: {
            en: ['⬡ MIL-SPEC NYLON', '⬡ ORANGE LINING', '⬡ STORM FLAP'],
            ru: ['⬡ НЕЙЛОН MIL-SPEC', '⬡ ОРАНЖЕВАЯ ПОДКЛАДКА', '⬡ ВЕТРОЗАЩИТНАЯ ПЛАНКА']
        }
    },
    'Unit 01 Sling': {
        subtitle: 'CORDURA® TACTICAL CARRY / UTL-01',
        intro: {
            en: 'Modular sling bag for everyday carry with MOLLE-compatible attachment points.',
            ru: 'Модульная сумка-слинг для повседневного ношения с креплениями MOLLE.'
        },
        fabric: {
            en: 'Constructed from 1000D Cordura® ballistic nylon with reinforced stitching.',
            ru: 'Изготовлена из баллистического нейлона 1000D Cordura® с усиленной прошивкой.'
        },
        features: {
            en: ['⬡ 1000D CORDURA®', '⬡ FIDLOCK® MAGNETIC', '⬡ MOLLE COMPATIBLE'],
            ru: ['⬡ 1000D CORDURA®', '⬡ МАГНИТНЫЕ FIDLOCK®', '⬡ СОВМЕСТИМОСТЬ MOLLE']
        }
    },
    'Unit 02 Crossbody': {
        subtitle: 'CORDURA® CROSSBODY BAG / UTL-02',
        intro: {
            en: 'Compact crossbody solution for urban mobility.',
            ru: 'Компактная сумка через плечо для городской мобильности.'
        },
        fabric: {
            en: 'Lightweight yet durable 500D Cordura® fabric with water-resistant coating.',
            ru: 'Лёгкая, но прочная ткань 500D Cordura® с водоотталкивающим покрытием.'
        },
        features: {
            en: ['⬡ 500D CORDURA®', '⬡ WATER RESISTANT', '⬡ YKK ZIPPERS'],
            ru: ['⬡ 500D CORDURA®', '⬡ ВОДОСТОЙКОСТЬ', '⬡ МОЛНИИ YKK']
        }
    },
    'Compass Badge Set': {
        subtitle: 'REPLACEMENT BADGE KIT / ACC-01',
        intro: {
            en: 'Official replacement badge set for Stone Island garments.',
            ru: 'Официальный сменный комплект бейджей для одежды Stone Island.'
        },
        fabric: {
            en: 'Authentic Stone Island compass badges.',
            ru: 'Аутентичные бейджи Stone Island.'
        },
        features: {
            en: ['⬡ AUTHENTIC BADGE', '⬡ BUTTON ATTACHMENT', '⬡ MULTI VARIANTS'],
            ru: ['⬡ ОРИГИНАЛЬНЫЙ БЕЙДЖ', '⬡ КРЕПЛЕНИЕ НА ПУГОВИЦУ', '⬡ НЕСКОЛЬКО ВАРИАНТОВ']
        }
    },
    'Gore-Tex Shell V2': {
        subtitle: 'GORE-TEX PRO / 3L MEMBRANE',
        intro: {
            en: 'Second generation of our flagship Gore-Tex shell with enhanced breathability.',
            ru: 'Второе поколение флагманской оболочки Gore-Tex с улучшенной воздухопроницаемостью.'
        },
        fabric: {
            en: 'Three-layer Gore-Tex Pro construction with fully taped seams.',
            ru: 'Трёхслойная конструкция Gore-Tex Pro с полностью проклеенными швами.'
        },
        features: {
            en: ['⬡ GORE-TEX PRO 3L', '⬡ TAPED SEAMS', '⬡ PFC-FREE DWR'],
            ru: ['⬡ GORE-TEX PRO 3L', '⬡ ПРОКЛЕЕННЫЕ ШВЫ', '⬡ DWR БЕЗ PFC']
        }
    }
};

let currentLang: 'en' | 'ru' = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // === DOM ELEMENTS ===
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalImg = document.getElementById('modalImg') as HTMLImageElement;
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalCategory = document.getElementById('modalCategory');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalIntro = document.getElementById('modalIntro');
    const fabricDesc = document.getElementById('fabricDesc');
    const fabricFeatures = document.getElementById('fabricFeatures');
    const sizeGuidePanel = document.getElementById('sizeGuidePanel');

    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const langToggle = document.getElementById('langToggle');

    const exploreBtn = document.getElementById('exploreBtn');
    const findSizeBtn = document.getElementById('findSizeBtn');

    const styleList = document.getElementById('styleList');
    const careList = document.getElementById('careList');
    const shippingList = document.getElementById('shippingList');
    const sizeNote = document.querySelector('.size-note');

    // === INTERSECTION OBSERVER FOR ANIMATIONS ===
    const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        fadeInObserver.observe(el);
    });

    // === HEADER SCROLL EFFECT ===
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
        const header = document.querySelector('.site-header');
        if (!header) return;

        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll direction
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScrollY = window.scrollY;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    // === LANGUAGE TOGGLE ===
    const updateLanguage = () => {
        const t = translationsData[currentLang];

        // Header
        const navLinks = document.querySelectorAll('.header-left .nav-link');
        if (navLinks[0]) navLinks[0].textContent = t.collections;
        if (navLinks[1]) navLinks[1].textContent = t.shop;

        // Hero
        const heroMono = document.querySelector('.hero-content .mono');
        if (heroMono) heroMono.textContent = t.heroSubtitle;

        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.innerHTML = t.heroTitle;

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = t.heroDescription;

        if (exploreBtn) {
            const btnSpan = exploreBtn.querySelector('span');
            if (btnSpan) btnSpan.textContent = t.explore;
        }

        // Filter chips
        const chips = document.querySelectorAll('.filter-chip');
        const filterTexts = [t.allItems, t.outerwear, t.trousers, t.knitwear, t.accessories, t.footwear, t.archive];
        chips.forEach((chip, i) => {
            if (filterTexts[i]) chip.textContent = filterTexts[i];
        });

        // Section
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) sectionTitle.textContent = t.newArrivals;

        const sectionMono = document.querySelector('.section-header .mono');
        if (sectionMono) sectionMono.textContent = t.displaying;

        // Footer
        const footerCols = document.querySelectorAll('.footer-col h4');
        if (footerCols[0]) footerCols[0].textContent = t.shop;
        if (footerCols[1]) footerCols[1].textContent = t.info;
        if (footerCols[2]) footerCols[2].textContent = t.follow;
        if (footerCols[3]) footerCols[3].textContent = t.newsletter;

        // Fight Club Section
        const fcLabel = document.querySelector('.quote-label');
        if (fcLabel) fcLabel.textContent = t.fcLabel;

        const fcButton = document.querySelector('.quote-btn .btn-text');
        if (fcButton) fcButton.textContent = t.fcButton;

        // Search
        if (searchInput) searchInput.placeholder = t.searchPlaceholder;

        // Modal
        const sizeLabelEl = document.querySelector('.size-header .section-label');
        if (sizeLabelEl) sizeLabelEl.textContent = t.selectSize;
        if (findSizeBtn) findSizeBtn.textContent = t.findMySize;

        const addToBagBtn = document.getElementById('addToBagBtn');
        if (addToBagBtn) {
            const btnText = addToBagBtn.querySelector('.btn-text');
            if (btnText) btnText.textContent = t.addToBag;
        }

        const fitInfo = document.querySelector('.fit-info');
        if (fitInfo) fitInfo.textContent = t.fit;

        const colorLabelEl = document.querySelector('.color-section .section-label');
        if (colorLabelEl) colorLabelEl.innerHTML = t.color + ' <span id="colorName">Black</span>';

        // Accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header span:first-child');
        if (accordionHeaders[0]) accordionHeaders[0].textContent = t.fabricResearch;
        if (accordionHeaders[1]) accordionHeaders[1].textContent = t.styleFit;
        if (accordionHeaders[2]) accordionHeaders[2].textContent = t.compositionCare;
        if (accordionHeaders[3]) accordionHeaders[3].textContent = t.shippingReturn;

        // Accordion content
        if (styleList) styleList.innerHTML = t.styleItems.map(item => `<li>${item}</li>`).join('');
        if (careList) careList.innerHTML = t.careItems.map(item => `<li>${item}</li>`).join('');
        if (shippingList) shippingList.innerHTML = t.shippingItems.map(item => `<li>${item}</li>`).join('');
        if (sizeNote) sizeNote.textContent = t.sizeNote;

        // Lang toggle button
        if (langToggle) langToggle.textContent = currentLang.toUpperCase();
    };

    langToggle?.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ru' : 'en';
        updateLanguage();
    });

    // === SEARCH FUNCTIONALITY ===
    const openSearch = () => {
        searchOverlay?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput?.focus(), 100);
    };

    const closeSearch = () => {
        searchOverlay?.classList.add('hidden');
        document.body.style.overflow = '';
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.product-card').forEach(card => {
            (card as HTMLElement).style.display = '';
        });
    };

    searchBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        openSearch();
    });

    searchClose?.addEventListener('click', closeSearch);

    searchInput?.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        document.querySelectorAll('.product-card').forEach(card => {
            const title = card.querySelector('.product-title')?.textContent?.toLowerCase() || '';
            const cat = card.querySelector('.product-cat')?.textContent?.toLowerCase() || '';
            (card as HTMLElement).style.display = (query === '' || title.includes(query) || cat.includes(query)) ? '' : 'none';
        });
    });

    searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            closeSearch();
            document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // === KEYBOARD SHORTCUTS ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearch();
            closeModal();
        }
        // Open search with Cmd/Ctrl + K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });

    // === EXPLORE BUTTON ===
    exploreBtn?.addEventListener('click', () => {
        document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
    });

    // === MODAL FUNCTIONS ===
    const closeModal = () => {
        modal?.classList.add('hidden');
        document.body.style.overflow = '';
    };

    modalClose?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // === FILTER CHIPS ===
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filter = (chip as HTMLElement).dataset.filter;
            const cards = document.querySelectorAll('.product-card');

            cards.forEach(card => {
                const cardEl = card as HTMLElement;
                const category = cardEl.dataset.category;

                if (filter === 'all' || category === filter) {
                    cardEl.style.display = '';
                    // Re-trigger animation
                    cardEl.classList.remove('visible');
                    setTimeout(() => cardEl.classList.add('visible'), 50);
                } else {
                    cardEl.style.display = 'none';
                }
            });
        });
    });

    // === PRODUCT CARD CLICK ===
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent modal opening when clicking quick add button
            if ((e.target as HTMLElement).closest('.quick-add-btn')) {
                return;
            }

            const cardEl = card as HTMLElement;
            const imgSrc = cardEl.querySelector('.product-image')?.getAttribute('src') || '';
            const title = cardEl.querySelector('.product-title')?.textContent || '';
            const price = cardEl.querySelector('.product-price')?.textContent || '';
            const categoryFull = cardEl.querySelector('.product-cat')?.textContent || '';

            const data = productData[title] || {
                subtitle: 'Technical apparel',
                intro: { en: 'Advanced technical apparel.', ru: 'Продвинутая техническая одежда.' },
                fabric: { en: 'Premium materials.', ru: 'Премиальные материалы.' },
                features: { en: ['⬡ PREMIUM'], ru: ['⬡ ПРЕМИУМ'] }
            };

            if (modalImg) modalImg.src = imgSrc;
            if (modalTitle) modalTitle.textContent = title;
            if (modalPrice) modalPrice.textContent = price;
            if (modalCategory) modalCategory.textContent = categoryFull;
            if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
            if (modalIntro) modalIntro.innerHTML = `<p>${data.intro[currentLang]}</p>`;
            if (fabricDesc) fabricDesc.textContent = data.fabric[currentLang];
            if (fabricFeatures) {
                fabricFeatures.innerHTML = data.features[currentLang].map(f => `<li>${f}</li>`).join('');
            }

            // Reset accordion and size guide
            sizeGuidePanel?.classList.add('hidden');
            document.querySelectorAll('.accordion-content').forEach(p => p.classList.add('hidden'));
            document.querySelectorAll('.accordion-icon').forEach(i => i.textContent = '+');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));

            modal?.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    // === QUICK ADD BUTTON ===
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Open Telegram link
            window.open('https://t.me/Omniraise', '_blank');
        });
    });

    // === SIZE SELECTION ===
    document.getElementById('sizeGrid')?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('size-btn') && !target.classList.contains('disabled')) {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');

            const size = target.textContent;
            document.querySelectorAll('.size-guide-table tbody tr').forEach(row => {
                row.classList.remove('highlight');
                if (row.querySelector('td')?.textContent === size) row.classList.add('highlight');
            });
        }
    });

    // === FIND MY SIZE TOGGLE ===
    findSizeBtn?.addEventListener('click', () => {
        sizeGuidePanel?.classList.toggle('hidden');
    });

    // === COLOR SELECTOR ===
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            const cn = document.getElementById('colorName');
            if (cn) cn.textContent = (swatch as HTMLElement).dataset.color || 'Black';
        });
    });

    // === ACCORDION ===
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = (header as HTMLElement).dataset.target;
            const content = document.getElementById(targetId || '');
            const icon = header.querySelector('.accordion-icon');
            const item = header.closest('.accordion-item');

            if (content) {
                const isHidden = content.classList.contains('hidden');

                // Close all other accordions
                document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.accordion-icon').forEach(i => i.textContent = '+');
                document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));

                if (isHidden) {
                    content.classList.remove('hidden');
                    if (icon) icon.textContent = '−';
                    if (item) item.classList.add('open');
                }
            }
        });
    });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // === FIGHT CLUB QUOTE GENERATOR ===
    const generateQuoteBtn = document.getElementById('generateQuoteBtn');
    const quoteElement = document.getElementById('fcQuote');

    generateQuoteBtn?.addEventListener('click', () => {
        const t = translationsData[currentLang];
        const quotes = t.quotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        if (quoteElement) {
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.textContent = `"${randomQuote}"`;
                quoteElement.style.animation = 'none';
                quoteElement.offsetHeight; /* trigger reflow */
                quoteElement.style.animation = 'glitch 0.5s cubic-bezier(.25, .46, .45, .94) both infinite';
                quoteElement.style.opacity = '1';
                setTimeout(() => { quoteElement.style.animation = 'none'; }, 500);
            }, 200);
        }
    });

    // === INITIAL SETUP ===
    updateLanguage();
});
