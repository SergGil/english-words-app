// Vymova — data/grammar-data/grammar_kn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ಸರ್ವನಾಮಗಳು — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У каннаді ввічлива форма \"ನೀವು\" (nīvu) водночас служить формою поваги до однієї людини й звичайною множиною.",
            "en": {
              "text": "In Kannada, the polite form \"ನೀವು\" (nīvu) serves both as a respectful form and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ನಾನು (nānu)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ನೀನು / ನೀವು (nīnu / nīvu)"
              ],
              [
                "він / вона",
                "ಅವನು / ಅವಳು (avanu / avaḷu)"
              ],
              [
                "ми",
                "ನಾವು (nāvu)"
              ],
              [
                "ви",
                "ನೀವು (nīvu)"
              ],
              [
                "вони",
                "ಅವರು (avaru)"
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
        "id": "verb-iru",
        "title": "ಇರು (iru) — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"ಇರು\" (iru) — базове дієслово стану й наявності, що узгоджується з підметом за особою, числом і родом (на відміну від гінді, де узгодження обмеженіше).",
            "en": {
              "text": "\"ಇರು\" (iru) is the basic verb of state and existence, agreeing with the subject in person, number, and gender (unlike Hindi, where agreement is more limited)."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час iru",
            "rows": [
              [
                "ನಾನು ಇದ್ದೇನೆ (nānu iddēne)",
                "я є"
              ],
              [
                "ನೀನು ಇದ್ದೀಯ (nīnu iddīya)",
                "ти є"
              ],
              [
                "ಅವನು ಇದ್ದಾನೆ (avanu iddāne)",
                "він є"
              ],
              [
                "ಅವಳು ಇದ್ದಾಳೆ (avaḷu iddāḷe)",
                "вона є"
              ]
            ],
            "en": {
              "title": "Present Tense of iru"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮನೆಯಲ್ಲಿ ಇದ್ದೇನೆ.",
                "Я вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ಇರು (iru) — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення суфіксом, а не словом — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса дравідійських мов: заперечення виражається не окремим словом, а суфіксом чи зміною закінчення самого дієслова.",
            "en": {
              "text": "A unique trait of Dravidian languages: negation is expressed not by a separate word but by a suffix or ending change on the verb itself."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "ನಾನು ಇದ್ದೇನೆ.",
                "ನಾನು ಇಲ್ಲ.",
                "Я є → мене немає (окрема заперечна форма ille)"
              ],
              [
                "ಅವನಿಗೆ ಗೊತ್ತು.",
                "ಅವನಿಗೆ ಗೊತ್ತಿಲ್ಲ.",
                "Він знає → він не знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಆಯಾಸಗೊಂಡಿಲ್ಲ.",
                "Я не втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Suffixal, not Word-Based, Negation — A2"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання утворюють часткою \"ā\", доданою до дієслова; спеціальні — питальними словами, які зазвичай стоять перед дієсловом (мова SOV).",
            "en": {
              "text": "Yes/no questions are formed with the particle \"ā\" attached to the verb; wh-questions use question words, which usually stand before the verb (SOV language)."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "ಯಾರು (yāru)",
                "хто"
              ],
              [
                "ಏನು (ēnu)",
                "що"
              ],
              [
                "ಎಲ್ಲಿ (elli)",
                "де"
              ],
              [
                "ಯಾವಾಗ (yāvāga)",
                "коли"
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
                "ನೀವು ಕನ್ನಡಿಗರೇ?",
                "Ви каннадиг(ка)?"
              ],
              [
                "ನೀವು ಎಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?",
                "Де ви живете?"
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
        "id": "rational-nonrational-gender",
        "title": "Розумний vs нерозумний рід — B1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Дравідійська система роду відрізняється від європейської: спершу іменники діляться на \"розумні\" (люди) й \"нерозумні\" (усе інше, включно з тваринами); лише в межах \"розумного\" класу далі розрізняють чоловічий і жіночий.",
            "en": {
              "text": "The Dravidian gender system differs from the European one: nouns first split into \"rational\" (humans) and \"non-rational\" (everything else, including animals); only within the \"rational\" class is there a further masculine/feminine split."
            }
          },
          {
            "type": "table",
            "title": "Розумний vs нерозумний",
            "rows": [
              [
                "ಅವನು/ಅವಳು (він/вона) — розумний рід",
                "люди"
              ],
              [
                "ಅದು (воно) — нерозумний рід",
                "тварини, предмети, абстракції"
              ]
            ],
            "en": {
              "title": "Rational vs Non-Rational"
            }
          }
        ],
        "titleEn": "The Rational vs Non-Rational Gender System — B1"
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
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється суфіксом -ttāre/-ttēne, узгодженим з підметом за особою, числом і родом.",
            "en": {
              "text": "The present tense is formed with the suffix -ttāre/-ttēne, agreeing with the subject in person, number, and gender."
            }
          },
          {
            "type": "table",
            "title": "ಮಾಡು (робити) — теперішній час",
            "rows": [
              [
                "ನಾನು ಮಾಡುತ್ತೇನೆ",
                "я роблю"
              ],
              [
                "ಅವನು ಮಾಡುತ್ತಾನೆ",
                "він робить"
              ]
            ],
            "en": {
              "title": "māḍu (to do) — Present Tense"
            }
          }
        ],
        "titleEn": "The Present Tense — A1"
      },
      {
        "id": "past-tense",
        "title": "Минулий час — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час має власний набір суфіксів, часто зі зміною основи дієслова.",
            "en": {
              "text": "The past tense has its own set of suffixes, often with a change in the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮಾಡಿದೆ.",
                "Я зробив(ла)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється власним суфіксом -uvenu/-uvanu, узгодженим за особою й родом.",
            "en": {
              "text": "The future tense is formed with its own suffix -uvenu/-uvanu, agreeing by person and gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮಾಡುತ್ತೇನೆ.",
                "Я зроблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова; для ввічливості додається суфікс -i.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem; politeness adds the suffix -i."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "ಮಾಡು!",
                "Роби!"
              ],
              [
                "ಮಾಡಿ!",
                "Робіть! (ввічливо)"
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
        "id": "negative-past",
        "title": "Заперечення минулого часу — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечена дієслівна форма не змінюється за часом взагалі: та сама заперечна форма охоплює й теперішнє, і минуле — час стає зрозумілим лише з контексту.",
            "en": {
              "text": "The negated verb form doesn't change for tense at all: the same negative form covers both present and past — the tense becomes clear only from context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮಾಡಲಿಲ್ಲ.",
                "Я не робив(ла)/не роблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Past Tense — B1"
      },
      {
        "id": "negative-future",
        "title": "Заперечення майбутнього часу — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення майбутнього часу утворюється власним суфіксом -alāra, відмінним від загального заперечення.",
            "en": {
              "text": "Negating the future tense uses its own suffix -alāra, distinct from the general negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮಾಡಲಾರೆ.",
                "Я не зроблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Future Tense — B1"
      },
      {
        "id": "continuous-iru",
        "title": "Тривалий вид через iru — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалу дію виражають дієприкметником теперішнього часу + допоміжне \"iru\", подібно до інших дравідійських мов.",
            "en": {
              "text": "An ongoing action is expressed with the present participle + the auxiliary \"iru\", similar to other Dravidian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮಾಡುತ್ತಾ ಇದ್ದೇನೆ.",
                "Я зараз роблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Continuous Aspect via iru — A2"
      },
      {
        "id": "perfect-iru",
        "title": "Перфект через iru — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу + допоміжне \"iru\", вказуючи на актуальність результату зараз.",
            "en": {
              "text": "The perfect is formed with the past participle + the auxiliary \"iru\", indicating the result is relevant now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಮಾಡಿದ್ದೇನೆ.",
                "Я вже зробив(ла) (і результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect via iru — B1"
      },
      {
        "id": "conditional-suffix-re",
        "title": "Умовний спосіб (-re) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне значення виражається суфіксом -re/-are, доданим до дієслова, без окремого слова \"якщо\".",
            "en": {
              "text": "Conditional meaning is expressed with the suffix -re/-are added to the verb, with no separate word for \"if\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮಳೆ ಬಂದರೆ, ನಾನು ಮನೆಯಲ್ಲಿ ಇರುತ್ತೇನೆ.",
                "Якщо піде дощ, я залишусь удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Suffix (-re) — B1"
      },
      {
        "id": "potential-sadhya",
        "title": "Потенційна конструкція (sādhya) — B1",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Спроможність виражають словом \"sādhya\" (можливо) або дієслівним суфіксом -alu + допоміжне дієслово, без окремого модального дієслова \"могти\".",
            "en": {
              "text": "Ability is expressed with the word \"sādhya\" (possible) or the verbal suffix -alu + auxiliary, without a separate modal verb \"can\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನನಗೆ ಕನ್ನಡ ಮಾತನಾಡಲು ಬರುತ್ತದೆ.",
                "Я вмію говорити каннада."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Potential Construction (sādhya) — B1"
      },
      {
        "id": "optative-ali",
        "title": "Спонукальний спосіб (-ali) — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ali на дієслові виражає побажання чи непрямий наказ третій особі — \"хай станеться\".",
            "en": {
              "text": "The suffix -ali on the verb expresses a wish or an indirect command to a third person — \"may it happen\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಅವನು ಬರಲಿ.",
                "Хай він прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Optative Mood (-ali) — B1"
      },
      {
        "id": "compound-light-verbs",
        "title": "Складені дієслова з легкими дієсловами — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато понять виражають іменником чи запозиченим коренем + легким дієсловом (\"māḍu\" — робити, \"hāku\" — класти), а не окремим питомим дієсловом.",
            "en": {
              "text": "Many concepts are expressed with a noun or borrowed root + a light verb (\"māḍu\" — to do, \"hāku\" — to put), rather than a dedicated native verb."
            }
          },
          {
            "type": "table",
            "title": "prayatna + māḍu",
            "rows": [
              [
                "prayatna māḍu",
                "намагатися (буквально \"робити зусилля\")"
              ]
            ]
          }
        ],
        "titleEn": "Compound Verbs with Light Verbs — B1"
      },
      {
        "id": "causative-suffix",
        "title": "Каузативний суфікс — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне значення (\"змусити зробити\") утворюється суфіксом -isu, доданим до основи дієслова.",
            "en": {
              "text": "The causative meaning (\"to make someone do\") is formed with the suffix -isu, added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "māḍu → māḍisu",
            "rows": [
              [
                "māḍu (робити) → māḍisu",
                "змусити зробити"
              ]
            ]
          }
        ],
        "titleEn": "The Causative Suffix — B1"
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
        "id": "participial-relative-clause",
        "title": "Дієприкметникове відносне речення — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша синтаксична риса дравідійських мов: немає окремого відносного займенника \"який\": дієслово підрядного речення перетворюється на дієприкметник і стає прямо перед означуваним іменником.",
            "en": {
              "text": "The most defining syntactic trait of Dravidian languages: there's no separate relative pronoun \"who/which\": the subordinate clause's verb becomes a participle and stands directly before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "\"Чоловік, що прийшов\"",
            "rows": [
              [
                "ಬಂದ ಮನುಷ್ಯ",
                "чоловік, що прийшов (букв. \"прийшов-чоловік\", дієприкметник перед іменником)"
              ]
            ]
          }
        ],
        "titleEn": "The Participial Relative Clause — B2"
      },
      {
        "id": "case-accusative",
        "title": "Знахідний відмінок — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (суфікс -annu) позначає прямий додаток, особливо коли він визначений чи одушевлений.",
            "en": {
              "text": "The accusative case (suffix -annu) marks the direct object, especially when it is definite or animate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಪುಸ್ತಕವನ್ನು ಓದಿದೆ.",
                "Я прочитав книгу. (знах. pustakavannu)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Accusative Case — A2"
      },
      {
        "id": "case-dative",
        "title": "Давальний відмінок — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (суфікс -ige/-kke) позначає непрямий додаток і вживається в конструкціях відчуття й потреби.",
            "en": {
              "text": "The dative case (suffix -ige/-kke) marks the indirect object and is used in constructions of sensation and need."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
                "Я голодний. (буквально \"мені голод є\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Dative Case — A2"
      },
      {
        "id": "case-instrumental",
        "title": "Орудний відмінок — B1",
        "emoji": "🔨",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (суфікс -inda) позначає засіб дії.",
            "en": {
              "text": "The instrumental case (suffix -inda) marks the means of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಪೆನ್ನಿನಿಂದ ಬರೆದೆ.",
                "Я написав ручкою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Instrumental Case — B1"
      },
      {
        "id": "case-ablative",
        "title": "Віддільний відмінок — B1",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -inda також позначає рух звідкись — \"з/від\", як і орудний засіб.",
            "en": {
              "text": "The same suffix -inda also marks motion from somewhere — \"from\", just like the instrumental means."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮನೆಯಿಂದ ಬಂದೆ.",
                "Я прийшов з дому."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ablative Case — B1"
      },
      {
        "id": "case-genitive",
        "title": "Родовий відмінок — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (суфікс -a) позначає присвійність і стоїть перед означуваним іменником.",
            "en": {
              "text": "The genitive case (suffix -a) marks possession and precedes the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ರಾಮನ ಮನೆ",
                "дім Рами (rāma+na = rāmana)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Genitive Case — A2"
      },
      {
        "id": "case-locative",
        "title": "Місцевий відмінок — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (суфікс -alli) позначає перебування в місці.",
            "en": {
              "text": "The locative case (suffix -alli) marks being located in a place."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮನೆಯಲ್ಲಿ ಇದ್ದೇನೆ.",
                "Я вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Locative Case — A2"
      },
      {
        "id": "case-vocative",
        "title": "Кличний відмінок — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок часто утворюється зміною закінчення іменника при прямому звертанні.",
            "en": {
              "text": "The vocative case is often formed by changing the noun's ending in direct address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ರಾಮ!",
                "Рамо! (звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative Case — A2"
      },
      {
        "id": "sandhi-rules",
        "title": "Правила сандхі — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Через санскритський вплив каннада успадкувала складні правила сандхі — фонетичного злиття сусідніх звуків на межі слів чи морфем, які змінюють написання й вимову.",
            "en": {
              "text": "Through Sanskrit influence, Kannada inherited complex sandhi rules — the phonetic fusion of adjacent sounds at word or morpheme boundaries, which changes spelling and pronunciation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮನೆ + ಅಲ್ಲಿ → ಮನೆಯಲ್ಲಿ",
                "дім + у ньому → зливаються в одне слово зі вставним y"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sandhi Rules — B2"
      },
      {
        "id": "tatsama-tadbhava",
        "title": "Татсама vs тадбгава — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Санскритські запозичення діляться на два типи: \"татсама\" (запозичені без змін) і \"тадбгава\" (адаптовані з часом до каннадської фонетики) — освіченіша мова тяжіє до татсама.",
            "en": {
              "text": "Sanskrit loanwords split into two types: \"tatsama\" (borrowed unchanged) and \"tadbhava\" (adapted over time to Kannada phonetics) — more formal speech favors tatsama."
            }
          },
          {
            "type": "table",
            "title": "Татсама vs тадбгава",
            "rows": [
              [
                "ಕಾರ್ಯ (татсама, від санскр. kārya)",
                "робота/справа (формально)"
              ],
              [
                "ಕೆಲಸ (тадбгава, адаптоване)",
                "робота (розмовно)"
              ]
            ],
            "en": {
              "title": "Tatsama vs Tadbhava"
            }
          }
        ],
        "titleEn": "Tatsama vs Tadbhava — B1"
      },
      {
        "id": "echo-word-reduplication",
        "title": "Ехо-слова — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Поширений прийом дравідійських мов: слово повторюється зі зміненим початковим звуком (часто на \"gi-\"), розширюючи значення до \"X і подібне\".",
            "en": {
              "text": "A common Dravidian device: a word is repeated with a changed initial sound (often to \"gi-\"), broadening the meaning to \"X and the like\"."
            }
          },
          {
            "type": "table",
            "title": "chai-gi",
            "rows": [
              [
                "ಚಹಾ-ಗಿಹಾ (chai-giha)",
                "чай і всяке таке"
              ]
            ]
          }
        ],
        "titleEn": "Echo-Word Reduplication — B1"
      },
      {
        "id": "postpositions",
        "title": "Післяйменники — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Каннада, як типова дравідійська мова, послідовно вживає післяйменники (суфікси чи окремі слова після іменника), а не прийменники.",
            "en": {
              "text": "Kannada, as a typical Dravidian language, consistently uses postpositions (suffixes or separate words after the noun), not prepositions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮೇಜಿನ ಮೇಲೆ",
                "на столі (mēju+na = родовий + mēle \"на\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "comparative-kinta",
        "title": "Порівняльна конструкція (-kkinta) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають суфіксом \"-kkinta\" (ніж), доданим до об'єкта порівняння, без окремого порівняльного суфікса на прикметнику.",
            "en": {
              "text": "Comparison is expressed with the suffix \"-kkinta\" (than), added to the comparison object, with no separate comparative suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಅವನು ನನಗಿಂತ ಎತ್ತರ.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (-kkinta) — A2"
      },
      {
        "id": "superlative-ellara",
        "title": "Найвищий ступінь (ellara) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється словом \"ellara\" (з усіх) перед порівняльною конструкцією.",
            "en": {
              "text": "The superlative is formed with the word \"ellara\" (of all) before the comparative construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಅವನು ಎಲ್ಲರಿಗಿಂತ ಎತ್ತರ.",
                "Він найвищий з усіх."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (ellara) — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ivanu\" (цей, розумний рід) чи \"idu\" (це, нерозумний рід) вказує на близьке; \"avanu\"/\"adu\" — на віддалене.",
            "en": {
              "text": "\"Ivanu\" (this, rational gender) or \"idu\" (this, non-rational) points to something near; \"avanu\"/\"adu\" to something distant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಇದು ನನ್ನ ಪುಸ್ತಕ.",
                "Це моя книга."
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
        "id": "reflexive-taan",
        "title": "Зворотний займенник tāne — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Tāne\" (сам/себе) — зворотний займенник, що узгоджується з підметом незалежно від особи.",
            "en": {
              "text": "\"Tāne\" (self) is the reflexive pronoun, agreeing with the subject regardless of person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಅವನು ತಾನೇ ಮಾಡಿದನು.",
                "Він зробив це сам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun tāne — B1"
      },
      {
        "id": "possessive-construction",
        "title": "Присвійна конструкція — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники — родовий відмінок особових займенників, узгоджений з іменником, який вони визначають.",
            "en": {
              "text": "Possessive pronouns are the genitive case of the personal pronouns, agreeing with the noun they modify."
            }
          },
          {
            "type": "table",
            "title": "nanna, ninna, avana",
            "rows": [
              [
                "ನನ್ನ ಪುಸ್ತಕ",
                "моя книга"
              ],
              [
                "ಅವನ ಮನೆ",
                "його дім"
              ]
            ],
            "en": {
              "title": "nanna, ninna, avana"
            }
          }
        ],
        "titleEn": "The Possessive Construction — A1"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники стоять перед іменником, а великі числа успадковані з санскритської десяткової системи.",
            "en": {
              "text": "Numerals stand before the noun, and large numbers are inherited from the Sanskrit decimal system."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ಒಂದು (ondu)",
                "один"
              ],
              [
                "ಎರಡು (eraḍu)",
                "два"
              ],
              [
                "ಐದು (aidu)",
                "п'ять"
              ],
              [
                "ಹತ್ತು (hattu)",
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
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -gaḷu, доданим до іменника; для людей часто вживають ще й -aru.",
            "en": {
              "text": "The plural is formed with the suffix -gaḷu, added to the noun; for people, -aru is often used instead."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "ಪುಸ್ತಕ → ಪುಸ್ತಕಗಳು",
                "книги"
              ],
              [
                "ಹುಡುಗ → ಹುಡುಗರು",
                "хлопці"
              ]
            ],
            "en": {
              "title": "Plural Examples"
            }
          }
        ],
        "titleEn": "Forming the Plural — A2"
      },
      {
        "id": "invariable-adjectives",
        "title": "Незмінні прикметники — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, прикметники в каннаді не змінюються за родом, числом чи відмінком — та сама форма стоїть перед будь-яким іменником.",
            "en": {
              "text": "Unlike many languages, adjectives in Kannada don't inflect for gender, number, or case — the same form stands before any noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ದೊಡ್ಡ ಮನೆ, ದೊಡ್ಡ ಮನೆಗಳು",
                "великий дім, великі доми (doḍḍa незмінне)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariable Adjectives — A2"
      },
      {
        "id": "word-order-sov",
        "title": "Порядок слів SOV — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-додаток-присудок (SOV), дієслово завжди в кінці речення.",
            "en": {
              "text": "The basic order is subject-object-verb (SOV), with the verb always at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಪುಸ್ತಕ ಓದುತ್ತೇನೆ.",
                "Я читаю книгу. (я-книгу-читаю)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "SOV Word Order — A1"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання питальних слів — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Yāru\" (хто) і \"ēnu\" (що) переходять у відмінкові форми (yārige-кому, yārinda-від кого) перед суфіксами, як і звичайні іменники.",
            "en": {
              "text": "\"Yāru\" (who) and \"ēnu\" (what) take case forms (yārige-to whom, yārinda-from whom) before suffixes, just like ordinary nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಯಾರಿಗೆ ಕೊಟ್ಟೆ?",
                "Кому ти дав?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension of Interrogatives — B1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядний сполучник \"mattu\" (і) з'єднує слова й речення; підрядне значення часто виражають дієприслівниковою формою замість окремого сполучника.",
            "en": {
              "text": "The coordinating conjunction \"mattu\" (and) joins words and clauses; subordinate meaning is often expressed with a converb form instead of a separate conjunction."
            }
          },
          {
            "type": "table",
            "title": "mattu / āddare",
            "rows": [
              [
                "mattu",
                "і"
              ],
              [
                "āddare",
                "але"
              ]
            ],
            "en": {
              "title": "mattu / āddare"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують родовий відмінок першого іменника з другим, подібно до звичайної присвійної конструкції.",
            "en": {
              "text": "Compound words often combine the genitive case of the first noun with the second, similar to the ordinary possessive construction."
            }
          },
          {
            "type": "table",
            "title": "pustaka + mane",
            "rows": [
              [
                "ಪುಸ್ತಕದ ಮನೆ",
                "бібліотека (дім книги)"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "honorific-verb-agreement",
        "title": "Шанобливе узгодження дієслова — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Коли підмет — поважна одна особа, дієслово узгоджується так само, як і зі справжньою множиною (форма nīvu/avaru) — граматична форма ввічливості поширюється на дієслово, а не лише на займенник.",
            "en": {
              "text": "When the subject is one respected person, the verb agrees the same way it would with a true plural (the nīvu/avaru form) — the grammatical politeness extends to the verb, not just the pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಅವರು ಬಂದರು.",
                "Він/вона (шанобливо) прийшли. (множинне дієслово про одну особу)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Verb Agreement — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (ಆದರೆ — ādare) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Крім суфікса -re на дієслові (див. розділ часів), умову можна ввести словом \"ādare\" самостійно для більшої виразності.",
            "en": {
              "text": "Besides the verb suffix -re (see the tense section), a condition can also be introduced with the standalone word \"ādare\" for extra emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಸಮಯ ಇದ್ದರೆ, ಹೋಗುತ್ತೇನೆ.",
                "Якщо в мене буде час, я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (ādare) — B1"
      },
      {
        "id": "address-titles",
        "title": "Титули звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"ಸಾರ್\" (sār, від англ. sir) і \"ಮೇಡಂ\" (madam) вживають як універсальні шанобливі звертання поряд із питомим -avaru.",
            "en": {
              "text": "\"ಸಾರ್\" (sār, from English sir) and \"ಮೇಡಂ\" (madam) are used as universal respectful address terms alongside the native -avaru."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಸಾರ್, ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ.",
                "Пане, будь ласка, допоможіть."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Titles — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня пов'язані з індуїстською астрологією й небесними тілами, успадковані з санскриту.",
            "en": {
              "text": "The days of the week are tied to Hindu astrology and celestial bodies, inherited from Sanskrit."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "ಸೋಮವಾರ (sōmavāra)",
                "понеділок (місяць)"
              ],
              [
                "ಭಾನುವಾರ (bhānuvāra)",
                "неділя (сонце)"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months",
        "title": "Місяці — A1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Поряд із міжнародним календарем, каннада зберігає індуїстський місячний календар з власними назвами місяців для релігійних свят.",
            "en": {
              "text": "Alongside the international calendar, Kannada retains the Hindu lunar calendar with its own month names for religious holidays."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "ಜನವರಿ (janavari)",
                "січень (запозичене)"
              ],
              [
                "ಚೈತ್ರ (chaitra)",
                "перший місяць індуїстського календаря"
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
            "text": "Час запитують \"ಎಷ್ಟು ಗಂಟೆ?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"ಎಷ್ಟು ಗಂಟೆ?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮೂರು ಗಂಟೆ.",
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
            "text": "Кольори — незмінні прикметники, що стоять перед іменником.",
            "en": {
              "text": "Colors are invariable adjectives, standing before the noun."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "ಬಿಳಿ (biḷi)",
                "білий"
              ],
              [
                "ಕಪ್ಪು (kappu)",
                "чорний"
              ],
              [
                "ಕೆಂಪು (kempu)",
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
            "text": "Родинні терміни розрізняють старших і молодших родичів того самого ступеня, а також материнську й батьківську лінію окремими словами.",
            "en": {
              "text": "Kinship terms distinguish older and younger relatives of the same degree, as well as maternal and paternal lines, with separate words."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "ಅಮ್ಮ (amma)",
                "мати"
              ],
              [
                "ಅಪ್ಪ (appa)",
                "батько"
              ],
              [
                "ಅಣ್ಣ (aṇṇa)",
                "старший брат"
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
            "text": "\"ನಮಸ್ಕಾರ\" (namaskāra) — універсальне формальне привітання й прощання.",
            "en": {
              "text": "\"ನಮಸ್ಕಾರ\" (namaskāra) is the universal formal greeting and farewell."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "ನಮಸ್ಕಾರ!",
                "Вітаю!/Прощавайте!"
              ],
              [
                "ಧನ್ಯವಾದ!",
                "Дякую!"
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
            "text": "Погоду описують дієсловом \"bāru\" (падати/приходити) для дощу.",
            "en": {
              "text": "Weather is described with the verb \"bāru\" (to fall/come) for rain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮಳೆ ಬರುತ್ತಿದೆ.",
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
            "text": "Частини тіла — звичайні іменники нерозумного роду.",
            "en": {
              "text": "Body parts are ordinary non-rational-gender nouns."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "ಕೈ (kai)",
                "рука"
              ],
              [
                "ತಲೆ (tale)",
                "голова"
              ],
              [
                "ಕಾಲು (kālu)",
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
            "text": "Вік виражають конструкцією \"X ವರ್ಷ\" (X років) + дієслово стану.",
            "en": {
              "text": "Age is expressed with \"X varṣa\" (X years) + a state verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನನಗೆ ಇಪ್ಪತ್ತು ವರ್ಷ.",
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
        "id": "classical-language-status",
        "title": "Статус класичної мови — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Каннада — одна з небагатьох мов, офіційно визнаних \"класичною мовою Індії\" (2008 р.), з безперервною літературною традицією понад 1500 років, задокументованою в написах і рукописах.",
            "en": {
              "text": "Kannada is one of the few languages officially designated a \"Classical Language of India\" (2008), with a continuous literary tradition of over 1500 years documented in inscriptions and manuscripts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Найдавніші відомі каннадські написи датуються V ст. н.е.",
                "один із найдовших неперервних літературних записів Південної Азії"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classical Language Status — B2"
      },
      {
        "id": "vachana-literature",
        "title": "Література вачана (XII ст.) — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Рух вачана XII ст. (пов'язаний з філософом Басаванною) створив прозово-поетичну літературу народною каннада, свідомо соціально радикальну — проти кастової системи й на захист рівності — на противагу елітарній санскритській традиції того часу.",
            "en": {
              "text": "The 12th-century vachana movement (associated with the philosopher Basavanna) created prose-poetic literature in vernacular Kannada, deliberately socially radical — against the caste system and for equality — in contrast to the elite Sanskrit tradition of the time."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Вачани писали і чоловіки, і жінки з усіх каст — рідкість для того часу.",
                "рання форма соціально-реформаторської літератури народною мовою"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vachana Literature (12th c.) — B2"
      },
      {
        "id": "dialectal-variation",
        "title": "Діалектна різноманітність — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Каннада має десятки регіональних і кастово-обумовлених діалектів; стандартна літературна форма базується переважно на говірці Майсуру-Бенгалуру.",
            "en": {
              "text": "Kannada has dozens of regional and caste-based dialects; the standard literary form is based mostly on the Mysuru-Bengaluru dialect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Прибережний і північний діалекти можуть суттєво відрізнятися лексикою від стандартної форми.",
                "жива діалектна різноманітність попри стандартизацію в освіті"
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
        "id": "politeness-honorific-system",
        "title": "Система пошанної мови — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Крім ninu/nīvu, шанобливість виражають ще й додаванням -avaru до імені старшого чи поважного людини.",
            "en": {
              "text": "Besides ninu/nīvu, respect is also expressed by adding -avaru to the name of an elder or respected person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ರಾಮಣ್ಣನವರು",
                "поважний пан Раманна (з -avaru)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Honorific Address System — A2"
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
                "ಅಯ್ಯೋ!",
                "Ой!/Овва!"
              ],
              [
                "ಶಭಾಸ್!",
                "Молодець!"
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Каннадські ідіоми часто спираються на сільське життя й індуїстську філософію.",
            "en": {
              "text": "Kannada idioms often draw on rural life and Hindu philosophy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು.",
                "Хто працює, той і їсть (букв. \"якщо руки в грязі, то рот з йогуртом\")."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Common Idioms — B1"
      },
      {
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-19 утворюються поєднанням десяти з одиницею.",
            "en": {
              "text": "Numbers 11-19 are formed by combining ten with the unit."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "ಹನ್ನೊಂದು (hannondu)",
                "одинадцять"
              ],
              [
                "ಇಪ್ಪತ್ತು (ippattu)",
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
            "text": "Порядкові числівники утворюються суфіксом -ane, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -ane added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಮೊದಲನೆಯ",
                "перший"
              ],
              [
                "ಎರಡನೆಯ",
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
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"ಯಾರೋ\" (хтось) і \"ಏನೋ\" (щось) утворюються доданням частки \"-ō\" до питальних слів.",
            "en": {
              "text": "\"ಯಾರೋ\" (someone) and \"ಏನೋ\" (something) are formed by adding the particle \"-ō\" to the question words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಯಾರೋ ಕರೆ ಮಾಡಿದರು.",
                "Хтось дзвонив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Pronouns — A2"
      },
      {
        "id": "negative-polarity",
        "title": "Заперечні вирази — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "Ті самі слова з часткою \"-ō\" разом із запереченим дієсловом набувають значення \"ніхто/нічого\".",
            "en": {
              "text": "The same \"-ō\" words together with a negated verb take on the meaning \"no one/nothing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಅಲ್ಲಿ ಯಾರೂ ಇರಲಿಲ್ಲ.",
                "Там нікого не було."
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
            "text": "Розділове питання утворюється часткою \"ಅಲ್ವಾ?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the particle \"ಅಲ್ವಾ?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಇವತ್ತು ಚೆನ್ನಾಗಿದೆ, ಅಲ್ವಾ?",
                "Гарно сьогодні, чи не так?"
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
        "title": "Цільове підрядне (-alikke) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -alikke на дієслівному кореню вводить цільове підрядне \"щоб\", без окремого слова.",
            "en": {
              "text": "The suffix -alikke on the verb root introduces a purpose clause \"in order to\", with no separate word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ಅಜ್ಜಿಯ ಜೊತೆ ಮಾತಾಡಲಿಕ್ಕೆ ಕನ್ನಡ ಕಲಿತೆ.",
                "Я вивчив каннада, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (-alikke) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (ಏಕೆಂದರೆ — ēkendare) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ēkendare\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Ēkendare\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ನಾನು ತಡವಾಗಿ ಬಂದೆ ಏಕೆಂದರೆ ಬಸ್ ತಪ್ಪಿತು.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (ēkendare) — A2"
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
            "text": "Кілька частовживаних дієслів (iru-бути, baaru-приходити, hogu-йти) мають нерегулярну основу минулого часу, яку слід вивчати окремо.",
            "en": {
              "text": "A few common verbs (iru-to be, baaru-to come, hogu-to go) have an irregular past stem that must be learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "ಹೋಗು (йти) → ಹೋದೆ",
                "минулий час не за жодним стандартним правилом"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "sandhi-exceptions",
        "title": "Винятки в сандхі — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Не всі поєднання слів підкоряються стандартним правилам сандхі: деякі запозичені слова блокують злиття й вимовляються окремо попри сусідство голосних.",
            "en": {
              "text": "Not all word combinations follow the standard sandhi rules: some loanwords block fusion and are pronounced separately despite adjacent vowels."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Окремі санскритські запозичення зберігають роздільну вимову там, де питомі слова злилися б.",
                "лексичний виняток, закріплений історично"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sandhi Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо релігійні) зберігають архаїчну санскритизовану граматику, невживану в сучасній розмовній каннаді.",
            "en": {
              "text": "Some common formulas (especially religious ones) preserve archaic Sanskritized grammar not used in modern colloquial Kannada."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ಶುಭೋದಯ.",
                "Доброго ранку. (санскритизована формальна форма)"
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
