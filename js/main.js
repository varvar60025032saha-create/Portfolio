/* ══════════════════════════════════════════
   ПОРТФОЛИО — JavaScript
   Премиальные кейсы в стиле Behance Showcase
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════════════════════
     0. СИСТЕМА ЛОКАЛИЗАЦИИ (PL / EN / RU)
     ════════════════════════════════════════ */
  let currentLang = localStorage.getItem('stasheuskaya_lang') || 'pl';

  const setLanguage = (lang) => {
    if (!window.PORTFOLIO_I18N || !window.PORTFOLIO_I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem('stasheuskaya_lang', lang);

    document.documentElement.setAttribute('lang', lang);

    const t = window.PORTFOLIO_I18N[lang];

    // Обновляем title и description
    if (t.meta_title) document.title = t.meta_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_desc) metaDesc.setAttribute('content', t.meta_desc);

    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Обновляем placeholder'ы
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Обновляем aria-label'ы
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    // Обновляем активную кнопку переключателя
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  // Слушатели клика по кнопкам переключения языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selected = btn.getAttribute('data-lang');
      setLanguage(selected);
    });
  });

  // Применяем выбранный язык сразу при загрузке
  setLanguage(currentLang);

  /* ════════════════════════════════════════
     1. БАЗА КЕЙСОВ (BEHANCE SHOWCASE DATA)
     ════════════════════════════════════════ */
  const showcases = {

    /* ─── 1. LD BEAUTY STUDIO (РЕБРЕНДИНГ КАК НА BEHANCE) ─── */
    'beauty-studio': {
      title: 'LD Beauty Studio',
      badge: 'Комплексный ребрендинг',
      subtitle: 'Айдентика, фирменный стиль, полиграфия, фасадная вывеска и мерч для реального салона красоты в Минске.',
      behanceUrl: 'https://www.behance.net/gallery/231401621/LD_beautystudio-Logotype-Brand-Identity?platform=direct',
      behanceEmbed: 'https://www.behance.net/embed/project/231401621?ilo0=1',
      html: `
        <!-- HERO SHOWCASE -->
        <div class="showcase-cover">
          <img src="assets/projects/beauty-studio/cover.jpg" alt="LD Beauty Studio — Айдентика для beauty-студии" class="showcase-img-bleed">
        </div>

        <!-- ОПИСАНИЕ И КОНЦЕПЦИЯ -->
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <div class="showcase-meta-line">
              <span class="showcase-meta-tag">Коммерческий проект · Минск</span>
              <span class="showcase-meta-tag">2025</span>
              <span class="showcase-meta-tag">Illustrator · Photoshop · DTP</span>
            </div>
            <h2 class="showcase-heading">Концепция бренда &amp; Фирменная монограмма</h2>
            <p class="showcase-paragraph">
              <strong>LD Beauty Studio</strong> — салон красоты и школа-студия в Минске (ул. Шаранговича, 57).
              Задача заключалась в создании утончённой визуальной системы, которая передает премиальный уровень заботы, натуральность и уют.
            </p>
            <p class="showcase-paragraph">
              Основой айдентики стала авторская монограмма <strong>«LD»</strong> (Elena Davydova), объединяющая благородную серифную типографику с живыми природными мотивами — деликатными ветвями и пастельной шалфейно-мятной палитрой.
            </p>
          </div>
        </div>

        <!-- КРУПНЫЙ МОКАП ЛОГОТИПА -->
        <div class="showcase-full-bleed">
          <img src="assets/projects/beauty-studio/mockup-logo-hires.jpg" alt="Монограмма LD Beauty Studio" loading="lazy">
          <div class="showcase-caption">Фирменная монограмма LD и декоративная ботаническая графика</div>
        </div>

        <!-- ГАЙДЛАЙН И БРЕНД-ЛИСТ -->
        <div class="showcase-full-bleed">
          <img src="assets/projects/beauty-studio/brand-sheet.jpg" alt="Бренд-лист LD Beauty Studio" loading="lazy">
          <div class="showcase-caption">Комплексный бренд-лист: палитра оттенков, шрифтовые пары и структура фирменного блока</div>
        </div>

        <!-- ВЫВЕСКА И ИНТЕРЬЕР -->
        <div class="showcase-content-wrap">
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <img src="assets/projects/beauty-studio/signage.jpg" alt="Фасадная вывеска салона" loading="lazy">
              <div class="showcase-caption">Консольная световая фасадная вывеска студии</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/beauty-studio/interior.jpg" alt="Интерьер студии" loading="lazy">
              <div class="showcase-caption">Визуальная среда и атмосфера салона</div>
            </div>
          </div>
        </div>

        <!-- КАРТЫ ЛОЯЛЬНОСТИ И ВИЗИТКИ (ХАЙРЕЗ) -->
        <div class="showcase-full-bleed">
          <img src="assets/projects/beauty-studio/mockup-cards-hires.jpg" alt="Визитки и карты лояльности" loading="lazy">
          <div class="showcase-caption">Двусторонние карты постоянного клиента с накопительной скидкой 20% и QR-кодом для онлайн-записи</div>
        </div>

        <!-- СТАКАНЧИКИ И МЕРЧ -->
        <div class="showcase-full-bleed">
          <img src="assets/projects/beauty-studio/mockup-cups-hires.jpg" alt="Брендированные стаканчики" loading="lazy">
          <div class="showcase-caption">Эко-стаканчики для кофе и напитков гостей студии</div>
        </div>

        <!-- ПОЛИГРАФИЯ: ПРАЙС И ФЛАЕРЫ -->
        <div class="showcase-content-wrap">
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <img src="assets/projects/beauty-studio/mockup-price-hires.jpg" alt="Прайс-лист услуг" loading="lazy">
              <div class="showcase-caption">Настенный и полиграфический прайс-лист всех процедур</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/beauty-studio/mockup-flyer-hires.jpg" alt="Рекламный флаер" loading="lazy">
              <div class="showcase-caption">Двусторонний рекламный флаер со скидкой первого визита</div>
            </div>
          </div>
        </div>

        <!-- СЕРТИФИКАТЫ И СОЦСЕТИ -->
        <div class="showcase-content-wrap">
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <img src="assets/projects/beauty-studio/certificates.jpg" alt="Подарочные сертификаты" loading="lazy">
              <div class="showcase-caption">Подарочные сертификаты в конвертах и сертификаты обучения мастеров</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/beauty-studio/mockup-phone-hires.jpg" alt="Мобильный дизайн и соцсети" loading="lazy">
              <div class="showcase-caption">Оформление социальных сетей (Instagram Reels &amp; Stories)</div>
            </div>
          </div>
        </div>

        <!-- BEHANCE EMBED WIDGET -->
        <div class="showcase-content-wrap">
          <div class="showcase-behance-box">
            <div class="showcase-behance-header">
              <div class="showcase-behance-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.95.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.07-.15 1.43-.46.36-.31.53-.75.53-1.34 0-.36-.06-.65-.2-.88-.13-.23-.3-.41-.53-.54-.23-.13-.5-.22-.78-.27-.29-.05-.6-.07-.93-.07H3.53v3.56h3.015zm.185 5.98c.36 0 .7-.04 1.01-.13.31-.09.58-.22.81-.4.23-.17.41-.4.54-.68.13-.28.19-.62.19-1.01 0-.81-.23-1.39-.68-1.74-.46-.35-1.06-.53-1.81-.53H3.53v4.49h3.2zm9.69-8.41c.66 0 1.26.12 1.81.35.55.23 1.02.56 1.42.98.39.42.69.93.9 1.53.21.6.31 1.27.31 2.01 0 .22-.01.42-.04.59H14.28c.03.82.28 1.44.77 1.87.48.43 1.08.65 1.79.65.53 0 .99-.13 1.37-.39.38-.26.64-.55.78-.87h2.59c-.41 1.22-1.05 2.1-1.93 2.65-.87.55-1.9.82-3.07.82-.84 0-1.6-.14-2.29-.42-.69-.28-1.28-.68-1.76-1.19-.49-.51-.87-1.12-1.13-1.83-.27-.71-.4-1.49-.4-2.35 0-.83.13-1.59.4-2.29.27-.7.64-1.3 1.12-1.81.48-.51 1.06-.9 1.73-1.19.68-.29 1.43-.43 2.25-.43v.01zm2.34 3.94c-.06-.72-.3-1.28-.71-1.68-.42-.4-.97-.6-1.66-.6-.38 0-.72.07-1.02.2-.3.14-.55.32-.76.55-.21.23-.37.49-.49.79-.12.3-.19.6-.22.92h4.86v-.18z"/>
                </svg>
                <span>Интерактивный просмотр проекта на Behance</span>
              </div>
              <a href="https://www.behance.net/gallery/231401621/LD_beautystudio-Logotype-Brand-Identity?platform=direct" target="_blank" rel="noopener noreferrer" class="btn btn-outline showcase-behance-btn">
                Смотреть оригинал ↗
              </a>
            </div>
            <div class="showcase-iframe-container">
              <iframe src="https://www.behance.net/embed/project/231401621?ilo0=1" allowfullscreen frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
        </div>
      `
    },

    /* ─── 2. ПОСТЕРЫ (ЛИНЕЙКА ИЗ НЕСКОЛЬКИХ ПОСТЕРОВ С ОПИСАНИЯМИ) ─── */
    'posters-competition': {
      title: 'Постеры & Конкурсная графика',
      badge: 'Плакатная графика & Типографика',
      subtitle: 'Линейка авторских плакатов для всепольских конкурсов, джазовых фестивалей и концептуальных арт-серий.',
      html: `
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">Экспозиция плакатного дизайна</h2>
            <p class="showcase-paragraph">
              Плакат для меня — это синтез точной идеи, типографического эксперимента и выразительного визуального хука.
              Ниже представлена линейка из ключевых работ с разбором концепции каждого плаката.
            </p>
          </div>

          <!-- ЛИНЕЙКА ПОСТЕРОВ -->
          <div class="posters-showcase-list">

            <!-- ПОСТЕР 1: ZABKA -->
            <article class="poster-showcase-row">
              <div class="poster-media-col">
                <img src="assets/projects/posters-competition/zabka-poster.png" alt="Żabka Plakat" loading="lazy">
              </div>
              <div class="poster-desc-col">
                <span class="poster-tag">Конкурсный плакат · 2026</span>
                <h3 class="poster-item-title">Żabka — «Biznes na dzień dobry»</h3>
                <p class="poster-text">
                  Плакат разработан для общепольского творческого конкурса сети Żabka. Задача — передать бодрость утреннего города, динамику старта собственного дела и дружелюбную доступность бренда.
                </p>
                <div class="poster-specs">
                  <div class="poster-spec-item"><strong>Концепция:</strong> Энергия утреннего кофе, ритм мегаполиса, фирменная свежая колористика</div>
                  <div class="poster-spec-item"><strong>Палитра:</strong> Насыщенный зеленый Żabka, теплый солнечный желтый, белый контраст</div>
                  <div class="poster-spec-item"><strong>Техника:</strong> Коллаж, акцидентная типографика, векторные бренд-элементы</div>
                </div>
              </div>
            </article>

            <!-- ПОСТЕР 2: JAZZ KULTURA -->
            <article class="poster-showcase-row">
              <div class="poster-media-col">
                <img src="assets/projects/posters-competition/jazz-kultura.jpg" alt="Jazz Kultura" loading="lazy">
              </div>
              <div class="poster-desc-col">
                <span class="poster-tag">Фестивальная афиша</span>
                <h3 class="poster-item-title">Jazz Kultura</h3>
                <p class="poster-text">
                  Музыкальный плакат для джазового фестиваля. Визуализация звуковых колебаний медных духовых инструментов, синкопированного ритма и клубной ночной атмосферы.
                </p>
                <div class="poster-specs">
                  <div class="poster-spec-item"><strong>Идея:</strong> Буквы деформируются и текут, подобно звуковой волне саксофона в полумраке</div>
                  <div class="poster-spec-item"><strong>Настроение:</strong> Глубокий монохром, тактильная зернистость, музыкальная свобода</div>
                  <div class="poster-spec-item"><strong>Инструменты:</strong> Экспериментальная типографика, аналоговая фактура, Photoshop</div>
                </div>
              </div>
            </article>

            <!-- ПОСТЕР 3: LUSTRO -->
            <article class="poster-showcase-row">
              <div class="poster-media-col">
                <img src="assets/projects/posters-competition/lustro.jpg" alt="Lustro: samotny bieg przez mrok" loading="lazy">
              </div>
              <div class="poster-desc-col">
                <span class="poster-tag">Кинематографичный плакат</span>
                <h3 class="poster-item-title">Lustro: Samotny bieg przez mrok</h3>
                <p class="poster-text">
                  Драматичный постер, исследующий тему одиночества, внутреннего диалога и преодоления тьмы. Контрастный силуэт, холодный свет и кинематографичная композиция.
                </p>
                <div class="poster-specs">
                  <div class="poster-spec-item"><strong>Смысл:</strong> Отражение скрытых страхов и решимость идти вперед через темноту</div>
                  <div class="poster-spec-item"><strong>Стиль:</strong> Нео-нуар, глубокие тени, зернистый свет фар</div>
                </div>
              </div>
            </article>

            <!-- ПОСТЕР 4: PASJA -->
            <article class="poster-showcase-row">
              <div class="poster-media-col">
                <img src="assets/projects/posters-competition/pasja.png" alt="Pasja" loading="lazy">
              </div>
              <div class="poster-desc-col">
                <span class="poster-tag">Шрифтовой манифест</span>
                <h3 class="poster-item-title">Pasja (Страсть)</h3>
                <p class="poster-text">
                  Шрифтовой плакат-манифест об одержимости любимым делом. Буквы переплетаются и формируют непрерывный плотный текстурный узор, где каждое слово заряжено импульсом.
                </p>
                <div class="poster-specs">
                  <div class="poster-spec-item"><strong>Фокус:</strong> Плотный леттеринг, баланс черного и белого, экспрессия штриха</div>
                </div>
              </div>
            </article>

            <!-- ДИПТИХ: DANCE & FREEDOM -->
            <article class="poster-showcase-row">
              <div class="poster-media-col poster-diptych">
                <img src="assets/projects/posters-competition/dance.jpg" alt="Dance" loading="lazy">
                <img src="assets/projects/posters-competition/freedom.jpg" alt="Freedom" loading="lazy">
              </div>
              <div class="poster-desc-col">
                <span class="poster-tag">Арт-диптих</span>
                <h3 class="poster-item-title">Dance &amp; Freedom</h3>
                <p class="poster-text">
                  Парная серия постеров о телесности, полете и освобождении от гравитации. Силуэты в динамическом прыжке растворяются в градиентной дымке, создавая ощущение невесомости.
                </p>
              </div>
            </article>

            <!-- ДИПТИХ: GHOST & WAVES -->
            <article class="poster-showcase-row">
              <div class="poster-media-col poster-diptych">
                <img src="assets/projects/posters-competition/ghost.jpg" alt="Ghost" loading="lazy">
                <img src="assets/projects/posters-competition/waves.jpg" alt="Waves" loading="lazy">
              </div>
              <div class="poster-desc-col">
                <span class="poster-tag">Метафорическая серия</span>
                <h3 class="poster-item-title">Ghost &amp; Waves</h3>
                <p class="poster-text">
                  Медитативные плакаты о зыбкости памяти и приливах эмоций. Сочетание текучих линий морской волны с полупрозрачными силуэтами.
                </p>
              </div>
            </article>

          </div>
        </div>
      `
    },

    /* ─── 3. КАМЕННЫЙ ЦВЕТОК (СНАЧАЛА ЛОГОТИП, ЗАТЕМ ПРОЕКТ И ВИДЖЕТЫ) ─── */
    'stone-flower': {
      title: 'Каменный цветок',
      badge: 'Концепт айдентики & SMM',
      subtitle: 'Инициативный концепт айдентики: чистая геометрия знака, десктопный сайт, наружный билборд и виджет Instagram.',
      html: `
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">1. Знак &amp; Фирменный стиль</h2>
            <p class="showcase-paragraph">
              «Каменный цветок» — инициативный авторский концепт для салона красоты. Идея заключалась в том, чтобы соединить кристаллическую четкость природного камня с нежной симметрией цветка, создав современный знак европейского уровня.
            </p>
          </div>
        </div>

        <!-- КРУПНО ЛОГОТИП -->
        <div class="showcase-full-bleed">
          <img src="assets/projects/stone-flower/logo.jpg" alt="Логотип Каменный цветок" loading="lazy">
          <div class="showcase-caption">Векторный геометрический знак: синтез ограненного минерала и цветочных лепестков</div>
        </div>

        <!-- ВЕБ-САЙТ И ЦИФРОВОЙ ИНТЕРФЕЙС -->
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">2. Цифровой интерфейс сайта</h2>
            <p class="showcase-paragraph">
              Минималистичный десктопный макет сайта с акцентом на простор, благородную типографику и удобную онлайн-запись на процедуры.
            </p>
          </div>
        </div>

        <div class="showcase-full-bleed">
          <img src="assets/projects/stone-flower/mockup-pc.jpg" alt="Мокап сайта на мониторе" loading="lazy">
          <div class="showcase-caption">Презентация бренда на широкоформатном десктопном экране</div>
        </div>

        <!-- НАРУЖНАЯ РЕКЛАМА (БИЛБОРДЫ) -->
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">3. Наружная городская реклама</h2>
            <p class="showcase-paragraph">
              Широкоформатная городская наружная реклама: статусная подача, лаконичный слоган и контрастная эстетика, заметная в городской среде.
            </p>
          </div>

          <!-- СИТИЛАЙТ В ЛАКОНИЧНОМ СПЛИТ-БЛОКЕ -->
          <div class="citylight-showcase-row">
            <div class="citylight-mockup-col">
              <img src="assets/projects/stone-flower/billboard.jpg" alt="Городской рекламный ситилайт" loading="lazy">
              <div class="showcase-caption">Вертикальный уличный пилон (ситилайт)</div>
            </div>
            <div class="citylight-info-col">
              <span class="citylight-badge">Outdoor / Citylight · Пешеходная зона</span>
              <h3 class="citylight-title">Световой ситилайт в городской среде</h3>
              <p class="citylight-text">
                Вертикальный световой пилон спроектирован для пешеходных бульваров и входных групп.
                Благодаря градиентной подложке и контрастной геометрии знака макет привлекает внимание прохожих как днём, так и в вечернее время за счёт яркой внутренней подсветки.
              </p>
              <div class="citylight-features">
                <div class="citylight-feat-item">
                  <strong>Формат:</strong> Двусторонний сити-формат 1.2 × 1.8 м с LED-подсветкой
                </div>
                <div class="citylight-feat-item">
                  <strong>Локация:</strong> Пешеходные аллеи и навигация к салону
                </div>
                <div class="citylight-feat-item">
                  <strong>Видимость:</strong> Чёткое считывание знака и шрифтовой композиции с дистанции 30–50 метров
                </div>
              </div>
            </div>
          </div>

          <!-- ШИРОКИЙ ГОРИЗОНТАЛЬНЫЙ БИЛБОРД НА ВСЮ ДЛИНУ -->
          <div class="showcase-card-wide" style="margin-top: 28px; margin-bottom: 36px;">
            <img src="assets/projects/stone-flower/billboard-2.jpg" alt="Широкоформатный билборд в метрополитене" loading="lazy">
            <div class="showcase-caption">Широкоформатная навигационная наружная реклама (подземный переход и вход на станцию)</div>
          </div>
        </div>

        <!-- ВИДЖЕТ СОЦСЕТЕЙ (INSTAGRAM SMM) -->
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">4. Виджет социальных сетей (Instagram)</h2>
            <p class="showcase-paragraph">
              Комплексное оформление аккаунта: система иконок актуального (Stories Highlights) и единая эстетичная сетка постов в теплой минеральной палитре.
            </p>
          </div>

          <!-- ВИДЖЕТ INSTAGRAM С ХАЙЛАЙТСАМИ И СЕТКОЙ ПОСТОВ -->
          <div class="insta-mockup-widget">
            <div class="insta-header-bar">
              <div class="insta-avatar-circle">🌸</div>
              <div class="insta-profile-info">
                <span class="insta-username">kamennyj_cvetok</span>
                <span class="insta-category">Салон красоты · Эстетика &amp; Уход</span>
              </div>
            </div>

            <!-- КРУЖКИ ХАЙЛАЙТСОВ -->
            <div class="insta-highlights-row">
              <div class="insta-highlight-item">
                <div class="insta-highlight-thumb"><img src="assets/projects/stone-flower/insta-story-1.jpg" alt="Прайс"></div>
                <span>Прайс</span>
              </div>
              <div class="insta-highlight-item">
                <div class="insta-highlight-thumb"><img src="assets/projects/stone-flower/insta-story-2.jpg" alt="Услуги"></div>
                <span>Услуги</span>
              </div>
              <div class="insta-highlight-item">
                <div class="insta-highlight-thumb"><img src="assets/projects/stone-flower/insta-story-3.jpg" alt="Запись"></div>
                <span>Запись</span>
              </div>
            </div>

            <!-- СЕТКА ПОСТОВ -->
            <div class="insta-posts-feed">
              <div class="insta-post-card"><img src="assets/projects/stone-flower/posts-grid.jpg" alt="Сетка постов"></div>
              <div class="insta-post-card"><img src="assets/projects/stone-flower/post-detail-1.jpg" alt="Пост 1"></div>
              <div class="insta-post-card"><img src="assets/projects/stone-flower/post-detail-2.jpg" alt="Пост 2"></div>
            </div>
          </div>
        </div>
      `
    },

    /* ─── 4. OTIUM (UI/UX ДИЗАЙН ПРИЛОЖЕНИЯ И АЙДЕНТИКА) ─── */
    'otium': {
      title: 'OTIUM — Психологическая помощь студентам',
      badge: 'UI/UX Дизайн & Айдентика',
      subtitle: 'Концепт мобильного приложения и айдентики для психологической помощи и эмоциональной поддержки студентов во время сессий (университетский проект).',
      html: `
        <!-- ЗАГЛАВНАЯ КАРТИНКА И ОБЛОЖКА: ЗАЧЕТ 6.05.2026 -->
        <div class="showcase-cover">
          <img src="assets/projects/otium/zachet-cover.png" alt="OTIUM — Зачетная презентация проекта" class="showcase-img-bleed">
        </div>

        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">«Nadaj Kształt Swoim Myślom»</h2>
            <p class="showcase-paragraph">
              <strong>OTIUM</strong> — концептуальное мобильное приложение и система визуальной коммуникации, созданные в рамках университетского учебного проекта (WSB Merito Gdańsk).
              Проект направлен на эмоциональную поддержку студентов во время сессий, предотвращение академического выгорания и развитие практик осознанности.
            </p>
            <div class="showcase-specs-list" style="margin-top: 16px;">
              <span class="showcase-spec-item">🎓 <strong>Тип проекта:</strong> Университетское задание (WSB Merito Gdańsk)</span>
              <span class="showcase-spec-item">📱 <strong>Направление:</strong> UI/UX дизайн мобильного приложения</span>
              <span class="showcase-spec-item">🎨 <strong>Айдентика:</strong> Фирменный знак &amp; плакатная серия в мокапах</span>
              <span class="showcase-spec-item">💡 <strong>Цель:</strong> Снижение стресса и тревожности в период экзаменов</span>
            </div>
          </div>
        </div>

        <!-- 1. ЛОГОТИП (LOGO MONO 2 И LOGO DARK 1) -->
        <div class="showcase-content-wrap">
          <div class="showcase-section-title">
            <span class="showcase-section-num">1. Фирменный знак</span>
            <h3>Типографика и логотип</h3>
            <p>Геометричное начертание с центральной метафорой внутреннего фокуса и спокойствия в букве «О». Представлены две официальные вариации знака.</p>
          </div>
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <div class="showcase-logo-box" style="background: #0D0F14;">
                <img src="assets/projects/otium/logo-mono-2.png" alt="OTIUM Logo Mono 2" loading="lazy">
              </div>
              <div class="showcase-caption">Монохромная версия (Logo Mono 2) — для тёмных экранов, мокапов и интерфейсов</div>
            </div>
            <div class="showcase-card showcase-card-light">
              <div class="showcase-logo-box" style="background: #EBE5DF;">
                <img src="assets/projects/otium/logo-dark-1.png" alt="OTIUM Logo Dark 1" loading="lazy">
              </div>
              <div class="showcase-caption">Тёмная фирменная версия (Logo Dark 1) — глубокий оттенок для светлых носителей</div>
            </div>
          </div>
        </div>

        <!-- 2. МОБИЛЬНЫЕ ЛАЙАУТЫ (DARK FLOW) -->
        <div class="showcase-content-wrap">
          <div class="showcase-section-title">
            <span class="showcase-section-num">2. Интерфейс приложения</span>
            <h3>Лайауты экранов и мобильные сценарии</h3>
            <p>Последовательность взаимодействия: онбординг, выбор эмоционального состояния, аудиоплеер расслабляющих сессий и персональный дневник рефлексии.</p>
          </div>
          <div class="showcase-grid-3">
            <div class="showcase-card">
              <img src="assets/projects/otium/layout-dark-1.jpg?v=2" alt="Мобильный сценарий 1" loading="lazy">
              <div class="showcase-caption">Экран приветствия и выбор текущего самочувствия</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/otium/layout-dark-2.jpg?v=2" alt="Мобильный сценарий 2" loading="lazy">
              <div class="showcase-caption">Практики осознанности и таймер релаксации</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/otium/layout-dark-3.jpg?v=2" alt="Мобильный сценарий 3" loading="lazy">
              <div class="showcase-caption">Аудио-медитации и журнал эмоциональной динамики</div>
            </div>
          </div>
        </div>

        <!-- 3. ПОСТЕРЫ В МОКАПАХ (MOCKUPS 1-4) -->
        <div class="showcase-content-wrap">
          <div class="showcase-section-title">
            <span class="showcase-section-num">3. Серия постеров</span>
            <h3>Постеры в мокапах студенческой и городской среды</h3>
            <p>Плакатная кампания OTIUM разработана для размещения на территории университетского кампуса, библиотек и зон коворкинга.</p>
          </div>
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <img src="assets/projects/otium/mockup-poster-1.jpg" alt="Постер в мокапе 1" loading="lazy">
              <div class="showcase-caption">Мокап 1: Главный постер «Nadaj Kształt Swoim Myślom» в интерьере кампуса</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/otium/mockup-poster-2.jpg" alt="Постер в мокапе 2" loading="lazy">
              <div class="showcase-caption">Мокап 2: Контрастный тёмный постер в интерьере зоны отдыха</div>
            </div>
          </div>
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <img src="assets/projects/otium/mockup-poster-3.jpg" alt="Постер в мокапе 3" loading="lazy">
              <div class="showcase-caption">Мокап 3: Постер вечерних практик в минималистичном интерьере библиотеки</div>
            </div>
            <div class="showcase-card">
              <img src="assets/projects/otium/mockup-poster-4.jpg" alt="Постер в мокапе 4" loading="lazy">
              <div class="showcase-caption">Мокап 4: Постер дневной концентрации в светлом галерейном освещении</div>
            </div>
          </div>
        </div>

        <!-- 4. ВЕРТИКАЛЬНЫЙ МОКАП 5 -->
        <div class="showcase-content-wrap">
          <div class="showcase-grid-2">
            <div class="showcase-card">
              <img src="assets/projects/otium/mockup-poster-5.jpg" alt="Вертикальный мокап постера 5" loading="lazy">
              <div class="showcase-caption">Мокап 5: Вертикальный плакат в пространстве университетского холла</div>
            </div>
            <div class="showcase-card" style="display: flex; flex-direction: column; justify-content: center; padding: 36px 30px; background: rgba(255, 255, 255, 0.02);">
              <span class="showcase-section-num">4. Визуальный контекст</span>
              <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 14px; color: var(--text-primary);">Интеграция в университетскую среду</h3>
              <p style="color: var(--text-secondary); line-height: 1.6; font-size: 15px; margin-bottom: 16px;">
                Плакаты служат визуальным якорем спокойствия в периоды сессионных дедлайнов. Лаконичная типографика и мягкие абстрактные градиенты не перегружают зрение, а мягко привлекают внимание.
              </p>
              <p style="color: var(--text-secondary); line-height: 1.6; font-size: 15px;">
                Каждый плакат дополнен QR-кодом для быстрого скачивания приложения OTIUM и перехода к экспресс-практикам снятия тревожности.
              </p>
            </div>
          </div>
        </div>
      `
    },

    /* ─── 5. JDH MERCH (ДИЗАЙН ОДЕЖДЫ И УПАКОВКА) ─── */
    'clothing-merch': {
      title: 'JDH Apparel & Merch',
      badge: 'Дизайн мерча & Упаковка',
      subtitle: 'Университетский проект: фирменные тканевые бирки, визуализация футболок с принтами, почтовая упаковка и анимация.',
      html: `
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">Тактильный мерч &amp; Культура упаковки</h2>
            <p class="showcase-paragraph">
              Проектирование авторской линейки одежды и аксессуаров персонажа JDH с акцентом на качество деталей: от текстуры вышитого ярлыка до распаковки брендированной коробки (unboxing experience).
            </p>
          </div>
        </div>

        <!-- БОЛЬШОЕ ИЗОБРАЖЕНИЕ: ZNACZNIK WIZUALIZACJI -->
        <div class="showcase-full-bleed">
          <img src="assets/projects/clothing-merch/znacznik-wizualizacji.png" alt="Значник визуализации бирок" loading="lazy">
          <div class="showcase-caption">Визуализация фирменных тканевых ярлыков и навесных бирок бренда JDH</div>
        </div>

        <!-- ДВЕ МАЙКИ: СЛЕВА ВТОРАЯ МАЙКА, СПРАВА РАСТЯНУТАЯ НА ВЕСЬ ПРЯМОУГОЛЬНИК -->
        <div class="showcase-content-wrap">
          <div class="showcase-grid-2">
            <div class="showcase-card showcase-square-card">
              <img src="assets/projects/clothing-merch/wizualizacja-koszulki.png" alt="Визуализация майки" class="img-square-fill" loading="lazy">
              <div class="showcase-caption">Визуализация оверсайз-футболки JDH (Вариант 1)</div>
            </div>
            <div class="showcase-card showcase-square-card">
              <img src="assets/projects/clothing-merch/tshirt-screen.png" alt="Мокап майки с принтом" class="img-square-fill" loading="lazy">
              <div class="showcase-caption">Мокап оверсайз-футболки с графическим принтом (Вариант 2)</div>
            </div>
          </div>
        </div>

        <!-- КОРОБКА: СЛЕВА ГИФ АНИМАЦИЯ, СПРАВА МОКАП КОРОБКИ -->
        <div class="showcase-content-wrap">
          <div class="showcase-grid-2">
            <div class="showcase-card showcase-square-card showcase-anim-card">
              <div class="anim-media-wrapper">
                <img src="assets/projects/clothing-merch/jdh-animation.gif" alt="Анимация персонажа JDH" class="jdh-gif-img" loading="lazy">
              </div>
              <div class="showcase-caption">Анимация персонажа JDH (арт-концепт)</div>
            </div>
            <div class="showcase-card showcase-square-card">
              <img src="assets/projects/clothing-merch/box-render.png" alt="3D рендер коробки" class="img-square-fill" loading="lazy">
              <div class="showcase-caption">3D-мокап закрытой брендированной коробки (Mailer Box)</div>
            </div>
          </div>
        </div>
      `
    },

    /* ─── 6. DIGITAL ART ─── */
    'digital-art': {
      title: 'Digital Art & Серии',
      badge: 'Цифровая иллюстрация',
      subtitle: 'Экспериментальные графические композиции, исследование градиентов, света и телесности.',
      html: `
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <h2 class="showcase-heading">Серия «Свет и Тело»</h2>
            <p class="showcase-paragraph">
              Свободные художественные поиски: сочетание контрастных градиентов, силуэтов и тонких графических линий. Метафора человеческого прикосновения, тепла и лучей заката.
            </p>
          </div>

          <div class="showcase-grid-2">
            <div class="showcase-card showcase-card-poster">
              <img src="assets/projects/digital-art/sun.jpg" alt="Иллюстрация Солнце" loading="lazy">
              <div class="showcase-caption">Иллюстрация «Солнце»</div>
            </div>
            <div class="showcase-card showcase-card-poster">
              <img src="assets/projects/digital-art/hands.jpg" alt="Иллюстрация Руки" class="img-fill-rect" loading="lazy">
              <div class="showcase-caption">Иллюстрация «Руки»</div>
            </div>
          </div>

          <!-- СЕТКА ГРАФИЧЕСКИХ АРТОВ -->
          <div class="showcase-intro-card" style="margin-top: 48px;">
            <h2 class="showcase-heading">Градиентные арт-композиции</h2>
            <p class="showcase-paragraph">
              Серия концептуальных постеров с акцидентной типографикой, фактурным шумом и альтернативной гранж-эстетикой.
            </p>
          </div>

          <!-- ШИРОКИЙ ПОСТЕР НА ВСЮ ШИРИНУ СТРОКИ (КРАСНАЯ ОБЛАСТЬ) -->
          <div class="showcase-card-wide" style="margin-bottom: 24px;">
            <img src="assets/projects/digital-art/art-1.jpg" alt="PUNK'S NOT DEAD — Широкий формат" loading="lazy">
            <div class="showcase-caption">«PUNK'S NOT DEAD» — Широкоформатная гранж-композиция</div>
          </div>

          <!-- НИЖНИЙ РЯД: СЛЕВА НОВЫЙ ПОСТЕР "ПЛАЧ НЕБЕС", СПРАВА РОЗОВЫЙ АРТ -->
          <div class="showcase-grid-2">
            <div class="showcase-card showcase-card-poster">
              <img src="assets/projects/digital-art/heaven-tears.jpg" alt="Плач небес / Bad Manners" loading="lazy">
              <div class="showcase-caption">Постер «Плач небес» (Bad Manners)</div>
            </div>
            <div class="showcase-card showcase-card-poster">
              <img src="assets/projects/digital-art/art-4.jpg" alt="Sick of it" loading="lazy">
              <div class="showcase-caption">Арт-композиция «Sick of it»</div>
            </div>
          </div>
        </div>
      `
    },

    /* ─── 7. PRO IT (LOGOTYPE & BRAND IDENTITY) ─── */
    'pro-it': {
      title: 'Pro IT — Logotype & Brand Identity для школы IT',
      badge: 'Брендинг & Айдентика',
      subtitle: 'Комплексный фирменный стиль, геометрия логотипа и визуальная система для школы IT-технологий.',
      html: `
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <div class="showcase-meta-line">
              <span class="showcase-meta-tag">Брендинг &amp; Айдентика</span>
              <span class="showcase-meta-tag">IT Education</span>
              <span class="showcase-meta-tag">Behance Interactive</span>
            </div>
            <h2 class="showcase-heading">Pro IT — Айдентика школы программирования</h2>
            <p class="showcase-paragraph">
              Проектирование современного знака, шрифтового начертания и брендинговой системы для образовательного IT-проекта.
              Лаконичная динамичная графика, выверенная сетка и технологичная эстетика.
            </p>
          </div>
        </div>

        <div class="showcase-content-wrap">
          <div class="showcase-behance-box">
            <div class="showcase-behance-header">
              <div class="showcase-behance-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.95.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.07-.15 1.43-.46.36-.31.53-.75.53-1.34 0-.36-.06-.65-.2-.88-.13-.23-.3-.41-.53-.54-.23-.13-.5-.22-.78-.27-.29-.05-.6-.07-.93-.07H3.53v3.56h3.015zm.185 5.98c.36 0 .7-.04 1.01-.13.31-.09.58-.22.81-.4.23-.17.41-.4.54-.68.13-.28.19-.62.19-1.01 0-.81-.23-1.39-.68-1.74-.46-.35-1.06-.53-1.81-.53H3.53v4.49h3.2zm9.69-8.41c.66 0 1.26.12 1.81.35.55.23 1.02.56 1.42.98.39.42.69.93.9 1.53.21.6.31 1.27.31 2.01 0 .22-.01.42-.04.59H14.28c.03.82.28 1.44.77 1.87.48.43 1.08.65 1.79.65.53 0 .99-.13 1.37-.39.38-.26.64-.55.78-.87h2.59c-.41 1.22-1.05 2.1-1.93 2.65-.87.55-1.9.82-3.07.82-.84 0-1.6-.14-2.29-.42-.69-.28-1.28-.68-1.76-1.19-.49-.51-.87-1.12-1.13-1.83-.27-.71-.4-1.49-.4-2.35 0-.83.13-1.59.4-2.29.27-.7.64-1.3 1.12-1.81.48-.51 1.06-.9 1.73-1.19.68-.29 1.43-.43 2.25-.43v.01zm2.34 3.94c-.06-.72-.3-1.28-.71-1.68-.42-.4-.97-.6-1.66-.6-.38 0-.72.07-1.02.2-.3.14-.55.32-.76.55-.21.23-.37.49-.49.79-.12.3-.19.6-.22.92h4.86v-.18z"/>
                </svg>
                <span>Интерактивный просмотр проекта на Behance</span>
              </div>
              <a href="https://www.behance.net/gallery/195319111/Pro-IT-Logotype-Brand-Identity-dlja-shkoly-IT?platform=direct" target="_blank" rel="noopener noreferrer" class="btn btn-outline showcase-behance-btn">
                Смотреть оригинал ↗
              </a>
            </div>
            <div class="showcase-iframe-container">
              <iframe src="https://www.behance.net/embed/project/195319111?ilo0=1" allowfullscreen frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
        </div>
      `
    },

    /* ─── 8. SEWING STUDIO (JAPANESE AESTHETIC UI CONCEPT) ─── */
    'sewing-studio': {
      title: 'Sewing Studio — Japanese Aesthetic UI Concept',
      badge: 'UI/UX Концепт & Эстетика',
      subtitle: 'Цифровой интерфейс и визуальная эстетика швейной студии в стиле японского минимализма.',
      html: `
        <div class="showcase-content-wrap">
          <div class="showcase-intro-card">
            <div class="showcase-meta-line">
              <span class="showcase-meta-tag">UI/UX Концепт</span>
              <span class="showcase-meta-tag">Japanese Aesthetic</span>
              <span class="showcase-meta-tag">Behance Interactive</span>
            </div>
            <h2 class="showcase-heading">Sewing Studio — Японский минимализм в интерфейсе</h2>
            <p class="showcase-paragraph">
              Концепция интерфейса швейного ателье, вдохновленная японской эстетикой и чистотой форм.
              Природная гамма, деликатная акцидентная типографика, свободное пространство и медитативный пользовательский опыт.
            </p>
          </div>
        </div>

        <div class="showcase-content-wrap">
          <div class="showcase-behance-box">
            <div class="showcase-behance-header">
              <div class="showcase-behance-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.95.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.07-.15 1.43-.46.36-.31.53-.75.53-1.34 0-.36-.06-.65-.2-.88-.13-.23-.3-.41-.53-.54-.23-.13-.5-.22-.78-.27-.29-.05-.6-.07-.93-.07H3.53v3.56h3.015zm.185 5.98c.36 0 .7-.04 1.01-.13.31-.09.58-.22.81-.4.23-.17.41-.4.54-.68.13-.28.19-.62.19-1.01 0-.81-.23-1.39-.68-1.74-.46-.35-1.06-.53-1.81-.53H3.53v4.49h3.2zm9.69-8.41c.66 0 1.26.12 1.81.35.55.23 1.02.56 1.42.98.39.42.69.93.9 1.53.21.6.31 1.27.31 2.01 0 .22-.01.42-.04.59H14.28c.03.82.28 1.44.77 1.87.48.43 1.08.65 1.79.65.53 0 .99-.13 1.37-.39.38-.26.64-.55.78-.87h2.59c-.41 1.22-1.05 2.1-1.93 2.65-.87.55-1.9.82-3.07.82-.84 0-1.6-.14-2.29-.42-.69-.28-1.28-.68-1.76-1.19-.49-.51-.87-1.12-1.13-1.83-.27-.71-.4-1.49-.4-2.35 0-.83.13-1.59.4-2.29.27-.7.64-1.3 1.12-1.81.48-.51 1.06-.9 1.73-1.19.68-.29 1.43-.43 2.25-.43v.01zm2.34 3.94c-.06-.72-.3-1.28-.71-1.68-.42-.4-.97-.6-1.66-.6-.38 0-.72.07-1.02.2-.3.14-.55.32-.76.55-.21.23-.37.49-.49.79-.12.3-.19.6-.22.92h4.86v-.18z"/>
                </svg>
                <span>Интерактивный просмотр проекта на Behance</span>
              </div>
              <a href="https://www.behance.net/gallery/243081589/Sewing-Studio-Japanese-Aesthetic-UI-Concept?platform=direct" target="_blank" rel="noopener noreferrer" class="btn btn-outline showcase-behance-btn">
                Смотреть оригинал ↗
              </a>
            </div>
            <div class="showcase-iframe-container">
              <iframe src="https://www.behance.net/embed/project/243081589?ilo0=1" allowfullscreen frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
        </div>
      `
    }
  };


  /* ════════════════════════════════════════
     2. УПРАВЛЕНИЕ МОДАЛКОЙ SHOWCASE
     ════════════════════════════════════════ */
  const modal          = document.getElementById('projectModal');
  const modalBackdrop  = document.getElementById('modalBackdrop');
  const modalBody      = document.getElementById('modalBody');
  const modalCloseBtn  = document.getElementById('modalCloseBtn');
  const modalBadge     = document.getElementById('modalBadge');
  const modalTitleMini = document.getElementById('modalTitleMini');

  const openProjectModal = (projectId) => {
    const data = showcases[projectId];
    if (!data) return;

    const activeLang = localStorage.getItem('stasheuskaya_lang') || 'pl';
    const i18nData = window.SHOWCASES_I18N && window.SHOWCASES_I18N[projectId];

    const badge = (i18nData && i18nData.badge && i18nData.badge[activeLang]) || data.badge;
    const title = (i18nData && i18nData.title && i18nData.title[activeLang]) || data.title;
    const subtitle = (i18nData && i18nData.subtitle && i18nData.subtitle[activeLang]) || data.subtitle;

    const t = (window.PORTFOLIO_I18N && window.PORTFOLIO_I18N[activeLang]) || {};
    const footerH = t.modal_footer_h || 'Podoba Ci się ten projekt?';
    const footerP = t.modal_footer_p || 'Chętnie omówię współpracę lub stworzenie nowego projektu graficznego.';
    const footerBtn = t.modal_footer_btn || 'Napisz do mnie';

    modalBadge.textContent = badge;
    modalTitleMini.textContent = title;

    // Генерируем премиальный кейс
    let fullHtml = `
      <div class="showcase-header-hero">
        <span class="showcase-hero-badge">${badge}</span>
        <h1 class="showcase-hero-title">${title}</h1>
        <p class="showcase-hero-subtitle">${subtitle}</p>
      </div>

      ${data.html}

      <div class="showcase-footer-action">
        <h3 class="showcase-footer-heading">${footerH}</h3>
        <p class="showcase-footer-sub">${footerP}</p>
        <button class="btn btn-filled showcase-contact-trigger">${footerBtn}</button>
      </div>
    `;

    modalBody.innerHTML = fullHtml;
    modalBody.scrollTop = 0;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Кнопка связи внутри кейса
    const trigger = modalBody.querySelector('.showcase-contact-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        closeProjectModal();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  const closeProjectModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  // Клик по карточкам проектов
  document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });

  // Закрытие
  modalCloseBtn.addEventListener('click', closeProjectModal);
  modalBackdrop.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeProjectModal();
  });


  /* ════════════════════════════════════════
     3. НАВИГАЦИЯ И СКРОЛЛ
     ════════════════════════════════════════ */
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Reveal при скролле
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // Плавный скролл к якорям
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ════════════════════════════════════════
     4. ФОРМА ОБРАТНОЙ СВЯЗИ
     ════════════════════════════════════════ */
  const form       = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput    = form.querySelector('#name');
    const emailInput   = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    const btn          = form.querySelector('.btn-submit');

    const name    = nameInput.value.trim();
    const email   = emailInput.value.trim();
    const message = messageInput.value.trim();

    const activeLang = localStorage.getItem('stasheuskaya_lang') || 'pl';
    const t = (window.PORTFOLIO_I18N && window.PORTFOLIO_I18N[activeLang]) || {};

    if (!name || !email || !message) {
      formStatus.textContent = activeLang === 'pl' ? 'Wypełnij wszystkie pola formularza.' : (activeLang === 'en' ? 'Please fill in all fields.' : 'Пожалуйста, заполните все поля формы.');
      formStatus.style.color = '#E6344A';
      return;
    }

    if (!isValidEmail(email)) {
      formStatus.textContent = activeLang === 'pl' ? 'Wprowadź poprawny adres e-mail.' : (activeLang === 'en' ? 'Please enter a valid email address.' : 'Пожалуйста, введите корректный адрес email.');
      formStatus.style.color = '#E6344A';
      return;
    }

    btn.disabled = true;
    const originalBtnText = btn.textContent;
    btn.textContent = t.form_sending || 'Wysyłanie...';
    formStatus.textContent = '';

    const targetEmail = 'varvarastasheuskaya@gmail.com';

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Message', message);
    formData.append('_subject', `Portfolio (${activeLang.toUpperCase()}): message from ${name}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (response.ok) {
        formStatus.textContent = '✓ ' + (t.form_success || 'Dziękuję! Twoja wiadomość została pomyślnie wysłana.');
        formStatus.style.color = '#4ade80';
        form.reset();
      } else {
        throw new Error('Server response not ok');
      }
    } catch (err) {
      formStatus.textContent = '✓ ' + (t.form_success || 'Wiadomość została wysłana.');
      formStatus.style.color = '#4ade80';

      const mailSubject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const mailBody    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      setTimeout(() => {
        window.location.href = `mailto:${targetEmail}?subject=${mailSubject}&body=${mailBody}`;
        form.reset();
      }, 600);
    } finally {
      btn.disabled = false;
      btn.textContent = t.form_submit || originalBtnText;

      setTimeout(() => {
        if (formStatus.textContent.includes('✓')) {
          formStatus.textContent = '';
        }
      }, 10000);
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

});
