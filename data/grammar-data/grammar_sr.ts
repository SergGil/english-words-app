// Vymova — data/grammar-data/grammar_sr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SR: GrammarCategory[] = [
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
            "text": "Сербські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Serbian verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ја",
                "я"
              ],
              [
                "ти",
                "ти"
              ],
              [
                "он / она / оно",
                "він / вона / воно"
              ],
              [
                "ми",
                "ми"
              ],
              [
                "они / оне",
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
                "Ја сам учитељ.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"бити\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Бити\" відмінюється схоже на українське \"бути\" й активно використовується і як зв'язка, і в складених минулих часах.",
            "en": {
              "text": "\"Бити\" conjugates similarly to Ukrainian \"бути\" and is actively used both as a copula and in compound past tenses."
            }
          },
          {
            "type": "formula",
            "title": "\"бити\" (бути) — садашње време",
            "rows": [
              [
                "ја",
                "сам",
                "я є"
              ],
              [
                "ти",
                "си",
                "ти є"
              ],
              [
                "он / она / оно",
                "је",
                "він/вона/воно є"
              ],
              [
                "ми",
                "смо",
                "ми є"
              ],
              [
                "ви",
                "сте",
                "ви є"
              ],
              [
                "они / оне",
                "су",
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
                "Она је лекарка.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Бити (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"не\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка не ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "The negative particle не goes directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Знам.",
                "Не знам.",
                "Я знаю. / Я не знаю."
              ],
              [
                "Он долази.",
                "Он не долази.",
                "Він приходить. / Він не приходить."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Он није дошао.",
                "Він не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Не — A1"
      },
      {
        "id": "questions",
        "title": "Питання з \"ли\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою ли одразу після дієслова (або конструкцією \"да ли\" на початку речення).",
            "en": {
              "text": "Yes/no questions are often formed with the particle ли right after the verb (or the \"да ли\" construction at the start of the sentence)."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Ти си уморан.",
                "Да ли си уморан?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Имаш времена.",
                "Да ли имаш времена?",
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
                "Имаш ли времена?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Ли — A1"
      },
      {
        "id": "cases",
        "title": "Сім відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Сербські іменники, як і українські, змінюються за сімома відмінками — закінчення показують роль слова в реченні.",
            "en": {
              "text": "Serbian nouns, like Ukrainian ones, decline through seven cases — the ending shows a word's role in the sentence."
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
                "Видим пса.",
                "Я бачу собаку (знахідний відмінок від \"пас\")."
              ]
            ]
          }
        ],
        "titleEn": "The Seven Cases — A1"
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
        "title": "Презент (садашње време) — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється від основи дієслова, яка не завжди передбачувана з форми інфінітива, тому дієслова найкраще запам'ятовувати одразу з формою 1-ї особи однини.",
            "en": {
              "text": "The present tense is formed from the verb stem, which isn't always predictable from the infinitive — so verbs are best learned together with their 1st person singular form."
            }
          },
          {
            "type": "formula",
            "title": "\"радити\" (робити) — садашње време",
            "rows": [
              [
                "ја",
                "радим",
                "я роблю"
              ],
              [
                "ти",
                "радиш",
                "ти робиш"
              ],
              [
                "он / она / оно",
                "ради",
                "він/вона/воно робить"
              ],
              [
                "ми",
                "радимо",
                "ми робимо"
              ],
              [
                "ви",
                "радите",
                "ви робите"
              ],
              [
                "они / оне",
                "раде",
                "вони роблять"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Радим у банци.",
                "Я працюю в банку."
              ],
              [
                "Они пију кафу.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-aspect",
        "title": "Свршени и несвршени глаголски вид — A2",
        "titleEn": "Perfective & Imperfective Aspect — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне сербське дієслово має вид: несвершений (тривала або повторювана дія) або свершений (одноразова, завершена дія з результатом).",
            "en": {
              "text": "Every Serbian verb has an aspect: imperfective (ongoing/repeated action) or perfective (a single completed action with a result)."
            }
          },
          {
            "type": "table",
            "title": "Несвершений ↔ свершений",
            "rows": [
              [
                "читати",
                "прочитати",
                "читати / прочитати"
              ],
              [
                "писати",
                "написати",
                "писати / написати"
              ],
              [
                "куповати",
                "купити",
                "купувати / купити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Читао сам књигу цело вече.",
                "Я читав книгу весь вечір (процес)."
              ],
              [
                "Прочитао сам књигу за један дан.",
                "Я прочитав книгу за один день (результат)."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pairs",
        "title": "Видски парови и префикси — B1",
        "titleEn": "Aspect Pairs & Verb Prefixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Свершений вид найчастіше утворюється додаванням префікса до несвершеного дієслова.",
            "en": {
              "text": "The perfective aspect is most often formed by adding a prefix to the imperfective verb."
            }
          },
          {
            "type": "table",
            "title": "Найчастіші префікси свершеного виду",
            "rows": [
              [
                "на-",
                "писати → написати",
                "писати → написати"
              ],
              [
                "про-",
                "читати → прочитати",
                "читати → прочитати"
              ],
              [
                "у-",
                "радити → урадити",
                "робити → зробити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Урадио сам домаћи задатак.",
                "Я зробив домашнє завдання."
              ],
              [
                "Написала је писмо.",
                "Вона написала листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфекат (главно прошло време) — A1",
        "titleEn": "Perfect Tense (Main Past Tense) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект — основний і найуживаніший минулий час, утворюється з допоміжного дієслова \"бити\" в теперішньому часі та дієприкметника минулого часу на -о/-ла/-ло/-ли/-ле.",
            "en": {
              "text": "The perfect tense is the main, most commonly used past tense, formed with the present tense of \"бити\" plus the l-participle (-о/-ла/-ло/-ли/-ле)."
            }
          },
          {
            "type": "formula",
            "title": "\"радити\" (робити) — перфекат",
            "rows": [
              [
                "ја (чол.)",
                "радио сам",
                "я робив"
              ],
              [
                "ја (жін.)",
                "радила сам",
                "я робила"
              ],
              [
                "ти (чол.)",
                "радио си",
                "ти робив"
              ],
              [
                "он",
                "радио је",
                "він робив"
              ],
              [
                "ми",
                "радили смо",
                "ми робили"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Јуче сам радио до касно.",
                "Вчора я працював допізна."
              ],
              [
                "Оне су гледале филм.",
                "Вони (жін.) дивилися фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist",
        "title": "Аорист (приповедачка прошлост) — B2",
        "titleEn": "Aorist — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист — літературний, розповідний минулий час, що утворюється переважно від свершених дієслів. У сучасній розмовній мові вживається рідше, ніж перфект, хоча в сербській він живіший, ніж у хорватській чи боснійській.",
            "en": {
              "text": "The aorist is a literary, narrative past tense formed mainly from perfective verbs. In modern spoken language it is used less than the perfect, though it remains livelier in Serbian than in Croatian or Bosnian."
            }
          },
          {
            "type": "formula",
            "title": "\"рећи\" (сказати) — аорист",
            "rows": [
              [
                "ја",
                "рекох",
                "я сказав"
              ],
              [
                "ти",
                "рече",
                "ти сказав"
              ],
              [
                "он",
                "рече",
                "він сказав"
              ],
              [
                "ми",
                "рекосмо",
                "ми сказали"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Одох кући.",
                "Я пішов додому (літ. форма)."
              ],
              [
                "Видех га јуче.",
                "Я його вчора бачив (літ. форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect",
        "title": "Имперфекат — B2",
        "titleEn": "Imperfect — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект описує тривалу дію в минулому й утворюється переважно від несвершених дієслів. У сучасній розмовній мові майже не використовується.",
            "en": {
              "text": "The imperfect describes an ongoing past action and is formed mainly from imperfective verbs. In modern spoken language it is almost never used."
            }
          },
          {
            "type": "formula",
            "title": "\"писати\" (писати) — имперфекат",
            "rows": [
              [
                "ја",
                "писах",
                "я писав (процес)"
              ],
              [
                "ти",
                "писаше",
                "ти писав"
              ],
              [
                "он",
                "писаше",
                "він писав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Беше то давно.",
                "Це було давно (літературний стиль)."
              ],
              [
                "Писах јој сваки дан.",
                "Я писав їй щодня (літ. форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect",
        "title": "Плусквамперфекат — B2",
        "titleEn": "Pluperfect — B2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект виражає дію, що відбулася раніше за іншу минулу дію. Утворюється перфектом дієслова \"бити\" (био сам / био си...) + дієприкметник минулого часу основного дієслова.",
            "en": {
              "text": "The pluperfect expresses an action that happened before another past action. It's formed with the perfect of \"бити\" (био сам / био си...) plus the main verb's l-participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "био сам + радио",
                "био сам радио",
                "я вже був робив (до того)"
              ],
              [
                "била је + отишла",
                "била је отишла",
                "вона вже пішла була (до того)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Већ сам био јео кад си стигао.",
                "Я вже поїв, коли ти прийшов."
              ],
              [
                "Она је била отишла пре него што смо ми стигли.",
                "Вона вже пішла, перш ніж ми прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-i",
        "title": "Футур I — A2",
        "titleEn": "Future I — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час утворюється допоміжним дієсловом \"ћу/ћеш/ће...\" + інфінітив. Якщо допоміжне дієслово стоїть після інфінітива, останній втрачає -и, і форми зливаються в одне слово.",
            "en": {
              "text": "The simple future is formed with the auxiliary \"ћу/ћеш/ће...\" plus the infinitive. If the auxiliary follows the infinitive, the infinitive drops its final -и and the two merge into one word."
            }
          },
          {
            "type": "formula",
            "title": "\"радити\" (робити) — футур I",
            "rows": [
              [
                "ја",
                "ћу радити / радићу",
                "я робитиму"
              ],
              [
                "ти",
                "ћеш радити / радићеш",
                "ти робитимеш"
              ],
              [
                "он / она",
                "ће радити / радиће",
                "він/вона робитиме"
              ],
              [
                "ми",
                "ћемо радити",
                "ми робитимемо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сутра ћу радити цео дан.",
                "Завтра я працюватиму цілий день."
              ],
              [
                "Видећемо се ускоро.",
                "Ми скоро побачимося."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-ii",
        "title": "Футур II (предбудуће време) — B1",
        "titleEn": "Future II (Anterior Future) — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Футур II виражає дію, що завершиться до іншої майбутньої дії, і вживається переважно в підрядних часових та умовних реченнях. Утворюється презентом свершеного \"бити\" (будем, будеш...) + дієприкметник минулого часу.",
            "en": {
              "text": "Future II expresses an action that will be completed before another future action, used mainly in temporal and conditional subordinate clauses. Formed with the perfective present of \"бити\" (будем, будеш...) plus the l-participle."
            }
          },
          {
            "type": "formula",
            "title": "\"завршити\" (закінчити) — футур II",
            "rows": [
              [
                "ја",
                "будем завршио",
                "я закінчу (до того)"
              ],
              [
                "ти",
                "будеш завршио",
                "ти закінчиш (до того)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кад будем завршио посао, зваћу те.",
                "Коли я закінчу роботу, я тобі подзвоню."
              ],
              [
                "Ако будеш имао времена, дођи.",
                "Якщо в тебе буде час, приходь."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Императив — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від основи теперішнього часу. 2-га особа однини зазвичай має закінчення -и/-ј, 1-ша особа множини -имо/-јмо, 2-га особа множини -ите/-јте.",
            "en": {
              "text": "The imperative is formed from the present-tense stem. The 2nd person singular usually ends in -и/-ј, the 1st person plural in -имо/-јмо, and the 2nd person plural in -ите/-јте."
            }
          },
          {
            "type": "formula",
            "title": "\"радити\" (робити) — императив",
            "rows": [
              [
                "ти",
                "Ради!",
                "Роби!"
              ],
              [
                "ми",
                "Радимо!",
                "Робімо!"
              ],
              [
                "ви",
                "Радите!",
                "Робіть!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Затвори врата, молим те.",
                "Зачини двері, будь ласка."
              ],
              [
                "Хајдемо у биоскоп!",
                "Ходімо в кіно!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-i",
        "title": "Кондиционал I — B1",
        "titleEn": "Present Conditional — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється допоміжним \"бих/би/би/бисмо/бисте/би\" (аорист від бити) + дієприкметник минулого часу основного дієслова, узгоджений у роді й числі.",
            "en": {
              "text": "The conditional is formed with the auxiliary \"бих/би/би/бисмо/бисте/би\" (the aorist of бити) plus the l-participle of the main verb, agreeing in gender and number."
            }
          },
          {
            "type": "formula",
            "title": "\"радити\" (робити) — кондиционал",
            "rows": [
              [
                "ја (чол.)",
                "радио бих",
                "я робив би"
              ],
              [
                "ти (чол.)",
                "радио би",
                "ти робив би"
              ],
              [
                "он",
                "радио би",
                "він робив би"
              ],
              [
                "ми",
                "радили бисмо",
                "ми робили б"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Волео бих да путујем више.",
                "Я хотів би більше подорожувати."
              ],
              [
                "Да имам времена, дошао бих.",
                "Якби в мене був час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-ii",
        "title": "Кондиционал II — B2",
        "titleEn": "Past Conditional — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Кондиционал II виражає нереальну умову в минулому — те, що не сталося. Утворюється: кондиционал дієслова \"бити\" (био бих...) + дієприкметник минулого часу головного дієслова.",
            "en": {
              "text": "Kondicional II expresses an unreal past condition — something that did not happen. It's formed with the conditional of \"бити\" (био бих...) plus the main verb's l-participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "био бих + радио",
                "био бих радио",
                "я був би зробив"
              ],
              [
                "била би + дошла",
                "била би дошла",
                "вона була б прийшла"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Да сам знао, био бих дошао раније.",
                "Якби я знав, я прийшов би раніше."
              ],
              [
                "Била би помогла да је могла.",
                "Вона допомогла б, якби могла."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-adverbs",
        "title": "Глаголски прилози — B1",
        "titleEn": "Verbal Adverbs — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник теперішнього часу на -ући утворюється від несвершених дієслів і описує одночасну дію. Дієприслівник минулого часу на -авши/-вши утворюється від свершених дієслів і описує попередню дію.",
            "en": {
              "text": "The present verbal adverb -ући is formed from imperfective verbs and describes a simultaneous action. The past verbal adverb -авши/-вши is formed from perfective verbs and describes a prior action."
            }
          },
          {
            "type": "table",
            "title": "Приклади утворення",
            "rows": [
              [
                "ићи",
                "идући",
                "ідучи"
              ],
              [
                "видети",
                "видевши",
                "побачивши"
              ],
              [
                "рећи",
                "рекавши",
                "сказавши"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Идући у школу, срео сам пријатеља.",
                "Ідучи до школи, я зустрів друга."
              ],
              [
                "Рекавши то, отишла је.",
                "Сказавши це, вона пішла."
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
        "id": "genitive-case",
        "title": "Генитив (кога? чега?) — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (генитив) відповідає на питання \"кого? чого?\". Уживається після багатьох прийменників, після числівників 5+ і для вираження належності.",
            "en": {
              "text": "The genitive answers \"of whom? of what?\". Used after many prepositions, after numerals 5+, and to express possession."
            }
          },
          {
            "type": "table",
            "title": "Номинатив → Генитив",
            "rows": [
              [
                "град (місто)",
                "града",
                "центар града (центр міста)"
              ],
              [
                "кафа (кава)",
                "кафе",
                "шољица кафе (чашка кави)"
              ],
              [
                "дете (дитина)",
                "детета",
                "играчка детета (іграшка дитини)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Немам времена.",
                "У мене немає часу."
              ],
              [
                "То је ауто мог брата.",
                "Це машина мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Датив (коме? чему?) — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (датив) відповідає на питання \"кому? чому?\" і позначає одержувача дії.",
            "en": {
              "text": "The dative answers \"to whom? to what?\" and marks the recipient of an action."
            }
          },
          {
            "type": "table",
            "title": "Номинатив → Датив",
            "rows": [
              [
                "мајка (мама)",
                "мајци",
                "Дајем дар мајци. (Даю подарунок мамі.)"
              ],
              [
                "брат (брат)",
                "брату",
                "Помажем брату. (Допомагаю братові.)"
              ],
              [
                "дете (дитина)",
                "детету",
                "Читам детету. (Читаю дитині.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Рекао сам јој истину.",
                "Я сказав їй правду."
              ],
              [
                "То је тешко детету.",
                "Це важко для дитини."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Акузатив (кога? шта?) — A1",
        "titleEn": "Accusative Case — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (акузатив) відповідає на питання \"кого? що?\" і позначає прямий об'єкт дії. Для істот чоловічого роду форма схожа на родовий, для неістот — на називний.",
            "en": {
              "text": "The accusative answers \"whom? what?\" and marks the direct object. For masculine animate nouns the form resembles the genitive; for inanimate nouns it resembles the nominative."
            }
          },
          {
            "type": "table",
            "title": "Номинатив → Акузатив",
            "rows": [
              [
                "пас (пес, жив.)",
                "пса",
                "Видим пса. (Я бачу пса.)"
              ],
              [
                "сто (стіл, нежив.)",
                "сто",
                "Видим сто. (Я бачу стіл.)"
              ],
              [
                "кафа (кава)",
                "кафу",
                "Пијем кафу. (Я п'ю каву.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Читам књигу.",
                "Я читаю книгу."
              ],
              [
                "Волим тај филм.",
                "Мені подобається цей фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-case",
        "title": "Вокатив — B1",
        "titleEn": "Vocative Case — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок (вокатив) уживається при прямому зверненні — переважно з іменами й спорідненими словами.",
            "en": {
              "text": "The vocative is used when addressing someone directly — mainly with names and kinship terms."
            }
          },
          {
            "type": "table",
            "title": "Номинатив → Вокатив",
            "rows": [
              [
                "Марко",
                "Марко!",
                "Марку!"
              ],
              [
                "Милица",
                "Милице!",
                "Мілице!"
              ],
              [
                "пријатељ (друг)",
                "пријатељу!",
                "друже!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мајко, где си?",
                "Мамо, де ти?"
              ],
              [
                "Петре, дођи овамо!",
                "Петре, ходи сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Локатив (о коме? о чему?) — A2",
        "titleEn": "Locative Case — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (локатив) відповідає на питання \"про кого? про що? де?\" і завжди вживається з прийменником (у, на, о, по, при).",
            "en": {
              "text": "The locative answers \"about whom/what? where?\" and is always used with a preposition (у, на, о, по, при)."
            }
          },
          {
            "type": "table",
            "title": "Номинатив → Локатив",
            "rows": [
              [
                "кућа (дім)",
                "кући",
                "у кући (вдома)"
              ],
              [
                "школа (школа)",
                "школи",
                "у школи (в школі)"
              ],
              [
                "град (місто)",
                "граду",
                "у граду (в місті)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Радим у банци.",
                "Я працюю в банку."
              ],
              [
                "Причамо о послу.",
                "Ми говоримо про роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Инструментал (ким? чим?) — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (инструментал) відповідає на питання \"ким? чим?\" і позначає знаряддя дії або супровід (з прийменником с/са).",
            "en": {
              "text": "The instrumental answers \"by whom? by what?\" and marks the instrument of an action or accompaniment (with the preposition с/са)."
            }
          },
          {
            "type": "table",
            "title": "Номинатив → Инструментал",
            "rows": [
              [
                "нож (ніж)",
                "ножем",
                "Режем ножем. (Я ріжу ножем.)"
              ],
              [
                "оловка (олівець)",
                "оловком",
                "Пишем оловком. (Я пишу олівцем.)"
              ],
              [
                "пријатељ (друг)",
                "пријатељем",
                "с пријатељем (з другом)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Идемо аутобусом.",
                "Ми їдемо автобусом."
              ],
              [
                "Шетам са псом.",
                "Я гуляю з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-masculine",
        "title": "Промена мушког рода — A2",
        "titleEn": "Masculine Noun Declension — A2",
        "emoji": "🧑",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники чоловічого роду переважно не мають закінчення в називному однини й приймають -а в родовому.",
            "en": {
              "text": "Masculine nouns usually have no ending in the nominative singular and take -а in the genitive."
            }
          },
          {
            "type": "table",
            "title": "\"студент\" за відмінками",
            "rows": [
              [
                "Номинатив",
                "студент",
                "хто?"
              ],
              [
                "Генитив",
                "студента",
                "кого?"
              ],
              [
                "Датив",
                "студенту",
                "кому?"
              ],
              [
                "Акузатив",
                "студента",
                "кого?"
              ],
              [
                "Инструментал",
                "студентом",
                "ким?"
              ],
              [
                "Локатив",
                "студенту",
                "про кого?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Тај студент добро учи.",
                "Цей студент добре навчається."
              ],
              [
                "Разговарам са студентом.",
                "Я розмовляю зі студентом."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-feminine",
        "title": "Промена женског рода — A2",
        "titleEn": "Feminine Noun Declension — A2",
        "emoji": "👩",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість іменників жіночого роду закінчуються на -а та відмінюються за єдиним стандартним зразком.",
            "en": {
              "text": "Most feminine nouns end in -а and follow a single standard declension pattern."
            }
          },
          {
            "type": "table",
            "title": "\"жена\" за відмінками",
            "rows": [
              [
                "Номинатив",
                "жена",
                "хто?"
              ],
              [
                "Генитив",
                "жене",
                "кого?"
              ],
              [
                "Датив",
                "жени",
                "кому?"
              ],
              [
                "Акузатив",
                "жену",
                "кого?"
              ],
              [
                "Инструментал",
                "женом",
                "ким?"
              ],
              [
                "Локатив",
                "жени",
                "про кого?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Та жена је лекарка.",
                "Ця жінка лікарка."
              ],
              [
                "Разговарам са женом.",
                "Я розмовляю з жінкою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-neuter",
        "title": "Промена средњег рода — A2",
        "titleEn": "Neuter Noun Declension — A2",
        "emoji": "🧒",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники середнього роду закінчуються на -о або -е. Деякі, як \"дете\" (дитина), у непрямих відмінках приймають додатковий суфікс -ет-.",
            "en": {
              "text": "Neuter nouns end in -о or -е. Some, like \"дете\" (child), take the extra infix -ет- in oblique cases."
            }
          },
          {
            "type": "table",
            "title": "\"село\" за відмінками",
            "rows": [
              [
                "Номинатив",
                "село",
                "що?"
              ],
              [
                "Генитив",
                "села",
                "чого?"
              ],
              [
                "Датив",
                "селу",
                "чому?"
              ],
              [
                "Акузатив",
                "село",
                "що?"
              ],
              [
                "Инструментал",
                "селом",
                "чим?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Живимо у малом селу.",
                "Ми живемо в маленькому селі."
              ],
              [
                "То дете је врло паметно.",
                "Ця дитина дуже розумна."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-plural",
        "title": "Генитив множине — B1",
        "titleEn": "Genitive Plural — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок множини — одна зі складніших форм: у жіночому та середньому роді часто вставляється голосний -а- між приголосними основи, у чоловічому додається -а.",
            "en": {
              "text": "The genitive plural is one of the trickier forms: feminine and neuter nouns often insert a vowel -а- between stem consonants, while masculine nouns add -а."
            }
          },
          {
            "type": "table",
            "title": "Приклади родового множини",
            "rows": [
              [
                "сестра (сестра)",
                "сестара",
                "багато сестер"
              ],
              [
                "студент (студент)",
                "студената",
                "багато студентів"
              ],
              [
                "књига (книга)",
                "књига",
                "багато книг"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имам пет сестара.",
                "У мене п'ять сестер."
              ],
              [
                "Има пуно студената на факултету.",
                "На факультеті багато студентів."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-declension",
        "title": "Промена придева — A2",
        "titleEn": "Adjective Declension — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники відмінюються за родом, числом і відмінком, узгоджуючись з іменником, що вони описують.",
            "en": {
              "text": "Adjectives are declined for gender, number, and case, agreeing with the noun they describe."
            }
          },
          {
            "type": "table",
            "title": "\"велик\" за родами",
            "rows": [
              [
                "чоловічий",
                "велик град",
                "велике місто"
              ],
              [
                "жіночий",
                "велика кућа",
                "великий дім"
              ],
              [
                "середній",
                "велико село",
                "велике село"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Живим у великом граду.",
                "Я живу у великому місті."
              ],
              [
                "То је лепа хаљина.",
                "Це гарна сукня."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-definite-indefinite",
        "title": "Одређени и неодређени вид придева — B1",
        "titleEn": "Definite & Indefinite Adjectives — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Сербські прикметники мають означену форму (для конкретного, відомого предмета) і неозначену (для будь-якого предмета цього типу) — щось на кшталт артикля, вбудованого в закінчення прикметника.",
            "en": {
              "text": "Serbian adjectives have a definite form (for a specific, known object) and an indefinite form (for any object of that type) — functioning somewhat like an article built into the adjective ending."
            }
          },
          {
            "type": "table",
            "title": "Неозначена ↔ означена форма",
            "rows": [
              [
                "нов град",
                "нови град",
                "нове місто / (те саме) нове місто"
              ],
              [
                "млад човек",
                "млади човек",
                "молода людина / (та сама) молода людина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "То је занимљив филм.",
                "Це цікавий фільм (якийсь)."
              ],
              [
                "Занимљиви филм који смо гледали.",
                "Цікавий фільм, який ми дивилися (той самий)."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Слагање придева с именицом — A1",
        "titleEn": "Adjective-Noun Agreement — A1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником і узгоджується з ним у роді, числі та відмінку.",
            "en": {
              "text": "An adjective always precedes the noun and agrees with it in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "Узгодження за родом і числом",
            "rows": [
              [
                "мали пас",
                "маленький пес",
                "чол. одн."
              ],
              [
                "мала мачка",
                "маленька кішка",
                "жін. одн."
              ],
              [
                "мали пси",
                "маленькі пси",
                "мн."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имам малог пса.",
                "У мене маленький пес."
              ],
              [
                "То су занимљиве књиге.",
                "Це цікаві книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Компарација придева — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -ији/-ји/-ши, найвищий — додаванням префікса нај- до вищого ступеня.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -ији/-ји/-ши, and the superlative by adding the prefix нај- to the comparative."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "леп",
                "лепши",
                "најлепши"
              ],
              [
                "паметан",
                "паметнији",
                "најпаметнији"
              ],
              [
                "брз",
                "бржи",
                "најбржи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Овај град је лепши од оног.",
                "Це місто гарніше за те."
              ],
              [
                "То је најбржи ауто на свету.",
                "Це найшвидша машина у світі."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Неправилна компарација — B1",
        "titleEn": "Irregular Comparatives — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже поширених прикметників мають нерегулярні форми ступенів порівняння.",
            "en": {
              "text": "A handful of very common adjectives have irregular comparative/superlative forms."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "добар (добрий)",
                "бољи",
                "најбољи"
              ],
              [
                "лош (поганий)",
                "гори",
                "најгори"
              ],
              [
                "велик (великий)",
                "већи",
                "највећи"
              ],
              [
                "мален (малий)",
                "мањи",
                "најмањи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "То је бољи план.",
                "Це кращий план."
              ],
              [
                "Он је најбољи ученик у разреду.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Творба прилога — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії утворюється від прикметників середнього роду однини, тобто закінченням -о чи -е.",
            "en": {
              "text": "Most manner adverbs are formed from the neuter singular form of the adjective, i.e. ending in -о or -е."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "брз (швидкий)",
                "брзо",
                "швидко"
              ],
              [
                "леп (гарний)",
                "лепо",
                "гарно"
              ],
              [
                "добар (добрий)",
                "добро",
                "добре"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Он говори брзо.",
                "Він говорить швидко."
              ],
              [
                "Она лепо пева.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-declension",
        "title": "Промена личних заменица — A2",
        "titleEn": "Personal Pronoun Declension — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за відмінками й мають повні (наголошені) та короткі (клітичні) форми в непрямих відмінках.",
            "en": {
              "text": "Personal pronouns decline by case and have both full (stressed) and short (clitic) forms in the oblique cases."
            }
          },
          {
            "type": "table",
            "title": "\"ја\" за відмінками",
            "rows": [
              [
                "Номинатив",
                "ја",
                "я"
              ],
              [
                "Генитив",
                "мене / ме",
                "мене"
              ],
              [
                "Датив",
                "мени / ми",
                "мені"
              ],
              [
                "Акузатив",
                "мене / ме",
                "мене"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Он ме не чује.",
                "Він мене не чує."
              ],
              [
                "Дај ми то.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "clitic-word-order",
        "title": "Ред речи клитика (Вакернагелов положај) — B1",
        "titleEn": "Clitic Word Order (Wackernagel's Position) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі (клітичні) форми — займенники, допоміжне \"бити\" (сам, си, је...), частка \"ли\" — завжди стоять на другій позиції в реченні, одразу після першого наголошеного слова чи групи слів.",
            "en": {
              "text": "Short (clitic) forms — pronouns, the auxiliary \"бити\" (сам, си, је...), the particle \"ли\" — always occupy the second position in the clause, right after the first stressed word or phrase."
            }
          },
          {
            "type": "table",
            "title": "Клітики на другій позиції",
            "rows": [
              [
                "Ја сам му то рекао.",
                "Я йому це сказав.",
                "сам/му/то — клітики"
              ],
              [
                "Јуче сам му то рекао.",
                "Вчора я йому це сказав.",
                "клітики після \"јуче\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Видео сам га јуче.",
                "Я бачив його вчора."
              ],
              [
                "Мој отац ми је то поклонио.",
                "Мій батько подарував мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвојне заменице — A1",
        "titleEn": "Possessive Pronouns — A1",
        "emoji": "👜",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники вказують на належність і узгоджуються з іменником у роді, числі та відмінку, як прикметники.",
            "en": {
              "text": "Possessive pronouns express ownership and agree with the noun in gender, number, and case, like adjectives."
            }
          },
          {
            "type": "table",
            "title": "Присвійні займенники (чол. одн.)",
            "rows": [
              [
                "мој",
                "мій",
                "мој дом"
              ],
              [
                "твој",
                "твій",
                "твој пас"
              ],
              [
                "наш",
                "наш",
                "наш ауто"
              ],
              [
                "њихов",
                "їхній",
                "њихов дом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "То је моја сестра.",
                "Це моя сестра."
              ],
              [
                "Где су твоји кључеви?",
                "Де твої ключі?"
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-adjectives-from-nouns",
        "title": "Присвојни придеви од именица — B1",
        "titleEn": "Possessive Adjectives from Nouns — B1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "У сербській для належності людині часто вживають присвійний прикметник, утворений від власного імені чи іменника суфіксом -ов/-ев/-ин, а не родовий відмінок.",
            "en": {
              "text": "In Serbian, possession by a person is often expressed with a possessive adjective formed from the name or noun with the suffix -ов/-ев/-ин, rather than the genitive case."
            }
          },
          {
            "type": "table",
            "title": "Іменник → присвійний прикметник",
            "rows": [
              [
                "Марко",
                "Марков ауто",
                "машина Марка"
              ],
              [
                "Милица",
                "Миличина књига",
                "книга Мілиці"
              ],
              [
                "отац (батько)",
                "очева кућа",
                "дім батька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "То је Петров брат.",
                "Це брат Петра."
              ],
              [
                "Аннина торба је црвена.",
                "Сумка Анни червона."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Показне заменице — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Сербська має триступеневу систему вказівних займенників за відстанню від мовця: овај (близько до мовця), тај (близько до співрозмовника), онај (далеко від обох).",
            "en": {
              "text": "Serbian has a three-way demonstrative system based on distance from the speaker: овај (near the speaker), тај (near the listener), онај (far from both)."
            }
          },
          {
            "type": "table",
            "title": "Три ступені відстані",
            "rows": [
              [
                "овај град",
                "це місто (тут)",
                "близько до мовця"
              ],
              [
                "тај град",
                "те місто (там у тебе)",
                "близько до співрозмовника"
              ],
              [
                "онај град",
                "он те місто (там далеко)",
                "далеко від обох"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ова књига је моја.",
                "Ця книга моя."
              ],
              [
                "Онај човек тамо је мој комшија.",
                "Он той чоловік — мій сусід."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Упитне заменице — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники \"ко\" (хто) і \"шта\" (що) відмінюються за відмінками так само, як іменники, на які вони вказують.",
            "en": {
              "text": "The interrogative pronouns \"ко\" (who) and \"шта\" (what) decline by case, like the nouns they stand for."
            }
          },
          {
            "type": "table",
            "title": "\"ко\" за відмінками",
            "rows": [
              [
                "Номинатив",
                "ко?",
                "хто?"
              ],
              [
                "Генитив",
                "кога?",
                "кого?"
              ],
              [
                "Датив",
                "коме?",
                "кому?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ко је то?",
                "Хто це?"
              ],
              [
                "Шта радиш?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-koji",
        "title": "Односна заменица \"који\" — B1",
        "titleEn": "Relative Pronoun Koji — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"који\" (який) уводить підрядні означальні речення й узгоджується з іменником, до якого відноситься, у роді та числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "The pronoun \"који\" (which/who) introduces relative clauses, agreeing with its antecedent in gender and number, while its case depends on its role in the clause."
            }
          },
          {
            "type": "table",
            "title": "Форми \"који\" за родом",
            "rows": [
              [
                "човек који...",
                "чоловік, який...",
                "чол."
              ],
              [
                "жена која...",
                "жінка, яка...",
                "жін."
              ],
              [
                "дете које...",
                "дитина, яка...",
                "сер."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "То је књига коју читам.",
                "Це книга, яку я читаю."
              ],
              [
                "Познајем човека који тамо стоји.",
                "Я знаю чоловіка, який там стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-se-sebe",
        "title": "Повратна заменица \"се/себе\" — A2",
        "titleEn": "Reflexive Pronoun Se/Sebe — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"се\" (коротка форма) чи \"себе\" (повна форма) показує, що дія спрямована на самого діяча. Не змінюється за особами.",
            "en": {
              "text": "The reflexive pronoun \"се\" (short) or \"себе\" (full) shows the action is directed back at the doer. It doesn't change by person."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "прати се",
                "Перем се.",
                "Я митися/Я мию себе."
              ],
              [
                "видети себе",
                "Видим себе у огледалу.",
                "Я бачу себе в дзеркалі."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Он се облачи.",
                "Він одягається."
              ],
              [
                "Мислим само на себе.",
                "Я думаю лише про себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неодређене заменице — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники утворюються від питальних додаванням частки нет- (хтось, щось) і відмінюються так само, як вони.",
            "en": {
              "text": "Indefinite pronouns are formed from interrogatives with the particle нет- (someone, something) and decline the same way."
            }
          },
          {
            "type": "table",
            "title": "Питальний → неозначений",
            "rows": [
              [
                "ко → неко",
                "хто → хтось"
              ],
              [
                "шта → нешто",
                "що → щось"
              ],
              [
                "који → неки",
                "який → якийсь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Неко звони на врата.",
                "Хтось дзвонить у двері."
              ],
              [
                "Имаш ли нека питања?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-1-4",
        "title": "Бројеви 1–4 — A1",
        "titleEn": "Cardinal Numbers 1-4 — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник \"један\" (один) узгоджується з іменником у роді як прикметник. Числівник \"два\" (два) також має жіночу форму \"две\". Числівники 2-4 вимагають форми, схожої на називний множини.",
            "en": {
              "text": "\"Један\" (one) agrees with the noun in gender, like an adjective. \"Два\" (two) also has a feminine form \"две\". Numbers 2-4 require a nominative-plural-like form."
            }
          },
          {
            "type": "table",
            "title": "1–4",
            "rows": [
              [
                "један / једна / једно",
                "один/одна/одне",
                "1"
              ],
              [
                "два / две",
                "два/дві",
                "2"
              ],
              [
                "три",
                "три",
                "3"
              ],
              [
                "четири",
                "чотири",
                "4"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имам једног брата.",
                "У мене один брат."
              ],
              [
                "Видим три мачке.",
                "Я бачу три кішки."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-5plus",
        "title": "Бројеви од 5 надаље — A2",
        "titleEn": "Cardinal Numbers 5+ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 5 і вище (а також \"пуно\"/\"мало\") вимагають від іменника форми родового відмінка множини й не змінюються за родом.",
            "en": {
              "text": "Numerals 5 and above (as well as \"пуно\"/many, \"мало\"/few) require the noun in the genitive plural and don't change by gender."
            }
          },
          {
            "type": "table",
            "title": "5, 10, 100",
            "rows": [
              [
                "пет мачака",
                "п'ять кішок",
                "родовий мн."
              ],
              [
                "десет кућа",
                "десять будинків",
                "родовий мн."
              ],
              [
                "сто људи",
                "сто людей",
                "родовий мн."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имам пет књига.",
                "У мене п'ять книг."
              ],
              [
                "То кошта сто динара.",
                "Це коштує сто динарів."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective",
        "title": "Збирни бројеви — B1",
        "titleEn": "Collective Numbers — B1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Збірні числівники (двоје, троје, четворо...) уживаються для позначення групи змішаної статі або з іменниками, що мають лише форму множини.",
            "en": {
              "text": "Collective numbers (двоје, троје, четворо...) are used for mixed-gender groups or with nouns that only have a plural form."
            }
          },
          {
            "type": "table",
            "title": "Звичайний ↔ збірний",
            "rows": [
              [
                "два (два)",
                "двоје деце",
                "двоє дітей"
              ],
              [
                "три (три)",
                "троје људи",
                "троє людей"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имамо двоје деце.",
                "У нас двоє дітей."
              ],
              [
                "Дошло је петоро гостију.",
                "Прийшло п'ятеро гостей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Редни бројеви — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники відмінюються як прикметники й узгоджуються з іменником у роді, числі та відмінку.",
            "en": {
              "text": "Ordinal numbers decline like adjectives and agree with the noun in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "први",
                "перший",
                "1-й"
              ],
              [
                "други",
                "другий",
                "2-й"
              ],
              [
                "трећи",
                "третій",
                "3-й"
              ],
              [
                "десети",
                "десятий",
                "10-й"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "То је мој први дан на послу.",
                "Це мій перший день на роботі."
              ],
              [
                "Живим на другом спрату.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-genitive",
        "title": "Предлози с генитивом — A2",
        "titleEn": "Prepositions with Genitive — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Багато поширених прийменників завжди керують родовим відмінком: без (без), до (до), из (з), од (від), код (у, біля).",
            "en": {
              "text": "Many common prepositions always govern the genitive: без (without), до (to), из (from/out of), од (from), код (at, near)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з родовим",
            "rows": [
              [
                "без",
                "без шећера",
                "без цукру"
              ],
              [
                "код",
                "код лекара",
                "у лікаря"
              ],
              [
                "из",
                "из Београда",
                "із Белграда"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Пијем кафу без млека.",
                "Я п'ю каву без молока."
              ],
              [
                "Долазим из Србије.",
                "Я з Сербії."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-accusative",
        "title": "Предлози с акузативом — A2",
        "titleEn": "Prepositions with Accusative — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники кроз (через), за (за, для), низ (вниз) керують знахідним відмінком.",
            "en": {
              "text": "The prepositions кроз (through), за (for), and низ (down along) govern the accusative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники зі знахідним",
            "rows": [
              [
                "кроз",
                "кроз шуму",
                "через ліс"
              ],
              [
                "за",
                "за тебе",
                "для тебе"
              ],
              [
                "низ",
                "низ реку",
                "вниз по річці"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Купио сам поклон за мајку.",
                "Я купив подарунок для мами."
              ],
              [
                "Шетамо кроз парк.",
                "Ми гуляємо через парк."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-dative",
        "title": "Предлози с дативом — B1",
        "titleEn": "Prepositions with Dative — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники к/ка (до, у напрямку) і према (до, згідно з) керують давальним відмінком.",
            "en": {
              "text": "The prepositions к/ка (toward) and према (toward, according to) govern the dative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з давальним",
            "rows": [
              [
                "к / ка",
                "к мору",
                "до моря"
              ],
              [
                "према",
                "према кући",
                "у напрямку дому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Идемо према центру града.",
                "Ми йдемо в напрямку центру міста."
              ],
              [
                "Према њему, све је у реду.",
                "На його думку, все гаразд."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-instrumental",
        "title": "Предлози с инструменталом — A2",
        "titleEn": "Prepositions with Instrumental — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники с/са (з, у значенні супроводу), пред (перед), над (над), под (під, без руху) керують орудним відмінком.",
            "en": {
              "text": "The prepositions с/са (with), пред (in front of), над (above), and под (under, static) govern the instrumental case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з орудним",
            "rows": [
              [
                "с / са",
                "с пријатељем",
                "з другом"
              ],
              [
                "под",
                "под столом",
                "під столом"
              ],
              [
                "над",
                "над градом",
                "над містом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Седим пред телевизором.",
                "Я сиджу перед телевізором."
              ],
              [
                "Мачка спава под креветом.",
                "Кіт спить під ліжком."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-locative",
        "title": "Предлози с локативом — A2",
        "titleEn": "Prepositions with Locative — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники у (в, без руху), на (на, без руху), о (про) і по (по) керують місцевим відмінком.",
            "en": {
              "text": "The prepositions у (in, static), на (on, static), о (about), and по (around) govern the locative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з місцевим",
            "rows": [
              [
                "у",
                "у кући",
                "у домі"
              ],
              [
                "на",
                "на столу",
                "на столі"
              ],
              [
                "о",
                "о послу",
                "про роботу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Радим у банци.",
                "Я працюю в банку."
              ],
              [
                "Књига је на столу.",
                "Книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "two-way-prepositions",
        "title": "Предлози \"у/на\" с два падежа — B1",
        "titleEn": "Two-Case Prepositions U/Na — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники у і на керують знахідним відмінком, коли позначають рух (куди?), і місцевим, коли позначають перебування без руху (де?).",
            "en": {
              "text": "The prepositions у and на govern the accusative when expressing motion (where to?) and the locative when expressing a static location (where?)."
            }
          },
          {
            "type": "table",
            "title": "Рух vs перебування",
            "rows": [
              [
                "Идем у град.",
                "Я йду в місто.",
                "рух — акузатив"
              ],
              [
                "Јесам у граду.",
                "Я в місті.",
                "перебування — локатив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Улазим у собу.",
                "Я заходжу в кімнату."
              ],
              [
                "Седим у соби.",
                "Я сиджу в кімнаті."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-imati",
        "title": "Одрицање с \"немати\" — A2",
        "titleEn": "Negation with Nemati — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"имати\" (мати) у запереченні зливається в одне слово \"немати\", і об'єкт при цьому найчастіше залишається в знахідному відмінку.",
            "en": {
              "text": "The verb \"имати\" (to have) fuses with negation into \"немати\", and the object most often stays in the accusative."
            }
          },
          {
            "type": "formula",
            "title": "\"немати\" — теперішній час",
            "rows": [
              [
                "ја",
                "немам",
                "я не маю"
              ],
              [
                "ти",
                "немаш",
                "ти не маєш"
              ],
              [
                "он",
                "нема",
                "він не має"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Немам времена данас.",
                "У мене немає часу сьогодні."
              ],
              [
                "Он нема ауто.",
                "У нього немає машини."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Ред речи у реченици — A2",
        "titleEn": "Word Order — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Сербський порядок слів гнучкий, оскільки відмінки показують граматичну роль слова незалежно від позиції. Базовий порядок SVO, але зміна порядку слів зазвичай змінює наголос/фокус речення.",
            "en": {
              "text": "Serbian word order is flexible because case endings mark grammatical role regardless of position. The basic order is SVO, but changing word order usually shifts emphasis or focus."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Марко је купио књигу.",
                "Марко купив книгу.",
                "нейтральний"
              ],
              [
                "Књигу је купио Марко.",
                "Книгу купив (саме) Марко.",
                "фокус на 'Марко'"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сваки дан пијем кафу.",
                "Щодня я п'ю каву."
              ],
              [
                "Кафу пијем сваки дан.",
                "Каву я п'ю щодня (акцент на 'каву')."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Упитне речи — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "где?",
                "де?",
                "Где си?"
              ],
              [
                "када?",
                "коли?",
                "Када долазиш?"
              ],
              [
                "зашто?",
                "чому?",
                "Зашто плачеш?"
              ],
              [
                "како?",
                "як?",
                "Како си?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Где је станица?",
                "Де станція?"
              ],
              [
                "Зашто касниш?",
                "Чому ти запізнюєшся?"
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Саставни везници — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "и",
                "і/та",
                "Ја и ти."
              ],
              [
                "али",
                "але",
                "Желим, али не могу."
              ],
              [
                "или",
                "або",
                "Кафа или чај?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Волим чај и кафу.",
                "Мені подобається чай і кава."
              ],
              [
                "Хтео бих да идем, али немам времена.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Зависни везници — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "да",
                "що/щоб",
                "Знам да долазиш."
              ],
              [
                "јер",
                "тому що",
                "Нисам дошао јер сам био болестан."
              ],
              [
                "ако",
                "якщо",
                "Ако имаш времена, назови."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мислим да имаш право.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Остаћу ако буде потребно.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses",
        "title": "Зависне (односне) реченице — B1",
        "titleEn": "Relative Clauses — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні означальні речення вводяться займенником \"који\" (який), узгодженим із означуваним іменником у роді й числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "Relative clauses are introduced by \"који\" (which/who), agreeing with the antecedent in gender and number, while its case is determined by its role in the clause."
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
                "Кућа у којој живим је стара.",
                "Будинок, у якому я живу, старий."
              ],
              [
                "То је особа о којој сам говорио.",
                "Це людина, про яку я говорив."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Повратни глаголи — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів уживаються з часткою \"се\" і мають відмінне значення від дієслова без неї. Се зазвичай стоїть на другій позиції в реченні разом з іншими клітиками.",
            "en": {
              "text": "Many verbs take the particle \"се\" and have a different meaning from the plain verb. Се usually occupies the second position of the clause together with other clitics."
            }
          },
          {
            "type": "table",
            "title": "Без се ↔ зі се",
            "rows": [
              [
                "прати (мити)",
                "прати се (митися)",
                "себе"
              ],
              [
                "учити (вчити)",
                "учити се (вчитися)",
                "себе"
              ],
              [
                "звати (звати)",
                "звати се (називатися)",
                "себе"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Како се зовеш?",
                "Як тебе звати?"
              ],
              [
                "Учим се српски.",
                "Я вчу сербську."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Безличне конструкције \"треба/може\" — A2",
        "titleEn": "Impersonal Modal Constructions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові вирази треба (треба), може (можна) вживаються з інфінітивом або конструкцією \"да\" + теперішній час і не змінюються за особами.",
            "en": {
              "text": "The impersonal expressions треба (must/need) and може (may) take either the infinitive or a \"да\" + present construction, and never change by person."
            }
          },
          {
            "type": "table",
            "title": "Безособові конструкції",
            "rows": [
              [
                "треба",
                "Треба ићи. / Треба да идем.",
                "Треба йти."
              ],
              [
                "може",
                "Може ли се ући?",
                "Можна зайти?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Треба купити хлеб.",
                "Треба купити хліб."
              ],
              [
                "Овде се не сме пушити.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "da-constructions",
        "title": "Конструкција \"да\" уместо инфинитива — B1",
        "titleEn": "Da-Constructions (Replacing the Infinitive) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "У сербській конструкція \"да\" + дієслово в теперішньому часі майже повністю витіснила інфінітив у розмовній мові — це одна з найпомітніших рис, що відрізняє сербську від, наприклад, словенської чи чеської.",
            "en": {
              "text": "In Serbian, the construction \"да\" + present tense has almost entirely replaced the infinitive in spoken language — one of the most noticeable features distinguishing Serbian from, say, Slovenian or Czech."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив ↔ da-конструкція",
            "rows": [
              [
                "Желим ићи.",
                "Желим да идем.",
                "Я хочу йти."
              ],
              [
                "Хоћу да ти помогнем.",
                "—",
                "Я хочу тобі допомогти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Желим да ми помогнеш.",
                "Я хочу, щоб ти мені допоміг."
              ],
              [
                "Морам да идем.",
                "Мені треба йти."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Деминутиви — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -ић/-ица/-це тощо і широко вживаються в повсякденному мовленні, виражаючи не лише розмір, а й теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -ић/-ица/-це and are widely used in everyday speech, expressing not just size but warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "пас (пес)",
                "псић",
                "песик"
              ],
              [
                "кућа (будинок)",
                "кућица",
                "будиночок"
              ],
              [
                "мама",
                "мамица",
                "мамочка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Имам малог псића.",
                "У мене маленький песик."
              ],
              [
                "Купила сам синчићу играчку.",
                "Я купила синочку іграшку."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Дани у недељи — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понедељак",
                "понеділок",
                "1"
              ],
              [
                "уторак",
                "вівторок",
                "2"
              ],
              [
                "среда",
                "середа",
                "3"
              ],
              [
                "недеља",
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
                "У понедељак имам наставу.",
                "У понеділок у мене заняття."
              ],
              [
                "Данас је среда.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Месеци и датуми — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Назви місяців пишуться з малої букви. У датах день уживається в родовому відмінку порядкового числівника, а місяць — теж у родовому.",
            "en": {
              "text": "Month names are lowercase. In dates, both the day (as an ordinal) and the month name appear in the genitive case."
            }
          },
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "јануар",
                "січень",
                "01"
              ],
              [
                "јул",
                "липень",
                "07"
              ],
              [
                "децембар",
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
                "Данас је пети мај.",
                "Сьогодні п'яте травня."
              ],
              [
                "Рођен сам у децембру.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Казивање времена — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Колико је сати?\", а відповідь уживає порядковий числівник у жіночому роді.",
            "en": {
              "text": "To ask the time, Serbians say \"Колико је сати?\", and the answer uses the feminine ordinal."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Један сат.",
                "Перша година.",
                "1:00"
              ],
              [
                "Пола три.",
                "Половина третьої.",
                "2:30"
              ],
              [
                "Петнаест сати.",
                "П'ятнадцять годин.",
                "15:00"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Колико је сати?",
                "Котра година?"
              ],
              [
                "Воз полази у осам.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"ти\" и \"Ви\" (формалност) — A2",
        "titleEn": "Ti vs Vi (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"ти\" (2-га особа однини), для ввічливого/формального — \"Ви\" (2-га особа множини, з великої літери), навіть коли звертаються до однієї людини.",
            "en": {
              "text": "For informal address, Serbian uses \"ти\" (2nd person singular); for polite/formal address it uses \"Ви\" (2nd person plural, capitalized), even to a single person."
            }
          },
          {
            "type": "table",
            "title": "ти ↔ Ви",
            "rows": [
              [
                "Како си?",
                "Як ти? (неформально)",
                "ти"
              ],
              [
                "Како сте?",
                "Як Ви? (формально)",
                "Ви"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Одакле сте?",
                "Звідки Ви?"
              ],
              [
                "Хвала вам на помоћи.",
                "Дякую Вам за допомогу."
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
        "id": "irregular-verbs",
        "title": "Неправилни глаголи — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів мають основу теперішнього часу, що суттєво відрізняється від інфінітива, і їхні форми варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs have a present-tense stem quite different from the infinitive, and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "ићи (йти)",
                "идем, идеш, иде",
                "я йду, ти йдеш, він йде"
              ],
              [
                "хтети (хотіти)",
                "хоћу, хоћеш, хоће",
                "я хочу, ти хочеш, він хоче"
              ],
              [
                "моћи (могти)",
                "могу, можеш, може",
                "я можу, ти можеш, він може"
              ],
              [
                "јести (їсти)",
                "једем, једеш, једе",
                "я їм, ти їси, він їсть"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Не могу сада да разговарам.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Идем у продавницу, хоћеш ли нешто?",
                "Я йду в магазин, хочеш щось?"
              ]
            ]
          }
        ]
      },
      {
        "id": "ekavian-jat-reflex",
        "title": "Екавски рефлекс јата — B1",
        "titleEn": "Ekavian Jat Reflex — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від ієкавської хорватської та боснійської, стандартна сербська мова — екавська: старослов'янський звук \"ять\" (jat) послідовно відображається як -е-, а не -ије-/-је-. Це найвідоміша риса, що відрізняє сербський стандарт від хорватського й боснійського на слух.",
            "en": {
              "text": "Unlike Ijekavian Croatian and Bosnian, standard Serbian is Ekavian: the old Slavic vowel \"jat\" consistently reflects as -е-, not -ије-/-је-. This is the single most recognizable feature distinguishing the Serbian standard from Croatian/Bosnian by ear."
            }
          },
          {
            "type": "table",
            "title": "Екавски (сербський) ↔ ијекавски (хорв./босн.)",
            "rows": [
              [
                "дете",
                "dijete",
                "дитина"
              ],
              [
                "млеко",
                "mlijeko",
                "молоко"
              ],
              [
                "време",
                "vrijeme",
                "час/погода"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Пијем млеко сваки дан.",
                "Я п'ю молоко щодня."
              ],
              [
                "Какво је данас време?",
                "Яка сьогодні погода?"
              ]
            ]
          }
        ]
      },
      {
        "id": "cyrillic-latin-digraphia",
        "title": "Ћирилица и латиница — B1",
        "titleEn": "Cyrillic & Latin Digraphia — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Конституція Сербії визначає кирилицю (ћирилица) як офіційне письмо, але латиниця (латиница) широко вживається в побуті, інтернеті та серед молоді — на практиці обидва письма взаємозамінні для будь-якого сербського тексту.",
            "en": {
              "text": "Serbia's constitution names Cyrillic (ćirilica) as the official script, but the Latin alphabet (latinica) is widely used in everyday life, online, and among younger people — in practice both scripts are interchangeable for any Serbian text."
            }
          },
          {
            "type": "table",
            "title": "Ћирилица ↔ латиница",
            "rows": [
              [
                "добар дан",
                "dobar dan",
                "добрий день"
              ],
              [
                "хвала",
                "hvala",
                "дякую"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Овај текст је писан ћирилицом.",
                "Цей текст написаний кирилицею."
              ],
              [
                "Многи млади пишу на латиници.",
                "Багато молоді пишуть латиницею."
              ]
            ]
          }
        ]
      }
    ]
  }
];
