// English Words App — js/features/i18n.ts
// Minimal i18n: translates sidebar menu labels (UA ⇄ EN), persisted via localStorage

type Lang = 'ua' | 'en';

const DICT: Record<string, Record<Lang, string>> = {
  'nav.cards':        { ua: 'Картки',        en: 'Cards' },
  'nav.stats':        { ua: 'Статистика',    en: 'Statistics' },
  'nav.achievements': { ua: 'Досягнення',    en: 'Achievements' },
  'nav.modes':        { ua: 'Режими',        en: 'Modes' },
  'nav.learningPath': { ua: 'Шлях навчання', en: 'Learning Path' },
  'nav.grammar':      { ua: 'Граматика',     en: 'Grammar' },
  'nav.idioms':       { ua: 'Ідіоми',        en: 'Idioms' },
  'nav.duel':         { ua: 'Дуель',         en: 'Duel' },
  'nav.settings':     { ua: 'Налаштування',  en: 'Settings' },

  'cards.cardLabel':    { ua: 'Картка',                              en: 'Card' },
  'cards.learnedLabel': { ua: 'Вивчено',                             en: 'Learned' },
  'cards.streakLabel':  { ua: 'днів підряд',                         en: 'day streak' },
  'cards.dailyGoal':    { ua: 'Ціль на сьогодні',                    en: 'Today’s goal' },
  'cards.goalDone':     { ua: '🎉 Ціль досягнута!',                   en: '🎉 Goal reached!' },
  'cards.know':         { ua: '✓ Знаю',                              en: '✓ Know' },
  'cards.next':         { ua: 'Далі →',                              en: 'Next →' },
  'cards.forward':      { ua: '→ Далі',                              en: '→ Next' },
  'cards.back':         { ua: '← Назад',                             en: '← Back' },
  'cards.translation':  { ua: '👁 Переклад',                          en: '👁 Translation' },
  'cards.hint':         { ua: 'Натисни на картку — побачиш переклад', en: 'Tap the card to see the translation' },
  'cards.example':      { ua: 'Приклад',                             en: 'Example' },
  'cards.quickQuiz':    { ua: '⚡ Quick Quiz — 5 питань',             en: '⚡ Quick Quiz — 5 questions' },
  'cards.allTopics':    { ua: '🏷️ Всі теми',                         en: '🏷️ All topics' },
  'cards.allWords':     { ua: 'Всі слова',                           en: 'All words' },
  'cards.searchPlaceholder': { ua: 'Пошук слова...',                 en: 'Search a word...' },
  'cards.auto':         { ua: '▶ Авто',                              en: '▶ Auto' },
  'cards.stop':         { ua: '⏹ Стоп',                              en: '⏹ Stop' },
  'cards.pronounce':    { ua: 'Вимовити слово',                      en: 'Pronounce word' },
  'cards.checkPron':    { ua: 'Перевір вимову',                      en: 'Check pronunciation' },
  'cards.noteMnemonic': { ua: 'Нотатка/мнемоніка',                   en: 'Note/mnemonic' },
  'cards.addBookmark':  { ua: 'Додати в закладки',                   en: 'Add to bookmarks' },
  'cards.removeKnown':  { ua: 'Прибрати з вивчених',                 en: 'Remove from learned' },
  'cards.wotdLabel':    { ua: '📖 Слово дня',                         en: '📖 Word of the day' },
  'cards.wotdTitle':    { ua: 'Слово дня — натисни щоб перейти',     en: 'Word of the day — tap to go there' },
  'cards.tagFilterTitle': { ua: 'Фільтр по темі',                    en: 'Filter by topic' },
  'cards.autoTitle':    { ua: 'Авто-режим',                          en: 'Auto mode' },
  'cards.prevTitle':    { ua: 'Попередня картка',                    en: 'Previous card' },
  'cards.nextTitle':    { ua: 'Наступна картка',                     en: 'Next card' },
  'cards.shuffleTitle': { ua: 'Перемішати',                          en: 'Shuffle' },
  'cards.searchTitle':  { ua: 'Пошук по словнику (Ctrl+F)',          en: 'Search the dictionary (Ctrl+F)' },
  'cards.statsTitle':   { ua: 'Статистика',                          en: 'Statistics' },
  'cards.achievementsTitle': { ua: 'Досягнення',                     en: 'Achievements' },
  'cards.modesTitle':   { ua: 'Режими навчання',                     en: 'Learning modes' },
  'cards.quickQuizTitle': { ua: '5 питань з поточної колоди (Quick Quiz)', en: '5 questions from the current deck (Quick Quiz)' },
  'cards.similarTitle': { ua: 'Схожі слова',                         en: 'Similar words' },
  'cards.familyTitle':  { ua: '🌱 Сімейство слів',                    en: '🌱 Word family' },
  'cards.collocationsTitle': { ua: '🔗 Сталі словосполучення',       en: '🔗 Collocations' },
  'cards.forget':       { ua: '✕ Забути',                            en: '✕ Forget' },
  'cards.bookmarkTitle':{ ua: 'Закладка',                            en: 'Bookmark' },
  'cards.gotoCard':     { ua: '→ На картку',                         en: '→ Go to card' },
  'range.bookmarks':    { ua: '⭐ Закладки',                          en: '⭐ Bookmarks' },

  'mode.mixed':         { ua: 'Мішаний',                             en: 'Mixed' },

  'range.unlearned': { ua: '🔴 Тільки невивчені',     en: '🔴 Unlearned only' },
  'range.srs':       { ua: '🔁 Spaced Repetition',    en: '🔁 Spaced Repetition' },
  'range.weak':      { ua: '⚠️ Слабкі слова',         en: '⚠️ Weak words' },
  'range.hard':      { ua: '🔴 Важкі слова',          en: '🔴 Hard words' },
  'range.cefrGroup': { ua: '📊 Рівень CEFR',          en: '📊 CEFR level' },
  'range.cefrA1':    { ua: '🟢 A1 — Початківець',      en: '🟢 A1 — Beginner' },
  'range.cefrA2':    { ua: '🟩 A2 — Елементарний',     en: '🟩 A2 — Elementary' },
  'range.cefrB1':    { ua: '🟡 B1 — Середній',         en: '🟡 B1 — Intermediate' },
  'range.cefrB2':    { ua: '🟠 B2 — Вище середнього',  en: '🟠 B2 — Upper-intermediate' },
  'range.cefrC1':    { ua: '🔴 C1 — Просунутий',       en: '🔴 C1 — Advanced' },
  'range.cefrC2':    { ua: '🟣 C2 — Майстерний',       en: '🟣 C2 — Proficient' },
  'range.stale7':    { ua: '🕰️ Не бачені 7 днів',     en: '🕰️ Not seen for 7 days' },
  'range.stale30':   { ua: '🕰️ Не бачені 30 днів',    en: '🕰️ Not seen for 30 days' },

  'kbd.space':       { ua: 'Пробіл',     en: 'Space' },
  'kbd.next':        { ua: 'далі',       en: 'next' },
  'kbd.know':        { ua: 'знаю',       en: 'know' },
  'kbd.navigation':  { ua: 'навігація',  en: 'navigation' },
  'kbd.translation': { ua: 'переклад',   en: 'translation' },
  'kbd.search':      { ua: 'пошук',      en: 'search' },
  'kbd.allKeys':     { ua: 'всі клавіші', en: 'all shortcuts' },
  'kbd.allKeysTitle':{ ua: 'Всі клавіші', en: 'All shortcuts' },

  'ach.pageTitle':    { ua: '🏆 Досягнення',                  en: '🏆 Achievements' },
  'ach.roadmapTitle': { ua: '🗺️ Шлях Джедая — всі рівні',     en: '🗺️ Path of the Jedi — all levels' },
  'ach.awardsTitle':  { ua: '🏅 Нагороди',                    en: '🏅 Awards' },
  'ach.close':        { ua: 'Закрити',                        en: 'Close' },

  // Statistics page — section titles & static labels
  'stats.title':            { ua: '📊 Статистика',                          en: '📊 Statistics' },
  'stats.overallProgress':  { ua: 'Загальний прогрес',                      en: 'Overall progress' },
  'stats.wordsLearned':     { ua: 'Вивчено слів',                           en: 'Words learned' },
  'stats.ofAllWords':       { ua: 'Від усіх слів',                          en: 'Of all words' },
  'stats.daysStreak':       { ua: '🔥 Днів підряд',                         en: '🔥 Day streak' },
  'stats.perDayTitle':      { ua: 'Слів вивчено по днях (останні 14 днів)', en: 'Words learned per day (last 14 days)' },
  'stats.yearActivity':     { ua: '🗓️ Активність за рік',                   en: '🗓️ Activity over the year' },
  'stats.yearActivityDesc': { ua: '52 тижні · зелений = більше слів',       en: '52 weeks · greener = more words' },
  'stats.monthlyView':      { ua: '📅 Місячний вигляд',                     en: '📅 Monthly view' },
  'stats.bestTimeTitle':    { ua: '⏰ Найкращий час навчання',              en: '⏰ Best time to learn' },
  'stats.blockProgress':    { ua: 'Прогрес по блоках',                      en: 'Progress by blocks' },
  'stats.srsForecastTitle': { ua: '📅 SRS — Розклад повторень (14 днів)',   en: '📅 SRS — Review schedule (14 days)' },
  'stats.weakWordsTitle':   { ua: '🔴 Слабкі слова (топ-10)',               en: '🔴 Weak words (top 10)' },
  'stats.modeAccuracyTitle':{ ua: '🎮 Точність по режимах',                 en: '🎮 Accuracy by mode' },
  'stats.cefrProgressTitle':{ ua: '📊 Прогрес за CEFR рівнями',             en: '📊 Progress by CEFR level' },
  'stats.leaderboardTitle': { ua: '🏆 Глобальний лідерборд',                en: '🏆 Global leaderboard' },
  'stats.refresh':          { ua: '🔄 Оновити',                             en: '🔄 Refresh' },

  // Statistics page — dynamic strings
  'stats.noData':         { ua: 'Ще немає даних.<br>Почни вивчати слова!', en: 'No data yet.<br>Start learning words!' },
  'stats.today':          { ua: 'сьогодні',                                en: 'today' },
  'stats.todayCap':       { ua: 'Сьогодні',                                en: 'Today' },
  'stats.tomorrow':       { ua: 'Завтра',                                  en: 'Tomorrow' },
  'stats.totalScheduled': { ua: 'Всього заплановано',                      en: 'Total scheduled' },
  'stats.reviews':        { ua: 'повторень',                               en: 'reviews' },
  'stats.noModeData':     { ua: 'Ще немає даних — грай у режимах!',        en: 'No data yet — play some modes!' },
  'stats.sessionsAbbr':   { ua: 'сес.',                                    en: 'sess.' },
  'stats.noSrsData':      { ua: 'Поки немає даних SRS.',                   en: 'No SRS data yet.' },
  'stats.bestTimeLabel':  { ua: 'Найкращий час',                           en: 'Best time' },
  'stats.intervals':      { ua: 'Інтервали',                               en: 'Intervals' },
  'stats.totalForMonth':  { ua: 'Всього за місяць',                        en: 'Total for the month' },
  'stats.noWordsThisMonth':{ ua: 'Слів у цьому місяці немає',              en: 'No words learned this month' },

  'stats.night':   { ua: '🌙 ніч',   en: '🌙 night' },
  'stats.morning': { ua: '🌅 ранок', en: '🌅 morning' },
  'stats.day':     { ua: '☀️ день',  en: '☀️ afternoon' },
  'stats.evening': { ua: '🌆 вечір', en: '🌆 evening' },

  'mode.quiz':   { ua: 'Тест',    en: 'Quiz' },
  'mode.write':  { ua: 'Письмо',  en: 'Writing' },
  'mode.listen': { ua: 'Аудіо',   en: 'Listening' },
  'mode.fib':    { ua: 'Речення', en: 'Sentences' },
  'mode.lesson': { ua: 'Урок',    en: 'Lesson' },
  'mode.tempo':  { ua: 'Темп',    en: 'Tempo' },

  'cefr.A1': { ua: 'Початківець',     en: 'Beginner' },
  'cefr.A2': { ua: 'Елементарний',    en: 'Elementary' },
  'cefr.B1': { ua: 'Середній',        en: 'Intermediate' },
  'cefr.B2': { ua: 'Вище середнього', en: 'Upper-intermediate' },
  'cefr.C1': { ua: 'Просунутий',      en: 'Advanced' },
  'cefr.C2': { ua: 'Майстерний',      en: 'Proficient' },

  'levels.maxReached': { ua: '🏆 Максимум!', en: '🏆 Max level!' },
  'levels.learned':    { ua: 'вивчено',      en: 'learned' },

  'lp.pageTitle':       { ua: '🎯 Шлях навчання',                       en: '🎯 Learning Path' },
  'lp.todayPlan':       { ua: 'Сьогоднішній план — рівень',             en: 'Today’s plan — level' },
  'lp.learnWordsNow':   { ua: 'Вчити слова',                            en: 'Learn' },
  'lp.now':             { ua: 'зараз',                                  en: 'now' },
  'lp.levelWord':       { ua: 'Рівень',                                 en: 'Level' },
  'lp.completedExcl':   { ua: 'завершено!',                             en: 'completed!' },
  'lp.allLearned':      { ua: 'Всі слова цього рівня вивчено. Переходь до наступного!', en: 'You’ve learned all the words for this level. Move on to the next one!' },
  'lp.yourPace':        { ua: 'твій темп:',                             en: 'your pace:' },
  'lp.wordsPerDay':     { ua: 'сл/день',                                en: 'words/day' },
  'lp.defaultPace':     { ua: '20 сл/день',                             en: '20 words/day' },
  'lp.currentNow':      { ua: '← зараз',                                en: '← now' },
  'lp.learnArrow':      { ua: 'Вчити →',                                en: 'Learn →' },
  'lp.daysApprox':      { ua: 'днів',                                   en: 'days' },
  'lp.openGrammar':     { ua: 'Відкрити граматику',                     en: 'Open grammar' },
  'lp.completed':       { ua: '✓ Завершено',                            en: '✓ Completed' },
  'lp.currentFocus':    { ua: 'Поточний фокус',                         en: 'Current focus' },
  'lp.cefrProgress':    { ua: '📊 Прогрес за рівнями CEFR',             en: '📊 Progress by CEFR level' },
  'lp.wordsCount':      { ua: 'слів',                                   en: 'words' },
  'lp.completedPct':    { ua: 'завершено',                              en: 'completed' },
  'lp.wordsPerDayFull': { ua: 'слів/день',                              en: 'words/day' },
  'lp.startLearning':   { ua: 'Починай вчити — побачиш свій темп',      en: 'Start learning to see your pace' },

  'lb.loading':  { ua: '⏳ Завантаження...',                              en: '⏳ Loading...' },
  'lb.empty':    { ua: 'Поки немає учасників. Ти будеш першим!',         en: 'No participants yet. You’ll be the first!' },
  'lb.top20':    { ua: '🌍 Топ-20 гравців · оновлюється при відкритті',  en: '🌍 Top 20 players · refreshes on open' },
  'lb.yourRank': { ua: 'Твоя позиція',                                    en: 'Your rank' },
  'lb.you':      { ua: 'ти',                                              en: 'you' },
};

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

export function levelName(name: string): string {
  return getLang() === 'en' ? (LEVEL_NAMES_EN[name] ?? name) : name;
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
  '📦 Інше':                               '📦 Other',
};

export function categoryName(name: string): string {
  return getLang() === 'en' ? (CATEGORY_NAMES_EN[name] ?? name) : name;
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

export function skillName(name: string): string {
  return getLang() === 'en' ? (SKILL_NAMES_EN[name] ?? name) : name;
}

const MONTHS_UA = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOWS_UA   = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
const DOWS_EN   = ['Mo','Tu','We','Th','Fr','Sa','Su'];

const LANG_KEY = 'ew_lang';

export function getLang(): Lang {
  return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ua';
}

function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

export function t(key: string): string {
  const entry = DICT[key];
  return entry ? entry[getLang()] : key;
}

export function wordsLabel(n: number): string {
  return getLang() === 'en' ? (n === 1 ? 'word' : 'words') : 'слів';
}

export function monthNames(): string[] {
  return getLang() === 'en' ? MONTHS_EN : MONTHS_UA;
}

export function dowNames(): string[] {
  return getLang() === 'en' ? DOWS_EN : DOWS_UA;
}

export function applyI18n(): void {
  const lang = getLang();
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.textContent = entry[lang];
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.placeholder = entry[lang];
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.title = entry[lang];
  });
  document.querySelectorAll<HTMLOptGroupElement>('[data-i18n-label]').forEach(el => {
    const key = el.dataset.i18nLabel;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.label = entry[lang];
  });
  document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
  (window.renderLevelBadge as (() => void) | undefined)?.();
  (window._refreshRangeOptions as (() => void) | undefined)?.();
  (window._refreshTagOptions as (() => void) | undefined)?.();
  if (document.getElementById('ach-overlay')?.classList.contains('open')) {
    (window.renderAchievements as (() => void) | undefined)?.();
    (window.renderLevelsRoadmap as (() => void) | undefined)?.();
  }
  if (document.getElementById('lp-overlay')?.classList.contains('open')) {
    (window.renderLearningPath as (() => void) | undefined)?.();
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
    const lang = btn.dataset.lang === 'en' ? 'en' : 'ua';
    setLang(lang);
  });
});

applyI18n();

window.applyI18n = applyI18n;
