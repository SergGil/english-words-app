// Vymova — data/grammar-data/grammar_co.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomi Persunali — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Корсиканська найближче споріднена з тосканським діалектом Італії, а не з французькою.",
            "en": {
              "text": "Corsican is most closely related to the Tuscan dialect of Italy, not to French."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "eiu"
              ],
              [
                "ти",
                "tù"
              ],
              [
                "він / вона",
                "ellu / ella"
              ],
              [
                "ми",
                "noi"
              ],
              [
                "ви",
                "voi"
              ],
              [
                "вони (ч./ж.)",
                "elli / elle"
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
        "id": "to-be-esse",
        "title": "Дієслово \"esse\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської чи каталанської (ser/estar), корисиканська має одне дієслово \"бути\" — esse — для всіх значень, як в італійській.",
            "en": {
              "text": "Unlike Spanish or Catalan (ser/estar), Corsican has one \"to be\" verb — esse — for every meaning, like in Italian."
            }
          },
          {
            "type": "formula",
            "title": "esse — теперішній",
            "rows": [
              [
                "Eiu",
                "sò maestru.",
                "Я вчитель."
              ],
              [
                "Ellu",
                "hè stancu.",
                "Він втомлений."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ella hè medica.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Esse (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ùn...micca\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення часто обгортає дієслово: частка ùn ставиться перед ним, а micca — після, хоча в короткому запереченні досить самого ùn.",
            "en": {
              "text": "Negation often wraps around the verb: the particle ùn goes before it, and micca after it, though ùn alone is enough for a short negation."
            }
          },
          {
            "type": "formula",
            "title": "ùn + дієслово + micca",
            "rows": [
              [
                "Sò cuntentu.",
                "Ùn sò micca cuntentu.",
                "Я задоволений. → Я не задоволений."
              ],
              [
                "Hè vinutu.",
                "Ùn hè micca vinutu.",
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
                "Ùn capiscu micca.",
                "Я не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ùn...Micca — A1"
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
                "Sì stancu.",
                "Sì stancu?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Hè vinutu.",
                "Hè vinutu?",
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
                "Hai fame?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Rising Intonation — A1"
      },
      {
        "id": "consonant-mutation-overview",
        "title": "Мутація приголосних після слів, що закінчуються на голосну — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "У живому мовленні початковий приголосний слова (b, d, g тощо) систематично \"пом'якшується\" (переходить у v, dh, gh), якщо попереднє слово закінчується на голосну, — риса, відсутня в стандартній італійській чи французькій.",
            "en": {
              "text": "In connected speech, a word's initial consonant (b, d, g, etc.) is systematically \"softened\" (shifting to v, dh, gh) if the preceding word ends in a vowel — a trait absent from standard Italian or French."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "casa bella",
                "гарний дім (без мутації, casa+bella не викликає)"
              ],
              [
                "hè vinutu (від vinutu, з b→v ніде — приклад пом'якшення d/g деінде)",
                "загальна логіка мутації"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A ghjatta hè nera.",
                "Кіт чорний (мутація g→gh після a)."
              ]
            ]
          }
        ],
        "titleEn": "Consonant Mutation After Vowel-Final Words — A2"
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
        "title": "Теперішній час — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, за трьома дієвідмінами (-à, -e, -ì).",
            "en": {
              "text": "The present tense is formed with personal endings added to the verb stem, across three conjugation classes (-à, -e, -ì)."
            }
          },
          {
            "type": "formula",
            "title": "\"parlà\" (говорити) — теперішній",
            "rows": [
              [
                "eiu",
                "parlu",
                "я говорю"
              ],
              [
                "tù",
                "parli",
                "ти говориш"
              ],
              [
                "ellu",
                "parla",
                "він говорить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Noi manghjemu inseme.",
                "Ми їмо разом."
              ],
              [
                "Elli travaglianu assai.",
                "Вони багато працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect-past",
        "title": "Минулий незавершений час — A2",
        "titleEn": "Imperfect Past — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий незавершений час виражає тривалу чи звичну дію в минулому й утворюється закінченнями -àva/-ìa, доданими до основи.",
            "en": {
              "text": "The imperfect past expresses an ongoing or habitual past action, formed with the endings -àva/-ìa added to the stem."
            }
          },
          {
            "type": "formula",
            "title": "\"parlà\" — незавершений минулий",
            "rows": [
              [
                "eiu",
                "parlàva",
                "я говорив (тривало)"
              ],
              [
                "tù",
                "parlàvi",
                "ти говорив"
              ],
              [
                "ellu",
                "parlàva",
                "він говорив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quandu era chjucu ghjucava in strada.",
                "У дитинстві я гуляв на вулиці."
              ],
              [
                "Manghjàvamu sempre inseme.",
                "Ми завжди їли разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past-synthetic",
        "title": "Синтетичний минулий доконаний (passatu remotu) — B1",
        "titleEn": "Synthetic Simple Past (Passatu Remotu) — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від каталанської, де синтетичний минулий вийшов з ужитку, у корсиканській passatu remotu ще активно вживається в мовленні для завершеної, віддаленої минулої дії.",
            "en": {
              "text": "Unlike Catalan, where the synthetic simple past has fallen out of use, in Corsican the passatu remotu is still actively used in speech for a completed, distant past action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Parlò",
                "він/вона сказав(-ла) (одноразово, минуле)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nascì in Aiacciu.",
                "Він народився в Аяччо."
              ],
              [
                "Vinsenu a guerra.",
                "Вони виграли війну."
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
            "text": "Майбутній час утворюється закінченнями, доданими прямо до інфінітива дієслова.",
            "en": {
              "text": "The future tense is formed with endings added directly to the verb's infinitive."
            }
          },
          {
            "type": "formula",
            "title": "інфінітив + закінчення",
            "rows": [
              [
                "eiu",
                "parlaraghju",
                "я говоритиму"
              ],
              [
                "tù",
                "parlarè",
                "ти говоритимеш"
              ],
              [
                "ellu",
                "parlarà",
                "він говоритиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dumane vinaremu.",
                "Завтра ми прийдемо."
              ],
              [
                "Elli travagliaranu.",
                "Вони працюватимуть."
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
            "text": "Умовний спосіб утворюється тими самими основами, що й майбутній час, плюс закінчення -ìa.",
            "en": {
              "text": "The conditional is formed from the same stems as the future, plus the ending -ìa."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mi piacerebbe vene.",
                "Я б хотів прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ellu vinaria s'ellu pudessi.",
                "Він прийшов би, якби міг."
              ],
              [
                "Noi aiutaressimu.",
                "Ми б допомогли."
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
            "text": "Наказовий спосіб для 2-ї особи однини часто збігається з теперішнім часом, множина додає -ate/-ete.",
            "en": {
              "text": "The imperative for the 2nd person singular often matches the present tense; the plural adds -ate/-ete."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Parla!",
                "Говори!"
              ],
              [
                "Parlate!",
                "Говоріть! (мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pusàti, per piacè.",
                "Сідай, будь ласка."
              ],
              [
                "Chjude a porta!",
                "Зачини двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-present",
        "title": "Кон'юнктив теперішній — B1",
        "titleEn": "Present Subjunctive — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив теперішній вживається після дієслів бажання, сумніву чи в підрядних реченнях мети.",
            "en": {
              "text": "The present subjunctive is used after verbs of wish, doubt, or in purpose clauses."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vogliu chì tù venga.",
                "Я хочу, щоб ти прийшов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Speru chì tù capisca.",
                "Сподіваюся, ти це зрозумієш."
              ],
              [
                "Ci vole chì studieghi.",
                "Тобі треба вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-imperfect",
        "title": "Кон'юнктив минулий — B2",
        "titleEn": "Imperfect Subjunctive — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив минулого часу вживається в гіпотетичних умовних реченнях і після дієслів бажання в минулому часі.",
            "en": {
              "text": "The imperfect subjunctive is used in hypothetical conditional clauses and after past-tense wish verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "S'ellu venissi, saria felice.",
                "Якби він прийшов, він був би щасливий."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vulia chì tù venissi.",
                "Я хотів би, щоб ти прийшов."
              ],
              [
                "S'e sapessi, u diceria.",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense-avè-esse",
        "title": "Перфект (avè/esse + дієприкметник) — A2",
        "titleEn": "Perfect Tense (Avè/Esse + Participle) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється допоміжним avè (мати) для більшості дієслів, або esse (бути) для дієслів руху й стану, плюс дієприкметник минулого часу — як в італійській.",
            "en": {
              "text": "The perfect is formed with the auxiliary avè (to have) for most verbs, or esse (to be) for motion/state verbs, plus the past participle — like in Italian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Aghju manghjatu.",
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
                "Hè vinutu tardi.",
                "Він прибув пізно (esse, рух)."
              ],
              [
                "Avemu compiu u travagliu.",
                "Ми закінчили роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect",
        "title": "Давноминулий час — B1",
        "titleEn": "Pluperfect — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час поєднує ту саму конструкцію з допоміжним дієсловом у минулому незавершеному часі.",
            "en": {
              "text": "The pluperfect combines the same construction with the auxiliary in the imperfect past."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Avia manghjatu prima d'andà.",
                "Я вже поїв, перш ніж піти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Era vinutu prima di mè.",
                "Він прибув раніше за мене (до того)."
              ],
              [
                "Avìamu digià compiu.",
                "Ми вже закінчили (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "gerund-progressive",
        "title": "Тривала дія (stà + gerundiu) — A2",
        "titleEn": "Progressive (Stà + Gerund) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"саме зараз\" виражається дієсловом stà плюс герундій (форма на -endu/-ìndu).",
            "en": {
              "text": "The \"right now\" progressive is expressed with the verb stà plus the gerund (a form ending in -endu/-ìndu)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Stò manghjendu.",
                "Я саме їм."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Stai travagliendu.",
                "Ти саме працюєш."
              ],
              [
                "Stanu ghjucandu.",
                "Вони саме граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronominal-verbs",
        "title": "Зворотні дієслова — B1",
        "titleEn": "Reflexive Verbs — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова приєднують клітичний займенник (mi/ti/si/ci/vi/si) перед дієсловом.",
            "en": {
              "text": "Reflexive verbs attach a clitic pronoun (mi/ti/si/ci/vi/si) before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "lavassi (митися)",
                "Mi lavu.",
                "Я миюся."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Si veste prestu.",
                "Він швидко одягається."
              ],
              [
                "Ci alziamu prestu.",
                "Ми рано встаємо."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Пасивний стан (esse + дієприкметник) — B1",
        "titleEn": "Passive Voice (Esse + Participle) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється дієсловом esse у потрібному часі плюс дієприкметник минулого часу, узгоджений за родом і числом.",
            "en": {
              "text": "The passive voice is formed with the verb esse in the required tense plus the past participle, agreeing in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "A lettera hè scritta.",
                "Лист написаний."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A casa era custruita.",
                "Дім був побудований."
              ],
              [
                "I libri sò lettu.",
                "Книги прочитані."
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
        "id": "definite-article-u-a-i-e",
        "title": "Означений артикль u/a/i/e — A1",
        "titleEn": "Definite Article U/A/I/E — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль (u/a/i/e) відрізняється від італійського il/la/i/le — короткі, апокопні форми, типові для корсиканської.",
            "en": {
              "text": "The definite article (u/a/i/e) differs from Italian il/la/i/le — short, apocopated forms typical of Corsican."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "u libru (ч.р. одн.)",
                "книга"
              ],
              [
                "a casa (ж.р. одн.)",
                "дім"
              ],
              [
                "i libri / e case (мн.)",
                "книги / доми"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "U libru hè meiu.",
                "Книга моя."
              ],
              [
                "E case sò grande.",
                "Доми великі."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-article-un-una",
        "title": "Неозначений артикль un/una — A1",
        "titleEn": "Indefinite Article Un/Una — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "un libru",
                "якась книга"
              ],
              [
                "una casa",
                "якийсь дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aghju un cane.",
                "У мене є собака."
              ],
              [
                "Hè una maestra.",
                "Вона вчителька."
              ]
            ]
          }
        ]
      },
      {
        "id": "contracted-prepositions",
        "title": "Стягнені прийменникові форми — A2",
        "titleEn": "Contracted Preposition Forms — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники a і di обов'язково стягуються з артиклем (a + u → à u/à u, di + u → d'u), як в італійській, але з корсиканською вимовою.",
            "en": {
              "text": "The prepositions a and di must contract with the article (a + u → à u, di + u → d'u), like in Italian, but with Corsican pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "di + u → d'u",
                "з (місця)/чийсь"
              ],
              [
                "in + a → in a",
                "у"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vengu d'u paese.",
                "Я приїхав із села."
              ],
              [
                "Sò in a scola.",
                "Я в школі."
              ]
            ]
          }
        ]
      },
      {
        "id": "gender-two-way",
        "title": "Два роди: чоловічий/жіночий — A1",
        "titleEn": "Two Genders: Masculine/Feminine — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "u zitellu (хлопчик)",
                "чоловічий"
              ],
              [
                "a zitella (дівчинка)",
                "жіночий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "U zitellu hè altu.",
                "Хлопчик високий."
              ],
              [
                "A zitella hè alta.",
                "Дівчинка висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Множина — A1",
        "titleEn": "Plural Formation — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється зміною кінцевого голосного основи (-u→-i для чол. р., -a→-e для жін. р.), а не додаванням -s, як у французькій.",
            "en": {
              "text": "The plural is formed by changing the stem's final vowel (-u→-i for masc., -a→-e for fem.), not by adding -s like in French."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "libru (книга)",
                "libri",
                "книги"
              ],
              [
                "casa (дім)",
                "case",
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
                "I libri sò boni.",
                "Книги хороші."
              ],
              [
                "E case sò nove.",
                "Доми нові."
              ]
            ]
          }
        ]
      },
      {
        "id": "consonant-mutation-deep",
        "title": "Мутація приголосних — детальні правила — B1",
        "titleEn": "Consonant Mutation — Detailed Rules — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен глухий/дзвінкий приголосний на початку слова має власне пом'якшення після голосної: p→b, t→d, c(k)→g, b→v, d→dh (ð), g→gh — риса, що передається на письмі лише частково.",
            "en": {
              "text": "Every voiceless/voiced initial consonant has its own softening after a vowel: p→b, t→d, c(k)→g, b→v, d→dh (ð), g→gh — a trait only partially reflected in spelling."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "parlà (говорити)",
                "a parlà → a barlà (у вимові)"
              ],
              [
                "casa (дім)",
                "una casa → una ghjasa (у вимові)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aghju vistu una ghjatta.",
                "Я побачив кота (мутація c→gh у вимові)."
              ],
              [
                "Hè ghjuntu tardi.",
                "Він прибув пізно."
              ]
            ]
          }
        ]
      },
      {
        "id": "enclitic-pronouns-imperative",
        "title": "Клітики після наказового способу — B1",
        "titleEn": "Enclitic Pronouns After the Imperative — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний займенник приєднується ПІСЛЯ дієслова в наказовому способі, інфінітиві чи герундії, зливаючись з ним в одне слово.",
            "en": {
              "text": "A clitic pronoun attaches AFTER the verb in the imperative, infinitive, or gerund, fusing with it into one word."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dammilu!",
                "Дай мені це!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sèntitilu!",
                "Послухай його!"
              ],
              [
                "Per fallu, ci vole tempu.",
                "Щоб це зробити, треба час."
              ]
            ]
          }
        ]
      },
      {
        "id": "weak-pronoun-ne",
        "title": "Клітичний займенник \"ne\" — B1",
        "titleEn": "The Clitic Pronoun \"Ne\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний займенник ne замінює конструкцію \"di + іменник\" (частину чогось, звідки), як в італійській.",
            "en": {
              "text": "The clitic pronoun ne replaces a \"di + noun\" construction (a part of something, from where), like in Italian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ne vogliu.",
                "Я хочу цього (ne = цього хліба тощо)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quanti ne hai?",
                "Скільки їх у тебе?"
              ],
              [
                "Mi ne vogliu andà.",
                "Я хочу звідси піти."
              ]
            ]
          }
        ]
      },
      {
        "id": "weak-pronoun-ci",
        "title": "Клітичний займенник \"ci\" — B1",
        "titleEn": "The Clitic Pronoun \"Ci\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний займенник ci замінює місце (\"туди/там\") чи непрямий додаток з прийменником a/in.",
            "en": {
              "text": "The clitic pronoun ci replaces a place (\"there/to there\") or an oblique object with the preposition a/in."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ci vogliu andà.",
                "Я хочу туди піти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ci pensu spessu.",
                "Я часто про це думаю."
              ],
              [
                "Ùn ci credu micca.",
                "Я в це не вірю."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-with-article",
        "title": "Присвійні з артиклем — A2",
        "titleEn": "Possessives with the Article — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний займенник зазвичай іде разом з означеним артиклем перед іменником, як в італійській.",
            "en": {
              "text": "The possessive usually goes together with the definite article before the noun, like in Italian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "u meiu libru",
                "моя книга (артикль + присвійний)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A toia casa hè bella.",
                "Твій дім гарний."
              ],
              [
                "I soi figlioli studianu.",
                "Її діти навчаються."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (quistu/quellu) — A1",
        "titleEn": "Demonstratives (Quistu/Quellu) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "quistu libru",
                "ця книга"
              ],
              [
                "quellu libru",
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
                "Quistu hè meiu.",
                "Це моє."
              ],
              [
                "Quella muntagna hè altissima.",
                "Та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-chi",
        "title": "Відносний займенник \"chì\" — B1",
        "titleEn": "Relative Pronoun \"Chì\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник chì (\"який/що\") вводить підрядне означальне речення й не змінюється за родом чи числом.",
            "en": {
              "text": "The relative pronoun chì (\"who/which/that\") introduces a relative clause and doesn't change for gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "l'omu chì hè vinutu",
                "чоловік, який прийшов"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "U libru chì leghji hè bonu.",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "A casa duve stò hè vechja.",
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
                "quale",
                "хто"
              ],
              [
                "chì",
                "що"
              ],
              [
                "duve",
                "де"
              ],
              [
                "quandu",
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
                "Cumu ti chjami?",
                "Як тебе звати?"
              ],
              [
                "Duve stai?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronouns",
        "title": "Зворотні займенники — A2",
        "titleEn": "Reflexive Pronouns — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mi",
                "себе (я)"
              ],
              [
                "si",
                "себе (він/вона/вони)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mi guardu in u spechju.",
                "Я дивлюся на себе в дзеркало."
              ],
              [
                "Si cunnoscenu bè.",
                "Вони добре знають один одного."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (più/u più) — A2",
        "titleEn": "Comparative & Superlative (Più/U Più) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом più (більш) перед прикметником, найвищий — артиклем + più.",
            "en": {
              "text": "The comparative is formed with the word più (more) before the adjective, the superlative with the article + più."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "grande (великий)",
                "più grande",
                "більший"
              ],
              [
                "grande (великий)",
                "u più grande",
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
                "Sta casa hè più grande.",
                "Цей дім більший."
              ],
              [
                "Ellu hè u più intelligente.",
                "Він найрозумніший."
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
                "unu",
                "1"
              ],
              [
                "dui",
                "2"
              ],
              [
                "trè",
                "3"
              ],
              [
                "dece",
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
                "Aghju duie surelle.",
                "У мене дві сестри."
              ],
              [
                "So vinuti dece persone.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-agreement",
        "title": "Узгодження числівника \"dui/duie\" за родом — A2",
        "titleEn": "Number Agreement of \"Dui/Duie\" — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "\"Два\" — один із небагатьох числівників, що узгоджується за родом: dui (ч.р.) / duie (ж.р.).",
            "en": {
              "text": "\"Two\" is one of the few numerals that agrees in gender: dui (masc.) / duie (fem.)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dui zitelli",
                "два хлопчики"
              ],
              [
                "duie zitelle",
                "дві дівчинки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aghju dui gatti.",
                "У мене два коти."
              ],
              [
                "Aghju duie gatte.",
                "У мене дві кішки."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-prepositions-overview",
        "title": "Прийменники — A2",
        "titleEn": "Prepositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "à",
                "в, у, до"
              ],
              [
                "in",
                "в (усередині)"
              ],
              [
                "sopra",
                "на"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "U libru hè sopra à a tavula.",
                "Книга на столі."
              ],
              [
                "Vaghju à a scola.",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible",
        "title": "Гнучкий порядок слів — B1",
        "titleEn": "Flexible Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — SVO, але клітики й наголос можуть змінювати порядок для виділення певної частини речення.",
            "en": {
              "text": "The basic word order is SVO, but clitics and emphasis can shift the order to highlight a particular part of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "U libru, l'aghju lettu.",
                "Книгу — я її прочитав (наголос на книзі)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A lettera, l'aghju scritta.",
                "Листа — я його написав."
              ],
              [
                "Ellu, ùn u sò micca.",
                "Його — я його не знаю."
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
                "è",
                "і, та"
              ],
              [
                "mà",
                "але"
              ],
              [
                "o",
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
                "Tù è eiu simu amici.",
                "Я і ти — друзі."
              ],
              [
                "Vogliu andà, mà ùn aghju micca tempu.",
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
                "perchè",
                "тому що"
              ],
              [
                "sì",
                "якщо"
              ],
              [
                "quandu",
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
                "Sò cuntentu perchè sì vinutu.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Quandu serò libaru, ti chjamerò.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова (pudè/duvè) — A2",
        "titleEn": "Modal Verbs (Pudè/Duvè) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Possu natà.",
                "Я вмію плавати."
              ],
              [
                "Devu andà.",
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
                "Devi studià.",
                "Тобі треба вчитися."
              ],
              [
                "Vogliu aiutà.",
                "Я хочу допомогти."
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
                "assai",
                "багато"
              ],
              [
                "pocu",
                "мало"
              ],
              [
                "qualchi",
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
                "Aghju assai libri.",
                "У мене багато книг."
              ],
              [
                "Dammi pocu acqua.",
                "Дай мені трохи води."
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
                "luni",
                "понеділок"
              ],
              [
                "sabbatu",
                "субота"
              ],
              [
                "dumenica",
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
                "Oghje hè luni.",
                "Сьогодні понеділок."
              ],
              [
                "Mi riposu a dumenica.",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "u-a-article-vs-italian-il-la",
        "title": "Порівняння артикля з італійським il/la — B1",
        "titleEn": "The Article Compared to Italian Il/La — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Корсиканське u/a походить з латинського ILLU/ILLA так само, як італійське il/la, але зазнало сильнішого апокопування кінцевого приголосного — типова риса, що одразу відрізняє корсиканський текст від італійського на вигляд.",
            "en": {
              "text": "Corsican u/a descends from Latin ILLU/ILLA just like Italian il/la, but underwent stronger apocope of the final consonant — a typical trait that instantly distinguishes Corsican text from Italian by sight."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "it: il libro / co: u libru",
                "книга"
              ],
              [
                "it: la casa / co: a casa",
                "дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "U libru hè novu.",
                "Книга нова."
              ],
              [
                "A casa hè bella.",
                "Дім гарний."
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
                "ghjennaghju",
                "січень"
              ],
              [
                "maghju",
                "травень"
              ],
              [
                "decembre",
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
                "U mo cumpleannu hè in maghju.",
                "Мій день народження в травні."
              ],
              [
                "Oghje hè u dece di ghjennaghju.",
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
                "Chì ora hè?",
                "Котра година?"
              ],
              [
                "Sò e trè.",
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
                "Ci vidimu à sei ore.",
                "Зустрінемось о шостій."
              ],
              [
                "Avà hè mezziornu.",
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
                "Bonghjornu",
                "Привіт"
              ],
              [
                "Grazie",
                "Дякую"
              ],
              [
                "Avvedeci",
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
                "Cumu và?",
                "Як справи?"
              ],
              [
                "Grazie mille.",
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
                "Face sole.",
                "Сонячно."
              ],
              [
                "Piove.",
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
                "Oghje face freddu.",
                "Сьогодні холодно."
              ],
              [
                "Face assai caldu.",
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
                "fà u corsu",
                "стояти на своєму, вперто триматися"
              ],
              [
                "avè u fele",
                "бути злим (буквально: мати жовч)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ellu face u corsu.",
                "Він стоїть на своєму."
              ],
              [
                "Aghju u fele oghje.",
                "Я сьогодні злий."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Прислівники (-mente) — A2",
        "titleEn": "Adverbs (-Mente) — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються суфіксом -mente, доданим до жіночої форми прикметника.",
            "en": {
              "text": "Manner adverbs are often formed with the suffix -mente, added to the feminine form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "rapida (швидка)",
                "rapidamente",
                "швидко"
              ],
              [
                "lenta (повільна)",
                "lentamente",
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
                "Corre rapidamente.",
                "Він швидко бігає."
              ],
              [
                "Parla più lentamente.",
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
                "-ità",
                "утворює абстрактні іменники (libaru→libertà, вільний→свобода)"
              ],
              [
                "-ore",
                "утворює назви професій (travaglià→travagliadore, працювати→робітник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "A libertà hè impurtante.",
                "Свобода важлива."
              ],
              [
                "Hè un travagliadore.",
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
                "porta (носити) + moneta (монета)",
                "portamoneta (гаманець)"
              ],
              [
                "capu (голова) + luogu (місце)",
                "capuluogu (столиця)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aghju persu u portamoneta.",
                "Я загубив гаманець."
              ],
              [
                "Aiacciu hè un capuluogu.",
                "Аяччо — столиця (регіону)."
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
                "branu",
                "весна"
              ],
              [
                "estate",
                "літо"
              ],
              [
                "auturnu",
                "осінь"
              ],
              [
                "invernu",
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
                "In estate face caldu.",
                "Влітку жарко."
              ],
              [
                "Mi piace l'auturnu.",
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
                "Quantu costa?",
                "Скільки коштує?"
              ],
              [
                "Costa mille euro.",
                "Коштує тисячу євро."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Stu libru costa vinti euro.",
                "Ця книга коштує двадцять євро."
              ],
              [
                "Hè assai caru.",
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
                "Credu chì...",
                "Я думаю, що..."
              ],
              [
                "A mio pare...",
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
                "Credu chì tù abbia raghjone.",
                "Я думаю, що ти правий."
              ],
              [
                "A mio pare, hè una bona idea.",
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
                "oghje / dumane / eri",
                "сьогодні / завтра / вчора"
              ],
              [
                "avà / dopu",
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
                "Ci vidimu dumane.",
                "Побачимось завтра."
              ],
              [
                "Avà sò occupatu.",
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
                "qualchisia",
                "хтось"
              ],
              [
                "qualcosa",
                "щось"
              ],
              [
                "nimu",
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
                "Qualchisia m'hà chjamatu.",
                "Хтось мені подзвонив."
              ],
              [
                "Aghju intesu qualcosa.",
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
                "Oimè!",
                "Ой!"
              ],
              [
                "Che bella cosa!",
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
                "Oimè, chì bella cosa!",
                "Ой, як гарно!"
              ],
              [
                "Che bella nutizia!",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-ci-he",
        "title": "Конструкція \"є/немає\" (ci hè) — A2",
        "titleEn": "Existential \"There Is/Isn't\" (Ci Hè) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ci hè acqua.",
                "Є вода."
              ],
              [
                "Ùn ci hè micca tempu.",
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
                "Ci sò assai persone quì.",
                "Тут багато людей."
              ],
              [
                "Ùn ci hè micca butteca quì.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-ellu/-ella) — B1",
        "titleEn": "Diminutives (-Ellu/-Ella) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "casa (дім)",
                "casetta",
                "будиночок"
              ],
              [
                "cane (собака)",
                "cagnolu",
                "собачка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Chì bella casetta!",
                "Який гарний будиночок!"
              ],
              [
                "U cagnolu hè caru caru.",
                "Собачка дуже милий."
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
                "Signore",
                "пан"
              ],
              [
                "Signora",
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
                "Bonghjornu, Signore.",
                "Доброго дня, пане."
              ],
              [
                "Scusate, Signora.",
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
                "Chì và pianu, và sanu.",
                "Хто йде повільно, той іде здорово (тихіше їдеш — далі будеш)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ùn hè mai troppu tardi.",
                "Ніколи не пізно."
              ],
              [
                "Chì trova un amicu, trova un tesoru.",
                "Хто знаходить друга, знаходить скарб."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-french",
        "title": "Запозичення з французької — B1",
        "titleEn": "French Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через політичне об'єднання з Францією з 18 ст. сучасна адміністративна й технічна лексика часто запозичена з французької, попри тосканську основу мови.",
            "en": {
              "text": "Due to political union with France since the 18th century, modern administrative and technical vocabulary is often borrowed from French, despite the language's Tuscan base."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "bureau (з фр.)",
                "офіс/бюро"
              ],
              [
                "voiture (з фр., альтернатива macchina)",
                "машина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vaghju à u bureau.",
                "Я йду в офіс."
              ],
              [
                "A mo voiture hè rotta.",
                "Моя машина зламалася."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-position",
        "title": "Узгодження й позиція прикметника — A2",
        "titleEn": "Adjective Agreement & Position — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником за родом і числом і зазвичай стоять після іменника.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number and usually stand after it."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "una casa bella",
                "гарний дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aghju un gattu neru.",
                "У мене чорний кіт."
              ],
              [
                "Hè una bona nutizia.",
                "Це гарна новина."
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
                "primu",
                "перший"
              ],
              [
                "secondu",
                "другий"
              ],
              [
                "terzu",
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
                "Hè u mo primu libru.",
                "Це моя перша книга."
              ],
              [
                "Hà pigliatu u secondu postu.",
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
                "Mà!",
                "Мамо!"
              ],
              [
                "Sente, Ghjuvà!",
                "Слухай, Джуве!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mà, veni quì!",
                "Мамо, іди сюди!"
              ],
              [
                "Signore, aiutatemi.",
                "Пане, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "final-vowel-apocope",
        "title": "Апокопа кінцевого голосного в розмовній мові — B1",
        "titleEn": "Final Vowel Apocope in Colloquial Speech — B1",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовному мовленні кінцевий ненаголошений голосний слова часто випадає, особливо перед іншим голосним чи в швидкому темпі, — риса, відсутня в стандартній італійській.",
            "en": {
              "text": "In colloquial speech, a word's final unstressed vowel is often dropped, especially before another vowel or in fast speech — a trait absent from standard Italian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "parlà (повна форма)",
                "parl' (скорочена, розмовна)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Un sacc' micca.",
                "Я не знаю (розмовно, замість sacciu)."
              ],
              [
                "Cum' stai?",
                "Як справи? (розмовно)"
              ]
            ]
          }
        ]
      },
      {
        "id": "auxiliaries-avè-esse-split",
        "title": "Вибір допоміжного avè чи esse — детально — B1",
        "titleEn": "Choosing Avè or Esse — In Depth — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова руху, зміни стану й зворотні дієслова беруть esse (з узгодженням дієприкметника за родом/числом), решта — avè (без узгодження) — той самий поділ, що й в італійській, але з власною лексикою винятків.",
            "en": {
              "text": "Motion verbs, change-of-state verbs, and reflexive verbs take esse (with participle agreement in gender/number), the rest take avè (no agreement) — the same split as Italian, but with its own list of exceptions."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Hè andata (esse, ж.р., узгодж.)",
                "Вона пішла."
              ],
              [
                "Ha manghjatu (avè, без узгодж.)",
                "Вона поїла."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sò nati in Bastia.",
                "Вони народилися в Бастії (esse)."
              ],
              [
                "Avemu vistu u filmu.",
                "Ми подивилися фільм (avè)."
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
        "id": "cismuntincu-pumuntincu-dialectal-divide",
        "title": "Північний і південний діалекти (cismuntincu/pumuntincu) — B2",
        "titleEn": "Northern & Southern Dialects (Cismuntincu/Pumuntincu) — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Корсиканська ділиться на північний (cismuntincu, ближчий до тосканської) і південний (pumuntincu, з рисами, що зближують його з сардинською) варіанти — вони різняться вимовою, деякими закінченнями й частиною лексики.",
            "en": {
              "text": "Corsican splits into a northern variety (cismuntincu, closer to Tuscan) and a southern one (pumuntincu, with traits bringing it closer to Sardinian) — they differ in pronunciation, some endings, and part of the vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Північний: casa",
                "дім"
              ],
              [
                "Південний: casa (з іншою вимовою кінцевого -a)",
                "той самий дім, інша вимова"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "In Bastia parlanu cismuntincu.",
                "У Бастії говорять північним варіантом."
              ],
              [
                "In Portivechju parlanu pumuntincu.",
                "У Порто-Веккйо говорять південним варіантом."
              ]
            ]
          }
        ]
      },
      {
        "id": "french-diglossia-endangerment",
        "title": "Диглосія з французькою й загроза мові — B2",
        "titleEn": "French Diglossia & Language Endangerment — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Корсиканська перебуває під сильним тиском французької — офіційної мови освіти й адміністрації; більшість корсиканців двомовні, а молодше покоління дедалі частіше домінантно розмовляє французькою, тож ЮНЕСКО класифікує корсиканську як мову під загрозою.",
            "en": {
              "text": "Corsican is under heavy pressure from French — the official language of education and administration; most Corsicans are bilingual, and the younger generation increasingly speaks French as the dominant language, so UNESCO classifies Corsican as endangered."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "A lingua corsa hè in periculu.",
                "Корсиканська мова під загрозою."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Insegnanu u corsu in scola avà.",
                "Тепер у школі викладають корсиканську."
              ],
              [
                "Parlemu francese à casa spessu.",
                "Ми часто говоримо французькою вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "mutation-exceptions-irregular",
        "title": "Винятки з правила мутації приголосних — B2",
        "titleEn": "Exceptions to the Consonant Mutation Rule — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Мутація приголосних не застосовується після певних слів (наприклад, після прийменника con чи в деяких стійких словосполученнях), і ці винятки треба заучувати окремо, а не покладатися на загальне правило.",
            "en": {
              "text": "Consonant mutation doesn't apply after certain words (e.g. after the preposition con or in some fixed phrases), and these exceptions must be memorized individually rather than relying on the general rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "con casa (без мутації)",
                "з домом — c залишається c, не переходить у g"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vengu con Petru.",
                "Я приходжу з Петром (без мутації)."
              ],
              [
                "Sò dinù cuntentu.",
                "Я також задоволений (dinù не викликає мутації)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
