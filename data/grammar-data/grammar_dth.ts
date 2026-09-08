// Vymova — data/grammar-data/grammar_dth.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DTH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійська, мова, створена лінгвістом Девідом Дж. Петерсоном для \"Гри престолів\", відображає культуру кочового народу вершників — граматика й лексика тісно пов'язані з життям у степу.",
            "en": {
              "text": "Dothraki, created by linguist David J. Peterson for Game of Thrones, reflects the culture of a nomadic horse-riding people — its grammar and vocabulary are closely tied to life on the steppe."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (однина)",
            "rows": [
              [
                "я",
                "anha"
              ],
              [
                "ти",
                "yer"
              ],
              [
                "він / вона / воно",
                "me"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (singular)"
            }
          },
          {
            "type": "note",
            "text": "Дотракійці у творі не мають власної писемності — Джордж Р. Р. Мартін і Девід Дж. Петерсон свідомо розробляли дотракійську як усну мову.",
            "en": {
              "text": "The Dothraki, in the story, have no writing system of their own — George R. R. Martin and David J. Peterson deliberately developed Dothraki as a purely oral language."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be-zero-copula",
        "title": "Ототожнення без окремого дієслова \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійська не потребує окремого дієслова \"бути\" для ототожнення чи опису якості — займенник і присудок просто стоять поруч.",
            "en": {
              "text": "Dothraki needs no separate \"to be\" verb for identity or description statements — the pronoun and the predicate simply stand next to each other."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + присудок (без дієслова)",
            "rows": [
              [
                "Anha",
                "vezhven.",
                "я чоловік"
              ],
              [
                "Me",
                "asshekh.",
                "він/вона гарний(-а)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha khal.",
                "Я хал (вождь)."
              ]
            ]
          }
        ],
        "titleEn": "Identity Statements Without a \"To Be\" Verb — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"vo...qoy\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення обгортає дієслово: частка vo ставиться перед ним, а qoy (чи m після голосної) — після нього.",
            "en": {
              "text": "Negation wraps around the verb: the particle vo goes before it, and qoy (or m after a vowel) after it."
            }
          },
          {
            "type": "formula",
            "title": "vo + дієслово + qoy",
            "rows": [
              [
                "Anha adakhak.",
                "Anha vo adakhak qoy.",
                "Я їм. → Я не їм."
              ],
              [
                "Yer laz.",
                "Yer vo laz qoy.",
                "Ти можеш. → Ти не можеш."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha vo zalanek qoy.",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Vo...Qoy — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"hash\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються часткою hash на самому початку речення, перед підметом.",
            "en": {
              "text": "Yes/no questions are formed with the particle hash at the very start of the sentence, before the subject."
            }
          },
          {
            "type": "formula",
            "title": "Hash + твердження?",
            "rows": [
              [
                "Yer laz.",
                "Hash yer laz?",
                "Ти можеш. → Ти можеш?"
              ],
              [
                "Me adakhak.",
                "Hash me adakhak?",
                "Він їсть. → Він їсть?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hash yer vazhak?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Hash — A1"
      },
      {
        "id": "case-system-overview",
        "title": "П'ять відмінків замість прийменників — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість численних прийменників дотракійська має п'ять відмінків, позначених суфіксами: називний, знахідний, родовий, алативний (\"до/куди\") й аблативний (\"від/звідки\") — типова риса для мови кочового народу, орієнтованого на рух степом.",
            "en": {
              "text": "Instead of many prepositions, Dothraki has five cases marked by suffixes: nominative, accusative, genitive, allative (\"to/toward\"), and ablative (\"from/away from\") — a typical trait for the language of a nomadic people oriented around movement across the steppe."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh (кінь)",
                "vezhaan",
                "до коня (алатив)"
              ],
              [
                "vezh (кінь)",
                "vezhoon",
                "від коня (аблатив)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha zigereni vezhaan.",
                "Я йду до коня."
              ]
            ]
          }
        ],
        "titleEn": "Five Cases Instead of Prepositions — A2"
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
        "id": "perfect-tense",
        "title": "Перфект (стан результату) — B1",
        "titleEn": "Perfect Tense (Resultant State) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект підкреслює актуальний результат минулої дії й будується допоміжною конструкцією поряд з дієприкметниковою формою.",
            "en": {
              "text": "The perfect emphasizes the present result of a past action and is built with an auxiliary construction alongside a participle-like form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha adakhat majin.",
                "Я вже поїв (і досі ситий)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me zigereni majin.",
                "Він/вона вже пішов(-ла)."
              ],
              [
                "Khalasar vazhat majin.",
                "Халасар уже вирушив."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-tense",
        "title": "Теперішній час — A1",
        "titleEn": "Present Tense — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова.",
            "en": {
              "text": "The present tense is formed with personal endings added to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "\"adakh\" (їсти) — теперішній",
            "rows": [
              [
                "anha",
                "adakhak",
                "я їм"
              ],
              [
                "yer",
                "adakhi",
                "ти їси"
              ],
              [
                "me",
                "adakh",
                "він/вона їсть"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha zigereni.",
                "Я йду."
              ],
              [
                "Me lekhi.",
                "Він/вона говорить."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "Минулий час — A2",
        "titleEn": "Past Tense — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється власним рядом особових закінчень, доданих до основи дієслова, відмінних від теперішнього часу.",
            "en": {
              "text": "The past tense is formed with its own set of personal endings added to the verb stem, distinct from the present."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha adakhak → Anha adakhat.",
                "Я їм. → Я їв."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me zigereni majin.",
                "Він/вона вчора пішов(-ла)."
              ],
              [
                "Anha lekhat.",
                "Я сказав."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "titleEn": "Future Tense — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжною конструкцією перед дієсловом, яка вказує на дію, що ще не відбулася.",
            "en": {
              "text": "The future tense is formed with an auxiliary construction before the verb, indicating an action that hasn't happened yet."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha adakhak asqoy.",
                "Я їстиму (незабаром)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khalasar zigereni asqoy.",
                "Халасар (плем'я) незабаром вирушить."
              ],
              [
                "Anha lekhak yeraan asqoy.",
                "Я скажу тобі незабаром."
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
            "text": "Наказ до однієї особи — це переважно гола основа дієслова, без окремого займенника чи закінчення.",
            "en": {
              "text": "A command to one person is mostly just the bare verb stem, with no separate pronoun or ending."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Zigere!",
                "Іди!"
              ],
              [
                "Adakh!",
                "Їж!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anna!",
                "Слухай!"
              ],
              [
                "Vosecchi!",
                "Тихо! (мовчи)"
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-imperative-nu",
        "title": "Заперечний наказ (nu) — A2",
        "titleEn": "Negative Imperative (Nu) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечного наказу вживають окрему частку nu перед дієсловом, а не звичайне подвійне заперечення vo...qoy.",
            "en": {
              "text": "For the negative imperative, the dedicated particle nu is used before the verb, rather than the regular vo...qoy double negation."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Zigere!",
                "Nu zigere!",
                "Іди! → Не йди!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nu adakh!",
                "Не їж!"
              ],
              [
                "Nu vitiheri!",
                "Не лякайся!"
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-aspect",
        "title": "Звичайна дія — B1",
        "titleEn": "Habitual Aspect — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, повторювана дія передається теперішнім часом у поєднанні з часовими прислівниками (\"завжди\", \"щодня\"), а не окремою граматичною формою.",
            "en": {
              "text": "A habitual, repeated action is conveyed with the present tense combined with time adverbs (\"always\", \"every day\"), rather than a separate grammatical form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha vazhak majin sekke.",
                "Я їжджу верхи щодня."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khalasar zigereni sekke.",
                "Халасар завжди йде (в русі)."
              ],
              [
                "Anha adakhak akka.",
                "Я завжди їм."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Зворотні дієслова — B1",
        "titleEn": "Reflexive Verbs — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотна дія виражається займенником, що вказує на самого мовця чи підмет, поставленим у знахідному відмінку після дієслова.",
            "en": {
              "text": "A reflexive action is expressed with a pronoun referring to the speaker or subject, placed in the accusative case after the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha adakhak anhaan.",
                "Я годую себе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me maan meaan.",
                "Він бачить себе."
              ],
              [
                "Yer laz yeraan.",
                "Ти можеш собі (допомогти)."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-laz",
        "title": "Модальне дієслово \"laz\" (могти) — A2",
        "titleEn": "Modal Verb \"Laz\" (Can) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово laz (могти) поєднується з дієсловом у формі, схожій на інфінітив, для вираження здатності.",
            "en": {
              "text": "The verb laz (can) combines with the verb in an infinitive-like form to express ability."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha laz vazhak.",
                "Я вмію їздити верхи."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yer laz zigerak?",
                "Ти можеш іти?"
              ],
              [
                "Me vo laz adakhak qoy.",
                "Він не може їсти."
              ]
            ]
          }
        ]
      },
      {
        "id": "desiderative-mood",
        "title": "Бажальний спосіб (\"хотіти\") — A2",
        "titleEn": "Desiderative Mood (\"Want To\") — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виконати дію виражається дієсловом \"хотіти\" плюс дієсловом у формі, схожій на інфінітив.",
            "en": {
              "text": "The desire to do something is expressed with the verb \"to want\" plus the verb in an infinitive-like form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha vitihak adakhak.",
                "Я хочу їсти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me vitihak zigerak.",
                "Він/вона хоче йти."
              ],
              [
                "Anha vo vitihak qoy lekhak.",
                "Я не хочу говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligative-mood",
        "title": "Модальність обов'язку — A2",
        "titleEn": "Obligative Mood — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок (\"треба\") виражається окремим словом-модалом перед дієсловом.",
            "en": {
              "text": "Obligation (\"must\") is expressed with a separate modal word before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha zalak zigerak.",
                "Мені треба йти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yer zalak annalak.",
                "Тобі треба слухати."
              ],
              [
                "Khalasar zalak vazhak.",
                "Халасар мусить рухатись."
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
            "text": "Умовне речення \"якщо\" вводиться часткою на початку умовної частини й окремою формою дієслова в головній частині.",
            "en": {
              "text": "A conditional \"if\" clause is introduced with a particle at the start of the condition, and a distinct verb form in the main clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Che yer laz, anha laz.",
                "Якщо ти можеш, я можу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Che anha zalak, anha zigerak.",
                "Якщо мені треба, я піду."
              ],
              [
                "Che me vitiheri, me nu zigere.",
                "Якщо він боїться, хай не йде."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-chaining-motion",
        "title": "Дієслова руху в ланцюжку — B1",
        "titleEn": "Motion Verb Chaining — B1",
        "emoji": "🐎",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова, пов'язані з верховою їздою та рухом степом (vazhak — їхати верхи), часто вживаються послідовно з іншим дієсловом, щоб уточнити мету пересування.",
            "en": {
              "text": "Verbs tied to horse-riding and steppe movement (vazhak — to ride) are often used in sequence with another verb to specify the purpose of the movement."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha vazhak adakhak.",
                "Я їду верхи, щоб поїсти (буквально: їду-їм)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khalasar vazhak fonak.",
                "Халасар їде верхи битися."
              ],
              [
                "Anha zigereni maan.",
                "Я йду подивитися на нього."
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
        "title": "Називний відмінок — A1",
        "titleEn": "Nominative Case — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок — базова словникова форма іменника й відмінок підмета речення.",
            "en": {
              "text": "The nominative case is the basic dictionary form of the noun and the case of the sentence's subject."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh (кінь)",
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
                "Vezh vazhi.",
                "Кінь біжить."
              ],
              [
                "Khal lekhi.",
                "Хал говорить."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-case",
        "title": "Знахідний відмінок (-∅/-s) — A2",
        "titleEn": "Accusative Case (-∅/-S) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок позначає прямий додаток дії, часто з власним закінченням, доданим до основи іменника.",
            "en": {
              "text": "The accusative case marks the direct object of an action, often with its own ending added to the noun stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha maan vezhes.",
                "Я бачу коня."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me adakh mareanes.",
                "Він їсть м'ясо."
              ],
              [
                "Anha maan yeri.",
                "Я бачу тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "genitive-case",
        "title": "Родовий відмінок — A2",
        "titleEn": "Genitive Case — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок виражає належність і ставиться після власника, перед означуваним іменником.",
            "en": {
              "text": "The genitive case expresses possession and is placed after the possessor, before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "khalasar khali",
                "халасар хала (плем'я вождя)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezh khali maan.",
                "Це кінь хала."
              ],
              [
                "Arakh vezhvi.",
                "Меч вершника."
              ]
            ]
          }
        ]
      },
      {
        "id": "allative-case",
        "title": "Алативний відмінок (\"до/куди\") — A2",
        "titleEn": "Allative Case (\"To/Toward\") — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Алативний відмінок відповідає на питання \"куди?\" і замінює прийменник \"до\" суфіксом на самому іменнику.",
            "en": {
              "text": "The allative case answers \"to where?\" and replaces the preposition \"to\" with a suffix on the noun itself."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vaes Dothrak",
                "Vaes Dothrakaan",
                "до Ваес Дотрак"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha zigereni khalasaraan.",
                "Я йду до халасару."
              ],
              [
                "Vezh vazhi haanaan.",
                "Кінь біжить до води."
              ]
            ]
          }
        ]
      },
      {
        "id": "ablative-case",
        "title": "Аблативний відмінок (\"від/звідки\") — A2",
        "titleEn": "Ablative Case (\"From/Away From\") — A2",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Аблативний відмінок відповідає на питання \"звідки?\" і замінює прийменник \"з/від\" суфіксом на іменнику.",
            "en": {
              "text": "The ablative case answers \"from where?\" and replaces the preposition \"from\" with a suffix on the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vaes Dothrak",
                "Vaes Dothrakoon",
                "з Ваес Дотрак"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha zigereni khalasaroon.",
                "Я йду з халасару."
              ],
              [
                "Me vazhi vezhoon.",
                "Він тікає від коня."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-grammatical-gender",
        "title": "Відсутність граматичного роду — A1",
        "titleEn": "No Grammatical Gender — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійська не має граматичного роду — той самий займенник me означає \"він\", \"вона\" і \"воно\".",
            "en": {
              "text": "Dothraki has no grammatical gender — the same pronoun me means \"he\", \"she\", and \"it\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "me vezhven / me arstakh",
                "він чоловік / вона жінка (та сама форма me)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me khal.",
                "Він хал."
              ],
              [
                "Me khaleesi.",
                "Вона халісі."
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-class-hard-soft",
        "title": "Клас іменників: \"твердий\"/\"м'який\" — B1",
        "titleEn": "Noun Class: \"Hard\"/\"Soft\" — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники поділяються на два типи відмінювання залежно від того, чи їхня словникова форма закінчується на приголосний (\"твердий\") чи голосний (\"м'який\") — це визначає, які саме суфікси відмінків вони отримують.",
            "en": {
              "text": "Nouns fall into two declension types depending on whether their dictionary form ends in a consonant (\"hard\") or a vowel (\"soft\") — this determines exactly which case suffixes they take."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh (твердий, закінч. на приголосний)",
                "один набір суфіксів"
              ],
              [
                "khaleesi (м'який, закінч. на голосний)",
                "інший набір суфіксів"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezhes maan.",
                "Він бачить коня (твердий клас)."
              ],
              [
                "Khaleesi maan.",
                "Він бачить халісі (м'який клас, інший суфікс)."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "titleEn": "Demonstratives — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hazi vezh",
                "цей кінь"
              ],
              [
                "haji vezh",
                "той кінь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hazi anha.",
                "Це моє."
              ],
              [
                "Haji ovray tih.",
                "Та гора висока."
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
                "anhoon",
                "мій"
              ],
              [
                "yeroon",
                "твій"
              ],
              [
                "meoon",
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
                "Vezh anhoon.",
                "Мій кінь."
              ],
              [
                "Arakh meoon tih.",
                "Його меч гострий."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-construction",
        "title": "Підрядне означальне речення — B1",
        "titleEn": "Relative Clause Construction — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне означальне речення вводиться відносною часткою, поставленою одразу після означуваного іменника.",
            "en": {
              "text": "A relative clause is introduced with a relative particle, placed right after the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezhven vosecchi zigereni",
                "чоловік, який мовчки йде"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezh anha maan tih.",
                "Кінь, якого я бачу, високий."
              ],
              [
                "Khal vosecchi lekhi shafki.",
                "Хал, що мовчить, мудрий."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні слова — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "hash mahrazh",
                "хто (буквально: який чоловік)"
              ],
              [
                "hazhes",
                "що"
              ],
              [
                "mae",
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
                "Hazhes yeri fin?",
                "Як тебе звати?"
              ],
              [
                "Mae yer zigereni?",
                "Куди ти йдеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun",
        "title": "Зворотний займенник — B1",
        "titleEn": "Reflexive Pronoun — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"себе/сам\" виражається тим самим особовим займенником, поставленим у знахідному відмінку.",
            "en": {
              "text": "The reflexive meaning \"self\" is expressed with the same personal pronoun, placed in the accusative case."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha maan anhaan.",
                "Я бачу себе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me lekh meaan.",
                "Він говорить сам собі."
              ],
              [
                "Yer atihat yeri?",
                "Ти сам себе поранив?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-base-six",
        "title": "Кількісні числівники — шісткова система — A2",
        "emoji": "🔢",
        "titleEn": "Cardinal Numerals — Base-6 System — A2",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійська рахує в шістковій (base-6) системі, а не в десятковій, — унікальна риса, продумана творцем мови для підкреслення чужості культури дотракійців.",
            "en": {
              "text": "Dothraki counts in base-6 rather than base-10 — a unique trait deliberately designed by the language's creator to underline how foreign Dothraki culture is."
            }
          },
          {
            "type": "table",
            "title": "1–6",
            "rows": [
              [
                "ha",
                "1"
              ],
              [
                "akat",
                "2"
              ],
              [
                "sen",
                "3"
              ],
              [
                "qokh",
                "6 (базове число системи)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha adakh akat maregi.",
                "Я з'їв два шматки м'яса."
              ],
              [
                "Vezhish qokh.",
                "Шість коней."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-locative",
        "title": "Просторові слова (замість прийменників) — A2",
        "titleEn": "Spatial Words (Instead of Prepositions) — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Крім відмінкових суфіксів, точніше просторове відношення (\"над\", \"під\") виражають окремими словами, що стоять перед іменником у відповідному відмінку.",
            "en": {
              "text": "Besides case suffixes, more precise spatial relations (\"above\", \"under\") are expressed with separate words placed before the noun in the appropriate case."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "oma vezhaan",
                "над конем"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Charvolen oma khalasaraan.",
                "Зірки над халасаром."
              ],
              [
                "Vezh sekke haanoon.",
                "Кінь біля води."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-svo",
        "title": "Базовий порядок слів SVO — A1",
        "titleEn": "Basic SVO Word Order — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), відмінкові суфікси дозволяють гнучкість, але SVO лишається нейтральним варіантом.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO); case suffixes allow flexibility, but SVO remains the neutral default."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha maan vezhes.",
                "Я бачу коня."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khal lekhi khaleesiaan.",
                "Хал говорить халісі."
              ],
              [
                "Khalasar vazhi Vaes Dothrakaan.",
                "Халасар їде до Ваес Дотрак."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Сурядні сполучники — A1",
        "titleEn": "Coordinating Conjunctions — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "ma",
                "і, та"
              ],
              [
                "oz",
                "але"
              ],
              [
                "hsatheis",
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
                "Anha ma yer.",
                "Я і ти."
              ],
              [
                "Anha vitihak zigerak, oz vo laz qoy.",
                "Хочу піти, але не можу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Підрядні сполучники — A2",
        "titleEn": "Subordinating Conjunctions — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "che",
                "якщо"
              ],
              [
                "majin",
                "коли/потім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Che yer zalak, anha rikak.",
                "Якщо тобі треба, я допоможу."
              ],
              [
                "Majin anha zigereni, me adakhak.",
                "Коли я піду, він їстиме."
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
                "saccheis",
                "багато"
              ],
              [
                "kishaan",
                "мало"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha vezhish saccheis.",
                "У мене багато коней."
              ],
              [
                "Haan kishaan.",
                "Мало води."
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
                "M'athchomaroon.",
                "Вітаю."
              ],
              [
                "Hajas!",
                "Будь сильним! (побажання)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "M'athchomaroon, zhey khal.",
                "Вітаю, о хале."
              ],
              [
                "Hajas, atchomar anni!",
                "Будь сильним, моє вітання!"
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
                "Shierak tih.",
                "Сонячно (буквально: зірка яскрава)."
              ],
              [
                "Ver.",
                "Вітряно."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Majin ver tih.",
                "Сьогодні дуже вітряно."
              ],
              [
                "Anha vazhak, che shierak tih.",
                "Я їздитиму верхи, якщо буде сонячно."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Дні та часові поняття кочівника — A2",
        "titleEn": "Nomadic Time Concepts — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "У кочовій культурі дотракійців немає фіксованого календарного тижня — час рахують циклами місяця й порами кочування, а не окремими днями тижня.",
            "en": {
              "text": "In Dothraki nomadic culture there's no fixed calendar week — time is counted by lunar cycles and migration seasons, not by individual weekdays."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "jalan atthirari anni",
                "мій сонячно-місячний час (термін для \"весілля\", метафора часу)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khalasar vazhi majin qora.",
                "Халасар рухається з місяцем."
              ],
              [
                "Anha zigereni majin jalan.",
                "Я піду з новим сонцем (днем)."
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
                "Anha vazhak yeraan.",
                "Я поїду з тобою (готовність до вірності)."
              ],
              [
                "Ase tokik!",
                "Хай так буде!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ase tokik, zhey khal!",
                "Хай так буде, о хале!"
              ],
              [
                "Anha vazhak yeraan majin oakah.",
                "Я поїду з тобою назавжди."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-formation",
        "title": "Прислівники — A2",
        "titleEn": "Adverbs — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "shafka",
                "мудро"
              ],
              [
                "hajke",
                "сильно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me lekh shafka.",
                "Він говорить мудро."
              ],
              [
                "Vezh vazhi hajke.",
                "Кінь біжить сильно (потужно)."
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
                "-oon",
                "присвійний суфікс"
              ],
              [
                "-i / -ish",
                "маркер множини"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezhish anhoon.",
                "Мої коні."
              ],
              [
                "Arakhqoyi vezhvi.",
                "Мечі вершників."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-lunar-calendar",
        "title": "Місячний календар — B1",
        "titleEn": "The Lunar Calendar — B1",
        "emoji": "🌙",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійці рахують місяці за фазами місяця (qora), а не за фіксованими григоріанськими назвами, — ще одна риса, пов'язана з кочовим способом життя.",
            "en": {
              "text": "The Dothraki count months by the phases of the moon (qora) rather than fixed Gregorian names — another trait tied to nomadic life."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "qora ha",
                "перший місяць (циклу)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khalasar dothrak qora akat.",
                "Халасар кочує два місяці."
              ],
              [
                "Anha zigereni qora sen.",
                "Я піду через три місяці."
              ]
            ]
          }
        ]
      },
      {
        "id": "greeting-response-hajas",
        "title": "Відповідь на привітання (\"Hajas\") — A2",
        "titleEn": "Response to a Greeting (\"Hajas\") — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Замість універсальної фрази-відповіді типу \"добре, дякую\" дотракійці часто відповідають словом hajas (\"будь сильним\") — побажання сили, а не звичайна ввічлива формула.",
            "en": {
              "text": "Instead of a universal reply like \"fine, thanks\", the Dothraki often respond with hajas (\"be strong\") — a wish of strength, not an ordinary polite formula."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "M'athchomaroon! — Hajas!",
                "Вітаю! — Будь сильним!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Zhey khal, hajas!",
                "О хале, будь сильним!"
              ],
              [
                "Hajas, zhey khaleesi!",
                "Будь сильною, о халісі!"
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
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "khal (вождь) + khaleesi (дружина)",
                "khal-khaleesi (владна пара)"
              ],
              [
                "arakh (меч) + qoyi (кров)",
                "arakhqoyi (вершник-воїн)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Arakhqoyi vazhi.",
                "Вершник-воїн їде."
              ],
              [
                "Khal-khaleesi lekhi.",
                "Владна пара говорить."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року степу — A2",
        "titleEn": "Steppe Seasons — A2",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Життя дотракійців організоване навколо циклів кочування степом, а не чотирьох фіксованих пір року.",
            "en": {
              "text": "Dothraki life is organized around cycles of steppe migration, rather than four fixed seasons."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "dothrak (їзда верхи, кочування)",
                "постійний рух як спосіб життя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khalasar dothrak majin.",
                "Халасар кочує зараз."
              ],
              [
                "Anha vazhak dothraki.",
                "Я їжджу верхи в кочуванні."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-goods-livestock",
        "title": "Рахунок худоби й трофеїв — A2",
        "titleEn": "Counting Livestock & Spoils — A2",
        "emoji": "🐎",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Fini vezhish?",
                "Скільки коней?"
              ],
              [
                "Vezhish sen.",
                "Три коні."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khal vezhish saccheis.",
                "У хала багато коней."
              ],
              [
                "Anha atihat vezhish akat.",
                "Я вбив (у бою здобув) двох коней."
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
                "Anha vekha...",
                "Я думаю, що..."
              ],
              [
                "Anhoon shafka...",
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
                "Anha vekha yer laz.",
                "Я думаю, що ти можеш."
              ],
              [
                "Anhoon shafka, hazi asshekh.",
                "На мою думку, це гарно."
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
                "majin",
                "зараз/потім"
              ],
              [
                "asqoy",
                "незабаром"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha zigereni asqoy.",
                "Я скоро піду."
              ],
              [
                "Me adakhak majin.",
                "Він їсть зараз."
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
                "fin",
                "хтось"
              ],
              [
                "hazhes",
                "щось"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fin lekhi.",
                "Хтось говорить."
              ],
              [
                "Anha annalak hazhes.",
                "Я чую щось."
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
                "Vekha!",
                "Гей!/Дивись!"
              ],
              [
                "Hajas!",
                "Сильно! (схвалення)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vekha, vezh!",
                "Дивись, кінь!"
              ],
              [
                "Hajas, khal!",
                "Слава халу!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція наявності — A2",
        "titleEn": "Existential Construction — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Haan hane.",
                "Тут є вода."
              ],
              [
                "Haan vo hane qoy.",
                "Тут немає води."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezhish saccheis hane.",
                "Тут багато коней."
              ],
              [
                "Anha vo maregi qoy.",
                "У мене немає м'яса."
              ]
            ]
          }
        ]
      },
      {
        "id": "addressing-titles",
        "title": "Звертання та титули — A2",
        "titleEn": "Titles & Forms of Address — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "khal",
                "вождь (чоловік)"
              ],
              [
                "khaleesi",
                "дружина хала / королева"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Zhey khal, hajas.",
                "О хале, будь сильним."
              ],
              [
                "Khaleesi, m'athchomaroon.",
                "Халісі, вітаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "proverbs-sayings",
        "title": "Кочівницькі приказки — B2",
        "titleEn": "Nomadic Sayings — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійська культура має усталені вислови, що відображають кочовий світогляд: страх перед морем і статичним життям, повагу до сили й коней.",
            "en": {
              "text": "Dothraki culture has set expressions reflecting a nomadic worldview: fear of the sea and static life, respect for strength and horses."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vezh zheanae anni sekke qoyi anni.",
                "Мій кінь мені дорожчий за мою кров (вірність коневі)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khal vezhven vosecchi vazhi vo khal qoy.",
                "Чоловік, який не їздить верхи, — не вождь."
              ],
              [
                "Rhaesh Andahli tihat.",
                "Земля андалів заслуговує на увагу."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-none-purity",
        "title": "Відсутність запозичень — мовна чистота — B1",
        "titleEn": "The Absence of Loanwords — Linguistic Purity — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості мов цього курсу, дотракійська свідомо створювалася без запозичень з реальних мов — уся лексика вигадана з нуля творцем мови для збереження \"чужості\" звучання.",
            "en": {
              "text": "Unlike most languages in this course, Dothraki was deliberately created with no loanwords from real languages — its entire vocabulary was invented from scratch by the language's creator to preserve a \"foreign\" sound."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh (кінь)",
                "вигадане слово, не запозичене з жодної реальної мови"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha lekh Dothraki.",
                "Я говорю дотракійською."
              ],
              [
                "Dothraki vosecchi lekhoon jini.",
                "Дотракійська не схожа на жодну іншу мову."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Прикметник після іменника — A1",
        "titleEn": "Adjective After the Noun — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть ПІСЛЯ іменника, на відміну від української.",
            "en": {
              "text": "The adjective usually stands AFTER the noun, unlike Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh tih",
                "прудкий кінь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Arakh hajke.",
                "Могутній меч."
              ],
              [
                "Khal shafka.",
                "Мудрий вождь."
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
            "text": "Порівняння виражається конструкцією \"X сильніше за Y\" з відмінковим суфіксом на об'єкті порівняння, а не окремим ступенем прикметника.",
            "en": {
              "text": "Comparison is expressed with the construction \"X stronger than Y\", with a case suffix on the compared object, rather than a separate adjective degree."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Vezh anhoon hajke vezhoon yeroon.",
                "Мій кінь сильніший за твого."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khal hajke khalasaroon.",
                "Хал сильніший за (весь) халасар."
              ],
              [
                "Me shafka anhoon.",
                "Він мудріший за мене."
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
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ha (1) → перший",
                "порядкова форма"
              ],
              [
                "akat (2) → другий",
                "порядкова форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezh anhoon ha.",
                "Це мій перший кінь."
              ],
              [
                "Me atihat khal akat.",
                "Він другий хал, якого вбили."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle-zhey",
        "title": "Кличне звертання (\"zhey\") — A2",
        "titleEn": "Vocative Address (\"Zhey\") — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання до людини часто супроводжується часткою zhey, доданою перед іменем чи титулом.",
            "en": {
              "text": "Direct address to a person is often accompanied by the particle zhey, added before the name or title."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Zhey khal!",
                "О хале!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Zhey khaleesi, annalak!",
                "О халісі, слухай!"
              ],
              [
                "Zhey Drogo, m'athchomaroon.",
                "О Дрого, вітаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "horse-vocabulary-culture",
        "title": "Лексика, пов'язана з кіньми — культурна центральність — B1",
        "titleEn": "Horse-Related Vocabulary — Cultural Centrality — B1",
        "emoji": "🐎",
        "sections": [
          {
            "type": "intro",
            "text": "Дотракійська має незвично велику кількість окремих слів, пов'язаних з кіньми й верховою їздою, — відображення того, що кінь у цій культурі не просто тварина, а центр способу життя.",
            "en": {
              "text": "Dothraki has an unusually large number of distinct words tied to horses and riding — reflecting that in this culture, the horse isn't just an animal but the center of a way of life."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "vezh",
                "кінь загалом"
              ],
              [
                "vazhak",
                "їхати верхи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha vazhak vezhoon anhoon.",
                "Я їду верхи на своєму коні."
              ],
              [
                "Dothraki vosecchi vazh, dothraki vo dothraki qoy.",
                "Дотракієць, що не їздить верхи, — не дотракієць."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-of-fighting-vocabulary",
        "title": "Лексика бою та воєнної культури — B1",
        "titleEn": "Combat & Warrior Culture Vocabulary — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "arakh",
                "вигнутий меч"
              ],
              [
                "fonak",
                "битися"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me fonak arakhoon.",
                "Він б'ється мечем."
              ],
              [
                "Vezhven vosecchi fonak vo vezhven qoy.",
                "Чоловік, що не б'ється, — не чоловік."
              ]
            ]
          }
        ]
      },
      {
        "id": "sky-earth-metaphors",
        "title": "Метафори неба й землі — B1",
        "titleEn": "Sky & Earth Metaphors — B1",
        "emoji": "🌌",
        "sections": [
          {
            "type": "intro",
            "text": "Релігійні поняття дотракійців будуються навколо \"Матері Гір\" і \"Батька Небес\" — географічні й астрономічні поняття стають священними метафорами.",
            "en": {
              "text": "Dothraki religious concepts are built around the \"Mother of Mountains\" and the \"Father of Sky\" — geographic and astronomical concepts become sacred metaphors."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Sajo Rhaesheseres",
                "Мати Гір (священна назва)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha vekha Sajo Rhaesheseres.",
                "Я думаю про Матір Гір."
              ],
              [
                "Charvolen sekke.",
                "Зірки близько (небо священне)."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-negation-nuance-nu-vs-vo",
        "title": "Нюанс: nu проти vo...qoy — B1",
        "titleEn": "Nuance: Nu vs Vo...Qoy — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"vo...qoy\" — звичайне заперечення факту, а \"nu\" — спеціальна частка лише для заперечного наказу; плутати їх не можна.",
            "en": {
              "text": "\"vo...qoy\" is the regular negation of a fact, while \"nu\" is a special particle used only for the negative imperative — they can't be mixed up."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Anha vo zigerak qoy.",
                "Я не йду (факт)."
              ],
              [
                "Nu zigere!",
                "Не йди! (наказ)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me vo laz qoy.",
                "Він не може (факт)."
              ],
              [
                "Nu vitihaan!",
                "Не бійся! (наказ)"
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-plural-formation",
        "title": "Множина іменників — A2",
        "titleEn": "Noun Plural Formation — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом, доданим до основи іменника, який залежить від класу (\"твердий\"/\"м'який\").",
            "en": {
              "text": "The plural is formed with a suffix added to the noun stem, which depends on the noun class (\"hard\"/\"soft\")."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh (кінь)",
                "vezhish",
                "коні"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vezhish vazhi.",
                "Коні біжать."
              ],
              [
                "Arakhqoyi zigereni.",
                "Вершники йдуть."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-none",
        "title": "Прикметники не змінюються — A2",
        "titleEn": "Invariable Adjectives — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники в дотракійській не узгоджуються ні з родом, ні з числом іменника — та сама форма стоїть після будь-якого іменника.",
            "en": {
              "text": "Dothraki adjectives don't agree with the noun's gender or number — the same form goes after any noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "vezh tih / vezhish tih",
                "прудкий кінь / прудкі коні (та сама форма tih)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Khal hajke.",
                "Могутній хал."
              ],
              [
                "Khalasar hajke.",
                "Могутній халасар."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-noun-usage",
        "title": "Віддієслівний іменник — B1",
        "titleEn": "Verbal Noun Usage — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів мають похідну іменникову форму, що позначає саму дію чи процес як абстрактне поняття.",
            "en": {
              "text": "Many verbs have a derived noun form denoting the action or process itself as an abstract concept."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "dothrak (кочувати)",
                "dothraki (кочування, сама мова названа так)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dothraki asshekh.",
                "Кочування прекрасне."
              ],
              [
                "Vazhaki hajke.",
                "Верхова їзда сильна (потужна)."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-time-duration",
        "title": "Тривалість часу — A2",
        "titleEn": "Duration of Time — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "qora ha",
                "один місяць"
              ],
              [
                "jalan sen",
                "три дні"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha vazhak jalan sen.",
                "Я їхатиму верхи три дні."
              ],
              [
                "Khalasar dothrak qora akat.",
                "Халасар кочує два місяці."
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
        "id": "no-word-for-thank-you",
        "title": "Відсутність слова \"дякую\" — B1",
        "titleEn": "No Word for \"Thank You\" — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У дотракійській немає окремого слова для формальної подяки \"дякую\" — творець мови свідомо не включив його, оскільки культура дотракійців у творі не будується на ввічливих формулах такого типу, на відміну від більшості реальних мов.",
            "en": {
              "text": "Dothraki has no dedicated word for a formal \"thank you\" — the language's creator deliberately left it out, since Dothraki culture in the story isn't built around that kind of polite formula, unlike most real languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "M'athchomaroon.",
                "Найближчий відповідник — загальне вітання, не подяка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha vitihak lekhak yeraan.",
                "Я хочу тобі щось сказати (замість формальної подяки)."
              ],
              [
                "Yer vezhven asshekh.",
                "Ти хороша людина (визнання замість подяки)."
              ]
            ]
          }
        ]
      },
      {
        "id": "oral-only-no-native-script",
        "title": "Виключно усна мова — без власної писемності — B1",
        "titleEn": "Purely Oral Language — No Native Script — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже всіх мов цього курсу, дотракійці у творі принципово не мають писемності — Джордж Р. Р. Мартін і творець мови Девід Дж. Петерсон свідомо задумали дотракійську як виключно усну мову кочового народу, тому весь текст, який ви бачите, — це лише транслітерація латиницею для навчальних цілей.",
            "en": {
              "text": "Unlike almost every language in this course, the Dothraki in the story fundamentally have no writing system — George R. R. Martin and language creator David J. Peterson deliberately conceived Dothraki as a purely oral language of a nomadic people, so all the text you see here is just a Latin-script transliteration for learning purposes."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dothraki lekh, vo chitat qoy.",
                "Дотракійська — мова, не письмо."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anha annalak, vo vachat qoy.",
                "Я слухаю, не читаю."
              ],
              [
                "Dothraki lekhoon jini lekhak.",
                "Дотракійську передають мовленням, а не письмом."
              ]
            ]
          }
        ]
      },
      {
        "id": "constructed-language-linguistic-design",
        "title": "Штучно створена мова — свідомий лінгвістичний задум — B1",
        "titleEn": "A Constructed Language — Deliberate Linguistic Design — B1",
        "emoji": "🧪",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від усіх природних мов цього курсу, дотракійську створив лінгвіст Девід Дж. Петерсон 2009 року на замовлення для серіалу \"Гра престолів\" за кількома словами й фразами з роману Джорджа Р. Р. Мартіна — це повноцінна, послідовна граматична система, розроблена з нуля.",
            "en": {
              "text": "Unlike every natural language in this course, Dothraki was created by linguist David J. Peterson in 2009, commissioned for the Game of Thrones TV series from a handful of words and phrases in George R. R. Martin's novel — a full, consistent grammatical system built from scratch."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dothraki (створена 2009 р.)",
                "порівняно молода серед мов цього курсу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dothraki lekhoon nevem qoyoon.",
                "Дотракійська — вигадана мова."
              ],
              [
                "Vezhven fini kolla Dothraki lekh.",
                "Людина, яка створила дотракійську мову."
              ]
            ]
          }
        ]
      }
    ]
  }
];
