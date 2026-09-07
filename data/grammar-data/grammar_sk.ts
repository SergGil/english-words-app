// Vymova — data/grammar-data/grammar_sk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SK: GrammarCategory[] = [
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
            "text": "Словацькі дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Slovak verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ja",
                "я"
              ],
              [
                "ty",
                "ти"
              ],
              [
                "on / ona / ono",
                "він / вона / воно"
              ],
              [
                "my",
                "ми"
              ],
              [
                "oni / ony",
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
                "Ja som učiteľ.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"byť\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Byť\" відмінюється неправильно, дуже схоже на чеське \"být\" і українське \"бути\" за формою вживання.",
            "en": {
              "text": "\"Byť\" conjugates irregularly, very similarly to Czech \"být\" and Ukrainian \"бути\" in how it is used."
            }
          },
          {
            "type": "formula",
            "title": "\"byť\" (бути) — prítomný čas",
            "rows": [
              [
                "ja",
                "som",
                "я є"
              ],
              [
                "ty",
                "si",
                "ти є"
              ],
              [
                "on / ona / ono",
                "je",
                "він/вона/воно є"
              ],
              [
                "my",
                "sme",
                "ми є"
              ],
              [
                "vy",
                "ste",
                "ви є"
              ],
              [
                "oni / ony",
                "sú",
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
                "Ona je lekárka.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Byť (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення префіксом \"ne-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в словацькій приєднується прямо до дієслова як префікс ne-, а не окремим словом перед ним.",
            "en": {
              "text": "Negation in Slovak attaches directly to the verb as the prefix ne-, rather than as a separate word before it."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Viem.",
                "Neviem.",
                "Я знаю. / Я не знаю."
              ],
              [
                "Prišiel.",
                "Neprišiel.",
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
                "On neprišiel.",
                "Він не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Negation with the Prefix Ne- — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією або порядком слів дієслово-підмет.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, or with verb-subject word order."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Si unavený.",
                "Si unavený?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Máš čas.",
                "Máš čas?",
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
                "Máš čas?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "cases",
        "title": "Шість відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Словацькі іменники, як і українські, змінюються за відмінками (шість) — закінчення показують роль слова в реченні без прийменника.",
            "en": {
              "text": "Slovak nouns, like Ukrainian ones, decline through cases (six) — the ending shows a word's role in the sentence without needing a preposition."
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
                "Vidím psa.",
                "Я бачу собаку (знахідний відмінок від \"pes\")."
              ]
            ]
          }
        ],
        "titleEn": "The Six Cases — A1"
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
        "title": "Prítomný čas — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова в теперішньому часі відмінюються за особами й числами. Закінчення залежить від типу дієвідмінювання, тому дієслова найкраще вчити разом із формою 1-ї особи однини.",
            "en": {
              "text": "Present-tense verbs conjugate by person and number. The ending depends on the conjugation class, so verbs are best learned together with their 1st person singular form."
            }
          },
          {
            "type": "formula",
            "title": "\"robiť\" (робити) — prítomný čas",
            "rows": [
              [
                "ja",
                "robím",
                "я роблю"
              ],
              [
                "ty",
                "robíš",
                "ти робиш"
              ],
              [
                "on / ona / ono",
                "robí",
                "він/вона/воно робить"
              ],
              [
                "my",
                "robíme",
                "ми робимо"
              ],
              [
                "vy",
                "robíte",
                "ви робите"
              ],
              [
                "oni / ony",
                "robia",
                "вони роблять"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Robím domácu úlohu.",
                "Я роблю домашнє завдання."
              ],
              [
                "Oni pijú kávu.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-conjugation-classes",
        "title": "Slovesné triedy — A2",
        "titleEn": "Verb Conjugation Classes — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Словацькі дієслова поділяються на кілька класів за закінченням 3-ї особи однини теперішнього часу: -á, -í, -ie, -uje, -e.",
            "en": {
              "text": "Slovak verbs fall into several classes based on the 3rd person singular present-tense ending: -á, -í, -ie, -uje, -e."
            }
          },
          {
            "type": "table",
            "title": "Приклади класів",
            "rows": [
              [
                "-uje",
                "pracovať → pracuje",
                "працювати → працює"
              ],
              [
                "-í",
                "hovoriť → hovorí",
                "говорити → говорить"
              ],
              [
                "-á",
                "robiť... → wait, exception",
                "приклад класу -á: čítať → číta"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hovorím po slovensky.",
                "Я говорю словацькою."
              ],
              [
                "Pracuje v banke.",
                "Він працює в банку."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-aspect",
        "title": "Dokonavý a nedokonavý vid — A2",
        "titleEn": "Perfective & Imperfective Aspect — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне словацьке дієслово має вид: недоконаний (тривала або повторювана дія) або доконаний (одноразова, завершена дія з результатом).",
            "en": {
              "text": "Every Slovak verb has an aspect: imperfective (an ongoing or repeated action) or perfective (a single, completed action with a result)."
            }
          },
          {
            "type": "table",
            "title": "Недоконаний ↔ доконаний",
            "rows": [
              [
                "čítať",
                "prečítať",
                "читати / прочитати"
              ],
              [
                "písať",
                "napísať",
                "писати / написати"
              ],
              [
                "robiť",
                "urobiť",
                "робити / зробити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Čítal som knihu celé popoludnie.",
                "Я читав книжку весь день (процес)."
              ],
              [
                "Prečítal som knihu za jeden deň.",
                "Я прочитав книжку за один день (результат)."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pairs",
        "title": "Predpony dokonavosti — B1",
        "titleEn": "Aspect Pairs & Verb Prefixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний вид найчастіше утворюється додаванням префікса до недоконаного дієслова.",
            "en": {
              "text": "The perfective aspect is most often formed by adding a prefix to the imperfective verb."
            }
          },
          {
            "type": "table",
            "title": "Найчастіші префікси доконаного виду",
            "rows": [
              [
                "na-",
                "písať → napísať",
                "писати → написати"
              ],
              [
                "pre-",
                "čítať → prečítať",
                "читати → прочитати"
              ],
              [
                "u-",
                "robiť → urobiť",
                "робити → зробити"
              ],
              [
                "za-",
                "platiť → zaplatiť",
                "платити → заплатити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Napísal som list.",
                "Я написав листа."
              ],
              [
                "Vždy zaplatím hneď.",
                "Я завжди одразу плачу."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Minulý čas — A1",
        "titleEn": "Past Tense — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється дієприкметником на -l/-la/-lo/-li/-ly, узгодженим із підметом у роді й числі, плюс допоміжне дієслово \"byť\" — але лише для 1-ї та 2-ї особи; у 3-й особі допоміжне дієслово опускається.",
            "en": {
              "text": "The past tense is formed with an -l/-la/-lo/-li/-ly participle agreeing with the subject in gender and number, plus the auxiliary \"byť\" — but only for 1st and 2nd person; in the 3rd person the auxiliary is dropped."
            }
          },
          {
            "type": "formula",
            "title": "\"robiť\" (робити) — minulý čas",
            "rows": [
              [
                "ja (чол.)",
                "robil som",
                "я робив"
              ],
              [
                "ty (чол.)",
                "robil si",
                "ти робив"
              ],
              [
                "on",
                "robil",
                "він робив (без som/si)"
              ],
              [
                "my",
                "robili sme",
                "ми робили"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Včera som pracoval do večera.",
                "Вчора я працював до вечора."
              ],
              [
                "Ona čítala knihu.",
                "Вона читала книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-simple",
        "title": "Budúci čas dokonavých slovies — A2",
        "titleEn": "Simple Future — Perfective Verbs — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Доконані дієслова не мають окремої форми майбутнього часу — форма, схожа на теперішній час, автоматично виражає майбутню дію.",
            "en": {
              "text": "Perfective verbs have no separate future conjugation — the present-looking form automatically expresses a future action."
            }
          },
          {
            "type": "formula",
            "title": "\"napísať\" (написати) — простий майбутній",
            "rows": [
              [
                "ja",
                "napíšem",
                "я напишу"
              ],
              [
                "ty",
                "napíšeš",
                "ти напишеш"
              ],
              [
                "on",
                "napíše",
                "він напише"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Napíšem ti zajtra.",
                "Я напишу тобі завтра."
              ],
              [
                "Urobíme to spolu.",
                "Ми зробимо це разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-compound",
        "title": "Budúci čas nedokonavých slovies — A2",
        "titleEn": "Compound Future — Imperfective Verbs — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконані дієслова утворюють майбутній час складеною формою: майбутній час дієслова \"byť\" (budem, budeš...) + інфінітив.",
            "en": {
              "text": "Imperfective verbs form the future with a compound construction: the future of \"byť\" (budem, budeš...) plus the infinitive."
            }
          },
          {
            "type": "formula",
            "title": "\"robiť\" (робити) — складений майбутній",
            "rows": [
              [
                "ja",
                "budem robiť",
                "я робитиму"
              ],
              [
                "ty",
                "budeš robiť",
                "ти робитимеш"
              ],
              [
                "on",
                "bude robiť",
                "він робитиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Budem čítať celý týždeň.",
                "Я читатиму весь тиждень."
              ],
              [
                "Budeme bývať v Bratislave.",
                "Ми будемо жити у Братиславі."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Rozkazovací spôsob — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від основи теперішнього часу. 2-га особа однини зазвичай має закінчення -Ø/-i/-j, 1-ша особа множини -me, 2-га особа множини -te.",
            "en": {
              "text": "The imperative is formed from the present-tense stem. The 2nd person singular usually ends in -Ø/-i/-j, the 1st person plural in -me, and the 2nd person plural in -te."
            }
          },
          {
            "type": "formula",
            "title": "\"robiť\" (робити) — rozkazovací spôsob",
            "rows": [
              [
                "ty",
                "Rob!",
                "Роби!"
              ],
              [
                "my",
                "Robme!",
                "Робімо!"
              ],
              [
                "vy",
                "Robte!",
                "Робіть!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Zavri dvere, prosím.",
                "Зачини двері, будь ласка."
              ],
              [
                "Poďme do kina!",
                "Ходімо в кіно!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Podmieňovací spôsob — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється дієприкметником на -l + допоміжна частка by, узгоджена з особою за допомогою займенника-підмета.",
            "en": {
              "text": "The conditional mood is formed with the -l participle plus the auxiliary particle by, combined with the subject pronoun's personal form of \"byť\"."
            }
          },
          {
            "type": "formula",
            "title": "\"robiť\" (робити) — podmieňovací spôsob",
            "rows": [
              [
                "ja",
                "robil by som",
                "я робив би"
              ],
              [
                "ty",
                "robil by si",
                "ти робив би"
              ],
              [
                "on",
                "robil by",
                "він робив би"
              ],
              [
                "my",
                "robili by sme",
                "ми робили б"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rád by som cestoval viac.",
                "Я хотів би більше подорожувати."
              ],
              [
                "Keby som mal čas, prišiel by som.",
                "Якби я мав час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-past",
        "title": "Podmieňovací spôsob minulý — B2",
        "titleEn": "Past Conditional — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Для нереальних умов у минулому додають дієприкметник \"bol/bola/bolo\" перед часткою by: \"urobil by som\" (умовний теперішній) → \"bol by som urobil\" (умовний минулий).",
            "en": {
              "text": "For unreal past conditions, the participle \"bol/bola/bolo\" is inserted before the by-particle: \"urobil by som\" (present conditional) becomes \"bol by som urobil\" (past conditional)."
            }
          },
          {
            "type": "table",
            "title": "Теперішній умовний ↔ минулий умовний",
            "rows": [
              [
                "urobil by som",
                "bol by som urobil",
                "я зробив би / я був би зробив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Keby som to bol vedel, povedal by som ti to skôr.",
                "Якби я знав раніше, я сказав би тобі раніше."
              ],
              [
                "Bola by prišla, keby nepršalo.",
                "Вона прийшла б, якби не дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-past",
        "title": "Neosobný tvar na -no/-to — B2",
        "titleEn": "Impersonal Past with -no/-to — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Безособова форма на -no/-to вживається, коли діяч невідомий або неважливий. Утворюється від основи пасивного дієприкметника.",
            "en": {
              "text": "The impersonal -no/-to form is used when the agent is unknown or unimportant. It is formed from the passive-participle stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади форм",
            "rows": [
              [
                "urobiť",
                "urobené",
                "було зроблено"
              ],
              [
                "povedať",
                "povedané",
                "було сказано"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bolo mi povedané, že vlak bude meškať.",
                "Мені сказали, що потяг запізниться."
              ],
              [
                "Tento rok bol postavený nový most.",
                "Цього року побудували новий мост."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-participle",
        "title": "Trpné príčastie a trpný rod — B1",
        "titleEn": "Passive Participle & Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник утворюється переважно суфіксами -ný/-ený/-tý від основи доконаного дієслова й узгоджується з іменником у роді, числі та відмінку. У пасивних конструкціях уживається з дієсловом \"byť\".",
            "en": {
              "text": "The passive participle is formed mainly with the suffixes -ný/-ený/-tý from the perfective stem and agrees with the noun in gender, number, and case. It's used in passive constructions with \"byť\"."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "napísať",
                "napísaný",
                "написаний"
              ],
              [
                "urobiť",
                "urobený",
                "зроблений"
              ],
              [
                "otvoriť",
                "otvorený",
                "відкритий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "List bol napísaný študentom.",
                "Лист був написаний студентом."
              ],
              [
                "Dvere sú od rána otvorené.",
                "Двері відчинені з самого ранку."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-adverbs",
        "title": "Prechodník — B2",
        "titleEn": "Verbal Adverbs (Transgressive) — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Перехідник (дуже книжна, застаріла форма) утворюється від основи недоконаних дієслів і описує одночасну дію. У сучасній мові майже не вживається, крім усталених виразів.",
            "en": {
              "text": "The transgressive (a very bookish, archaic form) is formed from the stem of imperfective verbs and describes a simultaneous action. In modern language it's almost never used except in set phrases."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nesúc (несучи)",
                "vidiac (бачачи)",
                "архаїчна форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Povediac to, odišla.",
                "Сказавши це, вона пішла (архаїчно, літературний стиль)."
              ],
              [
                "Dnes sa namiesto toho používa vedľajšia veta.",
                "Сьогодні замість цього вживають підрядне речення."
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
        "title": "Genitív (koho? čoho?) — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (genitív) відповідає на питання \"кого? чого?\". Уживається після заперечення, після числівників 5+, після багатьох прийменників і для вираження належності.",
            "en": {
              "text": "The genitive answers \"of whom? of what?\". Used after negation, after numerals 5+, after many prepositions, and to express possession."
            }
          },
          {
            "type": "table",
            "title": "Nominatív → Genitív",
            "rows": [
              [
                "mesto (місто)",
                "mesta",
                "centrum mesta (центр міста)"
              ],
              [
                "kniha (книга)",
                "knihy",
                "nemám knihy (у мене немає книги)"
              ],
              [
                "dieťa (дитина)",
                "dieťaťa",
                "hračka dieťaťa (іграшка дитини)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nemám čas.",
                "У мене немає часу."
              ],
              [
                "To je auto môjho brata.",
                "Це машина мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Datív (komu? čomu?) — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (datív) відповідає на питання \"кому? чому?\" і позначає непрямий об'єкт.",
            "en": {
              "text": "The dative case answers \"to whom? to what?\" and marks the indirect object."
            }
          },
          {
            "type": "table",
            "title": "Nominatív → Datív",
            "rows": [
              [
                "matka (мама)",
                "matke",
                "Dávam darček matke. (Даю подарунок мамі.)"
              ],
              [
                "brat (брат)",
                "bratovi",
                "Pomáham bratovi. (Допомагаю братові.)"
              ],
              [
                "dieťa (дитина)",
                "dieťaťu",
                "Čítam dieťaťu. (Читаю дитині.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Povedal som jej pravdu.",
                "Я сказав їй правду."
              ],
              [
                "To je pre dieťa ťažké.",
                "Це важко для дитини."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Akuzatív (koho? čo?) — A1",
        "titleEn": "Accusative Case — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (akuzatív) відповідає на питання \"кого? що?\" і позначає прямий об'єкт дії. Для істот чоловічого роду форма схожа на родовий, для неістот — на називний.",
            "en": {
              "text": "The accusative answers \"whom? what?\" and marks the direct object. For masculine animate nouns the form resembles the genitive; for inanimate nouns it resembles the nominative."
            }
          },
          {
            "type": "table",
            "title": "Nominatív → Akuzatív",
            "rows": [
              [
                "pes (пес, жив.)",
                "psa",
                "Vidím psa. (Я бачу пса.)"
              ],
              [
                "stôl (стіл, нежив.)",
                "stôl",
                "Vidím stôl. (Я бачу стіл.)"
              ],
              [
                "káva (кава)",
                "kávu",
                "Pijem kávu. (Я п'ю каву.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Čítam knihu.",
                "Я читаю книгу."
              ],
              [
                "Mám rád ten film.",
                "Мені подобається цей фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Lokál (o kom? o čom?) — A2",
        "titleEn": "Locative Case — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (lokál) відповідає на питання \"про кого? про що? де?\" і завжди вживається з прийменником (v, na, o, po, pri).",
            "en": {
              "text": "The locative answers \"about whom/what? where?\" and is always used with a preposition (v, na, o, po, pri)."
            }
          },
          {
            "type": "table",
            "title": "Nominatív → Lokál",
            "rows": [
              [
                "dom (дім)",
                "dome",
                "v dome (вдома)"
              ],
              [
                "škola (школа)",
                "škole",
                "v škole (в школі)"
              ],
              [
                "mesto (місто)",
                "meste",
                "v meste (в місті)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pracujem v banke.",
                "Я працюю в банку."
              ],
              [
                "Hovoríme o práci.",
                "Ми говоримо про роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Inštrumentál (kým? čím?) — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (inštrumentál) відповідає на питання \"ким? чим?\" і позначає знаряддя дії, супровід (з прийменником s) та іменну частину присудка після \"byť\".",
            "en": {
              "text": "The instrumental answers \"by whom? by what?\" and marks the instrument of an action, accompaniment (with the preposition s), and the predicate noun after \"byť\"."
            }
          },
          {
            "type": "table",
            "title": "Nominatív → Inštrumentál",
            "rows": [
              [
                "nôž (ніж)",
                "nožom",
                "Krájam nožom. (Я ріжу ножем.)"
              ],
              [
                "pero (перо)",
                "perom",
                "Píšem perom. (Я пишу пером.)"
              ],
              [
                "ona (вона)",
                "učiteľkou",
                "Je učiteľkou. (Вона вчителька.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ideme autobusom.",
                "Ми їдемо автобусом."
              ],
              [
                "Idem na prechádzku so psom.",
                "Я йду на прогулянку з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-masculine",
        "title": "Skloňovanie mužského rodu — A2",
        "titleEn": "Masculine Noun Declension — A2",
        "emoji": "🧑",
        "sections": [
          {
            "type": "intro",
            "text": "Чоловічий рід поділяється на живий та неживий, що впливає на знахідний відмінок. Іменники переважно не мають закінчення в називному однини.",
            "en": {
              "text": "Masculine gender splits into animate and inanimate, which affects the accusative. Nouns usually have no ending in the nominative singular."
            }
          },
          {
            "type": "table",
            "title": "\"študent\" (студент) за відмінками",
            "rows": [
              [
                "Nominatív",
                "študent",
                "хто?"
              ],
              [
                "Genitív",
                "študenta",
                "кого?"
              ],
              [
                "Datív",
                "študentovi",
                "кому?"
              ],
              [
                "Akuzatív",
                "študenta",
                "кого?"
              ],
              [
                "Inštrumentál",
                "študentom",
                "ким?"
              ],
              [
                "Lokál",
                "študentovi",
                "про кого?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ten študent sa dobre učí.",
                "Цей студент добре навчається."
              ],
              [
                "Hovorím so študentom.",
                "Я розмовляю зі студентом."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-feminine",
        "title": "Skloňovanie ženského rodu — A2",
        "titleEn": "Feminine Noun Declension — A2",
        "emoji": "👩",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість іменників жіночого роду закінчуються на -a та відмінюються за єдиним стандартним зразком.",
            "en": {
              "text": "Most feminine nouns end in -a and follow a single standard declension pattern."
            }
          },
          {
            "type": "table",
            "title": "\"žena\" (жінка) за відмінками",
            "rows": [
              [
                "Nominatív",
                "žena",
                "хто?"
              ],
              [
                "Genitív",
                "ženy",
                "кого?"
              ],
              [
                "Datív",
                "žene",
                "кому?"
              ],
              [
                "Akuzatív",
                "ženu",
                "кого?"
              ],
              [
                "Inštrumentál",
                "ženou",
                "ким?"
              ],
              [
                "Lokál",
                "žene",
                "про кого?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tá žena je lekárka.",
                "Ця жінка лікарка."
              ],
              [
                "Hovorím so ženou.",
                "Я розмовляю з жінкою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-neuter",
        "title": "Skloňovanie stredného rodu — A2",
        "titleEn": "Neuter Noun Declension — A2",
        "emoji": "🧒",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники середнього роду найчастіше закінчуються на -o чи -e. \"Dieťa\" (дитина) у непрямих відмінках приймає додатковий суфікс -ať-.",
            "en": {
              "text": "Neuter nouns most often end in -o or -e. \"Dieťa\" (child) takes the extra infix -ať- in oblique cases."
            }
          },
          {
            "type": "table",
            "title": "\"mesto\" (місто) за відмінками",
            "rows": [
              [
                "Nominatív",
                "mesto",
                "що?"
              ],
              [
                "Genitív",
                "mesta",
                "чого?"
              ],
              [
                "Datív",
                "mestu",
                "чому?"
              ],
              [
                "Akuzatív",
                "mesto",
                "що?"
              ],
              [
                "Inštrumentál",
                "mestom",
                "чим?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bývame v malom meste.",
                "Ми живемо в маленькому місті."
              ],
              [
                "To dieťa je veľmi šikovné.",
                "Ця дитина дуже розумна."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-plural-endings",
        "title": "Genitív množného čísla — B1",
        "titleEn": "Genitive Plural Endings — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок множини — одна з найскладніших форм: у жіночому й середньому роді часто нульове закінчення (з можливим чергуванням голосного), у чоловічому — переважно -ov.",
            "en": {
              "text": "The genitive plural is one of the trickiest forms: feminine and neuter nouns often take a zero ending (with possible vowel alternation), while masculine nouns mainly take -ov."
            }
          },
          {
            "type": "table",
            "title": "Приклади родового множини",
            "rows": [
              [
                "stôl (стіл)",
                "stolov",
                "багато столів"
              ],
              [
                "kniha (книга)",
                "kníh",
                "багато книг"
              ],
              [
                "okno (вікно)",
                "okien",
                "багато вікон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mám päť kníh.",
                "У мене п'ять книг."
              ],
              [
                "V izbe je veľa okien.",
                "У кімнаті багато вікон."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-declension",
        "title": "Skloňovanie prídavných mien — A2",
        "titleEn": "Adjective Declension — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники мають дві парадигми відмінювання — тверду (за -ý) і м'яку (за -í) залежно від кінцевого приголосного основи — й узгоджуються з іменником у роді, числі та відмінку.",
            "en": {
              "text": "Adjectives have two declension patterns — hard (ending in -ý) and soft (ending in -í) depending on the stem's final consonant — and agree with the noun in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "Тверда vs м'яка парадигма",
            "rows": [
              [
                "veľký dom",
                "великий дім",
                "тверда (-ý)"
              ],
              [
                "cudzí jazyk",
                "іноземна мова",
                "м'яка (-í)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bývam vo veľkom dome.",
                "Я живу у великому будинку."
              ],
              [
                "To sú moderné budovy.",
                "Це сучасні будівлі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Zhoda prídavného mena s podstatným — A1",
        "titleEn": "Adjective-Noun Agreement — A1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником і узгоджується з ним у роді, числі та відмінку.",
            "en": {
              "text": "An adjective always precedes the noun and agrees with it in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "Узгодження за родом і числом",
            "rows": [
              [
                "malý pes",
                "маленький пес",
                "чол. одн."
              ],
              [
                "malá mačka",
                "маленька кішка",
                "жін. одн."
              ],
              [
                "malí psi",
                "маленькі пси",
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
                "Mám malého psa.",
                "У мене маленький пес."
              ],
              [
                "To sú zaujímavé knihy.",
                "Це цікаві книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Stupňovanie prídavných mien — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -ejší/-ší, найвищий — додаванням префікса naj- до вищого ступеня.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -ejší/-ší, and the superlative by adding the prefix naj- to the comparative."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "pekný",
                "krajší",
                "najkrajší"
              ],
              [
                "múdry",
                "múdrejší",
                "najmúdrejší"
              ],
              [
                "rýchly",
                "rýchlejší",
                "najrýchlejší"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tento dom je väčší ako môj.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "To je najkrajšie mesto na Slovensku.",
                "Це найкрасивіше місто в Словаччині."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Nepravidelné stupňovanie — B1",
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
                "dobrý (добрий)",
                "lepší",
                "najlepší"
              ],
              [
                "zlý (поганий)",
                "horší",
                "najhorší"
              ],
              [
                "veľký (великий)",
                "väčší",
                "najväčší"
              ],
              [
                "malý (малий)",
                "menší",
                "najmenší"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To je lepší nápad.",
                "Це краща ідея."
              ],
              [
                "Je najlepším žiakom v triede.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Tvorenie prísloviek — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників утворюється від прикметників заміною закінчення -ý/-í на -o чи -e.",
            "en": {
              "text": "Most adverbs are formed from adjectives by replacing the -ý/-í ending with -o or -e."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "rýchly (швидкий)",
                "rýchlo",
                "швидко"
              ],
              [
                "pekný (гарний)",
                "pekne",
                "гарно"
              ],
              [
                "dobrý (добрий)",
                "dobre",
                "добре"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hovorí rýchlo.",
                "Він говорить швидко."
              ],
              [
                "Spieva veľmi dobre.",
                "Вона дуже добре співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-adverbs",
        "title": "Stupňovanie prísloviek — B1",
        "titleEn": "Comparative Adverbs — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники ступенюються за тим самим принципом, що й прикметники: вищий ступінь через -ejšie, найвищий — через naj-.",
            "en": {
              "text": "Adverbs are compared on the same principle as adjectives: the comparative with -ejšie, the superlative with naj-."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "rýchlo",
                "rýchlejšie",
                "najrýchlejšie"
              ],
              [
                "dobre",
                "lepšie",
                "najlepšie"
              ],
              [
                "zle",
                "horšie",
                "najhoršie"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Beží rýchlejšie ako ja.",
                "Він бігає швидше, ніж я."
              ],
              [
                "Spieva najlepšie z triedy.",
                "Вона співає найкраще з усього класу."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronouns-declension",
        "title": "Skloňovanie osobných zámen — A2",
        "titleEn": "Personal Pronoun Declension — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за відмінками, як іменники, й часто мають короткі (клітики) та повні форми.",
            "en": {
              "text": "Personal pronouns decline by case, like nouns, and often have both short (clitic) and full forms."
            }
          },
          {
            "type": "table",
            "title": "\"ja\" (я) за відмінками",
            "rows": [
              [
                "Nominatív",
                "ja",
                "я"
              ],
              [
                "Genitív",
                "mňa / ma",
                "мене"
              ],
              [
                "Datív",
                "mne / mi",
                "мені"
              ],
              [
                "Akuzatív",
                "mňa / ma",
                "мене"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nepočuje ma.",
                "Він мене не чує."
              ],
              [
                "Daj mi to.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Privlastňovacie zámená — A1",
        "titleEn": "Possessive Pronouns — A1",
        "emoji": "👜",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники вказують на належність і узгоджуються з іменником, який описують, у роді, числі та відмінку — так само як прикметники.",
            "en": {
              "text": "Possessive pronouns express ownership and agree with the noun they describe in gender, number, and case — just like adjectives."
            }
          },
          {
            "type": "table",
            "title": "Присвійні займенники (чол. одн.)",
            "rows": [
              [
                "môj",
                "мій",
                "môj dom"
              ],
              [
                "tvoj",
                "твій",
                "tvoj pes"
              ],
              [
                "náš",
                "наш",
                "náš dom"
              ],
              [
                "ich",
                "їхній",
                "ich dom"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To je moja sestra.",
                "Це моя сестра."
              ],
              [
                "Kde sú tvoje kľúče?",
                "Де твої ключі?"
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Ukazovacie zámená — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівний займенник \"ten/tá/to\" узгоджується з іменником у роді й числі та відмінюється за відмінками так само, як прикметник.",
            "en": {
              "text": "The demonstrative pronoun \"ten/tá/to\" agrees with the noun in gender and number, and declines by case just like an adjective."
            }
          },
          {
            "type": "table",
            "title": "\"ten/tá/to\" за родами",
            "rows": [
              [
                "ten dom",
                "цей будинок",
                "чол."
              ],
              [
                "tá žena",
                "ця жінка",
                "жін."
              ],
              [
                "to dieťa",
                "ця дитина",
                "сер."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ten dom je nový.",
                "Цей будинок новий."
              ],
              [
                "Nemám rád tú pesničku.",
                "Мені не подобається та пісня."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Opytovacie zámená — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники \"kto\" (хто) і \"čo\" (що) відмінюються за відмінками так само, як іменники, на які вони вказують.",
            "en": {
              "text": "The interrogative pronouns \"kto\" (who) and \"čo\" (what) decline by case, just like the nouns they stand in for."
            }
          },
          {
            "type": "table",
            "title": "\"kto\" за відмінками",
            "rows": [
              [
                "Nominatív",
                "kto?",
                "хто?"
              ],
              [
                "Genitív",
                "koho?",
                "кого?"
              ],
              [
                "Datív",
                "komu?",
                "кому?"
              ],
              [
                "Inštrumentál",
                "kým?",
                "ким?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kto je to?",
                "Хто це?"
              ],
              [
                "Čo robíš?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-ktory",
        "title": "Vzťažné zámeno \"ktorý\" — B1",
        "titleEn": "Relative Pronoun Ktorý — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"ktorý\" (який) уводить підрядні означальні речення й узгоджується з іменником, до якого відноситься, у роді та числі, а відмінок залежить від його ролі в підрядному реченні.",
            "en": {
              "text": "The pronoun \"ktorý\" (which/who) introduces relative clauses and agrees with its antecedent in gender and number, while its case depends on its role within the clause."
            }
          },
          {
            "type": "table",
            "title": "Форми \"ktorý\" за родом",
            "rows": [
              [
                "muž, ktorý...",
                "чоловік, який...",
                "чол."
              ],
              [
                "žena, ktorá...",
                "жінка, яка...",
                "жін."
              ],
              [
                "dieťa, ktoré...",
                "дитина, яка...",
                "сер."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To je kniha, ktorú čítam.",
                "Це книга, яку я читаю."
              ],
              [
                "Poznám muža, ktorý tam stojí.",
                "Я знаю чоловіка, який там стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-sa-seba",
        "title": "Zvratné zámeno \"sa/seba\" — A2",
        "titleEn": "Reflexive Pronoun Sa/Seba — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"sa\" (коротка форма) чи \"seba\" (повна форма) позначає, що дія спрямована на самого того, хто її виконує. Не змінюється за особами.",
            "en": {
              "text": "The reflexive pronoun \"sa\" (short form) or \"seba\" (full form) shows that the action is directed back at the doer. It does not change by person."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "umývať sa",
                "Umývam sa.",
                "Я митися/Я мию себе."
              ],
              [
                "vidieť seba",
                "Vidím seba v zrkadle.",
                "Я бачу себе в дзеркалі."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "On sa oblieka.",
                "Він одягається."
              ],
              [
                "Myslím len na seba.",
                "Я думаю тільки про себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Neurčité zámená — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники утворюються додаванням частки nie- чи -si (хтось, щось, якийсь) до питальних займенників і відмінюються так само, як вони.",
            "en": {
              "text": "Indefinite pronouns are formed by adding the particle nie- or -si (someone, something, some) to interrogative pronouns and decline the same way."
            }
          },
          {
            "type": "table",
            "title": "Питальний → неозначений",
            "rows": [
              [
                "kto → niekto",
                "хто → хтось"
              ],
              [
                "čo → niečo",
                "що → щось"
              ],
              [
                "aký → nejaký",
                "який → якийсь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Niekto zvoní pri dverách.",
                "Хтось дзвонить у двері."
              ],
              [
                "Máš nejaké otázky?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Základné číslovky 1–10 — A1",
        "titleEn": "Cardinal Numbers 1-10 — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник \"jeden\" (один) узгоджується з іменником як прикметник. Числівники 2-4 вимагають форми, схожої на називний множини; 5 і більше — родового відмінка множини.",
            "en": {
              "text": "\"Jeden\" (one) agrees with the noun like an adjective. Numbers 2-4 take a form resembling the nominative plural; 5 and up take the genitive plural."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "jeden / jedna / jedno",
                "один/одна/одне",
                "1"
              ],
              [
                "dva / dve",
                "два/дві",
                "2"
              ],
              [
                "päť",
                "п'ять",
                "5"
              ],
              [
                "desať",
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
                "Mám jedného brata.",
                "У мене один брат."
              ],
              [
                "Vidím tri mačky.",
                "Я бачу три коти."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-higher",
        "title": "Základné číslovky od 11 — A2",
        "titleEn": "Cardinal Numbers 11+ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники від 11 до 19 утворюються додаванням -násť до одиниці, десятки — за спеціальними формами (dvadsať, tridsať...).",
            "en": {
              "text": "Numbers 11-19 are formed by adding -násť to the unit digit; the tens have their own special forms (dvadsať, tridsať...)."
            }
          },
          {
            "type": "table",
            "title": "11, 20, 100",
            "rows": [
              [
                "jedenásť",
                "одинадцять",
                "11"
              ],
              [
                "dvadsať",
                "двадцять",
                "20"
              ],
              [
                "sto",
                "сто",
                "100"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mám dvadsať rokov.",
                "Мені двадцять років."
              ],
              [
                "Stojí to sto eur.",
                "Це коштує сто євро."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-genitive",
        "title": "Predložky s genitívom — A2",
        "titleEn": "Prepositions with Genitive — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Багато поширених прийменників завжди керують родовим відмінком: bez (без), do (до), od (від), z/zo (з), okolo (навколо).",
            "en": {
              "text": "Many common prepositions always govern the genitive: bez (without), do (to), od (from), z/zo (from, out of), okolo (around)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з родовим",
            "rows": [
              [
                "bez",
                "bez cukru",
                "без цукру"
              ],
              [
                "do",
                "do školy",
                "до школи"
              ],
              [
                "od",
                "od kamaráta",
                "від друга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pijem kávu bez mlieka.",
                "Я п'ю каву без молока."
              ],
              [
                "Idem do práce.",
                "Я йду на роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-accusative",
        "title": "Predložky s akuzatívom — A2",
        "titleEn": "Prepositions with Accusative — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники cez (через), pre (для), za (за, в обмін) керують знахідним відмінком.",
            "en": {
              "text": "The prepositions cez (through), pre (for), and za (for, in exchange) govern the accusative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники зі знахідним",
            "rows": [
              [
                "cez",
                "cez most",
                "через мост"
              ],
              [
                "pre",
                "pre teba",
                "для тебе"
              ],
              [
                "za",
                "za hodinu",
                "за годину"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kúpil som darček pre mamu.",
                "Я купив подарунок для мами."
              ],
              [
                "Ideme na dovolenku.",
                "Ми їдемо у відпустку."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-instrumental",
        "title": "Predložky s inštrumentálom — A2",
        "titleEn": "Prepositions with Instrumental — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники s/so (з, у значенні супроводу), nad (над), pod (під, без руху), pred (перед), medzi (між) керують орудним відмінком.",
            "en": {
              "text": "The prepositions s/so (with), nad (above), pod (under, static), pred (in front of), medzi (between) govern the instrumental case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з орудним",
            "rows": [
              [
                "s / so",
                "s kamarátom",
                "з другом"
              ],
              [
                "nad",
                "nad morom",
                "над морем"
              ],
              [
                "pod",
                "pod stolom",
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
                "Ideme autobusom.",
                "Ми їдемо автобусом."
              ],
              [
                "Idem na prechádzku so psom.",
                "Я йду на прогулянку з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-locative",
        "title": "Predložky s lokálom — A2",
        "titleEn": "Prepositions with Locative — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники v (в, без руху), na (на, без руху), o (про) і pri (при) керують місцевим відмінком.",
            "en": {
              "text": "The prepositions v (in, static), na (on, static), o (about), and pri (near) govern the locative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з місцевим",
            "rows": [
              [
                "v",
                "v dome",
                "у домі"
              ],
              [
                "na",
                "na stole",
                "на столі"
              ],
              [
                "o",
                "o práci",
                "про роботу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pracujem v banke.",
                "Я працюю в банку."
              ],
              [
                "Kniha leží na stole.",
                "Книга лежить на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-dative",
        "title": "Predložky s datívom — B1",
        "titleEn": "Prepositions with Dative — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший прийменник із давальним відмінком — k/ku (до, у напрямку). Також вживається vďaka (завдяки) та proti (проти).",
            "en": {
              "text": "The most common preposition with the dative is k/ku (toward). Also used are vďaka (thanks to) and proti (against)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з давальним",
            "rows": [
              [
                "k / ku",
                "idem k lekárovi",
                "йду до лікаря"
              ],
              [
                "vďaka",
                "vďaka tebe",
                "завдяки тобі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vďaka nemu som to zvládol.",
                "Завдяки йому я з цим впорався."
              ],
              [
                "Ideme k moru.",
                "Ми йдемо до моря."
              ]
            ]
          }
        ]
      },
      {
        "id": "two-way-prepositions",
        "title": "Predložky \"v/na\" s dvoma pádmi — B1",
        "titleEn": "Two-Case Prepositions V/Na — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники v і na керують знахідним відмінком, коли позначають рух (куди?), і місцевим, коли позначають перебування без руху (де?).",
            "en": {
              "text": "The prepositions v and na govern the accusative when expressing motion (where to?) and the locative when expressing a static location (where?)."
            }
          },
          {
            "type": "table",
            "title": "Рух vs перебування",
            "rows": [
              [
                "Idem na univerzitu.",
                "Я йду в університет.",
                "рух — акузатив"
              ],
              [
                "Som na univerzite.",
                "Я в університеті.",
                "перебування — локал"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vchádzam do izby.",
                "Я заходжу в кімнату."
              ],
              [
                "Sedím v izbe.",
                "Я сиджу в кімнаті."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-genitive",
        "title": "Zápor a genitív — A2",
        "titleEn": "Negation & Genitive — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення приєднується до дієслова префіксом ne-. Після заперечення прямий об'єкт іноді змінюється зі знахідного на родовий, особливо з дієсловом \"mať\" (mať → nemať + genitív).",
            "en": {
              "text": "Negation attaches to the verb as the prefix ne-. After negation, a direct object sometimes shifts from accusative to genitive, especially with the verb \"mať\" (mať → nemať + genitive)."
            }
          },
          {
            "type": "table",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Mám čas. (знах.)",
                "Nemám čas. (родов. можливий)",
                "У мене немає часу."
              ],
              [
                "Vidím ho. (знах.)",
                "Nevidím ho.",
                "Я не бачу його."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nepoznám tú pesničku.",
                "Я не знаю цієї пісні."
              ],
              [
                "On nepije kávu.",
                "Він не п'є каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Slovosled — A2",
        "titleEn": "Word Order — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Словацький порядок слів дуже вільний, оскільки відмінки показують граматичну роль слова незалежно від позиції. Короткі клітики (sa, by, som) мають тенденцію стояти на другій позиції в реченні.",
            "en": {
              "text": "Slovak word order is very flexible because case endings mark a word's grammatical role regardless of position. Short clitics (sa, by, som) tend to occupy the second position in the clause."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Ján kúpil knihu.",
                "Ян купив книгу.",
                "нейтральний"
              ],
              [
                "Knihu kúpil Ján.",
                "Книгу купив (саме) Ян.",
                "фокус на 'Ян'"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kávu pijem každý deň.",
                "Каву я п'ю щодня (акцент на 'каву')."
              ],
              [
                "Každý deň pijem kávu.",
                "Щодня я п'ю каву (нейтрально)."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Opytovacie slová — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "kde?",
                "де?",
                "Kde si?"
              ],
              [
                "kedy?",
                "коли?",
                "Kedy sa vrátiš?"
              ],
              [
                "prečo?",
                "чому?",
                "Prečo plačeš?"
              ],
              [
                "ako?",
                "як?",
                "Ako sa máš?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kde je stanica?",
                "Де вокзал?"
              ],
              [
                "Prečo si prišiel neskoro?",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Zlučovacie spojky — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "a",
                "і/та",
                "Ja a ty."
              ],
              [
                "ale",
                "але",
                "Chcem, ale nemôžem."
              ],
              [
                "alebo",
                "або",
                "Káva alebo čaj?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mám rád čaj a kávu.",
                "Мені подобається чай і кава."
              ],
              [
                "Chcel by som ísť, ale nemám čas.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Podraďovacie spojky — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "že",
                "що",
                "Viem, že prídeš."
              ],
              [
                "pretože",
                "тому що",
                "Neprišiel som, pretože som bol chorý."
              ],
              [
                "ak / keby",
                "якщо / якби",
                "Ak máš čas, zavolaj."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Myslím, že máš pravdu.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Zostanem, ak to bude potrebné.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses",
        "title": "Vedľajšie vety vzťažné — B1",
        "titleEn": "Relative Clauses — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні означальні речення вводяться займенником \"ktorý\" (який), що узгоджується з означуваним іменником у роді й числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "Relative clauses are introduced by \"ktorý\" (which/who), agreeing with the antecedent in gender and number, while its case is determined by its role in the clause."
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
                "Dom, v ktorom bývam, je starý.",
                "Будинок, у якому я живу, старий."
              ],
              [
                "To je osoba, o ktorej som hovoril.",
                "Це людина, про яку я говорив."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Zvratné slovesá — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів уживаються з часткою \"sa\" й мають відмінне значення від дієслова без неї. Sa зазвичай стоїть на другій позиції в реченні.",
            "en": {
              "text": "Many verbs take the particle \"sa\" and have a different meaning from the plain verb. Sa usually occupies the second position of the clause."
            }
          },
          {
            "type": "table",
            "title": "Без sa ↔ зі sa",
            "rows": [
              [
                "umývať (мити)",
                "umývať sa (митися)",
                "себе"
              ],
              [
                "učiť (вчити)",
                "učiť sa (вчитися)",
                "себе"
              ],
              [
                "volať (звати)",
                "volať sa (називатися)",
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
                "Ako sa voláš?",
                "Як тебе звати?"
              ],
              [
                "Učím sa po slovensky.",
                "Я вчу словацьку."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Neosobné konštrukcie \"treba/dá sa\" — A2",
        "titleEn": "Impersonal Modal Constructions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові вирази treba (треба), dá sa (можна), musí sa (потрібно) вживаються з інфінітивом і не змінюються за особами.",
            "en": {
              "text": "The impersonal expressions treba (must/need), dá sa (may/can), musí sa (necessary) take the infinitive and never change by person."
            }
          },
          {
            "type": "table",
            "title": "Безособові конструкції",
            "rows": [
              [
                "treba",
                "Treba ísť.",
                "Треба йти."
              ],
              [
                "dá sa",
                "Dá sa vojsť?",
                "Можна зайти?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Treba kúpiť chlieb.",
                "Треба купити хліб."
              ],
              [
                "Tu sa nesmie fajčiť.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "masculine-animate-plural-agreement",
        "title": "Zhoda v množnom čísle (životné/neživotné) — B1",
        "titleEn": "Masculine-Animate Plural Agreement — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "У множині минулого часу й прикметники узгоджуються по-різному: чоловічо-живий рід у множині приймає закінчення -i (з можливим чергуванням приголосного), решта родів — -y/-e/-a.",
            "en": {
              "text": "In the plural, the past tense and adjectives agree differently: masculine-animate takes the ending -i (with possible consonant alternation), while other genders take -y/-e/-a."
            }
          },
          {
            "type": "table",
            "title": "Чоловічо-живий vs решта",
            "rows": [
              [
                "Muži boli v parku.",
                "Чоловіки були в парку.",
                "чол.-жив."
              ],
              [
                "Ženy boli v parku.",
                "Жінки були в парку.",
                "решта"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Študenti písali skúšku.",
                "Студенти писали екзамен."
              ],
              [
                "Mačky spali na gauči.",
                "Коти спали на дивані."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Zdrobneniny — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -ík/-ka/-ko тощо і дуже широко вживаються в повсякденному мовленні, виражаючи не лише розмір, а й теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -ík/-ka/-ko and are used extremely widely in everyday speech, expressing not just size but warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "pes (пес)",
                "psík",
                "песик"
              ],
              [
                "dom (будинок)",
                "domček",
                "будиночок"
              ],
              [
                "mama",
                "mamička",
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
                "Mám malého psíka.",
                "У мене маленький песик."
              ],
              [
                "Kúpila som synčekovi hračku.",
                "Я купила синочку іграшку."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Dni v týždni — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "pondelok",
                "понеділок",
                "1"
              ],
              [
                "piatok",
                "п'ятниця",
                "5"
              ],
              [
                "nedeľa",
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
                "V pondelok mám výučbu.",
                "У понеділок у мене заняття."
              ],
              [
                "Dnes je streda.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Mesiace a dátumy — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Назви місяців пишуться з малої букви. У датах день і місяць уживаються в родовому відмінку порядкового числівника та назви місяця.",
            "en": {
              "text": "Month names are lowercase. In dates, both the day and month name appear in the genitive case of the ordinal number and the month name."
            }
          },
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
                "júl",
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
                "Dnes je piateho mája.",
                "Сьогодні п'яте травня."
              ],
              [
                "Narodil som sa v decembri.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Vyjadrenie času — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Koľko je hodín?\", а відповідь уживає числівник разом зі словом \"hodina\" (година).",
            "en": {
              "text": "To ask the time, Slovaks say \"Koľko je hodín?\", and the answer uses the number together with the word \"hodina\" (hour)."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Je jedna hodina.",
                "Перша година.",
                "1:00"
              ],
              [
                "Je pol tretej.",
                "Половина третьої.",
                "2:30"
              ],
              [
                "Je pätnásť hodín.",
                "П'ятнадцять годин.",
                "15:00"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Koľko je hodín?",
                "Котра година?"
              ],
              [
                "Vlak odchádza o ôsmej.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"ty\" a \"vy\" (formálnosť) — A2",
        "titleEn": "Ty vs Vy (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"ty\" (2-га особа однини), для ввічливого/формального — \"vy\" (2-га особа множини), навіть коли звертаються до однієї людини.",
            "en": {
              "text": "For informal address, Slovak uses \"ty\" (2nd person singular); for polite/formal address it uses \"vy\" (2nd person plural), even to a single person."
            }
          },
          {
            "type": "table",
            "title": "ty ↔ vy",
            "rows": [
              [
                "Ako sa máš?",
                "Як ти? (неформально)",
                "ty"
              ],
              [
                "Ako sa máte?",
                "Як Ви? (формально)",
                "vy"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Odkiaľ ste?",
                "Звідки Ви?"
              ],
              [
                "Ďakujem vám za pomoc.",
                "Дякую Вам за допомогу."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-speech",
        "title": "Nepriama reč — B1",
        "titleEn": "Reported Speech — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Непряма мова передається сполучником \"že\" (\"що\") без зміни часу дієслова.",
            "en": {
              "text": "Reported speech is conveyed with the conjunction \"že\" (\"that\") without shifting the verb tense."
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
                "Povedal, že príde zajtra.",
                "Він сказав, що прийде завтра."
              ],
              [
                "Povedala, že je unavená.",
                "Вона сказала, що втомлена."
              ]
            ]
          }
        ]
      },
      {
        "id": "rhythmic-law",
        "title": "Rytmický zákon — B1",
        "titleEn": "The Rhythmic Law — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Ритмічний закон — одне з найважливіших правил словацької мови без відповідника в чеській: два довгі склади не можуть стояти поруч в одному слові. Якщо закінчення повинно бути довгим після довгого кореня, воно коротшає.",
            "en": {
              "text": "The rhythmic law is one of the most important Slovak rules with no Czech equivalent: two long syllables cannot stand next to each other in a word. If an ending should be long after a long root, it shortens instead."
            }
          },
          {
            "type": "table",
            "title": "Приклади дії закону",
            "rows": [
              [
                "páv (довгий) + -y → páv-y",
                "пави",
                "закінчення лишається коротким"
              ],
              [
                "krásny (довгий) + -ie → krásne",
                "гарні (не *krásnie)",
                "закінчення коротшає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tie kvety sú krásne.",
                "Ці квіти гарні (не *krásnie, через ритмічний закон)."
              ],
              [
                "Čítam knihu.",
                "Я читаю книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "diphthongs-dvojhlasky",
        "title": "Dvojhlásky ia, ie, iu, ô — B1",
        "titleEn": "Diphthongs Ia, Ie, Iu, Ô — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від чеської, словацька має дифтонги ia, ie, iu та ô — вони часто з'являються в парадигмах відмінювання й дієвідмінювання замість простого голосного і вимовляються як один складний звук.",
            "en": {
              "text": "Unlike Czech, Slovak has the diphthongs ia, ie, iu, and ô — they often appear in declension and conjugation paradigms in place of a simple vowel, and are pronounced as a single complex sound."
            }
          },
          {
            "type": "table",
            "title": "Приклади дифтонгів",
            "rows": [
              [
                "kôň",
                "кінь",
                "ô"
              ],
              [
                "diera",
                "діра",
                "ia"
              ],
              [
                "dievča",
                "дівчина",
                "ie"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mám krásneho koňa.",
                "У мене гарний кінь."
              ],
              [
                "Vidím malé dievča.",
                "Я бачу маленьку дівчинку."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Slovotvorné prípony — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Словацька активно утворює нові слова додаванням суфіксів: -ár/-ovateľ (виконавець дії), -osť (абстрактне поняття), -ný/-ový (прикметники від іменників).",
            "en": {
              "text": "Slovak actively derives new words with suffixes: -ár/-ovateľ (agent noun), -osť (abstract concept), -ný/-ový (adjectives from nouns)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "kniha (книга) → knihár",
                "палітурник"
              ],
              [
                "rýchly (швидкий) → rýchlosť",
                "швидкість"
              ],
              [
                "farba (колір) → farebný",
                "кольоровий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rýchlosť auta bola vysoká.",
                "Швидкість машини була висока."
              ],
              [
                "To je farebný obrázok.",
                "Це кольоровий малюнок."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Kvantifikátory (veľa/málo) — A2",
        "titleEn": "Quantifiers (Veľa/Málo) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "veľa",
                "багато"
              ],
              [
                "málo",
                "мало"
              ],
              [
                "niekoľko",
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
                "Mám veľa priateľov.",
                "У мене багато друзів."
              ],
              [
                "Daj mi niekoľko minút.",
                "Дай мені кілька хвилин."
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
        "title": "Nepravidelné slovesá — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів мають основу теперішнього часу, що суттєво відрізняється від інфінітива, і їхні форми варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs have a present-tense stem quite different from the infinitive, and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "ísť (йти)",
                "idem, ideš, ide",
                "я йду, ти йдеш, він йде"
              ],
              [
                "chcieť (хотіти)",
                "chcem, chceš, chce",
                "я хочу, ти хочеш, він хоче"
              ],
              [
                "môcť (могти)",
                "môžem, môžeš, môže",
                "я можу, ти можеш, він може"
              ],
              [
                "vedieť (знати)",
                "viem, vieš, vie",
                "я знаю, ти знаєш, він знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Teraz nemôžem hovoriť.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Idem do obchodu, chceš niečo?",
                "Я йду в магазин, хочеш щось?"
              ]
            ]
          }
        ]
      },
      {
        "id": "distinctive-letters",
        "title": "Osobitné hlásky ä a ľ — A2",
        "titleEn": "Distinctive Letters Ä and Ľ — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Словацька абетка має дві літери, яких немає в чеській: ä (широке е, вимовляється між [e] та [a]) і продуктивно вживане ľ (м'яке л). Ці звуки — одна з найпомітніших ознак, що відрізняють словацьку від чеської на слух.",
            "en": {
              "text": "The Slovak alphabet has two letters absent from Czech: ä (a broad e, pronounced between [e] and [a]) and the productively used ľ (soft l). These sounds are one of the most noticeable features distinguishing Slovak from Czech by ear."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mäso",
                "м'ясо",
                "ä"
              ],
              [
                "ľudia",
                "люди",
                "ľ"
              ],
              [
                "deväť",
                "дев'ять",
                "ä"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nejem mäso.",
                "Я не їм м'яса."
              ],
              [
                "V meste je veľa ľudí.",
                "У місті багато людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "voicing-assimilation",
        "title": "Znelostná asimilácia — B1",
        "titleEn": "Voicing Assimilation — B1",
        "emoji": "🔉",
        "sections": [
          {
            "type": "intro",
            "text": "У групах приголосних та в кінці слова дзвінкі приголосні оглушуються, а глухі озвучуються за сусіднім приголосним — написання при цьому не змінюється, тому вимова часто відрізняється від написаного.",
            "en": {
              "text": "In consonant clusters and at the end of a word, voiced consonants devoice and voiceless consonants voice to match the neighboring consonant — the spelling doesn't change, so pronunciation often differs from what's written."
            }
          },
          {
            "type": "table",
            "title": "Приклади асиміляції",
            "rows": [
              [
                "vták (пишеться з v)",
                "вимовляється [фтак]",
                "оглушення"
              ],
              [
                "hrad (пишеться з d)",
                "вимовляється [грат]",
                "оглушення в кінці слова"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vták letí vysoko.",
                "Птах летить високо (вимовляється [фтак])."
              ],
              [
                "Hrad je na kopci.",
                "Замок на пагорбі (вимовляється [грат])."
              ]
            ]
          }
        ]
      }
    ]
  }
];
