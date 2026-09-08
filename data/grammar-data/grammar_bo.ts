// Vymova — data/grammar-data/grammar_bo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "གང་ཟག་གི་སྒྲ་མིང་ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тибетській множину зазвичай утворюють, додаючи частку \"ཚོ་\" (tsho) до займенника однини.",
            "en": {
              "text": "In Tibetan, the plural is usually formed by adding the particle \"ཚོ་\" (tsho) to the singular pronoun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ང་ (nga)"
              ],
              [
                "ти",
                "ཁྱེད་རང་ (khyed rang)"
              ],
              [
                "він / вона",
                "ཁོང་ (khong)"
              ],
              [
                "ми",
                "ང་ཚོ་ (nga tsho)"
              ],
              [
                "ви",
                "ཁྱེད་རང་ཚོ་ (khyed rang tsho)"
              ],
              [
                "вони",
                "ཁོང་ཚོ་ (khong tsho)"
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
        "id": "to-be-yin",
        "title": "Зв'язка \"ཡིན\" (yin, я сам знаю) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "ཡིན (yin) вживають для ототожнення, коли мовець говорить про себе чи щось, у чому впевнений з власного, особистого знання (\"я — вчитель\").",
            "en": {
              "text": "ཡིན (yin) is used for identity statements when the speaker talks about themselves or something known from personal, direct knowledge (\"I am a teacher\")."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + ཡིན",
            "rows": [
              [
                "ང་",
                "དགེ་རྒན་ཡིན།",
                "я вчитель"
              ],
              [
                "ང་ཚོ་",
                "བོད་པ་ཡིན།",
                "ми тибетці"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་སློབ་ཕྲུག་ཡིན།",
                "Я студент."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Yin (Egophoric \"To Be\") — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"མིན/མེད\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення ототожнення — མིན (замість ཡིน), заперечення наявності — མེད (замість ཡོད); частка приєднується до дієслова замість окремого слова \"ні\".",
            "en": {
              "text": "Negation of identity uses མིན (instead of ཡིན), negation of existence uses མེད (instead of ཡོད); the particle attaches to the verb rather than a separate \"no\" word."
            }
          },
          {
            "type": "formula",
            "title": "дієслово-мін/-мед",
            "rows": [
              [
                "དགེ་རྒན་ཡིན།",
                "དགེ་རྒན་མིན།",
                "Я вчитель. → Я не вчитель."
              ],
              [
                "དེབ་ཡོད།",
                "དེབ་མེད།",
                "Є книга. → Немає книги."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་བོད་པ་མིན།",
                "Я не тибетець."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Min/Med — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"པས\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою པས, доданою в кінець дієслова замість звичайного стверджувального закінчення.",
            "en": {
              "text": "Yes/no questions are often formed with the particle པས, added at the end of the verb instead of the regular assertive ending."
            }
          },
          {
            "type": "formula",
            "title": "дієслово + པས?",
            "rows": [
              [
                "ཁྱོད་ཡིན།",
                "ཁྱོད་ཡིན་པས།",
                "Ти є. → Це ти?"
              ],
              [
                "སྐད་ཆ་ཤེས་ཡོད།",
                "སྐད་ཆ་ཤེས་ཡོད་པས།",
                "Ти знаєш мову. → Ти знаєш мову?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁྱེད་རང་བོད་པ་ཡིན་པས།",
                "Ти тибетець?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Pe — A1"
      },
      {
        "id": "copula-system-overview",
        "title": "Три зв'язки: ཡིན/རེད/འདུག — джерело знання — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тибетська обов'язково розрізняє три зв'язки \"бути\" залежно від того, звідки мовець знає факт: ཡིན (особисте/внутрішнє знання, зазвичай про себе), རེД (загальновідомий, об'єктивний факт про когось іншого), འདུག (побачене чи відчуте щойно, свіже спостереження).",
            "en": {
              "text": "Tibetan obligatorily distinguishes three \"to be\" copulas depending on how the speaker knows the fact: ཡིན (personal/internal knowledge, usually about oneself), རེད (a general, objective fact about someone else), འདུག (just seen or sensed, a fresh observation)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་དགེ་རྒན་ཡིν། (я знаю про себе)",
                "Я вчитель."
              ],
              [
                "ཁོང་དགེ་རྒན་རེད། (загальновідомий факт)",
                "Він вчитель."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ཁྱིམ་ན་འདུག",
                "Він удома (я щойно це побачив)."
              ]
            ]
          }
        ],
        "titleEn": "Three Copulas: Yin/Red/Dug — the Source of Knowledge — A2"
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
        "title": "Теперішній час (-གི་ཡོད） — A1",
        "titleEn": "Present Tense (-Gi Yod) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється частками -གི་ + допоміжне дієслово (ཡོད/འདུག/ཡིན залежно від джерела знання), доданими після дієслівної основи.",
            "en": {
              "text": "The present tense is formed with the particle -གི་ plus an auxiliary (ཡོད/འདུག/ཡིན, chosen by the source of knowledge), added after the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟ་གི་ཡོད།",
                "Я їм."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ལས་ཀ་བྱེད་ཀྱི་འདུག",
                "Він/вона працює (я це бачу)."
              ],
              [
                "ང་ཚོ་སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད།",
                "Ми навчаємось."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense-general",
        "title": "Минулий час (-པ་ཡིན/-སོང) — A2",
        "titleEn": "Past Tense (-Pa Yin/-Song) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється дієслівною основою в минулій формі плюс допоміжне дієслово, вибір якого знову залежить від джерела знання.",
            "en": {
              "text": "The past tense is formed with the verb's past stem plus an auxiliary, whose choice again depends on the source of knowledge."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཕྱིན་པ་ཡིན།",
                "Я пішов (навмисно, знаю сам)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ཕྱིན་སོང༌།",
                "Він/вона пішов(-ла) (я це бачив)."
              ],
              [
                "ང་ཚོ་ཟིན་པ་ཡིན།",
                "Ми закінчили."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-particle",
        "title": "Майбутній час (-གི་ཡིན/-རྒྱུ) — A2",
        "titleEn": "Future Tense (-Gi Yin/-Gyu) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою -གི་ yin (намір мовця) або -རྒྱུ (загальна майбутня дія), доданою до основи дієслова.",
            "en": {
              "text": "The future tense is formed with the particle -གི་ yin (the speaker's intention) or -རྒྱུ (a general future action), added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་འགྲོ་གི་ཡིན།",
                "Я піду (маю намір)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ཡོང་གི་རེད།",
                "Він/вона прийде."
              ],
              [
                "ང་ཚོ་སློབ་སྦྱོང་བྱེད་རྒྱུ་ཡིན།",
                "Ми будемо навчатися."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous-periphrastic",
        "title": "Теперішній тривалий час — B1",
        "titleEn": "Present Continuous — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"саме зараз\" передається тим самим теперішнім часом -གི་ + допоміжне дієслово, часто з уточнювальним прислівником \"зараз\".",
            "en": {
              "text": "The \"right now\" ongoing action is conveyed with the same present -གི་ + auxiliary, often with the clarifying adverb \"now\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ད་ལྟ་ང་ཟ་གི་ཡོད།",
                "Я саме зараз їм."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ད་ལྟ་ལས་ཀ་བྱེད་ཀྱི་འདུག",
                "Він/вона саме зараз працює."
              ],
              [
                "ཕྲུ་གུ་ཚོ་རྩེད་མོ་རྩེ་གི་འདུག",
                "Діти саме зараз граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфект (-ཟིན/-བྱུང) — B1",
        "titleEn": "Perfect Tense (-Zin/-Jung) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражає завершену дію з актуальним результатом і часто утворюється суфіксом -ཟིν (завершив) чи -བྱུང (сталося, для мовця самого).",
            "en": {
              "text": "The perfect expresses a completed action with a present result, often formed with the suffix -ཟིన (finished) or -བྱུང (happened, for the speaker themself)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟས་ཟིν།",
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
                "ཁོང་སླེབས་ཟིన།",
                "Він/вона вже прибув(-ла)."
              ],
              [
                "ང་དེབ་དེ་ཀློགས་ཟིν།",
                "Я вже прочитав ту книгу."
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
            "text": "Наказовий спосіб має особливу форму основи дієслова (часто з іншим тоном/приголосним, ніж у словниковій формі), без окремого закінчення.",
            "en": {
              "text": "The imperative has a special verb stem form (often with a different tone/consonant than the dictionary form), with no separate ending."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཤོག",
                "Приходь!"
              ],
              [
                "སྡོད",
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
                "སྒོ་ཕྱེ།",
                "Відчини двері!"
              ],
              [
                "འདིར་ཤོག",
                "Іди сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "evidential-past-witnessed-dug",
        "title": "Минулий засвідчений час (-སོང/-འདུག) — B1",
        "titleEn": "Witnessed Past (-Song/-Dug) — B1",
        "emoji": "👁️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли мовець особисто побачив завершення минулої дії, вживають допоміжне дієслово -སོང, чітко відрізняючи це від дії, про яку знають з чужих слів.",
            "en": {
              "text": "When the speaker personally witnessed the completion of a past action, the auxiliary -སོང is used, clearly distinguishing it from an action known from hearsay."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཁ་བ་བབས་སོང༌།",
                "Сніг випав (я це бачив)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཆར་པ་བབས་སོང༌།",
                "Дощ пройшов (я це бачив)."
              ],
              [
                "ཁོང་ཤི་སོང༌།",
                "Він/вона помер(-ла) (я це знаю з першоджерела)."
              ]
            ]
          }
        ]
      },
      {
        "id": "evidential-past-reported",
        "title": "Минулий переказний час (-ཟེར/-ཡོད་རེད) — B1",
        "titleEn": "Reportative Past (-Zer/-Yod-Red) — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли мовець знає про минулу подію лише з чужих слів, вживається окрема конструкція з дієсловом ཟེר (казати) чи допоміжним ...ཡོད་རེད.",
            "en": {
              "text": "When the speaker knows about a past event only from hearsay, a separate construction is used with the verb ཟེར (to say) or the auxiliary ...ཡོད་རེད."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཁོང་ཡོང་ཡོད་རེད་ཟེར།",
                "Кажуть, він прийшов (я цього не бачив)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "གྲོང་ཁྱེར་ནང་ཆུ་ལོག་ཡོང་ཡོད་རེད་ཟེར།",
                "У місті, кажуть, сталася повінь."
              ],
              [
                "ཁོང་ན་ཡོད་རེད་ཟེར།",
                "Кажуть, він/вона хворий(-а)."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-aspect",
        "title": "Звичайна дія — B1",
        "titleEn": "Habitual Aspect — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, повторювана дія передається основним теперішнім часом у поєднанні з часовими прислівниками (\"завжди\", \"щодня\"), а не окремою граматичною формою.",
            "en": {
              "text": "A habitual, repeated action is conveyed with the basic present tense combined with time adverbs (\"always\", \"every day\"), rather than a separate grammatical form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཉིན་ལྟར་ང་སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད།",
                "Я щодня навчаюся."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་རྟག་ཏུ་ལས་ཀ་བྱེད་ཀྱི་རེད།",
                "Він/вона завжди працює."
              ],
              [
                "ང་ཚོ་ཨ་རྟག་ཧུར་བཞིན་ལས་ཀ་བྱེད་ཀྱི་ཡོད།",
                "Ми завжди старанно працюємо."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб (-ན) — B1",
        "titleEn": "Conditional Mood (-Na) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення \"якщо\" утворюється суфіксом -ན, доданим до дієслова умовної частини, без окремого слова \"якщо\".",
            "en": {
              "text": "A conditional \"if\" clause is formed with the suffix -ན, added to the verb of the condition, with no separate word for \"if\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "དུས་ཚོད་ཡོད་ན་ང་ཡོང་གི་ཡིན།",
                "Якщо буде час, я прийду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཆར་པ་མི་འབབ་ན་ང་ཚོ་འགྲོ་གི་ཡིན།",
                "Якщо не буде дощу, ми підемо."
              ],
              [
                "ཤེས་ན་ང་ལབ་ཀྱི་ཡིན།",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "desiderative-mood",
        "title": "Бажальний спосіб (\"хотіти\", -འདོད) — A2",
        "titleEn": "Desiderative Mood (\"Want To\") — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виконати дію виражається основою дієслова плюс суфікс -འདོད (хотіти) чи окреме дієслово \"хотіти\".",
            "en": {
              "text": "The desire to do something is expressed with the verb stem plus the suffix -འདོད (want) or a separate \"want\" verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟ་འདོད་ཡོད།",
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
                "ཁོང་འགྲོ་འདོད་འདུག",
                "Він/вона хоче йти."
              ],
              [
                "ང་ཚོ་སློབ་སྦྱོང་བྱེད་འདོད་ཡོད།",
                "Ми хочемо вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligative-mood",
        "title": "Модальність обов'язку (-དགོས) — A2",
        "titleEn": "Obligative Mood (-Gö) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок (\"треба\") виражається основою дієслова плюс суфікс -དགོས.",
            "en": {
              "text": "Obligation (\"must\") is expressed with the verb stem plus the suffix -དགོས."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་འགྲོ་དགོས།",
                "Мені треба йти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁྱེད་རང་སློབ་སྦྱོང་བྱེད་དགོས།",
                "Тобі треба вчитися."
              ],
              [
                "ང་ཚོ་ལས་ཀ་བྱེད་དགོས།",
                "Нам треба працювати."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-particle-chaining-overview",
        "title": "Ланцюжки дієслівних часток — B2",
        "titleEn": "Chains of Verb Particles — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Тибетське дієслово може приєднати кілька часток у ряд (вид, час, модальність, евіденційність), утворюючи один довгий предикат, що передає значення цілого речення — типова агглютинативна риса.",
            "en": {
              "text": "A Tibetan verb can attach several particles in a row (aspect, tense, modality, evidentiality), building one long predicate that conveys the meaning of an entire sentence — a typical agglutinative feature."
            }
          },
          {
            "type": "table",
            "title": "Приклад накопичення",
            "rows": [
              [
                "བྱེད་ཀྱི་ཡོད་རེད་ཟེར།",
                "кажуть, він робить (вид+час+евіденційність)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ཡོང་གི་ཡོད་རེད་ཟེར།",
                "Кажуть, він приходить (регулярно)."
              ],
              [
                "ང་ཟིན་བྲིས་བྱེད་དགོས་ཡོད།",
                "Мені треба вести нотатки."
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
                "ང་ཡི",
                "мій"
              ],
              [
                "ཁྱེད་རང་གི",
                "твій"
              ],
              [
                "ཁོང་གི",
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
                "ང་ཡི་ཁྱིམ་ཆེན་པོ་རེད།",
                "Мій дім великий."
              ],
              [
                "ཁོང་གི་དེབ་ཁྲི་སྟེང་ན་ཡོད།",
                "Її книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "ergative-case-kyis",
        "title": "Ергативний відмінок (ཀྱིས) — B1",
        "titleEn": "Ergative Case (Kyis) — B1",
        "emoji": "🔺",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ཀྱིས позначає підмет перехідного дієслова (той, хто виконує дію над кимось/чимось) — тибетська має ергативно-абсолютивну систему відмінків.",
            "en": {
              "text": "The particle ཀྱིས marks the subject of a transitive verb (the one performing an action on someone/something) — Tibetan has an ergative-absolutive case system."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ས་ཀློགས།",
                "Я читаю (без ергативу — неперехідне)."
              ],
              [
                "ངས་དེབ་ཀློགས།",
                "Я читаю книгу (ергатив ngs на підметі перехідного дієслова)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "བུ་མོས་དེབ་བཀླགས།",
                "Дівчина прочитала книгу."
              ],
              [
                "མིས་ཁྱི་མཐོང༌།",
                "Людина побачила собаку."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case-particle",
        "title": "Родовий відмінок (གི/ཀྱི/ཡི) — A2",
        "titleEn": "Genitive Case (Gi/Kyi/Yi) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок виражається часткою གི/ཀྱི/ཡི (вибір залежить від останнього звука основи) й ставиться після власника, перед означуваним іменником.",
            "en": {
              "text": "The genitive case is expressed with the particle གི/ཀྱི/ཡི (chosen by the stem's final sound) and placed after the possessor, before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་ཡི་དེབ",
                "моя книга"
              ],
              [
                "ཁོང་གི་ཁྱིམ",
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
                "འདི་ཁྱེད་རང་གི་དེབ་ཡིν་པས།",
                "Це твоя книга?"
              ],
              [
                "ཁོང་གི་སྤུན་མཆེད་ཨམ་ཆི་རེད།",
                "Його/її брат лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-locative-case-la",
        "title": "Давально-місцевий відмінок (ལ) — A2",
        "titleEn": "Dative-Locative Case (La) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ལ позначає і адресата дії (\"кому\"), і місце (\"де/куди\") — одна частка на два значення, розрізняються контекстом.",
            "en": {
              "text": "The particle ལ marks both the recipient of an action (\"to whom\") and location (\"where/to where\") — one particle, two meanings, disambiguated by context."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་ལ་སྤྲོད།",
                "дай мені"
              ],
              [
                "ཁྱིམ་ལ་ཡོད།",
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
                "དེབ་ཁྲི་ལ་ཡོད།",
                "Книга на столі."
              ],
              [
                "ང་སློབ་གྲྭ་ལ་འགྲོ་གི་ཡིン།",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case-nas",
        "title": "Похідний відмінок (ནས) — B1",
        "titleEn": "Ablative Case (Nä) — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ནས відповідає на питання \"звідки?\" і виражає джерело чи вихідну точку руху.",
            "en": {
              "text": "The particle ནས answers \"from where?\" and expresses the source or starting point of a movement."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ལྷ་ས་ནས་ཡོང་།",
                "прийти з Лхаси"
              ],
              [
                "ཁྱིམ་ནས་ཐོན་།",
                "вийти з дому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ལྷ་ས་ནས་ཡོང་གི་ཡིン།",
                "Я приїжджаю з Лхаси."
              ],
              [
                "ཁོང་ཁྱིམ་ནས་ཐོན་སོང༌།",
                "Він/вона вийшов(-ла) з дому."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-verb-person-agreement",
        "title": "Дієслово не змінюється за особою — A2",
        "titleEn": "The Verb Never Agrees with Person — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, тибетське дієслово взагалі не має особових закінчень — особу видно лише з займенника, а від дієслова залежить тільки час, вид і джерело знання.",
            "en": {
              "text": "Unlike many languages, a Tibetan verb has no personal endings at all — the person is shown only by the pronoun, while the verb marks only tense, aspect, and evidentiality."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟ་གི་ཡོད། / ཁོང་ཟ་གي་འདུག",
                "форма дієслова ザ не змінюється, змінюється лише допоміжне"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ཟ་གི་ཡོད།",
                "Я їм."
              ],
              [
                "ཁྱེད་རང་ཟ་གི་ཡོད་པས།",
                "Ти їси?"
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-vocabulary-system",
        "title": "Пошанна лексика — окремі слова — B1",
        "titleEn": "Honorific Vocabulary — Separate Words — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Для повсякденних понять (їсти, спати, дім, ім'я) існує окрема пошанна лексика, яку вживають щодо співрозмовника чи поважної людини — не суфікс, а зовсім інше слово.",
            "en": {
              "text": "For everyday concepts (eat, sleep, house, name), a separate honorific vocabulary exists, used when referring to the listener or a respected person — not a suffix, but an entirely different word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཟ་ (звичайне \"їсти\")",
                "མཆོད (пошанне \"їсти\")"
              ],
              [
                "ཁྱིམ (звичайний \"дім\")",
                "སྐུ་མཁར (пошанний \"дім\")"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "སྐུ་མཁར་ནང་ཕེབས་རོགས།",
                "Прошу, заходьте до Вашого дому (пошанно)."
              ],
              [
                "ལགས་མཆོད་གནང་རོགས།",
                "Прошу, покуштуйте (пошанно)."
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-pronouns",
        "title": "Пошанні займенники — A2",
        "titleEn": "Honorific Pronouns — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཁྱེད་རང (пошанне \"ти\")",
                "звичайне ཁྱོད теж вживається, менш формально"
              ],
              [
                "ཁོང (пошанний \"він/вона\")",
                "звичайне ཁོ теж існує, менш формально"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁྱེད་རང་བདེ་པོ་ཡིν་པས།",
                "Ви в порядку? (пошанно)"
              ],
              [
                "ཁོང་ལ་ཐུགས་རྗེ་ཆེ།",
                "Дякую йому/їй (пошанно)."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-marker-particle",
        "title": "Топікова частка ནི/ཡང — B1",
        "titleEn": "Topic Marker Particle Ni/Yang — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ནི (чи ཡང в іншому контексті), додана до слова, виносить його як тему речення — \"а от щодо...\".",
            "en": {
              "text": "The particle ནི (or ཡང in another context), added to a word, marks it as the sentence's topic — \"as for...\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ནི་སློབ་ཕྲུག་ཡིν།",
                "А от я — студент."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁྱེད་རང་ནི་ག་རེ་འདོད་ཀྱི་ཡོད་དམ།",
                "А ти чого хочеш?"
              ],
              [
                "ཁྱིམ་དེ་ནི་ཆེན་པོ་རེད།",
                "А от дім — великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifiers-overview",
        "title": "Класифікатори для рахунку — B1",
        "titleEn": "Numeral Classifiers — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб порахувати іменник, часто додають класифікатор, обраний за типом предмета: ཆ (пара/загальний), ཞིག (загальний невизначений).",
            "en": {
              "text": "To count a noun, a classifier is often added, chosen by the type of the object: ཆ (pair/general), ཞིག (general indefinite)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "མི་གསུམ",
                "три людини"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "དེབ་ཞིག་ཡོད།",
                "Є (одна) книга."
              ],
              [
                "མི་གཉིས་ཡོང་སོང༌།",
                "Прийшло дві людини."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-particle-tsho",
        "title": "Множина (ཚོ) для іменників теж — B1",
        "titleEn": "The Particle Tsho for Noun Plurals Too — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама частка ཚོ, що утворює множину займенників, може вживатися й для множини іменників, хоча множина часто просто зрозуміла з контексту й не позначається.",
            "en": {
              "text": "The same particle ཚོ that pluralizes pronouns can also be used to pluralize nouns, though plurality is often simply clear from context and left unmarked."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཕྲུ་གུ་ཚོ",
                "діти (множина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཕྲུ་གུ་ཚོ་རྩེད་མོ་རྩེ་གི་འདུག",
                "Діти граються."
              ],
              [
                "དེབ་ཚོ་ཁྲི་སྟེང་ན་ཡོད།",
                "Книги на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (འདི/དེ) — A1",
        "titleEn": "Demonstratives (Di/De) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "འདི",
                "це"
              ],
              [
                "དེ",
                "те"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "འདི་ང་ཡི་རེད།",
                "Це моє."
              ],
              [
                "རི་བོ་དེ་མཐོ་པོ་རེད།",
                "Та гора висока."
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
                "སུ",
                "хто"
              ],
              [
                "ག་རེ",
                "що"
              ],
              [
                "ག་པར",
                "де"
              ],
              [
                "ག་དུས",
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
                "ཁྱེད་རང་གི་མིང་ལ་ག་རེ་ཟེར།",
                "Як тебе звати?"
              ],
              [
                "ཁྱེད་རང་ག་པར་སྡོད་ཀྱི་ཡོད།",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun",
        "title": "Зворотний займенник (རང) — B1",
        "titleEn": "Reflexive Pronoun (Rang) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення (\"сам/себе\") виражається словом རང, доданим після займенника чи самостійно.",
            "en": {
              "text": "The reflexive meaning (\"self\") is expressed with the word རང, added after a pronoun or on its own."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་རང",
                "я сам"
              ],
              [
                "རང་ཉིད",
                "себе самого"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་རང་གིས་བྱས།",
                "Я зробив це сам."
              ],
              [
                "ཁོང་རང་གིས་རང་ཉིད་མཐོng ",
                "Він побачив себе."
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
                "གཅིག",
                "1"
              ],
              [
                "གཉིས",
                "2"
              ],
              [
                "གསུམ",
                "3"
              ],
              [
                "བཅུ",
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
                "ང་ལ་སྤུན་མོ་གཉིས་ཡོད།",
                "У мене дві сестри."
              ],
              [
                "མི་བཅུ་ཡོང་སོང༌།",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier-usage",
        "title": "Порядок число + іменник — A2",
        "titleEn": "Number + Noun Order — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "У рахунку числівник зазвичай ставиться ПІСЛЯ іменника, на відміну від багатьох мов, де він передує іменнику.",
            "en": {
              "text": "In counting, the numeral is usually placed AFTER the noun, unlike many languages where it precedes it."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "དེབ་གསུམ",
                "три книги (книга-три)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ལ་དེབ་ལྔ་ཡོད།",
                "У мене є п'ять книг."
              ],
              [
                "དགེ་རྒན་གཉིས་ཡོང་སོང༌།",
                "Прийшло двоє вчителів."
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
            "text": "Тибетська вживає післяйменники (не прийменники), приєднані до іменника: ནང (в), སྟེང (на), འོག (під).",
            "en": {
              "text": "Tibetan uses postpositions (not prepositions), attached to the noun: ནང (in), སྟེང (on), འོག (under)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཁྱིམ་ནང",
                "у домі"
              ],
              [
                "ཁྲི་སྟེང",
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
                "དེབ་ཁྲི་སྟེང་ན་ཡོད།",
                "Книга на столі."
              ],
              [
                "ང་ཁྱིམ་ནང་ཡོད།",
                "Я вдома."
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
                "ངས་དེབ་ཀློགས།",
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
                "ཨ་མས་ཟས་བཟོ་གི་འདུག",
                "Мама готує їжу."
              ],
              [
                "སློབ་ཕྲུག་ཚོས་དེབ་ཀློགས་ཀྱི་ཡོད།",
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
                "དང",
                "і, та"
              ],
              [
                "ཡིν་ནའང",
                "але"
              ],
              [
                "ཡང་ན",
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
                "ང་དང་ཁྱེད་རང་གྲོགས་པོ་རེད།",
                "Я і ти — друзі."
              ],
              [
                "འགྲོ་འདོད་ཡོད་ཡིν་ནའང་དུས་ཚོད་མེད།",
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
                "ག་རེད་ཡིན་ན",
                "тому що"
              ],
              [
                "...ན",
                "якщо"
              ],
              [
                "སྐབས",
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
                "ང་དགའ་པོ་འདུག་ཁྱེད་རང་ཡོང་བའི་སྐབས།",
                "Я радий, коли ти приходиш."
              ],
              [
                "དུས་ཚོད་ཡོད་སྐབས་ང་ཁ་པར་བརྒྱབ་ཀྱི་ཡིν།",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні частки (ཐུབ/ཆོག) — A2",
        "titleEn": "Modal Particles (Thub/Chog) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་རྐྱལ་ཐུབ།",
                "Я вмію плавати."
              ],
              [
                "འགྲོ་ཆོག་གམ།",
                "Можна йти?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་བོད་སྐད་ཤོད་ཐུབ།",
                "Він/вона вміє говорити тибетською."
              ],
              [
                "ང་ཚོ་རོགས་རམ་བྱེད་འདོད་ཡོད།",
                "Ми хочемо допомогти."
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
                "མང་པོ",
                "багато"
              ],
              [
                "ཉུང་ཉུང",
                "мало"
              ],
              [
                "འགའ་ཤས",
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
                "ང་ལ་དེབ་མང་པོ་ཡོད།",
                "У мене багато книг."
              ],
              [
                "ཆུ་ཉུང་ཉུང་སྤྲོད།",
                "Дай трохи води."
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
                "གཟའ་ཟླ་བ",
                "понеділок"
              ],
              [
                "གཟའ་སྤེན་པ",
                "субота"
              ],
              [
                "གཟའ་ཉི་མ",
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
                "དེ་རིང་གཟའ་ཟླ་བ་རེད།",
                "Сьогодні понеділок."
              ],
              [
                "ང་གཟའ་ཉི་མར་ངལ་གསོ་བྱེད་ཀྱི་ཡོད།",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-tibetan-calendar",
        "title": "Місяці тибетського календаря — B1",
        "titleEn": "Months of the Tibetan Calendar — B1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім григоріанських назв, для традиційних свят вживають власний тибетський місячний календар, місяці якого нумеруються, а не мають окремих назв.",
            "en": {
              "text": "Besides the Gregorian names, traditional festivals use the Tibetan lunar calendar, whose months are numbered rather than individually named."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཟླ་བ་དང་པོ",
                "перший місяць"
              ],
              [
                "ལོ་གསར",
                "тибетський Новий рік"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ལོ་གསར་ཟླ་བ་དང་པོར་འབྱུང་གི་རེད།",
                "Новий рік настає в першому місяці."
              ],
              [
                "ཟླ་བ་གསུམ་པར་ང་སྐྱེས།",
                "Я народився в третьому місяці."
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
                "ཆུ་ཚོད་ག་ཚོད་རེད།",
                "Котра година?"
              ],
              [
                "ཆུ་ཚོད་གསུམ་རེད།",
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
                "ང་ཚོ་ཆུ་ཚོད་དྲུག་པར་མཇལ་གི་ཡིν།",
                "Зустрінемось о шостій."
              ],
              [
                "ད་ལྟ་ཉིན་གུང་རེད།",
                "Зараз полудень."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-marking-deep",
        "title": "Коли додаток отримує частку ла — B1",
        "titleEn": "When the Object Takes the Particle La — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений або одухотворений прямий додаток часто отримує ту саму частку ལ, що й давальний відмінок, тоді як неозначений неодухотворений додаток лишається без позначки.",
            "en": {
              "text": "A definite or animate direct object often takes the same particle ལ as the dative, while an indefinite inanimate object stays unmarked."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ངས་ཁྱི་ལ་མཐོང༌།",
                "Я побачив (того) собаку (одухотворений, з ла)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ངས་ཁོང་ལ་མཐོང༌།",
                "Я побачив його/її."
              ],
              [
                "ངས་དེབ་བཀླགས།",
                "Я прочитав книгу (неозначена, без ла)."
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
                "བཀྲ་ཤིས་བདེ་ལེགས",
                "Привіт"
              ],
              [
                "ཐུགས་རྗེ་ཆེ",
                "Дякую"
              ],
              [
                "ཕྱིས་མཇལ",
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
                "སྐུ་གཟུགས་བདེ་པོ་ཡིν་པས།",
                "Як Ваше здоров'я? (пошанно)"
              ],
              [
                "ཐུགས་རྗེ་ཆེ་ཞུ།",
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
                "ཉི་མ་ཤར་འདུག",
                "Сонячно."
              ],
              [
                "ཆར་པ་བབས་ཀྱི་འདུག",
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
                "དེ་རིང་གྲང་མོ་འདུག",
                "Сьогодні холодно."
              ],
              [
                "ཧ་ཅང་དྲོད་པོ་འདུག",
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
                "སེམས་ཁྲལ་མེད",
                "не хвилюйся (буквально: без турбот)"
              ],
              [
                "སེམས་པ་བདེ་པོ",
                "щасливий (буквально: серце легке)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "སེམས་ཁྲལ་མེد།",
                "Не хвилюйся."
              ],
              [
                "ད་ལྟ་ང་སེམས་པ་བདེ་པོ་འདུག",
                "Зараз я почуваюся щасливим."
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
                "མགྱོགས་པོ",
                "швидко"
              ],
              [
                "དལ་མོ",
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
                "ཁོང་མགྱོགས་པོ་རྒྱུག་གི་འདུག",
                "Він швидко бігає."
              ],
              [
                "དལ་མོ་བཤད་རོགས།",
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
                "-ཅན",
                "утворює прикметники з ознакою (ནུས་པ→ནུས་ཅན, сила→сильний)"
              ],
              [
                "-པ/-མོ",
                "утворює назви діяча чол./жін. (སློབ→སློབ་མ, навчання→учень)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ནུས་ཅན་རེད།",
                "Він сильний."
              ],
              [
                "སློབ་མ་ཚོ་སློབ་གྲྭར་ཡོད།",
                "Учні в школі."
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
                "ལག (рука) + དེབ (книга)",
                "ལག་དེབ (записник)"
              ],
              [
                "མེ (вогонь) + འཁོར (колесо)",
                "མེ་འཁོར (потяг)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ལག་དེབ་ཁྲི་སྟེང་ན་ཡོད།",
                "Записник на столі."
              ],
              [
                "མེ་འཁོར་ལ་ཞོན་ཡོང་།",
                "Прийти на потязі."
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
                "དཔྱིད་ཀ",
                "весна"
              ],
              [
                "དབྱར་ཀ",
                "літо"
              ],
              [
                "སྟོན་ཀ",
                "осінь"
              ],
              [
                "དགུན་ཀ",
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
                "དབྱར་ཀར་དྲོད་པོ་རེད།",
                "Влітку тепло."
              ],
              [
                "ང་སྟོན་ཀ་ལ་དགའ་པོ་ཡོད།",
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
                "རིན་གོང་ག་ཚོད་རེད།",
                "Скільки коштує?"
              ],
              [
                "སྒོར་སྟོང་ཕྲག་གཅིག་རེད།",
                "Тисяча юанів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "དེབ་འདིའི་རིན་གོང་སྒོར་བརྒྱ་གཉིས་རེད།",
                "Ця книга коштує двісті юанів."
              ],
              [
                "ཧ་ཅང་གོང་ཆེ།",
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
                "ང་བསམ་གི་ཡོด...",
                "Я думаю, що..."
              ],
              [
                "ང་ཡི་བསམ་ཚུལ་ལ...",
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
                "ཁྱེད་རང་ཡང་དག་ཡིన་པར་ང་བསམ་གི་ཡོད།",
                "Я думаю, що ти правий."
              ],
              [
                "ང་ཡི་བསམ་ཚུལ་ལ་འདི་བསམ་བློ་ལེགས་པོ་རེད།",
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
                "དེ་རིང / སང་ཉིན / ཁ་སང",
                "сьогодні / завтра / вчора"
              ],
              [
                "ད་ལྟ / རྗེས་སུ",
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
                "སང་ཉིན་མཇལ་གི་ཡིν།",
                "Побачимось завтра."
              ],
              [
                "ད་ལྟ་ང་ལས་ཀ་བརྒྱབ་ཀྱི་ཡོད།",
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
                "སུ་ཞིག",
                "хтось"
              ],
              [
                "ག་རེ་ཞིག",
                "щось"
              ],
              [
                "སུ་ཡང་མེད",
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
                "སུ་ཞིག་ང་ལ་ཁ་པར་བརྒྱབ་སོང༌།",
                "Хтось мені подзвонив."
              ],
              [
                "ང་ག་རེ་ཞིག་ཐོས་སོང༌།",
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
                "ཨ་ཙི!",
                "Ой!"
              ],
              [
                "ཡག་པོ་འདུག",
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
                "ཨ་ཙི, ཧ་ཅང་མཛེས་པོ་འདུག",
                "Ой, як гарно!"
              ],
              [
                "ཡག་པོ་འདུག, གནས་ཚུལ་ཡག་པོ་རེད།",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-yod-dug",
        "title": "Екзистенційна конструкція ཡོད/འདུག — A2",
        "titleEn": "Existential Yod/Dug — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається ཡོད (я про це знаю особисто/у мене є) чи འདུག (я щойно побачив/сприймаю), а не одним універсальним словом \"є\".",
            "en": {
              "text": "The existence of something is expressed with ཡོད (I personally know about it/I have it) or འདུག (I just perceived it), rather than one universal \"there is\" word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་ལ་ཆུ་ཡོད།",
                "У мене є вода (я знаю)."
              ],
              [
                "ཆུ་འདུག",
                "Є вода (я щойно бачу)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "འདིར་མི་མང་པོ་འདུག",
                "Тут багато людей (я бачу)."
              ],
              [
                "ང་ལ་དུས་ཚོད་ཡོད།",
                "У мене є час."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-existential-med",
        "title": "Заперечна екзистенційна форма (མེད) — A2",
        "titleEn": "Negative Existential (Med) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "དངུལ་མེད།",
                "У мене немає грошей."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "འདིར་སུ་ཡང་མེད།",
                "Тут нікого немає."
              ],
              [
                "དཀའ་ངལ་ག་ནང་མེད།",
                "Немає проблем."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-ཕྲུག/-ཆུང) — B1",
        "titleEn": "Diminutives (-Truk/-Chung) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливість виражається суфіксом -ཕྲུག (маля) чи -ཆུང (маленький), доданим до кінця іменника.",
            "en": {
              "text": "Affection/diminutive is expressed with the suffix -ཕྲུག (little one) or -ཆུང (small), added to the end of the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཨ་མ (мама)",
                "ཨ་མ་ལགས",
                "матусенька"
              ],
              [
                "ཁྱི (собака)",
                "ཁྱི་ཕྲུག",
                "цуценя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁྱི་ཕྲུག་ཧ་ཅང་མཛེས་པོ་འདུག",
                "Цуценя дуже миле."
              ],
              [
                "ང་ཡི་ཨ་མ་ལགས་ཧ་ཅང་བཟང་པོ་རེད།",
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
                "ཇོ་ལགས",
                "пан"
              ],
              [
                "ཨ་ཅེ",
                "старша сестра (звертання до жінки)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "བཀྲ་ཤིས་བདེ་ལེགས, ཇོ་ལགས།",
                "Вітаю, пане."
              ],
              [
                "ཨ་ཅེ, འདིར་ཤོག",
                "Сестро, іди сюди."
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
                "རི་མཐོ་ན་ཡང་བྱ་ལས་མཐོ་མེད།",
                "Хоч гора висока, вона не вища за птаха (терпіння перемагає перешкоди)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "དཀའ་ལས་ཁག་པོ་ཡིν་ཡང་ང་ཚོས་ཐུབ་ཀྱི་རེད།",
                "Хоч важко, ми впораємось."
              ],
              [
                "སེམས་ཤུགས་ཆེ་ན་ཐམས་ཅད་ཐུབ།",
                "З сильним духом можна все подолати."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-sanskrit-chinese",
        "title": "Запозичення з санскриту й китайської — B1",
        "titleEn": "Loanwords from Sanskrit & Chinese — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Релігійна й філософська лексика значною мірою запозичена з санскриту через буддійські тексти, тоді як сучасна адміністративна й технічна лексика часто йде з китайської.",
            "en": {
              "text": "Religious and philosophical vocabulary is largely borrowed from Sanskrit via Buddhist texts, while modern administrative and technical vocabulary often comes from Chinese."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཆོས (з санскр., \"дхарма/вчення\")",
                "релігія/вчення"
              ],
              [
                "ཏིན་ནའོ (з кит.)",
                "телефон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ཆོས་ལ་དགའ་པོ་ཡོད།",
                "Мені подобається вчення."
              ],
              [
                "ཁོང་ལ་ཏིན་ནའོ་ཡོད།",
                "У нього/неї є телефон."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-particle-relative-clause",
        "title": "Підрядне речення через номіналізатор (མཁན) — B1",
        "titleEn": "Relative Clause via Nominalizer (Khan) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого слова \"який/що\" тибетська перетворює саме дієслово на іменник за допомогою номіналізатора མཁན (той, хто...) і ставить його перед означуваним іменником.",
            "en": {
              "text": "Instead of a separate word for \"who/which\", Tibetan turns the verb itself into a noun with the nominalizer མཁན (the one who...), placed before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཡོང་མཁན་མི",
                "людина, яка приходить (буквально: приходить-той-хто людина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཀློག་མཁན་ཕྲུ་གུ་ཤེས་རབ་ཆེ་ན་འདུག",
                "Дитина, яка читає, розумна."
              ],
              [
                "བཟོ་མཁན་ཁྱིམ་ཆེན་པོ་རེད།",
                "Побудований дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Прикметник після іменника — A1",
        "titleEn": "Adjective After the Noun — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, прикметник у тибетській зазвичай стоїть ПІСЛЯ іменника.",
            "en": {
              "text": "Unlike Ukrainian, the adjective in Tibetan usually stands AFTER the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཁྱིམ་ཆེན་པོ",
                "великий дім (дім-великий)"
              ],
              [
                "མེ་ཏོག་མཛེས་པོ",
                "гарна квітка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ཁྱིམ་ཆེན་པོ་ཞིག་འདོད།",
                "Я хочу великий дім."
              ],
              [
                "བུ་མོ་མཛེས་པོ་ཞིག་འདུག",
                "Гарна дівчина тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Порівняння через \"...ལས\" — A2",
        "titleEn": "Comparison via \"...Le\" (Than) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Тибетська не має синтетичного вищого ступеня — порівняння виражається часткою ལས (ніж) після другого об'єкта порівняння.",
            "en": {
              "text": "Tibetan has no synthetic comparative — comparison is expressed with the particle ལས (than) after the second object of comparison."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཁོང་ང་ལས་མཐོ་བ་རེད།",
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
                "ཁྱིམ་འདི་དེ་ལས་ཆེ་བ་རེད།",
                "Цей дім більший за той."
              ],
              [
                "ཁོང་ཐམས་ཅད་ལས་མཁས་པ་རེད།",
                "Він розумніший за всіх."
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
                "དང་པོ",
                "перший"
              ],
              [
                "གཉིས་པ",
                "другий"
              ],
              [
                "གསུམ་པ",
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
                "འདི་ང་ཡི་དེབ་དང་པོ་རེད།",
                "Це моя перша книга."
              ],
              [
                "ཁོང་གཉིས་པར་གནས་ལེན།",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличне звертання (ལགས) — A2",
        "titleEn": "Vocative Address (Lags) — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання до людини часто супроводжується пошанним словом ལགས, доданим після імені чи родинного слова.",
            "en": {
              "text": "Direct address to a person is often accompanied by the honorific word ལགས, added after the name or kinship word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཨ་མ་ལགས!",
                "Мамо!"
              ],
              [
                "སློབ་དཔོན་ལགས!",
                "Вчителю!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཨ་མ་ལགས, འདིར་ཤོག",
                "Мамо, іди сюди!"
              ],
              [
                "སློབ་དཔོན་ལགས, ང་ལ་རོགས་རམ་གནང༌།",
                "Вчителю, допоможіть мені."
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
        "id": "silent-letters-spelling-gap",
        "title": "Мовчазні літери — величезний розрив між письмом і вимовою — B2",
        "titleEn": "Silent Letters — a Huge Gap Between Spelling and Pronunciation — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тибетське письмо зафіксувало вимову багатовікової давнини — численні префіксальні, суфіксальні й надрядкові літери, які колись вимовлялися, сьогодні німі, тому написання слова часто набагато довше за те, що дійсно чути.",
            "en": {
              "text": "Tibetan writing fossilized centuries-old pronunciation — numerous prefix, suffix, and superscript letters that were once pronounced are silent today, so a word's spelling is often far longer than what's actually heard."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "བཀྲ་ཤིས (написання: 5+ літер)",
                "вимова: приблизно \"таши\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "བཀྲ་ཤིས་བདེ་ལེགས",
                "\"Ташí делек\" (привіт), багато букв мовчить"
              ],
              [
                "བོད",
                "\"Пьо\" (Тибет), кінцева d не вимовляється"
              ]
            ]
          }
        ]
      },
      {
        "id": "dialectal-divergence-lhasa-amdo-kham",
        "title": "Взаємонезрозумілі діалекти (Лхаса/Амдо/Кхам) — B2",
        "titleEn": "Mutually Unintelligible Dialects (Lhasa/Amdo/Kham) — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча писемність спільна для всіх регіонів, розмовні діалекти — центральний (лхаський, основа цього курсу), амдоський і кхамський — розрізняються настільки сильно у вимові й тонах, що часто взаємно незрозумілі в усному мовленні.",
            "en": {
              "text": "Although the script is shared across all regions, the spoken dialects — Central (Lhasa, the basis of this course), Amdo, and Kham — diverge so much in pronunciation and tone that they're often mutually unintelligible in speech."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Лхаський (тональний)",
                "стандарт цього курсу"
              ],
              [
                "Амдоський (нетональний)",
                "зовсім інша фонетика того самого письма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ལྷ་སའི་སྐད་ཡིག་སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད།",
                "Я вивчаю лхаську мову."
              ],
              [
                "ཨ་མདོའི་སྐད་ཆ་མི་འདྲ།",
                "Амдоська мова інша."
              ]
            ]
          }
        ]
      },
      {
        "id": "sacred-honorific-register-religious",
        "title": "Найвищий шанобливий регістр для духовних осіб — B2",
        "titleEn": "The Highest Honorific Register for Religious Figures — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Понад звичайну пошанну лексику існує ще вищий, священний регістр слів, вживаний виключно щодо Далай-лами й найвищих релігійних учителів — окремі слова навіть для \"дивитися\", \"говорити\" чи \"здоров'я\", яких не почуєш у жодному іншому контексті.",
            "en": {
              "text": "Beyond ordinary honorific vocabulary, there's an even higher, sacred register of words used exclusively for the Dalai Lama and the highest religious teachers — separate words even for \"to look\", \"to speak\", or \"health\" that you won't hear in any other context."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ལྟ་ (звичайне \"дивитися\")",
                "སྐུ་མཐོང (найвищий шанобливий рівень)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཏཱ་ལའི་བླ་མའི་སྐུ་གཟུགས་བཞུགས་སྐབས...",
                "Коли Далай-лама перебуває... (священний регістр)"
              ],
              [
                "རིན་པོ་ཆེའི་གསུང་བཞིན...",
                "За словами Рінпоче... (священний регістр)"
              ]
            ]
          }
        ]
      }
    ]
  }
];
