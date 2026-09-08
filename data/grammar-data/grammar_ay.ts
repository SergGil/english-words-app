// Vymova — data/grammar-data/grammar_ay.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Jaqinakan Sutipa — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В аймара, як і в сусідній кечуа, є розрізнення \"ми з вами\" (jiwasa) і \"ми без вас\" (nanaka).",
            "en": {
              "text": "Aymara, like neighboring Quechua, distinguishes \"we including you\" (jiwasa) from \"we excluding you\" (nanaka)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "naya"
              ],
              [
                "ти",
                "juma"
              ],
              [
                "він / вона / воно",
                "jupa"
              ],
              [
                "ми (з вами)",
                "jiwasa"
              ],
              [
                "ми (без вас)",
                "nanaka"
              ],
              [
                "ви",
                "jumanaka"
              ],
              [
                "вони",
                "jupanaka"
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
        "title": "Ствердний суфікс \"-wa\" (замість зв'язки) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Аймара не має окремого дієслова \"бути\" в теперішньому часі — присудок просто ставиться поруч із підметом, а суфікс -wa додається до присудка, щоб позначити, що це стверджувальний, безпосередньо відомий факт.",
            "en": {
              "text": "Aymara has no separate \"to be\" verb in the present — the predicate simply stands next to the subject, and the suffix -wa is added to the predicate to mark it as an asserted, directly known fact."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + присудок-wa",
            "rows": [
              [
                "naya",
                "yatichiriwa",
                "я вчитель"
              ],
              [
                "jupa",
                "qullirinwa",
                "він/вона лікар"
              ],
              [
                "juma",
                "wali sumawa",
                "ти дуже хороший"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Naya jaqiwa.",
                "Я людина."
              ]
            ]
          }
        ],
        "titleEn": "The Assertive Suffix \"-Wa\" (No Copula) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення jani...-ti — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення обгортає ціле речення: частка jani ставиться на початку, а суфікс -ti додається до дієслова чи присудка в кінці.",
            "en": {
              "text": "Negation wraps around the whole sentence: the particle jani goes at the start, and the suffix -ti is added to the verb or predicate at the end."
            }
          },
          {
            "type": "formula",
            "title": "jani + ... + -ti",
            "rows": [
              [
                "yatta",
                "jani yattti",
                "я знаю → я не знаю"
              ],
              [
                "sarani",
                "jani sarkiti",
                "він піде → він не піде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jani yattti.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Jani...-Ti — A1"
      },
      {
        "id": "questions",
        "title": "Питання з суфіксом -ti — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -ti, доданий БЕЗ jani, перетворює твердження на питання так/ні.",
            "en": {
              "text": "The same suffix -ti, added WITHOUT jani, turns a statement into a yes/no question."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + -ti?",
            "rows": [
              [
                "Sumawa.",
                "Sumati?",
                "Добре. → Добре?"
              ],
              [
                "Jutawa.",
                "Jutati?",
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
                "Manqʼañ munta ti?",
                "Ти хочеш їсти?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Suffix -Ti — A1"
      },
      {
        "id": "evidentiality-suffix-overview",
        "title": "Евіденційність — джерело знання в суфіксі — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне речення в аймара обов'язково позначає, звідки мовець знає про цей факт: -wa (бачив/знає особисто), -tayna/-sina (з чужих слів), -chá (припущення) — це не опційно, а граматично обов'язково.",
            "en": {
              "text": "Every Aymara sentence obligatorily marks how the speaker knows the fact: -wa (personally witnessed/known), -tayna/-sina (hearsay), -chá (inference/guess) — this isn't optional, it's grammatically required."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Jutawa.",
                "Він прийшов (я це бачив)."
              ],
              [
                "Jutatayna.",
                "Він, кажуть, прийшов (з чужих слів)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Parlachá.",
                "Мабуть, він говорить (припущення)."
              ]
            ]
          }
        ],
        "titleEn": "Evidentiality — the Source of Knowledge Marked in the Suffix — A2"
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
            "text": "Теперішній час утворюється основою дієслова з особовим суфіксом, без окремого часового маркера.",
            "en": {
              "text": "The present tense is formed with the verb stem plus a personal suffix, with no separate tense marker."
            }
          },
          {
            "type": "formula",
            "title": "основа + особовий суфікс",
            "rows": [
              [
                "naya",
                "sarta",
                "я йду"
              ],
              [
                "juma",
                "sarta",
                "ти йдеш"
              ],
              [
                "jupa",
                "sarki",
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
                "Naya utar sarta.",
                "Я йду додому."
              ],
              [
                "Jupa manqʼi.",
                "Він/вона їсть."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-witnessed",
        "title": "Минулий засвідчений час (-wa/-ta) — A2",
        "titleEn": "Witnessed Past (-Wa/-Ta) — A2",
        "emoji": "👁️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час, коли мовець особисто був свідком події, утворюється суфіксом -ta/-wa, доданим до основи.",
            "en": {
              "text": "The past tense, when the speaker personally witnessed the event, is formed with the suffix -ta/-wa added to the stem."
            }
          },
          {
            "type": "formula",
            "title": "основа + минулий засвідчений суфікс",
            "rows": [
              [
                "naya",
                "sarayaraktha",
                "я пішов (бачив сам)"
              ],
              [
                "jupa",
                "sarayarakina",
                "він пішов (бачив сам)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Naya markar sarayaraktha.",
                "Я поїхав у місто (сам бачив)."
              ],
              [
                "Jupax utar purinina.",
                "Він прибув додому (я це бачив)."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-non-witnessed-reportative",
        "title": "Минулий незасвідчений (переказний) час — B1",
        "titleEn": "Non-Witnessed (Reportative) Past — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли мовець знає про минулу подію лише з чужих слів, вживається інший суфікс — -tayna/-sina, граматично зобов'язуючи чітко відрізняти особисте свідчення від переказу.",
            "en": {
              "text": "When the speaker knows about a past event only from hearsay, a different suffix is used — -tayna/-sina, grammatically forcing a clear distinction between personal witness and hearsay."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Jutatayna.",
                "Він, кажуть, прийшов (я цього не бачив)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Markan jaljatayna.",
                "У місті, кажуть, сталася повінь."
              ],
              [
                "Wawapax usurjastayna.",
                "Її дитина, кажуть, захворіла."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (-ni) — A2",
        "titleEn": "Future Tense (-Ni) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -ni, доданим до основи дієслова перед особовим закінченням.",
            "en": {
              "text": "The future tense is formed with the suffix -ni added to the verb stem before the personal ending."
            }
          },
          {
            "type": "formula",
            "title": "основа + ni + закінчення",
            "rows": [
              [
                "naya",
                "saraña",
                "я піду"
              ],
              [
                "jupa",
                "sarani",
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
                "Qharüru jutäta.",
                "Завтра я прийду."
              ],
              [
                "Jupax janiw jutkaniti.",
                "Він не прийде."
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
            "text": "Наказ до однієї особи — це гола основа дієслова; множина/ввічлива форма додає суфікс -pxam.",
            "en": {
              "text": "A command to one person is just the bare verb stem; the plural/polite form adds the suffix -pxam."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Sara!",
                "Іди!"
              ],
              [
                "Sarapxam!",
                "Ідіть! (мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aka manqʼa!",
                "Їж це!"
              ],
              [
                "Qhipar jutam!",
                "Прийди пізніше!"
              ]
            ]
          }
        ]
      },
      {
        "id": "potential-conditional",
        "title": "Умовний спосіб (-spa) — B1",
        "titleEn": "Conditional Mood (-Spa) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб (\"якби\") утворюється суфіксом -spa, доданим до основи дієслова.",
            "en": {
              "text": "The conditional mood (\"if only\") is formed with the suffix -spa added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Jutaspaxa, kusiskthwa.",
                "Якби він прийшов, я був би радий."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Qullqi utjaspa, sarañäwa.",
                "Якби були гроші, я б поїхав."
              ],
              [
                "Yatiraspa, parlaspa.",
                "Якби я знав, я б сказав."
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
                "Sapa urus yatiqañ sarta.",
                "Я щодня йду вчитися."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jupax sapaki manqʼi.",
                "Він завжди їсть."
              ],
              [
                "Nanakax jayp'ux irnaqapxta.",
                "Ми завжди працюємо вечорами."
              ]
            ]
          }
        ]
      },
      {
        "id": "progressive-aspect",
        "title": "Тривала дія (-ska-) — B1",
        "titleEn": "Progressive Aspect (-Ska-) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"саме зараз\" виражається інфіксом -ska-, вставленим між основою дієслова й особовим закінченням.",
            "en": {
              "text": "The \"right now\" progressive is expressed with the infix -ska-, inserted between the verb stem and the personal ending."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Manqʼaskta.",
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
                "Jupax irnaqaski.",
                "Він саме працює."
              ],
              [
                "Wawanakax anataskapxi.",
                "Діти саме граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-aspect",
        "title": "Перфект (результативний стан) — B1",
        "titleEn": "Perfect (Resultant State) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект підкреслює актуальний результат минулої дії й часто поєднує минулий засвідчений суфікс з допоміжним словом, що вказує на завершеність.",
            "en": {
              "text": "The perfect emphasizes the present result of a past action and often combines the witnessed-past suffix with an auxiliary marking completion."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Manqʼayätwa.",
                "Я вже поїв (і досі ситий)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jupax purinïnwa.",
                "Він уже прибув."
              ],
              [
                "Qillqt'awayätwa.",
                "Я вже написав це."
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
            "text": "Давноминулий час виражає дію, що передувала іншій минулій події, поєднуючи минулий незасвідчений суфікс з додатковим маркером віддаленості.",
            "en": {
              "text": "The pluperfect expresses an action that preceded another past event, combining the non-witnessed past suffix with an additional remoteness marker."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Naya purinipkta, jupax sarxatayna.",
                "Коли я прибув, він уже пішов (до того)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Manqʼaxatayna.",
                "Він, виявляється, уже поїв (до того)."
              ],
              [
                "Utaxa lurataynawa.",
                "Дім вже був збудований (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "desiderative-mood",
        "title": "Бажальний спосіб (\"хотіти\", суфікс -ña + munaña) — A2",
        "titleEn": "Desiderative Mood (\"Want To\") — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виконати дію виражається інфінітивом на -ña головного дієслова плюс дієслово munaña (хотіти).",
            "en": {
              "text": "The desire to do something is expressed with the -ña infinitive of the main verb plus the verb munaña (to want)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Manqʼañ munta.",
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
                "Jupax saraña muni.",
                "Він хоче йти."
              ],
              [
                "Yatiqañ munapxta.",
                "Ми хочемо вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligative-mood",
        "title": "Модальність обов'язку (-ñaw utji) — A2",
        "titleEn": "Obligative Mood (-Ñaw Utji) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок (\"треба\") виражається інфінітивом на -ña плюс допоміжна конструкція utji (є/існує).",
            "en": {
              "text": "Obligation (\"must\") is expressed with the -ña infinitive plus the auxiliary construction utji (there is/exists)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Saraña utjitu.",
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
                "Yatiqaña utjistu.",
                "Тобі треба вчитися."
              ],
              [
                "Irnaqaña utjistu.",
                "Нам треба працювати."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-suffix-chaining-overview",
        "title": "Ланцюжки дієслівних суфіксів — B2",
        "titleEn": "Chains of Verb Suffixes — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Аймарське дієслово може приєднати цілий ряд суфіксів у строго фіксованому порядку (напрямок, вид, час, особа, евіденційність), утворюючи одне довге слово, що передає значення цілого речення.",
            "en": {
              "text": "An Aymara verb can attach a whole series of suffixes in a strictly fixed order (direction, aspect, tense, person, evidentiality), building one long word that conveys the meaning of an entire sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад накопичення",
            "rows": [
              [
                "Aputmaya",
                "принеси-но це для мене, будь ласка (кілька суфіксів разом)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Apayapxituwa.",
                "Вони прислали це мені."
              ],
              [
                "Yanapt'apxitatwa.",
                "Ви (мн.) допомогли мені."
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
        "id": "accusative-case-suffix",
        "title": "Знахідний відмінок (-ru) — A2",
        "titleEn": "Accusative Case (-Ru) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ru позначає прямий чи непрямий додаток, доданий до кінця іменника.",
            "en": {
              "text": "The suffix -ru marks a direct or indirect object, added to the end of the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "utaru",
                "у дім (додаток)"
              ],
              [
                "jumaru",
                "тобі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Utaru sarta.",
                "Я йду в дім."
              ],
              [
                "Jumaru churäma.",
                "Я дам тобі."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case-suffix",
        "title": "Родовий відмінок (-na/-n) — A2",
        "titleEn": "Genitive Case (-Na/-N) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-na/-n) виражає належність і ставиться після власника, перед означуваним іменником.",
            "en": {
              "text": "The genitive case (-na/-n) expresses possession and is placed after the possessor, before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jupan utapa",
                "дім його/її"
              ],
              [
                "Nayan librupa",
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
                "Jumana sutima kunasa?",
                "Як тебе звати?"
              ],
              [
                "Jupan wawapax anataski.",
                "Його/її дитина грається."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case-suffix",
        "title": "Місцевий відмінок (-na) — A2",
        "titleEn": "Locative Case (-Na) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок відповідає на питання \"де?\" і теж використовує суфікс -na (той самий, що й родовий, — значення розрізняється контекстом).",
            "en": {
              "text": "The locative case answers \"where?\" and also uses the suffix -na (the same as the genitive — meaning is disambiguated by context)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Utan",
                "у домі"
              ],
              [
                "Markan",
                "у місті"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Librox mesan utji.",
                "Книга на столі."
              ],
              [
                "Wawax utan jikxatasi.",
                "Дитина знаходиться в домі."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case-suffix",
        "title": "Похідний відмінок (-ta) — B1",
        "titleEn": "Ablative Case (-Ta) — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ta відповідає на питання \"звідки?\" і виражає джерело чи вихідну точку руху.",
            "en": {
              "text": "The suffix -ta answers \"from where?\" and expresses the source or starting point of a movement."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Markata",
                "з міста"
              ],
              [
                "Utata",
                "з дому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La Pazta jutta.",
                "Я приїхав з Ла-Паса."
              ],
              [
                "Utata mistuwayta.",
                "Він вийшов з дому."
              ]
            ]
          }
        ]
      },
      {
        "id": "benefactive-case-suffix",
        "title": "Бенефактивний суфікс (-taki) — B1",
        "titleEn": "Benefactive Suffix (-Taki) — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -taki (\"для\") позначає, для чиєї користі виконується дія.",
            "en": {
              "text": "The suffix -taki (\"for\") marks who benefits from the action."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jumataki",
                "для тебе"
              ],
              [
                "wawataki",
                "для дитини"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aka libru jumataki.",
                "Ця книга для тебе."
              ],
              [
                "Wawataki manqʼa alaskta.",
                "Я купую їжу для дитини."
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
            "text": "Аймара взагалі не має граматичного роду — той самий займенник jupa означає \"він\" і \"вона\", і жоден прикметник не змінюється за родом.",
            "en": {
              "text": "Aymara has no grammatical gender at all — the same pronoun jupa means both \"he\" and \"she\", and no adjective changes for gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Jupa jachʼa.",
                "Він/вона великий(-а) (одна форма jachʼa)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jupax sumawa.",
                "Він/вона хороший(-а)."
              ],
              [
                "Wawapax jisk'awa.",
                "Його/її дитина маленька."
              ]
            ]
          }
        ]
      },
      {
        "id": "inclusive-exclusive-we-deep",
        "title": "\"Ми\" з вами/без вас у детальному розгляді — B1",
        "titleEn": "Inclusive/Exclusive \"We\" in Depth — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Розрізнення jiwasa (з вами) / nanaka (без вас) поширюється й на присвійні форми та дієслівне узгодження — вибір впливає на кожну частину речення, а не лише на займенник.",
            "en": {
              "text": "The jiwasa (inclusive) / nanaka (exclusive) distinction extends to possessive forms and verb agreement too — the choice affects every part of the sentence, not just the pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jiwasan utasa",
                "наш (з вами) дім"
              ],
              [
                "Nanakan utasa",
                "наш (без вас) дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jiwasax sarapxañäni.",
                "Ми (з вами) підемо."
              ],
              [
                "Nanakax jutapxta.",
                "Ми (без вас) прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix-naka",
        "title": "Множина (-naka) — A1",
        "titleEn": "Plural Suffix (-Naka) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -naka, доданим до основи іменника.",
            "en": {
              "text": "The plural is formed with the suffix -naka, added to the noun stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "uta (дім)",
                "utanaka",
                "доми"
              ],
              [
                "wawa (дитина)",
                "wawanaka",
                "діти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Utanakax jachʼawa.",
                "Доми великі."
              ],
              [
                "Wawanakax anatapxi.",
                "Діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (aka/uka/khaya) — A1",
        "titleEn": "Demonstratives (Aka/Uka/Khaya) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Три ступені відстані: aka (це, близько), uka (те, середня відстань), khaya (он те, далеко) — подібно до кечуа.",
            "en": {
              "text": "Three degrees of distance: aka (this, near), uka (that, mid-distance), khaya (that over there, far) — similar to Quechua."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "aka libru",
                "ця книга"
              ],
              [
                "khaya qullu",
                "он та гора"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aka nayana.",
                "Це моє."
              ],
              [
                "Khaya utax jachʼawa.",
                "Он той дім великий."
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
                "khiti",
                "хто"
              ],
              [
                "kuna",
                "що"
              ],
              [
                "kawki",
                "де"
              ],
              [
                "kunapacha",
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
                "Kunas sutimaxa?",
                "Як тебе звати?"
              ],
              [
                "Kawkin jakasta?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-suffix",
        "title": "Зворотний суфікс (-si) — B1",
        "titleEn": "Reflexive Suffix (-Si) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення (\"себе\") виражається суфіксом -si, доданим до основи дієслова.",
            "en": {
              "text": "The reflexive meaning (\"oneself\") is expressed with the suffix -si, added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "jariña (мити)",
                "jarisiña",
                "митися"
              ],
              [
                "armaña (одягати)",
                "armasiña",
                "одягатися"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jarisiskta.",
                "Я миюся."
              ],
              [
                "Wawax armasi.",
                "Дитина одягається."
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
                "maya",
                "1"
              ],
              [
                "paya",
                "2"
              ],
              [
                "kimsa",
                "3"
              ],
              [
                "tunka",
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
                "Paya kullakanaka utji.",
                "У мене дві сестри."
              ],
              [
                "Tunka jaqinaka jutapxi.",
                "Прийшло десять людей."
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
                "nayriri",
                "перший"
              ],
              [
                "payïri",
                "другий"
              ],
              [
                "kimsïri",
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
                "Akax nayriri librujawa.",
                "Це моя перша книга."
              ],
              [
                "Payïri lugarar puriwayta.",
                "Він зайняв друге місце."
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
            "text": "Аймара вживає післяйменники (не прийменники), приєднані до іменника у формі суфікса: -ampi (з), -kama (до).",
            "en": {
              "text": "Aymara uses postpositions (not prepositions), attached to the noun as a suffix: -ampi (with), -kama (until)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "jumampi",
                "з тобою"
              ],
              [
                "markakama",
                "до міста"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jumampi sarañ munta.",
                "Я хочу піти з тобою."
              ],
              [
                "Wasarukama irnaqäta.",
                "Я працюватиму до вечора."
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
                "Naya libru liyta.",
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
                "Mamajax manqʼa lurasi.",
                "Моя мама готує їжу."
              ],
              [
                "Yatiqirinakax utar sarapxi.",
                "Учні йдуть до школи."
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
                "ukhamaraki",
                "і, також"
              ],
              [
                "ukhamäkipansa",
                "але"
              ],
              [
                "jan ukax",
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
                "Naya ukhamaraki juma amigonakäta.",
                "Я і ти — друзі."
              ],
              [
                "Sarañ munta, ukhamäkipansa janiw tiempo utjkiti.",
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
                "kunatixa",
                "тому що"
              ],
              [
                "-xa (умовний суфікс)",
                "якщо"
              ],
              [
                "-ipana",
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
                "Kusiskta, kunatixa jutasktama.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Jutipanxa, parlasiñäni.",
                "Коли він прийде, ми поговоримо."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-marker-suffix",
        "title": "Топіковий суфікс -xa — B1",
        "titleEn": "Topic Marker Suffix -Xa — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -xa, доданий до слова, виносить його як тему речення — \"а от щодо...\", і майже завжди з'являється на підметі звичайного речення.",
            "en": {
              "text": "The suffix -xa, added to a word, marks it as the sentence's topic — \"as for...\", and almost always appears on the subject of a normal sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Nayaxa yatiqirïtwa.",
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
                "Jumaxa kunas munta?",
                "А ти чого хочеш?"
              ],
              [
                "Utaxa jachʼawa.",
                "А от дім — великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні конструкції (могти/треба) — A2",
        "titleEn": "Modal Constructions (Can/Must) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Yatta jiskʼatawi lurañ.",
                "Я вмію робити це."
              ],
              [
                "Sarañax wakisiwa.",
                "Треба йти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jupax phayaña yati.",
                "Він вміє готувати."
              ],
              [
                "Yatiqañax wakisistu.",
                "Нам треба вчитися."
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
                "walja",
                "багато"
              ],
              [
                "jisk'a",
                "мало"
              ],
              [
                "yaqha",
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
                "Walja libronaka utjitu.",
                "У мене багато книг."
              ],
              [
                "Jisk'a uma churita.",
                "Дай мені трохи води."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-emphasis",
        "title": "Редуплікація для підсилення — B1",
        "titleEn": "Reduplication for Emphasis — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова, особливо прислівника чи прикметника, підсилює або уточнює значення.",
            "en": {
              "text": "Repeating a word, especially an adverb or adjective, intensifies or refines its meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "jankʼu jankʼu",
                "дуже білий"
              ],
              [
                "jayp'u jayp'u",
                "дуже пізно ввечері"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jankʼu jankʼu p'iqi utjitu.",
                "У мене дуже сиве волосся."
              ],
              [
                "Jach'a jach'a utaw utjitu.",
                "У мене дуже великий дім."
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
                "lunisa",
                "понеділок"
              ],
              [
                "sawuru",
                "субота"
              ],
              [
                "tuminku",
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
                "Jichhürux lunisawa.",
                "Сьогодні понеділок."
              ],
              [
                "Tuminkun samarasta.",
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
                "Inirujavi (січень, ісп.)",
                "січень"
              ],
              [
                "Diciembre",
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
                "Nayan urupa mayuwa.",
                "Мій день народження в травні."
              ],
              [
                "Jichhürux tunka urupawa.",
                "Сьогодні десяте число."
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
                "Qawqha horasas?",
                "Котра година?"
              ],
              [
                "Kimsa horasawa.",
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
                "Suxta horasan jikisiñäni.",
                "Зустрінемось о шостій."
              ],
              [
                "Jichhax chika urupïnwa.",
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
                "Kamisaraki",
                "Привіт (як справи)"
              ],
              [
                "Yuspagara",
                "Дякую"
              ],
              [
                "Jikisiñkama",
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
                "Kamisaki?",
                "Як справи?"
              ],
              [
                "Walikïskthwa, yuspagara.",
                "У мене все добре, дякую."
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
                "Lupix achikiwa.",
                "Сонячно."
              ],
              [
                "Jallux purixiwa.",
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
                "Jichhürux thayawa.",
                "Сьогодні холодно."
              ],
              [
                "Wali qhunuwa.",
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
                "chuyma phatasiña",
                "хвилюватися (буквально: серце лопатися)"
              ],
              [
                "ajayu chhaqhaña",
                "перелякатися (буквально: духу загубитися)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Chuyma phatasiskta.",
                "Я хвилююся."
              ],
              [
                "Ajayux chhaqharapita.",
                "Я перелякався."
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
                "jankʼaki",
                "швидко"
              ],
              [
                "chʼamampi",
                "повільно/наполегливо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jankʼaki sara.",
                "Він швидко йде."
              ],
              [
                "Chʼamampi lurañäni.",
                "Давай робити наполегливо."
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
                "-iri",
                "утворює назви діяча (yatiña→yatiri, знати→знавець/вчитель)"
              ],
              [
                "-ña",
                "утворює інфінітив/віддієслівний іменник (saraña, іти/ходіння)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yatirix jachʼa yatiñani.",
                "Знавець має великі знання."
              ],
              [
                "Saraña askiwa.",
                "Ходити корисно."
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
                "phaxsi (місяць) + mayu (річка)",
                "phaxsimayu (Молочний шлях)"
              ],
              [
                "uma (вода) + qhathu (ринок)",
                "umaqhathu (ринок води)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Phaxsimayux alaxpachan jikxatasi.",
                "Молочний шлях на небі."
              ],
              [
                "Umax askiwa.",
                "Вода хороша."
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
                "jallu pacha",
                "сезон дощів"
              ],
              [
                "awti pacha",
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
                "Jallu pachan wali jalluwa.",
                "У сезон дощів багато дощів."
              ],
              [
                "Awti pachax thayawa.",
                "У сухий сезон холодно."
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
                "Qawqhas valorpa?",
                "Скільки коштує?"
              ],
              [
                "Waranqa bolivianowa.",
                "Тисяча болівіано."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aka libru pä pataka bolivianowa.",
                "Ця книга коштує двісті болівіано."
              ],
              [
                "Wali qariwa.",
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
                "Amuyta...",
                "Я думаю, що..."
              ],
              [
                "Nayan amuyunxa...",
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
                "Amuyta chiqapaki sasktama.",
                "Я думаю, що ти правий."
              ],
              [
                "Nayan amuyunxa askiwa.",
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
                "jichhürü / qharüru / masüru",
                "сьогодні / завтра / вчора"
              ],
              [
                "jichha / qhiparu",
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
                "Qharürun jikisiñäni.",
                "Побачимось завтра."
              ],
              [
                "Jichhax irnaqasktwa.",
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
                "khitisa",
                "хтось"
              ],
              [
                "kunasa",
                "щось"
              ],
              [
                "janiw khitisa",
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
                "Khitisa jawsawayitu.",
                "Хтось мені подзвонив."
              ],
              [
                "Kunasa istʼanïtha.",
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
                "Ay!",
                "Ой!"
              ],
              [
                "Askiskiwa!",
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
                "Ay, wali sumawa!",
                "Ой, як гарно!"
              ],
              [
                "Askiskiwa, suma yatiyawa!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція \"є\" (utji) — A2",
        "titleEn": "Existential \"There Is\" (Utji) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається дієсловом utji (є, існує), яке узгоджується з підметом.",
            "en": {
              "text": "The existence of something is expressed with the verb utji (there is), which agrees with the subject."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Umax utjiwa.",
                "Є вода."
              ],
              [
                "Tiempox janiw utjkiti.",
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
                "Aka markanx walja jaqinaka utjiwa.",
                "Тут багато людей."
              ],
              [
                "Aka markan tiendax janiw utjkiti.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-existential",
        "title": "Заперечна екзистенційна форма — A2",
        "titleEn": "Negative Existential — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення utji слідує звичайному правилу циркумфікса jani...-ti, приєднаного прямо до дієслова.",
            "en": {
              "text": "The negation of utji follows the regular jani...-ti circumfix rule, attached directly to the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Janiw qullqix utjkiti.",
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
                "Aka markanx janiw khitisa utjkiti.",
                "Тут нікого немає."
              ],
              [
                "Janiw jan waltʼäwix utjkiti.",
                "Немає проблем."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-cha) — B1",
        "titleEn": "Diminutives (-Cha) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливість виражається суфіксом -cha, доданим до кінця іменника.",
            "en": {
              "text": "Affection/diminutive is expressed with the suffix -cha, added to the end of the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mama (мама)",
                "mamacha",
                "матусенька"
              ],
              [
                "wawa (дитина)",
                "wawacha",
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
                "Wawachax ikïskiwa.",
                "Малятко спить."
              ],
              [
                "Mamachaja wali sumawa.",
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
                "tata",
                "пан/дядько (поважне звертання)"
              ],
              [
                "mama",
                "пані/тітка (поважне звертання)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kamisaraki, tata.",
                "Вітаю, пане."
              ],
              [
                "Yuspagara, mama.",
                "Дякую, пані."
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
                "Ama sua, ama llulla, ama qhilla.",
                "Не кради, не бреши, не лінуйся (андійський моральний принцип, спільний з кечуа)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Awilanakasax siwa: ama sua, ama llulla, ama qhilla.",
                "Наші предки казали: не кради, не бреши, не лінуйся."
              ],
              [
                "Chʼamampi sarasax phuqhasiwa.",
                "Наполегливо йдучи, досягнеш мети."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-spanish",
        "title": "Запозичення з іспанської — B1",
        "titleEn": "Spanish Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Багато сучасних понять (техніка, дати, гроші) запозичені з іспанської й адаптовані до аймарської фонології.",
            "en": {
              "text": "Many modern concepts (technology, dates, money) are borrowed from Spanish and adapted to Aymara phonology."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "awtu (з ісп. \"auto\")",
                "машина"
              ],
              [
                "telefono",
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
                "Awtuja machaqawa.",
                "Моя машина нова."
              ],
              [
                "Telefonoja apthaptawayxi.",
                "Мій телефон зламався."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Присвійні суфікси — A2",
        "titleEn": "Possessive Suffixes — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність часто виражається коротким суфіксом, доданим прямо до іменника (-ja мій, -ma твій, -pa його/її), а не окремим словом.",
            "en": {
              "text": "Possession is often expressed with a short suffix attached directly to the noun (-ja my, -ma your, -pa his/her), rather than a separate word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "uta (дім)",
                "utaja",
                "мій дім"
              ],
              [
                "libru (книга)",
                "librupa",
                "його/її книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Utajax jisk'awa.",
                "Мій дім маленький."
              ],
              [
                "Mamamax kawkins?",
                "Де твоя мама?"
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-order-rules",
        "title": "Фіксований порядок суфіксних \"слотів\" — B2",
        "titleEn": "Fixed Order of Suffix \"Slots\" — B2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси приєднуються до кореня в чітко визначеному порядку слотів (напр. похідні → відмінкові → топікові/евіденційні) — переставити їх довільно неможливо.",
            "en": {
              "text": "Suffixes attach to the root in a strictly defined slot order (e.g. derivational → case → topic/evidential) — they cannot be arbitrarily reordered."
            }
          },
          {
            "type": "table",
            "title": "Приклад порядку",
            "rows": [
              [
                "uta-na-ka-xa-wa",
                "дім-родовий-множина-топік-ствердж."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Utanakajaxa jachʼawa.",
                "А от мої доми — великі."
              ],
              [
                "Yatiqirinakasaxa jutapxiwa.",
                "А от наші учні прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-construction",
        "title": "Порівняння через \"...ukat sipansa\" — A2",
        "titleEn": "Comparison via \"...Ukat Sipansa\" — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Аймара не має синтетичного вищого ступеня — порівняння виражається конструкцією \"X ukat sipansa\" (більш ніж X).",
            "en": {
              "text": "Aymara has no synthetic comparative — comparison is expressed with the construction \"X ukat sipansa\" (more than X)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Jupax nayat sipansa jachʼawa.",
                "Він більший за мене."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Aka uta ukat sipansa jachʼawa.",
                "Цей дім більший за той."
              ],
              [
                "Taqinit sipansa yatiriwa.",
                "Він розумніший за всіх."
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
            "title": "Приклади",
            "rows": [
              [
                "jachʼa uta",
                "великий дім"
              ],
              [
                "jisk'a wawa",
                "маленька дитина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jachʼa uta munta.",
                "Я хочу великий дім."
              ],
              [
                "Jisk'a wawax ikiski.",
                "Маленька дитина спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-agreement-subject-object",
        "title": "Узгодження дієслова з підметом і додатком — B2",
        "titleEn": "Bipersonal Verb Agreement (Subject & Object) — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово може одночасно узгоджуватися і з підметом, і з додатком через спеціальні \"біперсональні\" суфікси — одна форма дієслова кодує обидва учасники дії.",
            "en": {
              "text": "A verb can agree with both the subject and the object at once through special \"bipersonal\" suffixes — one verb form encodes both participants of the action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Uñjsma.",
                "Я тебе бачу (одна форма кодує \"я\" і \"тебе\")."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yanapt'ista.",
                "Ти мені допомагаєш."
              ],
              [
                "Churapxitu.",
                "Вони дають мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-construction",
        "title": "Підрядне означальне речення (номіналізатор -iri/-ta) — B1",
        "titleEn": "Relative Clause (Nominalizer -Iri/-Ta) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого слова \"який/що\" аймара перетворює саме дієслово на іменник за допомогою номіналізатора -iri (діяч) чи -ta (результат) і ставить його перед означуваним іменником.",
            "en": {
              "text": "Instead of a separate word for \"who/which\", Aymara turns the verb itself into a noun with the nominalizer -iri (agent) or -ta (result), placed before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "jutiri jaqi",
                "людина, яка приходить (буквально: приходить-номіналізатор людина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Liyiri wawax yatiqirïwa.",
                "Дитина, яка читає, розумна."
              ],
              [
                "Lurata utax jachʼawa.",
                "Побудований дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличне звертання (частка -y) — A2",
        "titleEn": "Vocative Address (Particle -Y) — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання до людини часто супроводжується подовженням кінцевого голосного чи часткою -y, доданою до імені.",
            "en": {
              "text": "Direct address to a person is often accompanied by lengthening the final vowel or the particle -y, added to the name."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mamáy!",
                "Мамо!"
              ],
              [
                "Jupitay!",
                "Друже! (звертання)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mamáy, jutam!",
                "Мамо, іди сюди!"
              ],
              [
                "Tataya, sarañäni!",
                "Пане, ходімо!"
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
        "id": "spatial-metaphor-past-future",
        "title": "Минуле спереду, майбутнє позаду — унікальна метафора часу — B2",
        "titleEn": "Past in Front, Future Behind — A Unique Time Metaphor — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже всіх відомих мов світу (де майбутнє попереду, а минуле позаду), носії аймара просторово розташовують минуле ПОПЕРЕДУ (бо його видно/знаєш), а майбутнє ПОЗАДУ (бо його не бачиш) — це підтверджено і в мові, і в жестах.",
            "en": {
              "text": "Unlike almost every known language in the world (where the future is ahead and the past behind), Aymara speakers spatially place the past IN FRONT (because it's seen/known) and the future BEHIND (because it's unseen) — confirmed both in language and in gesture."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "nayra pacha (\"передній час\")",
                "минуле"
              ],
              [
                "qhipa pacha (\"задній час\")",
                "майбутнє"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nayra pachan jakasipxna.",
                "У минулому (буквально: передньому часі) вони так жили."
              ],
              [
                "Qhipa pachanx kunas pasañapa janiw yatktti.",
                "Що станеться в майбутньому (буквально: задньому часі), я не знаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspirated-glottalized-consonants",
        "title": "Три ряди приголосних: звичайні/придихові/глотталізовані — B2",
        "titleEn": "Three Consonant Series: Plain/Aspirated/Glottalized — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Аймара, як і сусідня кечуа, розрізняє три ряди зімкнених приголосних (p/pʼ/pʰ, t/tʼ/tʰ, k/kʼ/kʰ) — звичайні, глотталізовані (з різким змиканням горла) й придихові, і заміна одного на інший змінює значення слова повністю.",
            "en": {
              "text": "Aymara, like neighboring Quechua, distinguishes three series of stop consonants (p/pʼ/pʰ, t/tʼ/tʰ, k/kʼ/kʰ) — plain, glottalized (with a sharp throat closure), and aspirated — and swapping one for another completely changes a word's meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклад мінімальної трійки",
            "rows": [
              [
                "khaya (звичайне kh)",
                "он там"
              ],
              [
                "qhaya (увулярне придихове)",
                "інше слово, інший корінь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khaya utan jikxatasi.",
                "Він знаходиться он у тому домі."
              ],
              [
                "Pʼuytʼawayta.",
                "Я почав щось робити (глотталізований pʼ)."
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-drop-suffix-rule",
        "title": "Правило випадіння голосного перед деякими суфіксами — B2",
        "titleEn": "Vowel-Drop Rule Before Certain Suffixes — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі суфікси (позначені як \"сильні\") викликають випадіння останнього голосного основи, до якої вони приєднуються, — це не помилка написання, а систематичне фонологічне правило, яке слід знати напам'ять для кожного суфікса.",
            "en": {
              "text": "Some suffixes (marked as \"strong\") trigger the deletion of the final vowel of the stem they attach to — this isn't a spelling mistake but a systematic phonological rule that must be memorized suffix by suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "jaqi + -xa → jaqxa",
                "людина + топік → (голосний i випав)"
              ],
              [
                "uta + -kama → utkama",
                "дім + до → (голосний a випав)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jaqxa jutiwa.",
                "А от людина — приходить."
              ],
              [
                "Utkama sarta.",
                "Я йду до дому."
              ]
            ]
          }
        ]
      }
    ]
  }
];
