// Vymova — data/grammar-data/grammar_la.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LA: GrammarCategory[] = [
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
            "text": "У латині особові займенники в називному відмінку часто опускаються, бо форма дієслова вже вказує на особу — ego/tu тощо додають лише для наголосу.",
            "en": {
              "text": "Latin personal pronouns in the nominative are often dropped, since the verb ending already marks the person — ego/tu etc. are added only for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ego",
                "я"
              ],
              [
                "tu",
                "ти"
              ],
              [
                "is / ea / id",
                "він / вона / воно"
              ],
              [
                "nos",
                "ми"
              ],
              [
                "vos",
                "ви"
              ],
              [
                "ii / eae / ea",
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
                "Ego magister sum.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"esse\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"esse\" (бути) — одне з небагатьох неправильних дієслів латини і відмінюється за особою та числом.",
            "en": {
              "text": "The verb \"esse\" (to be) is one of the few irregular Latin verbs and is conjugated by person and number."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час",
            "rows": [
              [
                "sum",
                "(я) є"
              ],
              [
                "es",
                "(ти) є"
              ],
              [
                "est",
                "(він/вона/воно) є"
              ],
              [
                "sumus",
                "(ми) є"
              ],
              [
                "estis",
                "(ви) є"
              ],
              [
                "sunt",
                "(вони) є"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Puella laeta est.",
                "Дівчинка щаслива."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Esse (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з non — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"non\" (не), яке зазвичай стоїть безпосередньо перед дієсловом чи словом, яке заперечується.",
            "en": {
              "text": "Negation is formed with the word \"non\" (not), which usually stands directly before the verb or the word being negated."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Puella laeta est.",
                "Puella non laeta est.",
                "Дівчинка щаслива → дівчинка не щаслива"
              ],
              [
                "Ego magister sum.",
                "Ego non magister sum.",
                "Я вчитель → я не вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Non fessus sum.",
                "Я не втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with non — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення (-ne, num, nonne) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються енклітикою \"-ne\", доданою до першого слова (нейтральне питання), \"num\" (очікує відповіді \"ні\") чи \"nonne\" (очікує відповіді \"так\"); спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are marked with the enclitic \"-ne\" attached to the first word (neutral question), \"num\" (expecting \"no\"), or \"nonne\" (expecting \"yes\"); wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "quis",
                "хто"
              ],
              [
                "quid",
                "що"
              ],
              [
                "ubi",
                "де"
              ],
              [
                "quando",
                "коли"
              ],
              [
                "cur",
                "чому"
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
                "Esne Romanus?",
                "Ти римлянин?"
              ],
              [
                "Nonne fessus es?",
                "Ти ж утомлений, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions (-ne, num, nonne) — A1"
      },
      {
        "id": "case-system-intro",
        "title": "Система відмінків — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса латинської граматики: роль слова в реченні визначає не порядок слів, а закінчення — відмінок. П'ять основних відмінків (називний, родовий, давальний, знахідний, орудний) дозволяють вільний порядок слів у реченні.",
            "en": {
              "text": "The most defining trait of Latin grammar: a word's role in the sentence is determined not by word order but by its ending — the case. The five main cases (nominative, genitive, dative, accusative, ablative) allow for free word order in the sentence."
            }
          },
          {
            "type": "table",
            "title": "puella (дівчинка) — відмінки однини",
            "rows": [
              [
                "puella (наз.)",
                "дівчинка (підмет)"
              ],
              [
                "puellae (родов.)",
                "дівчинки (присвійність)"
              ],
              [
                "puellam (знах.)",
                "дівчинку (прямий додаток)"
              ]
            ],
            "en": {
              "title": "puella (girl) — Singular Cases"
            }
          }
        ],
        "titleEn": "The Case System — A2"
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
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова першої дієвідміни.",
            "en": {
              "text": "The present tense is formed with personal endings added to the stem of a first-conjugation verb."
            }
          },
          {
            "type": "table",
            "title": "amare (любити) — теперішній час",
            "rows": [
              [
                "amo",
                "я люблю"
              ],
              [
                "amas",
                "ти любиш"
              ],
              [
                "amat",
                "він/вона любить"
              ]
            ],
            "en": {
              "title": "amare (to love) — Present Tense"
            }
          }
        ],
        "titleEn": "The Present Tense — A1"
      },
      {
        "id": "imperfect-tense",
        "title": "Імперфект — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект (тривала минула дія) утворюється суфіксом -ba- перед особовим закінченням.",
            "en": {
              "text": "The imperfect (ongoing past action) is formed with the suffix -ba- before the personal ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amabam.",
                "Я любив (тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperfect Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час I і II дієвідмін утворюється суфіксом -bi-/-b-, а III і IV — голосною -a-/-e-.",
            "en": {
              "text": "The future tense of the 1st/2nd conjugations is formed with the suffix -bi-/-b-, while the 3rd/4th use the vowel -a-/-e-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amabo.",
                "Я любитиму."
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
        "id": "perfect-tense",
        "title": "Перфект — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект (завершена минула дія) утворюється від окремої перфектної основи з власним набором закінчень, відмінних від теперішньої системи.",
            "en": {
              "text": "The perfect (completed past action) is formed from a separate perfect stem with its own set of endings, distinct from the present system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amavi.",
                "Я полюбив/любив (одноразово, завершено)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect Tense — A2"
      },
      {
        "id": "pluperfect-tense",
        "title": "Плюсквамперфект — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється від перфектної основи + суфікс -era-, вказуючи на дію, завершену раніше за іншу минулу дію.",
            "en": {
              "text": "The pluperfect is formed from the perfect stem + the suffix -era-, indicating an action completed before another past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amaveram.",
                "Я вже був полюбив (до того моменту)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pluperfect Tense — B1"
      },
      {
        "id": "future-perfect-tense",
        "title": "Майбутній перфект — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній перфект утворюється від перфектної основи + суфікс -eri-, вказуючи на дію, яка завершиться до іншої майбутньої дії.",
            "en": {
              "text": "The future perfect is formed from the perfect stem + the suffix -eri-, indicating an action that will be completed before another future action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amavero.",
                "Я вже полюблю (до того моменту)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Perfect Tense — B1"
      },
      {
        "id": "present-subjunctive",
        "title": "Умовний спосіб теперішнього часу — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив теперішнього часу вживається в цільових і результативних підрядних реченнях, а також для вираження побажання чи заклику.",
            "en": {
              "text": "The present subjunctive is used in purpose and result clauses, as well as to express a wish or exhortation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vivat rex!",
                "Хай живе король!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Present Subjunctive — B1"
      },
      {
        "id": "imperfect-subjunctive",
        "title": "Умовний спосіб минулого часу — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив імперфекта вживається в підрядних реченнях, залежних від минулого часу головного речення, за правилом узгодження часів.",
            "en": {
              "text": "The imperfect subjunctive is used in subordinate clauses depending on a past-tense main clause, following the sequence of tenses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Venit ut videret.",
                "Він прийшов, щоб побачити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperfect Subjunctive — B1"
      },
      {
        "id": "passive-voice-present-system",
        "title": "Пасивний стан (теперішня система) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішній системі пасив утворюється власним набором особових закінчень (-or/-r, -ris, -tur...), окремо доданих до тієї самої основи, що й активний стан.",
            "en": {
              "text": "In the present system, the passive is formed with its own set of personal endings (-or/-r, -ris, -tur...), attached separately to the same stem as the active voice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amor.",
                "Мене люблять."
              ],
              [
                "Amatur.",
                "Його/її люблять."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice (Present System) — B1"
      },
      {
        "id": "deponent-verbs",
        "title": "Депонентні дієслова — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса латини: депонентні дієслова мають пасивну форму, але активне значення — граматично \"пасивні\", але семантично не позначають дії, яку хтось зазнає.",
            "en": {
              "text": "A unique Latin feature: deponent verbs have a passive form but an active meaning — grammatically \"passive\", but not semantically denoting an action someone undergoes."
            }
          },
          {
            "type": "table",
            "title": "hortor (заохочувати)",
            "rows": [
              [
                "hortor (пасивна форма)",
                "я заохочую (активне значення!)"
              ],
              [
                "loquitur (пасивна форма)",
                "він говорить (активне значення!)"
              ]
            ],
            "en": {
              "title": "hortor (to encourage)"
            }
          }
        ],
        "titleEn": "Deponent Verbs — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — основа дієслова теперішнього часу; для множини додається -te.",
            "en": {
              "text": "The 2nd person singular imperative is the present verb stem; the plural adds -te."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Ama!",
                "Люби!"
              ],
              [
                "Amate!",
                "Любіть! (мн.)"
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
        "id": "indirect-statement",
        "title": "Непряма мова (accusativus cum infinitivo) — B2",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Непряму мову після дієслів казання й думання виражають конструкцією \"знахідний відмінок + інфінітив\" — підмет підрядного речення переходить у знахідний, а дієслово стає інфінітивом, без сполучника \"що\".",
            "en": {
              "text": "Indirect statement after verbs of saying and thinking is expressed with the \"accusative + infinitive\" construction — the subordinate clause's subject shifts to the accusative and its verb becomes an infinitive, with no word for \"that\"."
            }
          },
          {
            "type": "formula",
            "title": "Пряма → непряма мова",
            "rows": [
              [
                "\"Puella laeta est.\"",
                "Dico puellam laetam esse.",
                "\"Дівчинка щаслива\" → Я кажу, що дівчинка щаслива (знах.+інф.)"
              ]
            ]
          }
        ],
        "titleEn": "Indirect Statement (Accusative + Infinitive) — B2"
      },
      {
        "id": "sequence-of-tenses",
        "title": "Узгодження часів у кон'юнктиві — B2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Час кон'юнктива в підрядному реченні залежить від часу головного дієслова за строгим правилом: теперішнє/майбутнє головне вимагає теперішнього/перфектного кон'юнктива, минуле головне — імперфектного/плюсквамперфектного.",
            "en": {
              "text": "The tense of the subjunctive in a subordinate clause depends on the main verb's tense by a strict rule: a present/future main clause requires the present/perfect subjunctive, a past main clause requires the imperfect/pluperfect subjunctive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Venit ut videat (гол. теп.) vs venit ut videret (гол. мин.).",
                "прийшов, щоб бачив — форма кон'юнктива залежить від часу гол. дієслова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequence of Tenses in the Subjunctive — B2"
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
        "id": "first-declension",
        "title": "Перша відміна (-a) — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Перша відміна охоплює переважно іменники жіночого роду з основою на -a.",
            "en": {
              "text": "The first declension covers mostly feminine nouns with an -a stem."
            }
          },
          {
            "type": "table",
            "title": "puella (дівчинка)",
            "rows": [
              [
                "puella (наз.)",
                "puellae (родов.)"
              ],
              [
                "puellam (знах.)",
                "puella (оруд.)"
              ]
            ],
            "en": {
              "title": "puella (girl)"
            }
          }
        ],
        "titleEn": "The First Declension (-a) — A1"
      },
      {
        "id": "second-declension",
        "title": "Друга відміна (-us/-um) — A1",
        "emoji": "2️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Друга відміна охоплює чоловічий рід на -us і середній на -um.",
            "en": {
              "text": "The second declension covers masculine nouns in -us and neuter nouns in -um."
            }
          },
          {
            "type": "table",
            "title": "dominus (господар)",
            "rows": [
              [
                "dominus (наз.)",
                "domini (родов.)"
              ],
              [
                "dominum (знах.)",
                "domino (оруд.)"
              ]
            ],
            "en": {
              "title": "dominus (master)"
            }
          }
        ],
        "titleEn": "The Second Declension (-us/-um) — A1"
      },
      {
        "id": "third-declension",
        "title": "Третя відміна (консонантна) — A2",
        "emoji": "3️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Третя відміна найрізноманітніша: основа закінчується на приголосний, а рід не передбачуваний з форми називного відмінка.",
            "en": {
              "text": "The third declension is the most varied: the stem ends in a consonant, and gender is not predictable from the nominative form."
            }
          },
          {
            "type": "table",
            "title": "rex (король)",
            "rows": [
              [
                "rex (наз.)",
                "regis (родов.)"
              ],
              [
                "regem (знах.)",
                "rege (оруд.)"
              ]
            ],
            "en": {
              "title": "rex (king)"
            }
          }
        ],
        "titleEn": "The Third Declension (Consonant) — A2"
      },
      {
        "id": "fourth-declension",
        "title": "Четверта відміна (-us, род. -us) — B1",
        "emoji": "4️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Четверта відміна схожа на другу за формою називного, але має іншу основу голосних у решті відмінків.",
            "en": {
              "text": "The fourth declension resembles the second in its nominative form, but has a different vowel stem in the other cases."
            }
          },
          {
            "type": "table",
            "title": "manus (рука)",
            "rows": [
              [
                "manus (наз.)",
                "manus (родов.)"
              ],
              [
                "manum (знах.)",
                "manu (оруд.)"
              ]
            ],
            "en": {
              "title": "manus (hand)"
            }
          }
        ],
        "titleEn": "The Fourth Declension (-us) — B1"
      },
      {
        "id": "fifth-declension",
        "title": "П'ята відміна (-es) — B1",
        "emoji": "5️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "П'ята відміна — найменша за кількістю слів, з основою на -e.",
            "en": {
              "text": "The fifth declension is the smallest in number of words, with an -e stem."
            }
          },
          {
            "type": "table",
            "title": "res (річ)",
            "rows": [
              [
                "res (наз.)",
                "rei (родов.)"
              ],
              [
                "rem (знах.)",
                "re (оруд.)"
              ]
            ],
            "en": {
              "title": "res (thing)"
            }
          }
        ],
        "titleEn": "The Fifth Declension (-es) — B1"
      },
      {
        "id": "genitive-uses",
        "title": "Вживання родового відмінка — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок виражає не лише присвійність, а й частковість (\"частина з цілого\") та зв'язок між абстрактними поняттями.",
            "en": {
              "text": "The genitive case expresses not only possession but also partitivity (\"part of a whole\") and the relation between abstract concepts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "liber puellae",
                "книга дівчинки (присвійність)"
              ],
              [
                "pars urbis",
                "частина міста (частковість)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Uses of the Genitive Case — A2"
      },
      {
        "id": "dative-uses",
        "title": "Вживання давального відмінка — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок позначає непрямий додаток (\"кому/для кого\") і вживається в конструкції \"бути властивим\" (dativus possessivus).",
            "en": {
              "text": "The dative case marks the indirect object (\"to/for whom\") and is used in the construction \"to belong to\" (dativus possessivus)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Do librum puellae.",
                "Я даю книгу дівчинці."
              ],
              [
                "Est mihi liber.",
                "У мене є книга. (буквально \"книга є мені\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Uses of the Dative Case — A2"
      },
      {
        "id": "ablative-of-means",
        "title": "Орудний відмінок засобу — B1",
        "emoji": "🔨",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок без прийменника позначає засіб чи інструмент дії.",
            "en": {
              "text": "The ablative without a preposition marks the means or instrument of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Scribo stilo.",
                "Я пишу стилом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ablative of Means — B1"
      },
      {
        "id": "ablative-of-time",
        "title": "Орудний відмінок часу — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок без прийменника також позначає момент часу, коли відбувається дія.",
            "en": {
              "text": "The ablative without a preposition also marks the point in time when an action occurs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hieme nix cadit.",
                "Взимку падає снег."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ablative of Time — B1"
      },
      {
        "id": "ablative-absolute",
        "title": "Абсолютний орудний — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна конструкція латинської граматики: іменник в орудному відмінку + дієприкметник (теж в орудному) утворюють самостійну підрядну фразу, граматично не пов'язану з решткою речення — \"за таких обставин\".",
            "en": {
              "text": "A unique Latin grammatical construction: a noun in the ablative + a participle (also ablative) form a self-contained subordinate phrase, grammatically unconnected to the rest of the sentence — \"given these circumstances\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Urbe capta, milites discesserunt.",
                "Коли місто було захоплено, солдати пішли. (urbe capta — абсолютний орудний)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ablative Absolute — B2"
      },
      {
        "id": "accusative-extent-direction",
        "title": "Знахідний протяжності й напрямку — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок без прийменника позначає тривалість у часі/просторі й, з назвами міст, напрямок руху.",
            "en": {
              "text": "The accusative without a preposition marks duration in time/space and, with city names, the direction of motion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Romam eo.",
                "Я їду до Риму."
              ],
              [
                "Tres horas manebam.",
                "Я чекав три години."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Accusative of Extent and Direction — B1"
      },
      {
        "id": "vocative-case",
        "title": "Кличний відмінок — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок майже завжди збігається з називним, крім особливої форми -e для іменників другої відміни чоловічого роду.",
            "en": {
              "text": "The vocative case almost always coincides with the nominative, except for a special -e form for second-declension masculine nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Marce, veni!",
                "Марку, йди!"
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
        "id": "locative-case-remnant",
        "title": "Залишковий місцевий відмінок — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Давньоіталійський місцевий відмінок майже зник, зберігшись лише у застиглих формах для назв міст і малих островів.",
            "en": {
              "text": "The Old Italic locative case has almost vanished, surviving only in frozen forms for city names and small islands."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Romae habito.",
                "Я живу в Римі. (Romae — локатив, а не родовий тут)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Remnant Locative Case — B2"
      },
      {
        "id": "adjective-declension",
        "title": "Відмінювання прикметників — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники першої/другої відміни узгоджуються за родом, числом і відмінком з іменником; прикметники третьої відміни мають власну, трохи іншу парадигму.",
            "en": {
              "text": "First/second-declension adjectives agree with the noun in gender, number, and case; third-declension adjectives have their own, slightly different paradigm."
            }
          },
          {
            "type": "table",
            "title": "bonus, bona, bonum",
            "rows": [
              [
                "vir bonus (ч.р.)",
                "добрий чоловік"
              ],
              [
                "femina bona (ж.р.)",
                "добра жінка"
              ]
            ],
            "en": {
              "title": "bonus, bona, bonum"
            }
          }
        ],
        "titleEn": "Adjective Declension — A2"
      },
      {
        "id": "comparative-degree",
        "title": "Порівняльний ступінь — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -ior, доданим до основи прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -ior added to the adjective stem."
            }
          },
          {
            "type": "table",
            "title": "fortis → fortior",
            "rows": [
              [
                "fortis (сильний) → fortior",
                "сильніший"
              ]
            ]
          }
        ],
        "titleEn": "The Comparative Degree — A2"
      },
      {
        "id": "superlative-degree",
        "title": "Найвищий ступінь — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється суфіксом -issimus, доданим до основи прикметника.",
            "en": {
              "text": "The superlative is formed with the suffix -issimus added to the adjective stem."
            }
          },
          {
            "type": "table",
            "title": "fortis → fortissimus",
            "rows": [
              [
                "fortis (сильний) → fortissimus",
                "найсильніший"
              ]
            ]
          }
        ],
        "titleEn": "The Superlative Degree — A2"
      },
      {
        "id": "relative-pronoun-qui",
        "title": "Відносний займенник qui/quae/quod — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник узгоджується з означуваним іменником у роді й числі, але відмінок визначається роллю в підрядному реченні.",
            "en": {
              "text": "The relative pronoun agrees with its antecedent in gender and number, but its case is determined by its role in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vir qui venit est frater meus.",
                "Чоловік, що прийшов, — мій брат."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Pronoun qui/quae/quod — B1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (hic/ille/iste) — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Hic\" (цей) вказує на близьке до мовця, \"ille\" (той) — на віддалене, \"iste\" (той, що в тебе) — на близьке до слухача.",
            "en": {
              "text": "\"Hic\" (this) points to something near the speaker, \"ille\" (that) to something distant, \"iste\" (that of yours) to something near the listener."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hic liber est meus.",
                "Ця книга моя."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns (hic/ille/iste) — A2"
      },
      {
        "id": "personal-pronoun-declension",
        "title": "Повне відмінювання особових займенників — A2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за всіма відмінками, і часто саме їхня відмінкова форма (а не окреме слово) виражає присвійність першої й другої особи.",
            "en": {
              "text": "Personal pronouns decline through all cases, and it's often their case form itself (not a separate word) that expresses first/second-person possession."
            }
          },
          {
            "type": "table",
            "title": "mei, tui, nostri",
            "rows": [
              [
                "mei (родов. ego)",
                "мене/мій"
              ],
              [
                "nostri (родов. nos)",
                "нас/наш"
              ]
            ],
            "en": {
              "title": "mei, tui, nostri"
            }
          }
        ],
        "titleEn": "The Full Declension of Personal Pronouns — A2"
      },
      {
        "id": "numbers-cardinal",
        "title": "Кількісні числівники — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 1-3 відмінюються за родом і відмінком, як прикметники; числа від 4 до 100 здебільшого незмінні.",
            "en": {
              "text": "The numbers 1-3 decline by gender and case, like adjectives; numbers from 4 to 100 are mostly invariable."
            }
          },
          {
            "type": "table",
            "title": "unus, duo, tres",
            "rows": [
              [
                "unus, una, unum",
                "один (ч./ж./с.р.)"
              ],
              [
                "duo, duae, duo",
                "два"
              ],
              [
                "tres",
                "три"
              ]
            ],
            "en": {
              "title": "unus, duo, tres"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numbers-ordinal",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники відмінюються, як прикметники першої/другої відміни.",
            "en": {
              "text": "Ordinal numbers decline like first/second-declension adjectives."
            }
          },
          {
            "type": "table",
            "title": "primus, secundus",
            "rows": [
              [
                "primus",
                "перший"
              ],
              [
                "secundus",
                "другий"
              ],
              [
                "tertius",
                "третій"
              ]
            ],
            "en": {
              "title": "primus, secundus"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "word-order-flexibility",
        "title": "Гнучкість порядку слів — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки відмінок, а не порядок слів, визначає граматичну роль, латинське речення можна переставляти для стилістичного наголосу без зміни значення.",
            "en": {
              "text": "Since case, not word order, determines grammatical role, a Latin sentence can be rearranged for stylistic emphasis without changing its meaning."
            }
          },
          {
            "type": "formula",
            "title": "Різні порядки, те саме значення",
            "rows": [
              [
                "Puella canem amat.",
                "Canem puella amat.",
                "Дівчинка любить собаку (обидва порядки слів означають те саме)"
              ]
            ]
          }
        ],
        "titleEn": "Word Order Flexibility — B1"
      },
      {
        "id": "gerund",
        "title": "Герундій — B2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Герундій — віддієслівний іменник середнього роду, що відмінюється за відмінками й виражає абстрактне поняття дії (\"читання\", \"писання\").",
            "en": {
              "text": "The gerund is a neuter verbal noun that declines through the cases and expresses the abstract notion of an action (\"reading\", \"writing\")."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ars legendi",
                "мистецтво читання (legendi — родовий герундія)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gerund — B2"
      },
      {
        "id": "gerundive",
        "title": "Герундив — B2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Герундив, на відміну від герундія, — це пасивний дієслівний прикметник, що узгоджується з іменником і виражає обов'язковість (\"те, що має бути зроблено\").",
            "en": {
              "text": "The gerundive, unlike the gerund, is a passive verbal adjective that agrees with a noun and expresses obligation (\"that which must be done\")."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Carthago delenda est.",
                "Карфаген має бути знищений. (знаменита фраза з герундивом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gerundive — B2"
      },
      {
        "id": "supine",
        "title": "Супін — B2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Супін — ще одна віддієслівна форма, що вживається після дієслів руху для вираження мети (\"щоб зробити\").",
            "en": {
              "text": "The supine is another verbal noun form, used after verbs of motion to express purpose (\"in order to do\")."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Venit spectatum.",
                "Він прийшов подивитися. (spectatum — супін)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Supine — B2"
      },
      {
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"nonne\" на початку речення очікує відповіді \"так\" — функціонально схожа на розділове питання \"чи не так?\".",
            "en": {
              "text": "The particle \"nonne\" at the start of a sentence expects the answer \"yes\" — functionally similar to a tag question \"isn't that so?\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nonne diem pulchrum habemus?",
                "У нас же гарний день, чи не так?"
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
        "id": "four-conjugations",
        "title": "Чотири дієвідміни — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова поділені на чотири дієвідміни за кінцевим голосним інфінітива (-are, -ere короткий, -ere/-ĕre, -ire), кожна з власним набором часових основ.",
            "en": {
              "text": "Verbs are classified into four conjugations by the infinitive's final vowel (-are, -ēre, -ĕre, -ire), each with its own set of tense stems."
            }
          },
          {
            "type": "table",
            "title": "Чотири дієвідміни",
            "rows": [
              [
                "amare (I)",
                "любити"
              ],
              [
                "monere (II)",
                "радити"
              ],
              [
                "regere (III)",
                "правити"
              ],
              [
                "audire (IV)",
                "слухати"
              ]
            ],
            "en": {
              "title": "The Four Conjugations"
            }
          }
        ],
        "titleEn": "The Four Conjugations — A1"
      },
      {
        "id": "present-participle",
        "title": "Активний дієприкметник теп. часу — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник теперішнього часу (-ns/-ntis) описує тривалу дію, одночасну з головним дієсловом.",
            "en": {
              "text": "The present active participle (-ns/-ntis) describes an ongoing action simultaneous with the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Puella ridens venit.",
                "Дівчинка прийшла, усміхаючись."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Present Active Participle — B1"
      },
      {
        "id": "perfect-passive-participle",
        "title": "Пасивний дієприкметник мин. часу — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник минулого часу (четверта основна форма дієслова) описує дію, завершену над іменником, і є основою для перфектного пасиву.",
            "en": {
              "text": "The perfect passive participle (the fourth principal part of the verb) describes an action completed upon the noun, and is the base for the perfect passive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Urbs capta",
                "захоплене місто"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect Passive Participle — B1"
      },
      {
        "id": "future-active-participle",
        "title": "Активний дієприкметник майб. часу — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник майбутнього часу (-urus) виражає намір чи дію, що незабаром відбудеться.",
            "en": {
              "text": "The future active participle (-urus) expresses intention or an action about to happen."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Moriturus te saluto.",
                "Я, що помиратиму, вітаю тебе. (знаменита фраза гладіаторів)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Active Participle — B1"
      },
      {
        "id": "purpose-clauses",
        "title": "Цільові підрядні (ut/ne) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ut\" (щоб) + кон'юнктив вводить цільове підрядне речення; заперечна мета вимагає \"ne\" замість \"ut non\".",
            "en": {
              "text": "\"Ut\" (in order to) + the subjunctive introduces a purpose clause; negative purpose requires \"ne\" instead of \"ut non\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Venio ut videam.",
                "Я прийшов, щоб побачити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Purpose Clauses (ut/ne) — B1"
      },
      {
        "id": "result-clauses",
        "title": "Результативні підрядні (ut/ut non) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ut\" + кон'юнктив також вводить результативне підрядне \"так що\", на відміну від цільового воно заперечується словом \"ut non\", а не \"ne\".",
            "en": {
              "text": "\"Ut\" + the subjunctive also introduces a result clause \"so that\"; unlike the purpose clause, it's negated with \"ut non\", not \"ne\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tam fortis est ut omnes vincat.",
                "Він такий сильний, що перемагає всіх."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Result Clauses (ut/ut non) — B1"
      },
      {
        "id": "cum-clauses",
        "title": "Багатозначний сполучник cum — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "\"Cum\" може вводити причинове, часове чи допустове підрядне речення залежно від способу дієслова: з дійсним способом — чисто часове, з кон'юнктивом — часто причинове чи допустове.",
            "en": {
              "text": "\"Cum\" can introduce a causal, temporal, or concessive clause depending on the verb's mood: with the indicative it's purely temporal, with the subjunctive it's often causal or concessive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cum Romam venisset, multa vidit.",
                "Коли (і оскільки) він прибув у Рим, він побачив багато."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Multifunctional Conjunction cum — B2"
      },
      {
        "id": "conditional-sentences",
        "title": "Три типи умовних речень — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Латина розрізняє три типи умовних речень за способом і часом дієслова: реальні (дійсний спосіб), майбутні можливі (кон'юнктив теп.) і нереальні (кон'юнктив мин./плюсквамперфекта).",
            "en": {
              "text": "Latin distinguishes three types of conditional sentences by the verb's mood and tense: real (indicative), future possible (present subjunctive), and unreal (imperfect/pluperfect subjunctive)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Si hoc dicis, erras. (реальне)",
                "Якщо ти це кажеш, ти помиляєшся."
              ],
              [
                "Si hoc dicas, erres. (можливе)",
                "Якби ти це сказав, ти б помилявся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three Types of Conditional Sentences — B2"
      },
      {
        "id": "roman-calendar-system",
        "title": "Римський календар (Kalendae, Nonae, Idus) — B1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Римляни не нумерували дні місяця послідовно: дати рахували назад від трьох фіксованих точок — Календ (1-го числа), Нон (5-го чи 7-го) та Ід (13-го чи 15-го).",
            "en": {
              "text": "The Romans didn't number the days of the month sequentially: dates were counted backward from three fixed points — the Kalends (the 1st), the Nones (the 5th or 7th), and the Ides (the 13th or 15th)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Idibus Martiis",
                "в Іди березня (15 березня — день убивства Цезаря)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Roman Calendar (Kalendae, Nonae, Idus) — B1"
      },
      {
        "id": "months",
        "title": "Місяці — A1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасні назви місяців у більшості європейських мов — це прямі латинські запозичення.",
            "en": {
              "text": "Modern month names in most European languages are direct Latin borrowings."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Ianuarius",
                "січень"
              ],
              [
                "Maius",
                "травень"
              ],
              [
                "December",
                "грудень"
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
        "id": "family-terms",
        "title": "Родинні терміни — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Багато європейських мов успадкували родинну лексику безпосередньо з латини.",
            "en": {
              "text": "Many European languages inherited kinship vocabulary directly from Latin."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "mater",
                "мати"
              ],
              [
                "pater",
                "батько"
              ],
              [
                "frater",
                "брат"
              ],
              [
                "soror",
                "сестра"
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
            "text": "\"Salve\" (до однієї особи) і \"salvete\" (до кількох) — стандартне привітання, буквально \"будь(те) здоровий/здорові\".",
            "en": {
              "text": "\"Salve\" (to one person) and \"salvete\" (to several) are the standard greeting, literally \"be well\"."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Salve!",
                "Привіт!"
              ],
              [
                "Vale!",
                "Прощавай!"
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
        "id": "lingua-franca-legacy",
        "title": "Мова вченості й церкви понад 1500 років — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча розмовна латина зникла, вона залишалася мовою науки, права, дипломатії й католицької церкви в Європі аж до XVIII-XIX ст. — рідкісний приклад \"мертвої\" мови, що функціонувала як жива лінгва франка століттями після свого зникнення.",
            "en": {
              "text": "Although spoken Latin died out, it remained the language of scholarship, law, diplomacy, and the Catholic Church in Europe until the 18th-19th centuries — a rare example of a \"dead\" language functioning as a living lingua franca for centuries after its disappearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ньютон писав \"Principia\" латиною 1687 року.",
                "наукові праці писали латиною ще в XVII-XVIII ст."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Language of Scholarship and Church for 1500+ Years — B2"
      },
      {
        "id": "romance-scientific-legacy",
        "title": "Спадщина в романських мовах і науковій лексиці — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Усі романські мови (французька, іспанська, італійська, румунська й інші) походять безпосередньо з народної латини, а наукова й медична термінологія в більшості мов світу досі утворюється з латинських коренів.",
            "en": {
              "text": "All Romance languages (French, Spanish, Italian, Romanian, and others) descend directly from Vulgar Latin, and scientific and medical terminology in most world languages is still coined from Latin roots."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Homo sapiens, Tyrannosaurus rex — біологічна номенклатура досі латинська.",
                "латина лишається активною мовою наукової класифікації"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Legacy in Romance Languages and Scientific Vocabulary — B1"
      },
      {
        "id": "pronunciation-traditions",
        "title": "Класична vs церковна вимова — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Існують дві основні традиції вимови: реконструйована класична (як вимовляли в Давньому Римі) й церковна (італізована, вживана в католицькому богослужінні) — вони по-різному вимовляють, зокрема, літеру \"c\" перед \"e/i\".",
            "en": {
              "text": "There are two main pronunciation traditions: reconstructed classical (as spoken in Ancient Rome) and ecclesiastical (Italianized, used in Catholic liturgy) — they differ notably in how they pronounce the letter \"c\" before \"e/i\"."
            }
          },
          {
            "type": "table",
            "title": "Classical vs ecclesiastical",
            "rows": [
              [
                "Caesar (класична: [kaisar])",
                "Caesar (церковна: [chezar])"
              ]
            ],
            "en": {
              "title": "Classical vs Ecclesiastical"
            }
          }
        ],
        "titleEn": "Classical vs Ecclesiastical Pronunciation — B1"
      },
      {
        "id": "famous-phrases-mottos",
        "title": "Відомі фрази й гасла — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Численні латинські фрази й гасла досі вживаються без перекладу в багатьох мовах світу, часто на гербах, девізах і в науковій мові.",
            "en": {
              "text": "Numerous Latin phrases and mottos are still used untranslated in many world languages, often on coats of arms, mottos, and in scholarly language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cogito, ergo sum.",
                "Мислю, отже існую."
              ],
              [
                "Carpe diem.",
                "Лови момент."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Famous Phrases and Mottos — B1"
      },
      {
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від деяких мов, класична латина не розрізняла граматично ввічливого \"ви\" на противагу \"ти\" — ця відмінність з'явилася лише в пізнішій народній латині.",
            "en": {
              "text": "Unlike some languages, Classical Latin had no grammatical distinction between polite \"you\" and informal \"you\" — that distinction emerged only in later Vulgar Latin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Quid agis?",
                "Як справи? (до будь-кого, однина)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Forms — A2"
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
                "Eheu!",
                "Ой леле!"
              ],
              [
                "Gratias!",
                "Дякую!"
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
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Aliquis\" (хтось) і \"aliquid\" (щось) — базові неозначені займенники, відмінювані за відмінками.",
            "en": {
              "text": "\"Aliquis\" (someone) and \"aliquid\" (something) are the basic indefinite pronouns, declined by case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aliquis vocavit.",
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
            "text": "\"Nemo\" (ніхто) і \"nihil\" (нічого) — самостійні заперечні займенники, що не вимагають додаткового \"non\".",
            "en": {
              "text": "\"Nemo\" (no one) and \"nihil\" (nothing) are standalone negative pronouns that don't require an additional \"non\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nemo venit.",
                "Ніхто не прийшов."
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
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-17 утворюються поєднанням десяти з одиницею; 18 і 19 — відніманням від 20.",
            "en": {
              "text": "Numbers 11-17 are formed by combining ten with the unit; 18 and 19 are formed by subtraction from 20."
            }
          },
          {
            "type": "table",
            "title": "undecim, duodeviginti",
            "rows": [
              [
                "undecim (11)",
                "одинадцять"
              ],
              [
                "duodeviginti (18)",
                "вісімнадцять (буквально \"два від двадцяти\")"
              ]
            ],
            "en": {
              "title": "undecim, duodeviginti"
            }
          }
        ],
        "titleEn": "Numbers from 11 On — A1"
      },
      {
        "id": "roman-numerals",
        "title": "Римські цифри — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Римська система запису чисел літерами (I, V, X, L, C, D, M) досі широко вживається для нумерації розділів, століть і на годинниках.",
            "en": {
              "text": "The Roman letter-based number system (I, V, X, L, C, D, M) is still widely used for numbering chapters, centuries, and on clock faces."
            }
          },
          {
            "type": "table",
            "title": "Римські цифри",
            "rows": [
              [
                "IV",
                "4"
              ],
              [
                "IX",
                "9"
              ],
              [
                "XL",
                "40"
              ]
            ],
            "en": {
              "title": "Roman Numerals"
            }
          }
        ],
        "titleEn": "Roman Numerals — A1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують префікс-прийменник з дієслівним коренем, утворюючи нове значення.",
            "en": {
              "text": "Compound words often join a prepositional prefix with a verb root, forming a new meaning."
            }
          },
          {
            "type": "table",
            "title": "trans + ducere",
            "rows": [
              [
                "trans (через) + ducere (вести) = traducere",
                "переводити"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
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
            "text": "Кілька частовживаних дієслів (sum-бути, possum-могти, fero-нести, volo/nolo/malo-хотіти/не хотіти/більше хотіти, eo-йти) не підкоряються жодній з чотирьох дієвідмін і мають власні унікальні парадигми.",
            "en": {
              "text": "A few common verbs (sum-to be, possum-to be able, fero-to carry, volo/nolo/malo-to want/not want/prefer, eo-to go) don't follow any of the four conjugations and have their own unique paradigms."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "fero (нести) → tuli → latum",
                "три основні форми не за жодним стандартним правилом"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "irregular-third-declension",
        "title": "Неправильні іменники третьої відміни — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені іменники третьої відміни мають основу родового відмінка, яку неможливо передбачити з форми називного, і слід запам'ятовувати окремо.",
            "en": {
              "text": "Some common third-declension nouns have a genitive stem that can't be predicted from the nominative form and must be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "iter (подорож) → itineris",
                "основа родового геть відмінна від називного"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Third-Declension Nouns — B2"
      },
      {
        "id": "fixed-legal-idiomatic-expressions",
        "title": "Застиглі юридичні й ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні юридичні терміни (habeas corpus, de facto, pro bono) і застиглі вирази досі вживаються без перекладу в сучасних мовах, зберігаючи класичну граматичну форму без змін.",
            "en": {
              "text": "Numerous legal terms (habeas corpus, de facto, pro bono) and fixed phrases are still used untranslated in modern languages, preserving their classical grammatical form unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Habeas corpus.",
                "Маєш мати тіло (юридичний термін про право на особисту свободу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Legal and Idiomatic Expressions — B2"
      }
    ]
  }
];
