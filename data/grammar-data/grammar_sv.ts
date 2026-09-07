// Vymova — data/grammar-data/grammar_sv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SV: GrammarCategory[] = [
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
            "text": "Шведські дієслова не змінюються за особами чи числом — форма дієслова однакова для jag, du, han тощо.",
            "en": {
              "text": "Swedish verbs never change for person or number — the verb form is identical for jag, du, han, and so on."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "jag",
                "я"
              ],
              [
                "du",
                "ти"
              ],
              [
                "han / hon / den / det",
                "він / вона / воно"
              ],
              [
                "vi",
                "ми"
              ],
              [
                "de",
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
                "Jag är lärare.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"att vara\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"vara\" (бути) має ЄДИНУ форму теперішнього часу — är — для всіх осіб та чисел.",
            "en": {
              "text": "The verb \"vara\" (to be) has just ONE present-tense form — är — for every person and number."
            }
          },
          {
            "type": "formula",
            "title": "\"vara\" (бути) — єдина форма",
            "rows": [
              [
                "jag",
                "är",
                "я є"
              ],
              [
                "du",
                "är",
                "ти є"
              ],
              [
                "han / hon / den / det",
                "är",
                "він/вона/воно є"
              ],
              [
                "vi",
                "är",
                "ми є"
              ],
              [
                "de",
                "är",
                "вони є"
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
                "De är trötta.",
                "Вони втомлені."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Att Vara (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"inte\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від українського \"не\" перед дієсловом, заперечна частка inte в шведській ставиться ПІСЛЯ дієслова.",
            "en": {
              "text": "Unlike Ukrainian's pre-verbal negation, the negative particle inte in Swedish comes AFTER the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Jag vet det.",
                "Jag vet det inte.",
                "Я це знаю. / Я цього не знаю."
              ],
              [
                "Han kommer.",
                "Han kommer inte.",
                "Він приходить. / Він не приходить."
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
                "Han kommer inte.",
                "Він не прийде."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Inte — A1"
      },
      {
        "id": "questions",
        "title": "Питання — інверсія — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються перестановкою дієслова перед підметом (інверсія), без додаткових допоміжних слів.",
            "en": {
              "text": "Yes/no questions are formed by moving the verb before the subject (inversion), with no extra auxiliary word needed."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Du är trött.",
                "Är du trött?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Du har tid.",
                "Har du tid?",
                "У тебе є час. / У тебе є час?"
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
                "Har du tid?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Inversion — A1"
      },
      {
        "id": "suffixed-article",
        "title": "Артикль-суфікс — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль у шведській зазвичай приєднується як суфікс в кінці іменника, а не окремим словом перед ним.",
            "en": {
              "text": "The definite article in Swedish is usually attached as a suffix at the end of the noun, rather than as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bok → boken",
                "книга → ця книга"
              ],
              [
                "ett hus → huset",
                "дім → цей дім"
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
                "Boken är bra.",
                "Ця книга хороша."
              ]
            ]
          }
        ],
        "titleEn": "The Suffixed Article — A1"
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
        "title": "Presens (nutid) — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Шведське дієслово в теперішньому часі має ЄДИНУ форму для всіх осіб і чисел — зазвичай закінчення -r додається до основи інфінітива.",
            "en": {
              "text": "A Swedish verb has a SINGLE present-tense form for every person and number — usually the ending -r is added to the infinitive stem."
            }
          },
          {
            "type": "formula",
            "title": "\"att jobba\" (працювати) — presens",
            "rows": [
              [
                "jag",
                "jobbar",
                "я працюю"
              ],
              [
                "du",
                "jobbar",
                "ти працюєш"
              ],
              [
                "han / hon",
                "jobbar",
                "він/вона працює"
              ],
              [
                "vi",
                "jobbar",
                "ми працюємо"
              ],
              [
                "de",
                "jobbar",
                "вони працюють"
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
                "Jag jobbar på en bank.",
                "Я працюю в банку."
              ],
              [
                "De dricker kaffe.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Preteritum (dåtid) — A1",
        "titleEn": "Past Tense — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час, як і теперішній, має єдину форму для всіх осіб. Слабкі дієслова додають -ade/-de/-te, сильні дієслова змінюють кореневий голосний.",
            "en": {
              "text": "The past tense, like the present, has a single form for every person. Weak verbs add -ade/-de/-te; strong verbs change the root vowel."
            }
          },
          {
            "type": "table",
            "title": "Слабкі vs сильні дієслова",
            "rows": [
              [
                "jobba → jobbade",
                "працював",
                "слабке"
              ],
              [
                "läsa → läste",
                "читав",
                "слабке"
              ],
              [
                "sjunga → sjöng",
                "співав",
                "сильне (зміна голосного)"
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
                "Jag jobbade hela dagen.",
                "Я працював весь день."
              ],
              [
                "Han sjöng en sång.",
                "Він заспівав пісню."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "Perfekt — A2",
        "titleEn": "Present Perfect — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний теперішній утворюється дієсловом \"har\" (мати) + дієприкметник минулого часу й описує дію, що завершилась і має зв'язок із теперішнім.",
            "en": {
              "text": "The present perfect is formed with \"har\" (to have) plus the past participle and describes a completed action relevant to the present."
            }
          },
          {
            "type": "formula",
            "title": "\"har\" + дієприкметник",
            "rows": [
              [
                "jag",
                "har jobbat",
                "я попрацював"
              ],
              [
                "du",
                "har sett",
                "ти побачив"
              ],
              [
                "han",
                "har ätit",
                "він поїв"
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
                "Jag har redan ätit.",
                "Я вже поїв."
              ],
              [
                "Har du sett den filmen?",
                "Ти бачив цей фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "Pluskvamperfekt — B1",
        "titleEn": "Past Perfect — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час виражає дію, що відбулася раніше за іншу минулу дію. Утворюється \"hade\" + дієприкметник минулого часу.",
            "en": {
              "text": "The past perfect expresses an action that happened before another past action. Formed with \"hade\" plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "har ätit",
                "hade ätit",
                "поїв (тепер) / вже поїв (до того)"
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
                "Jag hade redan ätit när han kom.",
                "Я вже поїв, коли він прийшов."
              ],
              [
                "Hon hade glömt sitt paraply.",
                "Вона забула свою парасольку (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-ska",
        "title": "Framtid med \"ska\" — A2",
        "titleEn": "Future with Ska — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ska\" + інфінітив — найуживаніший спосіб виразити майбутнє: заплановану дію, намір чи обіцянку.",
            "en": {
              "text": "\"Ska\" plus the infinitive is the most common way to express the future: a planned action, intention, or promise."
            }
          },
          {
            "type": "formula",
            "title": "\"ska\" + інфінітив",
            "rows": [
              [
                "jag",
                "ska resa",
                "я поїду"
              ],
              [
                "du",
                "ska komma",
                "ти прийдеш"
              ],
              [
                "vi",
                "ska mötas",
                "ми зустрінемося"
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
                "Jag ska resa till Italien.",
                "Я поїду до Італії."
              ],
              [
                "Vi ska mötas klockan tio.",
                "Ми зустрінемося о десятій."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-kommer-att",
        "title": "Framtid med \"kommer att\" — A2",
        "titleEn": "Future with Kommer Att — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kommer att\" + інфінітив виражає прогноз чи природний перебіг подій, а не намір чи план — нейтральніший варіант за \"ska\".",
            "en": {
              "text": "\"Kommer att\" plus the infinitive expresses a prediction or the natural course of events, rather than intention or a plan — a more neutral option than \"ska\"."
            }
          },
          {
            "type": "table",
            "title": "ska ↔ kommer att",
            "rows": [
              [
                "Jag ska resa.",
                "Я поїду (заплановано).",
                "ska"
              ],
              [
                "Det kommer att regna.",
                "Буде дощ (прогноз).",
                "kommer att"
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
                "Hon kommer att bli trött.",
                "Вона втомиться."
              ],
              [
                "Priserna kommer att stiga.",
                "Ціни зростуть."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Imperativ — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — це просто основа дієслова (інфінітив без -a), одна форма для всіх, без займенника.",
            "en": {
              "text": "The imperative is simply the verb stem (the infinitive minus -a), one form for everyone, with no pronoun."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив → наказовий",
            "rows": [
              [
                "att stänga → Stäng!",
                "Закрий!"
              ],
              [
                "att komma → Kom!",
                "Приходь!"
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
                "Stäng dörren, tack.",
                "Зачини двері, будь ласка."
              ],
              [
                "Skynda dig!",
                "Поспіши!"
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-s",
        "title": "S-passiv — B1",
        "titleEn": "S-Passive — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дуже характерна для скандинавських мов пасивна форма утворюється просто додаванням -s до дієслова, без допоміжного дієслова.",
            "en": {
              "text": "A form very characteristic of Scandinavian languages, the passive is formed simply by adding -s to the verb, with no auxiliary needed."
            }
          },
          {
            "type": "table",
            "title": "Активний → s-пасив",
            "rows": [
              [
                "bygger (будує)",
                "byggs (будується)",
                "теперішній час"
              ],
              [
                "skrev (написав)",
                "skrevs (був написаний)",
                "минулий час"
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
                "Huset byggs i år.",
                "Будинок будується цього року."
              ],
              [
                "Dörren öppnas klockan nio.",
                "Двері відчиняються о дев'ятій."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-bli",
        "title": "Bli-passiv — B1",
        "titleEn": "Bli-Passive — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Другий тип пасиву утворюється дієсловом \"bli\" (ставати) + дієприкметник минулого часу й підкреслює саму подію (процес), а не стан.",
            "en": {
              "text": "The second passive type is formed with \"bli\" (to become) plus the past participle and emphasizes the event itself (a process) rather than a state."
            }
          },
          {
            "type": "table",
            "title": "s-пасив vs bli-пасив",
            "rows": [
              [
                "Huset byggs.",
                "Будинок будується (загалом).",
                "s-пасив"
              ],
              [
                "Huset blir byggt.",
                "Будинок будується (зараз, процес).",
                "bli-пасив"
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
                "Boken blev skriven av en känd författare.",
                "Книгу написав відомий автор."
              ],
              [
                "Han blev inbjuden till festen.",
                "Його запросили на вечірку."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Modala verb — A2",
        "titleEn": "Modal Verbs — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kunna, skola, vilja, måste, böra) поєднуються з інфінітивом БЕЗ частки \"att\" — на відміну від звичайних дієслів.",
            "en": {
              "text": "Modal verbs (kunna, skola, vilja, måste, böra) combine with the infinitive WITHOUT the particle \"att\" — unlike ordinary verbs."
            }
          },
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "kunna",
                "могти",
                "Jag kan simma."
              ],
              [
                "måste",
                "мусити",
                "Du måste gå."
              ],
              [
                "böra",
                "варто",
                "Du bör vila."
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
                "Kan du hjälpa mig?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Jag måste gå nu.",
                "Мені треба йти зараз."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Konditionalis (skulle) — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється \"skulle\" (минула форма ska) + інфінітив для теперішньої умови, чи \"skulle ha\" + дієприкметник для минулої нереальної умови.",
            "en": {
              "text": "The conditional is formed with \"skulle\" (the past form of ska) plus the infinitive for present conditions, or \"skulle ha\" plus the participle for unreal past conditions."
            }
          },
          {
            "type": "table",
            "title": "Теперішній ↔ минулий умовний",
            "rows": [
              [
                "Jag skulle resa.",
                "Я поїхав би.",
                "теперішній"
              ],
              [
                "Jag skulle ha rest.",
                "Я був би поїхав.",
                "минулий"
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
                "Om jag hade tid, skulle jag resa.",
                "Якби я мав час, я поїхав би."
              ],
              [
                "Han skulle ha hjälpt dig.",
                "Він допоміг би тобі (якби міг)."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-participle",
        "title": "Presens particip — B1",
        "titleEn": "Present Participle — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник теперішнього часу утворюється суфіксом -ande/-ende й уживається переважно як прикметник, а не для утворення тривалого часу.",
            "en": {
              "text": "The present participle is formed with the suffix -ande/-ende and is used mainly as an adjective, not to form a continuous tense."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "sjunga (співати)",
                "sjungande",
                "співаючий"
              ],
              [
                "sova (спати)",
                "sovande",
                "сплячий"
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
                "Det sovande barnet var tyst.",
                "Дитина, що спала, була тиха."
              ],
              [
                "En sjungande fågel satt i trädet.",
                "На дереві сиділа співаюча пташка."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-participle",
        "title": "Perfekt particip — B1",
        "titleEn": "Past Participle — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється переважно суфіксами -ad/-d/-t і, крім складених часів, широко вживається як прикметник, узгоджуючись з іменником у роді й числі.",
            "en": {
              "text": "The past participle is mainly formed with the suffixes -ad/-d/-t and, besides compound tenses, is widely used as an adjective, agreeing with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "stänga (закривати)",
                "stängd",
                "закритий"
              ],
              [
                "skriva (писати)",
                "skriven",
                "написаний"
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
                "Affären är stängd.",
                "Магазин закритий."
              ],
              [
                "Det är en välskriven bok.",
                "Це добре написана книга."
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
        "id": "common-neuter-gender",
        "title": "En-ord och ett-ord — A1",
        "titleEn": "Common & Neuter Gender — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Шведська має лише два роди: спільний (en-ord, близько 75% іменників) і середній (ett-ord). Рід треба запам'ятовувати з кожним словом.",
            "en": {
              "text": "Swedish has only two genders: common (en-ord, about 75% of nouns) and neuter (ett-ord). Gender must be memorized with each word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bok",
                "книга (спільний)"
              ],
              [
                "ett hus",
                "дім (середній)"
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
                "Jag har en bok.",
                "У мене є книга."
              ],
              [
                "Det är ett stort hus.",
                "Це великий будинок."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Plural — A2",
        "titleEn": "Plural Formation — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється однією з п'яти груп закінчень (-or, -ar, -er, -n, або без змін) залежно від типу іменника.",
            "en": {
              "text": "The plural is formed with one of five ending groups (-or, -ar, -er, -n, or unchanged) depending on the noun type."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "flicka → flickor",
                "дівчина → дівчата"
              ],
              [
                "bil → bilar",
                "машина → машини"
              ],
              [
                "hus → hus",
                "дім → доми (без змін)"
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
                "Jag har två böcker.",
                "У мене дві книги."
              ],
              [
                "Det finns många bilar här.",
                "Тут багато машин."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-definiteness",
        "title": "Dubbel bestämdhet — B1",
        "titleEn": "Double Definiteness — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перед означеним іменником стоїть прикметник, суфіксального артикля недостатньо — додається ще й окреме означене слово den/det/de перед прикметником.",
            "en": {
              "text": "When a definite noun has a preceding adjective, the suffixed article alone isn't enough — a separate definite word den/det/de is also added before the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади подвійної означеності",
            "rows": [
              [
                "boken (книга, означена)",
                "den stora boken",
                "велика книга (означена)"
              ],
              [
                "huset",
                "det gamla huset",
                "старий дім (означений)"
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
                "Den stora boken ligger på bordet.",
                "Велика книга лежить на столі."
              ],
              [
                "Det gamla huset är vackert.",
                "Старий дім гарний."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Adjektivböjning — A2",
        "titleEn": "Adjective Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником: без закінчення для спільного роду, -t для середнього роду, -a для множини та в означеній формі.",
            "en": {
              "text": "The adjective agrees with the noun: no ending for common gender, -t for neuter, -a for plural and in the definite form."
            }
          },
          {
            "type": "table",
            "title": "stor (великий) за родами",
            "rows": [
              [
                "en stor bok",
                "велика книга",
                "спільний"
              ],
              [
                "ett stort hus",
                "великий дім",
                "середній"
              ],
              [
                "stora böcker",
                "великі книги",
                "множина"
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
                "Det är en stor bil.",
                "Це велика машина."
              ],
              [
                "De är väldigt stora.",
                "Вони дуже великі."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Komparation — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -are, найвищий — суфіксом -ast.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -are, and the superlative with -ast."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "stor",
                "större",
                "störst"
              ],
              [
                "snabb",
                "snabbare",
                "snabbast"
              ],
              [
                "dyr",
                "dyrare",
                "dyrast"
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
                "Det här huset är större än mitt.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "Det är den dyraste restaurangen i stan.",
                "Це найдорожчий ресторан у місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Oregelbunden komparation — B1",
        "titleEn": "Irregular Comparatives — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже поширених прикметників мають нерегулярні форми ступенів порівняння.",
            "en": {
              "text": "A handful of very common adjectives have irregular comparative/superlative forms."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "god (добрий)",
                "bättre",
                "bäst"
              ],
              [
                "dålig (поганий)",
                "sämre",
                "sämst"
              ],
              [
                "liten (малий)",
                "mindre",
                "minst"
              ],
              [
                "många (багато)",
                "fler",
                "flest"
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
                "Det är en bättre lösning.",
                "Це краще рішення."
              ],
              [
                "Hon har flest vänner.",
                "У неї найбільше друзів."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-s-genitive",
        "title": "S-genitiv — A2",
        "titleEn": "S-Genitive — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається суфіксом -s без апострофа, приєднаним прямо до іменника-власника.",
            "en": {
              "text": "Possession is expressed with the suffix -s, with no apostrophe, attached directly to the possessor noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Pers bok",
                "книга Пера"
              ],
              [
                "mammas hus",
                "дім мами"
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
                "Det är Annas väska.",
                "Це сумка Анни."
              ],
              [
                "Bilens färg är röd.",
                "Колір машини червоний."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-possessive-sin",
        "title": "Reflexivt possessiv \"sin/sitt/sina\" — B1",
        "titleEn": "Reflexive Possessive Sin/Sitt/Sina — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Коли власник — підмет речення в 3-й особі, вживають \"sin/sitt/sina\" (узгоджені з предметом володіння); коли власник НЕ є підметом, уживають hans/hennes/deras. Це розрізнення — одна з найскладніших пасток для тих, хто вивчає шведську.",
            "en": {
              "text": "When the owner is the sentence's 3rd-person subject, \"sin/sitt/sina\" is used (agreeing with the possessed item); when the owner is NOT the subject, hans/hennes/deras is used instead. This distinction is one of the trickiest pitfalls for Swedish learners."
            }
          },
          {
            "type": "table",
            "title": "sin vs hans/hennes",
            "rows": [
              [
                "Han älskar sin fru.",
                "Він любить свою (власну) дружину.",
                "sin — підмет=власник"
              ],
              [
                "Han älskar hans fru.",
                "Він любить його (чужу) дружину.",
                "hans — власник інший"
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
                "Hon tar sin bil till jobbet.",
                "Вона їде на своїй машині на роботу."
              ],
              [
                "De älskar sina barn.",
                "Вони люблять своїх дітей."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronouns-object-forms",
        "title": "Personliga pronomen — objektsform — A2",
        "titleEn": "Personal Pronouns — Object Forms — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають окрему форму об'єкта (після дієслова чи прийменника), відмінну від форми підмета.",
            "en": {
              "text": "Personal pronouns have a separate object form (after a verb or preposition), distinct from the subject form."
            }
          },
          {
            "type": "table",
            "title": "Підмет → об'єкт",
            "rows": [
              [
                "jag → mig",
                "я → мене/мені"
              ],
              [
                "han → honom",
                "він → його/йому"
              ],
              [
                "de → dem",
                "вони → їх/їм"
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
                "Han kan inte se mig.",
                "Він мене не бачить."
              ],
              [
                "Ge mig det.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Demonstrativa pronomen — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Den här/det här/de här\" (цей) вказує на близький предмет, \"den där/det där/de där\" (той) — на віддалений.",
            "en": {
              "text": "\"Den här/det här/de här\" (this) points to something near, while \"den där/det där/de där\" (that) refers to something farther away."
            }
          },
          {
            "type": "table",
            "title": "den här / det här",
            "rows": [
              [
                "den här boken",
                "ця книга",
                "спільний"
              ],
              [
                "det här huset",
                "цей дім",
                "середній"
              ],
              [
                "de här böckerna",
                "ці книги",
                "множина"
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
                "Den här bilen är min.",
                "Ця машина моя."
              ],
              [
                "Den där boken är intressant.",
                "Та книга цікава."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Frågande pronomen — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "vem?",
                "хто?",
                "Vem är det?"
              ],
              [
                "vad?",
                "що?",
                "Vad gör du?"
              ],
              [
                "vilken?",
                "який?",
                "Vilken bok?"
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
                "Vem är du?",
                "Хто ти?"
              ],
              [
                "Vad heter du?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-som",
        "title": "Relativt pronomen \"som\" — B1",
        "titleEn": "Relative Pronoun Som — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Som\" — універсальний відносний займенник для будь-якої ролі в підрядному реченні (підмет чи об'єкт) і не змінюється за родом, числом чи відмінком.",
            "en": {
              "text": "\"Som\" is the universal relative pronoun for any role in the clause (subject or object) and never changes for gender, number, or case."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mannen som kommer",
                "чоловік, який приходить",
                "som — підмет"
              ],
              [
                "mannen som jag såg",
                "чоловік, якого я бачив",
                "som — об'єкт"
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
                "Det är boken som jag läste.",
                "Це та книга, яку я читав."
              ],
              [
                "Kvinnan som bor här är läkare.",
                "Жінка, яка тут живе, — лікарка."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-v2",
        "title": "V2-ordföljd — B1",
        "titleEn": "V2 Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У головному реченні дієслово завжди стоїть на другій позиції (V2), незалежно від того, що стоїть на першій. Якщо перше місце займає не підмет, підмет і дієслово міняються місцями.",
            "en": {
              "text": "In a main clause, the verb always occupies the second position (V2), regardless of what comes first. If the subject isn't first, subject and verb invert."
            }
          },
          {
            "type": "table",
            "title": "V2 в дії",
            "rows": [
              [
                "Jag äter äpplen idag.",
                "Я їм яблука сьогодні.",
                "підмет перший"
              ],
              [
                "Idag äter jag äpplen.",
                "Сьогодні я їм яблука.",
                "обставина перша → інверсія"
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
                "Imorgon åker vi till stranden.",
                "Завтра ми поїдемо на пляж."
              ],
              [
                "Nu förstår jag det.",
                "Тепер я це розумію."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-subordinate",
        "title": "Ordföljd i bisatser — B1",
        "titleEn": "Word Order in Subordinate Clauses — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні порядок слів інший, ніж у головному: заперечення \"inte\" та інші речennєві прислівники стоять ПЕРЕД дієсловом, а не після нього.",
            "en": {
              "text": "Word order in a subordinate clause differs from a main clause: negation \"inte\" and other sentence adverbs go BEFORE the verb, not after."
            }
          },
          {
            "type": "table",
            "title": "Головне ↔ підрядне речення",
            "rows": [
              [
                "Han kommer inte.",
                "Він не приходить (головне).",
                "inte після дієслова"
              ],
              [
                "...att han inte kommer.",
                "...що він не приходить (підрядне).",
                "inte перед дієсловом"
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
                "Jag vet att hon inte är hemma.",
                "Я знаю, що її немає вдома."
              ],
              [
                "Han sa att han alltid var glad.",
                "Він сказав, що завжди був щасливий."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-common",
        "title": "Vanliga prepositioner — A1",
        "titleEn": "Common Prepositions — A1",
        "emoji": "📎",
        "sections": [
          {
            "type": "table",
            "title": "Поширені прийменники",
            "rows": [
              [
                "i",
                "в/у",
                "i huset"
              ],
              [
                "på",
                "на",
                "på bordet"
              ],
              [
                "till",
                "до",
                "till skolan"
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
                "Boken ligger på bordet.",
                "Книга лежить на столі."
              ],
              [
                "Jag går till skolan.",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Samordnande konjunktioner — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "och",
                "і/та",
                "Jag och du."
              ],
              [
                "men",
                "але",
                "Jag vill, men kan inte."
              ],
              [
                "eller",
                "або",
                "Kaffe eller te?"
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
                "Jag tycker om te och kaffe.",
                "Мені подобається чай і кава."
              ],
              [
                "Jag vill gärna gå, men jag har inte tid.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Underordnande konjunktioner — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "att",
                "що",
                "Jag vet att du kommer."
              ],
              [
                "eftersom",
                "тому що",
                "Jag kom inte eftersom jag var sjuk."
              ],
              [
                "om",
                "якщо",
                "Om du har tid, ring."
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
                "Jag tror att du har rätt.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Jag stannar om det behövs.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "der-expletive",
        "title": "Formellt subjekt \"det\" — B1",
        "titleEn": "Existential Det — B1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "\"Det\" як формальний підмет уводить конструкцію існування (\"є, існує\"), коли реальний підмет невизначений і стоїть після дієслова.",
            "en": {
              "text": "\"Det\" as a formal (expletive) subject introduces existence constructions (\"there is/are\") when the real subject is indefinite and comes after the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Det finns en bok på bordet.",
                "На столі є книга."
              ],
              [
                "Det var många människor.",
                "Було багато людей."
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
                "Det är ingen hemma.",
                "Нікого немає вдома."
              ],
              [
                "Det finns inget bättre.",
                "Немає нічого кращого."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Grundtal — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "en/ett",
                "один",
                "1"
              ],
              [
                "fem",
                "п'ять",
                "5"
              ],
              [
                "tio",
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
                "Jag har två bröder.",
                "У мене два брати."
              ],
              [
                "Klockan är tre.",
                "Третя година."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-higher",
        "title": "Grundtal 20-90 (decimalt system) — A2",
        "titleEn": "Cardinal Numbers 20-90 (Decimal System) — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Як і норвезькі, шведські числа 50-90 повністю десяткові й прозоро утворюються від коренів 5-9: femtio, sextio, sjuttio, åttio, nittio — жодних решток двадцяткової системи, на відміну від данської.",
            "en": {
              "text": "Like Norwegian, Swedish numbers 50-90 are fully decimal and transparently built from the roots 5-9: femtio, sextio, sjuttio, åttio, nittio — no vestiges of a base-20 system, unlike Danish."
            }
          },
          {
            "type": "table",
            "title": "Прозорі десяткові форми",
            "rows": [
              [
                "femtio",
                "50",
                "fem (5) + tio (10)"
              ],
              [
                "sjuttio",
                "70",
                "sju (7) + tio (10)"
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
                "Han är femtio år gammal.",
                "Йому п'ятдесят років."
              ],
              [
                "Det kostar sextio kronor.",
                "Це коштує шістдесят крон."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Ordningstal — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "första",
                "перший",
                "1-й"
              ],
              [
                "andra",
                "другий",
                "2-й"
              ],
              [
                "tredje",
                "третій",
                "3-й"
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
                "Det är min första dag på jobbet.",
                "Це мій перший день на роботі."
              ],
              [
                "Jag bor på andra våningen.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Veckodagar — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "måndag",
                "понеділок",
                "1"
              ],
              [
                "fredag",
                "п'ятниця",
                "5"
              ],
              [
                "söndag",
                "неділя",
                "7"
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
                "På måndagar har jag lektioner.",
                "У понеділок у мене заняття."
              ],
              [
                "Idag är det onsdag.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Månader och datum — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "januari",
                "січень",
                "01"
              ],
              [
                "juli",
                "липень",
                "07"
              ],
              [
                "december",
                "грудень",
                "12"
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
                "Idag är det den femte maj.",
                "Сьогодні п'яте травня."
              ],
              [
                "Jag är född i december.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Klockan — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Vad är klockan?\". Шведська орієнтує пів-годину на НАСТУПНУ годину: \"halv tre\" означає \"пів на третю\" (2:30).",
            "en": {
              "text": "To ask the time, Swedes say \"Vad är klockan?\". Swedish orients the half-hour toward the NEXT hour: \"halv tre\" means \"half to three\" (2:30)."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Klockan är ett.",
                "Перша година.",
                "1:00"
              ],
              [
                "Klockan är halv tre.",
                "Половина третьої.",
                "2:30"
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
                "Vad är klockan?",
                "Котра година?"
              ],
              [
                "Tåget går klockan åtta.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Reflexiva verb — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова обов'язково вживаються зі зворотним займенником (mig, dig, sig, oss, er, sig) і мають відмінне значення від дієслова без нього.",
            "en": {
              "text": "Some verbs obligatorily take a reflexive pronoun (mig, dig, sig, oss, er, sig) and have a different meaning from the plain verb."
            }
          },
          {
            "type": "table",
            "title": "Без зв. займ. ↔ зі зворотним",
            "rows": [
              [
                "tvätta (мити)",
                "tvätta sig (митися)",
                "себе"
              ],
              [
                "skynda (квапити)",
                "skynda sig (квапитися)",
                "себе"
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
                "Jag ser fram emot semestern.",
                "Я тішуся відпустці наперед."
              ],
              [
                "Skynda dig!",
                "Поспіши!"
              ]
            ]
          }
        ]
      },
      {
        "id": "separable-verb-particles",
        "title": "Verb med partikel — B1",
        "titleEn": "Verbs with Separable Particles — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів утворюють нове значення з часткою (upp, ut, in), яка в головному реченні відокремлюється й стоїть у кінці.",
            "en": {
              "text": "Many verbs form a new meaning with a particle (upp, ut, in), which detaches in the main clause and moves to the end."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "stiga upp",
                "вставати"
              ],
              [
                "gå ut",
                "виходити"
              ],
              [
                "komma in",
                "заходити"
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
                "Jag stiger alltid upp tidigt.",
                "Я завжди рано встаю."
              ],
              [
                "Han gick ut ur affären.",
                "Він вийшов з магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Bildning av adverb — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії збігаються за формою з середнім родом прикметника (закінчення -t).",
            "en": {
              "text": "Many manner adverbs are identical in form to the neuter of the adjective (the -t ending)."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "snabb (швидкий)",
                "snabbt",
                "швидко"
              ],
              [
                "vacker (гарний)",
                "vackert",
                "гарно"
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
                "Han pratar snabbt.",
                "Він говорить швидко."
              ],
              [
                "Hon sjunger vackert.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Kvantorer (mycket/många) — A2",
        "titleEn": "Quantifiers (Mycket/Många) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mycket\" (багато) уживається з незлічуваними іменниками, \"många\" (багато) — зі злічуваними в множині.",
            "en": {
              "text": "\"Mycket\" (much) is used with uncountable nouns, while \"många\" (many) is used with countable plural nouns."
            }
          },
          {
            "type": "table",
            "title": "mycket vs många",
            "rows": [
              [
                "mycket vatten",
                "багато води",
                "незлічуване"
              ],
              [
                "många böcker",
                "багато книг",
                "злічуване"
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
                "Jag har inte mycket tid.",
                "У мене небагато часу."
              ],
              [
                "Det är många människor här.",
                "Тут багато людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-nouns",
        "title": "Sammansatta ord — B1",
        "titleEn": "Compound Nouns — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Шведська вільно поєднує кілька іменників в одне довге слово без пробілів; рід усього складеного слова визначається останнім елементом.",
            "en": {
              "text": "Swedish freely combines several nouns into one long word with no spaces; the gender of the whole compound is determined by the last element."
            }
          },
          {
            "type": "table",
            "title": "Приклади складних слів",
            "rows": [
              [
                "fot (нога) + boll (м'яч)",
                "fotboll",
                "футбол"
              ],
              [
                "brand (пожежа) + man (людина)",
                "brandman",
                "пожежник"
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
                "Vi spelar fotboll varje söndag.",
                "Ми граємо у футбол щонеділі."
              ],
              [
                "Han är brandman.",
                "Він пожежник."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-vs-preposition",
        "title": "S-genitiv vs. \"av\" — B1",
        "titleEn": "S-Genitive vs. Av-Construction — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Для власників-осіб зазвичай уживають s-генітив, а для неживих чи абстрактних понять частіше конструкцію з прийменником \"av\" (від/з).",
            "en": {
              "text": "For personal owners, the s-genitive is usually used, while for inanimate or abstract concepts the construction with \"av\" (of) is more common."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Pers bil",
                "машина Пера",
                "s-генітив"
              ],
              [
                "slutet av filmen",
                "кінець фільму",
                "av-конструкція"
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
                "Färgen av himlen är blå.",
                "Колір неба синій."
              ],
              [
                "Det är början av något nytt.",
                "Це початок чогось нового."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronoun-man",
        "title": "Opersonligt pronomen \"man\" — A2",
        "titleEn": "Impersonal Pronoun Man — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "\"Man\" (\"людина взагалі, ти/ми\") уживається для загальних тверджень, коли не важливо, хто саме є діячем.",
            "en": {
              "text": "\"Man\" (\"one, you, people in general\") is used for general statements when the specific doer doesn't matter."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Man ska inte ljuga.",
                "Не варто брехати (загалом)."
              ],
              [
                "I Sverige äter man mycket fisk.",
                "У Швеції їдять багато риби."
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
                "Man kan se havet härifrån.",
                "Звідси видно море."
              ],
              [
                "Man vet aldrig.",
                "Ніколи не знаєш наперед."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"du-reformen\" — du som standard — A2",
        "titleEn": "The Du-Reform — Du as Standard — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Після \"du-reformen\" 1960-70-х років Швеція майже повністю відмовилась від формального звертання \"ni\" на користь \"du\" — навіть до незнайомців і начальства.",
            "en": {
              "text": "After the \"du-reform\" of the 1960s-70s, Sweden almost entirely abandoned the formal \"ni\" in favor of \"du\" — even toward strangers and superiors."
            }
          },
          {
            "type": "table",
            "title": "du (майже завжди)",
            "rows": [
              [
                "Har du tid?",
                "У тебе є час? (звичайне звертання до будь-кого)"
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
                "Hur mår du?",
                "Як ти? (навіть до начальника)"
              ],
              [
                "Kan du hjälpa mig?",
                "Ти можеш мені допомогти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Hälsningar och fasta uttryck — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Hej.",
                "Привіт."
              ],
              [
                "Tack.",
                "Дякую."
              ],
              [
                "Förlåt.",
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
                "Trevligt att träffas.",
                "Приємно познайомитися."
              ],
              [
                "Vi ses.",
                "До зустрічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Väderuttryck — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "Det är soligt.",
                "Сонячно."
              ],
              [
                "Det regnar.",
                "Іде дощ."
              ],
              [
                "Det snöar.",
                "Іде сніг."
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
                "Idag är det väldigt kallt.",
                "Сьогодні дуже холодно."
              ],
              [
                "Imorgon blir det molnigt.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Fasta uttryck och idiom — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Det finns ingen ko på isen.",
                "(букв. немає корови на льоду) — немає причин для хвилювання."
              ],
              [
                "Att glida in på en räkmacka.",
                "(букв. вислизнути на бутерброді з креветками) — досягти успіху без зусиль."
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
                "Slappna av, det finns ingen ko på isen.",
                "Розслабся, все гаразд."
              ],
              [
                "Han gled in på en räkmacka.",
                "Йому все дісталося без зусиль."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-predicative-vs-attributive",
        "title": "Predikativ vs. attributiv användning — B1",
        "titleEn": "Predicative vs. Attributive Adjectives — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник у ролі присудка (після vara) узгоджується з підметом так само, як і перед іменником.",
            "en": {
              "text": "A predicative adjective (after vara) agrees with the subject the same way as an attributive one before a noun."
            }
          },
          {
            "type": "table",
            "title": "Атрибутивне ↔ присудкове",
            "rows": [
              [
                "ett stort hus",
                "великий дім",
                "атрибутивне"
              ],
              [
                "Huset är stort.",
                "Будинок великий.",
                "присудкове"
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
                "Bilen är snabb.",
                "Машина швидка."
              ],
              [
                "Barnen är trötta.",
                "Діти втомлені."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Ordbildning — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Шведська активно утворює нові слова додаванням суфіксів: -het (абстрактне поняття), -else (результат дії), -lig (прикметники).",
            "en": {
              "text": "Swedish actively derives new words with suffixes: -het (abstract concept), -else (result of an action), -lig (adjectives)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "fri (вільний) → frihet",
                "свобода"
              ],
              [
                "upplevd (пережив) → upplevelse",
                "враження"
              ],
              [
                "vän (друг) → vänlig",
                "дружній"
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
                "Frihet är viktigt för mig.",
                "Свобода важлива для мене."
              ],
              [
                "Han är väldigt vänlig.",
                "Він дуже дружній."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective",
        "title": "Kollektiva räkneord (par/dussin) — A2",
        "titleEn": "Collective Numerals (Par/Dussin) — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ett par",
                "пара"
              ],
              [
                "ett dussin",
                "дюжина"
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
                "Jag har ett par skor.",
                "У мене є пара взуття."
              ],
              [
                "Vi köpte ett dussin ägg.",
                "Ми купили дюжину яєць."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Priser och pengar — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Vad kostar det?\" (\"Скільки це коштує?\"), а валюта \"kronor\" стоїть після числа.",
            "en": {
              "text": "To ask the price, one says \"Vad kostar det?\" (\"What does it cost?\"), and the currency \"kronor\" follows the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hundra kronor",
                "сто крон"
              ],
              [
                "billig / dyr",
                "дешевий / дорогий"
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
                "Vad kostar den här?",
                "Скільки коштує це?"
              ],
              [
                "Det är för dyrt.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "sentence-adverbs-position",
        "title": "Satsadverbial — B1",
        "titleEn": "Sentence Adverb Placement — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Речennєві прислівники (alltid, aldrig, nog, ju) у головному реченні стоять одразу після дієслова, на тому самому місці, де й \"inte\".",
            "en": {
              "text": "Sentence adverbs (alltid, aldrig, nog, ju) in a main clause stand right after the verb, the same slot as \"inte\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jag dricker alltid kaffe.",
                "Я завжди п'ю каву."
              ],
              [
                "Han kommer nog imorgon.",
                "Він, мабуть, прийде завтра."
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
                "Vi ses ju imorgon.",
                "Ми ж побачимося завтра."
              ],
              [
                "Hon är aldrig sen.",
                "Вона ніколи не запізнюється."
              ]
            ]
          }
        ]
      },
      {
        "id": "indirect-object-word-order",
        "title": "Ordföljd med indirekt objekt — B1",
        "titleEn": "Word Order with Indirect Object — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "З дієсловами давання непрямий об'єкт (кому) зазвичай стоїть перед прямим об'єктом (що), без прийменника.",
            "en": {
              "text": "With verbs of giving, the indirect object (to whom) usually comes before the direct object (what), with no preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклад порядку",
            "rows": [
              [
                "Jag ger henne boken.",
                "Я даю їй книгу.",
                "непрямий → прямий"
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
                "Han skickade mig ett brev.",
                "Він надіслав мені листа."
              ],
              [
                "Vi visade dem huset.",
                "Ми показали їм дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-pronouns",
        "title": "Negativa pronomen (ingen/inget) — B1",
        "titleEn": "Negative Pronouns (Ingen/Inget) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ingen",
                "ніхто/жоден",
                "Det är ingen hemma."
              ],
              [
                "inget",
                "ніщо",
                "Jag såg inget."
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
                "Ingen vet det.",
                "Ніхто цього не знає."
              ],
              [
                "Det finns inget att göra.",
                "Нічого не можна вдіяти."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamative-constructions",
        "title": "Utropskonstruktioner (så/vilken) — B1",
        "titleEn": "Exclamative Constructions — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Оклична конструкція \"så + прикметник\" (\"який/яка ж\") виражає захоплення чи здивування якістю; \"vilken/vilket/vilka\" робить те саме для іменника.",
            "en": {
              "text": "The exclamative construction \"så + adjective\" (\"how...!\") expresses admiration or surprise at a quality; \"vilken/vilket/vilka\" does the same for a noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Så vackert det är!",
                "Як же це гарно!"
              ],
              [
                "Vilken dag!",
                "Який же день!"
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
                "Så snäll du är!",
                "Який же ти милий!"
              ],
              [
                "Vilken röra!",
                "Який же безлад!"
              ]
            ]
          }
        ]
      },
      {
        "id": "preposition-time-place",
        "title": "\"i\" och \"på\" (tid och plats) — A2",
        "titleEn": "I vs På (Time & Place) — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "\"I\" переважно вживають із закритими просторами й тривалими періодами часу (i huset, i sommar), \"på\" — з поверхнями й окремими днями/подіями (på bordet, på måndag).",
            "en": {
              "text": "\"I\" is mainly used with enclosed spaces and extended time periods (i huset, i sommar), while \"på\" is used with surfaces and specific days/events (på bordet, på måndag)."
            }
          },
          {
            "type": "table",
            "title": "i vs på",
            "rows": [
              [
                "i trädgården",
                "у саду",
                "закритий простір"
              ],
              [
                "på stranden",
                "на пляжі",
                "відкрита поверхня"
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
                "Vi möts på måndag.",
                "Ми зустрінемося в понеділок."
              ],
              [
                "Jag stannar hemma i helgen.",
                "Я залишуся вдома на вихідних."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Frågeord — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "var?",
                "де?",
                "Var är du?"
              ],
              [
                "när?",
                "коли?",
                "När kommer du?"
              ],
              [
                "varför?",
                "чому?",
                "Varför gråter du?"
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
                "Var är stationen?",
                "Де вокзал?"
              ],
              [
                "Varför är du sen?",
                "Чому ти запізнюєшся?"
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Tidsuttryck (idag/igår/imorgon) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "idag",
                "сьогодні"
              ],
              [
                "igår",
                "вчора"
              ],
              [
                "imorgon",
                "завтра"
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
                "Idag är jag ledig.",
                "Сьогодні я вільний."
              ],
              [
                "Vi ses imorgon.",
                "Побачимося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Årstider — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "vår",
                "весна"
              ],
              [
                "sommar",
                "літо"
              ],
              [
                "vinter",
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
                "På sommaren är det varmt.",
                "Влітку тепло."
              ],
              [
                "Jag älskar hösten.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Att uttrycka åsikter — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jag tycker att...",
                "Я вважаю, що..."
              ],
              [
                "Enligt min åsikt...",
                "На мою думку..."
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
                "Jag tycker det är en bra idé.",
                "Я вважаю, що це хороша ідея."
              ],
              [
                "Enligt min åsikt är det för dyrt.",
                "На мою думку, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-no-agreement-indeclinable",
        "title": "Oböjliga adjektiv — B1",
        "titleEn": "Indeclinable Adjectives — B1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька поширених прикметників (bra, gratis, lila — ті, що вже закінчуються на голосну чи мають особливу форму) не змінюються за родом чи числом.",
            "en": {
              "text": "A handful of common adjectives (bra, gratis, lila — those already ending in a vowel or with a special form) never change for gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклади незмінних прикметників",
            "rows": [
              [
                "ett bra hus",
                "хороший дім",
                "середній, без -t"
              ],
              [
                "bra hus",
                "хороші доми",
                "множина, без змін"
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
                "Det är en bra bok.",
                "Це хороша книга."
              ],
              [
                "Klänningen hennes är lila.",
                "Її сукня фіолетова."
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
        "title": "Oregelbundna verb — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів (vara, ha, göra, gå) утворюють минулий час і дієприкметник не за загальним правилом, і їхні форми варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs (vara, ha, göra, gå) form the past tense and participle irregularly, and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "vara (бути)",
                "var, har varit",
                "був, був (перфект)"
              ],
              [
                "ha (мати)",
                "hade, har haft",
                "мав, мав (перфект)"
              ],
              [
                "göra (робити)",
                "gjorde, har gjort",
                "зробив, зробив (перфект)"
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
                "Jag var i skolan igår.",
                "Я був у школі вчора."
              ],
              [
                "Han har gjort det klart.",
                "Він це закінчив."
              ]
            ]
          }
        ]
      },
      {
        "id": "sj-tj-sounds",
        "title": "Sj-ljudet och tj-ljudet — B1",
        "titleEn": "The Sj-Sound and Tj-Sound — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Sj-звук — один із найважчих звуків шведської для іноземців, що позначається щонайменше сімома різними способами написання (sj, skj, stj, sk перед i/e/y/ä/ö, ch, sch) і вимовляється як глибокий гортанно-фрикативний звук.",
            "en": {
              "text": "The sj-sound is one of the hardest Swedish sounds for foreigners, spelled at least seven different ways (sj, skj, stj, sk before i/e/y/ä/ö, ch, sch) and pronounced as a deep, guttural fricative."
            }
          },
          {
            "type": "table",
            "title": "Приклади написання sj-звуку",
            "rows": [
              [
                "sju",
                "сім",
                "sj-"
              ],
              [
                "stjärna",
                "зірка",
                "stj-"
              ],
              [
                "skjorta",
                "сорочка",
                "skj-"
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
                "Klockan är sju.",
                "Сьома година."
              ],
              [
                "Jag köpte en ny skjorta.",
                "Я купив нову сорочку."
              ]
            ]
          }
        ]
      },
      {
        "id": "tonal-word-accent",
        "title": "Ordaccent (accent 1 och 2) — B1",
        "titleEn": "Tonal Word Accent — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Шведська зберігає музичний тональний наголос — два акценти (акцент 1 і акцент 2), які можуть розрізняти слова, що інакше пишуться й вимовляються однаково (той самий сегментний склад).",
            "en": {
              "text": "Swedish retains a musical pitch accent — two accents (accent 1 and accent 2) that can distinguish words otherwise spelled and pronounced identically (the same segmental sounds)."
            }
          },
          {
            "type": "table",
            "title": "Приклад тональної відмінності",
            "rows": [
              [
                "anden (дух, акцент 1)",
                "anden (качка, акцент 2)",
                "різні слова через тон"
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
                "Anden flög över sjön.",
                "Качка пролетіла над озером (акцент 2)."
              ],
              [
                "Ordaccenten är svår för utlänningar.",
                "Тональний наголос складний для іноземців."
              ]
            ]
          }
        ]
      }
    ]
  }
];
