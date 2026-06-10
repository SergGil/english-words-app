// English Words App — js/features/i18n.ts
// Minimal i18n: translates sidebar menu labels (UA ⇄ EN), persisted via localStorage

import i18next from 'i18next';
import ua from '../../locales/ua/translation.json';
import en from '../../locales/en/translation.json';
import es from '../../locales/es/translation.json';

export type Lang = 'ua' | 'en' | 'es';

const LEVEL_NAMES_EN: Record<string, string> = {
  '🌌 Цивільний':           '🌌 Civilian',
  '✨ Чутливий до Сили':    '✨ Force-sensitive',
  '🟡 Падаван':             '🟡 Padawan',
  '🔵 Джедай-лицар':        '🔵 Jedi Knight',
  '🟢 Майстер Джедай':      '🟢 Jedi Master',
  '🟣 Член Ради':           '🟣 Council Member',
  '🔴 Ситх-лорд':           '🔴 Sith Lord',
  '⚡ Обраний':             '⚡ The Chosen One',
  '🌠 Балансувальник Сили': '🌠 Force Balancer',
  '🏆 Магістр Йода':        '🏆 Master Yoda',
};

const LEVEL_NAMES_ES: Record<string, string> = {
  '🌌 Цивільний':           '🌌 Civil',
  '✨ Чутливий до Сили':    '✨ Sensible a la Fuerza',
  '🟡 Падаван':             '🟡 Padawan',
  '🔵 Джедай-лицар':        '🔵 Caballero Jedi',
  '🟢 Майстер Джедай':      '🟢 Maestro Jedi',
  '🟣 Член Ради':           '🟣 Miembro del Consejo',
  '🔴 Ситх-лорд':           '🔴 Señor Sith',
  '⚡ Обраний':             '⚡ El Elegido',
  '🌠 Балансувальник Сили': '🌠 Equilibrador de la Fuerza',
  '🏆 Магістр Йода':        '🏆 Maestro Yoda',
};

export function levelName(name: string): string {
  const lang = getLang();
  if (lang === 'en') return LEVEL_NAMES_EN[name] ?? name;
  if (lang === 'es') return LEVEL_NAMES_ES[name] ?? name;
  return name;
}

const CATEGORY_NAMES_EN: Record<string, string> = {
  '🐾 Тварини':                            '🐾 Animals',
  '🐟 Морські істоти':                     '🐟 Sea creatures',
  '🌿 Рослини & Квіти':                    '🌿 Plants & Flowers',
  '🍎 Фрукти & Овочі':                     '🍎 Fruits & Vegetables',
  '🍕 Їжа & Страви':                       '🍕 Food & Dishes',
  '☕ Напої':                              '☕ Drinks',
  '🏠 Дім & Меблі':                        '🏠 Home & Furniture',
  '🔧 Інструменти & Предмети':             '🔧 Tools & Objects',
  '👕 Одяг & Аксесуари':                   '👕 Clothing & Accessories',
  '🚗 Транспорт':                          '🚗 Transport',
  '🌍 Природа & Погода':                   '🌍 Nature & Weather',
  '🏙️ Місто & Будівлі':                    '🏙️ City & Buildings',
  '🏥 Здоров\'я & Медицина':               '🏥 Health & Medicine',
  '💼 Робота & Бізнес':                    '💼 Work & Business',
  '🎓 Освіта & Наука':                     '🎓 Education & Science',
  '💻 Технології':                         '💻 Technology',
  '🎭 Мистецтво & Розваги':                '🎭 Arts & Entertainment',
  '⚽ Спорт':                              '⚽ Sports',
  '✈️ Подорожі':                           '✈️ Travel',
  '👨‍👩‍👧 Люди & Стосунки':                  '👨‍👩‍👧 People & Relationships',
  '😊 Емоції & Характер':                  '😊 Emotions & Character',
  '🕐 Час & Числа':                        '🕐 Time & Numbers',
  '🍳 Кулінарія':                          '🍳 Cooking',
  '💰 Гроші & Економіка':                  '💰 Money & Economy',
  '⚖️ Право & Суспільство':                '⚖️ Law & Society',
  '🔬 Наука & Природознавство':            '🔬 Science & Nature studies',
  '🎨 Кольори & Форми':                    '🎨 Colors & Shapes',
  '🗣️ Мова & Комунікація':                 '🗣️ Language & Communication',
  '🔤 Загальна лексика':                   '🔤 General vocabulary',
  '💬 Фрази, фразові дієслова & ідіоми':   '💬 Phrases, phrasal verbs & idioms',
};

const CATEGORY_NAMES_ES: Record<string, string> = {
  '🐾 Тварини':                            '🐾 Animales',
  '🐟 Морські істоти':                     '🐟 Criaturas marinas',
  '🌿 Рослини & Квіти':                    '🌿 Plantas y flores',
  '🍎 Фрукти & Овочі':                     '🍎 Frutas y verduras',
  '🍕 Їжа & Страви':                       '🍕 Comida y platos',
  '☕ Напої':                              '☕ Bebidas',
  '🏠 Дім & Меблі':                        '🏠 Casa y muebles',
  '🔧 Інструменти & Предмети':             '🔧 Herramientas y objetos',
  '👕 Одяг & Аксесуари':                   '👕 Ropa y accesorios',
  '🚗 Транспорт':                          '🚗 Transporte',
  '🌍 Природа & Погода':                   '🌍 Naturaleza y clima',
  '🏙️ Місто & Будівлі':                    '🏙️ Ciudad y edificios',
  '🏥 Здоров\'я & Медицина':               '🏥 Salud y medicina',
  '💼 Робота & Бізнес':                    '💼 Trabajo y negocios',
  '🎓 Освіта & Наука':                     '🎓 Educación y ciencia',
  '💻 Технології':                         '💻 Tecnología',
  '🎭 Мистецтво & Розваги':                '🎭 Arte y entretenimiento',
  '⚽ Спорт':                              '⚽ Deportes',
  '✈️ Подорожі':                           '✈️ Viajes',
  '👨‍👩‍👧 Люди & Стосунки':                  '👨‍👩‍👧 Personas y relaciones',
  '😊 Емоції & Характер':                  '😊 Emociones y carácter',
  '🕐 Час & Числа':                        '🕐 Tiempo y números',
  '🍳 Кулінарія':                          '🍳 Cocina',
  '💰 Гроші & Економіка':                  '💰 Dinero y economía',
  '⚖️ Право & Суспільство':                '⚖️ Derecho y sociedad',
  '🔬 Наука & Природознавство':            '🔬 Ciencia y naturaleza',
  '🎨 Кольори & Форми':                    '🎨 Colores y formas',
  '🗣️ Мова & Комунікація':                 '🗣️ Idioma y comunicación',
  '🔤 Загальна лексика':                   '🔤 Vocabulario general',
  '💬 Фрази, фразові дієслова & ідіоми':   '💬 Frases, verbos compuestos y modismos',
};

export function categoryName(name: string): string {
  const lang = getLang();
  if (lang === 'en') return CATEGORY_NAMES_EN[name] ?? name;
  if (lang === 'es') return CATEGORY_NAMES_ES[name] ?? name;
  return name;
}

const SKILL_NAMES_EN: Record<string, string> = {
  'Базове вітання':        'Basic greetings',
  'Числа і кольори':       'Numbers and colors',
  'Сім\'я та тіло':        'Family and body',
  'Повсякденні дії':       'Everyday actions',
  'Опис людей/місць':      'Describing people/places',
  'Магазини і ціни':       'Shops and prices',
  'Подорожі':              'Travel',
  'Минулі події':          'Past events',
  'Розмова про роботу':    'Talking about work',
  'Новини та медіа':       'News and media',
  'Вирішення проблем':     'Problem solving',
  'Плани на майбутнє':     'Future plans',
  'Академічні тексти':     'Academic texts',
  'Бізнес комунікація':    'Business communication',
  'Складні аргументи':     'Complex arguments',
  'Фільми без субтитрів':  'Movies without subtitles',
  'Наукові статті':        'Scientific articles',
  'Переговори':            'Negotiations',
  'Нюанси та ідіоми':      'Nuances and idioms',
  'Публічні виступи':      'Public speaking',
  'Художня проза':         'Literary prose',
  'Академічний стиль':     'Academic style',
  'Повне розуміння':       'Full comprehension',
  'Рівень носія':          'Native-like level',
};

const SKILL_NAMES_ES: Record<string, string> = {
  'Базове вітання':        'Saludos básicos',
  'Числа і кольори':       'Números y colores',
  'Сім\'я та тіло':        'Familia y cuerpo',
  'Повсякденні дії':       'Acciones cotidianas',
  'Опис людей/місць':      'Describir personas/lugares',
  'Магазини і ціни':       'Tiendas y precios',
  'Подорожі':              'Viajes',
  'Минулі події':          'Eventos pasados',
  'Розмова про роботу':    'Hablar sobre el trabajo',
  'Новини та медіа':       'Noticias y medios',
  'Вирішення проблем':     'Resolución de problemas',
  'Плани на майбутнє':     'Planes futuros',
  'Академічні тексти':     'Textos académicos',
  'Бізнес комунікація':    'Comunicación empresarial',
  'Складні аргументи':     'Argumentos complejos',
  'Фільми без субтитрів':  'Películas sin subtítulos',
  'Наукові статті':        'Artículos científicos',
  'Переговори':            'Negociaciones',
  'Нюанси та ідіоми':      'Matices y modismos',
  'Публічні виступи':      'Hablar en público',
  'Художня проза':         'Prosa literaria',
  'Академічний стиль':     'Estilo académico',
  'Повне розуміння':       'Comprensión total',
  'Рівень носія':          'Nivel nativo',
};

export function skillName(name: string): string {
  const lang = getLang();
  if (lang === 'en') return SKILL_NAMES_EN[name] ?? name;
  if (lang === 'es') return SKILL_NAMES_ES[name] ?? name;
  return name;
}

const MONTHS_UA = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DOWS_UA   = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
const DOWS_EN   = ['Mo','Tu','We','Th','Fr','Sa','Su'];
const DOWS_ES   = ['Lu','Ma','Mi','Ju','Vi','Sá','Do'];

const LANG_KEY = 'ew_lang';

function storedLang(): Lang {
  const v = localStorage.getItem(LANG_KEY);
  return v === 'en' ? 'en' : v === 'es' ? 'es' : 'ua';
}

i18next.init({
  lng: storedLang(),
  fallbackLng: 'ua',
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
  resources: {
    ua: { translation: ua },
    en: { translation: en },
    es: { translation: es },
  },
});

export function getLang(): Lang {
  return i18next.language as Lang;
}

function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  i18next.changeLanguage(lang);
  applyI18n();
}

export function t(key: string, params?: Record<string, string | number>): string {
  return i18next.exists(key) ? i18next.t(key, params) : key;
}

export function tLang(key: string, lang: Lang, params?: Record<string, string | number>): string {
  return i18next.exists(key) ? i18next.getFixedT(lang)(key, params) : key;
}

export function wordsLabel(n: number): string {
  const lang = getLang();
  if (lang === 'en') return n === 1 ? 'word' : 'words';
  if (lang === 'es') return n === 1 ? 'palabra' : 'palabras';
  return 'слів';
}

export function monthNames(): string[] {
  const lang = getLang();
  return lang === 'en' ? MONTHS_EN : lang === 'es' ? MONTHS_ES : MONTHS_UA;
}

export function dowNames(): string[] {
  const lang = getLang();
  return lang === 'en' ? DOWS_EN : lang === 'es' ? DOWS_ES : DOWS_UA;
}

export function applyI18n(): void {
  const lang = getLang();
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key && i18next.exists(key)) el.textContent = tLang(key, lang);
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (key && i18next.exists(key)) el.placeholder = tLang(key, lang);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (key && i18next.exists(key)) el.title = tLang(key, lang);
  });
  document.querySelectorAll<HTMLOptGroupElement>('[data-i18n-label]').forEach(el => {
    const key = el.dataset.i18nLabel;
    if (key && i18next.exists(key)) el.label = tLang(key, lang);
  });
  document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
  (window.renderLevelBadge as (() => void) | undefined)?.();
  (window.renderGameBar as (() => void) | undefined)?.();
  (window._refreshRangeOptions as (() => void) | undefined)?.();
  (window._refreshTagOptions as (() => void) | undefined)?.();
  (window.render as (() => void) | undefined)?.();
  if (document.getElementById('ach-overlay')?.classList.contains('open')) {
    (window.renderAchievements as (() => void) | undefined)?.();
    (window.renderLevelsRoadmap as (() => void) | undefined)?.();
  }
  if (document.getElementById('lp-overlay')?.classList.contains('open')) {
    (window.renderLearningPath as (() => void) | undefined)?.();
  }
  if (document.getElementById('duel-overlay')?.classList.contains('open')) {
    (window.renderDuel as (() => void) | undefined)?.();
  }
  if (document.getElementById('grammar-overlay')?.classList.contains('open')) {
    (window.openGrammarContent as (() => void) | undefined)?.();
  }
  if (document.getElementById('idioms-overlay')?.classList.contains('open')) {
    (window._refreshIdiomsUI as (() => void) | undefined)?.();
  }
  if (document.getElementById('settings-overlay')?.classList.contains('open')) {
    (window._refreshNotifUI as (() => void) | undefined)?.();
    (window._refreshPrefetchUI as (() => void) | undefined)?.();
    (window._refreshPixabayStatus as (() => void) | undefined)?.();
    (window._refreshCloudSyncUI as (() => void) | undefined)?.();
    (window._renderVoices as (() => void) | undefined)?.();
  }
  const statsOverlay = document.getElementById('stats-overlay') as HTMLElement | null;
  if (statsOverlay && statsOverlay.style.display === 'flex') {
    (window.renderStats as (() => void) | undefined)?.();
    (window._refreshStatsExtras as (() => void) | undefined)?.();
    (window._renderWeakWords as (() => void) | undefined)?.();
  }
}

document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang === 'en' ? 'en' : btn.dataset.lang === 'es' ? 'es' : 'ua';
    setLang(lang);
  });
});

applyI18n();

window.applyI18n = applyI18n;
