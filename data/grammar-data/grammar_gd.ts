// Vymova — data/grammar-data/grammar_gd.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GD: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Riochdairean Pearsanta — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Шотландська гельська близько споріднена з ірландською, і так само дієслово в реченні зазвичай стоїть перед підметом-займенником.",
            "en": {
              "text": "Scottish Gaelic is closely related to Irish, and likewise the verb usually comes before the pronoun subject in a sentence."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mi"
              ],
              [
                "ти",
                "thu"
              ],
              [
                "він / вона",
                "e / i"
              ],
              [
                "ми",
                "sinn"
              ],
              [
                "ви",
                "sibh"
              ],
              [
                "вони",
                "iad"
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
        "id": "tha-vs-is",
        "title": "Tha vs Is — два дієслова \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській, шотландська гельська має два дієслова \"бути\": \"tha\" для стану й місця, \"is\" (копула) для тотожності — але з власними, відмінними від ірландських формами.",
            "en": {
              "text": "As in Irish, Scottish Gaelic has two verbs \"to be\": \"tha\" for state and location, \"is\" (the copula) for identity — but with its own forms, distinct from the Irish ones."
            }
          },
          {
            "type": "table",
            "title": "tha (стан) vs is (тотожність)",
            "rows": [
              [
                "Tha mi sgìth.",
                "Я втомлений. (стан, tha)"
              ],
              [
                "Is tidsear mi.",
                "Я вчитель. (тотожність, is)"
              ]
            ],
            "en": {
              "title": "tha (state) vs is (identity)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha e an seo.",
                "Він тут."
              ],
              [
                "Is Albannach i.",
                "Вона шотландка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tha vs Is — Two Verbs \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з cha — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"cha\" (не), відмінною від ірландської \"ní\", яка спричиняє леніцію наступного дієслова.",
            "en": {
              "text": "Negation is formed with the particle \"cha\" (not), distinct from Irish \"ní\", which triggers lenition of the following verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Tha mi an seo.",
                "Chan eil mi an seo.",
                "Я тут → я не тут (cha+tha = chan eil)"
              ],
              [
                "Is tidsear mi.",
                "Cha tidsear mi.",
                "Я вчитель → я не вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chan eil mi sgìth.",
                "Я не втомлений."
              ],
              [
                "Cha bhruidhinn i Gàidhlig.",
                "Вона не розмовляє гельською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with cha — A1"
      },
      {
        "id": "questions-an-nach",
        "title": "Питання з an/nach — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання вводяться часткою \"an\" (спричиняє леніцію) перед дієсловом; як і в ірландській, немає окремих слів для \"так\"/\"ні\" — відповідають повторенням дієслова.",
            "en": {
              "text": "Yes/no questions are introduced with the particle \"an\" (triggers lenition) before the verb; as in Irish, there are no separate words for \"yes\"/\"no\" — the verb is repeated in reply."
            }
          },
          {
            "type": "table",
            "title": "Питання й відповідь",
            "rows": [
              [
                "An bheil thu sgìth?",
                "Ти втомлений?"
              ],
              [
                "Tha. / Chan eil.",
                "Так. / Ні. (букв. \"є\"/\"немає\")"
              ]
            ],
            "en": {
              "title": "Question and Answer"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cò às a tha thu?",
                "Звідки ти?"
              ],
              [
                "Dè an t-ainm a th' ort?",
                "Як тебе звати?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions with an/nach — A1"
      },
      {
        "id": "lenition-only-intro",
        "title": "Мутація: лише леніція, без еклипсису — A2",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від ірландської, шотландська гельська втратила еклипсис і покладається переважно на леніцію (пом'якшення першого приголосного) як основний тип мутації.",
            "en": {
              "text": "Unlike Irish, Scottish Gaelic has lost eclipsis and relies mainly on lenition (softening of the initial consonant) as its principal type of mutation."
            }
          },
          {
            "type": "table",
            "title": "Леніція",
            "rows": [
              [
                "cat (кіт) → mo chat",
                "мій кіт"
              ],
              [
                "mòr (великий) → bhòrd mhòr",
                "великий стіл (жіночий рід, леніція)"
              ]
            ],
            "en": {
              "title": "Lenition"
            }
          }
        ],
        "titleEn": "Mutation: Lenition Only, No Eclipsis — A2"
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
        "id": "no-synthetic-present",
        "title": "Немає простого теперішнього часу — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Найвиразніша відмінність від ірландської: шотландська гельська взагалі не має синтетичного теперішнього часу для звичайних дієслів — теперішнє виражають лише описовою конструкцією \"tha...a'\" (тривалий вид).",
            "en": {
              "text": "The clearest difference from Irish: Scottish Gaelic has no synthetic present tense at all for ordinary verbs — the present is expressed only with the periphrastic \"tha...a'\" construction (continuous aspect)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha mi a' bruidhinn.",
                "Я говорю/розмовляю (буквально \"я в говорінні\")."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Synthetic Present Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (-idh/-aidh) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється закінченням -idh/-aidh, доданим до кореня дієслова; ця форма також часто виражає загальну/звичну істину.",
            "en": {
              "text": "The future tense is formed with the ending -idh/-aidh added to the verb root; this form also often expresses a general/habitual truth."
            }
          },
          {
            "type": "table",
            "title": "bruidhinn → bruidhnidh",
            "rows": [
              [
                "bruidhnidh mi",
                "я говоритиму"
              ],
              [
                "bruidhnidh tu",
                "ти говоритимеш"
              ]
            ],
            "en": {
              "title": "bruidhinn → bruidhnidh"
            }
          }
        ],
        "titleEn": "Future Tense (-idh/-aidh) — A2"
      },
      {
        "id": "past-tense",
        "title": "Минулий час (леніція кореня) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється леніцією першого приголосного кореня дієслова, без окремого закінчення — сама зміна приголосного і є маркером часу.",
            "en": {
              "text": "The past tense is formed by lenition of the verb root's first consonant, with no separate ending — the consonant change itself is the tense marker."
            }
          },
          {
            "type": "table",
            "title": "bruidhinn → bhruidhinn",
            "rows": [
              [
                "bhruidhinn mi",
                "я говорив(ла)"
              ],
              [
                "cheannaich mi",
                "я купив(ла) (c→ch)"
              ]
            ],
            "en": {
              "title": "bruidhinn → bhruidhinn"
            }
          }
        ],
        "titleEn": "Past Tense (Root Lenition) — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб (-eadh/-adh) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється закінченням -eadh/-adh разом із леніцією кореня.",
            "en": {
              "text": "The conditional is formed with the ending -eadh/-adh together with lenition of the root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bhruidhinninn riut nam biodh ùine agam.",
                "Я поговорив би з тобою, якби мав час."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood (-eadh/-adh) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова (та ж, що й майбутня основа без закінчення); для множини додається -ibh.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb root (the same as the future stem with no ending); the plural adds -ibh."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Bruidhinn!",
                "Говори!"
              ],
              [
                "Bruidhnibh!",
                "Говоріть! (мн.)"
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
        "id": "perfect-air",
        "title": "Перфект через air — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Недавно завершену дію виражають конструкцією \"tha + підмет + air + віддієслівний іменник\" — буквально \"бути на роблення\", подібно до ірландського tar éis, але з іншим прийменником.",
            "en": {
              "text": "A recently completed action is expressed with \"tha + subject + air + verbal noun\" — literally \"to be on doing\", similar to Irish tar éis but with a different preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha mi air an obair a chrìochnachadh.",
                "Я щойно закінчив роботу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect via air — B1"
      },
      {
        "id": "pluperfect-air",
        "title": "Плюсквамперфект через air — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама конструкція з \"air\" у минулому часі допоміжного дієслова (bha) виражає плюсквамперфект.",
            "en": {
              "text": "The same \"air\" construction with the auxiliary in the past tense (bha) expresses the pluperfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bha mi air an dorus a dhùnadh.",
                "Я вже був зачинив двері."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pluperfect via air — B1"
      },
      {
        "id": "passive-rach",
        "title": "Пасив через rach (chaidh) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Замість справжнього пасивного стану вживають конструкцію \"rach\" (йти) + віддієслівний іменник — буквально \"пішло робити\" замість \"було зроблено\".",
            "en": {
              "text": "Instead of a true passive voice, the construction \"rach\" (to go) + verbal noun is used — literally \"it went to be done\" instead of \"it was done\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chaidh an taigh a thogail ann an 1990.",
                "Дім був побудований у 1990. (букв. \"пішов дім будувати\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Passive via rach (chaidh) — B1"
      },
      {
        "id": "dependent-independent-forms",
        "title": "Залежні й незалежні форми дієслова — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській, кілька дієслів мають окрему форму після часток заперечення/питання (залежну), відмінну від стверджувальної (незалежної) форми — але точні форми відрізняються від ірландських.",
            "en": {
              "text": "As in Irish, several verbs have a distinct form after negation/question particles (dependent), different from the affirmative (independent) form — but the exact forms differ from the Irish ones."
            }
          },
          {
            "type": "table",
            "title": "Незалежна vs залежна",
            "rows": [
              [
                "Chunnaic mi e.",
                "am faca tu e?",
                "Я побачив це (незалежна) → чи ти побачив це? (залежна)"
              ]
            ]
          }
        ],
        "titleEn": "Dependent and Independent Verb Forms — B2"
      },
      {
        "id": "verbal-noun-ag",
        "title": "Віддієслівний іменник з ag — B1",
        "emoji": "📛",
        "sections": [
          {
            "type": "intro",
            "text": "Віддієслівний іменник (замінник інфінітива) утворюється непередбачувано для кожного дієслова й вживається як з \"ag\" (тривалий вид), так і самостійно.",
            "en": {
              "text": "The verbal noun (which replaces the infinitive) is formed unpredictably for each verb and is used both with \"ag\" (continuous aspect) and on its own."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha mi ag iarraidh cabhrach.",
                "Я потребую допомоги. (iarraidh = віддієслівний ім. від iarr)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verbal Noun with ag — B1"
      },
      {
        "id": "relative-future",
        "title": "Відносна майбутня форма — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Після відносної частки \"a\" дієслово в майбутньому часі отримує леніцію — окрема відносна форма, відмінна від звичайної незалежної.",
            "en": {
              "text": "After the relative particle \"a\", the future-tense verb takes lenition — a separate relative form, distinct from the ordinary independent form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "An duine a bhruidhneas rium.",
                "Людина, яка говоритиме зі мною. (леніція b→bh після a)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Future Form — B2"
      },
      {
        "id": "modal-verbs",
        "title": "Модальні конструкції — A2",
        "emoji": "🎛️",
        "sections": [
          {
            "type": "intro",
            "text": "Модальність виражають безособовими конструкціями: \"is urrainn dha\" (він може), \"feumaidh e\" (він мусить), \"faodaidh e\" (йому дозволено) — а не окремими особовими дієсловами.",
            "en": {
              "text": "Modality is expressed with impersonal constructions: \"is urrainn dha\" (he can), \"feumaidh e\" (he must), \"faodaidh e\" (he may) — not with separate personal modal verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Is urrainn dhomh Gàidhlig a bhruidhinn.",
                "Я вмію говорити гельською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Constructions — A2"
      },
      {
        "id": "habitual-bidh",
        "title": "Звична дія через bidh — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Форма майбутнього часу дієслова \"bi\" (bidh) вживається не лише для майбутнього, а й для регулярної/звичної дії в теперішньому — ще одне розширене вживання \"майбутньої\" форми.",
            "en": {
              "text": "The future form of the verb \"bi\" (bidh) is used not only for the future but also for a regular/habitual present action — another extended use of the \"future\" form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bidh mi ag obair gach latha.",
                "Я зазвичай працюю щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect via bidh — B1"
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
        "id": "case-genitive",
        "title": "Родовий відмінок — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок часто змінює саму форму іменника (звуження голосного, додавання -a чи леніцію), подібно до ірландської, але з власними закінченнями.",
            "en": {
              "text": "The genitive case often changes the noun's very shape (vowel narrowing, adding -a, or lenition), similar to Irish, but with its own endings."
            }
          },
          {
            "type": "table",
            "title": "Родовий відмінок",
            "rows": [
              [
                "taigh (дім) → doras an taighe",
                "двері дому"
              ],
              [
                "bata (палиця) → ceann a' bhata",
                "кінець палиці"
              ]
            ],
            "en": {
              "title": "Genitive Case"
            }
          }
        ],
        "titleEn": "The Genitive Case — A2"
      },
      {
        "id": "case-vocative",
        "title": "Кличний відмінок — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок вводиться часткою \"a\" перед іменем і спричиняє леніцію, як і в ірландській.",
            "en": {
              "text": "The vocative case is introduced with the particle \"a\" before the name and triggers lenition, as in Irish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A Sheumais!",
                "Джеймсе! (Seumas → a Sheumais)"
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
        "id": "definite-article-an-am",
        "title": "Означений артикль an/am — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль має кілька форм залежно від першого звука іменника (an, am, an t-), і спричиняє леніцію іменників жіночого роду.",
            "en": {
              "text": "The definite article has several forms depending on the noun's first sound (an, am, an t-), and triggers lenition of feminine nouns."
            }
          },
          {
            "type": "table",
            "title": "an/am + леніція",
            "rows": [
              [
                "bòrd → am bòrd",
                "стіл → цей стіл"
              ],
              [
                "cù → an cù",
                "собака → цей собака"
              ],
              [
                "bean → a' bhean",
                "жінка → ця жінка (леніція)"
              ]
            ],
            "en": {
              "title": "an/am + lenition"
            }
          }
        ],
        "titleEn": "The Definite Article an/am — A2"
      },
      {
        "id": "lenition-triggers",
        "title": "Тригери леніції — B1",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "Леніцію спричиняють присвійні \"mo/do\" (мій/твій), частка заперечення \"cha\", питальна частка \"an\", і багато інших слів — окремий список для запам'ятовування.",
            "en": {
              "text": "Lenition is triggered by the possessives \"mo/do\" (my/your), the negation particle \"cha\", the question particle \"an\", and many other words — a separate list to memorize."
            }
          },
          {
            "type": "table",
            "title": "mo + леніція",
            "rows": [
              [
                "cù (собака) → mo chù",
                "мій собака"
              ],
              [
                "càr (авто) → do chàr",
                "твоє авто"
              ]
            ],
            "en": {
              "title": "mo + lenition"
            }
          }
        ],
        "titleEn": "Lenition Triggers — B1"
      },
      {
        "id": "nasalization-rare",
        "title": "Назалізація в обмежених контекстах — B2",
        "emoji": "🌑",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від ірландського системного еклипсису, шотландська гельська зберігає лише окремі, обмежені сліди назалізації (переважно після прийменника \"an\" у деяких застиглих виразах).",
            "en": {
              "text": "Unlike Irish's systematic eclipsis, Scottish Gaelic retains only isolated, limited traces of nasalization (mostly after the preposition \"an\" in some fixed expressions)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "an-dràsta",
                "зараз (застигла форма зі слідом історичної назалізації)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nasalization in Limited Contexts — B2"
      },
      {
        "id": "broad-slender-consonants",
        "title": "Широкі й вузькі приголосні — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Правило \"leathann ri leathann, caol ri caol\" (широке з широким, вузьке з вузьким) вимагає, щоб голосні по обидва боки приголосного узгоджувалися за \"широкістю\" чи \"вузькістю\" — так само, як і в ірландській, але з деякими відмінними наслідками для вимови.",
            "en": {
              "text": "The rule \"leathann ri leathann, caol ri caol\" (broad with broad, slender with slender) requires the vowels on either side of a consonant to agree in broadness or slenderness — the same principle as Irish, but with some different pronunciation outcomes."
            }
          },
          {
            "type": "table",
            "title": "Приклад правила",
            "rows": [
              [
                "bàta (широкий)",
                "bàtaichean (вузький, мн.)"
              ]
            ],
            "en": {
              "title": "Example of the Rule"
            }
          }
        ],
        "titleEn": "Broad and Slender Consonants — B1"
      },
      {
        "id": "prepositional-pronouns",
        "title": "Прийменникові займенники — A2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і особовий займенник зливаються в одну відмінювану форму, як і в ірландській, але з відмінними формами.",
            "en": {
              "text": "A preposition and personal pronoun fuse into a single inflected form, as in Irish, but with different forms."
            }
          },
          {
            "type": "table",
            "title": "aig (у/при) + займенник",
            "rows": [
              [
                "agam",
                "у мене"
              ],
              [
                "agad",
                "у тебе"
              ],
              [
                "aige",
                "у нього"
              ]
            ],
            "en": {
              "title": "aig (at) + pronoun"
            }
          }
        ],
        "titleEn": "Prepositional Pronouns — A2"
      },
      {
        "id": "possession-tha-aig",
        "title": "Присвійність через tha...aig — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській, немає дієслова \"мати\": володіння виражається конструкцією \"tha X aig Y\" — буквально \"X є при Y\".",
            "en": {
              "text": "As in Irish, there's no verb \"to have\": possession is expressed with \"tha X aig Y\" — literally \"X is at Y\"."
            }
          },
          {
            "type": "formula",
            "title": "tha X agam = я маю X",
            "rows": [
              [
                "Tha cù agam.",
                "У мене є собака.",
                "tha + cù (X) + agam (у мене)"
              ]
            ]
          }
        ],
        "titleEn": "Possession via tha...aig — A1"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома способами: закінченнями (-an, -ean, -ichean) або зміною внутрішнього голосного.",
            "en": {
              "text": "The plural is formed in several ways: endings (-an, -ean, -ichean) or an internal vowel change."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "cat → cait",
                "коти"
              ],
              [
                "bòrd → buird",
                "столи"
              ],
              [
                "taigh → taighean",
                "доми"
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
        "id": "adjective-position-agreement",
        "title": "Прикметник після іменника — A1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника й отримує леніцію після іменника жіночого роду.",
            "en": {
              "text": "The adjective follows the noun and takes lenition after a feminine noun."
            }
          },
          {
            "type": "table",
            "title": "cù mòr, cailleach mhòr",
            "rows": [
              [
                "cù mòr (ч.р.)",
                "великий собака"
              ],
              [
                "cailleach mhòr (ж.р., леніція)",
                "велика бабуся"
              ]
            ],
            "en": {
              "title": "cù mòr, cailleach mhòr"
            }
          }
        ],
        "titleEn": "The Adjective after the Noun — A1"
      },
      {
        "id": "comparative-degree-nas",
        "title": "Порівняльний ступінь (nas) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється словом \"nas\" перед спеціальною порівняльною формою прикметника.",
            "en": {
              "text": "The comparative is formed with the word \"nas\" before a special comparative form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "mòr → nas motha",
            "rows": [
              [
                "mòr (великий) → nas motha",
                "більший"
              ],
              [
                "beag (малий) → nas lugha",
                "менший"
              ]
            ],
            "en": {
              "title": "mòr → nas motha"
            }
          }
        ],
        "titleEn": "The Comparative Degree (nas) — A2"
      },
      {
        "id": "superlative-degree-as",
        "title": "Найвищий ступінь (as) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється тією ж формою, але з часткою \"as\" замість \"nas\".",
            "en": {
              "text": "The superlative is formed with the same form, but with the particle \"as\" instead of \"nas\"."
            }
          },
          {
            "type": "table",
            "title": "as motha",
            "rows": [
              [
                "as motha",
                "найбільший"
              ],
              [
                "as lugha",
                "найменший"
              ]
            ],
            "en": {
              "title": "as motha"
            }
          }
        ],
        "titleEn": "The Superlative Degree (as) — A2"
      },
      {
        "id": "emphatic-pronoun-suffixes",
        "title": "Емфатичні суфікси займенників — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси -sa/-se підкреслюють контраст, додаючись до займенника чи присвійного слова — \"саме мій\", а не чийсь інший.",
            "en": {
              "text": "The suffixes -sa/-se emphasize a contrast, added to a pronoun or possessive — \"my own, specifically\", not someone else's."
            }
          },
          {
            "type": "table",
            "title": "mo chù-sa",
            "rows": [
              [
                "mo chù-sa",
                "саме мій собака"
              ],
              [
                "mise",
                "саме я"
              ]
            ],
            "en": {
              "title": "mo chù-sa"
            }
          }
        ],
        "titleEn": "Emphatic Pronoun Suffixes — B1"
      },
      {
        "id": "counting-people",
        "title": "Лічба людей — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Людей рахують окремими особовими числівниками (duine, dithis, triùir...), відмінними від звичайних числівників.",
            "en": {
              "text": "People are counted with special personal numerals (duine, dithis, triùir...), distinct from ordinary numerals."
            }
          },
          {
            "type": "table",
            "title": "Особові числівники",
            "rows": [
              [
                "aon duine",
                "одна людина"
              ],
              [
                "dithis",
                "двоє людей"
              ],
              [
                "triùir",
                "троє людей"
              ]
            ],
            "en": {
              "title": "Personal Numerals"
            }
          }
        ],
        "titleEn": "Counting People — B1"
      },
      {
        "id": "counting-objects",
        "title": "Лічба предметів — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники для предметів спричиняють леніцію іменника, який рахують.",
            "en": {
              "text": "Numerals for objects trigger lenition of the counted noun."
            }
          },
          {
            "type": "table",
            "title": "Числівники + леніція",
            "rows": [
              [
                "aon chù",
                "один собака (леніція)"
              ],
              [
                "dà chù",
                "два собаки (леніція)"
              ]
            ],
            "en": {
              "title": "Numerals + Lenition"
            }
          }
        ],
        "titleEn": "Counting Objects — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Seo\" (це) вказує на близьке, \"sin\" (те) — на середню відстань, \"siud\" — на дуже віддалене; йдуть після іменника з артиклем.",
            "en": {
              "text": "\"Seo\" (this) points to something near, \"sin\" (that) to a middle distance, \"siud\" to something very far; all follow the noun with the article."
            }
          },
          {
            "type": "table",
            "title": "an leabhar seo/sin/siud",
            "rows": [
              [
                "an leabhar seo",
                "ця книга"
              ],
              [
                "an leabhar sin",
                "та книга"
              ]
            ],
            "en": {
              "title": "an leabhar seo/sin/siud"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-clauses",
        "title": "Відносні речення — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносна частка \"a\" вводить означальне підрядне речення й спричиняє леніцію дієслова, подібно до ірландської прямої відносної форми.",
            "en": {
              "text": "The relative particle \"a\" introduces a relative clause and triggers lenition of the verb, similar to the Irish direct relative form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "An duine a chunnaic mi.",
                "Чоловік, якого я бачив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses — B1"
      },
      {
        "id": "possessive-adjectives-mutation",
        "title": "Присвійні прикметники й мутація — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен присвійний займенник спричиняє свою мутацію: mo/do — леніцію, a (його) — леніцію, a (її) — жодної.",
            "en": {
              "text": "Each possessive triggers its own mutation: mo/do — lenition, a (his) — lenition, a (her) — none."
            }
          },
          {
            "type": "table",
            "title": "a chù vs a cù",
            "rows": [
              [
                "a chù (його собака, леніція)",
                "його собака"
              ],
              [
                "a cù (її собака, без мутації)",
                "її собака"
              ]
            ],
            "en": {
              "title": "a chù vs a cù"
            }
          }
        ],
        "titleEn": "Possessive Adjectives and Mutation — A2"
      },
      {
        "id": "word-order-vso",
        "title": "Порядок слів VSO — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово завжди перше в реченні; для акценту на іншому елементі використовують копульну розщеплену конструкцію \"is e X a...\".",
            "en": {
              "text": "The verb is always first in the sentence; emphasizing another element requires a copular cleft construction \"is e X a...\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "'S mise a rinn e.",
                "Це саме я це зробив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "VSO Word Order — A2"
      },
      {
        "id": "reflexive-fhein",
        "title": "Зворотність через fhèin — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність і підсилення виражають словом \"fhèin\" (сам/себе) після займенника чи іменника.",
            "en": {
              "text": "Reflexivity and emphasis are expressed with the word \"fhèin\" (self) after a pronoun or noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rinn mi fhèin e.",
                "Я зробив це сам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexivity via fhèin — B1"
      },
      {
        "id": "adverbs-place",
        "title": "Прислівники місця — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники місця розрізняють перебування, рух до й рух від — трояка система, спільна з ірландською.",
            "en": {
              "text": "Place adverbs distinguish location, motion towards, and motion from — a three-way system shared with Irish."
            }
          },
          {
            "type": "table",
            "title": "an seo / ann / a-null",
            "rows": [
              [
                "an seo",
                "тут"
              ],
              [
                "ann",
                "там"
              ],
              [
                "dhachaigh",
                "додому (рух)"
              ]
            ],
            "en": {
              "title": "an seo / ann / a-null"
            }
          }
        ],
        "titleEn": "Adverbs of Place — A2"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Cò\" (хто) вживається для людей, \"dè\" (що) — для предметів.",
            "en": {
              "text": "\"Cò\" (who) is used for people, \"dè\" (what) for things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cò e sin?",
                "Хто це?"
              ],
              [
                "Dè tha seo?",
                "Що це?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Interrogative Pronouns — A1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядний сполучник \"gu\" (що) поєднується з незалежною формою дієслова, а не залежною.",
            "en": {
              "text": "The subordinating conjunction \"gu\" (that) combines with the independent verb form, not the dependent one."
            }
          },
          {
            "type": "table",
            "title": "agus / ach / gu",
            "rows": [
              [
                "agus",
                "і"
              ],
              [
                "ach",
                "але"
              ],
              [
                "gu",
                "що"
              ]
            ],
            "en": {
              "title": "agus / ach / gu"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "prepositions-simple",
        "title": "Прості прийменники — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прості прийменники часто спричиняють леніцію наступного слова.",
            "en": {
              "text": "Simple prepositions often trigger lenition of the following word."
            }
          },
          {
            "type": "table",
            "title": "air, ann an, le",
            "rows": [
              [
                "air a' bhòrd",
                "на столі"
              ],
              [
                "ann an Glaschu",
                "у Глазго"
              ]
            ],
            "en": {
              "title": "air, ann an, le"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують прикметник-префікс з іменником, причому префікс часто спричиняє леніцію.",
            "en": {
              "text": "Compound words often join a prefixed adjective with a noun, with the prefix often triggering lenition."
            }
          },
          {
            "type": "table",
            "title": "seann + taigh",
            "rows": [
              [
                "seann (старий) + taigh (дім) = seann-taigh",
                "старий дім"
              ]
            ],
            "en": {
              "title": "seann + taigh"
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
            "text": "Дні тижня переважно пов'язані з церковними назвами, подібно до ірландської.",
            "en": {
              "text": "The days of the week are mostly connected to church names, similar to Irish."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Diluain",
                "понеділок"
              ],
              [
                "Diciadain",
                "середа"
              ],
              [
                "Dihaoine",
                "п'ятниця"
              ],
              [
                "Didòmhnaich",
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
            "text": "Ряд назв місяців — питомі гельські слова, пов'язані з природними явищами, а не з латинськими богами.",
            "en": {
              "text": "Several month names are native Gaelic words connected to natural phenomena, not Latin gods."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Am Faoilleach",
                "січень"
              ],
              [
                "An Cèitean",
                "травень"
              ],
              [
                "An Lùnastal",
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
            "text": "Час запитують \"Dè an uair a tha e?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Dè an uair a tha e?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha e trì uairean.",
                "Зараз третя година."
              ],
              [
                "Coinnichidh sinn aig còig uairean.",
                "Ми зустрінемось о п'ятій."
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
            "text": "Кольори — звичайні прикметники, що стоять після іменника й можуть отримувати леніцію.",
            "en": {
              "text": "Colors are ordinary adjectives that follow the noun and can take lenition."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "geal/bàn",
                "білий"
              ],
              [
                "dubh",
                "чорний"
              ],
              [
                "dearg",
                "червоний"
              ],
              [
                "gorm",
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
            "text": "Родинні терміни часто відмінюються в родовому й вимагають леніції після присвійних займенників.",
            "en": {
              "text": "Kinship terms often decline in the genitive and take lenition after possessives."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "màthair",
                "мати"
              ],
              [
                "athair",
                "батько"
              ],
              [
                "piuthar",
                "сестра"
              ],
              [
                "bràthair",
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
            "text": "\"Ciamar a tha thu?\" (як справи?) — стандартне вітальне запитання, відповідь на яке — \"Tha gu math\" (добре).",
            "en": {
              "text": "\"Ciamar a tha thu?\" (how are you?) is the standard greeting question, answered with \"Tha gu math\" (I'm well)."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Madainn mhath!",
                "Доброго ранку!"
              ],
              [
                "Mar sin leat!",
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
        "id": "weather-tha",
        "title": "Погода через tha...a' — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують тією ж конструкцією \"tha...a'\", що й дію в теперішньому часі.",
            "en": {
              "text": "Weather is described with the same \"tha...a'\" construction used for present-tense action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha an t-uisge ann.",
                "Йде дощ."
              ],
              [
                "Tha e fuar a-muigh.",
                "Надворі холодно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Weather via tha...a' — A1"
      },
      {
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла часто мають жіночий рід і вимагають леніції після присвійного \"mo\".",
            "en": {
              "text": "Body parts are often feminine and take lenition after the possessive \"mo\"."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "làmh",
                "рука"
              ],
              [
                "ceann",
                "голова"
              ],
              [
                "cas",
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
            "text": "Вік виражають конструкцією \"tha X bliadhna a dh'aois\", буквально \"X років віку\".",
            "en": {
              "text": "Age is expressed with \"tha X bliadhna a dh'aois\", literally \"X years of age\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha mi fichead bliadhna a dh'aois.",
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
        "id": "dialectal-variation",
        "title": "Діалектна різноманітність — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Діалекти Льюїса, Скай і Аргайлу помітно різняться вимовою й лексикою; стандартної розмовної форми, як у деяких мовах, немає, хоча є писемний стандарт (Gàidhlig Ìomhaigh).",
            "en": {
              "text": "The dialects of Lewis, Skye, and Argyll differ noticeably in pronunciation and vocabulary; there's no standard spoken form as in some languages, though a written standard exists."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Вимова голосних значно варіюється між островами й материком.",
                "діалектна варіативність — жива риса мови"
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
        "id": "diminutives",
        "title": "Демінутив -an/-ag — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси -an (чоловічий) і -ag (жіночий) додають відтінок ніжності чи малого розміру.",
            "en": {
              "text": "The diminutive suffixes -an (masculine) and -ag (feminine) add tenderness or smallness."
            }
          },
          {
            "type": "table",
            "title": "cù → cuilean",
            "rows": [
              [
                "bòrd → bordan",
                "столик"
              ],
              [
                "caileag (від caile)",
                "дівчинка (з -ag)"
              ]
            ],
            "en": {
              "title": "cù → cuilean"
            }
          }
        ],
        "titleEn": "The Diminutive Suffixes -an/-ag — B1"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mas e do thoil e\" (будь ласка) буквально означає \"якщо це твоя воля\", підкреслюючи ввічливість через непряму умовну конструкцію.",
            "en": {
              "text": "\"Mas e do thoil e\" (please) literally means \"if it's your will\", emphasizing politeness through an indirect conditional construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cupa tì, mas e do thoil e.",
                "Чашку чаю, будь ласка."
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Гельські ідіоми часто спираються на непрямі конструкції з дієсловами стану, а не прямі твердження, як і в ірландській.",
            "en": {
              "text": "Gaelic idioms often rely on indirect constructions with verbs of state rather than direct statements, as in Irish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha an cat air an drochaid.",
                "Ситуація напружена (ідіоматично, букв. \"кіт на мосту\")."
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
        "id": "loanword-adaptation",
        "title": "Адаптація запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичення з англійської адаптуються до правила \"leathann ri leathann, caol ri caol\" і фонетично переписуються.",
            "en": {
              "text": "Loanwords from English are adapted to the \"leathann ri leathann, caol ri caol\" rule and respelled phonetically."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "telebhisean",
                "телебачення"
              ],
              [
                "baidhsagal (від bicycle)",
                "велосипед"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Adapting Loanwords — B1"
      },
      {
        "id": "diaspora-nova-scotia",
        "title": "Гельська діаспора Нової Шотландії — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через масову еміграцію XVIII-XIX ст. шотландська гельська досі має живу спільноту носіїв у канадській Новій Шотландії — унікальна риса серед кельтських мов, які зазвичай не мають значної діаспорної мовної спільноти.",
            "en": {
              "text": "Due to mass emigration in the 18th-19th centuries, Scottish Gaelic still has a living speaker community in Nova Scotia, Canada — a trait unusual among Celtic languages, which don't typically have a significant diaspora speech community."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cape Breton is Gàidhealtachd bheò fhathast an Canada.",
                "Кейп-Бретон досі живий гельськомовний регіон у Канаді."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Nova Scotia Gaelic Diaspora — B2"
      },
      {
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській, немає окремої ввічливої форми \"ви\" на противагу \"ти\" — вживають \"thu\" до всіх.",
            "en": {
              "text": "As in Irish, there's no separate polite \"you\" form opposed to informal \"you\" — \"thu\" is used with everyone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ciamar a tha thu?",
                "Як справи? (до будь-кого)"
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
        "id": "purpose-clause-gus",
        "title": "Цільове підрядне (gus) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Gus\" + віддієслівний іменник вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"Gus\" + verbal noun introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dh'ionnsaich mi Gàidhlig gus bruidhinn ri mo sheanair.",
                "Я вивчив гельську, щоб розмовляти з дідом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause with gus — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (oir/bhon) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Oir\" або \"bhon a\" (тому що) вводять причинове підрядне речення.",
            "en": {
              "text": "\"Oir\" or \"bhon a\" (because) introduce a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bha mi fadalach oir chaill mi am bus.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (oir/bhon) — B1"
      },
      {
        "id": "conditional-clause-nan-ma",
        "title": "Умовне підрядне (nan/ma) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Nan\" вводить нереальну умову (з леніцією), \"ma\" — реальну умову — розрізнення, якого немає в англійській, але подібне до ірландського dá.",
            "en": {
              "text": "\"Nan\" introduces an unreal condition (with lenition), \"ma\" a real condition — a distinction absent in English but similar to Irish's dá."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nam biodh ùine agam, rachainn ann.",
                "Якби я мав час, я б туди поїхав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clauses nan/ma — B1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Cuideigin\" (хтось) і \"rudeigin\" (щось) — базові неозначені займенники.",
            "en": {
              "text": "\"Cuideigin\" (someone) and \"rudeigin\" (something) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dh'fhòn cuideigin.",
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
            "text": "\"Duine sam bith\" (ніхто) і \"rud sam bith\" (нічого) вживаються лише в заперечному контексті.",
            "en": {
              "text": "\"Duine sam bith\" (no one) and \"rud sam bith\" (nothing) are used only in negative contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cha robh duine sam bith ann.",
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
        "id": "tag-question",
        "title": "Розділове питання (nach eil?) — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"nach eil?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"nach eil?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tha latha brèagha ann, nach eil?",
                "Гарний день, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tag Question nach eil? — B1"
      },
      {
        "id": "clan-surname-system",
        "title": "КлановА система прізвищ Mac/Nic — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Прізвища часто містять \"Mac\" (син) для чоловіків і \"Nic\" (дочка) для жінок, з мутацією наступного елемента — паралельно до ірландської системи Ó/Mac, але з іншою жіночою формою.",
            "en": {
              "text": "Surnames often contain \"Mac\" (son) for men and \"Nic\" (daughter) for women, with mutation of the following element — paralleling the Irish Ó/Mac system, but with a different feminine form."
            }
          },
          {
            "type": "table",
            "title": "MacDhòmhnaill / NicDhòmhnaill",
            "rows": [
              [
                "Iain MacDhòmhnaill (чол.)",
                "Іан МакДоналд"
              ],
              [
                "Mòrag NicDhòmhnaill (жін.)",
                "Мораг МакДоналд (жіноча форма)"
              ]
            ],
            "en": {
              "title": "MacDhòmhnaill / NicDhòmhnaill"
            }
          }
        ],
        "titleEn": "The Mac/Nic Surname System — B1"
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
                "Obh obh!",
                "Овва!"
              ],
              [
                "Mo chreach!",
                "Матінко моя! (букв. \"моя руїна\")"
              ]
            ],
            "en": {
              "title": "Common Interjections"
            }
          }
        ],
        "titleEn": "Interjections — A2"
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
            "text": "Кілька частовживаних дієслів (bi, abair, faic, dèan, faigh, rach, thig) мають настільки нерегулярні форми, що їх слід вивчати окремо, з окремими незалежними/залежними формами для кожного часу.",
            "en": {
              "text": "A few common verbs (bi, abair, faic, dèan, faigh, rach, thig) have forms so irregular that they must be learned individually, with distinct independent/dependent forms for every tense."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "rach (йти) → chaidh",
                "минулий час не за жодним регулярним правилом"
              ],
              [
                "faic (бачити) → chunnaic / faca",
                "різні незалежна/залежна форми"
              ]
            ],
            "en": {
              "title": "Irregular Forms"
            }
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "mutation-exceptions",
        "title": "Винятки в леніції — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Приголосні l, n, r ніколи не леніюються на письмі (навіть коли історично мали б), а d, t, s після означеного артикля жіночого роду мають особливі, непередбачувані правила.",
            "en": {
              "text": "The consonants l, n, r are never lenited in spelling (even where they historically would be), and d, t, s after the feminine definite article follow special, unpredictable rules."
            }
          },
          {
            "type": "table",
            "title": "Блокування леніції",
            "rows": [
              [
                "lagh (закон) → mo lagh",
                "не *mo lhagh — l не леніюється на письмі"
              ]
            ]
          }
        ],
        "titleEn": "Exceptions in Lenition Rules — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули зберігають архаїчні відмінкові форми або порядок слів, що вийшли із загального вжитку.",
            "en": {
              "text": "Some common formulas preserve archaic case forms or word order that have fallen out of general use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alba gu bràth!",
                "Шотландія навіки! (архаїчна конструкція)"
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
