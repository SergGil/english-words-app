// Vymova — data/grammar-data/grammar_ht.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pwonon Pèsonèl — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Гаїтянська креольська має спрощену граматику — дієслово не змінюється за особами чи часом через закінчення, а часові маркери йдуть окремими словами перед дієсловом.",
            "en": {
              "text": "Haitian Creole has simplified grammar — verbs don't change form by person or tense; tense is instead marked by separate words placed before the verb."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mwen"
              ],
              [
                "ти",
                "ou"
              ],
              [
                "він / вона / воно",
                "li"
              ],
              [
                "ми",
                "nou"
              ],
              [
                "ви",
                "nou"
              ],
              [
                "вони",
                "yo"
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
        "id": "se-vs-zero-copula",
        "title": "Se vs нульова копула — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Для тотожності (\"X є Y\") вживають слово \"se\"; для якості (\"X якийсь\") копулу взагалі опускають — прикметник сам стає присудком без жодного дієслова.",
            "en": {
              "text": "For identity (\"X is Y\") the word \"se\" is used; for quality (\"X is [adjective]\") the copula is dropped entirely — the adjective itself becomes the predicate with no verb at all."
            }
          },
          {
            "type": "table",
            "title": "se (тотожність) vs нульова копула (якість)",
            "rows": [
              [
                "Mwen se pwofesè.",
                "Я вчитель. (se + іменник)"
              ],
              [
                "Mwen fatige.",
                "Я втомлений. (без дієслова взагалі)"
              ]
            ],
            "en": {
              "title": "se (identity) vs zero copula (quality)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li se Ayisyen.",
                "Він/вона гаїтянин/гаїтянка."
              ],
              [
                "Li kontan.",
                "Він/вона радий/рада."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Se vs the Zero Copula — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з pa — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"pa\" безпосередньо перед дієсловом (чи прикметником-присудком).",
            "en": {
              "text": "Negation is formed with the word \"pa\" directly before the verb (or the adjective-predicate)."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Mwen fatige.",
                "Mwen pa fatige.",
                "Я втомлений → я не втомлений"
              ],
              [
                "Li konn sa.",
                "Li pa konn sa.",
                "Він знає це → він не знає цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen pa pale Panyòl.",
                "Я не розмовляю іспанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with pa — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання часто позначаються лише інтонацією або часткою \"èske\" на початку; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are often marked only by intonation, or the particle \"èske\" at the start; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "ki moun",
                "хто"
              ],
              [
                "ki sa",
                "що"
              ],
              [
                "ki kote",
                "де"
              ],
              [
                "kilè",
                "коли"
              ],
              [
                "poukisa",
                "чому"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Èske ou se Ayisyen?",
                "Ти гаїтянин?"
              ],
              [
                "Ki kote ou rete?",
                "Де ти живеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "postposed-definite-article",
        "title": "Означений артикль після іменника — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької, де артикль стоїть перед іменником (le/la), у гаїтянській креольській означений артикль (la/a/an/nan) стоїть ПІСЛЯ іменника — унікальна перебудова успадкованого французького матеріалу.",
            "en": {
              "text": "Unlike French, where the article precedes the noun (le/la), in Haitian Creole the definite article (la/a/an/nan) stands AFTER the noun — a unique restructuring of inherited French material."
            }
          },
          {
            "type": "table",
            "title": "Іменник + артикль",
            "rows": [
              [
                "liv la",
                "ця книга (liv=книга, la=артикль після)"
              ],
              [
                "kay la",
                "цей дім"
              ]
            ],
            "en": {
              "title": "Noun + Article"
            }
          }
        ],
        "titleEn": "The Postposed Definite Article — A1"
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
        "id": "past-te",
        "title": "Минулий час (te) — A1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"te\" перед дієсловом позначає минулу дію чи стан, що вже не актуальний зараз.",
            "en": {
              "text": "The particle \"te\" before the verb marks a past action or state no longer relevant now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen te travay.",
                "Я працював(ла)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Tense (te) — A1"
      },
      {
        "id": "progressive-ap",
        "title": "Тривалий/майбутній вид (ap) — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ap\" перед дієсловом позначає або дію, що триває зараз, або дію в недавньому майбутньому — контекст розрізняє значення.",
            "en": {
              "text": "The particle \"ap\" before the verb marks either an action happening now or a near-future action — context disambiguates the meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li ap manje.",
                "Він/вона зараз їсть."
              ],
              [
                "M ap vini.",
                "Я прийду/йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Progressive/Near-Future (ap) — A1"
      },
      {
        "id": "immediate-future-pral",
        "title": "Намір/близьке майбутнє (pral) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"pral\" (від \"prale\" — йти) перед дієсловом виражає намір або близьке майбутнє, окремо від загальної \"ap\".",
            "en": {
              "text": "The particle \"pral\" (from \"prale\" — to go) before the verb expresses intention or the near future, distinct from the general \"ap\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen pral dòmi.",
                "Я скоро лягаю спати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Intentional/Near Future (pral) — A2"
      },
      {
        "id": "conditional-ta",
        "title": "Умовний спосіб (ta) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ta\" перед дієсловом позначає умовну чи гіпотетичну дію.",
            "en": {
              "text": "The particle \"ta\" before the verb marks a conditional or hypothetical action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen ta vini si m te gen tan.",
                "Я прийшов би, якби мав час."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Mood (ta) — B1"
      },
      {
        "id": "past-progressive-te-ap",
        "title": "Минулий тривалий (te ap) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Поєднання \"te ap\" виражає дію, що тривала в минулому в конкретний момент.",
            "en": {
              "text": "The combination \"te ap\" expresses an action that was ongoing in the past at a specific moment."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen te ap dòmi lè li rele.",
                "Я спав, коли він подзвонив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Progressive (te ap) — A2"
      },
      {
        "id": "recent-past-fek",
        "title": "Недавня минула дія (fèk/sòt) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Слова \"fèk\" або \"sòt\" перед дієсловом позначають дію, яка щойно відбулася — \"тільки-тільки зробив\".",
            "en": {
              "text": "The words \"fèk\" or \"sòt\" before the verb mark an action that just happened — \"just did\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen fèk rive.",
                "Я щойно прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Recent Past (fèk/sòt) — B1"
      },
      {
        "id": "zero-marked-habitual",
        "title": "Немаркований звичний час — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово без жодної частки часу виражає звичну, загальну дію чи незмінну істину — стандартна \"нульова\" форма теперішнього.",
            "en": {
              "text": "The verb with no tense particle at all expresses a habitual, general action or a timeless truth — the standard \"zero\" present form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen travay chak jou.",
                "Я працюю щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Zero-Marked Habitual — A1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ утворюється голим дієсловом без жодної частки часу, з підметом \"ou\" або без нього.",
            "en": {
              "text": "The imperative is formed with the bare verb with no tense particle, with or without the subject \"ou\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vini isit!",
                "Іди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperative Mood — A2"
      },
      {
        "id": "obligation-pou",
        "title": "Обов'язковість (pou) — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Pou\" перед дієсловом виражає обов'язковість чи намір, подібно до англійського \"supposed to\".",
            "en": {
              "text": "\"Pou\" before the verb expresses obligation or intention, similar to English \"supposed to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen pou ale travay.",
                "Я маю йти на роботу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligation (pou) — B1"
      },
      {
        "id": "past-future-te-pral",
        "title": "Минуле майбутнє (te pral) — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Поєднання \"te pral\" виражає дію, яка мала відбутися в майбутньому відносно певного моменту в минулому.",
            "en": {
              "text": "The combination \"te pral\" expresses an action that was going to happen in the future relative to a certain point in the past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen te pral soti lè li rive.",
                "Я мав виходити, коли він прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Future (te pral) — B1"
      },
      {
        "id": "past-conditional-te-ta",
        "title": "Минулий умовний (te ta) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Поєднання \"te ta\" виражає нереальну умову в минулому, подібно до українського \"зробив би\".",
            "en": {
              "text": "The combination \"te ta\" expresses an unreal past condition, similar to English \"would have done\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen te ta ale si m te konnen.",
                "Я б пішов, якби знав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Conditional (te ta) — B1"
      },
      {
        "id": "serial-verb-ale",
        "title": "Серіальна конструкція з ale — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"ale\" (йти) може поєднуватися з іншим дієсловом у серіальній конструкції, означаючи \"піти й зробити щось\" — типова риса креольських і західноафриканських мов.",
            "en": {
              "text": "The verb \"ale\" (to go) can combine with another verb in a serial construction, meaning \"to go and do something\" — a typical trait of creole and West African languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ale wè yo.",
                "Іди й побач їх."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Serial Verb Construction with ale — B1"
      },
      {
        "id": "benefactive-bay",
        "title": "Бенефактивна конструкція з bay — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"bay\" (давати) вживається серіально після іншого дієслова для позначення бенефіціара дії — \"зробити щось для когось\".",
            "en": {
              "text": "The verb \"bay\" (to give) is used serially after another verb to mark the beneficiary of the action — \"to do something for someone\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Achte yon kado bay li.",
                "Купи подарунок для нього/неї."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Benefactive Construction with bay — B1"
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
        "id": "analytic-isolating-typology",
        "title": "Аналітична (ізолююча) типологія — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Гаїтянська креольська майже повністю аналітична: слова не змінюють форму за граматичними категоріями (відмінок, час, число, рід), а граматичні значення передають окремими словами й порядком слів.",
            "en": {
              "text": "Haitian Creole is almost entirely analytic: words don't change form for grammatical categories (case, tense, number, gender) — grammatical meaning is instead carried by separate words and word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Одна й та сама форма \"li\" слугує підметом, додатком, присвійним \"його/її\".",
                "відсутність флексії — головна типологічна риса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Analytic (Isolating) Typology — A2"
      },
      {
        "id": "postposed-plural-yo",
        "title": "Множина після іменника (yo) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множину позначає слово \"yo\", поставлене ПІСЛЯ іменника — сам іменник ніколи не змінюється за числом, подібно до означеного артикля.",
            "en": {
              "text": "The plural is marked by the word \"yo\", placed AFTER the noun — the noun itself never changes for number, just like the definite article."
            }
          },
          {
            "type": "formula",
            "title": "Однина → множина",
            "rows": [
              [
                "liv la",
                "liv yo",
                "ця книга → ці книги (yo замінює la)"
              ]
            ]
          }
        ],
        "titleEn": "The Postposed Plural Marker (yo) — A1"
      },
      {
        "id": "possession-juxtaposition",
        "title": "Присвійність через зіставлення — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається простим зіставленням двох іменників (означуваний + власник), без сполучного слова \"de\", на відміну від французької.",
            "en": {
              "text": "Possession is expressed by simply juxtaposing two nouns (possessed + possessor), with no connecting word \"de\", unlike French."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "liv Jan",
                "книга Жана (буквально \"книга Жан\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via Juxtaposition — A1"
      },
      {
        "id": "invariant-pronouns",
        "title": "Незмінні форми займенників — A1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають одну й ту саму форму в ролі підмета й додатка — немає окремих \"мене\"/\"я\", як у більшості європейських мов.",
            "en": {
              "text": "Personal pronouns have the same form as subject and object — there's no separate \"me\"/\"I\", unlike most European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen wè li. Li wè mwen.",
                "Я бачу його. Він бачить мене. (mwen незмінний)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Pronoun Forms — A1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація для інтенсивності — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прикметника чи прислівника підсилює значення.",
            "en": {
              "text": "Repeating an adjective or adverb intensifies the meaning."
            }
          },
          {
            "type": "table",
            "title": "vit → vit vit",
            "rows": [
              [
                "vit (швидко) → vit vit",
                "дуже швидко"
              ]
            ],
            "en": {
              "title": "vit → vit vit"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "comparative-pi-pase",
        "title": "Порівняльна конструкція (pi...pase) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають словом \"pi\" перед прикметником і \"pase\" (ніж) перед об'єктом порівняння.",
            "en": {
              "text": "Comparison is expressed with \"pi\" before the adjective and \"pase\" (than) before the comparison object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li pi gwo pase mwen.",
                "Він більший за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (pi...pase) — A2"
      },
      {
        "id": "superlative-pi-nan-tout",
        "title": "Найвищий ступінь (pi...nan tout) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється тим самим \"pi\" + фразою \"nan tout\" (з усіх).",
            "en": {
              "text": "The superlative is formed with the same \"pi\" + the phrase \"nan tout\" (of all)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li pi gwo nan tout klas la.",
                "Він найбільший у класі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (pi...nan tout) — A2"
      },
      {
        "id": "relative-clause-ki",
        "title": "Відносна частка ki — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ki\" — універсальний відносний займенник \"який/що\", незмінний за родом і числом.",
            "en": {
              "text": "\"Ki\" is the universal relative pronoun \"who/which/that\", invariant for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Moun ki vini an se zanmi mwen.",
                "Людина, що прийшла, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Particle ki — A2"
      },
      {
        "id": "demonstrative-sa-a",
        "title": "Вказівна конструкція sa a — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівність виражається словом \"sa\" після іменника + постпозиційним артиклем \"a\", замість окремого префіксованого слова \"цей/той\".",
            "en": {
              "text": "Demonstrative meaning is expressed with the word \"sa\" after the noun + the postposed article \"a\", instead of a separate prefixed word \"this/that\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "liv sa a",
                "ця/та книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Demonstrative sa a — A2"
      },
      {
        "id": "emphatic-se-ki",
        "title": "Емфатична конструкція se...ki — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Для підкреслення конкретного елемента речення вживають розщеплену конструкцію \"se X ki...\" — \"саме X...\".",
            "en": {
              "text": "To emphasize a specific sentence element, a cleft construction \"se X ki...\" is used — \"it is X who/that...\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se mwen ki fè sa.",
                "Це саме я зробив це."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Emphatic Cleft (se...ki) — B1"
      },
      {
        "id": "word-order-svo",
        "title": "Порядок слів SVO — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-присудок-додаток (SVO), без жодних відмінкових закінчень, що сигналізували б роль слова.",
            "en": {
              "text": "The basic order is subject-verb-object (SVO), with no case endings at all to signal a word's role."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen renmen ou.",
                "Я тебе люблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "SVO Word Order — A1"
      },
      {
        "id": "adjective-position-variable",
        "title": "Позиція прикметника — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прикметників стоїть після іменника, але невелика група часто вживаних прикметників (успадкована з французької позиції) стоїть перед ним.",
            "en": {
              "text": "Most adjectives stand after the noun, but a small group of frequently used adjectives (inherited from the French word order) stand before it."
            }
          },
          {
            "type": "table",
            "title": "Після vs перед іменником",
            "rows": [
              [
                "machin wouj",
                "червона машина (після)"
              ],
              [
                "gwo machin",
                "велика машина (перед — успадковано)"
              ]
            ],
            "en": {
              "title": "After vs Before the Noun"
            }
          }
        ],
        "titleEn": "Adjective Position — A2"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ki moun\" (хто) і \"ki sa\" (що) — складені питальні слова з частки \"ki\" + іменник.",
            "en": {
              "text": "\"Ki moun\" (who) and \"ki sa\" (what) are compound question words made of the particle \"ki\" + a noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ki moun sa a?",
                "Хто це?"
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
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Основні сполучники з'єднують слова й речення без зміни порядку слів.",
            "en": {
              "text": "Basic conjunctions link words and sentences without changing word order."
            }
          },
          {
            "type": "table",
            "title": "ak / men / paske",
            "rows": [
              [
                "ak",
                "і/з"
              ],
              [
                "men",
                "але"
              ],
              [
                "paske",
                "тому що"
              ]
            ],
            "en": {
              "title": "ak / men / paske"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "prepositions",
        "title": "Прийменники — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Основні прийменники стоять перед іменником і часто виконують кілька функцій водночас.",
            "en": {
              "text": "The basic prepositions stand before the noun and often serve several functions at once."
            }
          },
          {
            "type": "table",
            "title": "nan, sou, pou",
            "rows": [
              [
                "nan",
                "в/на/з"
              ],
              [
                "sou",
                "на (поверхні)"
              ],
              [
                "pou",
                "для/щоб"
              ]
            ],
            "en": {
              "title": "nan, sou, pou"
            }
          }
        ],
        "titleEn": "Prepositions — A1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують два іменники через зіставлення, як і присвійність.",
            "en": {
              "text": "Compound words often join two nouns through juxtaposition, just like possession."
            }
          },
          {
            "type": "table",
            "title": "dlo + je",
            "rows": [
              [
                "dlo (вода) + je (око) = dlo je",
                "сльози (вода ока)"
              ]
            ],
            "en": {
              "title": "dlo + je"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "reflexive-tet",
        "title": "Зворотність через tèt (голова) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається словом \"tèt\" (голова) з присвійним займенником — буквально \"свою голову\", подібно до баскської чи мов Західної Африки.",
            "en": {
              "text": "Reflexivity is expressed with the word \"tèt\" (head) plus a possessive pronoun — literally \"one's own head\", similar to Basque or West African languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li wè tèt li nan glas.",
                "Він побачив себе в зеркалі (букв. \"свою голову\")."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexivity via tèt (head) — B1"
      },
      {
        "id": "possessive-pronouns-pa",
        "title": "Присвійні займенники (pa) — A2",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Самостійний присвійний займенник (\"мій\"/\"свій\" без іменника) утворюється словом \"pa\" + особовий займенник.",
            "en": {
              "text": "A standalone possessive pronoun (\"mine\"/\"my own\" without a noun) is formed with \"pa\" + personal pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Liv sa a se pa mwen.",
                "Ця книга моя."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Pronouns (pa) — A2"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники близькі за формою до французьких еквівалентів завдяки французькій лексичній основі.",
            "en": {
              "text": "The numbers are close in form to their French equivalents thanks to the French lexical base."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "en/youn",
                "один"
              ],
              [
                "de",
                "два"
              ],
              [
                "senk",
                "п'ять"
              ],
              [
                "dis",
                "десять"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Numbers 1-10 — A1"
      },
      {
        "id": "vocative-address",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання не потребує окремого відмінка чи частки — ім'я чи слово звертання просто ставиться на початку або в кінці речення.",
            "en": {
              "text": "Direct address needs no separate case or particle — the name or address word is simply placed at the start or end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jan, vini isit!",
                "Жане, йди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — A2"
      },
      {
        "id": "indefinite-article-yon",
        "title": "Неозначений артикль yon — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль \"yon\" (від французького \"un\") стоїть ПЕРЕД іменником, на відміну від означеного, що стоїть після.",
            "en": {
              "text": "The indefinite article \"yon\" (from French \"un\") stands BEFORE the noun, unlike the definite article, which stands after."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "yon liv",
                "якась книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Indefinite Article yon — A1"
      },
      {
        "id": "no-adjective-agreement",
        "title": "Відсутність узгодження прикметника — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької, прикметник у гаїтянській креольській узгоджується за родом і числом — тобто не узгоджується взагалі, завжди одна форма.",
            "en": {
              "text": "Unlike French, the adjective in Haitian Creole has been stripped of gender/number agreement entirely — it's always a single invariant form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gwo gason, gwo fi, gwo gason yo",
                "великий хлопчик, велика дівчинка, великі хлопчики (gwo незмінне)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absence of Adjective Agreement — A1"
      },
      {
        "id": "single-negator-pa",
        "title": "Єдиний заперечник pa — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французького подвійного заперечення \"ne...pas\", гаїтянська креольська спростила його до одного слова \"pa\".",
            "en": {
              "text": "Unlike French's double negation \"ne...pas\", Haitian Creole simplified this to a single word \"pa\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen pa manje.",
                "Я не їв. (одне слово замість двох французьких частин)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Single Negator pa — A1"
      },
      {
        "id": "existential-gen",
        "title": "Екзистенційне gen (\"є\"/\"мати\") — A1",
        "emoji": "🌐",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"gen\" поєднує значення \"мати\" і \"є/існує\" — та сама конструкція \"X gen Y\" означає і \"X має Y\", і \"десь є Y\".",
            "en": {
              "text": "The word \"gen\" combines the meanings \"to have\" and \"there is/exists\" — the same construction \"X gen Y\" means both \"X has Y\" and \"there is Y somewhere\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen gen yon chat.",
                "У мене є кіт. (маю)"
              ],
              [
                "Gen moun nan lakou a.",
                "У дворі є люди. (існує)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Existential gen (\"there is\"/\"to have\") — A1"
      },
      {
        "id": "locative-prepositions",
        "title": "Локативні прийменники — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Просторові відношення часто виражають іменником-локативом (anba-під, anwo-над) замість окремого прийменника, подібно до інших креольських мов.",
            "en": {
              "text": "Spatial relations are often expressed with a locative noun (anba-under, anwo-above) rather than a dedicated preposition, similar to other creole languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chat la anba tab la.",
                "Кіт під столом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Prepositions — A2"
      },
      {
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Немає окремої граматичної ввічливої форми \"ви\": вживають \"ou\" до всіх, а ввічливість передають лексично й через титули.",
            "en": {
              "text": "There's no separate grammatical polite \"you\" form: \"ou\" is used with everyone, and politeness is conveyed lexically and through titles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ki jan ou rele, Mesye?",
                "Як вас звати, пане?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Forms — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня майже ідентичні французьким, лише з фонетично спрощеним написанням.",
            "en": {
              "text": "The days of the week are nearly identical to French, just with phonetically simplified spelling."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "lendi",
                "понеділок"
              ],
              [
                "mèkredi",
                "середа"
              ],
              [
                "vandredi",
                "п'ятниця"
              ],
              [
                "dimanch",
                "неділя"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months",
        "title": "Місяці — A1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Назви місяців також майже ідентичні французьким, з фонетично спрощеним написанням.",
            "en": {
              "text": "Month names are also nearly identical to French, with phonetically simplified spelling."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "janvye",
                "січень"
              ],
              [
                "me",
                "травень"
              ],
              [
                "out",
                "серпень"
              ]
            ],
            "en": {
              "title": "Months"
            }
          }
        ],
        "titleEn": "Months — A1"
      },
      {
        "id": "telling-time",
        "title": "Називання часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час запитують \"Ki lè li ye?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Ki lè li ye?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li twazè.",
                "Зараз третя година."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "colors",
        "title": "Кольори — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кольори — незмінні прикметники, що стоять після іменника.",
            "en": {
              "text": "Colors are invariant adjectives, standing after the noun."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "blan",
                "білий"
              ],
              [
                "nwa",
                "чорний"
              ],
              [
                "wouj",
                "червоний"
              ]
            ],
            "en": {
              "title": "Colors"
            }
          }
        ],
        "titleEn": "Colors — A1"
      },
      {
        "id": "family-terms",
        "title": "Родинні терміни — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни — звичайні іменники, незмінні за родом у формі, хоча позначають конкретну статеву приналежність.",
            "en": {
              "text": "Kinship terms are ordinary nouns, invariant in form for gender, though each denotes a specific sex."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "manman",
                "мати"
              ],
              [
                "papa",
                "батько"
              ],
              [
                "sè",
                "сестра"
              ],
              [
                "frè",
                "брат"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family Terms — A1"
      },
      {
        "id": "greetings",
        "title": "Привітання — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sak pase?\" (як справи?, букв. \"що минуло?\") — поширене розмовне привітання.",
            "en": {
              "text": "\"Sak pase?\" (how are you?, literally \"what's passing?\") is a common colloquial greeting."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Bonjou!",
                "Доброго дня!"
              ],
              [
                "Orevwa!",
                "До побачення!"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують дієсловом \"fè\" (робити) або \"tonbe\" (падати) для дощу.",
            "en": {
              "text": "Weather is described with the verb \"fè\" (to do/make) or \"tonbe\" (to fall) for rain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lapli ap tonbe.",
                "Йде дощ."
              ],
              [
                "Li fè cho.",
                "Спекотно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Weather Expressions — A1"
      },
      {
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла — звичайні іменники без роду.",
            "en": {
              "text": "Body parts are ordinary nouns with no gender."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "men",
                "рука"
              ],
              [
                "tèt",
                "голова"
              ],
              [
                "pye",
                "нога"
              ]
            ],
            "en": {
              "title": "Body Parts"
            }
          }
        ],
        "titleEn": "Body Parts — A1"
      },
      {
        "id": "age-expressions",
        "title": "Вираження віку — A1",
        "emoji": "🎂",
        "sections": [
          {
            "type": "intro",
            "text": "Вік виражають дієсловом \"gen\" (мати) + число + \"lane\" (років).",
            "en": {
              "text": "Age is expressed with the verb \"gen\" (to have) + number + \"lane\" (years)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen gen ven lane.",
                "Мені двадцять років."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Age Expressions — A1"
      },
      {
        "id": "west-african-substrate",
        "title": "Західноафриканський субстрат у граматиці — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча лексика переважно французька, граматична структура (серіальні дієслова, постпозиційна множина, зворотність через \"голова\") відображає глибокий вплив західноафриканських мов, якими говорили поневолені люди, що сформували цю креольську.",
            "en": {
              "text": "While the vocabulary is mostly French, the grammatical structure (serial verbs, postposed plural, reflexivity via \"head\") reflects deep influence from the West African languages spoken by the enslaved people who shaped this creole."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Серіальні дієслівні конструкції — спільна риса з мовами ква та кри Західної Африки.",
                "граматична перебудова, а не просто спрощення французької"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The West African Grammatical Substrate — B2"
      },
      {
        "id": "kreyol-orthography-reform",
        "title": "Орфографічна реформа 1979 р. — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартизований фонетичний правопис креволь (IPN/Pressoir-Faublas) затверджено офіційно лише 1979 р. — до того мова писалася нерегулярно, здебільшого за французькими орфографічними звичками, що не відповідали її звуковій системі.",
            "en": {
              "text": "The standardized phonetic Kreyòl orthography (IPN/Pressoir-Faublas) was officially adopted only in 1979 — before that, the language was written inconsistently, mostly with French spelling habits that didn't match its sound system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Нова орфографія пише кожен звук однаково, без німих літер французького зразка.",
                "kay замість французького \"caille\""
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1979 Orthography Reform — B2"
      },
      {
        "id": "loanword-layers",
        "title": "Шари запозичень (Taino, English, Spanish) — B1",
        "emoji": "🌎",
        "sections": [
          {
            "type": "intro",
            "text": "Попри французьку основу, мова зберегла слова з мови таїно (доколумбових жителів острова) і запозичила з іспанської та англійської через сучасні контакти.",
            "en": {
              "text": "Despite its French base, the language retains words from Taino (the island's pre-Columbian inhabitants) and has borrowed from Spanish and English through modern contact."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "ajoupa (з таіно)",
                "хатина"
              ],
              [
                "baseball (від англ.)",
                "бейсбол"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Loanword Layers (Taino, English, Spanish) — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Гаїтянські ідіоми часто спираються на сільське життя й стійкість перед труднощами — центральну тему гаїтянської культурної ідентичності.",
            "en": {
              "text": "Haitian idioms often draw on rural life and resilience in the face of hardship — a central theme of Haitian cultural identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dèyè mòn, gen mòn.",
                "За кожною перешкодою чекає нова (букв. \"за горою є гора\")."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Common Idioms — B1"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Souple\" (будь ласка, від французького \"s'il vous plaît\") скорочене до одного слова.",
            "en": {
              "text": "\"Souple\" (please, from French \"s'il vous plaît\") is shortened to a single word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ban mwen yon vè dlo, souple.",
                "Дайте мені склянку води, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness — A2"
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію незалежно від структури речення.",
            "en": {
              "text": "Interjections express an emotional reaction independent of sentence structure."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Anmwey!",
                "Рятуйте!/Ой леле!"
              ],
              [
                "Mèsi!",
                "Дякую!"
              ]
            ],
            "en": {
              "title": "Common Interjections"
            }
          }
        ],
        "titleEn": "Interjections — A2"
      },
      {
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-19 утворюються подібно до французької моделі десять+одиниця.",
            "en": {
              "text": "Numbers 11-19 are formed similarly to the French ten+unit model."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "onz",
                "одинадцять"
              ],
              [
                "ven",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers 11-19"
            }
          }
        ],
        "titleEn": "Numbers from 11 On — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -yèm, доданим до кількісного числівника (крім \"перший\").",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -yèm added to the cardinal number (except \"first\")."
            }
          },
          {
            "type": "table",
            "title": "premye, dezyèm",
            "rows": [
              [
                "premye",
                "перший"
              ],
              [
                "dezyèm",
                "другий"
              ]
            ],
            "en": {
              "title": "premye, dezyèm"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Yon moun\" (хтось) і \"yon bagay\" (щось) — базові неозначені вирази, буквально \"якась людина/річ\".",
            "en": {
              "text": "\"Yon moun\" (someone) and \"yon bagay\" (something) are the basic indefinite expressions, literally \"some person/thing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yon moun rele.",
                "Хтось дзвонив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Pronouns — A2"
      },
      {
        "id": "negative-polarity",
        "title": "Заперечні вирази — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Pèsonn\" (ніхто) і \"anyen\" (нічого) вживаються з запереченням \"pa\" для повного заперечення.",
            "en": {
              "text": "\"Pèsonn\" (no one) and \"anyen\" (nothing) are used with the negation \"pa\" for full negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pa gen pèsonn la.",
                "Тут нікого немає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Polarity Expressions — B1"
      },
      {
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"pa vre?\" (хіба не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"pa vre?\" (isn't that true?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li bèl jodi a, pa vre?",
                "Гарно сьогодні, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tag Questions — B1"
      },
      {
        "id": "purpose-clause",
        "title": "Цільове підрядне (pou) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Pou\" (щоб) + дієслово вводить цільове підрядне речення — та сама частка, що й для обов'язковості, значення уточнює контекст.",
            "en": {
              "text": "\"Pou\" (in order to) + verb introduces a purpose clause — the same particle used for obligation, with context clarifying the meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen aprann kreyòl pou m pale ak fanmi m.",
                "Я вивчаю креольську, щоб говорити з родиною."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (pou) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (paske) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Paske\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Paske\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwen te an reta paske m te manke bis la.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (paske) — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (si) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Si\" (якщо) вводить умовне речення, часто в поєднанні з часткою \"te\" для нереальної умови.",
            "en": {
              "text": "\"Si\" (if) introduces a conditional sentence, often combined with the particle \"te\" for an unreal condition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Si m te gen tan, m ta vini.",
                "Якби я мав час, я б прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (si) — B1"
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
        "id": "gen-dual-meaning-ambiguity",
        "title": "Неоднозначність gen (\"мати\" vs \"є\") — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки \"gen\" означає і \"мати\", і \"існувати\", деякі речення теоретично неоднозначні поза контекстом і потребують додаткового слова для уточнення.",
            "en": {
              "text": "Since \"gen\" means both \"to have\" and \"to exist\", some sentences are theoretically ambiguous out of context and need an extra word for clarification."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li gen kouraj.",
                "Він має мужність. / У нього є мужність. (обидва прочитання можливі)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ambiguity of gen (\"to have\" vs \"there is\") — B1"
      },
      {
        "id": "dialectal-variation-urban-rural",
        "title": "Міський vs сільський варіант — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Міський креволь (навколо Порт-о-Пренса) частіше запозичує з французької й англійської, тоді як сільські варіанти зберігають більше африканських рис і власного словотвору — обидва вважаються повноцінним креволь, без чіткого стандарту.",
            "en": {
              "text": "Urban Kreyòl (around Port-au-Prince) borrows more from French and English, while rural varieties preserve more African-derived traits and native word formation — both are considered full Kreyòl, with no sharply defined standard."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сільський креволь частіше уникає прямих французьких кальок, які трапляються в міському мовленні.",
                "діалектна варіативність без стигматизованого \"неправильного\" варіанту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Urban vs Rural Kreyòl — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо релігійні, включно з вудуїстськими) зберігають архаїчну чи змішану лексику, невживану в повсякденній мові.",
            "en": {
              "text": "Some common formulas (especially religious, including Vodou-related ones) preserve archaic or mixed vocabulary not used in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bondye bon.",
                "Бог добрий (застигла релігійна формула втіхи)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      }
    ]
  }
];
