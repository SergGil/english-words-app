// Vymova — data/grammar-data/grammar_fa.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FA: GrammarCategory[] = [
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
            "text": "Перська не має граматичного роду — займенник او (u) означає і \"він\", і \"вона\".",
            "en": {
              "text": "Persian has no grammatical gender — the pronoun او (u) means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "من (man)",
                "я"
              ],
              [
                "تو (to)",
                "ти"
              ],
              [
                "او (u)",
                "він / вона"
              ],
              [
                "ما (mâ)",
                "ми"
              ],
              [
                "آنها (ânhâ)",
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
                "من دانشجو هستم.",
                "Я студент."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"بودن\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"بودن\" (бути) в теперішньому часі приєднується як суфікс до присудка: هستم (я є), هستی (ти є) тощо.",
            "en": {
              "text": "The verb \"بودن\" (to be) attaches as a suffix to the predicate in the present tense: هستم (I am), هستی (you are), etc."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + هستم/هستی/است",
            "rows": [
              ["من", "دانشجو هستم", "я студент"],
              ["تو", "دانشجو هستی", "ти студент"],
              ["او", "پزشک است", "він/вона лікар"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "او پزشک است.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Budan (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"نـ\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється префіксом نـ (na-/ne-), який приєднується безпосередньо до дієслова.",
            "en": {
              "text": "Negation is formed with the prefix نـ (na-/ne-), attached directly to the verb."
            }
          },
          {
            "type": "formula",
            "title": "نـ + дієслово",
            "rows": [
              ["می‌دانم.", "نمی‌دانم.", "Я знаю. → Я не знаю."],
              ["می‌خواهم.", "نمی‌خواهم.", "Я хочу. → Я не хочу."],
              ["او آمد.", "او نیامد.", "Він прийшов. → Він не прийшов."]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "او نیامد.",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Na- — A1"
      },
      {
        "id": "questions",
        "title": "Питання \"آیا\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Формальні питання так/ні починаються з частки آیا; в розмовній мові її часто пропускають, лишаючи саму інтонацію.",
            "en": {
              "text": "Formal yes/no questions start with the particle آیا; in casual speech it is often dropped, leaving just the rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "آیا + твердження؟",
            "rows": [
              ["تو گرسنه‌ای.", "آیا تو گرسنه‌ای؟", "Ти голодний. → Ти голодний?"],
              ["تو خسته‌ای.", "خسته‌ای؟", "Ти втомлений. → Ти втомлений? (без آیا)"],
              ["او می‌آید.", "آیا او می‌آید؟", "Він приходить. → Він приходить?"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "خسته‌ای؟",
                "Ти втомлений? (без آیا)"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Āyā — A1"
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у перській — підмет-додаток-дієслово (SOV): дієслово завжди стоїть в кінці речення.",
            "en": {
              "text": "Persian's basic word order is Subject-Object-Verb (SOV): the verb always comes at the end of the sentence."
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
                "من کتاب می‌خوانم.",
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
        "id": "two-verb-stems",
        "title": "Два корені дієслова (теперішній/минулий) — A2",
        "titleEn": "Two Verb Stems (Present/Past) — A2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне перське дієслово має два основні корені — теперішній і минулий, які часто не пов'язані передбачуваним правилом і їх слід заучувати парою.",
            "en": {
              "text": "Every Persian verb has two core stems — present and past — which are often not related by a predictable rule and must be memorized as a pair."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "رفتن (йти)",
                "رو (теп.) / رفت (мин.)"
              ],
              [
                "دیدن (бачити)",
                "بین (теп.) / دید (мин.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "می‌روم.",
                "Я йду."
              ],
              [
                "رفتم.",
                "Я пішов."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous-mi",
        "title": "Теперішній час (می- + корінь) — A1",
        "titleEn": "Present Tense (Mi- + Stem) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється префіксом می- перед теперішнім коренем дієслова, з особовим закінченням у кінці.",
            "en": {
              "text": "The present tense is formed with the prefix می- before the verb's present stem, with a personal ending at the end."
            }
          },
          {
            "type": "formula",
            "title": "می- + корінь + закінчення",
            "rows": [
              [
                "من",
                "می‌روم",
                "я йду"
              ],
              [
                "تو",
                "می‌روی",
                "ти йдеш"
              ],
              [
                "او",
                "می‌رود",
                "він/вона йде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ما کتاب می‌خوانیم.",
                "Ми читаємо книгу."
              ],
              [
                "آنها کار می‌کنند.",
                "Вони працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past",
        "title": "Минулий час (корінь + закінчення) — A2",
        "titleEn": "Simple Past (Stem + Ending) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час — це минулий корінь дієслова з особовим закінченням, без жодного префікса.",
            "en": {
              "text": "The simple past is the verb's past stem plus a personal ending, with no prefix at all."
            }
          },
          {
            "type": "formula",
            "title": "минулий корінь + закінчення",
            "rows": [
              [
                "من",
                "رفتم",
                "я пішов"
              ],
              [
                "تو",
                "رفتی",
                "ти пішов"
              ],
              [
                "او",
                "رفت",
                "він/вона пішов(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ما دیروز آمدیم.",
                "Ми прийшли вчора."
              ],
              [
                "او کتاب را خواند.",
                "Він/вона прочитав(-ла) книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous-mi",
        "title": "Минулий тривалий (می- + минулий корінь) — B1",
        "titleEn": "Past Continuous (Mi- + Past Stem) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий тривалий час додає той самий префікс می- до минулого кореня, виражаючи звичну чи тривалу дію в минулому.",
            "en": {
              "text": "The past continuous adds the same prefix می- to the past stem, expressing a habitual or ongoing past action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "من هر روز می‌رفتم.",
                "Я щодня ходив (раніше)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "او کتاب می‌خواند.",
                "Він/вона читав(-ла) книгу (тривало)."
              ],
              [
                "بچه‌ها بازی می‌کردند.",
                "Діти гралися."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "Перфект (минулий дієприкметник + ام) — B1",
        "titleEn": "Present Perfect (Past Participle + Am) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється минулим дієприкметником (минулий корінь + ه) і суфіксом \"бути\" (ام/ای/است), виражаючи дію з актуальним результатом.",
            "en": {
              "text": "The perfect is formed with the past participle (past stem + ه) plus the \"to be\" suffix (ام/ای/است), expressing an action with a present result."
            }
          },
          {
            "type": "formula",
            "title": "дієприкметник + هستم-суфікс",
            "rows": [
              [
                "من",
                "رفته‌ام",
                "я вже пішов"
              ],
              [
                "تو",
                "رفته‌ای",
                "ти вже пішов"
              ],
              [
                "او",
                "رفته است",
                "він/вона вже пішов(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "من غذا خورده‌ام.",
                "Я вже поїв."
              ],
              [
                "او این فیلم را دیده است.",
                "Він/вона вже бачив(-ла) цей фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "Давноминулий час (дієприкметник + بودم) — B1",
        "titleEn": "Past Perfect (Participle + Budam) — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час поєднує той самий минулий дієприкметник з минулою формою \"бути\" (بودم/بودی/بود).",
            "en": {
              "text": "The past perfect combines the same past participle with the past form of \"to be\" (بودم/بودی/بود)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "من قبلاً رفته بودم.",
                "Я вже був пішов (до того)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "وقتی رسیدم، او رفته بود.",
                "Коли я прибув, він/вона вже пішов(-ла)."
              ],
              [
                "ما غذا را خورده بودیم.",
                "Ми вже з'їли їжу (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (خواهم + основа) — B1",
        "titleEn": "Future Tense (Khaham + Stem) — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Формальний майбутній час утворюється допоміжним دیслово خواستن (خواهم/خواهی/خواهد) перед незмінною основою дієслова; у розмовній мові часто просто вживають теперішній час.",
            "en": {
              "text": "The formal future is formed with the auxiliary from خواستن (خواهم/خواهی/خواهد) before the invariant verb stem; in casual speech, the present tense is often just used instead."
            }
          },
          {
            "type": "formula",
            "title": "خواه- + основа",
            "rows": [
              [
                "من",
                "خواهم رفت",
                "я піду"
              ],
              [
                "تو",
                "خواهی رفت",
                "ти підеш"
              ],
              [
                "او",
                "خواهد رفت",
                "він/вона піде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ما فردا خواهیم آمد.",
                "Ми прийдемо завтра."
              ],
              [
                "آنها خواهند دید.",
                "Вони побачать."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-present",
        "title": "Кон'юнктив теперішній (بـ + корінь) — B1",
        "titleEn": "Present Subjunctive (Be- + Stem) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив утворюється префіксом بـ (замість می-) перед теперішнім коренем і вживається після дієслів бажання, можливості чи мети.",
            "en": {
              "text": "The subjunctive is formed with the prefix بـ (instead of می-) before the present stem and is used after verbs of wish, possibility, or purpose."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "می‌خواهم بروم.",
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
                "باید درس بخوانی.",
                "Тобі треба вчитися."
              ],
              [
                "می‌خواهد بیاید.",
                "Він хоче прийти."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-past",
        "title": "Умовний минулий (بود + دیعریкметник) — B2",
        "titleEn": "Past Subjunctive/Conditional — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Гіпотетична умова про минуле виражається минулим дієприкметником з умовним допоміжним словом і зазвичай вводиться частками اگر (якщо).",
            "en": {
              "text": "A hypothetical past condition is expressed with the past participle plus a conditional auxiliary and is usually introduced with اگر (if)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "اگر می‌دانستم، می‌گفتم.",
                "Якби я знав, я сказав би."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "اگر وقت داشتم، می‌رفتم.",
                "Якби я мав час, я пішов би."
              ],
              [
                "کاش می‌آمد.",
                "Якби ж він прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб (بـ + корінь) — A2",
        "titleEn": "Imperative Mood (Be- + Stem) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для 2-ї особи однини — це префікс بـ перед теперішнім коренем без окремого закінчення; множина/ввічлива форма додає -ید.",
            "en": {
              "text": "The imperative for the 2nd person singular is the prefix بـ before the present stem with no separate ending; the plural/polite form adds -ید."
            }
          },
          {
            "type": "formula",
            "title": "\"رفتن\" (йти) — наказовий",
            "rows": [
              [
                "تو",
                "برو!",
                "Іди!"
              ],
              [
                "شما",
                "بروید!",
                "Ідіть!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "بنشین!",
                "Сідай!"
              ],
              [
                "لطفاً بیایید.",
                "Будь ласка, приходьте."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-imperative",
        "title": "Заперечний наказ (نـ замість بـ) — A2",
        "titleEn": "Negative Imperative (Na- Instead of Be-) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказ використовує префікс نـ замість بـ перед тим самим теперішнім коренем.",
            "en": {
              "text": "The negative imperative uses the prefix نـ instead of بـ before the same present stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "برو! (наказ)",
                "نرو! (заборона)",
                "Іди! → Не йди!"
              ],
              [
                "بگو! (наказ)",
                "نگو! (заборона)",
                "Скажи! → Не кажи!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "نترس!",
                "Не бійся!"
              ],
              [
                "دیر نکن!",
                "Не запізнюйся!"
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-light-verb-constructions",
        "title": "Складені дієслова (іменник + допоміжне) — B1",
        "titleEn": "Compound (Light Verb) Constructions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість перських дієслів — це складені конструкції \"іменник/прикметник + допоміжне дієслово\" (кردن — робити, زدن — вдарити, шدн — ставати), а не прості кореневі дієслова.",
            "en": {
              "text": "Most Persian verbs are compound constructions \"noun/adjective + light verb\" (kardan — to do, zadan — to hit, shodan — to become), rather than simple root verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "کار کردن",
                "працювати (буквально: робота+робити)"
              ],
              [
                "حرف زدن",
                "говорити (буквально: слово+вдарити)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "من کار می‌کنم.",
                "Я працюю."
              ],
              [
                "او با من حرف زد.",
                "Він/вона поговорив(-ла) зі мною."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Пасивний стан (شدن) — B1",
        "titleEn": "Passive Voice (Shodan) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється минулим дієприкметником + допоміжне دیслово شدن (ставати) у потрібному часі.",
            "en": {
              "text": "The passive voice is formed with the past participle plus the auxiliary شدن (to become) in the required tense."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "نوشتن (писати)",
                "نوشته شد",
                "було написано"
              ],
              [
                "ساختن (будувати)",
                "ساخته شده است",
                "було збудовано"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "نامه نوشته شد.",
                "Лист був написаний."
              ],
              [
                "این خانه ساخته شده است.",
                "Цей дім побудований."
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
        "id": "ezafe-construction",
        "title": "Конструкція ezāfe (-e/-ye) — A2",
        "titleEn": "The Ezafe Construction (-E/-Ye) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ezāfe — незаписуваний ненаголошений голосний -e (після приголосного) або -ye (після голосного), що з'єднує іменник з наступним прикметником чи іменником-власником — головна структурна риса перської.",
            "en": {
              "text": "Ezafe is an unwritten unstressed vowel -e (after a consonant) or -ye (after a vowel) that links a noun to a following adjective or possessor noun — the core structural feature of Persian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ketâb-e man",
                "моя книга (книга-e я)"
              ],
              [
                "xâne-ye bozorg",
                "великий дім (дім-ye великий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کتاب من روی میز است.",
                "Моя книга на столі."
              ],
              [
                "خانه‌ی بزرگ ماست.",
                "Це наш великий дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "ezafe-chains",
        "title": "Ланцюжки ezāfe — B1",
        "titleEn": "Chained Ezafe — B1",
        "emoji": "⛓️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька ezāfe можуть накопичуватись підряд, з'єднуючи ланцюжок означень чи вкладену належність в одну фразу.",
            "en": {
              "text": "Several ezafe can stack in a row, linking a chain of modifiers or nested possession into one phrase."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ketâb-e xâhar-e man",
                "книга моєї сестри (книга-e сестра-e я)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "خانه‌ی دوست بزرگ من.",
                "Дім мого великого друга."
              ],
              [
                "ماشین قرمز پدر او.",
                "Червона машина його батька."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-ha",
        "title": "Множина -ها — A1",
        "titleEn": "Plural -Ha — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Універсальний суфікс множини -ها додається до будь-якого іменника незалежно від того, чи він одухотворений.",
            "en": {
              "text": "The universal plural suffix -ها is added to any noun regardless of whether it's animate."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "کتاب (книга)",
                "کتاب‌ها",
                "книги"
              ],
              [
                "خانه (дім)",
                "خانه‌ها",
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
                "کتاب‌ها روی میز هستند.",
                "Книги на столі."
              ],
              [
                "بچه‌ها بازی می‌کنند.",
                "Діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-an",
        "title": "Множина -ان (одухотворені) — A2",
        "titleEn": "Plural -An (Animate) — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ان — альтернативна множина, вживана переважно з одухотвореними (людьми, тваринами) іменниками, часто в дещо формальнішому стилі, ніж -ها.",
            "en": {
              "text": "The suffix -ان is an alternative plural, used mostly with animate nouns (people, animals), often in a somewhat more formal style than -ها."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "دوست (друг)",
                "دوستان",
                "друзі"
              ],
              [
                "مرد (чоловік)",
                "مردان",
                "чоловіки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "دوستانم اینجا هستند.",
                "Мої друзі тут."
              ],
              [
                "دانشجویان درس می‌خوانند.",
                "Студенти навчаються."
              ]
            ]
          }
        ]
      },
      {
        "id": "direct-object-marker-ra",
        "title": "Маркер прямого додатка \"را\" — A2",
        "titleEn": "Direct Object Marker \"Ra\" — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений прямий додаток позначається часткою را, яка ставиться одразу після додатка, перед дієсловом.",
            "en": {
              "text": "A definite direct object is marked with the particle را, placed right after the object, before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "من کتاب را خواندم.",
                "Я прочитав (ту) книгу."
              ],
              [
                "او در را باز کرد.",
                "Він/вона відчинив(-ла) двері."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ماشین را دیدی؟",
                "Ти бачив ту машину?"
              ],
              [
                "غذا را خوردیم.",
                "Ми з'їли їжу."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-case-system",
        "title": "Відсутність відмінкової системи — A2",
        "titleEn": "No Case System — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов цього курсу, перські іменники взагалі не змінюються за відмінком — синтаксичну роль слова показує порядок слів, ezāfe чи маркер را, а не закінчення.",
            "en": {
              "text": "Unlike many languages in this course, Persian nouns don't decline for case at all — a word's syntactic role is shown by word order, ezafe, or the marker را, not by an ending."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "کتاب (форма незмінна у всіх ролях)",
                "книга — підмет, додаток чи присудок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کتاب افتاد.",
                "Книга впала (підмет)."
              ],
              [
                "کتاب را خواندم.",
                "Я прочитав книгу (додаток, з را)."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-after-noun-ezafe",
        "title": "Прикметник після іменника — A1",
        "titleEn": "Adjective After the Noun — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, прикметник в перській стоїть ПІСЛЯ іменника, з'єднаний з ним ezāfe.",
            "en": {
              "text": "Unlike Ukrainian, the adjective in Persian goes AFTER the noun, linked to it with ezafe."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "خانه‌ی بزرگ",
                "великий дім (дім-ye великий)"
              ],
              [
                "ماشین قرمز",
                "червона машина (машина-e червона)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "دختر زیبا اینجاست.",
                "Гарна дівчина тут."
              ],
              [
                "کتاب جالبی خواندم.",
                "Я прочитав цікаву книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (-تر/-ترین) — A2",
        "titleEn": "Comparative & Superlative (-Tar/-Tarin) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -تر, найвищий — суфіксом -ترین, доданими прямо до прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -تر, the superlative with -ترین, both added directly to the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "بزرگ (великий)",
                "بزرگ‌تر",
                "більший"
              ],
              [
                "بزرگ (великий)",
                "بزرگ‌ترین",
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
                "این خانه بزرگ‌تر است.",
                "Цей дім більший."
              ],
              [
                "او باهوش‌ترین دانشجوست.",
                "Він найрозумніший студент."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (این/آن) — A1",
        "titleEn": "Demonstratives (In/An) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "این کتاب",
                "ця книга"
              ],
              [
                "آن خانه",
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
                "این مال من است.",
                "Це моє."
              ],
              [
                "آن کوه خیلی بلند است.",
                "Та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Присвійні суфікси (-م/-ت/-ش) — A2",
        "titleEn": "Possessive Suffixes (-Am/-At/-Ash) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Замість ezāfe + займенник, належність можна виразити коротким суфіксом (-م мій, -ت твій, -ش його/її), доданим прямо до іменника — розмовніший варіант.",
            "en": {
              "text": "Instead of ezafe + pronoun, possession can be expressed with a short suffix (-م my, -ت your, -ش his/her) attached directly to the noun — a more colloquial variant."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "کتابم",
                "моя книга (замість کتاب من)"
              ],
              [
                "خانه‌اش",
                "його/її дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کتابم را گم کردم.",
                "Я загубив свою книгу."
              ],
              [
                "ماشینش نو است.",
                "Його/її машина нова."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-ke",
        "title": "Відносний займенник \"که\" — B1",
        "titleEn": "Relative Pronoun \"Ke\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник که (\"який/що\") вводить підрядне означальне речення й не змінюється за родом чи числом.",
            "en": {
              "text": "The relative pronoun که (\"who/which/that\") introduces a relative clause and doesn't change for gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "مردی که آمد دوست من است.",
                "Чоловік, який прийшов, — мій друг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کتابی که می‌خوانی جالب است.",
                "Книга, яку ти читаєш, цікава."
              ],
              [
                "خانه‌ای که در آن زندگی می‌کنم قدیمی است.",
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
                "کی",
                "хто"
              ],
              [
                "چی",
                "що"
              ],
              [
                "کجا",
                "де"
              ],
              [
                "کی / چه وقت",
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
                "اسمت چیست؟",
                "Як тебе звати?"
              ],
              [
                "کجا زندگی می‌کنی؟",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-khod",
        "title": "Зворотний займенник \"خود\" — B1",
        "titleEn": "Reflexive Pronoun \"Khod\" — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник خود (\"сам\") часто поєднується з присвійним суфіксом, щоб посилити значення \"сам себе\".",
            "en": {
              "text": "The reflexive pronoun خود (\"self\") often combines with a possessive suffix to reinforce \"oneself\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "خودم",
                "я сам"
              ],
              [
                "خودش",
                "він/вона сам(-а)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "خودم این کار را کردم.",
                "Я сам це зробив."
              ],
              [
                "او خودش را در آینه دید.",
                "Він побачив себе в дзеркалі."
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
                "یک",
                "1"
              ],
              [
                "دو",
                "2"
              ],
              [
                "سه",
                "3"
              ],
              [
                "ده",
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
                "من دو خواهر دارم.",
                "У мене дві сестри."
              ],
              [
                "ده نفر آمدند.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier-ta",
        "title": "Лічильне слово \"تا\" — B1",
        "titleEn": "The Counter Word \"Ta\" — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній мові слово تا часто вставляють між числівником та іменником, особливо для неживих предметів — подібно до класифікаторів у східноазіатських мовах, але необов'язкове.",
            "en": {
              "text": "In casual speech, the word تا is often inserted between the numeral and the noun, especially for inanimate objects — similar to classifiers in East Asian languages, but optional."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "سه تا کتاب",
                "три книги (з تا)"
              ],
              [
                "دو تا سیب",
                "два яблука"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "پنج تا صندلی می‌خواهم.",
                "Мені потрібно п'ять стільців."
              ],
              [
                "چند تا دوست داری؟",
                "Скільки в тебе друзів?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-singular-agreement",
        "title": "Однина іменника після числівника — A2",
        "titleEn": "Singular Noun After Numerals — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника іменник зазвичай залишається в однині, а не переходить у множину — риса, спільна з турецькою, вірменською тощо.",
            "en": {
              "text": "After a numeral the noun usually stays singular, rather than switching to the plural — a feature shared with Turkish, Armenian, etc."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "دو کتاب",
                "дві книги (буквально: два книга)"
              ],
              [
                "پنج نفر",
                "п'ять людей (буквально: п'ять людина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "سه دانشجو آمدند.",
                "Прийшло три студенти."
              ],
              [
                "چهار سال گذشت.",
                "Минуло чотири роки."
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
                "خیلی / زیاد",
                "багато"
              ],
              [
                "کم",
                "мало"
              ],
              [
                "چند تا",
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
                "من کتاب زیاد دارم.",
                "У мене багато книг."
              ],
              [
                "کمی آب بده.",
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
                "و",
                "і, та"
              ],
              [
                "اما / ولی",
                "але"
              ],
              [
                "یا",
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
                "من و تو دوستیم.",
                "Я і ти — друзі."
              ],
              [
                "می‌خواهم بروم، اما وقت ندارم.",
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
                "چون / زیرا",
                "тому що"
              ],
              [
                "اگر",
                "якщо"
              ],
              [
                "وقتی",
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
                "خوشحالم چون آمدی.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "وقتی آزاد باشم، زنگ می‌زنم.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-must-bayad",
        "title": "Модальне \"باید\" (мусити) — A2",
        "titleEn": "Modal \"Bayad\" (Must) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Незмінне слово باید перед дієсловом у кон'юнктиві виражає обов'язок чи необхідність.",
            "en": {
              "text": "The invariant word باید before the verb in the subjunctive expresses obligation or necessity."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "باید بروم.",
                "Мені треба йти."
              ],
              [
                "باید درس بخوانی.",
                "Тобі треба вчитися."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "باید کار کنیم.",
                "Нам треба працювати."
              ],
              [
                "نباید دیر کنی.",
                "Тобі не варто запізнюватися."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-can-tavanestan",
        "title": "Модальне \"توانستن\" (могти) — A2",
        "titleEn": "Modal \"Tavanestan\" (Can) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово توانستن (могти), відмінюване за особою, поєднується з дієсловом у кон'юнктиві, щоб виразити здатність чи можливість.",
            "en": {
              "text": "The verb توانستن (can), conjugated by person, combines with the verb in the subjunctive to express ability or possibility."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "می‌توانم بروم.",
                "Я можу піти."
              ],
              [
                "می‌توانی کمکم کنی؟",
                "Ти можеш мені допомогти?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "او می‌تواند شنا کند.",
                "Він уміє плавати."
              ],
              [
                "نمی‌توانیم بیاییم.",
                "Ми не можемо прийти."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-want-khastan",
        "title": "Модальне \"خواستن\" (хотіти) — A1",
        "titleEn": "Modal \"Khastan\" (Want To) — A1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово خواستن (хотіти) поєднується з дієсловом у кон'юнктиві, щоб виразити бажання виконати дію.",
            "en": {
              "text": "The verb خواستن (to want) combines with the verb in the subjunctive to express a desire to do something."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "می‌خواهم بخورم.",
                "Я хочу їсти."
              ],
              [
                "می‌خواهد بخوابد.",
                "Вона хоче спати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "آنها می‌خواهند به خانه بروند.",
                "Вони хочуть додому."
              ],
              [
                "نمی‌خواهم حرف بزنم.",
                "Я не хочу говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-pro-drop",
        "title": "Опущення підмета (pro-drop) — B1",
        "titleEn": "Subject Pronoun Dropping (Pro-Drop) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки особове закінчення дієслова вже показує особу, підметовий займенник часто опускають, якщо він зрозумілий з контексту.",
            "en": {
              "text": "Since the verb's personal ending already shows the person, the subject pronoun is often dropped when clear from context."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "می‌روم. (без من)",
                "Я йду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کجا می‌روی؟",
                "Куди ти йдеш?"
              ],
              [
                "دیروز آمدند.",
                "Вони прийшли вчора."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-plural-politeness",
        "title": "Ввічлива форма \"شما\" — A2",
        "titleEn": "Polite Form \"Shoma\" — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "شما (\"ви\") — і множина, і ввічлива форма до однієї особи, подібно до французької vous; дієслово при цьому стоїть у формі множини.",
            "en": {
              "text": "شما (\"you\") is both the plural and the polite singular form, like French vous; the verb takes the plural form accordingly."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "تو کجا می‌روی؟ (неформ.)",
                "Куди ти йдеш?"
              ],
              [
                "شما کجا می‌روید؟ (формально)",
                "Куди Ви йдете?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "شما از کجا هستید؟",
                "Звідки Ви?"
              ],
              [
                "لطفاً بفرمایید بنشینید.",
                "Будь ласка, сідайте (дуже ввічливо)."
              ]
            ]
          }
        ]
      },
      {
        "id": "pronoun-object-suffixes-verb",
        "title": "Об'єктні суфікси на дієслові — B1",
        "titleEn": "Object Suffixes Attached to the Verb — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні/об'єктні суфікси можуть приєднуватись до дієслова, щоб позначити непрямий додаток, замінюючи окремий займенник з прийменником.",
            "en": {
              "text": "Possessive/object suffixes can attach to the verb to mark an indirect object, replacing a separate pronoun plus preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "کتاب را دادمش.",
                "Я дав йому книгу (-ش = йому)."
              ],
              [
                "گفتمت.",
                "Я тобі сказав (-ت = тобі)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "نامه را نوشتمش.",
                "Я написав йому листа."
              ],
              [
                "پولش را دادم.",
                "Я дав йому гроші."
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
                "دوشنبه",
                "понеділок"
              ],
              [
                "شنبه",
                "субота"
              ],
              [
                "یکشنبه",
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
                "امروز دوشنبه است.",
                "Сьогодні понеділок."
              ],
              [
                "جمعه‌ها استراحت می‌کنم.",
                "У п'ятницю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates-solar-calendar",
        "title": "Місяці іранського календаря — B1",
        "titleEn": "Months of the Iranian Solar Calendar — B1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Іран офіційно використовує власний сонячний календар (Хіджрі-Шамсі) з 12 місяцями, назви яких відрізняються від григоріанських.",
            "en": {
              "text": "Iran officially uses its own solar calendar (Hijri Shamsi) with 12 months whose names differ from the Gregorian ones."
            }
          },
          {
            "type": "table",
            "title": "Приклади місяців",
            "rows": [
              [
                "فروردین",
                "перший місяць (бл. 21 березня — 20 квітня)"
              ],
              [
                "مهر",
                "сьомий місяць (бл. 23 вересня — 22 жовтня)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "سال نو در فروردین شروع می‌شود.",
                "Новий рік починається у фарвардіні."
              ],
              [
                "مدرسه در مهر باز می‌شود.",
                "Школа відкривається в мехрі (вересень)."
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
                "ساعت چند است؟",
                "Котра година?"
              ],
              [
                "ساعت سه است.",
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
                "ساعت شش می‌بینمت.",
                "Побачимось о шостій."
              ],
              [
                "الان ظهر است.",
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
                "سلام",
                "Привіт"
              ],
              [
                "متشکرم / ممنون",
                "Дякую"
              ],
              [
                "خداحافظ",
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
                "حالت چطوره؟",
                "Як справи?"
              ],
              [
                "خیلی ممنون.",
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
                "هوا آفتابی است.",
                "Сонячно."
              ],
              [
                "باران می‌بارد.",
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
                "امروز هوا سرد است.",
                "Сьогодні холодно."
              ],
              [
                "هوا خیلی گرم است.",
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
                "دستت درد نکنه",
                "дякую (буквально: хай не болить твоя рука)"
              ],
              [
                "قربان شما",
                "радий служити (ввічлива формула)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "دستت درد نکنه برای کمک.",
                "Дякую за допомогу."
              ],
              [
                "خواهش می‌کنم، قربان شما.",
                "Будь ласка, радий служити."
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
            "type": "intro",
            "text": "Багато прислівників способу дії збігаються за формою з прикметником або утворюються словом طور (\"спосіб\") з ezāfe.",
            "en": {
              "text": "Many manner adverbs share their form with the adjective, or are formed with the word طور (\"manner\") plus ezafe."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "سریع",
                "швидко"
              ],
              [
                "به طور آهسته",
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
                "او سریع می‌دود.",
                "Він швидко бігає."
              ],
              [
                "لطفاً آهسته صحبت کن.",
                "Будь ласка, говори повільніше."
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
                "-ی",
                "утворює абстрактні іменники (خوب→خوبی, добрий→доброта)"
              ],
              [
                "-گر",
                "утворює назви професій (کار→کارگر, робота→робітник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "خوبی مهم است.",
                "Доброта важлива."
              ],
              [
                "او یک کارگر است.",
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
                "دست (рука) + کش (тягти)",
                "دستکش (рукавичка)"
              ],
              [
                "آب (вода) + رو (текти)",
                "آبرو (репутація, честь)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "دستکش‌هایم را گم کردم.",
                "Я загубив свої рукавички."
              ],
              [
                "آبرویش را حفظ کرد.",
                "Він зберіг свою честь."
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
                "بهار",
                "весна"
              ],
              [
                "تابستان",
                "літо"
              ],
              [
                "پاییز",
                "осінь"
              ],
              [
                "زمستان",
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
                "تابستان خیلی گرم است.",
                "Влітку дуже жарко."
              ],
              [
                "پاییز را دوست دارم.",
                "Я люблю осінь."
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
                "قیمتش چنده؟",
                "Скільки коштує?"
              ],
              [
                "هزار تومان است.",
                "Тисяча томанів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "این کتاب دو هزار تومان است.",
                "Ця книга коштує дві тисячі томанів."
              ],
              [
                "خیلی گران است.",
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
                "فکر می‌کنم...",
                "Я думаю, що..."
              ],
              [
                "به نظر من...",
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
                "فکر می‌کنم حق با توست.",
                "Я думаю, що ти правий."
              ],
              [
                "به نظر من، این ایده‌ی خوبی است.",
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
                "امروز / فردا / دیروز",
                "сьогодні / завтра / вчора"
              ],
              [
                "الان / بعداً",
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
                "فردا می‌بینمت.",
                "Побачимось завтра."
              ],
              [
                "الان مشغولم.",
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
                "یک نفر",
                "хтось"
              ],
              [
                "چیزی",
                "щось"
              ],
              [
                "هیچ‌کس",
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
                "یک نفر زنگ زد.",
                "Хтось подзвонив."
              ],
              [
                "چیزی شنیدم.",
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
                "وای!",
                "Ой!"
              ],
              [
                "عالیه!",
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
                "وای، چقدر قشنگه!",
                "Ой, як гарно!"
              ],
              [
                "عالیه، خبر خوبیه!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-hastan",
        "title": "Конструкція \"є/немає\" — A2",
        "titleEn": "Existential \"There Is/Isn't\" — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається дієсловом هست (є), відсутність — نیست (немає), обидва вживаються після іменника.",
            "en": {
              "text": "The existence of something is expressed with the verb هست (there is), absence with نیست (there isn't), both used after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "آب هست.",
                "Є вода."
              ],
              [
                "وقت نیست.",
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
                "اینجا آدم زیاد هست.",
                "Тут багато людей."
              ],
              [
                "اینجا مغازه نیست.",
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
            "text": "Пестливі форми утворюються суфіксом -و, що надає слову ласкавого відтінку.",
            "en": {
              "text": "Diminutive/affectionate forms are made with the suffix -و, adding an endearing shade of meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "مامان (мама)",
                "مامانی",
                "матуся"
              ],
              [
                "عزیز (дорогий)",
                "عزیزم",
                "мій дорогий/дорога"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "مامانی، بیا اینجا!",
                "Матусю, іди сюди!"
              ],
              [
                "عزیزم، خوبی؟",
                "Дорогий(-а), ти в порядку?"
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
                "آقا",
                "пан"
              ],
              [
                "خانم",
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
                "سلام آقای احمدی.",
                "Вітаю, пане Ахмаді."
              ],
              [
                "خانم، ببخشید.",
                "Пані, вибачте."
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
                "آب رفته به جوی برنمی‌گردد.",
                "Втечена вода назад у струмок не повертається (зробленого не повернеш)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "حالا که شده، آب رفته به جوی برنمی‌گردد.",
                "Раз так сталося, зробленого не повернеш."
              ],
              [
                "کار نیکو کردن از پر کردن است.",
                "Гарну справу роблять, доводячи до кінця."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-arabic",
        "title": "Запозичення з арабської — B1",
        "titleEn": "Arabic Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна частина перської лексики (особливо формальної, релігійної, наукової) запозичена з арабської через іслам, хоча перська — окрема, неспоріднена індоєвропейська мова.",
            "en": {
              "text": "A significant part of Persian vocabulary (especially formal, religious, scholarly) is borrowed from Arabic via Islam, even though Persian is a separate, unrelated Indo-European language."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "کتاب (з араб.)",
                "книга"
              ],
              [
                "وقت (з араб.)",
                "час"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "وقت نداریم.",
                "У нас немає часу."
              ],
              [
                "کتابخانه بزرگی است.",
                "Це велика бібліотека."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-overview",
        "title": "Прийменники — A1",
        "titleEn": "Prepositions — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "در",
                "в, у"
              ],
              [
                "روی",
                "на"
              ],
              [
                "زیر",
                "під"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کتاب روی میز است.",
                "Книга на столі."
              ],
              [
                "گربه زیر صندلی است.",
                "Кіт під стільцем."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Нюанси заперечення (نه/نـ) — B1",
        "titleEn": "Negation Nuances (Na/Na-) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"نه\" — самостійне слово \"ні\", що вживається як окрема відповідь, тоді як \"نـ\" — префікс, приєднаний безпосередньо до дієслова.",
            "en": {
              "text": "\"نه\" is the standalone word \"no\", used as a separate answer, while \"نـ\" is a prefix attached directly to the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "می‌آیی؟ — نه.",
                "Ти прийдеш? — Ні."
              ],
              [
                "نمی‌آیم.",
                "Я не прийду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "نه، وقت ندارم.",
                "Ні, у мене немає часу."
              ],
              [
                "او نمی‌داند.",
                "Він не знає."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-comparative-irregular",
        "title": "Неправильні форми порівняння — B1",
        "titleEn": "Irregular Comparative Forms — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних прикметників мають нерегулярні форми порівняння замість звичайного суфікса -تر.",
            "en": {
              "text": "A handful of very common adjectives have irregular comparative forms instead of the regular -تر suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "خوب (добрий)",
                "بهتر",
                "кращий (не خوب‌تر)"
              ],
              [
                "بد (поганий)",
                "بدتر",
                "гірший"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "این بهتر از آن است.",
                "Це краще за те."
              ],
              [
                "حالم بدتر شد.",
                "Мені стало гірше."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-grammatical-gender-deep",
        "title": "Відсутність роду в деталях — A2",
        "titleEn": "No Grammatical Gender in Depth — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Відсутність роду поширюється не лише на займенник او — прикметники, дієслова й навіть імена професій не мають окремих чоловічих/жіночих форм, на відміну від багатьох мов цього курсу.",
            "en": {
              "text": "The absence of gender extends beyond the pronoun او — adjectives, verbs, and even profession names have no separate masculine/feminine forms, unlike many languages in this course."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "او معلم است.",
                "Він/вона вчитель (та сама форма для обох)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "او خوشحال است.",
                "Він/вона щасливий(-а) (одна форма)."
              ],
              [
                "دکتر آمد.",
                "Лікар прийшов(-ла) (без вказівки статі)."
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
        "id": "solar-hijri-calendar-system",
        "title": "Сонячний календар Хіджрі-Шамсі — B2",
        "titleEn": "The Solar Hijri Calendar System — B2",
        "emoji": "📆",
        "sections": [
          {
            "type": "intro",
            "text": "Іран офіційно використовує сонячний календар, що відлічує роки від Гіджри (622 р. н.е.), як ісламський місячний календар, але, на відміну від нього, прив'язаний до сонячного року — тому дати не збігаються ні з григоріанським, ні з ісламським місячним календарем.",
            "en": {
              "text": "Iran officially uses a solar calendar that counts years from the Hijra (622 CE), like the Islamic lunar calendar, but unlike it, is tied to the solar year — so its dates match neither the Gregorian nor the Islamic lunar calendar."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "2026 (григ.)",
                "1404-1405 هجری شمسی"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "امسال سال ۱۴۰۴ است.",
                "Цей рік — 1404 (за іранським сонячним календарем)."
              ],
              [
                "نوروز اول سال است.",
                "Новруз — перший день року."
              ]
            ]
          }
        ]
      },
      {
        "id": "arabic-broken-plurals",
        "title": "Арабська \"ламана\" множина — B2",
        "titleEn": "Arabic \"Broken\" Plurals — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі слова арабського походження зберігають нерегулярну арабську множину (зміну голосних усередині слова) замість звичайних перських суфіксів -ها/-ان, і їх слід заучувати окремо.",
            "en": {
              "text": "Some words of Arabic origin keep the irregular Arabic plural (an internal vowel change) instead of the regular Persian suffixes -ها/-ان, and must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "کتاب (книга)",
                "کتب",
                "книги (арабська множина, а не کتاب‌ها)"
              ],
              [
                "استاد (професор)",
                "اساتید",
                "професори (арабська множина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "کتب زیادی در کتابخانه است.",
                "У бібліотеці багато книг (формальний стиль)."
              ],
              [
                "اساتید دانشگاه آمدند.",
                "Прийшли професори університету."
              ]
            ]
          }
        ]
      },
      {
        "id": "perso-arabic-script-not-arabic-language",
        "title": "Арабська писемність, не арабська мова — B1",
        "titleEn": "Arabic Script, Not an Arabic Language — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Перська записується модифікованою арабською абеткою (з чотирма додатковими літерами для звуків, яких немає в арабській), але сама мова — індоєвропейська, не семітська, і не споріднена з арабською граматично.",
            "en": {
              "text": "Persian is written with a modified Arabic alphabet (with four extra letters for sounds Arabic lacks), but the language itself is Indo-European, not Semitic, and is not grammatically related to Arabic."
            }
          },
          {
            "type": "table",
            "title": "Додаткові літери перської",
            "rows": [
              [
                "پ",
                "звук \"п\", якого немає в арабській"
              ],
              [
                "گ",
                "звук \"ґ\", якого немає в арабській"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "پدر و مادر",
                "батько і мати (питомі перські слова з پ)"
              ],
              [
                "گل زیبا",
                "гарна квітка (питоме перське слово з گ)"
              ]
            ]
          }
        ]
      }
    ]
  }
];
