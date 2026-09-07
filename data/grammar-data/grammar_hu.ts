// Vymova — data/grammar-data/grammar_hu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HU: GrammarCategory[] = [
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
            "text": "Угорські дієслова показують особу через закінчення, тому займенник часто опускають — його вживають лише для наголосу.",
            "en": {
              "text": "Hungarian verbs mark person through their ending, so the pronoun is often dropped — it is used mainly for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "én",
                "я"
              ],
              [
                "te",
                "ти"
              ],
              [
                "ő",
                "він / вона"
              ],
              [
                "mi",
                "ми"
              ],
              [
                "ők",
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
                "Én tanár vagyok.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"van\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "З іменником-присудком \"van/vagyok\" вживається так само, як в українській, але з прикметником у 3-й особі теперішнього часу зв'язка ОПУСКАЄТЬСЯ.",
            "en": {
              "text": "With a noun predicate, \"van/vagyok\" behaves like Ukrainian \"бути\", but with an adjective in the 3rd person present tense the copula is DROPPED."
            }
          },
          {
            "type": "formula",
            "title": "Іменний ↔ прикметниковий присудок",
            "rows": [
              [
                "Én tanár vagyok.",
                "з vagyok",
                "Я вчитель."
              ],
              [
                "Ő fáradt.",
                "без van (3 ос.)",
                "Він втомлений."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Te orvos vagy.",
                "Ти лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Van (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"nem\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка nem ставиться безпосередньо перед словом, яке заперечують.",
            "en": {
              "text": "The negative particle nem goes directly before the word being negated."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Tudom.",
                "Nem tudom.",
                "Я знаю. / Я не знаю."
              ],
              [
                "Ő fáradt.",
                "Ő nem fáradt.",
                "Він втомлений. / Він не втомлений."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ő nem fáradt.",
                "Він не втомлений."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Nem — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні здебільшого утворюються висхідною інтонацією; у формальнішому мовленні можлива питальна частка -e.",
            "en": {
              "text": "Yes/no questions are mostly formed with rising intonation; more formal speech may add the question particle -e."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Fáradt vagy.",
                "Fáradt vagy?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Van időd.",
                "Van időd?",
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
                "Van időd?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "case-suffixes",
        "title": "Відмінкові суфікси замість прийменників — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників угорська приєднує відмінкові суфікси до кінця слова, вибір голосної в яких залежить від гармонії голосних.",
            "en": {
              "text": "Instead of prepositions, Hungarian attaches case suffixes to the end of the word; the vowel choice follows vowel harmony."
            }
          },
          {
            "type": "table",
            "title": "Приклад: \"у/в\" (-ban/-ben)",
            "rows": [
              [
                "ház → házban",
                "дім → у домі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A könyv az asztalon van.",
                "Книга на столі (-on = \"на\")."
              ]
            ]
          }
        ],
        "titleEn": "Case Suffixes Instead of Prepositions — A1"
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
        "id": "present-tense-indefinite",
        "title": "Jelen idő — alanyi ragozás — A1",
        "titleEn": "Present Tense — Indefinite Conjugation — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначене дієвідмінювання вживається, коли дієслово не має прямого додатка чи має неозначений/загальний додаток.",
            "en": {
              "text": "The indefinite conjugation is used when the verb has no direct object, or has an indefinite/general one."
            }
          },
          {
            "type": "formula",
            "title": "\"olvasni\" (читати) — неозначене відмінювання",
            "rows": [
              [
                "én",
                "olvasok",
                "я читаю"
              ],
              [
                "te",
                "olvasol",
                "ти читаєш"
              ],
              [
                "ő",
                "olvas",
                "він/вона читає"
              ],
              [
                "mi",
                "olvasunk",
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
                "Olvasok egy könyvet.",
                "Я читаю (якусь) книгу."
              ],
              [
                "Mit olvasol?",
                "Що ти читаєш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "present-tense-definite",
        "title": "Jelen idő — tárgyas ragozás — A2",
        "titleEn": "Present Tense — Definite Conjugation — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Найважливіша риса угорської граматики: коли прямий додаток визначений (з означеним артиклем, власна назва, займенник \"це\"), дієслово приймає ЗОВСІМ ІНШИЙ набір особових закінчень.",
            "en": {
              "text": "Hungarian's most important grammatical feature: when the direct object is definite (with a definite article, a proper name, \"this/that\"), the verb takes an ENTIRELY DIFFERENT set of personal endings."
            }
          },
          {
            "type": "table",
            "title": "Неозначене vs означене відмінювання",
            "rows": [
              [
                "Olvasok egy könyvet.",
                "Я читаю якусь книгу.",
                "неозначене"
              ],
              [
                "Olvasom a könyvet.",
                "Я читаю (ту саму) книгу.",
                "означене"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Szeretem ezt a filmet.",
                "Мені подобається цей фільм."
              ],
              [
                "Ismerem Pétert.",
                "Я знаю Петера."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Múlt idő — A1",
        "titleEn": "Past Tense — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -t/-tt, доданим до основи дієслова, з подальшими особовими закінченнями (окремими для означеного й неозначеного відмінювання).",
            "en": {
              "text": "The past tense is formed with the suffix -t/-tt added to the verb stem, followed by personal endings (separate sets for definite and indefinite conjugation)."
            }
          },
          {
            "type": "formula",
            "title": "\"olvasni\" (читати) — múlt idő",
            "rows": [
              [
                "én",
                "olvastam",
                "я читав"
              ],
              [
                "te",
                "olvastál",
                "ти читав"
              ],
              [
                "ő",
                "olvasott",
                "він/вона читав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tegnap olvastam egy könyvet.",
                "Вчора я читав книгу."
              ],
              [
                "Elolvastam a könyvet.",
                "Я прочитав книгу (з префіксом el-)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Jövő idő (fog) — A2",
        "titleEn": "Future Tense (Fog) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним дієсловом \"fog\" (у відповідній особі) + інфінітив головного дієслова.",
            "en": {
              "text": "The future tense is formed with the auxiliary \"fog\" (in the appropriate person) plus the main verb's infinitive."
            }
          },
          {
            "type": "formula",
            "title": "\"fog\" + інфінітив",
            "rows": [
              [
                "én",
                "fogok olvasni",
                "я читатиму"
              ],
              [
                "te",
                "fogsz olvasni",
                "ти читатимеш"
              ],
              [
                "ő",
                "fog olvasni",
                "він/вона читатиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Holnap dolgozni fogok.",
                "Завтра я працюватиму."
              ],
              [
                "Ő el fogja olvasni a könyvet.",
                "Він/вона прочитає книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Feltételes mód (-na/-ne, -ná/-né) — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -na/-ne (неозначене) чи -ná/-né (означене), доданим до основи дієслова.",
            "en": {
              "text": "The conditional mood is formed with the suffix -na/-ne (indefinite) or -ná/-né (definite), added to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "\"olvasni\" (читати) — feltételes mód",
            "rows": [
              [
                "én",
                "olvasnék",
                "я читав би"
              ],
              [
                "te",
                "olvasnál",
                "ти читав би"
              ],
              [
                "ő",
                "olvasna",
                "він/вона читав(-ла) би"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Szeretnék utazni.",
                "Я хотів би подорожувати."
              ],
              [
                "Ha lenne időm, eljönnék.",
                "Якби в мене був час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Felszólító mód — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється суфіксом -j/-jon/-jen (з чергуваннями), доданим до основи дієслова.",
            "en": {
              "text": "The imperative is formed with the suffix -j/-jon/-jen (with alternations), added to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "\"olvasni\" (читати) — felszólító mód",
            "rows": [
              [
                "te",
                "Olvass!",
                "Читай!"
              ],
              [
                "ön (ввічл.)",
                "Olvasson!",
                "Читайте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Csukd be az ajtót!",
                "Зачини двері!"
              ],
              [
                "Gyertek be!",
                "Заходьте!"
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-prefixes-aspect",
        "title": "Igekötők (meg-, el-, ki-) — B1",
        "titleEn": "Verbal Prefixes (Aspect) — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівні префікси (ігекьотек) виражають завершеність дії чи напрямок і функціонують подібно до слов'янського виду, хоча механізм інший: вони можуть відокремлюватися від дієслова й переміщуватися в реченні.",
            "en": {
              "text": "Verbal prefixes (igekötők) express completion or direction and function somewhat like Slavic aspect, though the mechanism differs: they can detach from the verb and move within the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклади префіксів",
            "rows": [
              [
                "olvasni (читати)",
                "elolvasni (прочитати)",
                "el- завершеність"
              ],
              [
                "menni (йти)",
                "kimenni (вийти)",
                "ki- напрямок назовні"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Megcsináltam a leckét.",
                "Я зробив домашнє завдання (завершено)."
              ],
              [
                "Nem csináltam meg a leckét.",
                "Я не зробив домашнього завдання (префікс відокремлюється при запереченні)."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-personal-endings",
        "title": "Személyragos főnévi igenév — B1",
        "titleEn": "Infinitive with Personal Endings — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Своєрідна для угорської риса: інфінітив може приймати особові закінчення, коли підмет підрядного інфінітивного звороту відрізняється від підмета головного речення.",
            "en": {
              "text": "A feature quite unique to Hungarian: the infinitive can take personal endings when the subject of the infinitival clause differs from the main clause's subject."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "mennem kell",
                "мені треба йти",
                "-em особове закінчення"
              ],
              [
                "menned kell",
                "тобі треба йти",
                "-ed особове закінчення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nekem dolgoznom kell.",
                "Мені треба працювати."
              ],
              [
                "Neked haza kell menned.",
                "Тобі треба йти додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "ik-verbs",
        "title": "Ikes igék — B1",
        "titleEn": "Ik-Verbs (Special Class) — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова, чий інфінітив закінчується на -ik (наприклад, \"lakik\" — жити, \"eszik\" — їсти), у літературній мові мають окреме закінчення 1-ї особи однини -om/-em/-öm замість звичайного -ok/-ek/-ök.",
            "en": {
              "text": "Verbs whose 3rd person present ends in -ik (like \"lakik\" — to live, \"eszik\" — to eat) have a separate 1st person singular ending -om/-em/-öm in literary usage instead of the regular -ok/-ek/-ök."
            }
          },
          {
            "type": "table",
            "title": "Звичайне ↔ -ik-дієслово",
            "rows": [
              [
                "olvasok (я читаю)",
                "звичайне",
                "-ok"
              ],
              [
                "lakom (я живу)",
                "-ik-дієслово",
                "-om"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Budapesten lakom.",
                "Я живу в Будапешті."
              ],
              [
                "Reggel almát eszem.",
                "Вранці я їм яблуко."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-participle",
        "title": "Melléknévi igenév — jelen idejű (-ó/-ő) — B1",
        "titleEn": "Present Participle (-Ó/-Ő) — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник теперішнього часу утворюється суфіксом -ó/-ő й уживається як прикметник, описуючи одночасну дію.",
            "en": {
              "text": "The present participle is formed with the suffix -ó/-ő and is used as an adjective, describing a simultaneous action."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "aludni (спати)",
                "alvó",
                "сплячий"
              ],
              [
                "sírni (плакати)",
                "síró",
                "плачучий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Az alvó gyerek csendben volt.",
                "Дитина, що спала, була тиха."
              ],
              [
                "Láttam egy síró nőt.",
                "Я побачив жінку, що плакала."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-participle",
        "title": "Melléknévi igenév — múlt idejű (-t/-tt) — B1",
        "titleEn": "Past Participle (-T/-Tt) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється суфіксом -t/-tt і, крім описової функції, уживається для утворення пасивоподібних конструкцій.",
            "en": {
              "text": "The past participle is formed with the suffix -t/-tt and, besides its descriptive function, is used to form passive-like constructions."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "becsukni (закривати)",
                "becsukott",
                "закритий"
              ],
              [
                "megírni (написати)",
                "megírt",
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
                "A bolt zárva van.",
                "Магазин закритий."
              ],
              [
                "Ez egy jól megírt könyv.",
                "Це добре написана книга."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbial-participle",
        "title": "Határozói igenév (-va/-ve) — B1",
        "titleEn": "Adverbial Participle (-Va/-Ve) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -va/-ve описує одночасну дію чи стан, схожий на англійський \"-ing\", і часто вживається з дієсловом \"van\" для опису стану.",
            "en": {
              "text": "The adverbial participle -va/-ve describes a simultaneous action or state, similar to English \"-ing\", and is often used with \"van\" to describe a state."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nyitni (відкривати) → nyitva",
                "відкрито"
              ],
              [
                "ülni (сидіти) → ülve",
                "сидячи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Az ajtó nyitva van.",
                "Двері відчинені."
              ],
              [
                "Ülve olvastam.",
                "Я читав сидячи."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Módbeli segédigék (kell, lehet, szabad) — A2",
        "titleEn": "Modal Verbs (Kell, Lehet, Szabad) — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова-частки \"kell\" (треба), \"lehet\" (можна) і \"szabad\" (дозволено) — безособові й поєднуються з інфінітивом основного дієслова.",
            "en": {
              "text": "The modal particle-verbs \"kell\" (must), \"lehet\" (may), and \"szabad\" (is allowed) are impersonal and combine with the main verb's infinitive."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kell",
                "Mennem kell.",
                "Мені треба йти."
              ],
              [
                "szabad",
                "Itt nem szabad dohányozni.",
                "Тут не можна курити."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sok vizet kell inni.",
                "Треба пити багато води."
              ],
              [
                "Itt lehet parkolni.",
                "Тут можна паркуватися."
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
        "id": "definite-indefinite-overview",
        "title": "Alanyi és tárgyas ragozás — áttekintés — B1",
        "titleEn": "Definite vs Indefinite Conjugation — Overview — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Угорська — одна з небагатьох мов світу, де дієслово змінює форму залежно від того, чи є прямий додаток визначеним. Це правило діє в усіх часах і способах, не лише в теперішньому.",
            "en": {
              "text": "Hungarian is one of the few languages in the world where the verb changes form depending on whether the direct object is definite. This rule applies across all tenses and moods, not just the present."
            }
          },
          {
            "type": "table",
            "title": "Коли яке відмінювання",
            "rows": [
              [
                "без додатка чи неозначений",
                "látok egy házat",
                "неозначене"
              ],
              [
                "означений додаток",
                "látom a házat",
                "означене"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Írok egy levelet.",
                "Я пишу листа (якогось)."
              ],
              [
                "Megírom a levelet.",
                "Я напишу (той самий) лист."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Tárgyeset (-t) — A2",
        "titleEn": "Accusative Case (-T) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок позначає прямий додаток і утворюється суфіксом -t (іноді з допоміжним голосним), доданим до основи слова.",
            "en": {
              "text": "The accusative case marks the direct object and is formed with the suffix -t (sometimes with a linking vowel), added to the word stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "könyv (книга)",
                "könyvet",
                "Olvasok egy könyvet. (Я читаю книгу.)"
              ],
              [
                "ház (дім)",
                "házat",
                "Látok egy házat. (Я бачу дім.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Szeretem a kávét.",
                "Мені подобається кава."
              ],
              [
                "Megeszem az almát.",
                "Я з'їм яблуко."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Részes eset (-nak/-nek) — A2",
        "titleEn": "Dative Case (-Nak/-Nek) — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок відповідає на питання \"кому? чому?\" й утворюється суфіксом -nak/-nek (за гармонією голосних).",
            "en": {
              "text": "The dative case answers \"to whom? to what?\" and is formed with the suffix -nak/-nek (following vowel harmony)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "anya (мама)",
                "anyának",
                "Adok ajándékot anyának. (Даю подарунок мамі.)"
              ],
              [
                "barát (друг)",
                "barátnak",
                "Segítek a barátnak. (Допомагаю другові.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Elmondtam neki az igazat.",
                "Я сказав йому правду."
              ],
              [
                "Ez nehéz a gyereknek.",
                "Це важко для дитини."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-comitative-case",
        "title": "Eszközhatározó eset (-val/-vel) — B1",
        "titleEn": "Instrumental-Comitative Case (-Val/-Vel) — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудно-соціативний відмінок відповідає на питання \"ким? чим?\" і позначає знаряддя дії чи супровід; кінцевий приголосний суфікса уподібнюється до останнього приголосного основи.",
            "en": {
              "text": "The instrumental-comitative case answers \"by whom? by what?\" and marks the instrument of an action or accompaniment; the suffix's initial consonant assimilates to the stem's final consonant."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "toll (ручка)",
                "tollal",
                "Írok tollal. (Пишу ручкою.)"
              ],
              [
                "barát (друг)",
                "baráttal",
                "barátommal (з моїм другом)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Autóval megyünk.",
                "Ми їдемо машиною."
              ],
              [
                "A kutyámmal sétálok.",
                "Я гуляю зі своїм собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "interior-cases-triad",
        "title": "Belső helyhatározók: -ban/-be/-ból — A2",
        "titleEn": "Interior Local Cases: In, Into, Out Of — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Три \"внутрішні\" місцеві відмінки описують положення всередині чогось: inessivus -ban/-ben (\"в чомусь\"), illativus -ba/-be (\"у щось\", рух всередину), elativus -ból/-ből (\"з чогось\").",
            "en": {
              "text": "Three \"interior\" local cases describe position inside something: inessive -ban/-ben (\"in something\"), illative -ba/-be (\"into something\", motion inward), elative -ból/-ből (\"out of something\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "a házban",
                "у домі",
                "inessivus"
              ],
              [
                "a házba",
                "у дім (рух)",
                "illativus"
              ],
              [
                "a házból",
                "з дому",
                "elativus"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A szobában vagyok.",
                "Я в кімнаті."
              ],
              [
                "Kimegyek a szobából.",
                "Я виходжу з кімнати."
              ]
            ]
          }
        ]
      },
      {
        "id": "surface-cases-triad",
        "title": "Felszíni helyhatározók: -on/-ra/-ról — A2",
        "titleEn": "Surface Local Cases: On, Onto, Off — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Три \"поверхневі\" місцеві відмінки описують положення на поверхні: superessivus -on/-en/-ön (\"на чомусь\"), sublativus -ra/-re (\"на щось\", рух на поверхню), delativus -ról/-ről (\"з поверхні\").",
            "en": {
              "text": "Three \"surface\" local cases describe position on a surface: superessive -on/-en/-ön (\"on something\"), sublative -ra/-re (\"onto something\", motion onto), delative -ról/-ről (\"off a surface\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "az asztalon",
                "на столі",
                "superessivus"
              ],
              [
                "az asztalra",
                "на стіл (рух)",
                "sublativus"
              ],
              [
                "az asztalról",
                "зі столу",
                "delativus"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A könyv az asztalon van.",
                "Книга на столі."
              ],
              [
                "Leveszem a könyvet az asztalról.",
                "Я знімаю книгу зі столу."
              ]
            ]
          }
        ]
      },
      {
        "id": "proximity-cases-triad",
        "title": "Közelségi helyhatározók: -nál/-hoz/-tól — B1",
        "titleEn": "Proximity Local Cases: At, To, From — B1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Три \"проксимальні\" місцеві відмінки описують перебування біля когось/чогось (переважно осіб): adessivus -nál/-nél (\"у, біля\"), allativus -hoz/-hez/-höz (\"до\"), ablativus -tól/-től (\"від\").",
            "en": {
              "text": "Three \"proximity\" local cases describe being near someone/something (mainly people): adessive -nál/-nél (\"at, near\"), allative -hoz/-hez/-höz (\"toward\"), ablative -tól/-től (\"away from\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "az orvosnál",
                "у лікаря",
                "adessivus"
              ],
              [
                "az orvoshoz",
                "до лікаря",
                "allativus"
              ],
              [
                "az orvostól",
                "від лікаря",
                "ablativus"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nálam van a kulcs.",
                "Ключ у мене."
              ],
              [
                "Elmegyek a barátomhoz.",
                "Я йду до свого друга."
              ]
            ]
          }
        ]
      },
      {
        "id": "translative-case",
        "title": "Eredményhatározó eset (-vá/-vé) — B1",
        "titleEn": "Translative Case (-Vá/-Vé) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Результативний відмінок позначає перетворення чи стан, до якого прямують (\"стати кимось/чимось\"), і утворюється суфіксом -vá/-vé з уподібненням до останнього приголосного основи.",
            "en": {
              "text": "The translative case marks a transformation or a state being moved toward (\"becoming someone/something\") and is formed with -vá/-vé, assimilating to the stem's final consonant."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tanár (вчитель) → tanárrá",
                "стати вчителем"
              ],
              [
                "orvos (лікар) → orvossá",
                "стати лікарем"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tanárrá váltam.",
                "Я став учителем."
              ],
              [
                "A víz jéggé fagyott.",
                "Вода замерзла в лід."
              ]
            ]
          }
        ]
      },
      {
        "id": "causal-final-case",
        "title": "Okhatározó/célhatározó eset (-ért) — B1",
        "titleEn": "Causal-Final Case (-Ért) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Причиново-цільовий відмінок -ért означає \"заради, за, через\" — причину чи мету дії.",
            "en": {
              "text": "The causal-final case -ért means \"for the sake of, in exchange for, because of\" — the reason or purpose of an action."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "a gyerekekért",
                "заради дітей"
              ],
              [
                "a pénzért",
                "за гроші"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mindent megteszek a családomért.",
                "Я зроблю все заради своєї родини."
              ],
              [
                "Elmegyek kenyérért.",
                "Я йду за хлібом."
              ]
            ]
          }
        ]
      },
      {
        "id": "terminative-essive-cases",
        "title": "Határozói esetek: -ig, -ként — B1",
        "titleEn": "Terminative & Essive-Formal Cases — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Термінатив -ig означає \"до\" (межа в часі чи просторі), формальний есив -ként означає \"як, у ролі\".",
            "en": {
              "text": "The terminative -ig means \"until/up to\" (a limit in time or space), while the formal essive -ként means \"as, in the role of\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "reggelig",
                "до ранку",
                "терминатив"
              ],
              [
                "orvosként",
                "як лікар",
                "есив-формал"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dolgozom estig.",
                "Я працюю до вечора."
              ],
              [
                "Tanárként dolgozom.",
                "Я працюю вчителем."
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-harmony-three-way",
        "title": "Magánhangzó-harmónia (háromtagú) — A1",
        "titleEn": "Three-Way Vowel Harmony — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Угорська має трискладову гармонію голосних: задній ряд (a, o, u), передній неогублений (e, é, i) та передній огублений (ö, ő, ü, ű) — суфікс обирає варіант відповідно до останнього голосного кореня.",
            "en": {
              "text": "Hungarian has three-way vowel harmony: back (a, o, u), front unrounded (e, é, i), and front rounded (ö, ő, ü, ű) — a suffix chooses its variant based on the root's last vowel."
            }
          },
          {
            "type": "table",
            "title": "Три ряди голосних",
            "rows": [
              [
                "ház → házban",
                "дім → у домі",
                "задній"
              ],
              [
                "kert → kertben",
                "сад → у саду",
                "передній неогубл."
              ],
              [
                "föld → földben",
                "земля → у землі",
                "передній огубл."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Budapesten élek.",
                "Я живу в Будапешті."
              ],
              [
                "Szeretem Magyarországot.",
                "Мені подобається Угорщина."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Birtokos személyjelek — A2",
        "titleEn": "Possessive Suffixes — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні суфікси приєднуються прямо до іменника й показують, кому належить предмет, без окремого присвійного займенника.",
            "en": {
              "text": "Possessive suffixes attach directly to the noun and show ownership, without needing a separate possessive pronoun."
            }
          },
          {
            "type": "table",
            "title": "\"könyv\" (книга) з присвійними суфіксами",
            "rows": [
              [
                "könyvem",
                "моя книга",
                "1 ос."
              ],
              [
                "könyved",
                "твоя книга",
                "2 ос."
              ],
              [
                "könyve",
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
                "Ez a házam.",
                "Це мій дім."
              ],
              [
                "Hol van az autója?",
                "Де його/її машина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix",
        "title": "Többes szám (-k) — A2",
        "titleEn": "Plural Suffix (-K) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -k (з допоміжним голосним за гармонією), доданим до основи слова.",
            "en": {
              "text": "The plural is formed with the suffix -k (with a linking vowel following harmony), added to the word stem."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "ház → házak",
                "будинки"
              ],
              [
                "könyv → könyvek",
                "книги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sok könyvem van.",
                "У мене багато книг."
              ],
              [
                "A gyerekek játszanak.",
                "Діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Melléknévi egyeztetés — A2",
        "titleEn": "Adjective Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник перед іменником не змінюється взагалі, але коли він виступає присудком, узгоджується з підметом у числі (і відмінюється так само, як іменник, якщо стоїть окремо).",
            "en": {
              "text": "An adjective before a noun doesn't change at all, but when used as a predicate it agrees with the subject in number (and declines like a noun when standing alone)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nagy ház",
                "великий дім",
                "атрибутивно — без змін"
              ],
              [
                "A házak nagyok.",
                "Будинки великі.",
                "присудок — множина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ez egy szép nap.",
                "Це гарний день."
              ],
              [
                "A virágok szépek.",
                "Квіти гарні."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Fokozás — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -bb, найвищий — додаванням префікса leg- до вищого ступеня.",
            "en": {
              "text": "The comparative is formed with the suffix -bb, and the superlative by adding the prefix leg- to the comparative."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "nagy",
                "nagyobb",
                "legnagyobb"
              ],
              [
                "szép",
                "szebb",
                "legszebb"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ez a ház nagyobb, mint az enyém.",
                "Цей дім більший, ніж мій."
              ],
              [
                "Ez a legjobb étterem a városban.",
                "Це найкращий ресторан у місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Mutató névmások — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ez\" вказує на близький предмет (це, цей), \"az\" — на віддалений (те, той); обидва узгоджуються з відмінком наступного іменника.",
            "en": {
              "text": "\"Ez\" points to something near (this), \"az\" to something farther away (that); both agree in case with the following noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ez a könyv",
                "ця книга",
                "близько"
              ],
              [
                "az a könyv",
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
                "Ez az én autóm.",
                "Це моя машина."
              ],
              [
                "Ki az az ember?",
                "Хто та людина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Kérdő névmások — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "ki?",
                "хто?",
                "Ki az?"
              ],
              [
                "mi?",
                "що?",
                "Mi ez?"
              ],
              [
                "melyik?",
                "котрий?",
                "Melyik könyv?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ki vagy te?",
                "Хто ти?"
              ],
              [
                "Mit csinálsz?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-aki-ami",
        "title": "Vonatkozó névmások: aki, ami — B1",
        "titleEn": "Relative Pronouns: Aki, Ami — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Aki\" вживається для людей (\"хто, який\"), \"ami\" — для предметів і понять (\"що, який\"); обидва відмінюються за відмінками залежно від ролі в підрядному реченні.",
            "en": {
              "text": "\"Aki\" is used for people (\"who, that\"), \"ami\" for things and concepts (\"which, that\"); both decline by case according to their role in the clause."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "az ember, aki ott áll",
                "людина, яка там стоїть"
              ],
              [
                "a könyv, amit olvasok",
                "книга, яку я читаю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ismerem a nőt, aki ott dolgozik.",
                "Я знаю жінку, яка там працює."
              ],
              [
                "Ez az a film, amit szeretek.",
                "Це той фільм, який мені подобається."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-declension",
        "title": "Személyes névmások ragozása — A2",
        "titleEn": "Personal Pronoun Declension — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за всіма відмінками, часто зі своєю власною формою суфікса, замінюючи цілий післяйменниковий зворот.",
            "en": {
              "text": "Personal pronouns decline through all cases, often with their own dedicated suffix form, replacing an entire postpositional phrase."
            }
          },
          {
            "type": "table",
            "title": "\"én\" (я) за деякими відмінками",
            "rows": [
              [
                "Tárgyeset",
                "engem",
                "мене"
              ],
              [
                "Részes eset",
                "nekem",
                "мені"
              ],
              [
                "-val/-vel",
                "velem",
                "зі мною"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nem lát engem.",
                "Він/вона мене не бачить."
              ],
              [
                "Gyere velem!",
                "Ходи зі мною!"
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions",
        "title": "Névutók — A2",
        "titleEn": "Postpositions — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "На додаток до відмінкових суфіксів угорська вживає й окремі післяйменники, що стоять ПІСЛЯ іменника в називному відмінку: mellett (біля), alatt (під), mögött (за).",
            "en": {
              "text": "In addition to case suffixes, Hungarian also uses separate postpositions that follow the nominative-case noun: mellett (next to), alatt (under), mögött (behind)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "a ház mellett",
                "біля будинку"
              ],
              [
                "az asztal alatt",
                "під столом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A macska az asztal alatt van.",
                "Кіт під столом."
              ],
              [
                "Ülj le mellém!",
                "Сідай біля мене!"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Tőszámnevek — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "egy",
                "один",
                "1"
              ],
              [
                "öt",
                "п'ять",
                "5"
              ],
              [
                "tíz",
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
                "Két testvérem van.",
                "У мене два брати."
              ],
              [
                "Három órakor találkozunk.",
                "Ми зустрінемося о третій."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-singular-agreement",
        "title": "Számnevek és egyes szám — A2",
        "titleEn": "Numerals & Singular Agreement — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від слов'янських мов, після будь-якого числівника угорський іменник завжди залишається в ОДНИНІ — множина взагалі не додається.",
            "en": {
              "text": "Unlike Slavic languages, after any numeral the Hungarian noun always stays in the SINGULAR — the plural is never added."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "három könyv",
                "три книги (однина, не *könyvek)"
              ],
              [
                "öt ház",
                "п'ять будинків (однина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Van két kutyám.",
                "У мене є два пси."
              ],
              [
                "Vettem öt almát.",
                "Я купив п'ять яблук."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Sorszámnevek — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "első",
                "перший",
                "1-й"
              ],
              [
                "második",
                "другий",
                "2-й"
              ],
              [
                "harmadik",
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
                "Ez az első napom a munkahelyen.",
                "Це мій перший день на роботі."
              ],
              [
                "A második emeleten lakom.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-topic-focus",
        "title": "Topik-fókusz szórend — B1",
        "titleEn": "Topic-Focus Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Порядок слів у угорській визначається не граматичною роллю, а темою й фокусом речення: слово, що несе найважливішу нову інформацію (фокус), стоїть безпосередньо перед дієсловом.",
            "en": {
              "text": "Hungarian word order is determined not by grammatical role but by the sentence's topic and focus: the word carrying the most important new information (the focus) stands directly before the verb."
            }
          },
          {
            "type": "table",
            "title": "Різний фокус",
            "rows": [
              [
                "Péter olvas egy könyvet.",
                "Петер читає книгу (нейтрально).",
                "нейтральний"
              ],
              [
                "Péter egy könyvet olvas.",
                "Петер читає САМЕ книгу (не щось інше).",
                "фокус на об'єкті"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Én tanultam magyarul.",
                "Я вивчав угорську (саме я)."
              ],
              [
                "Magyarul tanultam.",
                "Я вивчав саме угорську."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Tagadás árnyalatai (nem, se, sem) — A2",
        "titleEn": "Negation Nuances — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"Nem\" — звичайне заперечення, \"sem\" — заперечний відповідник \"теж\" (\"теж не\"), а подвійне заперечення з займенниками на se- (senki, semmi) обов'язкове, як у слов'янських мовах.",
            "en": {
              "text": "\"Nem\" is regular negation, \"sem\" is the negative counterpart of \"too\" (\"not either\"), and double negation with se- pronouns (senki, semmi) is obligatory, as in Slavic languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Senki nem tudja.",
                "Ніхто не знає.",
                "подвійне заперечення"
              ],
              [
                "Én sem tudom.",
                "Я теж не знаю.",
                "sem"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Semmit nem látok.",
                "Я нічого не бачу."
              ],
              [
                "Ő sem jött el.",
                "Він/вона теж не прийшов(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Mellérendelő kötőszavak — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "és",
                "і/та",
                "Én és te."
              ],
              [
                "de",
                "але",
                "Szeretném, de nem lehet."
              ],
              [
                "vagy",
                "або",
                "Kávét vagy teát?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Szeretem a teát és a kávét.",
                "Мені подобається чай і кава."
              ],
              [
                "Szívesen mennék, de nincs időm.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Alárendelő kötőszavak — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "hogy",
                "що",
                "Tudom, hogy jössz."
              ],
              [
                "mert",
                "тому що",
                "Nem jöttem, mert beteg voltam."
              ],
              [
                "ha",
                "якщо",
                "Ha van időd, hívj fel."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Azt hiszem, hogy igazad van.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Maradok, ha szükséges.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-maga",
        "title": "Visszaható névmás \"maga\" — A2",
        "titleEn": "Reflexive Pronoun Maga — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"maga\" (сам, себе) відмінюється за відмінками з присвійним суфіксом і показує, що дія спрямована на самого діяча.",
            "en": {
              "text": "The reflexive pronoun \"maga\" (self) declines by case with a possessive suffix and shows the action is directed back at the doer."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "magamat",
                "себе (мене самого)",
                "тарг. відм."
              ],
              [
                "magamnak",
                "собі",
                "дав. відм."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nézem magamat a tükörben.",
                "Я дивлюся на себе в дзеркало."
              ],
              [
                "Ezt magam csináltam.",
                "Я зробив це сам."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-pronoun-egymas",
        "title": "Kölcsönös névmás \"egymás\" — B1",
        "titleEn": "Reciprocal Pronoun Egymás — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "\"Egymás\" (\"одне одного\") виражає взаємну дію між двома чи більше учасниками й відмінюється за відмінками залежно від керування дієслова.",
            "en": {
              "text": "\"Egymás\" (\"one another\") expresses a mutual action between two or more participants and declines by case depending on the governing verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "szeretik egymást",
                "люблять одне одного"
              ],
              [
                "segítenek egymásnak",
                "допомагають одне одному"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ők szeretik egymást.",
                "Вони люблять одне одного."
              ],
              [
                "Segítünk egymásnak.",
                "Ми допомагаємо одне одному."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Határozatlan névmások — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "valaki",
                "хтось",
                "Valaki kopog."
              ],
              [
                "valami",
                "щось",
                "Kérek valamit."
              ],
              [
                "senki",
                "ніхто",
                "Senki nem tudja."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Valaki kopog az ajtón.",
                "Хтось стукає у двері."
              ],
              [
                "Van valami kérdésed?",
                "У тебе є якесь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-van-nincs",
        "title": "Létezés: van/nincs — A1",
        "titleEn": "Existence: Van/Nincs — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "\"Van\" (\"є\") і його заперечення \"nincs\" (\"немає\") виражають наявність предмета й, з давальним відмінком особи, володіння ним.",
            "en": {
              "text": "\"Van\" (\"there is\") and its negation \"nincs\" (\"there isn't\") express the presence of something and, with the dative of a person, possession of it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Van egy könyv az asztalon.",
                "На столі є книга."
              ],
              [
                "Nincs pénzem.",
                "У мене немає грошей."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Van kutyám.",
                "У мене є пес."
              ],
              [
                "Nincs itt senki.",
                "Тут нікого немає."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Mennyiségjelzők (sok/kevés) — A2",
        "titleEn": "Quantifiers (Sok/Kevés) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "sok",
                "багато"
              ],
              [
                "kevés",
                "мало"
              ],
              [
                "néhány",
                "кілька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sok barátom van.",
                "У мене багато друзів."
              ],
              [
                "Adj néhány percet.",
                "Дай мені кілька хвилин."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "A hét napjai — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "hétfő",
                "понеділок",
                "1"
              ],
              [
                "péntek",
                "п'ятниця",
                "5"
              ],
              [
                "vasárnap",
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
                "Hétfőn van óránk.",
                "У понеділок у нас заняття."
              ],
              [
                "Ma szerda van.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Hónapok és dátumok — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "január",
                "січень",
                "01"
              ],
              [
                "július",
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
                "Ma május ötödike van.",
                "Сьогодні п'яте травня."
              ],
              [
                "Decemberben születtem.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Az idő kifejezése — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Hány óra van?\" (\"Котра година?\"). Угорська, як і німецька, орієнтує пів-годину на НАСТУПНУ годину.",
            "en": {
              "text": "To ask the time, one says \"Hány óra van?\" (\"What time is it?\"). Hungarian, like German, orients the half-hour toward the NEXT hour."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Egy óra van.",
                "Перша година.",
                "1:00"
              ],
              [
                "Fél három van.",
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
                "Hány óra van?",
                "Котра година?"
              ],
              [
                "A vonat nyolckor indul.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Tegezés és önözés — A2",
        "titleEn": "Tu vs Ön (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"te\" (2-га особа однини), для ввічливого/формального — \"ön\" (з дієсловом у 3-й особі однини).",
            "en": {
              "text": "For informal address, Hungarian uses \"te\" (2nd person singular); for polite/formal address it uses \"ön\" (with a 3rd person singular verb)."
            }
          },
          {
            "type": "table",
            "title": "te ↔ ön",
            "rows": [
              [
                "Hogy vagy?",
                "Як ти? (неформально)",
                "te"
              ],
              [
                "Hogy van?",
                "Як Ви? (формально)",
                "ön"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Honnan jön ön?",
                "Звідки Ви?"
              ],
              [
                "Köszönöm a segítségét.",
                "Дякую Вам за допомогу."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Köszönések és gyakori kifejezések — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Szia.",
                "Привіт."
              ],
              [
                "Köszönöm.",
                "Дякую."
              ],
              [
                "Bocsánat.",
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
                "Örülök, hogy megismerhetlek.",
                "Приємно познайомитися."
              ],
              [
                "Viszlát.",
                "До зустрічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Időjárási kifejezések — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "Süt a nap.",
                "Сонячно."
              ],
              [
                "Esik az eső.",
                "Іде дощ."
              ],
              [
                "Esik a hó.",
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
                "Ma nagyon hideg van.",
                "Сьогодні дуже холодно."
              ],
              [
                "Holnap felhős lesz.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Szólások — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Nem esik messze az alma a fájától.",
                "(букв. яблуко недалеко падає від дерева) — яблуко від яблуні недалеко падає."
              ],
              [
                "Egy füst alatt.",
                "(букв. під одним димом) — одночасно, заодно."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ő is olyan, mint az apja, nem esik messze az alma a fájától.",
                "Він схожий на батька, яблуко недалеко падає."
              ],
              [
                "Egy füst alatt megcsinálom ezt is.",
                "Заодно я зроблю й це."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Határozószók képzése — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії утворюється від прикметників суфіксом -n/-an/-en/-ul/-ül.",
            "en": {
              "text": "Most manner adverbs are formed from adjectives with the suffix -n/-an/-en/-ul/-ül."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "gyors (швидкий)",
                "gyorsan",
                "швидко"
              ],
              [
                "szép (гарний)",
                "szépen",
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
                "Gyorsan beszél.",
                "Він говорить швидко."
              ],
              [
                "Szépen énekel.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Szóképzés — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Угорська активно утворює нові слова додаванням суфіксів: -ó/-ő (виконавець дії), -ság/-ség (абстрактне поняття), -i (прикметники від іменників).",
            "en": {
              "text": "Hungarian actively derives new words with suffixes: -ó/-ő (agent noun), -ság/-ség (abstract concept), -i (adjectives from nouns)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "tanítani (вчити) → tanító",
                "вчитель"
              ],
              [
                "boldog (щасливий) → boldogság",
                "щастя"
              ],
              [
                "Budapest → budapesti",
                "будапештський"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A boldogság fontos.",
                "Щастя важливе."
              ],
              [
                "Ő budapesti lakos.",
                "Він/вона мешканець Будапешта."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words",
        "title": "Összetett szavak — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Угорська вільно поєднує кілька слів в одне довге складне слово без пробілів, причому лише останній елемент відмінюється.",
            "en": {
              "text": "Hungarian freely combines several words into one long compound word with no spaces, and only the last element declines."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "autó (машина) + busz (автобус)",
                "autóbusz",
                "автобус"
              ],
              [
                "könyv (книга) + tár (сховище)",
                "könyvtár",
                "бібліотека"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A könyvtárban vagyok.",
                "Я в бібліотеці."
              ],
              [
                "Autóbusszal megyünk.",
                "Ми їдемо автобусом."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Évszakok — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "tavasz",
                "весна"
              ],
              [
                "nyár",
                "літо"
              ],
              [
                "tél",
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
                "Nyáron meleg van.",
                "Влітку тепло."
              ],
              [
                "Szeretem az őszt.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Árak és pénz — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Mennyibe kerül?\" (\"Скільки це коштує?\"), а валюта \"forint\" стоїть після числа.",
            "en": {
              "text": "To ask the price, one says \"Mennyibe kerül?\" (\"How much does it cost?\"), and the currency \"forint\" follows the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "száz forint",
                "сто форинтів"
              ],
              [
                "olcsó / drága",
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
                "Mennyibe kerül ez a ruha?",
                "Скільки коштує ця сукня?"
              ],
              [
                "Ez túl drága.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Kérdőszavak — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "hol?",
                "де?",
                "Hol vagy?"
              ],
              [
                "mikor?",
                "коли?",
                "Mikor jössz?"
              ],
              [
                "miért?",
                "чому?",
                "Miért sírsz?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hol van a pályaudvar?",
                "Де вокзал?"
              ],
              [
                "Miért késtél el?",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Vélemény kifejezése — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Szerintem...",
                "На мою думку..."
              ],
              [
                "Azt hiszem...",
                "Я думаю, що..."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Szerintem ez jó ötlet.",
                "На мою думку, це хороша ідея."
              ],
              [
                "Azt hiszem, ez túl drága.",
                "Я думаю, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Időhatározók (ma/tegnap/holnap) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ma",
                "сьогодні"
              ],
              [
                "tegnap",
                "вчора"
              ],
              [
                "holnap",
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
                "Ma szabad vagyok.",
                "Сьогодні я вільний."
              ],
              [
                "Holnap találkozunk.",
                "Побачимося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Indulatszavak — A2",
        "titleEn": "Exclamations — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Jaj!",
                "Ой!"
              ],
              [
                "Remek!",
                "Чудово!"
              ],
              [
                "Sok szerencsét!",
                "Удачі!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jaj, elfelejtettem!",
                "Ой, я забув!"
              ],
              [
                "Remek, sikerült!",
                "Чудово, тобі вдалося!"
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Kicsinyítő képzők — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -ka/-ke, -cska/-cske тощо і широко вживаються в повсякденному мовленні, виражаючи теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -ka/-ke, -cska/-cske and are widely used in everyday speech, expressing warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "kutya (пес)",
                "kutyuska",
                "песик"
              ],
              [
                "ház (будинок)",
                "házikó",
                "будиночок"
              ],
              [
                "anya",
                "anyuka",
                "мамочка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Van egy kis kutyuskám.",
                "У мене маленький песик."
              ],
              [
                "Vettem egy játékot a kisfiúnak.",
                "Я купила синочку іграшку."
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
        "title": "Rendhagyó igék — A2",
        "titleEn": "Irregular Verbs — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів (lenni, enni, inni, menni) відмінюються неправильно й мають форми, що варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs (lenni, enni, inni, menni) conjugate irregularly and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "lenni (бути)",
                "vagyok, vagy, van",
                "я є, ти є, він є"
              ],
              [
                "enni (їсти)",
                "eszem, eszel, eszik",
                "я їм, ти їси, він їсть"
              ],
              [
                "menni (йти)",
                "megyek, mész, megy",
                "я йду, ти йдеш, він йде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Most nem tudok beszélni.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Megyek a boltba, kérsz valamit?",
                "Я йду в магазин, хочеш щось?"
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-harmony-exceptions",
        "title": "Kivételek a magánhangzó-harmóniában — B1",
        "titleEn": "Vowel Harmony Exceptions — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька слів (переважно запозичень чи слів із двома різними за рядом голосними) не підпорядковуються звичайним правилам гармонії голосних, і суфікс до них треба запам'ятовувати індивідуально.",
            "en": {
              "text": "A handful of words (mostly loanwords or words with two vowels of different backness) don't follow the regular vowel harmony rules, and the correct suffix must be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Приклади винятків",
            "rows": [
              [
                "híd (міст) → hídon",
                "на мості (передній суфікс, хоча і/í нейтральні)"
              ],
              [
                "papír (папір) → papíron",
                "на папері (задній суфікс, хоча запозичене)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A hídon állok.",
                "Я стою на мості."
              ],
              [
                "Írok a papíron.",
                "Я пишу на папері."
              ]
            ]
          }
        ]
      },
      {
        "id": "long-agglutinative-words",
        "title": "Hosszú ragozott szavak — B1",
        "titleEn": "Long Agglutinative Words — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки відмінкові суфікси, присвійні закінчення й післяйменникові елементи можна накопичувати на одному слові, угорська, подібно до фінської, відома дуже довгими словами, утвореними нанизуванням багатьох морфем.",
            "en": {
              "text": "Since case suffixes, possessive endings, and postposition-like elements can stack on a single word, Hungarian, like Finnish, is known for very long words formed by chaining many morphemes together."
            }
          },
          {
            "type": "table",
            "title": "Приклад дуже довгого слова",
            "rows": [
              [
                "megszentségteleníthetetlenségeskedéseitekért",
                "за ваші (звичні) спроби поводитися так, ніби вас не можна осквернити",
                "жартівливе, найдовше відоме слово"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A könyveimben van egy jó történet.",
                "У моїх книгах є хороша історія (кілька морфем на одному слові)."
              ],
              [
                "A barátaimtól kaptam ajándékot.",
                "Я отримав подарунок від своїх друзів."
              ]
            ]
          }
        ]
      }
    ]
  }
];
