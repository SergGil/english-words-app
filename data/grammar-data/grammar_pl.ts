// Vymova — data/grammar-data/grammar_pl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "gender",
        "title": "Rodzaj rzeczowników — A1",
        "emoji": "👫",
        "sections": [
          {
            "type": "intro",
            "text": "Польські іменники мають один із трьох родів: чоловічий, жіночий або середній. Рід впливає на форму прикметників і дієслів.",
            "en": {
              "text": "Polish nouns have one of three genders: masculine, feminine or neuter. The gender affects the form of adjectives and verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклади за родом",
            "rows": [
              [
                "чоловічий",
                "stół (стіл)",
                "duży stół (великий стіл)"
              ],
              [
                "жіночий",
                "kobieta (жінка)",
                "miła kobieta (приємна жінка)"
              ],
              [
                "середній",
                "dziecko (дитина)",
                "małe dziecko (маленька дитина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To jest duży stół.",
                "Це великий стіл."
              ],
              [
                "Ona jest miłą kobietą.",
                "Вона приємна жінка."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "verb-byc",
        "title": "Czasownik \"być\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Czasownik \"być\" (бути) — один з найважливіших дієслів польської мови, що відмінюється за особами.",
            "en": {
              "text": "The verb \"być\" (to be) is one of the most important Polish verbs and conjugates by person."
            }
          },
          {
            "type": "formula",
            "title": "\"być\" — теперішній час",
            "rows": [
              [
                "ja",
                "jestem",
                "я є"
              ],
              [
                "ty",
                "jesteś",
                "ти є"
              ],
              [
                "on / ona / ono",
                "jest",
                "він/вона/воно є"
              ],
              [
                "my",
                "jesteśmy",
                "ми є"
              ],
              [
                "wy",
                "jesteście",
                "ви є"
              ],
              [
                "oni / one",
                "są",
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
                "Jestem nauczycielem.",
                "Я вчитель."
              ],
              [
                "Ona jest szczęśliwa.",
                "Вона щаслива."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Być (To Be) — A1"
      },
      {
        "id": "plural",
        "title": "Liczba mnoga — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в польській утворюється зміною закінчення іменника, залежно від роду і типу слова.",
            "en": {
              "text": "The plural in Polish is formed by changing the noun ending, depending on gender and word type."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "stół (стіл)",
                "stoły (столи)"
              ],
              [
                "kobieta (жінка)",
                "kobiety (жінки)"
              ],
              [
                "dziecko (дитина)",
                "dzieci (діти)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam dwa stoły.",
                "У мене два столи."
              ],
              [
                "Dzieci grają w parku.",
                "Діти грають у парку."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "pronouns",
        "title": "Zaimki osobowe — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "ja",
                "я"
              ],
              [
                "ty",
                "ти"
              ],
              [
                "on / ona / ono",
                "він / вона / воно"
              ],
              [
                "my",
                "ми"
              ],
              [
                "wy",
                "ви"
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
                "Ja jestem studentem.",
                "Я студент."
              ],
              [
                "My jesteśmy w domu.",
                "Ми вдома."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "cases-intro",
        "title": "Przypadki — wprowadzenie — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Польська має 7 відмінків. Найважливіші для початку — це nominativ (хто/що) та akuzativ (кого/що, об'єкт дії).",
            "en": {
              "text": "Polish has 7 grammatical cases. The most important ones to start with are nominative (who/what) and accusative (whom/what — the object of an action)."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Akuzativ",
            "rows": [
              [
                "kot (кіт)",
                "Widzę kota. (Я бачу кота.)"
              ],
              [
                "książka (книга)",
                "Czytam książkę. (Я читаю книгу.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam psa.",
                "У мене є пес."
              ],
              [
                "Lubię kawę.",
                "Мені подобається кава."
              ]
            ]
          }
        ],
        "titleEn": "Introduction to the Cases — A2"
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
        "title": "Czas teraźniejszy — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова в теперішньому часі відмінюються за особами й числами. Закінчення залежить від типу дієвідмінювання — найпоширеніший тип має закінчення -ę в 1-й особі однини та -esz у 2-й особі.",
            "en": {
              "text": "Present-tense verbs are conjugated by person and number. The ending depends on the conjugation type — the most common type has -ę in the 1st person singular and -esz in the 2nd person."
            }
          },
          {
            "type": "formula",
            "title": "\"pisać\" (писати) — теперішній час",
            "rows": [
              [
                "ja",
                "piszę",
                "я пишу"
              ],
              [
                "ty",
                "piszesz",
                "ти пишеш"
              ],
              [
                "on / ona / ono",
                "pisze",
                "він/вона/воно пише"
              ],
              [
                "my",
                "piszemy",
                "ми пишемо"
              ],
              [
                "wy",
                "piszecie",
                "ви пишете"
              ],
              [
                "oni / one",
                "piszą",
                "вони пишуть"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Piszę list do przyjaciela.",
                "Я пишу листа другу."
              ],
              [
                "Oni piszą zadanie domowe.",
                "Вони пишуть домашнє завдання."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-conjugation-groups",
        "title": "Trzy koniugacje czasowników — A2",
        "titleEn": "The Three Conjugation Groups — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Польські дієслова поділяються на три типи дієвідмінювання за закінченнями 1-ї та 2-ї особи однини теперішнього часу.",
            "en": {
              "text": "Polish verbs fall into three conjugation types based on the 1st and 2nd person singular present-tense endings."
            }
          },
          {
            "type": "table",
            "title": "Типи дієвідмінювання",
            "rows": [
              [
                "-ę / -esz",
                "pisać → piszę, piszesz",
                "читати, писати, нести"
              ],
              [
                "-ę / -isz",
                "mówić → mówię, mówisz",
                "говорити, робити, бачити"
              ],
              [
                "-m / -sz",
                "kochać → kocham, kochasz",
                "кохати, читати (czytać), грати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mówię po polsku.",
                "Я говорю польською."
              ],
              [
                "Kocham muzykę klasyczną.",
                "Я люблю класичну музику."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-aspect",
        "title": "Aspekt dokonany i niedokonany — A2",
        "titleEn": "Perfective & Imperfective Aspect — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне польське дієслово має вид: недоконаний (дія в процесі, триває або повторюється) або доконаний (одноразова, завершена дія з результатом). Це не пов'язано з часом напряму — навіть минулий час буває недоконаним або доконаним.",
            "en": {
              "text": "Every Polish verb has an aspect: imperfective (an ongoing or repeated action) or perfective (a single, completed action with a result). This is independent of tense — even the past tense can be imperfective or perfective."
            }
          },
          {
            "type": "table",
            "title": "Недоконаний ↔ доконаний",
            "rows": [
              [
                "czytać",
                "przeczytać",
                "читати / прочитати"
              ],
              [
                "pisać",
                "napisać",
                "писати / написати"
              ],
              [
                "robić",
                "zrobić",
                "робити / зробити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Czytałem książkę całe popołudnie.",
                "Я читав книжку весь день (процес)."
              ],
              [
                "Przeczytałem książkę w jeden dzień.",
                "Я прочитав книжку за один день (результат)."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pairs",
        "title": "Pary aspektowe i przedrostki — B1",
        "titleEn": "Aspect Pairs & Verb Prefixes — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний вид найчастіше утворюється додаванням префікса до недоконаного дієслова. Один і той самий префікс для різних дієслів може по-різному впливати на значення.",
            "en": {
              "text": "The perfective aspect is most often formed by adding a prefix to the imperfective verb. The same prefix can affect meaning differently for different verbs."
            }
          },
          {
            "type": "table",
            "title": "Найчастіші префікси доконаного виду",
            "rows": [
              [
                "z-",
                "robić → zrobić",
                "робити → зробити"
              ],
              [
                "na-",
                "pisać → napisać",
                "писати → написати"
              ],
              [
                "wy-",
                "pić → wypić",
                "пити → випити"
              ],
              [
                "za-",
                "płacić → zapłacić",
                "платити → заплатити"
              ],
              [
                "prze-",
                "czytać → przeczytać",
                "читати → прочитати"
              ],
              [
                "u-",
                "gotować → ugotować",
                "варити → зварити"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ugotowałam obiad w godzinę.",
                "Я зварила обід за годину."
              ],
              [
                "Zapłaciłem za bilet kartą.",
                "Я заплатив за квиток карткою."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Czas przeszły — A1",
        "titleEn": "Past Tense — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється від основи дієслова додаванням суфікса -ł- та особового закінчення. В однині дієслово узгоджується з родом підмета.",
            "en": {
              "text": "The past tense is formed from the verb stem plus the suffix -ł- and a personal ending. In the singular, the verb agrees with the subject's gender."
            }
          },
          {
            "type": "formula",
            "title": "\"robić\" (робити) — минулий час",
            "rows": [
              [
                "ja (чол.)",
                "robiłem",
                "я робив"
              ],
              [
                "ja (жін.)",
                "robiłam",
                "я робила"
              ],
              [
                "ty (чол.)",
                "robiłeś",
                "ти робив"
              ],
              [
                "on",
                "robił",
                "він робив"
              ],
              [
                "ona",
                "robiła",
                "вона робила"
              ],
              [
                "ono",
                "robiło",
                "воно робило"
              ],
              [
                "my (чол.-ос.)",
                "robiliśmy",
                "ми робили"
              ],
              [
                "oni / one",
                "robili / robiły",
                "вони робили"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wczoraj pracowałem do późna.",
                "Вчора я працював до пізнього вечора."
              ],
              [
                "One robiły zakupy w centrum.",
                "Вони (жін.) робили покупки в центрі."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-simple",
        "title": "Czas przyszły prosty — A2",
        "titleEn": "Simple Future — Perfective Verbs — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Доконані дієслова не мають окремої форми майбутнього часу — форма, схожа на теперішній час, автоматично виражає майбутню дію, оскільки доконаний вид не може означати теперішню тривалу дію.",
            "en": {
              "text": "Perfective verbs have no separate future conjugation — the present-looking form automatically expresses a future action, since the perfective aspect cannot describe an ongoing present action."
            }
          },
          {
            "type": "formula",
            "title": "\"napisać\" (написати) — простий майбутній",
            "rows": [
              [
                "ja",
                "napiszę",
                "я напишу"
              ],
              [
                "ty",
                "napiszesz",
                "ти напишеш"
              ],
              [
                "on / ona / ono",
                "napisze",
                "він/вона/воно напише"
              ],
              [
                "my",
                "napiszemy",
                "ми напишемо"
              ],
              [
                "wy",
                "napiszecie",
                "ви напишете"
              ],
              [
                "oni / one",
                "napiszą",
                "вони напишуть"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Napiszę do ciebie jutro.",
                "Я напишу тобі завтра."
              ],
              [
                "Zrobimy to razem.",
                "Ми зробимо це разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-compound",
        "title": "Czas przyszły złożony — A2",
        "titleEn": "Compound Future — Imperfective Verbs — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконані дієслова утворюють майбутній час складеною формою: дієслово \"być\" у майбутньому (będę, będziesz...) + інфінітив АБО форма на -ł- минулого часу. Обидва варіанти правильні й рівнозначні.",
            "en": {
              "text": "Imperfective verbs form the future with a compound construction: the future of \"być\" (będę, będziesz...) plus the infinitive OR the -ł- past-tense form. Both options are equally correct."
            }
          },
          {
            "type": "formula",
            "title": "\"pisać\" (писати) — складний майбутній",
            "rows": [
              [
                "ja",
                "będę pisać / pisał(a)",
                "я писатиму"
              ],
              [
                "ty",
                "będziesz pisać / pisał(a)",
                "ти писатимеш"
              ],
              [
                "on / ona",
                "będzie pisać / pisał(a)",
                "він/вона писатиме"
              ],
              [
                "my",
                "będziemy pisać / pisali(ły)",
                "ми писатимемо"
              ],
              [
                "wy",
                "będziecie pisać / pisali(ły)",
                "ви писатимете"
              ],
              [
                "oni / one",
                "będą pisać / pisali(ły)",
                "вони писатимуть"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Będę czytać tę książkę przez tydzień.",
                "Я читатиму цю книжку протягом тижня."
              ],
              [
                "Będziemy mieszkać w Warszawie.",
                "Ми будемо жити у Варшаві."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Rozkaźnik — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від основи теперішнього часу. Форма 2-ї особи однини зазвичай відкидає закінчення, 1-ша особа множини додає -(m)y, 2-га особа множини додає -cie.",
            "en": {
              "text": "The imperative is formed from the present-tense stem. The 2nd person singular usually drops the ending, the 1st person plural adds -(m)y, and the 2nd person plural adds -cie."
            }
          },
          {
            "type": "formula",
            "title": "\"pisać\" (писати) — наказовий спосіб",
            "rows": [
              [
                "ty",
                "Pisz!",
                "Пиши!"
              ],
              [
                "niech on / ona",
                "Niech pisze!",
                "Нехай він/вона пише!"
              ],
              [
                "my",
                "Piszmy!",
                "Пишімо!"
              ],
              [
                "wy",
                "Piszcie!",
                "Пишіть!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Zamknij okno, proszę.",
                "Закрий вікно, будь ласка."
              ],
              [
                "Chodźmy do kina!",
                "Ходімо в кіно!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Tryb warunkowy — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється: основа минулого часу (з -ł-) + частка -by- + особове закінчення. Частка by може відокремлюватися й переміщуватися на початок речення разом із сполучником (gdyby, żeby).",
            "en": {
              "text": "The conditional mood is formed: past-tense stem (with -ł-) + the particle -by- + a personal ending. The particle by can detach and move to the front of the clause together with a conjunction (gdyby, żeby)."
            }
          },
          {
            "type": "formula",
            "title": "\"robić\" (робити) — умовний спосіб",
            "rows": [
              [
                "ja (чол.)",
                "robiłbym",
                "я робив би"
              ],
              [
                "ja (жін.)",
                "robiłabym",
                "я робила б"
              ],
              [
                "ty (чол.)",
                "robiłbyś",
                "ти робив би"
              ],
              [
                "on / ona",
                "robiłby / robiłaby",
                "він/вона робив(-ла) би"
              ],
              [
                "my",
                "robilibyśmy",
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
                "Zrobiłbym to, gdybym miał czas.",
                "Я зробив би це, якби мав час."
              ],
              [
                "Chciałabym pojechać do Krakowa.",
                "Я хотіла б поїхати до Кракова."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-past",
        "title": "Tryb warunkowy przeszły — B2",
        "titleEn": "Past Conditional — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Для нереальних умов у минулому додають \"był/była/było/byli/były\" між основою і часткою -by-: це виражає те, що не сталося в минулому.",
            "en": {
              "text": "For unreal conditions in the past, \"był/była/było/byli/były\" is inserted between the stem and the -by- particle — expressing something that did not happen in the past."
            }
          },
          {
            "type": "table",
            "title": "Теперішній умовний ↔ минулий умовний",
            "rows": [
              [
                "zrobiłbym",
                "zrobiłbym był",
                "я зробив би / я був би зробив"
              ],
              [
                "wiedziałbym",
                "wiedziałbym był",
                "я знав би / я був би знав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gdybym był wiedział, powiedziałbym ci wcześniej.",
                "Якби я знав (раніше), я сказав би тобі раніше."
              ],
              [
                "Byłabym przyszła, gdyby nie deszcz.",
                "Я прийшла б, якби не дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-no-to",
        "title": "Forma nieosobowa na -no/-to — B2",
        "titleEn": "Impersonal Past with -no/-to — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Безособова форма на -no/-to використовується, коли діяч невідомий або неважливий. Утворюється від основи пасивного дієприкметника: zrobiono, powiedziano, widziano.",
            "en": {
              "text": "The impersonal -no/-to form is used when the agent is unknown or unimportant. It is formed from the passive-participle stem: zrobiono, powiedziano, widziano."
            }
          },
          {
            "type": "table",
            "title": "Приклади форм",
            "rows": [
              [
                "zrobić",
                "zrobiono",
                "було зроблено"
              ],
              [
                "powiedzieć",
                "powiedziano",
                "було сказано"
              ],
              [
                "widzieć",
                "widziano",
                "було бачено"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Powiedziano mi, że pociąg będzie spóźniony.",
                "Мені сказали, що потяг запізниться."
              ],
              [
                "W tym roku zbudowano nowy most.",
                "Цього року побудували новий мост."
              ]
            ]
          }
        ]
      },
      {
        "id": "active-adverbial-participle",
        "title": "Imiesłów przysłówkowy współczesny — B1",
        "titleEn": "Active Adverbial Participle -ąc — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ąc утворюється від основи теперішнього часу недоконаних дієслів і описує дію, одночасну з дією головного присудка. Підмет обох дій повинен бути той самий.",
            "en": {
              "text": "The -ąc adverbial participle is formed from the present-tense stem of imperfective verbs and describes an action simultaneous with the main verb. Both actions must share the same subject."
            }
          },
          {
            "type": "table",
            "title": "Приклади утворення",
            "rows": [
              [
                "iść",
                "idąc",
                "ідучи"
              ],
              [
                "czytać",
                "czytając",
                "читаючи"
              ],
              [
                "pisać",
                "pisząc",
                "пишучи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Idąc do pracy, spotkałem kolegę.",
                "Ідучи на роботу, я зустрів колегу."
              ],
              [
                "Pisząc e-mail, słuchała muzyki.",
                "Пишучи електронний лист, вона слухала музику."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-participle",
        "title": "Imiesłów przymiotnikowy i strona pasywna — B1",
        "titleEn": "Passive Participle & Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник утворюється переважно суфіксами -ny/-ony/-ty від основи доконаного дієслова й узгоджується з іменником у роді, числі та відмінку. У пасивних конструкціях уживається з дієсловами być (стан) або zostać (дія, подія).",
            "en": {
              "text": "The passive participle is formed mainly with the suffixes -ny/-ony/-ty from the perfective stem and agrees with the noun in gender, number and case. In passive constructions it is used with być (a state) or zostać (an event)."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → дієприкметник",
            "rows": [
              [
                "napisać",
                "napisany",
                "написаний"
              ],
              [
                "zrobić",
                "zrobiony",
                "зроблений"
              ],
              [
                "otworzyć",
                "otwarty",
                "відкритий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "List został napisany przez studenta.",
                "Лист був написаний студентом."
              ],
              [
                "Drzwi są otwarte od rana.",
                "Двері відчинені з самого ранку."
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
        "title": "Dopełniacz (kogo? czego?) — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (dopełniacz) відповідає на питання \"кого? чого?\". Уживається після заперечення, після числівників 5+, після багатьох прийменників і для вираження належності.",
            "en": {
              "text": "The genitive case answers \"of whom? of what?\". It is used after negation, after numerals 5+, after many prepositions, and to express possession."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Dopełniacz",
            "rows": [
              [
                "kot (кіт)",
                "kota",
                "brak kota (немає кота)"
              ],
              [
                "książka (книга)",
                "książki",
                "nie mam książki (у мене немає книги)"
              ],
              [
                "dziecko (дитина)",
                "dziecka",
                "dom dziecka (дитячий будинок)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nie mam czasu.",
                "У мене немає часу."
              ],
              [
                "To jest samochód mojego brata.",
                "Це машина мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Biernik (kogo? co?) — A1",
        "titleEn": "Accusative Case — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (biernik) відповідає на питання \"кого? що?\" і позначає прямий об'єкт дії. У чоловічому неживому та середньому роді форма збігається з називним, у жіночому — закінчення -ę.",
            "en": {
              "text": "The accusative case answers \"whom? what?\" and marks the direct object. For masculine inanimate and neuter nouns it matches the nominative; feminine nouns take the ending -ę."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Biernik",
            "rows": [
              [
                "pies (пес, жив.)",
                "psa",
                "Widzę psa. (Я бачу пса.)"
              ],
              [
                "stół (стіл, нежив.)",
                "stół",
                "Widzę stół. (Я бачу стіл.)"
              ],
              [
                "kawa (кава)",
                "kawę",
                "Piję kawę. (Я п'ю каву.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Czytam książkę.",
                "Я читаю книгу."
              ],
              [
                "Lubię ten film.",
                "Мені подобається цей фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Celownik (komu? czemu?) — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (celownik) відповідає на питання \"кому? чому?\" і позначає непрямий об'єкт — того, кому щось дають, кажуть або допомагають.",
            "en": {
              "text": "The dative case answers \"to whom? to what?\" and marks the indirect object — the recipient of something given, said, or helped."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Celownik",
            "rows": [
              [
                "matka (мама)",
                "matce",
                "Daję prezent matce. (Я даю подарунок мамі.)"
              ],
              [
                "brat (брат)",
                "bratu",
                "Pomagam bratu. (Я допомагаю братові.)"
              ],
              [
                "dziecko (дитина)",
                "dziecku",
                "Czytam dziecku. (Я читаю дитині.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Powiedziałem jej prawdę.",
                "Я сказав їй правду."
              ],
              [
                "To jest trudne dziecku.",
                "Це важко для дитини."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Narzędnik (kim? czym?) — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (narzędnik) відповідає на питання \"ким? чим?\". Позначає знаряддя дії, супровід (з прийменником z) та іменну частину присудка після być.",
            "en": {
              "text": "The instrumental case answers \"by whom? by what?\". It marks the instrument of an action, accompaniment (with the preposition z), and the predicate noun after być."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Narzędnik",
            "rows": [
              [
                "nóż (ніж)",
                "nożem",
                "Kroję nożem. (Я ріжу ножем.)"
              ],
              [
                "pióro (перо)",
                "piórem",
                "Piszę piórem. (Я пишу пером.)"
              ],
              [
                "ona (вона)",
                "nauczycielką",
                "Jest nauczycielką. (Вона вчителька.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jedziemy autobusem.",
                "Ми їдемо автобусом."
              ],
              [
                "Idę na spacer z psem.",
                "Я йду на прогулянку з собакою."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Miejscownik (o kim? o czym?) — A2",
        "titleEn": "Locative Case — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (miejscownik) відповідає на питання \"про кого? про що? на/в кому/чому?\" і вживається тільки з прийменниками (w, na, o, przy, po).",
            "en": {
              "text": "The locative case answers \"about whom/what? in/on whom/what?\" and is only ever used with prepositions (w, na, o, przy, po)."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Miejscownik",
            "rows": [
              [
                "dom (дім)",
                "domu",
                "w domu (вдома)"
              ],
              [
                "szkoła (школа)",
                "szkole",
                "w szkole (в школі)"
              ],
              [
                "miasto (місто)",
                "mieście",
                "w mieście (в місті)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mieszkam w Warszawie.",
                "Я живу у Варшаві."
              ],
              [
                "Rozmawiamy o pracy.",
                "Ми розмовляємо про роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-case",
        "title": "Wołacz — B1",
        "titleEn": "Vocative Case — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок (wołacz) використовується, коли звертаються до когось напряму — переважно в іменах, титулах та емоційних зверненнях. У розмовній мові часто збігається з називним.",
            "en": {
              "text": "The vocative case is used when addressing someone directly — mainly with names, titles, and emotional address. In casual speech it often matches the nominative."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Wołacz",
            "rows": [
              [
                "Anna",
                "Anno!",
                "Анно!"
              ],
              [
                "Marek",
                "Marku!",
                "Марку!"
              ],
              [
                "Boże (Bóg)",
                "Boże!",
                "Боже!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kasiu, chodź tutaj!",
                "Касю, йди сюди!"
              ],
              [
                "Mamo, gdzie jesteś?",
                "Мамо, де ти?"
              ]
            ]
          }
        ]
      },
      {
        "id": "animacy-masculine",
        "title": "Rodzaj męskoosobowy i męskorzeczowy — B1",
        "titleEn": "Masculine Animacy Distinction — B1",
        "emoji": "🧑",
        "sections": [
          {
            "type": "intro",
            "text": "Чоловічий рід поділяється на три підтипи: особовий (живі люди), тваринний (тварини) і речовий (неживі предмети). У знахідному відмінку особовий і тваринний підтип збігаються з родовим, а речовий — із називним.",
            "en": {
              "text": "The masculine gender splits into three sub-types: personal (humans), animal, and inanimate. In the accusative, the personal and animal sub-types match the genitive, while the inanimate sub-type matches the nominative."
            }
          },
          {
            "type": "table",
            "title": "Підтипи чоловічого роду",
            "rows": [
              [
                "особовий",
                "Widzę studenta.",
                "студент → студента (як родовий)"
              ],
              [
                "тваринний",
                "Widzę psa.",
                "пес → psa (як родовий)"
              ],
              [
                "речовий",
                "Widzę stół.",
                "стіл → stół (як називний)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Znam tego nauczyciela.",
                "Я знаю цього вчителя."
              ],
              [
                "Kupiłem nowy telefon.",
                "Я купив новий телефон."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-feminine",
        "title": "Odmiana rzeczowników żeńskich — A2",
        "titleEn": "Feminine Noun Declension — A2",
        "emoji": "👩",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість іменників жіночого роду закінчуються на -a та відмінюються за єдиним зразком у всіх семи відмінках.",
            "en": {
              "text": "Most feminine nouns end in -a and follow a single declension pattern across all seven cases."
            }
          },
          {
            "type": "table",
            "title": "\"kobieta\" (жінка) за відмінками",
            "rows": [
              [
                "Nominativ",
                "kobieta",
                "хто? що?"
              ],
              [
                "Dopełniacz",
                "kobiety",
                "кого? чого?"
              ],
              [
                "Celownik",
                "kobiecie",
                "кому? чому?"
              ],
              [
                "Biernik",
                "kobietę",
                "кого? що?"
              ],
              [
                "Narzędnik",
                "kobietą",
                "ким? чим?"
              ],
              [
                "Miejscownik",
                "kobiecie",
                "о кому? о чому?"
              ],
              [
                "Wołacz",
                "kobieto!",
                "кличний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ta kobieta jest lekarką.",
                "Ця жінка лікарка."
              ],
              [
                "Rozmawiam z kobietą.",
                "Я розмовляю з жінкою."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-neuter",
        "title": "Odmiana rzeczowników neutralnych — A2",
        "titleEn": "Neuter Noun Declension — A2",
        "emoji": "🧒",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники середнього роду найчастіше закінчуються на -o, -e або -ę. Їхній знахідний відмінок завжди збігається з називним.",
            "en": {
              "text": "Neuter nouns most often end in -o, -e, or -ę. Their accusative form always matches the nominative."
            }
          },
          {
            "type": "table",
            "title": "\"dziecko\" (дитина) за відмінками",
            "rows": [
              [
                "Nominativ",
                "dziecko",
                "хто? що?"
              ],
              [
                "Dopełniacz",
                "dziecka",
                "кого? чого?"
              ],
              [
                "Celownik",
                "dziecku",
                "кому? чому?"
              ],
              [
                "Biernik",
                "dziecko",
                "кого? що?"
              ],
              [
                "Narzędnik",
                "dzieckiem",
                "ким? чим?"
              ],
              [
                "Miejscownik",
                "dziecku",
                "о кому? о чому?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To dziecko jest bardzo miłe.",
                "Ця дитина дуже приємна."
              ],
              [
                "Opiekuję się dzieckiem.",
                "Я піклуюся про дитину."
              ]
            ]
          }
        ]
      },
      {
        "id": "declension-masculine",
        "title": "Odmiana rzeczowników męskich — A2",
        "titleEn": "Masculine Noun Declension — A2",
        "emoji": "🧑‍🦱",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники чоловічого роду найчастіше не мають закінчення в називному однини і приймають закінчення -a/-u в родовому, залежно від того, чи іменник особовий/тваринний, чи речовий.",
            "en": {
              "text": "Masculine nouns usually have no ending in the nominative singular and take -a/-u in the genitive, depending on whether the noun is personal/animal or inanimate."
            }
          },
          {
            "type": "table",
            "title": "\"student\" (студент) за відмінками",
            "rows": [
              [
                "Nominativ",
                "student",
                "хто? що?"
              ],
              [
                "Dopełniacz",
                "studenta",
                "кого? чого?"
              ],
              [
                "Celownik",
                "studentowi",
                "кому? чому?"
              ],
              [
                "Biernik",
                "studenta",
                "кого? що?"
              ],
              [
                "Narzędnik",
                "studentem",
                "ким? чим?"
              ],
              [
                "Miejscownik",
                "studencie",
                "о кому? о чому?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ten student dobrze się uczy.",
                "Цей студент добре навчається."
              ],
              [
                "Rozmawiam ze studentem.",
                "Я розмовляю зі студентом."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-plural-endings",
        "title": "Dopełniacz liczby mnogiej — B1",
        "titleEn": "Genitive Plural Endings — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок множини — одна з найскладніших форм: у чоловічому роді зазвичай -ów, у жіночому й середньому — нульове закінчення (з можливим чергуванням голосного), у деяких словах — -i/-y.",
            "en": {
              "text": "The genitive plural is one of the trickiest forms: masculine nouns usually take -ów, feminine and neuter take a zero ending (with possible vowel alternation), and some words take -i/-y."
            }
          },
          {
            "type": "table",
            "title": "Приклади родового множини",
            "rows": [
              [
                "stół (стіл)",
                "stołów",
                "багато столів"
              ],
              [
                "książka (книга)",
                "książek",
                "багато книг"
              ],
              [
                "okno (вікно)",
                "okien",
                "багато вікон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam pięć książek.",
                "У мене п'ять книг."
              ],
              [
                "W pokoju jest dużo okien.",
                "У кімнаті багато вікон."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-declension",
        "title": "Odmiana przymiotników — A2",
        "titleEn": "Adjective Declension — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники відмінюються за родом, числом і відмінком, узгоджуючись з іменником, який вони описують.",
            "en": {
              "text": "Adjectives are declined for gender, number, and case, agreeing with the noun they describe."
            }
          },
          {
            "type": "table",
            "title": "\"duży\" (великий) за родами в називному",
            "rows": [
              [
                "чоловічий",
                "duży dom",
                "великий будинок"
              ],
              [
                "жіночий",
                "duża szafa",
                "велика шафа"
              ],
              [
                "середній",
                "duże okno",
                "велике вікно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mieszkam w dużym domu.",
                "Я живу у великому будинку."
              ],
              [
                "To jest ładna sukienka.",
                "Це гарна сукня."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Zgoda przymiotnika z rzeczownikiem — A1",
        "titleEn": "Adjective-Noun Agreement — A1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником (у нейтральному порядку слів) і узгоджується з ним у роді, числі та відмінку.",
            "en": {
              "text": "An adjective normally precedes the noun (in neutral word order) and agrees with it in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "Узгодження за родом і числом",
            "rows": [
              [
                "mały kot",
                "маленький кіт",
                "чол. одн."
              ],
              [
                "mała kotka",
                "маленька кішка",
                "жін. одн."
              ],
              [
                "małe koty",
                "маленькі коти",
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
                "Mam małego psa.",
                "У мене маленький пес."
              ],
              [
                "To są ciekawe książki.",
                "Це цікаві книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Stopniowanie przymiotników — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь прикметника переважно утворюється суфіксом -szy/-ejszy, найвищий — додаванням префікса naj- до вищого ступеня.",
            "en": {
              "text": "The comparative of an adjective is mainly formed with the suffix -szy/-ejszy, and the superlative by adding the prefix naj- to the comparative."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "duży",
                "większy",
                "największy"
              ],
              [
                "ładny",
                "ładniejszy",
                "najładniejszy"
              ],
              [
                "ciekawy",
                "ciekawszy",
                "najciekawszy"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ten dom jest większy niż mój.",
                "Цей будинок більший, ніж мій."
              ],
              [
                "To jest najładniejsze miasto w Polsce.",
                "Це найкрасивіше місто в Польщі."
              ]
            ]
          }
        ]
      },
      {
        "id": "irregular-comparatives",
        "title": "Nieregularne stopniowanie — B1",
        "titleEn": "Irregular Comparatives — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже поширених прикметників мають нерегулярні форми ступенів порівняння, які потрібно просто запам'ятати.",
            "en": {
              "text": "A handful of very common adjectives have irregular comparative/superlative forms that simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "dobry (добрий)",
                "lepszy",
                "najlepszy"
              ],
              [
                "zły (поганий)",
                "gorszy",
                "najgorszy"
              ],
              [
                "mały (малий)",
                "mniejszy",
                "najmniejszy"
              ],
              [
                "duży (великий)",
                "większy",
                "największy"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To jest lepszy pomysł.",
                "Це краща ідея."
              ],
              [
                "On jest najlepszym uczniem w klasie.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Tworzenie przysłówków — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників утворюється від прикметників за допомогою суфіксів -o або -e, замінюючи родове закінчення прикметника.",
            "en": {
              "text": "Most adverbs are formed from adjectives with the suffix -o or -e, replacing the adjective's gender ending."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "szybki (швидкий)",
                "szybko",
                "швидко"
              ],
              [
                "ładny (гарний)",
                "ładnie",
                "гарно"
              ],
              [
                "dobry (добрий)",
                "dobrze",
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
                "On mówi szybko.",
                "Він говорить швидко."
              ],
              [
                "Ona śpiewa bardzo dobrze.",
                "Вона дуже добре співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-adverbs",
        "title": "Stopniowanie przysłówków — B1",
        "titleEn": "Comparative Adverbs — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники стоупенюються за тим самим принципом, що й прикметники: вищий ступінь через -ej/-iej, найвищий — через naj-.",
            "en": {
              "text": "Adverbs are compared on the same principle as adjectives: the comparative with -ej/-iej, the superlative with naj-."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "szybko",
                "szybciej",
                "najszybciej"
              ],
              [
                "dobrze",
                "lepiej",
                "najlepiej"
              ],
              [
                "źle",
                "gorzej",
                "najgorzej"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "On biega szybciej niż ja.",
                "Він бігає швидше, ніж я."
              ],
              [
                "Ona śpiewa najlepiej z całej klasy.",
                "Вона співає найкраще з усього класу."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronouns-declension",
        "title": "Odmiana zaimków osobowych — A2",
        "titleEn": "Personal Pronoun Declension — A2",
        "emoji": "🙋‍♂️",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за відмінками, як іменники, й часто мають короткі (клітики) та повні форми.",
            "en": {
              "text": "Personal pronouns decline by case, like nouns, and often have both short (clitic) and full forms."
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
                "Dopełniacz",
                "mnie",
                "мене"
              ],
              [
                "Celownik",
                "mi / mnie",
                "мені"
              ],
              [
                "Biernik",
                "mnie / mię",
                "мене"
              ],
              [
                "Narzędnik",
                "mną",
                "мною"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "On mnie nie słyszy.",
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
        "id": "possessive-pronouns",
        "title": "Zaimki dzierżawcze — A1",
        "titleEn": "Possessive Pronouns — A1",
        "emoji": "👜",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники вказують на належність і узгоджуються з іменником, який описують, у роді, числі та відмінку — так само як прикметники.",
            "en": {
              "text": "Possessive pronouns express ownership and agree with the noun they describe in gender, number, and case — just like adjectives."
            }
          },
          {
            "type": "table",
            "title": "Присвійні займенники (чол. одн.)",
            "rows": [
              [
                "mój",
                "мій",
                "mój dom"
              ],
              [
                "twój",
                "твій",
                "twój pies"
              ],
              [
                "nasz",
                "наш",
                "nasz samochód"
              ],
              [
                "ich",
                "їхній",
                "ich dom"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "To jest moja siostra.",
                "Це моя сестра."
              ],
              [
                "Gdzie są twoje klucze?",
                "Де твої ключі?"
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Zaimki wskazujące — A1",
        "titleEn": "Demonstrative Pronouns — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівний займенник \"ten/ta/to\" узгоджується з іменником у роді й числі та відмінюється за відмінками так само, як прикметник.",
            "en": {
              "text": "The demonstrative pronoun \"ten/ta/to\" agrees with the noun in gender and number, and declines by case just like an adjective."
            }
          },
          {
            "type": "table",
            "title": "\"ten/ta/to\" за родами",
            "rows": [
              [
                "ten dom",
                "цей будинок",
                "чол."
              ],
              [
                "ta kobieta",
                "ця жінка",
                "жін."
              ],
              [
                "to dziecko",
                "ця дитина",
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
                "Ten samochód jest nowy.",
                "Ця машина нова."
              ],
              [
                "Nie lubię tamtej piosenki.",
                "Мені не подобається та пісня."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Zaimki pytające — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники \"kto\" (хто) і \"co\" (що) відмінюються за відмінками так само, як іменники, на які вони вказують.",
            "en": {
              "text": "The interrogative pronouns \"kto\" (who) and \"co\" (what) decline by case, just like the nouns they stand in for."
            }
          },
          {
            "type": "table",
            "title": "\"kto\" за відмінками",
            "rows": [
              [
                "Nominativ",
                "kto?",
                "хто?"
              ],
              [
                "Dopełniacz",
                "kogo?",
                "кого?"
              ],
              [
                "Celownik",
                "komu?",
                "кому?"
              ],
              [
                "Narzędnik",
                "kim?",
                "ким?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kto to jest?",
                "Хто це?"
              ],
              [
                "Co robisz?",
                "Що ти робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-ktory",
        "title": "Zaimek względny \"który\" — B1",
        "titleEn": "Relative Pronoun Który — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"który\" (який) уводить підрядні означальні речення й узгоджується з іменником, до якого відноситься, у роді та числі, а відмінок залежить від його ролі в підрядному реченні.",
            "en": {
              "text": "The pronoun \"który\" (which/who) introduces relative clauses and agrees with its antecedent in gender and number, while its case depends on its role within the clause."
            }
          },
          {
            "type": "table",
            "title": "Форми \"który\" за родом",
            "rows": [
              [
                "chłopiec, który...",
                "хлопець, який...",
                "чол."
              ],
              [
                "kobieta, która...",
                "жінка, яка...",
                "жін."
              ],
              [
                "dziecko, które...",
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
                "To jest książka, którą czytam.",
                "Це книга, яку я читаю."
              ],
              [
                "Znam mężczyznę, który tam stoi.",
                "Я знаю чоловіка, який там стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-siebie",
        "title": "Zaimek zwrotny \"się/siebie\" — A2",
        "titleEn": "Reflexive Pronoun Się/Siebie — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"się\" (коротка форма) чи \"siebie\" (повна форма) позначає, що дія спрямована на саме того, хто її виконує. Не змінюється за особами.",
            "en": {
              "text": "The reflexive pronoun \"się\" (short form) or \"siebie\" (full form) shows that the action is directed back at the doer. It does not change by person."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "myć się",
                "Myję się.",
                "Я митися/Я мию себе."
              ],
              [
                "widzieć siebie",
                "Widzę siebie w zwierciadle.",
                "Я бачу себе в зеркалі."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "On się ubiera.",
                "Він одягається."
              ],
              [
                "Myślę tylko o sobie.",
                "Я думаю тільки про себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Zaimki nieokreślone — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники утворюються додаванням частки -ś (хтось, щось, якийсь) до питальних займенників і відмінюються так само, як вони.",
            "en": {
              "text": "Indefinite pronouns are formed by adding the particle -ś (someone, something, some) to interrogative pronouns and decline the same way."
            }
          },
          {
            "type": "table",
            "title": "Питальний → неозначений",
            "rows": [
              [
                "kto → ktoś",
                "хто → хтось"
              ],
              [
                "co → coś",
                "що → щось"
              ],
              [
                "jaki → jakiś",
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
                "Ktoś dzwoni do drzwi.",
                "Хтось дзвонить у двері."
              ],
              [
                "Czy masz jakieś pytania?",
                "У тебе є якісь питання?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Liczebniki główne 1–10 — A1",
        "titleEn": "Cardinal Numbers 1-10 — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник \"jeden\" (один) узгоджується з іменником як прикметник. Числівники 2-4 вимагають форми, подібної до називного множини; 5 і більше — родового відмінка множини (про це в наступному правилі).",
            "en": {
              "text": "\"Jeden\" (one) agrees with the noun like an adjective. Numbers 2-4 take a form resembling the nominative plural; 5 and up take the genitive plural (covered in the next rule)."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "jeden / jedna / jedno",
                "один/одна/одне",
                "1"
              ],
              [
                "dwa / dwie",
                "два/дві",
                "2"
              ],
              [
                "pięć",
                "п'ять",
                "5"
              ],
              [
                "dziesięć",
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
                "Mam jednego brata.",
                "У мене один брат."
              ],
              [
                "Widzę trzy koty.",
                "Я бачу три коти."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-higher",
        "title": "Liczebniki główne od 11 — A2",
        "titleEn": "Cardinal Numbers 11+ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники від 11 до 19 утворюються додаванням -naście до одиниці, десятки — за спеціальними формами (dwadzieścia, trzydzieści...).",
            "en": {
              "text": "Numbers 11-19 are formed by adding -naście to the unit digit; the tens have their own special forms (dwadzieścia, trzydzieści...)."
            }
          },
          {
            "type": "table",
            "title": "11, 20, 100",
            "rows": [
              [
                "jedenaście",
                "одинадцять",
                "11"
              ],
              [
                "dwadzieścia",
                "двадцять",
                "20"
              ],
              [
                "sto",
                "сто",
                "100"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam dwadzieścia lat.",
                "Мені двадцять років."
              ],
              [
                "To kosztuje sto złotych.",
                "Це коштує сто злотих."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-case-government",
        "title": "Liczebnik a przypadek rzeczownika — B1",
        "titleEn": "Numerals & Case Government — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 5 і вище (а також 'кілька', 'багато') вимагають від іменника форми родового відмінка множини. Числівники 2-4 — форми, схожої на називний множини.",
            "en": {
              "text": "Numerals 5 and above (as well as 'kilka'/several, 'wiele'/many) require the noun in the genitive plural. Numerals 2-4 require a nominative-plural-like form."
            }
          },
          {
            "type": "table",
            "title": "Іменник після числівника",
            "rows": [
              [
                "2-4",
                "dwa koty",
                "два коти (форма на зразок мн.)"
              ],
              [
                "5+",
                "pięć kotów",
                "п'ять котів (родовий мн.)"
              ],
              [
                "wiele / kilka",
                "wiele kotów",
                "багато/кілька котів (родовий мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam pięciu braci.",
                "У мене п'ять братів."
              ],
              [
                "W parku jest wiele drzew.",
                "У парку багато дерев."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-collective-virile",
        "title": "Liczba mnoga męskoosobowa a liczebnik — B1",
        "titleEn": "Virile Plural with Numerals — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "З числівниками 2-4, коли мова йде про осіб чоловічого роду (męskoosobowy), уживаються особливі форми числівника: dwaj/dwóch, trzej/trzech, czterej/czterech — на відміну від звичайних dwa/trzy/cztery для інших іменників.",
            "en": {
              "text": "With numerals 2-4 referring to masculine-personal nouns, special numeral forms are used — dwaj/dwóch, trzej/trzech, czterej/czterech — unlike the plain dwa/trzy/cztery used for other nouns."
            }
          },
          {
            "type": "table",
            "title": "Чоловічо-особові форми",
            "rows": [
              [
                "dwaj studenci / dwóch studentów",
                "два студенти",
                "чол.-особ."
              ],
              [
                "trzy koty",
                "три коти",
                "не чол.-особ."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dwaj chłopcy grają w piłkę.",
                "Два хлопці грають у футбол."
              ],
              [
                "Widziałem dwóch mężczyzn.",
                "Я бачив двох чоловіків."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Liczebniki porządkowe — A2",
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
                "pierwszy",
                "перший",
                "1-й"
              ],
              [
                "drugi",
                "другий",
                "2-й"
              ],
              [
                "trzeci",
                "третій",
                "3-й"
              ],
              [
                "dziesiąty",
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
                "To jest mój pierwszy dzień w pracy.",
                "Це мій перший день на роботі."
              ],
              [
                "Mieszkam na drugim piętrze.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-genitive",
        "title": "Przyimki z dopełniaczem — A2",
        "titleEn": "Prepositions with Genitive — A2",
        "emoji": "📎",
        "sections": [
          {
            "type": "intro",
            "text": "Багато поширених прийменників завжди керують родовим відмінком: bez (без), dla (для), do (до), od (від), z (з, зі значенням 'звідки').",
            "en": {
              "text": "Many common prepositions always govern the genitive case: bez (without), dla (for), do (to), od (from), z (from, in the 'out of' sense)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з родовим",
            "rows": [
              [
                "bez",
                "bez cukru",
                "без цукру"
              ],
              [
                "dla",
                "dla ciebie",
                "для тебе"
              ],
              [
                "do",
                "do szkoły",
                "до школи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Piję kawę bez mleka.",
                "Я п'ю каву без молока."
              ],
              [
                "Idę do pracy.",
                "Я йду на роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-accusative",
        "title": "Przyimki z biernikiem — A2",
        "titleEn": "Prepositions with Accusative — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники przez (через), na (на, з напрямком руху), o (о, час) та per (за допомогою) керують знахідним відмінком.",
            "en": {
              "text": "The prepositions przez (through), na (onto, with direction), o (at, for time) and per (via) govern the accusative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники зі знахідним",
            "rows": [
              [
                "przez",
                "przez most",
                "через мост"
              ],
              [
                "na",
                "idę na koncert",
                "йду на концерт"
              ],
              [
                "o",
                "o siódmej",
                "о сьомій"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jedziemy na wakacje.",
                "Ми їдемо у відпустку."
              ],
              [
                "Spotkajmy się o ósmej.",
                "Зустрінемося о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-instrumental",
        "title": "Przyimki z narzędnikiem — A2",
        "titleEn": "Prepositions with Instrumental — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники z (з, у значенні 'разом з'), nad (над), pod (під, без руху), między (між) і przed (перед) керують орудним відмінком.",
            "en": {
              "text": "The prepositions z (with), nad (above), pod (under, no motion), między (between) and przed (in front of) govern the instrumental case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з орудним",
            "rows": [
              [
                "z",
                "z przyjacielem",
                "з другом"
              ],
              [
                "nad",
                "nad morzem",
                "над морем"
              ],
              [
                "pod",
                "pod stołem",
                "під столом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Siedzę przed telewizorem.",
                "Я сиджу перед телевізором."
              ],
              [
                "Kot śpi pod łóżkiem.",
                "Кіт спить під ліжком."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-locative",
        "title": "Przyimki z miejscownikiem — A2",
        "titleEn": "Prepositions with Locative — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники w (в, без руху), na (на, без руху), o (про) і przy (біля) керують місцевим відмінком.",
            "en": {
              "text": "The prepositions w (in, no motion), na (on, no motion), o (about) and przy (near) govern the locative case."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з місцевим",
            "rows": [
              [
                "w",
                "w domu",
                "вдома"
              ],
              [
                "na",
                "na stole",
                "на столі"
              ],
              [
                "o",
                "o pracy",
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
                "Pracuję w banku.",
                "Я працюю в банку."
              ],
              [
                "Książka leży na stole.",
                "Книга лежить на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-dative",
        "title": "Przyimki z celownikiem — B1",
        "titleEn": "Prepositions with Dative — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший прийменник із давальним відмінком — dzięki (завдяки). Також вживаються ku (до, рідше) і przeciw(ko) (проти).",
            "en": {
              "text": "The most common preposition with the dative is dzięki (thanks to). Also used are ku (toward, rare) and przeciw(ko) (against)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники з давальним",
            "rows": [
              [
                "dzięki",
                "dzięki tobie",
                "завдяки тобі"
              ],
              [
                "przeciwko",
                "przeciwko planowi",
                "проти плану"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dzięki niemu zdałem egzamin.",
                "Завдяки йому я здав екзамен."
              ],
              [
                "On jest przeciwko tej decyzji.",
                "Він проти цього рішення."
              ]
            ]
          }
        ]
      },
      {
        "id": "two-way-prepositions",
        "title": "Przyimki \"na/w\" z dwoma przypadkami — B1",
        "titleEn": "Two-Case Prepositions Na/W — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники na і w керують знахідним відмінком, коли позначають рух (куди?), і місцевим, коли позначають перебування без руху (де?).",
            "en": {
              "text": "The prepositions na and w govern the accusative when expressing motion (where to?) and the locative when expressing a static location (where?)."
            }
          },
          {
            "type": "table",
            "title": "Рух vs перебування",
            "rows": [
              [
                "Idę na uniwersytet.",
                "Я йду в університет.",
                "рух — знахідний"
              ],
              [
                "Jestem na uniwersytecie.",
                "Я в університеті.",
                "перебування — місцевий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wchodzę w pokój.",
                "Я заходжу в кімнату."
              ],
              [
                "Siedzę w pokoju.",
                "Я сиджу в кімнаті."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Przeczenie \"nie\" i dopełniacz — A2",
        "titleEn": "Negation with Nie & Genitive — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"nie\" ставиться безпосередньо перед дієсловом. Після заперечення прямий об'єкт у знахідному відмінку зазвичай змінюється на родовий.",
            "en": {
              "text": "The particle \"nie\" is placed directly before the verb. After negation, a direct object in the accusative usually shifts to the genitive."
            }
          },
          {
            "type": "table",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "Mam czas. (знах.)",
                "Nie mam czasu. (родов.)",
                "У мене немає часу."
              ],
              [
                "Widzę go. (знах.)",
                "Nie widzę go. (родов.)",
                "Я не бачу його."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nie znam tej piosenki.",
                "Я не знаю цієї пісні."
              ],
              [
                "On nie pije kawy.",
                "Він не п'є каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Szyk wyrazów w zdaniu — A2",
        "titleEn": "Word Order — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Польський порядок слів дуже вільний, оскільки відмінки показують граматичну роль слова незалежно від позиції. Зміна порядку слів зазвичай змінює наголос/фокус речення, а не його зміст.",
            "en": {
              "text": "Polish word order is very flexible because case endings mark a word's grammatical role regardless of position. Changing word order usually shifts emphasis/focus, not meaning."
            }
          },
          {
            "type": "table",
            "title": "Той самий зміст, різний фокус",
            "rows": [
              [
                "Jan kupił książkę.",
                "Ян купив книгу.",
                "нейтральний"
              ],
              [
                "Książkę kupił Jan.",
                "Книгу купив (саме) Ян.",
                "фокус на 'Ян'"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kawę piję codziennie.",
                "Каву я п'ю щодня (акцент на 'каву')."
              ],
              [
                "Codziennie piję kawę.",
                "Щодня я п'ю каву (нейтрально)."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions-yes-no",
        "title": "Pytania z \"czy\" — A1",
        "titleEn": "Yes/No Questions with Czy — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Питання, що очікують відповіді \"так\" чи \"ні\", часто починаються з частки \"czy\", яка сама не перекладається, а лише сигналізує питання.",
            "en": {
              "text": "Yes/no questions often begin with the particle \"czy\", which has no direct translation and simply signals a question."
            }
          },
          {
            "type": "table",
            "title": "Твердження → питання",
            "rows": [
              [
                "Masz czas.",
                "Czy masz czas?",
                "У тебе є час? / Чи маєш ти час?"
              ],
              [
                "Lubisz kawę.",
                "Czy lubisz kawę?",
                "Тобі подобається кава?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Czy jesteś gotowy?",
                "Ти готовий?"
              ],
              [
                "Czy to jest prawda?",
                "Це правда?"
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Zaimki i przysłówki pytające — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "gdzie?",
                "де?",
                "Gdzie jesteś?"
              ],
              [
                "kiedy?",
                "коли?",
                "Kiedy wracasz?"
              ],
              [
                "dlaczego?",
                "чому?",
                "Dlaczego płaczesz?"
              ],
              [
                "jak?",
                "як?",
                "Jak się masz?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gdzie jest stacja?",
                "Де станція?"
              ],
              [
                "Dlaczego się spóźniłeś?",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Spójniki współrzędne — A1",
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
                "Ja i ty."
              ],
              [
                "ale",
                "але",
                "Chcę, ale nie mogę."
              ],
              [
                "albo",
                "або",
                "Kawa albo herbata?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lubię herbatę i kawę.",
                "Мені подобається чай і кава."
              ],
              [
                "Chciałbym pójść, ale nie mam czasu.",
                "Я хотів би піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Spójniki podrzędne — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники підрядності",
            "rows": [
              [
                "że",
                "що",
                "Wiem, że przyjdziesz."
              ],
              [
                "ponieważ",
                "оскільки/бо",
                "Nie przyszedłem, ponieważ byłem chory."
              ],
              [
                "jeśli / gdyby",
                "якщо / якби",
                "Jeśli masz czas, zadzwoń."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Myślę, że masz rację.",
                "Я думаю, що ти маєш рацію."
              ],
              [
                "Zostanę, jeśli będzie trzeba.",
                "Я залишуся, якщо буде потрібно."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clauses",
        "title": "Zdania względne — B1",
        "titleEn": "Relative Clauses — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні означальні речення вводяться займенником \"który\" (який), що узгоджується з означуваним іменником у роді й числі, а відмінок визначається його роллю в підрядному реченні.",
            "en": {
              "text": "Relative clauses are introduced by \"który\" (which/who), agreeing with the antecedent in gender and number, while its case is determined by its role in the clause."
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
                "Dom, w którym mieszkam, jest stary.",
                "Будинок, у якому я живу, старий."
              ],
              [
                "To jest osoba, o której mówiłem.",
                "Це людина, про яку я говорив."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Czasowniki zwrotne — A2",
        "titleEn": "Reflexive Verbs — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів уживаються з часткою \"się\" й мають відмінне значення від дієслова без неї. Się зазвичай стоїть одразу після дієслова, але може переміщуватися у фразі.",
            "en": {
              "text": "Many verbs take the particle \"się\" and have a different meaning from the plain verb. Się usually follows the verb directly, but can shift within the clause."
            }
          },
          {
            "type": "table",
            "title": "Без się ↔ зі się",
            "rows": [
              [
                "myć (мити)",
                "myć się (митися)",
                "кого? себе"
              ],
              [
                "uczyć (вчити)",
                "uczyć się (вчитися)",
                "себе"
              ],
              [
                "nazywać (називати)",
                "nazywać się (називатися)",
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
                "Jak się nazywasz?",
                "Як тебе звати?"
              ],
              [
                "Uczę się polskiego.",
                "Я вчу польську."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Konstrukcje nieosobowe \"trzeba/można/warto\" — A2",
        "titleEn": "Impersonal Modal Constructions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові вирази trzeba (треба), można (можна), warto (варто) та nie wolno (не можна) завжди вживаються з інфінітивом і не змінюються за особами.",
            "en": {
              "text": "The impersonal expressions trzeba (must/need), można (may), warto (worth it), and nie wolno (not allowed) always take the infinitive and never change by person."
            }
          },
          {
            "type": "table",
            "title": "Безособові конструкції",
            "rows": [
              [
                "trzeba",
                "Trzeba iść.",
                "Треба йти."
              ],
              [
                "można",
                "Można wejść?",
                "Можна зайти?"
              ],
              [
                "warto",
                "Warto spróbować.",
                "Варто спробувати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Trzeba kupić chleb.",
                "Треба купити хліб."
              ],
              [
                "Nie wolno tu palić.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "virile-nonvirile-agreement",
        "title": "Zgoda rodzajowa w liczbie mnogiej — B1",
        "titleEn": "Virile vs Non-Virile Plural Agreement — B1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "У множині дієслово минулого часу й прикметники мають дві форми: чоловічо-особову (хоча б один чоловік у групі) і нечоловічо-особову (жінки, діти, тварини, предмети).",
            "en": {
              "text": "In the plural, past-tense verbs and adjectives have two agreement forms: masculine-personal (at least one man in the group) and non-masculine-personal (women, children, animals, objects)."
            }
          },
          {
            "type": "table",
            "title": "Чоловічо-особове vs нечоловічо-особове",
            "rows": [
              [
                "Chłopcy byli w parku.",
                "Хлопці були в парку.",
                "чол.-особ."
              ],
              [
                "Dziewczyny były w parku.",
                "Дівчата були в парку.",
                "нечол.-особ."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Studenci pisali egzamin.",
                "Студенти писали екзамен."
              ],
              [
                "Koty spały na kanapie.",
                "Коти спали на дивані."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Zdrobnienia — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксами -ek/-ka/-ko, -ik/-yk тощо і дуже широко вживаються в повсякденному мовленні, не лише для розміру, а й для вираження теплоти.",
            "en": {
              "text": "Diminutives are formed with suffixes like -ek/-ka/-ko, -ik/-yk, and are used extremely widely in everyday speech — not just for size, but to express warmth."
            }
          },
          {
            "type": "table",
            "title": "Звичайне слово → зменшувальне",
            "rows": [
              [
                "kot (кіт)",
                "kotek",
                "котик"
              ],
              [
                "dom (будинок)",
                "domek",
                "будиночок"
              ],
              [
                "mama",
                "mamusia",
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
                "Mam małego kotka.",
                "У мене маленький котик."
              ],
              [
                "Kupiłam synkowi zabawkę.",
                "Я купила синочку іграшку."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Dni tygodnia — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "poniedziałek",
                "понеділок",
                "1"
              ],
              [
                "wtorek",
                "вівторок",
                "2"
              ],
              [
                "środa",
                "середа",
                "3"
              ],
              [
                "niedziela",
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
                "W poniedziałek mam zajęcia.",
                "У понеділок у мене заняття."
              ],
              [
                "Dziś jest środa.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Miesiące i daty — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Назви місяців пишуться з малої букви. У датах день і місяць уживаються в родовому відмінку порядкового числівника та назви місяця.",
            "en": {
              "text": "Month names are lowercase. In dates, both the day and month name appear in the genitive case of the ordinal number and the month name."
            }
          },
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "styczeń",
                "січень",
                "01"
              ],
              [
                "lipiec",
                "липень",
                "07"
              ],
              [
                "grudzień",
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
                "Dziś jest piąty maja.",
                "Сьогодні п'яте травня."
              ],
              [
                "Urodziłem się w grudniu.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Podawanie czasu — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Która jest godzina?\", а відповідь уживає порядковий числівник у жіночому роді, оскільки \"godzina\" (година) — іменник жіночого роду.",
            "en": {
              "text": "To ask the time, Poles say \"Która jest godzina?\", and the answer uses the feminine form of the ordinal, since \"godzina\" (hour) is a feminine noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "Jest pierwsza.",
                "Перша година.",
                "1:00"
              ],
              [
                "Jest wpół do trzeciej.",
                "Половина третьої.",
                "2:30"
              ],
              [
                "Jest piętnasta.",
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
                "Która jest godzina?",
                "Котра година?"
              ],
              [
                "Pociąg odjeżdża o ósmej.",
                "Потяг від'їжджає о восьмій."
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
        "title": "Czasowniki nieregularne — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найважливіших дієслів не відмінюються за звичними зразками і їхні форми потрібно просто вивчити напам'ять.",
            "en": {
              "text": "A handful of the most important verbs don't follow the regular conjugation patterns and simply need to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші нерегулярні дієслова",
            "rows": [
              [
                "iść (йти)",
                "idę, idziesz, idzie",
                "я йду, ти йдеш, він йде"
              ],
              [
                "jechać (їхати)",
                "jedę, jedziesz, jedzie",
                "я їду, ти їдеш, він їде"
              ],
              [
                "chcieć (хотіти)",
                "chcę, chcesz, chce",
                "я хочу, ти хочеш, він хоче"
              ],
              [
                "móc (могти)",
                "mogę, możesz, może",
                "я можу, ти можеш, він може"
              ],
              [
                "wiedzieć (знати)",
                "wiem, wiesz, wie",
                "я знаю, ти знаєш, він знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nie mogę teraz rozmawiać.",
                "Я не можу зараз розмовляти."
              ],
              [
                "Idę do sklepu, chcesz coś?",
                "Я йду в магазин, хочеш щось?"
              ]
            ]
          }
        ]
      },
      {
        "id": "spelling-rules",
        "title": "Zasady ortograficzne: ó/u, rz/ż, ch/h — A2",
        "titleEn": "Spelling Rules — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "У польській мові кілька пар букв позначають однаковий звук (ó=u, rz=ż, ch=h), тому правильне написання часто потрібно просто запам'ятати для кожного слова.",
            "en": {
              "text": "Polish has several letter pairs that represent the same sound (ó=u, rz=ż, ch=h), so correct spelling often just has to be memorized word by word."
            }
          },
          {
            "type": "table",
            "title": "Однакові звуки, різні букви",
            "rows": [
              [
                "ó / u",
                "mówić / dużo",
                "[u] в обох"
              ],
              [
                "rz / ż",
                "rzeka / żona",
                "[ʐ]/[ʒ] в обох"
              ],
              [
                "ch / h",
                "chleb / herbata",
                "[x] в обох"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mówię dużo po polsku.",
                "Я багато говорю польською."
              ],
              [
                "Piję herbatę, a nie chleb.",
                "Я п'ю чай, а не хліб (приклад на ch/h)."
              ]
            ]
          }
        ]
      },
      {
        "id": "fleeting-vowel",
        "title": "Ruchome \"e\" w odmianie — B1",
        "titleEn": "Fleeting Vowel Insertion — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких формах слів з'являється або зникає голосний \"e\" залежно від відмінка — це явище зветься рухомим \"e\" і пов'язане з історичним спрощенням груп приголосних.",
            "en": {
              "text": "In some word forms the vowel \"e\" appears or disappears depending on the case — this is called the fleeting vowel and relates to the historical simplification of consonant clusters."
            }
          },
          {
            "type": "table",
            "title": "Приклади рухомого \"e\"",
            "rows": [
              [
                "pies (пес)",
                "psa (без e)",
                "називний → родовий"
              ],
              [
                "dzień (день)",
                "dnia (без e)",
                "називний → родовий"
              ],
              [
                "okno (вікно)",
                "okien (з e)",
                "називний → родовий мн."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam psa.",
                "У мене є пес."
              ],
              [
                "Do zobaczenia za dzień.",
                "До зустрічі через день."
              ]
            ]
          }
        ]
      }
    ]
  }
];
