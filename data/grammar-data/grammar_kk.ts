// Vymova — data/grammar-data/grammar_kk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KK: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Казахська не має граматичного роду — ол означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Kazakh has no grammatical gender — ол means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "мен",
                "я"
              ],
              [
                "сен / сіз",
                "ти / ви (ввічливо)"
              ],
              [
                "ол",
                "він / вона / воно"
              ],
              [
                "біз",
                "ми"
              ],
              [
                "олар",
                "вони"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен мұғаліммін.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка-суфікс — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в інших тюркських мовах, \"бути\" в теперішньому часі виражається особовим суфіксом, приєднаним прямо до присудка.",
            "en": {
              "text": "As in other Turkic languages, \"to be\" in the present is expressed by a personal suffix attached directly to the predicate."
            }
          },
          {
            "type": "formula",
            "title": "\"мұғалім\" (вчитель) + суфікс-зв'язка",
            "rows": [
              [
                "мен",
                "мұғаліммін",
                "я вчитель"
              ],
              [
                "сен",
                "мұғалімсің",
                "ти вчитель"
              ],
              [
                "ол",
                "мұғалім",
                "він/вона вчитель"
              ],
              [
                "біз",
                "мұғаліміз",
                "ми вчителі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ол дәрігер.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Suffix — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"емес\" / -ма- — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення іменного присудка вживають емес, а для дієслів — інфікс -ма-/-ме- перед закінченням.",
            "en": {
              "text": "Nominal predicates are negated with емес, while verbs take the infix -ма-/-ме- before the ending."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Мен мұғаліммін.",
                "Мен мұғалім емеспін.",
                "Я вчитель. / Я не вчитель."
              ],
              [
                "Білемін.",
                "Білмеймін.",
                "Я знаю. / Я не знаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Білмеймін.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Емес / -Ма- — A1"
      },
      {
        "id": "questions",
        "title": "Питання з частками ма/ме/ба/бе — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються приєднанням питальної частки ма/ме/ба/бе (за законом гармонії голосних) до ключового слова.",
            "en": {
              "text": "Yes/no questions are formed by attaching the question particle ма/ме/ба/бе (following vowel harmony) to the key word."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Сен аш.",
                "Сен аш па?",
                "Ти голодний. / Ти голодний?"
              ],
              [
                "Бұл дұрыс.",
                "Бұл дұрыс па?",
                "Це правда. / Це правда?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Уақытың бар ма?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Ма/Ме/Ба/Бе — A1"
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), а відмінкові та особові суфікси приєднуються за законом гармонії голосних.",
            "en": {
              "text": "The basic word order is Subject-Object-Predicate (SOV), with case and personal suffixes attaching following vowel harmony."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен кітап оқимын.",
                "Я читаю книгу (букв. \"я книгу читаю\")."
              ]
            ]
          }
        ],
        "titleEn": "SOV Word Order — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "⏰",
    "rules": [
      {
        "id": "present-tense",
        "title": "Нақ осы шақ (-ып/-іп жатыр) — A1",
        "titleEn": "Present Continuous Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється дієприслівником на -ып/-іп/-п + допоміжне дієслово \"жату\" (лежати/перебувати) з особовим закінченням.",
            "en": {
              "text": "The present continuous is formed with the converb -ып/-іп/-п plus the auxiliary \"жату\" (to lie/be in a state) with a personal ending."
            }
          },
          {
            "type": "formula",
            "title": "\"оқу\" (читати) — нақ осы шақ",
            "rows": [
              [
                "мен",
                "оқып жатырмын",
                "я читаю"
              ],
              [
                "сен",
                "оқып жатырсың",
                "ти читаєш"
              ],
              [
                "ол",
                "оқып жатыр",
                "він/вона читає"
              ],
              [
                "біз",
                "оқып жатырмыз",
                "ми читаємо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен кітап оқып жатырмын.",
                "Я читаю книгу."
              ],
              [
                "Ол ән айтып жатыр.",
                "Він/вона співає пісню."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist-tense",
        "title": "Ауыспалы осы шақ (-а/-е/-й) — A2",
        "titleEn": "Habitual Present (Aorist) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайний теперішній час (аорист) описує звичну чи загальну дію, а не дію просто зараз. Утворюється суфіксом -а/-е (для приголосних основ) чи -й (для голосних основ).",
            "en": {
              "text": "The habitual present (aorist) describes a habitual or general action rather than one happening right now. Formed with -а/-е (consonant stems) or -й (vowel stems)."
            }
          },
          {
            "type": "table",
            "title": "Нақ vs ауыспалы осы шақ",
            "rows": [
              [
                "Жаңбыр жауып жатыр.",
                "Іде дощ (зараз)."
              ],
              [
                "Мұнда жиі жаңбыр жауады.",
                "Тут часто йде дощ (взагалі)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен күнде шай ішемін.",
                "Я щодня п'ю чай."
              ],
              [
                "Күн шығыстан шығады.",
                "Сонце сходить на сході."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past-tense",
        "title": "Жедел өткен шақ (-ды/-ді) — A1",
        "titleEn": "Definite Past Tense (-Ды/-Ді) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Категоричний минулий час позначає дію, свідком якої мовець був особисто. Утворюється суфіксом -ды/-ді/-ты/-ті (за гармонією голосних і приголосних).",
            "en": {
              "text": "The definite past marks an action the speaker witnessed personally. Formed with -ды/-ді/-ты/-ті (following vowel and consonant harmony)."
            }
          },
          {
            "type": "formula",
            "title": "\"бару\" (йти) — жедел өткен шақ",
            "rows": [
              [
                "мен",
                "бардым",
                "я пішов"
              ],
              [
                "сен",
                "бардың",
                "ти пішов"
              ],
              [
                "ол",
                "барды",
                "він пішов"
              ],
              [
                "біз",
                "бардық",
                "ми пішли"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен кеше Алматыға бардым.",
                "Вчора я поїхав до Алмати."
              ],
              [
                "Олар фильм көрді.",
                "Вони подивилися фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-past-tense",
        "title": "Бұрынғы өткен шақ (-ған/-ген) — B1",
        "titleEn": "Reported/Perfect Past Tense (-Ған/-Ген) — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Переказний/доконаний минулий час позначає дію, про яку мовець дізнався з чужих слів або результат якої видно зараз, а не бачив сам процес. Утворюється суфіксом -ған/-ген/-қан/-кен.",
            "en": {
              "text": "The reported/perfect past marks an action the speaker learned about secondhand or whose result is visible now, rather than witnessed directly. Formed with -ған/-ген/-қан/-кен."
            }
          },
          {
            "type": "table",
            "title": "Жедел vs бұрынғы өткен шақ",
            "rows": [
              [
                "Барды. (бачив сам)",
                "Барған. (кажуть, що пішов)"
              ],
              [
                "Жедім. (я їв, точно пам'ятаю)",
                "Жеппін. (виявляється, я їв)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Айтуларынша, ол үйленген.",
                "Кажуть, що він одружився."
              ],
              [
                "Ол ауырған екен.",
                "Виявляється, він захворів."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Болжалды келер шақ (-ар/-ер/-р) — A2",
        "titleEn": "Probable Future Tense — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Імовірний майбутній час виражає передбачення чи намір і утворюється суфіксом -ар/-ер (приголосні основи) чи -р (голосні основи).",
            "en": {
              "text": "The probable future expresses a prediction or intention and is formed with -ар/-ер (consonant stems) or -р (vowel stems)."
            }
          },
          {
            "type": "formula",
            "title": "\"келу\" (приходити) — болжалды келер шақ",
            "rows": [
              [
                "мен",
                "келермін",
                "я прийду"
              ],
              [
                "сен",
                "келерсің",
                "ти прийдеш"
              ],
              [
                "ол",
                "келер",
                "він прийде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ертең саған қоңырау шаларман.",
                "Завтра я тобі подзвоню."
              ],
              [
                "Олар Түркияға барар.",
                "Вони поїдуть до Туреччини."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-definite",
        "title": "Мақсатты келер шақ (-мақ/-бек) — A2",
        "titleEn": "Intentional Future Tense — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Цілеспрямований майбутній час виражає чіткий намір і утворюється суфіксом -мақ/-мек/-бақ/-бек/-пақ/-пек + допоміжне дієслово \"болу\" (бути).",
            "en": {
              "text": "The intentional future expresses a firm intention and is formed with the suffix -мақ/-мек/-бақ/-бек/-пақ/-пек plus the auxiliary \"болу\" (to be)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "бару (йти) → бармақпын",
                "я маю намір піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен ертең жұмысқа шықпақпын.",
                "Завтра я маю намір вийти на роботу."
              ],
              [
                "Ол үй салмақ.",
                "Він планує побудувати дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Бұйрық рай — A1",
        "titleEn": "Imperative Mood — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "У 2-й особі однини наказовий спосіб — це чиста основа дієслова без закінчення. Ввічлива форма додає -ыңыз/-іңіз, множина -ыңдар/-іңдер.",
            "en": {
              "text": "In the 2nd person singular, the imperative is simply the bare verb stem. The polite form adds -ыңыз/-іңіз, and the plural adds -ыңдар/-іңдер."
            }
          },
          {
            "type": "formula",
            "title": "\"келу\" (приходити) — бұйрық рай",
            "rows": [
              [
                "сен",
                "Кел!",
                "Приходь!"
              ],
              [
                "сіз (ввічл.)",
                "Келіңіз!",
                "Приходьте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Есікті жап!",
                "Зачини двері!"
              ],
              [
                "Отырыңыз, сұраймын.",
                "Сідайте, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Шартты рай (-са/-се) — B1",
        "titleEn": "Conditional Mood (-Са/-Се) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -са/-се + особове закінчення й виражає умову \"якщо\".",
            "en": {
              "text": "The conditional is formed with the suffix -са/-се plus a personal ending and expresses an \"if\" condition."
            }
          },
          {
            "type": "formula",
            "title": "\"білу\" (знати) — шартты рай",
            "rows": [
              [
                "мен",
                "білсем",
                "якщо я знатиму"
              ],
              [
                "сен",
                "білсең",
                "якщо ти знатимеш"
              ],
              [
                "ол",
                "білсе",
                "якщо він знатиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Уақытым болса, келермін.",
                "Якщо в мене буде час, я прийду."
              ],
              [
                "Жаңбыр жауса, үйде қаламыз.",
                "Якщо піде дощ, ми залишимося вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "optative-mood",
        "title": "Қалау рай (-ғы/-гі келеді) — B1",
        "titleEn": "Optative Mood (Desire) — B1",
        "emoji": "🌟",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб виражає бажання (\"хотіти\") і утворюється конструкцією -ғы/-гі + келеді (буквально \"приходить бажання\").",
            "en": {
              "text": "The optative expresses desire (\"to want\") and is formed with the construction -ғы/-гі + келеді (literally \"the desire comes\")."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "бару (йти) → баргым келеді",
                "мені хочеться піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Менің үйге баргым келеді.",
                "Мені хочеться додому."
              ],
              [
                "Оның ұйықтағысы келді.",
                "Йому/їй захотілося спати."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous",
        "title": "Өткен шақтағы жалғасымдылық (-ып жатыр еді) — B1",
        "titleEn": "Past Continuous — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому утворюється додаванням допоміжного \"еді\" до теперішнього тривалого: -ып жатыр + еді = -ып жатыр еді.",
            "en": {
              "text": "The past continuous adds the auxiliary \"еді\" to the present continuous: -ып жатыр + еді = -ып жатыр еді."
            }
          },
          {
            "type": "formula",
            "title": "\"оқу\" (читати) — өткен шақтағы жалғасымдылық",
            "rows": [
              [
                "мен",
                "оқып жатыр едім",
                "я читав (у той момент)"
              ],
              [
                "сен",
                "оқып жатыр едің",
                "ти читав"
              ],
              [
                "ол",
                "оқып жатыр еді",
                "він читав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сен қоңырау шалғанда, мен тамақ пісіріп жатыр едім.",
                "Коли ти подзвонив, я готував їжу."
              ],
              [
                "Балалар бақшада ойнап жатыр еді.",
                "Діти гралися в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-past",
        "title": "Әдеттегі өткен шақ (-атын/-етін) — B1",
        "titleEn": "Habitual Past — B1",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія в минулому виражається дієприкметником на -атын/-етін/-йтын і відповідає українському \"бувало, робив\".",
            "en": {
              "text": "A habitual past action is expressed with the participle -атын/-етін/-йтын and corresponds to Ukrainian's \"used to\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "бару (йти) → баратын едім",
                "я, бувало, ходив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Балалық шақта біз ауылға баратынбыз.",
                "У дитинстві ми, бувало, їздили в село."
              ],
              [
                "Ол күн сайын газет оқитын.",
                "Він щоранку, бувало, читав газету."
              ]
            ]
          }
        ]
      },
      {
        "id": "converb-forms",
        "title": "Көсемше (-ып/-іп, -а/-е) — B1",
        "titleEn": "Converb Forms — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник (көсемше) на -ып/-іп описує послідовну чи одночасну дію (\"зробивши, роблячи\") й дуже часто вживається для з'єднання дієслів у реченні без сполучника.",
            "en": {
              "text": "The converb (kösemshe) -ып/-іп describes a sequential or simultaneous action (\"having done, while doing\") and is very often used to link verbs in a sentence with no conjunction."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "үйге келіп, тамақ ішті",
                "прийшовши додому, поїв"
              ],
              [
                "жылап отыр",
                "сидить плачучи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мектепке барып, досымды көрдім.",
                "Прийшовши до школи, я побачив друга."
              ],
              [
                "Ол күліп сөйледі.",
                "Він говорив, сміючись."
              ]
            ]
          }
        ]
      },
      {
        "id": "necessitative-mood",
        "title": "Қажеттілік рай (керек/тиіс) — B1",
        "titleEn": "Necessitative Mood ('Must') — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість дії виражається дієприкметником на -у + слово \"керек\" чи \"тиіс\" (\"мусити, повинен\").",
            "en": {
              "text": "Obligation is expressed with the verbal noun -у plus the word \"керек\" or \"тиіс\" (\"must, have to\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "бару (йти) → бару керек",
                "мушу піти"
              ],
              [
                "оқу (читати) → оқу тиіс",
                "мушу прочитати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Маған дәрігерге бару керек.",
                "Мені треба піти до лікаря."
              ],
              [
                "Сен үй тапсырмасын жасауың керек.",
                "Тобі треба зробити домашнє завдання."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "genitive-case",
        "title": "Ілік септік — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (ілік септік) відповідає на питання \"кого? чого? чий?\" й утворюється суфіксом -ның/-нің/-дың/-дің/-тың/-тің.",
            "en": {
              "text": "The genitive case answers \"of whom? of what? whose?\" and is formed with the suffix -ның/-нің/-дың/-дің/-тың/-тің."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "қала (місто)",
                "қаланың",
                "қаланың орталығы (центр міста)"
              ],
              [
                "дос (друг)",
                "достың",
                "достың үйі (дім друга)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл менің ағамның көлігі.",
                "Це машина мого брата."
              ],
              [
                "Мектептің атауы қандай?",
                "Яка назва школи?"
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Барыс септік — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давально-напрямний відмінок (барыс септік) відповідає на питання \"кому? куди?\" й утворюється суфіксом -ға/-ге/-қа/-ке.",
            "en": {
              "text": "The dative-directional case answers \"to whom? to where?\" and is formed with the suffix -ға/-ге/-қа/-ке."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "үй (дім)",
                "үйге",
                "додому"
              ],
              [
                "дос (друг)",
                "досқа",
                "другові"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен мектепке барамын.",
                "Я йду до школи."
              ],
              [
                "Досыма кітап бердім.",
                "Я дав другові книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Табыс септік — A2",
        "titleEn": "Accusative Case — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (табыс септік) позначає конкретний, визначений прямий об'єкт дії й утворюється суфіксом -ны/-ні/-ды/-ді/-ты/-ті.",
            "en": {
              "text": "The accusative case marks a specific, definite direct object and is formed with the suffix -ны/-ні/-ды/-ді/-ты/-ті."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "кітап (книга)",
                "кітапты",
                "Кітапты оқимын. (Читаю книгу.)"
              ],
              [
                "машина",
                "машинаны",
                "Машинаны көрдім. (Побачив машину.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Есікті жап.",
                "Зачини двері."
              ],
              [
                "Мен дәптерімді ұмыттым.",
                "Я забув свій зошит."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Жатыс септік — A2",
        "titleEn": "Locative Case — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (жатыс септік) відповідає на питання \"де?\" й утворюється суфіксом -да/-де/-та/-те.",
            "en": {
              "text": "The locative case answers \"where?\" and is formed with the suffix -да/-де/-та/-те."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "үй (дім)",
                "үйде",
                "вдома"
              ],
              [
                "мектеп (школа)",
                "мектепте",
                "у школі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен Алматыда тұрамын.",
                "Я живу в Алмати."
              ],
              [
                "Кітап үстелде жатыр.",
                "Книга лежить на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case",
        "title": "Шығыс септік — A2",
        "titleEn": "Ablative Case — A2",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Вихідний відмінок (шығыс септік) відповідає на питання \"звідки?\" й утворюється суфіксом -дан/-ден/-тан/-тен/-нан/-нен.",
            "en": {
              "text": "The ablative case answers \"from where?\" and is formed with the suffix -дан/-ден/-тан/-тен/-нан/-нен."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "үй (дім)",
                "үйден",
                "з дому"
              ],
              [
                "Алматы",
                "Алматыдан",
                "з Алмати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен университеттен келе жатырмын.",
                "Я йду з університету."
              ],
              [
                "Бұл сыйлықты анамнан алдым.",
                "Цей подарунок я отримав від мами."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Көмектес септік — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (көмектес септік) відповідає на питання \"ким? чим? з ким?\" й утворюється суфіксом -мен/-бен/-пен. Це сьомий відмінок, якого немає в турецькій чи азербайджанській — там значення \"з\" передається окремим післяйменником.",
            "en": {
              "text": "The instrumental case answers \"with whom? with what?\" and is formed with the suffix -мен/-бен/-пен. This is a seventh case absent from Turkish or Azerbaijani, where \"with\" is expressed by a separate postposition instead."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "қалам (ручка)",
                "қаламмен",
                "Қаламмен жазамын. (Пишу ручкою.)"
              ],
              [
                "дос (друг)",
                "досыммен",
                "досыммен бірге (разом із другом)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Автобуспен барамыз.",
                "Ми їдемо автобусом."
              ],
              [
                "Итіммен серуендеймін.",
                "Я гуляю зі своїм собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-harmony-major",
        "title": "Дауысты дыбыстардың үндестігі — A1",
        "titleEn": "Vowel Harmony (Palatal) — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Закон гармонії голосних вимагає, щоб голосний суфікса відповідав переднього/заднього ряду голосному в останньому складі кореня.",
            "en": {
              "text": "The vowel harmony rule requires a suffix vowel to match the front/back quality of the vowel in the word's last syllable."
            }
          },
          {
            "type": "table",
            "title": "Задній ряд ↔ передній ряд",
            "rows": [
              [
                "тау (задн.) → тау-да",
                "гора → на горі",
                "задній ряд"
              ],
              [
                "үй (передн.) → үй-де",
                "дім → вдома",
                "передній ряд"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Алматыдан келемін.",
                "Я приїжджаю з Алмати."
              ],
              [
                "Астанадан келемін.",
                "Я приїжджаю з Астани."
              ]
            ]
          }
        ]
      },
      {
        "id": "consonant-harmony",
        "title": "Дауыссыз дыбыстардың үндестігі — A2",
        "titleEn": "Consonant Harmony — A2",
        "emoji": "🔉",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від турецької, казахська має ще й гармонію приголосних у суфіксах: після дзвінких і сонорних приголосних суфікс починається на дзвінкий (д/ғ), а після глухих — на глухий (т/қ).",
            "en": {
              "text": "Unlike Turkish, Kazakh also has consonant harmony in suffixes: after voiced and sonorant consonants, the suffix starts with a voiced sound (д/ғ); after voiceless ones, with a voiceless sound (т/қ)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "үй (дзвінк./голосн.) → үйде",
                "вдома",
                "д"
              ],
              [
                "мектеп (глух.) → мектепте",
                "у школі",
                "т"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Балада кітап бар.",
                "У дитини є книга."
              ],
              [
                "Тақтада жазу бар.",
                "На дошці є напис."
              ]
            ]
          }
        ]
      },
      {
        "id": "buffer-consonants",
        "title": "Дәнекер дыбыстар (й, н) — A2",
        "titleEn": "Buffer Consonants (Y, N) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли основа закінчується на голосний, а суфікс починається на голосний, між ними вставляється буферний приголосний -й- чи -н- залежно від суфікса.",
            "en": {
              "text": "When a stem ends in a vowel and the suffix begins with a vowel, a buffer consonant -й- or -н- is inserted between them, depending on the suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклади буферних приголосних",
            "rows": [
              [
                "оқы- + -ады",
                "оқиды",
                "буфер -й-, читає"
              ],
              [
                "ол + -ың (його...)",
                "оның",
                "буфер -н-"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ол мектепте оқиды.",
                "Він/вона навчається в школі."
              ],
              [
                "Оның үйі жасыл.",
                "Його дім зелений."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix",
        "title": "Көптік жалғау -лар/-лер — A1",
        "titleEn": "Plural Suffix -Лар/-Лер — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється додаванням суфікса -лар/-лер/-дар/-дер/-тар/-тер відповідно до закону гармонії голосних і приголосних основи.",
            "en": {
              "text": "The plural is formed by adding the suffix -лар/-лер/-дар/-дер/-тар/-тер according to the stem's vowel and consonant harmony."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "кітап (книга)",
                "кітаптар",
                "книги"
              ],
              [
                "үй (дім)",
                "үйлер",
                "будинки"
              ],
              [
                "бала (дитина)",
                "балалар",
                "діти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кітаптарды үстелге қойдым.",
                "Я поклав книги на стіл."
              ],
              [
                "Балалар бақшада ойнайды.",
                "Діти граються в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Тәуелдік жалғау — A2",
        "titleEn": "Possessive Suffixes — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні суфікси приєднуються до іменника й показують, кому належить предмет, без окремого присвійного займенника.",
            "en": {
              "text": "Possessive suffixes attach directly to the noun and show ownership, without needing a separate possessive pronoun."
            }
          },
          {
            "type": "table",
            "title": "\"кітап\" (книга) з присвійними суфіксами",
            "rows": [
              [
                "кітабым",
                "моя книга",
                "1 ос."
              ],
              [
                "кітабың",
                "твоя книга",
                "2 ос."
              ],
              [
                "кітабы",
                "його/її книга",
                "3 ос."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл менің үйім.",
                "Це мій дім."
              ],
              [
                "Оның аты Айгүл.",
                "Її звати Айгуль."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstratives-bul-ol",
        "title": "Сілтеу есімдіктері: бұл / ол — A1",
        "titleEn": "Demonstratives: Бұл / Ол — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Бұл\" вказує на близький предмет (це, цей), \"ол\" — на далекий (той). Обидва відмінюються за відмінками як іменники.",
            "en": {
              "text": "\"Бұл\" points to something near (this), \"ол\" to something far (that). Both decline by case like nouns."
            }
          },
          {
            "type": "table",
            "title": "бұл / ол",
            "rows": [
              [
                "бұл кітап",
                "ця книга",
                "близько"
              ],
              [
                "ол кітап",
                "та книга",
                "далеко"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл менің телефоным.",
                "Це мій телефон."
              ],
              [
                "Ол кім?",
                "Хто той?"
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Сұрау есімдіктері: кім, не — A1",
        "titleEn": "Interrogative Pronouns: Кім, Не — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "кім?",
                "хто?",
                "Ол кім?"
              ],
              [
                "не?",
                "що?",
                "Бұл не?"
              ],
              [
                "қай?",
                "який?",
                "Қай кітап?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл кім?",
                "Хто це?"
              ],
              [
                "Не істеп жатырсың?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "cardinal-numbers",
        "title": "Сан есім (негізгі) — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "бір",
                "один",
                "1"
              ],
              [
                "бес",
                "п'ять",
                "5"
              ],
              [
                "он",
                "десять",
                "10"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Менің екі ағам бар.",
                "У мене два брати."
              ],
              [
                "Бұл, үшінші сұрақ.",
                "Це третє питання (порівн. з наступним правилом)."
              ]
            ]
          }
        ]
      },
      {
        "id": "ordinal-numbers",
        "title": "Реттік сан есім — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються додаванням суфікса -ыншы/-інші/-ншы/-нші до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed by adding the suffix -ыншы/-інші/-ншы/-нші to the cardinal number."
            }
          },
          {
            "type": "table",
            "title": "Кількісний → порядковий",
            "rows": [
              [
                "бір → бірінші",
                "перший"
              ],
              [
                "бес → бесінші",
                "п'ятий"
              ],
              [
                "он → оныншы",
                "десятий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл менің бірінші күнім.",
                "Це мій перший день."
              ],
              [
                "Мен екінші қабатта тұрамын.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Уақытты айту — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Сағат неше?\" (\"Котра година?\"), а щоб сказати час — уживають \"сағат\" (година) з числівником.",
            "en": {
              "text": "To ask the time, Kazakhs say \"Сағат неше?\" (\"What time is it?\"), and to state it, they use \"сағат\" (hour/clock) with the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Сағат бір.",
                "Перша година.",
                "1:00"
              ],
              [
                "Сағат бес.",
                "П'ята година.",
                "5:00"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сағат неше?",
                "Котра година?"
              ],
              [
                "Пойыз сағат сегізде жүреді.",
                "Потяг вирушає о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-months-dates",
        "title": "Апта күндері және айлар — A1",
        "titleEn": "Days, Months, and Dates — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня та місяці (приклади)",
            "rows": [
              [
                "дүйсенбі",
                "понеділок",
                "1"
              ],
              [
                "жұма",
                "п'ятниця",
                "5"
              ],
              [
                "қаңтар",
                "січень",
                "01"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Дүйсенбіде жұмысқа барамын.",
                "У понеділок я йду на роботу."
              ],
              [
                "Мен мамырдың бесінде туылдым.",
                "Я народився п'ятого травня."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons-weather",
        "title": "Мезгілдер мен ауа райы — A1",
        "titleEn": "Seasons & Weather — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "көктем",
                "весна"
              ],
              [
                "жаз",
                "літо"
              ],
              [
                "қыс",
                "зима"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бүгін ауа райы ыстық.",
                "Сьогодні тепла погода."
              ],
              [
                "Қыста қар жауады.",
                "Взимку йде сніг."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions",
        "title": "Септеуліктер (послелоги) — A2",
        "titleEn": "Postpositions — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників казахська вживає післяйменники — слова, що стоять ПІСЛЯ іменника й керують певним відмінком (үшін — для, сияқты — як, дейін — до).",
            "en": {
              "text": "Instead of prepositions, Kazakh uses postpositions — words placed AFTER the noun that govern a particular case (үшін — for, сияқты — like, дейін — until)."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші післяйменники",
            "rows": [
              [
                "үшін",
                "сен үшін",
                "для тебе"
              ],
              [
                "сияқты",
                "құс сияқты",
                "як птах"
              ],
              [
                "дейін",
                "таңға дейін",
                "до ранку"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл сыйлық сен үшін.",
                "Цей подарунок для тебе."
              ],
              [
                "Сағат бесте дейін жұмыс істеймін.",
                "Я працюю до п'ятої години."
              ]
            ]
          }
        ]
      },
      {
        "id": "ile-with-and",
        "title": "\"мен/бен/пен\" — \"з\" і \"та\" — A2",
        "titleEn": "Мен/Бен/Пен: 'With' and 'And' — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -мен/-бен/-пен (орудний відмінок) означає \"з\" (супровід, знаряддя) або \"та/і\" (сполучник), приєднуючись прямо до слова.",
            "en": {
              "text": "The instrumental-case suffix -мен/-бен/-пен means \"with\" (accompaniment, instrument) or \"and\" (conjunction), attaching directly to the word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "досыммен",
                "з другом",
                "супровід"
              ],
              [
                "қаламмен",
                "ручкою",
                "знаряддя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен ағаммен келдім.",
                "Я прийшов із братом."
              ],
              [
                "Шай мен кофе әкеліңіз.",
                "Принесіть чай і каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses-participle",
        "title": "Есімше арқылы бағыныңқы сөйлем — B1",
        "titleEn": "Relative Clauses via Participles — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого відносного займенника казахська вживає дієприкметники (есімше) перед іменником: -атын/-етін (загальна ознака), -ған/-ген (минула дія).",
            "en": {
              "text": "Instead of a separate relative pronoun, Kazakh uses participles (esimshe) before the noun: -атын/-етін (general characteristic), -ған/-ген (past action)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "оқитын қыз",
                "дівчина, яка читає"
              ],
              [
                "келген адам",
                "людина, яка прийшла"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Терезеден қараған баланы көрдім.",
                "Я побачив дитину, яка дивиться у вікно."
              ],
              [
                "Бұл кітапты жазған автор.",
                "Це автор, який написав книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-nouns",
        "title": "Қимыл есімі (-у) — B1",
        "titleEn": "Verbal Nouns (-У) — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -у перетворює дієслово на віддієслівний іменник (процес чи факт дії) й водночас є словниковою формою дієслова.",
            "en": {
              "text": "The suffix -у turns a verb into a verbal noun (the process or fact of doing something) and also serves as the verb's dictionary form."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → віддієслівний іменник",
            "rows": [
              [
                "оқу (читати)",
                "оқу",
                "читання"
              ],
              [
                "жазу (писати)",
                "жазу",
                "письмо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кітап оқуды жақсы көремін.",
                "Я люблю читати книги."
              ],
              [
                "Жазу маған қиын.",
                "Писати для мене складно."
              ]
            ]
          }
        ]
      },
      {
        "id": "ability-suffix",
        "title": "Мүмкіндік (-а/-е ала-) — A2",
        "titleEn": "Ability ('Can') — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Можливість чи вміння виражається дієприслівником -а/-е/-й + окреме допоміжне дієслово \"алу\" (могти/брати).",
            "en": {
              "text": "Ability or possibility is expressed with the converb -а/-е/-й plus the separate auxiliary verb \"алу\" (can/to take)."
            }
          },
          {
            "type": "formula",
            "title": "\"бару\" (йти) — мүмкіндік",
            "rows": [
              [
                "мен",
                "бара аламын",
                "я можу піти"
              ],
              [
                "сен",
                "бара аласың",
                "ти можеш піти"
              ],
              [
                "ол",
                "бара алады",
                "він може піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен жүзе аламын.",
                "Я вмію плавати."
              ],
              [
                "Сен маған көмектесе аласың ба?",
                "Ти можеш мені допомогти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "impossibility-suffix",
        "title": "Мүмкін еместік — A2",
        "titleEn": "Impossibility ('Cannot') — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Неможливість виражається запереченою формою допоміжного \"алу\" — \"алмау\" (не можу).",
            "en": {
              "text": "Impossibility is expressed with the negated form of the auxiliary \"алу\" — \"алмау\" (cannot)."
            }
          },
          {
            "type": "table",
            "title": "Можливість ↔ неможливість",
            "rows": [
              [
                "бара аламын",
                "бара алмаймын",
                "я можу піти / я не можу піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бүгін келе алмаймын.",
                "Сьогодні я не зможу прийти."
              ],
              [
                "Ол жүзе алмайды.",
                "Він не вміє плавати."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Ырықсыз етіс — B1",
        "titleEn": "Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -ыл/-іл/-л (після приголосного) чи -н (після голосного), приєднаним до основи дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -ыл/-іл/-л (after a consonant) or -н (after a vowel), attached to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "жазу (писати)",
                "жазылу",
                "бути написаним"
              ],
              [
                "көру (бачити)",
                "көріну",
                "бути побаченим"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл кітап көп оқылады.",
                "Цю книгу багато читають."
              ],
              [
                "Есік жабылды.",
                "Двері зачинені."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-voice",
        "title": "Өздік етіс (-ын) — B1",
        "titleEn": "Reflexive Voice (-Ын) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний стан показує, що дія спрямована на самого діяча, й утворюється суфіксом -ын/-ін, приєднаним безпосередньо до основи дієслова.",
            "en": {
              "text": "The reflexive voice shows the action is directed at the doer and is formed with the suffix -ын/-ін, attached directly to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Активний → зворотний",
            "rows": [
              [
                "жуу (мити)",
                "жуыну",
                "митися"
              ],
              [
                "кию (одягати)",
                "киіну",
                "одягатися"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен таңертең ерте жуынамын.",
                "Я вранці рано вмиваюся."
              ],
              [
                "Бала өзі киінеді.",
                "Дитина сама вдягається."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-voice",
        "title": "Ортақ етіс (-ыс) — B1",
        "titleEn": "Reciprocal Voice (-Ыс) — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємний стан показує спільну/взаємну дію двох чи більше учасників і утворюється суфіксом -ыс/-іс.",
            "en": {
              "text": "The reciprocal voice shows a mutual action between two or more participants and is formed with the suffix -ыс/-іс."
            }
          },
          {
            "type": "table",
            "title": "Активний → взаємний",
            "rows": [
              [
                "көру (бачити)",
                "көрісу",
                "зустрічатися/віталися"
              ],
              [
                "сөйлеу (говорити)",
                "сөйлесу",
                "розмовляти один з одним"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ертең көрісеміз.",
                "Завтра ми зустрінемося."
              ],
              [
                "Олар бір-бірімен сөйлеседі.",
                "Вони розмовляють одне з одним."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-voice",
        "title": "Өзгелік етіс (-дыр/-т) — B1",
        "titleEn": "Causative Voice (-Дыр/-Т) — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний (спонукальний) стан показує, що підмет змушує чи дозволяє комусь виконати дію, й утворюється суфіксами -дыр/-дір/-т/-тыр залежно від дієслова.",
            "en": {
              "text": "The causative voice shows that the subject makes or lets someone else perform the action, formed with the suffixes -дыр/-дір/-т/-тыр depending on the verb."
            }
          },
          {
            "type": "table",
            "title": "Активний → каузативний",
            "rows": [
              [
                "жазу (писати)",
                "жаздыру",
                "змусити написати"
              ],
              [
                "оқу (читати)",
                "оқыту",
                "навчати (змусити прочитати)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мұғалім оқушыға мәтін жаздырды.",
                "Вчитель змусив учня написати текст."
              ],
              [
                "Анам маған сүт іштірді.",
                "Мама дала мені випити молоко."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Салыстырмалы шырай — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь виражається вихідним відмінком порівнюваного об'єкта, найвищий — словом \"ең\" (\"найбільш\") перед прикметником.",
            "en": {
              "text": "The comparative is expressed with the ablative case of the compared object, and the superlative with \"ең\" (\"most\") before the adjective."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "үлкен (великий)",
                "одан үлкен",
                "ең үлкен"
              ],
              [
                "әдемі (гарний)",
                "одан әдемі",
                "ең әдемі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл үй одан үлкен.",
                "Цей дім більший за той дім."
              ],
              [
                "Алматы Қазақстандағы ең үлкен қала.",
                "Алмати — найбільше місто Казахстану."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Сын есімнің орналасуы — A2",
        "titleEn": "Adjective Order — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він описує, і не змінюється — незалежно від числа іменника.",
            "en": {
              "text": "An adjective always precedes the noun it describes and never changes — regardless of the noun's number."
            }
          },
          {
            "type": "table",
            "title": "Приклади порядку слів",
            "rows": [
              [
                "әдемі қыз",
                "гарна дівчина"
              ],
              [
                "үлкен үй",
                "великий дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Қызыл машина менікі.",
                "Червона машина моя."
              ],
              [
                "Кіші балалар бақшада ойнайды.",
                "Маленькі діти граються в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjectives-no-agreement",
        "title": "Сын есім өзгермейді — A1",
        "titleEn": "No Adjective-Noun Agreement — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від слов'янських мов, казахський прикметник має лише одну форму — він не узгоджується з іменником у числі чи роді.",
            "en": {
              "text": "Unlike Slavic languages, a Kazakh adjective has only one form — it does not agree with the noun in number or gender."
            }
          },
          {
            "type": "table",
            "title": "Однина ↔ множина, той самий прикметник",
            "rows": [
              [
                "әдемі қыз",
                "гарна дівчина"
              ],
              [
                "әдемі қыздар",
                "гарні дівчата (прикметник не змінився)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Жақсы адамдар барлық жерде бар.",
                "Хороші люди є всюди."
              ],
              [
                "Кіші ит үреді.",
                "Маленький пес гавкає."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Мөлшер үстеулері — A2",
        "titleEn": "Quantifiers — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "көп",
                "багато",
                "көп ақша"
              ],
              [
                "аз",
                "мало",
                "аз уақыт"
              ],
              [
                "әр",
                "кожен",
                "әр күн"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Көп адам келді.",
                "Прийшло багато людей."
              ],
              [
                "Мен әр күні жұмыс істеймін.",
                "Я працюю щодня."
              ]
            ]
          }
        ]
      },
      {
        "id": "izafet-compounds",
        "title": "Ізафет құрылымдары — B1",
        "titleEn": "Noun Compounds (İzafet) — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Ізафетна конструкція поєднує два іменники трьома способами: I тип (без суфіксів, як прикметник+іменник), II тип (перший іменник без суфікса, другий із присвійним суфіксом — родовий зв'язок за змістом), III тип (обидва іменники із суфіксами — точна належність).",
            "en": {
              "text": "The izafet construction joins two nouns three ways: Type I (no suffixes, like adjective+noun), Type II (first noun unmarked, second takes a possessive suffix — a generic link), Type III (both nouns take suffixes — exact possession)."
            }
          },
          {
            "type": "table",
            "title": "Три типи ізафету",
            "rows": [
              [
                "тас үй",
                "кам'яний дім",
                "I тип"
              ],
              [
                "кітап дүкені",
                "книжковий магазин",
                "II тип"
              ],
              [
                "Айгүлдің кітабы",
                "книга Айгуль",
                "III тип"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бала бөлмесі өте таза.",
                "Дитяча кімната дуже охайна."
              ],
              [
                "Анамның машинасы қызыл.",
                "Машина моєї мами червона."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-oz",
        "title": "Өздік есімдігі \"өз\" — A2",
        "titleEn": "Reflexive Pronoun: Өз — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"өз\" (сам, себе) приєднує присвійні суфікси й підсилює або замінює звичайний займенник, наголошуючи, що діяч і об'єкт дії — та сама особа.",
            "en": {
              "text": "The reflexive pronoun \"өз\" (self) takes possessive suffixes and either emphasizes or replaces the regular pronoun, stressing that the doer and object are the same person."
            }
          },
          {
            "type": "table",
            "title": "\"өз\" з присвійними суфіксами",
            "rows": [
              [
                "өз-ім",
                "я сам",
                "1 ос."
              ],
              [
                "өз-ің",
                "ти сам",
                "2 ос."
              ],
              [
                "өз-і",
                "він/вона сам(а)",
                "3 ос."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен өзім жасадым.",
                "Я сам це зробив."
              ],
              [
                "Ол өз үйін сатты.",
                "Він продав свій власний дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-pronoun-birbir",
        "title": "Өзара есімдігі \"бір-бірін\" — A2",
        "titleEn": "Reciprocal Pronoun: Бір-Бірін — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "\"Бір-бірін\" (\"один одного\") виражає взаємну дію між двома чи більше учасниками й відмінюється за відмінками як звичайний іменник.",
            "en": {
              "text": "\"Бір-бірін\" (\"one another\") expresses a mutual action between two or more participants and declines by case like a regular noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади відмінювання",
            "rows": [
              [
                "бір-бірін көру",
                "бачити один одного"
              ],
              [
                "бір-біріне көмектесу",
                "допомагати один одному"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Олар бір-бірін жақсы көреді.",
                "Вони дуже люблять одне одного."
              ],
              [
                "Біз бір-бірімізге көмектесеміз.",
                "Ми допомагаємо одне одному."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-basic",
        "title": "Жалғаулықтар — A1",
        "titleEn": "Basic Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "және",
                "і/та",
                "Мен және сен."
              ],
              [
                "бірақ",
                "але",
                "Қалаймын, бірақ болмайды."
              ],
              [
                "немесе",
                "або",
                "Шай немесе кофе?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Маған шай және кофе ұнайды.",
                "Мені подобається чай і кава."
              ],
              [
                "Барғым келеді, бірақ уақытым жоқ.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Бағыныңқы жалғаулықтар — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "себебі",
                "тому що",
                "Келмедім, себебі ауырдым."
              ],
              [
                "егер",
                "якщо",
                "Егер уақытың болса, қоңырау шал."
              ],
              [
                "сондықтан",
                "тому",
                "Ауырдым, сондықтан келмедім."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сен дұрыс дейсің деп ойлаймын.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Керек болса қаламын.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-general",
        "title": "Болымсыз етістік (-ма/-ме) — A1",
        "titleEn": "Verb Negation (-Ма/-Ме) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслова утворюється інфіксом -ма/-ме/-ба/-бе/-па/-пе перед закінченням часу й особи.",
            "en": {
              "text": "Verb negation is formed with the infix -ма/-ме/-ба/-бе/-па/-пе before the tense and person ending."
            }
          },
          {
            "type": "table",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "барамын (я йду)",
                "бармаймын (я не йду)",
                "-ма-"
              ],
              [
                "келеді (він приходить)",
                "келмейді (він не приходить)",
                "-ме-"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен қала алмаймын.",
                "Я не можу залишитися."
              ],
              [
                "Ол шай ішпейді.",
                "Він не п'є чаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-particle",
        "title": "Сұраулық шылау ма/ме/ба/бе — A1",
        "titleEn": "Question Particle Ма/Ме/Ба/Бе — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальна частка ма/ме/ба/бе/па/пе приєднується (окремим словом) до ключового слова речення за законом гармонії голосних, перетворюючи твердження на питання.",
            "en": {
              "text": "The question particle ма/ме/ба/бе/па/пе attaches (as a separate word) to the sentence's key word following vowel harmony, turning a statement into a question."
            }
          },
          {
            "type": "table",
            "title": "Твердження → питання",
            "rows": [
              [
                "Сен арықсың.",
                "Сен арықсың ба?",
                "Ти худий. / Ти худий?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сен келесің бе?",
                "Ти прийдеш?"
              ],
              [
                "Бұл дұрыс па?",
                "Це правильно?"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-details",
        "title": "Сөз тәртібінің егжей-тегжейі — A2",
        "titleEn": "Word Order Details — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча базовий порядок SOV, означення завжди стоїть перед означуваним словом, а порядок другорядних членів досить вільний завдяки відмінковим суфіксам.",
            "en": {
              "text": "Although the basic order is SOV, a modifier always precedes the word it modifies, and the order of secondary sentence parts is fairly flexible thanks to case suffixes."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Мен кітапты оқыдым.",
                "Я прочитав книгу.",
                "SOV"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ол маған хат жазды.",
                "Він написав мені листа."
              ],
              [
                "Біз ертең кездесеміз.",
                "Ми зустрінемося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "emphatic-particle-da-de",
        "title": "Күшейткіш шылау да/де — A2",
        "titleEn": "The Particle Да/Де ('Too, Also') — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Частка да/де/та/те пишеться окремо від слова, до якого відноситься, і означає \"теж, також\".",
            "en": {
              "text": "The particle да/де/та/те is written as a separate word after the word it modifies and means \"too, also\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "Мен де келемін.",
                "Я теж прийду."
              ],
              [
                "Ол да келісті.",
                "Він теж погодився."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сен де білесің.",
                "Ти теж знаєш."
              ],
              [
                "Мен де мұны қалаймын.",
                "Я теж цього хочу."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-register",
        "title": "Ресми және бейресми сөйлеу — A1",
        "titleEn": "Formal vs Informal Register — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"сен\" (2-га особа однини), для ввічливого чи звертання до кількох людей — \"сіз\" (2-га особа множини).",
            "en": {
              "text": "For informal address, Kazakh uses \"сен\" (2nd person singular); for polite or plural address, it uses \"сіз\" (2nd person plural)."
            }
          },
          {
            "type": "table",
            "title": "сен ↔ сіз",
            "rows": [
              [
                "Сен қалайсың?",
                "Як ти? (неформально)"
              ],
              [
                "Сіз қалайсыз?",
                "Як Ви? (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Отырыңыз, өтінемін.",
                "Прошу, сідайте (формально)."
              ],
              [
                "Рахмет!",
                "Дякую!"
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Кішірейту жұрнақтары — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -шы/-ша/-жан тощо і широко вживаються в повсякденному мовленні, виражаючи теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -шы/-ша/-жан and are widely used in everyday speech, expressing warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "Айгүл → Айгүлжан",
                "мила Айгуль",
                "-жан"
              ],
              [
                "қыз → қызша",
                "донечка",
                "-ша"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Айгүлжан, бері кел!",
                "Айгульжан, ходи сюди!"
              ],
              [
                "Балақайым, ұйықта.",
                "Дитинко, спи."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Сәлемдесу және жиі қолданылатын сөз тіркестері — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Сәлеметсіз бе.",
                "Здрастуйте."
              ],
              [
                "Рахмет.",
                "Дякую."
              ],
              [
                "Кешіріңіз.",
                "Вибачте."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Танысқаныма қуаныштымын.",
                "Приємно познайомитися."
              ],
              [
                "Көріскенше!",
                "До нових зустрічей!"
              ]
            ]
          }
        ]
      },
      {
        "id": "idioms-common-expressions",
        "title": "Мақал-мәтелдер мен тұрақты тіркестер — B1",
        "titleEn": "Idioms & Fixed Expressions — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Тілі жүйрік.",
                "(букв. язик прудкий) — він/вона красномовний(а)."
              ],
              [
                "Көзі жетті.",
                "(букв. очі досягли) — він/вона переконався(лась)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Оның тілі жүйрік.",
                "Він красномовний."
              ],
              [
                "Мен енді көзім жетті.",
                "Тепер я переконався."
              ]
            ]
          }
        ]
      },
      {
        "id": "collocations",
        "title": "Тұрақты сөз тіркестері — B1",
        "titleEn": "Common Collocations — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Поширені сполучення слів",
            "rows": [
              [
                "шешім қабылдау",
                "прийняти рішення"
              ],
              [
                "пікір білдіру",
                "висловити думку"
              ],
              [
                "көмек көрсету",
                "надати допомогу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мен шешім қабылдадым.",
                "Я вже прийняв рішення."
              ],
              [
                "Оған көмек көрсеттім.",
                "Я йому допоміг."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Сөзжасам жұрнақтары — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Казахська активно утворює нові слова додаванням словотворчих суфіксів: -шы/-ші (професія), -лық/-лік (абстрактне поняття), -сыз/-сіз (заперечення якості).",
            "en": {
              "text": "Kazakh actively derives new words with derivational suffixes: -шы/-ші (profession), -лық/-лік (abstract concept), -сыз/-сіз (lack of quality)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "балық (риба) → балықшы",
                "рибалка"
              ],
              [
                "дос (друг) → достық",
                "дружба"
              ],
              [
                "үй (дім) → үйсіз",
                "бездомний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Әкем мұғалім.",
                "Мій батько вчитель."
              ],
              [
                "Балалық шағымның естеліктері көп.",
                "У мене багато спогадів дитинства."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Болымсыздық есімдіктер — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники утворюються від питальних додаванням частки -дер/-дір (хтось, щось) і відмінюються так само, як вони.",
            "en": {
              "text": "Indefinite pronouns are formed from interrogatives with the particle -дер/-дір (someone, something) and decline the same way."
            }
          },
          {
            "type": "table",
            "title": "Питальний → неозначений",
            "rows": [
              [
                "кім → біреу",
                "хто → хтось"
              ],
              [
                "не → бірдеңе",
                "що → щось"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Біреу есікті қағып тұр.",
                "Хтось стукає у двері."
              ],
              [
                "Сұрақтарың бар ма?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-case-government",
        "title": "Сан есім мен зат есімнің тіркесуі — A2",
        "titleEn": "Numerals & Noun Agreement — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від слов'янських мов, після числівника в казахській іменник завжди залишається в однині — множина взагалі не додається, бо числівник уже показує кількість.",
            "en": {
              "text": "Unlike Slavic languages, after a numeral in Kazakh the noun always stays in the singular — the plural is never added, since the numeral already shows the quantity."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "бес кітап",
                "п'ять книг (однина, не *кітаптар)"
              ],
              [
                "үш адам",
                "три людини (однина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Менде бес кітап бар.",
                "У мене п'ять книг."
              ],
              [
                "Бөлмеде үш адам отыр.",
                "У кімнаті сидять три людини."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚡",
    "rules": [
      {
        "id": "irregular-verbs",
        "title": "Ерекше етістіктер — A2",
        "titleEn": "Irregular Verbs — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова \"болу\" (бути/ставати) і \"ету/қылу\" (робити) мають деякі неправильні чи скорочені форми та відіграють особливу роль як допоміжні дієслова в багатьох конструкціях.",
            "en": {
              "text": "The verbs \"болу\" (to be/become) and \"ету/қылу\" (to do) have some irregular or contracted forms and play a special role as auxiliaries in many constructions."
            }
          },
          {
            "type": "table",
            "title": "Особливі форми",
            "rows": [
              [
                "болу",
                "болды",
                "став/стало"
              ],
              [
                "ету",
                "етті",
                "зробив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ол дәрігер болды.",
                "Він став лікарем."
              ],
              [
                "Не істедің?",
                "Що ти зробив?"
              ]
            ]
          }
        ]
      },
      {
        "id": "cyrillic-latin-transition",
        "title": "Кириллицадан латын әліпбиіне көшу — B1",
        "titleEn": "Cyrillic-to-Latin Script Transition — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від турецької чи азербайджанської (давно латиничних), казахська досі переважно кириллична, але з 2021 року офіційно затверджений перехід на латиничний алфавіт, що поетапно триває — тому обидва письма можна зустріти паралельно ще довгі роки.",
            "en": {
              "text": "Unlike Turkish or Azerbaijani (Latin for decades), Kazakh is still predominantly Cyrillic, but a Latin-alphabet transition was officially approved in 2021 and is being phased in gradually — so both scripts will coexist for years to come."
            }
          },
          {
            "type": "table",
            "title": "Кириллиця ↔ новий латинський алфавіт",
            "rows": [
              [
                "сәлем",
                "sälem",
                "кирилиця / латиниця"
              ],
              [
                "қазақ",
                "qazaq",
                "кирилиця / латиниця"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Бұл мәтін кириллицамен жазылған.",
                "Цей текст написаний кирилицею."
              ],
              [
                "Латын әліпбиіне көшу жоспарланған.",
                "Заплановано перехід на латинський алфавіт."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-harmony-spelling",
        "title": "Қос үндестік жазу қиындығы — B1",
        "titleEn": "Double-Harmony Spelling Pitfalls — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки в казахській одночасно діють і гармонія голосних, і гармонія приголосних, той самий суфікс може мати аж вісім письмових варіантів залежно від основи — це найскладніша орфографічна пастка для тих, хто вивчає мову.",
            "en": {
              "text": "Because Kazakh has both vowel harmony and consonant harmony operating simultaneously, the same suffix can have up to eight written variants depending on the stem — this is the trickiest spelling pitfall for learners."
            }
          },
          {
            "type": "table",
            "title": "Вісім варіантів одного суфікса (місцевий відмінок)",
            "rows": [
              [
                "үй-де",
                "вдома",
                "передн., дзвінк."
              ],
              [
                "мектеп-те",
                "у школі",
                "передн., глух."
              ],
              [
                "қала-да",
                "у місті",
                "задн., дзвінк."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кітап шкафта тұр.",
                "Книга стоїть у шафі."
              ],
              [
                "Ол ауылда өмір сүреді.",
                "Він живе в селі."
              ]
            ]
          }
        ]
      }
    ]
  }
];
