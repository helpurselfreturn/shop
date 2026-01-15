import './style.css'

// === TRANSLATIONS ===
interface Translations {
    collections: string;
    heroSubtitle: string;
    heroTitle: string;
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
    shop: string;
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
}

const translationsData: Record<'en' | 'ru', Translations> = {
    en: {
        collections: 'Collections',
        heroSubtitle: 'SS/26 SYSTEM',
        heroTitle: 'FUNCTIONAL<br>PROTECTION',
        explore: 'Explore',
        allItems: 'All Items',
        outerwear: 'Outerwear',
        trousers: 'Trousers',
        knitwear: 'Knitwear',
        accessories: 'Accessories',
        footwear: 'Footwear',
        archive: 'Archive',
        newArrivals: 'New Arrivals',
        displaying: 'Displaying 1-8 of 24 Units',
        shop: 'Shop',
        info: 'Info',
        follow: 'Follow',
        newsletter: 'Newsletter',
        subscribe: 'Subscribe for early access.',
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
        sizeNote: '* Garment measures in cm'
    },
    ru: {
        collections: 'Коллекции',
        heroSubtitle: 'SS/26 СИСТЕМА',
        heroTitle: 'ФУНКЦИОНАЛЬНАЯ<br>ЗАЩИТА',
        explore: 'Смотреть',
        allItems: 'Все товары',
        outerwear: 'Верхняя одежда',
        trousers: 'Брюки',
        knitwear: 'Трикотаж',
        accessories: 'Аксессуары',
        footwear: 'Обувь',
        archive: 'Архив',
        newArrivals: 'Новинки',
        displaying: 'Показано 1-8 из 24',
        shop: 'Магазин',
        info: 'Информация',
        follow: 'Соцсети',
        newsletter: 'Рассылка',
        subscribe: 'Подпишитесь на ранний доступ.',
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
        sizeNote: '* Размеры изделия в см'
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
    'CWU 45/P Olive': {
        subtitle: 'MIL-SPEC FLIGHT JACKET / MA-1',
        intro: {
            en: 'Classic olive variant of the iconic CWU 45/P flight jacket.',
            ru: 'Классический оливковый вариант культовой лётной куртки CWU 45/P.'
        },
        fabric: {
            en: 'Heavy-duty nylon construction following original military specifications.',
            ru: 'Прочная нейлоновая конструкция по оригинальным военным спецификациям.'
        },
        features: {
            en: ['⬡ OLIVE DRAB', '⬡ KNIT COLLAR', '⬡ UTILITY POCKETS'],
            ru: ['⬡ ОЛИВКОВЫЙ', '⬡ ВЯЗАНЫЙ ВОРОТНИК', '⬡ КАРМАНЫ UTILITY']
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
    'Ghost Overshirt': {
        subtitle: 'GHOST PIECE / VENTILE® COTTON',
        intro: {
            en: 'Part of the Ghost collection with Stone Island\'s signature tonal dyeing technique.',
            ru: 'Часть коллекции Ghost с фирменной техникой тонального окрашивания.'
        },
        fabric: {
            en: 'Overshirt in Ventile® cotton, a tightly woven fabric historically used for aviation.',
            ru: 'Рубашка из хлопка Ventile® — плотной ткани, исторически использовавшейся в авиации.'
        },
        features: {
            en: ['⬡ VENTILE® COTTON', '⬡ GHOST DYE', '⬡ HIDDEN BADGE'],
            ru: ['⬡ ХЛОПОК VENTILE®', '⬡ ОКРАСКА GHOST', '⬡ СКРЫТЫЙ БЕЙДЖ']
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
    const addToBagBtn = document.getElementById('addToBagBtn');
    const findSizeBtn = document.getElementById('findSizeBtn');

    const styleList = document.getElementById('styleList');
    const careList = document.getElementById('careList');
    const shippingList = document.getElementById('shippingList');
    const sizeNote = document.querySelector('.size-note');

    // === LANGUAGE TOGGLE ===
    const updateLanguage = () => {
        const t = translationsData[currentLang];

        document.querySelector('.header-left .nav-link')!.textContent = t.collections;
        document.querySelector('.hero-content .mono')!.textContent = t.heroSubtitle;
        document.querySelector('.hero-title')!.innerHTML = t.heroTitle;
        exploreBtn!.textContent = t.explore;

        const chips = document.querySelectorAll('.filter-chip');
        const filterTexts = [t.allItems, t.outerwear, t.trousers, t.knitwear, t.accessories, t.footwear, t.archive];
        chips.forEach((chip, i) => {
            if (filterTexts[i]) chip.textContent = filterTexts[i];
        });

        document.querySelector('.section-title')!.textContent = t.newArrivals;
        document.querySelector('.section-header .mono')!.textContent = t.displaying;

        const footerCols = document.querySelectorAll('.footer-col h4');
        footerCols[0].textContent = t.shop;
        footerCols[1].textContent = t.info;
        footerCols[2].textContent = t.follow;
        footerCols[3].textContent = t.newsletter;

        searchInput.placeholder = t.searchPlaceholder;

        document.querySelector('.size-header .section-label')!.textContent = t.selectSize;
        findSizeBtn!.textContent = t.findMySize;
        if (addToBagBtn) {
            let btnText = addToBagBtn.querySelector('.btn-text');
            if (btnText) btnText.textContent = t.addToBag;
        }
        document.querySelector('.fit-info')!.textContent = t.fit;
        document.querySelector('.color-section .section-label')!.innerHTML = t.color + ' <span id="colorName">Black</span>';

        const accordionHeaders = document.querySelectorAll('.accordion-header span:first-child');
        accordionHeaders[0].textContent = t.fabricResearch;
        accordionHeaders[1].textContent = t.styleFit;
        accordionHeaders[2].textContent = t.compositionCare;
        accordionHeaders[3].textContent = t.shippingReturn;

        // Translate accordion content
        if (styleList) styleList.innerHTML = t.styleItems.map(item => `<li>${item}</li>`).join('');
        if (careList) careList.innerHTML = t.careItems.map(item => `<li>${item}</li>`).join('');
        if (shippingList) shippingList.innerHTML = t.shippingItems.map(item => `<li>${item}</li>`).join('');
        if (sizeNote) sizeNote.textContent = t.sizeNote;

        langToggle!.textContent = currentLang.toUpperCase();
    };

    langToggle?.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ru' : 'en';
        updateLanguage();
    });

    // === SEARCH ===
    searchBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay?.classList.remove('hidden');
        searchInput?.focus();
    });

    searchClose?.addEventListener('click', () => {
        searchOverlay?.classList.add('hidden');
        searchInput.value = '';
        document.querySelectorAll('.product-card').forEach(card => {
            (card as HTMLElement).style.display = '';
        });
    });

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
            searchOverlay?.classList.add('hidden');
            document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchOverlay?.classList.add('hidden');
            modal?.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // === EXPLORE BUTTON ===
    exploreBtn?.addEventListener('click', () => {
        document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
    });

    // === MODAL CLOSE ===
    modalClose?.addEventListener('click', () => {
        modal?.classList.add('hidden');
        document.body.style.overflow = '';
    });

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // === FILTER CHIPS ===
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });

    // === HEADER SCROLL ===
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) header?.classList.add('scrolled');
        else header?.classList.remove('scrolled');
    });

    // === PRODUCT CARD CLICK ===
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
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

            sizeGuidePanel?.classList.add('hidden');
            document.querySelectorAll('.accordion-content').forEach(p => p.classList.add('hidden'));
            document.querySelectorAll('.accordion-icon').forEach(i => i.textContent = '+');

            modal?.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    // === SIZE SELECTION ===
    document.getElementById('sizeGrid')?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('size-btn')) {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');

            const size = target.textContent;
            document.querySelectorAll('.size-guide-table tbody tr').forEach(row => {
                row.classList.remove('highlight');
                if (row.querySelector('td')?.textContent === size) row.classList.add('highlight');
            });
        }
    });

    // === FIND MY SIZE ===
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
            if (content) {
                const isHidden = content.classList.contains('hidden');
                content.classList.toggle('hidden');
                if (icon) icon.textContent = isHidden ? '−' : '+';
            }
        });
    });

    // === ADD TO BAG ===
    // === ADD TO BAG (TELEGRAM) ===
    // No JS needed for simple link behavior with target="_blank"
});
