// Vymova — data/grammar-data/grammar_kw.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KW: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Корнська вважалася вимерлою мовою з кінця XVIII століття, аж поки рух відродження XX століття не повернув її до життя.",
            "en": {
              "text": "Cornish was considered extinct from the late 18th century until a 20th-century revival movement brought it back to life."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "my"
              ],
              [
                "ти",
                "ty"
              ],
              [
                "він / вона",
                "ev / hi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "ви",
                "hwi"
              ],
              [
                "вони",
                "i"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "verb-bos",
        "title": "Bos — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Bos\" (бути) має дві форми теперішнього часу: коротку (звичний стан) і довшу описову (конкретна дія зараз) — розрізнення, спільне з іншими бритськими мовами.",
            "en": {
              "text": "\"Bos\" (to be) has two present-tense forms: a short one (habitual state) and a longer periphrastic one (specific action now) — a distinction shared with the other Brythonic languages."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час bos",
            "rows": [
              [
                "my a vydh",
                "я буваю (звичний стан)"
              ],
              [
                "yth esof vy",
                "я є (зараз, тут)"
              ],
              [
                "ty a vydh",
                "ти буваєш"
              ],
              [
                "ev yw",
                "він є"
              ]
            ],
            "en": {
              "title": "Present Tense of bos"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My yw dyskador.",
                "Я вчитель."
              ],
              [
                "Yth esof vy y'n chi.",
                "Я вдома (зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bos — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ny — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"ny\" (не) перед дієсловом, яка спричиняє леніцію (пом'якшення) наступного приголосного.",
            "en": {
              "text": "Negation is formed with the particle \"ny\" (not) before the verb, which triggers lenition (softening) of the following consonant."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "My yw dyskador.",
                "Ny'm yw dyskador.",
                "Я вчитель → я не вчитель"
              ],
              [
                "Ev a gar.",
                "Ny gar.",
                "Він любить → він не любить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nyns esof vy skwith.",
                "Я не втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ny — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання вводяться часткою \"a\" перед дієсловом (спричиняє леніцію); спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are introduced with the particle \"a\" before the verb (triggers lenition); wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "piw",
                "хто"
              ],
              [
                "pyth",
                "що"
              ],
              [
                "ple",
                "де"
              ],
              [
                "p'eur",
                "коли"
              ],
              [
                "prag",
                "чому"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Osta Kernowek?",
                "Ти корнець?"
              ],
              [
                "Ple trigys osta?",
                "Де ти живеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "mutation-system-intro",
        "title": "Чотиричленна система мутацій — A2",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гельських мов (ірландської, шотландської, мангської), де є лише один-два типи мутацій, бритські мови мають до чотирьох типів початкових мутацій — м'яку, носову, придихову й мішану.",
            "en": {
              "text": "Unlike the Goidelic languages (Irish, Scottish, Manx), which have only one or two mutation types, the Brythonic languages have up to four types of initial mutation — soft, nasal, aspirate, and mixed."
            }
          },
          {
            "type": "table",
            "title": "Приклади мутацій",
            "rows": [
              [
                "tas (батько) → dha das",
                "твій батько (м'яка мутація)"
              ],
              [
                "tas → ow thas",
                "мій батько (придихова мутація)"
              ]
            ],
            "en": {
              "title": "Mutation Examples"
            }
          }
        ],
        "titleEn": "The Four-Way Mutation System — A2"
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
        "id": "periphrastic-present",
        "title": "Описовий теперішній час — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Дію, що триває саме зараз, виражають \"esof/os/yw\" + \"ow\" + віддієслівний іменник — конструкція, паралельна ірландському \"ag\".",
            "en": {
              "text": "An action happening right now is expressed with \"esof/os/yw\" + \"ow\" + the verbal noun — a construction paralleling the Irish \"ag\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yth esof ow tybri.",
                "Я зараз їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Periphrastic Present — A1"
      },
      {
        "id": "habitual-present-synthetic",
        "title": "Звичний теперішній час — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Коротка синтетична форма дієслова (з часткою \"a\") виражає звичну, регулярну дію, окремо від описової конструкції.",
            "en": {
              "text": "The short synthetic verb form (with the particle \"a\") expresses a habitual, regular action, distinct from the periphrastic construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a wel an mor pub dydh.",
                "Я бачу море щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Habitual Present — A2"
      },
      {
        "id": "imperfect-tense",
        "title": "Імперфект — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект виражає тривалу чи звичну дію в минулому, утворену власним набором закінчень.",
            "en": {
              "text": "The imperfect expresses an ongoing or habitual past action, formed with its own set of endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yth esen vy ow tybri.",
                "Я їв (тоді, тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperfect Tense — A2"
      },
      {
        "id": "preterite-tense",
        "title": "Претерит (простий минулий) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Претерит виражає одноразову завершену дію в минулому, з власними синтетичними закінченнями.",
            "en": {
              "text": "The preterite expresses a single completed past action, with its own synthetic endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a glywas an nowodhow.",
                "Я почув новини."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Preterite Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Синтетичний майбутній час насправді збігається з формою звичного теперішнього — контекст розрізняє значення.",
            "en": {
              "text": "The synthetic future tense actually coincides with the habitual present form — context disambiguates the meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a vydh ena avorow.",
                "Я буду там завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється власним набором закінчень, доданих до основи дієслова.",
            "en": {
              "text": "The conditional is formed with its own set of endings added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a via lowen.",
                "Я був би радий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова; для множини додається -ewgh.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem; the plural adds -ewgh."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Ke!",
                "Йди!"
              ],
              [
                "Ewgh!",
                "Йдіть! (мн.)"
              ]
            ],
            "en": {
              "title": "Imperative"
            }
          }
        ],
        "titleEn": "The Imperative Mood — A2"
      },
      {
        "id": "autonomous-verb-form",
        "title": "Безособова форма — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість справжнього пасивного стану вживають безособову форму дієслова (закінчення -ys/-yr), яка не вказує на конкретного виконавця дії, подібно до ірландської автономної форми.",
            "en": {
              "text": "Instead of a true passive, an impersonal verb form is used (ending -ys/-yr), which doesn't specify a particular doer, similar to the Irish autonomous form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Y fydh an chi drehevys.",
                "Дім буде побудований. (безособова конструкція)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Autonomous (Impersonal) Form — B1"
      },
      {
        "id": "pluperfect-tense",
        "title": "Плюсквамперфект — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється допоміжним дієсловом \"bos\" у минулому часі + дієприкметник минулого часу.",
            "en": {
              "text": "The pluperfect is formed with the auxiliary \"bos\" in the past tense + the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yth esa ev gwelys kyns.",
                "Він уже був бачив це раніше."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pluperfect Tense — B1"
      },
      {
        "id": "subjunctive-mood",
        "title": "Підрядний спосіб — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядний спосіб вживається після дієслів бажання й у побажаннях, з власними закінченнями, відмінними від дійсного способу.",
            "en": {
              "text": "The subjunctive is used after verbs of wish and in blessings, with its own endings distinct from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bennath Dyw warnas!",
                "Хай благословить тебе Бог!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subjunctive Mood — B2"
      },
      {
        "id": "verbal-noun-infinitive",
        "title": "Віддієслівний іменник замість інфінітива — B1",
        "emoji": "📛",
        "sections": [
          {
            "type": "intro",
            "text": "В корнській немає окремого інфінітива: його роль виконує віддієслівний іменник, який ще й відмінюється як звичайний іменник у певних конструкціях.",
            "en": {
              "text": "Cornish has no separate infinitive: its role is filled by the verbal noun, which also declines like an ordinary noun in certain constructions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a vynn dybri.",
                "Я хочу їсти. (dybri = віддієслівний ім.)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verbal Noun instead of the Infinitive — B1"
      },
      {
        "id": "negative-preterite",
        "title": "Заперечення претерита — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення претерита вживає \"ny\" (не eclipsed форма \"nyns\" перед голосною) з леніцією дієслова, як і в теперішньому часі.",
            "en": {
              "text": "Negating the preterite uses \"ny\" (or \"nyns\" before a vowel) with lenition of the verb, just as in the present tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ny glywis travyth.",
                "Я нічого не почув."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Preterite — B1"
      },
      {
        "id": "focus-fronting-a-y",
        "title": "Фокусне висування з часток a/y — B2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли елемент речення (не підмет) виноситься на перше місце для наголосу, він вимагає частки \"a\" (пряме відношення) чи \"y\" (непряме) перед дієсловом — типова синтаксична риса бритських мов.",
            "en": {
              "text": "When a sentence element (not the subject) is fronted for emphasis, it requires the particle \"a\" (direct relation) or \"y\" (indirect) before the verb — a typical Brythonic syntactic trait."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "An lyver a wruga y dhastewynnya.",
                "Саме книгу я прочитав. (an lyver винесено з часткою a)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus-Fronting with a/y — B2"
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
        "id": "word-order-vso",
        "title": "Порядок слів VSO — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Нейтральний порядок слів — дієслово-підмет-додаток (VSO), як і в інших кельтських мовах, хоча фокусне висування (див. розділ часів) часто його змінює.",
            "en": {
              "text": "The neutral word order is verb-subject-object (VSO), as in the other Celtic languages, though focus-fronting (see the tense section) often changes it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a wel an mor.",
                "Я бачу море. (буквально \"я бачу море\" з часткою a)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "VSO Word Order — A2"
      },
      {
        "id": "soft-mutation-triggers",
        "title": "Тригери м'якої мутації — B1",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "М'яка мутація (найпоширеніша з чотирьох) спричиняється означеним артиклем перед іменниками жіночого роду, присвійними \"твій/його\" й багатьма іншими граматичними словами.",
            "en": {
              "text": "Soft mutation (the most common of the four) is triggered by the definite article before feminine nouns, the possessives \"your/his\", and many other grammatical words."
            }
          },
          {
            "type": "table",
            "title": "М'яка мутація",
            "rows": [
              [
                "tas (батько) → dha das",
                "твій батько (t→d)"
              ],
              [
                "mowes (дівчина) → an vowes",
                "дівчина (означений артикль перед ж.р., m→v)"
              ]
            ],
            "en": {
              "title": "Soft Mutation"
            }
          }
        ],
        "titleEn": "Soft Mutation Triggers — B1"
      },
      {
        "id": "nasal-mutation-triggers",
        "title": "Тригери носової мутації — B1",
        "emoji": "👃",
        "sections": [
          {
            "type": "intro",
            "text": "Носова мутація спричиняється присвійним \"мій\" і деякими прийменниками, змінюючи приголосний на носовий еквівалент.",
            "en": {
              "text": "Nasal mutation is triggered by the possessive \"my\" and some prepositions, changing the consonant to its nasal equivalent."
            }
          },
          {
            "type": "table",
            "title": "Носова мутація",
            "rows": [
              [
                "tas → ow nhas",
                "мій батько (t→nh, носова)"
              ]
            ]
          }
        ],
        "titleEn": "Nasal Mutation Triggers — B1"
      },
      {
        "id": "aspirate-mutation-triggers",
        "title": "Тригери придихової мутації — B1",
        "emoji": "💨",
        "sections": [
          {
            "type": "intro",
            "text": "Придихова (спірантна) мутація спричиняється присвійним \"мій\" (для деяких приголосних) і числівником \"три\" перед іменниками жіночого роду.",
            "en": {
              "text": "Aspirate (spirant) mutation is triggered by the possessive \"my\" (for certain consonants) and the number \"three\" before feminine nouns."
            }
          },
          {
            "type": "table",
            "title": "Придихова мутація",
            "rows": [
              [
                "tas → ow thas",
                "мій батько (t→th, придихова)"
              ]
            ]
          }
        ],
        "titleEn": "Aspirate Mutation Triggers — B1"
      },
      {
        "id": "mixed-mutation-triggers",
        "title": "Тригери мішаної мутації — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Мішана мутація — четвертий, найрідкісніший тип, що поєднує елементи придихової й м'якої мутацій, спричинений часткою заперечення \"ny\" для деяких приголосних.",
            "en": {
              "text": "Mixed mutation is the fourth, rarest type, combining elements of the aspirate and soft mutations, triggered by the negation particle \"ny\" for certain consonants."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі приголосні під \"ny\" мутують за окремою мішаною моделлю, відмінною від звичайної м'якої.",
                "четвертий тип мутації, унікальний для бритських мов"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mixed Mutation Triggers — B2"
      },
      {
        "id": "definite-article-an-no-indefinite",
        "title": "Артикль an і відсутність неозначеного — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль \"an\" однаковий для обох родів; окремого неозначеного артикля немає взагалі — гола форма іменника вже неозначена.",
            "en": {
              "text": "The definite article \"an\" is the same for both genders; there's no indefinite article at all — the bare noun form is already indefinite."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ki",
                "собака (якийсь)"
              ],
              [
                "an ki",
                "той собака"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Article an and No Indefinite Article — A1"
      },
      {
        "id": "plural-formation-classes",
        "title": "Класи множини — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома непередбачуваними закінченнями (-ow, -yon, -i) залежно від класу іменника — клас конкретного слова слід запам'ятовувати.",
            "en": {
              "text": "The plural is formed with several unpredictable endings (-ow, -yon, -i) depending on the noun class — the class of a specific word must be memorized."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "chi → chiow",
                "доми"
              ],
              [
                "Kernow → Kernowyon",
                "корнці"
              ]
            ],
            "en": {
              "title": "Plural Examples"
            }
          }
        ],
        "titleEn": "Plural Noun Classes — B1"
      },
      {
        "id": "umlaut-plurals",
        "title": "Множина з умлаутом — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька поширених іменників утворюють множину не закінченням, а зміною кореневого голосного (умлаутом), успадкованою з давньобритської.",
            "en": {
              "text": "A few common nouns form the plural not with an ending but with a root vowel change (umlaut), inherited from Old Brythonic."
            }
          },
          {
            "type": "table",
            "title": "bran → brini",
            "rows": [
              [
                "bran (ворона) → brini",
                "ворони (умлаут a→i)"
              ]
            ]
          }
        ],
        "titleEn": "Umlaut Plurals — B2"
      },
      {
        "id": "comparative-degree",
        "title": "Порівняльний ступінь — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється закінченням -a, доданим до прикметника.",
            "en": {
              "text": "The comparative is formed with the ending -a added to the adjective."
            }
          },
          {
            "type": "table",
            "title": "bras → brassa",
            "rows": [
              [
                "bras (великий) → brassa",
                "більший"
              ]
            ]
          }
        ],
        "titleEn": "The Comparative Degree — A2"
      },
      {
        "id": "superlative-degree",
        "title": "Найвищий ступінь — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється закінченням -a разом із означеним артиклем.",
            "en": {
              "text": "The superlative is formed with the -a ending together with the definite article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "an brassa",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative Degree — A2"
      },
      {
        "id": "possessive-pronouns-mutation",
        "title": "Присвійні займенники й мутація — A2",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен присвійний займенник спричиняє свою мутацію: \"dha\" (твій) — м'яку, \"ow\" (мій) — носову чи придихову залежно від приголосного, \"y\" (його) — м'яку.",
            "en": {
              "text": "Each possessive triggers its own mutation: \"dha\" (your) — soft, \"ow\" (my) — nasal or aspirate depending on the consonant, \"y\" (his) — soft."
            }
          },
          {
            "type": "table",
            "title": "dha, ow, y",
            "rows": [
              [
                "dha das (твій батько, м'яка)",
                "твій батько"
              ],
              [
                "ow thas (мій батько, придихова)",
                "мій батько"
              ]
            ],
            "en": {
              "title": "dha, ow, y"
            }
          }
        ],
        "titleEn": "Possessive Pronouns and Mutation — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівність виражається означеним іменником + \"ma\" (цей) чи \"na\" (той) після нього.",
            "en": {
              "text": "Demonstrative meaning is expressed with the definite noun + \"ma\" (this) or \"na\" (that) after it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "an lyver ma",
                "ця книга"
              ],
              [
                "an lyver na",
                "та книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-clause-a-na",
        "title": "Відносні частки a/na — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Стверджувальне відносне речення вводиться часткою \"a\" (спричиняє леніцію), заперечне — \"na\" — окремі частки залежно від полярності підрядного речення.",
            "en": {
              "text": "An affirmative relative clause is introduced with the particle \"a\" (triggers lenition), a negative one with \"na\" — separate particles depending on the subordinate clause's polarity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "An den a wruga dos.",
                "Чоловік, що прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Particles a/na — B1"
      },
      {
        "id": "prepositional-pronouns",
        "title": "Прийменникові займенники — A2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і особовий займенник зливаються в одну відмінювану форму, як і в інших кельтських мовах.",
            "en": {
              "text": "A preposition and personal pronoun fuse into a single inflected form, as in the other Celtic languages."
            }
          },
          {
            "type": "table",
            "title": "gans (з) + займенник",
            "rows": [
              [
                "genev",
                "зі мною"
              ],
              [
                "genes",
                "з тобою"
              ]
            ],
            "en": {
              "title": "gans (with) + pronoun"
            }
          }
        ],
        "titleEn": "Prepositional Pronouns — A2"
      },
      {
        "id": "possession-bos-gans",
        "title": "Присвійність через bos...gans — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Немає дієслова \"мати\": володіння виражається конструкцією \"X yw gans Y\" — буквально \"X є з Y\".",
            "en": {
              "text": "There's no verb \"to have\": possession is expressed with \"X yw gans Y\" — literally \"X is with Y\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ki yw genev.",
                "У мене є собака."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via bos...gans — A1"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники, як і в інших кельтських мовах, часто спричиняють мутацію наступного іменника.",
            "en": {
              "text": "Numerals, as in the other Celtic languages, often trigger mutation of the following noun."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "onan",
                "один"
              ],
              [
                "dew/diw",
                "два (ч./ж.р.)"
              ],
              [
                "pymp",
                "п'ять"
              ],
              [
                "deg",
                "десять"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Numbers 1-10 — A1"
      },
      {
        "id": "vigesimal-numbers",
        "title": "Двадцяткова система великих чисел — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в інших кельтських мовах, великі числа традиційно рахують на основі 20 (ugens), а не 10.",
            "en": {
              "text": "As in the other Celtic languages, large numbers are traditionally counted on a base of 20 (ugens), not 10."
            }
          },
          {
            "type": "table",
            "title": "ugens-система",
            "rows": [
              [
                "ugens (20)",
                "20"
              ],
              [
                "deugens (2×20=40)",
                "40"
              ]
            ],
            "en": {
              "title": "The ugens (20) System"
            }
          }
        ],
        "titleEn": "The Vigesimal Number System — B1"
      },
      {
        "id": "adjective-position",
        "title": "Позиція прикметника — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прикметників стоїть після іменника й може отримувати леніцію після жіночого роду.",
            "en": {
              "text": "Most adjectives stand after the noun and can take lenition after feminine nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chi bras",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position — A2"
      },
      {
        "id": "interrogative-declension",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Piw\" (хто) вживається для людей, \"pyth\" (що) — для предметів.",
            "en": {
              "text": "\"Piw\" (who) is used for people, \"pyth\" (what) for things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Piw yw ev?",
                "Хто він?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Interrogative Pronouns — A1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Основні сполучники з'єднують слова й речення без зміни порядку слів.",
            "en": {
              "text": "Basic conjunctions link words and sentences without changing word order."
            }
          },
          {
            "type": "table",
            "title": "ha / mes / rag",
            "rows": [
              [
                "ha",
                "і"
              ],
              [
                "mes",
                "але"
              ],
              [
                "rag",
                "тому що"
              ]
            ],
            "en": {
              "title": "ha / mes / rag"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують прикметник-префікс з іменником, причому префікс спричиняє мутацію.",
            "en": {
              "text": "Compound words often join a prefixed adjective with a noun, with the prefix triggering mutation."
            }
          },
          {
            "type": "table",
            "title": "hen + chi",
            "rows": [
              [
                "hen (старий) + chi (дім) = hensi",
                "старий дім (приклад складання)"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "vocative-particle",
        "title": "Кличний вигук — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання часто супроводжується часткою \"a\" перед іменем, яка спричиняє леніцію, як і в інших кельтських мовах.",
            "en": {
              "text": "Direct address is often accompanied by the particle \"a\" before the name, which triggers lenition, as in the other Celtic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A Jori!",
                "Джорджі!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative Particle — A2"
      },
      {
        "id": "reflexive-y-honan",
        "title": "Зворотність через honan — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається присвійним + словом \"honan\" (сам/себе), подібно до валлійського й бретонського.",
            "en": {
              "text": "Reflexivity is expressed with the possessive + the word \"honan\" (self), similar to Welsh and Breton."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ev a wrug y wonis y honan.",
                "Він поранив себе (свій сам)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexivity via honan — B1"
      },
      {
        "id": "dual-body-parts",
        "title": "Двоїна для парних частин тіла — B1",
        "emoji": "👀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька застиглих форм двоїни (успадкованих з давньобритської) досі вживають для природно парних частин тіла — очей, рук, вух.",
            "en": {
              "text": "A few frozen dual forms (inherited from Old Brythonic) are still used for naturally paired body parts — eyes, hands, ears."
            }
          },
          {
            "type": "table",
            "title": "dewlin",
            "rows": [
              [
                "dewlin (обидва коліна, двоїна)",
                "коліна (двоїна)"
              ]
            ]
          }
        ],
        "titleEn": "Dual Forms for Paired Body Parts — B1"
      },
      {
        "id": "verbal-noun-as-gerund",
        "title": "Віддієслівний іменник як герундій — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий віддієслівний іменник, що заміняє інфінітив, також вживається як герундій після прийменника \"orth\" для тривалої дії.",
            "en": {
              "text": "The same verbal noun that replaces the infinitive is also used as a gerund after the preposition \"orth\" for an ongoing action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ow tybri (те саме tybri у двох ролях)",
                "їдучи/про їжу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verbal Noun as Gerund — B1"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (mar) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mar\" (якщо) вводить умовне речення, часто з леніцією наступного дієслова.",
            "en": {
              "text": "\"Mar\" (if) introduces a conditional sentence, often with lenition of the following verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mar pe ow bos an eur, my a via lowen.",
                "Якби я мав час, я був би радий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (mar) — B1"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня переважно пов'язані з небесними тілами й давньоскандинавськими/латинськими богами, подібно до інших європейських мов.",
            "en": {
              "text": "The days of the week are mostly tied to celestial bodies and Norse/Latin gods, similar to other European languages."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "dy' Lun",
                "понеділок"
              ],
              [
                "dy' Merth",
                "вівторок"
              ],
              [
                "dy' Sul",
                "неділя"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months",
        "title": "Місяці — A1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Назви місяців переважно запозичені з латини, подібно до більшості європейських мов.",
            "en": {
              "text": "Month names are mostly borrowed from Latin, like most European languages."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Genver",
                "січень"
              ],
              [
                "Me",
                "травень"
              ],
              [
                "Est",
                "серпень"
              ]
            ],
            "en": {
              "title": "Months"
            }
          }
        ],
        "titleEn": "Months — A1"
      },
      {
        "id": "telling-time",
        "title": "Називання часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час запитують \"Py eur yw hi?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"Py eur yw hi?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Try eur yw hi.",
                "Зараз третя година."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "colors",
        "title": "Кольори — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кольори — звичайні прикметники, що стоять після іменника й можуть отримувати мутацію.",
            "en": {
              "text": "Colors are ordinary adjectives that follow the noun and can take mutation."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "gwynn",
                "білий"
              ],
              [
                "du",
                "чорний"
              ],
              [
                "rudh",
                "червоний"
              ]
            ],
            "en": {
              "title": "Colors"
            }
          }
        ],
        "titleEn": "Colors — A1"
      },
      {
        "id": "family-terms",
        "title": "Родинні терміни — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни — звичайні іменники, часто вимагають мутації після присвійних займенників.",
            "en": {
              "text": "Kinship terms are ordinary nouns, often taking mutation after possessives."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "mamm",
                "мати"
              ],
              [
                "tas",
                "батько"
              ],
              [
                "hwoer",
                "сестра"
              ],
              [
                "broder",
                "брат"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family Terms — A1"
      },
      {
        "id": "greetings",
        "title": "Привітання — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "\"Fatla genes?\" (як справи?) — стандартне привітання, відповідь на яке — \"Yn poynt da\" (добре).",
            "en": {
              "text": "\"Fatla genes?\" (how are you?) is the standard greeting, answered with \"Yn poynt da\" (well)."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Dydh da!",
                "Добрий день!"
              ],
              [
                "Dyw genes!",
                "Прощавай!"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду часто описують безособовими конструкціями з дієсловом bos.",
            "en": {
              "text": "Weather is often described with impersonal constructions using the verb bos."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yth usi glaw ow kul.",
                "Йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Weather Expressions — A1"
      },
      {
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла часто мають властивий рід, деякі — застиглу форму двоїни (див. розділ граматики).",
            "en": {
              "text": "Body parts often have an inherent gender, some with a frozen dual form (see the grammar section)."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "dorn",
                "рука"
              ],
              [
                "penn",
                "голова"
              ],
              [
                "troos",
                "нога"
              ]
            ],
            "en": {
              "title": "Body Parts"
            }
          }
        ],
        "titleEn": "Body Parts — A1"
      },
      {
        "id": "age-expressions",
        "title": "Вираження віку — A1",
        "emoji": "🎂",
        "sections": [
          {
            "type": "intro",
            "text": "Вік виражають конструкцією \"bloedh yw X\" (X-річний).",
            "en": {
              "text": "Age is expressed with \"bloedh yw X\" (X years old)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ugens bloedh ov.",
                "Мені двадцять років."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Age Expressions — A1"
      },
      {
        "id": "revival-without-recordings",
        "title": "Відродження без аудіозаписів — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від мангської, чиє відродження спиралося на аудіозаписи останніх носіїв, корнська вимерла (традиційно пов'язують зі смертю Доллі Пентріт 1777 р.) задовго до винаходу звукозапису — сучасну вимову довелося повністю реконструювати з писемних текстів XIV-XVIII ст.",
            "en": {
              "text": "Unlike Manx, whose revival relied on audio recordings of the last native speakers, Cornish went extinct (traditionally linked to the death of Dolly Pentreath in 1777) long before sound recording existed — modern pronunciation had to be entirely reconstructed from written texts spanning the 14th-18th centuries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Генрі Дженнер розпочав рух відродження 1904 р. на основі рукописів середньокорнських містерій.",
                "реконструкція виключно з писемних джерел, без жодного живого мовця для звірки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Revival without Audio Recordings — B2"
      },
      {
        "id": "orthography-wars",
        "title": "Орфографічні \"війни\" — B2",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Протягом XX ст. конкурувало кілька несумісних систем правопису (Уніфікована, Кемін, Модерна) через відсутність єдиного історичного стандарту; лише 2008 р. громада узгодила компромісну \"Стандартну письмову форму\" для офіційного вжитку.",
            "en": {
              "text": "Throughout the 20th century, several incompatible spelling systems competed (Unified, Kemmyn, Modern) due to the lack of a single historical standard; only in 2008 did the community agree on a compromise \"Standard Written Form\" for official use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Те саме слово могло писатися трьома різними способами залежно від обраної системи до 2008 р.",
                "унікальна для мовного відродження суперечка про саме написання"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Orthography Wars — B2"
      },
      {
        "id": "surviving-placenames",
        "title": "Топоніми, що пережили мову — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча корнська мова вимерла на кілька поколінь, тисячі корнських топонімів (з характерними префіксами Tre-, Pol-, Pen-) вижили в англомовному вжитку й досі вкривають карту Корнволлу.",
            "en": {
              "text": "Although Cornish went extinct for several generations, thousands of Cornish place names (with the telltale prefixes Tre-, Pol-, Pen-) survived in English usage and still cover the map of Cornwall today."
            }
          },
          {
            "type": "table",
            "title": "Топонімні префікси",
            "rows": [
              [
                "Tre- (садиба)",
                "Trevose, Tregonning"
              ],
              [
                "Pol- (ставок)",
                "Polzeath"
              ],
              [
                "Pen- (мис/голова)",
                "Penzance"
              ]
            ],
            "en": {
              "title": "Place-Name Prefixes"
            }
          }
        ],
        "titleEn": "Place Names that Outlived the Language — B1"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mar pleg\" (будь ласка) буквально означає \"якщо це подобається\", підкреслюючи ввічливість через непряму умовну конструкцію.",
            "en": {
              "text": "\"Mar pleg\" (please) literally means \"if it pleases\", emphasizing politeness through an indirect conditional construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kanna ta, mar pleg.",
                "Допоможи мені, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness — A2"
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію незалежно від структури речення.",
            "en": {
              "text": "Interjections express an emotional reaction independent of sentence structure."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Ogh!",
                "Ой!/Овва!"
              ],
              [
                "Meur ras!",
                "Дякую!"
              ]
            ],
            "en": {
              "title": "Common Interjections"
            }
          }
        ],
        "titleEn": "Interjections — A2"
      },
      {
        "id": "english-loanword-adaptation",
        "title": "Адаптація англійських запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасні поняття, яких не існувало в історичних текстах, часто утворюють з питомих коренів (за прикладом валлійського мовного пуризму) замість прямого запозичення з англійської.",
            "en": {
              "text": "Modern concepts not found in historical texts are often coined from native roots (following the Welsh model of linguistic purism) rather than borrowed directly from English."
            }
          },
          {
            "type": "table",
            "title": "Приклади неологізмів",
            "rows": [
              [
                "jynn-amontya",
                "комп'ютер (буквально \"рахувальна машина\")"
              ]
            ],
            "en": {
              "title": "Neologism Examples"
            }
          }
        ],
        "titleEn": "Adapting English Loanwords — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Корнські ідіоми часто спираються на море й гірничу справу — центральні елементи традиційного життя Корнволлу.",
            "en": {
              "text": "Cornish idioms often draw on the sea and mining — central elements of traditional Cornish life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kernow bys vykken!",
                "Корнволл навіки! (девіз корнської ідентичності)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Common Idioms — B1"
      },
      {
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-19 утворюються поєднанням десяти з одиницею.",
            "en": {
              "text": "Numbers 11-19 are formed by combining ten with the unit."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "unnek",
                "одинадцять"
              ],
              [
                "ugens",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers 11-19"
            }
          }
        ],
        "titleEn": "Numbers from 11 On — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником і мають кілька неправильних форм на початку ряду.",
            "en": {
              "text": "Ordinal numbers agree with the noun and have a few irregular forms at the start of the sequence."
            }
          },
          {
            "type": "table",
            "title": "kynsa, nessa, tressa",
            "rows": [
              [
                "kynsa",
                "перший"
              ],
              [
                "nessa",
                "другий"
              ],
              [
                "tressa",
                "третій"
              ]
            ],
            "en": {
              "title": "kynsa, nessa, tressa"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Nebonan\" (хтось) і \"neppyth\" (щось) — базові неозначені займенники.",
            "en": {
              "text": "\"Nebonan\" (someone) and \"neppyth\" (something) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nebonan a elwis.",
                "Хтось дзвонив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Pronouns — A2"
      },
      {
        "id": "negative-polarity",
        "title": "Заперечні вирази — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Denvyth\" (ніхто) і \"travyth\" (нічого) вживаються лише в заперечному контексті.",
            "en": {
              "text": "\"Denvyth\" (no one) and \"travyth\" (nothing) are used only in negative contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ny welis denvyth.",
                "Я нікого не бачив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Polarity Expressions — B1"
      },
      {
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"nyns yw?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"nyns yw?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Teg yw an gewer hedhyw, nyns yw?",
                "Гарна сьогодні погода, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tag Questions — B1"
      },
      {
        "id": "purpose-clause",
        "title": "Цільове підрядне (rag) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Rag\" + віддієслівний іменник вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"Rag\" + verbal noun introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a dhyskas Kernowek rag kewsel gans ow tas-gwynn.",
                "Я вивчив корнську, щоб розмовляти з дідом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (rag) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (drefen) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Drefen\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Drefen\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My a hwedhas drefen my dhe gelli an bus.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (drefen) — A2"
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
        "title": "Неправильні дієслова — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (bos-бути, mos-йти, dos-приходити, gul-робити) мають суплетивні основи, які слід вивчати окремо.",
            "en": {
              "text": "A few common verbs (bos-to be, mos-to go, dos-to come, gul-to do) have suppletive stems that must be learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "mos (йти) → eth",
                "минулий час не за жодним стандартним правилом"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "mutation-exceptions",
        "title": "Винятки в мутаціях — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Не всі приголосні мутують за загальним правилом: деякі позичені звуки (наприклад, з англійської) блокують мутацію, а слова, запозичені пізніше, часто зберігають свою початкову форму незмінною.",
            "en": {
              "text": "Not all consonants mutate by the general rule: some borrowed sounds (e.g. from English) block mutation, and later loanwords often keep their initial form unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі сучасні запозичення не мутують так, як питомі слова з тим самим початковим приголосним.",
                "фонологічний виняток, характерний для мов з активним словотворенням неологізмів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Exceptions in Mutation Rules — B2"
      },
      {
        "id": "fixed-reconstructed-expressions",
        "title": "Застиглі реконструйовані вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені фрази походять безпосередньо з середньокорнських релігійних п'єс (misyon dramas) і зберігають архаїчну граматику XV ст., яку рух відродження свідомо не осучаснив.",
            "en": {
              "text": "Some common phrases come directly from Middle Cornish religious plays (miracle dramas) and preserve archaic 15th-century grammar that the revival movement deliberately didn't modernize."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bennath Dyw warnas!",
                "Хай благословить тебе Бог! (архаїчна конструкція з середньокорнських текстів)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Reconstructed Expressions — B2"
      }
    ]
  }
];
