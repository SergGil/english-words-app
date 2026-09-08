// Vymova — data/grammar-data/grammar_dv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">ޒާތީ ގިނަވަންތަ</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Дівехі пишеться письмом тана справа наліво і має ввічливу форму звертання, подібно до багатьох сусідніх південноазійських мов.",
            "en": {
              "text": "Dhivehi is written in the Thaana script, right to left, and has a polite form of address, similar to many neighboring South Asian languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">އަހަރެން</span> (aharen)"
              ],
              [
                "ти",
                "<span dir=\"rtl\">ތިޔަ</span> (thiya)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">އޭނާ</span> (eynaa)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">އަހަރެމެން</span> (aharemen)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">ތިޔަބޭފުޅުން</span> (thiyabeyfulhun)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">އެމީހުން</span> (emeehun)"
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
        "id": "to-be-verb",
        "title": "Дієслово \"вəннə\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"бути\" (вэддже в теперішньому часі) ставиться в кінці речення, після присудка, і узгоджується з ввічливістю звертання.",
            "en": {
              "text": "The verb \"to be\" (vejje in the present) goes at the end of the sentence, after the predicate, and agrees with the politeness of address."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + вэддже",
            "rows": [
              [
                "Aharen",
                "muallimeh vejje.",
                "я вчитель"
              ],
              [
                "Eynaa",
                "duheh vejje.",
                "він/вона хворий(-а)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa dhaskatharaa vejje.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Vejje (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"нуй\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється суфіксом -nuvey (чи скорочено -nu-) в кінці дієслова, замість окремого заперечного слова перед ним.",
            "en": {
              "text": "Negation is formed with the suffix -nuvey (or shortened -nu-) at the end of the verb, rather than a separate negative word before it."
            }
          },
          {
            "type": "formula",
            "title": "дієслово + -nuvey",
            "rows": [
              [
                "Alugandu ihujje.",
                "Alugandu ihenu vey.",
                "Я знаю. → Я не знаю."
              ],
              [
                "Eynaa aee.",
                "Eynaa aanuvey.",
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
                "Aharennah ihenu vey.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with -Nuvey — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"-tha\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються часткою -tha, доданою в кінець дієслова замість звичайного стверджувального закінчення.",
            "en": {
              "text": "Yes/no questions are formed with the particle -tha, added at the end of the verb instead of the regular assertive ending."
            }
          },
          {
            "type": "formula",
            "title": "дієслово + -tha?",
            "rows": [
              [
                "Thiya duhtha?",
                "Ти хворий?",
                "питальна форма"
              ],
              [
                "Eynaa aitha?",
                "Він прийшов?",
                "питальна форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Thiya bprivey tha?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle -Tha — A1"
      },
      {
        "id": "involitive-volitive-overview",
        "title": "Дві форми дієслова: навмисна й ненавмисна дія — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів дівехі мають ДВІ окремі форми залежно від того, чи дія була навмисною (\"волітивна\") чи випадковою/поза контролем підмета (\"інволітивна\") — не окремий вид, а окреме дієслово з іншим коренем.",
            "en": {
              "text": "Many Dhivehi verbs have TWO separate forms depending on whether the action was intentional (\"volitive\") or accidental/beyond the subject's control (\"involitive\") — not a separate aspect, but a separate verb with a different root."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kandaalhaifi (розбив навмисно)",
                "kandaigen dhiyai (розбилося випадково)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fánka govvaalhaifi.",
                "Я навмисно розбив вентилятор."
              ]
            ]
          }
        ],
        "titleEn": "Two Verb Forms: Intentional vs. Accidental Action — A2"
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
        "id": "habitual-past",
        "title": "Звичайна дія в минулому — B1",
        "titleEn": "Habitual Past — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, повторювана дія в минулому виражається дієприслівниковою формою плюс допоміжне дієслово в минулому часі.",
            "en": {
              "text": "A habitual, repeated past action is expressed with a converb form plus the auxiliary verb in the past tense."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen roalhah kiyavamun hurihen.",
                "Я щодня читав (раніше)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa roalhah dhuvamun hurihen.",
                "Він/вона щодня бігав(-ла) (раніше)."
              ],
              [
                "Kudhin roalhah heylumun thibi.",
                "Діти щодня гралися (раніше)."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-tense",
        "title": "Теперішній час — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється основою дієслова з суфіксом -ey, доданим у кінці.",
            "en": {
              "text": "The present tense is formed with the verb stem plus the suffix -ey, added at the end."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen kiyavan ey.",
                "Я читаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa kanaa keyey.",
                "Він/вона їсть."
              ],
              [
                "Thiya faher lheyey.",
                "Ти пишеш."
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
            "text": "Минулий час утворюється основою з суфіксом -i чи -fi, доданим до кінця дієслова.",
            "en": {
              "text": "The past tense is formed with the stem plus the suffix -i or -fi, added at the end of the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen faher liyefin.",
                "Я написав."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa dhiyai.",
                "Він/вона пішов(-ла)."
              ],
              [
                "Thiya kaee.",
                "Ти поїв."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "titleEn": "Future Tense — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється основою з суфіксом -aane, доданим до кінця дієслова.",
            "en": {
              "text": "The future tense is formed with the stem plus the suffix -aane, added at the end of the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen aadhaane.",
                "Я прийду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa faher liyaane.",
                "Він/вона напише."
              ],
              [
                "Migandu vaahaka dhakkaane.",
                "Вони розкажуть історію."
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
            "text": "Тривала дія \"зараз\" виражається дієприслівниковою формою плюс допоміжне дієслово \"бути\".",
            "en": {
              "text": "The \"right now\" continuous is expressed with a converb form plus the auxiliary \"to be\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen kiyavamun huree.",
                "Я саме читаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa kaamun huree.",
                "Він/вона саме їсть."
              ],
              [
                "Kudhin heylumun thibi.",
                "Діти саме граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфект — B1",
        "titleEn": "Perfect Tense — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражає дію з актуальним результатом і утворюється дієприкметниковою формою з допоміжним \"бути\".",
            "en": {
              "text": "The perfect expresses an action with a present result, formed with a participle-like form plus the auxiliary \"to be\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen kaafin.",
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
                "Eynaa dhiyafin.",
                "Він/вона вже пішов(-ла)."
              ],
              [
                "Migandu faher liyefin.",
                "Вони вже написали."
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
            "text": "Наказова форма змінюється залежно від рівня ввічливості до особи, до якої звертаються.",
            "en": {
              "text": "The imperative form changes depending on the politeness level of the addressee."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Aa!",
                "Приходь! (фамільярно)"
              ],
              [
                "Vadaigenmey!",
                "Приходьте, будь ласка! (ввічливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kanaa kaa!",
                "Їж!"
              ],
              [
                "Dhoru fapavvavaa!",
                "Відчиніть двері, будь ласка!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення \"якщо\" вводиться суфіксом -nama на дієслові умовної частини.",
            "en": {
              "text": "A conditional \"if\" clause is introduced with the suffix -nama on the verb of the condition."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vaguthu vejjenama, aharen dhaanan.",
                "Якщо буде час, я піду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Feney vejjenama, gedhah vannan.",
                "Якщо піде дощ, я піду додому."
              ],
              [
                "Ihenama, dhannavaanan.",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "volitive-form-deep",
        "title": "Волітивна форма — навмисна дія — B1",
        "titleEn": "Volitive Form — Intentional Action — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Волітивна форма дієслова вживається, коли підмет свідомо й навмисно виконав дію, — саме ця форма звичайно вважається \"базовою\" в словниках.",
            "en": {
              "text": "The volitive verb form is used when the subject consciously and deliberately performed the action — this is normally the \"basic\" form listed in dictionaries."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen faanka govvaalhaifin.",
                "Я навмисно розбив вентилятор."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa dhoru bandhaalhaifi.",
                "Він навмисно зачинив двері."
              ],
              [
                "Migandu vaahaka fashaifi.",
                "Вони навмисно розповіли історію."
              ]
            ]
          }
        ]
      },
      {
        "id": "involitive-form-deep",
        "title": "Інволітивна форма — ненавмисна дія — B1",
        "titleEn": "Involitive Form — Accidental Action — B1",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Інволітивна форма (часто з іншим коренем чи додатковим елементом gen-) вживається, коли щось сталося саме собою чи поза контролем підмета.",
            "en": {
              "text": "The involitive form (often with a different root or an extra gen- element) is used when something happened on its own or beyond the subject's control."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Faanka govigen dhiyai.",
                "Вентилятор розбився (сам, випадково)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dhoru bandhaigen dhiyai.",
                "Двері зачинилися самі (випадково)."
              ],
              [
                "Gaathu kadigen dhiyai.",
                "Скло розбилося (випадково)."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні слова (jehey/heeves) — A2",
        "titleEn": "Modal Words (Jehey/Heeves) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Aharen dhaan jehey.",
                "Мені треба йти."
              ],
              [
                "Aharen nuum kiyan heyy.",
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
                "Thiya kiyavan jehey.",
                "Тобі треба вчитися."
              ],
              [
                "Aharen therikan vaan beynun.",
                "Я хочу допомогти."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Зворотні дієслова — B1",
        "titleEn": "Reflexive Verbs — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"себе\" виражається словом ehen (\"сам\") плюс присвійний займенник.",
            "en": {
              "text": "The reflexive meaning \"self\" is expressed with the word ehen (\"self\") plus a possessive pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen aharenge nafsu balan.",
                "Я дивлюся на себе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa eynaage nafsah dheravejje.",
                "Він поранив себе."
              ],
              [
                "Migandu dheegen goas kuranee.",
                "Вони роблять це самі."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-honorific-agreement",
        "title": "Узгодження дієслова з рівнем поваги — B1",
        "titleEn": "Verb Agreement by Honorific Level — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово узгоджується не лише з особою, а й із рівнем поваги до підмета — та сама подія отримує різне закінчення дієслова залежно від того, наскільки шанобливо про неї говорять.",
            "en": {
              "text": "The verb agrees not only with person but also with the level of respect toward the subject — the same event takes a different verb ending depending on how respectfully it's being spoken about."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Eynaa kaee. (звичайно)",
                "Він поїв."
              ],
              [
                "Emeehun kegen vaadhaifi. (шанобливо)",
                "Вони (шановані) поїли."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Raees vaahaka dhekkevi.",
                "Президент виступив (шанобливо)."
              ],
              [
                "Buden faher liyevi.",
                "Старший написав (шанобливо)."
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
        "id": "dative-case",
        "title": "Давальний відмінок (-ah) — A2",
        "titleEn": "Dative Case (-Ah) — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (-ah) позначає адресата дії й вживається значно частіше, ніж в українській, — навіть у деяких конструкціях, де інші мови вживають знахідний.",
            "en": {
              "text": "The dative case (-ah) marks the recipient of an action and is used far more often than in Ukrainian — even in some constructions where other languages use the accusative."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Aliah",
                "Алі (давальний)"
              ],
              [
                "gedhah",
                "до дому/дому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aharen fothi Aliah dhinihen.",
                "Я дав книгу Алі."
              ],
              [
                "Eynaa gedhah dhiyai.",
                "Він пішов додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Родовий відмінок (-ge) — A2",
        "titleEn": "Genitive Case (-Ge) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-ge) виражає належність і ставиться після власника, перед означуваним іменником.",
            "en": {
              "text": "The genitive case (-ge) expresses possession and is placed after the possessor, before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aliage foi",
                "книга Алі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aharenge gey.",
                "Мій дім."
              ],
              [
                "Eynaage kudakudhin.",
                "Його/її діти."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-objective-case",
        "title": "Об'єктний відмінок — A2",
        "titleEn": "Objective (Accusative) Case — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений прямий додаток часто виражається тим самим давальним закінченням -ah, а неозначений залишається без позначки.",
            "en": {
              "text": "A definite direct object is often expressed with the same dative ending -ah, while an indefinite one stays unmarked."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen fothah balaifin.",
                "Я подивився на (ту) книгу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aliah balaifin.",
                "Я подивився на Алі."
              ],
              [
                "Aharen fothi kiyavaifin.",
                "Я прочитав (якусь) книгу."
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
            "text": "Дівехі взагалі не має граматичного роду — той самий займенник eynaa означає \"він\" і \"вона\", і жоден прикметник не змінюється за родом.",
            "en": {
              "text": "Dhivehi has no grammatical gender at all — the same pronoun eynaa means both \"he\" and \"she\", and no adjective changes for gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "eynaa lassaa",
                "він/вона гарний(-а) (одна форма lassaa)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa rangalhu.",
                "Він/вона хороший(-а)."
              ],
              [
                "Eynaage dhari kuda.",
                "Його/її дитина маленька."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-suffix-eh",
        "title": "Неозначеність через суфікс -eh — A2",
        "titleEn": "Indefiniteness via the Suffix -Eh — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначеність (\"якийсь\") виражається суфіксом -eh на кінці іменника, тоді як означений іменник залишається без нього.",
            "en": {
              "text": "Indefiniteness (\"a/some\") is expressed with the suffix -eh at the end of the noun, while a definite noun stays without it."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "fothi (книга, означ.)",
                "fotheh (якась книга)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Meeheh annanee.",
                "Хтось (якийсь чоловік) приходить."
              ],
              [
                "Fotheh dhinihen.",
                "Я дав (якусь) книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Множина (-thah/-un) — A2",
        "titleEn": "Plural Formation (-Thah/-Un) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксами -thah (для неживого) чи -un (для людей).",
            "en": {
              "text": "The plural is formed with the suffixes -thah (for inanimate nouns) or -un (for people)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "fothi (книга)",
                "foththah",
                "книги"
              ],
              [
                "meehaa (людина)",
                "meehun",
                "люди"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fothththah mezu miihagai huri.",
                "Книги на столі."
              ],
              [
                "Meehun ithuru vejje.",
                "Прийшло багато людей."
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
            "text": "Дівехі вживає післяйменники (не прийменники), приєднані до іменника у відмінковій формі: matheega (на), thereygai (усередині).",
            "en": {
              "text": "Dhivehi uses postpositions (not prepositions), attached to the noun in its case form: matheega (on), thereygai (inside)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mezu matheega",
                "на столі"
              ],
              [
                "gey thereygai",
                "усередині дому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fothi mezu matheega huri.",
                "Книга на столі."
              ],
              [
                "Kudhin gey thereygai heylumun thibi.",
                "Діти граються всередині дому."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (mee/ei/e) — A1",
        "titleEn": "Demonstratives (Mee/Ei/E) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mee fothi",
                "ця книга"
              ],
              [
                "e fothi",
                "та книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mee aharenge.",
                "Це моє."
              ],
              [
                "E kolhu ufuni.",
                "Та гора висока."
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
                "aharenge",
                "мій"
              ],
              [
                "thiyage",
                "твій"
              ],
              [
                "eynaage",
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
                "Aharenge gey bodu.",
                "Мій дім великий."
              ],
              [
                "Eynaage fothi mezu miihagai huri.",
                "Його/її книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-construction",
        "title": "Підрядне означальне речення — B1",
        "titleEn": "Relative Clause Construction — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого слова \"який/що\" дівехі перетворює дієслово на дієприкметникову форму перед означуваним іменником.",
            "en": {
              "text": "Instead of a separate word for \"who/which\", Dhivehi turns the verb into a participle-like form before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "aee meehaa",
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
                "Kiyavaa fothi rangalhu.",
                "Книга, яку я читаю, гарна."
              ],
              [
                "Ulhey ge boduvaru.",
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
                "kaakah",
                "хто"
              ],
              [
                "kihineh",
                "що"
              ],
              [
                "kobaa",
                "де"
              ],
              [
                "kon irakun",
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
                "Thiya namakee kihinehtha?",
                "Як тебе звати?"
              ],
              [
                "Thiya ulheny kobaatha?",
                "Де ти живеш?"
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
                "eke",
                "1"
              ],
              [
                "dhe",
                "2"
              ],
              [
                "thin",
                "3"
              ],
              [
                "dhihaeh",
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
                "Aharenge dhe kokko hinnaanee.",
                "У мене дві сестри."
              ],
              [
                "Dhihaeh meehun aee.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-arabic-formal",
        "title": "Арабські числівники у формальному стилі — B1",
        "titleEn": "Arabic Numerals in Formal Style — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім питомих числівників, у релігійному й офіційному стилі часто вживають запозичені з арабської форми числівників, особливо для великих чисел і дат.",
            "en": {
              "text": "Besides the native numerals, borrowed Arabic-derived numeral forms are often used in religious and formal style, especially for large numbers and dates."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "sittain (60, з араб.)",
                "формальний стиль"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Alfu meehun.",
                "Тисяча людей (формально)."
              ],
              [
                "Miaharu sannun 1445.",
                "Цей рік 1445 (ісламський календар)."
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
                "Aharen fothi kiyavan.",
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
                "Ammaa kaanaa hadhanee.",
                "Мама готує їжу."
              ],
              [
                "Kudhin fothi kiyavanee.",
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
                "aai",
                "і, та"
              ],
              [
                "namaves",
                "але"
              ],
              [
                "noonee",
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
                "Aharen aai thiya gulhun.",
                "Я і ти — друзі."
              ],
              [
                "Dhaan beynun, namaves vaguthu nei.",
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
                "hinaa",
                "тому що"
              ],
              [
                "nama",
                "якщо"
              ],
              [
                "iru",
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
                "Aharen kamu nudhey vejje, thiya annaathee.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Vaguthu vejje iru, fonuvaanan.",
                "Коли буду вільний, подзвоню."
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
                "gina",
                "багато"
              ],
              [
                "madu",
                "мало"
              ],
              [
                "kihaa ehcheh",
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
                "Aharenge gina fothi hunnaanee.",
                "У мене багато книг."
              ],
              [
                "Madu feru dhee.",
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
                "hoama",
                "понеділок"
              ],
              [
                "honihiru",
                "субота"
              ],
              [
                "aadhitha",
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
                "Miadhu hoama.",
                "Сьогодні понеділок."
              ],
              [
                "Aharen aadhitha huttalan.",
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
                "January",
                "січень"
              ],
              [
                "May",
                "травень"
              ],
              [
                "December",
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
                "Aharenge ganday Mei mahu.",
                "Мій день народження в травні."
              ],
              [
                "Miadhu January dhihaeh.",
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
                "Gadin balaany kihaairakutha?",
                "Котра година?"
              ],
              [
                "Thineh gadi.",
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
                "Haeh gadi ah dhimaavaanan.",
                "Зустрінемось о шостій."
              ],
              [
                "Miadhu madhuvaru.",
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
                "Assalaamu alaikum",
                "Мир вам (привітання)"
              ],
              [
                "Shukuriyaa",
                "Дякую"
              ],
              [
                "Fahun dhimaavaanan",
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
                "Haalu kihineh?",
                "Як справи?"
              ],
              [
                "Varah bodah shukuriyaa.",
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
                "Iru araa.",
                "Сонячно."
              ],
              [
                "Vehey.",
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
                "Miadhu theyo.",
                "Сьогодні прохолодно."
              ],
              [
                "Varah husvaru.",
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
                "furaana rangalhu",
                "хороший настрій (буквально: гарна душа)"
              ],
              [
                "hithah araa",
                "спадає на думку"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Miadhu furaana rangalhu.",
                "Сьогодні у мене хороший настрій."
              ],
              [
                "Hithah araifi ehcheh.",
                "Мені щось спало на думку."
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
                "ithurah avahah",
                "швидко"
              ],
              [
                "hihaa madu koh",
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
                "Eynaa avahah duvanee.",
                "Він швидко бігає."
              ],
              [
                "Hihaa madu koh vaahaka dhakka.",
                "Говори повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-ablative-case",
        "title": "Орудно-похідний відмінок (-in) — B1",
        "titleEn": "Instrumental-Ablative Case (-In) — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -in позначає і знаряддя дії (\"чим\"), і джерело/вихідну точку (\"звідки\") — одна форма на два споріднені значення.",
            "en": {
              "text": "The suffix -in marks both the tool of an action (\"with what\") and the source/starting point (\"from where\") — one form for two related meanings."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kalhamun (ручкою)",
                "орудний"
              ],
              [
                "Maaleyin (з Мале)",
                "похідний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aharen kalhamun liyan.",
                "Я пишу ручкою."
              ],
              [
                "Eynaa Maaleyin annanee.",
                "Він приїжджає з Мале."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-none",
        "title": "Прикметники не змінюються — A2",
        "titleEn": "Invariable Adjectives — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники не узгоджуються ні з родом, ні з числом, ні з відмінком іменника — та сама форма стоїть перед будь-яким іменником.",
            "en": {
              "text": "Adjectives don't agree with the noun's gender, number, or case — the same form goes before any noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "bodu gey / bodu geythah",
                "великий дім / великі доми (та сама форма bodu)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bodu meehun aee.",
                "Прийшли важливі люди."
              ],
              [
                "Kuda kudhin heylumun thibi.",
                "Маленькі діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-marker-eii",
        "title": "Топікова частка \"eii\" — B1",
        "titleEn": "Topic Marker \"Eii\" — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка eii, додана до слова, виносить його як тему речення — \"а от щодо...\", і часто з'являється на підметі звичайного речення.",
            "en": {
              "text": "The particle eii, added to a word, marks it as the sentence's topic — \"as for...\", and often appears on the subject of a regular sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aharen eii kiyavaifin.",
                "А от я — прочитав."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Thiya eii kihineh vaany?",
                "А ти чого хочеш?"
              ],
              [
                "Gey eii bodu.",
                "А от дім — великий."
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
                "-kan",
                "утворює абстрактні іменники (huri→huri kan, вільний→свобода)"
              ],
              [
                "-therin",
                "утворює назви професій (dhauru→dhaurutherin, робота→робітники)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Huri kan varah muhinmu.",
                "Свобода дуже важлива."
              ],
              [
                "Dhaurutherin varah bali.",
                "Робітники дуже старанні."
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
                "aiy (рука) + gadi (годинник)",
                "aiygadi (наручний годинник)"
              ],
              [
                "gey (дім) + dhoru (двері)",
                "geydhoru (вхідні двері)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aharenge aiygadi akee ahu.",
                "Мій наручний годинник новий."
              ],
              [
                "Geydhoru bandhaifi.",
                "Вхідні двері зачинені."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року (сезони мусону) — A2",
        "titleEn": "Seasons (Monsoon Seasons) — A2",
        "emoji": "🌧️",
        "sections": [
          {
            "type": "intro",
            "text": "На Мальдівах розрізняють переважно два сезони, пов'язані з мусонними вітрами (hulhangu — південно-західний, iruvai — північно-східний), а не чотири класичні пори року.",
            "en": {
              "text": "The Maldives mainly distinguishes two seasons tied to monsoon winds (hulhangu — southwest, iruvai — northeast), rather than four classic seasons."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hulhangu",
                "мусонний сезон (дощовий)"
              ],
              [
                "iruvai",
                "сухий сезон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hulhangu mahu vehey.",
                "У мусонний сезон іде дощ."
              ],
              [
                "Iruvai mahu husvaru.",
                "У сухий сезон жарко."
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
                "Agu kihaavaruthaa?",
                "Скільки коштує?"
              ],
              [
                "Ehaas rufiyaa.",
                "Тисяча руфій."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mee fothige agu satheys rufiyaa.",
                "Ця книга коштує двісті руфій."
              ],
              [
                "Varah agubodu.",
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
                "Aharen hiivanee...",
                "Я думаю, що..."
              ],
              [
                "Aharenge fikurugaa...",
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
                "Aharen hiivanee thiya rangalhu kamah.",
                "Я думаю, що ти правий."
              ],
              [
                "Aharenge fikurugaa mee rangalhu suvaaleh.",
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
                "miadhu / madu / iyye",
                "сьогодні / завтра / вчора"
              ],
              [
                "mihaaru / fahun",
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
                "Madu dhimaavaanan.",
                "Побачимось завтра."
              ],
              [
                "Mihaaru busy vejje.",
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
                "meeheh",
                "хтось"
              ],
              [
                "ehcheh",
                "щось"
              ],
              [
                "kavesheh nuve",
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
                "Meeheh fonuvaifi.",
                "Хтось мені подзвонив."
              ],
              [
                "Aharen ehcheh ahaifin.",
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
                "Aiyoo!",
                "Ой!"
              ],
              [
                "Varah furihama!",
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
                "Aiyoo, varah rangalhu!",
                "Ой, як гарно!"
              ],
              [
                "Varah furihama khabaru!",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція \"є/немає\" (huri/nei) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Huri/Nei) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Feru huri.",
                "Є вода."
              ],
              [
                "Vaguthu nei.",
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
                "Meehun gina hunnaanee.",
                "Тут багато людей."
              ],
              [
                "Fangadi nei.",
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
            "text": "Пестливість часто виражається окремим словом kuda (маленький) перед іменником, а не суфіксом.",
            "en": {
              "text": "Affection/diminutive is often expressed with the separate word kuda (small) before the noun, rather than a suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kuda dhari",
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
                "Kuda dhari nidhaa fi.",
                "Малятко спить."
              ],
              [
                "Aharenge maama varah rangalhu.",
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
                "Bappa",
                "пан (шанобливо)"
              ],
              [
                "Dhaitha",
                "пані (шанобливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Assalaamu alaikum, Bappa.",
                "Вітаю, пане."
              ],
              [
                "Maafukurey, Dhaitha.",
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
                "Boa masverin dhathuru nukuraane.",
                "Досвідчений рибалка не блукає (мудрість приходить з досвідом)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hiyaa nukurey ashi kuran.",
                "Не варто квапитися без роздумів."
              ],
              [
                "Kula dhathuru maruvvi nudhaane.",
                "Довгу подорож не подолати без відпочинку."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-arabic-persian",
        "title": "Запозичення з арабської та перської — B1",
        "titleEn": "Arabic & Persian Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Релігійна й формальна лексика значною мірою запозичена з арабської через іслам, а частина адміністративної та поетичної лексики історично прийшла з перської.",
            "en": {
              "text": "Religious and formal vocabulary is largely borrowed from Arabic via Islam, while some administrative and poetic vocabulary historically came from Persian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kithaabu (з араб. \"kitab\")",
                "книга (формально)"
              ],
              [
                "dhunya (з араб.)",
                "світ"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kithaabu kiyavan varah beynun.",
                "Мені дуже подобається читати книги (формально)."
              ],
              [
                "Mi dhunyaa varah furihama.",
                "Цей світ дуже прекрасний."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-english-modern",
        "title": "Сучасні запозичення з англійської — B1",
        "titleEn": "Modern English Loanwords — B1",
        "emoji": "💻",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "computer",
                "комп'ютер"
              ],
              [
                "television",
                "телевізор"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aharenge computer kharaabu vejje.",
                "Мій комп'ютер зламався."
              ],
              [
                "Television balan varah beynun.",
                "Мені дуже подобається дивитися телевізор."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Прикметник перед іменником — A1",
        "titleEn": "Adjective Before the Noun — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником і не змінюється за родом, числом чи відмінком.",
            "en": {
              "text": "The adjective always precedes the noun and doesn't change for gender, number, or case."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "bodu gey",
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
                "Bodu gey beynun.",
                "Я хочу великий дім."
              ],
              [
                "Kuda dhari nidhaafi.",
                "Маленька дитина спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (vure/hama) — A2",
        "titleEn": "Comparative & Superlative (Vure/Hama) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння \"більше ніж\" виражається словом vure після другого об'єкта порівняння, а не окремою формою прикметника.",
            "en": {
              "text": "The comparison \"more than\" is expressed with the word vure after the second object of comparison, rather than a separate adjective form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mi gey e gey vure bodu.",
                "Цей дім більший за той."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eynaa aharen vure dhigu.",
                "Він вищий за мене."
              ],
              [
                "Emeehun hama tha ithuru buddhiveri.",
                "Він найрозумніший за всіх."
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
                "fahamu vana",
                "перший"
              ],
              [
                "dhevana",
                "другий"
              ],
              [
                "thinvana",
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
                "Mee aharenge fahamu vana fothi.",
                "Це моя перша книга."
              ],
              [
                "Eynaa dhevana thanugai.",
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
                "Maama!",
                "Мамо!"
              ],
              [
                "Ali, mihaaraa vareh!",
                "Алі, іди сюди!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Maama, mihaaraa vareh!",
                "Мамо, іди сюди!"
              ],
              [
                "Bappa, therikan vaan.",
                "Пане, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "thaana-script-arabic-origin",
        "title": "Абетка тана — з арабських цифр — B1",
        "titleEn": "The Thaana Script — Derived from Arabic Numerals — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Письмо тана, яким записується дівехі, — унікальне: перші дев'ять літер походять із форм арабо-індійських цифр 1-9, а решта — з місцевих і арабських символів, письмо йде справа наліво.",
            "en": {
              "text": "The Thaana script used to write Dhivehi is unique: its first nine letters descend from the shapes of Arabic-Indic digits 1-9, while the rest come from local and Arabic symbols; it's written right to left."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ހ (перша літера, з цифри \"1\")",
                "приголосний h"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dhivehi bahun liyanee thaana ga.",
                "Дівехі пишуть письмом тана."
              ],
              [
                "Thaana kiyavan dhaskuraany.",
                "Читати тана вчаться."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Ввічливе звертання — A2",
        "titleEn": "Polite Address — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"ти\" (thiya) вживається переважно до молодших чи рівних, а до старших і незнайомих зазвичай звертаються за іменем плюс титул, уникаючи прямого займенника.",
            "en": {
              "text": "The pronoun \"you\" (thiya) is used mostly toward younger or equal people, while elders and strangers are usually addressed by name plus a title, avoiding the direct pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ali beynun tha? (замість \"ти хочеш\")",
                "Алі хоче?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dhaitha kihineh tha?",
                "Як пані?"
              ],
              [
                "Bappa vareytha?",
                "Чи піде пан?"
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-derivation-causative",
        "title": "Каузативний суфікс -ov/-uv — B1",
        "titleEn": "Causative Suffix -Ov/-Uv — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний стан (\"змусити зробити\") утворюється суфіксом, доданим до основи дієслова.",
            "en": {
              "text": "The causative voice (\"to make someone do\") is formed with a suffix added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kaa (їсти)",
                "kevvaifi",
                "нагодував (змусив їсти)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ammaa dharin kevvaifi.",
                "Мама нагодувала дітей."
              ],
              [
                "Ustaadhu kudhinnah kiyavaidhinihen.",
                "Вчитель навчив дітей читати."
              ]
            ]
          }
        ]
      },
      {
        "id": "clause-chaining-converb",
        "title": "Ланцюжки дієприслівникових форм — B2",
        "titleEn": "Converb Clause Chaining — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У розповіді кілька дієприслівникових форм (\"зробивши... зробивши...\") нанизуються підряд, і лише останнє дієслово в реченні несе повну часову форму.",
            "en": {
              "text": "In a narrative, several converb forms (\"having done... having done...\") are strung one after another, with only the final verb in the sentence carrying a full tense form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ashaigen kaigen dhiyai.",
                "Він встав, поїв і пішов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fothi kiyavaigen nidhi.",
                "Вона прочитала книгу і заснула."
              ],
              [
                "Vithi cleaner koh ninmaifi.",
                "Він прибрав кімнату і закінчив."
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
        "id": "involitive-lexical-irregularity",
        "title": "Нерегулярність пар навмисної/ненавмисної дії — B2",
        "titleEn": "Irregularity of Volitive/Involitive Pairs — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Пари волітивних і інволітивних форм не утворюються за одним передбачуваним правилом — кожна пара має власний, часто унікальний спосіб зміни кореня, тому їх слід заучувати як окремі лексичні одиниці, а не як регулярну граматичну категорію.",
            "en": {
              "text": "Volitive/involitive pairs aren't formed by one predictable rule — each pair has its own, often unique way of altering the root, so they must be memorized as separate lexical items rather than a regular grammatical category."
            }
          },
          {
            "type": "table",
            "title": "Приклад різних моделей",
            "rows": [
              [
                "kandaalhaifi / kandaigen dhiyai",
                "розбив / розбилося (одна модель)"
              ],
              [
                "liyefi / liyevijje",
                "написав / було написано (інша модель)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bali therikan vejje.",
                "Хтось (мимоволі) поранився."
              ],
              [
                "Fothi kadaalhaifi.",
                "Він навмисно порвав книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "thaana-numeral-derived-letters",
        "title": "Дев'ять перших літер тана — з арабо-індійських цифр — B1",
        "titleEn": "The First Nine Thaana Letters — From Arabic-Indic Digits — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже всіх писемностей світу, перші дев'ять приголосних тана буквально є видозміненими формами арабо-індійських цифр 1-9 — унікальний, добре задокументований факт походження абетки XVI-XVIII ст.",
            "en": {
              "text": "Unlike almost every writing system in the world, the first nine Thaana consonants are literally modified shapes of the Arabic-Indic digits 1-9 — a unique, well-documented fact about the script's 16th-18th century origin."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ހ (h) ← цифра \"1\"",
                "перша літера тана"
              ],
              [
                "ށ (sh) ← цифра \"2\"",
                "друга літера тана"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Thaana bahuruvun 9 aki adhadhu dhaairaage.",
                "Дев'ять літер тана походять від цифр."
              ],
              [
                "Mi ee dhunyaage ekani bas.",
                "Це єдина така мова у світі."
              ]
            ]
          }
        ]
      },
      {
        "id": "small-language-large-loanword-influence",
        "title": "Невелика мова з великим шаром запозичень — B1",
        "titleEn": "A Small Language With a Large Loanword Layer — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Дівехі, якою розмовляють лише кілька сотень тисяч людей, увібрала слова з арабської, перської, гінді, тамільської, португальської й англійської через торговельні шляхи Індійського океану — надзвичайно багатошарова лексика як для такої маленької мовної спільноти.",
            "en": {
              "text": "Dhivehi, spoken by only a few hundred thousand people, has absorbed words from Arabic, Persian, Hindi, Tamil, Portuguese, and English through Indian Ocean trade routes — an unusually layered vocabulary for such a small language community."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "lansaru (з португ. \"lanceiro\", спис)",
                "рідкісне португальське запозичення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dhivehi bahuga varah bas ithuru.",
                "У дівехі багато запозичених слів."
              ],
              [
                "Mi bas dhaskureveny gina kudhinnah.",
                "Цю мову вивчають небагато дітей."
              ]
            ]
          }
        ]
      }
    ]
  }
];
