// Vymova — data/grammar-data/grammar_eo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_EO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personaj pronomoj — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Есперанто має цілком регулярну систему без винятків: \"vi\" однаково означає і \"ти\", і \"ви\" — окремої форми множини не потрібно.",
            "en": {
              "text": "Esperanto has a fully regular system with no exceptions: \"vi\" means both \"you\" (singular) and \"you\" (plural) — no separate plural form is needed."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mi"
              ],
              [
                "ти / ви",
                "vi"
              ],
              [
                "він / вона / воно",
                "li / ŝi / ĝi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "вони",
                "ili"
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
        "id": "to-be-esti",
        "title": "Дієслово \"esti\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово esti (бути) абсолютно регулярне й не змінюється за особою чи числом — лише за часом, як і всі есперантські дієслова.",
            "en": {
              "text": "The verb esti (to be) is completely regular and doesn't change for person or number — only for tense, like every Esperanto verb."
            }
          },
          {
            "type": "formula",
            "title": "esti — теперішній час",
            "rows": [
              [
                "Mi",
                "estas instruisto.",
                "я вчитель"
              ],
              [
                "Ili",
                "estas instruistoj.",
                "вони вчителі (esti не змінюється!)"
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
                "Ŝi estas kuracisto.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Esti (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ne\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ne, яка ставиться перед словом, яке заперечує, — просто й регулярно, без винятків.",
            "en": {
              "text": "Negation is formed with the particle ne, placed before the word it negates — simple and regular, with no exceptions."
            }
          },
          {
            "type": "formula",
            "title": "ne + дієслово",
            "rows": [
              [
                "Mi scias.",
                "Mi ne scias.",
                "Я знаю. → Я не знаю."
              ],
              [
                "Li venis.",
                "Li ne venis.",
                "Він прийшов. → Він не прийшов."
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
                "Mi ne komprenas.",
                "Я не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ne — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"ĉu\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні завжди утворюються часткою ĉu на самому початку речення — універсальне правило без винятків.",
            "en": {
              "text": "Yes/no questions are always formed with the particle ĉu at the very start of the sentence — a universal rule with no exceptions."
            }
          },
          {
            "type": "formula",
            "title": "Ĉu + твердження?",
            "rows": [
              [
                "Vi estas laca.",
                "Ĉu vi estas laca?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Ŝi venos.",
                "Ĉu ŝi venos?",
                "Вона прийде. → Вона прийде?"
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
                "Ĉu vi malsatas?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Ĉu — A1"
      },
      {
        "id": "sixteen-rules-overview",
        "title": "16 правил граматики без жодного винятку — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Есперанто засноване на 16 правилах граматики Заменгофа (1887), які не мають жодного винятку — це найголовніша риса мови: кожен іменник закінчується на -o, прикметник на -a, прислівник на -e, а кожне дієслово відмінюється абсолютно однаково.",
            "en": {
              "text": "Esperanto is built on Zamenhof's 16 grammar rules (1887), which have zero exceptions — this is the language's core trait: every noun ends in -o, every adjective in -a, every adverb in -e, and every verb conjugates in exactly the same way."
            }
          },
          {
            "type": "table",
            "title": "Приклад системності",
            "rows": [
              [
                "libr-o (книга)",
                "закінчення -o = іменник"
              ],
              [
                "bel-a (гарний)",
                "закінчення -a = прикметник"
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
                "La bela libro estas granda.",
                "Гарна книга велика."
              ]
            ]
          }
        ],
        "titleEn": "16 Grammar Rules with Zero Exceptions — A1"
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
        "id": "no-irregular-verb-conjugation",
        "title": "Жодного неправильного дієслова — B1",
        "titleEn": "Zero Irregular Verb Conjugation — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від усіх природних мов, кожне з-поміж тисяч дієслів есперанто відмінюється абсолютно однаково — вивчивши одне дієслово, ти знаєш, як відмінюються всі.",
            "en": {
              "text": "Unlike every natural language, each of the thousands of Esperanto verbs conjugates in exactly the same way — learn one verb and you know how to conjugate all of them."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "esti (бути)",
                "estas/estis/estos — так само, як kuri (бігти) → kuras/kuris/kuros"
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
                "Mi estas, mi kuras, mi manĝas — sama skemo.",
                "Я є, я біжу, я їм — та сама схема."
              ],
              [
                "Ĉiuj verboj sekvas la saman regulon.",
                "Усі дієслова слідують тому самому правилу."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-tense-as",
        "title": "Теперішній час (-as) — A1",
        "titleEn": "Present Tense (-As) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється закінченням -as, доданим до основи дієслова, — однаково для всіх осіб і чисел, без жодного винятку в усій мові.",
            "en": {
              "text": "The present tense is formed with the ending -as added to the verb stem — the same for every person and number, with no exception in the entire language."
            }
          },
          {
            "type": "formula",
            "title": "основа + -as",
            "rows": [
              [
                "mi",
                "parolas",
                "я говорю"
              ],
              [
                "vi",
                "parolas",
                "ти/ви говориш(-ите)"
              ],
              [
                "ili",
                "parolas",
                "вони говорять"
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
                "Ni manĝas kune.",
                "Ми їмо разом."
              ],
              [
                "Li laboras multe.",
                "Він багато працює."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense-is",
        "title": "Минулий час (-is) — A1",
        "titleEn": "Past Tense (-Is) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється закінченням -is, знову однаково для всіх осіб і чисел.",
            "en": {
              "text": "The past tense is formed with the ending -is, again the same for every person and number."
            }
          },
          {
            "type": "formula",
            "title": "основа + -is",
            "rows": [
              [
                "mi",
                "parolis",
                "я говорив"
              ],
              [
                "ŝi",
                "parolis",
                "вона говорила"
              ],
              [
                "ili",
                "parolis",
                "вони говорили"
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
                "Mi legis libron hieraŭ.",
                "Учора я читав книгу."
              ],
              [
                "Ŝi venis frue.",
                "Вона прийшла рано."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-os",
        "title": "Майбутній час (-os) — A1",
        "titleEn": "Future Tense (-Os) — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється закінченням -os, так само однаково для всіх осіб.",
            "en": {
              "text": "The future tense is formed with the ending -os, again identical for every person."
            }
          },
          {
            "type": "formula",
            "title": "основа + -os",
            "rows": [
              [
                "mi",
                "parolos",
                "я говоритиму"
              ],
              [
                "ni",
                "parolos",
                "ми говоритимемо"
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
                "Morgaŭ ni venos.",
                "Завтра ми прийдемо."
              ],
              [
                "Ili laboros.",
                "Вони працюватимуть."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood-us",
        "title": "Умовний спосіб (-us) — A2",
        "titleEn": "Conditional Mood (-Us) — A2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється закінченням -us, вживається для гіпотетичної умови й ввічливого прохання.",
            "en": {
              "text": "The conditional mood is formed with the ending -us, used for hypothetical conditions and polite requests."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Se mi havus tempon, mi venus.",
                "Якби я мав час, я б прийшов."
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
                "Mi ŝatus veni.",
                "Я хотів би прийти."
              ],
              [
                "Ĉu vi povus helpi min?",
                "Ти міг би мені допомогти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-jussive-u",
        "title": "Наказовий/спонукальний спосіб (-u) — A1",
        "titleEn": "Imperative/Jussive Mood (-U) — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб (-u) вживається і для прямого наказу, і для непрямого спонукання (\"хай він...\"), і без займенника для наказу, і з ним для пропозиції.",
            "en": {
              "text": "The imperative (-u) is used both for a direct command and an indirect exhortation (\"let him...\"), with no pronoun for a command, and with one for a suggestion."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Venu!",
                "Приходь!"
              ],
              [
                "Ni iru.",
                "Ходімо."
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
                "Fermu la pordon!",
                "Зачини двері!"
              ],
              [
                "Li venu se li volas.",
                "Хай прийде, якщо хоче."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-i",
        "title": "Інфінітив (-i) — A1",
        "titleEn": "Infinitive (-I) — A1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив — словникова форма дієслова із закінченням -i, вживається після модальних дієслів і як підмет речення.",
            "en": {
              "text": "The infinitive is the dictionary form of the verb, ending in -i, used after modal verbs and as a sentence subject."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Legi estas agrable.",
                "Читати приємно."
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
                "Mi volas manĝi.",
                "Я хочу їсти."
              ],
              [
                "Ŝi devas iri.",
                "Їй треба йти."
              ]
            ]
          }
        ]
      },
      {
        "id": "participle-active-present-ant",
        "title": "Активний дієприкметник теперішнього часу (-ant-) — B1",
        "titleEn": "Present Active Participle (-Ant-) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник теперішнього часу (-anta) виражає дію, що триває одночасно з головною подією.",
            "en": {
              "text": "The present active participle (-anta) expresses an action ongoing at the same time as the main event."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "la leganta viro",
                "чоловік, який читає"
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
                "La kuranta hundo estas granda.",
                "Собака, який біжить, великий."
              ],
              [
                "Mi vidis lin skribantan.",
                "Я бачив його, коли він писав."
              ]
            ]
          }
        ]
      },
      {
        "id": "participle-active-past-int",
        "title": "Активний дієприкметник минулого часу (-int-) — B1",
        "titleEn": "Past Active Participle (-Int-) — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник минулого часу (-inta) виражає дію, завершену до головної події.",
            "en": {
              "text": "The past active participle (-inta) expresses an action completed before the main event."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "la veninta viro",
                "чоловік, який прийшов"
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
                "La skribinta studento foriris.",
                "Студент, який написав (роботу), пішов."
              ],
              [
                "Mi renkontis la leginton.",
                "Я зустрів того, хто прочитав (книгу)."
              ]
            ]
          }
        ]
      },
      {
        "id": "participle-active-future-ont",
        "title": "Активний дієприкметник майбутнього часу (-ont-) — B1",
        "titleEn": "Future Active Participle (-Ont-) — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник майбутнього часу (-onta) виражає дію, що станеться після головної події.",
            "en": {
              "text": "The future active participle (-onta) expresses an action that will happen after the main event."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "la venonta jaro",
                "наступний рік (той, що прийде)"
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
                "La forironta trajno atendas.",
                "Потяг, який (незабаром) від'їде, чекає."
              ],
              [
                "Mi vidas la parolonton.",
                "Я бачу того, хто буде говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "participle-passive-at-it-ot",
        "title": "Пасивні дієприкметники (-at-/-it-/-ot-) — B1",
        "titleEn": "Passive Participles (-At-/-It-/-Ot-) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивні дієприкметники (-ata теперішній, -ita минулий, -ota майбутній) виражають дію, спрямовану на іменник, а не виконану ним.",
            "en": {
              "text": "Passive participles (-ata present, -ita past, -ota future) express an action directed at the noun, not performed by it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "la skribata letero",
                "лист, що пишеться"
              ],
              [
                "la skribita letero",
                "написаний лист"
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
                "La domo estas konstruata.",
                "Дім будується."
              ],
              [
                "La libro estis legita de multaj.",
                "Книгу прочитали багато людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-tenses-esti-participle",
        "title": "Складені часи (esti + дієприкметник) — B2",
        "titleEn": "Compound Tenses (Esti + Participle) — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Поєднуючи esti в будь-якому часі з будь-яким з шести дієприкметників, можна утворити цілу систему детальних складених часів, яких немає в більшості мов.",
            "en": {
              "text": "Combining esti in any tense with any of the six participles produces a whole system of detailed compound tenses that most languages lack."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mi estis skribinta.",
                "Я вже написав (до того моменту)."
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
                "Mi estos forironta kiam vi venos.",
                "Я вже буду готовий поїхати, коли ти прийдеш."
              ],
              [
                "La letero estas skribota morgaŭ.",
                "Лист має бути написаний завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs-si",
        "title": "Зворотне значення через \"si\" — A2",
        "titleEn": "Reflexive Meaning via \"Si\" — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"себе\" (лише для 3-ї особи) виражається окремим займенником si, а не суфіксом дієслова.",
            "en": {
              "text": "The reflexive meaning \"self\" (only for the 3rd person) is expressed with the separate pronoun si, not a verb suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Li lavas sin.",
                "Він миється (себе)."
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
                "Ŝi rigardas sin en la spegulo.",
                "Вона дивиться на себе в дзеркало."
              ],
              [
                "Ili amas sin.",
                "Вони люблять себе (кожен себе)."
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
        "id": "noun-ending-o",
        "title": "Іменник — закінчення -o — A1",
        "titleEn": "Noun Ending -O — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен іменник в есперанто обов'язково закінчується на -o — без жодного винятку, незалежно від значення чи походження.",
            "en": {
              "text": "Every noun in Esperanto obligatorily ends in -o — with no exception whatsoever, regardless of meaning or origin."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "domo (дім)",
                "libro (книга)"
              ],
              [
                "amo (любов)",
                "tempo (час)"
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
                "La domo estas granda.",
                "Дім великий."
              ],
              [
                "Amo estas grava.",
                "Любов важлива."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-ending-a",
        "title": "Прикметник — закінчення -a — A1",
        "titleEn": "Adjective Ending -A — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен прикметник закінчується на -a й узгоджується з іменником лише за числом і відмінком (не за родом, якого немає).",
            "en": {
              "text": "Every adjective ends in -a and agrees with the noun only in number and case (not gender, which doesn't exist)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "bela (гарний)",
                "granda (великий)"
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
                "Bela floro.",
                "Гарна квітка."
              ],
              [
                "Belaj floroj.",
                "Гарні квіти."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverb-ending-e",
        "title": "Прислівник — закінчення -e — A1",
        "titleEn": "Adverb Ending -E — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен прислівник способу дії закінчується на -e, часто утворений від прикметника простою заміною -a на -e.",
            "en": {
              "text": "Every manner adverb ends in -e, often formed from the adjective by simply swapping -a for -e."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "bela (гарний)",
                "bele",
                "гарно"
              ],
              [
                "rapida (швидкий)",
                "rapide",
                "швидко"
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
                "Li kuras rapide.",
                "Він швидко бігає."
              ],
              [
                "Ŝi kantas bele.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case-n",
        "title": "Знахідний відмінок (-n) — A2",
        "titleEn": "Accusative Case (-N) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Єдиний відмінок есперанто — знахідний, утворюваний суфіксом -n, доданим до закінчення іменника чи прикметника, — вказує на прямий додаток незалежно від порядку слів.",
            "en": {
              "text": "Esperanto's only case is the accusative, formed with the suffix -n added to the noun's or adjective's ending — marks the direct object regardless of word order."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "libro → libron",
                "книгу (додаток)"
              ],
              [
                "Mi legas libron.",
                "Я читаю книгу."
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
                "Belan libron mi legas.",
                "Гарну книгу я читаю (вільний порядок, -n показує додаток)."
              ],
              [
                "Mi vidas la hundon.",
                "Я бачу собаку."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix-j",
        "title": "Множина (-j) — A1",
        "titleEn": "Plural Suffix (-J) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -j, доданим після закінчення -o чи -a — без винятків і незалежно від значення слова.",
            "en": {
              "text": "The plural is formed with the suffix -j, added after the -o or -a ending — with no exceptions and regardless of the word's meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "libro → libroj",
                "книги"
              ],
              [
                "bela → belaj",
                "гарні"
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
                "La libroj estas belaj.",
                "Книги гарні."
              ],
              [
                "Grandaj domoj.",
                "Великі доми."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-plural-jn",
        "title": "Знахідна множина (-jn) — A2",
        "titleEn": "Accusative Plural (-Jn) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси множини й знахідного відмінка поєднуються в кінці слова в передбачуваному порядку -jn.",
            "en": {
              "text": "The plural and accusative suffixes combine at the end of the word in the predictable order -jn."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "libroj → librojn",
                "книги (додаток)"
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
                "Mi legas belajn librojn.",
                "Я читаю гарні книги."
              ],
              [
                "Ŝi havas grandajn hundojn.",
                "У неї великі собаки."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article-la",
        "title": "Означений артикль \"la\" — A1",
        "titleEn": "Definite Article \"La\" — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль la має рівно одну форму для всіх іменників — незалежно від роду (якого немає), числа чи відмінка.",
            "en": {
              "text": "The definite article la has exactly one form for all nouns — regardless of gender (which doesn't exist), number, or case."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "la domo",
                "цей дім"
              ],
              [
                "la domoj",
                "ці доми"
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
                "La knabo legas.",
                "Хлопчик читає."
              ],
              [
                "La knabinoj kantas.",
                "Дівчата співають."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-indefinite-article",
        "title": "Відсутність неозначеного артикля — A1",
        "titleEn": "No Indefinite Article — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Есперанто взагалі не має неозначеного артикля — гола форма іменника вже означає \"якийсь\".",
            "en": {
              "text": "Esperanto has no indefinite article at all — the bare noun form already means \"a/some\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "domo",
                "дім / якийсь дім (без артикля)"
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
                "Mi havas hundon.",
                "У мене є собака."
              ],
              [
                "Domo staras tie.",
                "Там стоїть дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "correlatives-overview",
        "title": "Таблиця кореляцій — 45 слів за одним шаблоном — B1",
        "titleEn": "The Correlative Table — 45 Words, One Pattern — B1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "45 питальних, вказівних, неозначених і заперечних слів (\"хто\", \"це\", \"хтось\", \"ніхто\" тощо) будуються з 9 префіксів і 5 суфіксів за строгою таблицею — вивчивши цю систему, отримуєш усі 45 слів одразу.",
            "en": {
              "text": "45 interrogative, demonstrative, indefinite, and negative words (\"who\", \"this\", \"someone\", \"nobody\", etc.) are built from 9 prefixes and 5 suffixes in a strict grid — learning this system gives you all 45 words at once."
            }
          },
          {
            "type": "table",
            "title": "Приклад ряду",
            "rows": [
              [
                "ki- + -u = kiu (хто/який)",
                "ti- + -u = tiu (той)"
              ],
              [
                "i- + -u = iu (хтось)",
                "neni- + -u = neniu (ніхто)"
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
                "Kiu venis?",
                "Хто прийшов?"
              ],
              [
                "Neniu scias.",
                "Ніхто не знає."
              ]
            ]
          }
        ]
      },
      {
        "id": "correlatives-ki-question",
        "title": "Питальні кореляції (ki-) — A1",
        "titleEn": "Interrogative Correlatives (Ki-) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kiu",
                "хто/який"
              ],
              [
                "kio",
                "що"
              ],
              [
                "kie",
                "де"
              ],
              [
                "kiam",
                "коли"
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
                "Kio estas tio?",
                "Що це?"
              ],
              [
                "Kie vi loĝas?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "correlatives-ti-demonstrative",
        "title": "Вказівні кореляції (ti-) — A1",
        "titleEn": "Demonstrative Correlatives (Ti-) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tiu",
                "той/цей"
              ],
              [
                "tio",
                "те"
              ],
              [
                "tie",
                "там"
              ],
              [
                "tiam",
                "тоді"
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
                "Tiu libro estas mia.",
                "Та книга моя."
              ],
              [
                "Tie estas mia domo.",
                "Там мій дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "correlatives-i-indefinite",
        "title": "Неозначені кореляції (i-) — A2",
        "titleEn": "Indefinite Correlatives (I-) — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "iu",
                "хтось/якийсь"
              ],
              [
                "io",
                "щось"
              ],
              [
                "ie",
                "десь"
              ],
              [
                "iam",
                "колись"
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
                "Iu venis.",
                "Хтось прийшов."
              ],
              [
                "Mi vidis ion.",
                "Я щось побачив."
              ]
            ]
          }
        ]
      },
      {
        "id": "correlatives-chi-universal",
        "title": "Всеохопні кореляції (ĉi-) — A2",
        "titleEn": "Universal Correlatives (Ĉi-) — A2",
        "emoji": "🌐",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ĉiu",
                "кожен"
              ],
              [
                "ĉio",
                "все"
              ],
              [
                "ĉie",
                "усюди"
              ],
              [
                "ĉiam",
                "завжди"
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
                "Ĉiu scias.",
                "Кожен знає."
              ],
              [
                "Mi amas ĉion.",
                "Я люблю все."
              ]
            ]
          }
        ]
      },
      {
        "id": "correlatives-neni-negative",
        "title": "Заперечні кореляції (neni-) — A2",
        "titleEn": "Negative Correlatives (Neni-) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "neniu",
                "ніхто"
              ],
              [
                "nenio",
                "нічого"
              ],
              [
                "nenie",
                "ніде"
              ],
              [
                "neniam",
                "ніколи"
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
                "Neniu venis.",
                "Ніхто не прийшов."
              ],
              [
                "Mi neniam mensogas.",
                "Я ніколи не брешу."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-free",
        "title": "Вільний порядок слів — B1",
        "titleEn": "Free Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Завдяки суфіксу -n порядок слів у реченні майже повністю вільний — синтаксична роль слова видно з його закінчення, а не з позиції.",
            "en": {
              "text": "Thanks to the -n suffix, word order in a sentence is nearly completely free — a word's syntactic role is shown by its ending, not its position."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mi vidas la hundon. / La hundon mi vidas.",
                "Я бачу собаку (обидва порядки правильні)."
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
                "Libron mi legas.",
                "Книгу я читаю (наголос на \"книгу\")."
              ],
              [
                "Rapide kuras la hundo.",
                "Швидко біжить собака."
              ]
            ]
          }
        ]
      },
      {
        "id": "prefix-mal-opposite",
        "title": "Префікс mal- (протилежність) — A1",
        "titleEn": "Prefix Mal- (Opposite) — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс mal- утворює слово з протилежним значенням — не треба заучувати окреме слово для антоніма.",
            "en": {
              "text": "The prefix mal- forms a word with the opposite meaning — no need to memorize a separate word for the antonym."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "granda (великий)",
                "malgranda",
                "маленький"
              ],
              [
                "bona (добрий)",
                "malbona",
                "поганий"
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
                "La malgranda hundo bojas.",
                "Маленький собака гавкає."
              ],
              [
                "Tio estas malbona ideo.",
                "Це погана ідея."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-in-feminine",
        "title": "Суфікс -in- (жіночий рід) — A2",
        "titleEn": "Suffix -In- (Feminine) — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -in- перетворює слово, що позначає особу/тварину чоловічого/загального роду, на жіночий відповідник.",
            "en": {
              "text": "The suffix -in- turns a word denoting a male/general-gender person or animal into its feminine counterpart."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "patro (батько)",
                "patrino",
                "мати"
              ],
              [
                "knabo (хлопчик)",
                "knabino",
                "дівчинка"
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
                "Mia patrino estas bela.",
                "Моя мати гарна."
              ],
              [
                "La knabino ludas.",
                "Дівчинка грається."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-et-diminutive",
        "title": "Суфікс -et- (зменшувальний) — A2",
        "titleEn": "Suffix -Et- (Diminutive) — A2",
        "emoji": "🥰",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "domo (дім)",
                "dometo",
                "будиночок"
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
                "La hundeto estas ĉarma.",
                "Собачка милий."
              ],
              [
                "Ŝi havas dometon.",
                "У неї є будиночок."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-eg-augmentative",
        "title": "Суфікс -eg- (збільшувальний) — A2",
        "titleEn": "Suffix -Eg- (Augmentative) — A2",
        "emoji": "🏔️",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "domo (дім)",
                "domego",
                "величезний дім"
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
                "Tio estas domego!",
                "Це величезний дім!"
              ],
              [
                "Varmega tago.",
                "Дуже спекотний день."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-ist-profession",
        "title": "Суфікс -ist- (професія) — A2",
        "titleEn": "Suffix -Ist- (Profession) — A2",
        "emoji": "🧑‍💼",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "instrui (навчати)",
                "instruisto",
                "вчитель"
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
                "Li estas dentisto.",
                "Він стоматолог."
              ],
              [
                "Ŝi volas esti artisto.",
                "Вона хоче бути художницею."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-ej-place",
        "title": "Суфікс -ej- (місце) — A2",
        "titleEn": "Suffix -Ej- (Place) — A2",
        "emoji": "🏢",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "lerni (вчитися)",
                "lernejo",
                "школа"
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
                "Mi iras al la lernejo.",
                "Я йду до школи."
              ],
              [
                "La kuirejo estas granda.",
                "Кухня велика."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-il-tool",
        "title": "Суфікс -il- (знаряддя) — A2",
        "titleEn": "Suffix -Il- (Tool) — A2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "tranĉi (різати)",
                "tranĉilo",
                "ніж"
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
                "Mi bezonas tranĉilon.",
                "Мені потрібен ніж."
              ],
              [
                "La skribilo ne funkcias.",
                "Ручка не пише."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-ebl-possibility",
        "title": "Суфікс -ebl- (можливість) — B1",
        "titleEn": "Suffix -Ebl- (Possibility) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "legi (читати)",
                "legebla",
                "той, що можна прочитати"
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
                "Tio estas komprenebla.",
                "Це зрозуміло (можна зрозуміти)."
              ],
              [
                "La teksto estas legebla.",
                "Текст можна прочитати."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-ig-causative",
        "title": "Суфікс -ig- (каузатив) — B1",
        "titleEn": "Suffix -Ig- (Causative) — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "granda (великий)",
                "grandigi",
                "збільшити"
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
                "Mi volas grandigi la domon.",
                "Я хочу збільшити дім."
              ],
              [
                "Li ridigis min.",
                "Він розсмішив мене."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-igh-become",
        "title": "Суфікс -iĝ- (стати) — B1",
        "titleEn": "Suffix -Iĝ- (Become) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "granda (великий)",
                "grandiĝi",
                "стати великим"
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
                "La ĉielo malheliĝis.",
                "Небо потемнішало."
              ],
              [
                "Li ekscitiĝis.",
                "Він схвилювався."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words-free-formation",
        "title": "Вільне утворення складних слів — B1",
        "titleEn": "Free Compound Word Formation — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Есперанто дозволяє вільно поєднувати корені в нове складене слово, значення якого зазвичай передбачуване з окремих частин.",
            "en": {
              "text": "Esperanto allows roots to be freely combined into a new compound word, whose meaning is usually predictable from the individual parts."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "mano (рука) + horloĝo (годинник)",
                "manhorloĝo (наручний годинник)"
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
                "Mia manhorloĝo estas nova.",
                "Мій наручний годинник новий."
              ],
              [
                "Vaporŝipo alvenis.",
                "Прибув пароплав."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Кількісні числівники — A1",
        "titleEn": "Cardinal Numerals — A1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "unu",
                "1"
              ],
              [
                "du",
                "2"
              ],
              [
                "tri",
                "3"
              ],
              [
                "dek",
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
                "Mi havas du fratinojn.",
                "У мене дві сестри."
              ],
              [
                "Dek homoj venis.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-ordinal-suffix-a",
        "title": "Порядкові числівники (-a) — A2",
        "titleEn": "Ordinal Numerals (-A) — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються простим додаванням прикметникового -a до кількісного числівника — без жодних окремих слів.",
            "en": {
              "text": "Ordinal numerals are formed by simply adding the adjectival -a to the cardinal numeral — no separate words at all."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "unu (1)",
                "unua",
                "перший"
              ],
              [
                "du (2)",
                "dua",
                "другий"
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
                "Tio estas mia unua libro.",
                "Це моя перша книга."
              ],
              [
                "Li gajnis la duan lokon.",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличне звертання — A2",
        "titleEn": "Vocative Address — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Panjo!",
                "Мамо!"
              ],
              [
                "Aŭskultu, Johano!",
                "Слухай, Йогане!"
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
                "Panjo, venu ĉi tien!",
                "Мамо, іди сюди!"
              ],
              [
                "Sinjoro, helpu min.",
                "Пане, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Кількісні слова — A2",
        "titleEn": "Quantifiers — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "multe",
                "багато"
              ],
              [
                "malmulte",
                "мало (mal- + multe)"
              ],
              [
                "kelke",
                "декілька"
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
                "Mi havas multe da libroj.",
                "У мене багато книг."
              ],
              [
                "Donu al mi iom da akvo.",
                "Дай мені трохи води."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Сурядні сполучники — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "kaj",
                "і, та"
              ],
              [
                "sed",
                "але"
              ],
              [
                "aŭ",
                "або"
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
                "Mi kaj vi estas amikoj.",
                "Я і ти — друзі."
              ],
              [
                "Mi volas iri, sed mi ne havas tempon.",
                "Хочу піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Підрядні сполучники — A2",
        "titleEn": "Subordinating Conjunctions — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "ĉar",
                "тому що"
              ],
              [
                "se",
                "якщо"
              ],
              [
                "kiam",
                "коли"
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
                "Mi ĝojas, ĉar vi venis.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Kiam mi estos libera, mi telefonos.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова (povi/devi) — A2",
        "titleEn": "Modal Verbs (Povi/Devi) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mi povas naĝi.",
                "Я вмію плавати."
              ],
              [
                "Mi devas iri.",
                "Мені треба йти."
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
                "Vi devas lerni.",
                "Тобі треба вчитися."
              ],
              [
                "Mi volas helpi.",
                "Я хочу допомогти."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "titleEn": "Possessive Pronouns — A1",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники утворюються простим додаванням -a до особового займенника — без окремих слів.",
            "en": {
              "text": "Possessive pronouns are formed by simply adding -a to the personal pronoun — no separate words."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mi → mia",
                "мій"
              ],
              [
                "ŝi → ŝia",
                "її"
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
                "Mia domo estas granda.",
                "Мій дім великий."
              ],
              [
                "Lia libro kuŝas sur la tablo.",
                "Його книга лежить на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-kiu",
        "title": "Відносний займенник \"kiu\" — B1",
        "titleEn": "Relative Pronoun \"Kiu\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий корелятив kiu вводить і питання, і підрядне означальне речення, узгоджуючись за числом і відмінком з означуваним словом.",
            "en": {
              "text": "The same correlative kiu introduces both a question and a relative clause, agreeing in number and case with the word it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "la viro, kiu venis",
                "чоловік, який прийшов"
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
                "La libro, kiun mi legas, estas bona.",
                "Книга, яку я читаю, гарна."
              ],
              [
                "La domo, en kiu mi loĝas, estas malnova.",
                "Дім, у якому я живу, старий."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (pli/plej) — A2",
        "titleEn": "Comparative & Superlative (Pli/Plej) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом pli (більш) перед прикметником, найвищий — plej.",
            "en": {
              "text": "The comparative is formed with the word pli (more) before the adjective, the superlative with plej."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "granda (великий)",
                "pli granda",
                "більший"
              ],
              [
                "granda (великий)",
                "plej granda",
                "найбільший"
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
                "Ĉi tiu domo estas pli granda.",
                "Цей дім більший."
              ],
              [
                "Ŝi estas la plej saĝa.",
                "Вона найрозумніша."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Дні тижня — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "lundo",
                "понеділок"
              ],
              [
                "sabato",
                "субота"
              ],
              [
                "dimanĉo",
                "неділя"
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
                "Hodiaŭ estas lundo.",
                "Сьогодні понеділок."
              ],
              [
                "Mi ripozas dimanĉe.",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Місяці та дати — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "januaro",
                "січень"
              ],
              [
                "majo",
                "травень"
              ],
              [
                "decembro",
                "грудень"
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
                "Mia naskiĝtago estas en majo.",
                "Мій день народження в травні."
              ],
              [
                "Hodiaŭ estas la deka de januaro.",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Час — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kioma horo estas?",
                "Котра година?"
              ],
              [
                "Estas la tria horo.",
                "Третя година."
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
                "Ni vidos nin je la sesa.",
                "Зустрінемось о шостій."
              ],
              [
                "Nun estas tagmezo.",
                "Зараз полудень."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Привітання та фрази — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Saluton",
                "Привіт"
              ],
              [
                "Dankon",
                "Дякую"
              ],
              [
                "Ĝis revido",
                "До побачення"
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
                "Kiel vi fartas?",
                "Як справи?"
              ],
              [
                "Multan dankon.",
                "Дуже дякую."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Погода — вирази — A2",
        "titleEn": "Weather Expressions — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Estas sune.",
                "Сонячно."
              ],
              [
                "Pluvas.",
                "Іде дощ."
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
                "Hodiaŭ estas malvarme.",
                "Сьогодні холодно."
              ],
              [
                "Estas tre varme.",
                "Дуже жарко."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Стійкі вирази — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kore dankon",
                "щиро дякую (буквально: від серця)"
              ],
              [
                "fari sian eblon",
                "робити все можливе"
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
                "Kore dankon pro via helpo.",
                "Щиро дякую за твою допомогу."
              ],
              [
                "Mi faros mian eblon.",
                "Я зроблю все можливе."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "printempo",
                "весна"
              ],
              [
                "somero",
                "літо"
              ],
              [
                "aŭtuno",
                "осінь"
              ],
              [
                "vintro",
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
                "En somero estas varme.",
                "Влітку тепло."
              ],
              [
                "Mi ŝatas aŭtunon.",
                "Мені подобається осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Гроші та ціни — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kiom tio kostas?",
                "Скільки коштує?"
              ],
              [
                "Mil eŭroj.",
                "Тисяча євро."
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
                "Tiu ĉi libro kostas dudek eŭrojn.",
                "Ця книга коштує двадцять євро."
              ],
              [
                "Tio estas tre multekosta.",
                "Дуже дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Вираження думки — B1",
        "titleEn": "Expressing Opinions — B1",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mi pensas, ke...",
                "Я думаю, що..."
              ],
              [
                "Laŭ mi...",
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
                "Mi pensas, ke vi pravas.",
                "Я думаю, що ти правий."
              ],
              [
                "Laŭ mi, tio estas bona ideo.",
                "На мою думку, це гарна ідея."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Відносні вирази часу — A2",
        "titleEn": "Relative Time Expressions — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hodiaŭ / morgaŭ / hieraŭ",
                "сьогодні / завтра / вчора"
              ],
              [
                "nun / poste",
                "зараз / потім"
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
                "Ni vidos nin morgaŭ.",
                "Побачимось завтра."
              ],
              [
                "Mi estas okupata nun.",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A1",
        "titleEn": "Exclamations — A1",
        "emoji": "❕",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ho ve!",
                "Ой!"
              ],
              [
                "Bonege!",
                "Чудово!"
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
                "Ho ve, kiel bele!",
                "Ой, як гарно!"
              ],
              [
                "Bonege, bonaj novaĵoj!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція наявності (\"estas\") — A2",
        "titleEn": "Existential Construction (\"Estas\") — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається тим самим esti (estas), яке позначає і \"є/існує\", і звичайне ототожнення — універсальне дієслово без винятків.",
            "en": {
              "text": "The existence of something is expressed with the same esti (estas), which marks both \"there is\" and ordinary identity — a universal verb with no exceptions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Estas akvo.",
                "Є вода."
              ],
              [
                "Ne estas tempo.",
                "Немає часу."
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
                "Estas multaj homoj ĉi tie.",
                "Тут багато людей."
              ],
              [
                "Ĉi tie ne estas vendejo.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "addressing-titles",
        "title": "Звертання та титули — A2",
        "titleEn": "Titles & Forms of Address — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "sinjoro",
                "пан"
              ],
              [
                "sinjorino",
                "пані (-in- + жін.)"
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
                "Bonan tagon, sinjoro.",
                "Доброго дня, пане."
              ],
              [
                "Pardonu, sinjorino.",
                "Вибачте, пані."
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
        "id": "no-irregular-verbs-paradox",
        "title": "Немає жодного неправильного дієслова — унікальність есперанто — B1",
        "titleEn": "Zero Irregular Verbs — Esperanto's Defining Trait — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від усіх природних мов цього курсу, есперанто не має ЖОДНОГО неправильного дієслова, іменника чи прикметника — навіть \"esti\" (бути) відмінюється так само регулярно, як будь-яке інше дієслово. Це найважливіший \"виняток\" для розділу винятків: тут просто немає чого заучувати окремо.",
            "en": {
              "text": "Unlike every natural language in this course, Esperanto has ZERO irregular verbs, nouns, or adjectives — even \"esti\" (to be) conjugates just as regularly as any other verb. This is the most important \"exception\" for an exceptions section: there's simply nothing to memorize separately."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "esti (бути)",
                "estas/estis/estos — жодного винятку"
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
                "Ĉiu verbo konjugacias same.",
                "Кожне дієслово відмінюється однаково."
              ],
              [
                "Neniu escepto ekzistas en Esperanto.",
                "В есперанто не існує жодного винятку."
              ]
            ]
          }
        ]
      },
      {
        "id": "fundamento-unchangeable",
        "title": "\"Fundamento de Esperanto\" — недоторканна мовна конституція — B2",
        "titleEn": "\"Fundamento de Esperanto\" — the Untouchable Linguistic Constitution — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Основоположний текст Fundamento de Esperanto (1905), затверджений Заменгофом, офіційно оголошений недоторканним і незмінним назавжди — унікальна риса серед мов, оскільки жодна природна мова не має такого юридично закріпленого \"замороженого\" ядра граматики.",
            "en": {
              "text": "The foundational text Fundamento de Esperanto (1905), approved by Zamenhof, was officially declared untouchable and unchangeable forever — a unique trait among languages, since no natural language has such a legally fixed \"frozen\" grammatical core."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "La Fundamento estas netuŝebla.",
                "Fundamento недоторканний."
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
                "Zamenhof kreis la Fundamenton en 1905.",
                "Заменгоф створив Fundamento 1905 року."
              ],
              [
                "La reguloj neniam ŝanĝiĝos.",
                "Правила ніколи не зміняться."
              ]
            ]
          }
        ]
      },
      {
        "id": "neologism-controversy",
        "title": "Дискусія про неологізми — межа розширення лексики — B2",
        "titleEn": "The Neologism Debate — the Boundary of Vocabulary Growth — B2",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча граматика заморожена, лексика есперанто продовжує зростати, і в спільноті триває давня дискусія між \"фундаменталістами\" (за мінімальне розширення) і прихильниками неологізмів (за вільне запозичення нових коренів) — суперечка, якої немає в природних мовах із централізованими академіями.",
            "en": {
              "text": "While the grammar is frozen, Esperanto's vocabulary keeps growing, and the community has a long-running debate between \"fundamentalists\" (favoring minimal expansion) and neologism supporters (favoring free borrowing of new roots) — a dispute unlike anything in natural languages with centralized academies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ĝangalo (з англ. \"jungle\", неологізм)",
                "приклад запозиченого кореня"
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
                "Kelkaj homoj kontraŭas neologismojn.",
                "Дехто проти неологізмів."
              ],
              [
                "La lingvo daŭre evoluas.",
                "Мова продовжує розвиватися."
              ]
            ]
          }
        ]
      }
    ]
  }
];
