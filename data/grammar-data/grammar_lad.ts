// Vymova — data/grammar-data/grammar_lad.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LAD: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronombres Personales — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ладино зберігає риси середньовічної іспанської, втрачені в сучасній кастильській мові, і сьогодні часто записується латинкою.",
            "en": {
              "text": "Ladino preserves features of medieval Spanish lost in modern Castilian, and is often written in the Latin alphabet today."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "yo"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона",
                "el / eya"
              ],
              [
                "ми",
                "mozotros"
              ],
              [
                "ви",
                "vozotros"
              ],
              [
                "вони (ч./ж.)",
                "eyos / eyas"
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
        "id": "f-inicial-arcaica",
        "title": "F- inicial arkayika — A1",
        "emoji": "🕯️",
        "sections": [
          {
            "type": "intro",
            "text": "Там, де сучасна іспанська втратила початкове f- і замінила його на h- (сучасне hijo, hacer, hablar), ладино зберегло старий звук незмінним — риса, застигла ще до вигнання євреїв з Іспанії 1492 року.",
            "en": {
              "text": "Where modern Spanish lost initial f- and replaced it with h- (modern hijo, hacer, hablar), Ladino preserved the old sound unchanged — a feature frozen in place since the 1492 expulsion of Jews from Spain."
            }
          },
          {
            "type": "table",
            "title": "Ладино проти сучасної іспанської",
            "rows": [
              [
                "fijo (син) vs ісп. hijo",
                "початкове f- живе там, де в кастильській воно зникло"
              ],
              [
                "fazer (робити) vs ісп. hacer",
                "те саме чергування f-/h-"
              ],
              [
                "favlar (говорити) vs ісп. hablar",
                "ладино навіть зберігає інший корінь favlar замість hablar"
              ]
            ],
            "en": {
              "title": "Ladino vs. Modern Spanish"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mi fijo favla ladino.",
                "Мій син говорить на ладино."
              ],
              [
                "Vamos a fazer la sena.",
                "Ми йдемо готувати вечерю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Initial F- — A1"
      },
      {
        "id": "eskritura-rashi-i-soletreo",
        "title": "Rashi i soletreo — A2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Століттями ладино записували не латинкою, а єврейським письмом: друковані тексти — шрифтом Раші, рукописні — курсивом солетрео. Латинська абетка (стандарт Aki Yerushalayim) стала звичною лише у XX столітті.",
            "en": {
              "text": "For centuries Ladino wasn't written in the Latin alphabet at all, but in Hebrew script: printed texts used Rashi script, handwritten ones used the soletreo cursive. The Latin alphabet (the Aki Yerushalayim standard) only became common in the 20th century."
            }
          },
          {
            "type": "table",
            "title": "Історичні системи письма",
            "rows": [
              [
                "письмо Раші",
                "друковані книги й газети, окреме напівкурсивне єврейське письмо"
              ],
              [
                "солетрео",
                "рукописний курсив на основі єврейських літер для повсякденного листування"
              ],
              [
                "Aki Yerushalayim",
                "сучасний фонетичний латинський стандарт, вироблений в Ізраїлі у XX ст."
              ]
            ],
            "en": {
              "title": "Historical Writing Systems"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "El livro fue eskrito en letras de Rashi.",
                "Книгу було написано шрифтом Раші."
              ],
              [
                "Agora eskrivimos en alfabeto latino.",
                "Тепер ми пишемо латинською абеткою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rashi Script and Soletreo — A2"
      },
      {
        "id": "prestamos-multiples-linguas",
        "title": "Prestamos de munchas linguas — A2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "П'ять століть діаспори по Османській імперії наклали на середньовічну іспанську основу шари гебраїзмів (релігійна й побутова лексика), тюркізмів (побут, їжа) і галліцизмів (від Alliance Israélite Universelle) — унікальне мовне нашарування, якого немає в жодній іншій романській мові.",
            "en": {
              "text": "Five centuries of diaspora across the Ottoman Empire layered Hebrew loanwords (religious and everyday vocabulary), Turkish loanwords (household items, food), and French loanwords (from the Alliance Israélite Universelle) onto a medieval Spanish base — a layering unique among Romance languages."
            }
          },
          {
            "type": "table",
            "title": "Шари запозичень",
            "rows": [
              [
                "kal (синагога) — з івриту qahal",
                "гебраїзм, релігійна сфера"
              ],
              [
                "shabat (субота) — з івриту",
                "гебраїзм, календарна лексика"
              ],
              [
                "bakal (бакалійник) — з турецької",
                "тюркізм, побутова торгівля"
              ],
              [
                "ambeser (амбасада/посольство) — з французької",
                "галліцизм через шкільну систему Alliance"
              ]
            ],
            "en": {
              "title": "Loanword Layers"
            }
          }
        ],
        "titleEn": "Loanwords from Many Languages — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Negasion i preguntas — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в ладино будується як у старій іспанській — часткою no перед дієсловом; питання найчастіше позначаються лише інтонацією, без окремого допоміжного слова.",
            "en": {
              "text": "Negation in Ladino works as in Old Spanish — the particle no before the verb; questions are most often marked by intonation alone, with no separate auxiliary word."
            }
          },
          {
            "type": "formula",
            "title": "Заперечення",
            "rows": [
              [
                "no + дієслово",
                "no se",
                "не знаю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "No se el nombre.",
                "Я не знаю імені."
              ],
              [
                "Vienes kon mozotros?",
                "Ти йдеш з нами?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation and Questions — A1"
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
        "id": "presente-endikativo",
        "title": "Presente endikativo — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час ладино утворюється так само, як у старій іспанській — з трьома дієвідмінами на -ar, -er, -ir, майже без розбіжностей з архаїчними формами XV століття.",
            "en": {
              "text": "The Ladino present tense is formed like Old Spanish — three conjugations in -ar, -er, -ir, with almost no divergence from 15th-century archaic forms."
            }
          },
          {
            "type": "table",
            "title": "favlar (говорити) у теперішньому часі",
            "rows": [
              [
                "favlo / favlas / favla",
                "я говорю / ти говориш / він говорить"
              ],
              [
                "favlamos / favlash / favlan",
                "ми говоримо / ви говорите / вони говорять"
              ]
            ],
            "en": {
              "title": "favlar (to speak) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yo favlo ladino kon mi nona.",
                "Я говорю на ладино з моєю бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Indicative — A1"
      },
      {
        "id": "preterito-perfekto-simple",
        "title": "Preterito perfekto simple — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час позначає завершену одноразову дію в минулому, як в іспанському pretérito indefinido, але з характерним ладинським записом закінчень.",
            "en": {
              "text": "The simple past marks a completed one-time action, like Spanish pretérito indefinido, but with distinctive Ladino spelling of endings."
            }
          },
          {
            "type": "table",
            "title": "favlar у простому минулому",
            "rows": [
              [
                "favli / favlates / favlo",
                "я сказав(-ла) / ти сказав(-ла) / він сказав"
              ],
              [
                "favlimos / favlatesh / favlaron",
                "ми сказали / ви сказали / вони сказали"
              ]
            ],
            "en": {
              "title": "favlar in the simple past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ayer favli kon el haham.",
                "Учора я говорив з рабином."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Preterite — A2"
      },
      {
        "id": "imperfekto",
        "title": "Imperfekto — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект описує повторювані чи тривалі дії в минулому — типовий контекст для родинних спогадів і оповідей про життя в діаспорі.",
            "en": {
              "text": "The imperfect describes repeated or ongoing past actions — the typical tense for family memories and stories of diaspora life."
            }
          },
          {
            "type": "table",
            "title": "bivir (жити) в імперфекті",
            "rows": [
              [
                "bivia / bivias / bivia",
                "я жив / ти жив / він жив"
              ],
              [
                "biviamos / biviash / bivian",
                "ми жили / ви жили / вони жили"
              ]
            ],
            "en": {
              "title": "bivir (to live) in the imperfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mi famiya bivia en Estambol.",
                "Моя родина жила в Стамбулі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect — A2"
      },
      {
        "id": "futuro",
        "title": "Futuro — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється, як в іспанській, додаванням закінчень до інфінітива — сам інфінітив служить основою, до якої додається окреме особове закінчення.",
            "en": {
              "text": "The future is formed, as in Spanish, by adding endings to the infinitive — the infinitive itself serves as the stem for a separate personal ending."
            }
          },
          {
            "type": "table",
            "title": "favlar у майбутньому часі",
            "rows": [
              [
                "favlare / favlaras / favlara",
                "я говоритиму / ти говоритимеш / він говоритиме"
              ],
              [
                "favlaremos / favlaresh / favlaran",
                "ми говоритимемо / ви говоритимете / вони говоритимуть"
              ]
            ],
            "en": {
              "title": "favlar in the future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Manyana favlare kon el.",
                "Завтра я поговорю з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future — B1"
      },
      {
        "id": "kondisional",
        "title": "Kondisional — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражає гіпотетичну дію чи ввічливе прохання; утворюється, як і майбутній час, від основи інфінітива, але з іншим набором закінчень.",
            "en": {
              "text": "The conditional expresses a hypothetical action or a polite request; formed, like the future, from the infinitive stem but with a different set of endings."
            }
          },
          {
            "type": "table",
            "title": "favlar в умовному способі",
            "rows": [
              [
                "favlaria / favlarias / favlaria",
                "я говорив би / ти говорив би / він говорив би"
              ],
              [
                "favlariamos / favlariash / favlarian",
                "ми говорили б / ви говорили б / вони говорили б"
              ]
            ],
            "en": {
              "title": "favlar in the conditional"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Keria favlar kontigo.",
                "Я хотів би поговорити з тобою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional — B1"
      },
      {
        "id": "presente-sujuntivo",
        "title": "Presente sujuntivo — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб дійсності (сюжунтив) вживається після дієслів бажання, сумніву чи емоції — дієвідміни -ar і -er/-ir міняються місцями голосними, як в іспанській.",
            "en": {
              "text": "The subjunctive is used after verbs of wishing, doubt, or emotion — -ar and -er/-ir conjugations swap their vowel, as in Spanish."
            }
          },
          {
            "type": "table",
            "title": "favlar у сюжунтиві",
            "rows": [
              [
                "favle / favles / favle",
                "щоб я говорив / щоб ти говорив / щоб він говорив"
              ],
              [
                "favlemos / favlesh / favlen",
                "щоб ми говорили / щоб ви говорили / щоб вони говорили"
              ]
            ],
            "en": {
              "title": "favlar in the subjunctive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kero ke favles mas despasio.",
                "Я хочу, щоб ти говорив повільніше."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Subjunctive — B1"
      },
      {
        "id": "imperfekto-sujuntivo",
        "title": "Imperfekto sujuntivo — B2",
        "emoji": "🌙",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект сюжунтива вживається в умовних реченнях нереального типу й після дієслів бажання в минулому часі; ладино зберегло стару форму на -ase/-iese практично без змін.",
            "en": {
              "text": "The imperfect subjunctive is used in unreal conditional sentences and after past-tense verbs of wishing; Ladino preserved the old -ase/-iese form almost unchanged."
            }
          },
          {
            "type": "table",
            "title": "favlar в імперфекті сюжунтива",
            "rows": [
              [
                "favlase / favlases / favlase",
                "щоб я говорив (тоді) / щоб ти... / щоб він..."
              ],
              [
                "favlasemos / favlasesh / favlasen",
                "щоб ми говорили / щоб ви... / щоб вони..."
              ]
            ],
            "en": {
              "title": "favlar in the imperfect subjunctive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Si favlase mijor, seria haham.",
                "Якби він говорив краще, то був би рабином."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Subjunctive — B2"
      },
      {
        "id": "preterito-perfekto-kompuesto",
        "title": "Preterito perfekto kompuesto — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складний перфект утворюється допоміжним дієсловом aver (не tener!) плюс дієприкметник; це один з небагатьох контекстів, де aver ще вживається як окреме дієслово в живій мові.",
            "en": {
              "text": "The compound perfect is formed with the auxiliary aver (not tener!) plus the past participle; this is one of the few contexts where aver still survives as a distinct verb in the living language."
            }
          },
          {
            "type": "table",
            "title": "aver favlado",
            "rows": [
              [
                "e favlado / as favlado / a favlado",
                "я сказав / ти сказав / він сказав"
              ],
              [
                "avemos favlado / avesh favlado / an favlado",
                "ми сказали / ви сказали / вони сказали"
              ]
            ],
            "en": {
              "title": "aver favlado"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ya e favlado kon eya.",
                "Я вже поговорив з нею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect — B1"
      },
      {
        "id": "pluskuamperfekto",
        "title": "Pluskuamperfekto — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, що завершилася до іншої минулої дії; утворюється імперфектом aver плюс дієприкметник.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the imperfect of aver plus the participle."
            }
          },
          {
            "type": "table",
            "title": "aviya favlado",
            "rows": [
              [
                "aviya favlado / aviyas favlado / aviya favlado",
                "я вже сказав був / ти вже сказав був / він вже сказав був"
              ]
            ],
            "en": {
              "title": "aviya favlado"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuando yego, ya aviyan salido.",
                "Коли я прийшов, вони вже пішли."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B2"
      },
      {
        "id": "futuro-kompuesto",
        "title": "Futuro kompuesto — B2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Складний майбутній час виражає дію, яка завершиться до певного моменту в майбутньому; утворюється майбутнім часом aver плюс дієприкметник.",
            "en": {
              "text": "The future perfect expresses an action that will be completed by a certain point in the future; formed with the future of aver plus the participle."
            }
          },
          {
            "type": "table",
            "title": "avre favlado",
            "rows": [
              [
                "avre favlado / avras favlado / avra favlado",
                "я вже скажу був / ти вже скажеш був / він вже скаже був"
              ]
            ],
            "en": {
              "title": "avre favlado"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Para las ocho, ya avremos komido.",
                "До восьмої ми вже поїмо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Perfect — B2"
      },
      {
        "id": "imperativo",
        "title": "Imperativo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окремі стверджувальні форми для ти/ви, тоді як заперечний наказ завжди запозичує форми сюжунтива — так само, як в іспанській.",
            "en": {
              "text": "The imperative has its own affirmative forms for tú/vosotros, while the negative imperative always borrows subjunctive forms — just as in Spanish."
            }
          },
          {
            "type": "table",
            "title": "favlar у наказовому способі",
            "rows": [
              [
                "favla! (ти) / favlad! (ви)",
                "говори! / говоріть!"
              ],
              [
                "no favles! / no favlesh!",
                "не говори! / не говоріть!"
              ]
            ],
            "en": {
              "title": "favlar in the imperative"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Favla mas resio!",
                "Говори голосніше!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative — A2"
      },
      {
        "id": "gerundio-i-estar",
        "title": "Jerundio kon estar — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія передається дієсловом estar плюс герундій (дієприслівник) — точно як в іспанській прогресивній конструкції, з герундієм на -ando/-iendo.",
            "en": {
              "text": "Ongoing action is expressed with estar plus the gerund — exactly like the Spanish progressive construction, with the gerund in -ando/-iendo."
            }
          },
          {
            "type": "table",
            "title": "estar favlando",
            "rows": [
              [
                "esto favlando",
                "я саме говорю"
              ],
              [
                "estava komiendo",
                "він саме їв"
              ]
            ],
            "en": {
              "title": "estar favlando"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Esto meldando el livro.",
                "Я саме читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gerund with estar — A2"
      },
      {
        "id": "perifrazis-verbales-de-futuro",
        "title": "Perifrazis: ir a + infinitivo — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Найближче майбутнє в розмовному ладино частіше передають перифразою ir a + інфінітив, ніж синтетичним майбутнім часом — паралель до розмовної іспанської.",
            "en": {
              "text": "The near future in spoken Ladino is more often expressed with the periphrasis ir a + infinitive than with the synthetic future — a parallel to spoken Spanish."
            }
          },
          {
            "type": "formula",
            "title": "Формула",
            "rows": [
              [
                "ir (теп. час) + a + інфінітив",
                "vo a komer",
                "я збираюся їсти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vamos a fazer kompras.",
                "Ми йдемо за покупками."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Periphrasis: ir a + Infinitive — A2"
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
        "id": "artikolos-definidos-i-indefinidos",
        "title": "Artikolos definidos i indefinidos — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль el/la/los/las і неозначений un/una узгоджуються з іменником у роді й числі — базова романська система, майже незмінна від середньовічної іспанської.",
            "en": {
              "text": "The definite article el/la/los/las and the indefinite un/una agree with the noun in gender and number — the basic Romance system, almost unchanged from medieval Spanish."
            }
          },
          {
            "type": "table",
            "title": "Артиклі",
            "rows": [
              [
                "el livro / la kaza",
                "книга (ч.р.) / дім (ж.р.)"
              ],
              [
                "los livros / las kazas",
                "книги / доми"
              ],
              [
                "un ombre / una mujer",
                "чоловік / жінка"
              ]
            ],
            "en": {
              "title": "Articles"
            }
          }
        ],
        "titleEn": "Definite and Indefinite Articles — A1"
      },
      {
        "id": "jenero-de-los-sostantivos",
        "title": "Jenero de los sostantivos — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, здебільшого визначуваний закінченням: -o зазвичай чоловічий, -a зазвичай жіночий, з винятками, як в іспанській.",
            "en": {
              "text": "Nouns are masculine or feminine, mostly determined by their ending: -o is usually masculine, -a is usually feminine, with exceptions as in Spanish."
            }
          },
          {
            "type": "table",
            "title": "Приклади роду",
            "rows": [
              [
                "el ombre (чоловік)",
                "чоловічий рід"
              ],
              [
                "la mano (рука)",
                "жіночий рід попри закінчення -o"
              ],
              [
                "el dia (день)",
                "чоловічий рід попри закінчення -a"
              ]
            ],
            "en": {
              "title": "Gender Examples"
            }
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "numero-plural",
        "title": "Numero plural — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється додаванням -s після голосної та -es після приголосної — регулярне правило, майже без винятків.",
            "en": {
              "text": "The plural is formed by adding -s after a vowel and -es after a consonant — a regular rule with almost no exceptions."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "kaza → kazas",
                "дім → доми"
              ],
              [
                "muer → mueres",
                "жінка → жінки"
              ]
            ],
            "en": {
              "title": "Plural Examples"
            }
          }
        ],
        "titleEn": "Plural Number — A1"
      },
      {
        "id": "konkordansia-de-adjektivos",
        "title": "Konkordansia de adjektivos — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі та зазвичай стоять після іменника, як в усіх романських мовах.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number and normally follow the noun, as in all Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "un livro grande / una kaza grande",
                "велика книга / великий дім"
              ],
              [
                "ombres bonos / mujeres bonas",
                "добрі чоловіки / добрі жінки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A1"
      },
      {
        "id": "komparasion-de-adjektivos",
        "title": "Komparasion de adjektivos — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється зворотом mas...ke, нижчого — menos...ke, рівності — tan...komo, без окремих суфіксів.",
            "en": {
              "text": "Comparison of superiority uses mas...ke, inferiority uses menos...ke, and equality tan...komo, without dedicated suffixes."
            }
          },
          {
            "type": "formula",
            "title": "Формула",
            "rows": [
              [
                "mas + прикм. + ke",
                "mas grande ke",
                "більший, ніж"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Este livro es mas viejo ke akel.",
                "Ця книга старша за ту."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Comparison — A2"
      },
      {
        "id": "superlativo",
        "title": "Superlativo — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється означеним артиклем плюс mas — el mas, la mas — без окремого суфікса найвищого ступеня.",
            "en": {
              "text": "The superlative is formed with the definite article plus mas — el mas, la mas — with no dedicated superlative suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es el mas rikо de la sivdad.",
                "Він найбагатший у місті."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative — A2"
      },
      {
        "id": "artikolo-neutro-lo",
        "title": "Artikolo neutro lo — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Середній артикль lo перетворює прикметник на абстрактний іменник — не позначає ні чоловічий, ні жіночий рід, а узагальнену якість.",
            "en": {
              "text": "The neuter article lo turns an adjective into an abstract noun — it marks neither masculine nor feminine, but a generalized quality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lo bueno es ke esta bivo.",
                "Добре те, що він живий."
              ],
              [
                "Lo mizmo se dize en turko.",
                "Те саме кажуть турецькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Neuter Article lo — B1"
      },
      {
        "id": "posesivos",
        "title": "Posesivos — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники mi/tu/su узгоджуються з предметом володіння, а не з володарем; su багатозначне — може означати 'його', 'її', 'їхнє' або ввічливе 'ваше'.",
            "en": {
              "text": "Possessive adjectives mi/tu/su agree with the object possessed, not with the possessor; su is ambiguous — it can mean 'his', 'her', 'their', or polite 'your'."
            }
          },
          {
            "type": "table",
            "title": "Присвійні",
            "rows": [
              [
                "mi kaza / tu kaza / su kaza",
                "мій дім / твій дім / його-її-їхній-ваш дім"
              ]
            ],
            "en": {
              "title": "Possessives"
            }
          }
        ],
        "titleEn": "Possessives — A1"
      },
      {
        "id": "demonstrativos",
        "title": "Demonstrativos — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені віддаленості: este (тут), ese (там, поряд зі співрозмовником), akel (там, далеко) — усі узгоджуються за родом і числом.",
            "en": {
              "text": "Demonstratives have three degrees of distance: este (near speaker), ese (near listener), akel (far from both) — all agree in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Три ступені",
            "rows": [
              [
                "este livro",
                "ця книга (біля мене)"
              ],
              [
                "ese livro",
                "та книга (біля тебе)"
              ],
              [
                "akel livro",
                "он та книга (далеко)"
              ]
            ],
            "en": {
              "title": "Three Degrees"
            }
          }
        ],
        "titleEn": "Demonstratives — A1"
      },
      {
        "id": "pronombres-de-ovjeto-direkto",
        "title": "Pronombres de ovjeto direkto — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники прямого додатка (me, te, lo, la, mos, vos, los, las) ставляться перед відмінюваним дієсловом, а після інфінітива чи герундія приєднуються до нього.",
            "en": {
              "text": "Direct object pronouns (me, te, lo, la, mos, vos, los, las) go before a conjugated verb, and attach to an infinitive or gerund."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lo vo a vermos.",
                "Я побачу тебе."
              ],
              [
                "Los vide ayer.",
                "Я бачив їх учора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Direct Object Pronouns — A2"
      },
      {
        "id": "pronombres-de-ovjeto-indirekto",
        "title": "Pronombres de ovjeto indirekto — A2",
        "emoji": "📨",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники непрямого додатка (me, te, le, mos, vos, les) вказують адресата дії; le/les не змінюються за родом, на відміну від прямих lo/la.",
            "en": {
              "text": "Indirect object pronouns (me, te, le, mos, vos, les) mark the recipient of an action; le/les don't change for gender, unlike the direct lo/la."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Le do el livro a mi ermano.",
                "Я даю книгу братові."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indirect Object Pronouns — A2"
      },
      {
        "id": "lo-konsistente-sin-leismo",
        "title": "Lo konsistente, sin leismo — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від сучасної кастильської, де в частині Іспанії le витіснило lo для прямого додатка-чоловіка (leísmo), ладино зберігає чисту систему: lo завжди прямий додаток, le — завжди непрямий.",
            "en": {
              "text": "Unlike modern Castilian, where in part of Spain le has replaced lo for a masculine direct object (leísmo), Ladino keeps the system clean: lo is always the direct object, le always the indirect."
            }
          },
          {
            "type": "table",
            "title": "Ладино проти leísmo",
            "rows": [
              [
                "Lo vidi (ladino, коректно)",
                "Я бачив його — прямий додаток"
              ],
              [
                "Le vi (ісп. leísmo, деякі регіони)",
                "те саме, але з іншим займенником"
              ]
            ],
            "en": {
              "title": "Ladino vs. leísmo"
            }
          }
        ],
        "titleEn": "Consistent lo, No leísmo — B1"
      },
      {
        "id": "pronombres-reflexivos",
        "title": "Pronombres reflexivos — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні займенники (me, te, se, mos, vos, se) вказують, що дія повертається на підмет; se — незмінна форма третьої особи однини й множини.",
            "en": {
              "text": "Reflexive pronouns (me, te, se, mos, vos, se) mark that the action returns to the subject; se is invariant for third person singular and plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Me lavo la kara kada manyana.",
                "Я вмиваюся щоранку."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronouns — A2"
      },
      {
        "id": "verbos-reflexivos",
        "title": "Verbos reflexivos — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів вживаються переважно у зворотній формі — левантарсе (вставати), asentarse (сідати) — з інфінітивом на -se, характерним записом ладино.",
            "en": {
              "text": "Many verbs are used mostly in reflexive form — levantarse (to get up), asentarse (to sit down) — with the infinitive ending in -se, in the characteristic Ladino spelling."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Me levanto temprano.",
                "Я встаю рано."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs — A2"
      },
      {
        "id": "ser-vs-estar",
        "title": "Ser vs. estar — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Ser виражає постійні, сутнісні характеристики, estar — тимчасові стани й місцезнаходження; розрізнення успадковане напряму зі старої іспанської, без спрощень.",
            "en": {
              "text": "Ser expresses permanent, essential characteristics, estar temporary states and location; the distinction is inherited directly from Old Spanish, unsimplified."
            }
          },
          {
            "type": "table",
            "title": "ser проти estar",
            "rows": [
              [
                "Es dotor. (постійне)",
                "Він лікар."
              ],
              [
                "Esta kansado. (тимчасове)",
                "Він втомлений."
              ]
            ],
            "en": {
              "title": "ser vs. estar"
            }
          }
        ],
        "titleEn": "Ser vs. estar — A2"
      },
      {
        "id": "tener-vs-aver",
        "title": "Tener vs. aver — B1",
        "emoji": "🤲",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від сучасної іспанської, де tener витіснило aver з усіх значень 'мати', ладино зберігає обидва: tener для володіння предметом, aver — виключно як допоміжне дієслово в складених часах.",
            "en": {
              "text": "Unlike modern Spanish, where tener has replaced aver in all senses of 'to have', Ladino keeps both: tener for possessing an object, aver strictly as the auxiliary in compound tenses."
            }
          },
          {
            "type": "table",
            "title": "Розподіл функцій",
            "rows": [
              [
                "Tengo un livro. (володіння)",
                "У мене є книга."
              ],
              [
                "E meldado el livro. (допоміжне)",
                "Я прочитав книгу."
              ]
            ],
            "en": {
              "title": "Division of Labor"
            }
          }
        ],
        "titleEn": "Tener vs. aver — B1"
      },
      {
        "id": "pronombres-relativos",
        "title": "Pronombres relativos — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Ke — універсальний відносний займенник для людей і речей; kien вживається лише після прийменника і лише для осіб.",
            "en": {
              "text": "Ke is the all-purpose relative pronoun for people and things; kien is used only after a preposition and only for people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "El ombre ke vino ayer.",
                "Чоловік, що прийшов учора."
              ],
              [
                "La persona de kien favlo.",
                "Особа, про яку я говорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns — B1"
      },
      {
        "id": "pronombres-interrogativos",
        "title": "Pronombres interrogativos — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова ke (що), kien (хто), kualo (який), kuando (коли), komo (як), kuanto (скільки) завжди пишуться з k, а не з c/qu, за фонетичним правилом ладинської орфографії.",
            "en": {
              "text": "Question words ke (what), kien (who), kualo (which), kuando (when), komo (how), kuanto (how much) are always spelled with k, not c/qu, following Ladino's phonetic spelling rule."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ke es esto?",
                "Що це таке?"
              ],
              [
                "Kuando vienes?",
                "Коли ти прийдеш?"
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
        "id": "konjunsiones-i-ma",
        "title": "Konjunsiones: i, ma — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від сучасної іспанської y (і) та pero (але), ладино зберігає старіші форми i та ma — риса, що зближує ладино з іншими романськими мовами Середземномор'я, як-от італійська.",
            "en": {
              "text": "Unlike modern Spanish y (and) and pero (but), Ladino keeps the older forms i and ma — a feature that brings Ladino closer to other Mediterranean Romance languages like Italian."
            }
          },
          {
            "type": "table",
            "title": "Ладино проти іспанської",
            "rows": [
              [
                "i (ладино) vs y (ісп.)",
                "сполучник 'і'"
              ],
              [
                "ma (ладино) vs pero (ісп.)",
                "сполучник 'але'"
              ]
            ],
            "en": {
              "title": "Ladino vs. Spanish"
            }
          }
        ],
        "titleEn": "Conjunctions: i, ma — A1"
      },
      {
        "id": "negasion-dupla",
        "title": "Negasion dupla — A2",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в іспанській, заперечні слова nada, nunka, nadien потребують супровідного no перед дієсловом — подвійне заперечення тут граматично обов'язкове, а не помилка.",
            "en": {
              "text": "As in Spanish, negative words nada, nunka, nadien require an accompanying no before the verb — double negation here is grammatically mandatory, not an error."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "No se nada.",
                "Я нічого не знаю."
              ],
              [
                "No viene nunka.",
                "Він ніколи не приходить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Negation — A2"
      },
      {
        "id": "numerales-kardinales",
        "title": "Numerales kardinales — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники близькі до іспанських, але з характерним фонетичним записом: sinko, sien, mil замість cinco, cien, mil.",
            "en": {
              "text": "Cardinal numbers are close to Spanish, but with characteristic phonetic spelling: sinko, sien, mil instead of cinco, cien, mil."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "uno, dos, tres",
                "один, два, три"
              ],
              [
                "sinko, sien, mil",
                "п'ять, сто, тисяча"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numerales-ordinales",
        "title": "Numerales ordinales — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником за родом і числом та зазвичай уживаються лише для перших кількох чисел, далі мову перемикають на кількісні.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender and number and are normally used only for the first few numbers, after which cardinal numbers take over."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "el primer dia",
                "перший день"
              ],
              [
                "la sigunda ves",
                "другий раз"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "preposisiones-de-lugar-i-tiempo",
        "title": "Preposisiones de lugar i tiempo — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники en, kon, sin, para, por, entre охоплюють і місце, і час, і супровід — para виражає мету, por — причину, як і в іспанській.",
            "en": {
              "text": "The prepositions en, kon, sin, para, por, entre cover place, time, and accompaniment — para expresses purpose, por expresses cause, as in Spanish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vengo por ti.",
                "Я прийшов через тебе / заради тебе."
              ],
              [
                "Esto es para ti.",
                "Це для тебе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions of Place and Time — A2"
      },
      {
        "id": "ortografia-fonetika-aki-yerushalayim",
        "title": "Ortografia fonetika: Aki Yerushalayim — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Стандарт Aki Yerushalayim записує кожен звук однією буквою: k замість c/qu, s замість z/c, j для звука /ж/, sh для /ш/ — усуваючи неоднозначності іспанської орфографії.",
            "en": {
              "text": "The Aki Yerushalayim standard spells each sound with one letter: k instead of c/qu, s instead of z/c, j for the /ʒ/ sound, sh for /ʃ/ — removing the ambiguities of Spanish spelling."
            }
          },
          {
            "type": "table",
            "title": "Приклади фонетичного запису",
            "rows": [
              [
                "kaza (не casa)",
                "дім"
              ],
              [
                "dexar/deshar (не dejar)",
                "залишати"
              ],
              [
                "mujer з j=/ж/ (не /х/, як в ісп.)",
                "жінка"
              ]
            ],
            "en": {
              "title": "Phonetic Spelling Examples"
            }
          }
        ],
        "titleEn": "Phonetic Spelling: Aki Yerushalayim — B1"
      },
      {
        "id": "orden-de-palavras",
        "title": "Orden de palavras — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, але, як в інших романських мовах, порядок гнучкий і дозволяє винесення теми наперед для наголосу.",
            "en": {
              "text": "The basic word order is subject-verb-object, but as in other Romance languages, order is flexible and allows fronting a topic for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "El livro, ya lo meldi.",
                "Книгу — я вже прочитав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order — B1"
      },
      {
        "id": "voz-pasiva",
        "title": "Voz pasiva — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється дієсловом ser плюс дієприкметник, який узгоджується з підметом у роді й числі — конструкція рідкісна в розмові, частіша в писемній мові.",
            "en": {
              "text": "The passive voice is formed with ser plus a past participle that agrees with the subject in gender and number — a construction rare in speech, more common in writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "El livro fue eskrito en 1930.",
                "Книгу було написано 1930 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice — B1"
      },
      {
        "id": "se-impersonal",
        "title": "Se impersonal — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Безособове se заміняє реальний підмет, коли він неважливий чи невідомий — поширений спосіб уникнути пасивного стану в живому мовленні.",
            "en": {
              "text": "Impersonal se replaces the real subject when it's unimportant or unknown — the common way to avoid the passive voice in spoken language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se dize ke va lover.",
                "Кажуть, що піде дощ."
              ],
              [
                "Aki se favla ladino.",
                "Тут говорять ладино."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Impersonal se — B1"
      },
      {
        "id": "verbos-de-tipo-gustar",
        "title": "Verbos de tipo gustar — B1",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова типу plazer (подобатися) узгоджуються не з тим, хто відчуває симпатію, а з предметом симпатії — граматичним підметом стає те, що подобається.",
            "en": {
              "text": "Verbs like plazer (to please) agree not with the person feeling the liking, but with the thing liked — the thing liked becomes the grammatical subject."
            }
          },
          {
            "type": "table",
            "title": "Формула симпатії",
            "rows": [
              [
                "me + plaze/plazen + предмет",
                "me plaze el kave",
                "мені подобається кава"
              ]
            ],
            "en": {
              "title": "Liking Formula"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Me plazen los boyikos.",
                "Мені подобається бурекас (боркос) з сиром."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gustar-type Verbs — B1"
      },
      {
        "id": "diminutivo-iko-ika",
        "title": "Diminutivo: -iko / -ika — A2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Головний зменшувальний суфікс ладино — -iko/-ika, а не іспанський -ito/-ita: одна з найпомітніших відмінностей ладино на слух, що вживається постійно, навіть у ласкавих іменах.",
            "en": {
              "text": "Ladino's main diminutive suffix is -iko/-ika, not the Spanish -ito/-ita: one of the most audibly distinctive features of Ladino, used constantly, even in affectionate names."
            }
          },
          {
            "type": "table",
            "title": "Ладино проти іспанської",
            "rows": [
              [
                "chikitiko (ладино) vs chiquitito (ісп.)",
                "манюсінький"
              ],
              [
                "Moshiko (від Moshe, ладино)",
                "лагідна форма чоловічого імені"
              ]
            ],
            "en": {
              "title": "Ladino vs. Spanish"
            }
          }
        ],
        "titleEn": "Diminutive: -iko / -ika — A2"
      },
      {
        "id": "aumentativo",
        "title": "Aumentativo — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Збільшувальні суфікси -on/-ona надають слову відтінку більшого розміру або грубуватої інтенсивності, подібно до інших романських мов.",
            "en": {
              "text": "Augmentative suffixes -on/-ona give a word a sense of larger size or coarse intensity, similarly to other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "un ombron",
                "здоровило"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Augmentative — B1"
      },
      {
        "id": "por-vs-para",
        "title": "Por vs. para — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Por виражає причину, обмін чи проходження крізь щось, para — мету, отримувача чи напрямок; сплутування цих двох прийменників — типова помилка навіть для носіїв суміжних романських мов.",
            "en": {
              "text": "Por expresses cause, exchange, or passing through, para expresses purpose, recipient, or direction; confusing these two prepositions is a typical mistake even for speakers of related Romance languages."
            }
          },
          {
            "type": "table",
            "title": "por проти para",
            "rows": [
              [
                "grasias por el rigalo (причина)",
                "дякую за подарунок"
              ],
              [
                "esto es para ti (отримувач)",
                "це для тебе"
              ]
            ],
            "en": {
              "title": "por vs. para"
            }
          }
        ],
        "titleEn": "Por vs. para — B1"
      },
      {
        "id": "konkordansia-del-partisipio",
        "title": "Konkordansia del partisipio — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У складених часах з aver дієприкметник залишається незмінним (-ado/-ido), але як прикметник чи в пасиві з ser він узгоджується з іменником у роді й числі.",
            "en": {
              "text": "In compound tenses with aver the participle stays invariant (-ado/-ido), but as an adjective or in the passive with ser it agrees with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Дві поведінки дієприкметника",
            "rows": [
              [
                "a komido (незмінне, з aver)",
                "він з'їв"
              ],
              [
                "la puerta es serrada (узгоджене, з ser)",
                "двері зачинені"
              ]
            ],
            "en": {
              "title": "Two Behaviors of the Participle"
            }
          }
        ],
        "titleEn": "Participle Agreement — B1"
      },
      {
        "id": "oratsion-kondisional",
        "title": "Oratsiones kondisionales — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Реальна умова вживає si з дійсним способом, нереальна — si з імперфектом сюжунтива в підрядному й умовним способом у головному реченні.",
            "en": {
              "text": "Real conditions use si with the indicative, unreal ones use si with the imperfect subjunctive in the subordinate clause and the conditional in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Si tengo tiempo, vengo.",
                "Якщо матиму час, прийду."
              ],
              [
                "Si tuviera tiempo, viniera.",
                "Якби мав час, прийшов би."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Sentences — B2"
      },
      {
        "id": "estilo-indirekto",
        "title": "Estilo indirekto — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямій мові дієслово головного речення keрує узгодженням часів у підрядному, а сполучник ke вводить передане висловлювання.",
            "en": {
              "text": "In reported speech, the main verb governs sequence-of-tense agreement in the subordinate clause, and the conjunction ke introduces the reported statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Disho ke iva a vinir.",
                "Він сказав, що прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reported Speech — B2"
      },
      {
        "id": "klauzulas-relativas",
        "title": "Klauzulas relativas — B2",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення може бути обмежувальним (без ком, уточнює референт) або описовим (з комами, додає інформацію) — розрізнення передається лише інтонацією й контекстом.",
            "en": {
              "text": "A relative clause can be restrictive (no commas, narrows the referent) or descriptive (with commas, adds information) — the distinction is carried only by intonation and context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Los livros ke merki son buenos.",
                "Книги, які я купив, хороші (обмежувальне)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses — B2"
      },
      {
        "id": "verbo-kerer-doble-sentido",
        "title": "Verbo kerer: doble sentido — A2",
        "emoji": "💕",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово kerer має подвійне значення — 'хотіти' і 'любити' водночас, як старе іспанське querer; контекст, а не окреме дієслово, розрізняє два сенси.",
            "en": {
              "text": "The verb kerer has a double meaning — 'to want' and 'to love' at once, like the old Spanish querer; context, not a separate verb, distinguishes the two senses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te kero mucho.",
                "Я тебе дуже люблю."
              ],
              [
                "Kero komer.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verb kerer: Double Meaning — A2"
      },
      {
        "id": "modo-sujuntivo-triggers",
        "title": "Modo sujuntivo: verbos ke lo piden — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова бажання (kerer), сумніву (dudar), емоції (kontentarse) і безособові вирази необхідності (es menester ke) вимагають сюжунтива в підрядному реченні, введеному ke.",
            "en": {
              "text": "Verbs of wishing (kerer), doubt (dudar), emotion (kontentarse), and impersonal expressions of necessity (es menester ke) require the subjunctive in the ke-clause that follows."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dudo ke venga oy.",
                "Сумніваюся, що він прийде сьогодні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Triggers — B1"
      },
      {
        "id": "imperativo-negativo",
        "title": "Imperativo negativo — A2",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказ завжди запозичує форму сюжунтива замість власної форми наказового способу — паралель до правила, чинного в усіх варіантах іспанської.",
            "en": {
              "text": "The negative imperative always borrows the subjunctive form instead of the imperative's own form — a parallel to the rule valid across all varieties of Spanish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "No favles agora!",
                "Не говори зараз!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Imperative — A2"
      },
      {
        "id": "perifrazis-estar-por",
        "title": "Perifrazis: estar por + infinitivo — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Estar por + інфінітив виражає дію, яка от-от почнеться — 'бути на межі зробити щось'.",
            "en": {
              "text": "Estar por + infinitive expresses an action about to begin — 'to be on the verge of doing something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Esto por salir.",
                "Я саме збираюся виходити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Periphrasis: estar por + Infinitive — B1"
      },
      {
        "id": "perifrazis-akavar-de",
        "title": "Perifrazis: akavar de + infinitivo — B1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Akavar de + інфінітив виражає дію, яка щойно завершилася — точний аналог іспанського acabar de.",
            "en": {
              "text": "Akavar de + infinitive expresses an action that just finished — the exact analog of Spanish acabar de."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akavo de komer.",
                "Я щойно поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Periphrasis: akavar de + Infinitive — B1"
      },
      {
        "id": "haketia-i-dialektos",
        "title": "Haketia i otros dialektos — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Ладино діаспори Османської імперії (Туреччина, Балкани, Греція) відрізняється від хакетії — діалекту євреїв Північного Марокко, який зазнав сильнішого впливу арабської й пізнішої іспанської.",
            "en": {
              "text": "The Ladino of the Ottoman diaspora (Turkey, the Balkans, Greece) differs from Haketia — the dialect of northern Moroccan Jews, which took stronger influence from Arabic and later Spanish."
            }
          },
          {
            "type": "table",
            "title": "Головні варіанти",
            "rows": [
              [
                "ладино/джудезмо (Туреччина, Балкани)",
                "османська гілка, тюркські й гебраїзми"
              ],
              [
                "хакетія (Північне Марокко)",
                "магрибська гілка, сильний арабський вплив"
              ]
            ],
            "en": {
              "title": "Main Varieties"
            }
          }
        ],
        "titleEn": "Haketia and Other Dialects — B2"
      },
      {
        "id": "bendisiones-i-formulas-fixas",
        "title": "Bendisiones i formulas fixas — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Релігійний і побутовий регістр рясніє застиглими благословеннями гебрейського походження, що вживаються як цілісні формули, незалежно від синтаксису решти речення.",
            "en": {
              "text": "The religious and everyday register is full of fixed blessings of Hebrew origin, used as whole formulas regardless of the syntax of the rest of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ke tengas mazal!",
                "Хай тобі щастить! (mazal з івриту)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Blessings and Fixed Formulas — B2"
      },
      {
        "id": "refranes-i-estruktura",
        "title": "Refranes i estruktura fixa — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (рефрани) зберігають архаїчні граматичні форми, що вже вийшли з ужитку в живій мові, — своєрідна мовна капсула часу всередині сучасних розмов.",
            "en": {
              "text": "Proverbs (refranes) preserve archaic grammatical forms already out of use in the living language — a kind of linguistic time capsule inside modern conversation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kien no tiene, no puede dar.",
                "Хто не має, той не може дати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Proverbs and Fixed Structure — B2"
      },
      {
        "id": "vokativo-i-tratamiento",
        "title": "Formas de tratamiento: vos — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Історично vos служило ввічливою формою звертання до однієї особи (як застаріле іспанське vos), тоді як tu лишалося неформальним — на відміну від сучасної кастильської, де vos зникло взагалі.",
            "en": {
              "text": "Historically vos served as the polite form of address to one person (like archaic Spanish vos), while tu remained informal — unlike modern Castilian, where vos has disappeared entirely."
            }
          },
          {
            "type": "table",
            "title": "Ввічливість у ладино",
            "rows": [
              [
                "tu (неформально)",
                "ти — до близьких"
              ],
              [
                "vos (ввічливо, історично)",
                "ви — до старших чи незнайомих"
              ]
            ],
            "en": {
              "title": "Politeness in Ladino"
            }
          }
        ],
        "titleEn": "Forms of Address: vos — B2"
      },
      {
        "id": "artikolo-kon-nombres-de-lugar",
        "title": "Artikolo kon nombres de lugar — B1",
        "emoji": "🗾",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості географічних назв без артикля, деякі усталені назви країн і міст в ладино вживаються з означеним артиклем за традицією діаспорної мови.",
            "en": {
              "text": "Unlike most geographic names, which take no article, a few established country and city names in Ladino traditionally take the definite article, by diaspora-language convention."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "la Turkia",
                "Туреччина"
              ],
              [
                "la Amerika",
                "Америка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Article with Place Names — B1"
      },
      {
        "id": "pronombres-tonikos-preposisionales",
        "title": "Pronombres tonikos preposisionales — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Після прийменників уживаються наголошені форми займенників (mi, ti, el, mozotros...), відмінні від ненаголошених me/te; kon + mi та kon + ti стягуються в konmigo та kontigo, як у старій іспанській.",
            "en": {
              "text": "After prepositions, stressed pronoun forms are used (mi, ti, el, mozotros...), distinct from unstressed me/te; kon + mi and kon + ti contract into konmigo and kontigo, as in Old Spanish."
            }
          },
          {
            "type": "table",
            "title": "Стягнені форми",
            "rows": [
              [
                "kon + mi → konmigo",
                "зі мною"
              ],
              [
                "kon + ti → kontigo",
                "з тобою"
              ]
            ],
            "en": {
              "title": "Contracted Forms"
            }
          }
        ],
        "titleEn": "Prepositional Stressed Pronouns — B1"
      },
      {
        "id": "konjunsion-ke-doble-uso",
        "title": "Konjunsion ke: doble uso — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ke виконує дві різні функції — відносний займенник ('що/який') і сполучник, що вводить підрядне з'ясувальне речення ('що') — розрізнити їх можна лише за синтаксичною позицією.",
            "en": {
              "text": "The word ke performs two different functions — a relative pronoun ('that/which') and a conjunction introducing a noun clause ('that') — distinguishable only by syntactic position."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "El livro ke merki. (відносне)",
                "Книга, яку я купив."
              ],
              [
                "Se ke vienes. (сполучник)",
                "Я знаю, що ти прийдеш."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conjunction ke: Double Use — B2"
      },
      {
        "id": "verbos-de-kambio-de-estado",
        "title": "Verbos de kambio de estado — B2",
        "emoji": "🦋",
        "sections": [
          {
            "type": "intro",
            "text": "Зміну стану передають різні дієслова залежно від типу зміни: azerse для поступової, tornarse для раптової, kedarse для наслідку зовнішньої події.",
            "en": {
              "text": "Change of state is expressed with different verbs depending on the type of change: azerse for gradual change, tornarse for sudden change, kedarse for the result of an external event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se izo dotor.",
                "Він став лікарем (поступово)."
              ],
              [
                "Se kedo mudo.",
                "Він занімів (від шоку)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbs of Change of State — B2"
      },
      {
        "id": "orden-de-los-pronombres-klitikos",
        "title": "Orden de los pronombres klitikos — B2",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Коли непрямий і прямий додаток поєднуються, непрямий завжди йде першим; непряме le/les перед прямим lo/la/los/las змінюється на se, щоб уникнути двох l-звуків поспіль.",
            "en": {
              "text": "When indirect and direct object pronouns combine, the indirect one always goes first; indirect le/les before direct lo/la/los/las changes to se, to avoid two l-sounds in a row."
            }
          },
          {
            "type": "formula",
            "title": "Формула клітик",
            "rows": [
              [
                "se + lo/la/los/las (le/les → se)",
                "se lo dio",
                "він дав це йому"
              ]
            ]
          }
        ],
        "titleEn": "Clitic Pronoun Order — B2"
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
        "id": "verbos-irregulares-ser-i-ir",
        "title": "Verbos irregulares: ser, ir — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Ser (бути) та ir (йти) — найнеправильніші дієслова ладино, з основами, що не мають нічого спільного з інфінітивом; у простому минулому вони навіть збігаються формою (fue означає і 'він був', і 'він пішов').",
            "en": {
              "text": "Ser (to be) and ir (to go) are Ladino's most irregular verbs, with stems bearing no resemblance to the infinitive; in the simple past they even share the same form (fue means both 'he was' and 'he went')."
            }
          },
          {
            "type": "table",
            "title": "Незвична схожість",
            "rows": [
              [
                "fue (він був / він пішов)",
                "омонімія форм ser і ir у претериті"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs: ser, ir — B1"
      },
      {
        "id": "plural-irregular-de-ciertos-sostantivos",
        "title": "Plural irregular de siertos sostantivos — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників не підкоряються стандартному правилу -s/-es і мають форму множини, яку слід запам'ятовувати окремо.",
            "en": {
              "text": "A few common nouns don't follow the standard -s/-es rule and have a plural form that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "el pex (риба) → los pexes",
                "додається -es попри те, що слово вже закінчується на приголосний нестандартно"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plural of Certain Nouns — B1"
      },
      {
        "id": "prestamos-fixos-sin-flexion",
        "title": "Prestamos fixos sin flexion — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Гебрейські релігійні терміни (Shabat, Torah, mazal) уживаються в ладинському реченні без жодної романської словозміни — рід, число й відмінок їм не приписуються за загальними правилами.",
            "en": {
              "text": "Hebrew religious terms (Shabat, Torah, mazal) are used in a Ladino sentence with no Romance inflection at all — gender, number, and case aren't assigned to them by the general rules."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Guta Shabat!",
                "Доброї суботи! (незмінна вітальна формула)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Uninflected Loanwords — B2"
      }
    ]
  }
];
