// English Words App — data/grammar.ts
// Grammar reference data: structured rules, tables, examples
// Format: self-contained, easy to extend

export interface GrammarRule {
  id:       string;
  title:    string;
  emoji:    string;
  sections: GSection[];
}

export interface GSection {
  type:     'intro' | 'formula' | 'table' | 'examples' | 'markers' | 'note' | 'tip' | 'subtitle';
  title?:   string;
  text?:    string;
  rows?:    string[][];        // for table/formula
  items?:   string[];          // for markers/list
}

export interface GrammarCategory {
  id:    string;
  title: string;
  emoji: string;
  rules: GrammarRule[];
}

export const GRAMMAR: GrammarCategory[] = [

  // ══════════════════════════════════════
  //   ЧАСИ ДІЄСЛІВ
  // ══════════════════════════════════════
  {
    id: 'tenses', title: 'Часи дієслів', emoji: '🕐',
    rules: [

      {
        id: 'present-simple', title: 'Present Simple', emoji: '📌',
        sections: [
          {
            type: 'intro',
            text: 'Теперішній простий час. Використовують для постійних фактів, звичних дій, розкладів та законів природи.',
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / You / We / They', 'work', '→ I work every day.'],
              ['✅ (+)', 'He / She / It', 'work<u>s</u>', '→ She work<u>s</u> here.'],
              ['❌ (−)', 'I / You / We / They', "don't + V₁", "→ They don't play."],
              ['❌ (−)', 'He / She / It', "doesn't + V₁", "→ He doesn't know."],
              ['❓ (?)', 'I / You / We / They', 'Do + V₁?', '→ Do you like tea?'],
              ['❓ (?)', 'He / She / It', 'Does + V₁?', '→ Does she drive?'],
            ],
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day / week / year', 'on Mondays', 'once a week'],
          },
          {
            type: 'note', title: 'Правила написання -s',
            text: 'he plays, she watches, it goes, he studies → після -s, -sh, -ch, -x, -o додаємо -es; слова на приголосний + -y замінюють -y на -ies (study → studies)',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['The sun rises in the east.', 'Сонце сходить на сході.'],
              ['She doesn\'t eat meat.', 'Вона не їсть м\'ясо.'],
              ['Does he speak French?', 'Він розмовляє французькою?'],
              ['The train leaves at 9.', 'Поїзд відправляється о 9.'],
            ],
          },
        ],
      },

      {
        id: 'present-continuous', title: 'Present Continuous', emoji: '▶️',
        sections: [
          {
            type: 'intro',
            text: 'Теперішній тривалий час. Дія відбувається зараз або в цей період часу. Також — заплановане майбутнє.',
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I', 'am + V-ing', '→ I am working now.'],
              ['✅ (+)', 'He / She / It', 'is + V-ing', '→ She is reading.'],
              ['✅ (+)', 'You / We / They', 'are + V-ing', '→ They are playing.'],
              ['❌ (−)', 'I', "am not + V-ing", "→ I'm not sleeping."],
              ['❌ (−)', 'He / She / It', "is not + V-ing", "→ He isn't coming."],
              ['❌ (−)', 'You / We / They', "are not + V-ing", "→ We aren't waiting."],
              ['❓ (?)', 'I', 'Am I + V-ing?', '→ Am I doing this right?'],
              ['❓ (?)', 'He / She / It', 'Is + V-ing?', '→ Is she coming?'],
              ['❓ (?)', 'You / We / They', 'Are + V-ing?', '→ Are they watching?'],
            ],
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week', 'Look! Listen! (+ команди уваги)'],
          },
          {
            type: 'note', title: 'Stative verbs — НЕ вживаються в Continuous!',
            text: 'know, understand, believe, love, hate, want, need, seem, belong, contain, mean — ці дієслова описують стани, а не дії.',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['I am learning English now.', 'Я зараз вивчаю англійську.'],
              ['She isn\'t working today.', 'Вона сьогодні не працює.'],
              ['We are meeting them tomorrow.', 'Ми зустрічаємося з ними завтра. (план)'],
              ['What are you doing?', 'Що ти робиш?'],
            ],
          },
        ],
      },

      {
        id: 'past-simple', title: 'Past Simple', emoji: '⏮️',
        sections: [
          {
            type: 'intro',
            text: 'Минулий простий час. Дія завершилась у конкретний момент у минулому.',
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Правильні дієслова', 'V₁ + -ed', '→ She worked / They played'],
              ['✅ (+)', 'Неправильні', 'V₂ (2-а форма)', '→ He went / I saw'],
              ['❌ (−)', 'Всі особи', "didn't + V₁", "→ I didn't know / She didn't go"],
              ['❓ (?)', 'Всі особи', 'Did + V₁?', '→ Did you call? / Did he come?'],
            ],
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['yesterday', 'ago (2 days ago)', 'last (last week, last year)', 'in + рік (in 2020)', 'on + день (on Monday)', 'when + підрядне речення'],
          },
          {
            type: 'note', title: 'Правила написання -ed',
            text: 'work → worked, play → played; stop → stopped (подвоєння кінцевої приголосної); study → studied (заміна -y → -ied)',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['I visited London last year.', 'Минулого року я відвідав Лондон.'],
              ['She didn\'t finish her homework.', 'Вона не закінчила домашнє завдання.'],
              ['Did they arrive on time?', 'Вони прийшли вчасно?'],
              ['He broke the window.', 'Він розбив вікно.'],
            ],
          },
        ],
      },

      {
        id: 'past-continuous', title: 'Past Continuous', emoji: '🔁',
        sections: [
          {
            type: 'intro',
            text: 'Минулий тривалий час. Дія тривала в певний момент у минулому. Часто вживається поряд із Past Simple — тривала дія переривається короткою.',
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / He / She / It', 'was + V-ing', '→ I was sleeping.'],
              ['✅ (+)', 'You / We / They', 'were + V-ing', '→ They were talking.'],
              ['❌ (−)', 'I / He / She / It', 'was not + V-ing', '→ He wasn\'t driving.'],
              ['❌ (−)', 'You / We / They', 'were not + V-ing', '→ We weren\'t waiting.'],
              ['❓ (?)', 'I / He / She / It', 'Was + V-ing?', '→ Was she crying?'],
              ['❓ (?)', 'You / We / They', 'Were + V-ing?', '→ Were they dancing?'],
            ],
          },
          {
            type: 'tip', title: 'While vs When',
            text: 'While → тривала дія: "While I was cooking, the phone rang."\nWhen → коротка дія перериває тривалу: "When she arrived, I was sleeping."',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['I was reading when he called.', 'Я читав, коли він подзвонив.'],
              ['They were playing all evening.', 'Вони грали весь вечір.'],
              ['Was it raining this morning?', 'Вранці йшов дощ?'],
              ['She wasn\'t listening to me.', 'Вона мене не слухала.'],
            ],
          },
        ],
      },

      {
        id: 'present-perfect', title: 'Present Perfect', emoji: '✔️',
        sections: [
          {
            type: 'intro',
            text: 'Теперішній доконаний час. Дія відбулась у минулому, але має зв\'язок із теперішнім — результат, досвід або незавершена дія.',
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / You / We / They', 'have + V₃', '→ I have seen it.'],
              ['✅ (+)', 'He / She / It', 'has + V₃', '→ She has arrived.'],
              ['❌ (−)', 'I / You / We / They', "haven't + V₃", "→ I haven't eaten yet."],
              ['❌ (−)', 'He / She / It', "hasn't + V₃", "→ He hasn't called."],
              ['❓ (?)', 'I / You / We / They', 'Have + V₃?', '→ Have you ever been to Paris?'],
              ['❓ (?)', 'He / She / It', 'Has + V₃?', '→ Has she finished?'],
            ],
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['ever / never', 'already', 'just', 'yet (питання/заперечення)', 'recently', 'since + момент (since 2020)', 'for + тривалість (for 3 years)', 'so far', 'lately'],
          },
          {
            type: 'tip', title: 'Present Perfect vs Past Simple',
            text: 'I have lost my keys. → я ще не знайшов (результат є зараз)\nI lost my keys yesterday. → конкретний момент у минулому (вчора)',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['I have never tried sushi.', 'Я ніколи не пробував суші.'],
              ['She has just left the office.', 'Вона щойно пішла з офісу.'],
              ['Have you ever visited Italy?', 'Ти коли-небудь відвідував Італію?'],
              ['They haven\'t finished yet.', 'Вони ще не закінчили.'],
            ],
          },
        ],
      },

      {
        id: 'future-simple', title: 'Future Simple (will)', emoji: '🔮',
        sections: [
          {
            type: 'intro',
            text: 'Майбутній простий час із will. Спонтанні рішення, прогнози, обіцянки, пропозиції.',
          },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', "will + V₁", "→ I will help you. / She'll come."],
              ['❌ (−)', 'Всі особи', "won't + V₁", "→ He won't tell anyone."],
              ['❓ (?)', 'Всі особи', 'Will + V₁?', '→ Will you marry me?'],
            ],
          },
          {
            type: 'tip', title: 'Will vs Going to',
            text: 'Will → спонтанне рішення: "I\'ll get the phone."\nGoing to → заздалегідь запланована дія: "I\'m going to visit Paris next month."',
          },
          {
            type: 'markers', title: 'Маркери часу',
            items: ['tomorrow', 'next week / month / year', 'in the future', 'soon', 'one day', 'probably', 'I think / I believe / I\'m sure'],
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['I think it will rain tomorrow.', 'Я думаю, завтра буде дощ.'],
              ['Will you help me?', 'Ти мені допоможеш?'],
              ['She won\'t be late, I\'m sure.', 'Вона не запізниться, я впевнений.'],
              ['I\'ll call you back.', 'Я передзвоню тобі.'],
            ],
          },
        ],
      },

    ],
  },

  // ══════════════════════════════════════
  //   ГРАМАТИКА
  // ══════════════════════════════════════
  {
    id: 'grammar', title: 'Граматика', emoji: '📖',
    rules: [

      {
        id: 'articles', title: 'Артиклі (a / an / the)', emoji: '🔤',
        sections: [
          {
            type: 'intro',
            text: 'Артиклі — це службові слова перед іменниками. В англійській є невизначений артикль (a/an) та визначений (the). Нульовий артикль означає, що артикль не потрібен.',
          },
          {
            type: 'table', title: 'A vs AN',
            rows: [
              ['A', 'перед приголосним звуком', 'a book, a car, a university (звук /j/)'],
              ['AN', 'перед голосним звуком', 'an apple, an hour (h — мовчазна), an umbrella'],
            ],
          },
          {
            type: 'table', title: 'Коли вживати?',
            rows: [
              ['A / AN', 'Перша згадка предмета', '"I saw a dog. The dog was big."'],
              ['A / AN', 'Загальне (будь-який)', '"I need a pen." (будь-яка)'],
              ['A / AN', 'Назва професії', '"She is a teacher."'],
              ['THE', 'Конкретний (відомий)', '"Close the door." (яку саме — знаємо)'],
              ['THE', 'Єдиний у своєму роді', '"The sun / the Moon / the Earth"'],
              ['THE', 'Повторна згадка', '"I have a cat. The cat is black."'],
              ['THE', 'Наднаціональні назви', '"the USA, the UK, the Nile, the Alps"'],
              ['∅ (нуль)', 'Власні імена', '"London, Ukraine, John"'],
              ['∅ (нуль)', 'Мови та предмети', '"I study English / Math"'],
              ['∅ (нуль)', 'Їжа/напої загалом', '"I like coffee / bread"'],
            ],
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['Can I have a coffee?', 'Можна мені кави? (одну)'],
              ['The coffee is cold.', 'Кава холодна. (та, що ми замовили)'],
              ['She plays the piano.', 'Вона грає на піаніно. (the + інструменти)'],
              ['He works as a doctor.', 'Він працює лікарем.'],
            ],
          },
        ],
      },

      {
        id: 'modal-verbs', title: 'Модальні дієслова', emoji: '🎛️',
        sections: [
          {
            type: 'intro',
            text: 'Модальні дієслова не змінюються за особами (no -s), після них використовується інфінітив без to. Вони виражають можливість, дозвіл, обов\'язок, пораду.',
          },
          {
            type: 'table', title: 'Основні модальні дієслова',
            rows: [
              ['CAN', 'вміти / можу', 'I can swim. Can you help me?'],
              ['COULD', 'міг би / можна? (ввічливо)', 'Could you open the door, please?'],
              ['MAY', 'можливо / дозвіл (формально)', 'It may rain. May I come in?'],
              ['MIGHT', 'можливо (менша впевненість)', 'She might be late.'],
              ['MUST', 'зобов\'язаний / мусить', 'You must wear a seatbelt.'],
              ['HAVE TO', 'зобов\'язаний (зовнішнє)', 'I have to work on Saturdays.'],
              ['SHOULD', 'слід / порада', 'You should see a doctor.'],
              ['OUGHT TO', 'слід (моральний обов\'язок)', 'We ought to help them.'],
              ['WILL', 'будете / намір', 'I will call you tomorrow.'],
              ['WOULD', 'хотів би / умовний', 'I would like a coffee.'],
            ],
          },
          {
            type: 'tip', title: 'Must vs Have to',
            text: 'MUST → внутрішнє рішення: "I must go to bed early (я сам вирішив)"\nHAVE TO → зовнішній обов\'язок: "I have to wake up at 6 (правило/обставини)"',
          },
          {
            type: 'note', title: 'Заперечення — зміна значення!',
            text: 'mustn\'t ≠ don\'t have to\nmustn\'t = заборонено ("You mustn\'t smoke here.")\ndon\'t have to = не обов\'язково ("You don\'t have to come.")',
          },
        ],
      },

      {
        id: 'conditionals', title: 'Умовні речення', emoji: '🔀',
        sections: [
          {
            type: 'intro',
            text: 'Conditionals (умовні речення) описують умови та їх результати. Є 4 основні типи.',
          },
          {
            type: 'table', title: 'Типи умовних речень',
            rows: [
              ['Zero', 'Завжди правда', 'If + Present Simple → Present Simple', 'If you heat water, it boils.'],
              ['First', 'Реальна умова', 'If + Present Simple → will + V₁', 'If it rains, I will stay home.'],
              ['Second', 'Нереальна/гіпотетична', 'If + Past Simple → would + V₁', 'If I had money, I would buy a car.'],
              ['Third', 'Нереальна в минулому', 'If + Past Perfect → would have + V₃', 'If I had studied, I would have passed.'],
            ],
          },
          {
            type: 'tip', title: 'Were для всіх осіб (2nd Conditional)',
            text: 'У 2nd Conditional для "I/he/she/it" формально вживається "were":\n"If I were you, I would apologize."\n"If she were here, she would know."',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['If you study hard, you will pass.', '(1st) Якщо будеш вчитись, здаси.'],
              ['If I were rich, I would travel.', '(2nd) Якби я був багатий, я б подорожував.'],
              ['If it had rained, we would have stayed.', '(3rd) Якби йшов дощ, ми б залишились.'],
            ],
          },
        ],
      },

      {
        id: 'passive-voice', title: 'Пасивний стан', emoji: '🔄',
        sections: [
          {
            type: 'intro',
            text: 'Passive voice (пасивний стан) — дія спрямована на підмет, а не виконується ним. Структура: be + V₃ (дієприкметник минулого часу).',
          },
          {
            type: 'table', title: 'Пасивний стан у різних часах',
            rows: [
              ['Present Simple', 'am/is/are + V₃', 'The letter is written.'],
              ['Past Simple', 'was/were + V₃', 'The letter was written.'],
              ['Future Simple', 'will be + V₃', 'The letter will be written.'],
              ['Present Continuous', 'am/is/are being + V₃', 'The letter is being written.'],
              ['Present Perfect', 'have/has been + V₃', 'The letter has been written.'],
              ['Past Perfect', 'had been + V₃', 'The letter had been written.'],
            ],
          },
          {
            type: 'tip', title: 'By — хто виконав дію',
            text: '"The book was written by Tolkien." — "by" вказує на виконавця дії (agent).',
          },
          {
            type: 'examples', title: 'Приклади',
            rows: [
              ['English is spoken worldwide.', 'Англійська мова вживається у всьому світі.'],
              ['The car was repaired yesterday.', 'Машину відремонтували вчора.'],
              ['The project will be finished soon.', 'Проєкт буде завершено незабаром.'],
            ],
          },
        ],
      },

    ],
  },

  // ══════════════════════════════════════
  //   ВИКЛЮЧЕННЯ
  // ══════════════════════════════════════
  {
    id: 'exceptions', title: 'Виключення', emoji: '⚠️',
    rules: [

      {
        id: 'irregular-verbs', title: 'Неправильні дієслова (топ-60)', emoji: '📋',
        sections: [
          {
            type: 'intro',
            text: 'Неправильні дієслова не утворюють Past Simple та Past Participle за допомогою -ed. Їх потрібно вивчити окремо.',
          },
          {
            type: 'table', title: 'Неправильні дієслова',
            rows: [
              ['Base (V₁)', 'Past Simple (V₂)', 'Past Participle (V₃)', 'Переклад'],
              ['be', 'was / were', 'been', 'бути'],
              ['beat', 'beat', 'beaten', 'бити'],
              ['become', 'became', 'become', 'ставати'],
              ['begin', 'began', 'begun', 'починати'],
              ['break', 'broke', 'broken', 'ламати'],
              ['bring', 'brought', 'brought', 'приносити'],
              ['build', 'built', 'built', 'будувати'],
              ['buy', 'bought', 'bought', 'купувати'],
              ['catch', 'caught', 'caught', 'ловити'],
              ['choose', 'chose', 'chosen', 'вибирати'],
              ['come', 'came', 'come', 'приходити'],
              ['cost', 'cost', 'cost', 'коштувати'],
              ['cut', 'cut', 'cut', 'різати'],
              ['do', 'did', 'done', 'робити'],
              ['draw', 'drew', 'drawn', 'малювати'],
              ['drink', 'drank', 'drunk', 'пити'],
              ['drive', 'drove', 'driven', 'їздити'],
              ['eat', 'ate', 'eaten', 'їсти'],
              ['fall', 'fell', 'fallen', 'падати'],
              ['feel', 'felt', 'felt', 'відчувати'],
              ['find', 'found', 'found', 'знаходити'],
              ['fly', 'flew', 'flown', 'летіти'],
              ['forget', 'forgot', 'forgotten', 'забувати'],
              ['get', 'got', 'got / gotten', 'отримувати'],
              ['give', 'gave', 'given', 'давати'],
              ['go', 'went', 'gone', 'іти'],
              ['grow', 'grew', 'grown', 'рости'],
              ['have', 'had', 'had', 'мати'],
              ['hear', 'heard', 'heard', 'чути'],
              ['hide', 'hid', 'hidden', 'ховати'],
              ['hit', 'hit', 'hit', 'вдаряти'],
              ['hold', 'held', 'held', 'тримати'],
              ['keep', 'kept', 'kept', 'тримати / зберігати'],
              ['know', 'knew', 'known', 'знати'],
              ['lead', 'led', 'led', 'вести'],
              ['leave', 'left', 'left', 'залишати'],
              ['lend', 'lent', 'lent', 'позичати'],
              ['let', 'let', 'let', 'дозволяти'],
              ['lose', 'lost', 'lost', 'губити'],
              ['make', 'made', 'made', 'робити'],
              ['mean', 'meant', 'meant', 'означати'],
              ['meet', 'met', 'met', 'зустрічати'],
              ['put', 'put', 'put', 'класти'],
              ['read', 'read', 'read', 'читати'],
              ['ride', 'rode', 'ridden', 'їхати'],
              ['run', 'ran', 'run', 'бігти'],
              ['say', 'said', 'said', 'казати'],
              ['see', 'saw', 'seen', 'бачити'],
              ['sell', 'sold', 'sold', 'продавати'],
              ['send', 'sent', 'sent', 'надсилати'],
              ['show', 'showed', 'shown', 'показувати'],
              ['sit', 'sat', 'sat', 'сидіти'],
              ['sleep', 'slept', 'slept', 'спати'],
              ['speak', 'spoke', 'spoken', 'говорити'],
              ['spend', 'spent', 'spent', 'витрачати'],
              ['stand', 'stood', 'stood', 'стояти'],
              ['swim', 'swam', 'swum', 'плавати'],
              ['take', 'took', 'taken', 'брати'],
              ['teach', 'taught', 'taught', 'вчити'],
              ['tell', 'told', 'told', 'розказувати'],
              ['think', 'thought', 'thought', 'думати'],
              ['throw', 'threw', 'thrown', 'кидати'],
              ['understand', 'understood', 'understood', 'розуміти'],
              ['wear', 'wore', 'worn', 'носити (одяг)'],
              ['win', 'won', 'won', 'перемагати'],
              ['write', 'wrote', 'written', 'писати'],
            ],
          },
        ],
      },

      {
        id: 'spelling-rules', title: 'Правила написання', emoji: '✏️',
        sections: [
          {
            type: 'intro',
            text: 'Основні правила написання дієслів при додаванні -ing, -ed, та -s/-es.',
          },
          {
            type: 'table', title: 'Правила додавання -ing',
            rows: [
              ['Правило', 'Приклад → результат'],
              ['Просто додати -ing', 'work → working, play → playing'],
              ['Кінцева -e зникає', 'make → making, drive → driving'],
              ['1 склад, CVC — подвоїти', 'run → running, sit → sitting'],
              ['Кінцева -ie → -ying', 'lie → lying, die → dying'],
              ['l → ll (British)', 'travel → travelling (Brit), traveling (Am)'],
            ],
          },
          {
            type: 'table', title: 'Правила додавання -ed',
            rows: [
              ['Правило', 'Приклад → результат'],
              ['Просто додати -ed', 'work → worked, play → played'],
              ['Кінцева -e → тільки -d', 'like → liked, close → closed'],
              ['1 склад, CVC — подвоїти', 'stop → stopped, plan → planned'],
              ['Приголосна + -y → -ied', 'study → studied, try → tried'],
              ['Голосна + -y → -ed', 'play → played, enjoy → enjoyed'],
            ],
          },
        ],
      },

    ],
  },

];
