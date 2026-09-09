// Vymova — data/grammar-data/grammar_haw.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HAW: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Nā Panonoʻī Pilikino — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У гавайській, як і в маорі та самоанській, розрізняють \"ми без вас\" (mākou) і \"ми з вами\" (kākou).",
            "en": {
              "text": "Hawaiian, like Māori and Samoan, distinguishes \"we without you\" (mākou) from \"we with you\" (kākou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "au"
              ],
              [
                "ти",
                "ʻoe"
              ],
              [
                "він / вона / воно",
                "ia"
              ],
              [
                "ми (без вас)",
                "mākou"
              ],
              [
                "ми (з вами)",
                "kākou"
              ],
              [
                "ви",
                "ʻoukou"
              ],
              [
                "вони",
                "lākou"
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
        "id": "verbless-sentences",
        "title": "Речення без \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "У гавайській немає окремого дієслова \"бути\": тотожність виражається часткою \"he\" перед іменником, а речення починається присудком (часткою часу/виду), а не підметом.",
            "en": {
              "text": "Hawaiian has no separate verb \"to be\": identity is expressed with the particle \"he\" before a noun, and the sentence begins with the predicate (a tense/aspect particle), not the subject."
            }
          },
          {
            "type": "table",
            "title": "Іменне речення з he",
            "rows": [
              [
                "He kumu au.",
                "Я вчитель. (he + іменник)"
              ],
              [
                "He wahine ʻo ia.",
                "Вона жінка."
              ]
            ],
            "en": {
              "title": "Nominal Sentence with he"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua maikaʻi au.",
                "Я добре (почуваюся). (частка ua = завершений стан)"
              ],
              [
                "Aia au ma ka hale.",
                "Я вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentences without \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ʻaʻole — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"ʻaʻole\" (не/ні) на початку речення, перед часткою часу/виду.",
            "en": {
              "text": "Negation is formed with the word \"ʻaʻole\" (not/no) at the start of the sentence, before the tense/aspect particle."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ua maikaʻi au.",
                "ʻAʻole au i maikaʻi.",
                "Я добре → я не добре"
              ],
              [
                "He kumu au.",
                "ʻAʻole au he kumu.",
                "Я вчитель → я не вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻAʻole au i luhi.",
                "Я не втомлений."
              ],
              [
                "ʻAʻole ʻo ia e ʻōlelo Hawaiʻi.",
                "Він/вона не розмовляє гавайською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ʻaʻole — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються лише інтонацією; спеціальні — питальними словами, які зазвичай стоять на тому ж місці, що й відповідь.",
            "en": {
              "text": "Yes/no questions are marked only by intonation; wh-questions use question words, which usually occupy the same position as the answer would."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "wai",
                "хто"
              ],
              [
                "aha",
                "що"
              ],
              [
                "hea",
                "де"
              ],
              [
                "ʻehia",
                "коли/скільки"
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
                "He kanaka Hawaiʻi ʻoe?",
                "Ти гавайець?"
              ],
              [
                "Ma hea ʻoe e noho ai?",
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
        "id": "dual-number",
        "title": "Двоїна в займенниках — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім відмінності \"ми з вами\"/\"ми без вас\", гавайська розрізняє окрему форму двоїни (\"ми двоє\") від множини (\"ми багато\") — трирівнева система числа: однина, двоїна, множина.",
            "en": {
              "text": "Besides the inclusive/exclusive \"we\" distinction, Hawaiian distinguishes a separate dual form (\"we two\") from the plural (\"we many\") — a three-way number system: singular, dual, plural."
            }
          },
          {
            "type": "table",
            "title": "Двоїна vs множина",
            "rows": [
              [
                "māua (ми двоє, без тебе)",
                "mākou (ми багато, без вас)"
              ],
              [
                "kāua (ми двоє, з тобою)",
                "kākou (ми багато, з вами)"
              ]
            ],
            "en": {
              "title": "Dual vs Plural"
            }
          }
        ],
        "titleEn": "Dual Number in Pronouns — A2"
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
        "id": "completed-aspect-ua",
        "title": "Завершений вид (ua) — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ua\" перед дієсловом позначає завершену дію чи досягнутий стан.",
            "en": {
              "text": "The particle \"ua\" before the verb marks a completed action or an achieved state."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua hele au i ka hale kuke.",
                "Я пішов до магазину."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Completed Aspect (ua) — A1"
      },
      {
        "id": "continuing-aspect-e-ana",
        "title": "Тривалий вид (e...ana) — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція \"e\" + дієслово + \"ana\" виражає тривалу дію без прив'язки до конкретного часу.",
            "en": {
              "text": "The construction \"e\" + verb + \"ana\" expresses an ongoing action without tying it to a specific time."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E hele ana au.",
                "Я йду (тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Continuing Aspect (e...ana) — A2"
      },
      {
        "id": "present-progressive-ke-nei",
        "title": "Теперішній тривалий (ke...nei) — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція \"ke\" + дієслово + \"nei\" позначає дію, що відбувається саме зараз, тут.",
            "en": {
              "text": "The construction \"ke\" + verb + \"nei\" marks an action happening right now, here."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ke hana nei au.",
                "Я зараз працюю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Present Progressive (ke...nei) — A1"
      },
      {
        "id": "simple-past-i",
        "title": "Простий минулий (i) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"i\" перед дієсловом позначає просту минулу дію, окрему від завершеного виду \"ua\".",
            "en": {
              "text": "The particle \"i\" before the verb marks a simple past action, distinct from the completed aspect \"ua\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I ʻike au iā ia.",
                "Я побачив його/її."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Simple Past (i) — A2"
      },
      {
        "id": "imperative-future-e",
        "title": "Наказовий/майбутній (e) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"e\" перед дієсловом (без \"ana\") виражає наказ або майбутню дію залежно від контексту.",
            "en": {
              "text": "The particle \"e\" before the verb (without \"ana\") expresses either a command or a future action depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E hele mai!",
                "Іди сюди!"
              ],
              [
                "E hele au i ka lā ʻapōpō.",
                "Я піду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperative/Future (e) — A2"
      },
      {
        "id": "negative-imperative-mai",
        "title": "Заперечний наказ (mai) — A2",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказ утворюється словом \"mai\" (не) перед дієсловом, окремо від звичайного заперечення \"ʻaʻole\".",
            "en": {
              "text": "The negative imperative is formed with the word \"mai\" (don't) before the verb, distinct from the ordinary negation \"ʻaʻole\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mai hele!",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Negative Imperative (mai) — A2"
      },
      {
        "id": "passive-ia",
        "title": "Пасивний суфікс -ʻia — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ʻia, доданий до дієслова, утворює пасивний стан — дію виконано над підметом, виконавець не вказаний або другорядний.",
            "en": {
              "text": "The suffix -ʻia, added to the verb, forms the passive voice — the action is done to the subject, with the doer unstated or secondary."
            }
          },
          {
            "type": "table",
            "title": "ʻai → ʻaiʻia",
            "rows": [
              [
                "ʻai (їсти) → ʻaiʻia",
                "бути з'їденим"
              ]
            ],
            "en": {
              "title": "ʻai → ʻaiʻia"
            }
          }
        ],
        "titleEn": "The Passive Suffix -ʻia — B1"
      },
      {
        "id": "causative-hoo",
        "title": "Каузативний префікс hoʻo- — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"hoʻo-\" перетворює прикметник-дієслово на каузативне дієслово — \"зробити так, щоб X стало Y\".",
            "en": {
              "text": "The prefix \"hoʻo-\" turns a stative adjective-verb into a causative verb — \"to make X become Y\"."
            }
          },
          {
            "type": "table",
            "title": "maikaʻi → hoʻomaikaʻi",
            "rows": [
              [
                "maikaʻi (добрий) → hoʻomaikaʻi",
                "поблагословити/зробити добрим"
              ]
            ],
            "en": {
              "title": "maikaʻi → hoʻomaikaʻi"
            }
          }
        ],
        "titleEn": "The Causative Prefix hoʻo- — B1"
      },
      {
        "id": "desiderative-makemake",
        "title": "Бажальна конструкція (makemake e) — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражають словом \"makemake\" (хотіти) + \"e\" + дієслово, а не окремим модальним закінченням.",
            "en": {
              "text": "A wish is expressed with \"makemake\" (to want) + \"e\" + verb, not a separate modal ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Makemake au e ʻai.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Desiderative Construction (makemake e) — A2"
      },
      {
        "id": "potential-hiki",
        "title": "Потенційна конструкція (hiki) — A2",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Спроможність виражають безособовим словом \"hiki\" (можливо) + \"iā\" + особа + \"ke\" + дієслово, а не особовим модальним дієсловом.",
            "en": {
              "text": "Ability is expressed with the impersonal word \"hiki\" (possible) + \"iā\" + person + \"ke\" + verb, rather than a personal modal verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hiki iaʻu ke ʻōlelo Hawaiʻi.",
                "Я можу говорити гавайською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Potential Construction (hiki) — A2"
      },
      {
        "id": "relative-clause-ai",
        "title": "Підрядний маркер ai — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ai\" в кінці підрядного речення вказує на місце, час чи спосіб дії, заповнюючи позицію, яку в українській зайняв би відносний займенник.",
            "en": {
              "text": "The particle \"ai\" at the end of a subordinate clause marks place, time, or manner, filling the slot a relative pronoun would occupy in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻO Honolulu ka wahi i hānai ʻia ai au.",
                "Гонолулу — місце, де я виріс."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subordinate Marker ai — B1"
      },
      {
        "id": "habitual-general-statements",
        "title": "Загальні твердження без маркера часу — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні істини й звичні дії іноді виражають дієсловом без будь-якої часової частки взагалі, спираючись лише на контекст.",
            "en": {
              "text": "General truths and habitual actions are sometimes expressed with the verb with no tense particle at all, relying purely on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hānai ʻōlelo nā kūpuna i nā keiki.",
                "Старійшини навчають дітей мови. (загальне твердження)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Statements without a Tense Marker — B1"
      },
      {
        "id": "emphatic-completed-ua-pau",
        "title": "Підкреслена завершеність (ua pau) — B1",
        "emoji": "🏁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"pau\" (закінчено) після дієслова з \"ua\" підкреслює, що дія повністю й остаточно завершена.",
            "en": {
              "text": "The word \"pau\" (finished) after a verb with \"ua\" emphasizes that the action is fully and definitively complete."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua pau kaʻu hana.",
                "Моя робота повністю закінчена."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Completion (ua pau) — B1"
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
        "id": "a-class-possession",
        "title": "Присвійність класу a (відчужувана) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Характерна риса полінезійських мов: присвійність розрізняється за класом. Клас \"a\" вживають для відчужуваних, здобутих речей — того, що можна обирати, робити чи отримувати активно.",
            "en": {
              "text": "A characteristic Polynesian feature: possession is classified by type. The \"a\" class is used for alienable, acquired things — things one can choose, make, or actively obtain."
            }
          },
          {
            "type": "table",
            "title": "kā'u, kāna",
            "rows": [
              [
                "kā'u puke",
                "моя книга (я обрав/придбав її)"
              ],
              [
                "kāna ʻīpuka",
                "його двері (збудовані, не природні)"
              ]
            ],
            "en": {
              "title": "kā'u, kāna"
            }
          }
        ],
        "titleEn": "Class-a Possession (Alienable) — B1"
      },
      {
        "id": "o-class-possession",
        "title": "Присвійність класу o (невідчужувана) — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Клас \"o\" вживають для невідчужуваних речей — частин тіла, родичів, природних властивостей і місць, де людина перебуває, а не активно обирає.",
            "en": {
              "text": "The \"o\" class is used for inalienable things — body parts, kin, natural attributes, and places one inhabits rather than actively chooses."
            }
          },
          {
            "type": "table",
            "title": "koʻu, kona",
            "rows": [
              [
                "koʻu lima",
                "моя рука (невідчужувана частина тіла)"
              ],
              [
                "kona makuahine",
                "його/її мати"
              ]
            ],
            "en": {
              "title": "koʻu, kona"
            }
          }
        ],
        "titleEn": "Class-o Possession (Inalienable) — B1"
      },
      {
        "id": "definite-article-ke-ka",
        "title": "Означений артикль ke/ka — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль однини — \"ke\" перед словами на k/ʻ/e/a і \"ka\" перед іншими — обирається фонологічно, не за родом.",
            "en": {
              "text": "The singular definite article is \"ke\" before words starting with k/ʻ/e/a and \"ka\" before others — chosen phonologically, not by gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ke kanaka",
                "людина"
              ],
              [
                "ka wahine",
                "жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Definite Article ke/ka — A1"
      },
      {
        "id": "definite-plural-article-na",
        "title": "Означена множина (nā) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Означена множина утворюється заміною артикля ke/ka на \"nā\" — сам іменник при цьому не змінюється.",
            "en": {
              "text": "The definite plural is formed by replacing the article ke/ka with \"nā\" — the noun itself doesn't change."
            }
          },
          {
            "type": "formula",
            "title": "Однина → множина",
            "rows": [
              [
                "ke kanaka",
                "nā kanaka",
                "людина → люди (лише зміна артикля)"
              ]
            ]
          }
        ],
        "titleEn": "The Definite Plural (nā) — A1"
      },
      {
        "id": "indefinite-article-he",
        "title": "Неозначений артикль he — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль \"he\" (бачений і в конструкції тотожності) вживається для невизначеного іменника, однаковий для однини й множини.",
            "en": {
              "text": "The indefinite article \"he\" (also seen in the identity construction) is used for an unspecified noun, the same for singular and plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He puke koʻu.",
                "У мене є книга. (якась книга)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Indefinite Article he — A1"
      },
      {
        "id": "directional-mai",
        "title": "Напрямкова частка mai — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mai\" після дієслова показує рух у бік мовця — типова риса океанійських мов, де напрямок закодований у самому дієслівному комплексі.",
            "en": {
              "text": "\"Mai\" after the verb marks motion towards the speaker — a typical Oceanic feature where direction is encoded right in the verb complex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E hele mai!",
                "Іди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Directional Particle mai — B1"
      },
      {
        "id": "directional-aku",
        "title": "Напрямкова частка aku — B1",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Aku\" після дієслова показує рух від мовця — протилежність \"mai\".",
            "en": {
              "text": "\"Aku\" after the verb marks motion away from the speaker — the opposite of \"mai\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E hele aku!",
                "Іди звідти!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Directional Particle aku — B1"
      },
      {
        "id": "directional-ae",
        "title": "Напрямкова частка aʻe — B1",
        "emoji": "↗️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Aʻe\" позначає рух вгору, убік або послідовну дію — третій напрямковий елемент, окремий від mai/aku.",
            "en": {
              "text": "\"Aʻe\" marks upward, sideways, or sequential motion — a third directional element, distinct from mai/aku."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Piʻi aʻe!",
                "Підіймайся!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Directional Particle aʻe — B1"
      },
      {
        "id": "reduplication-plurality",
        "title": "Редуплікація для множинності — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення дієслова чи прикметника може позначати дію, що стосується кількох осіб чи відбувається в різних місцях.",
            "en": {
              "text": "Reduplicating the verb or adjective can mark an action involving several people or happening in different places."
            }
          },
          {
            "type": "table",
            "title": "nui → nunui",
            "rows": [
              [
                "nui (великий) → nunui",
                "великі (про кількох)"
              ]
            ],
            "en": {
              "title": "nui → nunui"
            }
          }
        ],
        "titleEn": "Reduplication for Plurality — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація для інтенсивності — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама редуплікація може виражати не множину, а посилення ознаки — значення залежить від конкретного слова.",
            "en": {
              "text": "The same reduplication can express not plurality but intensification — the meaning depends on the specific word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wiki → wikiwiki",
                "швидкий → дуже швидкий/поспішати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "small-phoneme-inventory",
        "title": "Мінімалістична фонологія — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Гавайська має лише 8 приголосних звуків і 5 голосних — один з найменших фонемних інвентарів серед мов світу, що робить макрон і ʻokina особливо важливими для розрізнення слів.",
            "en": {
              "text": "Hawaiian has only 8 consonant sounds and 5 vowels — one of the smallest phoneme inventories of any world language, which makes the macron and ʻokina especially important for distinguishing words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Лише p, k, ʻ, h, l, m, n, w — повний список приголосних.",
                "дуже малий набір, що спричиняє багато схожих слів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Minimalist Phonology — A2"
      },
      {
        "id": "macron-minimal-pairs",
        "title": "Макрон (kahakō) — мінімальні пари — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Макрон над голосною (kahakō) позначає довготу й повністю змінює значення слова — без нього текст часто неоднозначний.",
            "en": {
              "text": "The macron over a vowel (kahakō) marks length and completely changes a word's meaning — without it, text is often ambiguous."
            }
          },
          {
            "type": "table",
            "title": "Мінімальні пари",
            "rows": [
              [
                "keiki (дитина)",
                "kēiki (той самий запис без макрона, інше значення в контексті)"
              ]
            ]
          }
        ],
        "titleEn": "The Macron (kahakō) — Minimal Pairs — B1"
      },
      {
        "id": "okina-minimal-pairs",
        "title": "ʻOkina — мінімальні пари — B1",
        "emoji": "🔻",
        "sections": [
          {
            "type": "intro",
            "text": "ʻOkina (голосова зупинка, позначена знаком ʻ) — повноцінна фонема, а не просто орфографічний знак: її наявність чи відсутність повністю змінює слово.",
            "en": {
              "text": "The ʻokina (a glottal stop, marked with the ʻ sign) is a full phoneme, not just an orthographic mark: its presence or absence completely changes the word."
            }
          },
          {
            "type": "table",
            "title": "kai vs kaʻi",
            "rows": [
              [
                "kai (море)",
                "kaʻi (вести/марш)"
              ]
            ]
          }
        ],
        "titleEn": "The ʻOkina — Minimal Pairs — B1"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники поєднують клас (a/o) з особою власника й навіть розрізняють однину/двоїну/множину власника.",
            "en": {
              "text": "Possessive pronouns combine the class (a/o) with the possessor's person and even distinguish singular/dual/plural of the possessor."
            }
          },
          {
            "type": "table",
            "title": "koʻu, kou, kona",
            "rows": [
              [
                "koʻu (мій, клас o)",
                "мій"
              ],
              [
                "kāna (його/її, клас a)",
                "його/її"
              ]
            ],
            "en": {
              "title": "koʻu, kou, kona"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kēia\" (це) вказує на близьке, \"kēlā\" (те) — на віддалене.",
            "en": {
              "text": "\"Kēia\" (this) points to something near, \"kēlā\" (that) to something distant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kēia puke koʻu.",
                "Ця книга моя."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "emphatic-subject-o",
        "title": "Емфатичний маркер підмета ʻo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ʻo\" перед власним іменем чи займенником у ролі підмета позначає особового маркера, подібно до фіджійського \"o\" чи самоанського \"o\".",
            "en": {
              "text": "The particle \"ʻo\" before a proper name or pronoun in subject position marks a personal article, similar to Fijian \"o\" or Samoan \"o\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻO Kawika koʻu inoa.",
                "Мене звати Кавіка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Personal Subject Marker ʻo — A2"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники в гавайській — десяткова система, числа стоять перед іменником.",
            "en": {
              "text": "Hawaiian numbers are a decimal system; numerals stand before the noun."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ʻekahi",
                "один"
              ],
              [
                "ʻelua",
                "два"
              ],
              [
                "ʻelima",
                "п'ять"
              ],
              [
                "ʻumi",
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
        "id": "comparative-oi-aku",
        "title": "Порівняльна конструкція (ʻoi aku) — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають конструкцією \"ʻoi aku\" (перевищувати) + прикметник + \"i\" + об'єкт порівняння, без окремого порівняльного суфікса.",
            "en": {
              "text": "Comparison is expressed with the construction \"ʻoi aku\" (to exceed) + adjective + \"i\" + comparison object, with no separate comparative suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOi aku kona lōʻihi i koʻu.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (ʻoi aku) — B1"
      },
      {
        "id": "predicate-initial-order",
        "title": "Присудок на початку речення — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Речення завжди починається присудком (дієсловом чи часткою з прикметником), а не підметом — навіть іменне речення починається часткою \"he\" чи артиклем, не самим підметом.",
            "en": {
              "text": "The sentence always begins with the predicate (a verb or a particle with an adjective), not the subject — even a nominal sentence starts with the particle \"he\" or article, not the subject itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maikaʻi ke keiki.",
                "Дитина добра. (присудок maikaʻi першим)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Predicate-Initial Sentence — A2"
      },
      {
        "id": "adjectives-as-stative-verbs",
        "title": "Прикметники як стативні дієслова — A2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Немає окремого класу прикметників у європейському сенсі: якість виражає стативне дієслово, яке поводиться як присудок речення.",
            "en": {
              "text": "There's no separate adjective class in the European sense: quality is expressed by a stative verb, which behaves as the sentence's predicate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nui ka hale.",
                "Дім великий. (буквально: дім \"великіє\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — A2"
      },
      {
        "id": "no-noun-plural-inflection",
        "title": "Іменник не змінюється у множині — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Сам іменник абсолютно не змінюється за числом — множину позначає виключно артикль (nā замість ke/ka).",
            "en": {
              "text": "The noun itself never changes for number at all — the plural is marked purely by the article (nā instead of ke/ka)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ka hale / nā hale",
                "дім / доми (саме слово hale незмінне)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nouns Don't Inflect for Number — A1"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання питальних слів — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова можуть поєднуватися з прийменниками чи класом присвійності, утворюючи складені питальні форми.",
            "en": {
              "text": "Question words can combine with prepositions or a possessive class, forming compound question forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na wai kēia puke?",
                "Чия це книга? (na + wai, клас a)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Interrogative Forms — B1"
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
              "text": "Basic conjunctions join words and sentences without changing word order."
            }
          },
          {
            "type": "table",
            "title": "a / akā / no ka mea",
            "rows": [
              [
                "a",
                "і"
              ],
              [
                "akā",
                "але"
              ],
              [
                "no ka mea",
                "тому що"
              ]
            ],
            "en": {
              "title": "a / akā / no ka mea"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують два іменники чи дієслово й іменник, описуючи предмет через образ чи функцію.",
            "en": {
              "text": "Compound words often join two nouns or a verb and a noun, describing an object through imagery or function."
            }
          },
          {
            "type": "table",
            "title": "hale + kūʻai",
            "rows": [
              [
                "hale (дім) + kūʻai (торгувати) = hale kūʻai",
                "крамниця (дім торгівлі)"
              ]
            ],
            "en": {
              "title": "hale + kūʻai"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "vocative-address",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання до когось часто просто ставить частку \"e\" перед іменем чи титулом, без окремого відмінка.",
            "en": {
              "text": "Direct address to someone often simply places the particle \"e\" before the name or title, with no separate case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E Kawika, e hele mai!",
                "Кавіка, йди сюди!"
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
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"ʻaʻole anei?\" (хіба не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"ʻaʻole anei?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maikaʻi ka lā, ʻaʻole anei?",
                "Гарний день, чи не так?"
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
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня — переважно запозичення з англійської назв через християнський календар, адаптовані до гавайської фонології.",
            "en": {
              "text": "The days of the week are mostly borrowed from the English Christian-calendar names, adapted to Hawaiian phonology."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Pōʻakahi",
                "понеділок"
              ],
              [
                "Pōʻakolu",
                "середа"
              ],
              [
                "Pōʻalima",
                "п'ятниця"
              ],
              [
                "Lāpule",
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
            "text": "Крім сучасних запозичених назв, у гавайській був традиційний місячний календар (helu ʻana o ka mahina) з власними назвами місяців, пов'язаними з рибальством і врожаєм.",
            "en": {
              "text": "Besides the modern borrowed names, Hawaiian had a traditional lunar calendar (helu ʻana o ka mahina) with its own month names tied to fishing and harvest."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Ianuali",
                "січень (запозичене)"
              ],
              [
                "Makaliʻi",
                "традиційна назва зимового місяця"
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
            "text": "Час запитують \"Ehia ka hola?\", а число години передають запозиченими іспансько-англійськими цифрами.",
            "en": {
              "text": "Time is asked with \"Ehia ka hola?\" and the hour number is given with borrowed numerals."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻEkolu ka hola.",
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
            "text": "Кольори — стативні дієслова, як і будь-які інші \"прикметники\" гавайської.",
            "en": {
              "text": "Colors are stative verbs, like any other Hawaiian \"adjective\"."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "keʻokeʻo",
                "білий"
              ],
              [
                "ʻeleʻele",
                "чорний"
              ],
              [
                "ʻulaʻula",
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
            "text": "Родинні терміни часто класифікаційні, а не описові: одне слово може позначати кілька родичів того самого покоління, як і в інших полінезійських мовах.",
            "en": {
              "text": "Kinship terms are often classificatory, not descriptive: one word can denote several relatives of the same generation, as in other Polynesian languages."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "makuahine",
                "мати"
              ],
              [
                "makua kāne",
                "батько"
              ],
              [
                "kaikuaʻana",
                "старша сестра/брат (того ж статі)"
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
            "text": "\"Aloha\" — найвідоміше гавайське слово у світі, що поєднує значення привітання, прощання, любові й доброзичливості.",
            "en": {
              "text": "\"Aloha\" is the most internationally known Hawaiian word, combining the meanings of greeting, farewell, love, and goodwill."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Aloha!",
                "Привіт!/Прощавай!/Любов!"
              ],
              [
                "Mahalo!",
                "Дякую!"
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
            "text": "Погоду описують стативними дієсловами, як і будь-яку іншу якість.",
            "en": {
              "text": "Weather is described with stative verbs, like any other quality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua ka ua.",
                "Йде дощ."
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
            "text": "Частини тіла — невідчужувані іменники класу o, тому присвійність виражається лише формою класу o.",
            "en": {
              "text": "Body parts are inalienable o-class nouns, so possession is expressed only with the o-class form."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "lima",
                "рука"
              ],
              [
                "poʻo",
                "голова"
              ],
              [
                "wāwae",
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
            "text": "Вік виражають конструкцією з числом років, з класом a присвійності, оскільки вік уважається \"досягнутим\", а не природженим.",
            "en": {
              "text": "Age is expressed with the number of years, using the a-class possessive, since age is considered \"achieved\" rather than inherent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He iwakālua koʻu mau makahiki.",
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
        "id": "kaona-hidden-meaning",
        "title": "Kaona — прихований поетичний зміст — C1",
        "emoji": "🌺",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса гавайської словесної традиції: \"kaona\" — це шар прихованого, часто інтимного чи політичного значення, вплетений у пісні, чанти й поезію, зрозумілий лише посвяченим слухачам.",
            "en": {
              "text": "A unique feature of Hawaiian oral tradition: \"kaona\" is a layer of hidden, often intimate or political meaning woven into songs, chants, and poetry, understood only by initiated listeners."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Багато мелé (пісень) мають подвійне прочитання — буквальне про природу й приховане про кохання чи владу.",
                "kaona вимагає культурного контексту, недоступного з самого лише перекладу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kaona — Hidden Poetic Meaning — C1"
      },
      {
        "id": "language-revitalization",
        "title": "Відродження мови з 1980-х — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "До 1980-х гавайська мала менш як 50 носіїв дитячого віку через десятиліття заборони в школах; рух ʻAha Pūnana Leo (з 1983 р.) створив мовні дитсадки повного занурення, які повернули мову новому поколінню.",
            "en": {
              "text": "By the 1980s, Hawaiian had fewer than 50 child speakers due to decades of school bans; the ʻAha Pūnana Leo movement (from 1983) created full-immersion language preschools that brought the language back to a new generation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сьогодні існують повністю гавайськомовні школи від дитсадка до університету.",
                "результат понад 40 років цілеспрямованого відродження"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Revitalization Movement since the 1980s — B2"
      },
      {
        "id": "missionary-alphabet-1826",
        "title": "Місіонерський алфавіт 1826 р. — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасний гавайський алфавіт (лише 12 літер + ʻokina) створили американські місіонери 1826 року, свідомо спростивши його до мінімального набору звуків мови — рідкісний приклад повністю сконструйованого письма для усної мови.",
            "en": {
              "text": "The modern Hawaiian alphabet (just 12 letters + ʻokina) was created by American missionaries in 1826, deliberately simplified down to the language's minimal sound set — a rare example of a writing system fully constructed for a previously oral language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A E I O U H K L M N P W ʻ — увесь алфавіт.",
                "один з найкоротших алфавітів у світі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1826 Missionary Alphabet — B2"
      },
      {
        "id": "english-loanword-adaptation",
        "title": "Адаптація англійських запозичень — A2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через малий фонемний інвентар англійські запозичення сильно спрощуються — приголосні, відсутні в гавайській, замінюються найближчими еквівалентами.",
            "en": {
              "text": "Due to the small phoneme inventory, English loanwords are heavily simplified — consonants absent in Hawaiian are replaced with the closest equivalents."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "kāleka (від card)",
                "картка"
              ],
              [
                "koloka (від cloak)",
                "плащ"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Adapting English Loanwords — A2"
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
                "Auē!",
                "Ой леле!"
              ],
              [
                "ʻAe!",
                "Так!/Добре!"
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
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"E ʻoluʻolu\" (будь ласка) буквально означає \"будь приємним/люб'язним\".",
            "en": {
              "text": "\"E ʻoluʻolu\" (please) literally means \"be pleasant/kind\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E ʻoluʻolu, kōkua mai.",
                "Будь ласка, допоможи."
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Гавайські ідіоми часто спираються на природу островів — океан, вулкани, рослини — і мають глибокі культурні асоціації.",
            "en": {
              "text": "Hawaiian idioms often draw on the islands' nature — ocean, volcanoes, plants — and carry deep cultural associations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aʻohe hana nui ka alu ʻia.",
                "Спільна праця легша (букв. \"жодна робота не завелика, коли робиться разом\")."
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
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-19 утворюються поєднанням десяти з одиницею через сполучник \"kūmā\".",
            "en": {
              "text": "Numbers 11-19 are formed by combining ten with the unit via the connector \"kūmā\"."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "ʻumikūmākahi",
                "одинадцять (десять+один)"
              ],
              [
                "iwakālua",
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
            "text": "Порядкові числівники утворюються часткою \"ʻo ka\" + число + \"o\" перед кількісним числівником.",
            "en": {
              "text": "Ordinal numbers are formed with \"ʻo ka\" + number + \"o\" before the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻo ka mua",
                "перший"
              ],
              [
                "ʻo ka lua",
                "другий"
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
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kekahi\" (хтось/якийсь) — базовий неозначений займенник, вживаний і для людей, і для предметів.",
            "en": {
              "text": "\"Kekahi\" (someone/some) is the basic indefinite pronoun, used for both people and things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kāhea kekahi.",
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
            "text": "\"ʻAʻohe\" (немає/ніхто) — заперечний варіант існування, окремий від дієслівного заперечення \"ʻaʻole\".",
            "en": {
              "text": "\"ʻAʻohe\" (there is none/no one) is the negative existential, distinct from the verbal negation \"ʻaʻole\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻAʻohe kanaka ma ʻaneʻi.",
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
        "id": "purpose-clause",
        "title": "Цільове підрядне (i mea e) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"I mea e\" + дієслово вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"I mea e\" + verb introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aʻo au i ka ʻōlelo Hawaiʻi i mea e kamaʻilio ai me koʻu kupuna.",
                "Я вчу гавайську, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (i mea e) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (no ka mea) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"No ka mea\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"No ka mea\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua lohi au no ka mea ua nalowale ke kaʻa.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (no ka mea) — B1"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (inā) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Inā\" (якщо) вводить умовне речення.",
            "en": {
              "text": "\"Inā\" (if) introduces a conditional sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Inā he wā koʻu, e hele ana au.",
                "Якби я мав час, я б пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (inā) — B1"
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
        "title": "Неправильні дієслова — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (hele-йти, hiki-могти, ʻike-знати/бачити) поводяться нерегулярно з деякими частками часу й вимагають окремого запам'ятовування.",
            "en": {
              "text": "A few common verbs (hele-to go, hiki-to be able, ʻike-to know/see) behave irregularly with certain tense particles and need to be learned individually."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hiki не поєднується зі звичайними часовими частками так само, як інші дієслова.",
                "безособова конструкція з іменним додатком через iā"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "ambiguous-possession-class",
        "title": "Неоднозначні випадки a/o-класу — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Для деяких іменників клас присвійності (a чи o) залежить від того, як мовець концептуалізує стосунок — наприклад, транспортний засіб може бути класу a (керую ним) або o (він мене несе), залежно від контексту.",
            "en": {
              "text": "For some nouns, the possessive class (a or o) depends on how the speaker conceptualizes the relationship — for example, a vehicle can be class a (I control it) or class o (it carries me), depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kaʻu kaʻa (моя машина, я керую) vs koʻu kaʻa (моя машина, вона мене везе)",
                "той самий іменник, різний клас залежно від концептуалізації"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ambiguous a/o-Class Cases — B2"
      },
      {
        "id": "fixed-chant-expressions",
        "title": "Застиглі вирази з чантів — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені фрази походять із традиційних чантів (oli) і зберігають архаїчний порядок слів чи лексику, невживану в повсякденній мові.",
            "en": {
              "text": "Some common phrases derive from traditional chants (oli) and preserve archaic word order or vocabulary not used in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I ola nō ʻoe.",
                "Хай ти живеш! (архаїчна конструкція побажання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Chant Expressions — B2"
      }
    ]
  }
];
