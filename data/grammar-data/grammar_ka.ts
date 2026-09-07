// Vymova — data/grammar-data/grammar_ka.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KA: GrammarCategory[] = [
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
            "text": "Грузинська не має граматичного роду — ის означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Georgian has no grammatical gender — ის means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "მე (me)",
                "я"
              ],
              [
                "შენ (shen)",
                "ти"
              ],
              [
                "ის (is)",
                "він / вона / воно"
              ],
              [
                "ჩვენ (chven)",
                "ми"
              ],
              [
                "ისინი (isini)",
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
                "მე მასწავლებელი ვარ.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"ვარ/ხარ/არის\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка ставиться в кінці речення, після присудка, а не одразу після підмета.",
            "en": {
              "text": "The linking verb goes at the end of the sentence, after the predicate, rather than right after the subject."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + ვარ/ხარ/არის",
            "rows": [
              [
                "მე",
                "მასწავლებელი ვარ",
                "я вчитель"
              ],
              [
                "შენ",
                "მასწავლებელი ხარ",
                "ти вчитель"
              ],
              [
                "ის",
                "მასწავლებელია",
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
                "ის ექიმია.",
                "Він/вона лікар (скорочена форма -ია замість არის)."
              ]
            ]
          }
        ],
        "titleEn": "The Copula ვარ/ხარ/არის — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"არ\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка არ ставиться перед дієсловом.",
            "en": {
              "text": "The negative particle არ goes before the verb."
            }
          },
          {
            "type": "formula",
            "title": "არ + дієслово",
            "rows": [
              [
                "ვიცი",
                "არ ვიცი",
                "я знаю → я не знаю"
              ],
              [
                "მინდა",
                "არ მინდა",
                "я хочу → я не хочу"
              ],
              [
                "შემიძლია",
                "არ შემიძლია",
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
                "ის არ მოვიდა.",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with არ — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією, без зміни порядку слів чи додаткової частки.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "შენ დაღლილი ხარ.",
                "შენ დაღლილი ხარ?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "ის სახლშია.",
                "ის სახლშია?",
                "Він удома. → Він удома?"
              ],
              [
                "დრო გაქვს.",
                "დრო გაქვს?",
                "У тебе є час. → У тебе є час?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დრო გაქვს?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "verb-agreement",
        "title": "Узгодження дієслова з двома учасниками — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинське дієслово може одночасно узгоджуватися і з підметом, і з додатком через префікси/суфікси — це рідкісна риса, яку називають поліперсоналізмом.",
            "en": {
              "text": "A Georgian verb can agree with both the subject and the object at once through prefixes/suffixes — a rare feature called polypersonalism."
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
                "გნახე.",
                "Я тебе бачив (одне дієслово-форма кодує і \"я\", і \"тебе\")."
              ]
            ]
          }
        ],
        "titleEn": "Verb Agreement with Two Participants — A1"
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
        "id": "present-screeve",
        "title": "Row I: теперішній екран (screeve) — A1",
        "titleEn": "Series I: Present Screeve — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинська організує часи в групи форм — \"скріви\" (screeve). Теперішній скрів входить до Row I (недоконаного виду) і не вимагає ергативного відмінка підмета.",
            "en": {
              "text": "Georgian organizes tenses into groups of forms called \"screeves\". The present screeve belongs to Series I (imperfective) and does not trigger the ergative case on the subject."
            }
          },
          {
            "type": "formula",
            "title": "\"წერს\" (писати) — теперішній",
            "rows": [
              [
                "მე",
                "ვწერ",
                "я пишу"
              ],
              [
                "შენ",
                "წერ",
                "ти пишеш"
              ],
              [
                "ის",
                "წერს",
                "він/вона пише"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მე წიგნს ვკითხულობ.",
                "Я читаю книгу."
              ],
              [
                "ის სახლში მუშაობს.",
                "Він/вона працює вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect-screeve",
        "title": "Row I: минулий незавершений — A2",
        "titleEn": "Series I: Imperfect Screeve — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Незавершений минулий (Row I) описує тривалу або повторювану дію в минулому й, як і теперішній, не вимагає ергатива підмета.",
            "en": {
              "text": "The imperfect (Series I) describes an ongoing or habitual past action and, like the present, does not trigger the ergative subject case."
            }
          },
          {
            "type": "formula",
            "title": "\"წერს\" (писати) — незавершений минулий",
            "rows": [
              [
                "მე",
                "ვწერდი",
                "я писав (процес)"
              ],
              [
                "შენ",
                "წერდი",
                "ти писав"
              ],
              [
                "ის",
                "წერდა",
                "він/вона писав(-ла)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მე ყოველდღე ვწერდი.",
                "Я писав щодня."
              ],
              [
                "ის მუშაობდა, როცა დავურეკე.",
                "Він/вона працював(-ла), коли я подзвонив."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-screeve",
        "title": "Row II: майбутній екран — A2",
        "titleEn": "Series II: Future Screeve — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній скрів (Row II, доконаний вид) зазвичай утворюється доданням превербу (префікса виду) до теперішньої основи.",
            "en": {
              "text": "The future screeve (Series II, perfective) is usually formed by adding a preverb (aspect prefix) to the present stem."
            }
          },
          {
            "type": "formula",
            "title": "preverb + present stem",
            "rows": [
              [
                "მე",
                "დავწერ",
                "я напишу"
              ],
              [
                "შენ",
                "დაწერ",
                "ти напишеш"
              ],
              [
                "ის",
                "დაწერს",
                "він/вона напише"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ხვალ წერილს დავწერ.",
                "Завтра я напишу листа."
              ],
              [
                "ის აქ დარჩება.",
                "Він/вона залишиться тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "aorist-screeve",
        "title": "Row II: аорист (ергативний тригер) — B1",
        "titleEn": "Series II: Aorist Screeve (Ergative Trigger) — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист (Row II, доконаний минулий) — ключовий скрів, у якому підмет перехідного дієслова переходить в ергативний відмінок (-მა), а не залишається в називному.",
            "en": {
              "text": "The aorist (Series II, perfective past) is the key screeve where the subject of a transitive verb switches into the ergative case (-მა) instead of staying nominative."
            }
          },
          {
            "type": "formula",
            "title": "\"წერს\" (писати) — аорист",
            "rows": [
              [
                "მე",
                "დავწერე",
                "я написав"
              ],
              [
                "შენ",
                "დაწერე",
                "ти написав"
              ],
              [
                "მან",
                "დაწერა",
                "він/вона написав(-ла) — ЕРГАТИВ мან, не ის!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მან წიგნი წაიკითხა.",
                "Він/вона прочитав(-ла) книгу."
              ],
              [
                "ბავშვმა სურათი დახატა.",
                "Дитина намалювала картину."
              ]
            ]
          }
        ]
      },
      {
        "id": "optative-screeve",
        "title": "Row II: кон'юнктив/бажальний — B1",
        "titleEn": "Series II: Optative/Subjunctive Screeve — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Оптатив (кон'юнктив II ряду) виражає бажання, наказ у підрядному реченні або дію, яка ще не відбулася.",
            "en": {
              "text": "The optative (Series II subjunctive) expresses a wish, a command inside a subordinate clause, or an action that hasn't happened yet."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "მინდა, რომ დაწერო.",
                "Я хочу, щоб ти написав."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "უნდა, რომ ადრე წავიდე.",
                "Мені треба піти рано."
              ],
              [
                "ვისურვებ, კარგად იყო.",
                "Бажаю, щоб тобі було добре."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-screeve",
        "title": "Row III: перфект (евіденціальний) — B1",
        "titleEn": "Series III: Perfect Screeve (Evidential) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект (Row III) використовується, коли мовець не був свідком дії, а робить висновок за результатом — це евіденціальне значення. Підмет переходить у давальний відмінок (\"інверсія\").",
            "en": {
              "text": "The perfect (Series III) is used when the speaker didn't witness the action but infers it from the result — an evidential meaning. The subject switches to the dative case (\"inversion\")."
            }
          },
          {
            "type": "formula",
            "title": "\"წერს\" (писати) — перфект",
            "rows": [
              [
                "მე",
                "დამიწერია",
                "я, виявляється, написав"
              ],
              [
                "შენ",
                "დაგიწერია",
                "ти, виявляється, написав"
              ],
              [
                "მას",
                "დაუწერია",
                "він/вона, виявляється, написав(-ла) — ДАВАЛЬНИЙ мას"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მას წიგნი წაუკითხავს.",
                "Він/вона, виявляється, прочитав(-ла) книгу."
              ],
              [
                "კარი გაუღიათ.",
                "Двері, виявляється, відчинили."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect-screeve",
        "title": "Row III: давноминулий — B1",
        "titleEn": "Series III: Pluperfect Screeve — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий (Row III) виражає результат дії, що передував іншій минулій дії, з тим самим давальним підметом, що й перфект.",
            "en": {
              "text": "The pluperfect (Series III) expresses the result of an action prior to another past action, with the same dative subject as the perfect."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "მას წიგნი უკვე წაეკითხა.",
                "Він/вона вже була прочитала книгу (до того)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "როცა მოვედი, მას საჭმელი მოემზადებინა.",
                "Коли я прийшов, він/вона вже приготував(-ла) їжу."
              ],
              [
                "ჩვენ უკვე დაგვეწერა წერილი.",
                "Ми вже написали листа (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для 2-ї особи однини часто збігається з майбутньою основою або з окремою короткою формою; множина додає -ეთ.",
            "en": {
              "text": "The imperative for the 2nd person singular often coincides with the future stem or a special short form; the plural adds -ეთ."
            }
          },
          {
            "type": "formula",
            "title": "\"წერს\" (писати) — наказовий",
            "rows": [
              [
                "შენ",
                "დაწერე!",
                "Напиши!"
              ],
              [
                "თქვენ",
                "დაწერეთ!",
                "Напишіть!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "გააღე კარი!",
                "Відчини двері!"
              ],
              [
                "დაჯექით, გთხოვთ.",
                "Сідайте, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражає гіпотетичну умову й вводиться словом \"რომ\" (якщо) з дієсловом у скріві умовного способу.",
            "en": {
              "text": "The conditional mood expresses a hypothetical condition and is introduced with \"რომ\" (if) plus the verb in the conditional screeve."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "რომ მცოდნოდა, მოვიდოდა.",
                "Якби він знав, він прийшов би."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "რომ დრო მქონდეს, ვივლიდი.",
                "Якби я мав час, я б подорожував."
              ],
              [
                "ის მოვიდოდა, რომ შეეძლო.",
                "Він прийшов би, якби міг."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-classes-overview",
        "title": "Дієслівні класи (перехідні/медіальні) — B1",
        "titleEn": "Verb Classes Overview — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинські дієслова діляться на чотири класи: перехідні, неперехідні, медіальні (позначають стан, поводяться як перехідні, але без прямого додатка) та непрямі (з давальним підметом, як дієслова почуттів).",
            "en": {
              "text": "Georgian verbs fall into four classes: transitive, intransitive, medial (marking a state, behaving like transitives but with no direct object), and indirect (with a dative subject, like verbs of feeling)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "წერს (пише)",
                "перехідний"
              ],
              [
                "დგას (стоїть)",
                "медіальний"
              ],
              [
                "უყვარს (любить)",
                "непрямий, давальний підмет"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მას უყვარს მუსიკა.",
                "Йому/їй подобається музика (буквально: музика йому/їй)."
              ],
              [
                "ის ლამაზად დგას.",
                "Він/вона гарно стоїть."
              ]
            ]
          }
        ]
      },
      {
        "id": "preverbs-aspect",
        "title": "Преверби та вид дієслова — B1",
        "titleEn": "Preverbs & Verbal Aspect — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Преверби (да-, მი-, წა- тощо) додаються до основи дієслова й одночасно позначають доконаний вид і напрямок дії — подібно до слов'янських префіксів.",
            "en": {
              "text": "Preverbs (და-, მი-, წა-, etc.) attach to the verb stem and simultaneously mark perfective aspect and the direction of the action — similar to Slavic prefixes."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "წერს (пише, недок.)",
                "დაწერს (напише, док.)"
              ],
              [
                "დის (йде, недок.)",
                "წავიდა (пішов, док.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ის სახლში მივიდა.",
                "Він/вона прийшов(-ла) додому."
              ],
              [
                "წერილი გავგზავნე.",
                "Я відправив листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "version-vowels",
        "title": "Версійні голосні (і-/у-/а-) — B2",
        "titleEn": "Version Vowels (i-/u-/a-) — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Версійні префікси-голосні перед основою дієслова показують, на чию користь чи для кого виконується дія (об'єктна версія, і-/у-) без додаткового слова.",
            "en": {
              "text": "Version vowel prefixes before the verb stem show for whose benefit or on whose behalf an action is done (objective version, i-/u-) without a separate word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "წერს (пише)",
                "უწერს",
                "пише йому/їй (для нього/неї)"
              ],
              [
                "აკეთებს (робить)",
                "უკეთებს",
                "робить для нього/неї"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დედას წერილს უწერს.",
                "Він пише листа для мами."
              ],
              [
                "მას სახლს უკეთებენ.",
                "Йому/їй будують дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-imperative",
        "title": "Заперечний наказ \"ნუ\" — A2",
        "titleEn": "Negative Imperative \"Nu\" — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечного наказу вживають не \"არ\", а окрему частку \"ნუ\", яка ставиться перед дієсловом.",
            "en": {
              "text": "For the negative imperative, not \"არ\" but a dedicated particle \"ნუ\" is used, placed before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ნუ წერ!",
                "Не пиши!"
              ],
              [
                "ნუ ხარ ნერვიული.",
                "Не хвилюйся."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ნუ დაგვიანდები!",
                "Не запізнюйся!"
              ],
              [
                "ნუ გეშინია.",
                "Не бійся."
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
        "id": "split-ergativity-overview",
        "title": "Розщеплена ергативність — B1",
        "titleEn": "Split Ergativity Overview — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинська має \"розщеплену ергативність\": відмінок підмета перехідного дієслова залежить від скрів — називний у Row I, ергативний у Row II, давальний у Row III.",
            "en": {
              "text": "Georgian has \"split ergativity\": the case of a transitive verb's subject depends on the screeve — nominative in Series I, ergative in Series II, dative in Series III."
            }
          },
          {
            "type": "table",
            "title": "Приклади за рядами",
            "rows": [
              [
                "Row I: ის წერს.",
                "Він пише.",
                "називний ის"
              ],
              [
                "Row II: მან დაწერა.",
                "Він написав.",
                "ергатив მან"
              ],
              [
                "Row III: მას დაუწერია.",
                "Він, виявляється, написав.",
                "давальний მას"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ბავშვი თამაშობს.",
                "Дитина грається (Row I, назив.)."
              ],
              [
                "ბავშვმა თამაში დაასრულა.",
                "Дитина закінчила гру (Row II, ергатив)."
              ]
            ]
          }
        ]
      },
      {
        "id": "nominative-case",
        "title": "Називний відмінок — A1",
        "titleEn": "Nominative Case — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок (без закінчення або із закінченням -ი) — базова словникова форма й відмінок підмета в Row I.",
            "en": {
              "text": "The nominative case (no ending, or the ending -ი) is the basic dictionary form and the case of the subject in Series I."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "სახლი (дім)",
                "форма словника"
              ],
              [
                "ქალაქი (місто)",
                "форма словника"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "სახლი დიდია.",
                "Дім великий."
              ],
              [
                "ქალაქი ლამაზია.",
                "Місто гарне."
              ]
            ]
          }
        ]
      },
      {
        "id": "ergative-case",
        "title": "Ергативний відмінок (-მა) — B1",
        "titleEn": "Ergative Case (-Ma) — B1",
        "emoji": "🔺",
        "sections": [
          {
            "type": "intro",
            "text": "Ергативний відмінок (-მა) позначає підмет перехідного дієслова саме в аористі (Row II) — це один з найскладніших моментів для тих, хто вивчає грузинську.",
            "en": {
              "text": "The ergative case (-მა) marks the subject of a transitive verb specifically in the aorist (Series II) — one of the trickiest points for learners of Georgian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "კაცი (чоловік)",
                "კაცმა",
                "чоловік (ергатив, підмет аориста)"
              ],
              [
                "ქალი (жінка)",
                "ქალმა",
                "жінка (ергатив)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "კაცმა წერილი დაწერა.",
                "Чоловік написав листа."
              ],
              [
                "ქალმა კარი გააღო.",
                "Жінка відчинила двері."
              ]
            ]
          }
        ]
      },
      {
        "id": "dative-case",
        "title": "Давальний відмінок (-ს) — A2",
        "titleEn": "Dative Case (-S) — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (-ს) позначає непрямий додаток, прямий додаток у Row I/II та підмет у Row III (\"інверсія\").",
            "en": {
              "text": "The dative case (-ს) marks the indirect object, the direct object in Series I/II, and the subject in Series III (\"inversion\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დედა (мама)",
                "დედას",
                "мамі / маму (додаток)"
              ],
              [
                "ის (він/вона)",
                "მას",
                "йому/їй / він/вона (Row III)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დედას წიგნს ვაძლევ.",
                "Я даю мамі книгу."
              ],
              [
                "მას ეს მოსწონს.",
                "Йому/їй це подобається."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Родовий відмінок (-ის) — A2",
        "titleEn": "Genitive Case (-Is) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-ის) виражає належність і ставиться перед означуваним іменником, а не після нього.",
            "en": {
              "text": "The genitive case (-ის) expresses possession and is placed before the noun it modifies, not after it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დედა (мама)",
                "დედის სახლი",
                "мамин дім"
              ],
              [
                "მეგობარი (друг)",
                "მეგობრის წიგნი",
                "книга друга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დედის სახლი დიდია.",
                "Мамин дім великий."
              ],
              [
                "ეს მეგობრის მანქანაა.",
                "Це машина друга."
              ]
            ]
          }
        ]
      },
      {
        "id": "instrumental-case",
        "title": "Орудний відмінок (-ით) — B1",
        "titleEn": "Instrumental Case (-It) — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок (-ით) позначає знаряддя дії або засіб, а також вживається в порівняльних конструкціях.",
            "en": {
              "text": "The instrumental case (-ით) marks the tool or means of an action, and is also used in comparative constructions."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "კალამი (ручка)",
                "კალმით",
                "ручкою"
              ],
              [
                "მანქანა (машина)",
                "მანქანით",
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
                "კალმით ვწერ.",
                "Я пишу ручкою."
              ],
              [
                "მანქანით წავედი.",
                "Я поїхав машиною."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbial-case",
        "title": "Прислівниковий відмінок (-ად) — B1",
        "titleEn": "Adverbial Case (-Ad) — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівниковий відмінок (-ად) перетворює іменник чи прикметник на обставину — стан, у який щось перетворюється, або спосіб дії.",
            "en": {
              "text": "The adverbial case (-ად) turns a noun or adjective into a circumstantial phrase — a state something turns into, or a manner of action."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ექიმი (лікар)",
                "ექიმად გახდა",
                "став лікарем"
              ],
              [
                "კარგი (добрий)",
                "კარგად",
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
                "ის ექიმად გახდა.",
                "Він/вона став(-ла) лікарем."
              ],
              [
                "საქმე კარგად მიდის.",
                "Справа йде добре."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-case",
        "title": "Кличний відмінок (-ო) — A2",
        "titleEn": "Vocative Case (-O) — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок (-ო) використовується для прямого звертання до людини.",
            "en": {
              "text": "The vocative case (-ო) is used for direct address to a person."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დედა (мама)",
                "დედა!",
                "мамо!"
              ],
              [
                "გიორგი (Гіоргі)",
                "გიორგო!",
                "Гіоргі!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "შვილო, მოდი აქ!",
                "Дитино, іди сюди!"
              ],
              [
                "გიორგო, დაელოდე!",
                "Гіоргі, зачекай!"
              ]
            ]
          }
        ]
      },
      {
        "id": "polypersonal-agreement-deep",
        "title": "Поліперсоналізм у деталях — B2",
        "titleEn": "Polypersonal Agreement in Depth — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово має окремі префікси для об'єкта (მ-, გ-, ø-) і суфікси для підмета — одна дієслівна форма може кодувати одразу і \"хто робить\", і \"кому/кого\".",
            "en": {
              "text": "The verb has separate prefixes for the object (მ-, გ-, ø-) and suffixes for the subject — one verb form can encode both \"who does it\" and \"to/for whom\" at once."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "გნახე",
                "я тебе бачив (გ- = тебе)"
              ],
              [
                "მნახე",
                "ти мене бачив (მ- = мене)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "გიყვარხარ.",
                "Ти любиш (когось), кого люблять тебе (складна конструкція)."
              ],
              [
                "გელოდები.",
                "Я на тебе чекаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation",
        "title": "Множина (-ები) — A1",
        "titleEn": "Plural Formation (-Ebi) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина іменників утворюється суфіксом -ები, який приєднується до основи (без кінцевого -ი).",
            "en": {
              "text": "The plural of nouns is formed with the suffix -ები, attached to the stem (with the final -ი dropped)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "სახლი (дім)",
                "სახლები",
                "доми"
              ],
              [
                "წიგნი (книга)",
                "წიგნები",
                "книги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "სახლები დიდია.",
                "Доми великі."
              ],
              [
                "წიგნები მაგიდაზეა.",
                "Книги на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "definiteness-context",
        "title": "Означеність без артикля — A2",
        "titleEn": "Definiteness Without an Article — A2",
        "emoji": "🔎",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинська не має артиклів — означеність чи неозначеність слова випливає з контексту або порядку слів.",
            "en": {
              "text": "Georgian has no articles — definiteness or indefiniteness is inferred from context or word order."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "წიგნი მაგიდაზეა.",
                "Книга на столі. / (Ця) книга на столі."
              ],
              [
                "მაგიდაზე წიგნია.",
                "На столі є книга. (неозначена)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "კაცი მოვიდა.",
                "Прийшов чоловік."
              ],
              [
                "ეზოში ძაღლია.",
                "У дворі є собака."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions",
        "title": "Післяйменники — A2",
        "titleEn": "Postpositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинська вживає післяйменники (не прийменники), що приєднуються до іменника у відповідному відмінку: -ზე (на), -ში (в), -თან (біля).",
            "en": {
              "text": "Georgian uses postpositions (not prepositions), attached to the noun in the appropriate case: -ზე (on), -ში (in), -თან (near/at)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "მაგიდაზე",
                "на столі"
              ],
              [
                "სახლში",
                "у домі"
              ],
              [
                "მეგობართან",
                "у друга / біля друга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "წიგნი მაგიდაზეა.",
                "Книга на столі."
              ],
              [
                "ვარ მეგობართან.",
                "Я в друга."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-three-way",
        "title": "Вказівні займенники (трибічні) — A1",
        "titleEn": "Three-Way Demonstratives — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники розрізняють три ступені відстані: ეს (це, біля мовця), ეგ (те, біля співрозмовника), ის (те, далеко від обох) — як у вірменській чи турецькій.",
            "en": {
              "text": "Demonstratives distinguish three degrees of distance: ეს (this, near the speaker), ეგ (that, near the listener), ის (that, far from both) — like Armenian or Turkish."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ეს წიგნი",
                "ця книга (біля мене)"
              ],
              [
                "ეგ წიგნი",
                "та книга (біля тебе)"
              ],
              [
                "ის წიგნი",
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
                "ეს ჩემია.",
                "Це моє."
              ],
              [
                "ის მთა ძალიან მაღალია.",
                "Он та гора дуже висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-none",
        "title": "Прикметники — узгодження за відмінком — A2",
        "titleEn": "Adjective Case Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники не мають роду й числа, але узгоджуються з іменником у відмінку, коли стоять перед ним.",
            "en": {
              "text": "Adjectives have no gender or number, but they do agree with the noun in case when placed before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დიდი სახლი (назив.)",
                "великий дім"
              ],
              [
                "დიდმა კაცმა (ергатив)",
                "великий чоловік (ергатив)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დიდი სახლი მინდა.",
                "Я хочу великий дім."
              ],
              [
                "ლამაზმა გოგომ იმღერა.",
                "Гарна дівчина заспівала."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється префіксом უფრო (більш) перед прикметником, найвищий — префіксом ყველაზე (найбільш).",
            "en": {
              "text": "The comparative is formed with the prefix უფრო (more) before the adjective, the superlative with ყველაზე (most)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დიდი (великий)",
                "უფრო დიდი",
                "більший"
              ],
              [
                "დიდი (великий)",
                "ყველაზე დიდი",
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
                "ეს სახლი უფრო დიდია.",
                "Цей дім більший."
              ],
              [
                "ის ყველაზე ჭკვიანია.",
                "Він/вона найрозумніший(-а)."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal",
        "title": "Кількісні числівники — A1",
        "titleEn": "Cardinal Numerals — A1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "ერთი",
                "1"
              ],
              [
                "ორი",
                "2"
              ],
              [
                "სამი",
                "3"
              ],
              [
                "ათი",
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
                "ორი და მყავს.",
                "У мене дві сестри."
              ],
              [
                "ათი კაცი მოვიდა.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-vigesimal",
        "title": "Двадцяткова система рахунку — B1",
        "titleEn": "Vigesimal (Base-20) Number System — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Числа від 20 до 99 будуються на основі 20 (ოცი), подібно до французької чи баскської: 31 буквально \"20 і 11\".",
            "en": {
              "text": "Numbers from 20 to 99 are built on a base of 20 (ოცი), similar to French or Basque: 31 is literally \"20 and 11\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ოცი",
                "20"
              ],
              [
                "ოცდაათი",
                "30 (20+10)"
              ],
              [
                "ოცდათერთმეტი",
                "31 (20+11)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მე ოცდახუთი წლის ვარ.",
                "Мені двадцять п'ять років."
              ],
              [
                "ორმოცი (2×20) წიგნი ვნახე.",
                "Я побачив сорок книг."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-singular-agreement",
        "title": "Однина іменника після числівника — A2",
        "titleEn": "Singular Noun After Numerals — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника іменник залишається в однині, а не переходить у множину — спільна риса з вірменською, турецькою тощо.",
            "en": {
              "text": "After a numeral the noun stays in the singular, rather than switching to the plural — a feature shared with Armenian, Turkish, etc."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ორი წიგნი",
                "дві книги (буквально: два книга)"
              ],
              [
                "ხუთი სახლი",
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
                "სამი მანქანა მაქვს.",
                "У мене є три машини."
              ],
              [
                "იქ ხუთი კაცი იყო.",
                "Там було п'ять чоловіків."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun",
        "title": "Відносний займенник \"რომელი/რომ\" — B1",
        "titleEn": "Relative Pronoun \"Romeli/Rom\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник \"რომელი\" (який) або частка \"რომ\" вводить підрядне означальне речення.",
            "en": {
              "text": "The relative pronoun \"რომელი\" (which) or the particle \"რომ\" introduces a relative clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "კაცი, რომელიც მოვიდა, ჩემი მეგობარია.",
                "Чоловік, який прийшов, — мій друг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "წიგნი, რომელსაც კითხულობ, საინტერესოა.",
                "Книга, яку ти читаєш, цікава."
              ],
              [
                "ვიცი, რომ შენ მართალი ხარ.",
                "Я знаю, що ти правий."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "titleEn": "Interrogative Pronouns — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "ვინ",
                "хто"
              ],
              [
                "რა",
                "що"
              ],
              [
                "სად",
                "де"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ვინ ხარ?",
                "Хто ти?"
              ],
              [
                "სად ცხოვრობ?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun",
        "title": "Зворотний займенник \"თავი\" — B1",
        "titleEn": "Reflexive Pronoun \"Tavi\" — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"თავი\" (буквально \"голова\") із присвійним префіксом виражає \"сам себе\".",
            "en": {
              "text": "The reflexive pronoun \"თავი\" (literally \"head\") with a possessive prefix expresses \"oneself\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ჩემი თავი",
                "я сам(-а) (моя голова)"
              ],
              [
                "საკუთარი თავი",
                "себе самого"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "საკუთარ თავს ვუყურებ.",
                "Я дивлюся на себе."
              ],
              [
                "ის თავს იცავს.",
                "Він захищає себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "titleEn": "Possessive Pronouns — A1",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ჩემი",
                "мій"
              ],
              [
                "შენი",
                "твій"
              ],
              [
                "მისი",
                "його/її"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ეს ჩემი წიგნია.",
                "Це моя книга."
              ],
              [
                "მისი სახლი დიდია.",
                "Його/її дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexible",
        "title": "Ключовий порядок слів (SOV) — B1",
        "titleEn": "Flexible SOV Word Order — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — SOV (підмет-додаток-присудок), але завдяки відмінковим закінченням порядок часто змінюється для наголосу.",
            "en": {
              "text": "The basic word order is SOV (subject-object-verb), but thanks to case endings, order often shifts for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "კაცმა წიგნი წაიკითხა. (нейтр.)",
                "Чоловік прочитав книгу."
              ],
              [
                "წიგნი კაცმა წაიკითხა. (наголос на книзі)",
                "Книгу прочитав чоловік."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მე შენ გიყვარხარ.",
                "Я тебе люблю (з наголосом на тобі)."
              ],
              [
                "წერილს ვწერ.",
                "Я пишу листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Заперечення \"ვერ\" (неспроможність) — B1",
        "titleEn": "Negation \"Ver\" (Inability) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Крім არ (звичайне заперечення) і ნუ (заперечний наказ), є третя частка ვერ, яка означає неспроможність виконати дію.",
            "en": {
              "text": "Besides არ (regular negation) and ნუ (negative imperative), there's a third particle ვერ, meaning an inability to do something."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "არ მოვედი.",
                "Я не прийшов (не захотів)."
              ],
              [
                "ვერ მოვედი.",
                "Я не зміг прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ვერ ვხედავ.",
                "Я не бачу (не можу побачити)."
              ],
              [
                "ის ვერ მოვა.",
                "Він не зможе прийти."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-ordinal",
        "title": "Порядкові числівники — A2",
        "titleEn": "Ordinal Numerals — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються за допомогою префікса მე- та суфікса -ე, що обрамляють основу числівника.",
            "en": {
              "text": "Ordinal numerals are formed with the prefix მე- and the suffix -ე wrapped around the cardinal numeral stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ორი (2)",
                "მეორე",
                "другий"
              ],
              [
                "სამი (3)",
                "მესამე",
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
                "ეს ჩემი პირველი წიგნია.",
                "Це моя перша книга."
              ],
              [
                "ის მეორე ადგილზეა.",
                "Він на другому місці."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-possessive-chains",
        "title": "Ланцюжки родового відмінка — B1",
        "titleEn": "Chained Genitives — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька родових відмінків можуть накопичуватись один за одним для вираження вкладеної належності — кожен попередній іменник у родовому модифікує наступний.",
            "en": {
              "text": "Several genitive cases can stack one after another to express nested possession — each preceding noun in the genitive modifies the next."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "დედის დის შვილი",
                "дитина маминої сестри (племінник/племінниця)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ეს მეგობრის დედის სახლია.",
                "Це дім маминого друга (буквально: дім мами друга)."
              ],
              [
                "მასწავლებლის წიგნის ყდა ლურჯია.",
                "Обкладинка книги вчителя синя."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Сурядні сполучники — A2",
        "titleEn": "Coordinating Conjunctions — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "და",
                "і, та"
              ],
              [
                "მაგრამ",
                "але"
              ],
              [
                "ან",
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
                "მე და შენ მეგობრები ვართ.",
                "Я і ти — друзі."
              ],
              [
                "მინდა წასვლა, მაგრამ დრო არ მაქვს.",
                "Хочу піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Підрядні сполучники — B1",
        "titleEn": "Subordinating Conjunctions — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "რადგან",
                "тому що"
              ],
              [
                "თუ",
                "якщо"
              ],
              [
                "როცა",
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
                "გახარებული ვარ, რადგან მოხვედი.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "როცა თავისუფალი ვიქნები, დაგირეკავ.",
                "Коли буду вільний, подзвоню тобі."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні конструкції \"უნდა\" — A2",
        "titleEn": "Modal Constructions \"Unda\" — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"უნდა\" (треба, потрібно) — незмінна модальна частка, що поєднується з дієсловом у формі, схожій на кон'юнктив, і виражає обов'язок чи намір.",
            "en": {
              "text": "\"უნდა\" (must, need) is an invariant modal particle combined with the verb in a subjunctive-like form, expressing obligation or intention."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "უნდა წავიდე.",
                "Мені треба йти."
              ],
              [
                "უნდა იმუშაო.",
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
                "უნდა ვისწავლოთ.",
                "Нам треба вчитися."
              ],
              [
                "არ უნდა დაიგვიანო.",
                "Не варто спізнюватися."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-constructions",
        "title": "Безособові конструкції — B1",
        "titleEn": "Impersonal Constructions — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові конструкції часто передають погоду чи стан без вираженого підмета, дієслово стоїть у третій особі однини.",
            "en": {
              "text": "Impersonal constructions often express weather or a state with no expressed subject, the verb standing in the third person singular."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ცივა.",
                "Холодно."
              ],
              [
                "წვიმს.",
                "Йде дощ."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დღეს ცხელა.",
                "Сьогодні жарко."
              ],
              [
                "გვიან არის.",
                "Пізно."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Кількісні слова — A2",
        "titleEn": "Quantifiers — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "ბევრი",
                "багато"
              ],
              [
                "ცოტა",
                "мало"
              ],
              [
                "რამდენიმე",
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
                "ბევრი წიგნი მაქვს.",
                "У мене багато книг."
              ],
              [
                "რამდენიმე წუთი დამელოდე.",
                "Почекай мене декілька хвилин."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Дні тижня — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "ორშაბათი",
                "понеділок"
              ],
              [
                "შაბათი",
                "субота"
              ],
              [
                "კვირა",
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
                "დღეს ორშაბათია.",
                "Сьогодні понеділок."
              ],
              [
                "კვირას ვისვენებ.",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Місяці та дати — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "იანვარი",
                "січень"
              ],
              [
                "მაისი",
                "травень"
              ],
              [
                "დეკემბერი",
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
                "ჩემი დაბადების დღე მაისშია.",
                "Мій день народження в травні."
              ],
              [
                "დღეს იანვრის ათია.",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Годинник (говорити про час) — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "რომელი საათია?",
                "Котра година?"
              ],
              [
                "სამი საათია.",
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
                "ექვს საათზე შევხვდებით.",
                "Зустрінемось о шостій."
              ],
              [
                "ახლა შუადღეა.",
                "Зараз полудень."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Ти/Ви — форми звертання — A2",
        "titleEn": "Formal vs Informal Address — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "\"შენ\" — неформальне звертання до однієї особи, \"თქვენ\" — множина й ввічлива форма до однієї особи, як у французькій vous.",
            "en": {
              "text": "\"შენ\" is the informal singular \"you\"; \"თქვენ\" is both the plural and the polite singular form, like French vous."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "შენ როგორ ხარ?",
                "Як ти?"
              ],
              [
                "თქვენ როგორ ხართ?",
                "Як Ви?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "თქვენ საიდან ხართ?",
                "Звідки Ви?"
              ],
              [
                "შენ როდის მოხვალ?",
                "Коли ти прийдеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Привітання та фрази — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "გამარჯობა",
                "Привіт"
              ],
              [
                "მადლობა",
                "Дякую"
              ],
              [
                "ნახვამდის",
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
                "გამარჯობა, როგორ ხარ?",
                "Привіт, як ти?"
              ],
              [
                "დიდი მადლობა.",
                "Велике дякую."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Погода — вирази — A2",
        "titleEn": "Weather Expressions — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "მზიანია.",
                "Сонячно."
              ],
              [
                "წვიმს.",
                "Дощить."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დღეს ცივა.",
                "Сьогодні холодно."
              ],
              [
                "თოვს.",
                "Іде сніг."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Стійкі вирази — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "გულზე მიდგას",
                "припадає до душі (буквально: підходить до серця)"
              ],
              [
                "თვალები გაუბრწყინდა",
                "очі засяяли (від радості)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ეს სიმღერა გულზე მიდგება.",
                "Ця пісня припадає мені до душі."
              ],
              [
                "საჩუქარზე თვალები გაუბრწყინდა.",
                "Від подарунка в неї заблищали очі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Утворення прислівників — A2",
        "titleEn": "Adverb Formation — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються прислівниковим відмінком (-ად) від прикметника.",
            "en": {
              "text": "Manner adverbs are often formed with the adverbial case (-ად) from the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "სწრაფი (швидкий)",
                "სწრაფად",
                "швидко"
              ],
              [
                "ლამაზი (гарний)",
                "ლამაზად",
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
                "ის სწრაფად დარბის.",
                "Він швидко бігає."
              ],
              [
                "მღერი ლამაზად.",
                "Ти співаєш гарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Словотвірні суфікси — B1",
        "titleEn": "Word-Formation Suffixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "-oba",
                "утворює абстрактні іменники (თავისუფალი→თავისუფლება, вільний→свобода)"
              ],
              [
                "-იან-",
                "утворює прикметники з ознакою (ფერი→ფერიანი, колір→кольоровий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "თავისუფლება მნიშვნელოვანია.",
                "Свобода важлива."
              ],
              [
                "ეს ფერიანი სურათია.",
                "Це кольоровий малюнок."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-words",
        "title": "Складні слова — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова утворюються поєднанням двох коренів в одне слово без окремого сполучного звука.",
            "en": {
              "text": "Compound words are formed by joining two roots into one word without a separate connecting sound."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "წიგნის + თარო",
                "წიგნსაცავი (книгосховище)"
              ],
              [
                "ხელი + საქმე",
                "ხელსაქმე (рукоділля)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "წიგნსაცავში ბევრი წიგნია.",
                "У книгосховищі багато книг."
              ],
              [
                "ხელსაქმეს ვაკეთებ.",
                "Я займаюся рукоділлям."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року — A1",
        "titleEn": "Seasons — A1",
        "emoji": "🍂",
        "sections": [
          {
            "type": "table",
            "title": "Пори року",
            "rows": [
              [
                "გაზაფხული",
                "весна"
              ],
              [
                "ზაფხული",
                "літо"
              ],
              [
                "შემოდგომა",
                "осінь"
              ],
              [
                "ზამთარი",
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
                "ზაფხულში ცხელა.",
                "Влітку жарко."
              ],
              [
                "შემოდგომა მიყვარს.",
                "Я люблю осінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Гроші та ціни — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "რა ღირს?",
                "Скільки коштує?"
              ],
              [
                "ათი ლარი ღირს.",
                "Коштує десять ларі."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ეს წიგნი ოცი ლარი ღირს.",
                "Ця книга коштує двадцять ларі."
              ],
              [
                "ძალიან ძვირია.",
                "Дуже дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Вираження думки — B1",
        "titleEn": "Expressing Opinions — B1",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "მე მგონია, რომ...",
                "Я думаю, що..."
              ],
              [
                "ჩემი აზრით...",
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
                "მე მგონია, რომ შენ მართალი ხარ.",
                "Я думаю, що ти правий."
              ],
              [
                "ჩემი აზრით, ეს კარგი იდეაა.",
                "На мою думку, це гарна ідея."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Відносні вирази часу — A2",
        "titleEn": "Relative Time Expressions — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დღეს / ხვალ / გუშინ",
                "сьогодні / завтра / вчора"
              ],
              [
                "ახლა / მერე",
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
                "ხვალ შევხვდებით.",
                "Завтра зустрінемось."
              ],
              [
                "ახლა დაკავებული ვარ.",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ვიღაც",
                "хтось"
              ],
              [
                "რაღაც",
                "щось"
              ],
              [
                "არავინ",
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
                "ვიღაცამ დამირეკა.",
                "Хтось мені подзвонив."
              ],
              [
                "რაღაც გავიგონე.",
                "Я щось почув."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A1",
        "titleEn": "Exclamations — A1",
        "emoji": "❕",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ვაშ!",
                "Ой!"
              ],
              [
                "საოცარია!",
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
                "ვაშ, რა ლამაზია!",
                "Ой, як гарно!"
              ],
              [
                "საოცარი ამბავია!",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція \"є/немає\" — A2",
        "titleEn": "Existential \"There is / isn't\" — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається дієсловом \"არის\" (є) або запереченням \"არ არის\" (немає), яке ставиться після іменника.",
            "en": {
              "text": "The existence of something is expressed with the verb \"არის\" (there is) or its negation \"არ არის\" (there isn't), placed after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "წყალი არის.",
                "Є вода."
              ],
              [
                "დრო არ არის.",
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
                "მაგიდაზე პური არის.",
                "На столі є хліб."
              ],
              [
                "აქ მაღაზია არ არის.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі форми утворюються суфіксами -უნა, -იკო, що надають слову ласкавого відтінку.",
            "en": {
              "text": "Diminutive/affectionate forms are made with the suffixes -უნა, -იკო, adding an endearing shade of meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დედა (мама)",
                "დედუნა",
                "матуся"
              ],
              [
                "გიორგი (Гіоргі)",
                "გიორგიკო",
                "Гіоргі (ласк.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "დედუნავ, მოდი აქ!",
                "Матусю, іди сюди!"
              ],
              [
                "ჩემი გიორგიკო დიდი გახდა.",
                "Мій Гіоргі виріс."
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
        "id": "mkhedruli-alphabet",
        "title": "Алфавіт мхедрулі — B1",
        "titleEn": "The Mkhedruli Alphabet — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинська використовує власний, унікальний алфавіт мхедрулі (33 літери), що не має великих і малих літер узагалі — усі літери завжди однакової форми.",
            "en": {
              "text": "Georgian uses its own unique Mkhedruli alphabet (33 letters), which has no uppercase/lowercase distinction at all — every letter always has one form."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "საქართველო",
                "Грузія — з великої літери в перекладі, але не в оригіналі"
              ],
              [
                "თბილისი",
                "Тбілісі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "მე საქართველოში ვცხოვრობ.",
                "Я живу в Грузії."
              ],
              [
                "თბილისი ლამაზი ქალაქია.",
                "Тбілісі — гарне місто."
              ]
            ]
          }
        ]
      },
      {
        "id": "consonant-clusters",
        "title": "Складні збіги приголосних — B2",
        "titleEn": "Complex Consonant Clusters — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Грузинська відома надзвичайно складними збігами приголосних без жодного голосного між ними — деякі слова містять до 6-8 приголосних поспіль.",
            "en": {
              "text": "Georgian is known for extremely complex consonant clusters with no vowel between them — some words contain up to 6-8 consonants in a row."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "გვფრცქვნი",
                "ти нас обчищаєш (8 приголосних поспіль)"
              ],
              [
                "მწვრთნელი",
                "тренер"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ჩვენი მწვრთნელი კარგია.",
                "Наш тренер хороший."
              ],
              [
                "ეს სიტყვა ძნელი გამოსათქმელია.",
                "Це слово важко вимовити."
              ]
            ]
          }
        ]
      },
      {
        "id": "suppletive-irregular-verbs",
        "title": "Суплетивні дієслова (іти/приходити) — B1",
        "titleEn": "Suppletive Irregular Verbs — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова руху, як \"іти\", використовують зовсім різні корені залежно від виду й напрямку (суплетивізм) — це варто заучувати як окремі слова, а не форми одного дієслова.",
            "en": {
              "text": "Motion verbs like \"to go\" use entirely different roots depending on aspect and direction (suppletion) — best memorized as separate words rather than forms of one verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "დის (йде, недоконаний, зараз)",
                "სვლა — корінь \"ходити\""
              ],
              [
                "წავიდა (пішов, доконаний, минулий)",
                "სვლა — інший корінь того ж значення"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ის სკოლაში დადის.",
                "Він/вона ходить до школи (щодня)."
              ],
              [
                "ის სკოლაში წავიდა.",
                "Він/вона пішов(-ла) до школи (одноразово)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
