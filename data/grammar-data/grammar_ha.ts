// Vymova — data/grammar-data/grammar_ha.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Sunayen Suna — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У хауса займенник \"ти\" має окремі форми залежно від статі співрозмовника: \"kai\" (до чоловіка) і \"ke\" (до жінки).",
            "en": {
              "text": "In Hausa, the pronoun \"you\" has separate forms depending on the listener's gender: \"kai\" (to a man) and \"ke\" (to a woman)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ni"
              ],
              [
                "ти (до чоловіка / жінки)",
                "kai / ke"
              ],
              [
                "він / вона",
                "shi / ita"
              ],
              [
                "ми",
                "mu"
              ],
              [
                "ви",
                "ku"
              ],
              [
                "вони",
                "su"
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
        "id": "person-aspect-complex",
        "title": "Особово-видовий комплекс — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса граматики хауса: займенник-підмет зливається з маркером виду в одне нерозривне слово (\"особово-видовий комплекс\"), а не залишається окремим словом перед дієсловом.",
            "en": {
              "text": "The most defining trait of Hausa grammar: the subject pronoun fuses with an aspect marker into a single inseparable word (the \"person-aspect complex\"), rather than staying a separate word before the verb."
            }
          },
          {
            "type": "table",
            "title": "Завершений вид (комплекс)",
            "rows": [
              [
                "na tafi",
                "я пішов (na = я+завершений вид)"
              ],
              [
                "ka tafi",
                "ти пішов (ka = ти(ч.)+завершений вид)"
              ],
              [
                "ta tafi",
                "вона пішла (ta = вона+завершений вид)"
              ]
            ],
            "en": {
              "title": "Completive Aspect (Complex)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mun tafi makaranta.",
                "Ми пішли до школи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Person-Aspect Complex — A2"
      },
      {
        "id": "negation",
        "title": "Заперечення (ba...ba) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється циркумфіксом: \"ba\" перед особово-видовим комплексом і \"ba\" в кінці речення — обидві частини потрібні одночасно.",
            "en": {
              "text": "Negation is formed with a circumfix: \"ba\" before the person-aspect complex and \"ba\" at the end of the sentence — both parts are required together."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Na tafi.",
                "Ban tafi ba.",
                "Я пішов → я не пішов (ba+na=ban ...ba)"
              ],
              [
                "Ya san shi.",
                "Bai san shi ba.",
                "Він знає це → він не знає цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ban gaji ba.",
                "Я не втомлений."
              ],
              [
                "Ba ta jin Hausa ba.",
                "Вона не розмовляє хауса."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (ba...ba) — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання часто починаються часткою \"Shin\"; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions often begin with the particle \"Shin\"; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "wa",
                "хто"
              ],
              [
                "me",
                "що"
              ],
              [
                "ina",
                "де"
              ],
              [
                "yaushe",
                "коли"
              ],
              [
                "don me",
                "чому"
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
                "Shin kai Bahaushe ne?",
                "Ти хауса?"
              ],
              [
                "Ina kake zaune?",
                "Де ти живеш?"
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
        "id": "gender-agreement",
        "title": "Узгодження за родом — A2",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід (жіночий часто закінчується на -a), і дієслово чи прикметник узгоджується з родом підмета через особово-видовий комплекс.",
            "en": {
              "text": "Nouns have masculine or feminine gender (feminine often ends in -a), and the verb or adjective agrees with the subject's gender through the person-aspect complex."
            }
          },
          {
            "type": "table",
            "title": "Чоловічий vs жіночий",
            "rows": [
              [
                "yaro (хлопчик, ч.р.)",
                "чоловічий рід"
              ],
              [
                "yarinya (дівчинка, ж.р.)",
                "жіночий рід"
              ]
            ],
            "en": {
              "title": "Masculine vs Feminine"
            }
          }
        ],
        "titleEn": "Gender Agreement — A2"
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
        "id": "completive-full-paradigm",
        "title": "Завершений вид — повна парадигма — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершений вид (дію виконано) має власний повний набір особово-видових комплексів для кожної особи й числа.",
            "en": {
              "text": "The completive aspect (action done) has its own full set of person-aspect complexes for every person and number."
            }
          },
          {
            "type": "table",
            "title": "Завершений вид",
            "rows": [
              [
                "mun tafi",
                "ми пішли"
              ],
              [
                "kun tafi",
                "ви пішли"
              ],
              [
                "sun tafi",
                "вони пішли"
              ]
            ],
            "en": {
              "title": "Completive Aspect"
            }
          }
        ],
        "titleEn": "The Completive Aspect — Full Paradigm — A2"
      },
      {
        "id": "continuous-aspect",
        "title": "Тривалий вид (ana) — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалий вид має окремий особово-видовий комплекс (у 3 ос. одн. часто \"yana/tana\") + дієслівний іменник, що виражає дію, яка триває.",
            "en": {
              "text": "The continuous aspect has its own person-aspect complex (often \"yana/tana\" in the 3rd singular) + a verbal noun, expressing an ongoing action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yana karatu.",
                "Він зараз читає."
              ],
              [
                "Tana aiki.",
                "Вона зараз працює."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Continuous Aspect (ana) — A2"
      },
      {
        "id": "habitual-aspect",
        "title": "Звичний вид (kan) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичний вид вводиться часткою \"kan\" перед дієсловом і виражає регулярну, повторювану дію — окремий від тривалого виду.",
            "en": {
              "text": "The habitual aspect is introduced with the particle \"kan\" before the verb and expresses a regular, repeated action — distinct from the continuous aspect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ina kan tafi makaranta da safe.",
                "Я зазвичай йду до школи вранці."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Habitual Aspect (kan) — B1"
      },
      {
        "id": "future-aspect",
        "title": "Майбутній вид (za) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутнє утворюється часткою \"za\" перед особово-видовим комплексом + дієслово.",
            "en": {
              "text": "The future is formed with the particle \"za\" before the person-aspect complex + verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Zan tafi gobe.",
                "Я піду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Aspect (za) — A2"
      },
      {
        "id": "subjunctive-potential",
        "title": "Підрядний/спонукальний вид — B1",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий особово-видовий комплекс (без відтінку часу) вживається в наказових, спонукальних і підрядних реченнях після дієслів бажання.",
            "en": {
              "text": "A separate person-aspect complex (with no time nuance) is used in imperative, hortative, and subordinate clauses after verbs of wish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ina so ya tafi.",
                "Я хочу, щоб він пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subjunctive/Hortative Aspect — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова, без особово-видового комплексу.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem, with no person-aspect complex."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Tafi!",
                "Йди!"
              ],
              [
                "Ku tafi!",
                "Йдіть! (мн.)"
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
        "id": "relative-completive",
        "title": "Відносний завершений вид — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У відносних реченнях і деяких питаннях завершений вид отримує іншу, \"відносну\" форму особово-видового комплексу, відмінну від звичайної стверджувальної.",
            "en": {
              "text": "In relative clauses and some questions, the completive aspect takes a different, \"relative\" form of the person-aspect complex, distinct from the ordinary affirmative one."
            }
          },
          {
            "type": "table",
            "title": "Звичайна vs відносна форма",
            "rows": [
              [
                "ya tafi",
                "mutumin da ya tafi",
                "він пішов (звич.) → людина, яка пішла (відносна форма da ya)"
              ]
            ]
          }
        ],
        "titleEn": "The Relative Completive Form — B2"
      },
      {
        "id": "negative-continuous",
        "title": "Заперечення тривалого виду — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення тривалого виду використовує той самий циркумфікс ba...ba, але з окремою формою особово-видового комплексу, відмінною від стверджувальної.",
            "en": {
              "text": "Negating the continuous aspect uses the same ba...ba circumfix, but with a separate form of the person-aspect complex, distinct from the affirmative one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ba ya cin abinci ba.",
                "Він зараз не їсть."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Continuous Aspect — B1"
      },
      {
        "id": "verb-grade-1",
        "title": "Дієслівна града 1 (основна перехідна) — B2",
        "emoji": "🅰️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса хауса: дієслова поділені на 7 \"град\" за тоновим малюнком і кінцевим голосним, кожна з власним значенням перехідності. Града 1 — основна перехідна форма на -a.",
            "en": {
              "text": "A unique Hausa feature: verbs are classified into 7 \"grades\" by tone pattern and final vowel, each with its own transitivity meaning. Grade 1 is the basic transitive form ending in -a."
            }
          },
          {
            "type": "table",
            "title": "Града 1",
            "rows": [
              [
                "karanta (читати)",
                "основна перехідна форма, закінчення -a"
              ]
            ],
            "en": {
              "title": "Grade 1"
            }
          }
        ],
        "titleEn": "Verb Grade 1 (Basic Transitive) — B2"
      },
      {
        "id": "verb-grade-2",
        "title": "Дієслівна града 2 (конкретний додаток) — B2",
        "emoji": "🅱️",
        "sections": [
          {
            "type": "intro",
            "text": "Града 2 (закінчення -i/-e) позначає перехідну дію з конкретно вказаним прямим додатком, на відміну від загальної форми 1-ї гради.",
            "en": {
              "text": "Grade 2 (ending -i/-e) marks a transitive action with a specifically stated direct object, unlike grade 1's general form."
            }
          },
          {
            "type": "table",
            "title": "Града 2",
            "rows": [
              [
                "karanta → karanci",
                "прочитати (конкретну книгу)"
              ]
            ],
            "en": {
              "title": "Grade 2"
            }
          }
        ],
        "titleEn": "Verb Grade 2 (Specific Object) — B2"
      },
      {
        "id": "verb-grade-5",
        "title": "Дієслівна града 5 (каузатив/повнота) — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Града 5 (закінчення -(a)s/-ar) додає значення каузативності або повноти дії.",
            "en": {
              "text": "Grade 5 (ending -(a)s/-ar) adds a causative or totality meaning to the action."
            }
          },
          {
            "type": "table",
            "title": "Града 5",
            "rows": [
              [
                "kashe → kasheshe (приблизно)",
                "вбити повністю/остаточно (каузативно-тотальне значення)"
              ]
            ],
            "en": {
              "title": "Grade 5"
            }
          }
        ],
        "titleEn": "Verb Grade 5 (Causative/Totality) — B2"
      },
      {
        "id": "verb-grade-7",
        "title": "Дієслівна града 7 (пасив/потенціал) — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Града 7 (закінчення -u) виражає пасивне чи потенційне значення — \"можливо бути зробленим\", без явного виконавця дії.",
            "en": {
              "text": "Grade 7 (ending -u) expresses a passive or potential meaning — \"able to be done\", with no explicit doer."
            }
          },
          {
            "type": "table",
            "title": "Града 7",
            "rows": [
              [
                "sayu (бути купленим)",
                "пасивно-потенційна форма від sayā (купувати)"
              ]
            ],
            "en": {
              "title": "Grade 7"
            }
          }
        ],
        "titleEn": "Verb Grade 7 (Passive/Potential) — B2"
      },
      {
        "id": "tone-as-grammar",
        "title": "Тон як граматичний маркер — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Хауса — тональна мова (високий, низький і спадний тон): той самий ланцюжок звуків може мати зовсім інше значення чи граматичну функцію лише через зміну тону, зокрема розрізняючи дієслівні гради.",
            "en": {
              "text": "Hausa is a tonal language (high, low, and falling tone): the same sound sequence can have a completely different meaning or grammatical function purely through a tone change, notably distinguishing verb grades."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kárfī (сила, високий тон) vs kàrfī (залізо, низький тон)",
                "мінімальна пара, розрізнена лише тоном"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone as a Grammatical Marker — B2"
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
        "id": "stabilized-vowel-length",
        "title": "Довгота голосних — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Крім тону, хауса розрізняє короткі й довгі голосні як окрему фонологічну властивість — довгота й тон діють незалежно одне від одного й обидва впливають на значення слова.",
            "en": {
              "text": "Besides tone, Hausa distinguishes short and long vowels as a separate phonological property — length and tone operate independently of each other, and both affect word meaning."
            }
          },
          {
            "type": "table",
            "title": "Коротка vs довга голосна",
            "rows": [
              [
                "gishiri (сіль, короткі)",
                "kasa (земля, з довгою a)"
              ]
            ],
            "en": {
              "title": "Short vs Long Vowel"
            }
          }
        ],
        "titleEn": "Vowel Length — B1"
      },
      {
        "id": "plural-pronoun-exclusive-forms",
        "title": "Форми особового займенника в непрямій позиції — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають окремі, відмінні від підметових, форми, коли вони вживаються як прямий чи непрямий додаток окремим словом (а не суфіксом).",
            "en": {
              "text": "Personal pronouns have separate forms, different from the subject forms, when used as a standalone direct or indirect object word (not a suffix)."
            }
          },
          {
            "type": "table",
            "title": "Підметова vs додаткова форма",
            "rows": [
              [
                "ni (я, підмет/об'єкт)",
                "shi (він, об'єкт) — інша форма, ніж suffix-forma"
              ]
            ]
          }
        ],
        "titleEn": "Pronoun Forms in Object Position — B1"
      },
      {
        "id": "genitive-linker-na",
        "title": "Родовий зв'язок na (чоловічий) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність після іменника чоловічого роду вводиться зв'язкою \"na\".",
            "en": {
              "text": "Possession after a masculine noun is introduced with the linker \"na\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "littafi na Musa",
                "книга Муси"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Genitive Linker na (Masculine) — A2"
      },
      {
        "id": "genitive-linker-ta",
        "title": "Родовий зв'язок ta (жіночий) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність після іменника жіночого роду вводиться іншою зв'язкою — \"ta\", а не \"na\".",
            "en": {
              "text": "Possession after a feminine noun is introduced with a different linker — \"ta\", not \"na\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mota ta Aisha",
                "авто Аїші"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Genitive Linker ta (Feminine) — A2"
      },
      {
        "id": "plural-formation-overview",
        "title": "Множинні класи — велика непередбачуваність — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Хауса має близько десятка різних класів множини з різними закінченнями й тоновими моделями — клас конкретного іменника часто слід просто запам'ятати.",
            "en": {
              "text": "Hausa has about a dozen different plural classes with different endings and tone patterns — the class of a specific noun often just has to be memorized."
            }
          },
          {
            "type": "table",
            "title": "Приклади класів",
            "rows": [
              [
                "yaro → yara",
                "хлопчики (клас -a)"
              ],
              [
                "littafi → littattafai",
                "книги (клас з редуплікацією)"
              ]
            ],
            "en": {
              "title": "Class Examples"
            }
          }
        ],
        "titleEn": "Plural Classes — High Unpredictability — B1"
      },
      {
        "id": "feminine-ending-a",
        "title": "Жіночий рід на -a — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато жіночих іменників (особливо назви людей і тварин) закінчуються на -a, з відповідником чоловічого роду без цього закінчення.",
            "en": {
              "text": "Many feminine nouns (especially for people and animals) end in -a, with a masculine counterpart lacking that ending."
            }
          },
          {
            "type": "table",
            "title": "yaro → yarinya",
            "rows": [
              [
                "yaro (хлопчик, ч.р.)",
                "yarinya (дівчинка, ж.р.)"
              ]
            ],
            "en": {
              "title": "yaro → yarinya"
            }
          }
        ],
        "titleEn": "Feminine Gender Marked by -a — A1"
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодження прикметника — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді й числі, стоячи після нього.",
            "en": {
              "text": "The adjective agrees with the noun in gender and number, standing after it."
            }
          },
          {
            "type": "table",
            "title": "babba, babbar",
            "rows": [
              [
                "gida babba (ч.р.)",
                "великий дім"
              ],
              [
                "gona babbar (ж.р.)",
                "велике поле"
              ]
            ],
            "en": {
              "title": "babba, babbar"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "comparative-fi",
        "title": "Порівняльна конструкція (fi) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають дієсловом \"fi\" (перевищувати), а не окремим порівняльним суфіксом — \"X fi Y якістю\" означає \"X ...-ший за Y\".",
            "en": {
              "text": "Comparison is expressed with the verb \"fi\" (to exceed), not a separate comparative suffix — \"X fi Y [quality]\" means \"X is more [quality] than Y\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shi ya fi ni tsawo.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (fi) — A2"
      },
      {
        "id": "superlative-construction",
        "title": "Найвищий ступінь (fi duka) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь виражають тим самим дієсловом \"fi\" + слово \"duka\" (усіх).",
            "en": {
              "text": "The superlative is expressed with the same verb \"fi\" + the word \"duka\" (all)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shi ya fi kowa tsawo duka.",
                "Він найвищий з усіх."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (fi duka) — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Wannan\" (цей) вказує на близьке, \"wancan\" (той) — на віддалене, обидва узгоджуються з родом.",
            "en": {
              "text": "\"Wannan\" (this) points to something near, \"wancan\" (that) to something distant, both agreeing with gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wannan littafi nawa ne.",
                "Ця книга моя."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-clause-marker-da",
        "title": "Відносна частка da — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"da\" вводить відносне підрядне речення \"який/що\", вимагаючи відносної форми дієслова (див. розділ часів).",
            "en": {
              "text": "The particle \"da\" introduces a relative clause \"who/which\", requiring the relative verb form (see the tense section)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mutumin da ya zo, shi ne ɗan'uwana.",
                "Чоловік, що прийшов, — мій брат."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Particle da — B1"
      },
      {
        "id": "direct-object-suffixes",
        "title": "Суфіксальні прямі додатки — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Займенниковий прямий додаток часто приєднується безпосередньо до дієслова як суфікс, а не стоїть окремим словом.",
            "en": {
              "text": "A pronominal direct object is often attached directly to the verb as a suffix, rather than standing as a separate word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na gan shi.",
                "Я побачив його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Suffixed Direct Object Pronouns — B1"
      },
      {
        "id": "indirect-object-suffixes",
        "title": "Суфіксальні непрямі додатки — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямий додаток приєднується суфіксом \"-mā/-wā\" + займенник, окремо від прямого додатка.",
            "en": {
              "text": "The indirect object is attached with the suffix \"-mā/-wā\" + pronoun, distinct from the direct object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na baiwa shi littafi.",
                "Я дав йому книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Suffixed Indirect Object Pronouns — B1"
      },
      {
        "id": "possessive-construction",
        "title": "Присвійна конструкція (na/ta + займенник) — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники — це зв'язка na/ta + особовий займенник, узгоджена з родом означуваного іменника.",
            "en": {
              "text": "Possessive pronouns are the linker na/ta + personal pronoun, agreeing with the gender of the possessed noun."
            }
          },
          {
            "type": "table",
            "title": "littafi nawa, gona tawa",
            "rows": [
              [
                "littafi nawa",
                "моя книга (ч.р. + na)"
              ],
              [
                "gona tawa",
                "моє поле (ж.р. + ta)"
              ]
            ],
            "en": {
              "title": "littafi nawa, gona tawa"
            }
          }
        ],
        "titleEn": "The Possessive Construction (na/ta + Pronoun) — A1"
      },
      {
        "id": "numbers-gender-agreement",
        "title": "Числівники з узгодженням роду — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі числівники (особливо \"один\"/\"два\") змінюють форму за родом іменника, який супроводжують.",
            "en": {
              "text": "Some numerals (especially \"one\"/\"two\") change form to agree with the gender of the noun they accompany."
            }
          },
          {
            "type": "table",
            "title": "ɗaya, biyu",
            "rows": [
              [
                "yaro ɗaya",
                "один хлопчик"
              ],
              [
                "yarinya ɗaya",
                "одна дівчинка"
              ]
            ],
            "en": {
              "title": "ɗaya, biyu"
            }
          }
        ],
        "titleEn": "Numbers with Gender Agreement — A2"
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація для інтенсивності — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прикметника чи дієслова посилює ознаку або виражає розподільність.",
            "en": {
              "text": "Reduplicating an adjective or verb intensifies the quality or expresses distributiveness."
            }
          },
          {
            "type": "table",
            "title": "sannu → sannu-sannu",
            "rows": [
              [
                "sannu (повільно) → sannu-sannu",
                "дуже повільно/потроху"
              ]
            ],
            "en": {
              "title": "sannu → sannu-sannu"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "word-order-svo",
        "title": "Порядок слів SVO — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-присудок-додаток (SVO), на відміну від кельтських мов цього ж списку, що є VSO.",
            "en": {
              "text": "The basic order is subject-verb-object (SVO), unlike the Celtic languages in this list, which are VSO."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na karanta littafi.",
                "Я прочитав книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "SVO Word Order — A2"
      },
      {
        "id": "postnominal-adjective",
        "title": "Позиція прикметника після іменника — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть після іменника, якого він визначає.",
            "en": {
              "text": "The adjective always stands after the noun it modifies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gida mai kyau",
                "гарний дім (дім гарний)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Postnominal Adjective Position — A1"
      },
      {
        "id": "ideophones",
        "title": "Ідеофони — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Хауса багата на ідеофони — звуконаслідувальні чи образні слова, що передають відчуття способу дії, неперекладні буквально іншими мовами.",
            "en": {
              "text": "Hausa is rich in ideophones — sound-symbolic or sensory words that convey the manner of an action, not literally translatable into other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ya fadi yas!",
                "він впав зі звуком \"бух!\" (ідеофон yas передає манеру падіння)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ideophones — B1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Wa\" (хто) вживається для людей, \"me\" (що) — для предметів.",
            "en": {
              "text": "\"Wa\" (who) is used for people, \"me\" (what) for things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wa ne wannan?",
                "Хто це?"
              ],
              [
                "Me ne wannan?",
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
            "text": "Основні сполучники з'єднують слова і речення без зміни порядку слів.",
            "en": {
              "text": "Basic conjunctions link words and clauses without changing word order."
            }
          },
          {
            "type": "table",
            "title": "da / amma / don",
            "rows": [
              [
                "da",
                "і"
              ],
              [
                "amma",
                "але"
              ],
              [
                "don",
                "тому що"
              ]
            ],
            "en": {
              "title": "da / amma / don"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "prepositions",
        "title": "Прийменники — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Основні прийменники стоять перед іменником, як у більшості мов.",
            "en": {
              "text": "The basic prepositions stand before the noun, as in most languages."
            }
          },
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "a",
                "в/на"
              ],
              [
                "da",
                "з (разом)"
              ],
              [
                "zuwa",
                "до"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Prepositions — A1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують два іменники за допомогою родової зв'язки na/ta.",
            "en": {
              "text": "Compound words often join two nouns using the genitive linker na/ta."
            }
          },
          {
            "type": "table",
            "title": "gida + littafi",
            "rows": [
              [
                "gidan littafi",
                "бібліотека (дім книги)"
              ]
            ],
            "en": {
              "title": "gida + littafi"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "tone-minimal-pairs",
        "title": "Мінімальні пари за тоном — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Багато пар слів, ідентичних за звуками й написанням у нетонованому тексті, розрізняються тоном — словники й підручники зазвичай позначають тон діакритиками.",
            "en": {
              "text": "Many word pairs, identical in sound sequence and in untoned writing, are distinguished by tone — dictionaries and textbooks usually mark tone with diacritics."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fáci (обличчя) vs fàci (схожий приклад різниці тону)",
                "той самий запис без діакритиків, різні слова за тоном"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Minimal Pairs Distinguished by Tone — B2"
      },
      {
        "id": "vocative-address-particle",
        "title": "Кличний вигук — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання часто супроводжується вигуком \"kai\" (гей) незалежно від статі адресата в розмовному вжитку.",
            "en": {
              "text": "Direct address is often accompanied by the interjection \"kai\" (hey), regardless of the addressee's gender in colloquial use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kai, zo nan!",
                "Гей, йди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative Interjection — A2"
      },
      {
        "id": "lingua-franca-status",
        "title": "Хауса як мова міжетнічного спілкування — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Хауса — одна з найпоширеніших мов Африки, що функціонує як торговельна лінгва франка далеко за межами етнічних носіїв, у Нігерії, Нігері та сусідніх країнах Західної Африки.",
            "en": {
              "text": "Hausa is one of Africa's most widely spoken languages, functioning as a trade lingua franca far beyond its ethnic speakers, across Nigeria, Niger, and neighboring West African countries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "На хаусанських ринках торгують носії десятків різних рідних мов.",
                "хауса як спільна мова торгівлі, а не лише етнічна ідентичність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hausa as a Lingua Franca — B2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Назви днів тижня — запозичення з арабської, що відображають ісламський вплив на мову хауса.",
            "en": {
              "text": "The names of the days of the week are Arabic loanwords, reflecting Islam's influence on the Hausa language."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Litinin",
                "понеділок"
              ],
              [
                "Laraba",
                "середа"
              ],
              [
                "Jumma'a",
                "п'ятниця"
              ],
              [
                "Lahadi",
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
            "text": "Поряд із запозиченими англійськими назвами, хауса має й ісламський місячний календар із власними назвами місяців.",
            "en": {
              "text": "Alongside borrowed English names, Hausa has the Islamic lunar calendar with its own month names."
            }
          },
          {
            "type": "table",
            "title": "Місяці (ісламський календар)",
            "rows": [
              [
                "Ramadan",
                "місяць посту"
              ],
              [
                "Muharram",
                "перший місяць ісламського календаря"
              ]
            ],
            "en": {
              "title": "Months (Islamic Calendar)"
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
            "text": "Час запитують \"Karfe nawa ne?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"Karfe nawa ne?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Karfe uku ne.",
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
            "text": "Кольори — прикметники, узгоджені з іменником за родом і числом.",
            "en": {
              "text": "Colors are adjectives, agreeing with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "fari",
                "білий"
              ],
              [
                "baki",
                "чорний"
              ],
              [
                "ja",
                "червоний"
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
            "text": "Родинні терміни — звичайні іменники з властивим родом, нерідко різні для старших і молодших родичів того самого ступеня споріднення.",
            "en": {
              "text": "Kinship terms are ordinary nouns with an inherent gender, often different for older and younger relatives of the same degree of kinship."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "uwa",
                "мати"
              ],
              [
                "uba",
                "батько"
              ],
              [
                "yayi",
                "старша сестра/брат"
              ],
              [
                "ɗan'uwa",
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
        "id": "elaborate-greeting-culture",
        "title": "Розгалужена культура привітань — B1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "Хауса славиться надзвичайно розгалуженою системою ситуативних привітань — окремі формули для привітання людини, що працює, їсть, щойно прокинулась чи повернулася з подорожі, і обмін привітаннями може тривати довше, ніж сама розмова.",
            "en": {
              "text": "Hausa is famous for an extremely elaborate system of situational greetings — separate formulas for greeting someone who is working, eating, has just woken up, or has returned from a trip, and the greeting exchange can take longer than the conversation itself."
            }
          },
          {
            "type": "table",
            "title": "Ситуативні привітання",
            "rows": [
              [
                "Sannu da aiki!",
                "Привіт тому, хто працює!"
              ],
              [
                "Barka da zuwa!",
                "Вітаю з прибуттям!"
              ]
            ],
            "en": {
              "title": "Situational Greetings"
            }
          }
        ],
        "titleEn": "The Elaborate Greeting Culture — B1"
      },
      {
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують дієсловом чи прикметниковою конструкцією без окремого безособового підмета.",
            "en": {
              "text": "Weather is described with a verb or adjectival construction, with no separate impersonal subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ana ruwan sama.",
                "Йде дощ."
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
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла — звичайні іменники з властивим родом.",
            "en": {
              "text": "Body parts are ordinary nouns with an inherent gender."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "hannu",
                "рука"
              ],
              [
                "kai",
                "голова"
              ],
              [
                "kafa",
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
            "text": "Вік виражають конструкцією \"shekara X\" (X років).",
            "en": {
              "text": "Age is expressed with the construction \"shekara X\" (X years)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shekaruna ashirin ne.",
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
        "id": "arabic-loanword-layer",
        "title": "Арабський шар запозичень — B1",
        "emoji": "☪️",
        "sections": [
          {
            "type": "intro",
            "text": "Через давнє поширення ісламу хауса запозичила численну релігійну, наукову й адміністративну лексику з арабської, адаптовану до тонової системи.",
            "en": {
              "text": "Due to Islam's long spread, Hausa borrowed extensive religious, scholarly, and administrative vocabulary from Arabic, adapted to the tone system."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "Allah",
                "Бог"
              ],
              [
                "littafi (від kitāb)",
                "книга"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The Arabic Loanword Layer — B1"
      },
      {
        "id": "english-loanword-layer",
        "title": "Англійський шар запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через колоніальну історію Нігерії хауса також має значний шар англійських запозичень, особливо в технічній і адміністративній лексиці.",
            "en": {
              "text": "Due to Nigeria's colonial history, Hausa also has a significant layer of English loanwords, especially in technical and administrative vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "mota (від motor)",
                "авто"
              ],
              [
                "telefon",
                "телефон"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The English Loanword Layer — B1"
      },
      {
        "id": "boko-vs-ajami",
        "title": "Boko vs Ajami — дві системи письма — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Хауса записують двома різними системами: \"boko\" (латинський алфавіт, стандарт сьогодні) і \"ajami\" (арабське письмо, традиційне для ісламської вченості) — рідкість мати дві повністю різні писемності для тієї самої мови водночас.",
            "en": {
              "text": "Hausa is written with two different systems: \"boko\" (Latin alphabet, today's standard) and \"ajami\" (Arabic script, traditional for Islamic scholarship) — it's rare for a language to have two fully different writing systems in concurrent use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Газети й сучасні книги — boko; релігійні тексти часто — ajami.",
                "дві писемності досі активно використовуються в різних сферах"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Boko vs Ajami — Two Writing Systems — B2"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Хаусанські ідіоми часто спираються на торгівлю, сільське господарство й традиційну мудрість.",
            "en": {
              "text": "Hausa idioms often draw on trade, agriculture, and traditional wisdom."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kowa da ra'ayinsa.",
                "У кожного своя думка."
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
        "id": "respect-forms",
        "title": "Форми шанобливості — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до старших і поважних осіб часто вживає титул перед іменем або множинну форму займенника \"ku\" замість однини навіть до однієї особи — знак поваги.",
            "en": {
              "text": "Addressing elders and respected people often uses a title before the name, or the plural pronoun \"ku\" instead of the singular even for one person — a sign of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Malam, ku zo nan.",
                "Пане вчителю, підійдіть сюди. (множинне ku до однієї особи)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Respect Forms — A2"
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
                "Kai!",
                "Ой!/Овва!"
              ],
              [
                "Na gode!",
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
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-19 утворюються конструкцією з \"sha\" (плюс) між десятком і одиницею.",
            "en": {
              "text": "Numbers 11-19 are formed with the construction using \"sha\" (plus) between the ten and the unit."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "sha ɗaya",
                "одинадцять (десять+один)"
              ],
              [
                "ashirin",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers 11-19"
            }
          }
        ],
        "titleEn": "Numbers from 11 On — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з родом іменника подібно до прикметника.",
            "en": {
              "text": "Ordinal numbers agree with the noun's gender, like an adjective."
            }
          },
          {
            "type": "table",
            "title": "na farko, na biyu",
            "rows": [
              [
                "na farko",
                "перший"
              ],
              [
                "na biyu",
                "другий"
              ]
            ],
            "en": {
              "title": "na farko, na biyu"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Wani\" (хтось/якийсь) — базовий неозначений займенник, узгоджений за родом.",
            "en": {
              "text": "\"Wani\" (someone/some) is the basic indefinite pronoun, agreeing by gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wani ya zo.",
                "Хтось прийшов."
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
            "text": "\"Kowa\" (будь-хто) у заперечному контексті з циркумфіксом ba...ba означає \"ніхто\".",
            "en": {
              "text": "\"Kowa\" (anyone) in a negative context with the ba...ba circumfix means \"no one\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Babu kowa a nan.",
                "Тут нікого немає."
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
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється часткою \"ko ba haka ba?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"ko ba haka ba?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yau rana ce mai kyau, ko ba haka ba?",
                "Гарний сьогодні день, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tag Questions — B1"
      },
      {
        "id": "purpose-clause",
        "title": "Цільове підрядне (domin) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Domin\" (для/щоб) + підрядна форма дієслова вводить цільове підрядне речення.",
            "en": {
              "text": "\"Domin\" (for/in order to) + the subordinate verb form introduces a purpose clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na zo domin in ga ku.",
                "Я прийшов, щоб побачити вас."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (domin) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (don) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Don\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Don\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na makara don na rasa bas.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (don) — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (idan) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Idan\" (якщо) вводить умовне речення з дійсним способом, на відміну від англійської, де часто потрібен умовний спосіб.",
            "en": {
              "text": "\"Idan\" (if) introduces a conditional sentence with the indicative mood, unlike English, which often needs the conditional mood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Idan ruwan sama ya zo, zan zauna a gida.",
                "Якщо піде дощ, я залишусь удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (idan) — B1"
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
            "text": "Кілька частовживаних дієслів (kasance-бути, zo-приходити, tafi-йти) не підкоряються звичайній системі 7 град і мають унікальні особово-видові комплекси.",
            "en": {
              "text": "A few common verbs (kasance-to be, zo-to come, tafi-to go) don't follow the regular 7-grade system and have unique person-aspect complexes."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "zo (приходити) → zaka zo",
                "форма майбутнього утворюється не за загальним правилом"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "irregular-plural-exceptions",
        "title": "Непередбачувані винятки множини — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже поширених іменників мають множину, яку неможливо вивести з жодного з відомих класів множини — їх слід запам'ятовувати повністю окремо.",
            "en": {
              "text": "Several very common nouns have a plural that can't be derived from any known plural class — they must be memorized entirely separately."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mutum (людина) → mutane",
                "люди (унікальна форма множини)"
              ]
            ]
          }
        ],
        "titleEn": "Unpredictable Plural Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо релігійні привітання) зберігають архаїчну арабську граматику, невластиву звичайній хауса.",
            "en": {
              "text": "Some common formulas (especially religious greetings) preserve archaic Arabic grammar not typical of ordinary Hausa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alhamdulillahi.",
                "Хвала Богові! (застигла арабська формула, вжита без змін)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      }
    ]
  }
];
