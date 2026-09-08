// Vymova — data/grammar-data/grammar_fj.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FJ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Na Vosa Vakaviti — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У фіджійській займенники різняться не лише за особою, а й за числом — є окремі форми для двох, кількох і багатьох осіб (тут показано однину й загальну множину).",
            "en": {
              "text": "Fijian pronouns vary not just by person but also by number — there are separate forms for two, a few, and many people (only singular and general plural are shown here)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "au"
              ],
              [
                "ти",
                "iko"
              ],
              [
                "він / вона / воно",
                "o koya"
              ],
              [
                "ми (без вас)",
                "keimami"
              ],
              [
                "ми (з вами)",
                "eda"
              ],
              [
                "ви",
                "kemuni"
              ],
              [
                "вони",
                "ira"
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
        "id": "verbless-sentences",
        "title": "Речення без \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "У фіджійській немає окремого дієслова \"бути\": іменне речення будується простим зіставленням підмета і присудка, часто з часткою \"o\" перед іменем підмета.",
            "en": {
              "text": "Fijian has no separate verb \"to be\": a nominal sentence is built by simple juxtaposition of subject and predicate, often with the particle \"o\" before the subject's name."
            }
          },
          {
            "type": "table",
            "title": "Іменне речення",
            "rows": [
              [
                "O Rusi na vuli.",
                "Русі — вчитель. (Русі вчитель, без \"є\")"
              ],
              [
                "Au vinaka.",
                "Я добре/мені добре."
              ]
            ],
            "en": {
              "title": "Nominal Sentence"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O koya na turaga.",
                "Він — вождь."
              ],
              [
                "Au tabaki.",
                "Я вчитель (за фахом)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentences without \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з sega — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"sega\" (немає/не), за яким слідує сполучник \"ni\" перед дієсловом.",
            "en": {
              "text": "Negation is formed with the word \"sega\" (there isn't/not), followed by the connector \"ni\" before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "E lako o koya.",
                "E sega ni lako o koya.",
                "Він іде → він не йде"
              ],
              [
                "Au kila.",
                "Au sega ni kila.",
                "Я знаю → я не знаю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sega na leqa.",
                "Немає проблеми."
              ],
              [
                "E sega ni vosa vakaViti o koya.",
                "Він не розмовляє фіджійською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with sega — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються лише інтонацією; спеціальні запитання використовують питальні слова, які часто стоять у тій самій позиції, що й відповідь.",
            "en": {
              "text": "Yes/no questions are marked only by intonation; wh-questions use question words, which often occupy the same slot as the answer would."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "o cei",
                "хто"
              ],
              [
                "na cava",
                "що"
              ],
              [
                "evei",
                "де"
              ],
              [
                "ni vica",
                "коли (о котрій)"
              ],
              [
                "na cava vakavuna",
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
                "O cei o iko?",
                "Хто ти?"
              ],
              [
                "O lako i vei?",
                "Куди ти йдеш?"
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
        "id": "tense-aspect-particles",
        "title": "Частки часу й виду — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Фіджійська не змінює саме дієслово за часом: перед ним ставиться окрема частка часу/виду (sa = вже сталося/змінився стан, na = майбутнє, se = ще).",
            "en": {
              "text": "Fijian doesn't inflect the verb itself for tense: a separate tense/aspect particle is placed before it (sa = already happened/a change of state, na = future, se = still)."
            }
          },
          {
            "type": "table",
            "title": "Частки часу",
            "rows": [
              [
                "sa lako",
                "уже пішов"
              ],
              [
                "na lako",
                "піде"
              ],
              [
                "se lako",
                "усе ще йде"
              ]
            ],
            "en": {
              "title": "Tense Particles"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sa vinaka o koya.",
                "Йому вже краще."
              ],
              [
                "Au na lako mai.",
                "Я прийду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tense and Aspect Particles — A2"
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
        "id": "continuous-tiko",
        "title": "Тривалий вид (tiko) — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"tiko\", поставлена після дієслова, позначає тривалу дію — \"саме зараз/постійно робити щось\".",
            "en": {
              "text": "The particle \"tiko\", placed after the verb, marks an ongoing action — \"doing something right now/continuously\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E kana tiko o koya.",
                "Він зараз їсть."
              ],
              [
                "Au vulica tiko na vosa vakaViti.",
                "Я вчу фіджійську (продовжую вчити)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Continuous Aspect (tiko) — A2"
      },
      {
        "id": "simple-past-a",
        "title": "Минулий час (a) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"a\" перед дієсловом позначає завершену минулу дію, окрему подію в минулому.",
            "en": {
              "text": "The particle \"a\" before the verb marks a completed past action, a discrete past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Au a lako i Suva.",
                "Я їздив до Сува."
              ],
              [
                "Era a kana.",
                "Вони поїли."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past (a) — A2"
      },
      {
        "id": "narrative-past",
        "title": "Оповідний минулий час — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "У розповідях про віддалене минуле частку \"a\" часто опускають взагалі, покладаючись на контекст і часові слова (\"ena gauna makawa\" — давним-давно).",
            "en": {
              "text": "In narratives about the remote past, the particle \"a\" is often dropped entirely, relying on context and time words (\"ena gauna makawa\" — long ago)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ena gauna makawa, e dua na turaga...",
                "Давним-давно жив один вождь..."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative Past Tense — B1"
      },
      {
        "id": "future-na",
        "title": "Майбутній час (na) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"na\" перед дієсловом позначає майбутню дію; для найближчого майбутнього часто додають \"vakalailai\" (незабаром).",
            "en": {
              "text": "The particle \"na\" before the verb marks a future action; for the immediate future \"vakalailai\" (soon) is often added."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Au na lako mai.",
                "Я прийду."
              ],
              [
                "Ena dà mai vakalailai.",
                "Він скоро прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense (na) — A2"
      },
      {
        "id": "completive-oti",
        "title": "Завершеність (oti) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"oti\" після дієслова позначає повну завершеність дії — \"уже зроблено\", подібно до перфекта в українській.",
            "en": {
              "text": "The particle \"oti\" after the verb marks full completion of an action — \"already done\", similar to the perfect in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Au vulica oti na vosa vakaViti.",
                "Я вже вивчив фіджійську."
              ],
              [
                "Era kana oti.",
                "Вони вже поїли."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completive Aspect (oti) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ утворюється голим дієсловом без частки часу; частка \"mada\" пом'якшує наказ до ввічливого прохання.",
            "en": {
              "text": "The imperative is formed with the bare verb, no tense particle; the particle \"mada\" softens the command into a polite request."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lako mai!",
                "Іди сюди!"
              ],
              [
                "Kana mada.",
                "З'їж, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "prohibitive-kua",
        "title": "Заборонний спосіб (kua) — A2",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказ утворюється словом \"kua\" (не роби) + сполучник \"ni\" перед дієсловом, окремо від звичайного заперечення \"sega\".",
            "en": {
              "text": "The negative imperative is formed with \"kua\" (don't) + the connector \"ni\" before the verb, distinct from ordinary \"sega\" negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kua ni vosa!",
                "Не говори!"
              ],
              [
                "Kua ni tagi.",
                "Не плач."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive Mood (kua) — A2"
      },
      {
        "id": "conditional-ke",
        "title": "Умовний спосіб (ke/kevaka) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення вводяться сполучником \"ke\" або повнішим \"kevaka\" (якщо), без окремого дієслівного відмінювання.",
            "en": {
              "text": "Conditional sentences are introduced with \"ke\" or the fuller \"kevaka\" (if), with no separate verb inflection."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kevaka o lako, au na lako talega.",
                "Якщо ти підеш, я теж піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood (ke/kevaka) — B1"
      },
      {
        "id": "habitual-dau",
        "title": "Звична дія (dau) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"dau\" перед дієсловом позначає звичну, регулярну дію.",
            "en": {
              "text": "The particle \"dau\" before the verb marks a habitual, regular action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Au dau kana ni mataka.",
                "Я зазвичай їм вранці."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect (dau) — B1"
      },
      {
        "id": "desiderative-via",
        "title": "Бажальний префікс via- — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"via-\", доданий до дієслова, виражає бажання зробити щось — заміняє окреме модальне дієслово \"хотіти\".",
            "en": {
              "text": "The prefix \"via-\", added to a verb, expresses wanting to do something — replacing a separate modal verb \"to want\"."
            }
          },
          {
            "type": "table",
            "title": "kana → via-kana",
            "rows": [
              [
                "kana (їсти) → viakana",
                "хотіти їсти"
              ],
              [
                "moce (спати) → viamoce",
                "хотіти спати"
              ]
            ],
            "en": {
              "title": "kana → via-kana"
            }
          }
        ],
        "titleEn": "The Desiderative Prefix via- — B1"
      },
      {
        "id": "causative-vaka",
        "title": "Каузативний префікс vaka- — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"vaka-\" перетворює дієслово на каузативне — \"змусити/зробити так, щоб X відбулося\".",
            "en": {
              "text": "The prefix \"vaka-\" turns a verb causative — \"to make/cause X to happen\"."
            }
          },
          {
            "type": "table",
            "title": "moce → vakamocea",
            "rows": [
              [
                "moce (спати) → vakamocea",
                "приспати (когось)"
              ],
              [
                "tawa (кипіти) → vakatawaa",
                "закип'ятити"
              ]
            ],
            "en": {
              "title": "moce → vakamocea"
            }
          }
        ],
        "titleEn": "The Causative Prefix vaka- — B1"
      },
      {
        "id": "transitive-suffix",
        "title": "Перехідний суфікс -a/-ca/-ta — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Перехідні дієслова часто отримують суфікс (-a, -ca, -ta, -ma...), що вказує на конкретний прямий додаток — неперехідна форма стоїть без нього.",
            "en": {
              "text": "Transitive verbs often take a suffix (-a, -ca, -ta, -ma...) marking a specific direct object — the intransitive form lacks it."
            }
          },
          {
            "type": "formula",
            "title": "Неперех. → перех.",
            "rows": [
              [
                "kana (їсти взагалі)",
                "kania (з'їсти щось конкретне)",
                "неперехідне → перехідне з об'єктом"
              ]
            ]
          }
        ],
        "titleEn": "The Transitive Suffix -a/-ca/-ta — B1"
      },
      {
        "id": "reciprocal-vei",
        "title": "Взаємний префікс vei- — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"vei-\" на дієслові виражає взаємну дію (\"один одного\") або спільну/розподілену дію серед кількох осіб.",
            "en": {
              "text": "The prefix \"vei-\" on a verb expresses reciprocal action (\"each other\") or a shared/distributed action among several people."
            }
          },
          {
            "type": "table",
            "title": "raica → veiraica",
            "rows": [
              [
                "raica (бачити) → veiraica",
                "бачити одне одного"
              ],
              [
                "lavota (бити) → veilavota",
                "битися"
              ]
            ],
            "en": {
              "title": "raica → veiraica"
            }
          }
        ],
        "titleEn": "The Reciprocal Prefix vei- — B1"
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
        "id": "dual-pronouns",
        "title": "Двоїна в займенниках (-rau) — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Фіджійська, як і багато океанійських мов, розрізняє число \"двоє\" окремою формою займенника — суфікс -rau, доданий до кореня.",
            "en": {
              "text": "Fijian, like many Oceanic languages, distinguishes \"just two\" with a separate pronoun form — the suffix -rau added to the root."
            }
          },
          {
            "type": "table",
            "title": "Двоїна",
            "rows": [
              [
                "keirau",
                "ми двоє (без тебе)"
              ],
              [
                "daru",
                "ми двоє (з тобою)"
              ],
              [
                "drau",
                "ви двоє"
              ],
              [
                "rau",
                "вони двоє"
              ]
            ],
            "en": {
              "title": "Dual Forms"
            }
          }
        ],
        "titleEn": "Dual Pronouns (-rau) — A2"
      },
      {
        "id": "paucal-pronouns",
        "title": "Мала множина (-tou) — A2",
        "emoji": "👨‍👩‍👦",
        "sections": [
          {
            "type": "intro",
            "text": "Крім двоїни, є окрема форма для \"кількох\" (зазвичай 3-4 особи) — суфікс -tou, відмінна і від двоїни, і від загальної множини.",
            "en": {
              "text": "Besides the dual, there's a separate form for \"a few\" (typically 3-4 people) — the suffix -tou, distinct from both the dual and the general plural."
            }
          },
          {
            "type": "table",
            "title": "Мала множина",
            "rows": [
              [
                "keitou",
                "ми кілька (без тебе)"
              ],
              [
                "datou",
                "ми кілька (з тобою)"
              ],
              [
                "dou",
                "ви кілька"
              ],
              [
                "ratou",
                "вони кілька"
              ]
            ],
            "en": {
              "title": "Paucal Forms"
            }
          }
        ],
        "titleEn": "Paucal Number (-tou) — A2"
      },
      {
        "id": "plural-pronouns",
        "title": "Загальна множина займенників — A1",
        "emoji": "👨‍👩‍👧‍👦",
        "sections": [
          {
            "type": "intro",
            "text": "Форма загальної множини (\"багато\") використовується для великих груп, на відміну від двоїни й малої множини.",
            "en": {
              "text": "The general plural form (\"many\") is used for large groups, in contrast to the dual and paucal."
            }
          },
          {
            "type": "table",
            "title": "Множина",
            "rows": [
              [
                "keimami",
                "ми (багато, без вас)"
              ],
              [
                "eda",
                "ми (багато, з вами)"
              ],
              [
                "kemuni",
                "ви (багато)"
              ],
              [
                "ira",
                "вони (багато)"
              ]
            ],
            "en": {
              "title": "Plural Forms"
            }
          }
        ],
        "titleEn": "General Plural Pronouns — A1"
      },
      {
        "id": "inclusive-exclusive",
        "title": "Інклюзивне й ексклюзивне \"ми\" — A2",
        "emoji": "🫂",
        "sections": [
          {
            "type": "intro",
            "text": "Кожна форма \"ми\" (двоїна, мала й загальна множина) має інклюзивний варіант (\"ми зі слухачем\") і ексклюзивний (\"ми без слухача\") — це системне протиставлення на кожному числовому рівні.",
            "en": {
              "text": "Every \"we\" form (dual, paucal, and general plural) has an inclusive variant (\"we including the listener\") and an exclusive one (\"we excluding the listener\") — this contrast is systematic at every number level."
            }
          },
          {
            "type": "formula",
            "title": "Інклюзив vs ексклюзив",
            "rows": [
              [
                "eda",
                "keimami",
                "ми (з тобою) → ми (без тебе)"
              ],
              [
                "daru",
                "keirau",
                "ми двоє (з тобою) → ми двоє (без тебе)"
              ]
            ]
          }
        ],
        "titleEn": "Inclusive vs Exclusive \"We\" — A2"
      },
      {
        "id": "common-article-na",
        "title": "Загальний артикль na — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"na\" передує звичайним іменникам як загальний артикль, приблизно як \"the\" в англійській, але вживається значно частіше.",
            "en": {
              "text": "The particle \"na\" precedes ordinary nouns as a general article, roughly like \"the\" in English, but used far more consistently."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na vale.",
                "Дім."
              ],
              [
                "Au raica na vale.",
                "Я бачу дім."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Common Article na — A1"
      },
      {
        "id": "personal-article-o",
        "title": "Особовий артикль o — A1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"o\" передує власним іменам і особовим займенникам у ролі підмета — окремий артикль для людей, відмінний від \"na\" для звичайних предметів.",
            "en": {
              "text": "The particle \"o\" precedes proper names and personal pronouns in subject position — a separate article for people, distinct from \"na\" for ordinary things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O Mere e lako.",
                "Мере йде."
              ],
              [
                "O au.",
                "Це я."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Personal Article o — A1"
      },
      {
        "id": "possession-general",
        "title": "Загальна присвійність (nei/no) — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Загальна (нейтральна) присвійність позначається класифікатором \"no-\" з присвійним суфіксом — базовий клас для більшості предметів.",
            "en": {
              "text": "General (neutral) possession is marked with the classifier \"no-\" plus a possessive suffix — the default class for most objects."
            }
          },
          {
            "type": "table",
            "title": "noqu, nomu, nona",
            "rows": [
              [
                "noqu vale",
                "мій дім"
              ],
              [
                "nomu ivola",
                "твоя книга"
              ],
              [
                "nona qito",
                "його/її гра"
              ]
            ],
            "en": {
              "title": "noqu, nomu, nona"
            }
          }
        ],
        "titleEn": "General Possession (no-) — A2"
      },
      {
        "id": "possession-food",
        "title": "Класифікатор \"їстівне\" (ke-) — B1",
        "emoji": "🍽️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса океанійських мов: присвійність розрізняється за класом предмета. Класифікатор \"ke-\" вживається спеціально для їжі, призначеної для споживання власником.",
            "en": {
              "text": "A distinctive Oceanic feature: possession is classified by the type of object. The classifier \"ke-\" is used specifically for food intended to be eaten by the possessor."
            }
          },
          {
            "type": "table",
            "title": "kequ, kemu, kena",
            "rows": [
              [
                "kequ ika",
                "моя риба (для їжі)"
              ],
              [
                "kemu dovu",
                "твоя цукрова тростина (для їжі)"
              ]
            ],
            "en": {
              "title": "kequ, kemu, kena"
            }
          }
        ],
        "titleEn": "The \"Edible\" Possessive Classifier (ke-) — B1"
      },
      {
        "id": "possession-drink",
        "title": "Класифікатор \"питне\" (me-) — B1",
        "emoji": "🥤",
        "sections": [
          {
            "type": "intro",
            "text": "Класифікатор \"me-\" вживається для предметів, призначених для пиття — окремий клас від їстівного \"ke-\".",
            "en": {
              "text": "The classifier \"me-\" is used for things meant for drinking — a class separate from the edible \"ke-\"."
            }
          },
          {
            "type": "table",
            "title": "mequ, memu, mena",
            "rows": [
              [
                "mequ wai",
                "моя вода (для пиття)"
              ],
              [
                "memu yaqona",
                "твоя кава/кава (для пиття)"
              ]
            ],
            "en": {
              "title": "mequ, memu, mena"
            }
          }
        ],
        "titleEn": "The \"Drinkable\" Possessive Classifier (me-) — B1"
      },
      {
        "id": "alienable-inalienable",
        "title": "Відчужувана vs невідчужувана присвійність — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла, родичі й нерозривно пов'язані предмети (невідчужуване) приєднують присвійний суфікс безпосередньо до іменника, без окремого класифікатора, на відміну від відчужуваних предметів.",
            "en": {
              "text": "Body parts, kin, and inseparably linked things (inalienable) attach the possessive suffix directly to the noun, with no separate classifier, unlike alienable objects."
            }
          },
          {
            "type": "formula",
            "title": "Невідчужуване vs відчужуване",
            "rows": [
              [
                "liga-qu",
                "noqu ivola",
                "моя рука (безпосередньо) vs моя книга (окремий класифікатор no-)"
              ]
            ]
          }
        ],
        "titleEn": "Alienable vs Inalienable Possession — B1"
      },
      {
        "id": "reduplication-plurality",
        "title": "Редуплікація для множинності — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення основи дієслова чи прикметника може позначати множинного суб'єкта або дію, що стосується кількох об'єктів.",
            "en": {
              "text": "Reduplicating the verb or adjective stem can mark a plural subject or an action affecting several objects."
            }
          },
          {
            "type": "table",
            "title": "levu → levulevu",
            "rows": [
              [
                "levu (великий) → levulevu",
                "великі (про багато речей)"
              ],
              [
                "lako (йти) → lakolako",
                "ходити туди-сюди/гуляти"
              ]
            ],
            "en": {
              "title": "levu → levulevu"
            }
          }
        ],
        "titleEn": "Reduplication for Plurality — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація для інтенсивності — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама редуплікація може виражати не множину, а посилення ознаки або тривалу/повторювану дію — значення визначає контекст.",
            "en": {
              "text": "The same reduplication can express not plurality but intensification of a quality, or a prolonged/repeated action — meaning is set by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bibi.",
                "Важкий."
              ],
              [
                "Bibi bibi.",
                "Дуже важкий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники в фіджійській — десяткова система, числівники стоять перед або після іменника, часто з часткою \"e\" перед ними.",
            "en": {
              "text": "Fijian numbers are a decimal system; numerals stand before or after the noun, often with the particle \"e\" preceding them."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "dua",
                "один"
              ],
              [
                "rua",
                "два"
              ],
              [
                "tolu",
                "три"
              ],
              [
                "lima",
                "п'ять"
              ],
              [
                "tini",
                "десять"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Numbers 1-10 — A1"
      },
      {
        "id": "large-numbers",
        "title": "Великі числа (bese, udolu) — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Для великих чисел є окремі корені: bese (сотня), udolu (тисяча) — вони поєднуються з базовими числівниками за загальними правилами.",
            "en": {
              "text": "Large numbers have their own roots: bese (hundred), udolu (thousand) — they combine with the basic numerals following general rules."
            }
          },
          {
            "type": "table",
            "title": "bese / udolu",
            "rows": [
              [
                "e dua na bese",
                "сто (одна сотня)"
              ],
              [
                "e dua na udolu",
                "тисяча"
              ]
            ],
            "en": {
              "title": "bese / udolu"
            }
          }
        ],
        "titleEn": "Large Numbers (bese, udolu) — B1"
      },
      {
        "id": "directional-mai",
        "title": "Напрямкова частка mai — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mai\" після дієслова показує рух у бік мовця — характерна риса океанійських мов, де напрямок закодований прямо в дієслівному комплексі.",
            "en": {
              "text": "\"Mai\" after the verb marks motion towards the speaker — a hallmark of Oceanic languages, where direction is encoded right in the verb complex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lako mai!",
                "Іди сюди!"
              ],
              [
                "Kauta mai.",
                "Принеси це (сюди)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Directional Particle mai — B1"
      },
      {
        "id": "directional-yani",
        "title": "Напрямкова частка yani — B1",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Yani\" після дієслова показує рух від мовця — протилежність \"mai\".",
            "en": {
              "text": "\"Yani\" after the verb marks motion away from the speaker — the opposite of \"mai\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lako yani!",
                "Іди звідси!"
              ],
              [
                "Kauta yani.",
                "Віднеси це (туди)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Directional Particle yani — B1"
      },
      {
        "id": "locative-prepositions",
        "title": "Локативні прийменники e/mai/ki — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "\"E\" позначає перебування в місці, \"ki\" — рух до місця, \"mai\" (як прийменник) — рух звідкись.",
            "en": {
              "text": "\"E\" marks location at a place, \"ki\" marks motion to a place, \"mai\" (as a preposition) marks motion from somewhere."
            }
          },
          {
            "type": "table",
            "title": "e / ki / mai",
            "rows": [
              [
                "e Suva",
                "у Сува"
              ],
              [
                "ki Suva",
                "до Сува"
              ],
              [
                "mai Suva",
                "з Сува"
              ]
            ],
            "en": {
              "title": "e / ki / mai"
            }
          }
        ],
        "titleEn": "Locative Prepositions e/mai/ki — A2"
      },
      {
        "id": "word-order-vos",
        "title": "Порядок слів VOS — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий, нейтральний порядок слів у фіджійській — дієслово-додаток-підмет (VOS), відмінний від українського SVO.",
            "en": {
              "text": "The basic, neutral word order in Fijian is verb-object-subject (VOS), unlike Ukrainian's SVO."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E kania na ika o koya.",
                "Він їсть рибу. (їсть-рибу-він)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "VOS Word Order — A2"
      },
      {
        "id": "stative-adjectives",
        "title": "Прикметники як дієслова — A2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "У фіджійській немає окремого класу прикметників у європейському сенсі: якість передається статичним дієсловом, яке відмінюється так само, як і будь-яке інше дієслово.",
            "en": {
              "text": "Fijian has no separate adjective class in the European sense: quality is expressed by a stative verb, which behaves grammatically just like any other verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E levu na vale.",
                "Дім великий. (буквально: дім \"великіє\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — A2"
      },
      {
        "id": "comparison",
        "title": "Порівняння без окремої форми — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Немає морфологічного порівняльного ступеня: порівняння виражають словом \"cake\" (більше) або конструкцією \"sivia + мета порівняння\".",
            "en": {
              "text": "There's no morphological comparative: comparison is expressed with the word \"cake\" (more) or the construction \"sivia + comparison target\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E levu cake o koya vei au.",
                "Він більший за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison without a Special Form — B1"
      },
      {
        "id": "demonstratives",
        "title": "Вказівні займенники — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова розрізняють три ступені віддаленості: oqo (близько до мовця), oya (близько до слухача), o ya (далеко від обох).",
            "en": {
              "text": "Demonstratives distinguish three degrees of distance: oqo (near the speaker), oya (near the listener), o ya (far from both)."
            }
          },
          {
            "type": "table",
            "title": "oqo / oya / o ya",
            "rows": [
              [
                "na vale oqo",
                "цей дім (тут)"
              ],
              [
                "na vale oya",
                "той дім (у тебе)"
              ],
              [
                "na vale o ya",
                "он той дім (далеко)"
              ]
            ],
            "en": {
              "title": "oqo / oya / o ya"
            }
          }
        ],
        "titleEn": "Demonstratives — A2"
      },
      {
        "id": "relative-clause-marker",
        "title": "Маркер підрядного речення — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні означальні речення часто просто йдуть одразу за іменником без окремого відносного займенника, зі своєю власною часткою підмета \"e\".",
            "en": {
              "text": "Relative clauses often simply follow the noun directly with no separate relative pronoun, carrying their own subject particle \"e\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na tamata e lako mai.",
                "Людина, яка йде сюди."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause Marking — B1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Основні сполучники з'єднують слова і речення; \"ka\" — найзагальніший сполучник \"і\".",
            "en": {
              "text": "Basic conjunctions link words and clauses; \"ka\" is the most general conjunction \"and\"."
            }
          },
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "ka",
                "і"
              ],
              [
                "se",
                "або"
              ],
              [
                "ia",
                "але"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "kinship-classificatory",
        "title": "Класифікаційна система спорідненості — B1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Терміни спорідненості класифікаційні, а не описові: одне слово може позначати і батька, і братів батька (усіх \"батьківського покоління чоловіків\").",
            "en": {
              "text": "Kinship terms are classificatory, not descriptive: one word can denote both the father and the father's brothers (all \"male members of the parental generation\")."
            }
          },
          {
            "type": "table",
            "title": "tama, tina",
            "rows": [
              [
                "tama",
                "батько (і дядьки по батьківській лінії)"
              ],
              [
                "tina",
                "мати (і тітки по материнській лінії)"
              ]
            ],
            "en": {
              "title": "tama, tina"
            }
          }
        ],
        "titleEn": "Classificatory Kinship Terms — B1"
      },
      {
        "id": "cv-syllable-structure",
        "title": "Складова структура CV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Фіджійські слова майже завжди складаються зі складів приголосний+голосний (CV) — немає збігів приголосних і слів, що закінчуються на приголосну.",
            "en": {
              "text": "Fijian words almost always consist of consonant+vowel (CV) syllables — there are no consonant clusters and no words ending in a consonant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vinaka (в-і-н-а-к-а)",
                "добре (усі склади CV)"
              ],
              [
                "Sitowa (з англ. \"store\")",
                "магазин — адаптовано під CV-структуру"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The CV Syllable Structure — A1"
      },
      {
        "id": "vinaka-polysemy",
        "title": "Багатозначність слова vinaka — A1",
        "emoji": "🔓",
        "sections": [
          {
            "type": "intro",
            "text": "\"Vinaka\" поєднує значення \"добре\", \"гарний\", \"дякую\" і навіть \"так, правильно\" — конкретний сенс визначається виключно контекстом і інтонацією.",
            "en": {
              "text": "\"Vinaka\" combines the meanings \"good\", \"nice\", \"thank you\" and even \"yes, correct\" — the specific sense is set purely by context and intonation."
            }
          },
          {
            "type": "table",
            "title": "Три значення vinaka",
            "rows": [
              [
                "E vinaka na kakana.",
                "Їжа смачна."
              ],
              [
                "Vinaka!",
                "Дякую!"
              ],
              [
                "Vinaka, sa dodonu.",
                "Так, правильно."
              ]
            ],
            "en": {
              "title": "Three Meanings of vinaka"
            }
          }
        ],
        "titleEn": "The Polysemy of vinaka — A1"
      },
      {
        "id": "chiefly-register",
        "title": "Урочистий регістр (vosa vakaturaga) — C1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Для вождів і формальних ситуацій існує окремий словник урочистих слів (vosa vakaturaga), паралельний до повсякденного — подібно до різних рівнів ввічливості в інших мовах, але лексично, а не граматично.",
            "en": {
              "text": "For chiefs and formal situations there's a separate vocabulary of honorific words (vosa vakaturaga), parallel to everyday speech — similar to politeness levels elsewhere, but lexical rather than grammatical."
            }
          },
          {
            "type": "table",
            "title": "Звичайне vs урочисте слово",
            "rows": [
              [
                "kana (їсти, звич.)",
                "vakalevu (їсти, про вождя)"
              ]
            ],
            "en": {
              "title": "Everyday vs Honorific Word"
            }
          }
        ],
        "titleEn": "The Chiefly Register (vosa vakaturaga) — C1"
      },
      {
        "id": "greetings",
        "title": "Привітання — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "\"Bula\" — універсальне привітання й побажання здоров'я, найвідоміше фіджійське слово у світі.",
            "en": {
              "text": "\"Bula\" is the universal greeting and wish for health, the most internationally known Fijian word."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Bula!",
                "Привіт!/Здоров'я!"
              ],
              [
                "Ni sa bula!",
                "Привіт! (ввічливо, до групи/старших)"
              ],
              [
                "Moce!",
                "Прощавай!/Добраніч!"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "time-expressions",
        "title": "Вирази часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час доби ділиться на кілька частин зі своїми словами, без точного погодинного вираження в традиційному вжитку.",
            "en": {
              "text": "The day is divided into several named parts, without precise clock-hour expressions in traditional usage."
            }
          },
          {
            "type": "table",
            "title": "Частини дня",
            "rows": [
              [
                "mataka",
                "ранок"
              ],
              [
                "siga",
                "день"
              ],
              [
                "yakavi",
                "вечір"
              ],
              [
                "bogi",
                "ніч"
              ]
            ],
            "en": {
              "title": "Parts of the Day"
            }
          }
        ],
        "titleEn": "Time Expressions — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Назви днів тижня — переважно запозичення з англійської, адаптовані під фіджійську фонологію (CV-структуру складів).",
            "en": {
              "text": "The names of the days of the week are mostly borrowed from English, adapted to Fijian phonology (the CV syllable structure)."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Moniti",
                "понеділок"
              ],
              [
                "Tusite",
                "вівторок"
              ],
              [
                "Vakarauwai",
                "середа"
              ],
              [
                "Vukelulu",
                "четвер"
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
        "id": "colors",
        "title": "Кольори — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кольори — статичні дієслова, як і всі \"прикметники\" в фіджійській, і поводяться граматично так само.",
            "en": {
              "text": "Colors are stative verbs, like all Fijian \"adjectives\", and behave grammatically the same way."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "vulavula",
                "білий"
              ],
              [
                "loaloa",
                "чорний"
              ],
              [
                "damudamu",
                "червоний"
              ],
              [
                "drokadroka",
                "зелений"
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
        "id": "family-address",
        "title": "Звертання до родини — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до родичів часто вживають без присвійного займенника — сам термін уже передбачає, що йдеться про особисту родину мовця.",
            "en": {
              "text": "Terms of address to relatives are often used without a possessive pronoun — the term itself already implies the speaker's own family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tina!",
                "Мамо!"
              ],
              [
                "Tama!",
                "Тату!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Addressing Family — A1"
      },
      {
        "id": "serial-verbs",
        "title": "Серіальні дієслівні конструкції — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів можуть стояти поспіль без сполучника, описуючи одну складну дію послідовними кроками — типова риса океанійського синтаксису.",
            "en": {
              "text": "Several verbs can stand in a row with no conjunction, describing one complex action as sequential steps — a typical trait of Oceanic syntax."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lako curu mai.",
                "Іди-заходь-сюди (=зайди)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verb Constructions — B2"
      },
      {
        "id": "emphatic-ga",
        "title": "Емфатична частка ga — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ga\", додана після слова, підкреслює його — \"саме\", \"тільки\", \"якраз\".",
            "en": {
              "text": "The particle \"ga\", added after a word, emphasizes it — \"exactly\", \"only\", \"just\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Au ga.",
                "Тільки я."
              ],
              [
                "Vinaka ga.",
                "Просто добре (без проблем)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Emphatic Particle ga — B1"
      },
      {
        "id": "classifiers-people-things",
        "title": "Лічба людей і речей — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Рахуючи людей, іноді додають класифікатор перед числом, тоді як предмети рахують числівником напряму без нього.",
            "en": {
              "text": "When counting people, a classifier is sometimes added before the number, while objects are counted with the numeral directly, without one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "e tolu na tamata",
                "троє людей"
              ],
              [
                "e tolu na vale",
                "три доми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Counting People vs Things — B1"
      },
      {
        "id": "vaka-manner",
        "title": "Префікс vaka- \"на манір\" — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Крім каузативного значення, \"vaka-\" також утворює прислівники й прикметники способу \"так, як\" — \"на кшталт/по-фіджійськи\".",
            "en": {
              "text": "Besides its causative meaning, \"vaka-\" also forms manner adverbs and adjectives \"in the manner of\" — \"like/in the Fijian way\"."
            }
          },
          {
            "type": "table",
            "title": "vakaViti",
            "rows": [
              [
                "vakaViti",
                "по-фіджійськи"
              ],
              [
                "vakaVulagi",
                "по-іноземному"
              ]
            ],
            "en": {
              "title": "vakaViti"
            }
          }
        ],
        "titleEn": "The Prefix vaka- \"in the Manner of\" — B1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують дієслово й іменник, описуючи предмет через його функцію.",
            "en": {
              "text": "Compound words often join a verb and a noun, describing an object through its function."
            }
          },
          {
            "type": "table",
            "title": "vanua + levu",
            "rows": [
              [
                "vanua (земля) + levu (велика) = Vanua Levu",
                "Вануа-Леву (велика земля, назва острова)"
              ]
            ],
            "en": {
              "title": "vanua + levu"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "loanword-adaptation",
        "title": "Адаптація англійських запозичень — A2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Англійські запозичення адаптуються під CV-структуру складів: приголосні на кінці слова отримують додатковий голосний, збіги приголосних розбиваються.",
            "en": {
              "text": "English loanwords are adapted to the CV syllable structure: final consonants get an extra vowel, consonant clusters are broken up."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "sitoa (від \"store\")",
                "магазин"
              ],
              [
                "masi (від \"mass\"?, тканина)",
                "тапа-тканина"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Adapting English Loanwords — A2"
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
                "Isa!",
                "Шкода!/Ой леле!"
              ],
              [
                "Vinaka!",
                "Дякую!/Чудово!"
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Фіджійські ідіоми часто спираються на море, землю й общинне життя.",
            "en": {
              "text": "Fijian idioms often draw on the sea, the land, and communal life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sa levu na kena.",
                "Це вже занадто (букв. \"його велике\")."
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
        "id": "politeness-particles",
        "title": "Частки ввічливості — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"yalo vinaka\" (буквально \"добра душа\") виражає \"будь ласка\", а \"vinaka\" саме по собі означає і \"добре\", і \"дякую\".",
            "en": {
              "text": "The phrase \"yalo vinaka\" (literally \"good soul\") expresses \"please\", while \"vinaka\" by itself means both \"good\" and \"thank you\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yalo vinaka, kauta mai.",
                "Будь ласка, принеси це."
              ],
              [
                "Vinaka vakalevu.",
                "Дуже дякую."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness Particles — A2"
      },
      {
        "id": "tag-question",
        "title": "Розділове питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"tikoga\" або підвищення інтонації в кінці стверджувального речення перетворює його на розділове питання \"чи не так?\".",
            "en": {
              "text": "The particle \"tikoga\" or a rising final intonation turns a statement into a tag question \"isn't that so?\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vinaka na siga, tikoga?",
                "Гарний день, чи не так?"
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
        "id": "body-parts-possession",
        "title": "Частини тіла й присвійність — A2",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла — невідчужувані іменники, тому присвійний суфікс приєднується прямо до них, без окремого класифікатора no-/ke-/me-.",
            "en": {
              "text": "Body parts are inalienable nouns, so the possessive suffix attaches directly to them, with no separate no-/ke-/me- classifier."
            }
          },
          {
            "type": "table",
            "title": "liga-qu, uluqu",
            "rows": [
              [
                "liga-qu",
                "моя рука"
              ],
              [
                "ulu-qu",
                "моя голова"
              ]
            ],
            "en": {
              "title": "liga-qu, uluqu"
            }
          }
        ],
        "titleEn": "Body Parts and Possession — A2"
      },
      {
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують статичними дієсловами, як і будь-яку іншу якість, без окремого безособового підмета типу \"воно\".",
            "en": {
              "text": "Weather is described with stative verbs, like any other quality, with no separate impersonal subject like English \"it\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E uca.",
                "Йде дощ."
              ],
              [
                "E katakata.",
                "Спекотно."
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
        "id": "adverbs-manner",
        "title": "Прислівники способу дії — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу часто стоять одразу після дієслова, без окремого сполучного слова.",
            "en": {
              "text": "Manner adverbs often stand right after the verb, with no separate connecting word."
            }
          },
          {
            "type": "table",
            "title": "Приклади прислівників",
            "rows": [
              [
                "totolo",
                "швидко"
              ],
              [
                "malua",
                "повільно/повагом"
              ]
            ],
            "en": {
              "title": "Example Adverbs"
            }
          }
        ],
        "titleEn": "Manner Adverbs — A2"
      },
      {
        "id": "reduplication-adjectives",
        "title": "Редуплікація для послаблення ознаки — B1",
        "emoji": "🎚️",
        "sections": [
          {
            "type": "intro",
            "text": "Залежно від слова, редуплікація може також послаблювати ознаку (\"трошки\") замість посилення — значення слід запам'ятовувати для кожного слова окремо.",
            "en": {
              "text": "Depending on the word, reduplication can also weaken a quality (\"somewhat\") instead of intensifying it — the meaning must be learned per word."
            }
          },
          {
            "type": "table",
            "title": "damu → damudamu",
            "rows": [
              [
                "damu (стигнути) → damudamu",
                "червонуватий (послаблення)"
              ]
            ],
            "en": {
              "title": "damu → damudamu"
            }
          }
        ],
        "titleEn": "Reduplication for Attenuation — B1"
      },
      {
        "id": "purpose-clause-me",
        "title": "Цільове підрядне me — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"me\" перед дієсловом у підрядному реченні виражає мету — \"щоб\".",
            "en": {
              "text": "The particle \"me\" before the verb in a subordinate clause expresses purpose — \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Au lako me raica.",
                "Я йду, щоб побачити (це)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause me — B1"
      },
      {
        "id": "social-hierarchy-language",
        "title": "Соціальна ієрархія в мові — C1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір урочистого чи повсякденного слова, а також порядок звертання в промовах підпорядковані традиційній соціальній ієрархії (вожді, старійшини, миряни) — мовна форма прямо кодує статус.",
            "en": {
              "text": "The choice of honorific vs everyday word, and the order of address in speeches, follow the traditional social hierarchy (chiefs, elders, commoners) — the linguistic form directly encodes status."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na Turaga Bale na Tui.",
                "Його Високість Верховний Вождь. (титул перед іменем)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Social Hierarchy Encoded in Language — C1"
      },
      {
        "id": "yaqona-ceremony-vocab",
        "title": "Церемоніальна лексика (yaqona) — B2",
        "emoji": "🍵",
        "sections": [
          {
            "type": "intro",
            "text": "Церемонія yaqona (кава/кава-кава) має власний словник команд і формул, обов'язкових у традиційному ритуалі гостинності.",
            "en": {
              "text": "The yaqona (kava) ceremony has its own vocabulary of commands and set phrases, obligatory in the traditional hospitality ritual."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vakarau!",
                "Приготуйтесь! (команда під час церемонії)"
              ],
              [
                "Maca!",
                "До дна! (після випитого)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ceremonial Vocabulary (yaqona) — B2"
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
        "id": "irregular-transitive-suffixes",
        "title": "Непередбачувані перехідні суфікси — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча перехідний суфікс зазвичай -a, конкретна форма (-ca, -ta, -va, -ma) для кожного дієслова непередбачувана й вимагає запам'ятовування окремо.",
            "en": {
              "text": "While the transitive suffix is usually -a, the exact form (-ca, -ta, -va, -ma) for each verb is unpredictable and must be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Непередбачувані форми",
            "rows": [
              [
                "raica (бачити)",
                "vakadinata (підтвердити)",
                "суфікс -ca/-ta не виводиться з правила"
              ]
            ]
          }
        ],
        "titleEn": "Unpredictable Transitive Suffixes — B2"
      },
      {
        "id": "loanword-exceptions",
        "title": "Винятки в адаптації запозичень — B2",
        "emoji": "🈳",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі давні запозичення (особливо з тонганської чи самоанської доколоніальних контактів) не підкоряються сучасним правилам адаптації й зберігають нетипові звукосполучення.",
            "en": {
              "text": "Some old loanwords (especially from pre-colonial Tongan or Samoan contact) don't follow the modern adaptation rules and retain atypical sound combinations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Toga-запозичення зберігають архаїчну форму, відмінну від очікуваної CV-адаптації.",
                "історичний шар запозичень, що передує англійському контакту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Exceptions in Loanword Adaptation — B2"
      },
      {
        "id": "fixed-ceremonial-phrases",
        "title": "Застиглі церемоніальні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі ритуальні формули вживають архаїчні форми слів або граматичні конструкції, що вийшли з повсякденного вжитку, і не підкоряються сучасним правилам.",
            "en": {
              "text": "Some ritual formulas use archaic word forms or grammatical constructions that have fallen out of everyday use and don't follow modern rules."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sa qai vakarau na yaqona.",
                "Кава-церемонія готова (архаїчний зворот sa qai)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Ceremonial Expressions — B2"
      }
    ]
  }
];
