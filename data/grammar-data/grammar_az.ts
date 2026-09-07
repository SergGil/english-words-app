// Vymova — data/grammar-data/grammar_az.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AZ: GrammarCategory[] = [
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
            "text": "Азербайджанська не розрізняє граматичного роду — о означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Azerbaijani has no grammatical gender — o means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "mən",
                "я"
              ],
              [
                "sən",
                "ти"
              ],
              [
                "o",
                "він / вона / воно"
              ],
              [
                "biz",
                "ми"
              ],
              [
                "onlar",
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
                "Mən müəlliməm.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка-суфікс — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого дієслова \"бути\" азербайджанська приєднує особовий суфікс прямо до присудка.",
            "en": {
              "text": "Instead of a separate \"to be\" verb, Azerbaijani attaches a personal suffix directly to the predicate."
            }
          },
          {
            "type": "formula",
            "title": "\"müəllim\" (вчитель) + суфікс-зв'язка",
            "rows": [
              [
                "mən",
                "müəlliməm",
                "я вчитель"
              ],
              [
                "sən",
                "müəllimsən",
                "ти вчитель"
              ],
              [
                "o",
                "müəllimdir",
                "він/вона вчитель"
              ],
              [
                "biz",
                "müəllimik",
                "ми вчителі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sən yorğunsan.",
                "Ти втомлений."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Suffix — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"deyil\" / -mA- — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення іменного присудка вживають deyil, а для дієслів — інфікс -mA-/-mə- перед особовим закінченням.",
            "en": {
              "text": "Nominal predicates are negated with deyil, while verbs take the infix -mA-/-mə- before the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Mən müəlliməm.",
                "Mən müəllim deyiləm.",
                "Я вчитель. / Я не вчитель."
              ],
              [
                "Bilirəm.",
                "Bilmirəm.",
                "Я знаю. / Я не знаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bilmirəm.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Deyil / -Ma- — A1"
      },
      {
        "id": "questions",
        "title": "Питання з частками -mı/-mi — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються приєднанням питальної частки -mı/-mi/-mu/-mü (за законом гармонії голосних) до ключового слова.",
            "en": {
              "text": "Yes/no questions are formed by attaching the question particle -mı/-mi/-mu/-mü (following vowel harmony) to the key word."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Sən acsan.",
                "Sən acsanmı?",
                "Ти голодний. / Ти голодний?"
              ],
              [
                "Bu doğrudur.",
                "Bu doğrudurmu?",
                "Це правда. / Це правда?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu doğrudurmu?",
                "Це правда?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with -Mı/-Mi — A1"
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), а суфікси приєднуються за законом гармонії голосних.",
            "en": {
              "text": "The basic word order is Subject-Object-Predicate (SOV), and suffixes attach following vowel harmony."
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
                "Mən kitab oxuyuram.",
                "Я читаю книгу (букв. \"я книгу читаю\")."
              ]
            ]
          }
        ],
        "titleEn": "SOV Word Order — A1"
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
        "title": "İndiki zaman (-Ir) — A1",
        "titleEn": "Present Tense (-Ir) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється суфіксом -ır/-ir/-ur/-ür (за законом гармонії голосних) + особове закінчення.",
            "en": {
              "text": "The present continuous tense is formed with the suffix -ır/-ir/-ur/-ür (following vowel harmony) plus a personal ending."
            }
          },
          {
            "type": "formula",
            "title": "\"oxumaq\" (читати) — indiki zaman",
            "rows": [
              [
                "mən",
                "oxuyuram",
                "я читаю"
              ],
              [
                "sən",
                "oxuyursan",
                "ти читаєш"
              ],
              [
                "o",
                "oxuyur",
                "він/вона/воно читає"
              ],
              [
                "biz",
                "oxuyuruq",
                "ми читаємо"
              ],
              [
                "onlar",
                "oxuyurlar",
                "вони читають"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən kitab oxuyuram.",
                "Я читаю книгу."
              ],
              [
                "Onlar futbol oynayırlar.",
                "Вони грають у футбол."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist-tense",
        "title": "Qeyri-müəyyən indiki zaman (-Ar/-Ir) — A2",
        "titleEn": "Aorist (Habitual Present) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений теперішній (аорист) описує звичну чи загальну дію, а не дію просто зараз. Утворюється суфіксом -ar/-ər (для більшості дієслів) або -ır/-ir/-ur/-ür (для деяких односкладових основ).",
            "en": {
              "text": "The aorist describes a habitual or general action rather than one happening right now. Formed with -ar/-ər (most verbs) or -ır/-ir/-ur/-ür (some single-syllable stems)."
            }
          },
          {
            "type": "table",
            "title": "Indiki zaman vs qeyri-müəyyən indiki zaman",
            "rows": [
              [
                "Yağış yağır.",
                "Іде дощ (зараз)."
              ],
              [
                "Burada tez-tez yağış yağar.",
                "Тут часто йде дощ (взагалі)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən hər gün çay içərəm.",
                "Я щодня п'ю чай."
              ],
              [
                "Günəş şərqdən çıxar.",
                "Сонце сходить на сході."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past-tense",
        "title": "Qəti keçmiş zaman (-Dı) — A1",
        "titleEn": "Definite Past Tense (-Dı) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Означений минулий час позначає дію, свідком якої мовець був особисто. Утворюється суфіксом -dı/-di/-du/-dü (за гармонією голосних, з чергуванням d/t після глухих приголосних).",
            "en": {
              "text": "The definite past marks an action the speaker witnessed personally. Formed with -dı/-di/-du/-dü (following vowel harmony, alternating to t after voiceless consonants)."
            }
          },
          {
            "type": "formula",
            "title": "\"getmək\" (йти) — qəti keçmiş",
            "rows": [
              [
                "mən",
                "getdim",
                "я пішов"
              ],
              [
                "sən",
                "getdin",
                "ти пішов"
              ],
              [
                "o",
                "getdi",
                "він пішов"
              ],
              [
                "biz",
                "getdik",
                "ми пішли"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dünən Bakıya getdim.",
                "Вчора я поїхав до Баку."
              ],
              [
                "Onlar filmə baxdılar.",
                "Вони подивилися фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-past-tense",
        "title": "Nəqli keçmiş zaman (-Mış) — B1",
        "titleEn": "Reported/Inferential Past Tense (-Mış) — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Переказний минулий час позначає дію, про яку мовець дізнався з чужих слів або зробив висновок за наслідками, а не бачив сам. Утворюється суфіксом -mış/-miş/-muş/-müş.",
            "en": {
              "text": "The reported/inferential past marks an action the speaker learned about secondhand or inferred from evidence, rather than witnessed directly. Formed with -mış/-miş/-muş/-müş."
            }
          },
          {
            "type": "table",
            "title": "Qəti vs nəqli keçmiş",
            "rows": [
              [
                "Getdi. (бачив сам)",
                "Getmiş. (кажуть, що пішов)"
              ],
              [
                "Yedim. (я їв, точно пам'ятаю)",
                "Yemişəm. (виявляється, я їв)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Deyilənə görə, o evlənmişdir.",
                "Кажуть, що він одружився."
              ],
              [
                "O, xəstələnmiş.",
                "Виявляється, він захворів."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Gələcək zaman (-(y)Acaq) — A2",
        "titleEn": "Future Tense (-(y)Acaq) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -acaq/-əcək + особове закінчення. Перед голосним суфіксом-початковим елементом додається буферний -y-.",
            "en": {
              "text": "The future tense is formed with the suffix -acaq/-əcək plus a personal ending. A buffer -y- is inserted before a vowel-initial ending."
            }
          },
          {
            "type": "formula",
            "title": "\"gəlmək\" (приходити) — gələcək zaman",
            "rows": [
              [
                "mən",
                "gələcəyəm",
                "я прийду"
              ],
              [
                "sən",
                "gələcəksən",
                "ти прийдеш"
              ],
              [
                "o",
                "gələcək",
                "він прийде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sabah sənə zəng edəcəyəm.",
                "Завтра я тобі подзвоню."
              ],
              [
                "Onlar Türkiyəyə gedəcəklər.",
                "Вони поїдуть до Туреччини."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Əmr forması — A1",
        "titleEn": "Imperative Mood — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "У 2-й особі однини наказовий спосіб — це чиста основа дієслова без закінчення. Ввічлива форма додає -(y)In/-(y)Un, множина -(y)In(Iz).",
            "en": {
              "text": "In the 2nd person singular, the imperative is simply the bare verb stem with no ending. The polite form adds -(y)In/-(y)Un, and the plural adds -(y)In(Iz)."
            }
          },
          {
            "type": "formula",
            "title": "\"gəlmək\" (приходити) — əmr forması",
            "rows": [
              [
                "sən",
                "Gəl!",
                "Приходь!"
              ],
              [
                "siz (ввічл./мн.)",
                "Gəlin!",
                "Приходьте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Qapını bağla!",
                "Зачини двері!"
              ],
              [
                "Xahiş edirəm, otur.",
                "Будь ласка, сідай."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Şərt forması (-sA) — B1",
        "titleEn": "Conditional Mood (-Sa) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -sa/-sə + особове закінчення й виражає умову \"якщо\".",
            "en": {
              "text": "The conditional is formed with the suffix -sa/-sə plus a personal ending and expresses an \"if\" condition."
            }
          },
          {
            "type": "formula",
            "title": "\"bilmək\" (знати) — şərt forması",
            "rows": [
              [
                "mən",
                "bilsəm",
                "якщо я знатиму"
              ],
              [
                "sən",
                "bilsən",
                "якщо ти знатимеш"
              ],
              [
                "o",
                "bilsə",
                "якщо він знатиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vaxtım olsa, gələrəm.",
                "Якщо в мене буде час, я прийду."
              ],
              [
                "Yağış yağsa, evdə qalarıq.",
                "Якщо піде дощ, ми залишимося вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "necessitative-mood",
        "title": "Vaciblik forması (-malı/-məli) — B1",
        "titleEn": "Necessitative Mood (-Malı/-Məli) — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Форма необхідності виражає обов'язок чи необхідність (\"мусити\") й утворюється суфіксом -malı/-məli, часто в поєднанні з особовим суфіксом дієслова \"olmaq\" (бути).",
            "en": {
              "text": "The necessitative expresses obligation (\"must\") and is formed with the suffix -malı/-məli, often combined with the personal ending of \"olmaq\" (to be)."
            }
          },
          {
            "type": "formula",
            "title": "\"getmək\" (йти) — vaciblik forması",
            "rows": [
              [
                "mən",
                "getməliyəm",
                "я мушу йти"
              ],
              [
                "sən",
                "getməlisən",
                "ти мусиш йти"
              ],
              [
                "o",
                "getməlidir",
                "він мусить йти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən bu gün işləməliyəm.",
                "Я мушу сьогодні працювати."
              ],
              [
                "Sən həkimə getməlisən.",
                "Тобі треба до лікаря."
              ]
            ]
          }
        ]
      },
      {
        "id": "optative-mood",
        "title": "Arzu forması (-(y)A) — B1",
        "titleEn": "Optative Mood (-(y)A) — B1",
        "emoji": "🌟",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб виражає бажання чи пропозицію (\"нехай/давай\") і утворюється суфіксом -a/-ə + особове закінчення.",
            "en": {
              "text": "The optative expresses a wish or suggestion (\"let's/may\") and is formed with the suffix -a/-ə plus a personal ending."
            }
          },
          {
            "type": "formula",
            "title": "\"getmək\" (йти) — arzu forması",
            "rows": [
              [
                "mən",
                "gedim",
                "нехай я піду"
              ],
              [
                "biz",
                "gedək",
                "давайте підемо"
              ],
              [
                "o",
                "getsin",
                "нехай він піде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gedək bir qəhvə içək.",
                "Давайте вип'ємо кави."
              ],
              [
                "Allah köməyin olsun.",
                "Нехай допоможе Бог (побажання удачі)."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous-hikaye",
        "title": "Keçmiş zamanda davamlılıq (-Irdı) — B1",
        "titleEn": "Past Continuous (-Irdı) — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому утворюється додаванням допоміжного -dı (від \"idi\") до теперішнього тривалого: -ır + -dı = -ırdı. Описує дію, що тривала в певний момент минулого.",
            "en": {
              "text": "The past continuous adds the auxiliary -dı (from \"idi\") to the present continuous: -ır + -dı = -ırdı. It describes an action ongoing at a certain past moment."
            }
          },
          {
            "type": "formula",
            "title": "\"oxumaq\" (читати) — keçmiş davamlı",
            "rows": [
              [
                "mən",
                "oxuyurdum",
                "я читав (у той момент)"
              ],
              [
                "sən",
                "oxuyurdun",
                "ти читав"
              ],
              [
                "o",
                "oxuyurdu",
                "він читав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Zəng edəndə mən yeməyimi bişirirdim.",
                "Коли ти подзвонив, я готував їжу."
              ],
              [
                "Uşaqlar bağçada oynayırdılar.",
                "Діти гралися в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist-past-hikaye",
        "title": "Adətən olan keçmiş (-Ardı) — B1",
        "titleEn": "Habitual Past (-Ardı) — B1",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія в минулому утворюється додаванням -dı до аористної форми: -ar + -dı = -ardı. Відповідає українському \"бувало, робив\".",
            "en": {
              "text": "The habitual past adds -dı to the aorist form: -ar + -dı = -ardı. Corresponds to Ukrainian's \"used to\"."
            }
          },
          {
            "type": "formula",
            "title": "\"getmək\" (йти) — adətən olan keçmiş",
            "rows": [
              [
                "mən",
                "gedərdim",
                "я, бувало, ходив"
              ],
              [
                "biz",
                "gedərdik",
                "ми, бувало, ходили"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Uşaq ikən hər yay kəndə gedərdik.",
                "У дитинстві ми щоліта їздили в село."
              ],
              [
                "O, hər səhər qəzet oxuyardı.",
                "Він щоранку, бувало, читав газету."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-past-hikaye",
        "title": "Keçmişdəki gələcək (-Acaqdı) — B1",
        "titleEn": "Past Future (\"Was Going To\") — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Форма \"мав намір\" утворюється додаванням -dı до майбутнього часу: -acaq + -dı = -acaqdı. Описує намір або плановану дію, що не завжди здійснилася.",
            "en": {
              "text": "The \"was going to\" form adds -dı to the future: -acaq + -dı = -acaqdı. It describes an intention or planned action that may not have happened."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "gedəcək (піде)",
                "gedəcəkdi",
                "мав піти (але...)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən sənə zəng edəcəkdim, amma unutdum.",
                "Я мав тобі подзвонити, але забув."
              ],
              [
                "O, bizə gələcəkdi, lakin xəstələndi.",
                "Він мав прийти до нас, але захворів."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-past-compound",
        "title": "Mürəkkəb nəqli zamanlar — B2",
        "titleEn": "Compound Reported Tenses — B2",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Переказні складені часи поєднують суфікс -mış з іншими часовими показниками, щоб виразити переказну дію в іншому часовому плані, наприклад переказне майбутнє чи переказну тривалу дію.",
            "en": {
              "text": "Compound reported tenses combine the -mış suffix with other tense markers to express reported action in a different time frame, such as a reported future or reported continuous action."
            }
          },
          {
            "type": "table",
            "title": "Приклади складених форм",
            "rows": [
              [
                "gəlirmiş",
                "виявляється, приходить (переказне тривале)"
              ],
              [
                "gələcəkmiş",
                "кажуть, прийде (переказне майбутнє)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Deyilənə görə, sabah qar yağacaqmış.",
                "Кажуть, завтра піде сніг."
              ],
              [
                "O, hər gün idmanla məşğul olurmuş.",
                "Виявляється, він щодня займається спортом."
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
        "id": "nominative-case",
        "title": "Adlıq hal — A1",
        "titleEn": "Nominative Case — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок — базова, немаркована форма іменника, яку подають у словниках. Це відмінок підмета речення.",
            "en": {
              "text": "The nominative is the base, unmarked noun form given in dictionaries. It is the case of the sentence's subject."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kitab (книга)",
                "Kitab masadadır.",
                "Книга на столі."
              ],
              [
                "uşaq (дитина)",
                "Uşaq gülür.",
                "Дитина сміється."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ev böyükdür.",
                "Дім великий."
              ],
              [
                "Müəllim gəldi.",
                "Вчитель прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Təsirlik hal (-I) — A2",
        "titleEn": "Accusative Case (-I) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок позначає конкретний, визначений прямий об'єкт дії й утворюється суфіксом -ı/-i/-u/-ü. Невизначений об'єкт лишається без суфікса.",
            "en": {
              "text": "The accusative marks a specific, definite direct object and is formed with the suffix -ı/-i/-u/-ü. An indefinite object takes no suffix."
            }
          },
          {
            "type": "table",
            "title": "Визначений vs невизначений об'єкт",
            "rows": [
              [
                "Kitab oxuyuram.",
                "Я читаю книгу (яку-небудь).",
                "без суфікса"
              ],
              [
                "Kitabı oxuyuram.",
                "Я читаю (ту саму) книгу.",
                "з суфіксом -ı"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Maşını gördüm.",
                "Я побачив (ту саму) машину."
              ],
              [
                "Qapını bağla.",
                "Зачини двері."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Yönlük hal (-A) — A2",
        "titleEn": "Dative Case (-A) — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний-напрямний відмінок відповідає на питання \"кому? куди?\" й утворюється суфіксом -a/-ə.",
            "en": {
              "text": "The dative-directional case answers \"to whom? to where?\" and is formed with the suffix -a/-ə."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ev (дім)",
                "evə",
                "додому"
              ],
              [
                "dost (друг)",
                "dosta",
                "другові"
              ],
              [
                "məktəb (школа)",
                "məktəbə",
                "до школи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən məktəbə gedirəm.",
                "Я йду до школи."
              ],
              [
                "Dostuma kitab verdim.",
                "Я дав другові книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Yerlik hal (-DA) — A2",
        "titleEn": "Locative Case (-DA) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок відповідає на питання \"де?\" й утворюється суфіксом -da/-də (з чергуванням d/t після глухих приголосних).",
            "en": {
              "text": "The locative case answers \"where?\" and is formed with the suffix -da/-də (alternating to t after voiceless consonants)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ev (дім)",
                "evdə",
                "вдома"
              ],
              [
                "park (парк)",
                "parkda",
                "в парку"
              ],
              [
                "şəhər (місто)",
                "şəhərdə",
                "в місті"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən Bakıda yaşayıram.",
                "Я живу в Баку."
              ],
              [
                "Kitab çantada idi.",
                "Книга була в сумці."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case",
        "title": "Çıxışlıq hal (-DAn) — A2",
        "titleEn": "Ablative Case (-DAn) — A2",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Вихідний відмінок відповідає на питання \"звідки?\" й утворюється суфіксом -dan/-dən.",
            "en": {
              "text": "The ablative case answers \"from where?\" and is formed with the suffix -dan/-dən."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ev (дім)",
                "evdən",
                "з дому"
              ],
              [
                "Bakı",
                "Bakıdan",
                "з Баку"
              ],
              [
                "dost (друг)",
                "dostdan",
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
                "Mən universitetdən gəlirəm.",
                "Я йду з університету."
              ],
              [
                "Bu hədiyyəni anamdan aldım.",
                "Цей подарунок я отримав від мами."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Yiyəlik hal (-In) — A2",
        "titleEn": "Genitive Case (-In) — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок позначає належність і утворюється суфіксом -ın/-in/-un/-ün, зазвичай у парі з присвійним суфіксом на другому іменнику (ізафет III типу).",
            "en": {
              "text": "The genitive marks possession and is formed with the suffix -ın/-in/-un/-ün, usually paired with a possessive suffix on the second noun (Type III izafet)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Əlinin kitabı",
                "Alinin kitabı",
                "книга Алі"
              ],
              [
                "şəhərin adı",
                "shahərin adı",
                "назва міста"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu, müəllimin çantasıdır.",
                "Це сумка вчителя."
              ],
              [
                "Anamın adı Aynurdur.",
                "Ім'я моєї мами — Айнур."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix",
        "title": "Cəm şəkilçisi -lar/-lər — A1",
        "titleEn": "Plural Suffix -Lar/-Lər — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється додаванням суфікса -lar/-lər відповідно до закону гармонії голосних основи.",
            "en": {
              "text": "The plural is formed by adding the suffix -lar/-lər according to the vowel harmony of the stem."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "kitab (книга)",
                "kitablar",
                "книги"
              ],
              [
                "ev (дім)",
                "evlər",
                "будинки"
              ],
              [
                "uşaq (дитина)",
                "uşaqlar",
                "діти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitabları masaya qoydum.",
                "Я поклав книги на стіл."
              ],
              [
                "Uşaqlar bağçada oynayır.",
                "Діти граються в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Mənsubiyyət şəkilçiləri — A2",
        "titleEn": "Possessive Suffixes — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні суфікси приєднуються до іменника й показують, кому належить предмет, без окремого присвійного займенника.",
            "en": {
              "text": "Possessive suffixes attach directly to the noun and show ownership, without needing a separate possessive pronoun."
            }
          },
          {
            "type": "table",
            "title": "\"kitab\" (книга) з присвійними суфіксами",
            "rows": [
              [
                "kitabım",
                "моя книга",
                "1 ос."
              ],
              [
                "kitabın",
                "твоя книга",
                "2 ос."
              ],
              [
                "kitabı",
                "його/її книга",
                "3 ос."
              ],
              [
                "kitabımız",
                "наша книга",
                "1 ос. мн."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu, mənim evimdir.",
                "Це мій дім."
              ],
              [
                "Onun adı Aygündür.",
                "Її звати Айгюн."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstratives-bu-o",
        "title": "İşarə əvəzlikləri: bu / o — A1",
        "titleEn": "Demonstratives: Bu / O — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Bu\" вказує на близький предмет (це, цей), \"o\" — на далекий (той, он той). Обидва відмінюються за відмінками як іменники.",
            "en": {
              "text": "\"Bu\" points to something near (this), \"o\" to something far (that). Both decline by case like nouns."
            }
          },
          {
            "type": "table",
            "title": "bu / o",
            "rows": [
              [
                "bu kitab",
                "ця книга",
                "близько"
              ],
              [
                "o kitab",
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
                "Bu mənim telefonumdur.",
                "Це мій телефон."
              ],
              [
                "O adam kimdir?",
                "Хто той чоловік?"
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-harmony-major",
        "title": "Böyük sait ahəngi (2 istiqamət) — A1",
        "titleEn": "Vowel Harmony (2-Way) — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Великий закон гармонії голосних вимагає, щоб голосний суфікса відповідав переднього/заднього ряду голосному в останньому складі кореня.",
            "en": {
              "text": "The major (2-way) vowel harmony rule requires a suffix vowel to match the front/back quality of the vowel in the word's last syllable."
            }
          },
          {
            "type": "table",
            "title": "Задній ряд ↔ передній ряд",
            "rows": [
              [
                "dağ (задн.) → dağ-da",
                "гора → на горі",
                "задній ряд"
              ],
              [
                "ev (передн.) → ev-də",
                "дім → вдома",
                "передній ряд"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bakıdan gəlirəm.",
                "Я приїжджаю з Баку."
              ],
              [
                "Gəncədən gəlirəm.",
                "Я приїжджаю з Гянджі."
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-harmony-minor",
        "title": "Kiçik sait ahəngi (4 istiqamət) — A2",
        "titleEn": "Vowel Harmony (4-Way) — A2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Малий закон гармонії голосних додатково узгоджує огублення: після огубленого голосного в суфіксі з'являється огублений варіант (-u/-ü), після неогубленого — неогублений (-ı/-i).",
            "en": {
              "text": "The minor (4-way) vowel harmony rule additionally matches rounding: after a rounded vowel a suffix takes a rounded variant (-u/-ü); after an unrounded one, an unrounded variant (-ı/-i)."
            }
          },
          {
            "type": "table",
            "title": "Приклади 4-way гармонії",
            "rows": [
              [
                "dost (неогубл.) → dostlar",
                "друзі",
                "-lar"
              ],
              [
                "göz (огубл.) → gözlər",
                "очі",
                "-lər (передн., неогубл. після e)"
              ],
              [
                "quzu (огубл.) → quzular",
                "ягнята",
                "-lar"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gözlərim yorulub.",
                "Мої очі втомилися."
              ],
              [
                "Quzular otlayır.",
                "Ягнята пасуться."
              ]
            ]
          }
        ]
      },
      {
        "id": "consonant-softening",
        "title": "Samitlərin yumşalması — A2",
        "titleEn": "Consonant Softening — A2",
        "emoji": "🔉",
        "sections": [
          {
            "type": "intro",
            "text": "Кінцеві глухі приголосні q, k у корені озвучуються на ğ, y (або g), коли до слова додається суфікс, що починається на голосний.",
            "en": {
              "text": "Final voiceless q, k in a stem voice to ğ, y (or g) when a vowel-initial suffix is added."
            }
          },
          {
            "type": "table",
            "title": "Приклади озвучення",
            "rows": [
              [
                "uşaq (дитина)",
                "uşağı",
                "q → ğ"
              ],
              [
                "kitab (книга) — виняток, b лишається",
                "kitabı",
                "без змін"
              ],
              [
                "kürk (шуба)",
                "kürkü",
                "k → к, без озвучення в цьому слові"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Uşağı gördüm.",
                "Я побачив дитину."
              ],
              [
                "Bu, mənim çörəyimdir.",
                "Це мій хліб."
              ]
            ]
          }
        ]
      },
      {
        "id": "buffer-consonants",
        "title": "Bağlayıcı samitlər (y, n, s) — A2",
        "titleEn": "Buffer Consonants (Y, N, S) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли основа закінчується на голосний, а суфікс починається на голосний, між ними вставляється буферний приголосний -y-, -n- або -s- залежно від суфікса.",
            "en": {
              "text": "When a stem ends in a vowel and the suffix begins with a vowel, a buffer consonant -y-, -n-, or -s- is inserted between them, depending on the suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклади буферних приголосних",
            "rows": [
              [
                "oxu- + -acaq",
                "oxuyacaq",
                "буфер -y-"
              ],
              [
                "ev + -i (його дім, від \"o\")",
                "evinin",
                "буфер -n-"
              ],
              [
                "oxu- + -um (мій...)",
                "oxusu",
                "буфер -s- у присвійних"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sabah oxuyacağam.",
                "Завтра я буду читати."
              ],
              [
                "Onun evinin qapısı yaşıldır.",
                "Двері його дому зелені."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions",
        "title": "Qoşmalar (postpozisiyalar) — A2",
        "titleEn": "Postpositions — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників азербайджанська вживає післяйменники — слова, що стоять ПІСЛЯ іменника й керують певним відмінком (üçün — для, kimi — як, qədər — до).",
            "en": {
              "text": "Instead of prepositions, Azerbaijani uses postpositions — words placed AFTER the noun that govern a particular case (üçün — for, kimi — like, qədər — until)."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші післяйменники",
            "rows": [
              [
                "üçün",
                "sənin üçün",
                "для тебе"
              ],
              [
                "kimi",
                "quş kimi",
                "як птах"
              ],
              [
                "qədər",
                "səhərə qədər",
                "до ранку"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu hədiyyə sənin üçündür.",
                "Цей подарунок для тебе."
              ],
              [
                "Saat beşə qədər işləyirəm.",
                "Я працюю до п'ятої години."
              ]
            ]
          }
        ]
      },
      {
        "id": "ile-with-and",
        "title": "\"ilə\" — \"з\" і \"та\" — A2",
        "titleEn": "İlə: 'With' and 'And' — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"ilə\" означає \"з\" (супровід, знаряддя) або \"та/і\" (сполучник). Часто скорочується й приєднується до іменника як суфікс -la/-lə.",
            "en": {
              "text": "The word \"ilə\" means \"with\" (accompaniment, instrument) or \"and\" (conjunction). It's often shortened and attached to the noun as the suffix -la/-lə."
            }
          },
          {
            "type": "table",
            "title": "Окреме слово ↔ суфікс",
            "rows": [
              [
                "dostu ilə / dostuyla",
                "з другом",
                "супровід"
              ],
              [
                "qələm ilə / qələmlə",
                "ручкою",
                "знаряддя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən qardaşımla gəldim.",
                "Я прийшов із братом."
              ],
              [
                "Çay və kofe ilə gəlin.",
                "Приходьте з чаєм і кавою."
              ]
            ]
          }
        ]
      },
      {
        "id": "subordinate-ki",
        "title": "Bağlayıcı \"ki\" — B1",
        "titleEn": "The Conjunction Ki — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичений з перської сполучник \"ki\" вводить підрядне речення, схоже на українське \"що/щоб\", і стоїть після головного речення, а не в кінці, як типові тюркські конструкції.",
            "en": {
              "text": "The Persian-borrowed conjunction \"ki\" introduces a subordinate clause, similar to \"that\", and stands after the main clause rather than at the end, unlike typical Turkic constructions."
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
                "Bilirəm ki, sən haqlısan.",
                "Я знаю, що ти маєш рацію."
              ],
              [
                "Elə bil ki, heç nə olmayıb.",
                "Наче нічого й не сталося."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses-an",
        "title": "Feli sifət -An — B1",
        "titleEn": "Subject Participle Clauses (-An) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник на -an/-ən замінює підрядне означальне речення, коли підмет підрядного речення є тим, кого чи що ми описуємо.",
            "en": {
              "text": "The -an/-ən participle replaces a relative clause when the antecedent is the subject of the embedded clause."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "oxuyan qız",
                "дівчина, яка читає"
              ],
              [
                "gələn adam",
                "чоловік, який приходить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pəncərədən baxan uşağı gördüm.",
                "Я побачив дитину, яка дивиться у вікно."
              ],
              [
                "Bu, kitabı yazan müəllifdir.",
                "Це автор, який написав книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses-dig-acaq",
        "title": "Feli sifət -dığı/-acağı — B1",
        "titleEn": "Object Participle Clauses (-Dığı/-Acağı) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник на -dığı/-diyi (для минулого/теперішнього) чи -acağı/-əcəyi (для майбутнього) замінює підрядне речення, коли підмет підрядного речення відрізняється від означуваного слова.",
            "en": {
              "text": "The -dığı/-diyi (past/present) or -acağı/-əcəyi (future) participle replaces a relative clause when the subject of the embedded clause differs from the antecedent."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "oxuduğum kitab",
                "книга, яку я читаю/читав"
              ],
              [
                "alacağım maşın",
                "машина, яку я куплю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sənin dediyin doğrudur.",
                "Те, що ти сказав, правда."
              ],
              [
                "Yazacağım məktubu göndərəcəm.",
                "Я надішлю лист, який напишу."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-nouns",
        "title": "Feli isim -mA, -Iş — B1",
        "titleEn": "Verbal Nouns (-Ma, -Iş) — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ma/-mə перетворює дієслово на віддієслівний іменник (процес чи факт дії), суфікс -ış/-iş — на іменник результату чи способу дії.",
            "en": {
              "text": "The suffix -ma/-mə turns a verb into a verbal noun (the process or fact of doing something), while -ış/-iş forms a noun of the result or manner of the action."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → віддієслівний іменник",
            "rows": [
              [
                "oxumaq (читати)",
                "oxuma",
                "читання"
              ],
              [
                "görmək (бачити)",
                "görüş",
                "зустріч (побачення)"
              ],
              [
                "gəlmək (приходити)",
                "gəliş",
                "прибуття"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitab oxuma vaxtım yoxdur.",
                "У мене немає часу на читання книг."
              ],
              [
                "Görüşümüz sabahdır.",
                "Наша зустріч завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "converbs-ib-araq",
        "title": "Feli bağlama -ıb, -araq — B1",
        "titleEn": "Converbs: -Ib, -Araq — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ıb/-ib/-ub/-üb описує послідовну дію (\"зробив і...\"), а на -araq/-ərək — одночасну дію чи спосіб (\"роблячи...\").",
            "en": {
              "text": "The converb -ıb/-ib/-ub/-üb describes a sequential action (\"did X and then...\"), while -araq/-ərək describes a simultaneous action or manner (\"while doing X\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "yeyib getdi",
                "поїв і пішов"
              ],
              [
                "gülərək danışdı",
                "говорив, сміючись"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Evə gəlib yatdı.",
                "Прийшов додому і ліг спати."
              ],
              [
                "Qaçaraq məktəbə getdi.",
                "Він побіг до школи (бігом)."
              ]
            ]
          }
        ]
      },
      {
        "id": "converbs-anda-inca",
        "title": "\"Nə vaxt\" bağlamaları: -əndə, -incə — B1",
        "titleEn": "'When' Converbs: -Əndə, -İncə — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -anda/-əndə означає \"коли\" (одночасність), суфікс -ınca/-incə означає \"поки не\" чи \"щойно\" — обидва замінюють підрядне часове речення без окремого сполучника.",
            "en": {
              "text": "The suffix -anda/-əndə means \"when\" (simultaneity), while -ınca/-incə means \"until\" or \"as soon as\" — both replace a temporal subordinate clause without a separate conjunction."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "gələndə",
                "коли прийде/прийшов"
              ],
              [
                "görüncə",
                "щойно побачить/побачив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sən gələndə mən evdə olacağam.",
                "Коли ти прийдеш, я буду вдома."
              ],
              [
                "Onu görüncə sevindim.",
                "Побачивши його, я зрадів."
              ]
            ]
          }
        ]
      },
      {
        "id": "before-after-clauses",
        "title": "\"Əvvəl\" və \"sonra\" bağlamaları — B1",
        "titleEn": "Before/After Clauses — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція \"-mazdan əvvəl\" означає \"перед тим як\", а \"-dıqdan sonra\" означає \"після того як\" — обидві приєднуються прямо до основи дієслова.",
            "en": {
              "text": "The construction \"-mazdan əvvəl\" means \"before doing X\", and \"-dıqdan sonra\" means \"after doing X\" — both attach directly to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "getməzdən əvvəl",
                "перед тим як піти"
              ],
              [
                "yedikdən sonra",
                "після того як поїв"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Evdən çıxmazdan əvvəl işıqları söndür.",
                "Перед тим як вийти з дому, вимкни світло."
              ],
              [
                "Dərsi bitirdikdən sonra evə getdim.",
                "Після того як закінчив урок, я пішов додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "ability-suffix",
        "title": "Bacarıq: -A bilmək — A2",
        "titleEn": "Ability: -A Bilmək ('Can') — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Можливість чи вміння виражається дієприслівником -a/-ə + окремим (не злитим, на відміну від турецької) допоміжним дієсловом \"bilmək\" (могти/знати).",
            "en": {
              "text": "Ability or possibility is expressed with the converb -a/-ə plus the separate (unlike Turkish, not merged) auxiliary verb \"bilmək\" (can/to know)."
            }
          },
          {
            "type": "formula",
            "title": "\"getmək\" (йти) — bacarıq",
            "rows": [
              [
                "mən",
                "gedə bilərəm",
                "я можу піти"
              ],
              [
                "sən",
                "gedə bilərsən",
                "ти можеш піти"
              ],
              [
                "o",
                "gedə bilər",
                "він може піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən üzə bilirəm.",
                "Я вмію плавати."
              ],
              [
                "Sən mənə kömək edə bilərsən?",
                "Ти можеш мені допомогти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "impossibility-suffix",
        "title": "Bacarmamaq — A2",
        "titleEn": "Impossibility ('Cannot') — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Неможливість виражається запереченою формою \"bilməmək\" (bilmirəm — я не можу) або запереченим дієсловом з інфіксом -mA-.",
            "en": {
              "text": "Impossibility is expressed with the negated \"bilməmək\" (bilmirəm — I cannot) or a negated verb with the infix -mA-."
            }
          },
          {
            "type": "table",
            "title": "Можливість ↔ неможливість",
            "rows": [
              [
                "gedə bilərəm",
                "gedə bilmərəm",
                "я можу піти / я не можу піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu gün gələ bilmərəm.",
                "Сьогодні я не зможу прийти."
              ],
              [
                "O, üzə bilmir.",
                "Він не вміє плавати."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Məchul növ — B1",
        "titleEn": "Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -ıl/-il/-ul/-ül (після приголосного) або -n (після голосного), приєднаним до основи дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -ıl/-il/-ul/-ül (after a consonant) or -n (after a vowel), attached to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "yazmaq (писати)",
                "yazılmaq",
                "бути написаним"
              ],
              [
                "görmək (бачити)",
                "görünmək",
                "бути побаченим"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu kitab çox oxunur.",
                "Цю книгу багато читають."
              ],
              [
                "Qapı bağlanıb.",
                "Двері зачинені."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-voice",
        "title": "Qayıdış növ (-In) — B1",
        "titleEn": "Reflexive Voice (-In) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний стан показує, що дія спрямована на самого діяча, й утворюється суфіксом -ın/-in/-un/-ün, приєднаним безпосередньо до основи дієслова.",
            "en": {
              "text": "The reflexive voice shows the action is directed at the doer and is formed with the suffix -ın/-in/-un/-ün, attached directly to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Активний → зворотний",
            "rows": [
              [
                "yumaq (мити)",
                "yuyunmaq",
                "митися"
              ],
              [
                "geyinmək - вже зворотне",
                "geyinmək",
                "одягатися"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Səhər tez yuyunuram.",
                "Я вранці рано вмиваюся."
              ],
              [
                "Uşaq özü geyinir.",
                "Дитина сама вдягається."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-voice",
        "title": "Qarşılıq növü (-Iş) — B1",
        "titleEn": "Reciprocal Voice (-Iş) — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємний стан показує спільну/взаємну дію двох чи більше учасників і утворюється суфіксом -ış/-iş/-uş/-üş.",
            "en": {
              "text": "The reciprocal voice shows a mutual action between two or more participants and is formed with the suffix -ış/-iş/-uş/-üş."
            }
          },
          {
            "type": "table",
            "title": "Активний → взаємний",
            "rows": [
              [
                "görmək (бачити)",
                "görüşmək",
                "зустрічатися"
              ],
              [
                "danışmaq - вже взаємне",
                "danışmaq",
                "розмовляти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sabah görüşəcəyik.",
                "Завтра ми зустрінемося."
              ],
              [
                "Onlar bir-biri ilə mübahisə edirlər.",
                "Вони сваряться одне з одним."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-voice",
        "title": "Etdirmə növü (-DIr, -t) — B1",
        "titleEn": "Causative Voice (-Dır, -t) — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний (спонукальний) стан показує, що підмет змушує чи дозволяє комусь виконати дію, й утворюється суфіксами -dır/-dir/-t/-ır залежно від дієслова.",
            "en": {
              "text": "The causative voice shows that the subject makes or lets someone else perform the action, formed with the suffixes -dır/-dir/-t/-ır depending on the verb."
            }
          },
          {
            "type": "table",
            "title": "Активний → каузативний",
            "rows": [
              [
                "yazmaq (писати)",
                "yazdırmaq",
                "змусити написати"
              ],
              [
                "oxumaq (читати)",
                "oxutmaq",
                "змусити прочитати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Müəllim şagirdə mətn yazdırdı.",
                "Вчитель змусив учня написати текст."
              ],
              [
                "Anam mənə süd içirdi.",
                "Мама дала мені випити молоко (змусила)."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Müqayisə dərəcələri — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь виражається словом \"daha\" перед прикметником, а порівнюваний об'єкт стоїть у вихідному відмінку. Найвищий ступінь утворюється словом \"ən\".",
            "en": {
              "text": "The comparative is expressed with \"daha\" before the adjective, with the compared object in the ablative case. The superlative uses \"ən\"."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "böyük (великий)",
                "daha böyük",
                "ən böyük"
              ],
              [
                "gözəl (гарний)",
                "daha gözəl",
                "ən gözəl"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu ev о evdən daha böyükdür.",
                "Цей дім більший за той дім."
              ],
              [
                "Bakı Azərbaycanın ən böyük şəhəridir.",
                "Баку — найбільше місто Азербайджану."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Sifətlərin sırası — A2",
        "titleEn": "Adjective Order — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він описує, і не змінюється — незалежно від роду чи числа іменника.",
            "en": {
              "text": "An adjective always precedes the noun it describes and never changes — regardless of the noun's number."
            }
          },
          {
            "type": "table",
            "title": "Приклади порядку слів",
            "rows": [
              [
                "gözəl qız",
                "гарна дівчина"
              ],
              [
                "böyük ev",
                "великий дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Qırmızı maşın mənimdir.",
                "Червона машина моя."
              ],
              [
                "Kiçik uşaqlar bağçada oynayır.",
                "Маленькі діти граються в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjectives-no-agreement",
        "title": "Sifətlər dəyişmir — A1",
        "titleEn": "No Adjective-Noun Agreement — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від слов'янських мов, азербайджанський прикметник має лише одну форму — він не узгоджується з іменником у числі чи роді.",
            "en": {
              "text": "Unlike Slavic languages, an Azerbaijani adjective has only one form — it does not agree with the noun in number or gender."
            }
          },
          {
            "type": "table",
            "title": "Однина ↔ множина, той самий прикметник",
            "rows": [
              [
                "gözəl qız",
                "гарна дівчина"
              ],
              [
                "gözəl qızlar",
                "гарні дівчата (прикметник не змінився)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yaxşı adamlar hər yerdə var.",
                "Хороші люди є всюди."
              ],
              [
                "Kiçik it hürür.",
                "Маленький пес гавкає."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Miqdar əvəzlikləri — A2",
        "titleEn": "Quantifiers — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "çox",
                "багато",
                "çox pul"
              ],
              [
                "az",
                "мало",
                "az vaxt"
              ],
              [
                "hər",
                "кожен",
                "hər gün"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Çox adam gəldi.",
                "Прийшло багато людей."
              ],
              [
                "Hər gün işləyirəm.",
                "Я працюю щодня."
              ]
            ]
          }
        ]
      },
      {
        "id": "izafet-compounds",
        "title": "İzafə birləşmələri — B1",
        "titleEn": "Noun Compounds (İzafet) — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Ізафетна конструкція поєднує два іменники трьома способами: I тип (без суфіксів, як прикметник+іменник), II тип (перший іменник без суфікса, другий із присвійним суфіксом — родовий зв'язок за змістом), III тип (обидва іменники із суфіксами — точна належність).",
            "en": {
              "text": "The izafet construction joins two nouns three ways: Type I (no suffixes, like adjective+noun), Type II (first noun unmarked, second takes a possessive suffix — a generic link), Type III (both nouns take suffixes — exact possession)."
            }
          },
          {
            "type": "table",
            "title": "Три типи ізафету",
            "rows": [
              [
                "daş ev",
                "кам'яний дім",
                "I тип"
              ],
              [
                "kitab mağazası",
                "книжковий магазин",
                "II тип"
              ],
              [
                "Əlinin kitabı",
                "книга Алі",
                "III тип"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Uşaq otağı çox səliqəlidir.",
                "Дитяча кімната дуже охайна."
              ],
              [
                "Anamın maşını qırmızıdır.",
                "Машина моєї мами червона."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-oz",
        "title": "Qayıdış əvəzliyi \"öz\" — A2",
        "titleEn": "Reflexive Pronoun: Öz — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"öz\" (сам, себе) приєднує присвійні суфікси й підсилює або замінює звичайний займенник, наголошуючи, що діяч і об'єкт дії — та сама особа.",
            "en": {
              "text": "The reflexive pronoun \"öz\" (self) takes possessive suffixes and either emphasizes or replaces the regular pronoun, stressing that the doer and object are the same person."
            }
          },
          {
            "type": "table",
            "title": "\"öz\" з присвійними суфіксами",
            "rows": [
              [
                "öz-üm",
                "я сам",
                "1 ос."
              ],
              [
                "öz-ün",
                "ти сам",
                "2 ос."
              ],
              [
                "öz-ü",
                "він/вона сам(а)",
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
                "Mən özüm bunu etdim.",
                "Я сам це зробив."
              ],
              [
                "O, öz evini satdı.",
                "Він продав свій власний дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-pronoun-birbiri",
        "title": "Qarşılıq əvəzliyi \"bir-birini\" — A2",
        "titleEn": "Reciprocal Pronoun: Bir-Birini — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "\"Bir-biri\" (\"один одного\") виражає взаємну дію між двома чи більше учасниками й відмінюється за відмінками як звичайний іменник.",
            "en": {
              "text": "\"Bir-biri\" (\"one another\") expresses a mutual action between two or more participants and declines by case like a regular noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади відмінювання",
            "rows": [
              [
                "bir-birini görmək",
                "бачити один одного"
              ],
              [
                "bir-birinə kömək etmək",
                "допомагати один одному"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Onlar bir-birini çox sevir.",
                "Вони дуже люблять одне одного."
              ],
              [
                "Biz bir-birimizə kömək edirik.",
                "Ми допомагаємо одне одному."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Sual əvəzlikləri: kim, nə — A1",
        "titleEn": "Interrogative Pronouns: Kim, Nə — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "kim?",
                "хто?",
                "Kim gəldi?"
              ],
              [
                "nə?",
                "що?",
                "Bu nədir?"
              ],
              [
                "hansı?",
                "який?",
                "Hansı kitab?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu kimdir?",
                "Хто це?"
              ],
              [
                "Nə edirsən?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "cardinal-numbers",
        "title": "Say (əsas saylar) — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "bir",
                "один",
                "1"
              ],
              [
                "beş",
                "п'ять",
                "5"
              ],
              [
                "on",
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
                "Mənim iki qardaşım var.",
                "У мене два брати."
              ],
              [
                "Bu, üçüncü sualdır.",
                "Це третє питання (порівн. з наступним правилом)."
              ]
            ]
          }
        ]
      },
      {
        "id": "ordinal-numbers",
        "title": "Sıra sayları — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються додаванням суфікса -(ı)ncı/-(i)nci/-(u)ncu/-(ü)ncü до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed by adding the suffix -(ı)ncı/-(i)nci/-(u)ncu/-(ü)ncü to the cardinal number."
            }
          },
          {
            "type": "table",
            "title": "Кількісний → порядковий",
            "rows": [
              [
                "bir → birinci",
                "перший"
              ],
              [
                "beş → beşinci",
                "п'ятий"
              ],
              [
                "on → onuncu",
                "десятий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bu, mənim birinci gündür.",
                "Це мій перший день."
              ],
              [
                "İkinci mərtəbədə yaşayıram.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Saatı demək — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Saat neçədir?\" (\"Котра година?\"), а щоб сказати час — уживають \"saat\" (година) із числівником.",
            "en": {
              "text": "To ask the time, Azerbaijanis say \"Saat neçədir?\" (\"What time is it?\"), and to state it, they use \"saat\" (hour/clock) with the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Saat birdir.",
                "Перша година.",
                "1:00"
              ],
              [
                "Saat beşdir.",
                "П'ята година.",
                "5:00"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saat neçədir?",
                "Котра година?"
              ],
              [
                "Qatar saat səkkizdə yola düşür.",
                "Потяг вирушає о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-months-dates",
        "title": "Həftənin günləri və aylar — A1",
        "titleEn": "Days, Months, and Dates — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня та місяці (приклади)",
            "rows": [
              [
                "bazar ertəsi",
                "понеділок",
                "1"
              ],
              [
                "cümə",
                "п'ятниця",
                "5"
              ],
              [
                "yanvar",
                "січень",
                "01"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bazar ertəsi işə gedirəm.",
                "У понеділок я йду на роботу."
              ],
              [
                "Mən mayın beşində doğulmuşam.",
                "Я народився п'ятого травня."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons-weather",
        "title": "Fəsillər və hava — A1",
        "titleEn": "Seasons & Weather — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "yaz",
                "весна"
              ],
              [
                "yay",
                "літо"
              ],
              [
                "qış",
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
                "Bu gün hava isti.",
                "Сьогодні тепла погода."
              ],
              [
                "Qışda qar yağır.",
                "Взимку йде сніг."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-speech",
        "title": "Vasitəsiz nitqin ötürülməsi — B1",
        "titleEn": "Reported Speech — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Переказне мовлення часто передається дієсловом \"demək\" (казати) разом зі сполучником \"ki\" або переказним минулим часом на -mış.",
            "en": {
              "text": "Reported speech is often conveyed with the verb \"demək\" (to say) together with the conjunction \"ki\", or with the -mış reported past tense."
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
                "O dedi ki, gecikəcək.",
                "Він сказав, що запізниться."
              ],
              [
                "Deyirlər ki, hava dəyişəcək.",
                "Кажуть, погода зміниться."
              ]
            ]
          }
        ]
      },
      {
        "id": "indirect-questions",
        "title": "Vasitəli suallar — B1",
        "titleEn": "Indirect Questions — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі питання зберігають той самий порядок слів, що й пряме питання, і часто вводяться словом \"görəsən\" (цікаво).",
            "en": {
              "text": "Indirect questions keep the same word order as the direct question and are often introduced with \"görəsən\" (I wonder)."
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
                "Görəsən, saat neçədir?",
                "Цікаво, котра зараз година?"
              ],
              [
                "Bilmirəm o harda yaşayır.",
                "Я не знаю, де він живе."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-register",
        "title": "Rəsmi və qeyri-rəsmi müraciət — A1",
        "titleEn": "Formal vs Informal Register — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"sən\" (2-га особа однини), для ввічливого чи звертання до кількох людей — \"siz\" (2-га особа множини).",
            "en": {
              "text": "For informal address, Azerbaijani uses \"sən\" (2nd person singular); for polite or plural address, it uses \"siz\" (2nd person plural)."
            }
          },
          {
            "type": "table",
            "title": "sən ↔ siz",
            "rows": [
              [
                "Sən necəsən?",
                "Як ти? (неформально)"
              ],
              [
                "Siz necəsiniz?",
                "Як Ви? (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Buyurun, əyləşin.",
                "Прошу, сідайте (формально)."
              ],
              [
                "Sağ ol!",
                "Дякую! (неформально)"
              ]
            ]
          }
        ]
      },
      {
        "id": "emphatic-particle-de-da",
        "title": "Ədat \"də/da\" (\"теж, і\") — A2",
        "titleEn": "The Particle Də/Da ('Too, Also') — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"də/da\" пишеться окремо від слова, до якого відноситься, і означає \"теж, також\".",
            "en": {
              "text": "The particle \"də/da\" is written as a separate word after the word it modifies and means \"too, also\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "Mən də gəlirəm.",
                "Я теж прийду."
              ],
              [
                "O da razıdır.",
                "Він теж згоден."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sən də bilirsən.",
                "Ти теж знаєш."
              ],
              [
                "Bunu mən də istəyirəm.",
                "Я теж цього хочу."
              ]
            ]
          }
        ]
      },
      {
        "id": "hedging-modality",
        "title": "Ehtimal bildirən sözlər — B1",
        "titleEn": "Hedging & Modality — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "table",
            "title": "Слова ймовірності",
            "rows": [
              [
                "bəlkə",
                "можливо",
                "Bəlkə gələcəm."
              ],
              [
                "görünür",
                "здається",
                "Görünür yağış yağacaq."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bəlkə də haqlısan.",
                "Можливо, ти маєш рацію."
              ],
              [
                "Deyəsən, gecikəcəyəm.",
                "Здається, я запізнюся."
              ]
            ]
          }
        ]
      },
      {
        "id": "idioms-common-expressions",
        "title": "İdiomlar və sabit ifadələr — B1",
        "titleEn": "Idioms & Fixed Expressions — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Canın sağ olsun.",
                "Бажаю здоров'я / нічого страшного."
              ],
              [
                "Əlin var, sənin.",
                "На здоров'я (при подарунку)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ürəyim sıxılır.",
                "Мені тужно/сумно (букв. серце стискається)."
              ],
              [
                "Ağzından bal damır.",
                "Він солодко говорить (букв. з рота крапає мед)."
              ]
            ]
          }
        ]
      },
      {
        "id": "collocations",
        "title": "Sabit söz birləşmələri — B1",
        "titleEn": "Common Collocations — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Поширені сполучення слів",
            "rows": [
              [
                "qərar vermək",
                "прийняти рішення"
              ],
              [
                "fikir söyləmək",
                "висловити думку"
              ],
              [
                "kömək etmək",
                "допомогти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mən artıq qərar verdim.",
                "Я вже прийняв рішення."
              ],
              [
                "Ona kömək etdim.",
                "Я йому допоміг."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Söz düzəldici şəkilçilər — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Азербайджанська активно утворює нові слова додаванням словотворчих суфіксів: -çı/-çi (професія), -lıq/-lik (абстрактне поняття), -sız/-siz (заперечення якості).",
            "en": {
              "text": "Azerbaijani actively derives new words with derivational suffixes: -çı/-çi (profession), -lıq/-lik (abstract concept), -sız/-siz (lack of quality)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "balıq (риба) → balıqçı",
                "рибалка"
              ],
              [
                "dost (друг) → dostluq",
                "дружба"
              ],
              [
                "ev (дім) → evsiz",
                "бездомний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Atam müəllimdir.",
                "Мій батько вчитель."
              ],
              [
                "Uşaqlıq xatirələrim çoxdur.",
                "У мене багато спогадів дитинства."
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
        "title": "Qeyri-müntəzəm fellər — A2",
        "titleEn": "Irregular Verbs — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова \"olmaq\" (бути/ставати) і \"etmək\" (робити) мають деякі неправильні чи скорочені форми та відіграють особливу роль як допоміжні дієслова в багатьох конструкціях.",
            "en": {
              "text": "The verbs \"olmaq\" (to be/become) and \"etmək\" (to do) have some irregular or contracted forms and play a special role as auxiliaries in many constructions."
            }
          },
          {
            "type": "table",
            "title": "Особливі форми",
            "rows": [
              [
                "olmaq",
                "oldu (не \"olду\")",
                "став/стало"
              ],
              [
                "etmək",
                "elədi (розмовна форма)",
                "зробив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "O, həkim oldu.",
                "Він став лікарем."
              ],
              [
                "Nə etdin?",
                "Що ти зробив?"
              ]
            ]
          }
        ]
      },
      {
        "id": "spelling-rules",
        "title": "Əlifba xüsusiyyətləri — B1",
        "titleEn": "Spelling Rules — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Азербайджанський латинський алфавіт має кілька літер, яких немає в англійській: ə, ı (без крапки), ğ, ş, ç, ö, ü, q, x. Важливо не плутати ı (без крапки, задній звук) з i (з крапкою, передній звук).",
            "en": {
              "text": "The Azerbaijani Latin alphabet has several letters not found in English: ə, ı (dotless), ğ, ş, ç, ö, ü, q, x. It's important not to confuse ı (dotless, back vowel) with i (dotted, front vowel)."
            }
          },
          {
            "type": "table",
            "title": "Особливі літери",
            "rows": [
              [
                "ə",
                "[æ]",
                "əl (рука)"
              ],
              [
                "ı",
                "[ɯ]",
                "qız (дівчина)"
              ],
              [
                "ş",
                "[ʃ]",
                "şirin (солодкий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Qızım məktəbə gedir.",
                "Моя донька йде до школи."
              ],
              [
                "Şəkər şirindir.",
                "Цукор солодкий."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-exceptions",
        "title": "Cəm şəkilçisinin işlənmədiyi hallar — A2",
        "titleEn": "When Not to Use the Plural Suffix — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс множини -lar/-lər не додається до іменника після кількісного числівника, оскільки числівник уже вказує на кількість.",
            "en": {
              "text": "The plural suffix -lar/-lər is not added to a noun after a cardinal number, since the number itself already indicates quantity."
            }
          },
          {
            "type": "table",
            "title": "Правильно ↔ неправильно",
            "rows": [
              [
                "üç kitab",
                "üç kitablar ✗",
                "три книги"
              ],
              [
                "beş uşaq",
                "beş uşaqlar ✗",
                "п'ять дітей"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mənim üç qardaşım var.",
                "У мене три брати."
              ],
              [
                "Bağda beş ağac var.",
                "У саду п'ять дерев."
              ]
            ]
          }
        ]
      }
    ]
  }
];
