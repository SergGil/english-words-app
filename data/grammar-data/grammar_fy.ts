// Vymova — data/grammar-data/grammar_fy.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persoanlike Foarnamwurden — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Фризька вважається найближчою живою родичкою англійської мови серед континентальних мов.",
            "en": {
              "text": "Frisian is considered English's closest living relative among the continental languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ik"
              ],
              [
                "ти (зв. / ввічл.)",
                "do / jo"
              ],
              [
                "він / вона",
                "hy / sy"
              ],
              [
                "ми",
                "wy"
              ],
              [
                "ви",
                "jo"
              ],
              [
                "вони",
                "sy"
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
        "id": "verb-weze",
        "title": "Wêze — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Wêze\" (бути) — неправильне дієслово, як і в англійській та нідерландській, з якими фризька тісно споріднена.",
            "en": {
              "text": "\"Wêze\" (to be) is irregular, as in English and Dutch, to which Frisian is closely related."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час wêze",
            "rows": [
              [
                "ik bin",
                "я є"
              ],
              [
                "do bist",
                "ти є"
              ],
              [
                "hy/sy is",
                "він/вона є"
              ],
              [
                "wy binne",
                "ми є"
              ],
              [
                "jo binne",
                "ви є"
              ],
              [
                "sy binne",
                "вони є"
              ]
            ],
            "en": {
              "title": "Present Tense of wêze"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bin learaar.",
                "Я вчитель."
              ],
              [
                "Hy is út Fryslân.",
                "Він з Фризії."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Wêze — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з net — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"net\" (не), яке зазвичай стоїть після дієслова та прямого додатка.",
            "en": {
              "text": "Negation is formed with the word \"net\" (not), which usually stands after the verb and direct object."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ik bin thús.",
                "Ik bin net thús.",
                "Я вдома → я не вдома"
              ],
              [
                "Hy wit it.",
                "Hy wit it net.",
                "Він знає це → він не знає цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bin net wurch.",
                "Я не втомлений."
              ],
              [
                "Sy praat gjin Frysk.",
                "Вона не розмовляє фризькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with net — A1"
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
                "wa",
                "хто"
              ],
              [
                "wat",
                "що"
              ],
              [
                "wêr",
                "де"
              ],
              [
                "wannear",
                "коли"
              ],
              [
                "wêrom",
                "чому"
              ],
              [
                "hoe",
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
                "Bisto in Fries?",
                "Ти фриз?"
              ],
              [
                "Wêr wennest do?",
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
        "id": "definite-article",
        "title": "Означений артикль de/it — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Фризька, як і нідерландська, має два означені артиклі: \"de\" для спільного роду (колишні чоловічий і жіночий) і \"it\" для середнього роду.",
            "en": {
              "text": "Frisian, like Dutch, has two definite articles: \"de\" for the common gender (former masculine and feminine) and \"it\" for the neuter."
            }
          },
          {
            "type": "table",
            "title": "de vs it",
            "rows": [
              [
                "de man",
                "чоловік (спільний рід)"
              ],
              [
                "it hûs",
                "дім (середній рід)"
              ]
            ],
            "en": {
              "title": "de vs it"
            }
          }
        ],
        "titleEn": "The Definite Article de/it — A1"
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
        "id": "present-regular",
        "title": "Теперішній час правильних дієслів — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Правильні дієслова відмінюються за особовими закінченнями, доданими до основи інфінітива без -e/-je.",
            "en": {
              "text": "Regular verbs conjugate with personal endings added to the infinitive stem without -e/-je."
            }
          },
          {
            "type": "table",
            "title": "prate (говорити) — теперішній час",
            "rows": [
              [
                "ik praat",
                "я говорю"
              ],
              [
                "do praatst",
                "ти говориш"
              ],
              [
                "hy praat",
                "він говорить"
              ],
              [
                "wy prate",
                "ми говоримо"
              ]
            ],
            "en": {
              "title": "prate (to speak) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Regular Verbs — A1"
      },
      {
        "id": "present-strong",
        "title": "Теперішній час сильних дієслів — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова часто змінюють кореневий голосний у 2-3 особі однини теперішнього часу.",
            "en": {
              "text": "Strong verbs often change their root vowel in the 2nd/3rd person singular present tense."
            }
          },
          {
            "type": "table",
            "title": "sjen (бачити) — теперішній час",
            "rows": [
              [
                "ik sjoch",
                "я бачу"
              ],
              [
                "do sjochst",
                "ти бачиш"
              ],
              [
                "hy sjocht",
                "він бачить"
              ]
            ],
            "en": {
              "title": "sjen (to see) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Strong Verbs — A2"
      },
      {
        "id": "past-weak",
        "title": "Минулий час слабких дієслів — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Слабкі дієслова утворюють минулий час закінченням -de/-te залежно від останнього приголосного основи.",
            "en": {
              "text": "Weak verbs form the past tense with -de/-te depending on the stem's final consonant."
            }
          },
          {
            "type": "table",
            "title": "prate → praatte",
            "rows": [
              [
                "ik praatte",
                "я говорив(ла)"
              ],
              [
                "do praattest",
                "ти говорив(ла)"
              ]
            ],
            "en": {
              "title": "prate → praatte"
            }
          }
        ],
        "titleEn": "Past Tense of Weak Verbs — A2"
      },
      {
        "id": "past-strong",
        "title": "Минулий час сильних дієслів (аблаут) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова змінюють кореневий голосний у минулому часі, без закінчення — та сама модель, що й в англійській (sing-sang) чи німецькій.",
            "en": {
              "text": "Strong verbs change their root vowel in the past tense, with no ending — the same pattern as English (sing-sang) or German."
            }
          },
          {
            "type": "table",
            "title": "sjen → seach",
            "rows": [
              [
                "sjen (бачити) → ik seach",
                "я бачив(ла)"
              ],
              [
                "gean (йти) → ik gie",
                "я йшов(ла)"
              ]
            ],
            "en": {
              "title": "sjen → seach"
            }
          }
        ],
        "titleEn": "Past Tense of Strong Verbs (Ablaut) — B1"
      },
      {
        "id": "perfect-hawwe",
        "title": "Перфект з hawwe — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект більшості дієслів = hawwe в теперішньому часі + дієприкметник минулого часу (ge-...-e/-d/-t).",
            "en": {
              "text": "The perfect of most verbs = hawwe in the present tense + the past participle (ge-...-e/-d/-t)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik ha it boek lêzen.",
                "Я прочитав книгу."
              ],
              [
                "Hy hat net iten.",
                "Він не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense with hawwe — A2"
      },
      {
        "id": "perfect-weze",
        "title": "Перфект з wêze (дієслова руху) — B1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в нідерландській та німецькій, дієслова руху й зміни стану утворюють перфект з допоміжним \"wêze\" замість \"hawwe\".",
            "en": {
              "text": "As in Dutch and German, verbs of motion and change of state form the perfect with the auxiliary \"wêze\" instead of \"hawwe\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bin thúskommen.",
                "Я прийшов додому."
              ],
              [
                "Hy is fuortgien.",
                "Він пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect with wêze (Motion Verbs) — B1"
      },
      {
        "id": "future-sil",
        "title": "Майбутній час (sil) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутнє утворюється допоміжним дієсловом \"sil\" (від \"sille\") + інфінітив, подібно до англійського \"shall/will\".",
            "en": {
              "text": "The future is formed with the auxiliary \"sil\" (from \"sille\") + infinitive, similar to English \"shall/will\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik sil moarn komme.",
                "Я прийду завтра."
              ],
              [
                "Wy sille it dwaan.",
                "Ми це зробимо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense (sil) — A2"
      },
      {
        "id": "progressive-oan-it",
        "title": "Тривалий вид (oan it + інфінітив) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Найхарактерніша риса фризької видової системи: конструкція \"wêze + oan it + інфінітив\" виражає дію, що триває саме зараз — точний відповідник нідерландського \"aan het\" і функціонально схожий на англійський Present Continuous.",
            "en": {
              "text": "The most distinctive trait of the Frisian aspect system: the construction \"wêze + oan it + infinitive\" expresses an action happening right now — an exact match to Dutch \"aan het\" and functionally similar to the English Present Continuous."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bin oan it wurkjen.",
                "Я зараз працюю."
              ],
              [
                "Sy wie oan it lêzen.",
                "Вона читала (саме тоді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Aspect (oan it + Infinitive) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма — гола основа дієслова без закінчення; для ввічливості/множини використовують форму з підметом \"jo\".",
            "en": {
              "text": "The imperative is the bare verb stem with no ending; for politeness/plural, the form with the subject \"jo\" is used."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Kom!",
                "Йди сюди!"
              ],
              [
                "Komme jo!",
                "Приходьте! (ввічливо)"
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
        "id": "conditional-soe",
        "title": "Умовний спосіб (soe) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражається допоміжним дієсловом \"soe\" (від sille) + інфінітив.",
            "en": {
              "text": "The conditional is expressed with the auxiliary \"soe\" (from sille) + infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik soe graach komme.",
                "Я б залюбки прийшов."
              ],
              [
                "At ik jild hie, soe ik reizgje.",
                "Якби я мав гроші, я б подорожував."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood (soe) — B1"
      },
      {
        "id": "passive-wurde",
        "title": "Пасивний стан з wurde — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Пасив утворюється допоміжним дієсловом \"wurde\" (ставати) + дієприкметник минулого часу.",
            "en": {
              "text": "The passive is formed with the auxiliary \"wurde\" (to become) + the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "It hûs waard boud yn 1990.",
                "Дім був побудований у 1990."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice with wurde — B1"
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова — A2",
        "emoji": "🎛️",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kinne-могти, meie-мати дозвіл, moatte-мусити, wolle-хотіти) поєднуються з голим інфінітивом.",
            "en": {
              "text": "Modal verbs (kinne-can, meie-may, moatte-must, wolle-want) combine with the bare infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik kin Frysk prate.",
                "Я вмію говорити фризькою."
              ],
              [
                "Do moatst gean.",
                "Ти мусиш йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verbs — A2"
      },
      {
        "id": "te-infinitive",
        "title": "Інфінітив з te — B1",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Після більшості неповних дієслів (крім модальних) інфінітив вимагає частки \"te\", подібно до англійського \"to\".",
            "en": {
              "text": "After most non-modal auxiliary-like verbs, the infinitive requires the particle \"te\", similar to English \"to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik besykje te wurkjen.",
                "Я намагаюся працювати."
              ],
              [
                "Hy begjint te sjongen.",
                "Він починає співати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The te-Infinitive — B1"
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
        "id": "common-neuter-gender",
        "title": "Спільний і середній рід — A2",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в нідерландській, історичні чоловічий і жіночий рід злилися у \"спільний рід\" (з артиклем de), протиставлений середньому роду (з артиклем it).",
            "en": {
              "text": "As in Dutch, the historical masculine and feminine genders merged into a \"common gender\" (with the article de), contrasted with the neuter (with the article it)."
            }
          },
          {
            "type": "table",
            "title": "de vs it",
            "rows": [
              [
                "de frou",
                "жінка (спільний рід)"
              ],
              [
                "it bern",
                "дитина (середній рід)"
              ]
            ],
            "en": {
              "title": "de vs it"
            }
          }
        ],
        "titleEn": "Common and Neuter Gender — A2"
      },
      {
        "id": "plural-en",
        "title": "Множина на -en — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніше закінчення множини — -en, часто зі зміною голосного основи.",
            "en": {
              "text": "The most common plural ending is -en, often with a change in the stem vowel."
            }
          },
          {
            "type": "table",
            "title": "hûs → hûzen",
            "rows": [
              [
                "hûs (дім) → hûzen",
                "доми"
              ],
              [
                "skoech (черевик) → skuon",
                "черевики (з чергуванням)"
              ]
            ],
            "en": {
              "title": "hûs → hûzen"
            }
          }
        ],
        "titleEn": "The Plural Ending -en — A2"
      },
      {
        "id": "plural-s",
        "title": "Множина на -s — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Друге поширене закінчення множини — -s, характерне для іменників на ненаголошений склад чи запозичень.",
            "en": {
              "text": "The second common plural ending is -s, typical of nouns ending in an unstressed syllable or of loanwords."
            }
          },
          {
            "type": "table",
            "title": "auto → auto's",
            "rows": [
              [
                "auto (авто) → auto's",
                "автомобілі"
              ],
              [
                "famylje (родина) → famyljes",
                "родини"
              ]
            ],
            "en": {
              "title": "auto → auto's"
            }
          }
        ],
        "titleEn": "The Plural Ending -s — A2"
      },
      {
        "id": "frisian-breaking",
        "title": "Фризьке заломлення (breaking) — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса фризької фонології: довгі голосні й дифтонги регулярно \"заломлюються\" в іншу голосну, коли до кореня додається закінчення множини чи інша флексія.",
            "en": {
              "text": "A unique feature of Frisian phonology: long vowels and diphthongs regularly \"break\" into a different vowel when a plural ending or other inflection is added to the root."
            }
          },
          {
            "type": "table",
            "title": "Приклад заломлення",
            "rows": [
              [
                "skoech (черевик, одн.)",
                "skuon (черевики, мн.)",
                "дифтонг oe заломлюється в іншу голосну при множині"
              ]
            ]
          }
        ],
        "titleEn": "Frisian Vowel Breaking — B2"
      },
      {
        "id": "adjective-inflection-e",
        "title": "Прикметник із -e перед іменником — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник перед іменником майже завжди отримує закінчення -e (атрибутивна форма), тоді як предикативна форма (після \"is\") залишається без нього.",
            "en": {
              "text": "An adjective before a noun almost always takes the ending -e (attributive form), while the predicative form (after \"is\") stays bare."
            }
          },
          {
            "type": "formula",
            "title": "Предикативна → атрибутивна",
            "rows": [
              [
                "It hûs is grut.",
                "it grutte hûs",
                "Дім великий → великий дім (з -e)"
              ]
            ]
          }
        ],
        "titleEn": "The Attributive Adjective Ending -e — A2"
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється закінченням -er, найвищий — -st.",
            "en": {
              "text": "The comparative is formed with -er, the superlative with -st."
            }
          },
          {
            "type": "table",
            "title": "grut → grutter → grutst",
            "rows": [
              [
                "grut (великий)",
                "grutter (більший)",
                "grutst (найбільший)"
              ]
            ]
          }
        ],
        "titleEn": "Comparative and Superlative — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники стоять перед іменником і не змінюються за родом, на відміну від деяких інших германських мов.",
            "en": {
              "text": "Possessive pronouns stand before the noun and don't change for gender, unlike some other Germanic languages."
            }
          },
          {
            "type": "table",
            "title": "myn, dyn, syn",
            "rows": [
              [
                "myn hûs",
                "мій дім"
              ],
              [
                "dyn boek",
                "твоя книга"
              ],
              [
                "har famylje",
                "її родина"
              ]
            ],
            "en": {
              "title": "myn, dyn, syn"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "reduced-pronoun-forms",
        "title": "Скорочені форми займенників — B1",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній мові особові займенники часто зливаються з дієсловом у скорочену форму — do → -st, hy → -er.",
            "en": {
              "text": "In spoken language, personal pronouns often fuse with the verb into a reduced form — do → -st, hy → -er."
            }
          },
          {
            "type": "formula",
            "title": "Повна → скорочена форма",
            "rows": [
              [
                "hasto dat sjoen?",
                "hast dat sjoen?",
                "чи бачив ти це? → скорочена розмовна форма"
              ]
            ]
          }
        ],
        "titleEn": "Reduced Pronoun Forms — B1"
      },
      {
        "id": "reflexive-jin",
        "title": "Зворотний займенник jin(sels) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність для 3-ї особи виражається займенником \"jin\" або підсиленою формою \"josels/harsels\", залежно від особи й числа.",
            "en": {
              "text": "Reflexivity for the 3rd person is expressed with \"jin\" or the intensified form \"josels/harsels\", depending on person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hy waske him.",
                "Він мився."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun jin(sels) — B1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Dizze/dit\" (цей/це) вказує на близьке, \"dy/dat\" (той/те) — на віддалене, і узгоджуються з родом іменника (de- чи it-слово).",
            "en": {
              "text": "\"Dizze/dit\" (this) points to something near, \"dy/dat\" (that) to something distant, and both agree with the noun's gender (de- or it-word)."
            }
          },
          {
            "type": "table",
            "title": "dizze/dit vs dy/dat",
            "rows": [
              [
                "dizze man (de-слово)",
                "цей чоловік"
              ],
              [
                "dit bern (it-слово)",
                "ця дитина"
              ]
            ],
            "en": {
              "title": "dizze/dit vs dy/dat"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-pronoun-dyt",
        "title": "Відносні займенники dy't/dat't — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносні займенники поєднують вказівне слово (dy/dat) з підрядним сполучником 't (=dat) в одну форму — риса, не властива англійській чи нідерландській у такому вигляді.",
            "en": {
              "text": "The relative pronouns fuse the demonstrative (dy/dat) with the subordinating conjunction 't (=dat) into a single form — a trait not shared by English or Dutch in this exact shape."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "De man dy't kaam, is myn broer.",
                "Чоловік, що прийшов, — мій брат."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns dy't/dat't — B1"
      },
      {
        "id": "word-order-v2",
        "title": "Порядок слів V2 — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Відмінюване дієслово завжди стоїть на другій позиції в головному реченні, як і в англійській до XV ст. та в сучасній нідерландській.",
            "en": {
              "text": "The finite verb always stands in second position in the main clause, as in English before the 15th century and in modern Dutch."
            }
          },
          {
            "type": "formula",
            "title": "Нейтральний → з обставиною першою",
            "rows": [
              [
                "Ik gean moarn.",
                "Moarn gean ik.",
                "Я йду завтра → завтра я йду (дієслово завжди друге)"
              ]
            ]
          }
        ],
        "titleEn": "V2 Word Order — A2"
      },
      {
        "id": "subordinate-clause-order",
        "title": "Порядок слів у підрядному реченні — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні дієслово переміщується в кінець, як і в нідерландській та німецькій.",
            "en": {
              "text": "In a subordinate clause, the verb moves to the end, as in Dutch and German."
            }
          },
          {
            "type": "formula",
            "title": "Головне → підрядне",
            "rows": [
              [
                "Ik wit dat.",
                "...dat ik dat wit.",
                "Я знаю це → ...що я це знаю (дієслово в кінці)"
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Subordinate Clauses — B1"
      },
      {
        "id": "diminutive-suffix",
        "title": "Демінутив -tsje/-ke — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -tsje (або -ke після деяких приголосних) додає відтінок ніжності чи малого розміру, часто переводить іменник у середній рід.",
            "en": {
              "text": "The diminutive suffix -tsje (or -ke after some consonants) adds tenderness or smallness, often shifting the noun to the neuter gender."
            }
          },
          {
            "type": "table",
            "title": "hûs → hûske",
            "rows": [
              [
                "hûs (дім) → hûske",
                "будиночок"
              ],
              [
                "famke",
                "дівчинка (з -ke)"
              ]
            ],
            "en": {
              "title": "hûs → hûske"
            }
          }
        ],
        "titleEn": "The Diminutive Suffix -tsje/-ke — B1"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники близькі за формою до нідерландських і англійських еквівалентів завдяки спільному германському походженню.",
            "en": {
              "text": "The numbers are close in form to their Dutch and English equivalents thanks to their shared Germanic origin."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ien",
                "один"
              ],
              [
                "twa",
                "два"
              ],
              [
                "trije",
                "три"
              ],
              [
                "fiif",
                "п'ять"
              ],
              [
                "tsien",
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
        "id": "indefinite-article",
        "title": "Неозначений артикль in — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль \"in\" однаковий для обох родів, на відміну від означеного de/it.",
            "en": {
              "text": "The indefinite article \"in\" is the same for both genders, unlike the definite de/it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "in man",
                "чоловік (неозначено)"
              ],
              [
                "in bern",
                "дитина (неозначено)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Indefinite Article in — A1"
      },
      {
        "id": "prepositions",
        "title": "Прийменники — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Основні прийменники близькі до нідерландських, хоча деякі мають унікальну фризьку форму.",
            "en": {
              "text": "The basic prepositions are close to Dutch ones, though some have a unique Frisian form."
            }
          },
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "fan",
                "з/від"
              ],
              [
                "oan",
                "до/на"
              ],
              [
                "mei",
                "з (разом)"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Prepositions — A2"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники не змінюють порядок слів, підрядні — переносять дієслово в кінець речення.",
            "en": {
              "text": "Coordinating conjunctions don't affect word order; subordinating ones send the verb to the end of the clause."
            }
          },
          {
            "type": "table",
            "title": "en / mar / omdat",
            "rows": [
              [
                "en",
                "і"
              ],
              [
                "mar",
                "але"
              ],
              [
                "omdat",
                "тому що"
              ]
            ],
            "en": {
              "title": "en / mar / omdat"
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
            "text": "Складні слова поєднують два корені без сполучного голосного; рід визначає останній елемент.",
            "en": {
              "text": "Compound words join two roots with no linking vowel; the gender is set by the last element."
            }
          },
          {
            "type": "table",
            "title": "sinne + skyn",
            "rows": [
              [
                "sinne (сонце) + skyn (світло) = sinneskyn",
                "сонячне світло"
              ]
            ],
            "en": {
              "title": "sinne + skyn"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "adverb-formation",
        "title": "Утворення прислівників — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу часто збігаються за формою з прикметником у нефлективній формі — як в англійській \"fast\", а не завжди з окремим суфіксом.",
            "en": {
              "text": "Manner adverbs often coincide in form with the uninflected adjective — as in English \"fast\", not always with a separate suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hy rint hurd.",
                "Він біжить швидко."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Forming Adverbs — A2"
      },
      {
        "id": "double-infinitive",
        "title": "Подвійний інфінітив у складних часах — B1",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли модальне дієслово поєднується з дієсловом руху в перфекті, обидва дієслова часто стоять в інфінітивній формі замість дієприкметника — так само, як у нідерландській та німецькій.",
            "en": {
              "text": "When a modal verb combines with a motion verb in the perfect, both verbs often appear in the infinitive instead of the participle — just as in Dutch and German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik ha net komme kinnen.",
                "Я не зміг прийти. (два інфінітиви замість дієприкметника)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Infinitive in Compound Tenses — B1"
      },
      {
        "id": "negative-gjin",
        "title": "Заперечення gjin vs net — A2",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Gjin\" заперечує іменник (\"жодного\"), тоді як \"net\" заперечує дієслово чи прикметник — розрізнення, яке варто засвоїти окремо.",
            "en": {
              "text": "\"Gjin\" negates a noun (\"no/none\"), while \"net\" negates a verb or adjective — a distinction that must be learned separately."
            }
          },
          {
            "type": "formula",
            "title": "gjin vs net",
            "rows": [
              [
                "Ik ha gjin jild.",
                "Ik bin net ryk.",
                "У мене немає грошей (gjin + ім.) → Я не багатий (net + прикм.)"
              ]
            ]
          }
        ],
        "titleEn": "Negation: gjin vs net — A2"
      },
      {
        "id": "anglo-frisian-brightening",
        "title": "Англо-фризьке \"просвітлення\" — C1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Історична звукозміна, спільна лише для англійської та фризької серед германських мов: давньогерманське \"a\" перейшло в \"e/ê\", що пояснює деякі несподівані паралелі з англійськими словами.",
            "en": {
              "text": "A historical sound change shared only by English and Frisian among the Germanic languages: Old Germanic \"a\" shifted to \"e/ê\", explaining some unexpected parallels with English words."
            }
          },
          {
            "type": "table",
            "title": "Паралелі з англійською",
            "rows": [
              [
                "dei (день)",
                "day",
                "спільний корінь через просвітлення a→ei"
              ],
              [
                "tsiis (сир)",
                "cheese",
                "паралельний розвиток"
              ]
            ]
          }
        ],
        "titleEn": "The Anglo-Frisian Brightening — C1"
      },
      {
        "id": "interrogative-declension",
        "title": "Питальні займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Wa\" (хто) вживається для людей, \"wat\" (що) — для всього іншого, без відмінкових форм, на відміну від багатьох інших германських мов.",
            "en": {
              "text": "\"Wa\" (who) is used for people, \"wat\" (what) for everything else, with no case forms, unlike many other Germanic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wa is dat?",
                "Хто це?"
              ],
              [
                "Wat wolst?",
                "Що ти хочеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Interrogative Pronouns — A2"
      },
      {
        "id": "polite-imperative",
        "title": "Ввічливий наказ із jo — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливий наказ утворюється підметом \"jo\" одразу після дієслова, на відміну від простого наказу з голим дієсловом.",
            "en": {
              "text": "The polite imperative is formed with the subject \"jo\" right after the verb, unlike the plain imperative with the bare verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sit del, jo!",
                "Сідайте, будь ласка!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Polite Imperative with jo — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня схожі за структурою на нідерландські й англійські еквіваленти.",
            "en": {
              "text": "The days of the week resemble their Dutch and English equivalents in structure."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "moandei",
                "понеділок"
              ],
              [
                "woansdei",
                "середа"
              ],
              [
                "freed",
                "п'ятниця"
              ],
              [
                "snein",
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
            "text": "Назви місяців переважно запозичені з латини через нідерландську.",
            "en": {
              "text": "Month names are mostly borrowed from Latin via Dutch."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "jannewaris",
                "січень"
              ],
              [
                "maaie",
                "травень"
              ],
              [
                "augustus",
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
            "text": "Час запитують \"Hoe let is it?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Hoe let is it?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "It is trije oere.",
                "Зараз третя година."
              ],
              [
                "Wy sjogge elkoar om fiif oere.",
                "Ми побачимось о п'ятій."
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
            "text": "Кольори — звичайні прикметники, узгоджуються з іменником через закінчення -e у позиції перед іменником.",
            "en": {
              "text": "Colors are ordinary adjectives, agreeing with the noun via the -e ending in prenominal position."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "wyt",
                "білий"
              ],
              [
                "swart",
                "чорний"
              ],
              [
                "read",
                "червоний"
              ],
              [
                "blau",
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
            "text": "Родинні терміни — звичайні іменники з властивим родом (de- чи it-слово).",
            "en": {
              "text": "Kinship terms are ordinary nouns with an inherent gender (de- or it-word)."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "mem",
                "мама"
              ],
              [
                "heit",
                "тато"
              ],
              [
                "suster",
                "сестра"
              ],
              [
                "broer",
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
            "text": "Привітання близькі до нідерландських, але з характерною фризькою вимовою.",
            "en": {
              "text": "Greetings resemble Dutch ones, but with characteristic Frisian pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Goeie!",
                "Привіт!"
              ],
              [
                "Goeiemoarn!",
                "Доброго ранку!"
              ],
              [
                "Oant sjen!",
                "До побачення!"
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
            "text": "Погоду часто описують безособовим підметом \"it\", як в англійській \"it rains\".",
            "en": {
              "text": "Weather is often described with the impersonal subject \"it\", as in English \"it rains\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "It reint.",
                "Йде дощ."
              ],
              [
                "It is kâld bûten.",
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
            "text": "Частини тіла мають властивий рід, часто інший, ніж в українській.",
            "en": {
              "text": "Body parts have an inherent gender, often different from Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "de hân",
                "рука"
              ],
              [
                "it holle",
                "голова"
              ],
              [
                "de foet",
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
            "text": "Вік виражають дієсловом \"wêze\" + число + \"jier\" (років), подібно до англійської \"I am ... years old\".",
            "en": {
              "text": "Age is expressed with \"wêze\" + number + \"jier\" (years), similar to English \"I am ... years old\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bin tweintich jier âld.",
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
        "id": "address-forms",
        "title": "Звертання do vs jo — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Do\" — неформальне звертання, \"jo\" — ввічливе/множинне, подібно до нідерландського je/u.",
            "en": {
              "text": "\"Do\" is informal address, \"jo\" is polite/plural, similar to Dutch je/u."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wolst do wat drinke?",
                "Хочеш щось випити? (неформально)"
              ],
              [
                "Wolle jo wat drinke?",
                "Бажаєте щось випити? (ввічливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Forms do vs jo — A2"
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
                "Sjoch!",
                "Дивись!"
              ],
              [
                "Tank wol!",
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
        "id": "dutch-influence",
        "title": "Вплив нідерландської — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через тривалу двомовність із нідерландською багато сучасних фризів вживають нідерландські слова й конструкції поряд із питомо фризькими — явище, відоме як \"Stedsfrysk\" у міському варіанті.",
            "en": {
              "text": "Due to long-standing bilingualism with Dutch, many modern Frisians use Dutch words and constructions alongside native Frisian ones — a phenomenon known as \"Stedsfrysk\" in the urban variant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Часто чергування фризької та нідерландської лексики в одному реченні в розмовній мові.",
                "типова риса контактної двомовності"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dutch Influence — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Фризькі ідіоми часто спираються на сільське життя, воду й ковзанярство — центральні елементи фризької культури.",
            "en": {
              "text": "Frisian idioms often draw on rural life, water, and ice skating — central elements of Frisian culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elk Frysk hynder hat syn eigen paad.",
                "У кожного свій шлях (букв. \"кожен фризький кінь має свою стежку\")."
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
            "text": "Числівники 11-19 утворюються поєднанням одиниці й суфікса, подібно до англійської.",
            "en": {
              "text": "Numbers 11-19 are formed by combining the digit with a suffix, similar to English."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "alve",
                "одинадцять"
              ],
              [
                "tweintich",
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
            "text": "Порядкові числівники утворюються суфіксом -de/-ste, з кількома неправильними формами на початку ряду.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -de/-ste, with a few irregular forms at the start of the sequence."
            }
          },
          {
            "type": "table",
            "title": "earste, twadde, tredde",
            "rows": [
              [
                "earste",
                "перший"
              ],
              [
                "twadde",
                "другий"
              ],
              [
                "tredde",
                "третій"
              ]
            ],
            "en": {
              "title": "earste, twadde, tredde"
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
            "text": "\"Immen\" (хтось) і \"eat\" (щось) — базові неозначені займенники.",
            "en": {
              "text": "\"Immen\" (someone) and \"eat\" (something) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Immen belle.",
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
        "id": "time-adverbs",
        "title": "Прислівники часу — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "intro",
            "text": "Основні прислівники часу описують коли відбувається дія відносно моменту мовлення.",
            "en": {
              "text": "Basic time adverbs describe when an action happens relative to the moment of speaking."
            }
          },
          {
            "type": "table",
            "title": "Прислівники часу",
            "rows": [
              [
                "hjoed",
                "сьогодні"
              ],
              [
                "moarn",
                "завтра"
              ],
              [
                "juster",
                "учора"
              ]
            ],
            "en": {
              "title": "Time Adverbs"
            }
          }
        ],
        "titleEn": "Time Adverbs — A2"
      },
      {
        "id": "separable-verbs",
        "title": "Відокремлювані дієслівні частки — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Як в англійських фразових дієсловах чи нідерландській, багато дієслів мають відокремлювану частку, що переміщується в кінець головного речення.",
            "en": {
              "text": "As in English phrasal verbs or Dutch, many verbs have a separable particle that moves to the end of the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bel dy op.",
                "Я тобі подзвоню. (opbelle = дзвонити, частка op в кінці)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Separable Verb Particles — B1"
      },
      {
        "id": "reflexive-intensifier-sels",
        "title": "Підсилювач sels (\"сам\") — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sels\" підсилює підмет чи додаток у значенні \"сам особисто\", окремо від зворотного значення.",
            "en": {
              "text": "\"Sels\" intensifies the subject or object with the meaning \"in person/myself\", separate from the reflexive meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik ha it sels dien.",
                "Я зробив це сам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Intensifier sels (\"self\") — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне omdat — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Omdat\" (тому що) вводить причинове підрядне речення з дієсловом у кінці.",
            "en": {
              "text": "\"Omdat\" (because) introduces a causal clause with the verb at the end."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik bin let, omdat ik de bus miste.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause omdat — B1"
      },
      {
        "id": "conditional-clause-as",
        "title": "Умовне підрядне as/at — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником \"as\" або \"at\" (якщо), з дієсловом у кінці підрядного.",
            "en": {
              "text": "A conditional clause is introduced with the conjunction \"as\" or \"at\" (if), with the verb at the end of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "As it reint, bliuw ik binnen.",
                "Якщо йде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause as/at — B1"
      },
      {
        "id": "purpose-clause",
        "title": "Цільове підрядне om te — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Om te\" + інфінітив вводить цільове підрядне речення \"щоб\", подібно до нідерландського \"om te\".",
            "en": {
              "text": "\"Om te\" + infinitive introduces a purpose clause \"in order to\", similar to Dutch \"om te\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ik lear Frysk om mei myn pake te praten.",
                "Я вчу фризьку, щоб розмовляти з дідом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause om te — B1"
      },
      {
        "id": "rural-farming-idioms",
        "title": "Сільськогосподарська лексика — A2",
        "emoji": "🐄",
        "sections": [
          {
            "type": "intro",
            "text": "Фризька зберігає багату й точну лексику для тваринництва (особливо корів) — спадок традиційного сільського господарства регіону.",
            "en": {
              "text": "Frisian retains rich, precise vocabulary for animal husbandry (especially cattle) — a legacy of the region's traditional agriculture."
            }
          },
          {
            "type": "table",
            "title": "Сільська лексика",
            "rows": [
              [
                "ko",
                "корова"
              ],
              [
                "hynder",
                "кінь"
              ],
              [
                "skiep",
                "вівця"
              ]
            ],
            "en": {
              "title": "Farming Vocabulary"
            }
          }
        ],
        "titleEn": "Farming Vocabulary — A2"
      },
      {
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"net?\" або \"hè?\" у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"net?\" or \"hè?\" at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Moai waar hjoed, net?",
                "Гарна сьогодні погода, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tag Questions — B1"
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
            "text": "Кілька частовживаних дієслів (wêze, gean, dwaan, ha) мають настільки нерегулярний аблаут, що їх слід вивчати окремо, а не за загальними класами.",
            "en": {
              "text": "A few common verbs (wêze, gean, dwaan, ha) have ablaut so irregular that they must be learned individually rather than by the general classes."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "gean (йти) → gie",
                "минулий час не за жодним стандартним аблаутним рядом"
              ],
              [
                "dwaan (робити) → die",
                "неправильна форма минулого часу"
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
        "id": "irregular-plurals",
        "title": "Неправильна множина — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі часто вживані іменники утворюють множину непередбачувано, зі значною зміною основи через фризьке заломлення.",
            "en": {
              "text": "Some common nouns form the plural unpredictably, with a substantial stem change from Frisian breaking."
            }
          },
          {
            "type": "table",
            "title": "skoech → skuon",
            "rows": [
              [
                "skoech (черевик) → skuon",
                "черевики (непередбачувана зміна основи)"
              ],
              [
                "ko (корова) → kij",
                "корови (непередбачувана форма)"
              ]
            ],
            "en": {
              "title": "skoech → skuon"
            }
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені фрази зберігають архаїчні форми слів або порядок слів, що вийшли із загального вжитку.",
            "en": {
              "text": "Some common phrases preserve archaic word forms or word order that have fallen out of general use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Frysk en Frij!",
                "Фризький і вільний! (гасло, архаїчна конструкція)"
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
