// Vymova — data/grammar-data/grammar_as.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AS: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "সৰ্বনাম — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ассамська писемність майже ідентична бенгальській, хоча вимова й частина лексики — зокрема самі займенники — відрізняються.",
            "en": {
              "text": "Assamese script is nearly identical to Bengali's, though pronunciation and some vocabulary — including these very pronouns — differ."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "মই (moi)"
              ],
              [
                "ти (зв. / ввічл.)",
                "তুমি / আপুনি (tumi / apuni)"
              ],
              [
                "він / вона",
                "তেওঁ (teü̃)"
              ],
              [
                "ми",
                "আমি (ami)"
              ],
              [
                "ви",
                "তোমালোক (tomalük)"
              ],
              [
                "вони",
                "তেওঁলোক (teü̃lük)"
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
        "id": "to-be",
        "title": "Дієслово \"হয়/আছে\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "হয় вживають для ототожнення (професія, якість), а আছে — для позначення наявності чи місцезнаходження.",
            "en": {
              "text": "হয় is used for identity statements (profession, quality), while আছে marks existence or location."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + হয়/আছে",
            "rows": [
              [
                "মই",
                "শিক্ষক হওঁ",
                "я вчитель"
              ],
              [
                "তেওঁ",
                "ঘৰত আছে",
                "він/вона вдома"
              ],
              [
                "তুমি",
                "ভাল আছা",
                "ти в порядку"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ ডাক্তৰ।",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Hoy/Ase (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"নাই/নহয়\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності — নাই (замість আছে), заперечення ототожнення — নহয় (замість হয়); для інших дієслів вживають না перед дієсловом.",
            "en": {
              "text": "Negation of existence uses নাই (instead of আছে), negation of identity uses নহয় (instead of হয়); other verbs are negated with না before the verb."
            }
          },
          {
            "type": "formula",
            "title": "না + дієслово / নাই / নহয়",
            "rows": [
              [
                "জানো",
                "নাজানো",
                "я знаю → я не знаю"
              ],
              [
                "ঘৰত আছে",
                "ঘৰত নাই",
                "він вдома → його немає вдома"
              ],
              [
                "শিক্ষক হয়",
                "শিক্ষক নহয়",
                "він вчитель → він не вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই নাজানো।",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Nai/Nohoy — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"নে\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються додаванням частки নে в кінець стверджувального речення.",
            "en": {
              "text": "Yes/no questions are most often formed by adding the particle নে at the end of the statement."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + নে?",
            "rows": [
              [
                "তুমি ভাল আছা।",
                "তুমি ভাল আছা নে?",
                "Ти в порядку. → Ти в порядку?"
              ],
              [
                "তেওঁ আহিছে।",
                "তেওঁ আহিছে নে?",
                "Він прийшов. → Він прийшов?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তুমি ভোকাতুৰ নে?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Ne — A1"
      },
      {
        "id": "three-tier-politeness-pronouns",
        "title": "Три рівні ввічливості \"তই/তুমি/আপুনি\" — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від бенгальської (два рівні), ассамська має три рівні ввічливості для \"ти\": তই (дуже фамільярне, до дітей/дуже близьких), তুমi (нейтральне), আপুনি (формальне/поважне).",
            "en": {
              "text": "Unlike Bengali (two levels), Assamese has three politeness levels for \"you\": তই (very intimate, to children/very close ones), তুমি (neutral), আপুনি (formal/respectful)."
            }
          },
          {
            "type": "table",
            "title": "Три рівні",
            "rows": [
              [
                "তই",
                "дуже фамільярне (діти, найближчі)"
              ],
              [
                "তুমি",
                "нейтральне (друзі, рівні)"
              ],
              [
                "আপুনি",
                "формальне (старші, незнайомці)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আপুনি ক'ৰ পৰা আহিছে?",
                "Звідки Ви приїхали? (формально)"
              ]
            ]
          }
        ],
        "titleEn": "Three Politeness Levels \"Toi/Tumi/Apuni\" — A2"
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
        "id": "present-simple",
        "title": "Теперішній простий час — A1",
        "titleEn": "Present Simple Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній простий час утворюється основою дієслова з особовим закінченням -ও/-এ/-অ, що також відображає рівень ввічливості підмета.",
            "en": {
              "text": "The present simple is formed with the verb stem plus a personal ending -ও/-এ/-অ, which also reflects the politeness level of the subject."
            }
          },
          {
            "type": "formula",
            "title": "основа + закінчення",
            "rows": [
              [
                "মই",
                "কৰোঁ",
                "я роблю"
              ],
              [
                "তুমি",
                "কৰা",
                "ти робиш"
              ],
              [
                "তেওঁ",
                "কৰে",
                "він/вона робить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই কিতাপ পঢ়োঁ।",
                "Я читаю книгу."
              ],
              [
                "তেওঁ কাম কৰে।",
                "Він/вона працює."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "Теперішній тривалий час — A2",
        "titleEn": "Present Continuous — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія виражається дієприслівниковою формою на -ি плюс допоміжне আছে (є/перебуває).",
            "en": {
              "text": "An ongoing action is expressed with the verb's -ি converb form plus the auxiliary আছে (to be/exist)."
            }
          },
          {
            "type": "formula",
            "title": "основа-ি + আছোঁ/আছা/আছে",
            "rows": [
              [
                "মই",
                "কৰি আছোঁ",
                "я зараз роблю"
              ],
              [
                "তেওঁ",
                "খাই আছে",
                "він/вона зараз їсть"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁলোক খেলি আছে।",
                "Вони зараз граються."
              ],
              [
                "মই লিখি আছোঁ।",
                "Я зараз пишу."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-simple",
        "title": "Минулий простий час (-ইল/-িলো) — A2",
        "titleEn": "Past Simple (-Il/-Ilo) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий простий час утворюється основою з суфіксом -ইল, до якого додається особове закінчення.",
            "en": {
              "text": "The past simple is formed with the stem plus the suffix -ইল, followed by the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "основа + ইল + закінчення",
            "rows": [
              [
                "মই",
                "কৰিলোঁ",
                "я зробив"
              ],
              [
                "তুমি",
                "কৰিলা",
                "ти зробив"
              ],
              [
                "তেওঁ",
                "কৰিলে",
                "він/вона зробив(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই কালি কিতাপখন পঢ়িলোঁ।",
                "Учора я прочитав книгу."
              ],
              [
                "তেওঁ ঘৰলৈ গ'ল।",
                "Він/вона пішов(-ла) додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous",
        "title": "Минулий тривалий час — B1",
        "titleEn": "Past Continuous — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий тривалий час — це та сама дієприслівникова форма на -ি плюс допоміжне দієслово \"бути\" в минулому (আছিলোঁ тощо).",
            "en": {
              "text": "The past continuous is the same -ি converb form plus the auxiliary \"to be\" in the past (আছিলোঁ, etc.)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই পঢ়ি আছিলোঁ।",
                "Я читав (тривало)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ কাম কৰি আছিল।",
                "Він/вона працював(-ла)."
              ],
              [
                "শিশুবোৰ খেলি আছিল।",
                "Діти гралися."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (-ব) — A2",
        "titleEn": "Future Tense (-B) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється основою з суфіксом -ব, до якого додається особове закінчення.",
            "en": {
              "text": "The future tense is formed with the stem plus the suffix -ব, followed by the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "основа + ব + закінчення",
            "rows": [
              [
                "মই",
                "কৰিম",
                "я зроблю"
              ],
              [
                "তুমি",
                "কৰিবা",
                "ти зробиш"
              ],
              [
                "তেওঁ",
                "কৰিব",
                "він/вона зробить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই কাইলৈ আহিম।",
                "Завтра я прийду."
              ],
              [
                "তেওঁ চিঠি লিখিব।",
                "Він/вона напише листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфект (-ইছে) — B1",
        "titleEn": "Perfect Tense (-Iche) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражає дію з актуальним результатом і утворюється суфіксом -ইছে, доданим до основи.",
            "en": {
              "text": "The perfect expresses an action with a present result, formed with the suffix -ইছে added to the stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই খাই থৈছোঁ।",
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
                "তেওঁ আহি পালেহি।",
                "Він/вона вже прибув(-ла)."
              ],
              [
                "মই সেই কিতাপখন পঢ়িছোঁ।",
                "Я вже прочитав ту книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб (з рівнями ввічливості) — A2",
        "titleEn": "Imperative Mood (With Politeness Levels) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма змінюється залежно від рівня ввічливості до когось звертаються, як і звичайне дієвідмінювання.",
            "en": {
              "text": "The imperative form changes depending on the politeness level of the addressee, just like regular conjugation."
            }
          },
          {
            "type": "table",
            "title": "\"যোৱা\" (йти) — наказовий",
            "rows": [
              [
                "তই (фамільярно)",
                "যা!",
                "Іди!"
              ],
              [
                "আপুনি (формально)",
                "যাওক!",
                "Ідіть, будь ласка!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ইয়ালৈ আহা।",
                "Іди сюди."
              ],
              [
                "অনুগ্ৰহ কৰি বহক।",
                "Будь ласка, сідайте."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-conditional",
        "title": "Умовний спосіб (যদি...তেন্তে) — B1",
        "titleEn": "Conditional Mood (Yodi...Tente) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться частками যদি (якщо) на початку й তেন্তে (то) у головній частині.",
            "en": {
              "text": "A conditional sentence is introduced with যদি (if) at the start and তেন্তে (then) in the main clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "যদি সময় থাকে, তেন্তে আহিম।",
                "Якщо буде час, то прийду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "যদি বৰষুণ নহয়, আমি যাম।",
                "Якщо не буде дощу, ми підемо."
              ],
              [
                "যদি জানিলোঁহেঁতেন, ক'লোঁহেঁতেন।",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-past",
        "title": "Звичайна дія в минулому (-ইছিল) — B1",
        "titleEn": "Habitual Past (-Ichil) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, повторювана дія в минулому виражається суфіксом -ইছিল, доданим до основи.",
            "en": {
              "text": "A habitual, repeated past action is expressed with the suffix -ইছিল added to the stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই সদায় ইয়ালৈ আহিছিলোঁ।",
                "Я завжди сюди приходив (раніше)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ প্ৰতিদিনে পঢ়িছিল।",
                "Він/вона щодня навчався(-лась) (раніше)."
              ],
              [
                "আমি একেলগে খেলিছিলো।",
                "Ми разом гралися (раніше)."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-verb-light-verb",
        "title": "Складені дієслова (серійна конструкція) — B1",
        "titleEn": "Compound (Light) Verb Constructions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Дві дієслівні основи можуть поєднуватися в одну складену конструкцію, де друге дієслово (\"легке\") додає відтінок завершеності чи раптовості до першого.",
            "en": {
              "text": "Two verb stems can combine into one compound construction, where the second (\"light\") verb adds a shade of completion or suddenness to the first."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "খাই পেলালে",
                "з'їв усе (буквально: з'ївши, кинув)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ কামটো কৰি থলে।",
                "Він завершив роботу."
              ],
              [
                "মই কাগজখন পঢ়ি চালোঁ।",
                "Я прочитав документ (для перевірки)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-past",
        "title": "Заперечення минулого часу — B1",
        "titleEn": "Negative Past Tense — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У минулому часі частка না ставиться безпосередньо перед дієсловом, а форма самого дієслова трохи змінюється порівняно зі стверджувальною.",
            "en": {
              "text": "In the past tense, the particle না goes right before the verb, and the verb form itself shifts slightly compared to the affirmative."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই নাখালোঁ।",
                "Я не їв."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ নাহিল।",
                "Він/вона не прийшов(-ла)."
              ],
              [
                "আমি নাযাওঁ।",
                "Ми не пішли."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-future",
        "title": "Заперечення майбутнього часу — B1",
        "titleEn": "Negative Future Tense — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний майбутній час теж утворюється часткою না перед дієсловом у майбутній формі.",
            "en": {
              "text": "The negative future is also formed with the particle না before the verb in the future form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই নাযাম।",
                "Я не піду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ নাআহিব।",
                "Він/вона не прийде."
              ],
              [
                "বৰষুণ নাহ'ব।",
                "Дощу не буде."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-honorific-agreement",
        "title": "Узгодження дієслова з рівнем ввічливості — B1",
        "titleEn": "Verb Agreement by Politeness Level — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово узгоджується не лише з особою й числом, а й із тим, наскільки ввічливо мовець звертається до підмета — та сама особа отримує різне закінчення дієслова залежно від рівня поваги.",
            "en": {
              "text": "The verb agrees not only with person and number but also with how politely the speaker is addressing the subject — the same person takes a different verb ending depending on the level of respect."
            }
          },
          {
            "type": "table",
            "title": "\"যোৱা\" (йти) — за рівнем",
            "rows": [
              [
                "তই যাচ",
                "ти йдеш (фамільярно)"
              ],
              [
                "তুমি যোৱা",
                "ти йдеш (нейтрально)"
              ],
              [
                "আপুনি যায়",
                "Ви йдете (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আপুনি ক'ত থাকে?",
                "Де Ви живете? (формально)"
              ],
              [
                "তই ক'ত থাকিস?",
                "Де ти живеш? (фамільярно)"
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
        "id": "accusative-dative-case-k",
        "title": "Знахідно-давальний відмінок (-ক) — A2",
        "titleEn": "Accusative-Dative Case (-K) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ক виражає і знахідний (означений прямий додаток), і давальний (\"кому\") відмінок, доданий до кінця іменника.",
            "en": {
              "text": "The suffix -ক expresses both the accusative (a definite direct object) and the dative (\"to whom\") case, added to the end of the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ৰামক",
                "Раму (додаток)"
              ],
              [
                "শিশুটোক",
                "дитину"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই ৰামক দেখিলোঁ।",
                "Я побачив Раму."
              ],
              [
                "তেওঁ শিশুটোক কিতাপ দিলে।",
                "Він дав дитині книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case-r",
        "title": "Родовий відмінок (-ৰ) — A2",
        "titleEn": "Genitive Case (-R) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-ৰ) виражає належність і ставиться після власника, перед означуваним іменником.",
            "en": {
              "text": "The genitive case (-ৰ) expresses possession and is placed after the possessor, before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ৰামৰ ঘৰ",
                "дім Рами"
              ],
              [
                "মোৰ কিতাপ",
                "моя книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এইটো তোমাৰ কিতাপ নে?",
                "Це твоя книга?"
              ],
              [
                "তাইৰ ভাই ডাক্তৰ।",
                "Її брат лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case-t",
        "title": "Місцевий відмінок (-ত) — A2",
        "titleEn": "Locative Case (-T) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (-ত) відповідає на питання \"де?\" і додається безпосередньо до іменника.",
            "en": {
              "text": "The locative case (-ত) answers \"where?\" and is added directly to the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ঘৰত",
                "у домі"
              ],
              [
                "বজাৰত",
                "на ринку"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "কিতাপখন মেজত আছে।",
                "Книга на столі."
              ],
              [
                "তেওঁ স্কুলত আছে।",
                "Він/вона в школі."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Орудний відмінок (-এৰে) — B1",
        "titleEn": "Instrumental Case (-Ere) — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (-এৰে) позначає знаряддя дії або засіб пересування.",
            "en": {
              "text": "The instrumental case (-এৰে) marks the tool of an action or a means of transport."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "কলমেৰে",
                "ручкою"
              ],
              [
                "গাড়ীএৰে",
                "машиною"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই কলমেৰে লিখোঁ।",
                "Я пишу ручкою."
              ],
              [
                "তেওঁ গাড়ীএৰে আহিল।",
                "Він/вона приїхав(-ла) машиною."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-grammatical-gender",
        "title": "Відсутність граматичного роду — A1",
        "titleEn": "No Grammatical Gender — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді, ассамська взагалі не має граматичного роду — жоден прикметник чи дієслово не змінюються за родом.",
            "en": {
              "text": "Unlike Hindi, Assamese has no grammatical gender at all — no adjective or verb changes for gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ভাল ল'ৰা / ভাল ছোৱালী",
                "хороший хлопчик / хороша дівчинка — та сама форма ভাল"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ ভাল মানুহ।",
                "Він/вона хороша людина."
              ],
              [
                "ল'ৰাটো আৰু ছোৱালীজনী দুয়ো স্মাৰ্ট।",
                "І хлопчик, і дівчинка розумні."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifiers-overview",
        "title": "Класифікатори (জন/টা/খন) — A2",
        "titleEn": "Classifiers (Zon/Ta/Khon) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб порахувати іменник, після числа додають класифікатор, обраний за типом предмета: জন для людей, টা для дрібних предметів, খন для плоских/великих речей.",
            "en": {
              "text": "To count a noun, a classifier is added after the number, chosen by the type of the object: জন for people, টা for small objects, খন for flat/large things."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "দুজন মানুহ",
                "дві людини"
              ],
              [
                "এখন কিতাপ",
                "одна книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মোৰ তিনিজন ভাই আছে।",
                "У мене є три брати."
              ],
              [
                "এটা আপেল দিয়া।",
                "Дай одне яблуко."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifier-examples",
        "title": "Класифікатор при означеному артиклі — B1",
        "titleEn": "Classifiers as Definite Markers — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ці ж класифікатори, додані до іменника без числа, функціонують ще й як означений артикль (\"цей саме\").",
            "en": {
              "text": "These same classifiers, added to a noun without a number, also function as a definite article (\"this specific one\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "কিতাপ (книга)",
                "কিতাপখন",
                "ця книга (означ.)"
              ],
              [
                "ল'ৰা (хлопчик)",
                "ল'ৰাটো",
                "цей хлопчик (означ.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ল'ৰাটো ভাল।",
                "Цей хлопчик хороший."
              ],
              [
                "কিতাপখন মেজত আছে।",
                "Ця книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-marker-bilak-hot",
        "title": "Множина (-বিলাক/-হঁত) — A2",
        "titleEn": "Plural Markers (-Bilak/-Hot) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -বিলাক (для неживого) або -হঁত (переважно для людей).",
            "en": {
              "text": "The plural is formed with the suffix -বিলাক (for inanimate nouns) or -হঁত (mostly for people)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "কিতাপ (книга)",
                "কিতাপবিলাক",
                "книги"
              ],
              [
                "ল'ৰা (хлопчик)",
                "ল'ৰাহঁত",
                "хлопчики"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "কিতাপবিলাক মেজত আছে।",
                "Книги на столі."
              ],
              [
                "ল'ৰাহঁত খেলি আছে।",
                "Хлопчики граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-overview",
        "title": "Післяйменники — A2",
        "titleEn": "Postpositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Ассамська вживає післяйменники (не прийменники), що стоять після іменника в родовому відмінку: ওপৰত (на), তলত (під), লগত (з).",
            "en": {
              "text": "Assamese uses postpositions (not prepositions), placed after the noun in the genitive case: ওপৰত (on), তলত (under), লগত (with)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "মেজৰ ওপৰত",
                "на столі"
              ],
              [
                "ঘৰৰ তলত",
                "під домом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "কিতাপখন মেজৰ ওপৰত আছে।",
                "Книга на столі."
              ],
              [
                "মই বন্ধুৰ লগত আছোঁ।",
                "Я з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-no-agreement",
        "title": "Прикметники не змінюються — A1",
        "titleEn": "Invariable Adjectives — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники не узгоджуються ні за родом, ні за числом, ні за відмінком — та сама форма стоїть перед будь-яким іменником.",
            "en": {
              "text": "Adjectives don't agree for gender, number, or case — the same form goes before any noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ডাঙৰ ঘৰ",
                "великий дім"
              ],
              [
                "ডাঙৰ ঘৰবিলাক",
                "великі доми — без зміни форми"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ডাঙৰ কিতাপখন মোৰ।",
                "Велика книга моя."
              ],
              [
                "সৰু শিশুটো শুই আছে।",
                "Маленька дитина спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (কাৰ) — A2",
        "titleEn": "Comparative & Superlative (Kar) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражається конструкцією \"X кар (за) прикметник\" замість окремої граматичної форми прикметника.",
            "en": {
              "text": "Comparison is expressed with the construction \"X than adjective\" rather than a separate grammatical form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "তাতকৈ ডাঙৰ",
                "більший за те"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এই ঘৰটো তাতকৈ ডাঙৰ।",
                "Цей дім більший за той."
              ],
              [
                "তেওঁ আটাইতকৈ ভাল।",
                "Він/вона найкращий(-а) за всіх."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (এই/সেই) — A1",
        "titleEn": "Demonstratives (Ei/Sei) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "এই কিতাপ",
                "ця книга"
              ],
              [
                "সেই ঘৰ",
                "той дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এইটো মোৰ।",
                "Це моє."
              ],
              [
                "সেই পাহাৰটো ওখ।",
                "Та гора висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-zi",
        "title": "Відносний займенник \"যি\" — B1",
        "titleEn": "Relative Pronoun \"Ji\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник যি (\"який/що\") вводить підрядне означальне речення й часто парується з вказівним সেই в головній частині.",
            "en": {
              "text": "The relative pronoun যি (\"who/which/that\") introduces a relative clause and is often paired with the demonstrative সেই in the main clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "যি মানুহ আহিল, সেই মোৰ বন্ধু।",
                "Людина, яка прийшла, — мій друг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "যি কিতাপ পঢ়িছা, সেইখন ভাল।",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "যি ল'ৰাই কথা কৈছিল, সি মোৰ ভাই।",
                "Хлопець, який говорив, — мій брат."
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
                "কোন",
                "хто"
              ],
              [
                "কি",
                "що"
              ],
              [
                "ক'ত",
                "де"
              ],
              [
                "কেতিয়া",
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
                "তোমাৰ নাম কি?",
                "Як тебе звати?"
              ],
              [
                "তুমি ক'ত থাকা?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-nije",
        "title": "Зворотний займенник \"নিজে\" — B1",
        "titleEn": "Reflexive Pronoun \"Nije\" (Self) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник নিজে (\"сам/самий\") вказує на підмет і часто поєднується з присвійним займенником.",
            "en": {
              "text": "The reflexive pronoun নিজে (\"self\") refers back to the subject and is often combined with a possessive."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "মই নিজে কৰিলোঁ",
                "я сам зробив"
              ],
              [
                "নিজৰ ঘৰ",
                "власний дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তেওঁ নিজে আহিল।",
                "Він прийшов сам."
              ],
              [
                "মই নিজকে দাপোনত দেখিলোঁ।",
                "Я побачив себе в дзеркалі."
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
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "মোৰ",
                "мій"
              ],
              [
                "তোমাৰ",
                "твій"
              ],
              [
                "তেওঁৰ",
                "його/її"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মোৰ ঘৰ ডাঙৰ।",
                "Мій дім великий."
              ],
              [
                "তাইৰ কিতাপ মেজত আছে।",
                "Її книга на столі."
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
                "এক",
                "1"
              ],
              [
                "দুই",
                "2"
              ],
              [
                "তিনি",
                "3"
              ],
              [
                "দহ",
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
                "মোৰ দুজনী ভনী আছে।",
                "У мене дві сестри."
              ],
              [
                "দহজন মানুহ আহিল।",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier-order",
        "title": "Порядок число + класифікатор + іменник — A2",
        "titleEn": "Number + Classifier + Noun Order — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Порядок слів при рахунку: числівник, потім класифікатор, потім іменник — і саме класифікатор, а не сам іменник, змінюється за числом.",
            "en": {
              "text": "The word order when counting is: numeral, then classifier, then noun — and it's the classifier, not the noun itself, that reflects the number."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "তিনিটা আপেল",
                "три яблука (число-класифікатор-іменник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মোৰ পাঁচখন কিতাপ আছে।",
                "У мене є п'ять книг."
              ],
              [
                "দুজন শিক্ষক আহিল।",
                "Прийшло двоє вчителів."
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
                "বহুত",
                "багато"
              ],
              [
                "অলপ",
                "мало"
              ],
              [
                "কেইটামান",
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
                "মোৰ বহুত কিতাপ আছে।",
                "У мене багато книг."
              ],
              [
                "অলপ পানী দিয়া।",
                "Дай трохи води."
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
                "আৰু",
                "і, та"
              ],
              [
                "কিন্তু",
                "але"
              ],
              [
                "বা",
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
                "মই আৰু তুমি বন্ধু।",
                "Я і ти — друзі."
              ],
              [
                "যাব বিচাৰোঁ, কিন্তু সময় নাই।",
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
                "কিয়নো",
                "тому що"
              ],
              [
                "যদি",
                "якщо"
              ],
              [
                "যেতিয়া",
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
                "মই সুখী কিয়নো তুমি আহিলা।",
                "Я радий, тому що ти прийшов."
              ],
              [
                "যেতিয়া মই মুকলি থাকিম, ফোন কৰিম।",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні слова (লাগে/পাৰো) — A2",
        "titleEn": "Modal Words (Lage/Paro) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "মই যাব লাগে।",
                "Мені треба йти."
              ],
              [
                "মই সাঁতুৰিব পাৰোঁ।",
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
                "তোমাক পঢ়িব লাগে।",
                "Тобі треба вчитися."
              ],
              [
                "মই সহায় কৰিব বিচাৰোঁ।",
                "Я хочу допомогти."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-sov",
        "title": "Порядок слів SOV — A1",
        "titleEn": "SOV Word Order — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), дієслово завжди стоїть у кінці речення.",
            "en": {
              "text": "The basic word order is subject-object-verb (SOV), with the verb always at the end of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই কিতাপ পঢ়োঁ।",
                "Я читаю книгу (буквально: я книгу читаю)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মাকে ভাত ৰান্ধে।",
                "Мама готує рис."
              ],
              [
                "শিক্ষকে পাঠ পঢ়ায়।",
                "Вчитель викладає урок."
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
                "সোমবাৰ",
                "понеділок"
              ],
              [
                "শনিবাৰ",
                "субота"
              ],
              [
                "দেওবাৰ",
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
                "আজি সোমবাৰ।",
                "Сьогодні понеділок."
              ],
              [
                "মই দেওবাৰে জিৰণি লওঁ।",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-assamese-calendar",
        "title": "Місяці ассамського календаря — B1",
        "titleEn": "Months of the Assamese Calendar — B1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім григоріанських назв, для традиційних свят вживається власний ассамський календар з місяцями, що починається з бохага (середина квітня).",
            "en": {
              "text": "Besides the Gregorian names, traditional festivals use the Assamese calendar with its own months, starting with Bohag (mid-April)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "বহাগ",
                "перший місяць (квітень-травень)"
              ],
              [
                "মাঘ",
                "десятий місяць (січень-лютий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "বহাগ মাহত বিহু হয়।",
                "У місяці бохаг святкують Біху."
              ],
              [
                "মাঘ বিহু জানুৱাৰীত পৰে।",
                "Магх-Біху припадає на січень."
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
                "কেইমান বজিল?",
                "Котра година?"
              ],
              [
                "তিনি বাজিছে।",
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
                "আমি ছটা বজাত লগ পামহি।",
                "Зустрінемось о шостій."
              ],
              [
                "এতিয়া দুপৰীয়া।",
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
                "নমস্কাৰ",
                "Привіт"
              ],
              [
                "ধন্যবাদ",
                "Дякую"
              ],
              [
                "বিদায়",
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
                "আপুনি কেনে আছে?",
                "Як Ви?"
              ],
              [
                "বহুত ধন্যবাদ।",
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
                "বাতৰি ৰ'দ।",
                "Сонячно."
              ],
              [
                "বৰষুণ হৈছে।",
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
                "আজি জাৰ।",
                "Сьогодні холодно."
              ],
              [
                "বৰ গৰম।",
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
                "মূৰ ধৰা",
                "розібратися з чимось (буквально: тримати голову)"
              ],
              [
                "হাত সাৱটি বহা",
                "сидіти склавши руки (нічого не робити)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তুমি হাত সাৱটি বহি আছা।",
                "Ти сидиш склавши руки."
              ],
              [
                "এইটো মই মূৰ ধৰি চাম।",
                "Я з цим розберуся."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Прислівники — A2",
        "titleEn": "Adverbs — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "সোনকালে",
                "швидко"
              ],
              [
                "লাহে লাহে",
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
                "তেওঁ সোনকালে দৌৰে।",
                "Він швидко бігає."
              ],
              [
                "লাহে লাহে কথা কোৱা।",
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
                "-তা",
                "утворює абстрактні іменники (স্বাধীন→স্বাধীনতা, вільний→свобода)"
              ],
              [
                "-ৱালা",
                "утворює назви професій (দুধ→দুধৱালা, молоко→молочник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "স্বাধীনতা গুৰুত্বপূৰ্ণ।",
                "Свобода важлива."
              ],
              [
                "দুধৱালা আহিছে।",
                "Прийшов молочник."
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
                "হাত (рука) + ঘড়ী (годинник)",
                "হাতঘড়ী (наручний годинник)"
              ],
              [
                "গা (тіло) + পিন (шпилька)",
                "গাপিন (застібка)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মোৰ নতুন হাতঘড়ী আছে।",
                "У мене новий наручний годинник."
              ],
              [
                "এইটো বহুত পুৰণি।",
                "Це дуже старе."
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
                "বসন্ত",
                "весна"
              ],
              [
                "গ্ৰীষ্ম",
                "літо"
              ],
              [
                "শৰৎ",
                "осінь"
              ],
              [
                "শীত",
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
                "গ্ৰীষ্মকালত বৰ গৰম।",
                "Влітку дуже жарко."
              ],
              [
                "মই শৰৎ ভাল পাওঁ।",
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
                "ইয়াৰ দাম কিমান?",
                "Скільки коштує?"
              ],
              [
                "এশ টকা।",
                "Сто рупій."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এই কিতাপখনৰ দাম দুশ টকা।",
                "Ця книга коштує двісті рупій."
              ],
              [
                "বৰ দামী।",
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
                "মই ভাবোঁ...",
                "Я думаю, що..."
              ],
              [
                "মোৰ মতে...",
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
                "মই ভাবোঁ তুমি শুদ্ধ।",
                "Я думаю, що ти правий."
              ],
              [
                "মোৰ মতে এইটো ভাল ধাৰণা।",
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
                "আজি / কাইলৈ / কালি",
                "сьогодні / завтра / вчора"
              ],
              [
                "এতিয়া / পিছত",
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
                "কাইলৈ লগ পামহি।",
                "Побачимось завтра."
              ],
              [
                "মই এতিয়া ব্যস্ত।",
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
                "কোনোবাই",
                "хтось"
              ],
              [
                "কিবা",
                "щось"
              ],
              [
                "কোনেও নাই",
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
                "কোনোবাই মোক ফোন কৰিলে।",
                "Хтось мені подзвонив."
              ],
              [
                "মই কিবা শুনিলোঁ।",
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
                "আৰে!",
                "Ой!"
              ],
              [
                "বাঃ!",
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
                "আৰে, কি ধুনীয়া!",
                "Ой, як гарно!"
              ],
              [
                "বাঃ, ভাল বাতৰি!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція \"є/немає\" (আছে/নাই) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Ase/Nai) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "পানী আছে।",
                "Є вода."
              ],
              [
                "সময় নাই।",
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
                "ইয়াত বহুত মানুহ আছে।",
                "Тут багато людей."
              ],
              [
                "ইয়াত দোকান নাই।",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі форми часто утворюються суфіксом -টি, доданим до маленьких/дорогих істот чи предметів.",
            "en": {
              "text": "Diminutive/affectionate forms are often made with the suffix -টি, added to small or dear beings or things."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "শিশু (дитина)",
                "শিশুটি",
                "малятко"
              ],
              [
                "মা (мама)",
                "মাকটি",
                "матусенька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "শিশুটি শুই আছে।",
                "Малятко спить."
              ],
              [
                "মোৰ মাকটি বৰ ভাল।",
                "Моя матусенька дуже добра."
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
                "দেউতা/বাইদেউ",
                "пан/пані (старший)"
              ],
              [
                "ককাইদেউ/বাইদেউ",
                "старший брат/сестра (звертання до незнайомих)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "নমস্কাৰ, ককাইদেউ।",
                "Вітаю, старший брате."
              ],
              [
                "বাইদেউ, ইয়ালৈ আহক।",
                "Пані, підійдіть сюди."
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
                "অলপ পানীতে মাছ মৰে।",
                "У малій воді риба гине (терпіння важливе для успіху)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তাড়াতাড়ি নকৰিবা, অলপ পানীতে মাছ মৰে।",
                "Не поспішай, терпіння важливе."
              ],
              [
                "যত গৰ্জে তত বৰষুণ নহয়।",
                "Де гримить, там не завжди дощ (не суди з виду)."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-sanskrit-english",
        "title": "Запозичення з санскриту та англійської — B1",
        "titleEn": "Loanwords from Sanskrit & English — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Формальна й наукова лексика значною мірою запозичена з санскриту, тоді як сучасна технічна лексика часто йде прямо з англійської.",
            "en": {
              "text": "Formal and scholarly vocabulary is largely borrowed from Sanskrit, while modern technical vocabulary often comes straight from English."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "বিদ্যালয় (з санскр.)",
                "школа (формально)"
              ],
              [
                "মবাইল (з англ.)",
                "мобільний телефон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই বিদ্যালয়লৈ যাওঁ।",
                "Я йду до школи."
              ],
              [
                "মোৰ মবাইল নষ্ট হ'ল।",
                "Мій телефон зламався."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-marking-deep",
        "title": "Означеність об'єкта в детально — B1",
        "titleEn": "Object Definiteness in Depth — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений прямий додаток обов'язково отримує -ক, а неозначений — залишається без нього, тож наявність чи відсутність -ক сама по собі позначає означеність.",
            "en": {
              "text": "A definite direct object must take -ক, while an indefinite one stays without it, so the presence or absence of -ক itself signals definiteness."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "মই কিতাপ পঢ়িলোঁ। (неозначено)",
                "মই কিতাপখনক পঢ়িলোঁ। (означено)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মই এখন কিতাপ কিনিলোঁ।",
                "Я купив (якусь) книгу."
              ],
              [
                "মই সেই কিতাপখনক পঢ়িলোঁ।",
                "Я прочитав ту (означену) книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "serial-verb-deep",
        "title": "Детально про серійні дієслова — B2",
        "titleEn": "Serial Verbs in More Depth — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Різні \"легкі\" дієслова у складеній конструкції додають різні відтінки: থোৱা (лишити) — раптовість, চোৱা (подивитись) — пробну дію, পেলোৱা (кинути) — повна завершеність.",
            "en": {
              "text": "Different \"light\" verbs in a compound construction add different shades: থোৱা (leave) — suddenness, চোৱা (look) — a trial action, পেলোৱা (throw) — full completion."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "খাই চোৱা",
                "спробуй з'їсти"
              ],
              [
                "খাই পেলোৱা",
                "з'їсти геть усе"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এবাৰ খাই চোৱা।",
                "Спробуй один раз з'їсти."
              ],
              [
                "সকলো খাই পেলালে।",
                "Він з'їв усе геть."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-verb-tables",
        "title": "Порівняльна таблиця дієвідмінювання за рівнями — B1",
        "titleEn": "Comparative Conjugation Table by Politeness Level — B1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "table",
            "title": "\"খোৱা\" (їсти) — три рівні",
            "rows": [
              [
                "তই খাচ (фамільярно)",
                "তুমি খোৱা (нейтрально)",
                "আপুনি খায় (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তই কি খাচ?",
                "Що ти їси? (фамільярно)"
              ],
              [
                "আপুনি কি খায়?",
                "Що Ви їсте? (формально)"
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
                "প্ৰথম",
                "перший"
              ],
              [
                "দ্বিতীয়",
                "другий"
              ],
              [
                "তৃতীয়",
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
                "এইটো মোৰ প্ৰথম কিতাপ।",
                "Це моя перша книга."
              ],
              [
                "তেওঁ দ্বিতীয় স্থান পালে।",
                "Він/вона зайняв(-ла) друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличний відмінок і частка — A2",
        "titleEn": "Vocative Case & Particle — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання до людини часто супроводжується часткою হে/অ, доданою після імені чи родинного слова.",
            "en": {
              "text": "Direct address to a person is often accompanied by the particle হে/অ, added after the name or kinship word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "মা গ'",
                "мамо!"
              ],
              [
                "বন্ধু হে",
                "друже!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মা গ', ইয়ালৈ আহা!",
                "Мамо, іди сюди!"
              ],
              [
                "বন্ধু হে, শুনা।",
                "Друже, послухай."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Порядок прикметників перед іменником — B1",
        "titleEn": "Adjective Order Before the Noun — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька прикметників перед іменником зазвичай ідуть у порядку: розмір/якість, потім колір, найближче до іменника.",
            "en": {
              "text": "Multiple adjectives before a noun usually go in the order: size/quality, then color, closest to the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ডাঙৰ ৰঙা ঘৰ",
                "великий червоний дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "সৰু বগা কুকুৰটো।",
                "Маленький білий собака."
              ],
              [
                "ধুনীয়া নতুন গাড়ী।",
                "Гарна нова машина."
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
        "id": "voiceless-velar-fricative-x",
        "title": "Унікальний звук /x/ — B1",
        "titleEn": "The Unique /X/ Sound — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже ідентичної бенгальської писемності, ассамська вимова того самого знака খ передає глухий увулярний/велярний фрикативний звук /x/ (як у німецькому \"ach\"), якого в бенгальській немає.",
            "en": {
              "text": "Despite the near-identical script shared with Bengali, Assamese pronounces the same letter খ as a voiceless uvular/velar fricative /x/ (like German \"ach\"), a sound Bengali doesn't have."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "খং (гнів)",
                "вимовляється з /x/, не /kʰ/, як у бенгальській"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মোৰ খং উঠিছে।",
                "Я розгнівався."
              ],
              [
                "তেওঁৰ খং বৰ বেছি।",
                "У нього дуже поганий характер (буквально: багато гніву)."
              ]
            ]
          }
        ]
      },
      {
        "id": "assamese-specific-letters",
        "title": "Літери ৰ і ৱ, унікальні для ассамської — B1",
        "titleEn": "The Letters Ra and Wa, Unique to Assamese — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Ассамський варіант письма має дві літери, яких немає в бенгальській абетці: ৰ (ra) і ৱ (wa) — вони позначають звуки, відсутні або по-іншому записані в бенгальській.",
            "en": {
              "text": "The Assamese script has two letters absent from the Bengali alphabet: ৰ (ra) and ৱ (wa) — they mark sounds either absent or written differently in Bengali."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ৰাম (Рама)",
                "з унікальною ৰ"
              ],
              [
                "ৱসন্ত (весна)",
                "з унікальною ৱ"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ৰাম মোৰ বন্ধু।",
                "Рам мій друг."
              ],
              [
                "ৱসন্তকাল আহিছে।",
                "Прийшла весна."
              ]
            ]
          }
        ]
      },
      {
        "id": "three-tier-politeness-irregular",
        "title": "Нерегулярність трьох рівнів ввічливості — B1",
        "titleEn": "The Irregularity of the Three Politeness Tiers — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівні закінчення для তই/তুমি/আপুনি не утворюють простого передбачуваного ряду — деякі часи мають ідентичні форми для двох рівнів, а деякі дієслова мають нерегулярні форми саме для আপুনি, тому їх варто заучувати як окремі парадигми.",
            "en": {
              "text": "The verb endings for তই/তুমি/আপুনি don't form a simple predictable series — some tenses share an identical form across two levels, and some verbs have irregular forms specifically for আপুনি, so they're best memorized as separate paradigms."
            }
          },
          {
            "type": "table",
            "title": "Приклад нерегулярності",
            "rows": [
              [
                "তই আছ (теп.)",
                "ти є (фамільярно)"
              ],
              [
                "আপুনি আছে (теп.)",
                "Ви є (формально, нерегулярна форма)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আপুনি ভাল আছেনে?",
                "Ви в порядку? (формально)"
              ],
              [
                "তই ভাল আছ নে?",
                "Ти в порядку? (фамільярно)"
              ]
            ]
          }
        ]
      }
    ]
  }
];
