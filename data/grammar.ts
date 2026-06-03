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

      // ─── Additional tenses ─────────────────────────────────────
      // ── Ще часи (merged) ──

      {
        id: 'past-perfect', title: 'Past Perfect', emoji: '⏪',
        sections: [
          { type: 'intro', text: 'Минулий доконаний час. Дія відбулась ДО іншої дії в минулому. Використовується з Past Simple для показу послідовності подій.' },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'had + V₃', '→ She had already left.'],
              ['❌ (−)', 'Всі особи', "hadn't + V₃", "→ He hadn't eaten before."],
              ['❓ (?)', 'Всі особи', 'Had + V₃?', '→ Had they met before?'],
            ],
          },
          { type: 'tip', title: 'Past Perfect vs Past Simple',
            text: 'When I arrived, she had already left. (спочатку пішла → потім я прийшов)\nПасивний: The cake had been eaten. (хтось з\'їв до моменту в минулому)',
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['before', 'after', 'already', 'just', 'never', 'when', 'by the time', 'as soon as'],
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['By the time he arrived, we had finished.', 'На момент коли він прийшов, ми вже закінчили.'],
              ['She had never seen snow before.', 'Вона ніколи раніше не бачила снігу.'],
              ['Had you eaten before the meeting?', 'Ти поїв до наради?'],
            ],
          },
        ],
      },

      {
        id: 'present-perfect-cont', title: 'Present Perfect Continuous', emoji: '🔄✔️',
        sections: [
          { type: 'intro', text: 'Теперішній доконано-тривалий час. Дія почалась у минулому і продовжується зараз. Акцент на тривалості процесу.' },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I / You / We / They', 'have been + V-ing', '→ I have been waiting for an hour.'],
              ['✅ (+)', 'He / She / It', 'has been + V-ing', '→ She has been working all day.'],
              ['❌ (−)', 'I / You / We / They', "haven't been + V-ing", "→ We haven't been sleeping well."],
              ['❌ (−)', 'He / She / It', "hasn't been + V-ing", "→ He hasn't been feeling well."],
              ['❓ (?)', '', 'Have/Has + been + V-ing?', '→ How long have you been waiting?'],
            ],
          },
          { type: 'tip', title: 'Present Perfect vs Present Perfect Continuous',
            text: 'I have read 3 books this week. (скільки — результат, кількість)\nI have been reading all evening. (як довго — процес, тривалість)',
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['for + тривалість (for 2 hours)', 'since + момент (since morning)', 'how long?', 'all day / all week', 'lately', 'recently'],
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['I have been learning French for 3 years.', 'Я вивчаю французьку вже 3 роки.'],
              ['She has been crying. Her eyes are red.', 'Вона плакала. Очі червоні. (видний результат)'],
              ['How long have you been waiting?', 'Як довго ти чекаєш?'],
            ],
          },
        ],
      },

      {
        id: 'future-going-to', title: 'Future: Going to', emoji: '🗓️',
        sections: [
          { type: 'intro', text: 'Going to вживається для заздалегідь запланованих дій або для прогнозів на основі видимих ознак.' },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'I', 'am going to + V₁', "→ I'm going to travel next month."],
              ['✅ (+)', 'He / She / It', 'is going to + V₁', "→ She's going to study abroad."],
              ['✅ (+)', 'You / We / They', 'are going to + V₁', "→ They're going to buy a house."],
              ['❌ (−)', '', "not going to + V₁", "→ I'm not going to apologize."],
              ['❓ (?)', '', 'Am/Is/Are + going to + V₁?', '→ Are you going to call him?'],
            ],
          },
          {
            type: 'table', title: 'Will vs Going to',
            rows: [
              ['', 'WILL', 'GOING TO'],
              ['Рішення', 'Спонтанне (зараз)', 'Заздалегідь заплановане'],
              ['Прогноз', 'Думка/припущення', 'На основі ознак зараз'],
              ['Приклад', '"I\'ll answer the phone."', '"I\'m going to visit Paris."'],
              ['Приклад', '"I think it will rain."', '"Look at those clouds — it\'s going to rain!"'],
            ],
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ["We're going to move to a new city.", 'Ми плануємо переїхати в нове місто.'],
              ["She's going to have a baby!", 'Вона чекає дитину!'],
              ["They're not going to be late.", 'Вони не спізняться.'],
            ],
          },
        ],
      },

      {
        id: 'future-continuous', title: 'Future Continuous', emoji: '🔮▶️',
        sections: [
          { type: 'intro', text: 'Майбутній тривалий час. Дія буде тривати в певний момент у майбутньому або відбуватиметься паралельно з іншою дією.' },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'will be + V-ing', '→ I will be working at 8 pm.'],
              ['❌ (−)', 'Всі особи', "won't be + V-ing", "→ She won't be sleeping then."],
              ['❓ (?)', 'Всі особи', 'Will + be + V-ing?', '→ Will you be using the car?'],
            ],
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['at this time tomorrow', 'at 8 pm tonight', 'this time next week', 'while', 'when'],
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['This time tomorrow I will be flying to London.', 'Завтра в цей час я буду летіти до Лондона.'],
              ["Don't call at 7 — I'll be having dinner.", 'Не телефонуй о 7 — я буду вечеряти.'],
              ['Will you be attending the conference?', 'Ти будеш на конференції?'],
            ],
          },
        ],
      },

      {
        id: 'future-perfect', title: 'Future Perfect', emoji: '✅🔮',
        sections: [
          { type: 'intro', text: 'Майбутній доконаний час. Дія буде ЗАВЕРШЕНА до певного моменту в майбутньому.' },
          {
            type: 'formula', title: 'Структура',
            rows: [
              ['✅ (+)', 'Всі особи', 'will have + V₃', '→ I will have finished by 6 pm.'],
              ['❌ (−)', 'Всі особи', "won't have + V₃", "→ He won't have arrived by then."],
              ['❓ (?)', 'Всі особи', 'Will + have + V₃?', '→ Will you have done it by Monday?'],
            ],
          },
          { type: 'markers', title: 'Маркери часу',
            items: ['by + час/момент (by 5 pm)', 'by the time', 'before', 'in + тривалість (in 2 years)'],
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['By Friday, I will have completed the project.', 'До п\'ятниці я завершу проєкт.'],
              ['She will have graduated by next summer.', 'Вона закінчить навчання до наступного літа.'],
              ['Will you have read the book by then?', 'Ти прочитаєш книгу до того часу?'],
            ],
          },
        ],
      },


    ],
  },

  // ══════════════════════════════════════
  //   ГРАМАТИКА (усі теми разом)
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


      // ─── Additional grammar topics ───────────────────────────────
      {
        id: 'reported-speech', title: 'Непряма мова', emoji: '💬→📄',
        sections: [
          { type: 'intro', text: 'Reported speech (непряма мова) — переказ чужих слів без прямого цитування. Час дієслова зазвичай "зсувається" назад.' },
          {
            type: 'table', title: 'Зсув часів',
            rows: [
              ['Пряма мова (Direct)', 'Непряма мова (Reported)'],
              ['Present Simple: "I work."', 'Past Simple: She said she worked.'],
              ['Present Continuous: "I\'m working."', 'Past Continuous: He said he was working.'],
              ['Past Simple: "I worked."', 'Past Perfect: She said she had worked.'],
              ['Present Perfect: "I have worked."', 'Past Perfect: He said he had worked.'],
              ['will: "I will help."', 'would: She said she would help.'],
              ['can: "I can swim."', 'could: He said he could swim.'],
              ['must: "I must go."', 'had to: She said she had to go.'],
            ],
          },
          {
            type: 'table', title: 'Зміна займенників та слів',
            rows: [
              ['Пряма', 'Непряма'],
              ['I / me', 'he / she / him / her'],
              ['we / our', 'they / their'],
              ['here', 'there'],
              ['now', 'then'],
              ['today', 'that day'],
              ['yesterday', 'the day before'],
              ['tomorrow', 'the next day'],
              ['this', 'that'],
              ['these', 'those'],
            ],
          },
          { type: 'note', title: 'Say vs Tell',
            text: 'say + (that): He said (that) he was tired.\ntell + object: He told me (that) he was tired.',
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['"I love Paris." → She said she loved Paris.', 'Вона сказала, що любить Париж.'],
              ['"We will come." → They said they would come.', 'Вони сказали, що прийдуть.'],
              ['"I can\'t swim." → He said he couldn\'t swim.', 'Він сказав, що не вміє плавати.'],
            ],
          },
        ],
      },

      {
        id: 'gerunds-infinitives', title: 'Герундій і Інфінітив', emoji: '🔡',
        sections: [
          { type: 'intro', text: 'Після різних дієслів вживається або герундій (V-ing) або інфінітив (to + V). Знання різниці — ключ до правильної мови.' },
          {
            type: 'table', title: 'Дієслова + Герундій (V-ing)',
            rows: [
              ['Дієслово', 'Приклад'],
              ['enjoy', 'I enjoy swimming.'],
              ['mind', 'Do you mind waiting?'],
              ['avoid', 'She avoids making mistakes.'],
              ['finish', 'He finished reading the book.'],
              ['suggest', 'She suggested going by train.'],
              ['consider', 'They considered moving abroad.'],
              ['keep', 'Keep trying!'],
              ['can\'t help', 'I can\'t help laughing.'],
              ['miss', 'I miss living in the city.'],
              ['risk', 'Don\'t risk losing everything.'],
            ],
          },
          {
            type: 'table', title: 'Дієслова + Інфінітив (to + V)',
            rows: [
              ['Дієслово', 'Приклад'],
              ['want', 'I want to travel.'],
              ['decide', 'She decided to quit.'],
              ['plan', 'He plans to study abroad.'],
              ['hope', 'We hope to see you soon.'],
              ['agree', 'They agreed to help.'],
              ['refuse', 'She refused to answer.'],
              ['manage', 'He managed to escape.'],
              ['need', 'You need to practice more.'],
              ['seem', 'She seems to be happy.'],
              ['tend', 'People tend to forget.'],
            ],
          },
          {
            type: 'table', title: 'Дієслова з обома (зміна значення!)',
            rows: [
              ['Дієслово', 'Gerund (V-ing)', 'Infinitive (to V)'],
              ['remember', 'remember doing = пам\'ятаю, що робив', 'remember to do = не забути зробити'],
              ['forget', 'forget doing = не пам\'ятаю, що робив', 'forget to do = забув зробити'],
              ['stop', 'stop doing = перестати', 'stop to do = зупинитись, щоб зробити'],
              ['try', 'try doing = спробувати (може спрацює)', 'try to do = намагатись (важко)'],
            ],
          },
          { type: 'examples', title: 'Приклади зміни значення',
            rows: [
              ['I remember meeting him.', 'Я пам\'ятаю, що зустрічав його.'],
              ['Remember to call me.', 'Не забудь мені зателефонувати.'],
              ['She stopped smoking.', 'Вона кинула курити.'],
              ['He stopped to smoke.', 'Він зупинився, щоб покурити.'],
            ],
          },
        ],
      },

      {
        id: 'quantifiers', title: 'Квантифікатори', emoji: '🔢',
        sections: [
          { type: 'intro', text: 'Квантифікатори — слова, що позначають кількість. Вибір залежить від типу іменника (злічуваний / незлічуваний) та контексту (питальне, заперечне, ствердне речення).' },
          {
            type: 'table', title: 'Основна таблиця',
            rows: [
              ['Квантифікатор', 'Злічувані', 'Незлічувані', 'Значення'],
              ['many', '✅ (many books)', '❌', 'багато (+ заперечення/питання)'],
              ['much', '❌', '✅ (much water)', 'багато (+ заперечення/питання)'],
              ['a lot of / lots of', '✅', '✅', 'багато (+ ствердження)'],
              ['a few', '✅ (a few friends)', '❌', 'кілька (позитивне)'],
              ['few', '✅ (few friends)', '❌', 'мало, майже немає (негативне)'],
              ['a little', '❌', '✅ (a little time)', 'трохи (позитивне)'],
              ['little', '❌', '✅ (little time)', 'мало, майже немає (негативне)'],
              ['some', '✅', '✅', 'якийсь, кілька (ствердження)'],
              ['any', '✅', '✅', 'якийсь, будь-який (питання/заперечення)'],
              ['no', '✅', '✅', 'жодного'],
              ['enough', '✅', '✅', 'достатньо'],
              ['plenty of', '✅', '✅', 'більш ніж достатньо'],
            ],
          },
          { type: 'tip', title: 'A few vs Few',
            text: 'A few friends came. → Кілька друзів прийшло. (позитивно — хтось є)\nFew friends came. → Мало хто з друзів прийшов. (негативно — майже ніхто)',
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['I have a lot of work today.', 'У мене сьогодні багато роботи.'],
              ['There\'s a little milk left.', 'Залишилось трохи молока.'],
              ['I have few friends here.', 'У мене тут мало друзів.'],
              ['Do you have any questions?', 'Є якісь питання?'],
              ['There are some apples in the fridge.', 'У холодильнику є яблука.'],
            ],
          },
        ],
      },

      {
        id: 'comparatives', title: 'Ступені порівняння', emoji: '📊',
        sections: [
          { type: 'intro', text: 'Прикметники мають три ступені порівняння: звичайний (positive), порівняльний (comparative) та найвищий (superlative).' },
          {
            type: 'table', title: 'Утворення ступенів',
            rows: [
              ['Тип', 'Звичайний', 'Порівняльний', 'Найвищий'],
              ['1 склад', 'tall', 'tall-er', 'the tall-est'],
              ['1 склад + VC', 'big', 'bigg-er', 'the bigg-est'],
              ['1 склад на -e', 'nice', 'nicer', 'the nicest'],
              ['2 склади на -y', 'happy', 'happier', 'the happiest'],
              ['2+ склади', 'beautiful', 'more beautiful', 'the most beautiful'],
              ['2+ склади', 'interesting', 'more interesting', 'the most interesting'],
            ],
          },
          {
            type: 'table', title: 'Неправильні форми',
            rows: [
              ['Звичайний', 'Порівняльний', 'Найвищий'],
              ['good / well', 'better', 'the best'],
              ['bad / ill', 'worse', 'the worst'],
              ['much / many', 'more', 'the most'],
              ['little', 'less', 'the least'],
              ['far', 'farther / further', 'the farthest / furthest'],
              ['old', 'older / elder', 'the oldest / eldest'],
            ],
          },
          {
            type: 'table', title: 'Структури порівняння',
            rows: [
              ['Структура', 'Значення', 'Приклад'],
              ['as ... as', 'так само як', 'She is as tall as me.'],
              ['not as ... as', 'не такий як', 'He is not as fast as before.'],
              ['comparative + than', 'порівняння', 'This is better than that.'],
              ['the + superlative + of/in', 'найвищий ступінь', 'It\'s the best in the world.'],
              ['the + comparative, the + comparative', 'чим... тим...', 'The more you read, the smarter you get.'],
            ],
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['She is taller than her sister.', 'Вона вища за свою сестру.'],
              ['This is the most expensive hotel.', 'Це найдорожчий готель.'],
              ['He runs faster than me.', 'Він бігає швидше за мене.'],
              ['The earlier, the better.', 'Чим раніше, тим краще.'],
            ],
          },
        ],
      },

      {
        id: 'questions', title: 'Питальні речення', emoji: '❓',
        sections: [
          { type: 'intro', text: 'Порядок слів у питальних реченнях в англійській відрізняється від стверджувального. Загальне правило: допоміжне дієслово виходить на перше місце.' },
          {
            type: 'table', title: 'Типи питань',
            rows: [
              ['Тип', 'Структура', 'Приклад'],
              ['Yes/No (загальне)', 'Aux + S + V?', 'Do you work here?'],
              ['Wh- (спеціальне)', 'Wh- + Aux + S + V?', 'Where do you work?'],
              ['До підмета', 'Wh- + V (без Aux)?', 'Who called you?'],
              ['Розділове (Tag)', 'S + V, Aux + pronoun?', 'You speak English, don\'t you?'],
              ['Непряме (Indirect)', 'I wonder if/whether...', 'Can you tell me where she is?'],
            ],
          },
          {
            type: 'table', title: 'Питальні слова (Wh-)',
            rows: [
              ['Слово', 'Питання про', 'Приклад'],
              ['What', 'що / який', 'What time is it?'],
              ['Who', 'хто (підмет)', 'Who called you?'],
              ['Whom', 'кого (додаток)', 'Whom did you call?'],
              ['Which', 'який (з групи)', 'Which colour do you prefer?'],
              ['Where', 'де / куди', 'Where are you going?'],
              ['When', 'коли', 'When does it start?'],
              ['Why', 'чому', 'Why are you late?'],
              ['How', 'як', 'How are you?'],
              ['How much', 'скільки (незлічуване)', 'How much does it cost?'],
              ['How many', 'скільки (злічуване)', 'How many people came?'],
              ['How long', 'як довго', 'How long have you waited?'],
              ['How often', 'як часто', 'How often do you exercise?'],
              ['How old', 'скільки років', 'How old are you?'],
            ],
          },
          { type: 'note', title: 'Непрямі питання — порядок слів ствердного!',
            text: 'Direct: Where does she live?\nIndirect: Could you tell me where she lives? (NO auxiliary!)\n\nDirect: Is he home?\nIndirect: I wonder if he is home.',
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['What do you do for a living?', 'Чим ти займаєшся?'],
              ['Who told you that?', 'Хто тобі це сказав?'],
              ['How often do you go to the gym?', 'Як часто ти ходиш в зал?'],
              ['You\'re coming, aren\'t you?', 'Ти прийдеш, правда ж?'],
            ],
          },
        ],
      },

      {
        id: 'prepositions', title: 'Прийменники', emoji: '📍',
        sections: [
          { type: 'intro', text: 'Прийменники часу та місця — одна з найпоширеніших тем для помилок. Основні: in, on, at.' },
          {
            type: 'table', title: 'Прийменники ЧАСУ',
            rows: [
              ['Прийменник', 'Вживання', 'Приклади'],
              ['IN', 'місяці, роки, пори року, частини дня', 'in January, in 2020, in summer, in the morning'],
              ['ON', 'дні тижня, конкретні дати, свята', 'on Monday, on 5th March, on Christmas Day'],
              ['AT', 'конкретний час, свята (AT night/noon)', 'at 3 pm, at noon, at midnight, at Christmas'],
              ['FOR', 'тривалість (як довго)', 'for 2 hours, for a week, for years'],
              ['SINCE', 'з певного моменту (початок)', 'since Monday, since 2015, since morning'],
              ['DURING', 'протягом (в межах події)', 'during the lesson, during summer'],
              ['BY', 'до (крайній термін)', 'by Friday, by 5 pm, by next year'],
              ['UNTIL', 'до (тривалість до моменту)', 'until midnight, until next week'],
            ],
          },
          {
            type: 'table', title: 'Прийменники МІСЦЯ',
            rows: [
              ['Прийменник', 'Вживання', 'Приклади'],
              ['IN', 'всередині (простір)', 'in the room, in London, in a car'],
              ['ON', 'на поверхні', 'on the table, on the wall, on the floor'],
              ['AT', 'конкретна точка, місце призначення', 'at the bus stop, at school, at home'],
              ['ABOVE', 'вище (без контакту)', 'above the clouds'],
              ['BELOW', 'нижче', 'below the surface'],
              ['OVER', 'над (рух або покриття)', 'fly over the city, a bridge over the river'],
              ['UNDER', 'під', 'under the table, under the bridge'],
              ['BETWEEN', 'між (двома)', 'between the bank and the post office'],
              ['AMONG', 'серед (трьох і більше)', 'among the crowd'],
              ['BESIDE/NEXT TO', 'поряд', 'beside the door, next to the window'],
              ['OPPOSITE', 'навпроти', 'opposite the cinema'],
            ],
          },
          { type: 'tip', title: 'in / at / on — транспорт',
            text: 'in a car / in a taxi / in a helicopter (закрите, особисте)\non a bus / on a train / on a plane / on a boat (громадський / великий)',
          },
          { type: 'examples', title: 'Приклади',
            rows: [
              ['I was born in 1995, on a Friday.', 'Я народився у 1995, у п\'ятницю.'],
              ['The meeting is at 3 pm on Monday.', 'Зустріч о 15:00 в понеділок.'],
              ['She\'s been working here since March.', 'Вона працює тут з березня.'],
              ['The keys are on the table.', 'Ключі на столі.'],
              ['I\'ll be home by 6.', 'Я буду вдома до 6.'],
            ],
          },
        ],
      },

      // ─── Merged from exceptions2 ─────────────────────────────

      {
        id: 'phrasal-verbs', title: 'Фразові дієслова (топ-40)', emoji: '🔗',
        sections: [
          { type: 'intro', text: 'Phrasal verbs — дієслова + прийменник/прислівник. Їх значення часто не можна передбачити. Найуживаніші варто вивчити окремо.' },
          {
            type: 'table', title: 'Список фразових дієслів',
            rows: [
              ['Фразове дієслово', 'Значення', 'Приклад'],
              ['break down', 'зламатись / розплакатись', 'The car broke down on the highway.'],
              ['break up', 'розлучитись / розпастись', 'They broke up last year.'],
              ['bring up', 'виховувати / порушити тему', 'She brought up an interesting point.'],
              ['call off', 'скасувати', 'They called off the meeting.'],
              ['carry on', 'продовжувати', 'Carry on with your work.'],
              ['come across', 'випадково знайти', 'I came across an old photo.'],
              ['come up with', 'придумати / запропонувати', 'She came up with a great idea.'],
              ['cut down on', 'скоротити споживання', 'You should cut down on sugar.'],
              ['deal with', 'справлятися з', 'How do you deal with stress?'],
              ['drop off', 'підвезти / заснути', 'I\'ll drop you off at the station.'],
              ['end up', 'закінчити (несподівано)', 'We ended up staying all night.'],
              ['fall apart', 'розвалитись', 'The plan fell apart quickly.'],
              ['figure out', 'зрозуміти / вирішити', 'I can\'t figure out this problem.'],
              ['find out', 'дізнатись', 'How did you find out?'],
              ['get along (with)', 'ладнати з кимось', 'We get along well.'],
              ['get over', 'пережити / подолати', 'It takes time to get over a breakup.'],
              ['get rid of', 'позбутися', 'I need to get rid of this junk.'],
              ['give up', 'здатись / кинути', 'Never give up on your dreams.'],
              ['go through', 'пережити / переглянути', 'She went through a difficult time.'],
              ['grow up', 'виростати', 'Where did you grow up?'],
              ['hang on', 'зачекати / триматись', 'Hang on, I\'ll be right back.'],
              ['keep up with', 'встигати / не відставати', 'It\'s hard to keep up with the news.'],
              ['let down', 'підвести', 'Don\'t let me down.'],
              ['look after', 'доглядати', 'Can you look after my cat?'],
              ['look forward to', 'чекати з нетерпінням', 'I\'m looking forward to seeing you.'],
              ['look up', 'знайти інформацію', 'Look it up in a dictionary.'],
              ['make up', 'придумати / помиритися', 'They made up after the fight.'],
              ['pick up', 'підібрати / навчитись', 'She picked up Spanish quickly.'],
              ['point out', 'вказати на', 'He pointed out the mistake.'],
              ['put off', 'відкладати', 'Stop putting things off!'],
              ['put up with', 'терпіти', 'I can\'t put up with this noise.'],
              ['run into', 'випадково зустріти', 'I ran into my teacher yesterday.'],
              ['run out of', 'вичерпати запаси', 'We ran out of milk.'],
              ['set up', 'налаштувати / заснувати', 'She set up her own company.'],
              ['show off', 'хвалитися', 'He\'s just showing off.'],
              ['take off', 'злетіти / зняти', 'The plane takes off at noon.'],
              ['take on', 'взяти на роботу / прийняти виклик', 'She took on too much work.'],
              ['turn down', 'відмовити / зменшити звук', 'He turned down the offer.'],
              ['work out', 'тренуватись / вийти добре', 'It all worked out in the end.'],
            ],
          },
        ],
      },

      {
        id: 'confusing-words', title: 'Слова, які плутають', emoji: '🤔',
        sections: [
          { type: 'intro', text: 'Деякі англійські слова мають схоже звучання або значення, але використовуються по-різному. Це типові помилки навіть досвідчених учнів.' },
          {
            type: 'table', title: 'Make vs Do',
            rows: [
              ['MAKE (створити, виготовити)', 'DO (виконати, займатись)'],
              ['make a mistake', 'do homework / work'],
              ['make a decision', 'do business'],
              ['make money', 'do exercise / sport'],
              ['make a plan / list', 'do the dishes / cleaning'],
              ['make coffee / tea / food', 'do someone a favour'],
              ['make an effort', 'do well / badly'],
              ['make friends', 'do research'],
            ],
          },
          {
            type: 'table', title: 'Say vs Tell vs Speak vs Talk',
            rows: [
              ['Слово', 'Структура', 'Приклад'],
              ['SAY', 'say + (that) / say + quote', 'He said he was tired. / "Hello," she said.'],
              ['TELL', 'tell + OBJECT + (that)', 'She told me the truth.'],
              ['SPEAK', 'speak (to sb) / speak + мова', 'Can I speak to the manager? / She speaks French.'],
              ['TALK', 'talk (to/with sb) about sth', 'We need to talk. / Let\'s talk about it.'],
            ],
          },
          {
            type: 'table', title: 'Affect vs Effect',
            rows: [
              ['AFFECT (дієслово)', 'вплинути на', 'Stress affects your health.'],
              ['EFFECT (іменник)', 'ефект, результат', 'The effects of stress are serious.'],
            ],
          },
          {
            type: 'table', title: 'Infer vs Imply',
            rows: [
              ['IMPLY (мовець)', 'натякати, мати на увазі', 'Are you implying that I\'m wrong?'],
              ['INFER (слухач)', 'робити висновок', 'What can we infer from this data?'],
            ],
          },
          {
            type: 'table', title: 'Other Common Confusions',
            rows: [
              ['Слова', 'Різниця'],
              ['lend vs borrow', 'lend = дати позику (I lend you); borrow = взяти позику (I borrow from you)'],
              ['bring vs take', 'bring = принести (до мовця); take = взяти (від мовця)'],
              ['rise vs raise', 'rise = підніматись (само); raise = піднімати (когось/щось)'],
              ['lie vs lay', 'lie = лежати (no object); lay = класти (needs object)'],
              ['fewer vs less', 'fewer = злічувані (fewer people); less = незлічувані (less water)'],
              ['who vs whom', 'who = підмет (Who called?); whom = додаток (Whom did you call?)'],
              ['practice vs practise', 'practice (noun, Brit); practise (verb, Brit); practice = обидва (Am)'],
            ],
          },
        ],
      },

      {
        id: 'british-american', title: 'British vs American English', emoji: '🇬🇧🇺🇸',
        sections: [
          { type: 'intro', text: 'Британська та американська англійська мають відмінності у написанні, вимові та лексиці. Обидва варіанти правильні — важливо бути послідовним.' },
          {
            type: 'table', title: 'Відмінності в написанні',
            rows: [
              ['British', 'American', 'Переклад'],
              ['colour', 'color', 'колір'],
              ['favourite', 'favorite', 'улюблений'],
              ['honour', 'honor', 'честь'],
              ['centre', 'center', 'центр'],
              ['theatre', 'theater', 'театр'],
              ['travelling', 'traveling', 'подорожуючи'],
              ['organised', 'organized', 'організований'],
              ['defence', 'defense', 'захист'],
              ['practise (v)', 'practice (v)', 'практикувати'],
              ['programme', 'program', 'програма'],
              ['cheque', 'check', 'чек'],
            ],
          },
          {
            type: 'table', title: 'Відмінності у лексиці',
            rows: [
              ['British', 'American', 'Переклад'],
              ['flat', 'apartment', 'квартира'],
              ['lift', 'elevator', 'ліфт'],
              ['underground / tube', 'subway / metro', 'метро'],
              ['motorway', 'freeway / highway', 'автострада'],
              ['autumn', 'fall', 'осінь'],
              ['holiday', 'vacation', 'відпустка'],
              ['rubbish', 'garbage / trash', 'сміття'],
              ['biscuit', 'cookie', 'печиво'],
              ['chips', 'French fries', 'картопля-фрі'],
              ['crisps', 'chips', 'чіпси'],
              ['mobile (phone)', 'cell phone', 'мобільний'],
              ['petrol', 'gas', 'бензин'],
              ['shop', 'store', 'магазин'],
              ['post', 'mail', 'пошта'],
              ['football', 'soccer', 'футбол'],
              ['jumper / pullover', 'sweater', 'светр'],
              ['trousers', 'pants', 'штани'],
            ],
          },
          {
            type: 'table', title: 'Відмінності в граматиці',
            rows: [
              ['British', 'American'],
              ['Have you eaten yet? (Present Perfect)', 'Did you eat yet? (Past Simple — also common)'],
              ['I\'ve just seen him. (Present Perfect)', 'I just saw him. (Past Simple — more natural)'],
              ['at weekends', 'on weekends'],
              ['in the street', 'on the street'],
              ['different from / to', 'different from / than'],
            ],
          },
        ],
      },

      {
        id: 'false-friends', title: "False Friends (хибні друзі)", emoji: '🚫',
        sections: [
          { type: 'intro', text: 'False friends — слова, що схожі на українські або інші мови, але мають інше значення. Дуже поширене джерело помилок!' },
          {
            type: 'table', title: 'Типові помилки (EN ↔ UA)',
            rows: [
              ['Англійське слово', 'Здається означає', 'Насправді означає'],
              ['magazine', 'магазин', 'журнал (shop = магазин)'],
              ['fabric', 'фабрика', 'тканина (factory = фабрика)'],
              ['academic', 'академік', 'академічний / університетський'],
              ['sympathetic', 'симпатичний', 'співчутливий, розуміючий (good-looking = симпатичний)'],
              ['actual', 'актуальний', 'справжній, реальний (relevant = актуальний)'],
              ['accurate', 'акуратний', 'точний, правильний (neat/tidy = акуратний)'],
              ['lunatic', 'лунатик', 'божевільний (sleepwalker = лунатик)'],
              ['decade', 'декада', '10 років (ten days = десять днів)'],
              ['data', 'дата', 'дані (date = дата)'],
              ['cabinet', 'кабінет', 'шафа / уряд (office/study = кабінет)'],
              ['angina', 'ангіна', 'стенокардія (tonsillitis = ангіна)'],
              ['disco', 'диско', 'нічний клуб / дискотека (disc = диск)'],
              ['intelligent', 'інтелігентний', 'розумний, кмітливий (cultured/refined = інтелігентний)'],
              ['replica', 'репліка', 'точна копія (remark = репліка)'],
              ['receipt', 'рецепт', 'квитанція/чек (recipe = рецепт)'],
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
