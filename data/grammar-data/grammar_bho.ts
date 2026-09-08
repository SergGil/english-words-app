// Vymova — data/grammar-data/grammar_bho.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BHO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "सर्वनाम — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У бходжпурі \"я\" часто позначають словом \"हम\" (ham), яке в гінді означає \"ми\" — одна з відмінностей між спорідненими мовами долини Гангу.",
            "en": {
              "text": "In Bhojpuri, \"I\" is often \"हम\" (ham) — the same word that means \"we\" in Hindi, one of the differences among the related Ganges Valley languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "हम (ham)"
              ],
              [
                "ти (зв. / ввічл.)",
                "तू / रउआ (tū / raua)"
              ],
              [
                "він / вона",
                "ऊ (ū)"
              ],
              [
                "ми",
                "हमनी (hamnī)"
              ],
              [
                "ви",
                "रउआ सब (raua sab)"
              ],
              [
                "вони",
                "ऊ लोग (ū log)"
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
        "title": "Дієслово \"बा\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді (है), бходжпурі вживає बा як зв'язку \"бути\" в теперішньому часі — характерна риса, що одразу вирізняє мову на слух.",
            "en": {
              "text": "Unlike Hindi (है), Bhojpuri uses बा as the \"to be\" copula in the present — a distinctive trait that instantly marks the language by ear."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + बा",
            "rows": [
              [
                "हम",
                "मास्टर बानी",
                "я вчитель"
              ],
              [
                "ऊ",
                "डाक्टर बा",
                "він/вона лікар"
              ],
              [
                "तू",
                "अच्छा बाड़ऽ",
                "ти хороший"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ऊ घरे बा।",
                "Він/вона вдома."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Baa (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ना/नाहीं\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ना чи नाहीं, яка ставиться перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle ना or नाहीं, placed before the verb."
            }
          },
          {
            "type": "formula",
            "title": "ना/नाहीं + дієслово",
            "rows": [
              [
                "हम जानीलें।",
                "हम ना जानीलें।",
                "Я знаю. → Я не знаю."
              ],
              [
                "ऊ आइल।",
                "ऊ नाहीं आइल।",
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
                "हम ना जानीलें।",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Na/Nahi — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"की\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити часткою की на початку речення або просто висхідною інтонацією.",
            "en": {
              "text": "Yes/no questions can be formed with the particle की at the start of the sentence, or simply with rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "की + твердження?",
            "rows": [
              [
                "तू थकल बाड़ऽ।",
                "की तू थकल बाड़ऽ?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "ऊ आई।",
                "ऊ आई का?",
                "Вона прийде. → Вона прийде?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "तूं भूखल बाड़ऽ का?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Ki — A1"
      },
      {
        "id": "no-ergative-past",
        "title": "Відсутність ергативної частки \"ने\" (на відміну від гінді) — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді, де перехідне дієслово в минулому часі вимагає ергативної частки ने після підмета, бходжпурі НЕ має такої вимоги — підмет завжди залишається в називному відмінку.",
            "en": {
              "text": "Unlike Hindi, where a transitive verb in the past tense requires the ergative particle ने after the subject, Bhojpuri has NO such requirement — the subject always stays in the nominative case."
            }
          },
          {
            "type": "table",
            "title": "Порівняння з гінді",
            "rows": [
              [
                "गінді: उसने किताब पढ़ी।",
                "Він прочитав книгу (обов'язкове ने)"
              ],
              [
                "бходжпурі: ऊ किताब पढ़लस।",
                "Він прочитав книгу (без ने)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हम खाना खइनी।",
                "Я поїв."
              ]
            ]
          }
        ],
        "titleEn": "No Ergative Particle \"Ne\" (Unlike Hindi) — A2"
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
        "id": "present-habitual",
        "title": "Теперішній звичний час (-ऐला/-ला) — A1",
        "titleEn": "Present Habitual (-Aila/-La) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній звичний час утворюється основою дієслова з суфіксом -ऐला/-ला, доданим до особового закінчення.",
            "en": {
              "text": "The present habitual is formed with the verb stem plus the suffix -ऐला/-ला, added to the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "основа + ऐला/ला",
            "rows": [
              [
                "हम",
                "पढ़ीलें",
                "я читаю (звично)"
              ],
              [
                "तू",
                "पढ़ेलऽ",
                "ти читаєш"
              ],
              [
                "ऊ",
                "पढ़ेला",
                "він/вона читає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हमनी किताब पढ़ीलीं जा।",
                "Ми читаємо книгу."
              ],
              [
                "ऊ लोग काम करेला।",
                "Вони працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "Теперішній тривалий час (रहल बा) — A2",
        "titleEn": "Present Continuous (Rahal Ba) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"зараз\" виражається дієприслівниковою формою плюс допоміжне रहल बा (перебуває).",
            "en": {
              "text": "The \"right now\" continuous is expressed with the verb's converb form plus the auxiliary रहल बा (is staying)."
            }
          },
          {
            "type": "formula",
            "title": "основа-त + रहल बा",
            "rows": [
              [
                "हम",
                "पढ़त बानी",
                "я зараз читаю"
              ],
              [
                "ऊ",
                "खात बा",
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
                "ऊ लोग खेलत बा लोग।",
                "Вони зараз граються."
              ],
              [
                "हम लिखत बानी।",
                "Я зараз пишу."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-simple",
        "title": "Минулий простий час (-ल) — A2",
        "titleEn": "Past Simple (-L) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий простий час утворюється основою з суфіксом -ल, доданим до особового закінчення, без жодного окремого маркера ергативності.",
            "en": {
              "text": "The past simple is formed with the stem plus the suffix -ल, added to the personal ending, with no separate ergative marker."
            }
          },
          {
            "type": "formula",
            "title": "основа + ल + закінчення",
            "rows": [
              [
                "हम",
                "पढ़नी",
                "я прочитав"
              ],
              [
                "तू",
                "पढ़लऽ",
                "ти прочитав"
              ],
              [
                "ऊ",
                "पढ़लस",
                "він/вона прочитав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हम काल्ह किताब पढ़नी।",
                "Учора я прочитав книгу."
              ],
              [
                "ऊ घरे गइल।",
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
            "text": "Минулий тривалий час — це та сама дієприслівникова форма плюс допоміжне дієслово \"бути\" в минулому (रहल).",
            "en": {
              "text": "The past continuous is the same converb form plus the \"to be\" auxiliary in the past (रहल)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हम पढ़त रहनी।",
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
                "ऊ काम करत रहल।",
                "Він/вона працював(-ла)."
              ],
              [
                "लइकन खेलत रहल।",
                "Діти гралися."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (-ब) — A2",
        "titleEn": "Future Tense (-B) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється основою з суфіксом -ब, доданим до особового закінчення.",
            "en": {
              "text": "The future tense is formed with the stem plus the suffix -ब, added to the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "основа + ब + закінчення",
            "rows": [
              [
                "हम",
                "पढ़बि",
                "я прочитаю"
              ],
              [
                "तू",
                "पढ़बऽ",
                "ти прочитаєш"
              ],
              [
                "ऊ",
                "पढ़ी",
                "він/вона прочитає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हम काल्ह आइब।",
                "Завтра я прийду."
              ],
              [
                "ऊ चिट्ठी लिखी।",
                "Він/вона напише листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфект (-ल बा) — B1",
        "titleEn": "Perfect Tense (-L Ba) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражає дію з актуальним результатом і утворюється минулою основою плюс допоміжне बा.",
            "en": {
              "text": "The perfect expresses an action with a present result, formed with the past stem plus the auxiliary बा."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हम खा लेले बानी।",
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
                "ऊ पहुँच गइल बा।",
                "Він/вона вже прибув(-ла)."
              ],
              [
                "हम ऊ किताब पढ़ लेले बानी।",
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
            "text": "Наказова форма змінюється залежно від рівня ввічливості до когось звертаються.",
            "en": {
              "text": "The imperative form changes depending on the politeness level of the addressee."
            }
          },
          {
            "type": "table",
            "title": "\"जाना\" (йти) — наказовий",
            "rows": [
              [
                "तू (фамільярно)",
                "जा!",
                "Іди!"
              ],
              [
                "रउआ (формально)",
                "जाईं!",
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
                "इहाँ आवऽ।",
                "Іди сюди."
              ],
              [
                "कृपया बइठीं।",
                "Будь ласка, сідайте."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-mood",
        "title": "Кон'юнктив (सकल जाव) — B1",
        "titleEn": "Subjunctive Mood — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив утворюється особливим закінченням дієслова й вживається для сумніву, побажання чи мети.",
            "en": {
              "text": "The subjunctive is formed with a special verb ending and is used for doubt, wish, or purpose."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हम चाहीलें कि ऊ आवे।",
                "Я хочу, щоб він прийшов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "भगवान करे कि सब ठीक होखे।",
                "Дай Боже, щоб усе було гаразд."
              ],
              [
                "ऊ चाहत रहल कि हम मदद करीं।",
                "Він хотів, щоб я допоміг."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-past",
        "title": "Звична дія в минулому (-त रहल) — B1",
        "titleEn": "Habitual Past — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, повторювана дія в минулому виражається дієприслівниковою формою плюс रहल у відповідній особі.",
            "en": {
              "text": "A habitual, repeated past action is expressed with the converb form plus रहल in the appropriate person."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हम रोज इहाँ आवत रहनी।",
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
                "ऊ हर दिन पढ़त रहल।",
                "Він/вона щодня навчався(-лась) (раніше)."
              ],
              [
                "हमनी एके साथे खेलत रहनी जा।",
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
            "text": "Дві дієслівні основи можуть поєднуватися в одну складену конструкцію, де друге дієслово (\"легке\") додає відтінок завершеності чи раптовості.",
            "en": {
              "text": "Two verb stems can combine into one compound construction, where the second (\"light\") verb adds a shade of completion or suddenness."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "खा लिहल",
                "з'їв усе (буквально: з'ївши, взяв)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ऊ काम कइल दिहलस।",
                "Він завершив роботу."
              ],
              [
                "हम चिट्ठी लिख डालनी।",
                "Я швидко написав листа."
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
            "text": "У минулому часі частка ना/नाहीं ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "In the past tense, the particle ना/नाहीं goes right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हम ना खइनी।",
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
                "ऊ नाहीं आइल।",
                "Він/вона не прийшов(-ла)."
              ],
              [
                "हमनी ना गइनी जा।",
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
            "text": "Заперечний майбутній час теж утворюється часткою ना перед дієсловом у майбутній формі.",
            "en": {
              "text": "The negative future is also formed with the particle ना before the verb in the future form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हम ना जाइब।",
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
                "ऊ ना आई।",
                "Він/вона не прийде."
              ],
              [
                "बरखा ना होई।",
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
            "text": "Дієслово узгоджується не лише з особою й числом, а й з рівнем ввічливості до підмета — та сама людина отримує різне закінчення дієслова залежно від того, як до неї звертаються.",
            "en": {
              "text": "The verb agrees not only with person and number but also with the politeness level toward the subject — the same person takes a different verb ending depending on how they're addressed."
            }
          },
          {
            "type": "table",
            "title": "\"जाना\" (йти) — за рівнем",
            "rows": [
              [
                "तू जालऽ",
                "ти йдеш (фамільярно)"
              ],
              [
                "रउआ जालीं",
                "ти йдеш (ввічливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "रउआ कहाँ रहेलीं?",
                "Де Ви живете? (ввічливо)"
              ],
              [
                "तू कहाँ रहेलऽ?",
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
        "id": "instrumental-postposition-se",
        "title": "Орудний післяйменник \"से\" — A2",
        "titleEn": "Instrumental Postposition \"Se\" — A2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий післяйменник से, що позначає \"звідки\", вживається й для знаряддя дії — \"чим\".",
            "en": {
              "text": "The same postposition से that marks \"from where\" is also used for the instrument of an action — \"with what\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "कलम से लिखल",
                "написано ручкою"
              ],
              [
                "गाड़ी से आइल",
                "приїхав машиною"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हम कलम से लिखीलें।",
                "Я пишу ручкою."
              ],
              [
                "ऊ गाड़ी से आइल।",
                "Він приїхав машиною."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-marker-ke",
        "title": "Маркер додатка \"के\" — A2",
        "titleEn": "Object Marker \"Ke\" — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений прямий чи непрямий додаток позначається післяйменником के, доданим після іменника.",
            "en": {
              "text": "A definite direct or indirect object is marked with the postposition के, added after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "राम के देखनी",
                "я побачив Раму"
              ],
              [
                "लइका के किताब दिहनी",
                "я дав дитині книгу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हम ओकरा के जानीलें।",
                "Я його знаю."
              ],
              [
                "ऊ हमरा के बोलवलस।",
                "Він покликав мене."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-postposition-ke",
        "title": "Родовий післяйменник के/क/की — A2",
        "titleEn": "Genitive Postposition Ke/Ka/Ki — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність виражається післяйменником के (узгодженим за родом/числом означуваного слова: का/की/के), що ставиться після власника.",
            "en": {
              "text": "Possession is expressed with the postposition के (agreeing in gender/number with the possessed noun: का/की/के), placed after the possessor."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "राम के घर",
                "дім Рами"
              ],
              [
                "हमार किताब",
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
                "ई तोहार किताब बा का?",
                "Це твоя книга?"
              ],
              [
                "ओकर भाई डाक्टर बा।",
                "Його брат лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case-postpositions",
        "title": "Місцевий післяйменник \"में/पर\" — A2",
        "titleEn": "Locative Postpositions \"Mein/Par\" — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "घर में",
                "у домі"
              ],
              [
                "मेज पर",
                "на столі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "किताब मेज पर बा।",
                "Книга на столі."
              ],
              [
                "ऊ स्कूल में बा।",
                "Він/вона в школі."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-grammatical-gender-verbs-reduced",
        "title": "Спрощене узгодження за родом (на відміну від гінді) — B1",
        "titleEn": "Reduced Gender Agreement (Unlike Hindi) — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча іменники в бходжпурі мають рід, дієслово узгоджується з ним значно рідше й менш послідовно, ніж у гінді, — багато часових форм мають одну форму незалежно від роду підмета.",
            "en": {
              "text": "Although nouns in Bhojpuri have gender, the verb agrees with it far less often and less consistently than in Hindi — many tense forms have one shape regardless of the subject's gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "गінді: वह गया / वह गई (розрізняє рід)",
                "бходжпурі: ऊ गइल (одна форма для обох)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "राम गइल।",
                "Рам пішов."
              ],
              [
                "सीता गइल।",
                "Сіта пішла (та сама форма гइल)."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation-log-sab",
        "title": "Множина (लोग/सब) — A1",
        "titleEn": "Plural Formation (Log/Sab) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина людей часто утворюється додаванням слова लोग (люди), а загальна множина — словом सब (усі), а не суфіксом.",
            "en": {
              "text": "The plural of people is often formed by adding the word लोग (people), while general plurality uses सब (all), rather than a suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ऊ लोग",
                "вони (люди)"
              ],
              [
                "लइका सब",
                "усі діти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "लइका लोग खेलत बा।",
                "Діти граються."
              ],
              [
                "किताब सब मेज पर बा।",
                "Усі книги на столі."
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
            "text": "Бходжпурі вживає післяйменники (не прийменники), що стоять після іменника: से (з), तक (до), साथ (разом з).",
            "en": {
              "text": "Bhojpuri uses postpositions (not prepositions), placed after the noun: से (from), तक (until), साथ (with)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "घर से",
                "з дому"
              ],
              [
                "दोस्त के साथ",
                "з другом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ऊ पटना से आइल।",
                "Він приїхав з Патни."
              ],
              [
                "हम दोस्त के साथ बानी।",
                "Я з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодження прикметника — A2",
        "titleEn": "Adjective Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники на -ā узгоджуються з іменником за родом і числом; прикметники на приголосний залишаються незмінними.",
            "en": {
              "text": "Adjectives ending in -ā agree with the noun in gender and number; adjectives ending in a consonant stay unchanged."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "बड़ा लइका (великий хлопчик)",
                "बड़ी लइकी (велика дівчинка)"
              ],
              [
                "सुंदर घर",
                "гарний дім (незмінна форма)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "बड़ा घर हमार बा।",
                "Великий дім мій."
              ],
              [
                "छोट लइकी सुतल बा।",
                "Маленька дівчинка спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Порівняння через \"से जादा\" — A2",
        "titleEn": "Comparison via \"Se Jada\" — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння \"більше ніж\" виражається конструкцією \"X से जादा\" (більше за X) замість окремої форми прикметника.",
            "en": {
              "text": "The comparison \"more than\" is expressed with the construction \"X से जादा\" (more than X) rather than a separate adjective form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ऊ हमरा से जादा लंबा बा।",
                "Він вищий за мене."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ई घर ओकरा से जादा बड़ा बा।",
                "Цей дім більший за той."
              ],
              [
                "ऊ सबसे जादा होशियार बा।",
                "Він найрозумніший за всіх."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (इ/ऊ) — A1",
        "titleEn": "Demonstratives (I/U) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "इ किताब",
                "ця книга"
              ],
              [
                "ऊ घर",
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
                "इ हमार बा।",
                "Це моє."
              ],
              [
                "ऊ पहाड़ बहुत ऊँच बा।",
                "Та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-je",
        "title": "Відносний займенник \"जे\" — B1",
        "titleEn": "Relative Pronoun \"Je\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник जे (\"який/що\") вводить підрядне означальне речення й часто парується з ऊ в головній частині.",
            "en": {
              "text": "The relative pronoun जे (\"who/which/that\") introduces a relative clause and is often paired with ऊ in the main clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "जे आदमी आइल, ऊ हमार दोस्त बा।",
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
                "जे किताब तू पढ़त बाड़ऽ, ऊ बढ़िया बा।",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "जे लइका बोलल, ऊ हमार भाई बा।",
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
                "के",
                "хто"
              ],
              [
                "का",
                "що"
              ],
              [
                "कहाँ",
                "де"
              ],
              [
                "कब",
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
                "तोहार नाम का बा?",
                "Як тебе звати?"
              ],
              [
                "तू कहाँ रहेलऽ?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-apne",
        "title": "Зворотний займенник \"अपने\" — B1",
        "titleEn": "Reflexive Pronoun \"Apne\" (Self) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник अपने (\"сам/самий\") вказує на підмет незалежно від особи.",
            "en": {
              "text": "The reflexive pronoun अपने (\"self\") refers back to the subject regardless of person."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "हम अपने कइनी",
                "я сам зробив"
              ],
              [
                "अपने घर",
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
                "ऊ अपने आइल।",
                "Він прийшов сам."
              ],
              [
                "हम अपने के शीशा में देखनी।",
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
                "हमार",
                "мій"
              ],
              [
                "तोहार",
                "твій"
              ],
              [
                "ओकर",
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
                "हमार घर बड़ा बा।",
                "Мій дім великий."
              ],
              [
                "ओकर किताब मेज पर बा।",
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
                "एक",
                "1"
              ],
              [
                "दू",
                "2"
              ],
              [
                "तीन",
                "3"
              ],
              [
                "दस",
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
                "हमरा दू बहिन बा।",
                "У мене дві сестри."
              ],
              [
                "दस गो आदमी आइल।",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier-go",
        "title": "Класифікатор \"गो\" — A2",
        "titleEn": "Classifier \"Go\" — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Класифікатор गो часто вставляється між числівником та іменником при рахунку, особливо для неживих предметів.",
            "en": {
              "text": "The classifier गो is often inserted between the numeral and the noun when counting, especially for inanimate objects."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "तीन गो किताब",
                "три книги"
              ],
              [
                "दू गो सेब",
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
                "हमरा पाँच गो कुर्सी चाहीं।",
                "Мені потрібно п'ять стільців."
              ],
              [
                "तोहरा केतना गो दोस्त बा?",
                "Скільки в тебе друзів?"
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
                "बहुत",
                "багато"
              ],
              [
                "थोड़ा",
                "мало"
              ],
              [
                "कुछ",
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
                "हमरा बहुत किताब बा।",
                "У мене багато книг."
              ],
              [
                "थोड़ा पानी दऽ।",
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
                "आउर",
                "і, та"
              ],
              [
                "बाकिर",
                "але"
              ],
              [
                "या",
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
                "हम आउर तू दोस्त बानी जा।",
                "Я і ти — друзі."
              ],
              [
                "जाए के मन बा, बाकिर टाइम नइखे।",
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
                "काहे कि",
                "тому що"
              ],
              [
                "अगर",
                "якщо"
              ],
              [
                "जब",
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
                "हम खुश बानी काहे कि तू आइलऽ।",
                "Я радий, тому що ти прийшов."
              ],
              [
                "जब हम फुरसत में रहब, फोन करब।",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні слова (चाहीं/सकल) — A2",
        "titleEn": "Modal Words (Cahi/Sakal) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "हमरा जाए के चाहीं।",
                "Мені треба йти."
              ],
              [
                "हम तइरे सकीलें।",
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
                "तोहरा पढ़े के चाहीं।",
                "Тобі треба вчитися."
              ],
              [
                "हम मदद करे के चाहत बानी।",
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
                "हम किताब पढ़ीलें।",
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
                "माई खाना बनावेली।",
                "Мама готує їжу."
              ],
              [
                "मास्टर पढ़ावेला।",
                "Вчитель викладає."
              ]
            ]
          }
        ]
      },
      {
        "id": "three-tier-politeness-pronouns-verb",
        "title": "Три рівні ввічливості \"तू/तोहरा/रउआ\" — A2",
        "titleEn": "Three Politeness Levels \"Tu/Tohra/Raua\" — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Так само, як і сусідня бходжпурі-мовна група, мова має три рівні ввічливості для \"ти\": तू (дуже фамільярне), तोहरा-варіанти (нейтральне), रउआ (формальне/поважне).",
            "en": {
              "text": "Like the neighboring Bhojpuri-speaking group, the language has three politeness levels for \"you\": तू (very intimate), तोहरा-based forms (neutral), रउआ (formal/respectful)."
            }
          },
          {
            "type": "table",
            "title": "Три рівні",
            "rows": [
              [
                "तू",
                "дуже фамільярне (діти, найближчі)"
              ],
              [
                "रउआ",
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
                "रउआ कहाँ से आइल बानी?",
                "Звідки Ви приїхали? (формально)"
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
                "सोमार",
                "понеділок"
              ],
              [
                "सनिचर",
                "субота"
              ],
              [
                "इतवार",
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
                "आज सोमार बा।",
                "Сьогодні понеділок."
              ],
              [
                "हम इतवार के आराम करीलें।",
                "У неділю я відпочиваю."
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
                "जनवरी",
                "січень"
              ],
              [
                "मई",
                "травень"
              ],
              [
                "दिसंबर",
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
                "हमार जनम मई में भइल।",
                "Мій день народження в травні."
              ],
              [
                "आज दस जनवरी बा।",
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
                "कतना बजल बा?",
                "Котра година?"
              ],
              [
                "तीन बजल बा।",
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
                "हमनी छह बजे मिलब जा।",
                "Зустрінемось о шостій."
              ],
              [
                "अभी दुपहर बा।",
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
                "प्रणाम / राम राम",
                "Привіт"
              ],
              [
                "धन्यवाद",
                "Дякую"
              ],
              [
                "फेर मिलब",
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
                "का हाल बा?",
                "Як справи?"
              ],
              [
                "बहुत धन्यवाद।",
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
                "धूप बा।",
                "Сонячно."
              ],
              [
                "बरखा हो रहल बा।",
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
                "आज जाड़ा बा।",
                "Сьогодні холодно."
              ],
              [
                "बहुत गरमी बा।",
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
                "दिमाग खराब होखल",
                "розгніватися (буквально: розум зіпсуватися)"
              ],
              [
                "हाथ बंटावल",
                "допомагати (буквально: розділити руку)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ओकर दिमाग खराब हो गइल।",
                "Він розгнівався."
              ],
              [
                "आवऽ, हाथ बंटावऽ।",
                "Ходи, допоможи."
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
                "तेजी से",
                "швидко"
              ],
              [
                "धीरे धीरे",
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
                "ऊ तेजी से दौड़ेला।",
                "Він швидко бігає."
              ],
              [
                "धीरे धीरे बोलऽ।",
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
                "-पन",
                "утворює абстрактні іменники (बच्चा→बचपन, дитина→дитинство)"
              ],
              [
                "-वाला",
                "утворює назви професій (दूध→दूधवाला, молоко→молочник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "बचपन खुशी के समय होला।",
                "Дитинство — щасливий час."
              ],
              [
                "दूधवाला आइल।",
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
                "हाथ (рука) + घड़ी (годинник)",
                "हाथघड़ी (наручний годинник)"
              ],
              [
                "रेल (потяг) + गाड़ी (машина)",
                "रेलगाड़ी (потяг)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हमार नया हाथघड़ी बा।",
                "У мене новий наручний годинник."
              ],
              [
                "रेलगाड़ी लेट बा।",
                "Потяг запізнюється."
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
                "बसंत",
                "весна"
              ],
              [
                "गरमी",
                "літо"
              ],
              [
                "जाड़ा",
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
                "गरमी में बहुत गरम होला।",
                "Влітку дуже жарко."
              ],
              [
                "जाड़ा में ठंड होला।",
                "Взимку холодно."
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
                "एकर दाम केतना बा?",
                "Скільки коштує?"
              ],
              [
                "एक हजार रुपिया बा।",
                "Тисяча рупій."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ई किताब दू सौ रुपिया के बा।",
                "Ця книга коштує двісті рупій."
              ],
              [
                "बहुत महंगा बा।",
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
                "हम सोचीलें कि...",
                "Я думаю, що..."
              ],
              [
                "हमरा लागेला कि...",
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
                "हम सोचीलें कि तू सही बाड़ऽ।",
                "Я думаю, що ти правий."
              ],
              [
                "हमरा लागेला कि ई बढ़िया विचार बा।",
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
                "आज / काल्ह / बीते काल्ह",
                "сьогодні / завтра / вчора"
              ],
              [
                "अभी / बाद में",
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
                "काल्ह मिलब।",
                "Побачимось завтра."
              ],
              [
                "हम अभी व्यस्त बानी।",
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
                "केहू",
                "хтось"
              ],
              [
                "कुछ",
                "щось"
              ],
              [
                "केहू ना",
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
                "केहू फोन कइलस।",
                "Хтось мені подзвонив."
              ],
              [
                "हम कुछ सुननी।",
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
                "अरे!",
                "Ой!"
              ],
              [
                "बहुत बढ़िया!",
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
                "अरे, केतना सुंदर बा!",
                "Ой, як гарно!"
              ],
              [
                "बहुत बढ़िया खबर बा!",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція \"є/немає\" (बा/नइखे) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Ba/Naikhe) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "पानी बा।",
                "Є вода."
              ],
              [
                "टाइम नइखे।",
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
                "इहाँ बहुत लोग बा।",
                "Тут багато людей."
              ],
              [
                "इहाँ दुकान नइखे।",
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
            "text": "Пестливі форми часто утворюються суфіксом -वा, доданим до маленьких/дорогих істот чи предметів.",
            "en": {
              "text": "Diminutive/affectionate forms are often made with the suffix -वा, added to small or dear beings or things."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "लइका (дитина)",
                "लइकवा",
                "малятко"
              ],
              [
                "माई (мама)",
                "मइया",
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
                "लइकवा सुतल बा।",
                "Малятко спить."
              ],
              [
                "हमार मइया बहुत नीक बा।",
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
                "बाबूजी",
                "пан (шанобливо)"
              ],
              [
                "माईजी",
                "пані/мамо (шанобливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "प्रणाम, बाबूजी।",
                "Вітаю, пане."
              ],
              [
                "माईजी, माफ करीं।",
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
                "जइसन बोवबऽ, वइसन काटबऽ।",
                "Що посієш, те й пожнеш."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मेहनत करऽ, जइसन बोवबऽ वइसन काटबऽ।",
                "Працюй, що посієш, те й пожнеш."
              ],
              [
                "धीरज के फल मीठा होला।",
                "Плід терпіння солодкий."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-english-urdu",
        "title": "Запозичення з англійської та урду — B1",
        "titleEn": "Loanwords from English & Urdu — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасна технічна лексика часто йде з англійської, тоді як багато адміністративних і побутових слів історично запозичені з урду/перської через тривалу спільну культурну історію.",
            "en": {
              "text": "Modern technical vocabulary often comes from English, while many administrative and everyday words are historically borrowed from Urdu/Persian through a long shared cultural history."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "मोबाइल (з англ.)",
                "мобільний телефон"
              ],
              [
                "गरीब (з урду/перс.)",
                "бідний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हमार मोबाइल खराब हो गइल।",
                "Мій телефон зламався."
              ],
              [
                "ऊ गरीब आदमी बा।",
                "Він бідна людина."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-suffix-verb",
        "title": "Об'єктний суфікс на дієслові — B1",
        "titleEn": "Object Suffix Attached to the Verb — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Займенниковий додаток іноді приєднується прямо до дієслова як короткий суфікс, замінюючи окремий займенник з के.",
            "en": {
              "text": "A pronoun object is sometimes attached directly to the verb as a short suffix, replacing a separate pronoun with के."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "देखलस",
                "він побачив (додаток вже включений у контекст)"
              ],
              [
                "दिहलस हमरा के",
                "дав мені"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ऊ हमरा के बोलवलस।",
                "Він покликав мене."
              ],
              [
                "हम तोहरा के देखनी।",
                "Я тебе побачив."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Нюанси заперечення (ना vs मत) — B1",
        "titleEn": "Negation Nuances (Na vs Mat) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"ना\" — звичайне заперечення дії, а \"मत\" вживається спеціально для заперечного наказу (\"не роби\").",
            "en": {
              "text": "\"ना\" is regular action negation, while \"मत\" is used specifically for the negative imperative (\"don't do\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ऊ ना आइल।",
                "Він не прийшов."
              ],
              [
                "मत जा!",
                "Не йди!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मत रोवऽ।",
                "Не плач."
              ],
              [
                "ऊ खाना ना खइलस।",
                "Він не поїв."
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
            "text": "Різні \"легкі\" дієслова у складеній конструкції додають різні відтінки: लेना (взяти) — дію для себе, देना (дати) — дію для когось, डालना (кинути) — раптовість.",
            "en": {
              "text": "Different \"light\" verbs in a compound construction add different shades: लेना (take) — an action for oneself, देना (give) — an action for someone else, डालना (throw) — suddenness."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "खा लिहल",
                "з'їв (для себе)"
              ],
              [
                "खा दिहल",
                "з'їв (для когось)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "हम रोटी बना दिहनी।",
                "Я приготував хліб (для когось)."
              ],
              [
                "ऊ अचानक चिल्ला उठल।",
                "Він раптово закричав."
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
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "बड़ा लाल घर",
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
                "छोट सफेद कुकुर",
                "маленький білий пес"
              ],
              [
                "सुंदर नया गाड़ी",
                "гарна нова машина"
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
                "पहिला",
                "перший"
              ],
              [
                "दूसर",
                "другий"
              ],
              [
                "तिसर",
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
                "ई हमार पहिला किताब बा।",
                "Це моя перша книга."
              ],
              [
                "ऊ दूसर स्थान पइलस।",
                "Він зайняв друге місце."
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
                "ए राम!",
                "Гей, Раме!"
              ],
              [
                "ओ माई!",
                "О, мамо!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ए भाई, इहाँ आवऽ!",
                "Гей, брате, іди сюди!"
              ],
              [
                "ओ बाबूजी, सुनीं!",
                "О, пане, послухайте!"
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address-deep",
        "title": "Детально про формальність звертання — B1",
        "titleEn": "Formality of Address in Depth — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір форми \"ти\" впливає не лише на займенник, а й на всю парадигму дієслова та на присвійні форми — послідовне дотримання одного рівня протягом усього діалогу є важливим.",
            "en": {
              "text": "The choice of \"you\" form affects not just the pronoun but the entire verb paradigm and possessive forms — consistently keeping one level throughout a conversation matters."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "तू आ तोहार (фамільярно)",
                "рउआ आ रउरा (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "रउरा घर केतना बड़ा बा?",
                "Наскільки великий Ваш дім? (формально)"
              ],
              [
                "तोहार घर केतना बड़ा बा?",
                "Наскільки великий твій дім? (фамільярно)"
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
        "id": "diaspora-varieties-caribbean-pacific",
        "title": "Діаспорні варіанти — Маврикій, Тринідад, Фіджі, Суринам — B2",
        "titleEn": "Diaspora Varieties — Mauritius, Trinidad, Fiji, Suriname — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Унаслідок масової міграції законтрактованих робітників у 19 ст. бходжпурі стала основою мов діаспори за тисячі кілометрів від Індії — на Маврикії, Тринідаді, Фіджі, у Суринамі й Гаяні, де вона розвивалась окремо й запозичила слова з французької, англійської чи голландської.",
            "en": {
              "text": "Due to mass 19th-century indentured-labor migration, Bhojpuri became the base of diaspora languages thousands of kilometers from India — in Mauritius, Trinidad, Fiji, Suriname, and Guyana, where it developed separately and borrowed words from French, English, or Dutch."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Фіджі-бходжпурі",
                "своя окрема норма, далека від сучасної індійської"
              ],
              [
                "Карибська бходжпурі",
                "з домішками англійської/французької лексики"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "मॉरीशस में भोजपुरी बोलल जाला।",
                "На Маврикії говорять бходжпурі."
              ],
              [
                "त्रिनिदाद के लोग भोजपुरी गीत गावेला।",
                "Люди Тринідаду співають пісні бходжпурі."
              ]
            ]
          }
        ]
      },
      {
        "id": "kaithi-script-history",
        "title": "Історична писемність кайтхі — B2",
        "titleEn": "The Historical Kaithi Script — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "До поширення деванагарі під впливом гінді бходжпурі традиційно записували скорописним письмом кайтхі, яке використовувалося писарями регіону; сьогодні воно вийшло з ужитку, і мова записується деванагарі, як і гінді.",
            "en": {
              "text": "Before Devanagari spread under Hindi's influence, Bhojpuri was traditionally written with the cursive Kaithi script, used by the region's scribes; today it has fallen out of use, and the language is written in Devanagari, like Hindi."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "देवनागरी (сучасне)",
                "बा — сучасне письмо"
              ],
              [
                "कैथी (історичне)",
                "той самий звук, інша графіка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "पहिले कैथी लिपि में लिखल जात रहे।",
                "Раніше писали письмом кайтхі."
              ],
              [
                "अब देवनागरी में लिखल जाला।",
                "Тепер пишуть деванагарі."
              ]
            ]
          }
        ]
      },
      {
        "id": "prosody-differences-from-hindi",
        "title": "Наголос і ритм відрізняються від гінді — B1",
        "titleEn": "Stress and Rhythm Differ from Hindi — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Навіть коли слово в бходжпурі виглядає ідентично до гінді на письмі, наголос і ритм вимови часто інші — це одна з причин, чому мова легко впізнається на слух попри спільну писемність і частину лексики.",
            "en": {
              "text": "Even when a Bhojpuri word looks identical to Hindi in writing, the stress and rhythm of pronunciation are often different — one reason the language is easily recognized by ear despite the shared script and partial vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "गइल (наголос на першому складі)",
                "пішов"
              ],
              [
                "गया (гінді, інший ритм)",
                "той самий сенс, інший ритмічний малюнок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ऊ गइल बा।",
                "Він пішов."
              ],
              [
                "हम आइल बानी।",
                "Я прийшов."
              ]
            ]
          }
        ]
      }
    ]
  }
];
