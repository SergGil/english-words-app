// Vymova — data/grammar-data/grammar_dz.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DZ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "གང་ཟག་གི་མིང་ཚབ་ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Дзонгха використовує те саме письмо, що й тибетська, і, подібно до неї, утворює множину, додаючи частку до займенника однини.",
            "en": {
              "text": "Dzongkha uses the same script as Tibetan and, similarly, forms plurals by adding a particle to the singular pronoun."
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
                "ཁྱོད་ (khyö)"
              ],
              [
                "він / вона",
                "ཁོང་ (khong)"
              ],
              [
                "ми",
                "ང་བཅས་ (ngacé)"
              ],
              [
                "ви",
                "ཁྱོད་ཚུ་ (khyö tshu)"
              ],
              [
                "вони",
                "ཁོང་ཚུ་ (khong tshu)"
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
        "id": "to-be-in",
        "title": "Зв'язка \"ཨིན\" (in, я сам знаю) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "ཨིན (in) вживають для ототожнення, коли мовець говорить про себе чи щось, у чому впевнений з власного знання — форма, спільна за структурою з тибетською ཡིན, але з іншою вимовою й написанням, типовою для дзонг-кхи.",
            "en": {
              "text": "ཨིན (in) is used for identity statements when the speaker talks about themselves or something known from personal knowledge — structurally parallel to Tibetan ཡིན, but with its own Dzongkha pronunciation and spelling."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + ཨིན",
            "rows": [
              [
                "ང་",
                "སློབ་དཔོན་ཨིན།",
                "я вчитель"
              ],
              [
                "ང་བཅས་",
                "འབྲུག་པ་ཨིན།",
                "ми бутанці"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་སློབ་ཕྲུག་ཨིན།",
                "Я студент."
              ]
            ]
          }
        ],
        "titleEn": "The Copula In — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"མེན/མེད\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення ототожнення — མེན (замість ཨིན), заперечення наявності — མེད (замість ཡོད); частка приєднується до дієслова замість окремого слова \"ні\".",
            "en": {
              "text": "Negation of identity uses མེན (instead of ཨིན), negation of existence uses མེད (instead of ཡོད); the particle attaches to the verb rather than a separate \"no\" word."
            }
          },
          {
            "type": "formula",
            "title": "дієслово-мен/-мед",
            "rows": [
              [
                "སློབ་དཔོན་ཨིན།",
                "སློབ་དཔོན་མེན།",
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
                "ང་འབྲུག་པ་མེན།",
                "Я не бутанець."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Men/Mé — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"ག\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою ག (-ga), доданою в кінець дієслова замість звичайного стверджувального закінчення.",
            "en": {
              "text": "Yes/no questions are often formed with the particle ག (-ga), added at the end of the verb instead of the regular assertive ending."
            }
          },
          {
            "type": "formula",
            "title": "дієслово + ག?",
            "rows": [
              [
                "ཁྱོད་ཨིན།",
                "ཁྱོད་ཨིན་ག?",
                "Ти є. → Це ти?"
              ],
              [
                "ཁྱོད་ཟ་ནི་ཨིན།",
                "ཁྱོད་ཟ་ནི་ཨིན་ག?",
                "Ти їстимеш. → Ти їстимеш?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁྱོད་འབྲུག་པ་ཨིན་ག?",
                "Ти бутанець?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Ga — A1"
      },
      {
        "id": "joyig-chhoyig-dual-spelling",
        "title": "Два регістри письма: འབྲུ་ཡིག і ཆོས་ཡིག — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Дзонг-кха має два регістри правопису: розмовний джойіг (спрощене написання, близьке до вимови) і формальний чхойіг (етимологічне написання, вживане в релігійних і офіційних текстах) — те саме слово може виглядати по-різному залежно від регістру.",
            "en": {
              "text": "Dzongkha has two spelling registers: colloquial Joyig (simplified spelling close to pronunciation) and formal Chhoyig (etymological spelling used in religious and official texts) — the same word can look different depending on the register."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Джойіг (розмовний)",
                "спрощене написання"
              ],
              [
                "Чхойіг (формальний)",
                "повне етимологічне написання"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "འདི་ཆོས་ཡིག་ཨིན།",
                "Це формальний (чхойіг) текст."
              ]
            ]
          }
        ],
        "titleEn": "Two Spelling Registers: Joyig & Chhoyig — A2"
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
        "title": "Теперішній час (-དོ་ཡོད) — A1",
        "titleEn": "Present Tense (-Do Yö) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється часткою -དོ་ плюс допоміжне дієслово ཡོད, доданими після основи дієслова.",
            "en": {
              "text": "The present tense is formed with the particle -དོ་ plus the auxiliary ཡོད, added after the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟ་དོ་ཡོད།",
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
                "ཁོང་ལཱ་འབད་དོ་ཡོད།",
                "Він/вона працює."
              ],
              [
                "ང་བཅས་སློབ་སྦྱོང་འབད་དོ་ཡོད།",
                "Ми навчаємось."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Минулий час — A2",
        "titleEn": "Past Tense — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється дієслівною основою в минулій формі плюс допоміжне дієслово ཨིན/སོང.",
            "en": {
              "text": "The past tense is formed with the verb's past stem plus the auxiliary ཨིན/སོང."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་སོང་ཡི།",
                "Я пішов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ལོག་སོང༌།",
                "Він/вона повернувся(-лась)."
              ],
              [
                "ང་བཅས་ཟིན་ཨིན།",
                "Ми закінчили."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (-ནི་ཨིན) — A2",
        "titleEn": "Future Tense (-Ni In) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою -ནི་ plus допоміжне ཨིン, вираженим наміром мовця.",
            "en": {
              "text": "The future tense is formed with the particle -ནི་ plus the auxiliary ཨིན, expressing the speaker's intention."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་འགྱོ་ནི་ཨིན།",
                "Я піду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་འོང་ནི་ཨིན།",
                "Він/вона прийде."
              ],
              [
                "ང་བཅས་སློབ་སྦྱོང་འབད་ནི་ཨིན།",
                "Ми будемо навчатися."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "Теперішній тривалий час — B1",
        "titleEn": "Present Continuous — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"саме зараз\" передається тим самим теперішнім часом -དོ་ + допоміжне, часто з уточнювальним прислівником \"зараз\".",
            "en": {
              "text": "The \"right now\" ongoing action is conveyed with the same present -དོ་ + auxiliary, often with the clarifying adverb \"now\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ད་ལྟོ་ང་ཟ་དོ་ཡོད།",
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
                "ཁོང་ད་ལྟོ་ལཱ་འབད་དོ་ཡོད།",
                "Він/вона саме зараз працює."
              ],
              [
                "ཨའ་ལོ་ཚུ་རྩེད་དོ་ཡོད།",
                "Діти саме зараз граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфект (-ཡི) — B1",
        "titleEn": "Perfect Tense (-Yi) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражає завершену дію з актуальним результатом і часто утворюється суфіксом -ཡི на основі дієслова.",
            "en": {
              "text": "The perfect expresses a completed action with a present result, often formed with the suffix -ཡི on the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟ་ཚར་ཡི།",
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
                "ཁོང་ལྷོད་ཡི།",
                "Він/вона вже прибув(-ла)."
              ],
              [
                "ང་དེབ་དེ་ལྷག་ཚར་ཡི།",
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
            "text": "Наказовий спосіб має особливу форму основи дієслова, без окремого закінчення, часто з часткою -ཤིག для наголосу.",
            "en": {
              "text": "The imperative has a special verb stem form, with no separate ending, often with the particle -ཤིག for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "འོང་ཤིག!",
                "Приходь!"
              ],
              [
                "བཞུགས།",
                "Сідайте (ввічливо)!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "སྒོ་ཕྱེ་ཤིག!",
                "Відчини двері!"
              ],
              [
                "འདིར་འོང་ཤིག!",
                "Іди сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "evidential-du-perceived",
        "title": "Сприйнятий безпосередньо факт (འདུག) — B1",
        "titleEn": "Directly Perceived Fact (Du) — B1",
        "emoji": "👁️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли мовець особисто бачить чи відчуває факт саме зараз, вживають допоміжне འདུག замість ཡོད/ཨིན, чітко відрізняючи це від загальновідомого знання.",
            "en": {
              "text": "When the speaker personally sees or senses a fact right now, the auxiliary འདུག is used instead of ཡོད/ཨིན, clearly distinguishing this from general knowledge."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཁོང་ཁྱིམ་ནང་འདུག",
                "Він/вона вдома (я щойно це побачив)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཆརཔ་རྐྱབ་སྟེ་འདུག",
                "Іде дощ (я бачу)."
              ],
              [
                "དེབ་འདི་ལེགས་ཤོམ་འདུག",
                "Ця книга гарна (я бачу/відчуваю)."
              ]
            ]
          }
        ]
      },
      {
        "id": "evidential-reported",
        "title": "Переказний факт (-ལོ) — B1",
        "titleEn": "Reported Fact (-Lo) — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли мовець знає про факт лише з чужих слів, у кінці речення додають частку -ལོ, чітко позначаючи переказну інформацію.",
            "en": {
              "text": "When the speaker knows about a fact only from hearsay, the particle -ལོ is added at the end of the sentence, clearly marking reported information."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཁོང་འོང་ཡི་ལོ།",
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
                "ཆུ་ལོག་སོང་ཡི་ལོ།",
                "У місті, кажуть, сталася повінь."
              ],
              [
                "ཁོང་ན་གི་འདུག་ལོ།",
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
                "ཉིནམ་བསྟར་ང་སློབ་སྦྱོང་འབད་དོ་ཡོད།",
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
                "ཁོང་རྟག་བུ་ལཱ་འབད་དོ་ཡོད།",
                "Він/вона завжди працює."
              ],
              [
                "ང་བཅས་ཧུར་བརྩོན་ཐོག་ལཱ་འབད་དོ་ཡོད།",
                "Ми завжди старанно працюємо."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб (-པ་ཅིན） — B1",
        "titleEn": "Conditional Mood (-Pa Cin) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення \"якщо\" утворюється часткою -པ་ཅིན, доданою до дієслова умовної частини.",
            "en": {
              "text": "A conditional \"if\" clause is formed with the particle -པ་ཅིན, added to the verb of the condition."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "དུས་ཚོད་ཡོད་པ་ཅིན་ང་འོང་ནི་ཨིན།",
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
                "ཆརཔ་མ་བབ་པ་ཅིན་ང་བཅས་འགྱོ་ནི་ཨིན།",
                "Якщо не буде дощу, ми підемо."
              ],
              [
                "ཤེས་པ་ཅིན་ང་སླབ་ནི་ཨིན།",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "desiderative-mood",
        "title": "Бажальний спосіб (-འདོད) — A2",
        "titleEn": "Desiderative Mood (\"Want To\") — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виконати дію виражається основою дієслова плюс суфікс -འདོད (хотіти).",
            "en": {
              "text": "The desire to do something is expressed with the verb stem plus the suffix -འདོད (want)."
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
                "ཁོང་འགྱོ་འདོད་འདུག",
                "Він/вона хоче йти."
              ],
              [
                "ང་བཅས་སློབ་སྦྱོང་འབད་འདོད་ཡོད།",
                "Ми хочемо вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligative-mood",
        "title": "Модальність обов'язку (-དགོ） — A2",
        "titleEn": "Obligative Mood (-Go) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок (\"треба\") виражається основою дієслова плюс суфікс -དགོ.",
            "en": {
              "text": "Obligation (\"must\") is expressed with the verb stem plus the suffix -དགོ."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་འགྱོ་དགོ།",
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
                "ཁྱོད་སློབ་སྦྱོང་འབད་དགོ།",
                "Тобі треба вчитися."
              ],
              [
                "ང་བཅས་ལཱ་འབད་དགོ།",
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
            "text": "Дзонг-кхинське дієслово може приєднати кілька часток у ряд (вид, час, модальність, евіденційність), утворюючи один довгий предикат, що передає значення цілого речення.",
            "en": {
              "text": "A Dzongkha verb can attach several particles in a row (aspect, tense, modality, evidentiality), building one long predicate that conveys the meaning of an entire sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "འབད་དོ་ཡོད་ལོ།",
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
                "ཁོང་འོང་དོ་ཡོད་ལོ།",
                "Кажуть, він приходить (регулярно)."
              ],
              [
                "ང་ཟིན་བྲིས་འབད་དགོ།",
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
        "id": "ergative-case",
        "title": "Ергативний відмінок (-གིས) — B1",
        "titleEn": "Ergative Case (-Gi) — B1",
        "emoji": "🔺",
        "sections": [
          {
            "type": "intro",
            "text": "Частка -གིས позначає підмет перехідного дієслова (того, хто виконує дію над кимось/чимось) — дзонг-кха має ергативно-абсолютивну систему відмінків.",
            "en": {
              "text": "The particle -གིས marks the subject of a transitive verb (the one performing an action on someone/something) — Dzongkha has an ergative-absolutive case system."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ལྷོད་ཡི།",
                "Я прибув (без ергативу — неперехідне)."
              ],
              [
                "ངེས་དེབ་ལྷག་ཡི།",
                "Я прочитав книгу (ергатив ngë на підметі перехідного)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཨའ་ལོ་གིས་དེབ་ལྷག་ཡི།",
                "Дитина прочитала книгу."
              ],
              [
                "མིའི་ཁྱིར་མཐོང་ཡི།",
                "Людина побачила собаку."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Родовий відмінок (-གི） — A2",
        "titleEn": "Genitive Case (-Gi) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок виражається часткою -གི (варіанти -ཀྱི/-གྱི залежно від останнього звука основи) й ставиться після власника.",
            "en": {
              "text": "The genitive case is expressed with the particle -གི (variants -ཀྱི/-གྱི depending on the stem's final sound) and placed after the possessor."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་གི་དེབ",
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
                "འདི་ཁྱོད་ཀྱི་དེབ་ཨིན་ག?",
                "Це твоя книга?"
              ],
              [
                "ཁོང་གི་སྤུན་ཆ་སྨན་མཁར་ཨིན།",
                "Його/її брат/сестра лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-locative-case",
        "title": "Давально-місцевий відмінок (-ལུ） — A2",
        "titleEn": "Dative-Locative Case (-Lu) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Частка -ལུ позначає і адресата дії (\"кому\"), і місце (\"де/куди\") — одна частка на два значення, розрізняються контекстом.",
            "en": {
              "text": "The particle -ལུ marks both the recipient of an action (\"to whom\") and location (\"where/to where\") — one particle, two meanings, disambiguated by context."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་ལུ་བྱིན།",
                "дай мені"
              ],
              [
                "ཁྱིམ་ལུ་ཡོད།",
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
                "དེབ་ཅོག་ཊི་ལུ་ཡོད།",
                "Книга на столі."
              ],
              [
                "ང་སློབ་གྲྭ་ལུ་འགྱོ་དོ་ཡོད།",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case",
        "title": "Похідний відмінок (-ལས） — B1",
        "titleEn": "Ablative Case (-Lä) — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка -ལས відповідає на питання \"звідки?\" і виражає джерело чи вихідну точку руху.",
            "en": {
              "text": "The particle -ལས answers \"from where?\" and expresses the source or starting point of a movement."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཐིམ་ཕུ་ལས་འོང་ཡི།",
                "прийшов з Тхімпху"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ཐིམ་ཕུ་ལས་འོང་དོ་ཡོད།",
                "Я приїжджаю з Тхімпху."
              ],
              [
                "ཁོང་ཁྱིམ་ལས་ཐོན་སོང༌།",
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
            "text": "Дзонг-кхинське дієслово не має особових закінчень — особу видно лише з займенника, а від дієслова залежить тільки час, вид і джерело знання.",
            "en": {
              "text": "A Dzongkha verb has no personal endings — the person is shown only by the pronoun, while the verb marks only tense, aspect, and evidentiality."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཟ་དོ་ཡོད། / ཁོང་ཟ་དོ་འདུག",
                "форма дієслова ཟ не змінюється, змінюється лише допоміжне"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ང་ཟ་དོ་ཡོད།",
                "Я їм."
              ],
              [
                "ཁྱོད་ཟ་དོ་ཡོད་ག?",
                "Ти їси?"
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-vocabulary-driglam",
        "title": "Пошанна лексика — Дригалам Намжа — B1",
        "titleEn": "Honorific Vocabulary — Driglam Namzha — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Для повсякденних понять існує окрема пошанна лексика, вживана щодо поважної людини, — частина бутанського кодексу поведінки й етикету Дригалам Намжа, який регулює мовлення так само, як одяг і манери.",
            "en": {
              "text": "For everyday concepts, a separate honorific vocabulary exists, used toward respected people — part of Driglam Namzha, the Bhutanese code of conduct and etiquette that governs speech just as it governs dress and manners."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཟ་ (звичайне \"їсти\")",
                "གསོལ (пошанне \"їсти\")"
              ],
              [
                "ཁྱིམ (звичайний \"дім\")",
                "གཞིས་ཁྱིམ (пошанний \"дім\")"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ལགས་གསོལ་གནང༌།",
                "Прошу, покуштуйте (пошанно)."
              ],
              [
                "སྐུ་མཁར་ནང་ཕེབས།",
                "Прошу, заходьте до вашого дому (пошанно)."
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
                "ཁྱོད (звичайне \"ти\")",
                "менш формально, ніж ккенраḥ"
              ],
              [
                "ཁོང (пошанний \"він/вона\")",
                "звичайне ཁོ теж існує"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ག་དེམ་ཅིག་ཡོད་ག?",
                "Ви в порядку? (пошанно)"
              ],
              [
                "ཁོང་ལུ་བཀའ་དྲིན་ཆེ།",
                "Дякую йому/їй (пошанно)."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-marker-particle",
        "title": "Топікова частка ག/ཨིན་ཏེ — B1",
        "titleEn": "Topic Marker Particle Ga/In-Té — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ཨིན་ཏེ, додана до слова, виносить його як тему речення — \"а от щодо...\".",
            "en": {
              "text": "The particle ཨིན་ཏེ, added to a word, marks it as the sentence's topic — \"as for...\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་ཨིན་ཏེ་སློབ་ཕྲུག་ཨིན།",
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
                "ཁྱོད་ཨིན་ཏེ་ག་ཅི་འདོད་དོ་ཡོད?",
                "А ти чого хочеш?"
              ],
              [
                "ཁྱིམ་དེ་ཨིན་ཏེ་སྦོམ་ཨིན།",
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
            "text": "Щоб порахувати іменник, часто додають класифікатор, обраний за типом предмета.",
            "en": {
              "text": "To count a noun, a classifier is often added, chosen by the type of the object."
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
                "དེབ་ཅིག་ཡོད།",
                "Є (одна) книга."
              ],
              [
                "མི་གཉིས་འོང་སོང༌།",
                "Прийшло дві людини."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-particle-tshu",
        "title": "Множина (ཚུ) — A1",
        "titleEn": "The Particle Tshu for Plurals — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється часткою ཚུ, доданою після займенника чи іменника — та сама структурна риса, що й тибетська ཚོ, але з власним написанням, вживанням і вимовою в дзонг-кха.",
            "en": {
              "text": "The plural is formed with the particle ཚུ, added after a pronoun or noun — the same structural trait as Tibetan ཚོ, but with its own Dzongkha spelling, usage, and pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཨའ་ལོ་ཚུ",
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
                "ཨའ་ལོ་ཚུ་རྩེད་དོ་ཡོད།",
                "Діти граються."
              ],
              [
                "དེབ་ཚུ་ཅོག་ཊི་གུར་ཡོད།",
                "Книги на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (འདི/དེ) — A1",
        "titleEn": "Demonstratives (Di/Dé) — A1",
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
                "འདི་ང་གི་ཨིན།",
                "Це моє."
              ],
              [
                "རི་བོ་དེ་མཐོ་ཏོག་ཏོ་ཨིན།",
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
                "ག་ཅི",
                "що"
              ],
              [
                "ག་ཏེ",
                "де"
              ],
              [
                "ག་ནམ",
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
                "ཁྱོད་ཀྱི་མིང་ག་ཅི་ཨིན་ན?",
                "Як тебе звати?"
              ],
              [
                "ཁྱོད་ག་ཏེ་བཞུགས་དོ་ཡོད?",
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
            "text": "Зворотне значення (\"сам/себе\") виражається словом རང, доданим після займенника.",
            "en": {
              "text": "The reflexive meaning (\"self\") is expressed with the word རང, added after a pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ང་རང",
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
                "ང་རང་གིས་འབད་ཡི།",
                "Я зробив це сам."
              ],
              [
                "ཁོང་རང་མཐོང་ཡི།",
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
                "ང་ལུ་སྤུན་མོ་གཉིས་ཡོད།",
                "У мене дві сестри."
              ],
              [
                "མི་བཅུ་འོང་སོང༌།",
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
            "text": "У рахунку числівник зазвичай ставиться ПІСЛЯ іменника.",
            "en": {
              "text": "In counting, the numeral is usually placed AFTER the noun."
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
                "ང་ལུ་དེབ་ལྔ་ཡོད།",
                "У мене є п'ять книг."
              ],
              [
                "སློབ་དཔོན་གཉིས་འོང་སོང༌།",
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
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ནང (в)",
                "у домі"
              ],
              [
                "གུ (на)",
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
                "དེབ་ཅོག་ཊི་གུར་ཡོད།",
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
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ངེས་དེབ་ལྷག་དོ་ཡོད།",
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
                "ཨའི་ཟ་བཟོ་དོ་ཡོད།",
                "Мама готує їжу."
              ],
              [
                "སློབ་ཕྲུག་ཚུ་དེབ་ལྷག་དོ་ཡོད།",
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
                "འདི་འབདཝ་ད",
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
                "ང་དང་ཁྱོད་གྲོགས་པོ་ཨིན།",
                "Я і ти — друзі."
              ],
              [
                "འགྱོ་འདོད་ཡོད་འདི་འབདཝ་ད་དུས་ཚོད་མེད།",
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
                "ག་ཅི་འབད་ཟེར་བ་ཅིན",
                "тому що"
              ],
              [
                "-པ་ཅིན",
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
                "ང་དགའ་བ་ཨིན་ཁྱོད་འོང་བའི་སྐབས།",
                "Я радий, коли ти приходиш."
              ],
              [
                "དུས་ཚོད་ཡོད་སྐབས་ང་ཁ་པར་རྐྱབ་ནི་ཨིན།",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні частки (ཚུགས/ཆོག) — A2",
        "titleEn": "Modal Particles (Tshug/Chhog) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་རྐྱལ་ཚུགས།",
                "Я вмію плавати."
              ],
              [
                "འགྱོ་ཆོག་ག?",
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
                "ཁོང་རྫོང་ཁ་སླབ་ཚུགས།",
                "Він/вона вміє говорити дзонг-ха."
              ],
              [
                "ང་བཅས་རོགས་རམ་འབད་འདོད་ཡོད།",
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
                "མང་སུ",
                "багато"
              ],
              [
                "ཉུང་སུ",
                "мало"
              ],
              [
                "ག་ལ་བ",
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
                "ང་ལུ་དེབ་མང་སུ་ཡོད།",
                "У мене багато книг."
              ],
              [
                "ཆུ་ཉུང་སུ་བྱིན།",
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
                "ད་རིས་གཟའ་ཟླ་བ་ཨིན།",
                "Сьогодні понеділок."
              ],
              [
                "ང་གཟའ་ཉི་མར་ངལ་གསོ་འབད་དོ་ཡོད།",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-bhutanese-calendar",
        "title": "Місяці бутанського календаря — B1",
        "titleEn": "Months of the Bhutanese Calendar — B1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім григоріанських назв, для традиційних свят вживають бутанський місячний календар, а Новий рік (Лосар) відзначають за місячно-сонячним циклом, а не 1 січня.",
            "en": {
              "text": "Besides the Gregorian names, traditional festivals use the Bhutanese lunar calendar, and New Year (Losar) is celebrated by a lunisolar cycle, not on January 1st."
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
                "бутанський Новий рік (Лосар)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ལོ་གསར་ལེགས་སོ།",
                "З Новим роком!"
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
                "ཆུ་ཚོད་ག་ཏེ་རེ་ཨིན?",
                "Котра година?"
              ],
              [
                "ཆུ་ཚོད་གསུམ་ཨིན།",
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
                "ང་བཅས་ཆུ་ཚོད་དྲུག་པར་མཇལ་ནི་ཨིན།",
                "Зустрінемось о шостій."
              ],
              [
                "ད་ལྟོ་ཉིན་གུང་ཨིན།",
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
                "ཀུ་ཟུ་ཟང་པོ་ལ",
                "Привіт"
              ],
              [
                "བཀའ་དྲིན་ཆེ",
                "Дякую"
              ],
              [
                "ལོག་འཐུགས་ག",
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
                "ག་དེམ་ཅིག་ཡོད་ག?",
                "Як справи?"
              ],
              [
                "བཀའ་དྲིན་ཆེ་ལས།",
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
                "ཉིམ་ཤར་འདུག",
                "Сонячно."
              ],
              [
                "ཆརཔ་རྐྱབ་དོ་འདུག",
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
                "ད་རིས་གྲང་མོ་འདུག",
                "Сьогодні холодно."
              ],
              [
                "དྲོད་པོ་ཧ་ལས་པའི་འདུག",
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
                "не хвилюйся"
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
                "སེམས་ཁྲལ་མེད།",
                "Не хвилюйся."
              ],
              [
                "ད་ལྟོ་ང་སེམས་པ་བདེ་པོ་འདུག",
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
                "མགྱོགས་པར",
                "швидко"
              ],
              [
                "དལ་ལེང་ལེང",
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
                "ཁོང་མགྱོགས་པར་རྒྱུག་དོ་འདུག",
                "Він швидко бігає."
              ],
              [
                "དལ་ལེང་ལེང་སླབ།",
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
                "утворює прикметники з ознакою"
              ],
              [
                "-པ/-མ",
                "утворює назви діяча чол./жін."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཁོང་ནུས་ཅན་ཨིན།",
                "Він сильний."
              ],
              [
                "སློབ་ཕྲུག་ཚུ་སློབ་གྲྭ་ནང་ཡོད།",
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
                "ལག་དེབ་ཅོག་ཊི་གུར་ཡོད།",
                "Записник на столі."
              ],
              [
                "མེ་འཁོར་ལུ་ཞོན་ཡི།",
                "Приїхав на потязі."
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
                "སོ་ནམ",
                "весна"
              ],
              [
                "དབྱར་ཁ",
                "літо"
              ],
              [
                "སྟོན་ཁ",
                "осінь"
              ],
              [
                "དགུན་ཁ",
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
                "དབྱར་ཁར་དྲོད་པོ་ཨིན།",
                "Влітку тепло."
              ],
              [
                "ང་སྟོན་ཁར་དགའ་པོ་ཡོད།",
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
                "གོང་ཚད་ག་དེམ་ཅིག་ཨིན?",
                "Скільки коштує?"
              ],
              [
                "ངུལ་ཀྲམ་སྟོང་ཕྲག་གཅིག",
                "Тисяча нгултрумів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "དེབ་འདིའི་གོང་ཚད་ངུལ་ཀྲམ་བརྒྱ་གཉིས་ཨིན།",
                "Ця книга коштує двісті нгултрумів."
              ],
              [
                "ཧ་ལས་པའི་གོང་ཆེ།",
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
                "ང་བསམ་ན...",
                "Я думаю, що..."
              ],
              [
                "ང་གི་བསམ་ཚུལ་ལུ...",
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
                "ཁྱོད་ཡང་དག་ཨིན་པར་ང་བསམ་ཨིན།",
                "Я думаю, що ти правий."
              ],
              [
                "ང་གི་བསམ་ཚུལ་ལུ་འདི་བསམ་བློ་ལེགས་ཤོམ་ཅིག་ཨིན།",
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
                "ད་རིས / ནངས་པ / གནངས",
                "сьогодні / завтра / вчора"
              ],
              [
                "ད་ལྟོ / ཤུལ་ལས",
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
                "ནངས་པ་མཇལ་ནི་ཨིན།",
                "Побачимось завтра."
              ],
              [
                "ད་ལྟོ་ང་ལཱ་རྐྱབ་དོ་ཡོད།",
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
                "སུ་ཅིག",
                "хтось"
              ],
              [
                "ག་ཅི་ཅིག",
                "щось"
              ],
              [
                "སུ་ཡང་མིན་འདུག",
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
                "སུ་ཅིག་གིས་ང་ལུ་ཁ་པར་རྐྱབ་ཡི།",
                "Хтось мені подзвонив."
              ],
              [
                "ང་ག་ཅི་ཅིག་གོ་ཡི།",
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
                "ལེགས་ཤོམ་འདུག",
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
                "ཨ་ཙི, ཧ་ལས་པའི་མཛེས་པོ་འདུག",
                "Ой, як гарно!"
              ],
              [
                "ལེགས་ཤོམ་འདུག, གནས་ཚུལ་ལེགས་ཤོམ་ཨིན།",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-yo-du",
        "title": "Екзистенційна конструкція ཡོད/འདུག — A2",
        "titleEn": "Existential Yö/Du — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається ཡོད (я знаю особисто/у мене є) чи འདུག (я щойно бачу/сприймаю).",
            "en": {
              "text": "The existence of something is expressed with ཡོད (I personally know/have it) or འདུག (I just perceive it)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ང་ལུ་ཆུ་ཡོད།",
                "У мене є вода."
              ],
              [
                "ཆུ་འདུག",
                "Є вода (бачу)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "འདིར་མི་མང་སུ་འདུག",
                "Тут багато людей (бачу)."
              ],
              [
                "ང་ལུ་དུས་ཚོད་ཡོད།",
                "У мене є час."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-existential",
        "title": "Заперечна екзистенційна форма (མེད) — A2",
        "titleEn": "Negative Existential (Mé) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ངུལ་མེད།",
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
                "དཀའ་ངལ་ག་ནི་ཡང་མེད།",
                "Немає проблем."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-ཕྲུག/-ཆུང) — B1",
        "titleEn": "Diminutives (-Trug/-Chung) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཨའི (мама)",
                "ཨའི་ལགས",
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
                "ཁྱི་ཕྲུག་ཧ་ལས་པའི་མཛེས་པོ་འདུག",
                "Цуценя дуже миле."
              ],
              [
                "ང་གི་ཨའི་ལགས་ཧ་ལས་པའི་བཟང་པོ་ཨིན།",
                "Моя матусенька дуже добра."
              ]
            ]
          }
        ]
      },
      {
        "id": "addressing-titles-dzongkha",
        "title": "Звертання та титули — A2",
        "titleEn": "Titles & Forms of Address — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཨ་ཞེ",
                "пан/старший брат"
              ],
              [
                "ཨའི",
                "мама/пані (шанобливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཀུ་ཟུ་ཟང་པོ་ལ, ཨ་ཞེ།",
                "Вітаю, пане."
              ],
              [
                "ཨའི, འཐུགས་ཀ་མཛད།",
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
                "རི་མཐོ་རུང་བྱ་ལས་མཐོ་མེད།",
                "Хоч гора висока, вона не вища за птаха."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "དཀའ་ལས་ཁག་རུང་ང་བཅས་ཚུགས་ནི་ཨིན།",
                "Хоч важко, ми впораємось."
              ],
              [
                "སེམས་ཤུགས་ཆེ་བ་ཅིན་ཚུགས།",
                "З сильним духом можна все подолати."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-nepali-hindi-english",
        "title": "Запозичення з непальської, гінді та англійської — B1",
        "titleEn": "Nepali, Hindi & English Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від тибетської, у сучасну дзонг-ху надходять запозичення з непальської й гінді (через сусідство з Індією та Непалом) і з англійської (як другої офіційної мови освіти).",
            "en": {
              "text": "Unlike Tibetan, modern Dzongkha absorbs loanwords from Nepali and Hindi (through proximity to India and Nepal) and from English (as the second official language of education)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཁེར་ཊུན (з англ. \"cartoon\")",
                "мультфільм"
              ],
              [
                "སི་ཀུལ (з англ. \"school\")",
                "школа (розмовно)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཨའ་ལོ་ཚུ་ཁེར་ཊུན་བལྟ་དོ་ཡོད།",
                "Діти дивляться мультфільм."
              ],
              [
                "ང་སི་ཀུལ་ལུ་འགྱོ་དོ་ཡོད།",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-nominalizer",
        "title": "Підрядне речення через номіналізатор (མཁན) — B1",
        "titleEn": "Relative Clause via Nominalizer (Khen) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого слова \"який/що\" дзонг-кха перетворює саме дієслово на іменник за допомогою номіналізатора མཁན (той, хто...).",
            "en": {
              "text": "Instead of a separate word for \"who/which\", Dzongkha turns the verb itself into a noun with the nominalizer མཁན (the one who...)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "འོང་མཁན་མི",
                "людина, яка приходить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ལྷག་མཁན་ཨའ་ལོ་ཤེས་རབ་ཆེ་བ་འདུག",
                "Дитина, яка читає, розумна."
              ],
              [
                "བཟོ་མཁན་ཁྱིམ་སྦོམ་ཨིན།",
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
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཁྱིམ་སྦོམ",
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
                "ང་ཁྱིམ་སྦོམ་ཅིག་འདོད།",
                "Я хочу великий дім."
              ],
              [
                "ཨའ་ལོ་མཛེས་པོ་ཅིག་འདུག",
                "Гарна дитина тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Порівняння через \"...ལས\" — A2",
        "titleEn": "Comparison via \"...Lä\" (Than) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཁོང་ང་ལས་མཐོ་བ་ཨིན།",
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
                "ཁྱིམ་འདི་དེ་ལས་སྦོམ་ཨིན།",
                "Цей дім більший за той."
              ],
              [
                "ཁོང་ཆ་མཉམ་ལས་མཁས་པ་ཨིན།",
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
                "དང་པ",
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
                "འདི་ང་གི་དེབ་དང་པ་ཨིན།",
                "Це моя перша книга."
              ],
              [
                "ཁོང་གཉིས་པར་གནས་ལེན་འབད་ཡི།",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-marking-deep",
        "title": "Означеність об'єкта детально — B1",
        "titleEn": "Object Definiteness in Depth — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений або одухотворений прямий додаток часто отримує ту саму частку -ལུ, що й давальний, тоді як неозначений неодухотворений додаток лишається без позначки.",
            "en": {
              "text": "A definite or animate direct object often takes the same particle -ལུ as the dative, while an indefinite inanimate object stays unmarked."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ངེས་ཁྱི་ལུ་མཐོང་ཡི།",
                "Я побачив (того) собаку (одухотворений, з ལུ)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ངེས་ཁོང་ལུ་མཐོང་ཡི།",
                "Я побачив його/її."
              ],
              [
                "ངེས་དེབ་ལྷག་ཡི།",
                "Я прочитав книгу (неозначена, без ལུ)."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличне звертання (ལགས) — A2",
        "titleEn": "Vocative Address (Lag) — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ཨའི་ལགས!",
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
                "ཨའི་ལགས, འདིར་འོང༌!",
                "Мамо, іди сюди!"
              ],
              [
                "སློབ་དཔོན་ལགས, ང་ལུ་རོགས་རམ་གནང༌།",
                "Вчителю, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "roman-dzongkha-romanization",
        "title": "Офіційна романізація дзонг-ха — B1",
        "titleEn": "Official Roman Dzongkha Romanization — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Комісія розвитку дзонг-ха розробила офіційну систему романізації (Roman Dzongkha) для передачі мови латиницею — вона відрізняється від системи Вайлі, звичної для тибетської, власними правилами передачі голосних і тонів.",
            "en": {
              "text": "The Dzongkha Development Commission created an official romanization system (Roman Dzongkha) for writing the language in Latin script — it differs from the Wylie system used for Tibetan, with its own rules for rendering vowels and tones."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Wylie (тибетська): 'bras ljongs",
                "тибетська транслітерація"
              ],
              [
                "Roman Dzongkha: Druk Yul",
                "офіційна романізація дзонг-ха"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Druk Yul (Друк Юл)",
                "Бутан (\"Земля Громового Дракона\")"
              ],
              [
                "Roman Dzongkha yod.",
                "Існує офіційна романізація дзонг-ха."
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
        "id": "joyig-chhoyig-deep",
        "title": "Джойіг проти чхойіг — коли яке письмо вживати — B2",
        "titleEn": "Joyig vs Chhoyig — When to Use Which — B2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Формальний чхойіг (\"релігійне письмо\") зберігає повне етимологічне написання зі всіма історичними приголосними, тоді як розмовний джойіг (\"письмо мовлення\") спрощує слово до того, як воно реально звучить, — вибір залежить від контексту (релігійний текст проти повсякденного запису) і не є довільним стилістичним вибором.",
            "en": {
              "text": "Formal Chhoyig (\"religious writing\") preserves the full etymological spelling with all historical consonants, while colloquial Joyig (\"speech writing\") simplifies the word to how it actually sounds — the choice depends on context (a religious text vs. everyday writing) and isn't an arbitrary stylistic pick."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Чхойіг: повна форма з усіма історичними літерами",
                "релігійні/офіційні тексти"
              ],
              [
                "Джойіг: спрощена форма",
                "газети, повсякденне листування"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ཆོས་ཡིག་ནང་ཆོས་དེབ་བྲིས་ཡོད།",
                "Релігійна книга написана чхойіг."
              ],
              [
                "འབྲུ་ཡིག་ནང་ཤོག་ཁྲམ་བྲིས་ཡོད།",
                "Газету написано джойіг."
              ]
            ]
          }
        ]
      },
      {
        "id": "multilingual-bhutan-sharchopkha",
        "title": "Дзонг-ха — офіційна, але не найпоширеніша рідна мова — B1",
        "titleEn": "Dzongkha — Official, but Not the Most Common Mother Tongue — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча дзонг-ха є єдиною офіційною мовою Бутану, для більшості населення рідною є не вона, а шарчопкха (цанг-ла) чи інші мови сходу країни — дзонг-ха функціонує як мова уряду, освіти й національної єдності, подібно до того, як латина колись об'єднувала Європу.",
            "en": {
              "text": "Although Dzongkha is Bhutan's sole official language, most of the population's mother tongue is not Dzongkha but Sharchopkha (Tshangla) or other languages of the country's east — Dzongkha functions as the language of government, education, and national unity, similar to how Latin once unified Europe."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ཤར་ཕྱོགས་ཁ (Шарчопкха)",
                "рідна мова більшості населення сходу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "རྫོང་ཁ་སྐད་ཡིག་གཙོ་བོ་ཨིན།",
                "Дзонг-ха — головна офіційна мова."
              ],
              [
                "ཤར་ཕྱོགས་ལུ་ཤར་ཕྱོགས་ཁ་སླབ་དོ་ཡོད།",
                "На сході говорять шарчопкха."
              ]
            ]
          }
        ]
      },
      {
        "id": "shared-script-different-pronunciation",
        "title": "Спільне письмо, різна вимова від тибетської — B2",
        "titleEn": "Shared Script, Different Pronunciation from Tibetan — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дзонг-ха записується тим самим письмом уччен, що й тибетська, і має спільне походження, але фонетична реалізація літер розійшлася настільки, що ті самі написані слова звучать по-різному в дзонг-ха й у стандартній (лхаській) тибетській — писемна спорідненість не означає взаємної зрозумілості на слух.",
            "en": {
              "text": "Dzongkha is written with the same Ucchen script as Tibetan and shares a common origin, but the phonetic realization of the letters has diverged so much that the same written words sound different in Dzongkha versus standard (Lhasa) Tibetan — written kinship doesn't mean mutual intelligibility by ear."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "སྐུ་ཟུ་ཟང་པོ (написання спільне)",
                "вимова в дзонг-ха й тибетській різна"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "རྫོང་ཁ་དང་བོད་ཀྱི་སྐད་མི་གཅིག་པ།",
                "Дзонг-ха й тибетська звучать по-різному."
              ],
              [
                "ཡིག་གུ་གཅིག་ཨིན་རུང་ཁ་སྐད་མི་འདྲཝ།",
                "Письмо те саме, але вимова інша."
              ]
            ]
          }
        ]
      }
    ]
  }
];
