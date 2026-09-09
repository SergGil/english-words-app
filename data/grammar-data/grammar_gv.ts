// Vymova — data/grammar-data/grammar_gv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Coadanyn Persoonagh — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Мангська вважалася вимерлою після смерті останнього природного носія 1974 року, але завдяки цілеспрямованому відродженню сьогодні має нове покоління носіїв.",
            "en": {
              "text": "Manx was considered extinct after its last native speaker died in 1974, but a deliberate revival has given it a new generation of speakers today."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mee"
              ],
              [
                "ти",
                "oo"
              ],
              [
                "він / вона",
                "eh / ee"
              ],
              [
                "ми",
                "shin"
              ],
              [
                "ви",
                "shiu"
              ],
              [
                "вони",
                "ad"
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
        "id": "ta-vs-she",
        "title": "Ta vs She — два дієслова \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській та шотландській гельській, мангська має два дієслова \"бути\": \"ta\" для стану й місця, \"she\" (копула) для тотожності — але записані за англійськими правилами правопису.",
            "en": {
              "text": "As in Irish and Scottish Gaelic, Manx has two verbs \"to be\": \"ta\" for state and location, \"she\" (the copula) for identity — but spelled according to English orthographic conventions."
            }
          },
          {
            "type": "table",
            "title": "ta (стан) vs she (тотожність)",
            "rows": [
              [
                "Ta mee skee.",
                "Я втомлений. (стан, ta)"
              ],
              [
                "She sailliagh mee.",
                "Я моряк. (тотожність, she)"
              ]
            ],
            "en": {
              "title": "ta (state) vs she (identity)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta eh ayns shen.",
                "Він там."
              ],
              [
                "She Manninagh ee.",
                "Вона мангька."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ta vs She — Two Verbs \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з cha — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"cha\" (не), як і в шотландській гельській (не \"ní\", як в ірландській), і спричиняє леніцію наступного дієслова.",
            "en": {
              "text": "Negation is formed with the particle \"cha\" (not), as in Scottish Gaelic (not \"ní\" as in Irish), and triggers lenition of the following verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ta mee ayns shen.",
                "Cha nel mee ayns shen.",
                "Я там → я не там (ta+cha = cha nel)"
              ],
              [
                "She sailliagh mee.",
                "Cha nee sailliagh mee.",
                "Я моряк → я не моряк"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cha nel mee skee.",
                "Я не втомлений."
              ],
              [
                "Cha vel ee loayrt Gaelg.",
                "Вона не розмовляє мангською."
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
        "id": "questions-no-yes-no",
        "title": "Питання без слів \"так/ні\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській та шотландській гельській, у мангській немає окремих слів для \"так\"/\"ні\" — на загальне питання відповідають повторенням дієслова.",
            "en": {
              "text": "As in Irish and Scottish Gaelic, Manx has no separate words for \"yes\"/\"no\" — a yes/no question is answered by repeating the verb."
            }
          },
          {
            "type": "table",
            "title": "Питання й відповідь",
            "rows": [
              [
                "Vel oo skee?",
                "Ти втомлений?"
              ],
              [
                "Ta. / Cha nel.",
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
                "Cre'n aght t'ou?",
                "Як справи?"
              ],
              [
                "Quoi t'ayd?",
                "Хто це? (буквально \"хто в тебе?\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions without Words for \"Yes/No\" — A1"
      },
      {
        "id": "english-based-orthography",
        "title": "Правопис за англійськими зразками — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Найвиразніша відмінність мангської від ірландської й шотландської гельської: її записали англомовні священники за нормами англійського правопису, тому те саме слово виглядає геть інакше на письмі, хоча вимова близька до сестринських мов.",
            "en": {
              "text": "The most striking difference between Manx and Irish/Scottish Gaelic: it was written down by English-speaking clergy using English spelling conventions, so the same word looks completely different on the page even though pronunciation is close to its sister languages."
            }
          },
          {
            "type": "table",
            "title": "Мангська vs ірландська/шотландська",
            "rows": [
              [
                "Gaelg (мангська)",
                "Gaeilge/Gàidhlig (ірл./шотл.) — та сама назва мови"
              ],
              [
                "oie vie (добраніч)",
                "написання за англійськими звичками, вимова гельська"
              ]
            ],
            "en": {
              "title": "Manx vs Irish/Scottish"
            }
          }
        ],
        "titleEn": "English-Based Orthography — A2"
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
            "text": "Як і в шотландській гельській, мангська не має синтетичного теперішнього часу: теперішнє виражають конструкцією \"ta...g'\" + віддієслівний іменник (тривалий вид).",
            "en": {
              "text": "As in Scottish Gaelic, Manx has no synthetic present tense: the present is expressed with the construction \"ta...g'\" + verbal noun (continuous aspect)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta mee g'insh.",
                "Я говорю (буквально \"я в говорінні\")."
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
        "title": "Майбутній час (-ee/-agh) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється закінченням, доданим до кореня дієслова; ця форма також часто виражає загальну істину.",
            "en": {
              "text": "The future tense is formed with an ending added to the verb root; this form also often expresses a general truth."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Loayree mee rhyt mairagh.",
                "Я поговорю з тобою завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense (-ee/-agh) — A2"
      },
      {
        "id": "past-tense",
        "title": "Минулий час (леніція кореня) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється леніцією першого приголосного кореня, подібно до ірландської й шотландської гельської, хоча позначення на письмі часто відрізняється через англізований правопис.",
            "en": {
              "text": "The past tense is formed by lenition of the root's first consonant, similar to Irish and Scottish Gaelic, though its spelling often differs due to the Anglicized orthography."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Loayr mee rish.",
                "Я поговорив з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Tense (Root Lenition) — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється закінченням разом із леніцією кореня, подібно до майбутнього часу, але з окремою формою.",
            "en": {
              "text": "The conditional is formed with an ending together with lenition of the root, similar to the future but with a distinct form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Loayrin rhyt dy row traa aym.",
                "Я поговорив би з тобою, якби мав час."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова; для множини додається -jee.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem; the plural adds -jee."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Loayr!",
                "Говори!"
              ],
              [
                "Loayrjee!",
                "Говоріть! (мн.)"
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
        "id": "perfect-er",
        "title": "Перфект через er — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Недавно завершену дію виражають конструкцією \"ta + підмет + er + віддієслівний іменник\" — той самий принцип, що й ірландське \"tar éis\" чи шотландське \"air\", але зі своїм англізованим словом \"er\".",
            "en": {
              "text": "A recently completed action is expressed with \"ta + subject + er + verbal noun\" — the same principle as Irish \"tar éis\" or Scottish \"air\", but with its own Anglicized word \"er\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta mee er ve jeant.",
                "Я щойно зробив (це)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect via er — B1"
      },
      {
        "id": "pluperfect-er",
        "title": "Плюсквамперфект через er — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама конструкція з \"er\" у минулому часі допоміжного дієслова виражає плюсквамперфект.",
            "en": {
              "text": "The same \"er\" construction with the auxiliary in the past tense expresses the pluperfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Va mee er jeant eh roish.",
                "Я вже був зробив це раніше."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pluperfect via er — B1"
      },
      {
        "id": "passive-impersonal",
        "title": "Безособова форма — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Замість справжнього пасивного стану вживають безособову форму, яка не вказує на конкретного виконавця дії, подібно до ірландського автономного дієслова.",
            "en": {
              "text": "Instead of a true passive, an impersonal form is used that doesn't specify a particular doer, similar to the Irish autonomous verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Va'n thie troggit.",
                "Дім був побудований. (безособова конструкція з дієприкметником)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Impersonal Form — B1"
      },
      {
        "id": "dependent-independent-forms",
        "title": "Залежні й незалежні форми дієслова — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській та шотландській, деякі дієслова мають окрему форму після часток заперечення/питання, відмінну від стверджувальної форми.",
            "en": {
              "text": "As in Irish and Scottish Gaelic, some verbs have a distinct form after negation/question particles, different from the affirmative form."
            }
          },
          {
            "type": "table",
            "title": "Незалежна vs залежна",
            "rows": [
              [
                "Va mee ayns shen.",
                "Row oo ayns shen?",
                "Я був там (незалежна) → чи ти був там? (залежна)"
              ]
            ]
          }
        ],
        "titleEn": "Dependent and Independent Verb Forms — B2"
      },
      {
        "id": "verbal-noun",
        "title": "Віддієслівний іменник — B1",
        "emoji": "📛",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого інфінітива вживають віддієслівний іменник, який утворюється непередбачувано для кожного дієслова, як і в ірландській та шотландській.",
            "en": {
              "text": "Instead of a separate infinitive, a verbal noun is used, formed unpredictably for each verb, as in Irish and Scottish Gaelic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta mee laccal gynsagh Gaelg.",
                "Я хочу вивчити мангську."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verbal Noun — B1"
      },
      {
        "id": "modal-constructions",
        "title": "Модальні конструкції — A2",
        "emoji": "🎛️",
        "sections": [
          {
            "type": "intro",
            "text": "Модальність часто виражають безособовими конструкціями, як \"foddee lhiam\" (я можу, букв. \"можливо зі мною\"), а не окремим особовим модальним дієсловом.",
            "en": {
              "text": "Modality is often expressed with impersonal constructions, like \"foddee lhiam\" (I can, literally \"possible with me\"), rather than a separate personal modal verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Foddym Gaelg y loayrt.",
                "Я можу говорити мангською."
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
        "id": "relative-future",
        "title": "Відносна майбутня форма — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Після відносної частки дієслово в майбутньому часі отримує леніцію — окрема відносна форма, як і в сестринських мовах.",
            "en": {
              "text": "After the relative particle, the future-tense verb takes lenition — a separate relative form, as in the sister languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yn dooinney vees loayrt rhym.",
                "Людина, яка говоритиме зі мною."
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
        "id": "habitual-bio",
        "title": "Звична дія (bio) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Форма \"bio\" (від дієслова \"бути\") вживається для звичної, регулярної дії, подібно до шотландського \"bidh\".",
            "en": {
              "text": "The form \"bio\" (from the verb \"to be\") is used for a habitual, regular action, similar to Scottish Gaelic \"bidh\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bio mee gobbraghey dagh laa.",
                "Я зазвичай працюю щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect (bio) — B1"
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
        "id": "surname-erosion",
        "title": "Ерозія прізвищ Mac- — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від ірландської системи Ó/Mac чи шотландської Mac/Nic, мангські прізвища втратили видимий префікс Mac- через століття англізації — \"Mac Suibhne\" перетворилося на просте \"Swain\" чи \"Quayle\".",
            "en": {
              "text": "Unlike the Irish Ó/Mac or Scottish Mac/Nic system, Manx surnames lost their visible Mac- prefix through centuries of Anglicization — \"Mac Suibhne\" became simply \"Swain\" or \"Quayle\"."
            }
          },
          {
            "type": "table",
            "title": "Ерозія префікса",
            "rows": [
              [
                "Mac Ualraig → Qualtrough",
                "прізвище зберегло лише слід префікса"
              ],
              [
                "Mac Niall → Kneale",
                "префікс Mac- повністю зник"
              ]
            ],
            "en": {
              "title": "Prefix Erosion"
            }
          }
        ],
        "titleEn": "The Erosion of Mac- Surnames — B1"
      },
      {
        "id": "case-genitive",
        "title": "Родовий відмінок — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок у мангській зберігся слабше, ніж в ірландській: часто його замінює прийменникова конструкція замість зміни форми іменника.",
            "en": {
              "text": "The genitive case is weaker in Manx than in Irish: it's often replaced by a prepositional construction instead of changing the noun's form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "doarlish y dorrys",
                "ручка дверей (родовий ще зберігається в застиглих виразах)"
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
        "id": "definite-article-yn",
        "title": "Означений артикль yn — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль \"yn\" спричиняє леніцію іменників жіночого роду, подібно до ірландського \"an\" і шотландського \"an/am\".",
            "en": {
              "text": "The definite article \"yn\" triggers lenition of feminine nouns, similar to Irish \"an\" and Scottish \"an/am\"."
            }
          },
          {
            "type": "table",
            "title": "yn + леніція",
            "rows": [
              [
                "ben → yn ven",
                "жінка → ця жінка (леніція)"
              ]
            ],
            "en": {
              "title": "yn + lenition"
            }
          }
        ],
        "titleEn": "The Definite Article yn — A2"
      },
      {
        "id": "lenition-triggers",
        "title": "Тригери леніції — B1",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "Леніцію спричиняють присвійні \"my/dty\" (мій/твій), частка заперечення \"cha\" і багато інших граматичних слів, подібно до ірландської та шотландської.",
            "en": {
              "text": "Lenition is triggered by the possessives \"my/dty\" (my/your), the negation particle \"cha\", and many other grammatical words, similar to Irish and Scottish."
            }
          },
          {
            "type": "table",
            "title": "my + леніція",
            "rows": [
              [
                "coo (собака) → my choo",
                "мій собака"
              ]
            ],
            "en": {
              "title": "my + lenition"
            }
          }
        ],
        "titleEn": "Lenition Triggers — B1"
      },
      {
        "id": "no-eclipsis",
        "title": "Відсутність еклипсису — A2",
        "emoji": "🌑",
        "sections": [
          {
            "type": "intro",
            "text": "Як і шотландська гельська (але на відміну від ірландської), мангська не зберегла систему еклипсису — леніція майже єдиний продуктивний тип мутації.",
            "en": {
              "text": "Like Scottish Gaelic (but unlike Irish), Manx has not kept the eclipsis system — lenition is almost the only productive mutation type."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Нема систематичного озвучення приголосних після прийменників, як в ірландській еклипсис.",
                "риса, спільна з шотландською, відмінна від ірландської"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absence of Eclipsis — A2"
      },
      {
        "id": "spelling-hides-broad-slender",
        "title": "Правопис приховує широкі/вузькі приголосні — B2",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від ірландської й шотландської, де правило \"leathann ri leathann, caol ri caol\" видно прямо в написанні, англізований правопис мангської часто НЕ показує цього узгодження голосних на письмі, хоча воно все ще існує у вимові.",
            "en": {
              "text": "Unlike Irish and Scottish Gaelic, where the \"broad with broad, slender with slender\" rule is visible directly in spelling, Manx's Anglicized orthography often does NOT show this vowel agreement in writing, even though it still exists in pronunciation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Слова, які в ірландській чи шотландській мали б прозору caol/leathan структуру, в мангській пишуться за англійськими звичками без цього сигналу.",
                "ключова причина, чому мангська виглядає зовсім інакше на письмі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Spelling Hides Broad/Slender Consonants — B2"
      },
      {
        "id": "prepositional-pronouns",
        "title": "Прийменникові займенники — A2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і особовий займенник зливаються в одну форму, як і в ірландській та шотландській, але з власним англізованим написанням.",
            "en": {
              "text": "A preposition and personal pronoun fuse into a single form, as in Irish and Scottish, but with its own Anglicized spelling."
            }
          },
          {
            "type": "table",
            "title": "ec (у/при) + займенник",
            "rows": [
              [
                "aym",
                "у мене"
              ],
              [
                "ayd",
                "у тебе"
              ],
              [
                "echey",
                "у нього"
              ]
            ],
            "en": {
              "title": "ec (at) + pronoun"
            }
          }
        ],
        "titleEn": "Prepositional Pronouns — A2"
      },
      {
        "id": "possession-ta-ec",
        "title": "Присвійність через ta...ec — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Немає дієслова \"мати\": володіння виражається конструкцією \"ta X ec Y\" — буквально \"X є при Y\", з прийменником \"ec\" замість ірландського \"ag\" чи шотландського \"aig\".",
            "en": {
              "text": "There's no verb \"to have\": possession is expressed with \"ta X ec Y\" — literally \"X is at Y\", with the preposition \"ec\" instead of Irish \"ag\" or Scottish \"aig\"."
            }
          },
          {
            "type": "formula",
            "title": "ta X aym = я маю X",
            "rows": [
              [
                "Ta coo aym.",
                "У мене є собака.",
                "ta + coo (X) + aym (у мене)"
              ]
            ]
          }
        ],
        "titleEn": "Possession via ta...ec — A1"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома способами: закінченнями (-yn, -aghyn) або зміною внутрішнього голосного.",
            "en": {
              "text": "The plural is formed in several ways: endings (-yn, -aghyn) or an internal vowel change."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "thie → thieyn",
                "доми"
              ],
              [
                "cabbyl → cabbil",
                "коні"
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
            "text": "Прикметник стоїть після іменника й отримує леніцію після іменника жіночого роду, як і в сестринських мовах.",
            "en": {
              "text": "The adjective follows the noun and takes lenition after a feminine noun, as in the sister languages."
            }
          },
          {
            "type": "table",
            "title": "coo mooar, ben vooar",
            "rows": [
              [
                "coo mooar (ч.р.)",
                "великий собака"
              ],
              [
                "ben vooar (ж.р., леніція)",
                "велика жінка"
              ]
            ],
            "en": {
              "title": "coo mooar, ben vooar"
            }
          }
        ],
        "titleEn": "The Adjective after the Noun — A1"
      },
      {
        "id": "comparative-smoo",
        "title": "Порівняльний ступінь (smoo) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється словом \"smoo\" перед прикметником, подібно до ірландського \"níos\" чи шотландського \"nas\".",
            "en": {
              "text": "The comparative is formed with the word \"smoo\" before the adjective, similar to Irish \"níos\" or Scottish \"nas\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "She smoo mooar eh.",
                "Він більший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Degree (smoo) — A2"
      },
      {
        "id": "superlative-smoo",
        "title": "Найвищий ступінь — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь часто утворюється тією ж конструкцією з означеним артиклем перед нею.",
            "en": {
              "text": "The superlative is often formed with the same construction, with the definite article placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yn smoo mooar.",
                "Найбільший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative Degree — A2"
      },
      {
        "id": "emphatic-pronoun-suffixes",
        "title": "Емфатичні суфікси займенників — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси, додані до займенника чи присвійного слова, підкреслюють контраст — \"саме мій\", а не чийсь інший, подібно до ірландської та шотландської.",
            "en": {
              "text": "Suffixes added to a pronoun or possessive emphasize a contrast — \"my own, specifically\", similar to Irish and Scottish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mish",
                "саме я"
              ],
              [
                "oo hene",
                "ти сам"
              ]
            ],
            "en": {
              "title": "Examples"
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
            "text": "Людей рахують окремими особовими числівниками, відмінними від звичайних числівників, подібно до ірландської та шотландської.",
            "en": {
              "text": "People are counted with special personal numerals, distinct from ordinary numerals, similar to Irish and Scottish."
            }
          },
          {
            "type": "table",
            "title": "Особові числівники",
            "rows": [
              [
                "un pheiagh",
                "одна людина"
              ],
              [
                "daa pheiagh",
                "дві людини"
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
                "un choo",
                "один собака (леніція)"
              ],
              [
                "daa choo",
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
            "text": "\"Shoh\" (це) вказує на близьке, \"shen\" (те) — на віддалене; обидва йдуть після іменника з артиклем.",
            "en": {
              "text": "\"Shoh\" (this) points to something near, \"shen\" (that) to something distant; both follow the noun with the article."
            }
          },
          {
            "type": "table",
            "title": "yn lioar shoh/shen",
            "rows": [
              [
                "yn lioar shoh",
                "ця книга"
              ],
              [
                "yn lioar shen",
                "та книга"
              ]
            ],
            "en": {
              "title": "yn lioar shoh/shen"
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
            "text": "Відносна частка вводить означальне підрядне речення й спричиняє леніцію дієслова, подібно до ірландської та шотландської.",
            "en": {
              "text": "The relative particle introduces a relative clause and triggers lenition of the verb, similar to Irish and Scottish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yn dooinney honnick mee.",
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
            "text": "Кожен присвійний займенник спричиняє свою мутацію: my/dty — леніцію, e (його) — леніцію, e (її) — жодної.",
            "en": {
              "text": "Each possessive triggers its own mutation: my/dty — lenition, e (his) — lenition, e (her) — none."
            }
          },
          {
            "type": "table",
            "title": "e chrav vs e crav",
            "rows": [
              [
                "e chabbyl (його кінь, леніція)",
                "його кінь"
              ],
              [
                "e cabbyl (її кінь, без мутації)",
                "її кінь"
              ]
            ],
            "en": {
              "title": "e chabbyl vs e cabbyl"
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
            "text": "Дієслово завжди перше в реченні, як і в ірландській та шотландській гельській.",
            "en": {
              "text": "The verb is always first in the sentence, as in Irish and Scottish Gaelic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta mee gynsagh Gaelg.",
                "Я вивчаю мангську."
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
        "id": "reflexive-hene",
        "title": "Зворотність через hene — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність і підсилення виражають словом \"hene\" (сам/себе) після займенника чи іменника, подібно до ірландського \"féin\" і шотландського \"fhèin\".",
            "en": {
              "text": "Reflexivity and emphasis are expressed with the word \"hene\" (self) after a pronoun or noun, similar to Irish \"féin\" and Scottish \"fhèin\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ren mee eh mee hene.",
                "Я зробив це сам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexivity via hene — B1"
      },
      {
        "id": "adverbs-place",
        "title": "Прислівники місця — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники місця розрізняють перебування й рух, подібно до ірландської та шотландської.",
            "en": {
              "text": "Place adverbs distinguish location and motion, similar to Irish and Scottish."
            }
          },
          {
            "type": "table",
            "title": "ayns shoh / dy valley",
            "rows": [
              [
                "ayns shoh",
                "тут"
              ],
              [
                "dy valley",
                "додому (рух)"
              ]
            ],
            "en": {
              "title": "ayns shoh / dy valley"
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
            "text": "\"Quoi\" (хто) вживається для людей, \"cre\" (що) — для предметів.",
            "en": {
              "text": "\"Quoi\" (who) is used for people, \"cre\" (what) for things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Quoi eh shen?",
                "Хто це?"
              ],
              [
                "Cre shoh?",
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
            "text": "Підрядний сполучник \"dy\" (що) поєднується з незалежною формою дієслова.",
            "en": {
              "text": "The subordinating conjunction \"dy\" (that) combines with the independent verb form."
            }
          },
          {
            "type": "table",
            "title": "as / agh / dy",
            "rows": [
              [
                "as",
                "і"
              ],
              [
                "agh",
                "але"
              ],
              [
                "dy",
                "що"
              ]
            ],
            "en": {
              "title": "as / agh / dy"
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
            "title": "er, ayns, lesh",
            "rows": [
              [
                "er yn voayrd",
                "на столі"
              ],
              [
                "ayns Doolish",
                "у Дугласі"
              ]
            ],
            "en": {
              "title": "er, ayns, lesh"
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
            "title": "shenn + thie",
            "rows": [
              [
                "shenn (старий) + thie (дім) = shenn-thie",
                "старий дім"
              ]
            ],
            "en": {
              "title": "shenn + thie"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "yn-cheshaght-ghailckagh",
        "title": "Yn Cheshaght Ghailckagh — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Засноване 1899 р. Товариство мангської мови (Yn Cheshaght Ghailckagh) записувало останніх природних носіїв задовго до 1974 р. і досі залишається головною організацією, що курує відродження — рідкісний приклад мовного товариства, що пережило \"смерть\" своєї мови й допомогло її повернути.",
            "en": {
              "text": "Founded in 1899, the Manx Language Society (Yn Cheshaght Ghailckagh) recorded the last native speakers long before 1974 and remains the main organization overseeing the revival — a rare example of a language society outliving its language's \"death\" and helping bring it back."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Товариство організовує класи, публікації й культурні заходи мангською мовою.",
                "безперервна діяльність понад століття"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yn Cheshaght Ghailckagh (the Manx Language Society) — B2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня переважно пов'язані з церковними назвами, подібно до ірландської та шотландської.",
            "en": {
              "text": "The days of the week are mostly connected to church names, similar to Irish and Scottish."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Jelune",
                "понеділок"
              ],
              [
                "Jecrean",
                "середа"
              ],
              [
                "Jeheiney",
                "п'ятниця"
              ],
              [
                "Jedoonee",
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
            "text": "Кілька питомих назв місяців пов'язані з сільськогосподарським циклом острова, на відміну від повністю запозичених латинських назв.",
            "en": {
              "text": "Several native month names are tied to the island's agricultural cycle, unlike fully borrowed Latin names."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Jerrey Geuree (січень)",
                "\"кінець зими\""
              ],
              [
                "Mee Houney (листопад)",
                "місяць Самайну"
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
            "text": "Час запитують \"Cre'n traa t'eh?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Cre'n traa t'eh?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta'n clag three.",
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
                "bane",
                "білий"
              ],
              [
                "doo",
                "чорний"
              ],
              [
                "jiarg",
                "червоний"
              ],
              [
                "gorrym",
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
            "text": "Родинні терміни — звичайні іменники, часто вимагають леніції після присвійних займенників.",
            "en": {
              "text": "Kinship terms are ordinary nouns, often taking lenition after possessives."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "moir",
                "мати"
              ],
              [
                "ayr",
                "батько"
              ],
              [
                "shuyr",
                "сестра"
              ],
              [
                "braar",
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
            "text": "\"Kys t'ou?\" (як справи?) — стандартне привітання, відповідь на яке — \"Ta mee braew\" (я добре).",
            "en": {
              "text": "\"Kys t'ou?\" (how are you?) is the standard greeting, answered with \"Ta mee braew\" (I'm well)."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Moghrey mie!",
                "Доброго ранку!"
              ],
              [
                "Slane lhiat!",
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
        "id": "weather-ta",
        "title": "Погода через ta — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують тією ж конструкцією \"ta...g'\", що й дію в теперішньому часі.",
            "en": {
              "text": "Weather is described with the same \"ta...g'\" construction used for present-tense action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta fliaghey ayn.",
                "Йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Weather via ta — A1"
      },
      {
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла часто мають жіночий рід і вимагають леніції після присвійного \"my\".",
            "en": {
              "text": "Body parts are often feminine and take lenition after the possessive \"my\"."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "laue",
                "рука"
              ],
              [
                "kione",
                "голова"
              ],
              [
                "cass",
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
            "text": "Вік виражають конструкцією \"ta X bleeaney d'eash\", буквально \"X років віку\".",
            "en": {
              "text": "Age is expressed with \"ta X bleeaney d'eash\", literally \"X years of age\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta mee feed bleeaney d'eash.",
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
        "id": "extinction-1974",
        "title": "Зникнення останнього носія 1974 р. — B2",
        "emoji": "💔",
        "sections": [
          {
            "type": "intro",
            "text": "Нед Маддрелл, рибалка з села Крегнеш, вважався останнім носієм мангської мови з дитинства; його смерть 1974 року часто позначають як \"зникнення\" мови в класичному, неперервному розумінні.",
            "en": {
              "text": "Ned Maddrell, a fisherman from the village of Cregneash, was considered the last childhood-native speaker of Manx; his death in 1974 is often marked as the \"extinction\" of the language in the classical, unbroken sense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Записи голосу Неда Маддрелла збереглися і стали основою для відродження вимови.",
                "аудіозаписи 1940-50-х рр. — ключове джерело для сучасних носіїв"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1974 Extinction of the Last Native Speaker — B2"
      },
      {
        "id": "revival-movement",
        "title": "Рух відродження — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Завдяки архівним записам, ентузіастам і товариству Yn Cheshaght Ghailckagh мангська мова здобула нове, повністю вивчене покоління носіїв — рідкісний приклад \"реанімації\" мови після повного зникнення природного передавання від батьків до дітей.",
            "en": {
              "text": "Thanks to archival recordings, enthusiasts, and the Yn Cheshaght Ghailckagh society, Manx gained a new, entirely learned generation of speakers — a rare example of a language being \"revived\" after the natural parent-to-child transmission chain fully broke."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bunscoill Ghaelgagh — початкова школа, де навчання ведеться повністю мангською.",
                "перша мангськомовна школа відкрилась 2001 р."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Revival Movement — B2"
      },
      {
        "id": "diminutives",
        "title": "Демінутив — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси додають відтінок ніжності чи малого розміру, часто у звертанні до дітей чи улюбленців.",
            "en": {
              "text": "Diminutive suffixes add tenderness or smallness, often used when addressing children or pets."
            }
          },
          {
            "type": "table",
            "title": "coo → cooag",
            "rows": [
              [
                "coo (собака) → cooag",
                "песик"
              ]
            ],
            "en": {
              "title": "coo → cooag"
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
            "text": "Немає окремої ввічливої форми \"ви\": вживають \"oo\" до всіх, а ввічливість передають лексично.",
            "en": {
              "text": "There's no separate polite \"you\" form: \"oo\" is used with everyone, and politeness is conveyed lexically."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "My saillt.",
                "Будь ласка (букв. \"якщо твоя воля\")."
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
                "Ooilley cha!",
                "Овва!/Оце так!"
              ],
              [
                "Gura mie ayd!",
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
        "id": "english-loanword-depth",
        "title": "Глибина англійських запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через тривалий і тісний контакт з англійською мангська запозичила не лише слова, а й деякі синтаксичні кальки, глибше, ніж ірландська чи шотландська з їхніми мовами-сусідками.",
            "en": {
              "text": "Due to long, close contact with English, Manx borrowed not just words but some syntactic calques, more deeply than Irish or Scottish did from their neighboring languages."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "boy (від англ.)",
                "хлопчик (замість питомого слова в розмовній мові)"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The Depth of English Loanwords — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Мангські ідіоми часто спираються на море й рибальство — центральні елементи традиційного життя острова.",
            "en": {
              "text": "Manx idioms often draw on the sea and fishing — central elements of traditional island life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Traa dy liooar.",
                "Досить часу (відома мангська філософія \"не поспішай\")."
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
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в ірландській та шотландській, немає окремої граматичної ввічливої форми \"ви\".",
            "en": {
              "text": "As in Irish and Scottish, there's no separate grammatical polite \"you\" form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kys t'ou, y ghooinney?",
                "Як справи, чоловіче?"
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
        "id": "purpose-clause",
        "title": "Цільове підрядне (dy) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Dy\" + віддієслівний іменник вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"Dy\" + verbal noun introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ren mee gynsagh Gaelg dy loayrt rish my shenn ayr.",
                "Я вивчив мангську, щоб говорити з дідом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (dy) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (er yn oyr dy) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Er yn oyr dy\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Er yn oyr dy\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Va mee anmagh er yn oyr dy vaik mee yn bus.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (er yn oyr dy) — B1"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (dy row) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Dy row\" (якби) вводить нереальну умову.",
            "en": {
              "text": "\"Dy row\" (if it were) introduces an unreal condition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dy row traa aym, hem ayn.",
                "Якби я мав час, я б туди поїхав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (dy row) — B1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Peiagh ennagh\" (хтось) і \"red ennagh\" (щось) — базові неозначені займенники.",
            "en": {
              "text": "\"Peiagh ennagh\" (someone) and \"red ennagh\" (something) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ren peiagh ennagh geamagh.",
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
            "text": "\"Peiagh erbee\" (ніхто) і \"red erbee\" (нічого) вживаються лише в заперечному контексті.",
            "en": {
              "text": "\"Peiagh erbee\" (no one) and \"red erbee\" (nothing) are used only in negative contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cha row peiagh erbee ayn.",
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
        "title": "Розділове питання (nagh vel?) — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"nagh vel?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"nagh vel?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ta laa aalin ayn jiu, nagh vel?",
                "Гарний сьогодні день, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tag Question nagh vel? — B1"
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
            "text": "Кілька частовживаних дієслів (ve-бути, goll-йти, cheet-приходити, jannoo-робити) мають настільки нерегулярні форми, що їх слід вивчати окремо, з окремими незалежними/залежними формами для кожного часу.",
            "en": {
              "text": "A few common verbs (ve-to be, goll-to go, cheet-to come, jannoo-to do) have forms so irregular that they must be learned individually, with distinct independent/dependent forms for every tense."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "goll (йти) → hie",
                "минулий час не за жодним регулярним правилом"
              ],
              [
                "jannoo (робити) → ren",
                "суплетивна форма"
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
        "id": "mutation-spelling-mismatch",
        "title": "Розбіжність мутації й написання — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Через англізований правопис деякі леніційні зміни, регулярні у вимові, непослідовно чи взагалі не позначаються на письмі — на відміну від ірландської й шотландської, де мутація завжди видима в тексті.",
            "en": {
              "text": "Due to the Anglicized orthography, some lenition changes that are regular in pronunciation are inconsistently marked or not marked at all in writing — unlike Irish and Scottish, where mutation is always visible in the text."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі леніційні форми виглядають ідентично неленітованим на письмі, хоча вимовляються по-різному.",
                "потрібно знати вимову напам'ять, а не покладатися лише на текст"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mismatch between Mutation and Spelling — B2"
      },
      {
        "id": "revival-era-neologisms",
        "title": "Неологізми доби відродження — B2",
        "emoji": "🆕",
        "sections": [
          {
            "type": "intro",
            "text": "Для понять, яких не існувало в 1970-х (комп'ютер, інтернет), рух відродження створив нові слова, що не підкоряються історичним словотвірним моделям і іноді конкурують між собою.",
            "en": {
              "text": "For concepts that didn't exist in the 1970s (computer, internet), the revival movement coined new words that don't follow historical word-formation patterns and sometimes compete with each other."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "co-earrooder (комп'ютер, буквально \"спів-числівник\")",
                "неологізм, створений мовцями-відроджувачами, а не успадкований"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Revival-Era Neologisms — B2"
      }
    ]
  }
];
