// Vymova — data/grammar-data/grammar_pcm.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PCM: GrammarCategory[] = [
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
            "text": "Займенники нігерійського піджину подібні до англійських, але спрощені — форма не змінюється за відмінком так, як в англійській \"I/me\".",
            "en": {
              "text": "Nigerian Pidgin pronouns resemble English but are simplified — they do not change by case the way English \"I/me\" does."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "I",
                "я"
              ],
              [
                "you",
                "ти / ви"
              ],
              [
                "im / e",
                "він / вона / воно"
              ],
              [
                "we",
                "ми"
              ],
              [
                "dem",
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
                "I dey fine.",
                "Я в порядку."
              ],
              [
                "Dem dey house.",
                "Вони вдома."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "na-copula",
        "title": "Зв'язка \"na\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Для ототожнення (\"я — вчитель\") використовується слово na перед іменником, а для місцезнаходження/існування — dey.",
            "en": {
              "text": "For identity statements (\"I am a teacher\"), use na before the noun; for location/existence, use dey."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + na + іменник",
            "rows": [
              ["I", "na teacher", "я вчитель"],
              ["Im", "na doctor", "він/вона лікар"],
              ["E", "dey house", "він удома (dey = місцезнаходження)"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Im na doctor.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Na — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"no\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою no, яка ставиться перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle no, placed right before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + no + дієслово",
            "rows": [
              ["I know.", "I no know.", "Я знаю. → Я не знаю."],
              ["I wan go.", "I no wan go.", "Я хочу йти. → Я не хочу йти."],
              ["E dey work.", "E no dey work.", "Він працює. → Він не працює."]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "E no dey work today.",
                "Він не працює сьогодні."
              ]
            ]
          }
        ],
        "titleEn": "Negation with No — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією без зміни порядку слів, іноді з часткою abi в кінці.",
            "en": {
              "text": "Yes/no questions are usually formed just by rising intonation, without changing word order, sometimes with abi at the end."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              ["You dey fine.", "You dey fine?", "Ти в порядку. → Ти в порядку?"],
              ["Im dey house.", "Im dey house?", "Він удома. → Він удома?"],
              ["You get time.", "You get time?", "У тебе є час. → У тебе є час?"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "You dey come, abi?",
                "Ти йдеш, чи не так?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "dey-marker",
        "title": "Маркер \"dey\" — A1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово dey перед дієсловом позначає тривалу/звичну дію — подібно до англійського \"-ing\" чи Present Simple.",
            "en": {
              "text": "The word dey before a verb marks an ongoing or habitual action — similar to English \"-ing\" or the Present Simple."
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
                "I dey work.",
                "Я працюю (зараз або регулярно)."
              ],
              [
                "Dem dey chop.",
                "Вони їдять."
              ]
            ]
          }
        ],
        "titleEn": "The Marker Dey — A1"
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
        "id": "don-perfect",
        "title": "Маркер завершеної дії \"don\" — A1",
        "titleEn": "Perfect Marker \"Don\" — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка don перед дієсловом позначає завершену дію, результат якої актуальний зараз — подібно до англійського Present Perfect.",
            "en": {
              "text": "The particle don before the verb marks a completed action whose result is relevant now — similar to the English Present Perfect."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + don + дієслово",
            "rows": [
              ["I", "don chop", "я вже поїв"],
              ["Dem", "don go", "вони вже пішли"],
              ["E", "don finish", "це вже закінчилося"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "E don finish.",
                "Це вже закінчилося."
              ],
              [
                "I don see am.",
                "Я вже це бачив."
              ]
            ]
          }
        ]
      },
      {
        "id": "go-future",
        "title": "Маркер майбутнього \"go\" — A1",
        "titleEn": "Future Marker \"Go\" — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка go перед дієсловом позначає майбутню дію.",
            "en": {
              "text": "The particle go before the verb marks a future action."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + go + дієслово",
            "rows": [
              ["I", "go come", "я прийду"],
              ["E", "go rain", "піде дощ"],
              ["We", "go see tomorrow", "ми побачимося завтра"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "We go see tomorrow.",
                "Ми побачимося завтра."
              ],
              [
                "Dem go dey there.",
                "Вони будуть там."
              ]
            ]
          }
        ]
      },
      {
        "id": "bin-past",
        "title": "Маркер віддаленого минулого \"bin\" — A2",
        "titleEn": "Remote Past Marker \"Bin\" — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Частка bin перед дієсловом позначає дію, що відбулася в далекому минулому або передувала іншій минулій події.",
            "en": {
              "text": "The particle bin before the verb marks an action that happened in the remote past or preceded another past event."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I bin dey Lagos before.",
                "Я раніше жив у Лагосі."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "E bin sabi am well.",
                "Він добре його знав (раніше)."
              ],
              [
                "Dem bin dey work together.",
                "Вони раніше працювали разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "neva-negative-perfect",
        "title": "Заперечний перфект \"neva\" — A2",
        "titleEn": "Negative Perfect \"Neva\" — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Частка neva (never) позначає, що дія ще не відбулася — заперечний відповідник маркера don.",
            "en": {
              "text": "The particle neva (never) marks that an action has not yet happened — the negative counterpart of the marker don."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I don chop.",
                "Я вже поїв."
              ],
              [
                "I neva chop.",
                "Я ще не їв."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dem neva come.",
                "Вони ще не прийшли."
              ],
              [
                "E neva ready.",
                "Це ще не готове."
              ]
            ]
          }
        ]
      },
      {
        "id": "go-don-future-perfect",
        "title": "Майбутній доконаний \"go don\" — B1",
        "titleEn": "Future Perfect \"Go Don\" — B1",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Маркери go і don можуть поєднуватися, щоб виразити дію, яка буде завершена до певного моменту в майбутньому.",
            "en": {
              "text": "The markers go and don can combine to express an action that will be completed by a certain point in the future."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "By tomorrow, I go don finish.",
                "До завтра я вже закінчу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "By 5, dem go don reach.",
                "До 5-ї вони вже дістануться."
              ],
              [
                "I go don sleep before you come.",
                "Я вже засну до того, як ти прийдеш."
              ]
            ]
          }
        ]
      },
      {
        "id": "bin-dey-past-progressive",
        "title": "Минулий тривалий \"bin dey\" — B1",
        "titleEn": "Past Progressive \"Bin Dey\" — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Поєднання bin dey перед дієсловом виражає дію, що тривала в певний момент минулого.",
            "en": {
              "text": "The combination bin dey before the verb expresses an action that was in progress at a certain point in the past."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I bin dey sleep when you call.",
                "Я спав, коли ти подзвонив."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dem bin dey chop when I reach.",
                "Вони їли, коли я прийшов."
              ],
              [
                "E bin dey rain yesterday.",
                "Вчора йшов дощ (тривалий процес)."
              ]
            ]
          }
        ]
      },
      {
        "id": "come-inceptive",
        "title": "Дієслово \"come\" як маркер послідовності — B1",
        "titleEn": "\"Come\" as a Sequential/Inceptive Marker — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово come у ланцюжку дієслів часто втрачає буквальне значення \"прийти\" й показує, що одна дія відбулася слідом за іншою.",
            "en": {
              "text": "The verb come in a verb chain often loses its literal meaning of \"to come\" and shows that one action followed another."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "E chop come sleep.",
                "Він поїв, а потім заснув."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I wash am come put am for table.",
                "Я помив це, а потім поклав на стіл."
              ],
              [
                "Dem run come fall.",
                "Вони бігли, а потім впали."
              ]
            ]
          }
        ]
      },
      {
        "id": "make-subjunctive",
        "title": "Спонукальний \"make\" — A2",
        "titleEn": "Hortative \"Make\" — A2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Слово make перед підметом і дієсловом виражає пропозицію, побажання чи м'який наказ — щось на кшталт англійського \"let's/let\".",
            "en": {
              "text": "The word make before the subject and verb expresses a suggestion, wish, or soft command — something like English \"let's/let\"."
            }
          },
          {
            "type": "formula",
            "title": "make + підмет + дієслово",
            "rows": [
              ["make", "we go", "давай(мо) підемо"],
              ["make", "e come", "хай він прийде"],
              ["make", "I try", "дай-но я спробую"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Make I try.",
                "Дай-но я спробую."
              ],
              [
                "Make dem wait small.",
                "Хай вони трохи почекають."
              ]
            ]
          }
        ]
      },
      {
        "id": "fit-modal-ability",
        "title": "Модальний \"fit\" (могти) — A2",
        "titleEn": "Modal \"Fit\" (Can/Able To) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Слово fit перед дієсловом виражає здатність чи можливість — відповідає англійському \"can\".",
            "en": {
              "text": "The word fit before the verb expresses ability or possibility — corresponds to English \"can\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I fit swim.",
                "Я вмію плавати."
              ],
              [
                "You fit help me?",
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
                "E fit rain today.",
                "Сьогодні може піти дощ."
              ],
              [
                "Dem no fit come.",
                "Вони не можуть прийти."
              ]
            ]
          }
        ]
      },
      {
        "id": "wan-modal-desire",
        "title": "Модальний \"wan\" (хотіти) — A1",
        "titleEn": "Modal \"Wan\" (Want To) — A1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Слово wan (want) перед дієсловом виражає бажання виконати дію.",
            "en": {
              "text": "The word wan (want) before the verb expresses a desire to do something."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I wan chop.",
                "Я хочу їсти."
              ],
              [
                "She wan sleep.",
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
                "Dem wan go house.",
                "Вони хочуть додому."
              ],
              [
                "I no wan talk.",
                "Я не хочу говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "suppose-modal-obligation",
        "title": "Модальний \"suppose\" (мусити) — B1",
        "titleEn": "Modal \"Suppose\" (Should/Ought To) — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Слово suppose перед підметом і дієсловом виражає обов'язок чи пораду — \"мав би\".",
            "en": {
              "text": "The word suppose before the subject and verb expresses obligation or advice — \"ought to\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "You suppose come early.",
                "Тобі варто прийти раніше."
              ],
              [
                "I suppose don finish.",
                "Я мав би вже закінчити."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "We suppose tell am.",
                "Нам треба йому сказати."
              ],
              [
                "Dem no suppose do dat.",
                "Вони не повинні були так робити."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A1",
        "titleEn": "Imperative Mood — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб зазвичай — це просто гола форма дієслова без підмета, як в англійській.",
            "en": {
              "text": "The imperative is usually just the bare verb form with no subject, as in English."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Come here!",
                "Іди сюди!"
              ],
              [
                "Siddon!",
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
                "Abeg, wait small.",
                "Будь ласка, зачекай трохи."
              ],
              [
                "No touch am!",
                "Не чіпай це!"
              ]
            ]
          }
        ]
      },
      {
        "id": "serial-verb-constructions",
        "title": "Ланцюжки дієслів (serial verbs) — B1",
        "titleEn": "Serial Verb Constructions — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів можуть стояти підряд без сполучника, кожне додає окремий відтінок значення до однієї події — риса, успадкована від мов-субстратів (йоруба, ігбо).",
            "en": {
              "text": "Several verbs can stand one after another with no conjunction, each adding a shade of meaning to a single event — a feature inherited from the substrate languages (Yoruba, Igbo)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I carry am go house.",
                "Я відніс це додому (буквально: узяв-пішов-дім)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "E take knife cut am give me.",
                "Він взяв ножем і відрізав мені (дав мені)."
              ],
              [
                "Dem run enter house.",
                "Вони забігли в дім."
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
        "id": "plural-dem",
        "title": "Множина з \"dem\" — A1",
        "titleEn": "Plural with \"Dem\" — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина не позначається суфіксом (як англ. -s), а окремим словом dem, поставленим після іменника.",
            "en": {
              "text": "The plural is not marked with a suffix (like English -s) but with the separate word dem, placed after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "book",
                "книга"
              ],
              [
                "book dem",
                "книги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Di children dem dey play.",
                "Діти граються."
              ],
              [
                "I see di car dem.",
                "Я бачив ті машини."
              ]
            ]
          }
        ]
      },
      {
        "id": "possession-construction",
        "title": "Присвійність (без \"'s\") — A1",
        "titleEn": "Possession Without \"'s\" — A1",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність виражається простим поставленням присвійного слова перед іменником, без апострофа-s чи прийменника.",
            "en": {
              "text": "Possession is expressed by simply placing the possessor word before the noun, with no apostrophe-s or preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "my buk",
                "моя книга"
              ],
              [
                "im moto",
                "його/її машина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dat na John im buk.",
                "Це книга Джона."
              ],
              [
                "Where my phone?",
                "Де мій телефон?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація — A2",
        "titleEn": "Reduplication — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова (редуплікація) підсилює значення, показує тривалість чи повторюваність дії — риса, успадкована від мов-субстратів.",
            "en": {
              "text": "Repeating a word (reduplication) intensifies meaning or shows an action's duration/repetition — a feature inherited from the substrate languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "waka-waka",
                "тинятися без діла"
              ],
              [
                "well-well",
                "дуже добре / насправді"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "E dey do waka-waka every day.",
                "Він щодня тиняється без діла."
              ],
              [
                "I like am well-well.",
                "Мені це дуже подобається."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Порядок прикметника й іменника — A1",
        "titleEn": "Adjective + Noun Order — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники стоять перед іменником і не змінюються за числом чи родом.",
            "en": {
              "text": "Adjectives precede the noun and don't change for number or gender."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "big house",
                "великий дім"
              ],
              [
                "fine girl",
                "гарна дівчина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I get one big house.",
                "У мене є великий дім."
              ],
              [
                "Di small pikin dey sleep.",
                "Маленька дитина спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Порівняння з \"pass\" — A2",
        "titleEn": "Comparison with \"Pass\" — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння \"більше ніж\" виражається словом pass після прикметника, а не окремою формою прикметника.",
            "en": {
              "text": "The comparison \"more than\" is expressed with the word pass after the adjective, rather than a separate comparative form."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "E big pass am.",
                "Це більше, ніж те."
              ],
              [
                "Im tall pass me.",
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
                "Dis one sweet pass di oda one.",
                "Це смачніше за те."
              ],
              [
                "E get sense pass all of us.",
                "У нього більше розуму, ніж у всіх нас."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні слова \"dis/dat\" — A1",
        "titleEn": "Demonstratives \"Dis/Dat\" — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dis buk",
                "ця книга"
              ],
              [
                "dat moto",
                "та машина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dis one na mine.",
                "Це моє."
              ],
              [
                "Dat house big well-well.",
                "Той дім дуже великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-words",
        "title": "Питальні слова — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "wetin",
                "що"
              ],
              [
                "wia",
                "де"
              ],
              [
                "wen",
                "коли"
              ],
              [
                "how",
                "як"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wetin dey happen?",
                "Що відбувається?"
              ],
              [
                "Wia you dey go?",
                "Куди ти йдеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-wey",
        "title": "Відносне слово \"wey\" — B1",
        "titleEn": "Relative Marker \"Wey\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Слово wey (від англ. \"which\") вводить підрядне означальне речення й перекладається як \"який/що\".",
            "en": {
              "text": "The word wey (from English \"which\") introduces a relative clause and translates as \"who/which/that\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Di man wey come yesterday na my broda.",
                "Чоловік, який прийшов учора, — мій брат."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Di buk wey you dey read fine.",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "I no know wetin wey e want.",
                "Я не знаю, чого він хоче."
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
                "one",
                "1"
              ],
              [
                "two",
                "2"
              ],
              [
                "three",
                "3"
              ],
              [
                "ten",
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
                "I get two sista.",
                "У мене є дві сестри."
              ],
              [
                "Ten pesin come.",
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
                "first",
                "перший"
              ],
              [
                "second",
                "другий"
              ],
              [
                "third",
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
                "Dis na my first buk.",
                "Це моя перша книга."
              ],
              [
                "E come second.",
                "Він прийшов другим."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Кількісні слова — A1",
        "titleEn": "Quantifiers — A1",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "plenty",
                "багато"
              ],
              [
                "small",
                "мало / трохи"
              ],
              [
                "some",
                "деякі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I get plenty buk.",
                "У мене багато книг."
              ],
              [
                "Give me small water.",
                "Дай мені трохи води."
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
                "and",
                "і, та"
              ],
              [
                "but",
                "але"
              ],
              [
                "or",
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
                "Me and you na friend.",
                "Я і ти — друзі."
              ],
              [
                "I wan go, but I no get time.",
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
                "bikos",
                "тому що"
              ],
              [
                "if",
                "якщо"
              ],
              [
                "wen",
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
                "I happy bikos you come.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Wen I free, I go call you.",
                "Коли буду вільний, подзвоню тобі."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-svo",
        "title": "Базовий порядок слів SVO — A1",
        "titleEn": "Basic SVO Word Order — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Основний порядок слів — підмет-присудок-додаток (SVO), як в англійській, і залишається доволі стійким.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), like English, and stays fairly fixed."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I chop rice.",
                "Я з'їв рис."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "She buy new shoe.",
                "Вона купила нові туфлі."
              ],
              [
                "Dem build house for village.",
                "Вони збудували дім у селі."
              ]
            ]
          }
        ]
      },
      {
        "id": "topicalization",
        "title": "Топікалізація (винесення на початок) — B1",
        "titleEn": "Topicalization — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Слово чи фразу, на якій потрібно зробити наголос, часто виносять на початок речення, залишаючи слід у вигляді займенника далі — риса, успадкована від мов-субстратів.",
            "en": {
              "text": "A word or phrase to be emphasized is often fronted to the start of the sentence, leaving a pronoun trace further on — a feature inherited from the substrate languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dat buk, I don read am.",
                "Ту книгу я вже прочитав."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "My broda, I no see am today.",
                "Мого брата я сьогодні не бачив."
              ],
              [
                "Dis work, e hard well-well.",
                "Ця робота — вона справді важка."
              ]
            ]
          }
        ]
      },
      {
        "id": "focus-marker-na",
        "title": "\"na\" як маркер фокусу — B1",
        "titleEn": "\"Na\" as a Focus Marker — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Крім зв'язки, na вживають на початку виділюваного слова для позначення фокусу речення — \"саме ...\".",
            "en": {
              "text": "Besides being a copula, na is used at the start of the emphasized word to mark the focus of the sentence — \"it is X that...\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Na yam I chop.",
                "Саме ямс я з'їв."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Na you I dey find.",
                "Саме тебе я шукаю."
              ],
              [
                "Na so e be.",
                "Саме так воно і є."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositional-for",
        "title": "Універсальний прийменник \"for\" — A1",
        "titleEn": "The Multi-Purpose Preposition \"For\" — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Слово for покриває значення багатьох англійських прийменників одразу: in, at, to, on — конкретне значення випливає з контексту.",
            "en": {
              "text": "The word for covers the meaning of many English prepositions at once: in, at, to, on — the specific meaning depends on context."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "for house",
                "у домі / до дому"
              ],
              [
                "for market",
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
                "I dey for school.",
                "Я в школі."
              ],
              [
                "Put am for table.",
                "Поклади це на стіл."
              ]
            ]
          }
        ]
      },
      {
        "id": "give-benefactive",
        "title": "\"give\" як маркер вигодонабувача — B1",
        "titleEn": "\"Give\" as a Benefactive Marker — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "У ланцюжку дієслів give вживається не в значенні \"дати\", а щоб позначити, для кого виконується дія.",
            "en": {
              "text": "In a verb chain, give is used not in the literal sense \"to give\" but to mark for whose benefit the action is performed."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I carry am give you.",
                "Я приніс це для тебе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "She cook food give us.",
                "Вона приготувала їжу для нас."
              ],
              [
                "E buy present give am.",
                "Він купив подарунок для неї."
              ]
            ]
          }
        ]
      },
      {
        "id": "take-instrumental",
        "title": "\"take\" як маркер знаряддя — B1",
        "titleEn": "\"Take\" as an Instrumental Marker — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово take в ланцюжку показує, яким знаряддям виконується дія, — функціонує подібно до орудного відмінка в інших мовах.",
            "en": {
              "text": "The verb take in a chain shows the tool an action is performed with — it functions similarly to the instrumental case in other languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "E take knife cut am.",
                "Він розрізав це ножем."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I take spoon chop rice.",
                "Я їв рис ложкою."
              ],
              [
                "Dem take rope tie am.",
                "Вони зв'язали це мотузкою."
              ]
            ]
          }
        ]
      },
      {
        "id": "sabi-know-ability",
        "title": "\"sabi\" — знати як / вміти — A2",
        "titleEn": "\"Sabi\" — to Know How / to Be Skilled — A2",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово sabi (від португ. saber через піджин) означає \"знати\" в сенсі навички чи вміння виконувати щось.",
            "en": {
              "text": "The verb sabi (from Portuguese saber via pidgin contact) means \"to know\" in the sense of a skill or an ability to do something."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I sabi cook.",
                "Я вмію готувати."
              ],
              [
                "E sabi English well.",
                "Він добре знає англійську."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "You sabi drive?",
                "Ти вмієш водити?"
              ],
              [
                "Dem no sabi swim.",
                "Вони не вміють плавати."
              ]
            ]
          }
        ]
      },
      {
        "id": "get-existential-possession",
        "title": "\"get\" — мати / є — A1",
        "titleEn": "\"Get\" — to Have / There Is — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово get виражає і \"мати\" (володіння), і \"є/існує\" (наявність) — залежно від контексту.",
            "en": {
              "text": "The verb get expresses both \"to have\" (possession) and \"there is\" (existence) — depending on context."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I get car.",
                "У мене є машина."
              ],
              [
                "E get pesin for house.",
                "У домі є хтось."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dem get plenty money.",
                "У них багато грошей."
              ],
              [
                "No get wahala.",
                "Немає проблем."
              ]
            ]
          }
        ]
      },
      {
        "id": "dey-existential",
        "title": "\"dey\" — наявність та місцезнаходження — A1",
        "titleEn": "\"Dey\" — Existence & Location — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім маркера тривалої дії, dey самостійно означає \"бути/знаходитись\" або \"існувати\".",
            "en": {
              "text": "Besides marking ongoing action, dey on its own means \"to be located\" or \"to exist\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Wia you dey?",
                "Де ти?"
              ],
              [
                "Food dey.",
                "Їжа є."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Im dey house.",
                "Він удома."
              ],
              [
                "No wahala dey.",
                "Проблем немає."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-case-marking",
        "title": "Займенники без відмінка — A1",
        "titleEn": "Pronouns Without Case — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від англійської (I/me, he/him), займенники піджину мають ту саму форму і як підмет, і як додаток.",
            "en": {
              "text": "Unlike English (I/me, he/him), Pidgin pronouns have the same form as both subject and object."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I see am.",
                "Я побачив його."
              ],
              [
                "E see me.",
                "Він побачив мене."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dem call we.",
                "Вони покликали нас."
              ],
              [
                "We call dem.",
                "Ми покликали їх."
              ]
            ]
          }
        ]
      },
      {
        "id": "multiple-negation",
        "title": "Подвійне заперечення — B1",
        "titleEn": "Double/Multiple Negation — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від стандартної англійської, кілька заперечних слів в одному реченні не скасовують одне одного, а посилюють заперечення — як в українській.",
            "en": {
              "text": "Unlike standard English, several negative words in one sentence don't cancel each other out but reinforce the negation — like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I no know nothing.",
                "Я нічого не знаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nobody no come.",
                "Ніхто не прийшов."
              ],
              [
                "I no see nobody.",
                "Я нікого не бачив."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-context-omission",
        "title": "Множина без \"dem\" у контексті — A2",
        "titleEn": "Plural Omitted When Clear from Context — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Коли кількість вже зрозуміла з числівника чи контексту, слово dem часто пропускають, і форма іменника залишається незмінною.",
            "en": {
              "text": "When the quantity is already clear from a numeral or context, the word dem is often dropped, and the noun form stays unchanged."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "I get three book.",
                "У мене три книги (без dem, бо число вже вказано)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Five pesin dey come.",
                "П'ятеро людей приходить."
              ],
              [
                "Many car dey road.",
                "Багато машин на дорозі."
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
                "How you dey?",
                "Як справи?"
              ],
              [
                "I dey fine, thank you.",
                "У мене все добре, дякую."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Good morning o!",
                "Доброго ранку!"
              ],
              [
                "Make we dey go.",
                "Ходімо."
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
                "Monday",
                "понеділок"
              ],
              [
                "Saturday",
                "субота"
              ],
              [
                "Sunday",
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
                "Today na Monday.",
                "Сьогодні понеділок."
              ],
              [
                "I dey rest for Sunday.",
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
                "My birthday na May.",
                "Мій день народження в травні."
              ],
              [
                "Today na ten January.",
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
                "Wetin time e be?",
                "Котра година?"
              ],
              [
                "E be three o'clock.",
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
                "We go meet by six.",
                "Зустрінемось о шостій."
              ],
              [
                "Na afternoon now.",
                "Зараз полудень."
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
                "Sun dey shine.",
                "Сонячно."
              ],
              [
                "Rain dey fall.",
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
                "E dey cold today.",
                "Сьогодні холодно."
              ],
              [
                "Weather hot well-well.",
                "Погода дуже жарка."
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
                "no wahala",
                "жодних проблем"
              ],
              [
                "e don do",
                "досить, годі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "No wahala, I go help you.",
                "Жодних проблем, я тобі допоможу."
              ],
              [
                "E don do, make we stop.",
                "Годі, давай зупинимось."
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
                "Chai!",
                "Ой!"
              ],
              [
                "Wahala!",
                "От халепа!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Chai, wetin happen?",
                "Ой, що сталося?"
              ],
              [
                "Na wa o!",
                "Ну й діла!"
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
                "oga",
                "пане / шефе"
              ],
              [
                "madam",
                "пані"
              ],
              [
                "broda / sista",
                "брате / сестро (до незнайомих теж)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Oga, good morning.",
                "Пане, доброго ранку."
              ],
              [
                "Sista, abeg help me.",
                "Сестро, допоможи мені, будь ласка."
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
                "How much e be?",
                "Скільки коштує?"
              ],
              [
                "E be one thousand naira.",
                "Це тисяча найр."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dis buk cost two thousand naira.",
                "Ця книга коштує дві тисячі найр."
              ],
              [
                "E cost well-well.",
                "Це дуже дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені слова — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "somebody / person",
                "хтось"
              ],
              [
                "sometin",
                "щось"
              ],
              [
                "nobody",
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
                "Somebody call me.",
                "Хтось мені подзвонив."
              ],
              [
                "I hear sometin.",
                "Я щось почув."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Нюанси заперечення (no vs neva) — B1",
        "titleEn": "Nuances of Negation (No vs Neva) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"no\" — звичайне заперечення, \"neva\" — заперечує, що дія вже відбулася (\"ще ні\"), а не сам факт можливості дії.",
            "en": {
              "text": "\"no\" is plain negation, while \"neva\" negates that the action has already happened (\"not yet\") rather than the possibility of the action itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I no like am.",
                "Мені це не подобається."
              ],
              [
                "I neva see am.",
                "Я ще не бачив цього."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dem no dey work today.",
                "Вони сьогодні не працюють."
              ],
              [
                "E neva start.",
                "Це ще не почалося."
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
                "today / tomorrow / yesterday",
                "сьогодні / завтра / вчора"
              ],
              [
                "now / later",
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
                "We go meet tomorrow.",
                "Завтра зустрінемось."
              ],
              [
                "I dey busy now.",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinion-expressions",
        "title": "Вираження думки — B1",
        "titleEn": "Expressing Opinions — B1",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I tink say...",
                "Я думаю, що..."
              ],
              [
                "To me...",
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
                "I tink say you correct.",
                "Я думаю, що ти правий."
              ],
              [
                "To me, na good idea.",
                "На мою думку, це гарна ідея."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Формальне та неформальне звертання — A2",
        "titleEn": "Formal vs Informal Address — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Формальність виражається не окремим займенником (you лишається незмінним), а титулами (oga, ma, sir) і додаванням слова abeg (будь ласка).",
            "en": {
              "text": "Formality isn't expressed with a separate pronoun (you stays unchanged) but with titles (oga, ma, sir) and adding the word abeg (please)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "You dey fine? (неформ.)",
                "Ти в порядку?"
              ],
              [
                "Ma, abeg you dey fine?",
                "Пані, вибачте, Ви в порядку?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sir, abeg wait small.",
                "Пане, будь ласка, зачекайте трохи."
              ],
              [
                "Ma, thank you well-well.",
                "Пані, дуже дякую."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives-affection",
        "title": "Пестливі слова (pikin, small) — B1",
        "titleEn": "Affectionate/Diminutive Words — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Замість суфіксів пестливість виражається окремими словами: pikin (дитина, теж пестливо про будь-кого молодшого) чи повторенням small small.",
            "en": {
              "text": "Instead of suffixes, affection is expressed with separate words: pikin (child, also affectionately for anyone younger) or the repeated small small."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "my pikin",
                "моя дитинка"
              ],
              [
                "small small",
                "потрошку, поволі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Come here, my pikin.",
                "Іди сюди, моя дитинко."
              ],
              [
                "We dey learn am small small.",
                "Ми вчимо це потрошку."
              ]
            ]
          }
        ]
      },
      {
        "id": "body-part-idioms",
        "title": "Ідіоми з частинами тіла — B1",
        "titleEn": "Body-Part Idioms — B1",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато виразів емоцій будуються навколо слова belle (живіт) чи head (голова) — риса, успадкована від мов-субстратів, де емоції часто \"знаходяться\" в тілі.",
            "en": {
              "text": "Many emotion expressions are built around the word belle (belly) or head — a feature inherited from the substrate languages, where emotions often \"live\" in the body."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "My belle full.",
                "Я наївся (буквально: мій живіт повний)."
              ],
              [
                "E vex belle.",
                "Це його розлютило."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Im belle sweet am.",
                "Він задоволений (буквально: живіт солодкий)."
              ],
              [
                "Na my head dey pain me.",
                "У мене болить голова."
              ]
            ]
          }
        ]
      },
      {
        "id": "borrowings-substrate",
        "title": "Запозичення з мов-субстратів — B1",
        "titleEn": "Substrate-Language Borrowings — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Багато повсякденних слів запозичені з йоруба, ігбо чи гауса, а не з англійської — вони вживаються так само природно, як питомі слова.",
            "en": {
              "text": "Many everyday words are borrowed from Yoruba, Igbo, or Hausa rather than English — they're used just as naturally as native words."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "abeg (йоруба/англ.)",
                "будь ласка"
              ],
              [
                "oyibo (ігбо)",
                "білошкіра людина / іноземець"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Abeg, no vex.",
                "Будь ласка, не гнівайся."
              ],
              [
                "Dat oyibo dey learn Pidgin.",
                "Той іноземець вчить піджин."
              ]
            ]
          }
        ]
      },
      {
        "id": "wetin-expressions",
        "title": "Вирази з \"wetin\" — A2",
        "titleEn": "Expressions with \"Wetin\" — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Слово wetin (\"що\") входить у безліч стійких виразів, від привітань до вигуків подиву.",
            "en": {
              "text": "The word wetin (\"what\") appears in countless set expressions, from greetings to exclamations of surprise."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Wetin dey happen?",
                "Що відбувається?"
              ],
              [
                "Wetin be dis?",
                "Що це таке?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wetin you want?",
                "Що ти хочеш?"
              ],
              [
                "Wetin be your name?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-of-manner",
        "title": "Прислівники способу дії — A2",
        "titleEn": "Adverbs of Manner — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються повторенням слова чи додаванням well-well для підсилення значення.",
            "en": {
              "text": "Manner adverbs are often formed by repeating a word or adding well-well to intensify the meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "quick-quick",
                "дуже швидко"
              ],
              [
                "well-well",
                "дуже, насправді"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Come quick-quick!",
                "Швидко-швидко йди сюди!"
              ],
              [
                "I like dis food well-well.",
                "Мені дуже подобається ця їжа."
              ]
            ]
          }
        ]
      },
      {
        "id": "tag-question-abi-deep",
        "title": "Хвостове питання \"abi\" (детально) — B1",
        "titleEn": "Tag Question \"Abi\" in Depth — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Частка abi в кінці речення перетворює твердження на питання з очікуванням підтвердження — універсальний відповідник англійських \"isn't it?/don't you?\".",
            "en": {
              "text": "The particle abi at the end of a sentence turns a statement into a question expecting confirmation — a universal counterpart to English \"isn't it?/don't you?\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "You dey come, abi?",
                "Ти йдеш, чи не так?"
              ],
              [
                "Na so, abi?",
                "Так адже?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "E fine, abi?",
                "Гарно, правда?"
              ],
              [
                "You go come tomorrow, abi?",
                "Ти прийдеш завтра, так?"
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-politeness",
        "title": "Ввічливі прохання з \"abeg\" — A2",
        "titleEn": "Polite Requests with \"Abeg\" — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Слово abeg (\"я благаю\") на початку речення пом'якшує наказовий спосіб, перетворюючи його на ввічливе прохання.",
            "en": {
              "text": "The word abeg (\"I beg\") at the start of a sentence softens the imperative, turning it into a polite request."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Come here!",
                "Іди сюди! (наказ)"
              ],
              [
                "Abeg, come here.",
                "Будь ласка, підійди сюди."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Abeg, help me small.",
                "Будь ласка, допоможи мені трохи."
              ],
              [
                "Abeg no vex.",
                "Будь ласка, не гнівайся."
              ]
            ]
          }
        ]
      },
      {
        "id": "proverbs-wisdom-sayings",
        "title": "Прислів'я та мудрі вислови — B2",
        "titleEn": "Proverbs & Wise Sayings — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислів'їв прямо перекладені з йоруба чи ігбо й зберігають образність оригіналу.",
            "en": {
              "text": "Many proverbs are direct translations from Yoruba or Igbo and retain the imagery of the original."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Monkey no fine, but e mama like am.",
                "Мавпа не гарна, але мама її любить (кожен для когось дорогий)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Small small catch monkey.",
                "Помаленьку впораєшся з великою справою."
              ],
              [
                "Water no get enemy.",
                "У води немає ворогів (вода потрібна всім)."
              ]
            ]
          }
        ]
      },
      {
        "id": "discourse-particles",
        "title": "Дискурсивні частки (o, sha, na so) — B1",
        "titleEn": "Discourse Particles (O, Sha, Na So) — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Частки o, sha, na so додають емоційний відтінок реченню, не змінюючи його буквального значення — риса, успадкована від мов-субстратів.",
            "en": {
              "text": "Particles like o, sha, na so add emotional coloring to a sentence without changing its literal meaning — a feature inherited from the substrate languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "I dey come o!",
                "Я вже йду! (з наголосом)"
              ],
              [
                "E hard sha.",
                "Це все ж таки важко."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Thank you o!",
                "Дуже дякую! (щиро)"
              ],
              [
                "Na so e be sha.",
                "Ну, так воно і є."
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
            "text": "У Нігерії немає чотирьох класичних пір року — розрізняють переважно dry season (сухий сезон) і rainy season (сезон дощів).",
            "en": {
              "text": "Nigeria doesn't have four classic seasons — mainly the dry season and the rainy season are distinguished."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dry season",
                "сухий сезон"
              ],
              [
                "rainy season",
                "сезон дощів"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rainy season don start.",
                "Сезон дощів вже почався."
              ],
              [
                "Dry season hot well-well.",
                "Сухий сезон дуже спекотний."
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
        "id": "no-standard-orthography",
        "title": "Відсутність єдиного правопису — B1",
        "titleEn": "No Standard Orthography — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості мов цього курсу, нігерійський піджин не має офіційно закріпленого правопису — те саме слово можна побачити написаним по-різному залежно від автора чи регіону.",
            "en": {
              "text": "Unlike most languages in this course, Nigerian Pidgin has no officially fixed spelling standard — the same word can appear written differently depending on the author or region."
            }
          },
          {
            "type": "table",
            "title": "Приклади варіантів",
            "rows": [
              [
                "wetin / wetyn",
                "що (обидва варіанти зустрічаються)"
              ],
              [
                "abeg / abegi",
                "будь ласка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wetin dey happen for dia?",
                "Що там відбувається?"
              ],
              [
                "Abeg make you no vex.",
                "Будь ласка, не гнівайся."
              ]
            ]
          }
        ]
      },
      {
        "id": "english-false-friends",
        "title": "Слова, що виглядають як англійські, але означають інше — B1",
        "titleEn": "English-Looking False Friends — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі слова піджину виглядають ідентично англійським, але змінили значення або вживання — наприклад, \"sorry\" кажуть навіть тоді, коли людина не винна, просто зі співчуття.",
            "en": {
              "text": "Some Pidgin words look identical to English but have shifted meaning or usage — for example, \"sorry\" is said even when the speaker isn't at fault, simply out of sympathy."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Sorry! (комусь, хто спіткнувся)",
                "Мені шкода! (не \"вибач\", а співчуття)"
              ],
              [
                "I dey hear you.",
                "Я тебе розумію (не \"я тебе чую\")."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sorry o, you fall.",
                "Ой, співчуваю, ти впав."
              ],
              [
                "I no dey hear wetin you talk.",
                "Я не розумію, що ти кажеш."
              ]
            ]
          }
        ]
      },
      {
        "id": "substrate-tone-influence",
        "title": "Вплив тонів мов-субстратів — B2",
        "titleEn": "Substrate Tonal Influence — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча піджин пишеться без позначок тону, в усному мовленні наголос і мелодика фрази часто успадковані від тональних мов-субстратів (йоруба, ігбо) і можуть змінювати відтінок значення, який на письмі не видно.",
            "en": {
              "text": "Although Pidgin is written without tone marks, in speech the stress and melody of a phrase are often inherited from the tonal substrate languages (Yoruba, Igbo) and can shift a shade of meaning that isn't visible in writing."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Na so? (висхідна інтонація)",
                "Справді? (здивування)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Na so o!",
                "Ось так воно і є! (з наголосом)"
              ],
              [
                "I sabi am well well.",
                "Я його дуже добре знаю (з підсиленням тоном)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
