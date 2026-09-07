// Vymova — data/grammar-data/grammar_fi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FI: GrammarCategory[] = [
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
            "text": "Фінська не має граматичного роду — hän означає і \"він\", і \"вона\".",
            "en": {
              "text": "Finnish has no grammatical gender — hän means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "minä",
                "я"
              ],
              [
                "sinä",
                "ти"
              ],
              [
                "hän",
                "він / вона"
              ],
              [
                "me",
                "ми"
              ],
              [
                "he",
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
                "Minä olen opettaja.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"olla\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Olla\" відмінюється регулярно за особами, як і українське \"бути\" в минулому часі.",
            "en": {
              "text": "\"Olla\" conjugates regularly for each person, similar to how Ukrainian \"бути\" behaves in the past tense."
            }
          },
          {
            "type": "formula",
            "title": "\"olla\" (бути) — preesens",
            "rows": [
              [
                "minä",
                "olen",
                "я є"
              ],
              [
                "sinä",
                "olet",
                "ти є"
              ],
              [
                "hän",
                "on",
                "він/вона є"
              ],
              [
                "me",
                "olemme",
                "ми є"
              ],
              [
                "te",
                "olette",
                "ви є"
              ],
              [
                "he",
                "ovat",
                "вони є"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän on lääkäri.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Olla (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення дієсловом \"ei\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від простої частки, заперечення у фінській — це окреме дієслово ei, яке саме відмінюється за особами, а основне дієслово стоїть у незмінній основі.",
            "en": {
              "text": "Unlike a simple particle, negation in Finnish is a separate verb ei that itself conjugates for person, while the main verb stays in an unchanging stem form."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Tiedän.",
                "En tiedä.",
                "Я знаю. / Я не знаю."
              ],
              [
                "Hän tuli.",
                "Hän ei tullut.",
                "Він прийшов. / Він не прийшов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän ei tullut.",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with the Verb Ei — A1"
      },
      {
        "id": "questions",
        "title": "Питання з суфіксом \"-ko/-kö\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються приєднанням суфікса -ko/-kö (за законом гармонії голосних) до першого слова речення.",
            "en": {
              "text": "Yes/no questions are formed by attaching the suffix -ko/-kö (following vowel harmony) to the first word of the sentence."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Olet väsynyt.",
                "Oletko väsynyt?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Sinulla on aikaa.",
                "Onko sinulla aikaa?",
                "У тебе є час. / У тебе є час?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Onko sinulla aikaa?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with -Ko/-Kö — A1"
      },
      {
        "id": "cases",
        "title": "П'ятнадцять відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників фінська використовує аж 15 відмінків-закінчень, які приєднуються прямо до слова.",
            "en": {
              "text": "Instead of prepositions, Finnish uses as many as 15 case endings attached directly to the word."
            }
          },
          {
            "type": "table",
            "title": "Приклад: \"у/в\" (inessive -ssa/-ssä)",
            "rows": [
              [
                "talo → talossa",
                "дім → у домі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kirja on pöydällä.",
                "Книга на столі (-llä = \"на\")."
              ]
            ]
          }
        ],
        "titleEn": "The Fifteen Cases — A1"
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
        "title": "Preesens — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова в теперішньому часі відмінюються за особами й числами; закінчення додається до основи дієслова, яка часто зазнає приголосного чергування.",
            "en": {
              "text": "Present-tense verbs conjugate by person and number; the ending is added to the verb stem, which often undergoes consonant gradation."
            }
          },
          {
            "type": "formula",
            "title": "\"puhua\" (говорити) — preesens",
            "rows": [
              [
                "minä",
                "puhun",
                "я говорю"
              ],
              [
                "sinä",
                "puhut",
                "ти говориш"
              ],
              [
                "hän",
                "puhuu",
                "він/вона говорить"
              ],
              [
                "me",
                "puhumme",
                "ми говоримо"
              ],
              [
                "te",
                "puhutte",
                "ви говорите"
              ],
              [
                "he",
                "puhuvat",
                "вони говорять"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Minä puhun suomea.",
                "Я говорю фінською."
              ],
              [
                "He asuvat Helsingissä.",
                "Вони живуть у Гельсінкі."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Imperfekti — A1",
        "titleEn": "Past Tense (Imperfekti) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -i-, доданим до основи дієслова, з подальшими особовими закінченнями.",
            "en": {
              "text": "The past tense is formed with the suffix -i- added to the verb stem, followed by personal endings."
            }
          },
          {
            "type": "formula",
            "title": "\"puhua\" (говорити) — imperfekti",
            "rows": [
              [
                "minä",
                "puhuin",
                "я говорив"
              ],
              [
                "sinä",
                "puhuit",
                "ти говорив"
              ],
              [
                "hän",
                "puhui",
                "він/вона говорив(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eilen puhuin hänen kanssaan.",
                "Вчора я говорив із ним."
              ],
              [
                "He asuivat Turussa.",
                "Вони жили в Турку."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Perfekti — A2",
        "titleEn": "Perfect Tense — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний теперішній утворюється дієсловом \"olla\" (бути) у теперішньому часі + дієприкметник минулого часу на -nut/-nyt/-neet.",
            "en": {
              "text": "The perfect tense is formed with the present tense of \"olla\" (to be) plus the past participle -nut/-nyt/-neet."
            }
          },
          {
            "type": "formula",
            "title": "\"olla\" + дієприкметник",
            "rows": [
              [
                "minä",
                "olen puhunut",
                "я поговорив"
              ],
              [
                "sinä",
                "olet nähnyt",
                "ти побачив"
              ],
              [
                "hän",
                "on syönyt",
                "він/вона поїв(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Olen jo syönyt.",
                "Я вже поїв."
              ],
              [
                "Oletko nähnyt tämän elokuvan?",
                "Ти бачив цей фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect-tense",
        "title": "Pluskvamperfekti — B1",
        "titleEn": "Pluperfect Tense — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час виражає дію, що відбулася раніше за іншу минулу дію. Утворюється \"olla\" в минулому часі + дієприкметник минулого часу.",
            "en": {
              "text": "The pluperfect expresses an action that happened before another past action. Formed with the past tense of \"olla\" plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "olen syönyt",
                "olin syönyt",
                "поїв (тепер) / вже поїв (до того)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Olin jo syönyt kun hän tuli.",
                "Я вже поїв, коли він прийшов."
              ],
              [
                "Hän oli lähtenyt ennen kuin me tulimme.",
                "Вона вже пішла, перш ніж ми прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Konditionaali (-isi-) — B1",
        "titleEn": "Conditional Mood (-Isi-) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -isi-, доданим до основи дієслова + особові закінчення.",
            "en": {
              "text": "The conditional mood is formed with the suffix -isi- added to the verb stem plus personal endings."
            }
          },
          {
            "type": "formula",
            "title": "\"puhua\" (говорити) — konditionaali",
            "rows": [
              [
                "minä",
                "puhuisin",
                "я говорив би"
              ],
              [
                "sinä",
                "puhuisit",
                "ти говорив би"
              ],
              [
                "hän",
                "puhuisi",
                "він/вона говорив(-ла) би"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Haluaisin matkustaa enemmän.",
                "Я хотів би більше подорожувати."
              ],
              [
                "Jos minulla olisi aikaa, tulisin.",
                "Якби в мене був час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "potential-mood",
        "title": "Potentiaali (-ne-) — B2",
        "titleEn": "Potential Mood (-Ne-) — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Потенціалис — рідкісний спосіб, що виражає здогад чи припущення (\"мабуть\") і вживається переважно в письмовій, офіційній мові. Утворюється суфіксом -ne-.",
            "en": {
              "text": "The potential is a rare mood expressing supposition (\"probably\") and is mainly used in written, formal language. Formed with the suffix -ne-."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "tulla (приходити) → tullee",
                "мабуть, прийде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän lienee kotona.",
                "Він/вона, мабуть, удома."
              ],
              [
                "Sää paranee huomenna.",
                "Погода, мабуть, покращиться завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Imperatiivi — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб у 2-й особі однини — це чиста основа дієслова без закінчення; множина додає -kaa/-kää.",
            "en": {
              "text": "The imperative in the 2nd person singular is simply the bare verb stem; the plural adds -kaa/-kää."
            }
          },
          {
            "type": "formula",
            "title": "\"puhua\" (говорити) — imperatiivi",
            "rows": [
              [
                "sinä",
                "Puhu!",
                "Говори!"
              ],
              [
                "te",
                "Puhukaa!",
                "Говоріть!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sulje ovi, kiitos.",
                "Зачини двері, будь ласка."
              ],
              [
                "Menkää sisään!",
                "Заходьте!"
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Passiivi — B1",
        "titleEn": "Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Фінський пасив не має конкретного діяча (\"хтось робить\") і дуже часто вживається в розмовній мові навіть замість форми \"ми\" (\"me\").",
            "en": {
              "text": "The Finnish passive has no specific agent (\"someone does\") and is very commonly used in colloquial speech even as a substitute for the \"we\" form."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "puhun (я говорю)",
                "puhutaan (говориться/ми говоримо)",
                "теперішній час"
              ],
              [
                "puhuin (я говорив)",
                "puhuttiin (говорилося)",
                "минулий час"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Suomessa puhutaan suomea.",
                "У Фінляндії говорять фінською."
              ],
              [
                "Mennäänkö elokuviin?",
                "Підемо в кіно? (розмовно, замість 'menemmekö me')"
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-verb-forms",
        "title": "Kielto eri aikamuodoissa — A2",
        "titleEn": "Negation Across Tenses — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне дієслово \"ei\" відмінюється за особами й поєднується з основою дієслова (теперішній час) чи дієприкметником (перфект), змінюючи форму залежно від часу.",
            "en": {
              "text": "The negative verb \"ei\" conjugates by person and combines with the verb stem (present) or a participle (perfect), changing form depending on tense."
            }
          },
          {
            "type": "table",
            "title": "Заперечення в різних часах",
            "rows": [
              [
                "en puhu",
                "я не говорю",
                "теперішній"
              ],
              [
                "en puhunut",
                "я не говорив",
                "минулий"
              ],
              [
                "en ole puhunut",
                "я не говорив (перфект)",
                "перфект"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "En ymmärrä.",
                "Я не розумію."
              ],
              [
                "Emme ole vielä syöneet.",
                "Ми ще не поїли."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-participle",
        "title": "Preesenspartisiippi (-va/-vä) — B1",
        "titleEn": "Present Participle (-Va/-Vä) — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник теперішнього часу утворюється суфіксом -va/-vä й уживається переважно як прикметник, описуючи одночасну дію.",
            "en": {
              "text": "The present participle is formed with the suffix -va/-vä and is used mainly as an adjective, describing a simultaneous action."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "nukkua (спати)",
                "nukkuva",
                "сплячий"
              ],
              [
                "itkeä (плакати)",
                "itkevä",
                "плачучий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nukkuva lapsi oli hiljaa.",
                "Дитина, що спала, була тиха."
              ],
              [
                "Näin itkevän naisen.",
                "Я побачив жінку, що плакала."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-participle",
        "title": "Menneen ajan partisiippi (-nut/-nyt) — B1",
        "titleEn": "Past Participle (-Nut/-Nyt) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється суфіксом -nut/-nyt (однина) чи -neet (множина) і, крім складених часів, широко вживається як прикметник.",
            "en": {
              "text": "The past participle is formed with the suffix -nut/-nyt (singular) or -neet (plural) and, besides compound tenses, is widely used as an adjective."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "sulkea (закривати)",
                "sulkenut",
                "закрив"
              ],
              [
                "kirjoittaa (писати)",
                "kirjoittanut",
                "написав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kauppa on suljettu.",
                "Магазин закритий."
              ],
              [
                "Se on hyvin kirjoitettu kirja.",
                "Це добре написана книга."
              ]
            ]
          }
        ]
      },
      {
        "id": "agent-participle",
        "title": "Agenttipartisiippi (-ma/-mä) — B1",
        "titleEn": "Agent Participle (-Ma/-Mä) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник діяча на -ma/-mä + присвійний суфікс замінює ціле підрядне означальне речення (\"той, кого/що зробив я\") без окремого відносного займенника — дуже характерна для фінської конструкція.",
            "en": {
              "text": "The agent participle -ma/-mä plus a possessive suffix replaces an entire relative clause (\"the one that I made\") without a separate relative pronoun — a very characteristic Finnish construction."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kirjoittaa (писати) → kirjoittamani",
                "написаний мною / який я написав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tämä on kirjoittamani kirja.",
                "Це книга, яку я написав."
              ],
              [
                "Näin ostamasi auton.",
                "Я побачив машину, яку ти купив."
              ]
            ]
          }
        ]
      },
      {
        "id": "necessive-construction",
        "title": "Täytymistä ilmaiseva rakenne (täytyy, pitää) — A2",
        "titleEn": "Necessive Construction ('Must') — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість дії виражається безособовими словами \"täytyy\" чи \"pitää\" (треба, мусити) + підмет-виконавець у генетиві + інфінітив дієслова.",
            "en": {
              "text": "Obligation is expressed with the impersonal words \"täytyy\" or \"pitää\" (must, have to) plus the doer in the genitive plus the verb's infinitive."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "minun täytyy mennä",
                "мені треба йти"
              ],
              [
                "sinun pitää lukea",
                "тобі треба читати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Minun täytyy lähteä nyt.",
                "Мені треба йти зараз."
              ],
              [
                "Meidän pitää ostaa leipää.",
                "Нам треба купити хліб."
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
        "id": "partitive-case",
        "title": "Partitiivi — A2",
        "titleEn": "Partitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Партитив — найважливіший і найскладніший відмінок фінської: він позначає невизначену чи часткову кількість, пряме доповнення при незавершеній дії, а також уживається після заперечення й багатьох числівників.",
            "en": {
              "text": "The partitive is Finnish's most important and complex case: it marks an indefinite or partial quantity, a direct object under an incomplete action, and is also used after negation and many numerals."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "vettä (partitiivi)",
                "п'ю (трохи) води",
                "невизначена кількість"
              ],
              [
                "kirjaa (partitiivi)",
                "читаю книгу (процес)",
                "незавершена дія"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Juon kahvia.",
                "Я п'ю каву."
              ],
              [
                "En näe autoa.",
                "Я не бачу машини (партитив після заперечення)."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Genetiivi — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (genetiivi) відповідає на питання \"чий? кого?\" й утворюється суфіксом -n, доданим до основи слова.",
            "en": {
              "text": "The genitive case answers \"whose? of whom?\" and is formed with the suffix -n added to the word stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "talo (дім)",
                "talon",
                "talon ovi (двері будинку)"
              ],
              [
                "Liisa",
                "Liisan",
                "Liisan kirja (книга Лізи)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tämä on isäni auto.",
                "Це машина мого батька."
              ],
              [
                "Kaupungin keskusta on kaunis.",
                "Центр міста гарний."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-object-cases",
        "title": "Objektin sijamuodot (akkusatiivi) — B1",
        "titleEn": "Object Cases (Accusative) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідного відмінка як окремої форми немає — прямий об'єкт завершеної дії має форму, схожу на родовий відмінок (з -n) чи називний (для множини й займенників), залежно від типу дієслова й речення.",
            "en": {
              "text": "There's no separate accusative form — the direct object of a completed action takes a form resembling the genitive (with -n) or nominative (for plurals and pronouns), depending on verb type and sentence form."
            }
          },
          {
            "type": "table",
            "title": "Партитив vs \"акузатив\"",
            "rows": [
              [
                "Luen kirjaa. (partitiivi)",
                "Я читаю книгу (процес).",
                "незавершено"
              ],
              [
                "Luin kirjan. (akkusatiivi)",
                "Я прочитав книгу.",
                "завершено"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ostin auton.",
                "Я купив машину."
              ],
              [
                "Söin omenan.",
                "Я з'їв яблуко."
              ]
            ]
          }
        ]
      },
      {
        "id": "inessive-elative-illative",
        "title": "Sisäpaikallissijat: -ssa, -sta, -Vn — A2",
        "titleEn": "Interior Local Cases: In, Out Of, Into — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Три \"внутрішні\" місцеві відмінки описують положення всередині чогось: inessiivi -ssa/-ssä (\"в чомусь\"), elatiivi -sta/-stä (\"з чогось\"), illatiivi -Vn (\"у щось\", рух всередину).",
            "en": {
              "text": "Three \"interior\" local cases describe location inside something: inessive -ssa/-ssä (\"in something\"), elative -sta/-stä (\"out of something\"), illative -Vn (\"into something\", motion inward)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "talossa",
                "у домі",
                "inessiivi"
              ],
              [
                "talosta",
                "з дому",
                "elatiivi"
              ],
              [
                "taloon",
                "у дім (рух)",
                "illatiivi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Asun Suomessa.",
                "Я живу у Фінляндії."
              ],
              [
                "Tulen Suomesta.",
                "Я приїжджаю з Фінляндії."
              ]
            ]
          }
        ]
      },
      {
        "id": "adessive-ablative-allative",
        "title": "Ulkopaikallissijat: -lla, -lta, -lle — A2",
        "titleEn": "Exterior Local Cases: On, Off, Onto — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Три \"зовнішні\" місцеві відмінки описують положення на поверхні чи біля чогось: adessiivi -lla/-llä (\"на/біля\", а також володіння), ablatiivi -lta/-ltä (\"з поверхні\"), allatiivi -lle (\"на поверхню\").",
            "en": {
              "text": "Three \"exterior\" local cases describe location on or near something: adessive -lla/-llä (\"on/at\", also possession), ablative -lta/-ltä (\"off a surface\"), allative -lle (\"onto a surface\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "pöydällä",
                "на столі",
                "adessiivi"
              ],
              [
                "pöydältä",
                "зі столу",
                "ablatiivi"
              ],
              [
                "pöydälle",
                "на стіл",
                "allatiivi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Minulla on kissa.",
                "У мене є кіт (букв. \"на мені є кіт\")."
              ],
              [
                "Anna kirja hänelle.",
                "Дай йому книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "essive-translative",
        "title": "Essiivi ja translatiivi — B1",
        "titleEn": "Essive & Translative Cases — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Есив -na/-nä позначає тимчасовий стан (\"як хтось/щось\"), транслатив -ksi позначає перетворення чи стан, до якого прямують (\"стати кимось\").",
            "en": {
              "text": "The essive -na/-nä marks a temporary state (\"as someone/something\"), while the translative -ksi marks a transformation or a state being moved toward (\"becoming someone\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "opettajana",
                "як вчитель (тимчасово)",
                "essiivi"
              ],
              [
                "opettajaksi",
                "стати вчителем",
                "translatiivi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Työskentelen opettajana.",
                "Я працюю вчителем."
              ],
              [
                "Hän opiskelee lääkäriksi.",
                "Він/вона навчається на лікаря."
              ]
            ]
          }
        ]
      },
      {
        "id": "abessive-comitative-instructive",
        "title": "Abessiivi, komitatiivi, instruktiivi — B2",
        "titleEn": "Abessive, Comitative, Instructive Cases — B2",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Три рідкісні відмінки: абесив -tta/-ttä (\"без\"), комітатив -ine- (\"разом з\"), інструктив -in (\"за допомогою\") — переважно в книжному стилі чи усталених виразах.",
            "en": {
              "text": "Three rare cases: abessive -tta/-ttä (\"without\"), comitative -ine- (\"together with\"), instructive -in (\"by means of\") — mostly in written style or set expressions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "rahatta",
                "без грошей",
                "abessiivi"
              ],
              [
                "lapsineen",
                "з дітьми",
                "komitatiivi"
              ],
              [
                "käsin",
                "руками",
                "instruktiivi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän lähti rahatta.",
                "Він поїхав без грошей."
              ],
              [
                "Teen sen käsin.",
                "Я роблю це руками."
              ]
            ]
          }
        ]
      },
      {
        "id": "consonant-gradation-nouns",
        "title": "Astevaihtelu (nominit) — B1",
        "titleEn": "Consonant Gradation (Nouns) — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Найвідоміша риса фінської морфології: приголосні k, p, t у закритому складі чергуються з ослабленою формою (чи взагалі зникають) у відкритому складі, коли додається закінчення.",
            "en": {
              "text": "Finnish's most famous morphological feature: the consonants k, p, t in a closed syllable alternate with a weaker form (or disappear entirely) in an open syllable when an ending is added."
            }
          },
          {
            "type": "table",
            "title": "Приклади чергування",
            "rows": [
              [
                "kk → k: pankki → pankin",
                "банк → банку"
              ],
              [
                "p → v: kylpy → kylvyn",
                "купання → купання (родовий)"
              ],
              [
                "t → d: katu → kadun",
                "вулиця → вулиці (родовий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Menen pankkiin.",
                "Я йду до банку."
              ],
              [
                "Asun tällä kadulla.",
                "Я живу на цій вулиці."
              ]
            ]
          }
        ]
      },
      {
        "id": "vowel-harmony",
        "title": "Vokaalisointu — A1",
        "titleEn": "Vowel Harmony — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Закон гармонії голосних вимагає, щоб голосний суфікса (a/ä, o/ö, u/y) відповідав переднього/заднього ряду голосному в останньому складі кореня.",
            "en": {
              "text": "The vowel harmony rule requires a suffix vowel (a/ä, o/ö, u/y) to match the front/back quality of the vowel in the word's last syllable."
            }
          },
          {
            "type": "table",
            "title": "Задній ряд ↔ передній ряд",
            "rows": [
              [
                "talo (задн.) → talossa",
                "дім → у домі",
                "задній ряд"
              ],
              [
                "kylä (передн.) → kylässä",
                "село → у селі",
                "передній ряд"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Asun Suomessa.",
                "Я живу у Фінляндії."
              ],
              [
                "Hän on Ruotsista.",
                "Він/вона зі Швеції."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Omistusliitteet — A2",
        "titleEn": "Possessive Suffixes — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні суфікси приєднуються до відмінюваного іменника й показують, кому належить предмет, часто разом із присвійним займенником для наголосу.",
            "en": {
              "text": "Possessive suffixes attach to the declined noun and show ownership, often together with a possessive pronoun for emphasis."
            }
          },
          {
            "type": "table",
            "title": "\"kirja\" (книга) з присвійними суфіксами",
            "rows": [
              [
                "kirjani",
                "моя книга",
                "1 ос."
              ],
              [
                "kirjasi",
                "твоя книга",
                "2 ос."
              ],
              [
                "kirjansa",
                "його/її книга",
                "3 ос."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tämä on kotini.",
                "Це мій дім."
              ],
              [
                "Missä on autonsa?",
                "Де його/її машина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Monikko — A2",
        "titleEn": "Plural Formation — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в називному відмінку утворюється суфіксом -t, а в непрямих відмінках — суфіксом -i-, вставленим перед відмінковим закінченням.",
            "en": {
              "text": "The nominative plural is formed with the suffix -t, while in oblique cases it's formed with the infix -i- inserted before the case ending."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "talo → talot",
                "будинки (наз. відм.)"
              ],
              [
                "talossa → taloissa",
                "у будинках (inessiivi)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kirjat ovat pöydällä.",
                "Книги на столі."
              ],
              [
                "Lapset leikkivät puistossa.",
                "Діти граються в парку."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Adjektiivin taivutus — A2",
        "titleEn": "Adjective Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у числі й відмінку (не в роді, оскільки фінська не має граматичного роду) — тобто прикметник відмінюється так само, як і сам іменник.",
            "en": {
              "text": "The adjective agrees with the noun in number and case (not gender, since Finnish has no grammatical gender) — meaning the adjective declines exactly like the noun itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "iso talo",
                "великий дім",
                "наз. відм."
              ],
              [
                "isossa talossa",
                "у великому домі",
                "inessiivi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Asun isossa talossa.",
                "Я живу у великому домі."
              ],
              [
                "Näin kauniin kukan.",
                "Я побачив гарну квітку."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Komparatiivi ja superlatiivi — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -mpi, найвищий — суфіксом -in.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -mpi, and the superlative with -in."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "iso",
                "isompi",
                "isoin"
              ],
              [
                "kaunis",
                "kauniimpi",
                "kaunein"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tämä talo on isompi kuin minun.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "Hän on luokan paras oppilas.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Demonstratiivipronominit — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Tämä\" вказує на близький предмет (цей), \"tuo\" — на віддалений (той), \"se\" — на вже згаданий предмет (нейтральне \"той/це\").",
            "en": {
              "text": "\"Tämä\" points to something near (this), \"tuo\" to something far (that), \"se\" to something already mentioned (a neutral \"it/that\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tämä kirja",
                "ця книга",
                "близько"
              ],
              [
                "tuo kirja",
                "он та книга",
                "далеко"
              ],
              [
                "se kirja",
                "та книга (згадана)",
                "нейтрально"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tämä auto on uusi.",
                "Ця машина нова."
              ],
              [
                "Kuka tuo on?",
                "Хто той?"
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Kysymyspronominit — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "kuka?",
                "хто?",
                "Kuka tuo on?"
              ],
              [
                "mikä?",
                "що?",
                "Mikä tämä on?"
              ],
              [
                "kumpi?",
                "який (з двох)?",
                "Kumpi on parempi?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kuka olet?",
                "Хто ти?"
              ],
              [
                "Mitä teet?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-joka",
        "title": "Relatiivipronomini \"joka\" — B1",
        "titleEn": "Relative Pronoun Joka — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Joka\" (який) уводить підрядні означальні речення й відмінюється за відмінками залежно від своєї ролі в підрядному реченні, узгоджуючись з означуваним словом лише за числом.",
            "en": {
              "text": "\"Joka\" (which/who) introduces relative clauses and declines by case according to its role in the clause, agreeing with the antecedent only in number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kirja, joka on pöydällä",
                "книга, яка на столі"
              ],
              [
                "kirja, jonka luen",
                "книга, яку я читаю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tunnen miehen, joka asuu täällä.",
                "Я знаю чоловіка, який тут живе."
              ],
              [
                "Tämä on kirja, jonka ostin.",
                "Це книга, яку я купив."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-declension",
        "title": "Persoonapronominien taivutus — A2",
        "titleEn": "Personal Pronoun Declension — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за всіма відмінками, як звичайні іменники.",
            "en": {
              "text": "Personal pronouns decline through all cases, just like ordinary nouns."
            }
          },
          {
            "type": "table",
            "title": "\"minä\" (я) за деякими відмінками",
            "rows": [
              [
                "Nominatiivi",
                "minä",
                "я"
              ],
              [
                "Genetiivi",
                "minun",
                "мій/мене"
              ],
              [
                "Partitiivi",
                "minua",
                "мене"
              ],
              [
                "Adessiivi",
                "minulla",
                "у мене є"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän ei näe minua.",
                "Він/вона мене не бачить."
              ],
              [
                "Minulla on kirja.",
                "У мене є книга."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions",
        "title": "Postpositiot — A2",
        "titleEn": "Postpositions — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників фінська вживає післяйменники, що стоять ПІСЛЯ іменника в родовому відмінку: takana (за), edessä (перед), kanssa (з).",
            "en": {
              "text": "Instead of prepositions, Finnish uses postpositions that follow the genitive-case noun: takana (behind), edessä (in front of), kanssa (with)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "talon takana",
                "за будинком"
              ],
              [
                "ystävän kanssa",
                "з другом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Auto on talon edessä.",
                "Машина перед будинком."
              ],
              [
                "Menen kaupunkiin ystäväni kanssa.",
                "Я йду в місто з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Perusluvut — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "yksi",
                "один",
                "1"
              ],
              [
                "viisi",
                "п'ять",
                "5"
              ],
              [
                "kymmenen",
                "десять",
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
                "Minulla on kaksi veljeä.",
                "У мене два брати."
              ],
              [
                "Kello on kolme.",
                "Третя година."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-partitive-agreement",
        "title": "Lukusanat ja partitiivi — B1",
        "titleEn": "Numerals & Partitive Agreement — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівників 2 і більше іменник завжди стоїть у партитиві однини (не в множині!) — це справджується для будь-якого числа, окрім \"один\".",
            "en": {
              "text": "After numerals 2 and above, the noun always takes the partitive SINGULAR (not the plural!) — this holds for any number except \"one\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kolme kirjaa",
                "три книги (партитив однини, не *kirjoja)"
              ],
              [
                "viisi taloa",
                "п'ять будинків (партитив однини)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Minulla on kaksi kissaa.",
                "У мене два коти."
              ],
              [
                "Ostin kymmenen omenaa.",
                "Я купив десять яблук."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Järjestysluvut — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "ensimmäinen",
                "перший",
                "1-й"
              ],
              [
                "toinen",
                "другий",
                "2-й"
              ],
              [
                "kolmas",
                "третій",
                "3-й"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tämä on ensimmäinen päiväni töissä.",
                "Це мій перший день на роботі."
              ],
              [
                "Asun toisessa kerroksessa.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible",
        "title": "Vapaa sanajärjestys — A2",
        "titleEn": "Flexible Word Order — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Фінський порядок слів досить вільний завдяки багатому відмінковому маркуванню — базовий порядок SVO, але зміна порядку зазвичай змінює наголос чи фокус речення.",
            "en": {
              "text": "Finnish word order is fairly flexible thanks to rich case marking — the basic order is SVO, but changing word order usually shifts the sentence's emphasis or focus."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Minä ostin auton.",
                "Я купив машину.",
                "нейтральний"
              ],
              [
                "Auton minä ostin.",
                "Машину купив я (саме я).",
                "фокус на 'я'"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Joka päivä juon kahvia.",
                "Щодня я п'ю каву."
              ],
              [
                "Kahvia juon joka päivä.",
                "Каву я п'ю щодня (акцент)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-partitive-shift",
        "title": "Kielto ja partitiivi — B1",
        "titleEn": "Negation & the Partitive Shift — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Після заперечення прямий об'єкт, що в стверджувальному реченні мав би форму \"акузатива\" чи називного, обов'язково переходить у партитив.",
            "en": {
              "text": "After negation, a direct object that would take the \"accusative\" or nominative form in an affirmative sentence obligatorily shifts to the partitive."
            }
          },
          {
            "type": "table",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Ostin auton.",
                "En ostanut autoa.",
                "Я купив машину. / Я не купив машини."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "En näe taloa.",
                "Я не бачу будинку."
              ],
              [
                "Emme syöneet kalaa.",
                "Ми не їли риби."
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-clause",
        "title": "Eksistentiaalilause — B1",
        "titleEn": "Existential Clause — B1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Речення існування (\"є, знаходиться\") будуються за порядком місце + дієслово \"olla\" + підмет, причому невизначений підмет часто стоїть у партитиві.",
            "en": {
              "text": "Existence sentences (\"there is/are\") follow the order place + verb \"olla\" + subject, with an indefinite subject often taking the partitive."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Pöydällä on kirja.",
                "На столі є книга."
              ],
              [
                "Huoneessa on kirjoja.",
                "У кімнаті є книги (партитив)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kadulla on paljon ihmisiä.",
                "На вулиці багато людей."
              ],
              [
                "Jääkaapissa ei ole maitoa.",
                "У холодильнику немає молока."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words",
        "title": "Yhdyssanat — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Фінська вільно поєднує кілька іменників в одне довге слово без пробілів, причому лише останній елемент відмінюється.",
            "en": {
              "text": "Finnish freely combines several nouns into one long word with no spaces, and only the last element declines."
            }
          },
          {
            "type": "table",
            "title": "Приклади складних слів",
            "rows": [
              [
                "auto (машина) + tie (дорога)",
                "autotie",
                "автошлях"
              ],
              [
                "kirja (книга) + kauppa (магазин)",
                "kirjakauppa",
                "книгарня"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Menen kirjakauppaan.",
                "Я йду в книгарню."
              ],
              [
                "Työskentelen sairaalassa.",
                "Я працюю в лікарні."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Rinnastuskonjunktiot — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "ja",
                "і/та",
                "Minä ja sinä."
              ],
              [
                "mutta",
                "але",
                "Haluan, mutta en voi."
              ],
              [
                "tai",
                "або",
                "Kahvia vai teetä?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pidän teestä ja kahvista.",
                "Мені подобається чай і кава."
              ],
              [
                "Haluaisin lähteä, mutta minulla ei ole aikaa.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Alistuskonjunktiot — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "että",
                "що",
                "Tiedän, että tulet."
              ],
              [
                "koska",
                "тому що",
                "En tullut, koska olin sairas."
              ],
              [
                "jos",
                "якщо",
                "Jos sinulla on aikaa, soita."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Luulen, että olet oikeassa.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Jään, jos on tarpeen.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-itse",
        "title": "Refleksiivipronomini \"itse\" — A2",
        "titleEn": "Reflexive Pronoun Itse — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"itse\" (сам, себе) відмінюється за відмінками з присвійним суфіксом і показує, що дія спрямована на самого діяча.",
            "en": {
              "text": "The reflexive pronoun \"itse\" (self) declines by case with a possessive suffix and shows the action is directed back at the doer."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "itseäni",
                "себе (мене самого)",
                "partitiivi"
              ],
              [
                "itselleni",
                "собі",
                "allatiivi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Katson itseäni peilistä.",
                "Я дивлюся на себе в дзеркало."
              ],
              [
                "Tein sen itse.",
                "Я зробив це сам."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-pronoun",
        "title": "Resiprookkipronomini \"toisiaan\" — B1",
        "titleEn": "Reciprocal Pronoun Toisiaan — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "\"Toisiaan\" (\"одне одного\") виражає взаємну дію між двома чи більше учасниками й відмінюється за відмінками залежно від керування дієслова.",
            "en": {
              "text": "\"Toisiaan\" (\"one another\") expresses a mutual action between two or more participants and declines by case depending on the governing verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nähdä toisiaan",
                "бачити одне одного"
              ],
              [
                "auttaa toisiaan",
                "допомагати одне одному"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "He rakastavat toisiaan.",
                "Вони люблять одне одного."
              ],
              [
                "Autamme toisiamme.",
                "Ми допомагаємо одне одному."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Indefiniittipronominit — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "joku",
                "хтось",
                "Joku soitti."
              ],
              [
                "jokin",
                "щось",
                "Haluan jotain."
              ],
              [
                "ei kukaan",
                "ніхто",
                "Kukaan ei tiedä."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Joku koputtaa ovelle.",
                "Хтось стукає у двері."
              ],
              [
                "Onko sinulla kysymyksiä?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-types-overview",
        "title": "Verbityypit — B1",
        "titleEn": "Verb Type Classes — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Фінські дієслова поділяються на шість типів за закінченням інфінітива й основою теперішнього часу, що визначає, як саме додаються особові закінчення.",
            "en": {
              "text": "Finnish verbs fall into six types based on their infinitive ending and present stem, which determines exactly how personal endings attach."
            }
          },
          {
            "type": "table",
            "title": "Приклади типів",
            "rows": [
              [
                "I тип: puhua → puhun",
                "говорити → я говорю"
              ],
              [
                "III тип: tulla → tulen",
                "приходити → я приходжу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Haluan oppia suomea.",
                "Я хочу вивчити фінську."
              ],
              [
                "Hän osaa uida.",
                "Він/вона вміє плавати."
              ]
            ]
          }
        ]
      },
      {
        "id": "clitic-particles",
        "title": "Liitepartikkelit (-kin, -kaan/-kään) — B1",
        "titleEn": "Clitic Particles (-Kin, -Kaan/-Kään) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -kin означає \"теж, навіть\" у стверджувальних реченнях, а -kaan/-kään — його заперечний відповідник \"навіть не, теж не\".",
            "en": {
              "text": "The suffix -kin means \"too, even\" in affirmative sentences, while -kaan/-kään is its negative counterpart \"not even, not either\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Minäkin tulen.",
                "Я теж прийду.",
                "-kin"
              ],
              [
                "En minäkään tule.",
                "Я теж не прийду.",
                "-kään"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hänkin puhuu suomea.",
                "Він/вона теж говорить фінською."
              ],
              [
                "En osaa tanssiakaan.",
                "Я навіть не вмію танцювати."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Määrän ilmaisut (paljon/vähän) — A2",
        "titleEn": "Quantifiers (Paljon/Vähän) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "paljon",
                "багато"
              ],
              [
                "vähän",
                "мало"
              ],
              [
                "muutama",
                "кілька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Minulla on paljon ystäviä.",
                "У мене багато друзів."
              ],
              [
                "Anna minulle muutama minuutti.",
                "Дай мені кілька хвилин."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Adverbien muodostus — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії утворюється від прикметників суфіксом -sti.",
            "en": {
              "text": "Most manner adverbs are formed from adjectives with the suffix -sti."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "nopea (швидкий)",
                "nopeasti",
                "швидко"
              ],
              [
                "kaunis (гарний)",
                "kauniisti",
                "гарно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän puhuu nopeasti.",
                "Він говорить швидко."
              ],
              [
                "Hän laulaa kauniisti.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Johtimet (sananmuodostus) — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Фінська активно утворює нові слова додаванням суфіксів: -ja/-jä (виконавець дії), -uus/-yys (абстрактне поняття), -inen (прикметники від іменників).",
            "en": {
              "text": "Finnish actively derives new words with suffixes: -ja/-jä (agent noun), -uus/-yys (abstract concept), -inen (adjectives from nouns)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "opettaa (вчити) → opettaja",
                "вчитель"
              ],
              [
                "hyvä (добрий) → hyvyys",
                "доброта"
              ],
              [
                "Suomi (Фінляндія) → suomalainen",
                "фінський/фінн"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän on opettaja.",
                "Він/вона вчитель."
              ],
              [
                "Olen suomalainen.",
                "Я фінн."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Viikonpäivät — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "maanantai",
                "понеділок",
                "1"
              ],
              [
                "perjantai",
                "п'ятниця",
                "5"
              ],
              [
                "sunnuntai",
                "неділя",
                "7"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Maanantaina minulla on tunteja.",
                "У понеділок у мене заняття."
              ],
              [
                "Tänään on keskiviikko.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Kuukaudet ja päivämäärät — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "tammikuu",
                "січень",
                "01"
              ],
              [
                "heinäkuu",
                "липень",
                "07"
              ],
              [
                "joulukuu",
                "грудень",
                "12"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tänään on viides toukokuuta.",
                "Сьогодні п'яте травня."
              ],
              [
                "Synnyin joulukuussa.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Kellonajan ilmaiseminen — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Paljonko kello on?\" (\"Котра година?\"), а відповідь уживає слово \"kello\" (година) з числівником.",
            "en": {
              "text": "To ask the time, one says \"Paljonko kello on?\" (\"What time is it?\"), and the answer uses \"kello\" (o'clock) with the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Kello on yksi.",
                "Перша година.",
                "1:00"
              ],
              [
                "Kello on puoli kolme.",
                "Половина третьої.",
                "2:30"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Paljonko kello on?",
                "Котра година?"
              ],
              [
                "Juna lähtee kello kahdeksan.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Sinuttelu ja teitittely — A2",
        "titleEn": "Tu vs Te (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасна фінська майже повністю відмовилась від формального \"te\" на користь неформального \"sinä\" — навіть у бізнесі, за винятком дуже офіційних чи чемних ситуацій.",
            "en": {
              "text": "Modern Finnish has almost entirely abandoned the formal \"te\" in favor of informal \"sinä\" — even in business, except in very formal or courteous contexts."
            }
          },
          {
            "type": "table",
            "title": "sinä (майже завжди) vs te (рідко, формально)",
            "rows": [
              [
                "Onko sinulla aikaa?",
                "У тебе є час? (звичайне звертання)"
              ],
              [
                "Onko teillä aikaa?",
                "У Вас є час? (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mitä sinulle kuuluu?",
                "Як ти? (навіть до начальника)"
              ],
              [
                "Voisitteko auttaa minua?",
                "Ви могли б мені допомогти? (формально)"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Tervehdykset ja yleiset ilmaisut — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Hei.",
                "Привіт."
              ],
              [
                "Kiitos.",
                "Дякую."
              ],
              [
                "Anteeksi.",
                "Вибачте."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hauska tavata.",
                "Приємно познайомитися."
              ],
              [
                "Nähdään.",
                "До зустрічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Sääilmaisut — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "On aurinkoista.",
                "Сонячно."
              ],
              [
                "Sataa.",
                "Іде дощ."
              ],
              [
                "Sataa lunta.",
                "Іде сніг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tänään on todella kylmä.",
                "Сьогодні дуже холодно."
              ],
              [
                "Huomenna on pilvistä.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Idiomit — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Ei ole kaikki muumit laaksossa.",
                "(букв. не всі мумі-тролі в долині) — хтось трохи дивакуватий."
              ],
              [
                "Heittää lusikka nurkkaan.",
                "(букв. кинути ложку в куток) — померти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hän on vähän outo, ei kaikki muumit ole laaksossa.",
                "Він трохи дивакуватий."
              ],
              [
                "Vanha koira heitti lusikan nurkkaan.",
                "Старий пес помер."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Vuodenajat — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "kevät",
                "весна"
              ],
              [
                "kesä",
                "літо"
              ],
              [
                "talvi",
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
                "Kesällä on lämmintä.",
                "Влітку тепло."
              ],
              [
                "Rakastan syksyä.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Hinnat ja raha — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Paljonko tämä maksaa?\" (\"Скільки це коштує?\"), а валюта \"euroa\" стоїть після числа (у партитиві).",
            "en": {
              "text": "To ask the price, one says \"Paljonko tämä maksaa?\" (\"How much does this cost?\"), and the currency \"euroa\" follows the number (in the partitive)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "sata euroa",
                "сто євро"
              ],
              [
                "halpa / kallis",
                "дешевий / дорогий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Paljonko tämä paita maksaa?",
                "Скільки коштує ця сорочка?"
              ],
              [
                "Tämä on liian kallis.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Kysymyssanat — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "missä?",
                "де?",
                "Missä olet?"
              ],
              [
                "milloin?",
                "коли?",
                "Milloin tulet?"
              ],
              [
                "miksi?",
                "чому?",
                "Miksi itket?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Missä on asema?",
                "Де вокзал?"
              ],
              [
                "Miksi myöhästyit?",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Mielipiteen ilmaiseminen — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mielestäni...",
                "На мою думку..."
              ],
              [
                "Luulen, että...",
                "Я думаю, що..."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mielestäni tämä on hyvä idea.",
                "На мою думку, це хороша ідея."
              ],
              [
                "Luulen, että se on liian kallis.",
                "Я думаю, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Ajan ilmaisut (tänään/eilen/huomenna) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tänään",
                "сьогодні"
              ],
              [
                "eilen",
                "вчора"
              ],
              [
                "huomenna",
                "завтра"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tänään olen vapaa.",
                "Сьогодні я вільний."
              ],
              [
                "Nähdään huomenna.",
                "Побачимося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Huudahdukset — A2",
        "titleEn": "Exclamations — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Voi!",
                "Ой!"
              ],
              [
                "Hienoa!",
                "Чудово!"
              ],
              [
                "Onnea!",
                "Удачі!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Voi ei, unohdin!",
                "Ой ні, я забув!"
              ],
              [
                "Hienoa, onnistuit!",
                "Чудово, тобі вдалося!"
              ]
            ]
          }
        ]
      },
      {
        "id": "kolme-vs-kolmea-object-summary",
        "title": "Objektin valinta: nominatiivi, genetiivi vai partitiivi — B1",
        "titleEn": "Choosing the Object Case — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір форми прямого об'єкта залежить від трьох чинників одночасно: чи дія завершена, чи речення стверджувальне, і чи об'єкт визначений — саме поєднання цих трьох факторів визначає, чи вжити партитив, чи \"акузативну\" форму.",
            "en": {
              "text": "Choosing the direct object's case depends on three factors at once: whether the action is complete, whether the sentence is affirmative, and whether the object is definite — the combination of these three determines partitive vs. the \"accusative\" form."
            }
          },
          {
            "type": "table",
            "title": "Приклади вибору",
            "rows": [
              [
                "Luin kirjan.",
                "Я прочитав книгу (завершено).",
                "\"акузатив\""
              ],
              [
                "Luin kirjaa.",
                "Я читав книгу (процес).",
                "партитив"
              ],
              [
                "En lukenut kirjaa.",
                "Я не читав книги (заперечення).",
                "партитив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kirjoitin kirjeen.",
                "Я написав листа (завершено, повністю)."
              ],
              [
                "Kirjoitin kirjettä koko illan.",
                "Я писав листа весь вечір (процес)."
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
        "id": "irregular-consonant-gradation",
        "title": "Epäsäännöllinen astevaihtelu — B1",
        "titleEn": "Irregular Consonant Gradation — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже поширених слів мають нерегулярне чи непередбачуване чергування приголосних, яке не вкладається в загальні правила й потребує окремого запам'ятовування.",
            "en": {
              "text": "A handful of very common words have irregular or unpredictable consonant gradation that doesn't fit the general rules and needs to be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mennä (йти)",
                "menen (я йду)",
                "nn → n, нерегулярно"
              ],
              [
                "tuntea (знати/відчувати)",
                "tunnen (я знаю)",
                "nt → nn, нерегулярно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Minä menen kotiin.",
                "Я йду додому."
              ],
              [
                "Tunnen hänet hyvin.",
                "Я добре його/її знаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "colloquial-vs-standard-finnish",
        "title": "Puhekieli ja kirjakieli — B1",
        "titleEn": "Colloquial vs Standard Finnish — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовна фінська (puhekieli) відрізняється від літературної стандартної мови (kirjakieli) настільки сильно — скороченими займенниками, стягненими закінченнями, іншими особовими формами — що їх майже можна вважати різними регістрами, які треба вчити окремо.",
            "en": {
              "text": "Colloquial Finnish (puhekieli) differs from the standard literary language (kirjakieli) so substantially — shortened pronouns, contracted endings, different personal forms — that they can almost be considered separate registers that must be learned separately."
            }
          },
          {
            "type": "table",
            "title": "Kirjakieli ↔ puhekieli",
            "rows": [
              [
                "minä olen",
                "mä oon",
                "я є"
              ],
              [
                "emme mene",
                "ei me mennä",
                "ми не йдемо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mä oon väsyny.",
                "Я втомлений (розмовно)."
              ],
              [
                "Minä olen väsynyt.",
                "Я втомлений (літературно)."
              ]
            ]
          }
        ]
      },
      {
        "id": "long-compound-words",
        "title": "Pitkät yhdyssanat — B1",
        "titleEn": "Famously Long Compound Words — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки складні слова можна нанизувати без обмежень, фінська відома надзвичайно довгими словами, утвореними поєднанням багатьох коренів в один — теоретично без верхньої межі довжини.",
            "en": {
              "text": "Since compound words can be chained without limit, Finnish is famous for extremely long words formed by joining many roots into one — with theoretically no upper limit on length."
            }
          },
          {
            "type": "table",
            "title": "Приклад дуже довгого слова",
            "rows": [
              [
                "lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas",
                "учень молодшого офіцера — помічника механіка авіаційного реактивного турбінного двигуна",
                "одне складне слово"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Työskentelen kirjastonhoitajana.",
                "Я працюю бібліотекарем (складне слово)."
              ],
              [
                "Hän on terveydenhuoltoalan asiantuntija.",
                "Він/вона фахівець у сфері охорони здоров'я."
              ]
            ]
          }
        ]
      }
    ]
  }
];
