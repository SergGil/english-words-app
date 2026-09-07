// Vymova — data/grammar-data/grammar_ro.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_RO: GrammarCategory[] = [
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
            "text": "Румунські дієслова майже завжди вказують особу самі через закінчення, тому займенники часто опускають.",
            "en": {
              "text": "Romanian verbs almost always mark person through their ending, so the pronoun is often dropped."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "eu",
                "я"
              ],
              [
                "tu",
                "ти"
              ],
              [
                "el / ea",
                "він / вона"
              ],
              [
                "noi",
                "ми"
              ],
              [
                "ei / ele",
                "вони (чол. / жін.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eu sunt profesor.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"a fi\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"A fi\" — неправильне дієслово, форми якого важливо запам'ятати напам'ять для теперішнього часу.",
            "en": {
              "text": "\"A fi\" is an irregular verb whose present-tense forms need to be memorised directly."
            }
          },
          {
            "type": "formula",
            "title": "\"a fi\" (бути) — теперішній час",
            "rows": [
              [
                "eu",
                "sunt",
                "я є"
              ],
              [
                "tu",
                "ești",
                "ти є"
              ],
              [
                "el / ea",
                "este",
                "він/вона є"
              ],
              [
                "noi",
                "suntem",
                "ми є"
              ],
              [
                "voi",
                "sunteți",
                "ви є"
              ],
              [
                "ei / ele",
                "sunt",
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
                "Ea este doctor.",
                "Вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb A Fi (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"nu\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою nu безпосередньо перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle nu directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Știu.",
                "Nu știu.",
                "Я знаю. / Я не знаю."
              ],
              [
                "A venit.",
                "Nu a venit.",
                "Він прийшов. / Він не прийшов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El nu a venit.",
                "Він не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Nu — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються просто висхідною інтонацією, без зміни порядку слів чи додаткової частки.",
            "en": {
              "text": "Yes/no questions are most often formed just with rising intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Ești obosit.",
                "Ești obosit?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Ai timp acum.",
                "Ai timp acum?",
                "У тебе є час зараз. / У тебе є час зараз?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ai timp acum?",
                "У тебе є час зараз?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "definite-article",
        "title": "Означений артикль-суфікс — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від англійської, означений артикль у румунській приєднується як суфікс в кінці іменника, а не стоїть окремим словом перед ним.",
            "en": {
              "text": "Unlike English, Romanian's definite article attaches as a suffix at the end of the noun, rather than standing as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "băiat → băiatul",
                "хлопчик → цей хлопчик"
              ],
              [
                "casă → casa",
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
                "Băiatul citește.",
                "Хлопчик читає."
              ]
            ]
          }
        ],
        "titleEn": "The Suffixed Definite Article — A1"
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
        "title": "Prezentul — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова в теперішньому часі відмінюються за особами й числами. Румунські дієслова поділяються на чотири класи дієвідмінювання за закінченням інфінітива: -a, -ea, -e, -i.",
            "en": {
              "text": "Present-tense verbs conjugate by person and number. Romanian verbs fall into four conjugation classes based on their infinitive ending: -a, -ea, -e, -i."
            }
          },
          {
            "type": "formula",
            "title": "\"a lucra\" (працювати) — prezent",
            "rows": [
              [
                "eu",
                "lucrez",
                "я працюю"
              ],
              [
                "tu",
                "lucrezi",
                "ти працюєш"
              ],
              [
                "el / ea",
                "lucrează",
                "він/вона працює"
              ],
              [
                "noi",
                "lucrăm",
                "ми працюємо"
              ],
              [
                "voi",
                "lucrați",
                "ви працюєте"
              ],
              [
                "ei / ele",
                "lucrează",
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
                "Eu lucrez la o bancă.",
                "Я працюю в банку."
              ],
              [
                "Ei beau cafea.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-compus",
        "title": "Perfectul compus — A1",
        "titleEn": "Present Perfect (Main Past Tense) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Складений перфект — основний і найуживаніший минулий час, утворюється з допоміжного дієслова \"a avea\" (мати) в теперішньому часі та дієприкметника минулого часу.",
            "en": {
              "text": "The compound perfect is the main, most commonly used past tense, formed with the present tense of \"a avea\" (to have) plus the past participle."
            }
          },
          {
            "type": "formula",
            "title": "\"a lucra\" (працювати) — perfectul compus",
            "rows": [
              [
                "eu",
                "am lucrat",
                "я працював"
              ],
              [
                "tu",
                "ai lucrat",
                "ти працював"
              ],
              [
                "el / ea",
                "a lucrat",
                "він/вона працював(-ла)"
              ],
              [
                "noi",
                "am lucrat",
                "ми працювали"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ieri am lucrat până târziu.",
                "Вчора я працював допізна."
              ],
              [
                "Ea a citit cartea.",
                "Вона прочитала книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect-tense",
        "title": "Imperfectul — A2",
        "titleEn": "Imperfect Tense — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект описує тривалу чи звичну дію в минулому й утворюється суфіксом -am/-eam, доданим до основи дієслова.",
            "en": {
              "text": "The imperfect describes an ongoing or habitual past action and is formed with the suffix -am/-eam added to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "\"a citi\" (читати) — imperfect",
            "rows": [
              [
                "eu",
                "citeam",
                "я читав (процес)"
              ],
              [
                "tu",
                "citeai",
                "ти читав"
              ],
              [
                "el / ea",
                "citea",
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
                "Când eram copil, locuiam la țară.",
                "Коли я був дитиною, я жив у селі."
              ],
              [
                "Citeam o carte când a sunat telefonul.",
                "Я читав книгу, коли задзвонив телефон."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect-tense",
        "title": "Mai-mult-ca-perfectul — B1",
        "titleEn": "Pluperfect — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької чи іспанської, румунський давноминулий час — синтетична (проста) форма, а не складена: він утворюється суфіксом -se-, доданим прямо до основи дієслова.",
            "en": {
              "text": "Unlike French or Spanish, the Romanian pluperfect is a synthetic (simple) form, not a compound one: it's formed with the suffix -se-, added directly to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "\"a lucra\" (працювати) — mai-mult-ca-perfectul",
            "rows": [
              [
                "eu",
                "lucrasem",
                "я вже був(-ла) працював(-ла)"
              ],
              [
                "tu",
                "lucraseși",
                "ти вже був(-ла) працював(-ла)"
              ],
              [
                "el / ea",
                "lucrase",
                "він/вона вже був(-ла) працював(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Terminasem deja când ai venit.",
                "Я вже закінчив, коли ти прийшов."
              ],
              [
                "Ea plecase înainte să ajungem noi.",
                "Вона вже пішла, перш ніж ми прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-voi",
        "title": "Viitorul I (voi) — A2",
        "titleEn": "Future Tense (Voi) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Літературний майбутній час утворюється допоміжним дієсловом \"voi/vei/va/vom/veți/vor\" + інфінітив (без частки \"a\").",
            "en": {
              "text": "The literary future is formed with the auxiliary \"voi/vei/va/vom/veți/vor\" plus the bare infinitive (without the particle \"a\")."
            }
          },
          {
            "type": "formula",
            "title": "\"a lucra\" (працювати) — viitorul I",
            "rows": [
              [
                "eu",
                "voi lucra",
                "я працюватиму"
              ],
              [
                "tu",
                "vei lucra",
                "ти працюватимеш"
              ],
              [
                "el / ea",
                "va lucra",
                "він/вона працюватиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mâine voi lucra toată ziua.",
                "Завтра я працюватиму цілий день."
              ],
              [
                "Vom vedea curând.",
                "Ми скоро побачимо."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-o-sa",
        "title": "Viitorul popular (o să) — A2",
        "titleEn": "Colloquial Future (O Să) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній мові майбутній час частіше виражають конструкцією \"o să\" + дієслово в кон'юнктиві (не інфінітив!) — набагато частіше, ніж літературне \"voi\".",
            "en": {
              "text": "In everyday speech, the future is more often expressed with \"o să\" plus the subjunctive (not the infinitive!) — far more common than the literary \"voi\"."
            }
          },
          {
            "type": "table",
            "title": "voi vs o să",
            "rows": [
              [
                "Voi merge acolo.",
                "Я туди піду (літературно).",
                "voi"
              ],
              [
                "O să merg acolo.",
                "Я туди піду (розмовно).",
                "o să"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "O să plouă mâine.",
                "Завтра, схоже, піде дощ."
              ],
              [
                "O să vorbim mai târziu.",
                "Ми поговоримо пізніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Imperativul — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "У 2-й особі однини наказовий спосіб часто збігається з формою теперішнього часу чи є окремою короткою формою; заперечний наказ у 2-й особі однини вживає інфінітив після \"nu\".",
            "en": {
              "text": "In the 2nd person singular, the imperative often matches the present tense or has its own short form; the negative imperative in the 2nd person singular uses the infinitive after \"nu\"."
            }
          },
          {
            "type": "table",
            "title": "Стверджувальний ↔ заперечний",
            "rows": [
              [
                "Vino!",
                "Приходь!",
                "стверджувальний"
              ],
              [
                "Nu veni!",
                "Не приходь!",
                "заперечний (=nu + інфінітив)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Închide ușa, te rog.",
                "Зачини двері, будь ласка."
              ],
              [
                "Nu uita!",
                "Не забудь!"
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-sa",
        "title": "Conjunctivul (să) — A2",
        "titleEn": "Subjunctive (Să) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Найважливіша риса румунської граматики: інфінітив майже не вживається як окрема форма після інших дієслів — натомість завжди вживають \"să\" + дієслово в кон'юнктиві (форма кон'юнктива збігається з теперішнім часом, крім 3-ї особи).",
            "en": {
              "text": "Romanian's most important grammatical trait: the infinitive is almost never used as a standalone form after other verbs — instead, \"să\" plus the subjunctive is always used (the subjunctive matches the present tense except in the 3rd person)."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив (рідко) ↔ să + кон'юнктив (завжди)",
            "rows": [
              [
                "Vreau a merge. (рідко/архаїчно)",
                "Vreau să merg. (звичайно)",
                "Я хочу піти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vreau să mănânc.",
                "Я хочу поїсти."
              ],
              [
                "Trebuie să plecăm acum.",
                "Нам треба йти зараз."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Condiționalul-optativ (aș) — B1",
        "titleEn": "Conditional Mood (Aș) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється допоміжним \"aș/ai/ar/am/ați/ar\" + інфінітив (без частки \"a\").",
            "en": {
              "text": "The conditional is formed with the auxiliary \"aș/ai/ar/am/ați/ar\" plus the bare infinitive (without the particle \"a\")."
            }
          },
          {
            "type": "formula",
            "title": "\"a merge\" (йти) — condițional",
            "rows": [
              [
                "eu",
                "aș merge",
                "я пішов би"
              ],
              [
                "tu",
                "ai merge",
                "ти пішов би"
              ],
              [
                "el / ea",
                "ar merge",
                "він/вона пішов(-ла) би"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aș vrea să călătoresc mai mult.",
                "Я хотів би більше подорожувати."
              ],
              [
                "Dacă aș avea timp, aș veni.",
                "Якби в мене був час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "gerund",
        "title": "Gerunziul (-ind/-ând) — B1",
        "titleEn": "Gerund (-Ind/-Ând) — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Герундій утворюється суфіксом -ând (I клас) чи -ind (решта класів) і описує одночасну дію, схожий на англійський \"-ing\", але не змінюється за особами.",
            "en": {
              "text": "The gerund is formed with the suffix -ând (1st conjugation) or -ind (other classes) and describes a simultaneous action, similar to English \"-ing\", but doesn't change by person."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "a merge → mergând",
                "йдучи"
              ],
              [
                "a citi → citind",
                "читаючи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mergând spre casă, am întâlnit un prieten.",
                "Ідучи додому, я зустрів друга."
              ],
              [
                "A adormit citind o carte.",
                "Він заснув, читаючи книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "presumptive-mood",
        "title": "Modul prezumtiv — B2",
        "titleEn": "Presumptive Mood — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Дуже своєрідний для румунської граматики спосіб — презумптив — виражає припущення чи здогад (\"мабуть, робить/зробив\") і утворюється формами дієслова \"a fi\" + герундій чи дієприкметник.",
            "en": {
              "text": "A mood quite unique to Romanian grammar — the presumptive — expresses supposition or guessing (\"must be doing/have done\") and is formed with forms of \"a fi\" plus the gerund or participle."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "o fi lucrând",
                "мабуть, працює"
              ],
              [
                "o fi plecat",
                "мабуть, вже пішов"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "O fi acasă acum.",
                "Він/вона, мабуть, зараз удома."
              ],
              [
                "Să fi știut, aș fi venit.",
                "Якби я знав, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-conditional",
        "title": "Condiționalul-optativ perfect — B1",
        "titleEn": "Past Conditional — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Для нереальних умов у минулому утворюють: aș/ai/ar + fi + дієприкметник минулого часу.",
            "en": {
              "text": "For unreal past conditions: aș/ai/ar + fi + past participle."
            }
          },
          {
            "type": "table",
            "title": "Теперішній ↔ минулий умовний",
            "rows": [
              [
                "aș merge",
                "aș fi mers",
                "я пішов би / я був би пішов"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dacă aș fi știut, aș fi venit mai devreme.",
                "Якби я знав раніше, я прийшов би раніше."
              ],
              [
                "Ar fi ajutat dacă ar fi putut.",
                "Він допоміг би, якби міг."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-perfect-tense",
        "title": "Perfectul simplu — B2",
        "titleEn": "Simple Past (Literary) — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Простий перфект — літературний, розповідний минулий час, майже не вживаний у сучасній розмовній мові Мунтенії чи Молдови, але досі живий у розмовній мові деяких регіонів (наприклад, Олтенії) і в літературних текстах.",
            "en": {
              "text": "The simple perfect is a literary, narrative past tense almost never used in modern spoken Wallachian or Moldovan speech, but still alive in the everyday speech of some regions (like Oltenia) and in literary texts."
            }
          },
          {
            "type": "formula",
            "title": "\"a cânta\" (співати) — perfectul simplu",
            "rows": [
              [
                "eu",
                "cântai",
                "я заспівав (літ. форма)"
              ],
              [
                "tu",
                "cântași",
                "ти заспівав (літ. форма)"
              ],
              [
                "el / ea",
                "cântă",
                "він/вона заспівав(-ла) (літ. форма)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ion văzu ce se întâmplase.",
                "Іон побачив, що сталося (літературний стиль)."
              ],
              [
                "Merse la piață și cumpără pâine.",
                "Він пішов на ринок і купив хліб (літ. розповідний стиль)."
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
        "id": "genitive-dative-case",
        "title": "Cazul genitiv-dativ — B1",
        "titleEn": "Genitive-Dative Case — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших романських мов, які втратили відмінки, румунська зберігає окрему форму родового-давального відмінка для іменників жіночого роду й у множині — обидва значення (\"кого/чого\" і \"кому/чому\") мають ОДНАКОВУ форму.",
            "en": {
              "text": "Unlike other Romance languages, which lost case endings, Romanian retains a distinct genitive-dative form for feminine nouns and in the plural — both meanings (\"of/to whom\") share the SAME form."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Genitiv-dativ",
            "rows": [
              [
                "fată (дівчина)",
                "fetei",
                "cartea fetei (книга дівчини) / dau cadou fetei (даю подарунок дівчині)"
              ],
              [
                "femeie (жінка)",
                "femeii",
                "casa femeii (дім жінки)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aceasta este mașina Mariei.",
                "Це машина Марії."
              ],
              [
                "I-am dat cartea profesoarei.",
                "Я дав книгу вчительці."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-case",
        "title": "Cazul vocativ — B1",
        "titleEn": "Vocative Case — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок — ще один справжній відмінок, який зберегла румунська, попри те, що інші романські мови його втратили. Уживається при прямому зверненні.",
            "en": {
              "text": "The vocative is another genuine case Romanian retained, even though other Romance languages lost it entirely. It's used when addressing someone directly."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Vocativ",
            "rows": [
              [
                "Maria",
                "Mario!",
                "Маріє!"
              ],
              [
                "Ion",
                "Ioane!",
                "Іоне!"
              ],
              [
                "fată (дівчина)",
                "fato!",
                "дівчино!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mamă, unde ești?",
                "Мамо, де ти?"
              ],
              [
                "Doamnă, aveți un minut?",
                "Пані, у Вас є хвилинка?"
              ]
            ]
          }
        ]
      },
      {
        "id": "three-gender-system",
        "title": "Genul neutru (ambigen) — A2",
        "titleEn": "The Neuter (Ambigenous) Gender — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Румунська — єдина романська мова, яка зберегла третій рід — середній (neutru), хоча він і не має власних закінчень: у однині середні іменники поводяться як чоловічий рід, у множині — як жіночий.",
            "en": {
              "text": "Romanian is the only Romance language to retain a third gender — neuter — though it has no endings of its own: neuter nouns behave like masculine in the singular and like feminine in the plural."
            }
          },
          {
            "type": "table",
            "title": "Середній рід: чоловічий в одн., жіночий у мн.",
            "rows": [
              [
                "un scaun (стілець, одн.)",
                "два scaune (стільці, мн.)",
                "як чол./жін."
              ],
              [
                "un creion (олівець)",
                "trei creioane (олівці)",
                "як чол./жін."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Am un scaun nou.",
                "У мене новий стілець."
              ],
              [
                "Am trei scaune noi.",
                "У мене три нові стільці."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Acordul adjectivului — A1",
        "titleEn": "Adjective Agreement — A1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді, числі та відмінку і може стояти як перед, так і після іменника.",
            "en": {
              "text": "An adjective agrees with the noun in gender, number, and case, and can stand either before or after the noun."
            }
          },
          {
            "type": "table",
            "title": "Узгодження за родом і числом",
            "rows": [
              [
                "un băiat înalt",
                "високий хлопчик",
                "чол. одн."
              ],
              [
                "o fată înaltă",
                "висока дівчина",
                "жін. одн."
              ],
              [
                "copii înalți",
                "високі діти",
                "мн."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Am un câine mic.",
                "У мене маленький пес."
              ],
              [
                "Acestea sunt cărți interesante.",
                "Це цікаві книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-position",
        "title": "Poziția adjectivului — B1",
        "titleEn": "Adjective Position — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть після іменника (нейтральне значення), але постановка перед іменником надає йому емоційного чи стилістичного відтінку.",
            "en": {
              "text": "The adjective usually follows the noun (neutral meaning), but placing it before the noun gives it an emotional or stylistic emphasis."
            }
          },
          {
            "type": "table",
            "title": "Після ↔ перед іменником",
            "rows": [
              [
                "o casă mare",
                "великий дім (нейтрально)",
                "після"
              ],
              [
                "o mare bucurie",
                "велика радість (емоційно)",
                "перед"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Are o mașină scumpă.",
                "У нього дорога машина."
              ],
              [
                "A fost o zi minunată.",
                "Це був чудовий день."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Comparația adjectivelor — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом \"mai\" перед прикметником, найвищий — артиклем \"cel/cea/cei/cele\" + \"mai\" перед прикметником.",
            "en": {
              "text": "The comparative is formed with \"mai\" before the adjective, and the superlative with the article \"cel/cea/cei/cele\" plus \"mai\" before the adjective."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "mare (великий)",
                "mai mare",
                "cel mai mare"
              ],
              [
                "frumos (гарний)",
                "mai frumos",
                "cel mai frumos"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Casa asta e mai mare decât a mea.",
                "Цей дім більший, ніж мій."
              ],
              [
                "Este cel mai bun restaurant din oraș.",
                "Це найкращий ресторан у місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-adjectives",
        "title": "Adjectivele posesive (al/a/ai/ale) — B1",
        "titleEn": "Possessive Adjectives (Al/A/Ai/Ale) — B1",
        "emoji": "👜",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники узгоджуються з предметом володіння в роді й числі, і коли вони стоять не одразу після означеного іменника, перед ними додається присвійний артикль \"al/a/ai/ale\" (теж узгоджений).",
            "en": {
              "text": "Possessive adjectives agree with the possessed item in gender and number, and when not immediately after a definite noun, they take the possessive article \"al/a/ai/ale\" (also agreeing)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cartea mea",
                "моя книга",
                "без артикля"
              ],
              [
                "Cartea este a mea.",
                "Ця книга моя.",
                "з артиклем \"a\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aceasta e casa noastră.",
                "Це наш дім."
              ],
              [
                "Prietenii lui sunt și prietenii mei.",
                "Його друзі — це і мої друзі."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Pronumele demonstrative — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Acesta/aceasta\" (цей/ця) вказує на близький предмет, \"acela/aceea\" (той/та) — на віддалений; обидва узгоджуються з іменником у роді й числі.",
            "en": {
              "text": "\"Acesta/aceasta\" (this) points to something near, \"acela/aceea\" (that) to something farther away; both agree with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "acest băiat / acesta",
                "цей хлопчик / цей",
                "чол."
              ],
              [
                "această fată / aceasta",
                "ця дівчина / ця",
                "жін."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Această carte este a mea.",
                "Ця книга моя."
              ],
              [
                "Acela este fratele meu.",
                "Той — мій брат."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-clitics",
        "title": "Pronumele personale — forme neaccentuate — A2",
        "titleEn": "Personal Pronoun Clitics — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають короткі (ненаголошені) форми для знахідного й давального відмінка, які стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Personal pronouns have short (unstressed) forms for the accusative and dative, which stand directly before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "îl văd",
                "я бачу його",
                "знах."
              ],
              [
                "îi dau",
                "я даю йому/їй",
                "дав."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "O cunosc bine.",
                "Я добре її знаю."
              ],
              [
                "Îi spun adevărul.",
                "Я кажу йому правду."
              ]
            ]
          }
        ]
      },
      {
        "id": "clitic-doubling",
        "title": "Dublarea pronominală — B1",
        "titleEn": "Clitic Doubling — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Своєрідна балканська риса: коли прямий чи непрямий додаток визначений (особа, власна назва), його часто дублюють коротким займенником перед дієсловом, навіть якщо повний іменник теж присутній у реченні.",
            "en": {
              "text": "A distinctively Balkan feature: when a direct or indirect object is definite (a person, a proper name), it's often doubled by a short pronoun before the verb, even though the full noun is also present in the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад дублювання",
            "rows": [
              [
                "Îl văd pe Ion.",
                "Я бачу Іона.",
                "îl дублює \"pe Ion\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "O cunosc pe Maria.",
                "Я знаю Марію."
              ],
              [
                "Le-am dat cadouri copiilor.",
                "Я дав подарунки дітям."
              ]
            ]
          }
        ]
      },
      {
        "id": "pe-accusative-marker",
        "title": "Acuzativul cu \"pe\" — B1",
        "titleEn": "Accusative Marker Pe — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Коли прямий додаток — визначена людина, перед ним ставиться прийменник \"pe\" — подібно до іспанського особового \"a\". З неживими чи неозначеними предметами \"pe\" не вживається.",
            "en": {
              "text": "When the direct object is a definite person, the preposition \"pe\" precedes it — similar to Spanish's personal \"a\". \"Pe\" is not used with inanimate or indefinite objects."
            }
          },
          {
            "type": "table",
            "title": "pe (особа) vs без pe (предмет)",
            "rows": [
              [
                "O văd pe Maria.",
                "Я бачу Марію.",
                "pe — особа"
              ],
              [
                "Văd o carte.",
                "Я бачу книгу.",
                "без pe — предмет"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Îl caut pe profesor.",
                "Я шукаю вчителя."
              ],
              [
                "Am întâlnit-o pe sora ta.",
                "Я зустрів твою сестру."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-se",
        "title": "Pronumele reflexiv \"se\" — A2",
        "titleEn": "Reflexive Pronoun Se — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"se\" (себе) позначає, що дія спрямована на самого діяча, й має короткі форми для різних осіб (mă, te, se, ne, vă, se).",
            "en": {
              "text": "The reflexive pronoun \"se\" (self) shows the action is directed at the doer, and has short forms for different persons (mă, te, se, ne, vă, se)."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "a se spăla",
                "Mă spăl.",
                "Я митися/Я мию себе."
              ],
              [
                "a se numi",
                "Cum te numești?",
                "Як тебе звати?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El se îmbracă.",
                "Він одягається."
              ],
              [
                "Ne vedem mâine.",
                "Побачимося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-care",
        "title": "Pronumele relativ \"care\" — B1",
        "titleEn": "Relative Pronoun Care — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Care\" (який) — універсальний відносний займенник, що вводить підрядне означальне речення й не змінюється за родом чи числом, лише іноді приймає відмінковий прийменник.",
            "en": {
              "text": "\"Care\" (which/who) is the universal relative pronoun introducing a relative clause and doesn't change for gender or number, only occasionally taking a case-marking preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cartea care...",
                "книга, яка...",
                "підмет"
              ],
              [
                "cartea pe care...",
                "книга, яку...",
                "об'єкт (з pe)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aceasta este cartea pe care o citesc.",
                "Це книга, яку я читаю."
              ],
              [
                "Cunosc bărbatul care stă acolo.",
                "Я знаю чоловіка, який там стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Pronumele interogative — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "cine?",
                "хто?",
                "Cine este?"
              ],
              [
                "ce?",
                "що?",
                "Ce faci?"
              ],
              [
                "care?",
                "котрий?",
                "Care carte?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cine ești?",
                "Хто ти?"
              ],
              [
                "Ce mai faci?",
                "Як справи?"
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Pronumele nehotărâte — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cineva",
                "хтось",
                "Cineva a sunat."
              ],
              [
                "ceva",
                "щось",
                "Vreau ceva."
              ],
              [
                "nimeni",
                "ніхто",
                "Nimeni nu știe."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A venit cineva la ușă.",
                "Хтось прийшов до дверей."
              ],
              [
                "Ai vreo întrebare?",
                "У тебе є якесь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Numeralul cardinal — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "unu / una",
                "один/одна",
                "1"
              ],
              [
                "cinci",
                "п'ять",
                "5"
              ],
              [
                "zece",
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
                "Am doi frați.",
                "У мене два брати."
              ],
              [
                "Sunt treizeci de elevi în clasă.",
                "У класі тридцять учнів."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Numeralul ordinal — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "primul / prima",
                "перший",
                "1-й"
              ],
              [
                "al doilea / a doua",
                "другий",
                "2-й"
              ],
              [
                "al treilea / a treia",
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
                "Este prima mea zi la muncă.",
                "Це мій перший день на роботі."
              ],
              [
                "Locuiesc la etajul al doilea.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective",
        "title": "Numeralul colectiv (amândoi) — B1",
        "titleEn": "Collective Numerals (Amândoi) — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Збірний числівник \"amândoi/amândouă\" (\"обидва/обидві\") узгоджується з родом іменника й наголошує, що дія стосується обох.",
            "en": {
              "text": "The collective numeral \"amândoi/amândouă\" (\"both\") agrees with the noun's gender and emphasizes that the action concerns both."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "amândoi băieții",
                "обидва хлопчики"
              ],
              [
                "amândouă fetele",
                "обидві дівчини"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Amândoi frații mei sunt medici.",
                "Обидва мої брати лікарі."
              ],
              [
                "Le-am invitat pe amândouă.",
                "Я запросив їх обох."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-accusative",
        "title": "Prepoziții cu acuzativ — A2",
        "titleEn": "Prepositions with Accusative — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від латини, більшість румунських прийменників керують знахідним відмінком, який у румунській збігається з називним (крім особових займенників): la (до), în (в), cu (з), pentru (для).",
            "en": {
              "text": "Unlike Latin, most Romanian prepositions govern the accusative case, which in Romanian matches the nominative (except for personal pronouns): la (to), în (in), cu (with), pentru (for)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "la",
                "la școală",
                "до школи"
              ],
              [
                "cu",
                "cu tine",
                "з тобою"
              ],
              [
                "pentru",
                "pentru mine",
                "для мене"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Merg la piață.",
                "Я йду на ринок."
              ],
              [
                "Cadoul este pentru tine.",
                "Подарунок для тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-genitive",
        "title": "Prepoziții cu genitiv — B1",
        "titleEn": "Prepositions with Genitive — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька прийменників керують родовим відмінком: asupra (над, стосовно), împotriva (проти), în jurul (навколо).",
            "en": {
              "text": "A handful of prepositions govern the genitive case: asupra (about, upon), împotriva (against), în jurul (around)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "asupra",
                "asupra situației",
                "стосовно ситуації"
              ],
              [
                "împotriva",
                "împotriva planului",
                "проти плану"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Este împotriva acestei idei.",
                "Він проти цієї ідеї."
              ],
              [
                "Ne-am strâns în jurul mesei.",
                "Ми зібралися навколо столу."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible",
        "title": "Topica flexibilă — A2",
        "titleEn": "Flexible Word Order — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Румунський порядок слів досить вільний завдяки закінченням і клітичним займенникам — базовий порядок SVO, але зміна порядку зазвичай змінює наголос/фокус речення.",
            "en": {
              "text": "Romanian word order is fairly flexible thanks to endings and clitic pronouns — the basic order is SVO, but changing word order usually shifts emphasis or focus."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Ion a cumpărat cartea.",
                "Іон купив книгу.",
                "нейтральний"
              ],
              [
                "Cartea a cumpărat-o Ion.",
                "Книгу купив (саме) Іон.",
                "фокус на 'Іон'"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "În fiecare zi beau cafea.",
                "Щодня я п'ю каву."
              ],
              [
                "Cafea beau în fiecare zi.",
                "Каву я п'ю щодня (акцент)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-double",
        "title": "Negația dublă (obligatorie) — A2",
        "titleEn": "Obligatory Double Negation — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької, коли в реченні є заперечне слово (nimeni, nimic, niciodată), перед дієсловом ОБОВ'ЯЗКОВО додається ще й \"nu\" — подвійне заперечення тут не скасовує одне одного, а посилює значення, як у слов'янських мовах.",
            "en": {
              "text": "Unlike French, when a sentence has a negative word (nimeni, nimic, niciodată), \"nu\" is ALSO obligatorily added before the verb — double negation here doesn't cancel out but reinforces the meaning, as in Slavic languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади подвійного заперечення",
            "rows": [
              [
                "Nimeni nu știe.",
                "Ніхто не знає.",
                "nimeni + nu"
              ],
              [
                "Nu văd pe nimeni.",
                "Я нікого не бачу.",
                "nu + pe nimeni"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nu am nimic de spus.",
                "Мені нічого сказати."
              ],
              [
                "Nu vine niciodată la timp.",
                "Він ніколи не приходить вчасно."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Conjuncții coordonatoare — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "și",
                "і/та",
                "Eu și tu."
              ],
              [
                "dar",
                "але",
                "Vreau, dar nu pot."
              ],
              [
                "sau",
                "або",
                "Cafea sau ceai?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Îmi place ceaiul și cafeaua.",
                "Мені подобається чай і кава."
              ],
              [
                "Aș vrea să merg, dar nu am timp.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Conjuncții subordonatoare — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "că",
                "що",
                "Știu că vii."
              ],
              [
                "pentru că",
                "тому що",
                "Nu am venit pentru că am fost bolnav."
              ],
              [
                "dacă",
                "якщо",
                "Dacă ai timp, sună-mă."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cred că ai dreptate.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Rămân dacă e nevoie.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-speech",
        "title": "Vorbirea indirectă — B1",
        "titleEn": "Reported Speech — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Непряма мова передається сполучником \"că\" (\"що\") без обов'язкового зсуву часу, як в англійській.",
            "en": {
              "text": "Reported speech is conveyed with the conjunction \"că\" (\"that\") without the obligatory tense shift found in English."
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
                "A spus că vine mâine.",
                "Він сказав, що прийде завтра."
              ],
              [
                "A zis că este obosită.",
                "Вона сказала, що втомлена."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Verbele reflexive — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів уживаються з часткою \"se\" й мають відмінне значення від дієслова без неї, а деякі дієслова існують ЛИШЕ у зворотній формі.",
            "en": {
              "text": "Many verbs take the particle \"se\" and have a different meaning from the plain verb, and some verbs exist ONLY in the reflexive form."
            }
          },
          {
            "type": "table",
            "title": "Без se ↔ зі se",
            "rows": [
              [
                "a spăla (мити)",
                "a se spăla (митися)",
                "себе"
              ],
              [
                "a numi (називати)",
                "a se numi (називатися)",
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
                "Cum te numești?",
                "Як тебе звати?"
              ],
              [
                "Mă bucur să te văd.",
                "Я радий тебе бачити."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Construcții impersonale (se, trebuie) — A2",
        "titleEn": "Impersonal Constructions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові вирази \"trebuie\" (треба) вживаються з \"să\" + кон'юнктив; \"se\" + дієслово в 3-й особі виражає узагальнену дію (\"кажуть, робиться\").",
            "en": {
              "text": "The impersonal expression \"trebuie\" (must) is used with \"să\" plus the subjunctive; \"se\" plus a 3rd-person verb expresses a generalized action (\"one says, it is done\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "trebuie",
                "Trebuie să plecăm.",
                "Треба йти."
              ],
              [
                "se",
                "Se spune că...",
                "Кажуть, що..."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Trebuie să cumperi pâine.",
                "Треба купити хліб."
              ],
              [
                "Aici nu se fumează.",
                "Тут не курять."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Verbele modale — A2",
        "titleEn": "Modal Verbs — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "a putea",
                "могти",
                "Pot să te ajut."
              ],
              [
                "a trebui",
                "мусити",
                "Trebuie să pleci."
              ],
              [
                "a vrea",
                "хотіти",
                "Vreau să mănânc."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Poți să mă ajuți?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Nu poți fuma aici.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-avoidance",
        "title": "Evitarea infinitivului — B1",
        "titleEn": "Infinitive Avoidance (Balkan Feature) — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Ключова риса балканського мовного союзу, спільна з грецькою й болгарською: румунська уникає інфінітива після дієслів бажання, можливості, обов'язку — замість нього завжди вживають \"să\" + кон'юнктив, навіть коли підмет обох дієслів той самий.",
            "en": {
              "text": "A key feature of the Balkan Sprachbund, shared with Greek and Bulgarian: Romanian avoids the infinitive after verbs of wanting, ability, obligation — instead always using \"să\" plus the subjunctive, even when both verbs share the same subject."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив (майже не вживається) ↔ să-конструкція (завжди)",
            "rows": [
              [
                "Pot a înota. (архаїчно)",
                "Pot să înot. (звичайно)",
                "Я вмію плавати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vreau să dorm.",
                "Я хочу спати."
              ],
              [
                "Încearcă să înțelegi.",
                "Спробуй зрозуміти."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Zilele săptămânii — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "luni",
                "понеділок",
                "1"
              ],
              [
                "vineri",
                "п'ятниця",
                "5"
              ],
              [
                "duminică",
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
                "Luni am cursuri.",
                "У понеділок у мене заняття."
              ],
              [
                "Astăzi este miercuri.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Lunile și datele — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "ianuarie",
                "січень",
                "01"
              ],
              [
                "iulie",
                "липень",
                "07"
              ],
              [
                "decembrie",
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
                "Astăzi este cinci mai.",
                "Сьогодні п'яте травня."
              ],
              [
                "M-am născut în decembrie.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Spunerea orei — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Cât este ceasul?\" (\"Котра година?\"), а відповідь уживає слово \"ora\" (година).",
            "en": {
              "text": "To ask the time, one says \"Cât este ceasul?\" (\"What time is it?\"), and the answer uses the word \"ora\" (hour)."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Este ora unu.",
                "Перша година.",
                "1:00"
              ],
              [
                "Este ora cinci și jumătate.",
                "Половина шостої.",
                "5:30"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cât este ceasul?",
                "Котра година?"
              ],
              [
                "Trenul pleacă la ora opt.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Diminutivele — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -uț/-uță/-ел/-ица тощо і дуже широко вживаються в повсякденному мовленні, виражаючи теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -uț/-uță and are used extremely widely in everyday speech, expressing warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "câine (пес)",
                "cățeluș",
                "песик"
              ],
              [
                "casă (дім)",
                "căsuță",
                "будиночок"
              ],
              [
                "mamă",
                "mămică",
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
                "Am un cățeluș mic.",
                "У мене маленький песик."
              ],
              [
                "I-am cumpărat băiețelului o jucărie.",
                "Я купила синочку іграшку."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"tu\" și \"dumneavoastră\" — A2",
        "titleEn": "Tu vs Dumneavoastră (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"tu\" (2-га особа однини), для ввічливого/формального — \"dumneavoastră\" (з дієсловом у 2-й особі множини), а до однієї особи, старшої за віком, часто \"dumneata\".",
            "en": {
              "text": "For informal address, Romanian uses \"tu\" (2nd person singular); for polite/formal address it uses \"dumneavoastră\" (with a 2nd person plural verb), and \"dumneata\" for an older single person in some contexts."
            }
          },
          {
            "type": "table",
            "title": "tu ↔ dumneavoastră",
            "rows": [
              [
                "Ce mai faci?",
                "Як ти? (неформально)",
                "tu"
              ],
              [
                "Ce mai faceți?",
                "Як Ви? (формально)",
                "dumneavoastră"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "De unde sunteți?",
                "Звідки Ви?"
              ],
              [
                "Vă mulțumesc pentru ajutor.",
                "Дякую Вам за допомогу."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Salutări și expresii uzuale — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Bună ziua.",
                "Добрий день."
              ],
              [
                "Mulțumesc.",
                "Дякую."
              ],
              [
                "Îmi pare rău.",
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
                "Îmi pare bine de cunoștință.",
                "Приємно познайомитися."
              ],
              [
                "Pe curând.",
                "До зустрічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Expresii despre vreme — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "E vreme frumoasă.",
                "Гарна погода."
              ],
              [
                "Plouă.",
                "Іде дощ."
              ],
              [
                "Ninge.",
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
                "Astăzi este foarte frig.",
                "Сьогодні дуже холодно."
              ],
              [
                "Mâine va fi înnorat.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Expresii idiomatice — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "A bate câmpii.",
                "(букв. бити поля) — говорити нісенітниці."
              ],
              [
                "A freca menta.",
                "(букв. терти м'яту) — байдикувати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nu mai bate câmpii!",
                "Не говори дурниць!"
              ],
              [
                "Toată ziua a frecat menta.",
                "Він цілий день байдикував."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Cuantificatori (mult/puțin) — A2",
        "titleEn": "Quantifiers (Mult/Puțin) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "mult",
                "багато"
              ],
              [
                "puțin",
                "мало"
              ],
              [
                "câțiva",
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
                "Am mulți prieteni.",
                "У мене багато друзів."
              ],
              [
                "Dă-mi câteva minute.",
                "Дай мені кілька хвилин."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Formarea adverbelor — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії збігаються за формою з чоловічим родом однини прикметника, без окремого суфікса.",
            "en": {
              "text": "Many manner adverbs are identical in form to the masculine singular of the adjective, with no separate suffix."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "rapid (швидкий)",
                "rapid",
                "швидко"
              ],
              [
                "frumos (гарний)",
                "frumos",
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
                "Vorbește rapid.",
                "Він говорить швидко."
              ],
              [
                "Cântă frumos.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Sufixele derivative — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Румунська активно утворює нові слова додаванням суфіксів: -tor/-toare (виконавець дії), -itate (абстрактне поняття), -os/-oasă (прикметники від іменників).",
            "en": {
              "text": "Romanian actively derives new words with suffixes: -tor/-toare (agent noun), -itate (abstract concept), -os/-oasă (adjectives from nouns)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "a scrie (писати) → scriitor",
                "письменник"
              ],
              [
                "real (реальний) → realitate",
                "реальність"
              ],
              [
                "frică (страх) → fricos",
                "боягузливий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Este un scriitor cunoscut.",
                "Він відомий письменник."
              ],
              [
                "Realitatea este diferită.",
                "Реальність інша."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-nouns",
        "title": "Substantivele compuse — B1",
        "titleEn": "Compound Nouns — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Румунська утворює складні іменники поєднанням двох слів через дефіс чи прийменник, а не злиттям в одне довге слово, як германські мови.",
            "en": {
              "text": "Romanian forms compound nouns by joining two words with a hyphen or a preposition, rather than fusing them into one long word like Germanic languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "floarea-soarelui",
                "соняшник (букв. \"квітка сонця\")"
              ],
              [
                "untdelemn",
                "олія"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Am cumpărat ulei de floarea-soarelui.",
                "Я купив соняшникову олію."
              ],
              [
                "Bunica gătește cu untdelemn.",
                "Бабуся готує на олії."
              ]
            ]
          }
        ]
      },
      {
        "id": "slavic-loanword-layer",
        "title": "Stratul slav de vocabular — B1",
        "titleEn": "The Slavic Loanword Layer — B1",
        "emoji": "🌏",
        "sections": [
          {
            "type": "intro",
            "text": "Попри романську граматику, румунська лексика має значний шар слов'янських запозичень через тривалі контакти із сусідніми народами — часто це найповсякденніші слова.",
            "en": {
              "text": "Despite its Romance grammar, Romanian vocabulary has a significant layer of Slavic loanwords due to long contact with neighboring peoples — often these are the most everyday words."
            }
          },
          {
            "type": "table",
            "title": "Приклади слов'янських запозичень",
            "rows": [
              [
                "iubi (любити)",
                "зі слов'янського кореня"
              ],
              [
                "prieten (друг)",
                "зі слов'янського кореня"
              ],
              [
                "ceas (годинник)",
                "зі слов'янського кореня"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Te iubesc.",
                "Я тебе люблю."
              ],
              [
                "Am mulți prieteni buni.",
                "У мене багато хороших друзів."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Interjecțiile — A2",
        "titleEn": "Exclamations — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Vai!",
                "Ой!"
              ],
              [
                "Bravo!",
                "Молодець!"
              ],
              [
                "Ce noroc!",
                "Яке щастя!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vai, ce frumos!",
                "Ой, як гарно!"
              ],
              [
                "Bravo, ai reușit!",
                "Молодець, тобі вдалося!"
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Anotimpurile — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "primăvară",
                "весна"
              ],
              [
                "vară",
                "літо"
              ],
              [
                "iarnă",
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
                "Vara este cald.",
                "Влітку тепло."
              ],
              [
                "Îmi place toamna.",
                "Мені подобається осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Prețuri și bani — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Cât costă?\" (\"Скільки це коштує?\"), а валюта \"lei\" стоїть після числа.",
            "en": {
              "text": "To ask the price, one says \"Cât costă?\" (\"How much does it cost?\"), and the currency \"lei\" follows the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "o sută de lei",
                "сто леїв"
              ],
              [
                "ieftin / scump",
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
                "Cât costă rochia asta?",
                "Скільки коштує ця сукня?"
              ],
              [
                "Este prea scump.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Exprimarea opiniilor — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Cred că...",
                "Я думаю, що..."
              ],
              [
                "După părerea mea...",
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
                "Cred că este o idee bună.",
                "Я думаю, що це хороша ідея."
              ],
              [
                "După părerea mea, e prea scump.",
                "На мою думку, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Expresii de timp (azi/ieri/mâine) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "azi",
                "сьогодні"
              ],
              [
                "ieri",
                "вчора"
              ],
              [
                "mâine",
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
                "Azi sunt liber.",
                "Сьогодні я вільний."
              ],
              [
                "Ne vedem mâine.",
                "Побачимося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Cuvinte interogative — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "unde?",
                "де?",
                "Unde ești?"
              ],
              [
                "când?",
                "коли?",
                "Când vii?"
              ],
              [
                "de ce?",
                "чому?",
                "De ce plângi?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Unde este gara?",
                "Де вокзал?"
              ],
              [
                "De ce ai întârziat?",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-a-fi",
        "title": "Existența cu \"a fi\" — A1",
        "titleEn": "Existence with A Fi — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "\"A fi\" (\"бути\") у безособовій 3-й особі однини виражає наявність предмета (\"є, існує\"), подібно до французького \"il y a\".",
            "en": {
              "text": "\"A fi\" (\"to be\") in the impersonal 3rd person singular expresses existence (\"there is/are\"), similar to French \"il y a\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Este o carte pe masă.",
                "На столі є книга."
              ],
              [
                "Sunt mulți oameni aici.",
                "Тут багато людей."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nu este nimeni acasă.",
                "Нікого немає вдома."
              ],
              [
                "Este un restaurant bun în apropiere?",
                "Тут поблизу є хороший ресторан?"
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
        "title": "Verbe neregulate — A2",
        "titleEn": "Irregular Verbs — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів (a fi, a avea, a da, a lua) відмінюються неправильно й мають форми, що варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs (a fi, a avea, a da, a lua) conjugate irregularly and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "a fi (бути)",
                "sunt, ești, este",
                "я є, ти є, він є"
              ],
              [
                "a avea (мати)",
                "am, ai, are",
                "я маю, ти маєш, він має"
              ],
              [
                "a da (давати)",
                "dau, dai, dă",
                "я даю, ти даєш, він дає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nu pot vorbi acum.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Îmi dai o mână de ajutor?",
                "Ти даси мені руку допомоги?"
              ]
            ]
          }
        ]
      },
      {
        "id": "neuter-noun-pitfalls",
        "title": "Substantivele neutre — capcane — B1",
        "titleEn": "Neuter Noun Pitfalls — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки середній рід не має власного закінчення, рід іменника й правильну форму множини часто неможливо вгадати — їх треба запам'ятовувати індивідуально для кожного слова.",
            "en": {
              "text": "Since neuter has no ending of its own, a noun's gender and correct plural form often can't be guessed — they must be memorized individually for each word."
            }
          },
          {
            "type": "table",
            "title": "Приклади непередбачуваної множини",
            "rows": [
              [
                "un ou (яйце)",
                "două ouă (два яйця)",
                "середній"
              ],
              [
                "un oraș (місто)",
                "două orașe (два міста)",
                "середній"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Am cumpărat trei ouă.",
                "Я купив три яйця."
              ],
              [
                "România are multe orașe frumoase.",
                "У Румунії багато гарних міст."
              ]
            ]
          }
        ]
      },
      {
        "id": "o-pe-homographs",
        "title": "Capcanele omografelor \"o\" și \"pe\" — B1",
        "titleEn": "The O/Pe Homograph Pitfalls — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"o\" може бути неозначеним артиклем (\"a/an\") чи коротким займенником \"її\", а \"pe\" — прийменником \"на\" чи маркером знахідного відмінка для осіб; значення розрізняється лише контекстом.",
            "en": {
              "text": "The word \"o\" can be either the indefinite article (\"a/an\") or the short pronoun \"her\", and \"pe\" can be either the preposition \"on\" or the accusative marker for people; the meaning is distinguished only by context."
            }
          },
          {
            "type": "table",
            "title": "Приклади двозначності",
            "rows": [
              [
                "o carte",
                "книга (артикль)",
                "o = артикль"
              ],
              [
                "o văd",
                "я бачу її",
                "o = займенник"
              ],
              [
                "pe masă",
                "на столі",
                "pe = прийменник"
              ],
              [
                "îl văd pe el",
                "я бачу його",
                "pe = маркер знахідного"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "O caut pe Maria.",
                "Я шукаю Марію (o=займенник, pe=маркер)."
              ],
              [
                "Cartea este pe masă.",
                "Книга на столі (pe=прийменник)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
