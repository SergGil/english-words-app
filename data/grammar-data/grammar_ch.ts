// Vymova — data/grammar-data/grammar_ch.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronombren Personåt — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Чаморро зазнало значного впливу іспанської мови через понад три століття іспанської колонізації Маріанських островів.",
            "en": {
              "text": "Chamorro was heavily influenced by Spanish through over three centuries of Spanish colonization of the Mariana Islands."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "guahu"
              ],
              [
                "ти",
                "hagu"
              ],
              [
                "він / вона / воно",
                "guiya"
              ],
              [
                "ми (з вами)",
                "hita"
              ],
              [
                "ми (без вас)",
                "hami"
              ],
              [
                "ви",
                "hamyu"
              ],
              [
                "вони",
                "siha"
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
        "id": "to-be-zero-copula",
        "title": "Ототожнення без дієслова \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Чаморро не має окремого дієслова \"бути\" для ототожнення — присудок просто ставиться перед підметом, без жодної зв'язки.",
            "en": {
              "text": "Chamorro has no separate \"to be\" verb for identity statements — the predicate simply stands before the subject, with no linking word."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + підмет (без дієслова)",
            "rows": [
              [
                "Maestra",
                "yu'.",
                "я вчителька"
              ],
              [
                "Dokturu",
                "guiya.",
                "він/вона лікар"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Estudiante yu'.",
                "Я студент."
              ]
            ]
          }
        ],
        "titleEn": "Identity Statements Without \"To Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ti/ahe'\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Ti заперечує дієслово чи прикметник перед присудком, а ahe' — самостійне слово \"ні\", яке вживається як окрема відповідь.",
            "en": {
              "text": "Ti negates a verb or adjective before the predicate, while ahe' is the standalone word \"no\", used as a separate answer."
            }
          },
          {
            "type": "formula",
            "title": "ti + присудок",
            "rows": [
              [
                "Maestra yu'.",
                "Ti maestra yu'.",
                "Я вчителька. → Я не вчителька."
              ],
              [
                "Mafañagu' guiya.",
                "Ti mafañagu' guiya.",
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
                "Ti hu tungo'.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ti/Ahe' — A1"
      },
      {
        "id": "questions",
        "title": "Питання — інтонація — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією без зміни порядку слів чи додаткової частки.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "Yayas hao.",
                "Yayas hao?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Mafañagu' guiya.",
                "Mafañagu' guiya?",
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
                "Ñalang hao?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Rising Intonation — A1"
      },
      {
        "id": "possessive-suffix-overview",
        "title": "Присвійні суфікси на самому іменнику — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність виражається не окремим словом, а суфіксом, доданим прямо до кінця іменника (-hu мій, -mu твій, -ña його/її) — типова риса австронезійських мов.",
            "en": {
              "text": "Possession is expressed not with a separate word but with a suffix attached directly to the end of the noun (-hu my, -mu your, -ña his/her) — a typical Austronesian trait."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "guma' (дім)",
                "guma'-hu",
                "мій дім"
              ],
              [
                "che'lu (сестра/брат)",
                "che'lu-mu",
                "твоя сестра/брат"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dångkulu na guma'hu.",
                "Мій дім великий."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Suffixes Attached to the Noun — A2"
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
        "id": "present-tense-general",
        "title": "Теперішній час — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час дієслова часто збігається зі словниковою формою, а особа й число позначаються окремим підметом-займенником, а не закінченням.",
            "en": {
              "text": "The present tense often matches the verb's dictionary form, with person and number shown by the separate subject pronoun rather than an ending."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Kumeke'ilek-ña yu'.",
                "Я говорю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Chumochocho' guiya.",
                "Він/вона їсть."
              ],
              [
                "Manma'lak i famagu'on.",
                "Діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "progressive-aspect-infix-um",
        "title": "Тривала дія — інфікс -um- — A2",
        "titleEn": "Progressive Aspect — Infix -Um- — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Інфікс -um-, вставлений усередину основи дієслова (не на початку чи кінці!), утворює активну форму дієслова для багатьох коренів.",
            "en": {
              "text": "The infix -um-, inserted inside the verb stem (not at the start or end!), forms the active verb shape for many roots."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kanno' (їсти, корінь)",
                "kumanno'",
                "їсть (з -um- усередині)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kumanno' yu' pan.",
                "Я їм хліб."
              ],
              [
                "Tumaitai i lahi.",
                "Хлопчик читає."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense-particle",
        "title": "Минулий час — B1",
        "titleEn": "Past Tense — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час здебільшого позначається тимчасовим прислівником (\"учора\", \"раніше\") чи контекстом, а не окремою дієслівною формою.",
            "en": {
              "text": "The past tense is mostly marked by a time adverb (\"yesterday\", \"before\") or context, rather than a separate verb form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ha na'huyong nigap.",
                "Він/вона видав це вчора."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fumatto yu' nigap.",
                "Я прийшов учора."
              ],
              [
                "Ha taitai i lepblo antes.",
                "Він прочитав книгу раніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-para-bai",
        "title": "Майбутній час (bai/para) — A2",
        "titleEn": "Future Tense (Bai/Para) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою bai (для 1-ї особи) чи para перед дієсловом.",
            "en": {
              "text": "The future tense is formed with the particle bai (for 1st person) or para before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Bai hu hånao agupa'.",
                "Я піду завтра."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Para u fatto siha.",
                "Вони прийдуть."
              ],
              [
                "Bai in ayuda hao.",
                "Ми тобі допоможемо."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfective-completed-action",
        "title": "Завершена дія (esta/munhayan) — B1",
        "titleEn": "Completed Action (Esta/Munhayan) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершена дія підкреслюється словом esta (\"вже\") чи munhayan (\"закінчено\") поряд зі звичайною дієслівною формою.",
            "en": {
              "text": "A completed action is emphasized with the word esta (\"already\") or munhayan (\"finished\") alongside the regular verb form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Esta hu kanno'.",
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
                "Esta mafatto guiya.",
                "Він/вона вже прибув(-ла)."
              ],
              [
                "Munhayan i che'cho'.",
                "Робота закінчена."
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
            "text": "Наказ — це переважно гола основа дієслова, без окремого закінчення.",
            "en": {
              "text": "A command is mostly just the bare verb stem, with no separate ending."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Fatto!",
                "Приходь!"
              ],
              [
                "Fañoccu!",
                "Сідай!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Baba i petta!",
                "Відчини двері!"
              ],
              [
                "Chocho'!",
                "Їж!"
              ]
            ]
          }
        ]
      },
      {
        "id": "potential-mood-sina",
        "title": "Здатність/можливість (siña) — A2",
        "titleEn": "Ability/Possibility (Siña) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Слово siña (могти/бути здатним) перед дієсловом виражає здатність або можливість.",
            "en": {
              "text": "The word siña (can/be able to) before the verb expresses ability or possibility."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Siña yu' manaigu'.",
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
                "Siña un ayuda yu'?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Siña ha' u fanuchan.",
                "Можливо, піде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "desiderative-malago",
        "title": "Бажальний спосіб (malago') — A2",
        "titleEn": "Desiderative Mood (Malago') — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Слово malago' (хотіти) перед дієсловом виражає бажання виконати дію.",
            "en": {
              "text": "The word malago' (want) before the verb expresses a desire to do something."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Malago' yu' chumocho.",
                "Я хочу їсти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Malago' guiya humånao.",
                "Він/вона хоче йти."
              ],
              [
                "Ti malago' hu kumuentos.",
                "Я не хочу говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-continuous-aspect",
        "title": "Редуплікація для тривалої дії — B1",
        "titleEn": "Reduplication for Continuous Aspect — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Часткове повторення першого складу основи дієслова позначає тривалу чи повторювану дію, часто разом з інфіксом -um-.",
            "en": {
              "text": "Partial reduplication of the verb stem's first syllable marks an ongoing or repeated action, often together with the -um- infix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kumeke'ilek-ña",
                "він саме говорить (редуплікація ke-)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kumekechocho' yu'.",
                "Я саме їм."
              ],
              [
                "Fanhihita siha.",
                "Вони саме граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice-in-infix",
        "title": "Пасивний стан (ma-/-in-) — B1",
        "titleEn": "Passive Voice (Ma-/-In-) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється префіксом ma- перед основою дієслова, виносячи об'єкт дії на місце підмета.",
            "en": {
              "text": "The passive voice is formed with the prefix ma- before the verb stem, fronting the object of the action into the subject position."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Matuge' i katta.",
                "Лист був написаний."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mababa i petta.",
                "Двері були відчинені."
              ],
              [
                "Mafatinas i lepblo.",
                "Книга зроблена."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-na-prefix",
        "title": "Каузативний префікс na'- — B1",
        "titleEn": "Causative Prefix Na'- — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс na'-, доданий до дієслова чи прикметника, означає \"змусити/зробити щось таким\".",
            "en": {
              "text": "The prefix na'-, added to a verb or adjective, means \"to make/cause something to be so\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "dångkulu (великий)",
                "na'dångkulu",
                "збільшити (зробити великим)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ha na'huyong i katta.",
                "Він видав листа."
              ],
              [
                "Na'fanhoben este.",
                "Зроби це молодшим (омолоди)."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-verbs",
        "title": "Взаємні дієслова (a'-) — B1",
        "titleEn": "Reciprocal Verbs (A'-) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія (\"один одного\") виражається префіксом a'-, доданим до основи дієслова.",
            "en": {
              "text": "A reciprocal action (\"each other\") is expressed with the prefix a'-, added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "A'gofli'e' siha.",
                "Вони люблять одне одного."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A'ayuda ham.",
                "Ми допомагаємо одне одному."
              ],
              [
                "A'kuentusi siha.",
                "Вони розмовляють один з одним."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-agreement-overview",
        "title": "Дієслово узгоджується з підметом-займенником — B1",
        "titleEn": "The Verb Agrees with the Subject Pronoun — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від філіппінських мов з системою фокусу, чаморро використовує простіше узгодження: незмінна форма дієслова (з інфіксом -um- чи без) поєднується з окремим підметовим займенником, що вказує особу.",
            "en": {
              "text": "Unlike Philippine languages with a focus system, Chamorro uses simpler agreement: an invariant verb form (with or without the -um- infix) combines with a separate subject pronoun that marks the person."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Kumanno' yu'.",
                "Я їм."
              ],
              [
                "Kumanno' hao.",
                "Ти їси (та сама дієслівна форма kumanno')."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tumaitai guiya.",
                "Він/вона читає."
              ],
              [
                "Tumaitai siha.",
                "Вони читають."
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
        "id": "inclusive-exclusive-we-deep",
        "title": "\"Ми\" з вами/без вас у детальному розгляді — B1",
        "titleEn": "Inclusive/Exclusive \"We\" in Depth — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Розрізнення hita (з вами) / hami (без вас) поширюється й на присвійні форми — вибір впливає на кожну частину речення, а не лише на сам займенник.",
            "en": {
              "text": "The hita (inclusive) / hami (exclusive) distinction extends to possessive forms too — the choice affects every part of the sentence, not just the pronoun itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "guma'-ta (наш дім, з вами)",
                "inclusive"
              ],
              [
                "guma'-mami (наш дім, без вас)",
                "exclusive"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bai in hånao hit todus.",
                "Ми (з вами) всі підемо."
              ],
              [
                "Manatto hami nigap.",
                "Ми (без вас) прийшли вчора."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances-ti-vs-ahe",
        "title": "Нюанси заперечення: ti проти ahe' — B1",
        "titleEn": "Negation Nuances: Ti vs Ahe' — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Ti завжди приєднується безпосередньо до присудка чи дієслова всередині речення, тоді як ahe' — самостійне слово, що вживається як коротка відповідь \"ні\" на питання.",
            "en": {
              "text": "Ti always attaches directly to the predicate or verb inside a sentence, while ahe' is a standalone word used as a short \"no\" answer to a question."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Malago' hao? — Ahe'.",
                "Ти хочеш? — Ні."
              ],
              [
                "Ti malago' yu'.",
                "Я не хочу (ti усередині речення)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ñalang hao? — Ahe', ti ñalang yu'.",
                "Ти голодний? — Ні, я не голодний."
              ],
              [
                "Ti hu tungo' hafa masusedi.",
                "Я не знаю, що сталося."
              ]
            ]
          }
        ]
      },
      {
        "id": "infix-um-in-deep",
        "title": "Інфікси -um- та -in- у деталях — B2",
        "titleEn": "The Infixes -Um- and -In- in Depth — B2",
        "emoji": "🔬",
        "sections": [
          {
            "type": "intro",
            "text": "Інфікс вставляється саме після першого приголосного кореня (не на початку слова!) — це один із найскладніших моментів чаморрської морфології, оскільки суперечить звичній інтуїції про префікси й суфікси.",
            "en": {
              "text": "The infix is inserted right after the root's first consonant (not at the start of the word!) — one of the trickiest points of Chamorro morphology, since it contradicts the usual intuition about prefixes and suffixes."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "taitai (корінь \"читати\")",
                "tumaitai (t + um + aitai, не \"umtaitai\")"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tumaitai yu' lepblo.",
                "Я читаю книгу."
              ],
              [
                "Sinangan-ña este.",
                "Це його/її сказане слово (з -in-)."
              ]
            ]
          }
        ]
      },
      {
        "id": "kinship-terms-vocabulary",
        "title": "Родинні терміни — A2",
        "titleEn": "Kinship Terms — A2",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nana / tata",
                "мама / тато"
              ],
              [
                "che'lu",
                "брат/сестра (без розрізнення статі)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Guaha dos che'lu-hu.",
                "У мене двоє братів/сестер."
              ],
              [
                "Bunita i nana-hu.",
                "Моя мама гарна."
              ]
            ]
          }
        ]
      },
      {
        "id": "spanish-catholic-vocabulary-religion",
        "title": "Католицька лексика з іспанської — B1",
        "titleEn": "Catholic Vocabulary from Spanish — B1",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Через іспанську колонізацію й католицизм релігійна лексика майже повністю запозичена з іспанської, і католицькі свята й досі відіграють центральну роль у культурі Гуаму.",
            "en": {
              "text": "Due to Spanish colonization and Catholicism, religious vocabulary is almost entirely borrowed from Spanish, and Catholic festivals still play a central role in Guam's culture."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Yu'os (з ісп. \"Dios\")",
                "Бог"
              ],
              [
                "misa (з ісп.)",
                "меса/служба"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Manespiha ham gi misa.",
                "Ми ходимо на службу."
              ],
              [
                "Si Yu'os Ma'åse'.",
                "Дякую (буквально: хай Бог помилує)."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes-deep",
        "title": "Присвійні суфікси — повна парадигма — A2",
        "titleEn": "Possessive Suffixes — Full Paradigm — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "table",
            "title": "Повна парадигма",
            "rows": [
              [
                "-hu / -mu / -ña",
                "мій / твій / його-її"
              ],
              [
                "-ta / -mami / -miyu / -ñiha",
                "наш (з вами) / наш (без вас) / ваш / їхній"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lepblo-ña i lahi.",
                "Книга хлопця (буквально: книга-його хлопець)."
              ],
              [
                "Guma'mami dångkulu.",
                "Наш (без вас) дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-particle-gi",
        "title": "Локативна частка \"gi\" — A2",
        "titleEn": "Locative Particle \"Gi\" — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Частка gi вводить будь-яке місце чи час — універсальний просторово-часовий маркер замість численних окремих прийменників.",
            "en": {
              "text": "The particle gi introduces any location or time — a universal spatiotemporal marker instead of many separate prepositions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "gi lamasa",
                "на столі"
              ],
              [
                "gi gima'",
                "у домі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gaige i lepblo gi lamasa.",
                "Книга на столі."
              ],
              [
                "Sumåga' yu' gi gima'.",
                "Я живу вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-marker-i",
        "title": "Означений маркер \"i\" — A1",
        "titleEn": "The Definite Marker \"I\" — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означеність виражається незмінною часткою i перед іменником — і для однини, і для множини, і незалежно від роду (якого немає).",
            "en": {
              "text": "Definiteness is expressed with the invariant particle i before the noun — for both singular and plural, and regardless of gender (which doesn't exist)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "i guma'",
                "цей дім / дім (означ.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dångkulu i guma'.",
                "Дім великий."
              ],
              [
                "Mafatto i famagu'on.",
                "Діти прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-particle-siha",
        "title": "Множина через частку \"siha\" — A2",
        "titleEn": "Plural via the Particle \"Siha\" — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина не позначається суфіксом на іменнику, а окремою часткою siha (буквально: \"вони\"), доданою після іменника.",
            "en": {
              "text": "The plural is not marked with a suffix on the noun but with the separate particle siha (literally \"they\"), added after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "i guma' siha",
                "доми (буквально: дім вони)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dångkulu i guma' siha.",
                "Доми великі."
              ],
              [
                "Manaigu' i famagu'on siha.",
                "Діти плавають."
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
            "text": "Чаморро взагалі не має граматичного роду — той самий займенник guiya означає \"він\" і \"вона\", і жоден прикметник не змінюється за родом.",
            "en": {
              "text": "Chamorro has no grammatical gender at all — the same pronoun guiya means both \"he\" and \"she\", and no adjective changes for gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "mappot guiya",
                "він/вона важкий(-а) (одна форма mappot)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bunita guiya.",
                "Він/вона гарний(-а)."
              ],
              [
                "Metgot i che'lu-hu.",
                "Мій брат/сестра сильний(-а)."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (este/enao) — A1",
        "titleEn": "Demonstratives (Este/Enao) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "este na lepblo",
                "ця книга"
              ],
              [
                "enao na guma'",
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
                "Guahu este.",
                "Це моє."
              ],
              [
                "Takhilo' enao na tåno'.",
                "Та гора висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-construction",
        "title": "Підрядне речення через \"na\" — B1",
        "titleEn": "Relative Clause via \"Na\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка na, схожа на зв'язку в тагальській/себуанській nga, поєднує прикметник з іменником і вводить підрядне означальне речення.",
            "en": {
              "text": "The particle na, similar to the Tagalog/Cebuano linker nga, joins an adjective to a noun and introduces a relative clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "i taotao na mafatto",
                "людина, яка прийшла"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I lepblo na hu taitai bunita.",
                "Книга, яку я читаю, гарна."
              ],
              [
                "Dångkulu na guma'.",
                "Великий дім."
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
                "hayi",
                "хто"
              ],
              [
                "hafa",
                "що"
              ],
              [
                "månu",
                "де"
              ],
              [
                "ngai'an",
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
                "Hayi na'ån-mu?",
                "Як тебе звати?"
              ],
              [
                "Månu nai sumåga' hao?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-construction",
        "title": "Зворотна конструкція (maisa) — B1",
        "titleEn": "Reflexive Construction (Maisa) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"сам/себе\" виражається словом maisa з присвійним суфіксом.",
            "en": {
              "text": "The reflexive meaning \"self\" is expressed with the word maisa plus a possessive suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "maisa-hu",
                "я сам"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ha li'e' maisa-ña gi espeho.",
                "Він побачив себе в дзеркалі."
              ],
              [
                "Fumatinas maisa-hu.",
                "Я зробив це сам."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-native",
        "title": "Кількісні числівники (питомі) — A1",
        "titleEn": "Cardinal Numerals (Native) — A1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "1–5",
            "rows": [
              [
                "maisa/håcha",
                "1"
              ],
              [
                "hugua",
                "2"
              ],
              [
                "tulu",
                "3"
              ],
              [
                "lima",
                "5"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hugua che'lu-hu palao'an.",
                "У мене дві сестри."
              ],
              [
                "Tulu na taotao mafatto.",
                "Прийшло три людини."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-spanish-loanword",
        "title": "Іспанські числівники для великих чисел — A2",
        "titleEn": "Spanish Numerals for Large Numbers — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Через понад три століття іспанської колонізації числа понад 10 (а часто й менші) майже завжди вживають запозичену з іспанської форму, а не питому чаморро.",
            "en": {
              "text": "Due to over three centuries of Spanish colonization, numbers above 10 (and often smaller ones too) almost always use the Spanish-borrowed form rather than the native Chamorro one."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "diez (10, з ісп.)",
                "не \"manot\""
              ],
              [
                "treinta (30, з ісп.)",
                "не питома форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Beinte años yu'.",
                "Мені двадцять років."
              ],
              [
                "Sien pesos este.",
                "Це сто песо."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier",
        "title": "Класифікатор \"na\" при рахунку — A2",
        "titleEn": "The Classifier \"Na\" When Counting — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка na вставляється між числівником та іменником при рахунку майже завжди, незалежно від типу предмета.",
            "en": {
              "text": "The particle na is inserted between the numeral and the noun when counting almost always, regardless of the type of object."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "tulu na lepblo",
                "три книги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lima na taotao mafatto.",
                "Прийшло п'ять людей."
              ],
              [
                "Hugua na katta hu tuge'.",
                "Я написав два листи."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-overview",
        "title": "Прийменники — A2",
        "titleEn": "Prepositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "gi",
                "в, у, на"
              ],
              [
                "ginen",
                "з, від"
              ],
              [
                "para",
                "для, до"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ginen Guahan yu'.",
                "Я з Гуаму."
              ],
              [
                "Este para hagu.",
                "Це для тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-vso-flexible",
        "title": "Гнучкий порядок слів (VSO база) — B1",
        "titleEn": "Flexible Word Order (VSO Base) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — присудок-підмет-додаток (VSO), але завдяки частці gi й контексту порядок часто змінюється для наголосу.",
            "en": {
              "text": "The basic order is verb-subject-object (VSO), but thanks to the particle gi and context, order often shifts for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Kumanno' i patgon nengkanno'.",
                "Дитина їсть їжу (буквально: їсть дитина їжу)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fumatinas i nana nengkanno'.",
                "Мама готує їжу."
              ],
              [
                "Manaitai i famagu'on lepblo.",
                "Учні читають книги."
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
                "yan",
                "і, та"
              ],
              [
                "lao",
                "але"
              ],
              [
                "pat",
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
                "Guahu yan hagu manatungo'.",
                "Я і ти — друзі."
              ],
              [
                "Malago' yu' humånao, lao ti guaha tiempo-hu.",
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
                "sa'",
                "тому що"
              ],
              [
                "yanggen",
                "якщо"
              ],
              [
                "annai",
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
                "Magof yu' sa' mamatto hao.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Yanggen libre yu', bai hu ågang hao.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні слова (nesesita/debidi) — A2",
        "titleEn": "Modal Words (Nesesita/Debidi) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Nesesita yu' humånao.",
                "Мені треба йти."
              ],
              [
                "Debidi hao umeskuela.",
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
                "Malago' yu' umayuda.",
                "Я хочу допомогти."
              ],
              [
                "Siña ha' bumisita.",
                "Він може відвідати."
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
                "mucho'",
                "багато"
              ],
              [
                "didide'",
                "мало"
              ],
              [
                "kuåntos",
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
                "Mucho' lepblo-hu.",
                "У мене багато книг."
              ],
              [
                "Na'i yu' didide' hanom.",
                "Дай мені трохи води."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week-spanish",
        "title": "Дні тижня (з іспанської) — A1",
        "titleEn": "Days of the Week (From Spanish) — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Lunes",
                "понеділок"
              ],
              [
                "Sabalu",
                "субота"
              ],
              [
                "Damenggu",
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
                "Lunes på'go.",
                "Сьогодні понеділок."
              ],
              [
                "Manaitai yu' gi Damenggu.",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates-spanish",
        "title": "Місяці та дати (з іспанської) — A2",
        "titleEn": "Months & Dates (From Spanish) — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Eneru",
                "січень"
              ],
              [
                "Mayu",
                "травень"
              ],
              [
                "Disiembre",
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
                "Gi Mayu i mafañagu'-hu.",
                "Мій день народження в травні."
              ],
              [
                "Dies gi Eneru på'go.",
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
                "Kuåntos ora?",
                "Котра година?"
              ],
              [
                "A las tres.",
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
                "Ta li'e' hit a las sais.",
                "Зустрінемось о шостій."
              ],
              [
                "Talo'åni på'go.",
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
                "Håfa Adai",
                "Привіт"
              ],
              [
                "Si Yu'os Ma'åse'",
                "Дякую"
              ],
              [
                "Adios",
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
                "Håfa tatatmanu hao?",
                "Як справи?"
              ],
              [
                "Si Yu'os Ma'åse' put todu.",
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
                "Ma'lak i atdao.",
                "Сонячно."
              ],
              [
                "Manuchan.",
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
                "Manengheng på'go.",
                "Сьогодні холодно."
              ],
              [
                "Sen maipe.",
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
                "metgot i korason",
                "сильний духом (буквально: сильне серце)"
              ],
              [
                "ti ma'lak i pinaga'-ña",
                "у поганому настрої (буквально: не сяюча душа)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Metgot i korason-ña.",
                "Він сильний духом."
              ],
              [
                "Ti ma'lak i pinaga'-ña på'go.",
                "Він сьогодні в поганому настрої."
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
                "chadig",
                "швидко"
              ],
              [
                "poddong",
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
                "Chadig ha' malaggu.",
                "Він швидко бігає."
              ],
              [
                "Kuentos poddong.",
                "Говори повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Словотвірні афікси — B1",
        "titleEn": "Word-Formation Affixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "-in-",
                "утворює абстрактне поняття/результат дії"
              ],
              [
                "mañe'lu-",
                "родинний префікс (спільна група братів/сестер)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ginefli'e' i libertåt.",
                "Свобода бажана (любима)."
              ],
              [
                "Mañe'lu ham todu.",
                "Ми всі рідні брати-сестри."
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
                "kannai (рука) + relos (годинник)",
                "kannai relos (наручний годинник)"
              ],
              [
                "taotao (людина) + tåno' (земля)",
                "taotaotåno' (тубілець)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nuebu i kannai relos-hu.",
                "Мій наручний годинник новий."
              ],
              [
                "Taotaotåno' Guahan siha.",
                "Вони тубільці Гуаму."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року (сухий/дощовий сезон) — A2",
        "titleEn": "Seasons (Dry/Rainy Season) — A2",
        "emoji": "🌧️",
        "sections": [
          {
            "type": "intro",
            "text": "На Маріанських островах розрізняють переважно сухий і дощовий сезони, а не чотири класичні пори року.",
            "en": {
              "text": "In the Mariana Islands, mainly a dry and a rainy season are distinguished, rather than four classic seasons."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tiempon fanomnak",
                "сухий сезон"
              ],
              [
                "tiempon uchan",
                "дощовий сезон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Guaha uchan gi tiempon uchan.",
                "У дощовий сезон бувають дощі."
              ],
              [
                "Sen maipe gi tiempon fanomnak.",
                "У сухий сезон дуже жарко."
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
                "Kuånto i presiu-ña?",
                "Скільки коштує?"
              ],
              [
                "Mit dolåres.",
                "Тисяча доларів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Este na lepblo bente dolåres.",
                "Ця книга коштує двадцять доларів."
              ],
              [
                "Sen kåro este.",
                "Це дуже дорого."
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
                "Hu hasso na...",
                "Я думаю, що..."
              ],
              [
                "Para guahu...",
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
                "Hu hasso na magåhet hao.",
                "Я думаю, що ти правий."
              ],
              [
                "Para guahu, este mauleg na idea.",
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
                "på'go / agupa' / nigap",
                "сьогодні / завтра / вчора"
              ],
              [
                "på'go / despues",
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
                "Ta li'e' hit agupa'.",
                "Побачимось завтра."
              ],
              [
                "Ocupao yu' på'go.",
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
                "diddide' na taotao",
                "хтось"
              ],
              [
                "diddide' na hinasso",
                "щось"
              ],
              [
                "taya' taotao",
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
                "Guaha ha' umagang yu'.",
                "Хтось мені подзвонив."
              ],
              [
                "Hu hungok diddide' na kosas.",
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
                "Ai!",
                "Ой!"
              ],
              [
                "Mauleg!",
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
                "Ai, bunita este!",
                "Ой, як гарно!"
              ],
              [
                "Mauleg, mauleg na noticia!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-guaha",
        "title": "Конструкція \"є/немає\" (guaha) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Guaha) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Слово guaha означає і \"мати\", і \"є/існує\" — залежно від контексту, заперечується часткою ti.",
            "en": {
              "text": "The word guaha means both \"to have\" and \"there is/exists\" — depending on context, negated with the particle ti."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Guaha hånom.",
                "Є вода."
              ],
              [
                "Ti guaha tiempo.",
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
                "Mucho' taotao guaha guine.",
                "Тут багато людей."
              ],
              [
                "Ti guaha tenda guine.",
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
            "text": "Пестливість часто виражається окремим словом dikike' (маленький) перед іменником, а не суфіксом.",
            "en": {
              "text": "Affection/diminutive is often expressed with the separate word dikike' (small) before the noun, rather than a suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "dikike' na patgon",
                "малятко"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Maigo' i dikike' na patgon.",
                "Малятко спить."
              ],
              [
                "Bunita i nana-hu.",
                "Моя матусенька гарна."
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
                "Si Señot",
                "пан"
              ],
              [
                "Si Señora",
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
                "Håfa Adai, Si Señot.",
                "Вітаю, пане."
              ],
              [
                "Dispensa, Si Señora.",
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
                "Ti umachule' i famagu'on sin i mañaina.",
                "Дітей не забирають без батьків (сімейна єдність важлива)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Respetu i mañaina.",
                "Поважай старших."
              ],
              [
                "Inafa'maolek i mas impottante.",
                "Взаємодопомога — найважливіше."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-spanish-deep",
        "title": "Глибокий шар іспанської лексики — B1",
        "titleEn": "The Deep Spanish Vocabulary Layer — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через понад 300 років іспанського панування значна частина побутової, релігійної й родинної лексики запозичена з іспанської, хоча граматика лишається повністю австронезійською.",
            "en": {
              "text": "Due to over 300 years of Spanish rule, much everyday, religious, and family vocabulary is borrowed from Spanish, even though the grammar remains fully Austronesian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "lepblo (з ісп. \"libro\")",
                "книга"
              ],
              [
                "kumpletamente (з ісп.)",
                "повністю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bunita i lepblo.",
                "Книга гарна."
              ],
              [
                "Kumpletamente mafatinas.",
                "Повністю зроблено."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Порядок прикметника й іменника — A1",
        "titleEn": "Adjective & Noun Order — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть перед іменником, з'єднаний часткою na.",
            "en": {
              "text": "The adjective usually stands before the noun, linked by the particle na."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "dångkulu na guma'",
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
                "Dikike' na katu.",
                "Маленький кіт."
              ],
              [
                "Bunita na flores.",
                "Гарна квітка."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (mas) — A2",
        "titleEn": "Comparative & Superlative (Mas) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом mas перед прикметником, найвищий — mas... ki todu.",
            "en": {
              "text": "The comparative is formed with the word mas before the adjective, the superlative with mas... ki todu."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dångkulu (великий)",
                "mas dångkulu",
                "більший"
              ],
              [
                "dångkulu (великий)",
                "mas dångkulu ki todu",
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
                "Mas dångkulu este na guma'.",
                "Цей дім більший."
              ],
              [
                "Guiya mas metgot ki todu.",
                "Він найсильніший за всіх."
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
                "mina'fine'na",
                "перший"
              ],
              [
                "mina'dos",
                "другий"
              ],
              [
                "mina'tres",
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
                "Este mina'fine'na na lepblo-hu.",
                "Це моя перша книга."
              ],
              [
                "Mina'dos guiya.",
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
                "Nana!",
                "Мамо!"
              ],
              [
                "Håfa, Juan!",
                "Гей, Хуане!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nana, fatto guine!",
                "Мамо, іди сюди!"
              ],
              [
                "Señot, ayuda yu'.",
                "Пане, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-incorporation",
        "title": "Включення додатка в дієслово — B2",
        "titleEn": "Object Incorporation into the Verb — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Часто вживані неозначені прямі додатки можуть \"вбудовуватись\" прямо в дієслово, утворюючи одне складене слово замість двох окремих.",
            "en": {
              "text": "Frequently used indefinite direct objects can be \"incorporated\" directly into the verb, forming one compound word instead of two separate ones."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "mangan pika (їсти рибу)",
                "manpika",
                "рибалити (буквально: рибо-їсти)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Manpika i taotao siha.",
                "Люди ловлять рибу."
              ],
              [
                "Mangagas yu' che'lu-hu.",
                "Я доглядаю за своїм братом/сестрою."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-fronting-emphasis",
        "title": "Винесення теми на початок для наголосу — B1",
        "titleEn": "Topic Fronting for Emphasis — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча базовий порядок VSO, елемент, на якому робиться наголос, можна винести на найперше місце речення.",
            "en": {
              "text": "Although the base order is VSO, the element being emphasized can be fronted to the very start of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I lepblo, hu taitai.",
                "Книгу — я прочитав (наголос на книзі)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Guahu, malago' yu' humånao.",
                "Я — я хочу піти (наголос на мені)."
              ],
              [
                "Enao na guma', bunita.",
                "Той дім — він гарний."
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
        "id": "spanish-lexicon-native-grammar-mismatch",
        "title": "Іспанська лексика на австронезійському каркасі — B2",
        "titleEn": "Spanish Vocabulary on an Austronesian Grammatical Frame — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "На перший погляд чаморро може здатися романізованою мовою через величезну кількість іспанських слів (числа, дні, релігія, побут), але сама граматика — інфікси -um-/-in-, присвійні суфікси, частка gi — залишається повністю австронезійською; це рідкісний випадок настільки глибокого лексичного запозичення без жодного впливу на структуру мови.",
            "en": {
              "text": "At first glance Chamorro might look like a Romanized language due to the huge number of Spanish words (numbers, days, religion, everyday life), but the grammar itself — the -um-/-in- infixes, possessive suffixes, the particle gi — remains fully Austronesian; this is a rare case of such deep lexical borrowing with no effect on the language's structure at all."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "lepblo (з ісп. \"libro\")",
                "але відмінюється й приєднує суфікси по-чаморрськи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lepblo-hu este.",
                "Це моя книга (іспанське слово + питомий суфікс)."
              ],
              [
                "Ha lie' i lepblo.",
                "Він побачив книгу (повністю австронезійська структура)."
              ]
            ]
          }
        ]
      },
      {
        "id": "near-extinction-revitalization",
        "title": "Мова під загрозою й рух відродження — B2",
        "titleEn": "An Endangered Language & the Revitalization Movement — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Чаморро вважається мовою під загрозою: більшість вільних носіїв — люди похилого віку, а молодше покоління на Гуамі й Північних Маріанських островах переважно виросло, розмовляючи англійською; шкільні програми занурення намагаються передати мову новому поколінню.",
            "en": {
              "text": "Chamorro is considered an endangered language: most fluent speakers are elderly, while younger generations in Guam and the Northern Mariana Islands mostly grew up speaking English; school immersion programs are trying to pass the language on to a new generation."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Prográman Chamorro gi eskuela",
                "програма чаморро в школі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fuma'na'gue' Chamorro gi eskuela-ku.",
                "У моїй школі викладають чаморро."
              ],
              [
                "Malago' ham na u sigi i finu' Chamorro.",
                "Ми хочемо, щоб мова чаморро продовжувала жити."
              ]
            ]
          }
        ]
      },
      {
        "id": "chamorro-orthography-variation",
        "title": "Незавершена стандартизація правопису — B1",
        "titleEn": "Incomplete Orthographic Standardization — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Правопис чаморро остаточно не уніфікований — Гуам і Північні Маріанські острови історично використовували дещо різні системи запису голосних і наголосу, тому те саме слово можна побачити написаним по-різному залежно від джерела.",
            "en": {
              "text": "Chamorro spelling isn't fully unified — Guam and the Northern Mariana Islands have historically used somewhat different systems for writing vowels and stress, so the same word can appear spelled differently depending on the source."
            }
          },
          {
            "type": "table",
            "title": "Приклад варіантів",
            "rows": [
              [
                "Chamoru / Chamorro",
                "обидва варіанти зустрічаються"
              ],
              [
                "Guahan / Guåhan",
                "обидва варіанти зустрічаються"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Taotao Chamorro yu'.",
                "Я чаморро (людина)."
              ],
              [
                "Guahu ginen Guåhan.",
                "Я з Гуаму."
              ]
            ]
          }
        ]
      }
    ]
  }
];
