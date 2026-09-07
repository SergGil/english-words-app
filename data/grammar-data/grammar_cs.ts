// Vymova — data/grammar-data/grammar_cs.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CS: GrammarCategory[] = [
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
            "text": "Чеські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Czech verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "já",
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
                "Já jsem učitel.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"být\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Být\" відмінюється неправильно, але дуже схоже на українське \"бути\" за формою вживання.",
            "en": {
              "text": "\"Být\" conjugates irregularly, but is used very similarly to Ukrainian \"бути\"."
            }
          },
          {
            "type": "formula",
            "title": "\"být\" (бути) — přítomný čas",
            "rows": [
              [
                "já",
                "jsem",
                "я є"
              ],
              [
                "ty",
                "jsi",
                "ти є"
              ],
              [
                "on / ona / ono",
                "je",
                "він/вона/воно є"
              ],
              [
                "my",
                "jsme",
                "ми є"
              ],
              [
                "vy",
                "jste",
                "ви є"
              ],
              [
                "oni / ony",
                "jsou",
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
                "Ona je lékařka.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Být (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення префіксом \"ne-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від окремого слова, заперечення в чеській приєднується прямо до дієслова як префікс ne-.",
            "en": {
              "text": "Unlike a separate word, negation in Czech attaches directly to the verb as the prefix ne-."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Vím.",
                "Nevím.",
                "Я знаю. / Я не знаю."
              ],
              [
                "Přišel.",
                "Nepřišel.",
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
                "On nepřišel.",
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
                "Jsi unavený.",
                "Jsi unavený?",
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
        "title": "Сім відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Чеські іменники, як і українські, змінюються за сімома відмінками — закінчення показують роль слова в реченні без прийменника.",
            "en": {
              "text": "Czech nouns, like Ukrainian ones, decline through seven cases — the ending shows a word's role in the sentence without needing a preposition."
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
        "titleEn": "The Seven Cases — A1"
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
        "title": "Přítomný čas — A1",
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
            "title": "\"dělat\" (робити) — přítomný čas",
            "rows": [
              [
                "já",
                "dělám",
                "я роблю"
              ],
              [
                "ty",
                "děláš",
                "ти робиш"
              ],
              [
                "on / ona / ono",
                "dělá",
                "він/вона/воно робить"
              ],
              [
                "my",
                "děláme",
                "ми робимо"
              ],
              [
                "vy",
                "děláte",
                "ви робите"
              ],
              [
                "oni / ony",
                "dělají",
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
                "Dělám domácí úkol.",
                "Я роблю домашнє завдання."
              ],
              [
                "Oni pijí kávu.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-conjugation-classes",
        "title": "Slovesné třídy — A2",
        "titleEn": "Verb Conjugation Classes — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Чеські дієслова поділяються на п'ять класів за закінченням 3-ї особи однини теперішнього часу: -e/-ne, -je, -í, -á, -uje.",
            "en": {
              "text": "Czech verbs fall into five classes based on the 3rd person singular present-tense ending: -e/-ne, -je, -í, -á, -uje."
            }
          },
          {
            "type": "table",
            "title": "Приклади класів",
            "rows": [
              [
                "-uje",
                "pracovat → pracuje",
                "працювати → працює"
              ],
              [
                "-í",
                "mluvit → mluví",
                "говорити → говорить"
              ],
              [
                "-á",
                "dělat → dělá",
                "робити → робить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mluvím česky.",
                "Я говорю чеською."
              ],
              [
                "Pracuje v bance.",
                "Він працює в банку."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-aspect",
        "title": "Vidová dvojice: dokonavý a nedokonavý vid — A2",
        "titleEn": "Perfective & Imperfective Aspect — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне чеське дієслово має вид: недоконаний (тривала або повторювана дія) або доконаний (одноразова, завершена дія з результатом). Це не пов'язано напряму з часом.",
            "en": {
              "text": "Every Czech verb has an aspect: imperfective (an ongoing or repeated action) or perfective (a single, completed action with a result). This is independent of tense."
            }
          },
          {
            "type": "table",
            "title": "Недоконаний ↔ доконаний",
            "rows": [
              [
                "číst",
                "přečíst",
                "читати / прочитати"
              ],
              [
                "psát",
                "napsat",
                "писати / написати"
              ],
              [
                "dělat",
                "udělat",
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
                "Četl jsem knihu celé odpoledne.",
                "Я читав книжку весь день (процес)."
              ],
              [
                "Přečetl jsem knihu za jeden den.",
                "Я прочитав книжку за один день (результат)."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pairs",
        "title": "Předpony dokonavosti — B1",
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
                "psát → napsat",
                "писати → написати"
              ],
              [
                "pro-",
                "číst → přečíst",
                "читати → прочитати"
              ],
              [
                "u-",
                "dělat → udělat",
                "робити → зробити"
              ],
              [
                "za-",
                "platit → zaplatit",
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
                "Napsal jsem dopis.",
                "Я написав листа."
              ],
              [
                "Vždycky zaplatím hned.",
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
            "text": "Минулий час утворюється дієприкметником на -l/-la/-lo/-li/-ly, узгодженим із підметом у роді й числі, плюс допоміжне дієслово \"být\" — але лише для 1-ї та 2-ї особи; у 3-й особі допоміжне дієслово опускається.",
            "en": {
              "text": "The past tense is formed with an -l/-la/-lo/-li/-ly participle agreeing with the subject in gender and number, plus the auxiliary \"být\" — but only for 1st and 2nd person; in the 3rd person the auxiliary is dropped."
            }
          },
          {
            "type": "formula",
            "title": "\"dělat\" (робити) — minulý čas",
            "rows": [
              [
                "já (чол.)",
                "dělal jsem",
                "я робив"
              ],
              [
                "ty (чол.)",
                "dělal jsi",
                "ти робив"
              ],
              [
                "on",
                "dělal",
                "він робив (без jsem/jsi)"
              ],
              [
                "my",
                "dělali jsme",
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
                "Včera jsem pracoval do večera.",
                "Вчора я працював до вечора."
              ],
              [
                "Ona četla knihu.",
                "Вона читала книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-simple",
        "title": "Budoucí čas dokonavých sloves — A2",
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
            "title": "\"napsat\" (написати) — простий майбутній",
            "rows": [
              [
                "já",
                "napíšu",
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
                "Napíšu ti zítra.",
                "Я напишу тобі завтра."
              ],
              [
                "Uděláme to spolu.",
                "Ми зробимо це разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-compound",
        "title": "Budoucí čas nedokonavých sloves — A2",
        "titleEn": "Compound Future — Imperfective Verbs — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконані дієслова утворюють майбутній час складеною формою: майбутній час дієслова \"být\" (budu, budeš...) + інфінітив.",
            "en": {
              "text": "Imperfective verbs form the future with a compound construction: the future of \"být\" (budu, budeš...) plus the infinitive."
            }
          },
          {
            "type": "formula",
            "title": "\"dělat\" (робити) — складений майбутній",
            "rows": [
              [
                "já",
                "budu dělat",
                "я робитиму"
              ],
              [
                "ty",
                "budeš dělat",
                "ти робитимеш"
              ],
              [
                "on",
                "bude dělat",
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
                "Budu číst celý týden.",
                "Я читатиму весь тиждень."
              ],
              [
                "Budeme bydlet v Praze.",
                "Ми будемо жити у Празі."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Rozkazovací způsob — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від основи теперішнього часу. 2-га особа однини зазвичай має закінчення -Ø/-i/-ej, 1-ша особа множини -me/-ěme, 2-га особа множини -te/-ěte.",
            "en": {
              "text": "The imperative is formed from the present-tense stem. The 2nd person singular usually ends in -Ø/-i/-ej, the 1st person plural in -me/-ěme, and the 2nd person plural in -te/-ěte."
            }
          },
          {
            "type": "formula",
            "title": "\"dělat\" (робити) — rozkazovací způsob",
            "rows": [
              [
                "ty",
                "Dělej!",
                "Роби!"
              ],
              [
                "my",
                "Dělejme!",
                "Робімо!"
              ],
              [
                "vy",
                "Dělejte!",
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
                "Zavři dveře, prosím.",
                "Зачини двері, будь ласка."
              ],
              [
                "Pojďme do kina!",
                "Ходімо в кіно!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Podmiňovací způsob — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється дієприкметником на -l + допоміжна частка bych/bys/by/bychom/byste/by, узгоджена з особою.",
            "en": {
              "text": "The conditional mood is formed with the -l participle plus the auxiliary particle bych/bys/by/bychom/byste/by, agreeing with the person."
            }
          },
          {
            "type": "formula",
            "title": "\"dělat\" (робити) — podmiňovací způsob",
            "rows": [
              [
                "já",
                "dělal bych",
                "я робив би"
              ],
              [
                "ty",
                "dělal bys",
                "ти робив би"
              ],
              [
                "on",
                "dělal by",
                "він робив би"
              ],
              [
                "my",
                "dělali bychom",
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
                "Rád bych cestoval víc.",
                "Я хотів би більше подорожувати."
              ],
              [
                "Kdybych měl čas, přišel bych.",
                "Якби я мав час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-past",
        "title": "Podmiňovací způsob minulý — B2",
        "titleEn": "Past Conditional — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Для нереальних умов у минулому додають дієприкметник \"byl/byla/bylo\" перед часткою by: \"udělal bych\" (умовний теперішній) → \"byl bych udělal\" (умовний минулий).",
            "en": {
              "text": "For unreal past conditions, the participle \"byl/byla/bylo\" is inserted before the by-particle: \"udělal bych\" (present conditional) becomes \"byl bych udělal\" (past conditional)."
            }
          },
          {
            "type": "table",
            "title": "Теперішній умовний ↔ минулий умовний",
            "rows": [
              [
                "udělal bych",
                "byl bych udělal",
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
                "Kdybych to byl věděl, řekl bych ti to dřív.",
                "Якби я знав раніше, я сказав би тобі раніше."
              ],
              [
                "Byla bych přišla, kdyby nepršelo.",
                "Я прийшла б, якби не дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-past",
        "title": "Neosobní tvar na -no/-to — B2",
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
                "udělat",
                "uděláno",
                "було зроблено"
              ],
              [
                "říct",
                "řečeno",
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
                "Bylo mi řečeno, že vlak bude mít zpoždění.",
                "Мені сказали, що потяг запізниться."
              ],
              [
                "Letos byl postaven nový most.",
                "Цього року побудували новий мост."
              ]
            ]
          }
        ]
      },
      {
        "id": "active-adverbial-participle",
        "title": "Přechodník přítomný — B2",
        "titleEn": "Active Adverbial Participle — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній перехідник (дуже книжна, застаріла форма) утворюється від основи теперішнього часу недоконаних дієслів і описує одночасну дію. У сучасній мові майже не вживається, крім усталених виразів.",
            "en": {
              "text": "The present transgressive (a very bookish, archaic form) is formed from the present stem of imperfective verbs and describes a simultaneous action. In modern language it's almost never used except in set phrases."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nesa (несучи)",
                "vida (бачачи)",
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
                "Řka to, odešel.",
                "Кажучи це, він пішов (архаїчно, літературний стиль)."
              ],
              [
                "Dnes se místo toho používá vedlejší věta.",
                "Сьогодні замість цього вживають підрядне речення."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-participle",
        "title": "Trpné příčestí a trpný rod — B1",
        "titleEn": "Passive Participle & Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник утворюється переважно суфіксами -n/-en/-t від основи доконаного дієслова й узгоджується з іменником у роді, числі та відмінку. У пасивних конструкціях уживається з дієсловом \"být\".",
            "en": {
              "text": "The passive participle is formed mainly with the suffixes -n/-en/-t from the perfective stem and agrees with the noun in gender, number, and case. It's used in passive constructions with \"být\"."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "napsat",
                "napsaný",
                "написаний"
              ],
              [
                "udělat",
                "udělaný",
                "зроблений"
              ],
              [
                "otevřít",
                "otevřený",
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
                "Dopis byl napsán studentem.",
                "Лист був написаний студентом."
              ],
              [
                "Dveře jsou od rána otevřené.",
                "Двері відчинені з самого ранку."
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
        "title": "Genitiv (koho? čeho?) — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (genitiv) відповідає на питання \"кого? чого?\". Уживається після заперечення, після числівників 5+, після багатьох прийменників і для вираження належності.",
            "en": {
              "text": "The genitive answers \"of whom? of what?\". Used after negation, after numerals 5+, after many prepositions, and to express possession."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Genitiv",
            "rows": [
              [
                "kočka (кіт)",
                "kočky",
                "bez kočky (без кота)"
              ],
              [
                "kniha (книга)",
                "knihy",
                "nemám knihy (у мене немає книги)"
              ],
              [
                "dítě (дитина)",
                "dítěte",
                "domov dítěte (дитячий будинок)"
              ]
            ]
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
                "To je auto mého bratra.",
                "Це машина мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Dativ (komu? čemu?) — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (dativ) відповідає на питання \"кому? чому?\" і позначає непрямий об'єкт.",
            "en": {
              "text": "The dative case answers \"to whom? to what?\" and marks the indirect object."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Dativ",
            "rows": [
              [
                "matka (мама)",
                "matce",
                "Dávám dárek matce. (Даю подарунок мамі.)"
              ],
              [
                "bratr (брат)",
                "bratrovi",
                "Pomáhám bratrovi. (Допомагаю братові.)"
              ],
              [
                "dítě (дитина)",
                "dítěti",
                "Čtu dítěti. (Читаю дитині.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Řekl jsem jí pravdu.",
                "Я сказав їй правду."
              ],
              [
                "To je pro dítě těžké.",
                "Це важко для дитини."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Akuzativ (koho? co?) — A1",
        "titleEn": "Accusative Case — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (akuzativ) відповідає на питання \"кого? що?\" і позначає прямий об'єкт дії. Для істот чоловічого роду форма схожа на родовий, для неістот — на називний.",
            "en": {
              "text": "The accusative answers \"whom? what?\" and marks the direct object. For masculine animate nouns the form resembles the genitive; for inanimate nouns it resembles the nominative."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Akuzativ",
            "rows": [
              [
                "pes (пес, жив.)",
                "psa",
                "Vidím psa. (Я бачу пса.)"
              ],
              [
                "stůl (стіл, нежив.)",
                "stůl",
                "Vidím stůl. (Я бачу стіл.)"
              ],
              [
                "káva (кава)",
                "kávu",
                "Piju kávu. (Я п'ю каву.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Čtu knihu.",
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
        "id": "vocative-case",
        "title": "Vokativ — B1",
        "titleEn": "Vocative Case — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок (vokativ) уживається при прямому зверненні — переважно з іменами й спорідненими словами.",
            "en": {
              "text": "The vocative is used when addressing someone directly — mainly with names and kinship terms."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Vokativ",
            "rows": [
              [
                "Petr",
                "Petře!",
                "Петре!"
              ],
              [
                "Jana",
                "Jano!",
                "Яно!"
              ],
              [
                "pane (пан)",
                "pane!",
                "пане!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mami, kde jsi?",
                "Мамо, де ти?"
              ],
              [
                "Honzo, pojď sem!",
                "Гонзо, ходи сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Lokál (o kom? o čem?) — A2",
        "titleEn": "Locative Case — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (lokál) відповідає на питання \"про кого? про що? де?\" і завжди вживається з прийменником (v, na, o, po, při).",
            "en": {
              "text": "The locative answers \"about whom/what? where?\" and is always used with a preposition (v, na, o, po, při)."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Lokál",
            "rows": [
              [
                "dům (дім)",
                "domě",
                "v domě (вдома)"
              ],
              [
                "škola (школа)",
                "škole",
                "ve škole (в школі)"
              ],
              [
                "město (місто)",
                "městě",
                "v městě (в місті)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pracuji v bance.",
                "Я працюю в банку."
              ],
              [
                "Mluvíme o práci.",
                "Ми говоримо про роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Instrumentál (kým? čím?) — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (instrumentál) відповідає на питання \"ким? чим?\" і позначає знаряддя дії, супровід (з прийменником s) та іменну частину присудка після \"být\".",
            "en": {
              "text": "The instrumental answers \"by whom? by what?\" and marks the instrument of an action, accompaniment (with the preposition s), and the predicate noun after \"být\"."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Instrumentál",
            "rows": [
              [
                "nůž (ніж)",
                "nožem",
                "Krájím nožem. (Я ріжу ножем.)"
              ],
              [
                "pero (перо)",
                "perem",
                "Píšu perem. (Я пишу пером.)"
              ],
              [
                "ona (вона)",
                "učitelkou",
                "Je učitelkou. (Вона вчителька.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jedeme autobusem.",
                "Ми їдемо автобусом."
              ],
              [
                "Jdu na procházku se psem.",
                "Я йду на прогулянку з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-masculine",
        "title": "Skloňování mužského rodu — A2",
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
            "title": "\"student\" (студент) за відмінками",
            "rows": [
              [
                "Nominativ",
                "student",
                "хто?"
              ],
              [
                "Genitiv",
                "studenta",
                "кого?"
              ],
              [
                "Dativ",
                "studentovi",
                "кому?"
              ],
              [
                "Akuzativ",
                "studenta",
                "кого?"
              ],
              [
                "Instrumentál",
                "studentem",
                "ким?"
              ],
              [
                "Lokál",
                "studentovi",
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
                "Ten student se dobře učí.",
                "Цей студент добре навчається."
              ],
              [
                "Mluvím se studentem.",
                "Я розмовляю зі студентом."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-feminine",
        "title": "Skloňování ženského rodu — A2",
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
                "Nominativ",
                "žena",
                "хто?"
              ],
              [
                "Genitiv",
                "ženy",
                "кого?"
              ],
              [
                "Dativ",
                "ženě",
                "кому?"
              ],
              [
                "Akuzativ",
                "ženu",
                "кого?"
              ],
              [
                "Instrumentál",
                "ženou",
                "ким?"
              ],
              [
                "Lokál",
                "ženě",
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
                "Ta žena je lékařka.",
                "Ця жінка лікарка."
              ],
              [
                "Mluvím se ženou.",
                "Я розмовляю з жінкою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-neuter",
        "title": "Skloňování středního rodu — A2",
        "titleEn": "Neuter Noun Declension — A2",
        "emoji": "🧒",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники середнього роду найчастіше закінчуються на -o, -e чи -í. \"Dítě\" (дитина) у непрямих відмінках приймає додатковий суфікс -ět-.",
            "en": {
              "text": "Neuter nouns most often end in -o, -e, or -í. \"Dítě\" (child) takes the extra infix -ět- in oblique cases."
            }
          },
          {
            "type": "table",
            "title": "\"město\" (місто) за відмінками",
            "rows": [
              [
                "Nominativ",
                "město",
                "що?"
              ],
              [
                "Genitiv",
                "města",
                "чого?"
              ],
              [
                "Dativ",
                "městu",
                "чому?"
              ],
              [
                "Akuzativ",
                "město",
                "що?"
              ],
              [
                "Instrumentál",
                "městem",
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
                "Bydlíme v malém městě.",
                "Ми живемо в маленькому місті."
              ],
              [
                "To dítě je velmi chytré.",
                "Ця дитина дуже розумна."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-plural-endings",
        "title": "Genitiv množného čísla — B1",
        "titleEn": "Genitive Plural Endings — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок множини — одна з найскладніших форм: у жіночому й середньому роді часто нульове закінчення (з можливим чергуванням голосного), у чоловічому — переважно -ů/-ů/-í.",
            "en": {
              "text": "The genitive plural is one of the trickiest forms: feminine and neuter nouns often take a zero ending (with possible vowel alternation), while masculine nouns mainly take -ů/-ů/-í."
            }
          },
          {
            "type": "table",
            "title": "Приклади родового множини",
            "rows": [
              [
                "stůl (стіл)",
                "stolů",
                "багато столів"
              ],
              [
                "kniha (книга)",
                "knih",
                "багато книг"
              ],
              [
                "okno (вікно)",
                "oken",
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
                "Mám pět knih.",
                "У мене п'ять книг."
              ],
              [
                "V pokoji je hodně oken.",
                "У кімнаті багато вікон."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-declension",
        "title": "Skloňování přídavných jmen — A2",
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
                "velký dům",
                "великий дім",
                "тверда (-ý)"
              ],
              [
                "moderní byt",
                "сучасна квартира",
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
                "Bydlím ve velkém domě.",
                "Я живу у великому будинку."
              ],
              [
                "To jsou moderní budovy.",
                "Це сучасні будівлі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Shoda přídavného jména s podstatným — A1",
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
                "malá kočka",
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
                "To jsou zajímavé knihy.",
                "Це цікаві книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Stupňování přídavných jmen — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -ejší/-ější/-ší, найвищий — додаванням префікса nej- до вищого ступеня.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -ejší/-ější/-ší, and the superlative by adding the prefix nej- to the comparative."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "velký",
                "větší",
                "největší"
              ],
              [
                "hezký",
                "hezčí",
                "nejhezčí"
              ],
              [
                "zajímavý",
                "zajímavější",
                "nejzajímavější"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tento dům je větší než můj.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "To je nejhezčí město v Česku.",
                "Це найкрасивіше місто в Чехії."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Nepravidelné stupňování — B1",
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
                "nejlepší"
              ],
              [
                "špatný (поганий)",
                "horší",
                "nejhorší"
              ],
              [
                "malý (малий)",
                "menší",
                "nejmenší"
              ],
              [
                "velký (великий)",
                "větší",
                "největší"
              ]
            ]
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
                "Je nejlepším žákem ve třídě.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Tvoření příslovcí — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників утворюється від прикметників заміною закінчення -ý/-í на -e/-ě чи -o.",
            "en": {
              "text": "Most adverbs are formed from adjectives by replacing the -ý/-í ending with -e/-ě or -o."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "rychlý (швидкий)",
                "rychle",
                "швидко"
              ],
              [
                "hezký (гарний)",
                "hezky",
                "гарно"
              ],
              [
                "dobrý (добрий)",
                "dobře",
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
                "Mluví rychle.",
                "Він говорить швидко."
              ],
              [
                "Zpívá velmi dobře.",
                "Вона дуже добре співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-adverbs",
        "title": "Stupňování příslovcí — B1",
        "titleEn": "Comparative Adverbs — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники ступенюються за тим самим принципом, що й прикметники: вищий ступінь через -eji/-ěji, найвищий — через nej-.",
            "en": {
              "text": "Adverbs are compared on the same principle as adjectives: the comparative with -eji/-ěji, the superlative with nej-."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "rychle",
                "rychleji",
                "nejrychleji"
              ],
              [
                "dobře",
                "lépe",
                "nejlépe"
              ],
              [
                "špatně",
                "hůře",
                "nejhůře"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Běhá rychleji než já.",
                "Він бігає швидше, ніж я."
              ],
              [
                "Zpívá nejlépe ze třídy.",
                "Вона співає найкраще з усього класу."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronouns-declension",
        "title": "Skloňování osobních zájmen — A2",
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
            "title": "\"já\" (я) за відмінками",
            "rows": [
              [
                "Nominativ",
                "já",
                "я"
              ],
              [
                "Genitiv",
                "mě / mne",
                "мене"
              ],
              [
                "Dativ",
                "mi / mně",
                "мені"
              ],
              [
                "Akuzativ",
                "mě / mne",
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
                "Neslyší mě.",
                "Він мене не чує."
              ],
              [
                "Dej mi to.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Přivlastňovací zájmena — A1",
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
                "můj",
                "мій",
                "můj dům"
              ],
              [
                "tvůj",
                "твій",
                "tvůj pes"
              ],
              [
                "náš",
                "наш",
                "náš dům"
              ],
              [
                "jejich",
                "їхній",
                "jejich dům"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To je moje sestra.",
                "Це моя сестра."
              ],
              [
                "Kde jsou tvoje klíče?",
                "Де твої ключі?"
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Ukazovací zájmena — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівний займенник \"ten/ta/to\" узгоджується з іменником у роді й числі та відмінюється за відмінками так само, як прикметник.",
            "en": {
              "text": "The demonstrative pronoun \"ten/ta/to\" agrees with the noun in gender and number, and declines by case just like an adjective."
            }
          },
          {
            "type": "table",
            "title": "\"ten/ta/to\" за родами",
            "rows": [
              [
                "ten dům",
                "цей будинок",
                "чол."
              ],
              [
                "ta žena",
                "ця жінка",
                "жін."
              ],
              [
                "to dítě",
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
                "Ten dům je nový.",
                "Цей будинок новий."
              ],
              [
                "Nemám rád tu písničku.",
                "Мені не подобається та пісня."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Tázací zájmena — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники \"kdo\" (хто) і \"co\" (що) відмінюються за відмінками так само, як іменники, на які вони вказують.",
            "en": {
              "text": "The interrogative pronouns \"kdo\" (who) and \"co\" (what) decline by case, just like the nouns they stand in for."
            }
          },
          {
            "type": "table",
            "title": "\"kdo\" за відмінками",
            "rows": [
              [
                "Nominativ",
                "kdo?",
                "хто?"
              ],
              [
                "Genitiv",
                "koho?",
                "кого?"
              ],
              [
                "Dativ",
                "komu?",
                "кому?"
              ],
              [
                "Instrumentál",
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
                "Kdo je to?",
                "Хто це?"
              ],
              [
                "Co děláš?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-ktery",
        "title": "Vztažné zájmeno \"který\" — B1",
        "titleEn": "Relative Pronoun Který — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"který\" (який) уводить підрядні означальні речення й узгоджується з іменником, до якого відноситься, у роді та числі, а відмінок залежить від його ролі в підрядному реченні.",
            "en": {
              "text": "The pronoun \"který\" (which/who) introduces relative clauses and agrees with its antecedent in gender and number, while its case depends on its role within the clause."
            }
          },
          {
            "type": "table",
            "title": "Форми \"který\" за родом",
            "rows": [
              [
                "muž, který...",
                "чоловік, який...",
                "чол."
              ],
              [
                "žena, která...",
                "жінка, яка...",
                "жін."
              ],
              [
                "dítě, které...",
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
                "To je kniha, kterou čtu.",
                "Це книга, яку я читаю."
              ],
              [
                "Znám muže, který tam stojí.",
                "Я знаю чоловіка, який там стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-se-sebe",
        "title": "Zvratné zájmeno \"se/sebe\" — A2",
        "titleEn": "Reflexive Pronoun Se/Sebe — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"se\" (коротка форма) чи \"sebe\" (повна форма) позначає, що дія спрямована на самого того, хто її виконує. Не змінюється за особами.",
            "en": {
              "text": "The reflexive pronoun \"se\" (short form) or \"sebe\" (full form) shows that the action is directed back at the doer. It does not change by person."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "mýt se",
                "Myji se.",
                "Я митися/Я мию себе."
              ],
              [
                "vidět sebe",
                "Vidím sebe v zrcadle.",
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
                "On se obléká.",
                "Він одягається."
              ],
              [
                "Myslím jenom na sebe.",
                "Я думаю тільки про себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Neurčitá zájmena — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники утворюються додаванням частки -si чи ně- (хтось, щось, якийсь) до питальних займенників і відмінюються так само, як вони.",
            "en": {
              "text": "Indefinite pronouns are formed by adding the particle -si or ně- (someone, something, some) to interrogative pronouns and decline the same way."
            }
          },
          {
            "type": "table",
            "title": "Питальний → неозначений",
            "rows": [
              [
                "kdo → někdo",
                "хто → хтось"
              ],
              [
                "co → něco",
                "що → щось"
              ],
              [
                "jaký → nějaký",
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
                "Někdo zvoní u dveří.",
                "Хтось дзвонить у двері."
              ],
              [
                "Máš nějaké otázky?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Základní číslovky 1–10 — A1",
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
                "dva / dvě",
                "два/дві",
                "2"
              ],
              [
                "pět",
                "п'ять",
                "5"
              ],
              [
                "deset",
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
                "Mám jednoho bratra.",
                "У мене один брат."
              ],
              [
                "Vidím tři kočky.",
                "Я бачу три коти."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-higher",
        "title": "Základní číslovky od 11 — A2",
        "titleEn": "Cardinal Numbers 11+ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники від 11 до 19 утворюються додаванням -náct до одиниці, десятки — за спеціальними формами (dvacet, třicet...).",
            "en": {
              "text": "Numbers 11-19 are formed by adding -náct to the unit digit; the tens have their own special forms (dvacet, třicet...)."
            }
          },
          {
            "type": "table",
            "title": "11, 20, 100",
            "rows": [
              [
                "jedenáct",
                "одинадцять",
                "11"
              ],
              [
                "dvacet",
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
                "Je mi dvacet let.",
                "Мені двадцять років."
              ],
              [
                "Stojí to sto korun.",
                "Це коштує сто крон."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-genitive",
        "title": "Předložky s genitivem — A2",
        "titleEn": "Prepositions with Genitive — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Багато поширених прийменників завжди керують родовим відмінком: bez (без), do (до), od (від), z/ze (з), kolem (навколо).",
            "en": {
              "text": "Many common prepositions always govern the genitive: bez (without), do (to), od (from), z/ze (from, out of), kolem (around)."
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
                "od kamaráda",
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
                "Piju kávu bez mléka.",
                "Я п'ю каву без молока."
              ],
              [
                "Jdu do práce.",
                "Я йду на роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-accusative",
        "title": "Předložky s akuzativem — A2",
        "titleEn": "Prepositions with Accusative — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники přes (через), pro (для), za (за, в обмін) керують знахідним відмінком.",
            "en": {
              "text": "The prepositions přes (through), pro (for), and za (for, in exchange) govern the accusative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники зі знахідним",
            "rows": [
              [
                "přes",
                "přes most",
                "через мост"
              ],
              [
                "pro",
                "pro tebe",
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
                "Koupil jsem dárek pro mámu.",
                "Я купив подарунок для мами."
              ],
              [
                "Jedeme na dovolenou.",
                "Ми їдемо у відпустку."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-instrumental",
        "title": "Předložky s instrumentálem — A2",
        "titleEn": "Prepositions with Instrumental — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники s/se (з, у значенні супроводу), nad (над), pod (під, без руху), před (перед), mezi (між) керують орудним відмінком.",
            "en": {
              "text": "The prepositions s/se (with), nad (above), pod (under, static), před (in front of), mezi (between) govern the instrumental case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з орудним",
            "rows": [
              [
                "s / se",
                "s kamarádem",
                "з другом"
              ],
              [
                "nad",
                "nad mořem",
                "над морем"
              ],
              [
                "pod",
                "pod stolem",
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
                "Jedeme autobusem.",
                "Ми їдемо автобусом."
              ],
              [
                "Jdu na procházku se psem.",
                "Я йду на прогулянку з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-locative",
        "title": "Předložky s lokálem — A2",
        "titleEn": "Prepositions with Locative — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники v (в, без руху), na (на, без руху), o (про) і při (при) керують місцевим відмінком.",
            "en": {
              "text": "The prepositions v (in, static), na (on, static), o (about), and při (near) govern the locative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з місцевим",
            "rows": [
              [
                "v",
                "v domě",
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
                "Pracuji v bance.",
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
        "title": "Předložky s dativem — B1",
        "titleEn": "Prepositions with Dative — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший прийменник із давальним відмінком — k/ke (до, у напрямку). Також вживається proti (проти) та díky (завдяки).",
            "en": {
              "text": "The most common preposition with the dative is k/ke (toward). Also used are proti (against) and díky (thanks to)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з давальним",
            "rows": [
              [
                "k / ke",
                "jdu k lékaři",
                "йду до лікаря"
              ],
              [
                "díky",
                "díky tobě",
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
                "Díky němu jsem to zvládl.",
                "Завдяки йому я з цим впорався."
              ],
              [
                "Jdeme k moři.",
                "Ми йдемо до моря."
              ]
            ]
          }
        ]
      },
      {
        "id": "two-way-prepositions",
        "title": "Předložky \"v/na\" se dvěma pády — B1",
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
                "Jdu na univerzitu.",
                "Я йду в університет.",
                "рух — акузатив"
              ],
              [
                "Jsem na univerzitě.",
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
                "Vcházím do pokoje.",
                "Я заходжу в кімнату."
              ],
              [
                "Sedím v pokoji.",
                "Я сиджу в кімнаті."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-genitive",
        "title": "Zápor a genitiv — A2",
        "titleEn": "Negation & Genitive — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення приєднується до дієслова префіксом ne-. Після заперечення прямий об'єкт іноді змінюється зі знахідного на родовий, особливо з дієсловом \"mít\" (mít → nemít + genitiv).",
            "en": {
              "text": "Negation attaches to the verb as the prefix ne-. After negation, a direct object sometimes shifts from accusative to genitive, especially with the verb \"mít\" (mít → nemít + genitive)."
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
                "Neznám tu písničku.",
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
            "text": "Чеський порядок слів дуже вільний, оскільки відмінки показують граматичну роль слова незалежно від позиції. Короткі клітики (se, by, jsem) мають тенденцію стояти на другій позиції в реченні.",
            "en": {
              "text": "Czech word order is very flexible because case endings mark a word's grammatical role regardless of position. Short clitics (se, by, jsem) tend to occupy the second position in the clause."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Jan koupil knihu.",
                "Ян купив книгу.",
                "нейтральний"
              ],
              [
                "Knihu koupil Jan.",
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
                "Kávu piju každý den.",
                "Каву я п'ю щодня (акцент на 'каву')."
              ],
              [
                "Každý den piju kávu.",
                "Щодня я п'ю каву (нейтрально)."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Tázací slova — A1",
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
                "Kde jsi?"
              ],
              [
                "kdy?",
                "коли?",
                "Kdy se vrátíš?"
              ],
              [
                "proč?",
                "чому?",
                "Proč pláčeš?"
              ],
              [
                "jak?",
                "як?",
                "Jak se máš?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kde je nádraží?",
                "Де вокзал?"
              ],
              [
                "Proč jsi přišel pozdě?",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Slučovací spojky — A1",
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
                "Já a ty."
              ],
              [
                "ale",
                "але",
                "Chci, ale nemůžu."
              ],
              [
                "nebo",
                "або",
                "Káva nebo čaj?"
              ]
            ]
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
                "Chtěl bych jít, ale nemám čas.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Podřadicí spojky — B1",
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
                "Vím, že přijdeš."
              ],
              [
                "protože",
                "тому що",
                "Nepřišel jsem, protože jsem byl nemocný."
              ],
              [
                "jestli / kdyby",
                "якщо / якби",
                "Jestli máš čas, zavolej."
              ]
            ]
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
                "Zůstanu, kdyby to bylo potřeba.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses",
        "title": "Vedlejší věty vztažné — B1",
        "titleEn": "Relative Clauses — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні означальні речення вводяться займенником \"který\" (який), що узгоджується з означуваним іменником у роді й числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "Relative clauses are introduced by \"který\" (which/who), agreeing with the antecedent in gender and number, while its case is determined by its role in the clause."
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
                "Dům, ve kterém bydlím, je starý.",
                "Будинок, у якому я живу, старий."
              ],
              [
                "To je osoba, o které jsem mluvil.",
                "Це людина, про яку я говорив."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Zvratná slovesa — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів уживаються з часткою \"se\" й мають відмінне значення від дієслова без неї. Se зазвичай стоїть на другій позиції в реченні.",
            "en": {
              "text": "Many verbs take the particle \"se\" and have a different meaning from the plain verb. Se usually occupies the second position of the clause."
            }
          },
          {
            "type": "table",
            "title": "Без se ↔ зі se",
            "rows": [
              [
                "mýt (мити)",
                "mýt se (митися)",
                "себе"
              ],
              [
                "učit (вчити)",
                "učit se (вчитися)",
                "себе"
              ],
              [
                "jmenovat (називати)",
                "jmenovat se (називатися)",
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
                "Jak se jmenuješ?",
                "Як тебе звати?"
              ],
              [
                "Učím se česky.",
                "Я вчу чеську."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Neosobní konstrukce \"třeba/lze\" — A2",
        "titleEn": "Impersonal Modal Constructions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові вирази třeba (треба), lze (можна), musí se (потрібно) вживаються з інфінітивом і не змінюються за особами.",
            "en": {
              "text": "The impersonal expressions třeba (must/need), lze (may/can), musí se (necessary) take the infinitive and never change by person."
            }
          },
          {
            "type": "table",
            "title": "Безособові конструкції",
            "rows": [
              [
                "třeba",
                "Je třeba jít.",
                "Треба йти."
              ],
              [
                "lze",
                "Lze vstoupit?",
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
                "Je třeba koupit chleba.",
                "Треба купити хліб."
              ],
              [
                "Tady se nesmí kouřit.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "masculine-animate-plural-agreement",
        "title": "Shoda v množném čísle (životná/neživotná) — B1",
        "titleEn": "Masculine-Animate Plural Agreement — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "У множині минулого часу й прикметники узгоджуються по-різному: чоловічо-живий рід у множині приймає закінчення -i (з можливим чергуванням приголосного), решта родів — -y/-a.",
            "en": {
              "text": "In the plural, the past tense and adjectives agree differently: masculine-animate takes the ending -i (with possible consonant alternation), while other genders take -y/-a."
            }
          },
          {
            "type": "table",
            "title": "Чоловічо-живий vs решта",
            "rows": [
              [
                "Muži byli v parku.",
                "Чоловіки були в парку.",
                "чол.-жив."
              ],
              [
                "Ženy byly v parku.",
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
                "Studenti psali zkoušku.",
                "Студенти писали екзамен."
              ],
              [
                "Kočky spaly na gauči.",
                "Коти спали на дивані."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Zdrobněliny — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -ek/-ka/-ko, -ík тощо і дуже широко вживаються в повсякденному мовленні, виражаючи не лише розмір, а й теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -ek/-ka/-ko, -ík, and are used extremely widely in everyday speech, expressing not just size but warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "pes (пес)",
                "pejsek",
                "песик"
              ],
              [
                "dům (будинок)",
                "domek",
                "будиночок"
              ],
              [
                "máma",
                "maminka",
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
                "Mám malého pejska.",
                "У мене маленький песик."
              ],
              [
                "Koupila jsem synkovi hračku.",
                "Я купила синочку іграшку."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Dny v týdnu — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "pondělí",
                "понеділок",
                "1"
              ],
              [
                "pátek",
                "п'ятниця",
                "5"
              ],
              [
                "neděle",
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
                "V pondělí mám výuku.",
                "У понеділок у мене заняття."
              ],
              [
                "Dnes je středa.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Měsíce a data — A2",
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
                "leden",
                "січень",
                "01"
              ],
              [
                "červenec",
                "липень",
                "07"
              ],
              [
                "prosinec",
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
                "Dnes je pátého května.",
                "Сьогодні п'яте травня."
              ],
              [
                "Narodil jsem se v prosinci.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Vyjádření času — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Kolik je hodin?\", а відповідь уживає числівник разом зі словом \"hodina\" (година).",
            "en": {
              "text": "To ask the time, Czechs say \"Kolik je hodin?\", and the answer uses the number together with the word \"hodina\" (hour)."
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
                "Je půl třetí.",
                "Половина третьої.",
                "2:30"
              ],
              [
                "Je patnáct hodin.",
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
                "Kolik je hodin?",
                "Котра година?"
              ],
              [
                "Vlak odjíždí v osm.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"ty\" a \"vy\" (formálnost) — A2",
        "titleEn": "Ty vs Vy (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"ty\" (2-га особа однини), для ввічливого/формального — \"vy\" (2-га особа множини), навіть коли звертаються до однієї людини.",
            "en": {
              "text": "For informal address, Czech uses \"ty\" (2nd person singular); for polite/formal address it uses \"vy\" (2nd person plural), even to a single person."
            }
          },
          {
            "type": "table",
            "title": "ty ↔ vy",
            "rows": [
              [
                "Jak se máš?",
                "Як ти? (неформально)",
                "ty"
              ],
              [
                "Jak se máte?",
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
                "Odkud jste?",
                "Звідки Ви?"
              ],
              [
                "Děkuji vám za pomoc.",
                "Дякую Вам за допомогу."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-speech",
        "title": "Nepřímá řeč — B1",
        "titleEn": "Reported Speech — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Непряма мова передається сполучником \"že\" (\"що\") без зміни часу дієслова, на відміну від англійської, де час зазвичай зсувається на один назад.",
            "en": {
              "text": "Reported speech is conveyed with the conjunction \"že\" (\"that\") without shifting the verb tense — unlike English, which usually shifts the tense one step back."
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
                "Řekl, že přijde zítra.",
                "Він сказав, що прийде завтра."
              ],
              [
                "Řekla, že je unavená.",
                "Вона сказала, що втомлена."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-jenz",
        "title": "Knižní vztažné zájmeno \"jenž\" — B2",
        "titleEn": "Literary Relative Pronoun Jenž — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "У книжному, офіційному стилі замість \"který\" іноді вживають старіший займенник \"jenž\", що також узгоджується в роді й числі та відмінюється за відмінками, але звучить більш формально й літературно.",
            "en": {
              "text": "In bookish, formal style, the older pronoun \"jenž\" is sometimes used instead of \"který\" — it also agrees in gender and number and declines by case, but sounds more formal and literary."
            }
          },
          {
            "type": "table",
            "title": "který ↔ jenž",
            "rows": [
              [
                "muž, který přišel",
                "muž, jenž přišel",
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
                "Zákon, jenž byl přijat včera...",
                "Закон, який був прийнятий учора..."
              ],
              [
                "Autor, jehož knihy jsou populární...",
                "Автор, чиї книги популярні..."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Slovotvorné přípony — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Чеська активно утворює нові слова додаванням суфіксів: -ák/-ař (виконавець дії), -ost (абстрактне поняття), -ný/-ový (прикметники від іменників).",
            "en": {
              "text": "Czech actively derives new words with suffixes: -ák/-ař (agent noun), -ost (abstract concept), -ný/-ový (adjectives from nouns)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "pivo (пиво) → pivovar",
                "пивоварня"
              ],
              [
                "rychlý (швидкий) → rychlost",
                "швидкість"
              ],
              [
                "barva (колір) → barevný",
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
                "Rychlost auta byla vysoká.",
                "Швидкість машини була висока."
              ],
              [
                "To je barevný obrázek.",
                "Це кольоровий малюнок."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Kvantifikátory (hodně/málo) — A2",
        "titleEn": "Quantifiers (Hodně/Málo) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "hodně",
                "багато"
              ],
              [
                "málo",
                "мало"
              ],
              [
                "několik",
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
                "Mám hodně přátel.",
                "У мене багато друзів."
              ],
              [
                "Dej mi několik minut.",
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
        "title": "Nepravidelná slovesa — B1",
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
                "jít (йти)",
                "jdu, jdeš, jde",
                "я йду, ти йдеш, він йде"
              ],
              [
                "chtít (хотіти)",
                "chci, chceš, chce",
                "я хочу, ти хочеш, він хоче"
              ],
              [
                "moct (могти)",
                "můžu, můžeš, může",
                "я можу, ти можеш, він може"
              ],
              [
                "vědět (знати)",
                "vím, víš, ví",
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
                "Teď nemůžu mluvit.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Jdu do obchodu, chceš něco?",
                "Я йду в магазин, хочеш щось?"
              ]
            ]
          }
        ]
      },
      {
        "id": "diacritics-vowel-length",
        "title": "Háčky, čárky a délka samohlásek — A2",
        "titleEn": "Diacritics & Vowel Length — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Háček (ˇ) над č/š/ž/ř/ď/ť/ň пом'якшує чи змінює приголосний, а čárka (´) над голосною позначає її довготу — довгота фонематична, тобто змінює значення слова.",
            "en": {
              "text": "The háček (ˇ) over č/š/ž/ř/ď/ť/ň softens or alters a consonant, while the čárka (´) over a vowel marks its length — vowel length is phonemic, meaning it changes a word's meaning."
            }
          },
          {
            "type": "table",
            "title": "Довгота змінює значення",
            "rows": [
              [
                "byt (квартира)",
                "být (бути)",
                "короткий/довгий"
              ],
              [
                "pas (паспорт)",
                "pás (пояс/пасок)",
                "короткий/довгий"
              ],
              [
                "dráha (дорога/траса)",
                "draha (мила, кличний)",
                "довгий/короткий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bydlím v malém bytě.",
                "Я живу в маленькій квартирі."
              ],
              [
                "Chci být lékařem.",
                "Я хочу бути лікарем."
              ]
            ]
          }
        ]
      },
      {
        "id": "syllabic-r-l",
        "title": "Slabikotvorné r a l — B1",
        "titleEn": "Syllabic R and L — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "У чеській приголосні r і l можуть виконувати роль складотворного ядра замість голосного — звідси відомі слова без жодної голосної, як \"vlk\" (вовк), \"prst\" (палець), \"smrt\" (смерть), \"čtvrtek\" (четвер).",
            "en": {
              "text": "In Czech, the consonants r and l can act as the syllable nucleus in place of a vowel — hence the famous words with no vowel at all, like \"vlk\" (wolf), \"prst\" (finger), \"smrt\" (death), \"čtvrtek\" (Thursday)."
            }
          },
          {
            "type": "table",
            "title": "Слова без голосних",
            "rows": [
              [
                "vlk",
                "вовк",
                "l як ядро складу"
              ],
              [
                "prst",
                "палець",
                "r як ядро складу"
              ],
              [
                "čtvrtek",
                "четвер",
                "r як ядро складу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "V lese žije vlk.",
                "У лісі живе вовк."
              ],
              [
                "Dnes je čtvrtek.",
                "Сьогодні четвер."
              ]
            ]
          }
        ]
      }
    ]
  }
];
