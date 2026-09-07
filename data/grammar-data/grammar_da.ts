// Vymova — data/grammar-data/grammar_da.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DA: GrammarCategory[] = [
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
            "text": "Данські дієслова не змінюються за особами чи числом — форма дієслова однакова для jeg, du, han тощо.",
            "en": {
              "text": "Danish verbs never change for person or number — the verb form is identical for jeg, du, han, and so on."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "jeg",
                "я"
              ],
              [
                "du",
                "ти"
              ],
              [
                "han / hun / den / det",
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
                "Jeg er lærer.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"at være\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"være\" (бути) має ЄДИНУ форму теперішнього часу — er — для всіх осіб та чисел.",
            "en": {
              "text": "The verb \"være\" (to be) has just ONE present-tense form — er — for every person and number."
            }
          },
          {
            "type": "formula",
            "title": "\"være\" (бути) — єдина форма",
            "rows": [
              [
                "jeg",
                "er",
                "я є"
              ],
              [
                "du",
                "er",
                "ти є"
              ],
              [
                "han / hun / den / det",
                "er",
                "він/вона/воно є"
              ],
              [
                "vi",
                "er",
                "ми є"
              ],
              [
                "de",
                "er",
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
                "De er trætte.",
                "Вони втомлені."
              ]
            ]
          }
        ],
        "titleEn": "The Verb At Være (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ikke\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від українського \"не\" перед дієсловом, заперечна частка ikke в данській ставиться ПІСЛЯ дієслова.",
            "en": {
              "text": "Unlike Ukrainian's pre-verbal negation, the negative particle ikke in Danish comes AFTER the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Jeg ved det.",
                "Jeg ved det ikke.",
                "Я це знаю. / Я цього не знаю."
              ],
              [
                "Han kommer.",
                "Han kommer ikke.",
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
                "Han kommer ikke.",
                "Він не прийде."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ikke — A1"
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
                "Du er træt.",
                "Er du træt?",
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
            "text": "Означений артикль у данській зазвичай приєднується як суфікс в кінці іменника, а не окремим словом перед ним.",
            "en": {
              "text": "The definite article in Danish is usually attached as a suffix at the end of the noun, rather than as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bog → bogen",
                "книга → ця книга"
              ],
              [
                "et hus → huset",
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
                "Bogen er god.",
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
        "title": "Nutid (præsens) — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Данське дієслово в теперішньому часі має ЄДИНУ форму для всіх осіб і чисел — зазвичай закінчення -r додається до основи інфінітива.",
            "en": {
              "text": "A Danish verb has a SINGLE present-tense form for every person and number — usually the ending -r is added to the infinitive stem."
            }
          },
          {
            "type": "formula",
            "title": "\"at arbejde\" (працювати) — nutid",
            "rows": [
              [
                "jeg",
                "arbejder",
                "я працюю"
              ],
              [
                "du",
                "arbejder",
                "ти працюєш"
              ],
              [
                "han / hun",
                "arbejder",
                "він/вона працює"
              ],
              [
                "vi",
                "arbejder",
                "ми працюємо"
              ],
              [
                "de",
                "arbejder",
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
                "Jeg arbejder i en bank.",
                "Я працюю в банку."
              ],
              [
                "De drikker kaffe.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Datid — A1",
        "titleEn": "Past Tense — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час, як і теперішній, має єдину форму для всіх осіб. Слабкі дієслова додають -ede чи -te, сильні дієслова змінюють кореневий голосний.",
            "en": {
              "text": "The past tense, like the present, has a single form for every person. Weak verbs add -ede or -te; strong verbs change the root vowel."
            }
          },
          {
            "type": "table",
            "title": "Слабкі vs сильні дієслова",
            "rows": [
              [
                "arbejde → arbejdede",
                "працював",
                "слабке (-ede)"
              ],
              [
                "læse → læste",
                "читав",
                "слабке (-te)"
              ],
              [
                "synge → sang",
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
                "Jeg arbejdede hele dagen.",
                "Я працював весь день."
              ],
              [
                "Han sang en sang.",
                "Він заспівав пісню."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "Førnutid (perfektum) — A2",
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
                "jeg",
                "har arbejdet",
                "я попрацював"
              ],
              [
                "du",
                "har set",
                "ти побачив"
              ],
              [
                "han",
                "har spist",
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
                "Jeg har allerede spist.",
                "Я вже поїв."
              ],
              [
                "Har du set den film?",
                "Ти бачив цей фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "Førdatid (pluskvamperfektum) — B1",
        "titleEn": "Past Perfect — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час виражає дію, що відбулася раніше за іншу минулу дію. Утворюється \"havde\" + дієприкметник минулого часу.",
            "en": {
              "text": "The past perfect expresses an action that happened before another past action. Formed with \"havde\" plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "har spist",
                "havde spist",
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
                "Jeg havde allerede spist, da han kom.",
                "Я вже поїв, коли він прийшов."
              ],
              [
                "Hun havde glemt sin paraply.",
                "Вона забула свою парасольку (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-vil",
        "title": "Fremtid med \"vil\" — A2",
        "titleEn": "Future with Vil — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Vil\" + інфінітив виражає намір, бажання чи прогноз щодо майбутнього.",
            "en": {
              "text": "\"Vil\" plus the infinitive expresses intention, desire, or a prediction about the future."
            }
          },
          {
            "type": "formula",
            "title": "\"vil\" + інфінітив",
            "rows": [
              [
                "jeg",
                "vil rejse",
                "я поїду/хочу поїхати"
              ],
              [
                "du",
                "vil komme",
                "ти прийдеш"
              ],
              [
                "det",
                "vil regne",
                "буде дощ"
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
                "Jeg vil rejse til Italien.",
                "Я поїду до Італії."
              ],
              [
                "Det vil nok regne i morgen.",
                "Завтра, схоже, буде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-skal",
        "title": "Fremtid med \"skal\" — A2",
        "titleEn": "Future with Skal — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "\"Skal\" + інфінітив виражає заплановану дію чи обов'язок у майбутньому — на відміну від \"vil\", яке підкреслює бажання чи прогноз.",
            "en": {
              "text": "\"Skal\" plus the infinitive expresses a planned action or obligation in the future — unlike \"vil\", which stresses desire or prediction."
            }
          },
          {
            "type": "table",
            "title": "vil ↔ skal",
            "rows": [
              [
                "Jeg vil rejse.",
                "Я хочу поїхати (бажання).",
                "vil"
              ],
              [
                "Jeg skal rejse i morgen.",
                "Я їду завтра (заплановано).",
                "skal"
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
                "Vi skal mødes klokken ti.",
                "Ми зустрічаємося о десятій (заплановано)."
              ],
              [
                "Hun skal starte i en ny stilling.",
                "Вона починає нову посаду."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Bydeform (imperativ) — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — це просто основа дієслова (інфінітив без -e), одна форма для всіх, без займенника.",
            "en": {
              "text": "The imperative is simply the verb stem (the infinitive minus -e), one form for everyone, with no pronoun."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив → наказовий",
            "rows": [
              [
                "at lukke → Luk!",
                "Закрий!"
              ],
              [
                "at komme → Kom!",
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
                "Luk døren, tak.",
                "Зачини двері, будь ласка."
              ],
              [
                "Skynd dig!",
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
                "bygges (будується)",
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
                "Huset bygges i år.",
                "Будинок будується цього року."
              ],
              [
                "Døren åbnes klokken ni.",
                "Двері відчиняються о дев'ятій."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-blive",
        "title": "Blive-passiv — B1",
        "titleEn": "Blive-Passive — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Другий тип пасиву утворюється дієсловом \"blive\" (ставати) + дієприкметник минулого часу й підкреслює саму подію (процес), а не стан.",
            "en": {
              "text": "The second passive type is formed with \"blive\" (to become) plus the past participle and emphasizes the event itself (a process) rather than a state."
            }
          },
          {
            "type": "table",
            "title": "s-пасив vs blive-пасив",
            "rows": [
              [
                "Huset bygges.",
                "Будинок будується (загалом).",
                "s-пасив"
              ],
              [
                "Huset bliver bygget.",
                "Будинок будується (зараз, процес).",
                "blive-пасив"
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
                "Bogen blev skrevet af en kendt forfatter.",
                "Книгу написав відомий автор."
              ],
              [
                "Han blev inviteret til festen.",
                "Його запросили на вечірку."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Modalverber — A2",
        "titleEn": "Modal Verbs — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kunne, skulle, ville, måtte, burde) поєднуються з інфінітивом БЕЗ частки \"at\" — на відміну від звичайних дієслів.",
            "en": {
              "text": "Modal verbs (kunne, skulle, ville, måtte, burde) combine with the infinitive WITHOUT the particle \"at\" — unlike ordinary verbs."
            }
          },
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "kunne",
                "могти",
                "Jeg kan svømme."
              ],
              [
                "måtte",
                "мусити/сміти",
                "Du må gå."
              ],
              [
                "burde",
                "варто",
                "Du bør hvile."
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
                "Kan du hjælpe mig?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Jeg må gå nu.",
                "Мені треба йти зараз."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Betinget måde (konjunktiv/kondition) — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється \"ville\" (минула форма vil) + інфінітив для теперішньої умови, чи \"ville have\" + дієприкметник для минулої нереальної умови.",
            "en": {
              "text": "The conditional is formed with \"ville\" (the past form of vil) plus the infinitive for present conditions, or \"ville have\" plus the participle for unreal past conditions."
            }
          },
          {
            "type": "table",
            "title": "Теперішній ↔ минулий умовний",
            "rows": [
              [
                "Jeg ville rejse.",
                "Я поїхав би.",
                "теперішній"
              ],
              [
                "Jeg ville have rejst.",
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
                "Hvis jeg havde tid, ville jeg rejse.",
                "Якби я мав час, я поїхав би."
              ],
              [
                "Han ville have hjulpet dig.",
                "Він допоміг би тобі (якби міг)."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-participle",
        "title": "Nutids tillægsform — B1",
        "titleEn": "Present Participle — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник теперішнього часу утворюється суфіксом -ende й уживається переважно як прикметник, а не для утворення тривалого часу.",
            "en": {
              "text": "The present participle is formed with the suffix -ende and is used mainly as an adjective, not to form a continuous tense."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "synge (співати)",
                "syngende",
                "співаючий"
              ],
              [
                "sove (спати)",
                "sovende",
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
                "Det sovende barn var stille.",
                "Дитина, що спала, була тиха."
              ],
              [
                "En syngende fugl sad i træet.",
                "На дереві сиділа співаюча пташка."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-participle",
        "title": "Datids tillægsform — B1",
        "titleEn": "Past Participle — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється переважно суфіксом -et/-t і, крім складених часів, широко вживається як прикметник, узгоджуючись з іменником у роді й числі.",
            "en": {
              "text": "The past participle is mainly formed with the suffix -et/-t and, besides compound tenses, is widely used as an adjective, agreeing with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "lukke (закривати)",
                "lukket",
                "закритий"
              ],
              [
                "skrive (писати)",
                "skrevet",
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
                "Butikken er lukket.",
                "Магазин закритий."
              ],
              [
                "Det er en velskrevet bog.",
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
        "title": "Fælleskøn og intetkøn — A1",
        "titleEn": "Common & Neuter Gender — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Данська має лише два роди: спільний (fælleskøn, з артиклем en — близько 75% іменників) і середній (intetkøn, з артиклем et). Рід треба запам'ятовувати з кожним словом.",
            "en": {
              "text": "Danish has only two genders: common (fælleskøn, with the article en — about 75% of nouns) and neuter (intetkøn, with the article et). Gender must be memorized with each word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bog",
                "книга (спільний)"
              ],
              [
                "et hus",
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
                "Jeg har en bog.",
                "У мене є книга."
              ],
              [
                "Det er et stort hus.",
                "Це великий будинок."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Flertal — A2",
        "titleEn": "Plural Formation — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина найчастіше утворюється закінченнями -er чи -e, деякі слова взагалі не змінюються.",
            "en": {
              "text": "The plural is most often formed with the endings -er or -e; some words don't change at all."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "bog → bøger",
                "книга → книги"
              ],
              [
                "hus → huse",
                "дім → доми"
              ],
              [
                "barn → børn",
                "дитина → діти"
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
                "Jeg har to bøger.",
                "У мене дві книги."
              ],
              [
                "Der er mange huse her.",
                "Тут багато будинків."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-definiteness",
        "title": "Dobbelt bestemthed — B1",
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
                "bogen (книга, означена)",
                "den store bogen ✗ → den store bog",
                "велика книга (означена)"
              ],
              [
                "huset",
                "det gamle hus",
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
                "Den store bog ligger på bordet.",
                "Велика книга лежить на столі."
              ],
              [
                "Det gamle hus er smukt.",
                "Старий дім гарний."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Adjektivets bøjning — A2",
        "titleEn": "Adjective Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником: без закінчення для спільного роду, -t для середнього роду, -e для множини та в означеній формі.",
            "en": {
              "text": "The adjective agrees with the noun: no ending for common gender, -t for neuter, -e for plural and in the definite form."
            }
          },
          {
            "type": "table",
            "title": "stor (великий) за родами",
            "rows": [
              [
                "en stor bog",
                "велика книга",
                "спільний"
              ],
              [
                "et stort hus",
                "великий дім",
                "середній"
              ],
              [
                "store bøger",
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
                "Det er en stor bil.",
                "Це велика машина."
              ],
              [
                "De er meget store.",
                "Вони дуже великі."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Gradbøjning — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -ere, найвищий — суфіксом -est.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -ere, and the superlative with -est."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "stor",
                "større",
                "størst"
              ],
              [
                "hurtig",
                "hurtigere",
                "hurtigst"
              ],
              [
                "dyr",
                "dyrere",
                "dyrest"
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
                "Dette hus er større end mit.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "Det er den dyreste restaurant i byen.",
                "Це найдорожчий ресторан у місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Uregelmæssig gradbøjning — B1",
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
                "bedre",
                "bedst"
              ],
              [
                "dårlig (поганий)",
                "værre",
                "værst"
              ],
              [
                "lille (малий)",
                "mindre",
                "mindst"
              ],
              [
                "mange (багато)",
                "flere",
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
                "Det er en bedre løsning.",
                "Це краще рішення."
              ],
              [
                "Hun har flest venner.",
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
                "Peters bog",
                "книга Петера"
              ],
              [
                "min mors hus",
                "дім моєї мами"
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
                "Det er Annas taske.",
                "Це сумка Анни."
              ],
              [
                "Bilens farve er rød.",
                "Колір машини червоний."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronouns-object-forms",
        "title": "Personlige pronominer — objektsform — A2",
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
                "jeg → mig",
                "я → мене/мені"
              ],
              [
                "han → ham",
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
                "Han kan ikke se mig.",
                "Він мене не бачить."
              ],
              [
                "Giv mig det.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-sig",
        "title": "Refleksivt pronomen \"sig\" — A2",
        "titleEn": "Reflexive Pronoun Sig — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"sig\" уживається лише в 3-й особі (han/hun/de) й позначає, що дія спрямована на самого діяча.",
            "en": {
              "text": "The reflexive pronoun \"sig\" is used only in the 3rd person (han/hun/de) and shows the action is directed back at the doer."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "Han vasker sig.",
                "Він миється."
              ],
              [
                "De skynder sig.",
                "Вони поспішають."
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
                "Hun klæder sig på.",
                "Вона одягається."
              ],
              [
                "Katten vasker sig selv.",
                "Кіт миється сам."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Demonstrative pronominer — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Denne/dette/disse\" (цей) вказує на близький предмет, \"den/det/de\" (той) — на будь-який згаданий чи віддалений предмет.",
            "en": {
              "text": "\"Denne/dette/disse\" (this) points to something near, while \"den/det/de\" (that) refers to something already mentioned or farther away."
            }
          },
          {
            "type": "table",
            "title": "denne/dette/disse",
            "rows": [
              [
                "denne bog",
                "ця книга",
                "спільний"
              ],
              [
                "dette hus",
                "цей дім",
                "середній"
              ],
              [
                "disse bøger",
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
                "Denne bil er min.",
                "Ця машина моя."
              ],
              [
                "Den bog der er interessant.",
                "Та книга там цікава."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Spørgende pronominer — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "hvem?",
                "хто?",
                "Hvem er det?"
              ],
              [
                "hvad?",
                "що?",
                "Hvad laver du?"
              ],
              [
                "hvilken?",
                "який?",
                "Hvilken bog?"
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
                "Hvem er du?",
                "Хто ти?"
              ],
              [
                "Hvad hedder du?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-som-der",
        "title": "\"som\" og \"der\" — B1",
        "titleEn": "Relative Pronouns Som & Der — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Som\" — загальний відносний займенник для будь-якої ролі; \"der\" уживається лише тоді, коли в підрядному реченні є підметом.",
            "en": {
              "text": "\"Som\" is the general relative pronoun for any role; \"der\" is used only when it serves as the subject of the relative clause."
            }
          },
          {
            "type": "table",
            "title": "som vs der",
            "rows": [
              [
                "manden, der kommer",
                "чоловік, який приходить",
                "der — підмет"
              ],
              [
                "manden, som jeg så",
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
                "Det er den bog, som jeg læste.",
                "Це та книга, яку я читав."
              ],
              [
                "Kvinden, der bor her, er læge.",
                "Жінка, яка тут живе, — лікарка."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-v2",
        "title": "V2-ordstilling — B1",
        "titleEn": "V2 Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У головному реченні дієслово завжди стоїть на другій позиції (V2), незалежно від того, що стоїть на першій — підмет, обставина часу чи інший член речення. Якщо перше місце займає не підмет, підмет і дієслово міняються місцями.",
            "en": {
              "text": "In a main clause, the verb always occupies the second position (V2), regardless of what comes first — subject, time expression, or another element. If the subject isn't first, subject and verb invert."
            }
          },
          {
            "type": "table",
            "title": "V2 в дії",
            "rows": [
              [
                "Jeg spiser æbler i dag.",
                "Я їм яблука сьогодні.",
                "підмет перший"
              ],
              [
                "I dag spiser jeg æbler.",
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
                "I morgen tager vi til stranden.",
                "Завтра ми поїдемо на пляж."
              ],
              [
                "Nu forstår jeg det.",
                "Тепер я це розумію."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-subordinate",
        "title": "Ordstilling i ledsætninger — B1",
        "titleEn": "Word Order in Subordinate Clauses — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні порядок слів інший, ніж у головному: заперечення \"ikke\" та інші речennєві прислівники стоять ПЕРЕД дієсловом, а не після нього.",
            "en": {
              "text": "Word order in a subordinate clause differs from a main clause: negation \"ikke\" and other sentence adverbs go BEFORE the verb, not after."
            }
          },
          {
            "type": "table",
            "title": "Головне ↔ підрядне речення",
            "rows": [
              [
                "Han kommer ikke.",
                "Він не приходить (головне).",
                "ikke після дієслова"
              ],
              [
                "...at han ikke kommer.",
                "...що він не приходить (підрядне).",
                "ikke перед дієсловом"
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
                "Jeg ved, at hun ikke er hjemme.",
                "Я знаю, що її немає вдома."
              ],
              [
                "Han sagde, at han altid var glad.",
                "Він сказав, що завжди був щасливий."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-common",
        "title": "Almindelige præpositioner — A1",
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
                "til",
                "до",
                "til skolen"
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
                "Bogen ligger på bordet.",
                "Книга лежить на столі."
              ],
              [
                "Jeg går til skolen.",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Sideordnende konjunktioner — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "og",
                "і/та",
                "Jeg og du."
              ],
              [
                "men",
                "але",
                "Jeg vil, men kan ikke."
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
                "Jeg kan lide te og kaffe.",
                "Мені подобається чай і кава."
              ],
              [
                "Jeg vil gerne gå, men jeg har ikke tid.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Underordnende konjunktioner — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "at",
                "що",
                "Jeg ved, at du kommer."
              ],
              [
                "fordi",
                "тому що",
                "Jeg kom ikke, fordi jeg var syg."
              ],
              [
                "hvis",
                "якщо",
                "Hvis du har tid, så ring."
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
                "Jeg tror, at du har ret.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Jeg bliver, hvis det er nødvendigt.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "der-expletive",
        "title": "Foreløbigt subjekt \"der\" — B1",
        "titleEn": "Existential Der — B1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "\"Der\" як формальний підмет уводить конструкцію існування (\"є, існує\"), коли реальний підмет невизначений і стоїть після дієслова.",
            "en": {
              "text": "\"Der\" as a formal (expletive) subject introduces existence constructions (\"there is/are\") when the real subject is indefinite and comes after the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Der er en bog på bordet.",
                "На столі є книга."
              ],
              [
                "Der var mange mennesker.",
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
                "Der er ingen hjemme.",
                "Нікого немає вдома."
              ],
              [
                "Der findes ikke noget bedre.",
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
                "en/et",
                "один",
                "1"
              ],
              [
                "fem",
                "п'ять",
                "5"
              ],
              [
                "ti",
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
                "Jeg har to brødre.",
                "У мене два брати."
              ],
              [
                "Klokken er tre.",
                "Третя година."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Ordenstal — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "første",
                "перший",
                "1-й"
              ],
              [
                "anden",
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
                "Det er min første dag på arbejdet.",
                "Це мій перший день на роботі."
              ],
              [
                "Jeg bor på anden sal.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-vigesimal",
        "title": "Tyvetalssystemet (50-90) — B1",
        "titleEn": "Vigesimal System (50-90) — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 50, 60, 70, 80, 90 у данській засновані на застарілій двадцятковій системі рахунку — halvtreds (буквально \"пів третього двадцятка\") означає 50, а не просто похідне від \"п'ять\". Це найвідоміша й найскладніша риса данських числівників.",
            "en": {
              "text": "The numbers 50, 60, 70, 80, 90 in Danish are based on an archaic base-20 counting system — halvtreds (literally \"half of the third twenty\") means 50, not simply derived from \"five\". This is the most famous and trickiest feature of Danish numerals."
            }
          },
          {
            "type": "table",
            "title": "Двадцяткова система",
            "rows": [
              [
                "halvtreds",
                "50",
                "букв. \"пів третього двадцятка\""
              ],
              [
                "tres",
                "60",
                "букв. \"три двадцятки\""
              ],
              [
                "firs",
                "80",
                "букв. \"чотири двадцятки\""
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
                "Han er halvtreds år gammel.",
                "Йому п'ятдесят років."
              ],
              [
                "Det koster tres kroner.",
                "Це коштує шістдесят крон."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Ugedage — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "mandag",
                "понеділок",
                "1"
              ],
              [
                "fredag",
                "п'ятниця",
                "5"
              ],
              [
                "søndag",
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
                "Om mandagen har jeg undervisning.",
                "У понеділок у мене заняття."
              ],
              [
                "I dag er det onsdag.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Måneder og datoer — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "januar",
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
                "I dag er det den femte maj.",
                "Сьогодні п'яте травня."
              ],
              [
                "Jeg er født i december.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Klokken — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Hvad er klokken?\". Данська, як і німецька, орієнтує пів-годину на НАСТУПНУ годину: \"halv tre\" означає \"пів на третю\" (2:30), а не \"пів третьої\".",
            "en": {
              "text": "To ask the time, Danes say \"Hvad er klokken?\". Danish, like German, orients the half-hour toward the NEXT hour: \"halv tre\" means \"half to three\" (2:30)."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Klokken er et.",
                "Перша година.",
                "1:00"
              ],
              [
                "Klokken er halv tre.",
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
                "Hvad er klokken?",
                "Котра година?"
              ],
              [
                "Toget kører klokken otte.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Refleksive verber — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова обов'язково вживаються зі зворотним займенником (mig, dig, sig, os, jer, sig) і мають відмінне значення від дієслова без нього.",
            "en": {
              "text": "Some verbs obligatorily take a reflexive pronoun (mig, dig, sig, os, jer, sig) and have a different meaning from the plain verb."
            }
          },
          {
            "type": "table",
            "title": "Без зв. займ. ↔ зі зворотним",
            "rows": [
              [
                "vaske (мити)",
                "vaske sig (митися)",
                "себе"
              ],
              [
                "skynde (квапити)",
                "skynde sig (квапитися)",
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
                "Jeg glæder mig til ferien.",
                "Я тішуся відпустці наперед."
              ],
              [
                "Skynd dig!",
                "Поспіши!"
              ]
            ]
          }
        ]
      },
      {
        "id": "separable-verb-particles",
        "title": "Verber med partikel — B1",
        "titleEn": "Verbs with Separable Particles — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів утворюють нове значення з часткою (op, ud, ind), яка в головному реченні відокремлюється й стоїть у кінці.",
            "en": {
              "text": "Many verbs form a new meaning with a particle (op, ud, ind), which detaches in the main clause and moves to the end."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "stå op",
                "вставати"
              ],
              [
                "gå ud",
                "виходити"
              ],
              [
                "komme ind",
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
                "Jeg står altid tidligt op.",
                "Я завжди рано встаю."
              ],
              [
                "Han gik ud af butikken.",
                "Він вийшов з магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Dannelse af adverbier — A2",
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
                "hurtig (швидкий)",
                "hurtigt",
                "швидко"
              ],
              [
                "smuk (гарний)",
                "smukt",
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
                "Han taler hurtigt.",
                "Він говорить швидко."
              ],
              [
                "Hun synger smukt.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Kvantorer (meget/mange) — A2",
        "titleEn": "Quantifiers (Meget/Mange) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Meget\" (багато) уживається з незлічуваними іменниками, \"mange\" (багато) — зі злічуваними в множині.",
            "en": {
              "text": "\"Meget\" (much) is used with uncountable nouns, while \"mange\" (many) is used with countable plural nouns."
            }
          },
          {
            "type": "table",
            "title": "meget vs mange",
            "rows": [
              [
                "meget vand",
                "багато води",
                "незлічуване"
              ],
              [
                "mange bøger",
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
                "Jeg har ikke meget tid.",
                "У мене небагато часу."
              ],
              [
                "Der er mange mennesker her.",
                "Тут багато людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-nouns",
        "title": "Sammensatte ord — B1",
        "titleEn": "Compound Nouns — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Данська, як і німецька, вільно поєднує кілька іменників в одне довге слово без пробілів; рід усього складеного слова визначається останнім елементом.",
            "en": {
              "text": "Danish, like German, freely combines several nouns into one long word with no spaces; the gender of the whole compound is determined by the last element."
            }
          },
          {
            "type": "table",
            "title": "Приклади складних слів",
            "rows": [
              [
                "fod (нога) + bold (м'яч)",
                "fodbold",
                "футбол"
              ],
              [
                "brand (пожежа) + mand (людина)",
                "brandmand",
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
                "Vi spiller fodbold hver søndag.",
                "Ми граємо у футбол щонеділі."
              ],
              [
                "Han er brandmand.",
                "Він пожежник."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-vs-preposition",
        "title": "S-genitiv vs. \"af\" — B1",
        "titleEn": "S-Genitive vs. Af-Construction — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Для власників-осіб зазвичай уживають s-генітив, а для неживих чи абстрактних понять частіше конструкцію з прийменником \"af\" (від/з).",
            "en": {
              "text": "For personal owners, the s-genitive is usually used, while for inanimate or abstract concepts the construction with \"af\" (of) is more common."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Peters bil",
                "машина Петера",
                "s-генітив"
              ],
              [
                "slutningen af filmen",
                "кінець фільму",
                "af-конструкція"
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
                "Farven af himlen er blå.",
                "Колір неба синій."
              ],
              [
                "Det er starten af noget nyt.",
                "Це початок чогось нового."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronoun-man",
        "title": "Upersonligt pronomen \"man\" — A2",
        "titleEn": "Impersonal Pronoun Man — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "\"Man\" (\"людина взагалі, ти/ми\") уживається для загальних тверджень, коли не важливо, хто саме є діячем — щось на кшталт українського безособового \"кажуть\" чи узагальненого \"ти\".",
            "en": {
              "text": "\"Man\" (\"one, you, people in general\") is used for general statements when the specific doer doesn't matter — similar to a generic \"you\" or \"one\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Man skal ikke lyve.",
                "Не варто брехати (загалом)."
              ],
              [
                "I Danmark spiser man meget brød.",
                "У Данії їдять багато хліба."
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
                "Man kan se havet herfra.",
                "Звідси видно море."
              ],
              [
                "Man ved aldrig.",
                "Ніколи не знаєш наперед."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"du\" og \"De\" (formalitet) — A2",
        "titleEn": "Du vs De (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасна данська майже повністю відмовилась від формального звертання \"De\" на користь неформального \"du\" — навіть у бізнесі й до незнайомців, на відміну від багатьох інших європейських мов.",
            "en": {
              "text": "Modern Danish has almost entirely abandoned the formal \"De\" in favor of informal \"du\" — even in business and toward strangers, unlike many other European languages."
            }
          },
          {
            "type": "table",
            "title": "du (майже завжди) vs De (рідко, дуже формально)",
            "rows": [
              [
                "Har du tid?",
                "У тебе є час? (звичайне звертання)"
              ],
              [
                "Har De tid?",
                "У Вас є час? (дуже формально, рідко)"
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
                "Hvordan har du det?",
                "Як ти? (навіть до начальника)"
              ],
              [
                "Kan du hjælpe mig?",
                "Ти можеш мені допомогти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Hilsner og faste udtryk — A1",
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
                "Tak.",
                "Дякую."
              ],
              [
                "Undskyld.",
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
                "Rart at møde dig.",
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
        "title": "Vejrudtryk — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "Det er solskin.",
                "Сонячно."
              ],
              [
                "Det regner.",
                "Іде дощ."
              ],
              [
                "Det sner.",
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
                "I dag er det meget koldt.",
                "Сьогодні дуже холодно."
              ],
              [
                "I morgen bliver det overskyet.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Faste udtryk og idiomer — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Der er ingen ko på isen.",
                "(букв. немає корови на льоду) — немає причин для хвилювання."
              ],
              [
                "Det regner skomagerdrenge.",
                "(букв. дощ падає шевчуками) — сильна злива."
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
                "Slap af, der er ingen ko på isen.",
                "Розслабся, все гаразд."
              ],
              [
                "Han er lidt for meget hygge.",
                "Він занадто зациклений на затишку (hygge)."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-predicative-vs-attributive",
        "title": "Prædikativ vs. attributiv brug — B1",
        "titleEn": "Predicative vs. Attributive Adjectives — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник у ролі присудка (після være) узгоджується з підметом так само, як і перед іменником — на відміну від деяких мов, де форма присудкового прикметника відрізняється.",
            "en": {
              "text": "A predicative adjective (after være) agrees with the subject the same way as an attributive one before a noun — unlike some languages where the predicate form differs."
            }
          },
          {
            "type": "table",
            "title": "Атрибутивне ↔ присудкове",
            "rows": [
              [
                "et stort hus",
                "великий дім",
                "атрибутивне"
              ],
              [
                "Huset er stort.",
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
                "Bilen er hurtig.",
                "Машина швидка."
              ],
              [
                "Børnene er trætte.",
                "Діти втомлені."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Orddannelse — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Данська активно утворює нові слова додаванням суфіксів: -hed (абстрактне поняття), -else (результат дії), -lig (прикметники).",
            "en": {
              "text": "Danish actively derives new words with suffixes: -hed (abstract concept), -else (result of an action), -lig (adjectives)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "fri (вільний) → frihed",
                "свобода"
              ],
              [
                "oplevet (пережив) → oplevelse",
                "враження"
              ],
              [
                "ven (друг) → venlig",
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
                "Frihed er vigtig for mig.",
                "Свобода важлива для мене."
              ],
              [
                "Han er meget venlig.",
                "Він дуже дружній."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective",
        "title": "Kollektive talord (par/dusin) — A2",
        "titleEn": "Collective Numerals (Par/Dusin) — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "et par",
                "пара"
              ],
              [
                "et dusin",
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
                "Jeg har et par sko.",
                "У мене є пара взуття."
              ],
              [
                "Vi købte et dusin æg.",
                "Ми купили дюжину яєць."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Priser og penge — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Hvad koster det?\" (\"Скільки це коштує?\"), а валюта \"kroner\" стоїть після числа.",
            "en": {
              "text": "To ask the price, one says \"Hvad koster det?\" (\"What does it cost?\"), and the currency \"kroner\" follows the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hundrede kroner",
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
                "Hvad koster den her?",
                "Скільки коштує це?"
              ],
              [
                "Det er for dyrt.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "sentence-adverbs-position",
        "title": "Sætningsadverbialer — B1",
        "titleEn": "Sentence Adverb Placement — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Речennєві прислівники (altid, aldrig, nok, jo) у головному реченні стоять одразу після дієслова (чи після підмета, якщо дієслово перше), на тому самому місці, де й \"ikke\".",
            "en": {
              "text": "Sentence adverbs (altid, aldrig, nok, jo) in a main clause stand right after the verb (or after the subject if the verb comes first), the same slot as \"ikke\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jeg drikker altid kaffe.",
                "Я завжди п'ю каву."
              ],
              [
                "Han kommer nok i morgen.",
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
                "Vi ses jo i morgen.",
                "Ми ж побачимося завтра."
              ],
              [
                "Hun er aldrig sen.",
                "Вона ніколи не запізнюється."
              ]
            ]
          }
        ]
      },
      {
        "id": "indirect-object-word-order",
        "title": "Ordstilling med indirekte objekt — B1",
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
                "Jeg giver hende bogen.",
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
                "Han sendte mig et brev.",
                "Він надіслав мені листа."
              ],
              [
                "Vi viste dem huset.",
                "Ми показали їм дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-pronouns",
        "title": "Negative pronominer (ingen/intet) — B1",
        "titleEn": "Negative Pronouns (Ingen/Intet) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ingen",
                "ніхто/жоден",
                "Der er ingen hjemme."
              ],
              [
                "intet",
                "ніщо",
                "Jeg så intet."
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
                "Ingen ved det.",
                "Ніхто цього не знає."
              ],
              [
                "Der er intet at gøre.",
                "Нічого не можна вдіяти."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamative-constructions",
        "title": "Udråbskonstruktioner (hvor/sikke) — B1",
        "titleEn": "Exclamative Constructions — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Оклична конструкція \"hvor + прикметник\" (\"який/яка ж\") виражає захоплення чи здивування якістю; \"sikke en/et\" робить те саме для іменника.",
            "en": {
              "text": "The exclamative construction \"hvor + adjective\" (\"how...!\") expresses admiration or surprise at a quality; \"sikke en/et\" does the same for a noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Hvor er det smukt!",
                "Як же це гарно!"
              ],
              [
                "Sikke en dag!",
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
                "Hvor er du sød!",
                "Який же ти милий!"
              ],
              [
                "Sikke et rod!",
                "Який же безлад!"
              ]
            ]
          }
        ]
      },
      {
        "id": "preposition-time-place",
        "title": "\"i\" og \"på\" (tid og sted) — A2",
        "titleEn": "I vs På (Time & Place) — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "\"I\" переважно вживають із закритими просторами й тривалими періодами часу (i huset, i sommer), \"på\" — з поверхнями й окремими днями/подіями (på bordet, på mandag).",
            "en": {
              "text": "\"I\" is mainly used with enclosed spaces and extended time periods (i huset, i sommer), while \"på\" is used with surfaces and specific days/events (på bordet, på mandag)."
            }
          },
          {
            "type": "table",
            "title": "i vs på",
            "rows": [
              [
                "i haven",
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
                "Vi mødes på mandag.",
                "Ми зустрінемося в понеділок."
              ],
              [
                "Jeg bliver hjemme i weekenden.",
                "Я залишуся вдома на вихідних."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Spørgeord — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "hvor?",
                "де?",
                "Hvor er du?"
              ],
              [
                "hvornår?",
                "коли?",
                "Hvornår kommer du?"
              ],
              [
                "hvorfor?",
                "чому?",
                "Hvorfor græder du?"
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
                "Hvor er banegården?",
                "Де вокзал?"
              ],
              [
                "Hvorfor er du sent på den?",
                "Чому ти запізнюєшся?"
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Tidsudtryk (i dag/i går/i morgen) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "i dag",
                "сьогодні"
              ],
              [
                "i går",
                "вчора"
              ],
              [
                "i morgen",
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
                "I dag har jeg fri.",
                "Сьогодні я вільний."
              ],
              [
                "Vi ses i morgen.",
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
                "forår",
                "весна"
              ],
              [
                "sommer",
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
                "Om sommeren er det varmt.",
                "Влітку тепло."
              ],
              [
                "Jeg elsker efteråret.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "At udtrykke meninger — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jeg synes, at...",
                "Я вважаю, що..."
              ],
              [
                "Efter min mening...",
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
                "Jeg synes, det er en god idé.",
                "Я вважаю, що це хороша ідея."
              ],
              [
                "Efter min mening er det for dyrt.",
                "На мою думку, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-no-agreement-indeclinable",
        "title": "Ubøjelige adjektiver — B1",
        "titleEn": "Indeclinable Adjectives — B1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька поширених прикметників (moderne, lilla, spændende — ті, що вже закінчуються на -e) не змінюються за родом чи числом, на відміну від звичайного правила узгодження.",
            "en": {
              "text": "A handful of common adjectives (moderne, lilla, spændende — those already ending in -e) never change for gender or number, unlike the regular agreement rule."
            }
          },
          {
            "type": "table",
            "title": "Приклади незмінних прикметників",
            "rows": [
              [
                "et moderne hus",
                "сучасний дім",
                "середній, без -t"
              ],
              [
                "moderne huse",
                "сучасні доми",
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
                "Det er en moderne bygning.",
                "Це сучасна будівля."
              ],
              [
                "Hendes kjole er lilla.",
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
        "title": "Uregelmæssige verber — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів (være, have, gøre, gå) утворюють минулий час і дієприкметник не за загальним правилом, і їхні форми варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs (være, have, gøre, gå) form the past tense and participle irregularly, and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "være (бути)",
                "var, har været",
                "був, був (перфект)"
              ],
              [
                "have (мати)",
                "havde, har haft",
                "мав, мав (перфект)"
              ],
              [
                "gøre (робити)",
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
                "Jeg var i skole i går.",
                "Я був у школі вчора."
              ],
              [
                "Han har gjort det færdigt.",
                "Він це закінчив."
              ]
            ]
          }
        ]
      },
      {
        "id": "stod-glottal-stop",
        "title": "Stød — B1",
        "titleEn": "Stød (Glottal Stop) — B1",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Stød — гортанна змичка, унікальна риса данської вимови (відсутня в норвезькій і шведській), яка може змінювати значення слова, наприклад розрізняючи однину й множину чи різні слова, що пишуться однаково.",
            "en": {
              "text": "Stød is a glottal-stop feature unique to Danish pronunciation (absent from Norwegian and Swedish), and it can change a word's meaning — for example distinguishing singular from plural, or two otherwise identically spelled words."
            }
          },
          {
            "type": "table",
            "title": "Приклади розрізнення через stød",
            "rows": [
              [
                "hun (вона, без stød)",
                "huns (собак, зі stød)",
                "hun vs hund"
              ],
              [
                "mor (мама, без stød)",
                "mord (вбивство, зі stød)",
                "різні слова"
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
                "Min mor er lærer.",
                "Моя мама вчителька."
              ],
              [
                "Det var et mord.",
                "Це було вбивство."
              ]
            ]
          }
        ]
      },
      {
        "id": "silent-letters-soft-d",
        "title": "Stumme bogstaver og blødt d — B1",
        "titleEn": "Silent Letters & Soft D — B1",
        "emoji": "🔇",
        "sections": [
          {
            "type": "intro",
            "text": "Данська вимова часто суттєво відрізняється від написання: буква d після голосного часто вимовляється як \"м'яке d\" [ð] (схоже на англійське th), а в багатьох словах приголосні взагалі не вимовляються.",
            "en": {
              "text": "Danish pronunciation often differs substantially from spelling: the letter d after a vowel is often pronounced as a \"soft d\" [ð] (similar to English th), and in many words consonants aren't pronounced at all."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mad (їжа)",
                "[ˈmæð]",
                "м'яке d"
              ],
              [
                "hvad (що)",
                "[ˈvað]",
                "h не вимовляється, м'яке d"
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
                "Maden er god.",
                "Їжа хороша."
              ],
              [
                "Hvad laver du?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      }
    ]
  }
];
