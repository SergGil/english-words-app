// Vymova — data/grammar-data/grammar_et.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ET: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Isikulised asesõnad — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В естонській мові немає граматичного роду — той самий займенник \"tema\" означає і \"він\", і \"вона\".",
            "en": {
              "text": "Estonian has no grammatical gender — the same pronoun \"tema\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mina (ma)"
              ],
              [
                "ти",
                "sina (sa)"
              ],
              [
                "він / вона",
                "tema (ta)"
              ],
              [
                "ми",
                "meie (me)"
              ],
              [
                "ви",
                "teie (te)"
              ],
              [
                "вони",
                "nemad (nad)"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          },
          {
            "type": "note",
            "text": "Коротші форми в дужках (ma, sa, ta, me, te, nad) частіше вживають у розмовній мові, повні — у писемній.",
            "en": {
              "text": "The shorter forms in parentheses (ma, sa, ta, me, te, nad) are more common in spoken Estonian, the full forms in writing."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "verb-olema",
        "title": "Olema — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Olema\" (бути) — найважливіше і єдине справді неправильне дієслово естонської мови. Воно вживається і як зв'язка, і для утворення перфекта.",
            "en": {
              "text": "\"Olema\" (to be) is the most important and the only truly irregular verb in Estonian. It works both as a copula and to form the perfect tense."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час дієслова olema",
            "rows": [
              [
                "mina olen",
                "я є"
              ],
              [
                "sina oled",
                "ти є"
              ],
              [
                "tema on",
                "він/вона є"
              ],
              [
                "meie oleme",
                "ми є"
              ],
              [
                "teie olete",
                "ви є"
              ],
              [
                "nemad on",
                "вони є"
              ]
            ],
            "en": {
              "title": "Present Tense of olema"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mina olen õpetaja.",
                "Я вчитель."
              ],
              [
                "Tema on Eestist.",
                "Він/вона з Естонії."
              ],
              [
                "Meie oleme sõbrad.",
                "Ми друзі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Olema — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ei — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в естонській утворюється незмінюваним словом \"ei\" перед дієсловом у скороченій (кон'юнктивній) формі — сама форма дієслова не відмінюється за особами.",
            "en": {
              "text": "Estonian negation is formed with the invariable word \"ei\" before the verb in its short connegative form — that verb form does not change for person."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "mina olen",
                "mina ei ole",
                "я є → я не є"
              ],
              [
                "sina lähed",
                "sina ei lähe",
                "ти йдеш → ти не йдеш"
              ],
              [
                "tema teab",
                "tema ei tea",
                "він знає → він не знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mina ei ole väsinud.",
                "Я не втомлений."
              ],
              [
                "Ta ei räägi vene keelt.",
                "Він/вона не розмовляє російською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ei — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання утворюють часткою \"kas\" на початку речення; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are formed with the particle \"kas\" at the start of the sentence; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "kes",
                "хто"
              ],
              [
                "mis",
                "що"
              ],
              [
                "kus",
                "де"
              ],
              [
                "millal",
                "коли"
              ],
              [
                "miks",
                "чому"
              ],
              [
                "kuidas",
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
                "Kas sa oled eestlane?",
                "Ти естонець?"
              ],
              [
                "Kus sa elad?",
                "Де ти живеш?"
              ],
              [
                "Miks sa nutad?",
                "Чому ти плачеш?"
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
        "id": "three-base-cases",
        "title": "Три базові відмінки — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Естонська має 14 відмінків, але всі вони будуються від трьох базових форм: називного (nimetav), родового (omastav) і партитивного (osastav). Родовий відмінок — основа для решти 11 непрямих відмінків.",
            "en": {
              "text": "Estonian has 14 cases, but all of them build on three base forms: nominative (nimetav), genitive (omastav) and partitive (osastav). The genitive is the stem for the other 11 oblique cases."
            }
          },
          {
            "type": "table",
            "title": "raamat (книга) у трьох базових відмінках",
            "rows": [
              [
                "nimetav",
                "raamat",
                "називний"
              ],
              [
                "omastav",
                "raamatu",
                "родовий"
              ],
              [
                "osastav",
                "raamatut",
                "партитивний"
              ]
            ],
            "en": {
              "title": "raamat (book) in the Three Base Cases"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "See on raamat.",
                "Це книга."
              ],
              [
                "Raamatu kaas on punane.",
                "Обкладинка книги червона."
              ],
              [
                "Ma loen raamatut.",
                "Я читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Three Base Cases — A1"
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
        "title": "Теперішній час (olevik) — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Правильні дієслова в теперішньому часі відмінюються за особовими закінченнями, які додаються до основи da-інфінітива без -ma/-da.",
            "en": {
              "text": "Regular verbs in the present tense take personal endings added to the stem of the infinitive."
            }
          },
          {
            "type": "table",
            "title": "rääkima (говорити) — теперішній час",
            "rows": [
              [
                "mina räägin",
                "я говорю"
              ],
              [
                "sina räägid",
                "ти говориш"
              ],
              [
                "tema räägib",
                "він/вона говорить"
              ],
              [
                "meie räägime",
                "ми говоримо"
              ],
              [
                "teie räägite",
                "ви говорите"
              ],
              [
                "nemad räägivad",
                "вони говорять"
              ]
            ],
            "en": {
              "title": "rääkima (to speak) — Present Tense"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma räägin eesti keelt.",
                "Я розмовляю естонською."
              ],
              [
                "Nad elavad Tallinnas.",
                "Вони живуть у Таллінні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense (olevik) — A1"
      },
      {
        "id": "simple-past",
        "title": "Простий минулий час (lihtminevik) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий утворюється закінченням -si- або -i- перед особовим закінченням; вжитий, коли дія — цілісний завершений факт.",
            "en": {
              "text": "The simple past is formed with -si- or -i- before the personal ending; used when the action is a single completed fact."
            }
          },
          {
            "type": "table",
            "title": "rääkima — lihtminevik",
            "rows": [
              [
                "ma rääkisin",
                "я говорив(ла)"
              ],
              [
                "sa rääkisid",
                "ти говорив(ла)"
              ],
              [
                "ta rääkis",
                "він/вона говорив(ла)"
              ]
            ],
            "en": {
              "title": "rääkima — Simple Past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma nägin sind eile.",
                "Я бачив тебе вчора."
              ],
              [
                "Ta tuli koju hilja.",
                "Він прийшов додому пізно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past (lihtminevik) — A2"
      },
      {
        "id": "perfect-tense",
        "title": "Перфект (täisminevik) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Täisminevik = olema в теперішньому часі + nud-дієприкметник минулого часу. Вказує на дію, наслідок якої відчутний зараз.",
            "en": {
              "text": "The täisminevik (perfect) = present-tense olema + the nud-participle. It marks an action whose result is relevant now."
            }
          },
          {
            "type": "formula",
            "title": "olema (теп.) + nud-форма",
            "rows": [
              [
                "ma olen rääkinud",
                "я говорив(ла) (і це вплинуло на зараз)",
                "olen + rääkinud"
              ],
              [
                "sa oled tulnud",
                "ти прийшов/прийшла",
                "oled + tulnud"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma olen selle raamatu lugenud.",
                "Я прочитав цю книгу."
              ],
              [
                "Nad ei ole veel jõudnud.",
                "Вони ще не приїхали."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect (täisminevik) — A2"
      },
      {
        "id": "pluperfect-tense",
        "title": "Плюсквамперфект (enneminevik) — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Enneminevik = olema в простому минулому (olin, olid, oli...) + nud-дієприкметник. Дія, що відбулась раніше за іншу минулу дію.",
            "en": {
              "text": "The enneminevik (pluperfect) = past-tense olema (olin, olid, oli...) + the nud-participle. An action that happened before another past action."
            }
          },
          {
            "type": "table",
            "title": "rääkima — enneminevik",
            "rows": [
              [
                "ma olin rääkinud",
                "я вже був говорив"
              ],
              [
                "sa olid tulnud",
                "ти вже був прийшов"
              ],
              [
                "ta oli lahkunud",
                "він вже був пішов"
              ]
            ],
            "en": {
              "title": "rääkima — Pluperfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kui ma jõudsin, oli ta juba lahkunud.",
                "Коли я прийшов, він уже пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect (enneminevik) — B1"
      },
      {
        "id": "future-via-present",
        "title": "Майбутній час = теперішній — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "В естонській немає окремої форми майбутнього часу: майбутнє виражають теперішнім часом разом із часовим маркером (homme, järgmisel aastal) або дієсловом hakkama (почати).",
            "en": {
              "text": "Estonian has no separate future tense: the future is expressed with the present tense plus a time marker (homme, järgmisel aastal) or the verb hakkama (to start/be going to)."
            }
          },
          {
            "type": "table",
            "title": "Вираження майбутнього",
            "rows": [
              [
                "Ma tulen homme.",
                "Я прийду завтра. (present + homme)"
              ],
              [
                "Ma hakkan õppima.",
                "Я почну вчитися. (hakkama + ma-inf.)"
              ]
            ],
            "en": {
              "title": "Expressing the Future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Järgmisel aastal me reisime Jaapanisse.",
                "Наступного року ми поїдемо до Японії."
              ],
              [
                "Ta hakkab kohe sööma.",
                "Він зараз почне їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future = Present Tense — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб (tingiv kõneviis) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється закінченням -ksin/-ksid/-ks... і виражає бажання, гіпотезу або ввічливе прохання.",
            "en": {
              "text": "The conditional mood is formed with -ksin/-ksid/-ks... and expresses wishes, hypotheses, or polite requests."
            }
          },
          {
            "type": "table",
            "title": "rääkima — tingiv kõneviis",
            "rows": [
              [
                "ma räägiksin",
                "я говорив би"
              ],
              [
                "sa räägiksid",
                "ти говорив би"
              ],
              [
                "ta räägiks",
                "він говорив би"
              ]
            ],
            "en": {
              "title": "rääkima — Conditional"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma tahaksin kohvi.",
                "Я хотів би кави."
              ],
              [
                "Kas te saaksite aidata?",
                "Ви могли б допомогти?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood (tingiv kõneviis) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб (käskiv kõneviis) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа da-інфінітива без -ma; для ввічливої/множинної форми додається -ge.",
            "en": {
              "text": "The 2nd person singular imperative is the bare stem of the ma-infinitive; the polite/plural form adds -ge."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Räägi!",
                "Говори!"
              ],
              [
                "Rääkige!",
                "Говоріть! (ввічливо/множина)"
              ],
              [
                "Ära räägi!",
                "Не говори! (заперечний наказ)"
              ]
            ],
            "en": {
              "title": "Imperative"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tule siia!",
                "Йди сюди!"
              ],
              [
                "Ärge muretsege.",
                "Не хвилюйтесь."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mood (käskiv kõneviis) — A2"
      },
      {
        "id": "quotative-mood",
        "title": "Непрямий спосіб (kaudne kõneviis) — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса естонської: непрямий спосіб (-vat у теп. часі) показує, що мовець переказує чужі слова, не ручаючись за їх правдивість — без окремого дієслова \"кажуть, що\".",
            "en": {
              "text": "A unique Estonian feature: the quotative mood (-vat in the present) shows the speaker is relaying someone else's words without vouching for their truth — with no separate verb \"they say that\"."
            }
          },
          {
            "type": "table",
            "title": "Пряме vs непряме твердження",
            "rows": [
              [
                "Ta on haige.",
                "Ta olevat haige.",
                "Він хворий. → Кажуть, він нібито хворий."
              ],
              [
                "Ta tuleb homme.",
                "Ta tulevat homme.",
                "Він прийде завтра. → Він нібито прийде завтра."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naabrid olevat lahkunud.",
                "Кажуть, сусіди нібито виїхали."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Quotative Mood (kaudne kõneviis) — B2"
      },
      {
        "id": "negative-past",
        "title": "Заперечення в минулому часі — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У простому минулому заперечення утворюється \"ei\" + nud-дієприкметник (та сама форма, що й у перфекті) — без окремого минулого заперечного дієслова.",
            "en": {
              "text": "In the simple past, negation is formed with \"ei\" + the nud-participle (the same form used in the perfect) — there is no separate negative past verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "ma rääkisin",
                "ma ei rääkinud",
                "я говорив → я не говорив"
              ],
              [
                "ta nägi",
                "ta ei näinud",
                "він бачив → він не бачив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma ei näinud teda eile.",
                "Я не бачив його вчора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation in the Past Tense — A2"
      },
      {
        "id": "two-infinitives",
        "title": "Два інфінітиви: ma- і da- — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Естонська має два інфінітиви: ma-інфінітив (kirjutama) для руху/наміру та da-інфінітив (kirjutada) після модальних дієслів (tahan, pean, saan, oskan).",
            "en": {
              "text": "Estonian has two infinitives: the ma-infinitive (kirjutama), used after verbs of motion/purpose, and the da-infinitive (kirjutada), used after modal verbs (tahan, pean, saan, oskan)."
            }
          },
          {
            "type": "table",
            "title": "ma- vs da-інфінітив",
            "rows": [
              [
                "Ma lähen ujuma.",
                "Я йду плавати. (ma-inf. — рух)"
              ],
              [
                "Ma tahan ujuda.",
                "Я хочу плавати. (da-inf. — модальне)"
              ]
            ],
            "en": {
              "title": "ma- vs da-infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pean minema.",
                "Мені треба йти."
              ],
              [
                "Ta oskab ujuda.",
                "Він вміє плавати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Two Infinitives: ma- and da- — A2"
      },
      {
        "id": "present-participle",
        "title": "Активний дієприкметник теп. часу (-v) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник на -v(a) описує тривалу або одночасну дію, вживається як прикметник або в описових конструкціях.",
            "en": {
              "text": "The -v(a) participle describes an ongoing or simultaneous action, used as an adjective or in descriptive constructions."
            }
          },
          {
            "type": "table",
            "title": "rääkima → rääkiv",
            "rows": [
              [
                "rääkiv laps",
                "дитина, що говорить"
              ],
              [
                "magav kass",
                "кіт, що спить"
              ],
              [
                "nutt olev laps",
                "дитина, що плаче"
              ]
            ],
            "en": {
              "title": "rääkima → rääkiv"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nägin magavat last.",
                "Я бачив дитину, що спала."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Active Participle (-v) — B1"
      },
      {
        "id": "past-participle",
        "title": "Дієприкметники минулого часу (-nud/-tud) — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "-nud — активний дієприкметник минулого часу (той, хто зробив); -tud — пасивний (те, що зроблено). Обидва — основа для складних часів і пасиву.",
            "en": {
              "text": "-nud is the active past participle (\"the one who did\"); -tud is the passive (\"the thing that was done\"). Both are the base for compound tenses and the passive voice."
            }
          },
          {
            "type": "table",
            "title": "-nud vs -tud",
            "rows": [
              [
                "kirjutanud",
                "той, хто написав (актив)"
              ],
              [
                "kirjutatud",
                "написаний (пасив)"
              ]
            ],
            "en": {
              "title": "-nud vs -tud"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kirjutatud kiri jäi lauale.",
                "Написаний лист залишився на столі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Participles (-nud/-tud) — B1"
      },
      {
        "id": "impersonal-passive",
        "title": "Безособовий стан (umbisikuline tegumood) — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Естонський \"пасив\" — насправді безособова форма (räägitakse — \"кажуть/розмовляють, без вказівки на суб'єкт\"), яка не змінюється за особами: -takse/-dakse у теп. часі, -ti в минулому.",
            "en": {
              "text": "Estonian \"passive\" is really an impersonal form (räägitakse — \"one speaks/it is said\") that does not change for person: -takse/-dakse in the present, -ti in the past."
            }
          },
          {
            "type": "table",
            "title": "Особова vs безособова форма",
            "rows": [
              [
                "Ta räägib eesti keelt.",
                "Eesti keelt räägitakse siin.",
                "Він говорить естонською. → Тут говорять естонською."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Siin ehitati uus kool.",
                "Тут побудували нову школу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Impersonal Passive (umbisikuline tegumood) — B2"
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
        "id": "case-illative",
        "title": "Ілатив — рух \"у\" — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Ілатив відповідає на питання \"куди?\" і показує рух усередину чогось: закінчення -sse або подовжений голосний / -de.",
            "en": {
              "text": "The illative answers \"where to?\" and marks motion into something: ending -sse, or a lengthened vowel / -de."
            }
          },
          {
            "type": "table",
            "title": "maja (дім) → majja",
            "rows": [
              [
                "Ma lähen majja.",
                "Я йду в дім."
              ],
              [
                "Ta pani raha taskusse.",
                "Він поклав гроші в кишеню."
              ]
            ],
            "en": {
              "title": "maja (house) → majja"
            }
          }
        ],
        "titleEn": "Illative — Motion \"into\" — A2"
      },
      {
        "id": "case-inessive",
        "title": "Інессив — перебування \"в\" — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Інессив (-s) відповідає на питання \"де?\" і показує перебування всередині чогось.",
            "en": {
              "text": "The inessive (-s) answers \"where?\" and marks being inside something."
            }
          },
          {
            "type": "table",
            "title": "maja → majas",
            "rows": [
              [
                "Ma olen majas.",
                "Я в домі."
              ],
              [
                "Raamat on kotis.",
                "Книга в сумці."
              ]
            ],
            "en": {
              "title": "maja → majas"
            }
          }
        ],
        "titleEn": "Inessive — Location \"in\" — A2"
      },
      {
        "id": "case-elative",
        "title": "Елатив — рух \"з\" — A2",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "Елатив (-st) відповідає на питання \"звідки?\" і показує рух зсередини назовні.",
            "en": {
              "text": "The elative (-st) answers \"from where?\" and marks motion out of something."
            }
          },
          {
            "type": "table",
            "title": "maja → majast",
            "rows": [
              [
                "Ma tulen majast.",
                "Я виходжу з дому."
              ],
              [
                "Ta on Eestist.",
                "Він з Естонії."
              ]
            ],
            "en": {
              "title": "maja → majast"
            }
          }
        ],
        "titleEn": "Elative — Motion \"out of\" — A2"
      },
      {
        "id": "case-allative",
        "title": "Аллатив — рух \"на\" — A2",
        "emoji": "🔼",
        "sections": [
          {
            "type": "intro",
            "text": "Аллатив (-le) — рух на поверхню або до особи: \"куди/до кого?\"",
            "en": {
              "text": "The allative (-le) marks motion onto a surface or towards a person: \"onto/to whom?\""
            }
          },
          {
            "type": "table",
            "title": "laud (стіл) → lauale",
            "rows": [
              [
                "Pane raamat lauale.",
                "Поклади книгу на стіл."
              ],
              [
                "Ma annan sulle raamatu.",
                "Я даю тобі книгу."
              ]
            ],
            "en": {
              "title": "laud (table) → lauale"
            }
          }
        ],
        "titleEn": "Allative — Motion \"onto\" — A2"
      },
      {
        "id": "case-adessive",
        "title": "Адессив — перебування \"на\" — A2",
        "emoji": "🪑",
        "sections": [
          {
            "type": "intro",
            "text": "Адессив (-l) — перебування на поверхні, а також основний засіб вираження володіння (mul on = у мене є).",
            "en": {
              "text": "The adessive (-l) marks location on a surface, and is also the main way to express possession (mul on = I have)."
            }
          },
          {
            "type": "table",
            "title": "laud → laual",
            "rows": [
              [
                "Raamat on laual.",
                "Книга на столі."
              ],
              [
                "Mul on kass.",
                "У мене є кіт."
              ]
            ],
            "en": {
              "title": "laud → laual"
            }
          }
        ],
        "titleEn": "Adessive — Location \"on\" / Possession — A2"
      },
      {
        "id": "case-ablative",
        "title": "Аблатив — рух \"з поверхні\" — B1",
        "emoji": "⬇️",
        "sections": [
          {
            "type": "intro",
            "text": "Аблатив (-lt) — рух із поверхні або від особи: протилежність аллативу.",
            "en": {
              "text": "The ablative (-lt) marks motion off a surface or away from a person — the opposite of the allative."
            }
          },
          {
            "type": "table",
            "title": "laud → laualt",
            "rows": [
              [
                "Võta raamat laualt.",
                "Візьми книгу зі столу."
              ],
              [
                "Sain sõbralt kirja.",
                "Я отримав лист від друга."
              ]
            ],
            "en": {
              "title": "laud → laualt"
            }
          }
        ],
        "titleEn": "Ablative — Motion \"off/from\" — B1"
      },
      {
        "id": "case-translative",
        "title": "Транслатив — перетворення \"на\" — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Транслатив (-ks) виражає перехід в новий стан або роль: \"стати ким/чим\", а також мету дії.",
            "en": {
              "text": "The translative (-ks) expresses becoming or a role: \"to become something\", and also purpose."
            }
          },
          {
            "type": "table",
            "title": "õpetaja → õpetajaks",
            "rows": [
              [
                "Ta õpib õpetajaks.",
                "Він навчається на вчителя."
              ],
              [
                "Ilm läks külmaks.",
                "Погода стала холодною."
              ]
            ],
            "en": {
              "title": "õpetaja → õpetajaks"
            }
          }
        ],
        "titleEn": "Translative — Becoming — B1"
      },
      {
        "id": "case-terminative",
        "title": "Термінатив — межа \"до\" — B1",
        "emoji": "🏁",
        "sections": [
          {
            "type": "intro",
            "text": "Термінатив (-ni) показує межу в просторі або часі: \"до якого місця/моменту\".",
            "en": {
              "text": "The terminative (-ni) marks a limit in space or time: \"up to what point\"."
            }
          },
          {
            "type": "table",
            "title": "hommik → hommikuni",
            "rows": [
              [
                "Magasin hommikuni.",
                "Я спав до ранку."
              ],
              [
                "Jooksin metsani.",
                "Я біг до лісу."
              ]
            ],
            "en": {
              "title": "hommik → hommikuni"
            }
          }
        ],
        "titleEn": "Terminative — Limit \"up to\" — B1"
      },
      {
        "id": "case-essive",
        "title": "Есив — тимчасовий стан \"як\" — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Есив (-na) описує тимчасову роль або стан: \"будучи ким/чим\".",
            "en": {
              "text": "The essive (-na) describes a temporary role or state: \"as/being something\"."
            }
          },
          {
            "type": "table",
            "title": "laps → lapsena",
            "rows": [
              [
                "Lapsena elasin maal.",
                "Дитиною я жив у селі."
              ],
              [
                "Ta töötab arstina.",
                "Він працює лікарем."
              ]
            ],
            "en": {
              "title": "laps → lapsena"
            }
          }
        ],
        "titleEn": "Essive — Temporary State \"as\" — B1"
      },
      {
        "id": "case-abessive",
        "title": "Абессив — \"без\" — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "Абессив (-ta) виражає відсутність чогось — \"без\", і замінює окремий прийменник.",
            "en": {
              "text": "The abessive (-ta) expresses the absence of something — \"without\" — replacing a separate preposition."
            }
          },
          {
            "type": "table",
            "title": "raha → rahata",
            "rows": [
              [
                "Ta jäi rahata.",
                "Він залишився без грошей."
              ],
              [
                "Kohvita ei saa hommikut alustada.",
                "Без кави ранок не почати."
              ]
            ],
            "en": {
              "title": "raha → rahata"
            }
          }
        ],
        "titleEn": "Abessive — \"Without\" — B1"
      },
      {
        "id": "case-comitative",
        "title": "Комітатив — \"разом з\" — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Комітатив (-ga) виражає \"разом з\" — інструмент або супровід, і теж замінює прийменник.",
            "en": {
              "text": "The comitative (-ga) expresses \"together with\" — an instrument or accompaniment, also replacing a preposition."
            }
          },
          {
            "type": "table",
            "title": "sõber → sõbraga",
            "rows": [
              [
                "Lähen sõbraga kinno.",
                "Я йду в кіно з другом."
              ],
              [
                "Kirjutan pliiatsiga.",
                "Я пишу олівцем."
              ]
            ],
            "en": {
              "title": "sõber → sõbraga"
            }
          }
        ],
        "titleEn": "Comitative — \"Together with\" — B1"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Називний множини утворюється закінченням -d від форми родового однини, а не від називного однини.",
            "en": {
              "text": "The nominative plural is formed by adding -d to the genitive singular stem, not the nominative singular."
            }
          },
          {
            "type": "formula",
            "title": "Однина (родовий) → множина",
            "rows": [
              [
                "raamat (raamatu)",
                "raamatud",
                "книга → книги"
              ],
              [
                "maja (maja)",
                "majad",
                "дім → доми"
              ]
            ]
          }
        ],
        "titleEn": "Forming the Plural — A2"
      },
      {
        "id": "partitive-plural",
        "title": "Партитив множини — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Партитив множини (часто -id, -sid, -e) вживається після числівників від 2 і виражає невизначену або часткову кількість.",
            "en": {
              "text": "The partitive plural (often -id, -sid, -e) is used after numbers 2+ and expresses an indefinite or partial quantity."
            }
          },
          {
            "type": "table",
            "title": "raamat → raamatuid",
            "rows": [
              [
                "kaks raamatut",
                "дві книги (парт. одн.)"
              ],
              [
                "palju raamatuid",
                "багато книг (парт. мн.)"
              ]
            ],
            "en": {
              "title": "raamat → raamatuid"
            }
          }
        ],
        "titleEn": "Partitive Plural — B1"
      },
      {
        "id": "total-partial-object",
        "title": "Тотальний vs партитивний об'єкт — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знаменита риса естонської: відмінок прямого додатка залежить від того, чи дія завершена й повністю охоплює об'єкт (генітив/номінатив) чи ні (партитив).",
            "en": {
              "text": "A famous Estonian feature: the case of the direct object depends on whether the action is complete and fully affects the object (genitive/nominative) or not (partitive)."
            }
          },
          {
            "type": "formula",
            "title": "Завершено vs незавершено",
            "rows": [
              [
                "Ma lugesin raamatu läbi.",
                "Ma lugesin raamatut.",
                "Я прочитав книгу (повністю). / Я читав книгу (процес)."
              ]
            ]
          }
        ],
        "titleEn": "Total vs Partial Object — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодження прикметника з іменником — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у числі та відмінку майже завжди (крім термінатива, есива, абессива й комітатива).",
            "en": {
              "text": "The adjective agrees with the noun in number and case almost always (except the terminative, essive, abessive and comitative)."
            }
          },
          {
            "type": "table",
            "title": "suur maja (великий дім)",
            "rows": [
              [
                "suures majas",
                "у великому домі"
              ],
              [
                "suurde majja",
                "у великий дім"
              ]
            ],
            "en": {
              "title": "suur maja (big house)"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "comparative-adjectives",
        "title": "Порівняльний ступінь — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється закінченням -m, додаваним до родового відмінка.",
            "en": {
              "text": "The comparative is formed by adding -m to the genitive stem."
            }
          },
          {
            "type": "table",
            "title": "suur → suurem",
            "rows": [
              [
                "suur (suure) → suurem",
                "великий → більший"
              ],
              [
                "ilus (ilusa) → ilusam",
                "красивий → красивіший"
              ]
            ],
            "en": {
              "title": "suur → suurem"
            }
          }
        ],
        "titleEn": "Comparative Adjectives — A2"
      },
      {
        "id": "superlative-adjectives",
        "title": "Найвищий ступінь — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється словом \"kõige\" перед порівняльною формою.",
            "en": {
              "text": "The superlative is formed with the word \"kõige\" before the comparative form."
            }
          },
          {
            "type": "table",
            "title": "kõige + порівняльна форма",
            "rows": [
              [
                "kõige suurem",
                "найбільший"
              ],
              [
                "kõige ilusam",
                "найкрасивіший"
              ]
            ],
            "en": {
              "title": "kõige + comparative"
            }
          }
        ],
        "titleEn": "Superlative Adjectives — A2"
      },
      {
        "id": "postpositions",
        "title": "Післяйменники замість прийменників — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Естонська здебільшого використовує післяйменники (стоять після іменника в родовому відмінку), а не прийменники.",
            "en": {
              "text": "Estonian mostly uses postpositions (placed after the noun in the genitive), not prepositions."
            }
          },
          {
            "type": "table",
            "title": "Поширені післяйменники",
            "rows": [
              [
                "laua peal",
                "на столі"
              ],
              [
                "maja taga",
                "за домом"
              ],
              [
                "kooli kõrval",
                "біля школи"
              ]
            ],
            "en": {
              "title": "Common Postpositions"
            }
          }
        ],
        "titleEn": "Postpositions instead of Prepositions — A2"
      },
      {
        "id": "numbers-partitive",
        "title": "Числівники й партитив — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівників від 2 і вище іменник стоїть у партитиві однини (не в множині, як в українській).",
            "en": {
              "text": "After numbers 2 and above, the noun stands in the partitive singular (not the plural, unlike Ukrainian)."
            }
          },
          {
            "type": "table",
            "title": "kaks/kolm + партитив",
            "rows": [
              [
                "üks raamat",
                "одна книга"
              ],
              [
                "kaks raamatut",
                "дві книги"
              ],
              [
                "viis raamatut",
                "п'ять книг"
              ]
            ],
            "en": {
              "title": "kaks/kolm + partitive"
            }
          }
        ],
        "titleEn": "Numbers and the Partitive — A2"
      },
      {
        "id": "consonant-gradation",
        "title": "Чергування ступенів приголосних (astmevaheldus) — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Ключова риса естонської морфології: приголосні (та їх довжина) змінюються між сильним і слабким ступенем залежно від відмінка чи особи — це не виняток, а системне правило.",
            "en": {
              "text": "A core feature of Estonian morphology: consonants (and their length) alternate between a strong and weak grade depending on case or person — this is a systematic rule, not an exception."
            }
          },
          {
            "type": "formula",
            "title": "Сильний → слабкий ступінь",
            "rows": [
              [
                "jalg (нз.)",
                "jala (родов.)",
                "нога: kk→k ослаблення"
              ],
              [
                "tuba (нз.)",
                "toa (родов.)",
                "кімната: b зникає"
              ]
            ]
          }
        ],
        "titleEn": "Consonant Gradation (astmevaheldus) — B2"
      },
      {
        "id": "word-order",
        "title": "Порядок слів — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок SVO, але естонська відносно вільна: те, що ставлять на початок речення, отримує логічний наголос.",
            "en": {
              "text": "The base order is SVO, but Estonian is fairly free: whatever is placed at the start of the sentence gets the logical emphasis."
            }
          },
          {
            "type": "table",
            "title": "Нейтральний vs акцентований порядок",
            "rows": [
              [
                "Ma näen sind.",
                "Я бачу тебе. (нейтрально)"
              ],
              [
                "Sind ma näen, aga teda mitte.",
                "Тебе я бачу, а його — ні. (акцент)"
              ]
            ],
            "en": {
              "title": "Neutral vs Emphatic Order"
            }
          }
        ],
        "titleEn": "Word Order — A2"
      },
      {
        "id": "adverbs-formation",
        "title": "Утворення прислівників — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії — це застиглі відмінкові форми прикметника, часто на -lt (аблатив) або -sti.",
            "en": {
              "text": "Many manner adverbs are frozen case forms of the adjective, often ending in -lt (ablative) or -sti."
            }
          },
          {
            "type": "table",
            "title": "kiire → kiiresti",
            "rows": [
              [
                "kiire (швидкий) → kiiresti",
                "швидко"
              ],
              [
                "hea (добрий) → hästi",
                "добре"
              ]
            ],
            "en": {
              "title": "kiire → kiiresti"
            }
          }
        ],
        "titleEn": "Forming Adverbs — A2"
      },
      {
        "id": "possession-construction",
        "title": "Вираження \"мати\" — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "В естонській немає дієслова \"мати\": володіння виражається адессивом власника + olema, буквально \"у мене є\".",
            "en": {
              "text": "Estonian has no verb \"to have\": possession is expressed with the possessor in the adessive + olema, literally \"at me is\"."
            }
          },
          {
            "type": "formula",
            "title": "mul on = я маю",
            "rows": [
              [
                "Mul on koer.",
                "У мене є собака.",
                "Mul (у мене, ad.) + on (є)"
              ],
              [
                "Sul on õigus.",
                "Ти маєш рацію.",
                "Sul (у тебе) + on (є)"
              ]
            ]
          }
        ],
        "titleEn": "Expressing \"to Have\" — A1"
      },
      {
        "id": "reflexive-pronouns",
        "title": "Зворотні займенники ise, enda — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ise\" підсилює суб'єкт (\"сам\"), а \"enda\" (родовий від ise) виражає \"свій\" — присвійність, спрямовану на самого суб'єкта.",
            "en": {
              "text": "\"Ise\" emphasizes the subject (\"self\"), while \"enda\" (genitive of ise) expresses \"one's own\" — possession pointing back to the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma tegin seda ise.",
                "Я зробив це сам."
              ],
              [
                "Ta kaotas enda võtme.",
                "Він загубив свій ключ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronouns ise, enda — B1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники see, too — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"See\" (цей/це) вказує на близьке або щойно згадане, \"too\" (той) — на віддалене; \"see\" також часто вживається замість особового \"він/вона\" щодо неживих предметів.",
            "en": {
              "text": "\"See\" (this) points to something near or just mentioned, \"too\" (that) to something distant; \"see\" is also often used instead of \"it\" for inanimate things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "See raamat on minu.",
                "Ця книга моя."
              ],
              [
                "Too maja seal on vana.",
                "Той дім там старий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives see, too — A1"
      },
      {
        "id": "three-degrees-length",
        "title": "Три ступені довготи звуків — B2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна фонологічна риса естонської: голосні й приголосні розрізняють не два, а три ступені довготи — короткий, довгий і надовгий (третій зазвичай не позначається на письмі, лише в мовленні).",
            "en": {
              "text": "A unique Estonian phonological feature: vowels and consonants distinguish not two but three degrees of length — short, long, and overlong (the third is usually not marked in writing, only in speech)."
            }
          },
          {
            "type": "table",
            "title": "lina / linna / linna",
            "rows": [
              [
                "lina (1 ступ.)",
                "простирадло"
              ],
              [
                "linna (2 ступ., part.)",
                "місто (part.)"
              ],
              [
                "linna (3 ступ., illat.)",
                "у місто (illat., вимовляється довше)"
              ]
            ],
            "en": {
              "title": "lina / linna / linna"
            }
          }
        ],
        "titleEn": "Three Degrees of Length — B2"
      },
      {
        "id": "relative-pronouns",
        "title": "Відносні займенники kes/mis — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kes\" вживається для людей, \"mis\" — для всього іншого; обидва відмінюються за відмінком підрядного речення, а не головного.",
            "en": {
              "text": "\"Kes\" is used for people, \"mis\" for everything else; both decline according to the case required by the subordinate clause, not the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naine, kes seal seisab, on mu ema.",
                "Жінка, що там стоїть, — моя мати."
              ],
              [
                "Raamat, mida ma loen, on huvitav.",
                "Книга, яку я читаю, цікава."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns kes/mis — A2"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівноправні частини, підрядні — вводять залежне речення.",
            "en": {
              "text": "Coordinating conjunctions join equal parts; subordinating ones introduce a dependent clause."
            }
          },
          {
            "type": "table",
            "title": "Сурядні / підрядні",
            "rows": [
              [
                "ja / aga / või",
                "і / але / або"
              ],
              [
                "sest / kui / et",
                "тому що / якщо-коли / щоб-що"
              ]
            ],
            "en": {
              "title": "Coordinating / Subordinating"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "tag-question-eks",
        "title": "Розділове питання eks — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"eks\" на початку або в кінці речення утворює розділове питання на кшталт \"чи не так?\", часто з відтінком очікування згоди.",
            "en": {
              "text": "The particle \"eks\" at the start or end of a sentence forms a tag question like \"isn't that so?\", often expecting agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ilus ilm täna, eks?",
                "Гарна сьогодні погода, чи не так?"
              ],
              [
                "Eks me lähe koos?",
                "Ну ми ж підемо разом, так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tag Question eks — B1"
      },
      {
        "id": "diminutives",
        "title": "Демінутиви (-ke, -kene) — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси -ke/-kene додають відтінок ніжності або малого розміру, часто у зверненні до дітей чи улюбленців.",
            "en": {
              "text": "The diminutive suffixes -ke/-kene add a nuance of tenderness or smallness, often used when addressing children or pets."
            }
          },
          {
            "type": "table",
            "title": "koer → koerake",
            "rows": [
              [
                "koer → koerake",
                "собака → песик"
              ],
              [
                "laps → lapsuke",
                "дитина → дитинка"
              ]
            ],
            "en": {
              "title": "koer → koerake"
            }
          }
        ],
        "titleEn": "Diminutives (-ke, -kene) — B1"
      },
      {
        "id": "telling-time",
        "title": "Називання часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час запитують \"Mis kell on?\", а називають з приводом \"kell\" перед числом.",
            "en": {
              "text": "Time is asked with \"Mis kell on?\" and told with \"kell\" before the number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kell on kolm.",
                "Зараз третя година."
              ],
              [
                "Kohtume kell viis.",
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
        "id": "days-months",
        "title": "Дні тижня й місяці — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня й місяці пишуться з малої літери, на відміну від багатьох мов.",
            "en": {
              "text": "Days of the week and months are written with a lowercase letter, unlike in many languages."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "esmaspäev",
                "понеділок"
              ],
              [
                "kolmapäev",
                "середа"
              ],
              [
                "reede",
                "п'ятниця"
              ],
              [
                "pühapäev",
                "неділя"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days and Months — A1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова (liitsõnad) — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Естонська активно творить складні слова: перша частина зазвичай у родовому відмінку, друга несе основне значення.",
            "en": {
              "text": "Estonian forms compound words freely: the first part is usually in the genitive, the second carries the core meaning."
            }
          },
          {
            "type": "table",
            "title": "raamat + kogu",
            "rows": [
              [
                "raamat + kogu = raamatukogu",
                "книга + збірка = бібліотека"
              ],
              [
                "auto + juht = autojuht",
                "авто + водій = водій"
              ]
            ],
            "en": {
              "title": "raamat + kogu"
            }
          }
        ],
        "titleEn": "Compound Words (liitsõnad) — A2"
      },
      {
        "id": "partitive-after-negation",
        "title": "Партитив після заперечення — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "У запереченому реченні прямий додаток майже завжди стоїть у партитиві, незалежно від того, яким він був у стверджувальному реченні.",
            "en": {
              "text": "In a negated sentence, the direct object is almost always in the partitive, regardless of what case it had in the affirmative."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Ma ostsin raamatu.",
                "Ma ei ostnud raamatut.",
                "Я купив книгу (ном.) → Я не купив книгу (парт.)"
              ]
            ]
          }
        ],
        "titleEn": "Partitive after Negation — B1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Keegi\" (хтось/ніхто), \"miski\" (щось/нічого) і \"mõni\" (якийсь) — базові неозначені займенники, їх значення в запереченні зсувається до \"ніхто/нічого\".",
            "en": {
              "text": "\"Keegi\" (someone/no one), \"miski\" (something/nothing) and \"mõni\" (some) are the basic indefinite pronouns; under negation their meaning shifts to \"no one/nothing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Keegi helistas.",
                "Хтось дзвонив."
              ],
              [
                "Keegi ei helistanud.",
                "Ніхто не дзвонив."
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
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -s (крім esimene \"перший\" і teine \"другий\", які неправильні).",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -s (except esimene \"first\" and teine \"second\", which are irregular)."
            }
          },
          {
            "type": "table",
            "title": "kolm → kolmas",
            "rows": [
              [
                "esimene / teine",
                "перший / другий"
              ],
              [
                "kolmas / neljas",
                "третій / четвертий"
              ]
            ],
            "en": {
              "title": "kolm → kolmas"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "existential-vs-possessive",
        "title": "Existential olema vs присвійне — B1",
        "emoji": "🌐",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама конструкція \"X-l on Y\" виражає і присвійність (\"X має Y\"), і просту наявність (\"є Y на X\") — розрізняється лише контекстом.",
            "en": {
              "text": "The same construction \"X-l on Y\" expresses both possession (\"X has Y\") and simple existence (\"there is Y at X\") — distinguished only by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Laual on raamat.",
                "На столі є книга. (наявність)"
              ],
              [
                "Mul on raamat.",
                "У мене є книга. (володіння)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential vs Possessive olema — B1"
      },
      {
        "id": "saama-polysemy",
        "title": "Багатозначність дієслова saama — B1",
        "emoji": "🔓",
        "sections": [
          {
            "type": "intro",
            "text": "\"Saama\" поєднує значення \"могти/бути здатним\", \"отримати\" і \"стати\" — конкретний сенс визначає контекст і конструкція.",
            "en": {
              "text": "\"Saama\" combines the meanings \"can/be able to\", \"to receive\" and \"to become\" — the specific sense is set by context and construction."
            }
          },
          {
            "type": "table",
            "title": "Три значення saama",
            "rows": [
              [
                "Ma saan aidata.",
                "Я можу допомогти."
              ],
              [
                "Ma sain kirja.",
                "Я отримав листа."
              ],
              [
                "Temast sai arst.",
                "Він став лікарем."
              ]
            ],
            "en": {
              "title": "Three Meanings of saama"
            }
          }
        ],
        "titleEn": "Polysemy of saama — B1"
      },
      {
        "id": "directional-adverbs",
        "title": "Три ряди напрямкових прислівників — B1",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "Як і відмінки, прислівники місця мають три форми: куди (siia), де (siin), звідки (siit) — паралельно ілативу/інессиву/елативу.",
            "en": {
              "text": "Like the cases, place adverbs have three forms: to where (siia), where (siin), from where (siit) — paralleling the illative/inessive/elative."
            }
          },
          {
            "type": "table",
            "title": "siia / siin / siit",
            "rows": [
              [
                "siia (куди)",
                "сюди"
              ],
              [
                "siin (де)",
                "тут"
              ],
              [
                "siit (звідки)",
                "звідси"
              ]
            ],
            "en": {
              "title": "siia / siin / siit"
            }
          }
        ],
        "titleEn": "Three Sets of Directional Adverbs — B1"
      },
      {
        "id": "sina-teie-politeness",
        "title": "Sina і teie — форми ввічливості — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Teie\" — не лише множина \"ви\", а й формально-ввічливе звертання до однієї особи, як і в українській.",
            "en": {
              "text": "\"Teie\" is not only the plural \"you\" but also the formal/polite address to a single person, just as in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kas teie olete härra Tamm?",
                "Ви пан Тамм?"
              ],
              [
                "Kuidas sul läheb?",
                "Як у тебе справи? (неформально)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sina and teie — Politeness Levels — A1"
      },
      {
        "id": "interjections",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію без граматичного зв'язку з реченням.",
            "en": {
              "text": "Interjections express an emotional reaction without grammatical ties to the sentence."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "oi!",
                "ой!"
              ],
              [
                "kurat!",
                "чорт! (лайка)"
              ],
              [
                "appi!",
                "рятуйте!"
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
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду часто описують безособовим дієсловом без підмета: \"sajab\" (йде дощ/сніг) саме по собі означене дією опадів.",
            "en": {
              "text": "Weather is often described with a subjectless impersonal verb: \"sajab\" (it's raining/snowing) by itself denotes precipitation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sajab vihma.",
                "Йде дощ."
              ],
              [
                "Väljas on külm.",
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
        "id": "age-expressions",
        "title": "Вираження віку — A1",
        "emoji": "🎂",
        "sections": [
          {
            "type": "intro",
            "text": "Вік виражають прикметником на -aastane (\"років\") або конструкцією \"X-l on Y aastat\".",
            "en": {
              "text": "Age is expressed with the adjective ending -aastane (\"years old\") or the construction \"X-l on Y aastat\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma olen kakskümmend aastat vana.",
                "Мені двадцять років."
              ],
              [
                "Ta on kümneaastane.",
                "Йому десять років."
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
        "id": "family-genitive",
        "title": "Родина й присвійні конструкції — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається родовим відмінком перед іменником, без окремого присвійного займенника-прикметника, як \"мій\" в українській.",
            "en": {
              "text": "Possession is shown with the genitive before the noun, without a separate possessive adjective like Ukrainian \"my\"."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "ema",
                "мати"
              ],
              [
                "isa",
                "батько"
              ],
              [
                "õde",
                "сестра"
              ],
              [
                "vend",
                "брат"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family and Possessive Constructions — A1"
      },
      {
        "id": "health-idioms",
        "title": "Вирази про самопочуття — A2",
        "emoji": "🩺",
        "sections": [
          {
            "type": "intro",
            "text": "Самопочуття часто описують адессивом особи + станом, а не дієсловом \"почуватися\".",
            "en": {
              "text": "Well-being is often described with the person in the adessive + a state, rather than a verb \"to feel\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mul on hea olla.",
                "Мені добре."
              ],
              [
                "Tal on peavalu.",
                "У нього болить голова."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Well-being Expressions — A2"
      },
      {
        "id": "vowel-letters",
        "title": "Літери õ, ä, ö, ü — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Естонський алфавіт має чотири особливі голосні: õ (задній неогублений, унікальний звук, відсутній у більшості мов), ä, ö, ü — усі змінюють значення слова.",
            "en": {
              "text": "The Estonian alphabet has four special vowels: õ (a back unrounded vowel unique among most languages), ä, ö, ü — all of which change word meaning."
            }
          },
          {
            "type": "table",
            "title": "Мінімальні пари",
            "rows": [
              [
                "kool (школа)",
                "kõll (хижий птах)"
              ],
              [
                "saada (надіслати)",
                "sada (сто)"
              ]
            ],
            "en": {
              "title": "Minimal Pairs"
            }
          }
        ],
        "titleEn": "The Letters õ, ä, ö, ü — A1"
      },
      {
        "id": "fixed-stress",
        "title": "Наголос завжди на першому складі — A1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, наголос в естонській фіксований і завжди падає на перший склад слова, незалежно від довжини.",
            "en": {
              "text": "Unlike Ukrainian, Estonian stress is fixed and always falls on the first syllable of the word, regardless of length."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ÜLIkool",
                "університет (наголос на \"Ü\")"
              ],
              [
                "RAAmatukogu",
                "бібліотека (наголос на \"RAA\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stress Always on the First Syllable — A1"
      },
      {
        "id": "loanword-adaptation",
        "title": "Адаптація запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова адаптуються до фонетики та відмінкової системи: часто отримують закінчення -er/-us або спрощену вимову.",
            "en": {
              "text": "Loanwords are adapted to the phonetics and case system: often getting endings like -er/-us or simplified pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "arvuti",
                "комп'ютер (від \"arvutama\" — рахувати)"
              ],
              [
                "auto",
                "авто"
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Багато естонських ідіом спираються на природу та побут, часто без прямого аналога в українській.",
            "en": {
              "text": "Many Estonian idioms draw on nature and daily life, often without a direct Ukrainian equivalent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hundist puhu, hunt on aias.",
                "Про вовка промовка (букв. \"кажи про вовка, вовк у саду\")."
              ],
              [
                "Kuidas kunagi.",
                "Як пощастить/буде видно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Common Idioms — B1"
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
        "title": "Неправильні дієслова — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім olema, кілька частовживаних дієслів (minema, tulema, nägema, tegema) мають несподівані чергування основи, які варто вивчити напам'ять.",
            "en": {
              "text": "Besides olema, several common verbs (minema, tulema, nägema, tegema) have unexpected stem alternations that need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Несподівані основи",
            "rows": [
              [
                "minema (йти) → läksin",
                "минулий час від зовсім іншого кореня"
              ],
              [
                "tegema (робити) → tegin / tehtud",
                "неправильний іменний дієприкметник"
              ]
            ],
            "en": {
              "title": "Unexpected Stems"
            }
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "foreign-word-declension",
        "title": "Відмінювання іншомовних слів на голосну — B2",
        "emoji": "🈳",
        "sections": [
          {
            "type": "intro",
            "text": "Іншомовні слова, що закінчуються на -o, -a, -i (auto, biroo, taksi), відмінюються з приголосним -de- або подовженням, що не завжди очевидно з написання.",
            "en": {
              "text": "Foreign words ending in -o, -a, -i (auto, biroo, taksi) decline with an inserted -de- or lengthening that is not always obvious from the spelling."
            }
          },
          {
            "type": "table",
            "title": "auto — родовий/партитив",
            "rows": [
              [
                "auto (нз.)",
                "auto (родов.)",
                "авто: форма не змінюється в родовому"
              ],
              [
                "taksot (парт.)",
                "таксі (частк.)",
                "партитив іде через -t"
              ]
            ]
          }
        ],
        "titleEn": "Declining Foreign Words Ending in a Vowel — B2"
      },
      {
        "id": "fixed-case-idioms",
        "title": "Застиглі відмінкові вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені вирази закріпили конкретний відмінок історично і не підкоряються загальним правилам вибору відмінка (напр. після заперечення чи руху).",
            "en": {
              "text": "Some common expressions have historically fixed a specific case and do not follow the general rules for choosing a case (e.g. after negation or motion)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Head aega!",
                "До побачення! (буквально: \"доброго часу\", парт., а не очікуваний ном.)"
              ],
              [
                "Tänan väga!",
                "Дуже дякую! (парт. väga зафіксований ідіоматично)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Case Idioms — B2"
      }
    ]
  }
];
