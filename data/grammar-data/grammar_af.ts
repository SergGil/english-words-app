// Vymova — data/grammar-data/grammar_af.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AF: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persoonlike Voornaamwoorde — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Африкаанс має спрощену граматику порівняно з нідерландською — дієслово майже не змінюється за особами, тому займенник завжди чітко вказує, хто діє.",
            "en": {
              "text": "Afrikaans has simplified grammar compared to Dutch — the verb barely changes by person, so the pronoun always makes clear who's acting."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ek"
              ],
              [
                "ти (зв. / ввічл.)",
                "jy / u"
              ],
              [
                "він / вона / воно",
                "hy / sy / dit"
              ],
              [
                "ми",
                "ons"
              ],
              [
                "ви",
                "julle"
              ],
              [
                "вони",
                "hulle"
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
        "title": "Dieselfde vorm \"is/was\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"бути\" в теперішньому часі — це завжди is, незалежно від особи чи числа; у минулому — завжди was.",
            "en": {
              "text": "The verb \"to be\" in the present is always is, regardless of person or number; in the past it's always was."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + is/was",
            "rows": [
              [
                "ek",
                "is moeg",
                "я втомлений"
              ],
              [
                "hulle",
                "is moeg",
                "вони втомлені"
              ],
              [
                "ek",
                "was moeg",
                "я був втомлений"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy is 'n dokter.",
                "Вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Uninflected \"Is/Was\" — A1"
      },
      {
        "id": "negation",
        "title": "Подвійне заперечення \"nie...nie\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в африкаанс майже завжди подвійне: nie ставиться одразу після дієслова/присудка, і друге nie закриває речення.",
            "en": {
              "text": "Negation in Afrikaans is almost always doubled: nie goes right after the verb/predicate, and a second nie closes the sentence."
            }
          },
          {
            "type": "formula",
            "title": "nie + ... + nie",
            "rows": [
              [
                "Ek weet.",
                "Ek weet nie.",
                "Я знаю. → Я не знаю."
              ],
              [
                "Sy kom.",
                "Sy kom nie.",
                "Вона приходить. → Вона не приходить."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek verstaan dit nie.",
                "Я цього не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Double Negation \"Nie...Nie\" — A1"
      },
      {
        "id": "questions",
        "title": "Питання — інверсія дієслова — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються переставленням дієслова на перше місце в реченні, без допоміжного слова.",
            "en": {
              "text": "Yes/no questions are formed by moving the verb to the front of the sentence, with no auxiliary word needed."
            }
          },
          {
            "type": "formula",
            "title": "Дієслово + підмет...?",
            "rows": [
              [
                "Jy is moeg.",
                "Is jy moeg?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Sy kom môre.",
                "Kom sy môre?",
                "Вона прийде завтра. → Вона прийде завтра?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Het jy geëet?",
                "Ти вже поїв?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Verb Inversion — A1"
      },
      {
        "id": "no-verb-conjugation",
        "title": "Дієслово ніколи не відмінюється — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже всіх германських мов, дієслово в африкаанс має РІВНО одну форму для кожного часу — без жодних особових закінчень (-s, -t, -en тощо).",
            "en": {
              "text": "Unlike nearly every other Germanic language, an Afrikaans verb has EXACTLY one form per tense — no personal endings at all (-s, -t, -en, etc.)."
            }
          },
          {
            "type": "table",
            "title": "\"loop\" (ходити) — теперішній час",
            "rows": [
              [
                "ek loop",
                "я ходжу"
              ],
              [
                "jy loop",
                "ти ходиш"
              ],
              [
                "hy/sy loop",
                "він/вона ходить"
              ],
              [
                "ons loop",
                "ми ходимо"
              ],
              [
                "hulle loop",
                "вони ходять"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ons loop elke dag.",
                "Ми ходимо щодня."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Never Conjugates — A1"
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
            "text": "Теперішній час — це просто незмінна словникова форма дієслова, однакова для всіх осіб і чисел.",
            "en": {
              "text": "The present tense is just the invariant dictionary form of the verb, identical for every person and number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ek werk",
                "я працюю"
              ],
              [
                "hulle werk",
                "вони працюють"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy werk in die stad.",
                "Вона працює в місті."
              ],
              [
                "Ons eet nou.",
                "Ми зараз їмо."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past-died-out",
        "title": "Зникнення простого минулого часу — B1",
        "titleEn": "The Disappearance of the Simple Past — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від нідерландської чи німецької, простий (синтетичний) минулий час в африкаанс зник майже повністю — залишився лише для жменьки допоміжних/модальних дієслів.",
            "en": {
              "text": "Unlike Dutch or German, the simple (synthetic) past tense in Afrikaans has almost entirely disappeared — it survives only for a handful of auxiliary/modal verbs."
            }
          },
          {
            "type": "table",
            "title": "Дієслова, що зберегли простий минулий",
            "rows": [
              [
                "was (від wees, бути)",
                "я/ти/він/... був"
              ],
              [
                "het (від hê, мати)",
                "я/ти/він/... мав"
              ],
              [
                "kon (від kan, могти)",
                "я/ти/він/... міг"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek was gister siek.",
                "Я вчора був хворий."
              ],
              [
                "Sy het nie tyd gehad nie.",
                "У неї не було часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-het-general-past",
        "title": "Перфект het + ge- як загальний минулий — A2",
        "titleEn": "The Perfect Het + Ge- as the General Past — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Для майже всіх дієслів минула дія (незалежно від того, чи це \"я зробив\" чи \"я вже зробив\") виражається однаково: het + дієприкметник з префіксом ge-.",
            "en": {
              "text": "For almost every verb, a past action (whether it's \"I did\" or \"I have done\") is expressed the same way: het + a past participle with the prefix ge-."
            }
          },
          {
            "type": "formula",
            "title": "het + ge- + основа",
            "rows": [
              [
                "ek",
                "het gewerk",
                "я працював"
              ],
              [
                "jy",
                "het gewerk",
                "ти працював"
              ],
              [
                "hulle",
                "het gewerk",
                "вони працювали"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ons het gisteraand gaan eet.",
                "Ми вчора ввечері пішли поїсти."
              ],
              [
                "Het jy die boek gelees?",
                "Ти прочитав книгу?"
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect-had",
        "title": "Давноминулий час (had + дієприкметник) — B1",
        "titleEn": "Pluperfect (Had + Participle) — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час виражає дію, що передувала іншій минулій події, і будується за тією ж моделлю, що й перфект, але з had замість het.",
            "en": {
              "text": "The pluperfect expresses an action that preceded another past event, built the same way as the perfect but with had instead of het."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek had reeds geëet toe sy kom.",
                "Я вже поїв, коли вона прийшла."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hulle had die huis reeds verkoop.",
                "Вони вже продали дім (до того)."
              ],
              [
                "Sy had nog nooit sneeu gesien nie.",
                "Вона ще ніколи не бачила снігу (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-sal",
        "title": "Майбутній час (sal + інфінітив) — A2",
        "titleEn": "Future Tense (Sal + Infinitive) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється незмінним допоміжним дієсловом sal перед незмінним інфінітивом.",
            "en": {
              "text": "The future tense is formed with the invariant auxiliary sal before the invariant infinitive."
            }
          },
          {
            "type": "formula",
            "title": "sal + інфінітив",
            "rows": [
              [
                "ek",
                "sal kom",
                "я прийду"
              ],
              [
                "ons",
                "sal kom",
                "ми прийдемо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy sal môre bel.",
                "Вона завтра подзвонить."
              ],
              [
                "Ons sal help.",
                "Ми допоможемо."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-in-past-sou",
        "title": "Умовний спосіб (sou + інфінітив) — B1",
        "titleEn": "Conditional (Sou + Infinitive) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "sou — минула форма sal — вживається для умовного способу (\"зробив би\") й майбутнього в минулому.",
            "en": {
              "text": "sou — the past form of sal — is used for the conditional (\"would do\") and the future-in-the-past."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek sou help as ek kon.",
                "Я допоміг би, якби міг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy het gesê sy sou kom.",
                "Вона сказала, що прийде (з погляду минулого)."
              ],
              [
                "Ons sou graag reis.",
                "Ми б залюбки подорожували."
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
            "text": "Наказ — це просто гола форма дієслова, без окремого закінчення й без займенника.",
            "en": {
              "text": "A command is just the bare verb form, with no separate ending and no pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kom hier!",
                "Іди сюди!"
              ],
              [
                "Moenie bekommerd wees nie!",
                "Не хвилюйся!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sit asseblief.",
                "Сідай, будь ласка."
              ],
              [
                "Maak die deur toe!",
                "Зачини двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs-overview",
        "title": "Модальні дієслова — A2",
        "titleEn": "Modal Verbs — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kan/mag/moet/wil/sal) теж не відмінюються за особою й поєднуються з незмінним інфінітивом іншого дієслова без te.",
            "en": {
              "text": "Modal verbs (kan/mag/moet/wil/sal) also don't conjugate by person and combine with the invariant infinitive of another verb with no te."
            }
          },
          {
            "type": "table",
            "title": "Основні модальні",
            "rows": [
              [
                "kan",
                "могти"
              ],
              [
                "moet",
                "мусити"
              ],
              [
                "wil",
                "хотіти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek kan swem.",
                "Я вмію плавати."
              ],
              [
                "Jy moet gaan.",
                "Тобі треба йти."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-participle-usage",
        "title": "Активний дієприкметник (-end) — B1",
        "titleEn": "Present Participle (-End) — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від англійського -ing, активний дієприкметник на -ende вживається рідко й переважно як прикметник, а не для вираження тривалої дії.",
            "en": {
              "text": "Unlike English -ing, the present participle -ende is used sparingly and mostly as an adjective, not to express an ongoing action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "'n slapende kind",
                "дитина, що спить (прикметникове вживання)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die brandende huis was skrikwekkend.",
                "Палаючий будинок був лячним."
              ],
              [
                "Sy het 'n glimlaggende gesig.",
                "У неї усміхнене обличчя."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-participle-ge-prefix",
        "title": "Дієприкметник минулого часу (префікс ge-) — A2",
        "titleEn": "Past Participle (Ge- Prefix) — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу зазвичай утворюється префіксом ge- перед основою дієслова, без окремого закінчення для більшості дієслів.",
            "en": {
              "text": "The past participle is usually formed with the prefix ge- before the verb stem, with no separate ending for most verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "werk (працювати)",
                "gewerk",
                "працював"
              ],
              [
                "speel (грати)",
                "gespeel",
                "грав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek het lank gewerk.",
                "Я довго працював."
              ],
              [
                "Hulle het buite gespeel.",
                "Вони гралися надворі."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice-word",
        "title": "Пасивний стан (word) — B1",
        "titleEn": "Passive Voice (Word) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним дієсловом word (у теперішньому) або is (у минулому) плюс дієприкметник минулого часу.",
            "en": {
              "text": "The passive voice is formed with the auxiliary word (present) or is (past) plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Die brief word geskryf.",
                "Лист пишеться."
              ],
              [
                "Die brief is geskryf.",
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
                "Die huis word gebou.",
                "Дім будується."
              ],
              [
                "Die deur is oopgemaak.",
                "Двері були відчинені."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-negation-tense-interaction",
        "title": "Подвійне заперечення в різних часах — B1",
        "titleEn": "Double Negation Across Tenses — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Обидва nie зберігаються незалежно від часу дієслова — друге nie завжди закриває речення чи підрядну частину, навіть у складних часових формах.",
            "en": {
              "text": "Both instances of nie are kept regardless of the verb's tense — the second nie always closes the sentence or clause, even in compound tense forms."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek het dit nie geweet nie.",
                "Я цього не знав."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy sal nie kom nie.",
                "Вона не прийде."
              ],
              [
                "Ons sou nie help nie.",
                "Ми б не допомогли."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-remnants",
        "title": "Залишки кон'юнктива (mag) — B2",
        "titleEn": "Subjunctive Remnants (Mag) — B2",
        "emoji": "🕊️",
        "sections": [
          {
            "type": "intro",
            "text": "Архаїчний бажальний спосіб зберігся лише в застиглих формулах побажання з mag на початку речення, без інверсії.",
            "en": {
              "text": "The archaic optative mood survives only in fixed wish formulas with mag at the start of the sentence, with no inversion."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mag jy gelukkig wees.",
                "Хай будеш ти щасливий."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mag God jou seën.",
                "Хай Бог тебе благословить."
              ],
              [
                "Lank mag hy lewe.",
                "Хай живе він довго."
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
        "id": "article-die-invariant",
        "title": "Означений артикль \"die\" — A1",
        "titleEn": "The Definite Article \"Die\" — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль die має рівно одну форму для всіх іменників — на відміну від нідерландської de/het, тут нема поділу за родом.",
            "en": {
              "text": "The definite article die has exactly one form for every noun — unlike Dutch de/het, there's no gender split here."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "die man",
                "чоловік (означ.)"
              ],
              [
                "die huis",
                "дім (означ.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die kind speel buite.",
                "Дитина грається надворі."
              ],
              [
                "Die boeke is op die rak.",
                "Книги на полиці."
              ]
            ]
          }
        ]
      },
      {
        "id": "article-n-indefinite",
        "title": "Неозначений артикль \"'n\" — A1",
        "titleEn": "The Indefinite Article \"'N\" — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль 'n (безнаголошений, вимовляється майже як \"ə\") теж не змінюється й вживається для будь-якого іменника незалежно від роду чи числа.",
            "en": {
              "text": "The indefinite article 'n (unstressed, pronounced almost like \"ə\") also never changes and is used for any noun regardless of gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "'n man",
                "один чоловік"
              ],
              [
                "'n huis",
                "один дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek het 'n hond.",
                "У мене є собака."
              ],
              [
                "Sy is 'n onderwyser.",
                "Вона вчителька."
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
            "text": "Африкаанс повністю втратив граматичний рід, успадкований від нідерландської — жоден іменник, прикметник чи артикль не позначає рід.",
            "en": {
              "text": "Afrikaans has completely lost the grammatical gender inherited from Dutch — no noun, adjective, or article marks gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "die groot huis / die groot boom / die groot meisie",
                "усі \"великий/-а/-е\" — одна форма groot"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die groot hond blaf.",
                "Великий пес гавкає."
              ],
              [
                "Die groot vrou lag.",
                "Велика жінка сміється."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-case-system",
        "title": "Відсутність відмінкової системи — A2",
        "titleEn": "No Case System — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники в африкаанс взагалі не відмінюються — синтаксичну роль слова показує лише порядок слів і прийменники.",
            "en": {
              "text": "Afrikaans nouns don't decline for case at all — a word's syntactic role is shown only by word order and prepositions."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "die man (форма незмінна у всіх ролях)",
                "чоловік — підмет, додаток, з прийменником"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die man sien die hond.",
                "Чоловік бачить собаку."
              ],
              [
                "Ek gee dit aan die man.",
                "Я даю це чоловікові."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-e-suffix",
        "title": "Множина -e — A1",
        "titleEn": "Plural Suffix -E — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший спосіб утворення множини — суфікс -e, іноді з подвоєнням кінцевого приголосного.",
            "en": {
              "text": "The most common way to form the plural is the suffix -e, sometimes with the final consonant doubled."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "boom (дерево)",
                "bome",
                "дерева"
              ],
              [
                "kat (кіт)",
                "katte",
                "коти (з подвоєнням -tt-)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die bome is groen.",
                "Дерева зелені."
              ],
              [
                "Ek sien twee katte.",
                "Я бачу двох котів."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-s-suffix",
        "title": "Множина -s — A2",
        "titleEn": "Plural Suffix -S — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Другий продуктивний суфікс множини — -s, вживається переважно зі словами на -el, -er, -aar та більшістю запозичень.",
            "en": {
              "text": "The second productive plural suffix is -s, used mostly with words ending in -el, -er, -aar, and most loanwords."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tafel (стіл)",
                "tafels",
                "столи"
              ],
              [
                "rekenaar (комп'ютер)",
                "rekenaars",
                "комп'ютери"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die tafels is nuut.",
                "Столи нові."
              ],
              [
                "Ons het twee rekenaars.",
                "У нас два комп'ютери."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-irregular",
        "title": "Неправильна множина — B1",
        "titleEn": "Irregular Plurals — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних іменників мають повністю нерегулярну множину, яку слід заучувати окремо.",
            "en": {
              "text": "A handful of very common nouns have a fully irregular plural that must be learned separately."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kind (дитина)",
                "kinders",
                "діти"
              ],
              [
                "stad (місто)",
                "stede",
                "міста"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die kinders speel.",
                "Діти граються."
              ],
              [
                "Ons besoek baie stede.",
                "Ми відвідуємо багато міст."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutive-tjie",
        "title": "Зменшувальна форма -tjie/-jie — B1",
        "titleEn": "Diminutive -Tjie/-Jie — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний суфікс має кілька варіантів (-tjie, -jie, -etjie, -pie, -kie), обраних за останнім звуком слова, — африкаанс вживає зменшувальну форму значно частіше, ніж нідерландська.",
            "en": {
              "text": "The diminutive suffix has several variants (-tjie, -jie, -etjie, -pie, -kie), chosen by the word's final sound — Afrikaans uses the diminutive far more often than Dutch."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "huis (дім)",
                "huisie",
                "будиночок"
              ],
              [
                "boom (дерево)",
                "boompie",
                "деревце"
              ],
              [
                "man (чоловік)",
                "mannetjie",
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
                "Wat 'n mooi huisie!",
                "Який гарний будиночок!"
              ],
              [
                "Die hondjie is oulik.",
                "Собачка милий."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-attributive-e-suffix",
        "title": "Означальний прикметник + -e — A2",
        "titleEn": "Attributive Adjective + -E — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, що стоїть перед іменником (означальний), часто додає -e, тоді як той самий прикметник у ролі присудка залишається без змін.",
            "en": {
              "text": "An adjective placed before a noun (attributive) often adds -e, while the same adjective as a predicate stays unchanged."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "'n mooi meisie",
                "гарна дівчина (без -e, короткий прикметник)"
              ],
              [
                "'n interessante boek",
                "цікава книга (з -e)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die groot huis is myne.",
                "Великий дім — мій."
              ],
              [
                "'n lekker koppie tee",
                "смачна чашка чаю"
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-predicative-no-inflection",
        "title": "Присудковий прикметник без -e — A2",
        "titleEn": "Predicative Adjective — No Inflection — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Коли прикметник стоїть після дієслова-зв'язки is (тобто в ролі присудка), він завжди залишається в короткій формі, без -e.",
            "en": {
              "text": "When an adjective follows the copula is (i.e. as a predicate), it always stays in the short form, with no -e."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Die huis is groot.",
                "Дім великий."
              ],
              [
                "Die boek is interessant.",
                "Книга цікава."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die kos is lekker.",
                "Їжа смачна."
              ],
              [
                "Sy antwoord was reg.",
                "Її відповідь була правильна."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (-er/-ste) — A2",
        "titleEn": "Comparative & Superlative (-Er/-Ste) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -er, найвищий — суфіксом -ste.",
            "en": {
              "text": "The comparative is formed with the suffix -er, the superlative with -ste."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "groot (великий)",
                "groter",
                "більший"
              ],
              [
                "groot (великий)",
                "grootste",
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
                "Hierdie huis is groter.",
                "Цей дім більший."
              ],
              [
                "Sy is die slimste in die klas.",
                "Вона найрозумніша в класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (hierdie/daardie) — A1",
        "titleEn": "Demonstratives (Hierdie/Daardie) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hierdie boek",
                "ця книга"
              ],
              [
                "daardie huis",
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
                "Hierdie een is myne.",
                "Ця — моя."
              ],
              [
                "Daardie berg is baie hoog.",
                "Та гора дуже висока."
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
                "my",
                "мій"
              ],
              [
                "jou",
                "твій"
              ],
              [
                "sy / haar",
                "його / її"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "My huis is groot.",
                "Мій дім великий."
              ],
              [
                "Haar boek is op die tafel.",
                "Її книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-se-construction",
        "title": "Присвійна конструкція \"se\" — A2",
        "titleEn": "The Possessive \"Se\" Construction — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність (\"чиєсь\") виражається словом se, доданим після власника — африкаанський відповідник англійського 's.",
            "en": {
              "text": "Possession (\"someone's\") is expressed with the word se, added after the possessor — the Afrikaans counterpart of English 's."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Piet se huis",
                "Пітів дім (буквально: Піт se дім)"
              ],
              [
                "die man se hond",
                "собака чоловіка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dis my ma se kar.",
                "Це машина моєї мами."
              ],
              [
                "Die kinders se speelgoed lê oral.",
                "Іграшки дітей лежать усюди."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-wat",
        "title": "Відносний займенник \"wat\" — B1",
        "titleEn": "Relative Pronoun \"Wat\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від нідерландської (окремо die/dat), африкаанс використовує ЄДИНЕ слово wat для \"хто/який/що\" незалежно від роду чи ролі.",
            "en": {
              "text": "Unlike Dutch (separately die/dat), Afrikaans uses a SINGLE word wat for \"who/which/that\" regardless of gender or role."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "die man wat kom het",
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
                "Die boek wat jy lees is goed.",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "Dis die huis wat ons gekoop het.",
                "Це дім, який ми купили."
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
                "wie",
                "хто"
              ],
              [
                "wat",
                "що"
              ],
              [
                "waar",
                "де"
              ],
              [
                "wanneer",
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
                "Wat is jou naam?",
                "Як тебе звати?"
              ],
              [
                "Waar woon jy?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-self",
        "title": "Зворотні займенники (-self) — B1",
        "titleEn": "Reflexive Pronouns (-Self) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення виражається присвійним/об'єктним займенником з доданим -self.",
            "en": {
              "text": "The reflexive meaning is expressed with the possessive/object pronoun plus the added -self."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "myself",
                "я сам(-а)"
              ],
              [
                "homself",
                "він сам"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek kyk na myself in die spieël.",
                "Я дивлюся на себе в дзеркало."
              ],
              [
                "Sy het haarself seergemaak.",
                "Вона поранила себе."
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
                "een",
                "1"
              ],
              [
                "twee",
                "2"
              ],
              [
                "drie",
                "3"
              ],
              [
                "tien",
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
                "Ek het twee susters.",
                "У мене дві сестри."
              ],
              [
                "Tien mense het gekom.",
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
                "eerste",
                "перший"
              ],
              [
                "tweede",
                "другий"
              ],
              [
                "derde",
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
                "Dis my eerste boek.",
                "Це моя перша книга."
              ],
              [
                "Sy het tweede gekom.",
                "Вона прийшла другою."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-v2",
        "title": "Порядок слів V2 у головному реченні — B1",
        "titleEn": "V2 Word Order in Main Clauses — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово завжди стоїть на другому місці головного речення — якщо перше місце займає не підмет, а обставина, підмет і дієслово міняються місцями.",
            "en": {
              "text": "The verb always stands in second position in a main clause — if something other than the subject takes first position, the subject and verb swap places."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek gaan môre stad toe.",
                "Я завтра їду в місто."
              ],
              [
                "Môre gaan ek stad toe.",
                "Завтра я їду в місто (дієслово на 2 місці)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gister het ons gaan swem.",
                "Учора ми пішли плавати."
              ],
              [
                "Dikwels lees sy in die aand.",
                "Часто вона читає ввечері."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-subordinate-verb-final",
        "title": "Дієслово в кінці підрядного речення — B1",
        "titleEn": "Verb-Final Order in Subordinate Clauses — B1",
        "emoji": "🔚",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні (після dat, omdat, as тощо) дієслово переноситься в самий кінець.",
            "en": {
              "text": "In a subordinate clause (after dat, omdat, as, etc.) the verb is pushed all the way to the end."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek weet dat sy môre kom.",
                "Я знаю, що вона прийде завтра."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Omdat dit reën, bly ons binne.",
                "Тому що дощить, ми лишаємось усередині."
              ],
              [
                "As jy kom, sal ek gelukkig wees.",
                "Якщо ти прийдеш, я буду щасливий."
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
                "en",
                "і, та"
              ],
              [
                "maar",
                "але"
              ],
              [
                "of",
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
                "Ek en jy is vriende.",
                "Я і ти — друзі."
              ],
              [
                "Ek wil gaan, maar ek het nie tyd nie.",
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
                "omdat",
                "тому що"
              ],
              [
                "as",
                "якщо/коли"
              ],
              [
                "terwyl",
                "поки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ek is bly omdat jy gekom het.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "As ek vry is, sal ek bel.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-kan-can",
        "title": "Модальне \"kan\" (могти) — A2",
        "titleEn": "Modal \"Kan\" (Can) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ek kan swem.",
                "Я вмію плавати."
              ],
              [
                "Kan jy my help?",
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
                "Sy kan Afrikaans praat.",
                "Вона вміє говорити африкаанс."
              ],
              [
                "Ons kan nie kom nie.",
                "Ми не можемо прийти."
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
                "baie",
                "багато"
              ],
              [
                "min",
                "мало"
              ],
              [
                "'n paar",
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
                "Ek het baie boeke.",
                "У мене багато книг."
              ],
              [
                "Gee my 'n bietjie water.",
                "Дай мені трохи води."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-irregular-comparative",
        "title": "Неправильні форми порівняння — B1",
        "titleEn": "Irregular Comparative Forms — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних прикметників мають нерегулярні форми порівняння замість звичайного суфікса -er.",
            "en": {
              "text": "A handful of very common adjectives have irregular comparative forms instead of the regular -er suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "goed (добрий)",
                "beter",
                "кращий (не goeder)"
              ],
              [
                "goed (добрий)",
                "beste",
                "найкращий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hierdie is beter as daardie.",
                "Це краще за те."
              ],
              [
                "Sy is die beste student.",
                "Вона найкраща студентка."
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
                "Maandag",
                "понеділок"
              ],
              [
                "Saterdag",
                "субота"
              ],
              [
                "Sondag",
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
                "Vandag is Maandag.",
                "Сьогодні понеділок."
              ],
              [
                "Ek rus op Sondae.",
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
                "Januarie",
                "січень"
              ],
              [
                "Mei",
                "травень"
              ],
              [
                "Desember",
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
                "My verjaardag is in Mei.",
                "Мій день народження в травні."
              ],
              [
                "Vandag is die tiende Januarie.",
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
                "Hoe laat is dit?",
                "Котра година?"
              ],
              [
                "Dis drie-uur.",
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
                "Ons ontmoet om sesuur.",
                "Зустрінемось о шостій."
              ],
              [
                "Dis nou middag.",
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
                "Hallo",
                "Привіт"
              ],
              [
                "Dankie",
                "Дякую"
              ],
              [
                "Totsiens",
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
                "Hoe gaan dit?",
                "Як справи?"
              ],
              [
                "Baie dankie.",
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
                "Dit is sonnig.",
                "Сонячно."
              ],
              [
                "Dit reën.",
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
                "Dit is koud vandag.",
                "Сьогодні холодно."
              ],
              [
                "Dit is baie warm.",
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
                "Dis nie 'n ramp nie.",
                "Це не катастрофа (усе не так погано)."
              ],
              [
                "Los dit maar.",
                "Облиш це."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Moenie worry nie, dis nie 'n ramp nie.",
                "Не хвилюйся, це не катастрофа."
              ],
              [
                "Los dit maar, dit maak nie saak nie.",
                "Облиш це, це не важливо."
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
            "text": "Прислівники способу дії в африкаанс здебільшого мають ту саму форму, що й присудковий прикметник — окремого суфікса не додається.",
            "en": {
              "text": "Manner adverbs in Afrikaans mostly share their form with the predicative adjective — no separate suffix is added."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "vinnig",
                "швидко"
              ],
              [
                "stadig",
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
                "Hy hardloop vinnig.",
                "Він швидко бігає."
              ],
              [
                "Praat asseblief stadig.",
                "Говори, будь ласка, повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-compounds",
        "title": "Складні слова — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hand (рука) + skoen (взуття)",
                "handskoen (рукавичка)"
              ],
              [
                "voet (нога) + bal (м'яч)",
                "voetbal (футбол)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "My handskoene is warm.",
                "Мої рукавички теплі."
              ],
              [
                "Ons speel voetbal.",
                "Ми граємо у футбол."
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
                "lente",
                "весна"
              ],
              [
                "somer",
                "літо"
              ],
              [
                "herfs",
                "осінь"
              ],
              [
                "winter",
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
                "Dit is warm in die somer.",
                "Влітку тепло."
              ],
              [
                "Ek hou van die herfs.",
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
                "Hoeveel kos dit?",
                "Скільки коштує?"
              ],
              [
                "Dit kos duisend rand.",
                "Це коштує тисячу рандів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hierdie boek kos tweehonderd rand.",
                "Ця книга коштує двісті рандів."
              ],
              [
                "Dis baie duur.",
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
                "Ek dink...",
                "Я думаю, що..."
              ],
              [
                "Na my mening...",
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
                "Ek dink jy is reg.",
                "Я думаю, що ти правий."
              ],
              [
                "Na my mening is dit 'n goeie idee.",
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
                "vandag / môre / gister",
                "сьогодні / завтра / вчора"
              ],
              [
                "nou / later",
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
                "Ons sien mekaar môre.",
                "Побачимось завтра."
              ],
              [
                "Ek is nou besig.",
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
                "iemand",
                "хтось"
              ],
              [
                "iets",
                "щось"
              ],
              [
                "niemand",
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
                "Iemand het gebel.",
                "Хтось подзвонив."
              ],
              [
                "Ek het iets gehoor.",
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
                "Wonderlik!",
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
                "Ai, wat mooi!",
                "Ой, як гарно!"
              ],
              [
                "Wonderlik, goeie nuus!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-daar-is",
        "title": "Конструкція \"daar is\" (є) — A2",
        "titleEn": "Existential \"Daar Is\" (There Is) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається конструкцією daar is (однина) / daar is (форма не змінюється навіть у множині — теж не відмінюється, як і всі дієслова).",
            "en": {
              "text": "The existence of something is expressed with the construction daar is (singular) / daar is (the form doesn't change even in the plural — like every verb, it never conjugates)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Daar is water.",
                "Є вода."
              ],
              [
                "Daar is nie tyd nie.",
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
                "Daar is baie mense hier.",
                "Тут багато людей."
              ],
              [
                "Daar is nie 'n winkel hier nie.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація (gou-gou, so-so) — B1",
        "titleEn": "Reduplication (Gou-Gou, So-So) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова, особливо прислівника, підсилює або уточнює значення — риса, рідкісна серед германських мов, але типова для африкаанс.",
            "en": {
              "text": "Repeating a word, especially an adverb, intensifies or refines its meaning — a feature rare among Germanic languages but typical of Afrikaans."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "gou-gou",
                "дуже швидко (терміново)"
              ],
              [
                "so-so",
                "так собі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kom gou-gou hier!",
                "Йди сюди швидко-швидко!"
              ],
              [
                "Dit gaan so-so met my.",
                "У мене так собі справи."
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
                "meneer",
                "пан"
              ],
              [
                "mevrou",
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
                "Goeiemôre, meneer.",
                "Доброго ранку, пане."
              ],
              [
                "Verskoon my, mevrou.",
                "Вибачте, пані."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-malay-khoisan",
        "title": "Запозичення з малайської та койсанських мов — B1",
        "titleEn": "Loanwords from Malay & Khoisan Languages — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Крім нідерландської основи, африкаанс має слова, запозичені з малайської (через рабів мису) та койсанських мов Південної Африки, яких немає в нідерландській.",
            "en": {
              "text": "Beyond its Dutch base, Afrikaans has words borrowed from Malay (via Cape slaves) and the Khoisan languages of Southern Africa, which don't exist in Dutch."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "baie (з малайської \"banyak\")",
                "багато / дуже"
              ],
              [
                "piesang (з малайської)",
                "банан"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Baie dankie.",
                "Дуже дякую."
              ],
              [
                "Ek eet 'n piesang.",
                "Я їм банан."
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
                "'n Boer maak 'n plan.",
                "Фермер знайде вихід (завжди можна щось придумати)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Moenie worry nie, 'n boer maak 'n plan.",
                "Не хвилюйся, вихід завжди знайдеться."
              ],
              [
                "Alle paaie lei na Rome.",
                "Всі дороги ведуть до Риму."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-overview",
        "title": "Прийменники — A1",
        "titleEn": "Prepositions — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "in",
                "в, у"
              ],
              [
                "op",
                "на"
              ],
              [
                "onder",
                "під"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Die boek is op die tafel.",
                "Книга на столі."
              ],
              [
                "Die kat is onder die stoel.",
                "Кіт під стільцем."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-order-pronouns",
        "title": "Порядок займенникових додатків — B1",
        "titleEn": "Object Pronoun Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли в реченні є і прямий, і непрямий займенниковий додаток, непрямий (особі) зазвичай передує прямому (речі).",
            "en": {
              "text": "When a sentence has both a direct and an indirect pronoun object, the indirect one (person) usually comes before the direct one (thing)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek gee haar dit.",
                "Я даю їй це."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hy het my dit gewys.",
                "Він показав мені це."
              ],
              [
                "Sy het ons dit vertel.",
                "Вона розповіла нам це."
              ]
            ]
          }
        ]
      },
      {
        "id": "n-lowercase-grammar-rule",
        "title": "Граматична роль малої літери \"n\" — B1",
        "titleEn": "The Grammatical Role of the Lowercase \"N\" — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки артикль 'n завжди пишеться з малої літери й ніколи не може стояти на початку речення з великої, наступне слово в реченні отримує велику літеру замість нього.",
            "en": {
              "text": "Since the article 'n is always written lowercase and can never start a sentence with a capital, the next word in the sentence takes the capital letter instead."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "'n Man loop op straat.",
                "Чоловік іде вулицею (Man з великої, не 'n)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "'n Kind speel in die tuin.",
                "Дитина грається в саду."
              ],
              [
                "'n Huis staan op die hoek.",
                "Дім стоїть на розі."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-om-te",
        "title": "Інфінітивна конструкція \"om ... te\" — B1",
        "titleEn": "The Infinitive Construction \"Om ... Te\" — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Мета чи намір виражаються конструкцією om ... te + інфінітив, де om стоїть на початку, а te — прямо перед дієсловом у кінці.",
            "en": {
              "text": "Purpose or intent is expressed with the construction om ... te + infinitive, where om comes at the start and te right before the verb at the end."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek werk hard om geld te maak.",
                "Я тяжко працюю, щоб заробити гроші."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy het gekom om te help.",
                "Вона прийшла, щоб допомогти."
              ],
              [
                "Ons studeer om te slaag.",
                "Ми навчаємось, щоб скласти іспит."
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
        "id": "verb-never-conjugates-exception",
        "title": "Найрадикальніша втрата дієвідмінювання в германських мовах — B1",
        "titleEn": "The Most Radical Loss of Conjugation Among Germanic Languages — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Африкаанс пішов набагато далі за нідерландську чи англійську у втраті дієвідмінювання: навіть дієслово \"бути\" звелося лише до is (теп.) і was (мин.) для абсолютно всіх осіб — жодна інша германська мова не втратила настільки все.",
            "en": {
              "text": "Afrikaans went far further than Dutch or English in losing conjugation: even the verb \"to be\" has collapsed to just is (present) and was (past) for absolutely every person — no other Germanic language has lost this much."
            }
          },
          {
            "type": "table",
            "title": "Порівняння з нідерландською",
            "rows": [
              [
                "nl: ik ben, jij bent, hij is",
                "af: ek is, jy is, hy is (одна форма)"
              ],
              [
                "nl: ik was, jij was, wij waren",
                "af: ek was, jy was, ons was (одна форма)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ons is almal moeg.",
                "Ми всі втомлені."
              ],
              [
                "Hulle was gister hier.",
                "Вони вчора були тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-negation-mandatory-exception",
        "title": "Обов'язкове подвійне заперечення — унікальне серед германських мов — B1",
        "titleEn": "Mandatory Double Negation — Unique Among Germanic Languages — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Жодна інша германська мова не вимагає систематичного подвійного заперечення nie...nie — цю рису африкаанс, ймовірно, успадкував від контакту з койсанськими чи малайськими мовами під час формування креольського/піджинізованого варіанту в 17-18 ст.",
            "en": {
              "text": "No other Germanic language requires systematic double negation like nie...nie — Afrikaans likely inherited this trait from contact with Khoisan or Malay languages during its creolized/pidginized formation in the 17th-18th centuries."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ek het hom nie gesien nie.",
                "Я його не бачив (два nie обов'язкові)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sy praat nie Frans nie.",
                "Вона не говорить французькою."
              ],
              [
                "Ons gaan nie more werk nie.",
                "Ми завтра не працюємо."
              ]
            ]
          }
        ]
      },
      {
        "id": "n-always-lowercase-orthography",
        "title": "'n завжди з малої літери — навіть на початку речення — B1",
        "titleEn": "'N Is Always Lowercase — Even at the Start of a Sentence — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Це унікальний орфографічний виняток: артикль 'n НІКОЛИ не пишеться з великої літери, навіть коли він перше слово речення — замість цього велику літеру отримує наступне слово, порушуючи звичайне правило \"перше слово речення — з великої\".",
            "en": {
              "text": "This is a unique orthographic exception: the article 'n is NEVER capitalized, even when it's the first word of a sentence — instead the next word takes the capital, breaking the usual \"first word of a sentence is capitalized\" rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "'n Appel is gesond.",
                "Яблуко корисне ('n залишається малою, Appel — з великої)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "'n Boom groei in die tuin.",
                "Дерево росте в саду."
              ],
              [
                "'n Onderwyser het gebel.",
                "Вчитель подзвонив."
              ]
            ]
          }
        ]
      }
    ]
  }
];
