// Vymova — data/grammar-data/grammar_bs.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BS: GrammarCategory[] = [
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
            "text": "Боснійські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають — як і в українській.",
            "en": {
              "text": "Bosnian verbs mark person through their ending, so the pronoun is often dropped in normal speech — much like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ja",
                "я"
              ],
              [
                "ti",
                "ти"
              ],
              [
                "on / ona / ono",
                "він / вона / воно"
              ],
              [
                "mi",
                "ми"
              ],
              [
                "oni / one",
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
                "Ja sam učitelj.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"biti\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Biti\" відмінюється схоже на українське \"бути\" й активно використовується і як зв'язка, і в складених минулих часах.",
            "en": {
              "text": "\"Biti\" conjugates similarly to Ukrainian \"бути\" and is actively used both as a copula and in compound past tenses."
            }
          },
          {
            "type": "formula",
            "title": "\"biti\" (бути) — теперішній час",
            "rows": [
              [
                "ja",
                "sam",
                "я є"
              ],
              [
                "ti",
                "si",
                "ти є"
              ],
              [
                "on / ona / ono",
                "je",
                "він/вона/воно є"
              ],
              [
                "mi",
                "smo",
                "ми є"
              ],
              [
                "vi",
                "ste",
                "ви є"
              ],
              [
                "oni / one",
                "su",
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
                "Ona je liječnica.",
                "Вона лікарка."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Biti (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ne\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка ne ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "The negative particle ne goes directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Znam.",
                "Ne znam.",
                "Я знаю. / Я не знаю."
              ],
              [
                "On dolazi.",
                "On ne dolazi.",
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
                "On nije došao.",
                "Він не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ne — A1"
      },
      {
        "id": "questions",
        "title": "Питання з \"li\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою li одразу після дієслова.",
            "en": {
              "text": "Yes/no questions are often formed with the particle li right after the verb."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Umoran si.",
                "Jesi li umoran?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Imaš vremena.",
                "Imaš li vremena?",
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
                "Imaš li vremena?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Li — A1"
      },
      {
        "id": "cases",
        "title": "Сім відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Боснійські іменники, як і українські, змінюються за сімома відмінками — закінчення показують роль слова в реченні.",
            "en": {
              "text": "Bosnian nouns, like Ukrainian ones, decline through seven cases — the ending shows a word's role in the sentence."
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
                "Vidim psa.",
                "Я бачу собаку (знахідний відмінок від \"pas\")."
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
        "title": "Prezent (sadašnje vrijeme) — A1",
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
            "title": "\"raditi\" (робити) — теперішній час",
            "rows": [
              [
                "ja",
                "radim",
                "я роблю"
              ],
              [
                "ti",
                "radiš",
                "ти робиш"
              ],
              [
                "on / ona / ono",
                "radi",
                "він/вона/воно робить"
              ],
              [
                "mi",
                "radimo",
                "ми робимо"
              ],
              [
                "vi",
                "radite",
                "ви робите"
              ],
              [
                "oni / one",
                "rade",
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
                "Radim u banci.",
                "Я працюю в банку."
              ],
              [
                "Oni piju kahvu.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-aspect",
        "title": "Svršeni i nesvršeni glagolski vid — A2",
        "titleEn": "Perfective & Imperfective Aspect — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне боснійське дієслово має вид: несвершений (тривала або повторювана дія) або свершений (одноразова, завершена дія з результатом).",
            "en": {
              "text": "Every Bosnian verb has an aspect: imperfective (ongoing/repeated action) or perfective (a single completed action with a result)."
            }
          },
          {
            "type": "table",
            "title": "Несвершений ↔ свершений",
            "rows": [
              [
                "čitati",
                "pročitati",
                "читати / прочитати"
              ],
              [
                "pisati",
                "napisati",
                "писати / написати"
              ],
              [
                "kupovati",
                "kupiti",
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
                "Čitao sam knjigu cijelo veče.",
                "Я читав книгу весь вечір (процес)."
              ],
              [
                "Pročitao sam knjigu za jedan dan.",
                "Я прочитав книгу за один день (результат)."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pairs",
        "title": "Vidski parovi i prefiksi — B1",
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
                "na-",
                "pisati → napisati",
                "писати → написати"
              ],
              [
                "pro-",
                "čitati → pročitati",
                "читати → прочитати"
              ],
              [
                "u-",
                "raditi → uraditi",
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
                "Uradio sam domaći zadatak.",
                "Я зробив домашнє завдання."
              ],
              [
                "Napisala je pismo.",
                "Вона написала листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Perfekt (glavno prošlo vrijeme) — A1",
        "titleEn": "Perfect Tense (Main Past Tense) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект — основний і найуживаніший минулий час, утворюється з допоміжного дієслова \"biti\" в теперішньому часі та дієприкметника минулого часу на -o/-la/-lo/-li/-le.",
            "en": {
              "text": "The perfect tense is the main, most commonly used past tense, formed with the present tense of \"biti\" plus the l-participle (-o/-la/-lo/-li/-le)."
            }
          },
          {
            "type": "formula",
            "title": "\"raditi\" (робити) — perfekt",
            "rows": [
              [
                "ja (чол.)",
                "radio sam",
                "я робив"
              ],
              [
                "ja (жін.)",
                "radila sam",
                "я робила"
              ],
              [
                "ti (чол.)",
                "radio si",
                "ти робив"
              ],
              [
                "on",
                "radio je",
                "він робив"
              ],
              [
                "mi",
                "radili smo",
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
                "Jučer sam radio do kasno.",
                "Вчора я працював допізна."
              ],
              [
                "One su gledale film.",
                "Вони (жін.) дивилися фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist",
        "title": "Aorist (pripovjedačka prošlost) — B2",
        "titleEn": "Aorist — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист — літературний, розповідний минулий час, що утворюється переважно від свершених дієслів. У сучасній розмовній мові вживається рідко.",
            "en": {
              "text": "The aorist is a literary, narrative past tense formed mainly from perfective verbs. In modern spoken language it's rare."
            }
          },
          {
            "type": "formula",
            "title": "\"reći\" (сказати) — aorist",
            "rows": [
              [
                "ja",
                "rekoh",
                "я сказав"
              ],
              [
                "ti",
                "reče",
                "ти сказав"
              ],
              [
                "on",
                "reče",
                "він сказав"
              ],
              [
                "mi",
                "rekosmo",
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
                "Odoh kući.",
                "Я пішов додому (літ. форма)."
              ],
              [
                "Viđeh ga juče.",
                "Я його вчора бачив (літ. форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect",
        "title": "Imperfekt — B2",
        "titleEn": "Imperfect — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект описує тривалу дію в минулому й утворюється переважно від несвершених дієслів. У сучасній розмовній мові майже не використовується — заміняється перфектом.",
            "en": {
              "text": "The imperfect describes an ongoing past action and is formed mainly from imperfective verbs. In modern spoken language it's almost never used — replaced by the perfect."
            }
          },
          {
            "type": "formula",
            "title": "\"pisati\" (писати) — imperfekt",
            "rows": [
              [
                "ja",
                "pisah",
                "я писав (процес)"
              ],
              [
                "ti",
                "pisaše",
                "ти писав"
              ],
              [
                "on",
                "pisaše",
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
                "Bijaše to davno.",
                "Це було давно (літературний стиль)."
              ],
              [
                "Pisah joj svaki dan.",
                "Я писав їй щодня (літ. форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect",
        "title": "Pluskvamperfekt — B2",
        "titleEn": "Pluperfect — B2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект виражає дію, що відбулася раніше за іншу минулу дію. Утворюється перфектом дієслова \"biti\" (bio sam / bio si...) + дієприкметник минулого часу основного дієслова.",
            "en": {
              "text": "The pluperfect expresses an action that happened before another past action. It's formed with the perfect of \"biti\" (bio sam / bio si...) plus the main verb's l-participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "bio sam + radio",
                "bio sam radio",
                "я вже був робив (до того)"
              ],
              [
                "bila je + otišla",
                "bila je otišla",
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
                "Već sam bio jeo kad si stigao.",
                "Я вже поїв, коли ти прийшов."
              ],
              [
                "Ona je bila otišla prije nego što smo mi stigli.",
                "Вона вже пішла, перш ніж ми прийшли."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-i",
        "title": "Futur I — A2",
        "titleEn": "Future I — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час утворюється допоміжним дієсловом \"ću/ćeš/će...\" + інфінітив. Якщо допоміжне дієслово стоїть після інфінітива, останній втрачає -i, і форми зливаються в одне слово.",
            "en": {
              "text": "The simple future is formed with the auxiliary \"ću/ćeš/će...\" plus the infinitive. If the auxiliary follows the infinitive, the infinitive drops its final -i and the two merge into one word."
            }
          },
          {
            "type": "formula",
            "title": "\"raditi\" (робити) — futur I",
            "rows": [
              [
                "ja",
                "ću raditi / radiću",
                "я робитиму"
              ],
              [
                "ti",
                "ćeš raditi / radićeš",
                "ти робитимеш"
              ],
              [
                "on / ona",
                "će raditi / radiće",
                "він/вона робитиме"
              ],
              [
                "mi",
                "ćemo raditi",
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
                "Sutra ću raditi cijeli dan.",
                "Завтра я працюватиму цілий день."
              ],
              [
                "Vidjećemo se uskoro.",
                "Ми скоро побачимося."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-ii",
        "title": "Futur II (predbuduće vrijeme) — B1",
        "titleEn": "Future II (Anterior Future) — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Futur II виражає дію, що завершиться до іншої майбутньої дії, і вживається переважно в підрядних часових та умовних реченнях. Утворюється презентом свершеного \"biti\" (budem, budeš...) + дієприкметник минулого часу.",
            "en": {
              "text": "Future II expresses an action that will be completed before another future action, used mainly in temporal and conditional subordinate clauses. Formed with the perfective present of \"biti\" (budem, budeš...) plus the l-participle."
            }
          },
          {
            "type": "formula",
            "title": "\"završiti\" (закінчити) — futur II",
            "rows": [
              [
                "ja",
                "budem završio",
                "я закінчу (до того)"
              ],
              [
                "ti",
                "budeš završio",
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
                "Kad budem završio posao, zvaću te.",
                "Коли я закінчу роботу, я тобі подзвоню."
              ],
              [
                "Ako budeš imao vremena, dođi.",
                "Якщо в тебе буде час, приходь."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Imperativ — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від основи теперішнього часу. 2-га особа однини зазвичай має закінчення -i/-j, 1-ша особа множини -imo/-jmo, 2-га особа множини -ite/-jte.",
            "en": {
              "text": "The imperative is formed from the present-tense stem. The 2nd person singular usually ends in -i/-j, the 1st person plural in -imo/-jmo, and the 2nd person plural in -ite/-jte."
            }
          },
          {
            "type": "formula",
            "title": "\"raditi\" (робити) — imperativ",
            "rows": [
              [
                "ti",
                "Radi!",
                "Роби!"
              ],
              [
                "mi",
                "Radimo!",
                "Робімо!"
              ],
              [
                "vi",
                "Radite!",
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
                "Zatvori vrata, molim te.",
                "Зачини двері, будь ласка."
              ],
              [
                "Hajdemo u bioskop!",
                "Ходімо в кіно!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-i",
        "title": "Kondicional I — B1",
        "titleEn": "Present Conditional — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється допоміжним \"bih/bi/bi/bismo/biste/bi\" (аорист від biti) + дієприкметник минулого часу основного дієслова, узгоджений у роді й числі.",
            "en": {
              "text": "The conditional is formed with the auxiliary \"bih/bi/bi/bismo/biste/bi\" (the aorist of biti) plus the l-participle of the main verb, agreeing in gender and number."
            }
          },
          {
            "type": "formula",
            "title": "\"raditi\" (робити) — kondicional",
            "rows": [
              [
                "ja (чол.)",
                "radio bih",
                "я робив би"
              ],
              [
                "ti (чол.)",
                "radio bi",
                "ти робив би"
              ],
              [
                "on",
                "radio bi",
                "він робив би"
              ],
              [
                "mi",
                "radili bismo",
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
                "Volio bih putovati više.",
                "Я хотів би більше подорожувати."
              ],
              [
                "Da imam vremena, došao bih.",
                "Якби в мене був час, я прийшов би."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-ii",
        "title": "Kondicional II — B2",
        "titleEn": "Past Conditional — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Kondicional II виражає нереальну умову в минулому — те, що не сталося. Утворюється: kondicional дієслова \"biti\" (bio bih...) + дієприкметник минулого часу головного дієслова.",
            "en": {
              "text": "Kondicional II expresses an unreal past condition — something that did not happen. It's formed with the conditional of \"biti\" (bio bih...) plus the main verb's l-participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "bio bih + radio",
                "bio bih radio",
                "я був би зробив"
              ],
              [
                "bila bi + došla",
                "bila bi došla",
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
                "Da sam znao, bio bih došao ranije.",
                "Якби я знав, я прийшов би раніше."
              ],
              [
                "Bila bi pomogla da je mogla.",
                "Вона допомогла б, якби могла."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-adverbs",
        "title": "Glagolski prilozi — B1",
        "titleEn": "Verbal Adverbs — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник теперішнього часу на -ući утворюється від несвершених дієслів і описує одночасну дію. Дієприслівник минулого часу на -avši/-vši утворюється від свершених дієслів і описує попередню дію.",
            "en": {
              "text": "The present verbal adverb -ući is formed from imperfective verbs and describes a simultaneous action. The past verbal adverb -avši/-vši is formed from perfective verbs and describes a prior action."
            }
          },
          {
            "type": "table",
            "title": "Приклади утворення",
            "rows": [
              [
                "ići",
                "idući",
                "ідучи"
              ],
              [
                "vidjeti",
                "vidjevši",
                "побачивши"
              ],
              [
                "reći",
                "rekavši",
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
                "Idući u školu, sreo sam prijatelja.",
                "Ідучи до школи, я зустрів друга."
              ],
              [
                "Rekavši to, otišla je.",
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
        "title": "Genitiv (koga? čega?) — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (genitiv) відповідає на питання \"кого? чого?\". Уживається після багатьох прийменників, після числівників 5+ і для вираження належності.",
            "en": {
              "text": "The genitive answers \"of whom? of what?\". Used after many prepositions, after numerals 5+, and to express possession."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Genitiv",
            "rows": [
              [
                "grad (місто)",
                "grada",
                "centar grada (центр міста)"
              ],
              [
                "kahva (кава)",
                "kahve",
                "šoljica kahve (чашка кави)"
              ],
              [
                "dijete (дитина)",
                "djeteta",
                "igračka djeteta (іграшка дитини)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nemam vremena.",
                "У мене немає часу."
              ],
              [
                "To je auto mog brata.",
                "Це машина мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Dativ (kome? čemu?) — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (dativ) відповідає на питання \"кому? чому?\" і позначає одержувача дії.",
            "en": {
              "text": "The dative answers \"to whom? to what?\" and marks the recipient of an action."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Dativ",
            "rows": [
              [
                "majka (мама)",
                "majci",
                "Dajem dar majci. (Даю подарунок мамі.)"
              ],
              [
                "brat (брат)",
                "bratu",
                "Pomažem bratu. (Допомагаю братові.)"
              ],
              [
                "dijete (дитина)",
                "djetetu",
                "Čitam djetetu. (Читаю дитині.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rekao sam joj istinu.",
                "Я сказав їй правду."
              ],
              [
                "To je teško djetetu.",
                "Це важко для дитини."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Akuzativ (koga? šta?) — A1",
        "titleEn": "Accusative Case — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (akuzativ) відповідає на питання \"кого? що?\" і позначає прямий об'єкт дії. Для істот чоловічого роду форма схожа на родовий, для неістот — на називний.",
            "en": {
              "text": "The accusative answers \"whom? what?\" and marks the direct object. For masculine animate nouns the form resembles the genitive; for inanimate nouns it resembles the nominative."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Akuzativ",
            "rows": [
              [
                "pas (пес, жив.)",
                "psa",
                "Vidim psa. (Я бачу пса.)"
              ],
              [
                "sto (стіл, нежив.)",
                "sto",
                "Vidim sto. (Я бачу стіл.)"
              ],
              [
                "kahva (кава)",
                "kahvu",
                "Pijem kahvu. (Я п'ю каву.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Čitam knjigu.",
                "Я читаю книгу."
              ],
              [
                "Volim taj film.",
                "Мені подобається цей фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-case",
        "title": "Vokativ — B1",
        "titleEn": "Vocative Case — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок (vokativ) уживається при прямому зверненні — переважно з іменами й спорідненими словами.",
            "en": {
              "text": "The vocative is used when addressing someone directly — mainly with names and kinship terms."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Vokativ",
            "rows": [
              [
                "Amir",
                "Amire!",
                "Аміре!"
              ],
              [
                "Selma",
                "Selmo!",
                "Сельмо!"
              ],
              [
                "prijatelj (друг)",
                "prijatelju!",
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
                "Majko, gdje si?",
                "Мамо, де ти?"
              ],
              [
                "Hasane, dođi ovamo!",
                "Хасане, ходи сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Lokativ (o kome? o čemu?) — A2",
        "titleEn": "Locative Case — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (lokativ) відповідає на питання \"про кого? про що? де?\" і завжди вживається з прийменником (u, na, o, po, pri).",
            "en": {
              "text": "The locative answers \"about whom/what? where?\" and is always used with a preposition (u, na, o, po, pri)."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Lokativ",
            "rows": [
              [
                "kuća (дім)",
                "kući",
                "u kući (вдома)"
              ],
              [
                "čaršija (базар/центр)",
                "čaršiji",
                "u čaršiji (на базарі)"
              ],
              [
                "grad (місто)",
                "gradu",
                "u gradu (в місті)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Radim u banci.",
                "Я працюю в банку."
              ],
              [
                "Pričamo o poslu.",
                "Ми говоримо про роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Instrumental (kim? čim?) — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (instrumental) відповідає на питання \"ким? чим?\" і позначає знаряддя дії або супровід (з прийменником s/sa).",
            "en": {
              "text": "The instrumental answers \"by whom? by what?\" and marks the instrument of an action or accompaniment (with the preposition s/sa)."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Instrumental",
            "rows": [
              [
                "nož (ніж)",
                "nožem",
                "Režem nožem. (Я ріжу ножем.)"
              ],
              [
                "olovka (олівець)",
                "olovkom",
                "Pišem olovkom. (Я пишу олівцем.)"
              ],
              [
                "prijatelj (друг)",
                "prijateljem",
                "s prijateljem (з другом)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Idemo autobusom.",
                "Ми їдемо автобусом."
              ],
              [
                "Šetam sa psom.",
                "Я гуляю з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-masculine",
        "title": "Sklonidba muškog roda — A2",
        "titleEn": "Masculine Noun Declension — A2",
        "emoji": "🧑",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники чоловічого роду переважно не мають закінчення в називному однини й приймають -a в родовому.",
            "en": {
              "text": "Masculine nouns usually have no ending in the nominative singular and take -a in the genitive."
            }
          },
          {
            "type": "table",
            "title": "\"student\" (студент) за відмінками",
            "rows": [
              [
                "Nominativ",
                "student",
                "хто?"
              ],
              [
                "Genitiv",
                "studenta",
                "кого?"
              ],
              [
                "Dativ",
                "studentu",
                "кому?"
              ],
              [
                "Akuzativ",
                "studenta",
                "кого?"
              ],
              [
                "Instrumental",
                "studentom",
                "ким?"
              ],
              [
                "Lokativ",
                "studentu",
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
                "Taj student dobro uči.",
                "Цей студент добре навчається."
              ],
              [
                "Razgovaram sa studentom.",
                "Я розмовляю зі студентом."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-feminine",
        "title": "Sklonidba ženskog roda — A2",
        "titleEn": "Feminine Noun Declension — A2",
        "emoji": "👩",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість іменників жіночого роду закінчуються на -a та відмінюються за єдиним стандартним зразком.",
            "en": {
              "text": "Most feminine nouns end in -a and follow a single standard declension pattern."
            }
          },
          {
            "type": "table",
            "title": "\"žena\" (жінка) за відмінками",
            "rows": [
              [
                "Nominativ",
                "žena",
                "хто?"
              ],
              [
                "Genitiv",
                "žene",
                "кого?"
              ],
              [
                "Dativ",
                "ženi",
                "кому?"
              ],
              [
                "Akuzativ",
                "ženu",
                "кого?"
              ],
              [
                "Instrumental",
                "ženom",
                "ким?"
              ],
              [
                "Lokativ",
                "ženi",
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
                "Ta žena je ljekarka.",
                "Ця жінка лікарка."
              ],
              [
                "Razgovaram sa ženom.",
                "Я розмовляю з жінкою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-neuter",
        "title": "Sklonidba srednjeg roda — A2",
        "titleEn": "Neuter Noun Declension — A2",
        "emoji": "🧒",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники середнього роду закінчуються на -o або -e. Деякі, як \"dijete\" (дитина), у непрямих відмінках приймають додатковий суфікс -et-.",
            "en": {
              "text": "Neuter nouns end in -o or -e. Some, like \"dijete\" (child), take the extra infix -et- in oblique cases."
            }
          },
          {
            "type": "table",
            "title": "\"selo\" (село) за відмінками",
            "rows": [
              [
                "Nominativ",
                "selo",
                "що?"
              ],
              [
                "Genitiv",
                "sela",
                "чого?"
              ],
              [
                "Dativ",
                "selu",
                "чому?"
              ],
              [
                "Akuzativ",
                "selo",
                "що?"
              ],
              [
                "Instrumental",
                "selom",
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
                "Živimo u malom selu.",
                "Ми живемо в маленькому селі."
              ],
              [
                "To dijete je vrlo pametno.",
                "Ця дитина дуже розумна."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-plural",
        "title": "Genitiv množine — B1",
        "titleEn": "Genitive Plural — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок множини — одна зі складніших форм: у жіночому та середньому роді часто вставляється голосний -a- між приголосними основи, у чоловічому додається -a.",
            "en": {
              "text": "The genitive plural is one of the trickier forms: feminine and neuter nouns often insert a vowel -a- between stem consonants, while masculine nouns add -a."
            }
          },
          {
            "type": "table",
            "title": "Приклади родового множини",
            "rows": [
              [
                "sestra (сестра)",
                "sestara",
                "багато сестер"
              ],
              [
                "student (студент)",
                "studenata",
                "багато студентів"
              ],
              [
                "knjiga (книга)",
                "knjiga",
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
                "Imam pet sestara.",
                "У мене п'ять сестер."
              ],
              [
                "Ima puno studenata na fakultetu.",
                "На факультеті багато студентів."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-declension",
        "title": "Sklonidba pridjeva — A2",
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
            "title": "\"velik\" (великий) за родами",
            "rows": [
              [
                "чоловічий",
                "velik grad",
                "велике місто"
              ],
              [
                "жіночий",
                "velika kuća",
                "великий дім"
              ],
              [
                "середній",
                "veliko selo",
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
                "Živim u velikom gradu.",
                "Я живу у великому місті."
              ],
              [
                "To je lijepa haljina.",
                "Це гарна сукня."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-definite-indefinite",
        "title": "Određeni i neodređeni vid pridjeva — B1",
        "titleEn": "Definite & Indefinite Adjectives — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Боснійські прикметники мають означену форму (для конкретного, відомого предмета) і неозначену (для будь-якого предмета цього типу) — щось на кшталт артикля, вбудованого в закінчення прикметника.",
            "en": {
              "text": "Bosnian adjectives have a definite form (for a specific, known object) and an indefinite form (for any object of that type) — functioning somewhat like an article built into the adjective ending."
            }
          },
          {
            "type": "table",
            "title": "Неозначена ↔ означена форма",
            "rows": [
              [
                "nov grad",
                "novi grad",
                "нове місто / (те саме) нове місто"
              ],
              [
                "mlad čovjek",
                "mladi čovjek",
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
                "To je zanimljiv film.",
                "Це цікавий фільм (якийсь)."
              ],
              [
                "Zanimljivi film koji smo gledali.",
                "Цікавий фільм, який ми дивилися (той самий)."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Slaganje pridjeva s imenicom — A1",
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
                "mali pas",
                "маленький пес",
                "чол. одн."
              ],
              [
                "mala mačka",
                "маленька кішка",
                "жін. одн."
              ],
              [
                "mali psi",
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
                "Imam malog psa.",
                "У мене маленький пес."
              ],
              [
                "To su zanimljive knjige.",
                "Це цікаві книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Komparacija pridjeva — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -iji/-ji/-ši, найвищий — додаванням префікса naj- до вищого ступеня.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -iji/-ji/-ši, and the superlative by adding the prefix naj- to the comparative."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "lijep",
                "ljepši",
                "najljepši"
              ],
              [
                "pametan",
                "pametniji",
                "najpametniji"
              ],
              [
                "brz",
                "brži",
                "najbrži"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ovaj grad je ljepši od onog.",
                "Це місто гарніше за те."
              ],
              [
                "To je najbrži auto na svijetu.",
                "Це найшвидша машина у світі."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Nepravilna komparacija — B1",
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
                "dobar (добрий)",
                "bolji",
                "najbolji"
              ],
              [
                "loš (поганий)",
                "gori",
                "najgori"
              ],
              [
                "velik (великий)",
                "veći",
                "najveći"
              ],
              [
                "malen (малий)",
                "manji",
                "najmanji"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To je bolji plan.",
                "Це кращий план."
              ],
              [
                "On je najbolji učenik u razredu.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Tvorba priloga — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії утворюється від прикметників середнього роду однини, тобто закінченням -o чи -e.",
            "en": {
              "text": "Most manner adverbs are formed from the neuter singular form of the adjective, i.e. ending in -o or -e."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "brz (швидкий)",
                "brzo",
                "швидко"
              ],
              [
                "lijep (гарний)",
                "lijepo",
                "гарно"
              ],
              [
                "dobar (добрий)",
                "dobro",
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
                "On govori brzo.",
                "Він говорить швидко."
              ],
              [
                "Ona lijepo pjeva.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-declension",
        "title": "Sklonidba ličnih zamjenica — A2",
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
            "title": "\"ja\" (я) за відмінками",
            "rows": [
              [
                "Nominativ",
                "ja",
                "я"
              ],
              [
                "Genitiv",
                "mene / me",
                "мене"
              ],
              [
                "Dativ",
                "meni / mi",
                "мені"
              ],
              [
                "Akuzativ",
                "mene / me",
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
                "On me ne čuje.",
                "Він мене не чує."
              ],
              [
                "Daj mi to.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "clitic-word-order",
        "title": "Red riječi klitika (Wackernagelov položaj) — B1",
        "titleEn": "Clitic Word Order (Wackernagel's Position) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі (клітичні) форми — займенники, допоміжне \"biti\" (sam, si, je...), частка \"li\" — завжди стоять на другій позиції в реченні, одразу після першого наголошеного слова чи групи слів.",
            "en": {
              "text": "Short (clitic) forms — pronouns, the auxiliary \"biti\" (sam, si, je...), the particle \"li\" — always occupy the second position in the clause, right after the first stressed word or phrase."
            }
          },
          {
            "type": "table",
            "title": "Клітики на другій позиції",
            "rows": [
              [
                "Ja sam mu to rekao.",
                "Я йому це сказав.",
                "sam/mu/to — клітики"
              ],
              [
                "Juče sam mu to rekao.",
                "Вчора я йому це сказав.",
                "клітики після \"juče\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vidio sam ga juče.",
                "Я бачив його вчора."
              ],
              [
                "Moj otac mi je to poklonio.",
                "Мій батько подарував мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Posvojne zamjenice — A1",
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
                "moj",
                "мій",
                "moj dom"
              ],
              [
                "tvoj",
                "твій",
                "tvoj pas"
              ],
              [
                "naš",
                "наш",
                "naš auto"
              ],
              [
                "njihov",
                "їхній",
                "njihov dom"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To je moja sestra.",
                "Це моя сестра."
              ],
              [
                "Gdje su tvoji ključevi?",
                "Де твої ключі?"
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-adjectives-from-nouns",
        "title": "Posvojni pridjevi od imenica — B1",
        "titleEn": "Possessive Adjectives from Nouns — B1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "У боснійській для належності людині часто вживають присвійний прикметник, утворений від власного імені чи іменника суфіксом -ov/-ev/-in, а не родовий відмінок.",
            "en": {
              "text": "In Bosnian, possession by a person is often expressed with a possessive adjective formed from the name or noun with the suffix -ov/-ev/-in, rather than the genitive case."
            }
          },
          {
            "type": "table",
            "title": "Іменник → присвійний прикметник",
            "rows": [
              [
                "Amir",
                "Amirov auto",
                "машина Аміра"
              ],
              [
                "Selma",
                "Selmina knjiga",
                "книга Сельми"
              ],
              [
                "otac (батько)",
                "očeva kuća",
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
                "To je Adnanov brat.",
                "Це брат Аднана."
              ],
              [
                "Amrina torba je crvena.",
                "Сумка Амри червона."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Pokazne zamjenice — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Боснійська має триступеневу систему вказівних займенників за відстанню від мовця: ovaj (близько до мовця), taj (близько до співрозмовника), onaj (далеко від обох).",
            "en": {
              "text": "Bosnian has a three-way demonstrative system based on distance from the speaker: ovaj (near the speaker), taj (near the listener), onaj (far from both)."
            }
          },
          {
            "type": "table",
            "title": "Три ступені відстані",
            "rows": [
              [
                "ovaj grad",
                "це місто (тут)",
                "близько до мовця"
              ],
              [
                "taj grad",
                "те місто (там у тебе)",
                "близько до співрозмовника"
              ],
              [
                "onaj grad",
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
                "Ova knjiga je moja.",
                "Ця книга моя."
              ],
              [
                "Onaj čovjek tamo je moj komšija.",
                "Он той чоловік — мій сусід."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Upitne zamjenice — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники \"ko\" (хто) і \"šta\" (що) відмінюються за відмінками так само, як іменники, на які вони вказують.",
            "en": {
              "text": "The interrogative pronouns \"ko\" (who) and \"šta\" (what) decline by case, like the nouns they stand for."
            }
          },
          {
            "type": "table",
            "title": "\"ko\" за відмінками",
            "rows": [
              [
                "Nominativ",
                "ko?",
                "хто?"
              ],
              [
                "Genitiv",
                "koga?",
                "кого?"
              ],
              [
                "Dativ",
                "kome?",
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
                "Ko je to?",
                "Хто це?"
              ],
              [
                "Šta radiš?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-koji",
        "title": "Odnosna zamjenica \"koji\" — B1",
        "titleEn": "Relative Pronoun Koji — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"koji\" (який) уводить підрядні означальні речення й узгоджується з іменником, до якого відноситься, у роді та числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "The pronoun \"koji\" (which/who) introduces relative clauses, agreeing with its antecedent in gender and number, while its case depends on its role in the clause."
            }
          },
          {
            "type": "table",
            "title": "Форми \"koji\" за родом",
            "rows": [
              [
                "čovjek koji...",
                "чоловік, який...",
                "чол."
              ],
              [
                "žena koja...",
                "жінка, яка...",
                "жін."
              ],
              [
                "dijete koje...",
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
                "To je knjiga koju čitam.",
                "Це книга, яку я читаю."
              ],
              [
                "Poznajem čovjeka koji tamo stoji.",
                "Я знаю чоловіка, який там стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-se-sebe",
        "title": "Povratna zamjenica \"se/sebe\" — A2",
        "titleEn": "Reflexive Pronoun Se/Sebe — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"se\" (коротка форма) чи \"sebe\" (повна форма) показує, що дія спрямована на самого діяча. Не змінюється за особами.",
            "en": {
              "text": "The reflexive pronoun \"se\" (short) or \"sebe\" (full) shows the action is directed back at the doer. It doesn't change by person."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "prati se",
                "Perem se.",
                "Я митися/Я мию себе."
              ],
              [
                "vidjeti sebe",
                "Vidim sebe u ogledalu.",
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
                "On se oblači.",
                "Він одягається."
              ],
              [
                "Mislim samo na sebe.",
                "Я думаю лише про себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Neodređene zamjenice — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники утворюються від питальних додаванням частки net- (хтось, щось) і відмінюються так само, як вони.",
            "en": {
              "text": "Indefinite pronouns are formed from interrogatives with the particle net- (someone, something) and decline the same way."
            }
          },
          {
            "type": "table",
            "title": "Питальний → неозначений",
            "rows": [
              [
                "ko → neko",
                "хто → хтось"
              ],
              [
                "šta → nešto",
                "що → щось"
              ],
              [
                "koji → neki",
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
                "Neko zvoni na vrata.",
                "Хтось дзвонить у двері."
              ],
              [
                "Imaš li neka pitanja?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-1-4",
        "title": "Brojevi 1–4 — A1",
        "titleEn": "Cardinal Numbers 1-4 — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник \"jedan\" (один) узгоджується з іменником у роді як прикметник. Числівник \"dva\" (два) також має жіночу форму \"dvije\". Числівники 2-4 вимагають форми, схожої на називний множини.",
            "en": {
              "text": "\"Jedan\" (one) agrees with the noun in gender, like an adjective. \"Dva\" (two) also has a feminine form \"dvije\". Numbers 2-4 require a nominative-plural-like form."
            }
          },
          {
            "type": "table",
            "title": "1–4",
            "rows": [
              [
                "jedan / jedna / jedno",
                "один/одна/одне",
                "1"
              ],
              [
                "dva / dvije",
                "два/дві",
                "2"
              ],
              [
                "tri",
                "три",
                "3"
              ],
              [
                "četiri",
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
                "Imam jednog brata.",
                "У мене один брат."
              ],
              [
                "Vidim tri mačke.",
                "Я бачу три кішки."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-5plus",
        "title": "Brojevi od 5 nadalje — A2",
        "titleEn": "Cardinal Numbers 5+ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 5 і вище (а також \"puno\"/\"malo\") вимагають від іменника форми родового відмінка множини й не змінюються за родом.",
            "en": {
              "text": "Numerals 5 and above (as well as \"puno\"/many, \"malo\"/few) require the noun in the genitive plural and don't change by gender."
            }
          },
          {
            "type": "table",
            "title": "5, 10, 100",
            "rows": [
              [
                "pet mačaka",
                "п'ять кішок",
                "родовий мн."
              ],
              [
                "deset kuća",
                "десять будинків",
                "родовий мн."
              ],
              [
                "sto ljudi",
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
                "Imam pet knjiga.",
                "У мене п'ять книг."
              ],
              [
                "To košta sto maraka.",
                "Це коштує сто марок."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective",
        "title": "Zbirni brojevi — B1",
        "titleEn": "Collective Numbers — B1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Збірні числівники (dvoje, troje, četvero...) уживаються для позначення групи змішаної статі або з іменниками, що мають лише форму множини.",
            "en": {
              "text": "Collective numbers (dvoje, troje, četvero...) are used for mixed-gender groups or with nouns that only have a plural form."
            }
          },
          {
            "type": "table",
            "title": "Звичайний ↔ збірний",
            "rows": [
              [
                "dva (два)",
                "dvoje djece",
                "двоє дітей"
              ],
              [
                "tri (три)",
                "troje ljudi",
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
                "Imamo dvoje djece.",
                "У нас двоє дітей."
              ],
              [
                "Došlo je petero gostiju.",
                "Прийшло п'ятеро гостей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Redni brojevi — A2",
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
                "prvi",
                "перший",
                "1-й"
              ],
              [
                "drugi",
                "другий",
                "2-й"
              ],
              [
                "treći",
                "третій",
                "3-й"
              ],
              [
                "deseti",
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
                "To je moj prvi dan na poslu.",
                "Це мій перший день на роботі."
              ],
              [
                "Živim na drugom spratu.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-genitive",
        "title": "Prijedlozi s genitivom — A2",
        "titleEn": "Prepositions with Genitive — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Багато поширених прийменників завжди керують родовим відмінком: bez (без), do (до), iz (з), od (від), kod (у, біля).",
            "en": {
              "text": "Many common prepositions always govern the genitive: bez (without), do (to), iz (from/out of), od (from), kod (at, near)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з родовим",
            "rows": [
              [
                "bez",
                "bez šećera",
                "без цукру"
              ],
              [
                "kod",
                "kod ljekara",
                "у лікаря"
              ],
              [
                "iz",
                "iz Sarajeva",
                "із Сараєва"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pijem kahvu bez mlijeka.",
                "Я п'ю каву без молока."
              ],
              [
                "Dolazim iz Bosne.",
                "Я з Боснії."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-accusative",
        "title": "Prijedlozi s akuzativom — A2",
        "titleEn": "Prepositions with Accusative — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники kroz (через), za (за, для), niz (вниз) керують знахідним відмінком.",
            "en": {
              "text": "The prepositions kroz (through), za (for), and niz (down along) govern the accusative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники зі знахідним",
            "rows": [
              [
                "kroz",
                "kroz šumu",
                "через ліс"
              ],
              [
                "za",
                "za tebe",
                "для тебе"
              ],
              [
                "niz",
                "niz rijeku",
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
                "Kupio sam poklon za majku.",
                "Я купив подарунок для мами."
              ],
              [
                "Šetamo kroz park.",
                "Ми гуляємо через парк."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-dative",
        "title": "Prijedlozi s dativom — B1",
        "titleEn": "Prepositions with Dative — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники k/ka (до, у напрямку) і prema (до, згідно з) керують давальним відмінком.",
            "en": {
              "text": "The prepositions k/ka (toward) and prema (toward, according to) govern the dative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з давальним",
            "rows": [
              [
                "k / ka",
                "k moru",
                "до моря"
              ],
              [
                "prema",
                "prema kući",
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
                "Idemo prema centru grada.",
                "Ми йдемо в напрямку центру міста."
              ],
              [
                "Prema njemu, sve je u redu.",
                "На його думку, все гаразд."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-instrumental",
        "title": "Prijedlozi s instrumentalom — A2",
        "titleEn": "Prepositions with Instrumental — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники s/sa (з, у значенні супроводу), pred (перед), nad (над), pod (під, без руху) керують орудним відмінком.",
            "en": {
              "text": "The prepositions s/sa (with), pred (in front of), nad (above), and pod (under, static) govern the instrumental case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з орудним",
            "rows": [
              [
                "s / sa",
                "s prijateljem",
                "з другом"
              ],
              [
                "pod",
                "pod stolom",
                "під столом"
              ],
              [
                "nad",
                "nad gradom",
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
                "Sjedim pred televizorom.",
                "Я сиджу перед телевізором."
              ],
              [
                "Mačka spava pod krevetom.",
                "Кіт спить під ліжком."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-locative",
        "title": "Prijedlozi s lokativom — A2",
        "titleEn": "Prepositions with Locative — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники u (в, без руху), na (на, без руху), o (про) і po (по) керують місцевим відмінком.",
            "en": {
              "text": "The prepositions u (in, static), na (on, static), o (about), and po (around) govern the locative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з місцевим",
            "rows": [
              [
                "u",
                "u kući",
                "у домі"
              ],
              [
                "na",
                "na stolu",
                "на столі"
              ],
              [
                "o",
                "o poslu",
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
                "Radim u banci.",
                "Я працюю в банку."
              ],
              [
                "Knjiga je na stolu.",
                "Книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "two-way-prepositions",
        "title": "Prijedlozi \"u/na\" s dva padeža — B1",
        "titleEn": "Two-Case Prepositions U/Na — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники u і na керують знахідним відмінком, коли позначають рух (куди?), і місцевим, коли позначають перебування без руху (де?).",
            "en": {
              "text": "The prepositions u and na govern the accusative when expressing motion (where to?) and the locative when expressing a static location (where?)."
            }
          },
          {
            "type": "table",
            "title": "Рух vs перебування",
            "rows": [
              [
                "Idem u grad.",
                "Я йду в місто.",
                "рух — akuzativ"
              ],
              [
                "Jesam u gradu.",
                "Я в місті.",
                "перебування — lokativ"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ulazim u sobu.",
                "Я заходжу в кімнату."
              ],
              [
                "Sjedim u sobi.",
                "Я сиджу в кімнаті."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-imati",
        "title": "Nijekanje s \"nemati\" — A2",
        "titleEn": "Negation with Nemati — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"imati\" (мати) у запереченні зливається в одне слово \"nemati\", і об'єкт при цьому найчастіше залишається в знахідному відмінку.",
            "en": {
              "text": "The verb \"imati\" (to have) fuses with negation into \"nemati\", and the object most often stays in the accusative."
            }
          },
          {
            "type": "formula",
            "title": "\"nemati\" — теперішній час",
            "rows": [
              [
                "ja",
                "nemam",
                "я не маю"
              ],
              [
                "ti",
                "nemaš",
                "ти не маєш"
              ],
              [
                "on",
                "nema",
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
                "Nemam vremena danas.",
                "У мене немає часу сьогодні."
              ],
              [
                "On nema auto.",
                "У нього немає машини."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Red riječi u rečenici — A2",
        "titleEn": "Word Order — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Боснійський порядок слів гнучкий, оскільки відмінки показують граматичну роль слова незалежно від позиції. Базовий порядок SVO, але зміна порядку слів зазвичай змінює наголос/фокус речення.",
            "en": {
              "text": "Bosnian word order is flexible because case endings mark grammatical role regardless of position. The basic order is SVO, but changing word order usually shifts emphasis or focus."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Amir je kupio knjigu.",
                "Амір купив книгу.",
                "нейтральний"
              ],
              [
                "Knjigu je kupio Amir.",
                "Книгу купив (саме) Амір.",
                "фокус на 'Амір'"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Svaki dan pijem kahvu.",
                "Щодня я п'ю каву."
              ],
              [
                "Kahvu pijem svaki dan.",
                "Каву я п'ю щодня (акцент на 'каву')."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Upitne riječi — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "gdje?",
                "де?",
                "Gdje si?"
              ],
              [
                "kada?",
                "коли?",
                "Kada dolaziš?"
              ],
              [
                "zašto?",
                "чому?",
                "Zašto plačeš?"
              ],
              [
                "kako?",
                "як?",
                "Kako si?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gdje je stanica?",
                "Де станція?"
              ],
              [
                "Zašto kasniš?",
                "Чому ти запізнюєшся?"
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Sastavni veznici — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "i",
                "і/та",
                "Ja i ti."
              ],
              [
                "ali",
                "але",
                "Želim, ali ne mogu."
              ],
              [
                "ili",
                "або",
                "Kahva ili čaj?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Volim čaj i kahvu.",
                "Мені подобається чай і кава."
              ],
              [
                "Htio bih ići, ali nemam vremena.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Zavisni veznici — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "da",
                "що/щоб",
                "Znam da dolaziš."
              ],
              [
                "jer",
                "тому що",
                "Nisam došao jer sam bio bolestan."
              ],
              [
                "ako",
                "якщо",
                "Ako imaš vremena, nazovi."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mislim da imaš pravo.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Ostat ću ako bude potrebno.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses",
        "title": "Zavisne (odnosne) rečenice — B1",
        "titleEn": "Relative Clauses — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні означальні речення вводяться займенником \"koji\" (який), узгодженим із означуваним іменником у роді й числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "Relative clauses are introduced by \"koji\" (which/who), agreeing with the antecedent in gender and number, while its case is determined by its role in the clause."
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
                "Kuća u kojoj živim je stara.",
                "Будинок, у якому я живу, старий."
              ],
              [
                "To je osoba o kojoj sam govorio.",
                "Це людина, про яку я говорив."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Povratni glagoli — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів уживаються з часткою \"se\" і мають відмінне значення від дієслова без неї. Se зазвичай стоїть на другій позиції в реченні разом з іншими клітиками.",
            "en": {
              "text": "Many verbs take the particle \"se\" and have a different meaning from the plain verb. Se usually occupies the second position of the clause together with other clitics."
            }
          },
          {
            "type": "table",
            "title": "Без se ↔ зі se",
            "rows": [
              [
                "prati (мити)",
                "prati se (митися)",
                "себе"
              ],
              [
                "učiti (вчити)",
                "učiti se (вчитися)",
                "себе"
              ],
              [
                "zvati (звати)",
                "zvati se (називатися)",
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
                "Kako se zoveš?",
                "Як тебе звати?"
              ],
              [
                "Učim se bosanski.",
                "Я вчу боснійську."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Bezlične konstrukcije \"treba/može\" — A2",
        "titleEn": "Impersonal Modal Constructions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові вирази treba (треба), može (можна) вживаються з інфінітивом або конструкцією \"da\" + теперішній час і не змінюються за особами.",
            "en": {
              "text": "The impersonal expressions treba (must/need) and može (may) take either the infinitive or a \"da\" + present construction, and never change by person."
            }
          },
          {
            "type": "table",
            "title": "Безособові конструкції",
            "rows": [
              [
                "treba",
                "Treba ići. / Treba da idem.",
                "Треба йти."
              ],
              [
                "može",
                "Može li se ući?",
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
                "Treba kupiti hljeb.",
                "Треба купити хліб."
              ],
              [
                "Ovdje se ne smije pušiti.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "da-constructions",
        "title": "Konstrukcija \"da\" umjesto infinitiva — B1",
        "titleEn": "Da-Constructions (Replacing the Infinitive) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "У боснійській, як і в сербській, конструкція \"da\" + дієслово в теперішньому часі часто вживається замість інфінітива навіть частіше, ніж у хорватській, надто в розмовній мові.",
            "en": {
              "text": "In Bosnian, as in Serbian, the construction \"da\" + present tense is often used instead of the infinitive even more than in Croatian, especially in colloquial speech."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив ↔ da-конструкція",
            "rows": [
              [
                "Želim ići.",
                "Želim da idem.",
                "Я хочу йти."
              ],
              [
                "Hoću da ti pomognem.",
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
                "Želim da mi pomogneš.",
                "Я хочу, щоб ти мені допоміг."
              ],
              [
                "Moram da idem.",
                "Мені треба йти."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Deminutivi — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -ić/-ica/-ce тощо і широко вживаються в повсякденному мовленні, виражаючи не лише розмір, а й теплоту.",
            "en": {
              "text": "Diminutives are formed with suffixes like -ić/-ica/-ce and are widely used in everyday speech, expressing not just size but warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "pas (пес)",
                "psić",
                "песик"
              ],
              [
                "kuća (будинок)",
                "kućica",
                "будиночок"
              ],
              [
                "mama",
                "mamica",
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
                "Imam malog psića.",
                "У мене маленький песик."
              ],
              [
                "Kupila sam sinčiću igračku.",
                "Я купила синочку іграшку."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Dani u sedmici — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від хорватської \"tjedan\", у боснійській \"тиждень\" — \"sedmica\" (від \"sedam\", сім) — типовий боснійський/сербський варіант замість західнослов'янського \"tjedan\".",
            "en": {
              "text": "Unlike Croatian \"tjedan\", Bosnian uses \"sedmica\" (from \"sedam\", seven) for \"week\" — the typical Bosnian/Serbian variant instead of the Western-influenced \"tjedan\"."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "ponedjeljak",
                "понеділок",
                "1"
              ],
              [
                "utorak",
                "вівторок",
                "2"
              ],
              [
                "srijeda",
                "середа",
                "3"
              ],
              [
                "nedjelja",
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
                "U ponedjeljak imam nastavu.",
                "У понеділок у мене заняття."
              ],
              [
                "Ova sedmica je bila naporna.",
                "Цей тиждень був важким."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Mjeseci i datumi — A2",
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
                "januar",
                "січень",
                "01"
              ],
              [
                "juli",
                "липень",
                "07"
              ],
              [
                "decembar",
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
                "Danas je peti maj.",
                "Сьогодні п'яте травня."
              ],
              [
                "Rođen sam u decembru.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Kazivanje vremena — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Koliko je sati?\", а відповідь уживає порядковий числівник у жіночому роді.",
            "en": {
              "text": "To ask the time, Bosnians say \"Koliko je sati?\", and the answer uses the feminine ordinal."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Jedan sat.",
                "Перша година.",
                "1:00"
              ],
              [
                "Pola tri.",
                "Половина третьої.",
                "2:30"
              ],
              [
                "Petnaest sati.",
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
                "Koliko je sati?",
                "Котра година?"
              ],
              [
                "Voz polazi u osam.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"ti\" i \"Vi\" (formalnost) — A2",
        "titleEn": "Ti vs Vi (Formality) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для неформального звертання вживають \"ti\" (2-га особа однини), для ввічливого/формального — \"Vi\" (2-га особа множини, з великої літери), навіть коли звертаються до однієї людини.",
            "en": {
              "text": "For informal address, Bosnian uses \"ti\" (2nd person singular); for polite/formal address it uses \"Vi\" (2nd person plural, capitalized), even to a single person."
            }
          },
          {
            "type": "table",
            "title": "ti ↔ Vi",
            "rows": [
              [
                "Kako si?",
                "Як ти? (неформально)",
                "ti"
              ],
              [
                "Kako ste?",
                "Як Ви? (формально)",
                "Vi"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Odakle ste?",
                "Звідки Ви?"
              ],
              [
                "Hvala vam na pomoći.",
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
        "title": "Nepravilni glagoli — B1",
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
                "ići (йти)",
                "idem, ideš, ide",
                "я йду, ти йдеш, він йде"
              ],
              [
                "htjeti (хотіти)",
                "hoću, hoćeš, hoće",
                "я хочу, ти хочеш, він хоче"
              ],
              [
                "moći (могти)",
                "mogu, možeš, može",
                "я можу, ти можеш, він може"
              ],
              [
                "jesti (їсти)",
                "jedem, jedeš, jede",
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
                "Ne mogu sada razgovarati.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Idem u prodavnicu, hoćeš li nešto?",
                "Я йду в магазин, хочеш щось?"
              ]
            ]
          }
        ]
      },
      {
        "id": "digraphia-latin-cyrillic",
        "title": "Latinica i ćirilica — B1",
        "titleEn": "Latin & Cyrillic Digraphia — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від суто латиничної хорватської, боснійська офіційно двоалфавітна: використовуються і латиниця (latinica), і кирилиця (ćirilica), хоча в побуті й освіті переважає латиниця.",
            "en": {
              "text": "Unlike purely Latin-script Croatian, Bosnian is officially digraphic: both the Latin alphabet (latinica) and Cyrillic (ćirilica) are used, though Latin dominates in daily life and education."
            }
          },
          {
            "type": "table",
            "title": "Latinica ↔ ćirilica",
            "rows": [
              [
                "dobar dan",
                "добар дан",
                "латиниця / кирилиця"
              ],
              [
                "hvala",
                "хвала",
                "латиниця / кирилиця"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ovaj tekst je pisan latinicom.",
                "Цей текст написаний латиницею."
              ],
              [
                "Neki dokumenti su na ćirilici.",
                "Деякі документи — кирилицею."
              ]
            ]
          }
        ]
      },
      {
        "id": "turkish-arabic-loanwords",
        "title": "Turcizmi u bosanskom jeziku — B1",
        "titleEn": "Turkish/Arabic/Persian Loanwords — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Через п'ятсотрічне османське панування боснійська зберегла значний пласт турецьких, арабських і перських запозичень (turcizmi), яких немає чи менше в хорватській/сербській — наприклад, kahva (кава, замість kava), sahat (годинник/час, поряд із sat), avlija (двір), merak (щире задоволення).",
            "en": {
              "text": "Due to five centuries of Ottoman rule, Bosnian retains a significant layer of Turkish, Arabic, and Persian loanwords (turcizmi) that are absent or rarer in Croatian/Serbian — e.g. kahva (coffee, instead of kava), sahat (clock/time, alongside sat), avlija (yard), merak (genuine delight)."
            }
          },
          {
            "type": "table",
            "title": "Приклади турцизмів",
            "rows": [
              [
                "kahva",
                "кава",
                "тур. kahve"
              ],
              [
                "avlija",
                "двір",
                "тур. avlu"
              ],
              [
                "merak",
                "щире задоволення",
                "ар./тур. merak"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Popili smo kahvu u avliji.",
                "Ми випили кави у дворі."
              ],
              [
                "Ovo mi je pravi merak.",
                "Це для мене справжня насолода."
              ]
            ]
          }
        ]
      }
    ]
  }
];
