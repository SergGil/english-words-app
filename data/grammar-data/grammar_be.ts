// Vymova — data/grammar-data/grammar_be.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Асабовыя займеннікі — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Білоруська, як і українська, походить від давньоруської мови й має дуже схожу систему займенників.",
            "en": {
              "text": "Belarusian, like Ukrainian, descends from Old East Slavic and has a very similar pronoun system."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "я"
              ],
              [
                "ти",
                "ты"
              ],
              [
                "він / вона / воно",
                "ён / яна / яно"
              ],
              [
                "ми",
                "мы"
              ],
              [
                "ви",
                "вы"
              ],
              [
                "вони",
                "яны"
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
        "id": "to-be",
        "title": "Дзеяслоў \"быць\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі зв'язка \"быць\" зазвичай опускається, як в українській, — форма есць збереглася лише в окремих усталених виразах.",
            "en": {
              "text": "In the present tense the copula \"быць\" is usually dropped, like in Ukrainian — the form есць survives only in a handful of set expressions."
            }
          },
          {
            "type": "formula",
            "title": "Прысудак (без злучнiка)",
            "rows": [
              [
                "Я",
                "настаўнік",
                "я вчитель"
              ],
              [
                "Ён",
                "быў настаўнікам",
                "він був учителем (мин.)"
              ],
              [
                "Яна",
                "будзе настаўніцай",
                "вона буде вчителькою (майб.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён урач.",
                "Він лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Byts' (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Адмаўленне \"не\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою не, яка ставиться перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle не, placed before the verb."
            }
          },
          {
            "type": "formula",
            "title": "не + дзеяслоў",
            "rows": [
              [
                "Я ведаю.",
                "Я не ведаю.",
                "Я знаю. → Я не знаю."
              ],
              [
                "Ён прыйшоў.",
                "Ён не прыйшоў.",
                "Він прийшов. → Він не прийшов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я не разумею.",
                "Я не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ne — A1"
      },
      {
        "id": "questions",
        "title": "Пытанні з часткай \"ці\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити часткою ці на початку речення або просто висхідною інтонацією.",
            "en": {
              "text": "Yes/no questions can be formed with the particle ці at the start of the sentence, or simply with rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "Ці + сцвярджэнне?",
            "rows": [
              [
                "Ты стаміўся.",
                "Ці ты стаміўся?",
                "Ти втомився. → Ти втомився?"
              ],
              [
                "Яна прыйдзе.",
                "Яна прыйдзе?",
                "Вона прийде. → Вона прийде?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ці ты галодны?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Tsi — A1"
      },
      {
        "id": "akanne-orthographic-principle",
        "title": "\"Аканне\" — ненаціскне о/е пишеться як а — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української чи російської, білоруська передає ненаголошене \"аканне\" НА ПИСЬМІ: ненаголошений о чи е систематично записується як а — це головна візуальна відмінність білоруського правопису.",
            "en": {
              "text": "Unlike Ukrainian or Russian, Belarusian reflects unstressed \"akanne\" IN SPELLING: an unstressed o or e is systematically written as a — this is the main visual difference of Belarusian orthography."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "вада (порівн. укр. вода)",
                "з наголосом на а, ненаголошений о → а"
              ],
              [
                "язык (порівн. укр. язик, наголос на и)",
                "тут перший склад ненаголошений"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Вада ў рацэ халодная.",
                "Вода в річці холодна."
              ]
            ]
          }
        ],
        "titleEn": "\"Akanne\" — Unstressed O/E Is Written as A — A1"
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
        "id": "present-tense-imperfective",
        "title": "Цяперашні час — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час мають лише недоконані дієслова й утворюється особовими закінченнями, доданими до основи.",
            "en": {
              "text": "Only imperfective verbs have a present tense, formed with personal endings added to the stem."
            }
          },
          {
            "type": "formula",
            "title": "основа + асабовае канчатак",
            "rows": [
              [
                "я",
                "чытаю",
                "я читаю"
              ],
              [
                "ты",
                "чытаеш",
                "ти читаєш"
              ],
              [
                "ён",
                "чытае",
                "він читає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мы чытаем кнігу.",
                "Ми читаємо книгу."
              ],
              [
                "Яны працуюць.",
                "Вони працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense-gender-agreement",
        "title": "Прошлы час (узгодненне з родам) — A1",
        "titleEn": "Past Tense (Gender Agreement) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час узгоджується з родом і числом підмета, а не з особою, і утворюється суфіксом -ў/-ла/-ло/-лі.",
            "en": {
              "text": "The past tense agrees with the gender and number of the subject, not the person, formed with the suffix -ў/-ла/-ло/-лі."
            }
          },
          {
            "type": "formula",
            "title": "основа + л + родовае канчатак",
            "rows": [
              [
                "ён",
                "чытаў",
                "він читав"
              ],
              [
                "яна",
                "чытала",
                "вона читала"
              ],
              [
                "яны",
                "чыталі",
                "вони читали"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён прыйшоў позна.",
                "Він прийшов пізно."
              ],
              [
                "Дзіця гуляла ў двары.",
                "Дитина гралася у дворі."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-imperfective-periphrastic",
        "title": "Будучы час недаконанага трыву (буду + інфінітыў) — A2",
        "titleEn": "Future Imperfective (Budu + Infinitive) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час недоконаного виду утворюється допоміжним дієсловом буду плюс інфінітив головного дієслова.",
            "en": {
              "text": "The imperfective future is formed with the auxiliary буду plus the infinitive of the main verb."
            }
          },
          {
            "type": "formula",
            "title": "буду + інфінітыў",
            "rows": [
              [
                "я",
                "буду чытаць",
                "я буду читати"
              ],
              [
                "мы",
                "будзем чытаць",
                "ми будемо читати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Заўтра я буду працаваць.",
                "Завтра я буду працювати."
              ],
              [
                "Яны будуць чакаць.",
                "Вони будуть чекати."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-perfective-synthetic",
        "title": "Будучы час докананага трыву (простая форма) — A2",
        "titleEn": "Future Perfective (Synthetic Form) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова доконаного виду мають просту (синтетичну) форму майбутнього часу — ту саму особову відміну, що й теперішній час недоконаних дієслів, але від доконаної основи.",
            "en": {
              "text": "Perfective verbs have a simple (synthetic) future tense — the same personal endings as the present of imperfective verbs, but built on the perfective stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "напішу (доконаний)",
                "я напишу (одноразово, майбутнє)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я напішу ліст заўтра.",
                "Я напишу листа завтра."
              ],
              [
                "Ён прачытае кнігу за дзень.",
                "Він прочитає книгу за день."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pairs-overview",
        "title": "Пары трыву — доконаны/недоконаны — A2",
        "titleEn": "Aspect Pairs — Perfective/Imperfective — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Майже кожне дієслово має пару: недоконаний вид (процес, повторення) і доконаний вид (одноразова завершена дія), часто утворені префіксом чи зміною суфікса.",
            "en": {
              "text": "Almost every verb has a pair: imperfective (process, repetition) and perfective (a single completed action), often formed with a prefix or a suffix change."
            }
          },
          {
            "type": "table",
            "title": "Приклади пар",
            "rows": [
              [
                "рабіць (недокон.)",
                "зрабіць (докон.)"
              ],
              [
                "чытаць (недокон.)",
                "прачытаць (докон.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я рабіў гэта ўвесь дзень.",
                "Я робив це весь день."
              ],
              [
                "Я зрабіў гэта за хвіліну.",
                "Я зробив це за хвилину."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Загадны лад — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для 2-ї особи однини утворюється основою з м'яким кінцевим приголосним чи закінченням -і; множина/ввічлива форма додає -це.",
            "en": {
              "text": "The imperative for the 2nd person singular is formed with a softened stem consonant or the ending -і; the plural/polite form adds -це."
            }
          },
          {
            "type": "formula",
            "title": "\"чытаць\" (читати) — загадны лад",
            "rows": [
              [
                "ты",
                "чытай!",
                "Читай!"
              ],
              [
                "вы",
                "чытайце!",
                "Читайте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сядай, калі ласка.",
                "Сідай, будь ласка."
              ],
              [
                "Зачыніце дзверы!",
                "Зачиніть двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умоўны лад (частка бы) — B1",
        "titleEn": "Conditional Mood (Particle By) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється формою минулого часу дієслова плюс незмінна частка бы, яка може стояти в різних місцях речення.",
            "en": {
              "text": "The conditional mood is formed with the past-tense verb form plus the invariant particle бы, which can stand in different positions in the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Я пайшоў бы, калі б меў час.",
                "Я пішов би, якби мав час."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Яна дапамагла б табе.",
                "Вона допомогла б тобі."
              ],
              [
                "Каб я ведаў, я б сказаў.",
                "Якби я знав, я б сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "participle-active-present",
        "title": "Дзеепрыметнік цяперашняга часу (-учы/-ючы) — B1",
        "titleEn": "Present Active Participle (-Uchy/-Yuchy) — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник теперішнього часу утворюється суфіксом -учы/-ючы й функціонує переважно як прикметник, вживається рідше, ніж в українській.",
            "en": {
              "text": "The present active participle is formed with the suffix -учы/-ючы and mostly functions as an adjective; it's used more sparingly than in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "чытаючы чалавек",
                "людина, яка читає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Дзеці, гуляючыя ў двары, смяяліся.",
                "Діти, які гралися у дворі, сміялися."
              ],
              [
                "Гэта пужаючая навіна.",
                "Це лякаюча новина."
              ]
            ]
          }
        ]
      },
      {
        "id": "participle-passive-past",
        "title": "Дзеепрыметнік мінулага часу пасіву (-ны/-ты) — B1",
        "titleEn": "Past Passive Participle (-Ny/-Ty) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник минулого часу утворюється суфіксом -ны чи -ты й узгоджується з іменником за родом, числом і відмінком, як звичайний прикметник.",
            "en": {
              "text": "The past passive participle is formed with the suffix -ны or -ты and agrees with the noun in gender, number, and case, like a regular adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "напісаны ліст",
                "написаний лист"
              ],
              [
                "зачыненыя дзверы",
                "зачинені двері"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кніга была напісана даўно.",
                "Книга була написана давно."
              ],
              [
                "Акно было адчынена.",
                "Вікно було відчинене."
              ]
            ]
          }
        ]
      },
      {
        "id": "gerund-adverbial-participle",
        "title": "Дзеепрыслоўе (-учы/-ўшы) — B1",
        "titleEn": "Adverbial Participle/Gerund (-Uchy/-Ushy) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник виражає супутню дію й утворюється суфіксом -учы/-ючы (одночасна дія) або -ўшы (передня дія), не змінюється за родом чи числом.",
            "en": {
              "text": "The adverbial participle expresses an accompanying action and is formed with the suffix -учы/-ючы (simultaneous action) or -ўшы (prior action); it doesn't change for gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "чытаючы",
                "читаючи"
              ],
              [
                "прачытаўшы",
                "прочитавши"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Чытаючы кнігу, ён заснуў.",
                "Читаючи книгу, він заснув."
              ],
              [
                "Прачытаўшы ліст, яна заплакала.",
                "Прочитавши листа, вона заплакала."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs-sya",
        "title": "Зваротныя дзеясловы (-ся/-цца) — A2",
        "titleEn": "Reflexive Verbs (-Sya/-Tstsa) — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова утворюються частками -ся (після приголосного) чи -цца (у неозначеній формі та 3-й особі), приєднаними в кінці дієслова.",
            "en": {
              "text": "Reflexive verbs are formed with the particles -ся (after a consonant) or -цца (in the infinitive and 3rd person), attached at the end of the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "мыць (мити)",
                "мыцца",
                "митися"
              ],
              [
                "вучыць (навчати)",
                "вучыцца",
                "навчатися"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я мыюся раніцай.",
                "Я миюся вранці."
              ],
              [
                "Ён вучыцца ў школе.",
                "Він навчається в школі."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-conjugation-groups",
        "title": "Дзве дзеяслоўныя спражэнні — B1",
        "titleEn": "Two Verb Conjugation Groups — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова діляться на два типи дієвідмінювання за особовими закінченнями (1-е з -у/-еш/-е, 2-е з -у/-іш/-іць) — приналежність до типу визначає всю парадигму.",
            "en": {
              "text": "Verbs fall into two conjugation types by their personal endings (1st with -у/-еш/-е, 2nd with -у/-іш/-іць) — the type determines the whole paradigm."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "1-е спражэнне: чытаць",
                "чытае (він читає)"
              ],
              [
                "2-е спражэнне: гаварыць",
                "гаворыць (він говорить)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён гаворыць па-беларуску.",
                "Він говорить білоруською."
              ],
              [
                "Яна чытае газету.",
                "Вона читає газету."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-of-motion-determinate-indeterminate",
        "title": "Дзеясловы руху: пэўныя/няпэўныя (ісці/хадзіць) — B1",
        "titleEn": "Motion Verbs: Determinate/Indeterminate (Isci/Khadzic) — B1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова руху мають дві окремі форми: ісці (рух в одному напрямку, зараз) і хадзіць (рух туди-сюди, звичка) — вибір форми важливий і не збігається з простим вибором виду.",
            "en": {
              "text": "Motion verbs have two separate forms: ісці (movement in one direction, right now) and хадзіць (back-and-forth movement, habit) — the choice matters and isn't the same as a simple aspect choice."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Я іду ў школу. (зараз, туди)",
                "прямування, одноразово"
              ],
              [
                "Я хаджу ў школу. (щодня)",
                "звичка, туди-сюди"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён ідзе дадому.",
                "Він іде додому (зараз)."
              ],
              [
                "Ён кожны дзень ходзіць у краму.",
                "Він щодня ходить у магазин."
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
        "id": "nominative-case",
        "title": "Назоўны склон — A1",
        "titleEn": "Nominative Case — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок — базова словникова форма й відмінок підмета речення.",
            "en": {
              "text": "The nominative case is the basic dictionary form and the case of the sentence's subject."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "дом (дім)",
                "форма словника"
              ],
              [
                "горад (місто)",
                "форма словника"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Дом вялікі.",
                "Дім великий."
              ],
              [
                "Горад прыгожы.",
                "Місто гарне."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Родны склон — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок виражає належність, кількість, а також вживається після заперечення й багатьох прийменників.",
            "en": {
              "text": "The genitive case expresses possession, quantity, and is also used after negation and many prepositions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "дом (дім)",
                "дома",
                "дому (родовий)"
              ],
              [
                "сяброўкі (подруга)",
                "сяброўкі",
                "подруги (родовий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Гэта дом майго сябра.",
                "Це дім мого друга."
              ],
              [
                "У мяне няма часу.",
                "У мене немає часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Давальны склон — A2",
        "titleEn": "Dative Case — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок позначає адресата дії — \"кому/чому\".",
            "en": {
              "text": "The dative case marks the recipient of an action — \"to whom/what\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "сябру (другу)",
                "давальний"
              ],
              [
                "маці (мамі)",
                "давальний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я даю кнігу сябру.",
                "Я даю книгу другу."
              ],
              [
                "Яна патэлефанавала маці.",
                "Вона подзвонила мамі."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Вінавальны склон — A2",
        "titleEn": "Accusative Case — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок позначає прямий додаток дії.",
            "en": {
              "text": "The accusative case marks the direct object of an action."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Я бачу дом.",
                "Я бачу дім (незмінна форма для неживого)."
              ],
              [
                "Я бачу сябра.",
                "Я бачу друга (форма як родовий для живого)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён чытае кнігу.",
                "Він читає книгу."
              ],
              [
                "Мы бачым горад.",
                "Ми бачимо місто."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Творны склон — B1",
        "titleEn": "Instrumental Case — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок позначає знаряддя дії, засіб пересування або вживається після дієслова-зв'язки \"бути\".",
            "en": {
              "text": "The instrumental case marks the tool of an action, a means of transport, or is used after the \"to be\" copula."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "пяром (ручкою)",
                "орудний"
              ],
              [
                "настаўнікам (учителем)",
                "орудний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я пішу пяром.",
                "Я пишу ручкою."
              ],
              [
                "Ён стаў настаўнікам.",
                "Він став учителем."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Месны склон — B1",
        "titleEn": "Locative Case — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок відповідає на питання \"де?\" і завжди вживається з прийменником (у, на, аб).",
            "en": {
              "text": "The locative case answers \"where?\" and is always used with a preposition (у, на, аб)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "у доме",
                "у домі"
              ],
              [
                "на стале",
                "на столі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кніга ляжыць на стале.",
                "Книга лежить на столі."
              ],
              [
                "Мы жывём у горадзе.",
                "Ми живемо в місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "grammatical-gender-three-way",
        "title": "Тры роды: мужчынскі/жаночы/ніякі — A1",
        "titleEn": "Three Genders: Masculine/Feminine/Neuter — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "стол (м.р.)",
                "стіл"
              ],
              [
                "кніга (ж.р.)",
                "книга"
              ],
              [
                "акно (н.р.)",
                "вікно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Гэты стол новы.",
                "Цей стіл новий."
              ],
              [
                "Гэтае акно чыстае.",
                "Це вікно чисте."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодненне прыметніка з назоўнікам — A2",
        "titleEn": "Adjective-Noun Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником за родом, числом і відмінком, стоїть перед іменником.",
            "en": {
              "text": "The adjective agrees with the noun in gender, number, and case, and stands before the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "вялікі дом (м.р.)",
                "великий дім"
              ],
              [
                "вялікая кніга (ж.р.)",
                "велика книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Вялікае акно адчынена.",
                "Велике вікно відчинене."
              ],
              [
                "Малыя дзеці спяць.",
                "Маленькі діти сплять."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Множны лік — A1",
        "titleEn": "Plural Formation — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "дом (дім)",
                "дамы",
                "доми"
              ],
              [
                "кніга (книга)",
                "кнігі",
                "книги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Дамы стаяць побач.",
                "Доми стоять поруч."
              ],
              [
                "Кнігі ляжаць на паліцы.",
                "Книги лежать на полиці."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-agreement-1-2-5",
        "title": "Узгодненне лічэбнікаў (1/2-4/5+) — B1",
        "titleEn": "Numeral Agreement (1/2-4/5+) — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Форма іменника після числівника залежить від останньої цифри: 1 — однина називного, 2-4 — родовий однини, 5 і більше — родовий множини.",
            "en": {
              "text": "The noun form after a numeral depends on the last digit: 1 — singular nominative, 2-4 — singular genitive, 5 and above — plural genitive."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "адна кніга",
                "одна книга"
              ],
              [
                "дзве кнігі",
                "дві книги"
              ],
              [
                "пяць кніг",
                "п'ять книг"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "У мяне тры браты.",
                "У мене три брати."
              ],
              [
                "Прыйшло дзесяць чалавек.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "dzekanne-tsekanne",
        "title": "\"Дзеканне/цеканне\" — д/т перед м'якими → дз/ц — A2",
        "titleEn": "\"Dzekanne/Tsekanne\" — D/T Before Soft Vowels Become Dz/Ts — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Історичні д і т перед м'якими голосними систематично перейшли в дз і ц — ще одна риса, якої немає в українській чи російській орфографії.",
            "en": {
              "text": "Historical d and t before soft vowels have systematically shifted to дз and ц — another feature absent from Ukrainian or Russian spelling."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "дзень (порівн. укр. день)",
                "день"
              ],
              [
                "цень (порівн. укр. тінь)",
                "тінь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сёння прыгожы дзень.",
                "Сьогодні гарний день."
              ],
              [
                "У цені прахалодна.",
                "У тіні прохолодно."
              ]
            ]
          }
        ]
      },
      {
        "id": "non-syllabic-u-letter",
        "title": "Нескладовае \"ў\" — A1",
        "titleEn": "The Non-Syllabic Letter \"Ŭ\" — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Літера ў (\"у нескладовае\") позначає короткий приголосний звук [w], що вживається замість в чи у після голосного, — унікальна літера білоруської абетки.",
            "en": {
              "text": "The letter ў (\"non-syllabic u\") marks a short [w]-like consonant sound, used instead of в or у after a vowel — a unique letter of the Belarusian alphabet."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ён чытаў",
                "він читав"
              ],
              [
                "воўк",
                "вовк"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён пайшоў дадому.",
                "Він пішов додому."
              ],
              [
                "Я купіў новую кнігу.",
                "Я купив нову книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Указальныя займеннікі (гэты/той) — A1",
        "titleEn": "Demonstratives (Geta/Toy) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "гэты дом",
                "цей дім"
              ],
              [
                "той дом",
                "той дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Гэта мой сябар.",
                "Це мій друг."
              ],
              [
                "Тая гара вельмі высокая.",
                "Та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Прыналежныя займеннікі — A1",
        "titleEn": "Possessive Pronouns — A1",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "мой",
                "мій"
              ],
              [
                "твой",
                "твій"
              ],
              [
                "яго / яе",
                "його / її"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мой дом вялікі.",
                "Мій дім великий."
              ],
              [
                "Яе кніга на стале.",
                "Її книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-yaki",
        "title": "Адносны займеннік \"які\" — B1",
        "titleEn": "Relative Pronoun \"Yaki\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник які (\"який/що\") узгоджується з означуваним іменником за родом, числом і відмінком.",
            "en": {
              "text": "The relative pronoun які (\"which/who\") agrees with the noun it modifies in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "чалавек, які прыйшоў",
                "людина, яка прийшла"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Кніга, якую ты чытаеш, цікавая.",
                "Книга, яку ти читаєш, цікава."
              ],
              [
                "Дом, у якім я жыву, стары.",
                "Дім, у якому я живу, старий."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Пытальныя словы — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "хто",
                "хто"
              ],
              [
                "што",
                "що"
              ],
              [
                "дзе",
                "де"
              ],
              [
                "калі",
                "коли"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Як цябе завуць?",
                "Як тебе звати?"
              ],
              [
                "Дзе ты жывеш?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-syabe",
        "title": "Зваротны займеннік \"сябе\" — B1",
        "titleEn": "Reflexive Pronoun \"Syabe\" (Self) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник сябе (\"себе\") не має форми називного відмінка й відмінюється так само, як особовий займенник ты.",
            "en": {
              "text": "The reflexive pronoun сябе (\"self\") has no nominative form and declines the same way as the personal pronoun ты."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Я гляджу на сябе.",
                "Я дивлюся на себе."
              ],
              [
                "Ён любіць сябе.",
                "Він любить себе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Яна ўпэўненая ў сабе.",
                "Вона впевнена в собі."
              ],
              [
                "Мы гаворым пра сябе.",
                "Ми говоримо про себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені параўнання — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -ей/-эй чи словом больш, найвищий — префіксом най-.",
            "en": {
              "text": "The comparative is formed with the suffix -ей/-эй or the word больш, the superlative with the prefix най-."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "вялікі (великий)",
                "большы",
                "більший"
              ],
              [
                "вялікі (великий)",
                "найбольшы",
                "найбільший"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Гэты дом большы.",
                "Цей дім більший."
              ],
              [
                "Яна найразумнейшая ў класе.",
                "Вона найрозумніша в класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "short-adjective-forms",
        "title": "Кароткія формы прыметнікаў (архаїчні) — B2",
        "titleEn": "Short Adjective Forms (Archaic) — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька прикметників зберегли архаїчну коротку (безартиклеву) форму, вживану переважно в поезії й усталених виразах.",
            "en": {
              "text": "A handful of adjectives have preserved an archaic short (article-less) form, used mostly in poetry and set expressions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "поўны (повний)",
                "поўен",
                "коротка форма"
              ],
              [
                "здароў",
                "здоровий (у виразі \"будзь здароў\")"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Будзь здароў!",
                "Будь здоровий!"
              ],
              [
                "Шклянка поўная вады.",
                "Склянка повна води."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible",
        "title": "Гнуткі парадак слоў — B1",
        "titleEn": "Flexible Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — SVO, але завдяки відмінковим закінченням порядок часто змінюється для наголосу на певному слові.",
            "en": {
              "text": "The basic word order is SVO, but thanks to case endings, order often shifts to emphasize a particular word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ён чытае кнігу. (нейтр.)",
                "Він читає книгу."
              ],
              [
                "Кнігу чытае ён. (наголос на \"він\")",
                "Книгу читає він."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ліст напісаў я.",
                "Листа написав я."
              ],
              [
                "Я напісаў ліст.",
                "Я написав листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Злучальныя злучнікі — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "і",
                "і, та"
              ],
              [
                "але",
                "але"
              ],
              [
                "або",
                "або"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я і ты — сябры.",
                "Я і ти — друзі."
              ],
              [
                "Хачу пайсці, але не маю часу.",
                "Хочу піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Падпарадкавальныя злучнікі — A2",
        "titleEn": "Subordinating Conjunctions — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "таму што",
                "тому що"
              ],
              [
                "калі",
                "якщо/коли"
              ],
              [
                "пакуль",
                "поки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я рады, таму што ты прыйшоў.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Калі буду вольны, патэлефаную.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Мадальныя словы (трэба/можна) — A2",
        "titleEn": "Modal Words (Treba/Mozhna) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Мне трэба ісці.",
                "Мені треба йти."
              ],
              [
                "Можна ўвайсці?",
                "Можна увійти?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Табе трэба вучыцца.",
                "Тобі треба вчитися."
              ],
              [
                "Я хачу дапамагчы.",
                "Я хочу допомогти."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Колькасныя словы — A2",
        "titleEn": "Quantifiers — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "шмат",
                "багато"
              ],
              [
                "мала",
                "мало"
              ],
              [
                "некалькі",
                "декілька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "У мяне шмат кніг.",
                "У мене багато книг."
              ],
              [
                "Дай мне крыху вады.",
                "Дай мені трохи води."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Дні тыдня — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "панядзелак",
                "понеділок"
              ],
              [
                "субота",
                "субота"
              ],
              [
                "нядзеля",
                "неділя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сёння панядзелак.",
                "Сьогодні понеділок."
              ],
              [
                "Я адпачываю ў нядзелю.",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Месяцы і даты — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "студзень",
                "січень"
              ],
              [
                "май",
                "травень"
              ],
              [
                "снежань",
                "грудень"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мой дзень нараджэння ў маі.",
                "Мій день народження в травні."
              ],
              [
                "Сёння дзясятае студзеня.",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle-address",
        "title": "Часка звароту \"о\" — B1",
        "titleEn": "The Address Particle \"O\" — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовному й поетичному мовленні перед звертанням іноді ставиться частка о, що надає йому урочистого чи ліричного відтінку.",
            "en": {
              "text": "In colloquial and poetic speech, the particle о is sometimes placed before an address, giving it a solemn or lyrical shade."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "О Божа, дапамажы!",
                "О Боже, допоможи!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "О сябры мае, дзякуй!",
                "О друзі мої, дякую!"
              ],
              [
                "О родная зямля!",
                "О рідна земля!"
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Час — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Каторая гадзіна?",
                "Котра година?"
              ],
              [
                "Трэцяя гадзіна.",
                "Третя година."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Мы сустрэнемся ў шэсць гадзін.",
                "Зустрінемось о шостій."
              ],
              [
                "Зараз поўдзень.",
                "Зараз полудень."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Прывітанні і фразы — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Прывітанне",
                "Привіт"
              ],
              [
                "Дзякуй",
                "Дякую"
              ],
              [
                "Да пабачэння",
                "До побачення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Як справы?",
                "Як справи?"
              ],
              [
                "Вялікі дзякуй.",
                "Велике дякую."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Надвор'е — вирази — A2",
        "titleEn": "Weather Expressions — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Сонечна.",
                "Сонячно."
              ],
              [
                "Ідзе дождж.",
                "Іде дощ."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Сёння холадна.",
                "Сьогодні холодно."
              ],
              [
                "Вельмі горача.",
                "Дуже жарко."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Устойлівыя выразы — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "вадзіць за нос",
                "водити за ніс (обманювати)"
              ],
              [
                "душа не ляжыць",
                "не лежить душа (не подобається)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён вадзіў мяне за нос.",
                "Він водив мене за ніс."
              ],
              [
                "Душа не ляжыць да гэтай работы.",
                "Не лежить душа до цієї роботи."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Прыслоўі — A2",
        "titleEn": "Adverbs — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "хутка",
                "швидко"
              ],
              [
                "павольна",
                "повільно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён хутка бегае.",
                "Він швидко бігає."
              ],
              [
                "Гавары павольна.",
                "Говори повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Словаўтваральныя суфіксы — B1",
        "titleEn": "Word-Formation Suffixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "-асць/-осць",
                "утворює абстрактні іменники (вольны→вольнасць, вільний→свобода)"
              ],
              [
                "-нік",
                "утворює назви професій/діячів (лес→лесавік, ліс→лісник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Вольнасць важная.",
                "Свобода важлива."
              ],
              [
                "Лесавік ходзіць па лесе.",
                "Лісник ходить лісом."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words",
        "title": "Складаныя словы — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "рука + піска",
                "рукапіс (рукопис)"
              ],
              [
                "сам + лёт",
                "самалёт (літак)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Самалёт ляціць высока.",
                "Літак летить високо."
              ],
              [
                "Гэты рукапіс вельмі стары.",
                "Цей рукопис дуже старий."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Поры года — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "вясна",
                "весна"
              ],
              [
                "лета",
                "літо"
              ],
              [
                "восень",
                "осінь"
              ],
              [
                "зіма",
                "зима"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Улетку горача.",
                "Влітку жарко."
              ],
              [
                "Я люблю восень.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Грошы і цэны — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Колькі гэта каштуе?",
                "Скільки коштує?"
              ],
              [
                "Тысяча рублёў.",
                "Тисяча рублів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Гэтая кніга каштуе дваццаць рублёў.",
                "Ця книга коштує двадцять рублів."
              ],
              [
                "Вельмі дорага.",
                "Дуже дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Выказванне думкі — B1",
        "titleEn": "Expressing Opinions — B1",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Я думаю, што...",
                "Я думаю, що..."
              ],
              [
                "На маю думку...",
                "На мою думку..."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я думаю, што ты маеш рацыю.",
                "Я думаю, що ти правий."
              ],
              [
                "На маю думку, гэта добрая ідэя.",
                "На мою думку, це гарна ідея."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Адносныя выразы часу — A2",
        "titleEn": "Relative Time Expressions — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "сёння / заўтра / учора",
                "сьогодні / завтра / вчора"
              ],
              [
                "зараз / потым",
                "зараз / потім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Заўтра сустрэнемся.",
                "Завтра зустрінемось."
              ],
              [
                "Зараз я заняты.",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неазначальныя займеннікі — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "нехта",
                "хтось"
              ],
              [
                "нешта",
                "щось"
              ],
              [
                "ніхто",
                "ніхто"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Нехта патэлефанаваў мне.",
                "Хтось мені подзвонив."
              ],
              [
                "Я нешта пачуў.",
                "Я щось почув."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Выклічнікі — A1",
        "titleEn": "Exclamations — A1",
        "emoji": "❕",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ой!",
                "Ой!"
              ],
              [
                "Цудоўна!",
                "Чудово!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ой, як прыгожа!",
                "Ой, як гарно!"
              ],
              [
                "Цудоўна, добрая навіна!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Канструкцыя \"ёсць/няма\" — A2",
        "titleEn": "Existential \"There Is/Isn't\" (Yosc'/Nyama) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ёсць вада.",
                "Є вода."
              ],
              [
                "Няма часу.",
                "Немає часу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Тут ёсць шмат людзей.",
                "Тут є багато людей."
              ],
              [
                "Тут няма крамы.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Памяншальныя формы — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі форми утворюються суфіксами -к(а), -ачк(а), -ца, дуже поширені в білоруській, більше навіть, ніж в українській.",
            "en": {
              "text": "Diminutive/affectionate forms are made with the suffixes -к(а), -ачк(а), -ца, extremely common in Belarusian, even more so than in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "дом (дім)",
                "домік",
                "будиночок"
              ],
              [
                "мама (мама)",
                "матуля",
                "матусенька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Які прыгожы домік!",
                "Який гарний будиночок!"
              ],
              [
                "Мая матуля вельмі добрая.",
                "Моя матусенька дуже добра."
              ]
            ]
          }
        ]
      },
      {
        "id": "addressing-titles",
        "title": "Звароты і фармальнасць — A2",
        "titleEn": "Titles & Formality — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до однієї людини використовує займенник вы (ви), як в українській, замість окремого титулу.",
            "en": {
              "text": "Polite address to one person uses the pronoun вы (you-plural), like in Ukrainian, instead of a separate title."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ты як маешся? (неформ.)",
                "Як ти?"
              ],
              [
                "Вы як маецеся? (формально)",
                "Як Ви?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Адкуль вы?",
                "Звідки Ви?"
              ],
              [
                "Прабачце, пан.",
                "Вибачте, пане."
              ]
            ]
          }
        ]
      },
      {
        "id": "proverbs-sayings",
        "title": "Прыказкі — B2",
        "titleEn": "Proverbs — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Хто не працуе, той не есць.",
                "Хто не працює, той не їсть."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Цярпенне і праца ўсё перацруць.",
                "Терпіння і праця все перетруть."
              ],
              [
                "Не ўсё тое золата, што блішчыць.",
                "Не все те золото, що блищить."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-polish-russian",
        "title": "Запазычанні з польскай і рускай — B1",
        "titleEn": "Loanwords from Polish & Russian — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через тривалу історичну близькість до Речі Посполитої й Росії, білоруська має шар лексики, запозиченої з польської (переважно старіше), а також багато нових запозичень з російської.",
            "en": {
              "text": "Due to a long historical closeness to the Polish-Lithuanian Commonwealth and Russia, Belarusian has a layer of vocabulary borrowed from Polish (mostly older) as well as many newer borrowings from Russian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "кроп (з польськ. \"kropla\"-подібне)",
                "кріп (рослина)"
              ],
              [
                "дзякуй (порівн. польськ. dziękuję)",
                "дякую"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Дзякуй за дапамогу.",
                "Дякую за допомогу."
              ],
              [
                "Гэта дужа смачны кроп.",
                "Це дуже смачний кріп."
              ]
            ]
          }
        ]
      },
      {
        "id": "prefixed-verbs-aspect-formation",
        "title": "Утворення докананага трыву прэфіксамі — B1",
        "titleEn": "Forming the Perfective with Prefixes — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший спосіб утворити доконаний вид дієслова — додати префікс (з-, на-, па-, пра-) до недоконаної основи, хоча префікс може одночасно змінювати й відтінок значення.",
            "en": {
              "text": "The most common way to form a verb's perfective aspect is to add a prefix (з-, на-, па-, пра-) to the imperfective stem, though the prefix can simultaneously shift the shade of meaning too."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "рабіць → зрабіць",
                "робити → зробити"
              ],
              [
                "чытаць → прачытаць",
                "читати → прочитати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Я зраблю гэта заўтра.",
                "Я зроблю це завтра."
              ],
              [
                "Ён прачытаў усю кнігу.",
                "Він прочитав усю книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "consonant-alternation-morphophonology",
        "title": "Чаргаванні зычных у скланенні (г/ж, к/ч) — B1",
        "titleEn": "Consonant Alternations in Declension (H/Zh, K/Ch) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "При відмінюванні деякі кінцеві приголосні основи чергуються з іншими (г→ж, к→ч, х→ш) перед певними закінченнями.",
            "en": {
              "text": "During declension, certain final stem consonants alternate with others (г→ж, к→ч, х→ш) before certain endings."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "нага (нога)",
                "назе",
                "на нозі (г→з тут виняток м'якшення)"
              ],
              [
                "рука (рука)",
                "руцэ",
                "на руці"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "У мяне баліць нага.",
                "У мене болить нога."
              ],
              [
                "Кніга ў руцэ.",
                "Книга в руці."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-archaic-remnants",
        "title": "Клічны склон — толькі рэшткі — B2",
        "titleEn": "Vocative Case — Only Remnants — B2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, де кличний відмінок живий і продуктивний, у білоруській він зберігся лише в кількох застиглих словах-звертаннях (Божа, браце), а зазвичай звертання збігається з називним.",
            "en": {
              "text": "Unlike Ukrainian, where the vocative case is alive and productive, in Belarusian it survives only in a handful of fossilized address words (Божа, браце), and normal address matches the nominative."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Божа!",
                "Боже! (архаїчний кличний)"
              ],
              [
                "браце",
                "брате (звертання, збережене)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Божа мой!",
                "Боже мій!"
              ],
              [
                "Браце, дапамажы мне.",
                "Брате, допоможи мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Парадкавыя лічэбнікі — A2",
        "titleEn": "Ordinal Numerals — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "першы",
                "перший"
              ],
              [
                "другі",
                "другий"
              ],
              [
                "трэці",
                "третій"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Гэта мая першая кніга.",
                "Це моя перша книга."
              ],
              [
                "Ён заняў другое месца.",
                "Він зайняв друге місце."
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
        "id": "akanne-orthographic-exceptions",
        "title": "Винятки з правила \"аканне\" — B1",
        "titleEn": "Exceptions to the \"Akanne\" Rule — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Правило \"аканне\" не поширюється на власні назви іншомовного походження, деякі запозичення й корені з чергуванням о/е — їх варто заучувати окремо, а не покладатися на загальне правило.",
            "en": {
              "text": "The \"akanne\" rule doesn't apply to foreign proper names, some loanwords, and roots with an o/e alternation — these must be memorized individually rather than relying on the general rule."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Токіо (власна назва, не токіа)",
                "зберігає о"
              ],
              [
                "радыё (запозичення, не радыа)",
                "зберігає е/ё"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ён з Токіо.",
                "Він з Токіо."
              ],
              [
                "Я слухаю радыё.",
                "Я слухаю радіо."
              ]
            ]
          }
        ]
      },
      {
        "id": "latin-script-lacinka-history",
        "title": "Латинка — паралельна історична писемність — B2",
        "titleEn": "Łacinka — a Parallel Historical Script — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших східнослов'янських мов, білоруська історично мала й повноцінну латинську писемність (лацінку), яка досі вживається в еміграції та деяких культурних контекстах паралельно з кирилицею.",
            "en": {
              "text": "Unlike other East Slavic languages, Belarusian historically also had a full Latin-script writing system (łacinka), still used in the diaspora and some cultural contexts alongside Cyrillic."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "мова (кирилиця)",
                "mova (лацінка)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Беларуская мова прыгожая.",
                "Bielaruskaja mova pryhožaja."
              ],
              [
                "Гэта наша культура.",
                "Heta naša kultura."
              ]
            ]
          }
        ]
      },
      {
        "id": "trasianka-sociolinguistic-note",
        "title": "\"Трасянка\" — мовна суміш повсякденного мовлення — B2",
        "titleEn": "\"Trasianka\" — the Everyday Mixed Speech Variety — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "У повсякденному мовленні багато білорусів послуговуються \"трасянкою\" — стихійною сумішшю білоруської й російської, тому чиста літературна норма, яку вивчають у цьому курсі, часто відрізняється від того, що почуєш на вулиці.",
            "en": {
              "text": "In everyday speech, many Belarusians use \"trasianka\" — a spontaneous mix of Belarusian and Russian, so the clean literary standard taught in this course often differs from what you'll hear on the street."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Літаратурная: Дзякуй за дапамогу.",
                "Дякую за допомогу."
              ],
              [
                "Трасянка (сумісь): Спасіба за помощ.",
                "Дякую за допомогу (з русизмами)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Прыклады",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "У школе вучаць літаратурную мову.",
                "У школі вчать літературну мову."
              ],
              [
                "На вуліцы часта чуецца трасянка.",
                "На вулиці часто чути трасянку."
              ]
            ]
          }
        ]
      }
    ]
  }
];
