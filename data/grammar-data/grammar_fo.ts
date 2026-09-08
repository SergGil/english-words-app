// Vymova — data/grammar-data/grammar_fo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persónlig Fornøvn — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Фарерська близько споріднена з ісландською — обидві мови походять від давньоскандинавської й досі мають подібну граматику.",
            "en": {
              "text": "Faroese is closely related to Icelandic — both descend from Old Norse and still share similar grammar."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "eg"
              ],
              [
                "ти",
                "tú"
              ],
              [
                "він / вона / воно",
                "hann / hon / tað"
              ],
              [
                "ми",
                "vit"
              ],
              [
                "ви",
                "tit"
              ],
              [
                "вони (ч./ж./с.р.)",
                "teir / tær / tey"
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
        "id": "verb-vera",
        "title": "Vera — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Vera\" (бути) — найважливіше й неправильне дієслово фарерської, як і в інших скандинавських мовах.",
            "en": {
              "text": "\"Vera\" (to be) is the most important and irregular verb in Faroese, as in the other Scandinavian languages."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час vera",
            "rows": [
              [
                "eg eri",
                "я є"
              ],
              [
                "tú ert",
                "ти є"
              ],
              [
                "hann/hon er",
                "він/вона є"
              ],
              [
                "vit eru",
                "ми є"
              ],
              [
                "tit eru",
                "ви є"
              ],
              [
                "teir eru",
                "вони є"
              ]
            ],
            "en": {
              "title": "Present Tense of vera"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg eri lærari.",
                "Я вчитель."
              ],
              [
                "Hann er úr Føroyum.",
                "Він з Фарерських островів."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vera — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ikki — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"ikki\" (не), яке зазвичай стоїть одразу після дієслова.",
            "en": {
              "text": "Negation is formed with the word \"ikki\" (not), which usually stands right after the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Eg eri her.",
                "Eg eri ikki her.",
                "Я тут → я не тут"
              ],
              [
                "Hann veit tað.",
                "Hann veit tað ikki.",
                "Він знає це → він не знає цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg eri ikki tirdur.",
                "Я не втомлений."
              ],
              [
                "Hon talar ikki týskt.",
                "Вона не розмовляє німецькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ikki — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання утворюють інверсією дієслова й підмета; спеціальні — питальними словами на початку речення.",
            "en": {
              "text": "Yes/no questions are formed by inverting the verb and subject; wh-questions use question words at the start of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "hvør",
                "хто"
              ],
              [
                "hvat",
                "що"
              ],
              [
                "hvar",
                "де"
              ],
              [
                "nær",
                "коли"
              ],
              [
                "hví",
                "чому"
              ],
              [
                "hvussu",
                "як"
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
                "Ert tú føroyingur?",
                "Ти фаререць?"
              ],
              [
                "Hvar býrt tú?",
                "Де ти живеш?"
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
        "id": "enclitic-article",
        "title": "Приєднаний означений артикль -in/-ið — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в інших скандинавських мовах, означений артикль у фарерській — не окреме слово, а суфікс, приєднаний до кінця іменника, і відмінюється за родом і числом.",
            "en": {
              "text": "As in the other Scandinavian languages, the definite article in Faroese is not a separate word but a suffix attached to the end of the noun, inflecting for gender and number."
            }
          },
          {
            "type": "table",
            "title": "hundur → hundurin",
            "rows": [
              [
                "hundur (собака) → hundurin",
                "той собака (ч.р.)"
              ],
              [
                "gøta (вулиця) → gøtan",
                "та вулиця (ж.р.)"
              ],
              [
                "hús (дім) → húsið",
                "той дім (с.р.)"
              ]
            ],
            "en": {
              "title": "hundur → hundurin"
            }
          }
        ],
        "titleEn": "The Enclitic Definite Article -in/-ið — A2"
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
        "id": "present-weak-verbs",
        "title": "Теперішній час слабких дієслів — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Слабкі дієслова відмінюються регулярно за особовими закінченнями, доданими до основи.",
            "en": {
              "text": "Weak verbs conjugate regularly with personal endings added to the stem."
            }
          },
          {
            "type": "table",
            "title": "kalla (кликати) — теперішній час",
            "rows": [
              [
                "eg kalli",
                "я кличу"
              ],
              [
                "tú kallar",
                "ти кличеш"
              ],
              [
                "hann kallar",
                "він кличе"
              ],
              [
                "vit kalla",
                "ми кличемо"
              ]
            ],
            "en": {
              "title": "kalla (to call) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Weak Verbs — A1"
      },
      {
        "id": "present-strong-verbs",
        "title": "Теперішній час сильних дієслів — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова змінюють кореневий голосний (аблаут) між формами; теперішній час близький до основи інфінітива.",
            "en": {
              "text": "Strong verbs change their root vowel (ablaut) between forms; the present tense is close to the infinitive stem."
            }
          },
          {
            "type": "table",
            "title": "bíta (кусати) — теперішній час",
            "rows": [
              [
                "eg bíti",
                "я кусаю"
              ],
              [
                "tú bitur",
                "ти кусаєш"
              ],
              [
                "hann bitur",
                "він кусає"
              ]
            ],
            "en": {
              "title": "bíta (to bite) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Strong Verbs — A2"
      },
      {
        "id": "past-weak-verbs",
        "title": "Минулий час слабких дієслів — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час слабких дієслів утворюється закінченням -aði/-di/-ti залежно від класу дієслова.",
            "en": {
              "text": "The past tense of weak verbs is formed with -aði/-di/-ti depending on the verb class."
            }
          },
          {
            "type": "table",
            "title": "kalla → kallaði",
            "rows": [
              [
                "eg kallaði",
                "я кликав(ла)"
              ],
              [
                "tú kallaði",
                "ти кликав(ла)"
              ]
            ],
            "en": {
              "title": "kalla → kallaði"
            }
          }
        ],
        "titleEn": "Past Tense of Weak Verbs — A2"
      },
      {
        "id": "past-strong-verbs",
        "title": "Минулий час сильних дієслів (аблаут) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова змінюють кореневий голосний у минулому часі замість додавання закінчення — так само, як в ісландській чи німецькій.",
            "en": {
              "text": "Strong verbs change their root vowel in the past tense instead of adding an ending — just as in Icelandic or German."
            }
          },
          {
            "type": "table",
            "title": "bíta → beit",
            "rows": [
              [
                "bíta (кусати) → eg beit",
                "я кусав(ла)"
              ],
              [
                "skriva (писати, слабке) → eg skrivaði",
                "я писав(ла), для контрасту"
              ]
            ],
            "en": {
              "title": "bíta → beit"
            }
          }
        ],
        "titleEn": "Past Tense of Strong Verbs (Ablaut) — B1"
      },
      {
        "id": "perfect-hava",
        "title": "Перфект з hava — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект більшості дієслів = hava в теперішньому часі + дієприкметник минулого часу.",
            "en": {
              "text": "The perfect of most verbs = hava in the present tense + the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg havi lisið bókina.",
                "Я прочитав книгу."
              ],
              [
                "Hann hevur ikki etið.",
                "Він не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense with hava — A2"
      },
      {
        "id": "perfect-vera",
        "title": "Перфект з vera (дієслова руху) — B1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості германських мов, деякі дієслова руху й зміни стану утворюють перфект з допоміжним \"vera\" замість \"hava\" — риса, успадкована від давньоскандинавської.",
            "en": {
              "text": "Unlike most Germanic languages, some verbs of motion and change of state form the perfect with the auxiliary \"vera\" instead of \"hava\" — a trait inherited from Old Norse."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg eri komin heim.",
                "Я прийшов додому."
              ],
              [
                "Hann er farin.",
                "Він пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect with vera (Motion Verbs) — B1"
      },
      {
        "id": "future-fara-at",
        "title": "Майбутній час (fara at) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "У фарерській немає синтетичного майбутнього часу: майбутнє виражають теперішнім часом з часовим маркером або конструкцією \"fara at\" + інфінітив.",
            "en": {
              "text": "Faroese has no synthetic future tense: the future is expressed with the present tense plus a time marker, or the construction \"fara at\" + infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg fari at kalla teg.",
                "Я тобі подзвоню."
              ],
              [
                "Vit koma í morgin.",
                "Ми прийдемо завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense (fara at) — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова без закінчення; для множини додається -ið.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem with no ending; the plural adds -ið."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Kalla!",
                "Клич!"
              ],
              [
                "Kallið!",
                "Кличте! (мн.)"
              ]
            ],
            "en": {
              "title": "Imperative"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "subjunctive-fixed",
        "title": "Умовний спосіб у застиглих виразах — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Синтетичний умовний спосіб майже зник із живої мови, але зберігся в застиглих формулах ввічливості й побажаннях.",
            "en": {
              "text": "The synthetic subjunctive has nearly vanished from living speech, but survives in fixed polite formulas and wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ver so væl!",
                "Прошу!/Будь ласка! (буквально \"будь так добрий\")"
              ],
              [
                "Livi drotningin!",
                "Хай живе королева!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subjunctive in Fixed Expressions — B2"
      },
      {
        "id": "passive-verda",
        "title": "Пасивний стан з verða — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним дієсловом \"verða\" (ставати) + дієприкметник минулого часу.",
            "en": {
              "text": "The passive voice is formed with the auxiliary \"verða\" (to become) + the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Húsið varð bygt í 1990.",
                "Дім був побудований у 1990."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice with verða — B1"
      },
      {
        "id": "mediopassive-st",
        "title": "Медіопасив на -st — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -st, доданий до дієслова, утворює медіопасив зі значенням взаємної, зворотної або пасивної дії — успадковано з давньоскандинавської зворотної форми.",
            "en": {
              "text": "The suffix -st, added to the verb, forms the mediopassive with reciprocal, reflexive, or passive meaning — inherited from the Old Norse reflexive form."
            }
          },
          {
            "type": "table",
            "title": "hittast — зустрічатися",
            "rows": [
              [
                "hitta (зустріти) → hittast",
                "зустрічатися (одне з одним)"
              ],
              [
                "síggja (бачити) → síggjast",
                "бути видимим"
              ]
            ],
            "en": {
              "title": "hittast — to meet each other"
            }
          }
        ],
        "titleEn": "The Mediopassive Suffix -st — B1"
      },
      {
        "id": "reflexive-verbs-sin",
        "title": "Зворотні дієслова із sín — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"sín/sítt/sína\" узгоджується з об'єктом, а не з підметом, і вживається лише коли об'єкт належить підмету 3-ї особи.",
            "en": {
              "text": "The reflexive pronoun \"sín/sítt/sína\" agrees with the object, not the subject, and is used only when the object belongs to a 3rd-person subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hann tekur bókina sína.",
                "Він бере свою книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs with sín — B1"
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова — A2",
        "emoji": "🎛️",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kunna-могти, mega-мати дозвіл, skula-мусити, vilja-хотіти) поєднуються з голим інфінітивом без частки \"at\".",
            "en": {
              "text": "Modal verbs (kunna-can, mega-may, skula-must, vilja-want) combine with the bare infinitive, without the particle \"at\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg kann tala føroyskt.",
                "Я вмію говорити фарерською."
              ],
              [
                "Tú skalt fara.",
                "Ти мусиш йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verbs — A2"
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
        "id": "case-accusative",
        "title": "Знахідний відмінок — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок позначає прямий додаток; у чоловічому роді часто відрізняється від називного, у жіночому й середньому — часто збігається.",
            "en": {
              "text": "The accusative marks the direct object; in the masculine it often differs from the nominative, while in the feminine and neuter it often coincides."
            }
          },
          {
            "type": "table",
            "title": "hundur → hund",
            "rows": [
              [
                "Eg síggi hund.",
                "Я бачу собаку. (знах. hund, наз. hundur)"
              ]
            ],
            "en": {
              "title": "hundur → hund"
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
            "text": "Давальний відмінок позначає непрямий додаток і керується багатьма прийменниками.",
            "en": {
              "text": "The dative marks the indirect object and is governed by many prepositions."
            }
          },
          {
            "type": "table",
            "title": "hundi",
            "rows": [
              [
                "Eg gevi hundinum mat.",
                "Я даю собаці їжу. (давн. hundinum)"
              ]
            ],
            "en": {
              "title": "hundi"
            }
          }
        ],
        "titleEn": "The Dative Case — A2"
      },
      {
        "id": "case-genitive-decline",
        "title": "Родовий відмінок у відмінюванні — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-s у чоловічому й середньому роді) ще зустрічається в письмовій мові й застиглих виразах, хоча в розмовній майже вийшов з ужитку.",
            "en": {
              "text": "The genitive case (-s in the masculine and neuter) still occurs in written language and fixed expressions, though it has nearly disappeared from speech."
            }
          },
          {
            "type": "table",
            "title": "hundur → hunds",
            "rows": [
              [
                "hundur → hunds",
                "собаки (письмово)"
              ],
              [
                "Føroyar → Føroya",
                "Фарерських островів (у топонімах)"
              ]
            ],
            "en": {
              "title": "hundur → hunds"
            }
          }
        ],
        "titleEn": "The Genitive Case in Writing — B1"
      },
      {
        "id": "genitive-replaced-hja",
        "title": "Родовий замінюється на hjá + давальний — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Найвиразніша риса розмовної фарерської: живий родовий відмінок майже зник, і присвійність натомість виражається прийменником \"hjá\" + давальний відмінок — унікально серед скандинавських мов.",
            "en": {
              "text": "The most distinctive trait of spoken Faroese: the living genitive has nearly vanished, and possession is instead expressed with the preposition \"hjá\" + the dative — unique among Scandinavian languages."
            }
          },
          {
            "type": "formula",
            "title": "Письмовий родовий → розмовний hjá",
            "rows": [
              [
                "bilur mansins",
                "bilurin hjá manninum",
                "машина чоловіка (письм.) → машина в чоловіка (розм.)"
              ]
            ]
          }
        ],
        "titleEn": "The Genitive Replaced by hjá + Dative — B1"
      },
      {
        "id": "three-genders",
        "title": "Три граматичні роди — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий, жіночий і середній рід, який визначає закінчення артикля, прикметника й займенника.",
            "en": {
              "text": "Nouns have masculine, feminine, and neuter gender, which determines the endings of the article, adjective, and pronoun."
            }
          },
          {
            "type": "table",
            "title": "Три роди",
            "rows": [
              [
                "hundur (ч.р.)",
                "собака"
              ],
              [
                "bók (ж.р.)",
                "книга"
              ],
              [
                "hús (с.р.)",
                "дім"
              ]
            ],
            "en": {
              "title": "Three Genders"
            }
          }
        ],
        "titleEn": "Three Grammatical Genders — A1"
      },
      {
        "id": "double-definiteness",
        "title": "Подвійна означеність — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перед іменником стоїть прикметник, означеність виражається одразу двічі: вказівним словом \"tann\" перед прикметником і суфіксом на іменнику.",
            "en": {
              "text": "When an adjective precedes the noun, definiteness is marked twice at once: with the demonstrative-like word \"tann\" before the adjective and the suffix on the noun."
            }
          },
          {
            "type": "table",
            "title": "tann + прикм. + іменник-суфікс",
            "rows": [
              [
                "tann stóri hundurin",
                "той великий собака (подвійно означено)"
              ]
            ],
            "en": {
              "title": "tann + adjective + noun-suffix"
            }
          }
        ],
        "titleEn": "Double Definiteness — B1"
      },
      {
        "id": "adjective-strong-weak",
        "title": "Сильна й слабка відміна прикметника — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в німецькій, прикметник має дві відміни: сильну (з неозначеним іменником) і слабку (з означеним) — закінчення різняться.",
            "en": {
              "text": "As in German, the adjective has two declensions: strong (with an indefinite noun) and weak (with a definite noun) — the endings differ."
            }
          },
          {
            "type": "formula",
            "title": "Сильна → слабка",
            "rows": [
              [
                "stórur hundur",
                "stóri hundurin",
                "великий собака (сильна) → той великий собака (слабка)"
              ]
            ]
          }
        ],
        "titleEn": "Strong and Weak Adjective Declension — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодження прикметника — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді, числі й відмінку.",
            "en": {
              "text": "The adjective agrees with the noun in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "stórur, stór, stórt",
            "rows": [
              [
                "stórur hundur (ч.р.)",
                "великий собака"
              ],
              [
                "stór bók (ж.р.)",
                "велика книга"
              ],
              [
                "stórt hús (с.р.)",
                "великий дім"
              ]
            ],
            "en": {
              "title": "stórur, stór, stórt"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється закінченням -ari, найвищий — -astur.",
            "en": {
              "text": "The comparative is formed with -ari, the superlative with -astur."
            }
          },
          {
            "type": "table",
            "title": "stórur → størri → størstur",
            "rows": [
              [
                "stórur (великий)",
                "størri (більший)",
                "størstur (найбільший)"
              ]
            ]
          }
        ],
        "titleEn": "Comparative and Superlative — A2"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома закінченнями залежно від роду й типу основи іменника (-ar, -ir, -Ø).",
            "en": {
              "text": "The plural is formed with several endings depending on the noun's gender and stem type (-ar, -ir, -Ø)."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "hundur → hundar",
                "собаки"
              ],
              [
                "bók → bøkur",
                "книги"
              ],
              [
                "hús → hús",
                "доми (незмінне)"
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
        "id": "numbers-gender-agreement",
        "title": "Числівники 1-4 з узгодженням роду — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості германських мов, числівники 1-4 змінюються за родом іменника, який вони супроводжують.",
            "en": {
              "text": "Unlike most Germanic languages, the numbers 1-4 change form to agree with the gender of the noun they accompany."
            }
          },
          {
            "type": "table",
            "title": "ein, ein, eitt",
            "rows": [
              [
                "ein hundur (ч.р.)",
                "один собака"
              ],
              [
                "ein bók (ж.р.)",
                "одна книга"
              ],
              [
                "eitt hús (с.р.)",
                "один дім"
              ]
            ],
            "en": {
              "title": "ein, ein, eitt"
            }
          }
        ],
        "titleEn": "Numbers 1-4 with Gender Agreement — A2"
      },
      {
        "id": "prepositions-accusative",
        "title": "Прийменники зі знахідним — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі прийменники завжди керують знахідним відмінком незалежно від значення руху чи стану.",
            "en": {
              "text": "Some prepositions always govern the accusative case regardless of motion or state meaning."
            }
          },
          {
            "type": "table",
            "title": "um, uttan",
            "rows": [
              [
                "um hús",
                "навколо дому"
              ],
              [
                "uttan mat",
                "без їжі"
              ]
            ],
            "en": {
              "title": "um, uttan"
            }
          }
        ],
        "titleEn": "Prepositions Governing the Accusative — B1"
      },
      {
        "id": "prepositions-dative",
        "title": "Прийменники з давальним — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Інші прийменники завжди керують давальним відмінком.",
            "en": {
              "text": "Other prepositions always govern the dative case."
            }
          },
          {
            "type": "table",
            "title": "hjá, frá",
            "rows": [
              [
                "hjá mær",
                "у мене/біля мене"
              ],
              [
                "frá Havn",
                "з Торсгавна"
              ]
            ],
            "en": {
              "title": "hjá, frá"
            }
          }
        ],
        "titleEn": "Prepositions Governing the Dative — B1"
      },
      {
        "id": "prepositions-dual-case",
        "title": "Двовідмінкові прийменники (рух vs стан) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Як у німецькій, деякі прийменники керують знахідним при русі й давальним при перебуванні на місці.",
            "en": {
              "text": "As in German, some prepositions govern the accusative for motion and the dative for a static location."
            }
          },
          {
            "type": "formula",
            "title": "í + знах. (рух) / í + давн. (стан)",
            "rows": [
              [
                "Eg fari í húsið.",
                "Eg eri í húsinum.",
                "Я йду в дім (знах.) / Я в домі (давн.)"
              ]
            ]
          }
        ],
        "titleEn": "Dual-Case Prepositions (Motion vs State) — B1"
      },
      {
        "id": "word-order-v2",
        "title": "Порядок слів V2 — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в інших германських мовах, відмінюване дієслово завжди стоїть на другій позиції головного речення, навіть якщо перше місце займає не підмет.",
            "en": {
              "text": "As in the other Germanic languages, the finite verb always stands in second position in the main clause, even when something other than the subject occupies first place."
            }
          },
          {
            "type": "formula",
            "title": "Нейтральний → з обставиною на першому місці",
            "rows": [
              [
                "Eg eti hvørn dag.",
                "Hvønn dag eti eg.",
                "Я їм щодня → щодня я їм (дієслово завжди друге)"
              ]
            ]
          }
        ],
        "titleEn": "V2 Word Order — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники узгоджуються з роду іменника, який вони визначають, а не з особою власника.",
            "en": {
              "text": "Possessive pronouns agree with the gender of the noun they modify, not the person of the owner."
            }
          },
          {
            "type": "table",
            "title": "mín, mítt, míni",
            "rows": [
              [
                "mín hundur (ч.р.)",
                "мій собака"
              ],
              [
                "mítt hús (с.р.)",
                "мій дім"
              ]
            ],
            "en": {
              "title": "mín, mítt, míni"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "reflexive-possessive-sin",
        "title": "Sín vs hansara — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sín\" вживають, коли власник — підмет речення; \"hansara/hennara\" — коли власник інша особа, ніж підмет. Це розрізнення уникає двозначності, якої немає в українській \"свій\".",
            "en": {
              "text": "\"Sín\" is used when the owner is the sentence's subject; \"hansara/hennara\" when the owner is someone other than the subject. This distinction avoids an ambiguity that doesn't exist in Ukrainian \"свій\"."
            }
          },
          {
            "type": "formula",
            "title": "sín vs hansara",
            "rows": [
              [
                "Hann tekur bókina sína.",
                "Hann tekur bókina hansara.",
                "Він бере свою (власну) книгу → Він бере його (чужу) книгу"
              ]
            ]
          }
        ],
        "titleEn": "sín vs hansara — B1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Hesin\" (цей) вказує на близьке, \"tann\" (той) — на віддалене або вже згадане.",
            "en": {
              "text": "\"Hesin\" (this) points to something near, \"tann\" (that) to something distant or already mentioned."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hesin hundurin er mín.",
                "Цей собака мій."
              ],
              [
                "Tann bókin er góð.",
                "Та книга гарна."
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
        "id": "relative-pronoun-sum",
        "title": "Відносний займенник sum — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sum\" — універсальний, незмінюваний відносний займенник \"який/що\", однаковий для всіх родів, чисел і відмінків.",
            "en": {
              "text": "\"Sum\" is the universal, invariable relative pronoun \"who/which/that\", the same for every gender, number, and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maðurin, sum kom, er lærari.",
                "Чоловік, що прийшов, — вчитель."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Pronoun sum — A2"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання hvør — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Питальний займенник \"hvør\" (хто/який) відмінюється за родом, числом і відмінком, як прикметник.",
            "en": {
              "text": "The interrogative pronoun \"hvør\" (who/which) declines for gender, number, and case, like an adjective."
            }
          },
          {
            "type": "table",
            "title": "hvør, hvat, hvørt",
            "rows": [
              [
                "Hvør kom?",
                "Хто прийшов? (ч./ж.р.)"
              ],
              [
                "Hvat hendi?",
                "Що сталося? (питальне \"що\")"
              ]
            ],
            "en": {
              "title": "hvør, hvat, hvørt"
            }
          }
        ],
        "titleEn": "Declension of hvør — B1"
      },
      {
        "id": "skerping-spelling",
        "title": "Скеркінг: розбіжність вимови й правопису — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Фарерський правопис зберігає давньоскандинавську форму слів, тоді як вимова радикально змінилася через історичне явище \"skerping\" (\"загострення\") — подібно до того, як англійська пише \"knight\", а вимовляє /naɪt/.",
            "en": {
              "text": "Faroese spelling preserves the Old Norse form of words while pronunciation has changed radically through the historical process of \"skerping\" (\"sharpening\") — similar to how English writes \"knight\" but says /naɪt/."
            }
          },
          {
            "type": "table",
            "title": "Написання vs вимова",
            "rows": [
              [
                "oyggj (пишеться \"g+g+j\")",
                "вимовляється приблизно [ɔdʒː] — зовсім інакше"
              ]
            ],
            "en": {
              "title": "Spelling vs Pronunciation"
            }
          }
        ],
        "titleEn": "Skerping: Spelling vs Pronunciation — B2"
      },
      {
        "id": "adverbs-formation",
        "title": "Утворення прислівників — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу часто утворюються з форми середнього роду прикметника.",
            "en": {
              "text": "Manner adverbs are often formed from the neuter form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "gott → gott (прислівник)",
            "rows": [
              [
                "gott (добрий, с.р.) → gott",
                "добре"
              ],
              [
                "skjótur → skjótt",
                "швидко"
              ]
            ],
            "en": {
              "title": "gott → gott (adverb)"
            }
          }
        ],
        "titleEn": "Forming Adverbs — A2"
      },
      {
        "id": "directional-adverbs",
        "title": "Напрямкові прислівники (рух vs стан) — B1",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "Як у німецькій, прислівники місця мають окремі форми для руху (\"куди\") і перебування (\"де\") — hagar vs har.",
            "en": {
              "text": "As in German, place adverbs have separate forms for motion (\"to where\") and location (\"where\") — hagar vs har."
            }
          },
          {
            "type": "table",
            "title": "hagar / har",
            "rows": [
              [
                "Eg fari hagar.",
                "Я йду туди. (рух)"
              ],
              [
                "Eg eri har.",
                "Я там. (перебування)"
              ]
            ],
            "en": {
              "title": "hagar / har"
            }
          }
        ],
        "titleEn": "Directional Adverbs (Motion vs Location) — B1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівноправні частини; підрядні сполучники впливають на порядок слів у підрядному реченні.",
            "en": {
              "text": "Coordinating conjunctions join equal parts; subordinating conjunctions affect word order in the subordinate clause."
            }
          },
          {
            "type": "table",
            "title": "og / men / tí at",
            "rows": [
              [
                "og",
                "і"
              ],
              [
                "men",
                "але"
              ],
              [
                "tí at",
                "тому що"
              ]
            ],
            "en": {
              "title": "og / men / tí at"
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
            "text": "Складні слова поєднують два чи більше корені без сполучного голосного; рід і відмінок визначає останній елемент.",
            "en": {
              "text": "Compound words join two or more roots with no linking vowel; the gender and declension are determined by the last element."
            }
          },
          {
            "type": "table",
            "title": "sól + skin",
            "rows": [
              [
                "sól (сонце) + skin (сяйво) = sólskin",
                "сонячне світло"
              ]
            ],
            "en": {
              "title": "sól + skin"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня, як у скандинавських мовах, походять від давньоскандинавських богів і небесних тіл.",
            "en": {
              "text": "The days of the week, as in the Scandinavian languages, derive from Old Norse gods and celestial bodies."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "mánadagur",
                "понеділок"
              ],
              [
                "mikudagur",
                "середа"
              ],
              [
                "fríggjadagur",
                "п'ятниця"
              ],
              [
                "sunnudagur",
                "неділя"
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
            "text": "Назви місяців — переважно запозичення з латині через данську, як і в більшості європейських мов.",
            "en": {
              "text": "Month names are mostly borrowed from Latin via Danish, as in most European languages."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "januar",
                "січень"
              ],
              [
                "mai",
                "травень"
              ],
              [
                "august",
                "серпень"
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
            "text": "Час запитують \"Hvat er klokkan?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Hvat er klokkan?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Klokkan er tríggjar.",
                "Зараз третя година."
              ],
              [
                "Vit hittast klokkan fimm.",
                "Зустрінемось о п'ятій."
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
            "text": "Кольори — звичайні прикметники й узгоджуються з іменником у роді, як і всі інші.",
            "en": {
              "text": "Colors are ordinary adjectives and agree with the noun in gender, like any other."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "hvítur",
                "білий"
              ],
              [
                "svartur",
                "чорний"
              ],
              [
                "reyður",
                "червоний"
              ],
              [
                "blátur",
                "синій"
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
            "text": "Родинні терміни відмінюються за родом, як звичайні іменники, з властивим фарерським закінченнями.",
            "en": {
              "text": "Kinship terms decline by gender like ordinary nouns, with typical Faroese endings."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "mamma",
                "мама"
              ],
              [
                "pápi",
                "тато"
              ],
              [
                "systir",
                "сестра"
              ],
              [
                "bróðir",
                "брат"
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
            "text": "Привітання близькі до інших скандинавських мов, але з власною фарерською вимовою й іноді написанням.",
            "en": {
              "text": "Greetings resemble the other Scandinavian languages but with distinct Faroese pronunciation and sometimes spelling."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Hey!",
                "Привіт!"
              ],
              [
                "Góðan dag!",
                "Добрий день!"
              ],
              [
                "Farvæl!",
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
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду часто описують безособовим конструкціями з \"tað\" (воно), схожими на англійські.",
            "en": {
              "text": "Weather is often described with impersonal constructions using \"tað\" (it), similar to English."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tað regnar.",
                "Йде дощ."
              ],
              [
                "Tað er kalt úti.",
                "Надворі холодно."
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
            "text": "Частини тіла — звичайні іменники з властивим родом, часто відмінним від українських еквівалентів.",
            "en": {
              "text": "Body parts are ordinary nouns with inherent gender, often different from the Ukrainian equivalents."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "hondin (ж.р.)",
                "рука"
              ],
              [
                "høvdið (с.р.)",
                "голова"
              ],
              [
                "fóturin (ч.р.)",
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
            "text": "Вік виражають дієсловом \"vera\" + число + \"ára\" (років, родовий множини).",
            "en": {
              "text": "Age is expressed with the verb \"vera\" + number + \"ára\" (years, genitive plural)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eg eri tjúgu ára.",
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
        "id": "diminutives",
        "title": "Демінутиви — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -lingur/-ka, часто у звертанні до дітей чи тварин.",
            "en": {
              "text": "Diminutive forms are made with the suffixes -lingur/-ka, often used addressing children or animals."
            }
          },
          {
            "type": "table",
            "title": "hundur → hundlingur",
            "rows": [
              [
                "hundur (собака) → hundlingur",
                "песик"
              ]
            ],
            "en": {
              "title": "hundur → hundlingur"
            }
          }
        ],
        "titleEn": "Diminutives — B1"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Фарерська, як і сучасна данська, майже не має граматичної форми ввічливості \"ви\" — звертаються на \"tú\" навіть до незнайомих і старших.",
            "en": {
              "text": "Faroese, like modern Danish, has almost no grammatical polite \"you\" — even strangers and elders are addressed with \"tú\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hvussu hevur tú tað?",
                "Як справи? (до будь-кого)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness — A2"
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію незалежно від граматичної структури.",
            "en": {
              "text": "Interjections express emotional reactions independent of grammatical structure."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Ú!",
                "Ой!"
              ],
              [
                "Tak fyri!",
                "Дякую! (за щось)"
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
        "id": "danish-loanword-adaptation",
        "title": "Адаптація данських запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через тривале данське правління багато адміністративної й технічної лексики запозичена з данської, часто з фарерським правописом.",
            "en": {
              "text": "Due to long Danish rule, much administrative and technical vocabulary is borrowed from Danish, often with Faroese spelling."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "telefon",
                "телефон"
              ],
              [
                "biograf",
                "кінотеатр"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Adapting Danish Loanwords — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Фарерські ідіоми часто спираються на море, овець і рибальство — центральні елементи традиційного життя островів.",
            "en": {
              "text": "Faroese idioms often draw on the sea, sheep, and fishing — central elements of traditional island life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tað er ikki ein fiskur í sjónum.",
                "Не все так просто, як здається (букв. \"це не риба в морі\")."
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
        "id": "patronymic-naming",
        "title": "Патронімічна система імен — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в Ісландії, багато фарерців використовують патронім (ім'я батька + -son/-dóttir) замість або поряд із прізвищем.",
            "en": {
              "text": "As in Iceland, many Faroese use a patronymic (father's name + -son/-dóttir) instead of or alongside a surname."
            }
          },
          {
            "type": "table",
            "title": "-son / -dóttir",
            "rows": [
              [
                "Pætur Jógvansson",
                "Пейтур, син Йоґвана"
              ],
              [
                "Anna Jógvansdóttir",
                "Анна, дочка Йоґвана"
              ]
            ],
            "en": {
              "title": "-son / -dóttir"
            }
          }
        ],
        "titleEn": "The Patronymic Naming System — B1"
      },
      {
        "id": "island-geography-vocab",
        "title": "Острівна лексика — A2",
        "emoji": "🏝️",
        "sections": [
          {
            "type": "intro",
            "text": "Географічна лексика відображає острівне життя: слова для скелі, фіорду, вівці й птаха набагато точніші й численніші, ніж в українській.",
            "en": {
              "text": "Geographic vocabulary reflects island life: words for cliff, fjord, sheep, and bird are far more precise and numerous than in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Острівна лексика",
            "rows": [
              [
                "oyggj",
                "острів"
              ],
              [
                "fjørður",
                "фіорд"
              ],
              [
                "seyður",
                "вівця"
              ]
            ],
            "en": {
              "title": "Island Vocabulary"
            }
          }
        ],
        "titleEn": "Island Geography Vocabulary — A2"
      },
      {
        "id": "numbers-five-plus",
        "title": "Числівники від 5 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники від п'яти незмінні за родом, на відміну від 1-4.",
            "en": {
              "text": "Numbers from five on are invariable for gender, unlike 1-4."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "fimm",
                "п'ять"
              ],
              [
                "tíggju",
                "десять"
              ],
              [
                "tjúgu",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Numbers from Five On — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються переважно суфіксом -ndi/-di, з кількома неправильними формами на початку ряду.",
            "en": {
              "text": "Ordinal numbers are formed mostly with -ndi/-di, with a few irregular forms at the start of the sequence."
            }
          },
          {
            "type": "table",
            "title": "fyrsti, annar, triði",
            "rows": [
              [
                "fyrsti",
                "перший"
              ],
              [
                "annar",
                "другий"
              ],
              [
                "triði",
                "третій"
              ]
            ],
            "en": {
              "title": "fyrsti, annar, triði"
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
            "text": "\"Onkur\" (хтось/якийсь) і \"eitthvørt\" (щось) — базові неозначені займенники, що відмінюються за родом.",
            "en": {
              "text": "\"Onkur\" (someone/some) and \"eitthvørt\" (something) are the basic indefinite pronouns, declined by gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Onkur ringdi.",
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
        "title": "Заперечні займенники — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ongin\" (ніхто/жоден) — заперечний займенник, який замінює \"onkur\" у заперечному контексті й узгоджується за родом.",
            "en": {
              "text": "\"Ongin\" (no one/none) is a negative pronoun that replaces \"onkur\" in negative contexts and agrees by gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ongin kom.",
                "Ніхто не прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Pronouns — B1"
      },
      {
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"er tað ikki?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"er tað ikki?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vakurt í dag, er tað ikki?",
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
        "id": "subordinate-clause-order",
        "title": "Порядок слів у підрядному реченні — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні заперечення \"ikki\" зазвичай переміщується перед дієсловом, на відміну від головного речення, де воно стоїть після.",
            "en": {
              "text": "In a subordinate clause, the negation \"ikki\" usually moves in front of the verb, unlike in the main clause where it follows it."
            }
          },
          {
            "type": "formula",
            "title": "Головне → підрядне",
            "rows": [
              [
                "Hann kemur ikki.",
                "...at hann ikki kemur.",
                "Він не прийде → ...що він не прийде"
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Subordinate Clauses — B1"
      },
      {
        "id": "silent-consonants",
        "title": "Німі приголосні — B1",
        "emoji": "🔇",
        "sections": [
          {
            "type": "intro",
            "text": "Багато приголосних, що зберігаються на письмі з давньоскандинавської, не вимовляються взагалі в сучасній мові — ще один наслідок консервативного правопису.",
            "en": {
              "text": "Many consonants preserved in spelling from Old Norse are not pronounced at all in the modern language — another consequence of the conservative orthography."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tórshavn",
                "вимовляється без виразного \"r\" в кінці першого складу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Silent Consonants — B1"
      },
      {
        "id": "compound-adjectives",
        "title": "Складні прикметники — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні прикметники поєднують іменник-підсилювач з прикметником для вираження ступеня, схоже на англійське \"pitch-black\".",
            "en": {
              "text": "Compound adjectives join an intensifying noun with an adjective to express degree, similar to English \"pitch-black\"."
            }
          },
          {
            "type": "table",
            "title": "koldreygur",
            "rows": [
              [
                "kol (вугілля) + reyður (червоний) = kolreyður",
                "яскраво-червоний"
              ]
            ],
            "en": {
              "title": "koldreygur"
            }
          }
        ],
        "titleEn": "Compound Adjectives — B1"
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
        "id": "irregular-strong-verbs",
        "title": "Неправильні сильні дієслова — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (vera, fara, koma, siga) мають настільки нерегулярний аблаут або приголосні зміни, що їх варто вивчати окремо, а не за загальними класами.",
            "en": {
              "text": "A few common verbs (vera, fara, koma, siga) have ablaut or consonant changes so irregular that they must be learned individually rather than by the general classes."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "fara (їхати) → fór",
                "минулий час не за жодним стандартним аблаутним рядом"
              ],
              [
                "siga (казати) → segði",
                "приголосний змінюється нерегулярно"
              ]
            ],
            "en": {
              "title": "Irregular Forms"
            }
          }
        ],
        "titleEn": "Irregular Strong Verbs — B2"
      },
      {
        "id": "irregular-plural-nouns",
        "title": "Неправильна множина іменників — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі часто вживані іменники утворюють множину зі зміною кореневого голосного (умлаут) замість простого додавання закінчення.",
            "en": {
              "text": "Some common nouns form the plural with a root vowel change (umlaut) instead of simply adding an ending."
            }
          },
          {
            "type": "table",
            "title": "bók → bøkur",
            "rows": [
              [
                "bók (книга) → bøkur",
                "книги (умлаут ó→ø)"
              ],
              [
                "fótur (нога) → føtur",
                "ноги (умлаут ó→ø)"
              ]
            ],
            "en": {
              "title": "bók → bøkur"
            }
          }
        ],
        "titleEn": "Irregular Plural Nouns — B1"
      },
      {
        "id": "fixed-genitive-expressions",
        "title": "Застиглі родові вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Попри те, що живий родовий відмінок майже зник, він зберігається в топонімах, назвах свят і поетичних виразах, де заміна на \"hjá\" звучала б неприродно.",
            "en": {
              "text": "Although the living genitive has nearly vanished, it survives in place names, holiday names, and poetic expressions, where replacing it with \"hjá\" would sound unnatural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ólavsøka",
                "свято Улава (родовий -s у назві свята)"
              ],
              [
                "Norðoyar",
                "Північні острови (застигла форма в топонімі)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Genitive Expressions — B2"
      }
    ]
  }
];
