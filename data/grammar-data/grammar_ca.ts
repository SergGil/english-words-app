// Vymova — data/grammar-data/grammar_ca.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronoms personals — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Каталанська — окрема романська мова, близька до окситанської, а не діалект іспанської чи французької.",
            "en": {
              "text": "Catalan is a distinct Romance language, close to Occitan, not a dialect of Spanish or French."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jo"
              ],
              [
                "ти (зв. / ввічл.)",
                "tu / vostè"
              ],
              [
                "він / вона",
                "ell / ella"
              ],
              [
                "ми",
                "nosaltres"
              ],
              [
                "ви",
                "vosaltres"
              ],
              [
                "вони (ч./ж.)",
                "ells / elles"
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
        "id": "to-be-ser-estar",
        "title": "Два дієслова \"бути\": ser/estar — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Ser вживають для сталих ознак (професія, характер), а estar — для тимчасового стану чи місцезнаходження, як в іспанській і португальській.",
            "en": {
              "text": "Ser is used for permanent traits (profession, character), while estar is used for temporary states or location, like in Spanish and Portuguese."
            }
          },
          {
            "type": "formula",
            "title": "ser/estar + присудок",
            "rows": [
              [
                "Jo",
                "sóc mestre.",
                "Я вчитель (сталість, ser)."
              ],
              [
                "Ell",
                "està cansat.",
                "Він втомлений (тимчасовий стан, estar)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ella és metgessa.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "Two \"To Be\" Verbs: Ser/Estar — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"no\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою no, яка ставиться перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle no, placed before the verb."
            }
          },
          {
            "type": "formula",
            "title": "no + дієслово",
            "rows": [
              [
                "Ho sé.",
                "No ho sé.",
                "Я це знаю. → Я цього не знаю."
              ],
              [
                "Ha vingut.",
                "No ha vingut.",
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
                "No ho entenc.",
                "Я цього не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation with No — A1"
      },
      {
        "id": "questions",
        "title": "Питання — інтонація й частка \"que\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією без зміни порядку слів; необов'язкова частка que на початку речення надає розмовного відтінку.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, without changing word order; the optional particle que at the start adds a colloquial shade."
            }
          },
          {
            "type": "formula",
            "title": "(Que) + твердження?",
            "rows": [
              [
                "Estàs cansat.",
                "Estàs cansat?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Vindrà.",
                "Que vindrà?",
                "Вона прийде. → Вона прийде? (розмовно)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tens gana?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Intonation & the Particle Que — A1"
      },
      {
        "id": "periphrastic-past-anar",
        "title": "Перифрастичний минулий час (anar + інфінітив) — A2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших романських мов, звичайний простий минулий час у розмовній каталанській утворюється не власне минулою формою, а теперішнім часом дієслова anar (\"йти\") плюс інфінітив — граматикалізована конструкція, де \"я йду говорити\" означає \"я сказав\".",
            "en": {
              "text": "Unlike other Romance languages, the ordinary simple past in spoken Catalan isn't formed with an actual past form but with the present tense of anar (\"to go\") plus the infinitive — a grammaticalized construction where \"I go to speak\" means \"I spoke\"."
            }
          },
          {
            "type": "formula",
            "title": "vaig/vas/va + інфінітив",
            "rows": [
              [
                "Jo",
                "vaig parlar.",
                "я сказав/говорив"
              ],
              [
                "Ella",
                "va arribar.",
                "вона прибула"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ahir vam menjar junts.",
                "Учора ми разом поїли."
              ]
            ]
          }
        ],
        "titleEn": "Periphrastic Past (Anar + Infinitive) — A2"
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
        "title": "Теперішній час — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, за трьома дієвідмінами (-ar, -re/-er, -ir).",
            "en": {
              "text": "The present tense is formed with personal endings added to the verb stem, across three conjugation classes (-ar, -re/-er, -ir)."
            }
          },
          {
            "type": "formula",
            "title": "\"parlar\" (говорити) — теперішній",
            "rows": [
              [
                "jo",
                "parlo",
                "я говорю"
              ],
              [
                "tu",
                "parles",
                "ти говориш"
              ],
              [
                "ell",
                "parla",
                "він говорить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nosaltres mengem junts.",
                "Ми їмо разом."
              ],
              [
                "Ells treballen molt.",
                "Вони багато працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "periphrastic-past-deep",
        "title": "Перифрастичний минулий — повна парадигма — B1",
        "titleEn": "Periphrastic Past — Full Paradigm — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне anar відмінюється лише для минулого часу (vaig, vas, va, vam, vau, van) — це особлива, скорочена парадигма, не збіжна з дійсним теперішнім часом дієслова anar (\"йти\").",
            "en": {
              "text": "The auxiliary anar conjugates only for this past tense (vaig, vas, va, vam, vau, van) — a special, shortened paradigm, not the same as anar's actual present tense (\"to go\")."
            }
          },
          {
            "type": "table",
            "title": "Повна парадигма",
            "rows": [
              [
                "jo vaig / tu vas / ell va",
                "форми допоміжного дієслова"
              ],
              [
                "nosaltres vam / vosaltres vau / ells van",
                "форми допоміжного дієслова"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vam veure la pel·lícula.",
                "Ми подивилися фільм."
              ],
              [
                "Van marxar aviat.",
                "Вони поїхали рано."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect-past",
        "title": "Минулий незавершений час — A2",
        "titleEn": "Imperfect Past — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий незавершений час виражає тривалу чи звичну дію в минулому й утворюється закінченнями -ava/-ia, доданими до основи.",
            "en": {
              "text": "The imperfect past expresses an ongoing or habitual past action, formed with the endings -ava/-ia added to the stem."
            }
          },
          {
            "type": "formula",
            "title": "\"parlar\" — незавершений минулий",
            "rows": [
              [
                "jo",
                "parlava",
                "я говорив (тривало)"
              ],
              [
                "tu",
                "parlaves",
                "ти говорив"
              ],
              [
                "ell",
                "parlava",
                "він говорив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "De petit jugava al carrer.",
                "У дитинстві я гуляв на вулиці."
              ],
              [
                "Sempre menjàvem junts.",
                "Ми завжди їли разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past-synthetic-literary",
        "title": "Синтетичний минулий (літературний) — B2",
        "titleEn": "Synthetic Past (Literary) — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Крім розмовної перифрастичної форми, існує і \"справжня\" синтетична форма простого минулого (-í/-eres/-à), але в живому мовленні майже не вживається, лишаючись переважно в літературі й офіційних текстах.",
            "en": {
              "text": "Besides the colloquial periphrastic form, a \"true\" synthetic simple past also exists (-í/-eres/-à), but it's almost never used in live speech, surviving mostly in literature and formal texts."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "parlà (літературно)",
                "vs. va parlar (розмовно) — те саме значення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El rei nasqué l'any 1500.",
                "Король народився 1500 року (літературний стиль)."
              ],
              [
                "Arribaren de matinada.",
                "Вони прибули на світанку (літературний стиль)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "titleEn": "Future Tense — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється закінченнями, доданими прямо до інфінітива дієслова.",
            "en": {
              "text": "The future tense is formed with endings added directly to the verb's infinitive."
            }
          },
          {
            "type": "formula",
            "title": "інфінітив + закінчення",
            "rows": [
              [
                "jo",
                "parlaré",
                "я говоритиму"
              ],
              [
                "tu",
                "parlaràs",
                "ти говоритимеш"
              ],
              [
                "ell",
                "parlarà",
                "він говоритиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Demà vindrem.",
                "Завтра ми прийдемо."
              ],
              [
                "Ells treballaran.",
                "Вони працюватимуть."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється тими самими основами, що й майбутній час, плюс закінчення -ia/-ies.",
            "en": {
              "text": "The conditional is formed from the same stems as the future, plus the endings -ia/-ies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "M'agradaria venir.",
                "Я б хотів прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ell vindria si pogués.",
                "Він прийшов би, якби міг."
              ],
              [
                "Nosaltres ajudaríem.",
                "Ми б допомогли."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для 2-ї особи однини має власне закінчення, часто збіжне з формою кон'юнктива для ввічливої форми.",
            "en": {
              "text": "The imperative for the 2nd person singular has its own ending, often matching the subjunctive form for the polite address."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Parla!",
                "Говори!"
              ],
              [
                "Parleu!",
                "Говоріть! (мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Seu, si us plau.",
                "Сідай, будь ласка."
              ],
              [
                "Tanca la porta!",
                "Зачини двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-present",
        "title": "Кон'юнктив теперішній — B1",
        "titleEn": "Present Subjunctive — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив теперішній вживається після дієслів бажання, сумніву чи в підрядних реченнях мети, утворюється власним рядом закінчень.",
            "en": {
              "text": "The present subjunctive is used after verbs of wish, doubt, or in purpose clauses, formed with its own set of endings."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vull que vinguis.",
                "Я хочу, щоб ти прийшов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Espero que ho entenguis.",
                "Сподіваюся, ти це зрозумієш."
              ],
              [
                "Cal que estudiïs.",
                "Тобі треба вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-imperfect",
        "title": "Кон'юнктив минулий — B2",
        "titleEn": "Imperfect Subjunctive — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив минулого часу вживається в гіпотетичних умовних реченнях і після дієслів бажання в минулому часі, утворюється закінченнями -és/-esis.",
            "en": {
              "text": "The imperfect subjunctive is used in hypothetical conditional clauses and after past-tense wish verbs, formed with the endings -és/-essis."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Si vinguessis, series feliç.",
                "Якби ти прийшов, ти був би щасливий."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "M'agradaria que vinguessis.",
                "Я хотів би, щоб ти прийшов."
              ],
              [
                "Si sabés, ho diria.",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense-haver",
        "title": "Перфект (haver + дієприкметник) — A2",
        "titleEn": "Perfect Tense (Haver + Participle) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється допоміжним дієсловом haver (мати) плюс дієприкметник минулого часу, як в іспанській чи французькій.",
            "en": {
              "text": "The perfect is formed with the auxiliary haver (to have) plus the past participle, like in Spanish or French."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "He menjat.",
                "Я вже поїв."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ha arribat tard.",
                "Він/вона прибув(-ла) пізно."
              ],
              [
                "Hem acabat la feina.",
                "Ми закінчили роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect",
        "title": "Давноминулий час — B1",
        "titleEn": "Pluperfect — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час поєднує ту саму конструкцію з допоміжним дієсловом у минулому незавершеному часі.",
            "en": {
              "text": "The pluperfect combines the same construction with the auxiliary in the imperfect past."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Havia menjat abans d'anar-hi.",
                "Я вже поїв, перш ніж туди піти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Havia arribat abans que jo.",
                "Він прибув раніше за мене (до того)."
              ],
              [
                "Ja havíem acabat.",
                "Ми вже закінчили (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "gerund-progressive",
        "title": "Тривала дія (estar + герундій) — A2",
        "titleEn": "Progressive (Estar + Gerund) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"саме зараз\" виражається дієсловом estar плюс герундій (форма на -ant/-ent/-int).",
            "en": {
              "text": "The \"right now\" progressive is expressed with the verb estar plus the gerund (a form ending in -ant/-ent/-int)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Estic menjant.",
                "Я саме їм."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Estàs treballant.",
                "Ти саме працюєш."
              ],
              [
                "Estan jugant al parc.",
                "Вони саме граються в парку."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronominal-verbs",
        "title": "Зворотні (займенникові) дієслова — B1",
        "titleEn": "Reflexive (Pronominal) Verbs — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова приєднують клітичний займенник (em/et/es/ens/us/es) перед дієсловом; форма дещо змінюється залежно від наступного звука.",
            "en": {
              "text": "Reflexive verbs attach a clitic pronoun (em/et/es/ens/us/es) before the verb; the form shifts slightly depending on the following sound."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "rentar (мити)",
                "rentar-se",
                "митися"
              ],
              [
                "Em rento.",
                "Я миюся."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Es vesteix ràpid.",
                "Він швидко одягається."
              ],
              [
                "Ens llevem d'hora.",
                "Ми рано встаємо."
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
        "id": "definite-article-el-la",
        "title": "Означений артикль el/la/els/les — A1",
        "titleEn": "Definite Article El/La/Els/Les — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "el llibre (ч.р. одн.)",
                "книга"
              ],
              [
                "la casa (ж.р. одн.)",
                "дім"
              ],
              [
                "els llibres / les cases (мн.)",
                "книги / доми"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El llibre és meu.",
                "Книга моя."
              ],
              [
                "Les cases són grans.",
                "Доми великі."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article-salat-dialectal",
        "title": "Артикль \"salat\" (es/sa) — балеарський діалект — B1",
        "titleEn": "The \"Salat\" Article (Es/Sa) — Balearic Dialect — B1",
        "emoji": "🏝️",
        "sections": [
          {
            "type": "intro",
            "text": "У балеарському діалекті (Мальорка, Менорка) стандартні el/la часто замінюються унікальним артиклем es/sa, що походить від латинського ipse, а не ille — риса, відсутня в жодному іншому романському стандарті.",
            "en": {
              "text": "In the Balearic dialect (Mallorca, Menorca), the standard el/la is often replaced with the unique article es/sa, descended from Latin ipse rather than ille — a trait absent from any other Romance standard."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "es llibre (= el llibre)",
                "книга (балеарський)"
              ],
              [
                "sa casa (= la casa)",
                "дім (балеарський)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Es llibre és meu.",
                "Книга моя (балеарський)."
              ],
              [
                "Sa casa és gran.",
                "Дім великий (балеарський)."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-article",
        "title": "Неозначений артикль un/una — A1",
        "titleEn": "Indefinite Article Un/Una — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "un llibre",
                "якась книга"
              ],
              [
                "una casa",
                "якийсь дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tinc un gos.",
                "У мене є собака."
              ],
              [
                "És una mestra.",
                "Вона вчителька."
              ]
            ]
          }
        ]
      },
      {
        "id": "contracted-articles-al-del",
        "title": "Стягнені форми al/del — A2",
        "titleEn": "Contracted Forms Al/Del — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники a і de обов'язково стягуються з артиклем el в al і del.",
            "en": {
              "text": "The prepositions a and de must contract with the article el into al and del."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "a + el → al",
                "до (місця)"
              ],
              [
                "de + el → del",
                "з (місця)/чийсь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vaig al mercat.",
                "Я йду на ринок."
              ],
              [
                "Vinc del poble.",
                "Я приїхав із села."
              ]
            ]
          }
        ]
      },
      {
        "id": "gender-two-way",
        "title": "Два роди: чоловічий/жіночий — A1",
        "titleEn": "Two Genders: Masculine/Feminine — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "el noi (хлопець)",
                "чоловічий"
              ],
              [
                "la noia (дівчина)",
                "жіночий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El noi és alt.",
                "Хлопець високий."
              ],
              [
                "La noia és alta.",
                "Дівчина висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Множина (-s) — A1",
        "titleEn": "Plural Formation (-S) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "llibre (книга)",
                "llibres",
                "книги"
              ],
              [
                "casa (дім)",
                "cases",
                "доми"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Els llibres són bons.",
                "Книги хороші."
              ],
              [
                "Les cases són noves.",
                "Доми нові."
              ]
            ]
          }
        ]
      },
      {
        "id": "weak-pronoun-en",
        "title": "Клітичний займенник \"en\" (партитив) — B1",
        "titleEn": "The Clitic Pronoun \"En\" (Partitive) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний займенник en замінює конструкцію \"de + іменник\" (частину чогось, звідки, про що) — не має прямого аналогу в українській.",
            "en": {
              "text": "The clitic pronoun en replaces a \"de + noun\" construction (a part of something, from where, about what) — it has no direct equivalent in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vull pa.",
                "Я хочу хліба."
              ],
              [
                "En vull.",
                "Я хочу (цього — хліба, замінено на en)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quants en tens?",
                "Скільки їх (цього) у тебе є?"
              ],
              [
                "Me'n vaig.",
                "Я звідси йду."
              ]
            ]
          }
        ]
      },
      {
        "id": "weak-pronoun-hi",
        "title": "Клітичний займенник \"hi\" (місце/непрямий) — B1",
        "titleEn": "The Clitic Pronoun \"Hi\" (Location/Oblique) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний займенник hi замінює місце (\"туди/там\") чи непрямий додаток з прийменником a/en, крім особи.",
            "en": {
              "text": "The clitic pronoun hi replaces a place (\"there/to there\") or an oblique object with the preposition a/en, other than a person."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vaig a Barcelona.",
                "Я їду до Барселони."
              ],
              [
                "Hi vaig.",
                "Я туди їду (hi = до Барселони)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hi penso sovint.",
                "Я часто про це думаю."
              ],
              [
                "No hi crec.",
                "Я в це не вірю."
              ]
            ]
          }
        ]
      },
      {
        "id": "neuter-pronoun-ho",
        "title": "Нейтральний займенник \"ho\" — B1",
        "titleEn": "The Neuter Pronoun \"Ho\" — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Нейтральний ho замінює абстрактну ідею, ціле речення чи невизначений об'єкт, а не конкретний іменник чоловічого чи жіночого роду.",
            "en": {
              "text": "The neuter ho replaces an abstract idea, a whole clause, or an unspecified object, rather than a specific masculine or feminine noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "No ho sé.",
                "Я цього не знаю (не конкретна річ)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ho entenc.",
                "Я це розумію."
              ],
              [
                "Ja t'ho vaig dir.",
                "Я вже тобі це казав."
              ]
            ]
          }
        ]
      },
      {
        "id": "clitic-combination-rules",
        "title": "Комбінування клітичних займенників — B2",
        "titleEn": "Combining Clitic Pronouns — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька клітичних займенників можуть поєднуватись в один блок за строгими правилами скорочення й порядку (наприклад, me'n, te'l, els hi), утворюючи знамениту складну систему каталанських клітик.",
            "en": {
              "text": "Several clitic pronouns can combine into one block following strict rules of contraction and order (e.g. me'n, te'l, els hi), forming the famously complex Catalan clitic system."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "me + en → me'n",
                "мені + звідти/цього"
              ],
              [
                "te + el → te'l",
                "тобі + його"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Te'l dono.",
                "Я тобі його даю."
              ],
              [
                "Me'n vaig a casa.",
                "Я йду звідси додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-with-article",
        "title": "Присвійні з обов'язковим артиклем — A2",
        "titleEn": "Possessives with a Mandatory Article — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської, присвійний займенник у каталанській зазвичай іде РАЗОМ з означеним артиклем перед іменником — обидва слова обов'язкові.",
            "en": {
              "text": "Unlike Spanish, the possessive in Catalan usually goes TOGETHER with the definite article before the noun — both words are mandatory."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "el meu llibre",
                "моя книга (артикль + присвійний)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La teva casa és bonica.",
                "Твій дім гарний."
              ],
              [
                "Els seus fills estudien.",
                "Її діти навчаються."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (aquest/aquell) — A1",
        "titleEn": "Demonstratives (Aquest/Aquell) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "aquest llibre",
                "ця книга"
              ],
              [
                "aquell llibre",
                "та книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aquest és meu.",
                "Це моє."
              ],
              [
                "Aquella muntanya és molt alta.",
                "Та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-que",
        "title": "Відносний займенник \"que\" — B1",
        "titleEn": "Relative Pronoun \"Que\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник que (\"який/що\") вводить підрядне означальне речення й не змінюється за родом чи числом.",
            "en": {
              "text": "The relative pronoun que (\"who/which/that\") introduces a relative clause and doesn't change for gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "l'home que va venir",
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
                "El llibre que llegeixes és bo.",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "La casa on visc és vella.",
                "Дім, у якому я живу, старий."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні слова — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "qui",
                "хто"
              ],
              [
                "què",
                "що"
              ],
              [
                "on",
                "де"
              ],
              [
                "quan",
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
                "Com et dius?",
                "Як тебе звати?"
              ],
              [
                "On vius?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronouns",
        "title": "Зворотні займенники — A2",
        "titleEn": "Reflexive Pronouns — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "em",
                "себе (я)"
              ],
              [
                "es",
                "себе (він/вона/вони)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Em miro al mirall.",
                "Я дивлюся на себе в дзеркало."
              ],
              [
                "Es coneixen bé.",
                "Вони добре знають один одного."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (més/el més) — A2",
        "titleEn": "Comparative & Superlative (Més/El Més) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом més (більш) перед прикметником, найвищий — артиклем + més.",
            "en": {
              "text": "The comparative is formed with the word més (more) before the adjective, the superlative with the article + més."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "gran (великий)",
                "més gran",
                "більший"
              ],
              [
                "gran (великий)",
                "el més gran",
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
                "Aquesta casa és més gran.",
                "Цей дім більший."
              ],
              [
                "Ell és el més intel·ligent.",
                "Він найрозумніший."
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
                "u/un",
                "1"
              ],
              [
                "dos/dues",
                "2"
              ],
              [
                "tres",
                "3"
              ],
              [
                "deu",
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
                "Tinc dues germanes.",
                "У мене дві сестри."
              ],
              [
                "Han vingut deu persones.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-agreement",
        "title": "Узгодження числівника \"dos/dues\" за родом — A2",
        "titleEn": "Number Agreement of \"Dos/Dues\" — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості числівників, \"два\" — це єдиний числівник, що узгоджується за родом: dos (ч.р.) / dues (ж.р.).",
            "en": {
              "text": "Unlike most numerals, \"two\" is the one numeral that agrees in gender: dos (masc.) / dues (fem.)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dos nois",
                "два хлопці"
              ],
              [
                "dues noies",
                "дві дівчини"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tinc dos gats.",
                "У мене два коти."
              ],
              [
                "Tinc dues gates.",
                "У мене дві кішки."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-prepositions-overview",
        "title": "Прийменники — A2",
        "titleEn": "Prepositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "a",
                "в, у, до"
              ],
              [
                "en",
                "в (усередині)"
              ],
              [
                "sobre",
                "на"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El llibre és sobre la taula.",
                "Книга на столі."
              ],
              [
                "Vaig a l'escola.",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible-clitic",
        "title": "Гнучкий порядок слів з клітиками — B1",
        "titleEn": "Flexible Word Order with Clitics — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний займенник стоїть перед відмінюваним дієсловом, але ПІСЛЯ інфінітива, герундія чи наказового способу, приєднуючись до нього дефісом.",
            "en": {
              "text": "A clitic pronoun stands before a conjugated verb, but AFTER an infinitive, gerund, or imperative, attaching to it with a hyphen."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "El vull veure.",
                "Я хочу його побачити (перед відмін. дієсловом)."
              ],
              [
                "Vull veure'l.",
                "Я хочу його побачити (після інфінітива)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dona-m'ho!",
                "Дай мені це! (наказовий + клітики)"
              ],
              [
                "No m'ho donis.",
                "Не давай мені цього."
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
                "i",
                "і, та"
              ],
              [
                "però",
                "але"
              ],
              [
                "o",
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
                "Tu i jo som amics.",
                "Я і ти — друзі."
              ],
              [
                "Vull anar-hi, però no tinc temps.",
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
                "perquè",
                "тому що"
              ],
              [
                "si",
                "якщо"
              ],
              [
                "quan",
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
                "Estic content perquè has vingut.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Quan tingui temps, trucaré.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова (poder/haver de) — A2",
        "titleEn": "Modal Verbs (Poder/Haver De) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Puc nedar.",
                "Я вмію плавати."
              ],
              [
                "Haig d'anar-hi.",
                "Мені треба туди йти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Has d'estudiar.",
                "Тобі треба вчитися."
              ],
              [
                "Vull ajudar.",
                "Я хочу допомогти."
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
                "molt",
                "багато"
              ],
              [
                "poc",
                "мало"
              ],
              [
                "alguns",
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
                "Tinc molts llibres.",
                "У мене багато книг."
              ],
              [
                "Dóna'm una mica d'aigua.",
                "Дай мені трохи води."
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
                "dilluns",
                "понеділок"
              ],
              [
                "dissabte",
                "субота"
              ],
              [
                "diumenge",
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
                "Avui és dilluns.",
                "Сьогодні понеділок."
              ],
              [
                "Descanso els diumenges.",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-particle-que-optional",
        "title": "Частка \"que\" в питаннях — детально — B1",
        "titleEn": "The Particle \"Que\" in Questions — In Depth — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французького est-ce que, каталанська частка que перед питанням необов'язкова й вживається переважно в розмовному, дружньому регістрі, а не як формальне граматичне правило.",
            "en": {
              "text": "Unlike French est-ce que, the Catalan particle que before a question is optional and used mostly in a casual, friendly register, rather than as a formal grammatical rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Que vols venir?",
                "Ти хочеш прийти? (дружньо, розмовно)"
              ],
              [
                "Vols venir?",
                "Ти хочеш прийти? (нейтрально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Que t'agrada el cafè?",
                "Тобі подобається кава?"
              ],
              [
                "Que fa fred avui?",
                "Сьогодні холодно?"
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
                "gener",
                "січень"
              ],
              [
                "maig",
                "травень"
              ],
              [
                "desembre",
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
                "El meu aniversari és al maig.",
                "Мій день народження в травні."
              ],
              [
                "Avui és deu de gener.",
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
                "Quina hora és?",
                "Котра година?"
              ],
              [
                "Són les tres.",
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
                "Ens veiem a les sis.",
                "Зустрінемось о шостій."
              ],
              [
                "Ara és migdia.",
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
                "Hola",
                "Привіт"
              ],
              [
                "Gràcies",
                "Дякую"
              ],
              [
                "Adéu",
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
                "Com estàs?",
                "Як справи?"
              ],
              [
                "Moltes gràcies.",
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
                "Fa sol.",
                "Сонячно."
              ],
              [
                "Plou.",
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
                "Avui fa fred.",
                "Сьогодні холодно."
              ],
              [
                "Fa molta calor.",
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
                "fer el cor fort",
                "набратися сміливості (буквально: зробити серце сильним)"
              ],
              [
                "tocar el dos",
                "піти геть (розмовно)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vaig fer el cor fort i vaig parlar.",
                "Я набрався сміливості й заговорив."
              ],
              [
                "Va tocar el dos sense dir res.",
                "Він пішов геть, нічого не сказавши."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Прислівники (-ment) — A2",
        "titleEn": "Adverbs (-Ment) — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються суфіксом -ment, доданим до жіночої форми прикметника.",
            "en": {
              "text": "Manner adverbs are often formed with the suffix -ment, added to the feminine form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ràpida (швидка)",
                "ràpidament",
                "швидко"
              ],
              [
                "lenta (повільна)",
                "lentament",
                "повільно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Corre ràpidament.",
                "Він швидко бігає."
              ],
              [
                "Parla més lentament.",
                "Говори повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Словотвірні суфікси — B1",
        "titleEn": "Word-Formation Suffixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "-tat",
                "утворює абстрактні іменники (lliure→llibertat, вільний→свобода)"
              ],
              [
                "-dor/-dora",
                "утворює назви професій (treballar→treballador, працювати→робітник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La llibertat és important.",
                "Свобода важлива."
              ],
              [
                "Ell és treballador.",
                "Він робітник."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words",
        "title": "Складні слова — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "para (зупиняти) + aigües (води)",
                "paraigües (парасолька)"
              ],
              [
                "porta (носити) + monedes (монети)",
                "portamonedes (гаманець)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "El meu paraigües és blau.",
                "Моя парасолька синя."
              ],
              [
                "He perdut el portamonedes.",
                "Я загубив гаманець."
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
                "primavera",
                "весна"
              ],
              [
                "estiu",
                "літо"
              ],
              [
                "tardor",
                "осінь"
              ],
              [
                "hivern",
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
                "A l'estiu fa calor.",
                "Влітку жарко."
              ],
              [
                "M'agrada la tardor.",
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
                "Quant costa?",
                "Скільки коштує?"
              ],
              [
                "Costa mil euros.",
                "Коштує тисячу євро."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aquest llibre costa vint euros.",
                "Ця книга коштує двадцять євро."
              ],
              [
                "És molt car.",
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
                "Crec que...",
                "Я думаю, що..."
              ],
              [
                "Al meu parer...",
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
                "Crec que tens raó.",
                "Я думаю, що ти правий."
              ],
              [
                "Al meu parer, és una bona idea.",
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
                "avui / demà / ahir",
                "сьогодні / завтра / вчора"
              ],
              [
                "ara / després",
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
                "Ens veiem demà.",
                "Побачимось завтра."
              ],
              [
                "Ara estic ocupat.",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "algú",
                "хтось"
              ],
              [
                "alguna cosa",
                "щось"
              ],
              [
                "ningú",
                "ніхто"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Algú m'ha trucat.",
                "Хтось мені подзвонив."
              ],
              [
                "He sentit alguna cosa.",
                "Я щось почув."
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
                "Ei!",
                "Ой!"
              ],
              [
                "Genial!",
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
                "Ei, que bonic!",
                "Ой, як гарно!"
              ],
              [
                "Genial, bones notícies!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-hi-ha",
        "title": "Конструкція \"є/немає\" (hi ha) — A2",
        "titleEn": "Existential \"There Is/Isn't\" (Hi Ha) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається незмінною конструкцією hi ha (буквально: там має), однаковою для однини й множини.",
            "en": {
              "text": "The existence of something is expressed with the invariant construction hi ha (literally: there has), the same for singular and plural."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Hi ha aigua.",
                "Є вода."
              ],
              [
                "No hi ha temps.",
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
                "Hi ha molta gent aquí.",
                "Тут багато людей."
              ],
              [
                "No hi ha cap botiga aquí.",
                "Тут немає жодного магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-et/-eta) — B1",
        "titleEn": "Diminutives (-Et/-Eta) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "casa (дім)",
                "caseta",
                "будиночок"
              ],
              [
                "gos (собака)",
                "gosset",
                "собачка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quina caseta més bonica!",
                "Який гарний будиночок!"
              ],
              [
                "El gosset és molt maco.",
                "Собачка дуже милий."
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
                "senyor",
                "пан"
              ],
              [
                "senyora",
                "пані"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bon dia, senyor.",
                "Доброго дня, пане."
              ],
              [
                "Perdoni, senyora.",
                "Вибачте, пані."
              ]
            ]
          }
        ]
      },
      {
        "id": "proverbs-sayings",
        "title": "Прислів'я — B2",
        "titleEn": "Proverbs — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "A qui matina, Déu l'ajuda.",
                "Хто рано встає, тому Бог помагає."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Val més tard que mai.",
                "Краще пізно, ніж ніколи."
              ],
              [
                "Qui no arrisca, no pisca.",
                "Хто не ризикує, той не досягає (кот ловить рибу, якщо ризикує)."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-occitan-arabic",
        "title": "Запозичення з окситанської та арабської — B1",
        "titleEn": "Loanwords from Occitan & Arabic — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Каталанська близько споріднена з окситанською й обмінялась з нею лексикою, а також, як і іспанська, зберегла шар слів з арабської доби мусульманської Іберії.",
            "en": {
              "text": "Catalan is closely related to Occitan and exchanged vocabulary with it, and like Spanish, retains a layer of words from the Arabic era of Muslim Iberia."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "síquia (з араб.)",
                "зрошувальний канал"
              ],
              [
                "sucre (з араб., через окситанську)",
                "цукор"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vull sucre al cafè.",
                "Хочу цукор у каву."
              ],
              [
                "La síquia porta aigua al camp.",
                "Канал приносить воду на поле."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-position",
        "title": "Узгодження й позиція прикметника — A2",
        "titleEn": "Adjective Agreement & Position — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником за родом і числом і зазвичай стоять після іменника, хоча деякі поширені прикметники можуть стояти й перед ним.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number and usually stand after it, though some common adjectives can also precede it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "un cotxe vermell",
                "червона машина"
              ],
              [
                "una bona idea",
                "гарна ідея (перед іменником)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tinc un gat negre.",
                "У мене чорний кіт."
              ],
              [
                "És una bona notícia.",
                "Це гарна новина."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Порядкові числівники — A2",
        "titleEn": "Ordinal Numerals — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "primer",
                "перший"
              ],
              [
                "segon",
                "другий"
              ],
              [
                "tercer",
                "третій"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aquest és el meu primer llibre.",
                "Це моя перша книга."
              ],
              [
                "Va quedar en segon lloc.",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "apostrophation-rules",
        "title": "Апостроф перед голосною (l'/d') — A2",
        "titleEn": "Apostrophe Before a Vowel (L'/D') — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Артикль el/la та прийменник de обов'язково стягуються апострофом перед іменником, що починається на голосну.",
            "en": {
              "text": "The article el/la and the preposition de must contract with an apostrophe before a noun starting with a vowel."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "el + amic → l'amic",
                "друг (означ.)"
              ],
              [
                "de + amic → d'amic",
                "друга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "L'amic meu és aquí.",
                "Мій друг тут."
              ],
              [
                "És la casa d'una amiga.",
                "Це дім подруги."
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
                "Mare!",
                "Мамо!"
              ],
              [
                "Escolta, Joan!",
                "Слухай, Жоане!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mare, vine aquí!",
                "Мамо, іди сюди!"
              ],
              [
                "Senyor, ajudi'm.",
                "Пане, допоможіть мені."
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
        "id": "periphrastic-past-history",
        "title": "Історія перифрастичного минулого — унікальність каталанської — B2",
        "titleEn": "The History of the Periphrastic Past — Uniquely Catalan — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Жодна інша романська мова не перетворила дієслово \"йти\" на звичайний маркер минулого часу так системно, як каталанська — це унікальна граматикалізація, що виникла в середньовіччі й повністю витіснила синтетичний минулий час із розмовної мови.",
            "en": {
              "text": "No other Romance language turned the verb \"to go\" into a regular past-tense marker as systematically as Catalan — this is a unique grammaticalization that arose in the Middle Ages and has completely displaced the synthetic past from spoken language."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "каталанська: vaig parlar",
                "\"йду говорити\" = я сказав"
              ],
              [
                "іспанська: hablé (синтетична форма)",
                "інший механізм для того самого значення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vam anar al cinema.",
                "Ми пішли в кіно."
              ],
              [
                "Vas dir la veritat.",
                "Ти сказав правду."
              ]
            ]
          }
        ]
      },
      {
        "id": "valencian-balearic-dialectal-divergence",
        "title": "Валенсійський і балеарський варіанти — B2",
        "titleEn": "Valencian & Balearic Varieties — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Валенсійський варіант (Valencia) і балеарський (Mallorca/Menorca) мають власні лексичні й граматичні особливості — наприклад, валенсійський зберігає деякі архаїчні форми теперішнього часу, і в самій Валенсії триває суспільна дискусія про статус \"валенсійської\" як окремої назви цієї ж мови.",
            "en": {
              "text": "Valencian (Valencia) and Balearic (Mallorca/Menorca) varieties have their own lexical and grammatical quirks — for instance, Valencian preserves some archaic present-tense forms, and within Valencia itself there's an ongoing social debate about \"Valencian\" as a separate name for this same language."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Стандарт: jo parlo",
                "я говорю"
              ],
              [
                "Валенсійський: jo parle",
                "я говорю (архаїчна форма -e)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jo parle valencià.",
                "Я говорю валенсійською."
              ],
              [
                "A Mallorca diuen \"al·lot\" per \"noi\".",
                "На Мальорці кажуть \"al·lot\" замість \"noi\" (хлопець)."
              ]
            ]
          }
        ]
      },
      {
        "id": "ela-geminada",
        "title": "Літера \"ela geminada\" (l·l) — унікальний знак — B1",
        "titleEn": "The Letter \"Ela Geminada\" (L·L) — a Unique Character — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Каталанська має унікальний орфографічний знак — крапку посередині (punt volat) між двома l, що позначає подвоєне l (геміновану приголосну), і не зустрічається в жодному іншому алфавіті романських мов.",
            "en": {
              "text": "Catalan has a unique orthographic mark — a middle dot (punt volat) between two l's, marking a doubled l (a geminate consonant), and found in no other Romance-language alphabet."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "col·legi (школа/коледж)",
                "l·l = подвоєне [l]"
              ],
              [
                "intel·ligent (розумний)",
                "l·l = подвоєне [l]"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vaig al col·legi.",
                "Я йду до школи."
              ],
              [
                "És molt intel·ligent.",
                "Він дуже розумний."
              ]
            ]
          }
        ]
      }
    ]
  }
];
