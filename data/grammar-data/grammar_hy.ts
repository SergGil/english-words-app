// Vymova — data/grammar-data/grammar_hy.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HY: GrammarCategory[] = [
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
            "text": "Вірменська не має граматичного роду — նա означає і \"він\", і \"вона\".",
            "en": {
              "text": "Armenian has no grammatical gender — նա means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ես (yes)",
                "я"
              ],
              [
                "դու (du)",
                "ти"
              ],
              [
                "նա (na)",
                "він / вона"
              ],
              [
                "մենք (menk')",
                "ми"
              ],
              [
                "նրանք (nrank')",
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
                "Ես ուսուցիչ եմ։",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"եմ/ես/է\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка \"бути\" ставиться в кінці речення, після присудка.",
            "en": {
              "text": "The \"to be\" linking verb goes at the end of the sentence, after the predicate."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + եմ/ես/է",
            "rows": [
              [
                "ես",
                "ուսուցիչ եմ",
                "я вчитель"
              ],
              [
                "դու",
                "ուսուցիչ ես",
                "ти вчитель"
              ],
              [
                "նա",
                "ուսուցիչ է",
                "він/вона вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Նա բժիշկ է։",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Եմ/Ես/Է — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення префіксом \"չ-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі заперечення утворюється префіксом չ- перед дієсловом.",
            "en": {
              "text": "In the present tense, negation is formed with the prefix չ- before the verb."
            }
          },
          {
            "type": "formula",
            "title": "չ- + дієслово",
            "rows": [
              [
                "գիտեմ",
                "չգիտեմ",
                "я знаю → я не знаю"
              ],
              [
                "ուզում եմ",
                "չեմ ուզում",
                "я хочу → я не хочу"
              ],
              [
                "կարող եմ",
                "չեմ կարող",
                "я можу → я не можу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Նա չեկավ։",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with the Prefix Չ- — A1"
      },
      {
        "id": "questions",
        "title": "Питання — наголос на складі — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У питаннях так/ні наголос переноситься на склад слова, яке уточнюють — на письмі це позначають знаком над голосною.",
            "en": {
              "text": "In yes/no questions, stress shifts to the syllable of the word being questioned — in writing this is marked with a diacritic over the vowel."
            }
          },
          {
            "type": "formula",
            "title": "Твердження зі зміщеним наголосом?",
            "rows": [
              [
                "Դու հոգնած ես։",
                "Դու հոգնա՞ծ ես։",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Նա տանն է։",
                "Նա տա՞նն է։",
                "Він удома. → Він удома?"
              ],
              [
                "Ես ուշացել եմ։",
                "Ես ուշացե՞լ եմ։",
                "Я запізнився. → Я запізнився?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ժամանա՞կ ունես։",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Stress Shift — A1"
      },
      {
        "id": "no-gender",
        "title": "Без граматичного роду й прийменників — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Вірменська не має граматичного роду взагалі та використовує післяйменники/відмінкові закінчення замість прийменників перед словом.",
            "en": {
              "text": "Armenian has no grammatical gender at all, and uses postpositions/case endings instead of prepositions before the word."
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
                "Սեղանի վրա",
                "На столі (վրա = \"на\", стоїть після слова)."
              ]
            ]
          }
        ],
        "titleEn": "No Grammatical Gender or Prepositions — A1"
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
        "title": "Ներկա ժամանակ — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється аналітично: дієприслівник на -ում + допоміжне дієслово \"եմ/ես/է\" (бути), яке ставиться після нього.",
            "en": {
              "text": "The present tense is formed analytically: the converb -ում plus the auxiliary \"եմ/ես/է\" (to be), which follows it."
            }
          },
          {
            "type": "formula",
            "title": "\"կարդալ\" (читати) — ներկա ժամանակ",
            "rows": [
              [
                "ես",
                "կարդում եմ",
                "я читаю"
              ],
              [
                "դու",
                "կարդում ես",
                "ти читаєш"
              ],
              [
                "նա",
                "կարդում է",
                "він/вона читає"
              ],
              [
                "մենք",
                "կարդում ենք",
                "ми читаємо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես գիրք եմ կարդում։",
                "Я читаю книгу."
              ],
              [
                "Նրանք սուրճ են խմում։",
                "Вони п'ють каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect-past",
        "title": "Անցյալ անկատար ժամանակ — A2",
        "titleEn": "Imperfect Past Tense — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий недоконаний час утворюється тим самим дієприслівником на -ում + допоміжне дієслово в минулому часі (էի/էիր/էր).",
            "en": {
              "text": "The imperfect past is formed with the same -ում converb plus the auxiliary in the past tense (էի/էիր/էր)."
            }
          },
          {
            "type": "formula",
            "title": "\"կարդալ\" (читати) — անցյալ անկատար",
            "rows": [
              [
                "ես",
                "կարդում էի",
                "я читав (процес)"
              ],
              [
                "դու",
                "կարդում էիր",
                "ти читав"
              ],
              [
                "նա",
                "կարդում էր",
                "він/вона читав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես գիրք էի կարդում, երբ նա եկավ։",
                "Я читав книгу, коли він прийшов."
              ],
              [
                "Երեխաները խաղում էին այգում։",
                "Діти гралися в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist-past",
        "title": "Անցյալ կատարյալ (աորիստ) — A1",
        "titleEn": "Aorist (Simple Past) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист — синтетичний (простий) минулий час, що позначає одноразову завершену дію й утворюється власними закінченнями, доданими прямо до основи дієслова, без допоміжного дієслова.",
            "en": {
              "text": "The aorist is a synthetic (simple) past tense marking a single completed action, formed with its own endings added directly to the verb stem, with no auxiliary."
            }
          },
          {
            "type": "formula",
            "title": "\"կարդալ\" (читати) — աորիստ",
            "rows": [
              [
                "ես",
                "կարդացի",
                "я прочитав"
              ],
              [
                "դու",
                "կարդացիր",
                "ти прочитав"
              ],
              [
                "նա",
                "կարդաց",
                "він/вона прочитав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Երեկ գիրք կարդացի։",
                "Вчора я прочитав книгу."
              ],
              [
                "Նրանք ֆիլմ դիտեցին։",
                "Вони подивилися фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Կատարյալ ներկա (перфект) — B1",
        "titleEn": "Perfect Tense — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражає дію, результат якої актуальний зараз, і утворюється дієприкметником на -ել/-ացել + допоміжне дієслово \"եմ\" (бути).",
            "en": {
              "text": "The perfect expresses an action whose result is relevant now, formed with the participle -ել/-ացել plus the auxiliary \"եմ\" (to be)."
            }
          },
          {
            "type": "formula",
            "title": "\"կարդալ\" (читати) — կատարյալ",
            "rows": [
              [
                "ես",
                "կարդացել եմ",
                "я прочитав (результат)"
              ],
              [
                "դու",
                "կարդացել ես",
                "ти прочитав"
              ],
              [
                "նա",
                "կարդացել է",
                "він/вона прочитав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես արդեն կերել եմ։",
                "Я вже поїв."
              ],
              [
                "Դու տեսե՞լ ես այս ֆիլմը։",
                "Ти бачив цей фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Ապառնի ժամանակ (պիտի) — A2",
        "titleEn": "Future Tense (Piti) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою \"պիտի\" перед дієсловом у формі, схожій на теперішній час (без допоміжного \"եմ\").",
            "en": {
              "text": "The future tense is formed with the particle \"պիտի\" before the verb in a form similar to the present (without the auxiliary \"եմ\")."
            }
          },
          {
            "type": "formula",
            "title": "պիտի + дієслово",
            "rows": [
              [
                "ես",
                "պիտի կարդամ",
                "я читатиму"
              ],
              [
                "դու",
                "պիտի կարդաս",
                "ти читатимеш"
              ],
              [
                "նա",
                "պիտի կարդա",
                "він/вона читатиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Վաղը պիտի գնամ աշխատանքի։",
                "Завтра я піду на роботу."
              ],
              [
                "Նա պիտի զանգի քեզ։",
                "Він тобі подзвонить."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Պայմանական եղանակ — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражає нереальну чи гіпотетичну умову й найчастіше вживається з часткою \"եթե\" (\"якщо\") на початку підрядного речення.",
            "en": {
              "text": "The conditional mood expresses an unreal or hypothetical condition and is most often used with the particle \"եթե\" (\"if\") at the start of the subordinate clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Եթե ժամանակ ունենայի, կգնայի։",
                "Якби я мав час, я пішов би."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Եթե գիտենայի, կասեի քեզ։",
                "Якби я знав, я сказав би тобі."
              ],
              [
                "Կուզենայի ավելի ճանապարհորդել։",
                "Я хотів би більше подорожувати."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Հրամայական եղանակ — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб у 2-й особі однини утворюється основою дієслова із закінченням -իր/-ա, множина/ввічлива форма -եք.",
            "en": {
              "text": "The imperative in the 2nd person singular is formed with the verb stem plus -իր/-ա; the plural/polite form adds -եք."
            }
          },
          {
            "type": "formula",
            "title": "\"գալ\" (приходити) — հրամայական",
            "rows": [
              [
                "դու",
                "արի՛",
                "Приходь!"
              ],
              [
                "դուք",
                "եկե՛ք",
                "Приходьте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Փակի՛ր դուռը, խնդրում եմ։",
                "Зачини двері, будь ласка."
              ],
              [
                "Նստե՛ք, խնդրում եմ։",
                "Сідайте, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-non-present",
        "title": "Ժխտում ոչ ներկա ժամանակներում — B1",
        "titleEn": "Negation in Non-Present Tenses — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від теперішнього часу (де заперечення — префікс չ-), у минулому й майбутньому часі заперечується допоміжне дієслово чи частка, а не основне дієслово.",
            "en": {
              "text": "Unlike the present tense (where negation is the prefix չ-), in the past and future tenses it's the auxiliary verb or particle that gets negated, not the main verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Չեմ կարդում. (теп.)",
                "Я не читаю.",
                "префікс на дієслові"
              ],
              [
                "Կարդացած չեմ. (перфект)",
                "Я не читав.",
                "заперечення на допоміжному"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Նա չի կարդացել այս գիրքը։",
                "Він/вона не читав(-ла) цю книгу."
              ],
              [
                "Ես չպիտի գնամ։",
                "Я не піду."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Կրավորական սեռ (-վ-) — B1",
        "titleEn": "Passive Voice (-V-) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється інфіксом -վ-, вставленим перед закінченням дієслова.",
            "en": {
              "text": "The passive voice is formed with the infix -վ-, inserted before the verb ending."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "գրել (писати)",
                "գրվել",
                "бути написаним"
              ],
              [
                "կարդալ (читати)",
                "կարդացվել",
                "бути прочитаним"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այս գիրքը շատ է կարդացվում։",
                "Цю книгу багато читають."
              ],
              [
                "Դուռը փակվեց։",
                "Двері зачинилися."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-voice",
        "title": "Պատճառական սեռ (-ցն-) — B1",
        "titleEn": "Causative Voice (-Tsn-) — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний (спонукальний) стан показує, що підмет змушує когось виконати дію, й утворюється суфіксом -ցն-.",
            "en": {
              "text": "The causative voice shows that the subject makes someone else perform the action, formed with the suffix -ցն-."
            }
          },
          {
            "type": "table",
            "title": "Активний → каузативний",
            "rows": [
              [
                "գրել (писати)",
                "գրեցնել",
                "змусити написати"
              ],
              [
                "ուտել (їсти)",
                "կերցնել",
                "нагодувати (змусити їсти)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ուսուցիչը աշակերտին տեքստ գրեցրեց։",
                "Вчитель змусив учня написати текст."
              ],
              [
                "Մայրս ինձ կաթ կերցրեց։",
                "Мама нагодувала мене молоком."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-verbal-noun",
        "title": "Անորոշ դերբայ (-ել/-ալ) — A2",
        "titleEn": "Infinitive as Verbal Noun — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив на -ել/-ալ функціонує і як словникова форма дієслова, і як віддієслівний іменник, здатний відмінюватися за відмінками.",
            "en": {
              "text": "The infinitive -ել/-ալ functions both as the verb's dictionary form and as a verbal noun capable of declining by case."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "կարդալ",
                "читати / читання"
              ],
              [
                "գրել",
                "писати / писання"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Կարդալը օգտակար է։",
                "Читання корисне."
              ],
              [
                "Ես սիրում եմ երգել։",
                "Я люблю співати."
              ]
            ]
          }
        ]
      },
      {
        "id": "participles-adverbial",
        "title": "Դերբայներ — B1",
        "titleEn": "Participles & Converbs — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Вірменська має цілу систему дієприкметників/дієприслівників (-ող для активної дії, -ած для результату, -իս для одночасної дії), що часто замінюють підрядні речення.",
            "en": {
              "text": "Armenian has a whole system of participles/converbs (-ող for an active doer, -ած for a result, -իս for a simultaneous action), often replacing subordinate clauses."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "կարդալ → կարդացող",
                "той, хто читає"
              ],
              [
                "կարդալ → կարդալիս",
                "читаючи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Կարդալիս ես երաժշտություն եմ լսում։",
                "Читаючи, я слухаю музику."
              ],
              [
                "Կարդացող մարդը իմ ընկերն է։",
                "Той, хто читає, — мій друг."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect-tense",
        "title": "Նախաանցյալ ժամանակ — B1",
        "titleEn": "Pluperfect Tense — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час виражає дію, що відбулася раніше за інший минулий момент, і утворюється дієприкметником на -ել/-ացել + допоміжне дієслово в минулому часі (էի/էիր/էր).",
            "en": {
              "text": "The pluperfect expresses an action that occurred before another past moment, formed with the participle -ել/-ացել plus the auxiliary in the past tense (էի/էիր/էր)."
            }
          },
          {
            "type": "formula",
            "title": "\"կարդալ\" (читати) — նախաանցյալ",
            "rows": [
              [
                "ես",
                "կարդացել էի",
                "я вже прочитав (до того)"
              ],
              [
                "դու",
                "կարդացել էիր",
                "ти вже прочитав"
              ],
              [
                "նա",
                "կարդացել էր",
                "він/вона вже прочитав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Երբ նա եկավ, ես արդեն կերել էի։",
                "Коли він прийшов, я вже поїв."
              ],
              [
                "Նրանք արդեն գնացել էին, երբ զանգեցի։",
                "Вони вже пішли, коли я подзвонив."
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
        "id": "genitive-dative-case",
        "title": "Սեռական-տրական հոլով — A2",
        "titleEn": "Genitive-Dative Case — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий і давальний відмінки в вірменській збіглися в одну форму (як у румунській) — вона виражає і належність, і адресата дії, зазвичай суфіксом -ի.",
            "en": {
              "text": "The genitive and dative cases have merged into one form (like in Romanian) — it expresses both possession and the recipient of an action, usually with the suffix -ի."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ընկեր (друг)",
                "ընկերի",
                "друга / другові"
              ],
              [
                "քույր (сестра)",
                "քրոջ",
                "сестри / сестрі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Սա իմ ընկերի գիրքն է։",
                "Це книга мого друга."
              ],
              [
                "Ես նամակ գրեցի քրոջս։",
                "Я написав листа своїй сестрі."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Հայցական հոլով — A2",
        "titleEn": "Accusative Case — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок для означених (конкретних) прямих додатків збігається із родово-давальним (-ի), а для неозначених — з називним без закінчення.",
            "en": {
              "text": "The accusative for definite (specific) direct objects coincides with the genitive-dative (-ի), while for indefinite objects it matches the bare nominative."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ես տեսնում եմ Անիին։",
                "Я бачу Ані.",
                "означений — родово-давальна форма"
              ],
              [
                "Ես գիրք եմ կարդում։",
                "Я читаю книгу.",
                "неозначений — форма називного"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես սիրում եմ քրոջս։",
                "Я люблю свою сестру."
              ],
              [
                "Նա գնեց մեքենա։",
                "Він купив машину."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case",
        "title": "Բացառական հոլով (-ից) — B1",
        "titleEn": "Ablative Case (-Its) — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Аблатив (-ից) відповідає на питання \"звідки?\" / \"від кого?\" і виражає джерело, походження або порівняння.",
            "en": {
              "text": "The ablative (-ից) answers \"from where?\" / \"from whom?\" and expresses source, origin, or comparison."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "քաղաք (місто)",
                "քաղաքից",
                "з міста"
              ],
              [
                "ընկեր (друг)",
                "ընկերից",
                "від друга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես Երևանից եմ։",
                "Я з Єревана."
              ],
              [
                "Նա ավելի բարձրահասակ է ինձնից։",
                "Він вищий за мене."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Գործիական հոլով (-ով) — B1",
        "titleEn": "Instrumental Case (-Ov) — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (-ով) вказує на знаряддя дії, засіб пересування або супровід.",
            "en": {
              "text": "The instrumental case (-ով) indicates the means/tool of an action, a mode of transport, or accompaniment."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "գրիչ (ручка)",
                "գրիչով",
                "ручкою"
              ],
              [
                "մեքենա (машина)",
                "մեքենայով",
                "машиною"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես գրում եմ գրիչով։",
                "Я пишу ручкою."
              ],
              [
                "Նա եկավ ընկերոջով։",
                "Він прийшов з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-case",
        "title": "Ներգոյական հոլով (-ում) — A2",
        "titleEn": "Locative Case (-Um) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (-ում) відповідає на питання \"де?\" і вживається переважно з назвами міст, країн та закладів.",
            "en": {
              "text": "The locative case (-ում) answers \"where?\" and is used mainly with names of cities, countries, and institutions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Երևան (Єреван)",
                "Երևանում",
                "у Єревані"
              ],
              [
                "դպրոց (школа)",
                "դպրոցում",
                "у школі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես ապրում եմ Երևանում։",
                "Я живу в Єревані."
              ],
              [
                "Երեխաները դպրոցում են։",
                "Діти в школі."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article-suffix",
        "title": "Որոշիչ հոդ -ը/-ն — A1",
        "titleEn": "Definite Article Suffix -ə/-n — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль (-ը після приголосного, -ն після голосного) додається в кінець слова — так само, як у скандинавських чи болгарській мовах, а не окремим словом попереду.",
            "en": {
              "text": "The definite article (-ը after a consonant, -ն after a vowel) is attached at the end of the word — just like in the Scandinavian languages or Bulgarian, not as a separate word placed before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "գիրք (книга)",
                "գիրքը",
                "ця книга / книга (означ.)"
              ],
              [
                "տուն (дім)",
                "տունը",
                "цей дім / дім (означ.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Գիրքը սեղանին է։",
                "Книга на столі."
              ],
              [
                "Տունը մեծ է։",
                "Дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix",
        "title": "Հոգնակի թիվ (-եր/-ներ) — A1",
        "titleEn": "Plural Suffix (-er/-ner) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксами -եր (переважно з односкладовими словами) або -ներ (з іншими), доданими до основи.",
            "en": {
              "text": "The plural is formed with the suffixes -եր (mostly with one-syllable words) or -ներ (with others), added to the stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "տուն (дім)",
                "տներ",
                "доми"
              ],
              [
                "գիրք (книга)",
                "գրքեր",
                "книги"
              ],
              [
                "ուսուցիչ (вчитель)",
                "ուսուցիչներ",
                "вчителі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Սեղանին գրքեր կան։",
                "На столі є книги."
              ],
              [
                "Ուսուցիչները դասարանում են։",
                "Вчителі в класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Անձնանիշ ածանցներ (-ս/-դ/-ն) — A2",
        "titleEn": "Possessive Suffixes (-s/-d/-n) — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність часто виражається короткими суфіксами -ս (мій), -դ (твій), -ն (його/її), доданими прямо до іменника, замість окремого присвійного займенника.",
            "en": {
              "text": "Possession is often expressed with short suffixes -ս (my), -դ (your), -ն (his/her), attached directly to the noun instead of a separate possessive pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "գիրք (книга)",
                "գիրքս",
                "моя книга"
              ],
              [
                "տուն (дім)",
                "տունդ",
                "твій дім"
              ],
              [
                "քույր (сестра)",
                "քույրը/քրոջը",
                "її сестра"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Գիրքս սեղանին է։",
                "Моя книга на столі."
              ],
              [
                "Ուր է տունդ։",
                "Де твій дім?"
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-no-agreement",
        "title": "Ածականների անփոփոխելիություն — A1",
        "titleEn": "Invariable Adjectives — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники в вірменській не змінюються за родом, числом чи відмінком — та сама форма стоїть перед будь-яким іменником (риса, спільна з тюркськими мовами).",
            "en": {
              "text": "Armenian adjectives never change for gender, number, or case — the same form stands before any noun (a feature shared with Turkic languages)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "մեծ տուն (великий дім)",
                "մեծ տներ",
                "великі доми — без зміни форми"
              ],
              [
                "գեղեցիկ ծաղիկ (гарна квітка)",
                "գեղեցիկ ծաղիկներ",
                "гарні квіти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Մեծ տները սիրում եմ։",
                "Мені подобаються великі доми."
              ],
              [
                "Փոքր երեխան քնած է։",
                "Маленька дитина спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Համեմատության աստիճաններ — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом \"ավելի\" (більш) перед прикметником, найвищий — префіксом \"ամենա-\".",
            "en": {
              "text": "The comparative is formed with \"ավելի\" (more) before the adjective, the superlative with the prefix \"ամենա-\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "մեծ (великий)",
                "ավելի մեծ",
                "більший"
              ],
              [
                "մեծ (великий)",
                "ամենամեծ",
                "найбільший"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այս տունը ավելի մեծ է։",
                "Цей дім більший."
              ],
              [
                "Դա ամենալավ ֆիլմն է։",
                "Це найкращий фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-three-way",
        "title": "Ցուցական դերանուններ (եռակի) — A1",
        "titleEn": "Three-Way Demonstratives — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають трибічну систему за відстанню: այս (це, близько до мовця), այդ (те, близько до співрозмовника), այն (те, далеко від обох) — подібно до грузинської чи турецької.",
            "en": {
              "text": "Demonstratives have a three-way distance system: այս (this, near the speaker), այդ (that, near the listener), այն (that, far from both) — similar to Georgian or Turkish."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "այս գիրքը",
                "ця книга (біля мене)"
              ],
              [
                "այդ գիրքը",
                "та книга (біля тебе)"
              ],
              [
                "այն գիրքը",
                "он та книга (далеко)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այս տունը իմն է։",
                "Цей дім мій."
              ],
              [
                "Այն լեռը շատ բարձր է։",
                "Он та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Հարցական դերանուններ — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Основні питальні слова: ո՞վ (хто), ի՞նչ (що), ե՞րբ (коли), որտե՞ղ (де), ինչու՞ (чому), ինչպե՞ս (як) — усі зі знаком ՞.",
            "en": {
              "text": "The main question words: ո՞վ (who), ի՞նչ (what), ե՞րբ (when), որտե՞ղ (where), ինչու՞ (why), ինչպե՞ս (how) — all carrying the ՞ mark."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ո՞վ",
                "хто"
              ],
              [
                "ինչու՞",
                "чому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ո՞վ է սա։",
                "Хто це?"
              ],
              [
                "Ինչու՞ ես ուշացել։",
                "Чому ти запізнився?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-vor",
        "title": "Հարաբերական դերանուն \"որ\" — B1",
        "titleEn": "Relative Pronoun \"Vor\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник \"որ\" (який/що) вводить підрядне означальне речення й не змінюється за родом чи числом.",
            "en": {
              "text": "The relative pronoun \"որ\" (who/which/that) introduces a relative clause and doesn't change for gender or number."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Այն մարդը, որ եկավ, ընկերս է։",
                "Та людина, що прийшла, — мій друг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Գիրքը, որ կարդում ես, հետաքրքիր է։",
                "Книга, яку ти читаєш, цікава."
              ],
              [
                "Տունը, որտեղ ապրում եմ, հին է։",
                "Дім, де я живу, старий."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-declension",
        "title": "Անձնական դերանունների հոլովում — B1",
        "titleEn": "Personal Pronoun Declension — B1",
        "emoji": "🧍",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники теж відмінюються за відмінками, часто з окремими (не завжди прогнозованими) формами.",
            "en": {
              "text": "Personal pronouns also decline by case, often with special (not always predictable) forms."
            }
          },
          {
            "type": "formula",
            "title": "\"ես\" (я) — відмінювання",
            "rows": [
              [
                "називний",
                "ես",
                "я"
              ],
              [
                "родово-давальний",
                "ինձ / ինձի",
                "мене / мені"
              ],
              [
                "знахідний",
                "ինձ",
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
                "Նա ինձ տեսավ։",
                "Він побачив мене."
              ],
              [
                "Տուր ինձ գիրքը։",
                "Дай мені книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun",
        "title": "Դերադարձ դերանուն \"ինքն\" — B1",
        "titleEn": "Reflexive Pronoun \"Inqn\" — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"ինքը/ինքն\" (сам, самий) вказує на підмет і часто поєднується з присвійними суфіксами.",
            "en": {
              "text": "The reflexive pronoun \"ինքը/ինքն\" (self) refers back to the subject and often combines with possessive suffixes."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ինքս",
                "я сам"
              ],
              [
                "ինքդ",
                "ти сам"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես ինքս արեցի։",
                "Я зробив це сам."
              ],
              [
                "Նա ինքն է եկել։",
                "Він прийшов сам."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-deep",
        "title": "Կապեր (հետադրություններ) — A2",
        "titleEn": "Postpositions in Depth — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Вірменська вживає післяйменники (не прийменники), що стоять після іменника в родовому відмінку: վրա (на), մեջ (в), տակ (під), հետ (з).",
            "en": {
              "text": "Armenian uses postpositions (not prepositions), placed after the noun in the genitive case: վրա (on), մեջ (in), տակ (under), հետ (with)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "սեղանի վրա",
                "на столі"
              ],
              [
                "տան մեջ",
                "в домі"
              ],
              [
                "ընկերոջ հետ",
                "з другом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Գիրքը սեղանի վրա է։",
                "Книга на столі."
              ],
              [
                "Ես ընկերոջ հետ եմ։",
                "Я з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Քանակական թվականներ — A1",
        "titleEn": "Cardinal Numerals — A1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "մեկ",
                "1"
              ],
              [
                "երկու",
                "2"
              ],
              [
                "երեք",
                "3"
              ],
              [
                "տասը",
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
                "Ես երկու քույր ունեմ։",
                "У мене дві сестри."
              ],
              [
                "Տասը մարդ եկավ։",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Դասական թվականներ — A2",
        "titleEn": "Ordinal Numerals — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -երորդ (крім \"перший\" — առաջին).",
            "en": {
              "text": "Ordinal numerals are formed with the suffix -երորդ (except \"first\" — առաջին, which is irregular)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "առաջին",
                "перший"
              ],
              [
                "երկրորդ",
                "другий"
              ],
              [
                "երրորդ",
                "третій"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Սա իմ առաջին գիրքն է։",
                "Це моя перша книга."
              ],
              [
                "Նա երկրորդ տեղը զբաղեցրեց։",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-singular-agreement",
        "title": "Եզակի ձև թվականից հետո — A2",
        "titleEn": "Singular Noun After Numerals — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника іменник залишається в однині (спільна ареальна риса з турецькою, угорською тощо), а не переходить у множину.",
            "en": {
              "text": "After a numeral the noun stays in the singular (an areal feature shared with Turkish, Hungarian, etc.), rather than switching to the plural."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "երկու գիրք",
                "дві книги (буквально: два книга)"
              ],
              [
                "հինգ տուն",
                "п'ять домів (буквально: п'ять дім)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես երեք գիրք ունեմ։",
                "У мене є три книги."
              ],
              [
                "Այնտեղ հինգ մարդ կար։",
                "Там було п'ять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible",
        "title": "Ճկուն բառակարգ — B1",
        "titleEn": "Flexible Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — SOV (підмет-додаток-присудок), але завдяки відмінковим закінченням порядок може змінюватись для наголосу на певному слові.",
            "en": {
              "text": "The basic word order is SOV (subject-object-verb), but thanks to case endings, order can shift to emphasize a particular word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ես գիրք եմ կարդում։ (нейтр.)",
                "Я читаю книгу."
              ],
              [
                "Գիրք եմ կարդում ես։ (наголос на \"я\")",
                "Це я читаю книгу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Նամակը ես գրեցի։",
                "Листа написав я."
              ],
              [
                "Ես նամակը գրեցի։",
                "Я написав листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Ժխտման նրբերանգներ — B1",
        "titleEn": "Nuances of Negation — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка \"ոչ\" використовується для повного заперечення слова чи речення, тоді як префікс \"չ-\" приєднується безпосередньо до дієслова.",
            "en": {
              "text": "The negative particle \"ոչ\" is used for full negation of a word or clause, while the prefix \"չ-\" attaches directly to the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ոչ մի (жоден)",
                "Ոչ մի մարդ չեկավ։",
                "Жодна людина не прийшла."
              ],
              [
                "ոչինչ (нічого)",
                "Ես ոչինչ չգիտեմ։",
                "Я нічого не знаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես ոչինչ չեմ ուզում։",
                "Я нічого не хочу."
              ],
              [
                "Ոչ ոք չգիտի պատասխանը։",
                "Ніхто не знає відповіді."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Համադասական շաղկապներ — A2",
        "titleEn": "Coordinating Conjunctions — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "և / ու",
                "і, та"
              ],
              [
                "բայց",
                "але"
              ],
              [
                "կամ",
                "або"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես և դու ընկերներ ենք։",
                "Я і ти — друзі."
              ],
              [
                "Ուզում եմ գնալ, բայց ժամանակ չունեմ։",
                "Хочу піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Ստորադասական շաղկապներ — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "որովհետև",
                "тому що"
              ],
              [
                "եթե",
                "якщо"
              ],
              [
                "երբ",
                "коли"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես ուրախ եմ, որովհետև դու եկար։",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Երբ ազատ լինեմ, կզանգեմ։",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Դերադարձ բայեր — B1",
        "titleEn": "Reflexive Verbs — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дії часто виражаються за допомогою зворотного займенника \"ինքն\" з присвійним суфіксом або спеціальними зворотними дієсловами.",
            "en": {
              "text": "Reflexive actions are often expressed with the reflexive pronoun \"ինքն\" plus a possessive suffix, or with dedicated reflexive verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "լվանալ (мити)",
                "լվանալ ինքն իրեն",
                "митися"
              ],
              [
                "հագնել (одягати)",
                "հագնվել",
                "одягатися"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես լվանում եմ ինքս ինձ։",
                "Я миюся."
              ],
              [
                "Երեխան հագնվում է։",
                "Дитина одягається."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Անդեմ կառույցներ — B1",
        "titleEn": "Impersonal Constructions — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові конструкції часто утворюються з \"պետք է\" (потрібно) чи третьою особою однини без вираженого підмета.",
            "en": {
              "text": "Impersonal constructions are often formed with \"պետք է\" (it is necessary) or with the third person singular and no expressed subject."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Պետք է գնալ։",
                "Потрібно йти."
              ],
              [
                "Ցուրտ է։",
                "Холодно."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Պետք է շուտ արթնանալ։",
                "Треба рано вставати."
              ],
              [
                "Այստեղ շատ շոգ է։",
                "Тут дуже жарко."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Եղանակավորող բայեր (պետք է) — A2",
        "titleEn": "Modal Verbs (Petq E) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Պետք է\" (треба, потрібно) — незмінна модальна конструкція, що поєднується з дієсловом у формі, схожій на майбутній час, і виражає обов'язок.",
            "en": {
              "text": "\"Պետք է\" (must, need) is an invariant modal construction combined with the verb in a future-like form, expressing obligation."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Պետք է գնամ։",
                "Мені треба йти."
              ],
              [
                "Պետք է աշխատես։",
                "Тобі треба працювати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Պետք է սովորենք։",
                "Нам треба вчитися."
              ],
              [
                "Չի պետք ուշանալ։",
                "Не треба спізнюватися."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Քանակի բառեր — A2",
        "titleEn": "Quantifiers — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "շատ",
                "багато"
              ],
              [
                "քիչ",
                "мало"
              ],
              [
                "մի քանի",
                "декілька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես շատ գրքեր ունեմ։",
                "У мене багато книг."
              ],
              [
                "Մի քանի րոպե սպասիր։",
                "Почекай декілька хвилин."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Շաբաթվա օրեր — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "երկուշաբթի",
                "понеділок"
              ],
              [
                "շաբաթ",
                "субота"
              ],
              [
                "կիրակի",
                "неділя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այսօր երկուշաբթի է։",
                "Сьогодні понеділок."
              ],
              [
                "Կիրակի օրերին հանգստանում եմ։",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Ամիսներ և ամսաթվեր — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "հունվար",
                "січень"
              ],
              [
                "մայիս",
                "травень"
              ],
              [
                "դեկտեմբեր",
                "грудень"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Իմ ծնունդը մայիսին է։",
                "Мій день народження в травні."
              ],
              [
                "Այսօր հունվարի տասնն է։",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Ժամի ասում — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ժամը քանիսն է։",
                "Котра година?"
              ],
              [
                "Ժամը երեքն է։",
                "Третя година."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ժամը վեցին կհանդիպենք։",
                "Зустрінемось о шостій."
              ],
              [
                "Հիմա կեսօր է։",
                "Зараз полудень."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Դու/դուք դիմելաձևեր — A2",
        "titleEn": "Formal vs Informal Address — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "\"Դու\" — неформальне звертання до однієї особи, \"դուք\" — і множина, і ввічлива форма до однієї особи (як фр. vous чи рос. Вы).",
            "en": {
              "text": "\"Դու\" is the informal singular \"you\"; \"դուք\" is both the plural and the polite singular form (like French vous or Russian Вы)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Դու ինչպե՞ս ես։",
                "Як ти?"
              ],
              [
                "Դուք ինչպե՞ս եք։",
                "Як Ви? / Як ви (мн.)?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Դուք որտեղի՞ց եք։",
                "Звідки Ви?"
              ],
              [
                "Դու գալո՞ւ ես։",
                "Ти прийдеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Ողջույններ և արտահայտություններ — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Բարև ձեզ",
                "Вітаю Вас"
              ],
              [
                "Շնորհակալություն",
                "Дякую"
              ],
              [
                "Ցտեսություն",
                "До побачення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Բարև, ինչպե՞ս ես։",
                "Привіт, як ти?"
              ],
              [
                "Շատ շնորհակալ եմ։",
                "Дуже дякую."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Եղանակի արտահայտություններ — A2",
        "titleEn": "Weather Expressions — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Արևոտ է։",
                "Сонячно."
              ],
              [
                "Անձրև է գալիս։",
                "Іде дощ."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այսօր ցուրտ է։",
                "Сьогодні холодно."
              ],
              [
                "Ձյուն է գալիս։",
                "Іде сніг."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Կայուն արտահայտություններ — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "աչքիս լույսը",
                "світло моїх очей (про дорогу людину)"
              ],
              [
                "սիրտս մաքուր է",
                "моя совість чиста (букв. серце чисте)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Դու իմ աչքիս լույսն ես։",
                "Ти світло моїх очей."
              ],
              [
                "Սիրտս մաքուր է քո հանդեպ։",
                "Моя совість щодо тебе чиста."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Մակբայների կազմություն — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії утворюються від прикметника суфіксом -որեն або просто збігаються з прикметником.",
            "en": {
              "text": "Many manner adverbs are formed from the adjective with the suffix -որեն, or simply coincide with the adjective form."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "արագ (швидкий)",
                "արագ",
                "швидко"
              ],
              [
                "գեղեցիկ (гарний)",
                "գեղեցկորեն",
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
                "Նա արագ վազում է։",
                "Він швидко бігає."
              ],
              [
                "Երգում ես գեղեցկորեն։",
                "Ти гарно співаєш."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Բառակազմական ածանցներ — B1",
        "titleEn": "Word-Formation Suffixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "-ություն",
                "утворює абстрактні іменники (ազատ→ազատություն, вільний→свобода)"
              ],
              [
                "-ավոր",
                "утворює прикметники з ознакою (գույն→գունավոր, колір→кольоровий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ազատությունը կարևոր է։",
                "Свобода важлива."
              ],
              [
                "Սա գունավոր նկար է։",
                "Це кольоровий малюнок."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words",
        "title": "Բարդ բառեր — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова утворюються поєднанням двох коренів в одне слово, часто зі сполучним -ա-.",
            "en": {
              "text": "Compound words are formed by joining two roots into one word, often with the connecting vowel -ա-."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "գիրք + պահարան",
                "գրապահարան (книжкова шафа)"
              ],
              [
                "ձեռք + գործ",
                "ձեռագործ (ручна робота)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Գրապահարանում շատ գրքեր կան։",
                "У книжковій шафі багато книг."
              ],
              [
                "Սա ձեռագործ իր է։",
                "Це виріб ручної роботи."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Եղանակներ (տարվա) — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "գարուն",
                "весна"
              ],
              [
                "ամառ",
                "літо"
              ],
              [
                "աշուն",
                "осінь"
              ],
              [
                "ձմեռ",
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
                "Ամռանը շատ շոգ է։",
                "Влітку дуже жарко."
              ],
              [
                "Ես սիրում եմ աշունը։",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Փող և գներ — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ինչքա՞ն արժե։",
                "Скільки коштує?"
              ],
              [
                "Հազար դրամ է։",
                "Тисяча драмів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այս գիրքը երկու հազար դրամ արժե։",
                "Ця книга коштує дві тисячі драмів."
              ],
              [
                "Շատ թանկ է։",
                "Дуже дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Կարծիք հայտնելու արտահայտություններ — B1",
        "titleEn": "Expressing Opinions — B1",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Կարծում եմ, որ...",
                "Я думаю, що..."
              ],
              [
                "Իմ կարծիքով...",
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
                "Կարծում եմ, որ դու իրավացի ես։",
                "Я думаю, що ти правий."
              ],
              [
                "Իմ կարծիքով, սա լավ գաղափար է։",
                "На мою думку, це гарна ідея."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Ժամանակի հարաբերական արտահայտություններ — A2",
        "titleEn": "Relative Time Expressions — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "այսօր / վաղը / երեկ",
                "сьогодні / завтра / вчора"
              ],
              [
                "հիմա / հետո",
                "зараз / потім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Վաղը կհանդիպենք։",
                "Завтра зустрінемось."
              ],
              [
                "Հիմա զբաղված եմ։",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Անորոշ դերանուններ — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ինչ-որ մեկը",
                "хтось"
              ],
              [
                "ինչ-որ բան",
                "щось"
              ],
              [
                "ոչ ոք",
                "ніхто"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ինչ-որ մեկը զանգեց։",
                "Хтось подзвонив."
              ],
              [
                "Ես ինչ-որ բան լսեցի։",
                "Я щось почув."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Բացականչություններ — A1",
        "titleEn": "Exclamations — A1",
        "emoji": "❕",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Վա՜յ",
                "Ой!"
              ],
              [
                "Հրաշալի՜ է",
                "Чудово!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Վա՜յ, ինչ գեղեցիկ է։",
                "Ой, як гарно!"
              ],
              [
                "Հրաշալի՜ նորություն է։",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "\"Կա/չկա\" կառույց — A2",
        "titleEn": "Existential \"There is / isn't\" — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чи відсутність чогось виражається дієсловом \"կա\" (є, існує) або запереченням \"չկա\" (немає), яке ставиться після іменника.",
            "en": {
              "text": "The existence or absence of something is expressed with the verb \"կա\" (there is) or its negation \"չկա\" (there isn't), placed after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ջուր կա։",
                "Є вода."
              ],
              [
                "Ժամանակ չկա։",
                "Немає часу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Սեղանին հաց կա։",
                "На столі є хліб."
              ],
              [
                "Այստեղ խանութ չկա։",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Փաղաքշական ածանցներ — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі форми утворюються суфіксами -իկ, -ուկ, що надають слову значення \"маленький\" чи ласкавий відтінок.",
            "en": {
              "text": "Diminutive/affectionate forms are made with the suffixes -իկ, -ուկ, adding a \"small\" or endearing shade of meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "տուն (дім)",
                "տնակ",
                "будиночок"
              ],
              [
                "քույր (сестра)",
                "քուրիկ",
                "сестричка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Տնակը փոքր է, բայց հարմարավետ։",
                "Будиночок маленький, але затишний."
              ],
              [
                "Իմ քուրիկը դեռ փոքր է։",
                "Моя сестричка ще маленька."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns-standalone",
        "title": "Ինքնուրույն սեփականատիրական դերանուններ — A2",
        "titleEn": "Standalone Possessive Pronouns — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім присвійних суфіксів (-ս/-դ/-ն), існують і окремі присвійні займенники (իմ, քո, նրա), що стоять перед іменником.",
            "en": {
              "text": "Alongside the possessive suffixes (-ս/-դ/-ն), there are also separate possessive pronouns (իմ, քո, նրա) placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "իմ գիրքը",
                "моя книга"
              ],
              [
                "քո տունը",
                "твій дім"
              ],
              [
                "նրա ընկերը",
                "його/її друг"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Իմ ընտանիքը մեծ է։",
                "Моя сім'я велика."
              ],
              [
                "Նրա մեքենան կարմիր է։",
                "Його машина червона."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order-nounphrase",
        "title": "Ածական + գոյական կարգ — A2",
        "titleEn": "Adjective + Noun Order — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, а означений артикль (-ը/-ն) кріпиться до кінця цілої групи — тобто до останнього слова, а не до самого іменника.",
            "en": {
              "text": "The adjective always precedes the noun, and the definite article (-ը/-ն) attaches to the end of the whole phrase — that is, to the last word, not necessarily the noun itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "մեծ տունը",
                "великий дім (означ.)"
              ],
              [
                "շատ գեղեցիկ ծաղիկը",
                "дуже гарна квітка (означ.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Կարմիր մեքենան իմն է։",
                "Червона машина моя."
              ],
              [
                "Փոքրիկ շունը վազում է։",
                "Маленька собака бігає."
              ]
            ]
          }
        ]
      },
      {
        "id": "addressing-titles",
        "title": "Դիմելաձևեր և տիտղոսներ — A2",
        "titleEn": "Titles & Forms of Address — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "պարոն",
                "пан, містер"
              ],
              [
                "տիկին",
                "пані, місіс"
              ],
              [
                "օրիորդ",
                "панна"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Բարև, պարոն Սարգսյան։",
                "Привіт, пане Саргсян."
              ],
              [
                "Տիկին, ներեցեք։",
                "Пані, вибачте."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-particle-placement",
        "title": "՞ նշանի տեղադրում — B1",
        "titleEn": "Placement of the Question Mark ՞ — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Знак ՞ ставиться над наголошеним голосним саме того слова, яке є предметом питання, — це змінює зміст питання залежно від того, до якого слова він приєднаний.",
            "en": {
              "text": "The ՞ mark is placed over the stressed vowel of exactly the word being questioned — this changes the meaning of the question depending on which word it attaches to."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Դո՞ւ գնացիր խանութ։",
                "Ти пішов до магазину? (акцент: ти, а не хтось інший)"
              ],
              [
                "Դու խանո՞ւթ գնացիր։",
                "Ти пішов до магазину? (акцент: саме до магазину)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Նա տա՞նն է։",
                "Він вдома?"
              ],
              [
                "Դու դասագի՞րքն ես բերել։",
                "Ти приніс саме підручник?"
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
        "title": "Անկանոն բայեր — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних дієслів (գալ — приходити, տալ — давати, ուտել — їсти, լինել — бути/ставати) мають нерегулярні форми аориста й теперішнього часу, що варто заучувати окремо.",
            "en": {
              "text": "A handful of very common verbs (գալ — to come, տալ — to give, ուտել — to eat, լինել — to be/become) have irregular aorist and present forms that are best memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "գալ (приходити)",
                "եկա (я прийшов)",
                "неправильний аорист"
              ],
              [
                "ուտել (їсти)",
                "կերա (я з'їв)",
                "цілком інша основа"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ես երեկ եկա տուն ուշ։",
                "Я вчора прийшов додому пізно."
              ],
              [
                "Նա ամբողջը կերավ։",
                "Він з'їв усе."
              ]
            ]
          }
        ]
      },
      {
        "id": "eastern-western-armenian-divide",
        "title": "Արևելահայերեն և արևմտահայերեն — B2",
        "titleEn": "Eastern vs Western Armenian — B2",
        "emoji": "🌗",
        "sections": [
          {
            "type": "intro",
            "text": "Вірменська існує у двох стандартах: східновірменська (мова Вірменії, яку вивчають у цьому курсі) і західновірменська (мова діаспори — США, Ліван, Франція тощо), що різняться вимовою приголосних, частиною лексики й навіть дещо граматикою.",
            "en": {
              "text": "Armenian exists as two standards: Eastern Armenian (the language of Armenia, taught in this course) and Western Armenian (the language of the diaspora — US, Lebanon, France, etc.), which differ in consonant pronunciation, part of the vocabulary, and even some grammar."
            }
          },
          {
            "type": "table",
            "title": "Приклади розбіжностей",
            "rows": [
              [
                "Схід: դու ի՞նչ ես անում",
                "Захід: դուն ի՞նչ կ'ընես",
                "\"що ти робиш?\""
              ],
              [
                "Схід: բ, գ, դ дзвінкі",
                "Захід: ті ж літери оглушуються",
                "звукова система"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Այս դասընթացը արևելահայերեն է։",
                "Цей курс — східновірменською."
              ],
              [
                "Սփյուռքահայերը հաճախ արևմտահայերեն են խոսում։",
                "Вірмени діаспори часто говорять західновірменською."
              ]
            ]
          }
        ]
      },
      {
        "id": "triple-consonant-contrast",
        "title": "Եռակի բաղաձայնների հակադրություն — B2",
        "titleEn": "Triple Consonant Contrast — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Вірменська фонетика має рідкісну трибічну опозицію приголосних: дзвінкий — глухий непридиховий — глухий придиховий (напр. բ/պ/փ), що не має прямого відповідника в українській і потребує окремої практики слуху.",
            "en": {
              "text": "Armenian phonology has a rare three-way consonant opposition: voiced — voiceless unaspirated — voiceless aspirated (e.g. բ/պ/փ), which has no direct equivalent in Ukrainian and requires dedicated ear training."
            }
          },
          {
            "type": "table",
            "title": "Приклад тріади",
            "rows": [
              [
                "բ (дзвінкий b)",
                "պ (глухий непридих. p)",
                "փ (глухий придих. pʰ)"
              ],
              [
                "դ (дзвінкий d)",
                "տ (глухий непридих. t)",
                "թ (глухий придих. tʰ)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "պապ (дідусь) — հայրենի հնչյուն",
                "pap — власний вірменський звук"
              ],
              [
                "թութ (шовковиця)",
                "tʰutʰ — придиховий т"
              ]
            ]
          }
        ]
      }
    ]
  }
];
