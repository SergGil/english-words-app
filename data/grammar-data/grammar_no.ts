// Vymova — data/grammar-data/grammar_no.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NO: GrammarCategory[] = [
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
            "text": "Норвезькі дієслова не змінюються за особами чи числом — форма дієслова однакова для jeg, du, han тощо.",
            "en": {
              "text": "Norwegian verbs never change for person or number — the verb form is identical for jeg, du, han, and so on."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "jeg",
                "я"
              ],
              [
                "du",
                "ти"
              ],
              [
                "han / hun / den / det",
                "він / вона / воно"
              ],
              [
                "vi",
                "ми"
              ],
              [
                "de",
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
                "Jeg er lærer.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"å være\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"være\" (бути) має ЄДИНУ форму теперішнього часу — er — для всіх осіб та чисел.",
            "en": {
              "text": "The verb \"være\" (to be) has just ONE present-tense form — er — for every person and number."
            }
          },
          {
            "type": "formula",
            "title": "\"være\" (бути) — єдина форма",
            "rows": [
              [
                "jeg",
                "er",
                "я є"
              ],
              [
                "du",
                "er",
                "ти є"
              ],
              [
                "han / hun / den / det",
                "er",
                "він/вона/воно є"
              ],
              [
                "vi",
                "er",
                "ми є"
              ],
              [
                "de",
                "er",
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
                "De er trøtte.",
                "Вони втомлені."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Å Være (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ikke\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від українського \"не\" перед дієсловом, заперечна частка ikke в норвезькій ставиться ПІСЛЯ дієслова.",
            "en": {
              "text": "Unlike Ukrainian's pre-verbal negation, the negative particle ikke in Norwegian comes AFTER the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Jeg vet det.",
                "Jeg vet det ikke.",
                "Я це знаю. / Я цього не знаю."
              ],
              [
                "Han kommer.",
                "Han kommer ikke.",
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
                "Han kommer ikke.",
                "Він не прийде."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ikke — A1"
      },
      {
        "id": "questions",
        "title": "Питання — інверсія — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються перестановкою дієслова перед підметом (інверсія), без додаткових допоміжних слів.",
            "en": {
              "text": "Yes/no questions are formed by moving the verb before the subject (inversion), with no extra auxiliary word needed."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Du er trøtt.",
                "Er du trøtt?",
                "Ти втомлений. / Ти втомлений?"
              ],
              [
                "Du har tid.",
                "Har du tid?",
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
                "Har du tid?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Inversion — A1"
      },
      {
        "id": "suffixed-article",
        "title": "Артикль-суфікс — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль у норвезькій зазвичай приєднується як суфікс в кінці іменника, а не окремим словом перед ним.",
            "en": {
              "text": "The definite article in Norwegian is usually attached as a suffix at the end of the noun, rather than as a separate word before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "en bok → boka/boken",
                "книга → ця книга"
              ],
              [
                "et hus → huset",
                "дім → цей дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Boka er god.",
                "Ця книга хороша."
              ]
            ]
          }
        ],
        "titleEn": "The Suffixed Article — A1"
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
        "title": "Presens (nåtid) — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Норвезьке дієслово в теперішньому часі має ЄДИНУ форму для всіх осіб і чисел — зазвичай закінчення -r додається до основи інфінітива.",
            "en": {
              "text": "A Norwegian verb has a SINGLE present-tense form for every person and number — usually the ending -r is added to the infinitive stem."
            }
          },
          {
            "type": "formula",
            "title": "\"å jobbe\" (працювати) — presens",
            "rows": [
              [
                "jeg",
                "jobber",
                "я працюю"
              ],
              [
                "du",
                "jobber",
                "ти працюєш"
              ],
              [
                "han / hun",
                "jobber",
                "він/вона працює"
              ],
              [
                "vi",
                "jobber",
                "ми працюємо"
              ],
              [
                "de",
                "jobber",
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
                "Jeg jobber i en bank.",
                "Я працюю в банку."
              ],
              [
                "De drikker kaffe.",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Preteritum (datid) — A1",
        "titleEn": "Past Tense — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час, як і теперішній, має єдину форму для всіх осіб. Слабкі дієслова додають -et/-a/-te, сильні дієслова змінюють кореневий голосний.",
            "en": {
              "text": "The past tense, like the present, has a single form for every person. Weak verbs add -et/-a/-te; strong verbs change the root vowel."
            }
          },
          {
            "type": "table",
            "title": "Слабкі vs сильні дієслова",
            "rows": [
              [
                "jobbe → jobbet",
                "працював",
                "слабке"
              ],
              [
                "lese → leste",
                "читав",
                "слабке"
              ],
              [
                "synge → sang",
                "співав",
                "сильне (зміна голосного)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg jobbet hele dagen.",
                "Я працював весь день."
              ],
              [
                "Han sang en sang.",
                "Він заспівав пісню."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "Perfektum — A2",
        "titleEn": "Present Perfect — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний теперішній утворюється дієсловом \"har\" (мати) + дієприкметник минулого часу й описує дію, що завершилась і має зв'язок із теперішнім.",
            "en": {
              "text": "The present perfect is formed with \"har\" (to have) plus the past participle and describes a completed action relevant to the present."
            }
          },
          {
            "type": "formula",
            "title": "\"har\" + дієприкметник",
            "rows": [
              [
                "jeg",
                "har jobbet",
                "я попрацював"
              ],
              [
                "du",
                "har sett",
                "ти побачив"
              ],
              [
                "han",
                "har spist",
                "він поїв"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg har allerede spist.",
                "Я вже поїв."
              ],
              [
                "Har du sett den filmen?",
                "Ти бачив цей фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "Pluskvamperfektum — B1",
        "titleEn": "Past Perfect — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час виражає дію, що відбулася раніше за іншу минулу дію. Утворюється \"hadde\" + дієприкметник минулого часу.",
            "en": {
              "text": "The past perfect expresses an action that happened before another past action. Formed with \"hadde\" plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад побудови",
            "rows": [
              [
                "har spist",
                "hadde spist",
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
                "Jeg hadde allerede spist da han kom.",
                "Я вже поїв, коли він прийшов."
              ],
              [
                "Hun hadde glemt paraplyen sin.",
                "Вона забула свою парасольку (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-vil",
        "title": "Fremtid med \"vil\" — A2",
        "titleEn": "Future with Vil — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Vil\" + інфінітив виражає намір, бажання чи прогноз щодо майбутнього.",
            "en": {
              "text": "\"Vil\" plus the infinitive expresses intention, desire, or a prediction about the future."
            }
          },
          {
            "type": "formula",
            "title": "\"vil\" + інфінітив",
            "rows": [
              [
                "jeg",
                "vil reise",
                "я поїду/хочу поїхати"
              ],
              [
                "du",
                "vil komme",
                "ти прийдеш"
              ],
              [
                "det",
                "vil regne",
                "буде дощ"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg vil reise til Italia.",
                "Я поїду до Італії."
              ],
              [
                "Det vil nok regne i morgen.",
                "Завтра, схоже, буде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-skal",
        "title": "Fremtid med \"skal\" — A2",
        "titleEn": "Future with Skal — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "\"Skal\" + інфінітив виражає заплановану дію чи обов'язок у майбутньому — на відміну від \"vil\", яке підкреслює бажання чи прогноз.",
            "en": {
              "text": "\"Skal\" plus the infinitive expresses a planned action or obligation in the future — unlike \"vil\", which stresses desire or prediction."
            }
          },
          {
            "type": "table",
            "title": "vil ↔ skal",
            "rows": [
              [
                "Jeg vil reise.",
                "Я хочу поїхати (бажання).",
                "vil"
              ],
              [
                "Jeg skal reise i morgen.",
                "Я їду завтра (заплановано).",
                "skal"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vi skal møtes klokken ti.",
                "Ми зустрічаємося о десятій (заплановано)."
              ],
              [
                "Hun skal begynne i en ny stilling.",
                "Вона починає нову посаду."
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
            "text": "Наказовий спосіб — це просто основа дієслова (інфінітив без -e), одна форма для всіх, без займенника.",
            "en": {
              "text": "The imperative is simply the verb stem (the infinitive minus -e), one form for everyone, with no pronoun."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив → наказовий",
            "rows": [
              [
                "å lukke → Lukk!",
                "Закрий!"
              ],
              [
                "å komme → Kom!",
                "Приходь!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lukk døren, takk.",
                "Зачини двері, будь ласка."
              ],
              [
                "Skynd deg!",
                "Поспіши!"
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-s",
        "title": "S-passiv — B1",
        "titleEn": "S-Passive — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дуже характерна для скандинавських мов пасивна форма утворюється просто додаванням -s до дієслова, без допоміжного дієслова.",
            "en": {
              "text": "A form very characteristic of Scandinavian languages, the passive is formed simply by adding -s to the verb, with no auxiliary needed."
            }
          },
          {
            "type": "table",
            "title": "Активний → s-пасив",
            "rows": [
              [
                "bygger (будує)",
                "bygges (будується)",
                "теперішній час"
              ],
              [
                "skrev (написав)",
                "skrevs (був написаний)",
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
                "Huset bygges i år.",
                "Будинок будується цього року."
              ],
              [
                "Døren åpnes klokken ni.",
                "Двері відчиняються о дев'ятій."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-bli",
        "title": "Bli-passiv — B1",
        "titleEn": "Bli-Passive — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Другий тип пасиву утворюється дієсловом \"bli\" (ставати) + дієприкметник минулого часу й підкреслює саму подію (процес), а не стан.",
            "en": {
              "text": "The second passive type is formed with \"bli\" (to become) plus the past participle and emphasizes the event itself (a process) rather than a state."
            }
          },
          {
            "type": "table",
            "title": "s-пасив vs bli-пасив",
            "rows": [
              [
                "Huset bygges.",
                "Будинок будується (загалом).",
                "s-пасив"
              ],
              [
                "Huset blir bygget.",
                "Будинок будується (зараз, процес).",
                "bli-пасив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Boken ble skrevet av en kjent forfatter.",
                "Книгу написав відомий автор."
              ],
              [
                "Han ble invitert til festen.",
                "Його запросили на вечірку."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Modalverb — A2",
        "titleEn": "Modal Verbs — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kunne, skulle, ville, måtte, burde) поєднуються з інфінітивом БЕЗ частки \"å\" — на відміну від звичайних дієслів.",
            "en": {
              "text": "Modal verbs (kunne, skulle, ville, måtte, burde) combine with the infinitive WITHOUT the particle \"å\" — unlike ordinary verbs."
            }
          },
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "kunne",
                "могти",
                "Jeg kan svømme."
              ],
              [
                "måtte",
                "мусити",
                "Du må gå."
              ],
              [
                "burde",
                "варто",
                "Du bør hvile."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kan du hjelpe meg?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Jeg må gå nå.",
                "Мені треба йти зараз."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Betinget form (kondisjonalis) — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється \"ville\" (минула форма vil) + інфінітив для теперішньої умови, чи \"ville ha\" + дієприкметник для минулої нереальної умови.",
            "en": {
              "text": "The conditional is formed with \"ville\" (the past form of vil) plus the infinitive for present conditions, or \"ville ha\" plus the participle for unreal past conditions."
            }
          },
          {
            "type": "table",
            "title": "Теперішній ↔ минулий умовний",
            "rows": [
              [
                "Jeg ville reise.",
                "Я поїхав би.",
                "теперішній"
              ],
              [
                "Jeg ville ha reist.",
                "Я був би поїхав.",
                "минулий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hvis jeg hadde tid, ville jeg reise.",
                "Якби я мав час, я поїхав би."
              ],
              [
                "Han ville ha hjulpet deg.",
                "Він допоміг би тобі (якби міг)."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-participle",
        "title": "Presens partisipp — B1",
        "titleEn": "Present Participle — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник теперішнього часу утворюється суфіксом -ende й уживається переважно як прикметник, а не для утворення тривалого часу.",
            "en": {
              "text": "The present participle is formed with the suffix -ende and is used mainly as an adjective, not to form a continuous tense."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "synge (співати)",
                "syngende",
                "співаючий"
              ],
              [
                "sove (спати)",
                "sovende",
                "сплячий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det sovende barnet var stille.",
                "Дитина, що спала, була тиха."
              ],
              [
                "En syngende fugl satt i treet.",
                "На дереві сиділа співаюча пташка."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-participle",
        "title": "Perfektum partisipp — B1",
        "titleEn": "Past Participle — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється переважно суфіксом -et/-t/-dd і, крім складених часів, широко вживається як прикметник, узгоджуючись з іменником у роді й числі.",
            "en": {
              "text": "The past participle is mainly formed with the suffix -et/-t/-dd and, besides compound tenses, is widely used as an adjective, agreeing with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "lukke (закривати)",
                "lukket",
                "закритий"
              ],
              [
                "skrive (писати)",
                "skrevet",
                "написаний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Butikken er stengt.",
                "Магазин закритий."
              ],
              [
                "Det er en velskrevet bok.",
                "Це добре написана книга."
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
        "id": "three-gender-system",
        "title": "Tre kjønn i bokmål — A2",
        "titleEn": "Three-Gender System — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від данської та шведської (лише два роди), норвезький bokmål офіційно зберігає три роди: чоловічий (en), жіночий (ei/en) та середній (et). Багато іменників жіночого роду можна відмінювати або за жіночим, або за спільним (чоловічим) зразком.",
            "en": {
              "text": "Unlike Danish and Swedish (only two genders), Norwegian Bokmål officially retains three genders: masculine (en), feminine (ei/en), and neuter (et). Many feminine nouns can be declined either the feminine way or the common (masculine) way."
            }
          },
          {
            "type": "table",
            "title": "Три роди",
            "rows": [
              [
                "en bok / boka",
                "книга (жін., дві форми означеної)",
                "чол./жін."
              ],
              [
                "et hus / huset",
                "дім",
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
                "Boka mi ligger på bordet.",
                "Моя книга лежить на столі."
              ],
              [
                "Ei jente lekte i parken.",
                "Дівчинка гралася в парку."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Flertall — A2",
        "titleEn": "Plural Formation — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина найчастіше утворюється закінченнями -er чи -e, деякі слова взагалі не змінюються.",
            "en": {
              "text": "The plural is most often formed with the endings -er or -e; some words don't change at all."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "bok → bøker",
                "книга → книги"
              ],
              [
                "hus → hus",
                "дім → доми (без змін)"
              ],
              [
                "barn → barn",
                "дитина → діти (без змін)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg har to bøker.",
                "У мене дві книги."
              ],
              [
                "Det er mange hus her.",
                "Тут багато будинків."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-definiteness",
        "title": "Dobbelt bestemthet — B1",
        "titleEn": "Double Definiteness — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перед означеним іменником стоїть прикметник, суфіксального артикля недостатньо — додається ще й окреме означене слово den/det/de перед прикметником.",
            "en": {
              "text": "When a definite noun has a preceding adjective, the suffixed article alone isn't enough — a separate definite word den/det/de is also added before the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади подвійної означеності",
            "rows": [
              [
                "boken (книга, означена)",
                "den store boken",
                "велика книга (означена)"
              ],
              [
                "huset",
                "det gamle huset",
                "старий дім (означений)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Den store boken ligger på bordet.",
                "Велика книга лежить на столі."
              ],
              [
                "Det gamle huset er vakkert.",
                "Старий дім гарний."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Adjektivbøyning — A2",
        "titleEn": "Adjective Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником: без закінчення для чоловічого/жіночого роду, -t для середнього роду, -e для множини та в означеній формі.",
            "en": {
              "text": "The adjective agrees with the noun: no ending for masculine/feminine, -t for neuter, -e for plural and in the definite form."
            }
          },
          {
            "type": "table",
            "title": "stor (великий) за родами",
            "rows": [
              [
                "en stor bok",
                "велика книга",
                "жін./чол."
              ],
              [
                "et stort hus",
                "великий дім",
                "сер."
              ],
              [
                "store bøker",
                "великі книги",
                "множина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det er en stor bil.",
                "Це велика машина."
              ],
              [
                "De er veldig store.",
                "Вони дуже великі."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Gradbøyning — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -ere, найвищий — суфіксом -est.",
            "en": {
              "text": "The comparative is mainly formed with the suffix -ere, and the superlative with -est."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "stor",
                "større",
                "størst"
              ],
              [
                "rask",
                "raskere",
                "raskest"
              ],
              [
                "dyr",
                "dyrere",
                "dyrest"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dette huset er større enn mitt.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "Det er den dyreste restauranten i byen.",
                "Це найдорожчий ресторан у місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Uregelmessig gradbøyning — B1",
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
                "god (добрий)",
                "bedre",
                "best"
              ],
              [
                "dårlig (поганий)",
                "verre",
                "verst"
              ],
              [
                "liten (малий)",
                "mindre",
                "minst"
              ],
              [
                "mange (багато)",
                "flere",
                "flest"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det er en bedre løsning.",
                "Це краще рішення."
              ],
              [
                "Hun har flest venner.",
                "У неї найбільше друзів."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-s-genitive",
        "title": "S-genitiv — A2",
        "titleEn": "S-Genitive — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається суфіксом -s без апострофа, приєднаним прямо до іменника-власника.",
            "en": {
              "text": "Possession is expressed with the suffix -s, with no apostrophe, attached directly to the possessor noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Peters bok",
                "книга Петера"
              ],
              [
                "mammas hus",
                "дім мами"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det er Annas veske.",
                "Це сумка Анни."
              ],
              [
                "Bilens farge er rød.",
                "Колір машини червоний."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronouns-object-forms",
        "title": "Personlige pronomen — objektsform — A2",
        "titleEn": "Personal Pronouns — Object Forms — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають окрему форму об'єкта (після дієслова чи прийменника), відмінну від форми підмета.",
            "en": {
              "text": "Personal pronouns have a separate object form (after a verb or preposition), distinct from the subject form."
            }
          },
          {
            "type": "table",
            "title": "Підмет → об'єкт",
            "rows": [
              [
                "jeg → meg",
                "я → мене/мені"
              ],
              [
                "han → ham",
                "він → його/йому"
              ],
              [
                "de → dem",
                "вони → їх/їм"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Han kan ikke se meg.",
                "Він мене не бачить."
              ],
              [
                "Gi meg det.",
                "Дай мені це."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-seg",
        "title": "Refleksivt pronomen \"seg\" — A2",
        "titleEn": "Reflexive Pronoun Seg — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"seg\" уживається лише в 3-й особі (han/hun/de) й позначає, що дія спрямована на самого діяча.",
            "en": {
              "text": "The reflexive pronoun \"seg\" is used only in the 3rd person (han/hun/de) and shows the action is directed back at the doer."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "Han vasker seg.",
                "Він миється."
              ],
              [
                "De skynder seg.",
                "Вони поспішають."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hun kler på seg.",
                "Вона одягається."
              ],
              [
                "Katten vasker seg selv.",
                "Кіт миється сам."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Demonstrative pronomen — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Denne/dette/disse\" (цей) вказує на близький предмет, \"den/det/de\" (той) — на будь-який згаданий чи віддалений предмет.",
            "en": {
              "text": "\"Denne/dette/disse\" (this) points to something near, while \"den/det/de\" (that) refers to something already mentioned or farther away."
            }
          },
          {
            "type": "table",
            "title": "denne/dette/disse",
            "rows": [
              [
                "denne boken",
                "ця книга",
                "чол./жін."
              ],
              [
                "dette huset",
                "цей дім",
                "сер."
              ],
              [
                "disse bøkene",
                "ці книги",
                "множина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Denne bilen er min.",
                "Ця машина моя."
              ],
              [
                "Den boken der er interessant.",
                "Та книга там цікава."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Spørrende pronomen — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "hvem?",
                "хто?",
                "Hvem er det?"
              ],
              [
                "hva?",
                "що?",
                "Hva gjør du?"
              ],
              [
                "hvilken?",
                "який?",
                "Hvilken bok?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hvem er du?",
                "Хто ти?"
              ],
              [
                "Hva heter du?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-som",
        "title": "Relativt pronomen \"som\" — B1",
        "titleEn": "Relative Pronoun Som — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Som\" — універсальний відносний займенник для будь-якої ролі в підрядному реченні (підмет чи об'єкт) і, на відміну від данської, не має окремого варіанта для підмета.",
            "en": {
              "text": "\"Som\" is the universal relative pronoun for any role in the clause (subject or object) and, unlike Danish, has no separate subject-only variant."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mannen som kommer",
                "чоловік, який приходить",
                "som — підмет"
              ],
              [
                "mannen som jeg så",
                "чоловік, якого я бачив",
                "som — об'єкт"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det er boken som jeg leste.",
                "Це та книга, яку я читав."
              ],
              [
                "Kvinnen som bor her, er lege.",
                "Жінка, яка тут живе, — лікарка."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-v2",
        "title": "V2-ordstilling — B1",
        "titleEn": "V2 Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У головному реченні дієслово завжди стоїть на другій позиції (V2), незалежно від того, що стоїть на першій. Якщо перше місце займає не підмет, підмет і дієслово міняються місцями.",
            "en": {
              "text": "In a main clause, the verb always occupies the second position (V2), regardless of what comes first. If the subject isn't first, subject and verb invert."
            }
          },
          {
            "type": "table",
            "title": "V2 в дії",
            "rows": [
              [
                "Jeg spiser epler i dag.",
                "Я їм яблука сьогодні.",
                "підмет перший"
              ],
              [
                "I dag spiser jeg epler.",
                "Сьогодні я їм яблука.",
                "обставина перша → інверсія"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I morgen drar vi til stranden.",
                "Завтра ми поїдемо на пляж."
              ],
              [
                "Nå forstår jeg det.",
                "Тепер я це розумію."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-subordinate",
        "title": "Ordstilling i leddsetninger — B1",
        "titleEn": "Word Order in Subordinate Clauses — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні порядок слів інший, ніж у головному: заперечення \"ikke\" та інші речennєві прислівники стоять ПЕРЕД дієсловом, а не після нього.",
            "en": {
              "text": "Word order in a subordinate clause differs from a main clause: negation \"ikke\" and other sentence adverbs go BEFORE the verb, not after."
            }
          },
          {
            "type": "table",
            "title": "Головне ↔ підрядне речення",
            "rows": [
              [
                "Han kommer ikke.",
                "Він не приходить (головне).",
                "ikke після дієслова"
              ],
              [
                "...at han ikke kommer.",
                "...що він не приходить (підрядне).",
                "ikke перед дієсловом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg vet at hun ikke er hjemme.",
                "Я знаю, що її немає вдома."
              ],
              [
                "Han sa at han alltid var glad.",
                "Він сказав, що завжди був щасливий."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-common",
        "title": "Vanlige preposisjoner — A1",
        "titleEn": "Common Prepositions — A1",
        "emoji": "📎",
        "sections": [
          {
            "type": "table",
            "title": "Поширені прийменники",
            "rows": [
              [
                "i",
                "в/у",
                "i huset"
              ],
              [
                "på",
                "на",
                "på bordet"
              ],
              [
                "til",
                "до",
                "til skolen"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Boken ligger på bordet.",
                "Книга лежить на столі."
              ],
              [
                "Jeg går til skolen.",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Sideordnende konjunksjoner — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники сурядності",
            "rows": [
              [
                "og",
                "і/та",
                "Jeg og du."
              ],
              [
                "men",
                "але",
                "Jeg vil, men kan ikke."
              ],
              [
                "eller",
                "або",
                "Kaffe eller te?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg liker te og kaffe.",
                "Мені подобається чай і кава."
              ],
              [
                "Jeg vil gjerne gå, men jeg har ikke tid.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Underordnende konjunksjoner — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "at",
                "що",
                "Jeg vet at du kommer."
              ],
              [
                "fordi",
                "тому що",
                "Jeg kom ikke fordi jeg var syk."
              ],
              [
                "hvis",
                "якщо",
                "Hvis du har tid, så ring."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg tror at du har rett.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Jeg blir hvis det er nødvendig.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "der-expletive",
        "title": "Foreløpig subjekt \"det\" — B1",
        "titleEn": "Existential Det — B1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від данської \"der\", норвезька для конструкцій існування (\"є, існує\") вживає \"det\" як формальний підмет, коли реальний підмет невизначений і стоїть після дієслова.",
            "en": {
              "text": "Unlike Danish \"der\", Norwegian uses \"det\" as the formal (expletive) subject for existence constructions (\"there is/are\") when the real subject is indefinite and comes after the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Det er en bok på bordet.",
                "На столі є книга."
              ],
              [
                "Det var mange mennesker.",
                "Було багато людей."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det er ingen hjemme.",
                "Нікого немає вдома."
              ],
              [
                "Det finnes ikke noe bedre.",
                "Немає нічого кращого."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Grunntall — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "en/ett",
                "один",
                "1"
              ],
              [
                "fem",
                "п'ять",
                "5"
              ],
              [
                "ti",
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
                "Jeg har to brødre.",
                "У мене два брати."
              ],
              [
                "Klokken er tre.",
                "Третя година."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-higher",
        "title": "Grunntall 20-90 (desimalt system) — A2",
        "titleEn": "Cardinal Numbers 20-90 (Decimal System) — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від данської, норвезькі числа 50-90 повністю десяткові й прозоро утворюються від коренів 5-9: femti, seksti, sytti, åtti, nitti — жодних решток двадцяткової системи.",
            "en": {
              "text": "Unlike Danish, Norwegian numbers 50-90 are fully decimal and transparently built from the roots 5-9: femti, seksti, sytti, åtti, nitti — no vestiges of a base-20 system."
            }
          },
          {
            "type": "table",
            "title": "Прозорі десяткові форми",
            "rows": [
              [
                "femti",
                "50",
                "fem (5) + ti (10)"
              ],
              [
                "sytti",
                "70",
                "syv (7) + ti (10)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Han er femti år gammel.",
                "Йому п'ятдесят років."
              ],
              [
                "Det koster seksti kroner.",
                "Це коштує шістдесят крон."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Ordenstall — A2",
        "titleEn": "Ordinal Numbers — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "første",
                "перший",
                "1-й"
              ],
              [
                "andre",
                "другий",
                "2-й"
              ],
              [
                "tredje",
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
                "Det er min første dag på jobben.",
                "Це мій перший день на роботі."
              ],
              [
                "Jeg bor i andre etasje.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Ukedager — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "mandag",
                "понеділок",
                "1"
              ],
              [
                "fredag",
                "п'ятниця",
                "5"
              ],
              [
                "søndag",
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
                "På mandager har jeg undervisning.",
                "У понеділок у мене заняття."
              ],
              [
                "I dag er det onsdag.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Måneder og datoer — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
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
                "desember",
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
                "I dag er det femte mai.",
                "Сьогодні п'яте травня."
              ],
              [
                "Jeg er født i desember.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Klokken — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Hva er klokken?\". Норвезька орієнтує пів-годину на НАСТУПНУ годину: \"halv tre\" означає \"пів на третю\" (2:30).",
            "en": {
              "text": "To ask the time, Norwegians say \"Hva er klokken?\". Norwegian orients the half-hour toward the NEXT hour: \"halv tre\" means \"half to three\" (2:30)."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Klokken er ett.",
                "Перша година.",
                "1:00"
              ],
              [
                "Klokken er halv tre.",
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
                "Hva er klokken?",
                "Котра година?"
              ],
              [
                "Toget går klokken åtte.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Refleksive verb — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова обов'язково вживаються зі зворотним займенником (meg, deg, seg, oss, dere, seg) і мають відмінне значення від дієслова без нього.",
            "en": {
              "text": "Some verbs obligatorily take a reflexive pronoun (meg, deg, seg, oss, dere, seg) and have a different meaning from the plain verb."
            }
          },
          {
            "type": "table",
            "title": "Без зв. займ. ↔ зі зворотним",
            "rows": [
              [
                "vaske (мити)",
                "vaske seg (митися)",
                "себе"
              ],
              [
                "skynde (квапити)",
                "skynde seg (квапитися)",
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
                "Jeg gleder meg til ferien.",
                "Я тішуся відпустці наперед."
              ],
              [
                "Skynd deg!",
                "Поспіши!"
              ]
            ]
          }
        ]
      },
      {
        "id": "separable-verb-particles",
        "title": "Verb med partikkel — B1",
        "titleEn": "Verbs with Separable Particles — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів утворюють нове значення з часткою (opp, ut, inn), яка в головному реченні відокремлюється й стоїть у кінці.",
            "en": {
              "text": "Many verbs form a new meaning with a particle (opp, ut, inn), which detaches in the main clause and moves to the end."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "stå opp",
                "вставати"
              ],
              [
                "gå ut",
                "виходити"
              ],
              [
                "komme inn",
                "заходити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg står alltid tidlig opp.",
                "Я завжди рано встаю."
              ],
              [
                "Han gikk ut av butikken.",
                "Він вийшов з магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Dannelse av adverb — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії збігаються за формою з середнім родом прикметника (закінчення -t).",
            "en": {
              "text": "Many manner adverbs are identical in form to the neuter of the adjective (the -t ending)."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "rask (швидкий)",
                "raskt",
                "швидко"
              ],
              [
                "pen (гарний)",
                "pent",
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
                "Han snakker raskt.",
                "Він говорить швидко."
              ],
              [
                "Hun synger pent.",
                "Вона гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Kvantorer (mye/mange) — A2",
        "titleEn": "Quantifiers (Mye/Mange) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mye\" (багато) уживається з незлічуваними іменниками, \"mange\" (багато) — зі злічуваними в множині.",
            "en": {
              "text": "\"Mye\" (much) is used with uncountable nouns, while \"mange\" (many) is used with countable plural nouns."
            }
          },
          {
            "type": "table",
            "title": "mye vs mange",
            "rows": [
              [
                "mye vann",
                "багато води",
                "незлічуване"
              ],
              [
                "mange bøker",
                "багато книг",
                "злічуване"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg har ikke mye tid.",
                "У мене небагато часу."
              ],
              [
                "Det er mange mennesker her.",
                "Тут багато людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-nouns",
        "title": "Sammensatte ord — B1",
        "titleEn": "Compound Nouns — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Норвезька, як і данська, вільно поєднує кілька іменників в одне довге слово без пробілів; рід усього складеного слова визначається останнім елементом.",
            "en": {
              "text": "Norwegian, like Danish, freely combines several nouns into one long word with no spaces; the gender of the whole compound is determined by the last element."
            }
          },
          {
            "type": "table",
            "title": "Приклади складних слів",
            "rows": [
              [
                "fot (нога) + ball (м'яч)",
                "fotball",
                "футбол"
              ],
              [
                "brann (пожежа) + mann (людина)",
                "brannmann",
                "пожежник"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vi spiller fotball hver søndag.",
                "Ми граємо у футбол щонеділі."
              ],
              [
                "Han er brannmann.",
                "Він пожежник."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-vs-preposition",
        "title": "S-genitiv vs. \"til\" — B1",
        "titleEn": "S-Genitive vs. Til-Construction — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Для власників-осіб зазвичай уживають s-генітив, а для неживих чи абстрактних понять частіше конструкцію з прийменником \"til\" (до).",
            "en": {
              "text": "For personal owners, the s-genitive is usually used, while for inanimate or abstract concepts the construction with \"til\" (to, of) is more common."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Peters bil",
                "машина Петера",
                "s-генітив"
              ],
              [
                "slutten til filmen",
                "кінець фільму",
                "til-конструкція"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fargen til himmelen er blå.",
                "Колір неба синій."
              ],
              [
                "Det er starten til noe nytt.",
                "Це початок чогось нового."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronoun-man",
        "title": "Upersonlig pronomen \"man\" — A2",
        "titleEn": "Impersonal Pronoun Man — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "\"Man\" (\"людина взагалі, ти/ми\") уживається для загальних тверджень, коли не важливо, хто саме є діячем.",
            "en": {
              "text": "\"Man\" (\"one, you, people in general\") is used for general statements when the specific doer doesn't matter."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Man skal ikke lyve.",
                "Не варто брехати (загалом)."
              ],
              [
                "I Norge spiser man mye fisk.",
                "У Норвегії їдять багато риби."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Man kan se havet herfra.",
                "Звідси видно море."
              ],
              [
                "Man vet aldri.",
                "Ніколи не знаєш наперед."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "\"du\" som standard tiltale — A2",
        "titleEn": "Du as the Standard Address — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Норвезька майже повністю відмовилась від формального звертання \"De\" на користь неформального \"du\" — навіть до незнайомців і в бізнесі, на відміну від більшості інших європейських мов.",
            "en": {
              "text": "Norwegian has almost entirely abandoned the formal \"De\" in favor of informal \"du\" — even toward strangers and in business, unlike most other European languages."
            }
          },
          {
            "type": "table",
            "title": "du (майже завжди)",
            "rows": [
              [
                "Har du tid?",
                "У тебе є час? (звичайне звертання до будь-кого)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hvordan har du det?",
                "Як ти? (навіть до начальника)"
              ],
              [
                "Kan du hjelpe meg?",
                "Ти можеш мені допомогти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Hilsener og faste uttrykk — A1",
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
                "Takk.",
                "Дякую."
              ],
              [
                "Unnskyld.",
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
                "Hyggelig å møte deg.",
                "Приємно познайомитися."
              ],
              [
                "Vi ses.",
                "До зустрічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Væruttrykk — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "Det er sol.",
                "Сонячно."
              ],
              [
                "Det regner.",
                "Іде дощ."
              ],
              [
                "Det snør.",
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
                "I dag er det veldig kaldt.",
                "Сьогодні дуже холодно."
              ],
              [
                "I morgen blir det overskyet.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Faste uttrykk og idiomer — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Det er ingen ku på isen.",
                "(букв. немає корови на льоду) — немає причин для хвилювання."
              ],
              [
                "Å gå på limpinnen.",
                "(букв. наступити на клейку паличку) — попастись на гачок."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Slapp av, det er ingen ku på isen.",
                "Розслабся, все гаразд."
              ],
              [
                "Han gikk rett på limpinnen.",
                "Він одразу попався на гачок."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-predicative-vs-attributive",
        "title": "Predikativ vs. attributiv bruk — B1",
        "titleEn": "Predicative vs. Attributive Adjectives — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник у ролі присудка (після være) узгоджується з підметом так само, як і перед іменником.",
            "en": {
              "text": "A predicative adjective (after være) agrees with the subject the same way as an attributive one before a noun."
            }
          },
          {
            "type": "table",
            "title": "Атрибутивне ↔ присудкове",
            "rows": [
              [
                "et stort hus",
                "великий дім",
                "атрибутивне"
              ],
              [
                "Huset er stort.",
                "Будинок великий.",
                "присудкове"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bilen er rask.",
                "Машина швидка."
              ],
              [
                "Barna er trøtte.",
                "Діти втомлені."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Orddannelse — B1",
        "titleEn": "Derivational Suffixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Норвезька активно утворює нові слова додаванням суфіксів: -het (абстрактне поняття), -else (результат дії), -lig (прикметники).",
            "en": {
              "text": "Norwegian actively derives new words with suffixes: -het (abstract concept), -else (result of an action), -lig (adjectives)."
            }
          },
          {
            "type": "table",
            "title": "Приклади словотворення",
            "rows": [
              [
                "fri (вільний) → frihet",
                "свобода"
              ],
              [
                "opplevd (пережив) → opplevelse",
                "враження"
              ],
              [
                "venn (друг) → vennlig",
                "дружній"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Frihet er viktig for meg.",
                "Свобода важлива для мене."
              ],
              [
                "Han er veldig vennlig.",
                "Він дуже дружній."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective",
        "title": "Kollektive tallord (par/dusin) — A2",
        "titleEn": "Collective Numerals (Par/Dusin) — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "et par",
                "пара"
              ],
              [
                "et dusin",
                "дюжина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg har et par sko.",
                "У мене є пара взуття."
              ],
              [
                "Vi kjøpte et dusin egg.",
                "Ми купили дюжину яєць."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Priser og penger — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Hva koster det?\" (\"Скільки це коштує?\"), а валюта \"kroner\" стоїть після числа.",
            "en": {
              "text": "To ask the price, one says \"Hva koster det?\" (\"What does it cost?\"), and the currency \"kroner\" follows the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hundre kroner",
                "сто крон"
              ],
              [
                "billig / dyr",
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
                "Hva koster denne?",
                "Скільки коштує це?"
              ],
              [
                "Det er for dyrt.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "sentence-adverbs-position",
        "title": "Setningsadverbial — B1",
        "titleEn": "Sentence Adverb Placement — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Речennєві прислівники (alltid, aldri, nok, jo) у головному реченні стоять одразу після дієслова, на тому самому місці, де й \"ikke\".",
            "en": {
              "text": "Sentence adverbs (alltid, aldri, nok, jo) in a main clause stand right after the verb, the same slot as \"ikke\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jeg drikker alltid kaffe.",
                "Я завжди п'ю каву."
              ],
              [
                "Han kommer nok i morgen.",
                "Він, мабуть, прийде завтра."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vi ses jo i morgen.",
                "Ми ж побачимося завтра."
              ],
              [
                "Hun er aldri sen.",
                "Вона ніколи не запізнюється."
              ]
            ]
          }
        ]
      },
      {
        "id": "indirect-object-word-order",
        "title": "Ordstilling med indirekte objekt — B1",
        "titleEn": "Word Order with Indirect Object — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "З дієсловами давання непрямий об'єкт (кому) зазвичай стоїть перед прямим об'єктом (що), без прийменника.",
            "en": {
              "text": "With verbs of giving, the indirect object (to whom) usually comes before the direct object (what), with no preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклад порядку",
            "rows": [
              [
                "Jeg gir henne boken.",
                "Я даю їй книгу.",
                "непрямий → прямий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Han sendte meg et brev.",
                "Він надіслав мені листа."
              ],
              [
                "Vi viste dem huset.",
                "Ми показали їм дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-pronouns",
        "title": "Negative pronomen (ingen/ingenting) — B1",
        "titleEn": "Negative Pronouns (Ingen/Ingenting) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ingen",
                "ніхто/жоден",
                "Det er ingen hjemme."
              ],
              [
                "ingenting",
                "ніщо",
                "Jeg så ingenting."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ingen vet det.",
                "Ніхто цього не знає."
              ],
              [
                "Det er ingenting å gjøre.",
                "Нічого не можна вдіяти."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamative-constructions",
        "title": "Utropskonstruksjoner (så/for en) — B1",
        "titleEn": "Exclamative Constructions — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Оклична конструкція \"så + прикметник\" (\"який/яка ж\") виражає захоплення чи здивування якістю; \"for en/et\" робить те саме для іменника.",
            "en": {
              "text": "The exclamative construction \"så + adjective\" (\"how...!\") expresses admiration or surprise at a quality; \"for en/et\" does the same for a noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Så vakkert det er!",
                "Як же це гарно!"
              ],
              [
                "For en dag!",
                "Який же день!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Så snill du er!",
                "Який же ти милий!"
              ],
              [
                "For et rot!",
                "Який же безлад!"
              ]
            ]
          }
        ]
      },
      {
        "id": "preposition-time-place",
        "title": "\"i\" og \"på\" (tid og sted) — A2",
        "titleEn": "I vs På (Time & Place) — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "\"I\" переважно вживають із закритими просторами й тривалими періодами часу (i huset, i sommer), \"på\" — з поверхнями й окремими днями/подіями (på bordet, på mandag).",
            "en": {
              "text": "\"I\" is mainly used with enclosed spaces and extended time periods (i huset, i sommer), while \"på\" is used with surfaces and specific days/events (på bordet, på mandag)."
            }
          },
          {
            "type": "table",
            "title": "i vs på",
            "rows": [
              [
                "i hagen",
                "у саду",
                "закритий простір"
              ],
              [
                "på stranden",
                "на пляжі",
                "відкрита поверхня"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vi møtes på mandag.",
                "Ми зустрінемося в понеділок."
              ],
              [
                "Jeg blir hjemme i helgen.",
                "Я залишуся вдома на вихідних."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Spørreord — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "hvor?",
                "де?",
                "Hvor er du?"
              ],
              [
                "når?",
                "коли?",
                "Når kommer du?"
              ],
              [
                "hvorfor?",
                "чому?",
                "Hvorfor gråter du?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hvor er togstasjonen?",
                "Де вокзал?"
              ],
              [
                "Hvorfor er du sen?",
                "Чому ти запізнюєшся?"
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Tidsuttrykk (i dag/i går/i morgen) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "i dag",
                "сьогодні"
              ],
              [
                "i går",
                "вчора"
              ],
              [
                "i morgen",
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
                "I dag har jeg fri.",
                "Сьогодні я вільний."
              ],
              [
                "Vi ses i morgen.",
                "Побачимося завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Årstider — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "vår",
                "весна"
              ],
              [
                "sommer",
                "літо"
              ],
              [
                "vinter",
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
                "Om sommeren er det varmt.",
                "Влітку тепло."
              ],
              [
                "Jeg elsker høsten.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Å uttrykke meninger — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Jeg synes at...",
                "Я вважаю, що..."
              ],
              [
                "Etter min mening...",
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
                "Jeg synes det er en god idé.",
                "Я вважаю, що це хороша ідея."
              ],
              [
                "Etter min mening er det for dyrt.",
                "На мою думку, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-no-agreement-indeclinable",
        "title": "Ubøyelige adjektiver — B1",
        "titleEn": "Indeclinable Adjectives — B1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька поширених прикметників (moderne, lilla, åpen у деяких формах) не змінюються за родом чи числом, на відміну від звичайного правила узгодження.",
            "en": {
              "text": "A handful of common adjectives (moderne, lilla, and some forms of åpen) never change for gender or number, unlike the regular agreement rule."
            }
          },
          {
            "type": "table",
            "title": "Приклади незмінних прикметників",
            "rows": [
              [
                "et moderne hus",
                "сучасний дім",
                "середній, без -t"
              ],
              [
                "moderne hus",
                "сучасні доми",
                "множина, без змін"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Det er en moderne bygning.",
                "Це сучасна будівля."
              ],
              [
                "Kjolen hennes er lilla.",
                "Її сукня фіолетова."
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
        "title": "Uregelmessige verb — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів (være, ha, gjøre, gå) утворюють минулий час і дієприкметник не за загальним правилом, і їхні форми варто просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs (være, ha, gjøre, gå) form the past tense and participle irregularly, and their forms simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "være (бути)",
                "var, har vært",
                "був, був (перфект)"
              ],
              [
                "ha (мати)",
                "hadde, har hatt",
                "мав, мав (перфект)"
              ],
              [
                "gjøre (робити)",
                "gjorde, har gjort",
                "зробив, зробив (перфект)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jeg var på skolen i går.",
                "Я був у школі вчора."
              ],
              [
                "Han har gjort det ferdig.",
                "Він це закінчив."
              ]
            ]
          }
        ]
      },
      {
        "id": "bokmal-nynorsk-digraphia",
        "title": "Bokmål og nynorsk — B1",
        "titleEn": "Bokmål & Nynorsk Digraphia — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від усіх інших скандинавських мов, норвезька офіційно має ДВІ письмові норми: bokmål (~85-90% користувачів, ближче до данської) і nynorsk (~10-15%, побудований на діалектах, більш архаїчний). Обидві вивчаються в школі, і кожна громада обирає основну норму.",
            "en": {
              "text": "Unlike every other Scandinavian language, Norwegian officially has TWO written standards: bokmål (~85-90% of users, closer to Danish) and nynorsk (~10-15%, built from dialects, more archaic). Both are taught in school, and each municipality chooses its primary standard."
            }
          },
          {
            "type": "table",
            "title": "bokmål ↔ nynorsk",
            "rows": [
              [
                "jeg (bokmål)",
                "eg (nynorsk)",
                "я"
              ],
              [
                "ikke (bokmål)",
                "ikkje (nynorsk)",
                "не"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Denne boken er skrevet på bokmål.",
                "Ця книга написана на bokmål."
              ],
              [
                "Nynorsk blir brukt i mange vestlandskommuner.",
                "Nynorsk уживають у багатьох громадах на заході країни."
              ]
            ]
          }
        ]
      },
      {
        "id": "tonal-pitch-accent",
        "title": "Tonelag (tonem) — B1",
        "titleEn": "Tonal Pitch Accent (Tonem) — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від данської, норвезька (як і шведська) зберігає музичний тональний наголос — два тони (tonem 1 і tonem 2), які можуть розрізняти слова, що інакше пишуться й вимовляються однаково.",
            "en": {
              "text": "Unlike Danish, Norwegian (like Swedish) retains a musical pitch accent — two tones (tonem 1 and tonem 2) that can distinguish words otherwise spelled and pronounced identically."
            }
          },
          {
            "type": "table",
            "title": "Приклад тональної відмінності",
            "rows": [
              [
                "bønder (селяни, тон 2)",
                "bønner (боби/молитви, тон 1)",
                "різні слова через тон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bøndene dyrker bønner.",
                "Селяни вирощують боби."
              ],
              [
                "Tonelaget kan være vanskelig for utlendinger.",
                "Тональний наголос може бути складним для іноземців."
              ]
            ]
          }
        ]
      }
    ]
  }
];
