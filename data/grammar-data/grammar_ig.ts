// Vymova — data/grammar-data/grammar_ig.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_IG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Nnọchi Aha Onwe — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В ігбо займенник третьої особи однини \"ọ\" не розрізняє роду — \"він\", \"вона\" й \"воно\" звучать однаково.",
            "en": {
              "text": "In Igbo, the third-person singular pronoun \"ọ\" has no gender distinction — \"he\", \"she\", and \"it\" all sound the same."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "m"
              ],
              [
                "ти",
                "ị"
              ],
              [
                "він / вона / воно",
                "ọ"
              ],
              [
                "ми",
                "anyị"
              ],
              [
                "ви",
                "unu"
              ],
              [
                "вони",
                "ha"
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
        "id": "bu-vs-di",
        "title": "Bụ vs Dị — два дієслова \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "В ігбо два різних дієслова \"бути\": \"bụ\" для тотожності й класифікації, \"dị\" для стану, місця й наявності — подібний поділ є в багатьох мовах Нігер-Конго.",
            "en": {
              "text": "Igbo has two different verbs \"to be\": \"bụ\" for identity and classification, \"dị\" for state, location, and existence — a similar split found in many Niger-Congo languages."
            }
          },
          {
            "type": "table",
            "title": "bụ (тотожність) vs dị (стан)",
            "rows": [
              [
                "Ọ bụ onye nkuzi.",
                "Він/вона вчитель. (тотожність, bụ)"
              ],
              [
                "Ọ dị mma.",
                "Це добре/він добре. (стан, dị)"
              ]
            ],
            "en": {
              "title": "bụ (identity) vs dị (state)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ bụ onye Igbo.",
                "Він/вона ігбо."
              ],
              [
                "Ọ dị n'ụlọ.",
                "Він/вона вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bụ vs Dị — Two Verbs \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення (-ghị) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється суфіксом \"-ghị\", доданим до дієслова, а не окремим словом заперечення.",
            "en": {
              "text": "Negation is formed with the suffix \"-ghị\", added to the verb, rather than a separate negation word."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ọ bụ onye nkuzi.",
                "Ọ bụghị onye nkuzi.",
                "Він вчитель → він не вчитель"
              ],
              [
                "M maara ya.",
                "M amaghị ya.",
                "Я знаю це → я не знаю цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ dịghị mma.",
                "Це недобре."
              ],
              [
                "Ọ sụghị Igbo.",
                "Він/вона не розмовляє ігбо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (-ghị) — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання часто починаються часткою \"Ị\" чи закінчуються часткою \"ka\"; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions often begin with the particle \"Ị\" or end with the particle \"ka\"; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "onye",
                "хто"
              ],
              [
                "gịnị",
                "що"
              ],
              [
                "ebee",
                "де"
              ],
              [
                "mgbe",
                "коли"
              ],
              [
                "gịnị mere",
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
                "Ị bụ onye Igbo?",
                "Ти ігбо?"
              ],
              [
                "Ebee ka ị bi?",
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
        "id": "tonal-associative-construction",
        "title": "Присвійність через тон (без слова-зв'язки) — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса ігбо: присвійна (асоціативна) конструкція не має окремого слова-зв'язки \"з/від\" — зв'язок між двома іменниками позначається лише зниженням тону другого іменника, без жодної видимої частки.",
            "en": {
              "text": "Igbo's most defining trait: the possessive (associative) construction has no separate linking word \"of\" at all — the link between two nouns is marked purely by a tone drop on the second noun, with no visible particle whatsoever."
            }
          },
          {
            "type": "table",
            "title": "Асоціативна конструкція",
            "rows": [
              [
                "ụlọ + nna → ụlọ nna",
                "дім батька (лише тональна зміна, без слова \"з\")"
              ]
            ],
            "en": {
              "title": "The Associative Construction"
            }
          }
        ],
        "titleEn": "Possession via Tone (No Linking Word) — B1"
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
        "id": "factative-aspect",
        "title": "Фактативний вид — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса ігбо: немаркована форма дієслова (без жодного часового префікса/суфікса) за замовчуванням читається як минулий час для динамічних дієслів і як теперішній стан для стативних дієслів — саме дієслово \"вирішує\" час.",
            "en": {
              "text": "A unique Igbo feature: the unmarked verb form (with no tense prefix/suffix at all) defaults to past tense for dynamic verbs and to a present state for stative verbs — the verb itself \"decides\" the tense."
            }
          },
          {
            "type": "table",
            "title": "Фактатив: динамічне vs стативне",
            "rows": [
              [
                "Ọ rịgoro.",
                "Він піднявся. (динамічне → мин. час за замовчуванням)"
              ],
              [
                "Ọ dị mma.",
                "Він/це добре. (стативне → теп. стан за замовчуванням)"
              ]
            ],
            "en": {
              "title": "Factative: Dynamic vs Stative"
            }
          }
        ],
        "titleEn": "The Factative Aspect — B1"
      },
      {
        "id": "progressive-na",
        "title": "Тривалий вид (na-) — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"na-\" перед дієсловом позначає дію, що триває зараз.",
            "en": {
              "text": "The prefix \"na-\" before the verb marks an action happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ na-eri nri.",
                "Він/вона зараз їсть."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Progressive Aspect (na-) — A1"
      },
      {
        "id": "future-ga",
        "title": "Майбутній час (ga-) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"ga-\" перед дієсловом позначає майбутню дію.",
            "en": {
              "text": "The prefix \"ga-\" before the verb marks a future action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "M ga-abịa echi.",
                "Я прийду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense (ga-) — A2"
      },
      {
        "id": "past-rv-suffix",
        "title": "Минулий час (-rV) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Явно позначений минулий час утворюється суфіксом -rV, де голосна V узгоджується з останньою голосною кореня за правилами гармонії голосних.",
            "en": {
              "text": "The explicitly marked past tense is formed with the suffix -rV, where the vowel V agrees with the verb root's last vowel under vowel harmony rules."
            }
          },
          {
            "type": "table",
            "title": "zụ → zụrụ",
            "rows": [
              [
                "zụ (купувати) → zụrụ",
                "купив"
              ],
              [
                "sị → sịrị",
                "сказав"
              ]
            ],
            "en": {
              "title": "zụ → zụrụ"
            }
          }
        ],
        "titleEn": "The Past Tense Suffix (-rV) — A2"
      },
      {
        "id": "perfect-completive",
        "title": "Перфект (-rVị) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект (дія завершена, наслідок актуальний) утворюється розширеним суфіксом, відмінним від простого минулого -rV.",
            "en": {
              "text": "The perfect (action completed, result relevant now) is formed with an extended suffix, distinct from the simple past -rV."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ rịgoro ugbu a.",
                "Він уже піднявся (і зараз там)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect (-rVị) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова без жодного префікса чи суфікса.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb root with no prefix or suffix at all."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Bịa!",
                "Приходь!"
              ],
              [
                "Gaa!",
                "Іди!"
              ]
            ],
            "en": {
              "title": "Imperative"
            }
          }
        ],
        "titleEn": "The Imperative Mood — A2"
      },
      {
        "id": "subjunctive-rv",
        "title": "Підрядний спосіб для бажання/наказу — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Окрема форма дієслова (не та сама, що минулий час -rV, хоч і схожа за вимовою) вживається після дієслів бажання й у непрямому наказі.",
            "en": {
              "text": "A distinct verb form (not the same as the past tense -rV, though similar in sound) is used after verbs of wish and in indirect commands."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ chọrọ ka m bịa.",
                "Він хоче, щоб я прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subjunctive for Wishes/Indirect Commands — B1"
      },
      {
        "id": "habitual-aspect",
        "title": "Звичний вид — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну, регулярну дію виражають тим самим префіксом \"na-\", що й тривалий вид — контекст і часові слова розрізняють значення.",
            "en": {
              "text": "A habitual, regular action is expressed with the same prefix \"na-\" used for the progressive — context and time words disambiguate the meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ na-aga ụka kwa Sọndee.",
                "Він/вона ходить до церкви щонеділі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Habitual Aspect — B1"
      },
      {
        "id": "negative-future-agaghi",
        "title": "Заперечний майбутній час — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення майбутнього часу поєднує префікс \"ga-\" із суфіксом заперечення \"-ghị\", утворюючи одне злите слово.",
            "en": {
              "text": "Negating the future combines the prefix \"ga-\" with the negation suffix \"-ghị\", forming a single fused word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ gaghị abịa.",
                "Він/вона не прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Negative Future — B1"
      },
      {
        "id": "negative-progressive",
        "title": "Заперечний тривалий вид — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення тривалого виду також поєднує \"na-\" із \"-ghị\" у межах одного дієслова.",
            "en": {
              "text": "Negating the progressive also combines \"na-\" with \"-ghị\" within a single verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ naghị eri nri.",
                "Він/вона зараз не їсть."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Negative Progressive — B1"
      },
      {
        "id": "conditional-ma",
        "title": "Умовний спосіб (ma) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ma\" (якщо) вводить умовне речення, без окремого умовного дієслівного закінчення.",
            "en": {
              "text": "\"Ma\" (if) introduces a conditional sentence, with no separate conditional verb ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma ọ bịa, gwa m.",
                "Якщо він прийде, скажи мені."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional (ma) — B1"
      },
      {
        "id": "serial-verb-construction",
        "title": "Серіальна дієслівна конструкція — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Два чи більше дієслова можуть стояти поспіль без сполучника, описуючи одну складну подію послідовними кроками — типова риса мов Нігер-Конго.",
            "en": {
              "text": "Two or more verbs can stand in a row with no conjunction, describing one complex event as sequential steps — a typical trait of Niger-Congo languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ were mma gbuo ewu.",
                "Він узяв ножа й зарізав козу. (узяв-зарізав без сполучника)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Serial Verb Construction — B2"
      },
      {
        "id": "reduplication-continuous-manner",
        "title": "Редуплікація дієслова — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення дієслівного кореня може утворювати іменник способу дії або підсилювати тривалість дії.",
            "en": {
              "text": "Reduplicating the verb root can form a manner noun or intensify the duration of the action."
            }
          },
          {
            "type": "table",
            "title": "zie → ziezie",
            "rows": [
              [
                "zie (поспішати) → ziezie",
                "швиденько/поспіхом"
              ]
            ],
            "en": {
              "title": "zie → ziezie"
            }
          }
        ],
        "titleEn": "Verb Reduplication — B1"
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
        "id": "diacritic-tone-marks",
        "title": "Діакритичні позначки тону — B1",
        "emoji": "〜",
        "sections": [
          {
            "type": "intro",
            "text": "У навчальних текстах і словниках тон іноді позначають діакритиками (гострий для високого, грав для низького) над голосними, хоча в повсякденному письмі ці позначки майже завжди пропускають.",
            "en": {
              "text": "In teaching texts and dictionaries, tone is sometimes marked with diacritics (acute for high, grave for low) over vowels, though everyday writing almost always omits these marks."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "á (високий тон), à (низький тон) — позначки лише в навчальних матеріалах.",
                "у звичайних газетах і книгах тон зазвичай не позначають"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diacritic Tone Marks — B1"
      },
      {
        "id": "tone-as-grammar",
        "title": "Тон як граматичний маркер — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Ігбо — тональна мова з високим, низьким і спадним (downstep) тоном: той самий ланцюжок звуків може мати зовсім інше значення чи граматичну функцію лише через зміну тону.",
            "en": {
              "text": "Igbo is a tonal language with high, low, and downstep tone: the same sound sequence can have a completely different meaning or grammatical function purely through a tone change."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "áká (рука, високий) vs akà (слава, низький)",
                "мінімальна пара, розрізнена лише тоном"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone as a Grammatical Marker — B1"
      },
      {
        "id": "downstep-associative",
        "title": "Downstep в асоціативній конструкції — B2",
        "emoji": "📉",
        "sections": [
          {
            "type": "intro",
            "text": "Детальніше про присвійність (див. основи): тональне зниження (\"downstep\"), що сигналізує асоціативну конструкцію, не видиме в стандартному письмі без спеціальних позначок — носії розрізняють значення лише на слух.",
            "en": {
              "text": "More on possession (see basics): the tonal lowering (\"downstep\") signaling the associative construction is invisible in standard writing without special marks — speakers distinguish meaning purely by ear."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ụlọ nna (дім батька) написано так само, як два окремі слова без зв'язки",
                "downstep чути, але не видно в стандартному тексті"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Downstep in the Associative Construction — B2"
      },
      {
        "id": "vowel-harmony",
        "title": "Гармонія голосних (ATR) — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Голосні діляться на два набори за положенням кореня язика (просунутий/непросунутий): усі голосні в межах слова чи суфікса мають узгоджуватися з одним набором.",
            "en": {
              "text": "Vowels split into two sets based on tongue root position (advanced/retracted): all vowels within a word or suffix must agree with one set."
            }
          },
          {
            "type": "table",
            "title": "Два набори голосних",
            "rows": [
              [
                "i, u, e, o (просунутий корінь)",
                "один набір"
              ],
              [
                "ị, ụ, a, ọ (непросунутий корінь)",
                "інший набір"
              ]
            ],
            "en": {
              "title": "The Two Vowel Sets"
            }
          }
        ],
        "titleEn": "Vowel Harmony (ATR) — B1"
      },
      {
        "id": "underdot-vowels",
        "title": "Голосні з підрядковою крапкою — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Літери ị, ọ (і приголосна ṅ) з підрядковою крапкою позначають окремі фонеми, відмінні від i, o без крапки — крапка не декоративна, а смислорозрізнювальна.",
            "en": {
              "text": "The letters ị, ọ (and the consonant ṅ) with an underdot mark separate phonemes, distinct from plain i, o — the dot is not decorative but meaning-distinguishing."
            }
          },
          {
            "type": "table",
            "title": "i vs ị",
            "rows": [
              [
                "isi (голова)",
                "ịsị (неправильна форма-приклад, демонструє контраст i/ị)"
              ]
            ]
          }
        ],
        "titleEn": "Underdot Vowels — A1"
      },
      {
        "id": "no-grammatical-gender",
        "title": "Відсутність граматичного роду — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "В ігбо немає граматичного роду взагалі: займенник \"ọ\" і всі прикметники та дієслова однакові незалежно від статі референта.",
            "en": {
              "text": "Igbo has no grammatical gender at all: the pronoun \"ọ\" and all adjectives and verbs are the same regardless of the referent's sex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nwoke mara mma, nwanyị mara mma",
                "гарний чоловік, гарна жінка (mara mma незмінне)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absence of Grammatical Gender — A1"
      },
      {
        "id": "no-articles",
        "title": "Відсутність артиклів — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "В ігбо немає ні означеного, ні неозначеного артикля: визначеність виражається контекстом або вказівним займенником за потреби.",
            "en": {
              "text": "Igbo has neither a definite nor an indefinite article: definiteness is expressed by context, or by a demonstrative pronoun when needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ahụrụ m ụlọ.",
                "Я побачив дім/будинок. (без жодного артикля)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absence of Articles — A1"
      },
      {
        "id": "plural-often-unmarked",
        "title": "Множина часто без позначення — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник зазвичай не змінюється у множині взагалі; число видно лише з контексту, числівника чи слова \"ha\" (вони/їхні).",
            "en": {
              "text": "The noun usually doesn't change for plural at all; number is conveyed only by context, a numeral, or the word \"ha\" (they/their)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "otu nwa / ụmụ abụọ",
                "одна дитина / двоє дітей (nwa→ụmụ лише в окремих випадках, не системно)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Often Left Unmarked — A2"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники стоять після іменника, на відміну від багатьох інших мов.",
            "en": {
              "text": "Numerals stand after the noun, unlike many other languages."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "otu",
                "один"
              ],
              [
                "abụọ",
                "два"
              ],
              [
                "ise",
                "п'ять"
              ],
              [
                "iri",
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
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Nke a\" (цей) вказує на близьке, \"nke ahụ\" (той) — на віддалене.",
            "en": {
              "text": "\"Nke a\" (this) points to something near, \"nke ahụ\" (that) to something distant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akwụkwọ nke a bụ nke m.",
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
        "id": "relative-clause-structure",
        "title": "Відносне речення — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне речення часто просто йде одразу за іменником без окремого відносного займенника, спираючись на тон і порядок слів.",
            "en": {
              "text": "A relative clause often simply follows the noun directly with no separate relative pronoun, relying on tone and word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nwoke bịara bụ enyi m.",
                "Чоловік, що прийшов, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause Structure — B1"
      },
      {
        "id": "focus-marker",
        "title": "Фокусна частка — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка, поставлена після слова, підкреслює його — \"саме\", подібно до фокусних часток у інших мовах цього регіону.",
            "en": {
              "text": "A particle placed after a word emphasizes it — \"exactly\", similar to focus particles in other languages of the region."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ bụ m mere ya.",
                "Це саме я зробив це."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Focus Particle — B1"
      },
      {
        "id": "reflexive-onwe",
        "title": "Зворотний займенник onwe — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається словом \"onwe\" (самість/особа) + присвійний займенник — буквально \"свою особу\".",
            "en": {
              "text": "Reflexivity is expressed with the word \"onwe\" (self/person) + a possessive pronoun — literally \"one's own self\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ hụrụ onwe ya n'ugbo.",
                "Він побачив себе у дзеркалі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun onwe — B1"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники (nke + займенник) — A2",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Самостійні присвійні займенники утворюються словом \"nke\" + особовий займенник, окремо від асоціативної конструкції для іменника+іменника.",
            "en": {
              "text": "Standalone possessive pronouns are formed with \"nke\" + personal pronoun, distinct from the noun+noun associative construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akwụkwọ a bụ nke m.",
                "Ця книга моя."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Pronouns (nke + Pronoun) — A2"
      },
      {
        "id": "comparative-kari",
        "title": "Порівняльна конструкція (karịa) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають дієсловом \"karịa\" (перевищувати), а не окремим порівняльним суфіксом.",
            "en": {
              "text": "Comparison is expressed with the verb \"karịa\" (to exceed), not a separate comparative suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ dị ogologo karịa m.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (karịa) — A2"
      },
      {
        "id": "word-order-svo",
        "title": "Порядок слів SVO — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-присудок-додаток (SVO).",
            "en": {
              "text": "The basic order is subject-verb-object (SVO)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "M hụrụ ya.",
                "Я побачив його/її."
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
        "id": "adjectives-as-stative-verbs",
        "title": "Мало справжніх прикметників — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Ігбо має дуже малий клас справжніх прикметників (менше десяти); більшість якостей виражають стативним дієсловом, що діє як присудок.",
            "en": {
              "text": "Igbo has a very small class of true adjectives (fewer than ten); most qualities are expressed with a stative verb acting as the predicate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ụlọ a dị ukwuu.",
                "Цей дім великий. (дієслово dị + ukwuu, не прикметник)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "A Small Class of True Adjectives — B1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Onye\" (хто) вживається для людей, \"gịnị\" (що) — для предметів.",
            "en": {
              "text": "\"Onye\" (who) is used for people, \"gịnị\" (what) for things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Onye bụ nke a?",
                "Хто це?"
              ],
              [
                "Gịnị bụ nke a?",
                "Що це?"
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
            "title": "na / mana / n'ihi na",
            "rows": [
              [
                "na",
                "і"
              ],
              [
                "mana",
                "але"
              ],
              [
                "n'ihi na",
                "тому що"
              ]
            ],
            "en": {
              "title": "na / mana / n'ihi na"
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
            "text": "Основний прийменник \"na\" (в/на/з) поєднує в собі значення кількох українських прийменників одразу.",
            "en": {
              "text": "The core preposition \"na\" (in/at/with) combines the meanings of several separate Ukrainian prepositions at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ nọ n'ụlọ.",
                "Він/вона в домі."
              ]
            ],
            "en": {
              "title": "Examples"
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
            "text": "Складні слова часто поєднують дієслово з іменником через ту саму асоціативну тональну конструкцію.",
            "en": {
              "text": "Compound words often join a verb and a noun through the same tonal associative construction."
            }
          },
          {
            "type": "table",
            "title": "akwụkwọ + ọgwụ",
            "rows": [
              [
                "akwụkwọ (папір/книга) + ọgwụ (ліки) = akwụkwọ ọgwụ",
                "рецепт"
              ]
            ],
            "en": {
              "title": "akwụkwọ + ọgwụ"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "ideophones",
        "title": "Ідеофони — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Ігбо багата на ідеофони — звуконаслідувальні чи образні слова, що передають манеру дії, часто з редуплікацією.",
            "en": {
              "text": "Igbo is rich in ideophones — sound-symbolic or sensory words that convey the manner of an action, often with reduplication."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ dara kpam!",
                "Він впав зі звуком \"гуп!\" (kpam — ідеофон падіння)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ideophones — B1"
      },
      {
        "id": "benefactive-serial-nye",
        "title": "Бенефактивна серіальна конструкція (nye) — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"nye\" (давати) вживається серіально після іншого дієслова для позначення бенефіціара дії.",
            "en": {
              "text": "The verb \"nye\" (to give) is used serially after another verb to mark the beneficiary of the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Zụta ya nye m.",
                "Купи це для мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Benefactive Serial Construction (nye) — B1"
      },
      {
        "id": "vocative-address",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання не потребує окремого відмінка — ім'я чи титул просто стоїть на початку речення.",
            "en": {
              "text": "Direct address needs no separate case — the name or title simply stands at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chidi, bịa ebe a!",
                "Чіді, йди сюди!"
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
        "id": "indefinite-expressions",
        "title": "Неозначені вирази — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Otu onye\" (хтось) і \"ihe\" (щось) — базові неозначені вирази, буквально \"якась людина/річ\".",
            "en": {
              "text": "\"Otu onye\" (someone) and \"ihe\" (something) are the basic indefinite expressions, literally \"some person/thing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Otu onye kpọrọ oku.",
                "Хтось дзвонив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Expressions — A2"
      },
      {
        "id": "naming-ceremony-names",
        "title": "Імена-значення (Aha) — B1",
        "emoji": "👶",
        "sections": [
          {
            "type": "intro",
            "text": "Ігбо-імена майже завжди мають прозоре, повнозначне речення-значення (часто про Бога чи обставини народження), на відміну від багатьох мов, де імена — застиглі форми без живого значення.",
            "en": {
              "text": "Igbo names almost always carry a transparent, full-sentence meaning (often about God or the circumstances of birth), unlike many languages where names are frozen forms with no living meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади значущих імен",
            "rows": [
              [
                "Chukwuemeka",
                "Бог зробив добре"
              ],
              [
                "Ngozi",
                "благословення"
              ]
            ],
            "en": {
              "title": "Examples of Meaningful Names"
            }
          }
        ],
        "titleEn": "Meaningful Names (Aha) — B1"
      },
      {
        "id": "four-day-market-week",
        "title": "Чотириденний ринковий тиждень — B1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний ігбо-тиждень має лише чотири дні, кожен названий на честь ринку, що відбувається того дня — ще донині паралельно вживається поряд із запозиченим семиденним тижнем.",
            "en": {
              "text": "The traditional Igbo week has only four days, each named after the market held on that day — it's still used today in parallel with the borrowed seven-day week."
            }
          },
          {
            "type": "table",
            "title": "Чотири ринкові дні",
            "rows": [
              [
                "Eke",
                "перший ринковий день"
              ],
              [
                "Orie",
                "другий"
              ],
              [
                "Afọ",
                "третій"
              ],
              [
                "Nkwọ",
                "четвертий"
              ]
            ],
            "en": {
              "title": "The Four Market Days"
            }
          }
        ],
        "titleEn": "The Four-Day Market Week — B1"
      },
      {
        "id": "months",
        "title": "Місяці — A1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасні назви місяців — переважно запозичення з англійської, адаптовані до ігбо фонології.",
            "en": {
              "text": "Modern month names are mostly borrowed from English, adapted to Igbo phonology."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Jenụwarị",
                "січень"
              ],
              [
                "Mee",
                "травень"
              ],
              [
                "Ọgọst",
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
            "text": "Час запитують \"Kedu oge ọ bụ?\", а запозичені числа часто вживають для годин.",
            "en": {
              "text": "Time is asked with \"Kedu oge ọ bụ?\" and borrowed numbers are often used for hours."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ bụ elekere atọ.",
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
            "text": "Кольори часто виражають стативним дієсловом, як і більшість \"прикметникових\" понять.",
            "en": {
              "text": "Colors are often expressed with a stative verb, like most \"adjectival\" concepts."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "ọcha",
                "білий"
              ],
              [
                "oji",
                "чорний"
              ],
              [
                "uhie/ọbara ọbara",
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
            "text": "Родинні терміни часто класифікаційні — одне слово може позначати кількох родичів того самого покоління.",
            "en": {
              "text": "Kinship terms are often classificatory — one word can denote several relatives of the same generation."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "nne",
                "мати"
              ],
              [
                "nna",
                "батько"
              ],
              [
                "nwanne",
                "брат/сестра (одне слово для обох)"
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
            "text": "\"Kedu?\" (як справи?) — універсальне привітання, відповідь на яке — \"Ọ dị mma\" (добре).",
            "en": {
              "text": "\"Kedu?\" (how are you?) is the universal greeting, answered with \"Ọ dị mma\" (fine)."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Ụtụtụ ọma!",
                "Доброго ранку!"
              ],
              [
                "Ka ọ dị!",
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
            "text": "Погоду описують дієсловом \"zọ\" (падати) для дощу.",
            "en": {
              "text": "Weather is described with the verb \"zọ\" (to fall) for rain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mmiri na-ezo.",
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
            "text": "Частини тіла — звичайні іменники, незмінні за родом.",
            "en": {
              "text": "Body parts are ordinary nouns, invariant for gender."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "aka",
                "рука"
              ],
              [
                "isi",
                "голова"
              ],
              [
                "ụkwụ",
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
            "text": "Вік виражають конструкцією \"gbara X afọ\" (досяг X років).",
            "en": {
              "text": "Age is expressed with the construction \"gbara X afọ\" (has reached X years)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "M gbara iri abụọ afọ.",
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
        "id": "proverb-culture",
        "title": "Культура прислів'їв (ilu) — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Ігбо відома надзвичайно розвиненою культурою прислів'їв (ilu): гарна промова традиційно \"спеціями\" прислів'їв, а вміння доречно їх вживати вважається ознакою мудрості й ораторського хисту.",
            "en": {
              "text": "Igbo is known for an extremely developed proverb culture (ilu): good speech is traditionally \"seasoned\" with proverbs, and the ability to use them aptly is considered a mark of wisdom and oratory skill."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mmadụ kwuo eziokwu, afọ ya erughị ya.",
                "Якщо людина каже правду, та неприємно, вона не почуває переситу (про цінність чесності)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Proverb Culture (ilu) — B2"
      },
      {
        "id": "title-system",
        "title": "Система титулів (Eze, Ozo) — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційне суспільство ігбо має систему здобутих титулів (наприклад, \"Ozo\") — не за народженням, а за заслугами й церемонією, — які супроводжують ім'я й вимагають особливої поваги в мові.",
            "en": {
              "text": "Traditional Igbo society has a system of earned titles (e.g. \"Ozo\") — gained not by birth but by merit and ceremony — which accompany a person's name and require special respect in speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ozo Chukwuma",
                "титулований чоловік на ім'я Чуквума"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Title System (Eze, Ozo) — B2"
      },
      {
        "id": "english-loanword-layer",
        "title": "Англійський шар запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через британську колоніальну історію Нігерії ігбо має значний шар англійських запозичень, особливо в технічній, шкільній і адміністративній лексиці.",
            "en": {
              "text": "Due to Nigeria's British colonial history, Igbo has a significant layer of English loanwords, especially in technical, school, and administrative vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "sukuu (від school)",
                "школа"
              ],
              [
                "fon (від phone)",
                "телефон"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The English Loanword Layer — B1"
      },
      {
        "id": "dialectal-variation",
        "title": "Діалектна різноманітність — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Ігбо має десятки взаємно малозрозумілих діалектів; стандартний (\"центральний\") ігбо — штучно створений компроміс для освіти й медіа, не природний діалект.",
            "en": {
              "text": "Igbo has dozens of mutually poorly intelligible dialects; Standard (\"Central\") Igbo is an artificially created compromise for education and media, not a natural dialect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Один і той самий предмет може мати геть різні слова в різних діалектних регіонах.",
                "діалектна різноманітність суттєво більша, ніж у багатьох інших описаних у цьому додатку мовах"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialectal Variation — B2"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Biko\" (будь ласка) додається до прохання й часто повторюється для більшої ввічливості.",
            "en": {
              "text": "\"Biko\" (please) is added to a request and often repeated for extra politeness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Biko nyere m aka.",
                "Будь ласка, допоможи мені."
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
                "Chei!",
                "Ой!/Овва!"
              ],
              [
                "Daalụ!",
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
            "text": "Числа 11-19 утворюються поєднанням десяти з одиницею через сполучник.",
            "en": {
              "text": "Numbers 11-19 are formed by combining ten with the unit via a connector."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "iri na otu",
                "одинадцять (десять і один)"
              ],
              [
                "iri abụọ",
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
            "text": "Порядкові числівники утворюються словом \"nke\" + кількісний числівник.",
            "en": {
              "text": "Ordinal numbers are formed with the word \"nke\" + the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nke mbụ",
                "перший"
              ],
              [
                "nke abụọ",
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
        "id": "negative-polarity",
        "title": "Заперечні вирази — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ọ dịghị onye\" (ніхто) і \"ọ dịghị ihe\" (нічого) поєднують слово стану \"dị\" з негацією \"-ghị\".",
            "en": {
              "text": "\"Ọ dịghị onye\" (no one) and \"ọ dịghị ihe\" (nothing) combine the stative word \"dị\" with the negation \"-ghị\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ dịghị onye nọ ebe ahụ.",
                "Там нікого немає."
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
            "text": "Розділове питання утворюється фразою \"ka ọ bụ na eje?\" або простіше \"ọ bụghị ya?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"ọ bụghị ya?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ụbọchị a mara mma, ọ bụghị ya?",
                "Гарний сьогодні день, чи не так?"
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
        "title": "Цільове підрядне (ka) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ka\" (щоб) вводить цільове підрядне речення з дієсловом у підрядній формі.",
            "en": {
              "text": "\"Ka\" (so that) introduces a purpose clause with the verb in the subjunctive form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "M na-amụ Igbo ka m gwa nne m nkpa okwu.",
                "Я вчу ігбо, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (ka) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (n'ihi na) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"N'ihi na\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"N'ihi na\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Abịara m ọdịiche n'ihi na m fuuru bọs.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (n'ihi na) — A2"
      },
      {
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до старших часто вживає слово \"Dee\" (старша жінка) чи \"Dede\" (старший брат) замість особового займенника — знак поваги.",
            "en": {
              "text": "Addressing elders often uses the word \"Dee\" (elder woman) or \"Dede\" (elder brother) instead of a personal pronoun — a sign of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dede, biko nyere m aka.",
                "Старший брате, будь ласка, допоможи мені."
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
        "id": "conditional-clause",
        "title": "Умовне підрядне — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Крім \"ma\" (див. розділ часів), нереальну умову можна підкреслити словом \"ọ bụrụ na\" (якщо сталося б, що...).",
            "en": {
              "text": "Besides \"ma\" (see the tense section), an unreal condition can be emphasized with \"ọ bụrụ na\" (if it were to happen that...)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ọ bụrụ na m nwere oge, m ga-aga.",
                "Якби я мав час, я б пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause — B1"
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
            "text": "Кілька частовживаних дієслів (bụ-бути, dị-бути/існувати, nwe-мати) не підкоряються звичайним правилам суфіксації часу й мають власні, неповні парадигми.",
            "en": {
              "text": "A few common verbs (bụ-to be, dị-to be/exist, nwe-to have) don't follow the regular tense-suffixing rules and have their own incomplete paradigms."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "bụ не приєднує -rV так, як звичайні дієслова",
                "форма минулого часу утворюється інакше"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "tone-sandhi-exceptions",
        "title": "Винятки тонового сандхі — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "У швидкій розмовній мові тон сусідніх слів іноді змінюється непередбачувано (асиміляція), відмінно від тону того самого слова, вимовленого окремо чи повільно.",
            "en": {
              "text": "In fast colloquial speech, the tone of neighboring words sometimes changes unpredictably (assimilation), differing from the tone of the same word spoken alone or slowly."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тон у швидкому мовленні асимілюється до сусіднього слова непередбачуваним чином.",
                "явище, яке потрібно засвоювати на слух, а не за правилом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Sandhi Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо в прислів'ях) зберігають архаїчну лексику чи синтаксис, невживані в повсякденній мові.",
            "en": {
              "text": "Some common formulas (especially in proverbs) preserve archaic vocabulary or syntax not used in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Egbe bere, ugo bere.",
                "Хай кожен процвітає по-своєму (букв. \"хай яструб сяде, хай орел сяде\", відома прислівна формула)."
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
