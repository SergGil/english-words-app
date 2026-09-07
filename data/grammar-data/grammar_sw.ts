// Vymova — data/grammar-data/grammar_sw.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SW: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Суб'єктні префікси — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "У суахілі особа підмета часто позначається префіксом прямо на дієслові, а не окремим займенником.",
            "en": {
              "text": "In Swahili the subject person is often marked with a prefix directly on the verb, rather than a separate pronoun."
            }
          },
          {
            "type": "table",
            "title": "Суб'єктні префікси дієслова",
            "rows": [
              [
                "ni-",
                "я"
              ],
              [
                "u-",
                "ти"
              ],
              [
                "a-",
                "він / вона"
              ],
              [
                "tu-",
                "ми"
              ],
              [
                "wa-",
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
                "Ninasoma.",
                "Я читаю (ni- + -na- (теп.час) + -soma)."
              ]
            ]
          }
        ],
        "titleEn": "Subject Prefixes — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"ni\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Для ототожнення (\"я — вчитель\") використовують коротке слово ni між підметом та іменником-присудком.",
            "en": {
              "text": "For identity statements (\"I am a teacher\"), use the short word ni between the subject and the predicate noun."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + ni + іменник",
            "rows": [
              ["Mimi", "ni mwalimu", "я вчитель"],
              ["Wewe", "ni mwanafunzi", "ти студент"],
              ["Yeye", "ni daktari", "він/вона лікар"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yeye ni daktari.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Ni — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"si\" / \"ha-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення \"бути\" використовують si, а для інших дієслів — префікс ha- перед суб'єктним префіксом.",
            "en": {
              "text": "To negate \"to be\" use si, while other verbs are negated with the prefix ha- before the subject prefix."
            }
          },
          {
            "type": "formula",
            "title": "заперечний префікс + основа",
            "rows": [
              ["si-", "sijui", "я не знаю"],
              ["hu-", "hujui", "ти не знаєш"],
              ["ha-", "hajui", "він/вона не знає"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mimi si mwalimu.",
                "Я не вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Si / Ha- — A1"
      },
      {
        "id": "questions",
        "title": "Питання з \"Je\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити словом Je на початку речення або просто висхідною інтонацією.",
            "en": {
              "text": "Yes/no questions can be formed with Je at the start of the sentence, or simply with rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "Je, + твердження?",
            "rows": [
              ["Wewe ni mwanafunzi.", "Je, wewe ni mwanafunzi?", "Ти студент. → Ти студент?"],
              ["Una njaa.", "Una njaa?", "Ти голодний. → Ти голодний?"],
              ["Amefika.", "Je, amefika?", "Він прибув. → Він прибув?"]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Una njaa?",
                "Ти голодний? (без Je)"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Je — A1"
      },
      {
        "id": "noun-classes",
        "title": "Класи іменників — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники в суахілі належать до класів з характерними префіксами (наприклад, m-/wa- для людей), від яких залежить множина й узгодження прикметників.",
            "en": {
              "text": "Swahili nouns belong to classes with characteristic prefixes (e.g. m-/wa- for people), which determine the plural and adjective agreement."
            }
          },
          {
            "type": "table",
            "title": "Приклад класу людей (m-/wa-)",
            "rows": [
              [
                "mtu → watu",
                "людина → люди"
              ],
              [
                "mwalimu → walimu",
                "вчитель → вчителі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Watu wengi wanafanya kazi.",
                "Багато людей працюють."
              ]
            ]
          }
        ],
        "titleEn": "Noun Classes — A1"
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
        "id": "present-na",
        "title": "Теперішній час (-na-) — A1",
        "titleEn": "Present Tense (-Na-) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється часовим інфіксом -na-, вставленим між суб'єктним префіксом і основою дієслова.",
            "en": {
              "text": "The present tense is formed with the tense infix -na-, inserted between the subject prefix and the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "суб'єкт- + na + основа",
            "rows": [
              [
                "ni-",
                "ninasoma",
                "я читаю"
              ],
              [
                "u-",
                "unasoma",
                "ти читаєш"
              ],
              [
                "a-",
                "anasoma",
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
                "Tunasoma kitabu.",
                "Ми читаємо книгу."
              ],
              [
                "Wanafanya kazi.",
                "Вони працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-li",
        "title": "Минулий час (-li-) — A2",
        "titleEn": "Past Tense (-Li-) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється часовим інфіксом -li-, вставленим на місці -na-.",
            "en": {
              "text": "The past tense is formed with the tense infix -li-, inserted in the same slot as -na-."
            }
          },
          {
            "type": "formula",
            "title": "суб'єкт- + li + основа",
            "rows": [
              [
                "ni-",
                "nilisoma",
                "я читав"
              ],
              [
                "u-",
                "ulisoma",
                "ти читав"
              ],
              [
                "a-",
                "alisoma",
                "він/вона читав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tulisoma kitabu jana.",
                "Ми читали книгу вчора."
              ],
              [
                "Waliondoka mapema.",
                "Вони поїхали рано."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-ta",
        "title": "Майбутній час (-ta-) — A2",
        "titleEn": "Future Tense (-Ta-) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часовим інфіксом -ta-.",
            "en": {
              "text": "The future tense is formed with the tense infix -ta-."
            }
          },
          {
            "type": "formula",
            "title": "суб'єкт- + ta + основа",
            "rows": [
              [
                "ni-",
                "nitasoma",
                "я читатиму"
              ],
              [
                "u-",
                "utasoma",
                "ти читатимеш"
              ],
              [
                "a-",
                "atasoma",
                "він/вона читатиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tutakuja kesho.",
                "Ми прийдемо завтра."
              ],
              [
                "Watafanya kazi.",
                "Вони будуть працювати."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-me",
        "title": "Перфект (-me-) — B1",
        "titleEn": "Perfect Tense (-Me-) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект (-me-) виражає дію, результат якої актуальний зараз — подібно до англійського Present Perfect.",
            "en": {
              "text": "The perfect (-me-) expresses an action whose result is relevant now — similar to the English Present Perfect."
            }
          },
          {
            "type": "formula",
            "title": "суб'єкт- + me + основа",
            "rows": [
              [
                "ni-",
                "nimesoma",
                "я прочитав (результат)"
              ],
              [
                "u-",
                "umesoma",
                "ти прочитав"
              ],
              [
                "a-",
                "amesoma",
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
                "Nimemaliza kazi.",
                "Я вже закінчив роботу."
              ],
              [
                "Wamefika.",
                "Вони вже прибули."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-hu",
        "title": "Звичайна дія (-hu-) — B1",
        "titleEn": "Habitual Tense (-Hu-) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Часовий інфікс -hu- позначає звичну, регулярну дію й, на відміну від інших часів, вживається з незмінним префіксом hu- замість особового суб'єктного префікса.",
            "en": {
              "text": "The tense infix -hu- marks a habitual, regular action and, unlike other tenses, is used with the invariant prefix hu- instead of a personal subject prefix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mvua huanguka Aprili.",
                "Дощ (зазвичай) іде у квітні."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Watu hula ugali hapa.",
                "Люди тут (зазвичай) їдять угалі."
              ],
              [
                "Jua huchomoza mashariki.",
                "Сонце (завжди) сходить на сході."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-ki",
        "title": "Умовний спосіб (-ki-) — B1",
        "titleEn": "Conditional (-Ki-) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Часовий інфікс -ki- виражає умову \"якщо/коли\" й одночасно може позначати одночасну дію (\"роблячи\").",
            "en": {
              "text": "The tense infix -ki- expresses the condition \"if/when\" and can also mark a simultaneous action (\"while doing\")."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ukienda sokoni, nunua mkate.",
                "Якщо підеш на ринок, купи хліба."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nikimaliza kazi, nitakupigia simu.",
                "Коли закінчу роботу, подзвоню тобі."
              ],
              [
                "Alikuja akicheka.",
                "Він прийшов, сміючись."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-e",
        "title": "Кон'юнктив (закінчення -e) — B1",
        "titleEn": "Subjunctive (-E Ending) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив утворюється зміною кінцевого -a основи дієслова на -e й без часового інфікса, вживається для мети, побажання чи ввічливого наказу.",
            "en": {
              "text": "The subjunctive is formed by changing the verb stem's final -a to -e, with no tense infix, and is used for purpose, wish, or polite command."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Nataka usome kitabu.",
                "Я хочу, щоб ти прочитав книгу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Twende sasa.",
                "Ходімо зараз."
              ],
              [
                "Anataka nifike mapema.",
                "Він хоче, щоб я прибув рано."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-present",
        "title": "Заперечення теперішнього часу — B1",
        "titleEn": "Negative Present Tense — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У запереченому теперішньому часі суб'єктний префікс змінюється (наприклад, ni-→si-), часовий інфікс -na- зникає, а кінцеве -a переходить у -i.",
            "en": {
              "text": "In the negative present tense, the subject prefix changes (e.g. ni-→si-), the tense infix -na- disappears, and the final -a becomes -i."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ninasoma (я читаю)",
                "sisomi",
                "я не читаю"
              ],
              [
                "unasoma (ти читаєш)",
                "husomi",
                "ти не читаєш"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hatuli nyama.",
                "Ми не їмо м'яса."
              ],
              [
                "Hawafanyi kazi leo.",
                "Вони не працюють сьогодні."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-past",
        "title": "Заперечення минулого часу (-ku-) — B1",
        "titleEn": "Negative Past Tense (-Ku-) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У запереченому минулому часі часовий інфікс -li- заміняється на -ku-, кінцеве -a залишається без змін.",
            "en": {
              "text": "In the negative past tense, the tense infix -li- is replaced with -ku-, and the final -a stays unchanged."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "nilisoma (я читав)",
                "sikusoma",
                "я не читав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hukuja jana.",
                "Ти не прийшов учора."
              ],
              [
                "Hawakumaliza kazi.",
                "Вони не закінчили роботу."
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
            "text": "Заперечний майбутній час зберігає інфікс -ta-, але вживає заперечний суб'єктний префікс замість стверджувального.",
            "en": {
              "text": "The negative future keeps the infix -ta-, but uses the negative subject prefix instead of the affirmative one."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "nitasoma (я читатиму)",
                "sitasoma",
                "я не читатиму"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hatutakuja kesho.",
                "Ми не прийдемо завтра."
              ],
              [
                "Hawatafanya kazi.",
                "Вони не будуть працювати."
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
            "text": "Наказ до однієї особи — це гола основа дієслова, до кількох осіб додається закінчення -eni.",
            "en": {
              "text": "A command to one person is just the bare verb stem; a command to several people adds the ending -eni."
            }
          },
          {
            "type": "formula",
            "title": "\"soma\" (читати) — наказовий",
            "rows": [
              [
                "1 особа (ти)",
                "Soma!",
                "Читай!"
              ],
              [
                "мн. (ви)",
                "Someni!",
                "Читайте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kaa chini!",
                "Сідай!"
              ],
              [
                "Fungueni milango!",
                "Відчиніть двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Пасивний стан (-w-) — B1",
        "titleEn": "Passive Voice (-W-) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -w-, доданим перед кінцевим -a основи дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -w-, added before the verb stem's final -a."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "andika (писати)",
                "andikwa",
                "бути написаним"
              ],
              [
                "ona (бачити)",
                "onwa",
                "бути побаченим"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Barua iliandikwa jana.",
                "Лист був написаний вчора."
              ],
              [
                "Mlango umefungwa.",
                "Двері зачинені."
              ]
            ]
          }
        ]
      },
      {
        "id": "applicative-causative",
        "title": "Аплікатив (-ia-) та каузатив (-isha-) — B2",
        "titleEn": "Applicative (-Ia-) & Causative (-Isha-) — B2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікатив (-ia-/-ea-) додає значення \"для/заради когось\", а каузатив (-isha-/-esha-) — значення \"змусити зробити\", обидва вставляються перед кінцевим -a основи.",
            "en": {
              "text": "The applicative (-ia-/-ea-) adds the meaning \"for/on behalf of someone\", while the causative (-isha-/-esha-) adds \"to make someone do\", both inserted before the stem's final -a."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "andika (писати)",
                "andikia",
                "написати комусь/для когось"
              ],
              [
                "soma (читати)",
                "somesha",
                "навчити читати (примусити читати)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nimemwandikia barua.",
                "Я написав йому листа."
              ],
              [
                "Mwalimu anawafundisha wanafunzi.",
                "Вчитель навчає учнів."
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
        "id": "noun-class-m-mi",
        "title": "Клас іменників m-/mi- (рослини, речі) — A2",
        "titleEn": "Noun Class M-/Mi- (Plants, Objects) — A2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Клас 3/4 (m-/mi-) охоплює рослини й багато неживих предметів.",
            "en": {
              "text": "Noun class 3/4 (m-/mi-) covers plants and many inanimate objects."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mti → miti",
                "дерево → дерева"
              ],
              [
                "mkate → mikate",
                "хліб → хліби"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mti ni mkubwa.",
                "Дерево велике."
              ],
              [
                "Miti mikubwa iko bustanini.",
                "Великі дерева в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-ki-vi",
        "title": "Клас іменників ki-/vi- (предмети) — A2",
        "titleEn": "Noun Class Ki-/Vi- (Things) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Клас 7/8 (ki-/vi-) охоплює предмети, знаряддя й мови (ki- + назва народу = мова).",
            "en": {
              "text": "Noun class 7/8 (ki-/vi-) covers objects, tools, and languages (ki- + ethnonym = language name)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kitabu → vitabu",
                "книга → книги"
              ],
              [
                "kiti → viti",
                "стілець → стільці"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitabu hiki ni kizuri.",
                "Ця книга гарна."
              ],
              [
                "Vitabu vingi viko mezani.",
                "Багато книг на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-n-n",
        "title": "Клас іменників n-/n- (тварини, запозичення) — A2",
        "titleEn": "Noun Class N-/N- (Animals, Loanwords) — A2",
        "emoji": "🐘",
        "sections": [
          {
            "type": "intro",
            "text": "Клас 9/10 (n-/n-) — це велика група тварин і майже всіх запозичених слів, форма однини й множини часто збігається.",
            "en": {
              "text": "Noun class 9/10 (n-/n-) is a large group of animals and nearly all loanwords; the singular and plural form are often identical."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ndege → ndege",
                "птах → птахи (форма не змінюється)"
              ],
              [
                "simu → simu",
                "телефон → телефони"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ndege mmoja anaruka.",
                "Один птах летить."
              ],
              [
                "Ndege wengi wanaruka.",
                "Багато птахів летять."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-ji-ma",
        "title": "Клас іменників ji-/ma- (пари, збільшення) — A2",
        "titleEn": "Noun Class Ji-/Ma- (Pairs, Augmentatives) — A2",
        "emoji": "🥭",
        "sections": [
          {
            "type": "intro",
            "text": "Клас 5/6 (ji-/ma-) охоплює багато фруктів, парні частини тіла й слова зі значенням \"великий\".",
            "en": {
              "text": "Noun class 5/6 (ji-/ma-) covers many fruits, paired body parts, and words with an augmentative \"big\" meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "jicho → macho",
                "око → очі"
              ],
              [
                "embe → maembe",
                "манго → манго (мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jicho langu linauma.",
                "Моє око болить."
              ],
              [
                "Maembe haya ni matamu.",
                "Ці манго солодкі."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-u",
        "title": "Клас іменників u- (абстрактні поняття) — B1",
        "titleEn": "Noun Class U- (Abstract Nouns) — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Клас 11/14 (u-) охоплює переважно абстрактні поняття й зазвичай не має окремої множини.",
            "en": {
              "text": "Noun class 11/14 (u-) covers mostly abstract concepts and usually has no separate plural."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "uzuri",
                "краса"
              ],
              [
                "upendo",
                "любов"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Uzuri wake ni maarufu.",
                "Її краса відома."
              ],
              [
                "Upendo ni muhimu.",
                "Любов важлива."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-ku",
        "title": "Клас іменників ku- (інфінітиви) — B1",
        "titleEn": "Noun Class Ku- (Infinitives) — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Клас 15 (ku-) — це форма інфінітива дієслова, яка водночас поводиться як іменник (\"процес чогось\").",
            "en": {
              "text": "Class 15 (ku-) is the verb's infinitive form, which also behaves like a noun (\"the act of doing something\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kusoma",
                "читання / читати"
              ],
              [
                "kuandika",
                "писання / писати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kusoma ni muhimu.",
                "Читання важливе."
              ],
              [
                "Napenda kuimba.",
                "Я люблю співати."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-locative",
        "title": "Локативні класи pa-/ku-/mu- — B1",
        "titleEn": "Locative Classes Pa-/Ku-/Mu- — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Три локативні класи (16/17/18) уточнюють тип місця: pa- (конкретне місце), ku- (напрямок/загальна місцевість), mu- (усередині).",
            "en": {
              "text": "Three locative classes (16/17/18) specify the type of place: pa- (a specific spot), ku- (direction/general area), mu- (inside)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mezani (на столі)",
                "pa- узгодження",
                "точне місце"
              ],
              [
                "shuleni (у школі)",
                "mu- узгодження",
                "усередині"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitabu kiko mezani.",
                "Книга на столі."
              ],
              [
                "Watoto wako shuleni.",
                "Діти в школі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-concord",
        "title": "Узгодження прикметників з класом — A2",
        "titleEn": "Adjective Class Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник отримує префікс узгодження, що збігається з класом означуваного іменника.",
            "en": {
              "text": "An adjective takes an agreement prefix that matches the class of the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mtoto mzuri",
                "гарна дитина (m-/wa- клас)"
              ],
              [
                "kitabu kizuri",
                "гарна книга (ki-/vi- клас)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Watoto wazuri wanacheza.",
                "Гарні діти граються."
              ],
              [
                "Vitabu vizuri viko hapa.",
                "Гарні книги тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-infix",
        "title": "Об'єктний інфікс дієслова — B1",
        "titleEn": "Object Infix on the Verb — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий додаток може бути позначений окремим інфіксом усередині дієслова, між часовим інфіксом і основою.",
            "en": {
              "text": "The direct object can be marked with a separate infix inside the verb, between the tense infix and the stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ninamwona.",
                "Я його/її бачу (-mw- = його/її)."
              ],
              [
                "Ninawapenda.",
                "Я їх люблю (-wa- = їх)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nimekiona kitabu.",
                "Я побачив книгу (-ki- = це, ki-клас)."
              ],
              [
                "Tunawasaidia.",
                "Ми їм допомагаємо."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-concord",
        "title": "Присвійні слова з узгодженням класу — A2",
        "titleEn": "Class-Agreeing Possessives — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні слова (-angu мій, -ako твій тощо) також отримують префікс, що узгоджується з класом іменника-власності.",
            "en": {
              "text": "Possessive words (-angu my, -ako your, etc.) also take a prefix that agrees with the class of the possessed noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kitabu changu",
                "моя книга (ki-клас)"
              ],
              [
                "mtoto wangu",
                "моя дитина (m-/wa- клас)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nyumba yangu ni kubwa.",
                "Мій дім великий."
              ],
              [
                "Vitabu vyako viko wapi?",
                "Де твої книги?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-o-of-reference",
        "title": "Відносне -o- узгодження — B2",
        "titleEn": "The Relative \"-O-\" of Reference — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне речення (\"який/що\") утворюється маркером -o-, вставленим у дієслово чи спеціальну частку, і теж узгоджується з класом означуваного іменника.",
            "en": {
              "text": "A relative clause (\"who/which/that\") is formed with the marker -o-, inserted into the verb or a special particle, and it too agrees with the class of the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mtu ambaye alikuja jana.",
                "Людина, яка прийшла вчора."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitabu nilichokisoma ni kizuri.",
                "Книга, яку я читав, гарна."
              ],
              [
                "Watu wanaofanya kazi ni wengi.",
                "Людей, які працюють, багато."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-this-that",
        "title": "Вказівні слова з узгодженням класу — A2",
        "titleEn": "Class-Agreeing Demonstratives — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова \"цей/той\" узгоджуються з класом іменника: hii/hiki/huyu (цей), ile/kile/yule (той).",
            "en": {
              "text": "The demonstratives \"this/that\" agree with the noun class: hii/hiki/huyu (this), ile/kile/yule (that)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mtu huyu",
                "ця людина"
              ],
              [
                "kitabu hiki",
                "ця книга"
              ],
              [
                "gari lile",
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
                "Mtu huyu ni rafiki yangu.",
                "Ця людина — мій друг."
              ],
              [
                "Nyumba ile ni kubwa.",
                "Той дім великий."
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
                "moja",
                "1"
              ],
              [
                "mbili",
                "2"
              ],
              [
                "tatu",
                "3"
              ],
              [
                "kumi",
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
                "Nina dada wawili.",
                "У мене дві сестри."
              ],
              [
                "Watu kumi walikuja.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-agreement",
        "title": "Узгодження числівників 1–8 з класом — B1",
        "titleEn": "Numerals 1-8 Agree with Noun Class — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники від 1 до 8 поводяться як прикметники й отримують префікс узгодження з класом іменника, тоді як 9 і 10 не змінюються.",
            "en": {
              "text": "Numerals 1 through 8 behave like adjectives and take a class-agreement prefix, while 9 and 10 stay unchanged."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "watoto wawili",
                "двоє дітей (wa- клас)"
              ],
              [
                "vitabu viwili",
                "дві книги (vi- клас)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nina miti mitatu.",
                "У мене три дерева."
              ],
              [
                "Kuna nyumba tisa.",
                "Є дев'ять домів (без узгодження)."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-kuliko",
        "title": "Порівняння з \"kuliko\" — A2",
        "titleEn": "Comparison with \"Kuliko\" — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння \"більше ніж\" виражається словом kuliko після прикметника, а не окремою формою прикметника.",
            "en": {
              "text": "The comparison \"more than\" is expressed with the word kuliko after the adjective, rather than a separate comparative form."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Yeye ni mrefu kuliko mimi.",
                "Він вищий за мене."
              ],
              [
                "Kitabu hiki ni kizuri kuliko kile.",
                "Ця книга краща за ту."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nyumba yake ni kubwa kuliko yangu.",
                "Його дім більший за мій."
              ],
              [
                "Leo ni joto kuliko jana.",
                "Сьогодні тепліше, ніж учора."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation-overview",
        "title": "Огляд множини за класами — B1",
        "titleEn": "Plural Formation Overview — B1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "table",
            "title": "Пари класів",
            "rows": [
              [
                "m-/wa- (люди)",
                "mtu/watu"
              ],
              [
                "m-/mi- (рослини)",
                "mti/miti"
              ],
              [
                "ki-/vi- (речі)",
                "kitu/vitu"
              ],
              [
                "ji-/ma- (плоди)",
                "tunda/matunda"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Watu wengi wanapenda matunda.",
                "Багато людей люблять фрукти."
              ],
              [
                "Vitu vidogo viko mfukoni.",
                "Маленькі речі в сумці."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Питальні слова — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "nani",
                "хто"
              ],
              [
                "nini",
                "що"
              ],
              [
                "wapi",
                "де"
              ],
              [
                "lini",
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
                "Wewe ni nani?",
                "Хто ти?"
              ],
              [
                "Unaishi wapi?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-ji-infix",
        "title": "Зворотний інфікс -ji- — B1",
        "titleEn": "Reflexive Infix -Ji- — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення (\"себе\") виражається інфіксом -ji-, вставленим у дієслово на місці об'єктного інфікса.",
            "en": {
              "text": "The reflexive meaning (\"oneself\") is expressed with the infix -ji-, inserted into the verb in the object-infix slot."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ona (бачити)",
                "kujiona",
                "бачити себе"
              ],
              [
                "penda (любити)",
                "kujipenda",
                "любити себе"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anajiangalia kwenye kioo.",
                "Він дивиться на себе в дзеркало."
              ],
              [
                "Tunajisikia vizuri.",
                "Ми почуваємося добре (буквально: почуваємо себе)."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-suffix-ni",
        "title": "Локативний суфікс -ni — A1",
        "titleEn": "Locative Suffix -Ni — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ni, доданий до іменника, перетворює його на місце дії — \"у/на/до\" цього іменника.",
            "en": {
              "text": "The suffix -ni, added to a noun, turns it into a location — \"in/at/to\" that noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "shule (школа)",
                "shuleni",
                "у школі"
              ],
              [
                "meza (стіл)",
                "mezani",
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
                "Watoto wako shuleni.",
                "Діти в школі."
              ],
              [
                "Kitabu kiko mezani.",
                "Книга на столі."
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
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), як в українській.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mtoto anasoma kitabu.",
                "Дитина читає книгу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mama anapika chakula.",
                "Мама готує їжу."
              ],
              [
                "Wanafunzi wanasoma vitabu.",
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
                "na",
                "і, та"
              ],
              [
                "lakini",
                "але"
              ],
              [
                "au",
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
                "Mimi na wewe ni marafiki.",
                "Я і ти — друзі."
              ],
              [
                "Nataka kwenda, lakini sina muda.",
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
                "kwa sababu",
                "тому що"
              ],
              [
                "kama",
                "якщо"
              ],
              [
                "wakati",
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
                "Nina furaha kwa sababu umekuja.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Wakati nikiwa huru, nitakupigia simu.",
                "Коли буду вільний, подзвоню тобі."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-lazima",
        "title": "Модальне \"lazima\" (мусити) — A2",
        "titleEn": "Modal \"Lazima\" (Must) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Lazima\" (треба, обов'язково) — незмінне слово, що поєднується з дієсловом у кон'юнктиві або звичайному часі, виражаючи обов'язок.",
            "en": {
              "text": "\"Lazima\" (must, necessary) is an invariant word combined with the verb in the subjunctive or a regular tense, expressing obligation."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Lazima niende.",
                "Мені треба йти."
              ],
              [
                "Lazima usome.",
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
                "Lazima tufanye kazi.",
                "Нам треба працювати."
              ],
              [
                "Si lazima uende.",
                "Тобі не обов'язково йти."
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
                "-ingi (wengi/vingi/mingi)",
                "багато"
              ],
              [
                "kidogo",
                "мало"
              ],
              [
                "-ingine (wengine)",
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
                "Nina vitabu vingi.",
                "У мене багато книг."
              ],
              [
                "Nipe maji kidogo.",
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
                "Jumatatu",
                "понеділок"
              ],
              [
                "Jumamosi",
                "субота"
              ],
              [
                "Jumapili",
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
                "Leo ni Jumatatu.",
                "Сьогодні понеділок."
              ],
              [
                "Ninapumzika Jumapili.",
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
                "Januari",
                "січень"
              ],
              [
                "Mei",
                "травень"
              ],
              [
                "Desemba",
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
                "Siku yangu ya kuzaliwa ni Mei.",
                "Мій день народження в травні."
              ],
              [
                "Leo ni tarehe kumi Januari.",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Час (суахілійська система) — B1",
        "titleEn": "Telling Time (Swahili System) — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "У суахілі доба починається о 6-й ранку за міжнародним часом, тому \"перша година\" (saa moja) суахілійського часу — це 7 ранку.",
            "en": {
              "text": "In Swahili the day starts at 6am international time, so \"hour one\" (saa moja) of Swahili time is 7am."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Saa ngapi?",
                "Котра година?"
              ],
              [
                "Saa tatu asubuhi.",
                "Дев'ята ранку (буквально: третя година ранку)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tutakutana saa nne.",
                "Зустрінемось о десятій."
              ],
              [
                "Sasa ni saa sita mchana.",
                "Зараз полудень (шоста година дня)."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Формальне звертання — A2",
        "titleEn": "Formal Address — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Формальність виражається переважно титулами (bwana, bibi) і словом \"Shikamoo\" — традиційним вітанням молодшого до старшого, на яке відповідають \"Marahaba\".",
            "en": {
              "text": "Formality is mostly expressed with titles (bwana, bibi) and the word \"Shikamoo\" — a traditional greeting from a younger person to an elder, answered with \"Marahaba\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Shikamoo!",
                "(вітання молодшого до старшого)"
              ],
              [
                "Marahaba.",
                "(відповідь старшого)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Shikamoo, babu!",
                "Моє шанування, дідусю!"
              ],
              [
                "Marahaba, mjukuu wangu.",
                "Дякую, мій онуку."
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
                "Hujambo? / Sijambo.",
                "Як справи? / Все гаразд."
              ],
              [
                "Asante",
                "Дякую"
              ],
              [
                "Kwaheri",
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
                "Habari yako?",
                "Як твої справи?"
              ],
              [
                "Asante sana.",
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
                "Kuna jua.",
                "Сонячно."
              ],
              [
                "Mvua inanyesha.",
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
                "Leo kuna baridi.",
                "Сьогодні холодно."
              ],
              [
                "Kuna joto sana.",
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
                "haraka haraka haina baraka",
                "поспіх не має благословення (тихіше їдеш — далі будеш)"
              ],
              [
                "polepole ndio mwendo",
                "потроху — це і є рух (терпіння приводить до мети)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Usikimbilie, haraka haraka haina baraka.",
                "Не поспішай, тихіше їдеш — далі будеш."
              ],
              [
                "Fanya kazi polepole ndio mwendo.",
                "Роби роботу потроху, крок за кроком."
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
            "text": "Багато прислівників способу дії утворюються редуплікацією прикметника чи основи: -pole → polepole (повільно/обережно).",
            "en": {
              "text": "Many manner adverbs are formed by reduplicating the adjective or stem: -pole → polepole (slowly/gently)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "haraka",
                "швидко"
              ],
              [
                "polepole",
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
                "Anaenda haraka.",
                "Він іде швидко."
              ],
              [
                "Tembea polepole.",
                "Іди повільно."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-nominalization",
        "title": "Утворення іменників з дієслів — B1",
        "titleEn": "Nominalization of Verbs — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники дії часто утворюються від дієслова префіксом u- (клас 11), а іменники діяча — префіксом m- (клас 1).",
            "en": {
              "text": "Action nouns are often formed from a verb with the prefix u- (class 11), and agent nouns with the prefix m- (class 1)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "fundisha (навчати)",
                "mwalimu",
                "вчитель (той, хто навчає)"
              ],
              [
                "ongoza (вести)",
                "uongozi",
                "керівництво"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Uongozi wake ni mzuri.",
                "Його керівництво добре."
              ],
              [
                "Mwalimu anafundisha vizuri.",
                "Вчитель навчає добре."
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
                "mkono + saa → saa ya mkono",
                "наручний годинник"
              ],
              [
                "nyumba + kulala → nyumba ya kulala wageni",
                "готель (дім для сну гостей)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nina saa ya mkono mpya.",
                "У мене новий наручний годинник."
              ],
              [
                "Tunakaa katika nyumba ya kulala wageni.",
                "Ми зупинилися в готелі."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року (сезони дощів) — A2",
        "titleEn": "Seasons (Rainy Seasons) — A2",
        "emoji": "🌧️",
        "sections": [
          {
            "type": "intro",
            "text": "У Східній Африці розрізняють переважно два сезони дощів (masika — довгі дощі, vuli — короткі дощі) і сухий сезон, а не чотири класичні пори року.",
            "en": {
              "text": "In East Africa, mainly two rainy seasons are distinguished (masika — the long rains, vuli — the short rains) plus a dry season, rather than four classic seasons."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "masika",
                "довгі дощі (березень-травень)"
              ],
              [
                "kiangazi",
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
                "Masika yamefika.",
                "Довгі дощі настали."
              ],
              [
                "Kiangazi ni cha joto sana.",
                "Сухий сезон дуже спекотний."
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
                "Bei gani?",
                "Скільки коштує?"
              ],
              [
                "Ni shilingi elfu moja.",
                "Це тисяча шилінгів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitabu hiki ni shilingi elfu mbili.",
                "Ця книга коштує дві тисячі шилінгів."
              ],
              [
                "Ni ghali sana.",
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
                "Nadhani...",
                "Я думаю, що..."
              ],
              [
                "Kwa maoni yangu...",
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
                "Nadhani wewe ni sahihi.",
                "Я думаю, що ти правий."
              ],
              [
                "Kwa maoni yangu, hii ni wazo zuri.",
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
                "leo / kesho / jana",
                "сьогодні / завтра / вчора"
              ],
              [
                "sasa / baadaye",
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
                "Tutaonana kesho.",
                "Побачимось завтра."
              ],
              [
                "Nina shughuli sasa.",
                "Зараз я зайнятий."
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
                "mtu fulani",
                "хтось"
              ],
              [
                "kitu fulani",
                "щось"
              ],
              [
                "hakuna mtu",
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
                "Mtu fulani alinipigia simu.",
                "Хтось мені подзвонив."
              ],
              [
                "Nilisikia kitu fulani.",
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
                "Ee!",
                "Ой!"
              ],
              [
                "Ajabu!",
                "Дивовижно!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ee, hii ni nzuri sana!",
                "Ой, це дуже гарно!"
              ],
              [
                "Ajabu, hujambo?",
                "Дивовижно, як ти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-kuna",
        "title": "Конструкція \"є/немає\" (kuna/hakuna) — A2",
        "titleEn": "Existential \"There Is/Isn't\" (Kuna/Hakuna) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається незмінним словом kuna (є), відсутність — hakuna (немає), обидва ставляться перед іменником.",
            "en": {
              "text": "The existence of something is expressed with the invariant word kuna (there is), absence with hakuna (there isn't), both placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kuna maji.",
                "Є вода."
              ],
              [
                "Hakuna muda.",
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
                "Kuna watu wengi hapa.",
                "Тут багато людей."
              ],
              [
                "Hakuna duka hapa.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives-ki-vi",
        "title": "Зменшувальна форма ki-/vi- — B1",
        "titleEn": "Diminutive Ki-/Vi- — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Клас ki-/vi- може вживатися й для зменшення значення слова іншого класу — переносить іменник у \"маленьку\" версію.",
            "en": {
              "text": "The ki-/vi- class can also be used to diminish the meaning of a word from another class — turning the noun into a \"small\" version."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mtoto (дитина)",
                "kitoto",
                "малятко"
              ],
              [
                "mtu (людина)",
                "kijitu",
                "чоловічок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kitoto kinacheza.",
                "Малятко граються."
              ],
              [
                "Kijitu kile ni cha ajabu.",
                "Той чоловічок дивний."
              ]
            ]
          }
        ]
      },
      {
        "id": "augmentative-ji-ma",
        "title": "Збільшувальна форма ji-/ma- — B1",
        "titleEn": "Augmentative Ji-/Ma- — B1",
        "emoji": "🐘",
        "sections": [
          {
            "type": "intro",
            "text": "Клас ji-/ma- може, навпаки, надавати слову значення \"великий/грубий\", переносячи іменник з іншого класу.",
            "en": {
              "text": "The ji-/ma- class, conversely, can give a word the meaning \"big/coarse\", moving a noun over from another class."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mtu (людина)",
                "jitu",
                "велетень"
              ],
              [
                "nyumba (дім)",
                "jumba",
                "величезний будинок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jitu kubwa lilisimama pale.",
                "Великий велетень стояв там."
              ],
              [
                "Jumba lile ni la kifahari.",
                "Той величезний будинок розкішний."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-extensions-stative-reciprocal",
        "title": "Стативний (-ika) та зворотний (-ana) суфікси — B2",
        "titleEn": "Stative (-Ika) & Reciprocal (-Ana) Extensions — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Стативний суфікс -ika показує стан або можливість (\"можна зробити\"), а суфікс -ana — взаємну дію (\"один одного\").",
            "en": {
              "text": "The stative suffix -ika shows a state or possibility (\"can be done\"), while the suffix -ana shows a reciprocal action (\"each other\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "vunja (ламати)",
                "vunjika",
                "зламатися (само)"
              ],
              [
                "penda (любити)",
                "pendana",
                "любити один одного"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kikombe kimevunjika.",
                "Чашка розбилася."
              ],
              [
                "Wanapendana sana.",
                "Вони дуже люблять одне одного."
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
                "bwana",
                "пан"
              ],
              [
                "bibi",
                "пані"
              ],
              [
                "mama / baba",
                "мамо / тату (теж до старших незнайомців)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Habari, bwana Juma?",
                "Як справи, пане Джума?"
              ],
              [
                "Asante, mama.",
                "Дякую, мамо (ввічливо до старшої жінки)."
              ]
            ]
          }
        ]
      },
      {
        "id": "proverbs-methali",
        "title": "Прислів'я (methali) — B2",
        "titleEn": "Proverbs (Methali) — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (methali) посідають важливе місце в культурі суахілі й часто вживаються в повсякденній мові для стислого вираження мудрості.",
            "en": {
              "text": "Proverbs (methali) hold an important place in Swahili culture and are often used in everyday speech to express wisdom concisely."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Asiyefunzwa na mamaye hufunzwa na ulimwengu.",
                "Кого не навчила мати, того навчить світ."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pole pole ndio mwendo.",
                "Потроху — це і є рух (терпіння)."
              ],
              [
                "Mgeni siku ya kwanza.",
                "Гостя шанують лише перший день."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-arabic-english",
        "title": "Запозичення з арабської та англійської — B1",
        "titleEn": "Loanwords from Arabic & English — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна частина словника суахілі запозичена з арабської (через торгівлю й іслам) і, останнім часом, з англійської — часто без явних ознак чужомовного походження.",
            "en": {
              "text": "A significant part of the Swahili vocabulary is borrowed from Arabic (via trade and Islam) and, more recently, from English — often with no obvious sign of foreign origin."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kitabu (з араб.)",
                "книга"
              ],
              [
                "simu (з англ. \"phone\" через адаптацію)",
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
                "Ninasoma kitabu.",
                "Я читаю книгу."
              ],
              [
                "Nina simu mpya.",
                "У мене новий телефон."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-amba",
        "title": "Відносний займенник \"amba-\" — B1",
        "titleEn": "Relative Pronoun \"Amba-\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Крім вбудованого в дієслово -o-, є простіший спосіб утворити підрядне речення: незмінний корінь amba- + узгоджувальний суфікс класу (ambaye, ambacho, ambao).",
            "en": {
              "text": "Besides the verb-internal -o-, there's a simpler way to form a relative clause: the invariant root amba- plus a class-agreement suffix (ambaye, ambacho, ambao)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mtu ambaye alikuja",
                "людина, яка прийшла"
              ],
              [
                "kitabu ambacho kilikuwa hapa",
                "книга, яка була тут"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mwanafunzi ambaye anasoma sana atafaulu.",
                "Учень, який багато вчиться, досягне успіху."
              ],
              [
                "Nyumba ambayo tuliona ni kubwa.",
                "Дім, який ми бачили, великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances-si-sio",
        "title": "Нюанси заперечення \"si\" та \"sio\" — B1",
        "titleEn": "Negation Nuances \"Si\" & \"Sio\" — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"Si\" заперечує зв'язку \"бути\" перед іменником чи прикметником, а \"sio\" (узгоджене з класом) заперечує конкретне слово чи вживається самостійно як коротке \"ні, не те\".",
            "en": {
              "text": "\"Si\" negates the \"to be\" copula before a noun or adjective, while \"sio\" (class-agreeing) negates a specific word or stands alone as a short \"no, not that\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mimi si mwalimu.",
                "Я не вчитель."
              ],
              [
                "Sio kitabu hiki, ni kile.",
                "Не ця книга, а та."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hii si sahihi.",
                "Це неправильно."
              ],
              [
                "Sio leo, ni kesho.",
                "Не сьогодні, а завтра."
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
        "id": "irregular-kuwa",
        "title": "Неправильне дієслово \"kuwa\" (бути) — B1",
        "titleEn": "The Irregular Verb \"Kuwa\" (To Be) — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"бути\" в довгих часах (минулому, майбутньому) — це kuwa зі звичайними часовими інфіксами, тоді як у теперішньому часі майже завжди вживають коротке слово ni замість дієслівної форми.",
            "en": {
              "text": "The verb \"to be\" in the long tenses (past, future) is kuwa with regular tense infixes, while in the present, the short word ni is almost always used instead of a verb form."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mimi ni mwalimu. (тепер.)",
                "Я вчитель.",
                "коротке ni, не дієслово"
              ],
              [
                "Nilikuwa mwalimu. (мин.)",
                "Я був вчителем.",
                "kuwa з інфіксом -li-"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Atakuwa daktari.",
                "Він стане лікарем."
              ],
              [
                "Tulikuwa marafiki.",
                "Ми були друзями."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanword-noun-class-assignment",
        "title": "Запозичення й клас n-/n- — B1",
        "titleEn": "Loanwords Default to the N-/N- Class — B1",
        "emoji": "🌐",
        "sections": [
          {
            "type": "intro",
            "text": "Майже всі запозичені слова (з арабської, англійської тощо) автоматично потрапляють у клас n-/n-, незалежно від значення — виняток із семантичного розподілу за класами, властивого питомій лексиці.",
            "en": {
              "text": "Almost all loanwords (from Arabic, English, etc.) automatically fall into the n-/n- class, regardless of meaning — an exception to the semantic class assignment typical of native vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "gari (машина, з англ.)",
                "n-/n- клас, хоча це не тварина"
              ],
              [
                "redio (радіо)",
                "n-/n- клас за замовчуванням"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gari langu ni jipya.",
                "Моя машина нова (узгодження як n-клас, але з l- через виняток)."
              ],
              [
                "Redio yangu imeharibika.",
                "Моє радіо зламалося."
              ]
            ]
          }
        ]
      },
      {
        "id": "monosyllabic-verb-stems",
        "title": "Односкладові основи дієслів (kula, kunywa) — B1",
        "titleEn": "Monosyllabic Verb Stems (Kula, Kunywa) — B1",
        "emoji": "🍽️",
        "sections": [
          {
            "type": "intro",
            "text": "Невелика група дієслів з односкладовою основою (-la їсти, -nywa пити, -ja приходити) зберігає інфінітивний префікс ku- навіть у часових формах, на відміну від усіх інших дієслів.",
            "en": {
              "text": "A small group of monosyllabic-stem verbs (-la to eat, -nywa to drink, -ja to come) keeps the infinitive prefix ku- even in tensed forms, unlike every other verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ninasoma (я читаю, звичайне дієслово)",
                "без ku- в теперішньому часі"
              ],
              [
                "ninakula (я їм, односкладова основа -la)",
                "зберігає ku- навіть тут"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tunakunywa maji.",
                "Ми п'ємо воду."
              ],
              [
                "Watakuja kesho.",
                "Вони прийдуть завтра."
              ]
            ]
          }
        ]
      }
    ]
  }
];
