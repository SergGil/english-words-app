// Vymova — data/grammar-data/grammar_ky.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Жіктеме ат атоочтор — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У киргизькій немає граматичного роду — займенник \"ал\" однаково означає \"він\", \"вона\" й \"воно\".",
            "en": {
              "text": "Kyrgyz has no grammatical gender — the pronoun \"ал\" means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "мен"
              ],
              [
                "ти (зв. / ввічл.)",
                "сен / сиз"
              ],
              [
                "він / вона / воно",
                "ал"
              ],
              [
                "ми",
                "биз"
              ],
              [
                "ви",
                "силер"
              ],
              [
                "вони",
                "алар"
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
        "id": "bar-jok-existential",
        "title": "Бар/жок — \"є\"/\"немає\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі немає окремого дієслова \"бути\": наявність виражають словами \"бар\" (є) і \"жок\" (немає), а якісні речення просто зіставляють підмет і присудок без дієслова.",
            "en": {
              "text": "In the present tense there's no separate verb \"to be\": existence is expressed with the words \"бар\" (there is) and \"жок\" (there isn't), while qualitative sentences simply juxtapose subject and predicate with no verb."
            }
          },
          {
            "type": "table",
            "title": "Бар vs жок",
            "rows": [
              [
                "Менде китеп бар.",
                "У мене є книга."
              ],
              [
                "Менде акча жок.",
                "У мене немає грошей."
              ]
            ],
            "en": {
              "title": "Bar vs Jok"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен мугалиммин.",
                "Я вчитель. (без дієслова \"є\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Бар/жок — \"There Is\"/\"There Isn't\" — A1"
      },
      {
        "id": "negation-suffix",
        "title": "Заперечення суфіксом -ба/-бе — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється не окремим словом, а суфіксом -ба-/-бе-/-бо-/-бө- (форма залежить від гармонії голосних), доданим прямо до основи дієслова.",
            "en": {
              "text": "Negation is formed not with a separate word but with the suffix -ба-/-бе-/-бо-/-бө- (its form depends on vowel harmony), added directly to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "барам",
                "барбайм",
                "я йду → я не йду (бар+ба)"
              ],
              [
                "билет",
                "билбейт",
                "він знає → він не знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен чарчаган эмесмин.",
                "Я не втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Suffixal Negation (-ба-/-бе-) — A2"
      },
      {
        "id": "questions",
        "title": "Питальна частка -бы/-би — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання утворюють часткою -бы/-би/-бу/-бү (форма змінюється за гармонією голосних), доданою в кінці речення; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are formed with the particle -бы/-би/-бу/-бү (its form changes by vowel harmony), added at the end of the sentence; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "ким",
                "хто"
              ],
              [
                "эмне",
                "що"
              ],
              [
                "кайда",
                "де"
              ],
              [
                "качан",
                "коли"
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
                "Сен кыргызсыңбы?",
                "Ти киргиз?"
              ],
              [
                "Сен кайда жашайсың?",
                "Де ти живеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Question Particle -бы/-би — A1"
      },
      {
        "id": "vowel-harmony",
        "title": "Гармонія голосних — A2",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса киргизької: усі суфікси мають кілька варіантів, і вибір визначається голосними кореня слова за твердістю/м'якістю та огубленістю — суфікс \"підлаштовується\" під звучання кореня.",
            "en": {
              "text": "Kyrgyz's most defining trait: every suffix has several variants, and the choice is determined by the root word's vowels for backness and roundedness — the suffix \"adjusts\" to match the root's sound."
            }
          },
          {
            "type": "table",
            "title": "Один суфікс, чотири форми",
            "rows": [
              [
                "үй-лөр (доми)",
                "суфікс множини -лөр після заднього огубленого"
              ],
              [
                "кыз-дар (дівчата)",
                "той самий суфікс як -дар після незаднього неогубленого"
              ]
            ],
            "en": {
              "title": "One Suffix, Four Forms"
            }
          }
        ],
        "titleEn": "Vowel Harmony — A2"
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
        "title": "Теперішній час — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній/звичний час утворюється суфіксом -а-/-е-/-йт, узгодженим з підметом за особою.",
            "en": {
              "text": "The present/habitual tense is formed with the suffix -а-/-е-/-йт, agreeing with the subject in person."
            }
          },
          {
            "type": "table",
            "title": "бар- (йти) — теперішній час",
            "rows": [
              [
                "мен барам",
                "я йду"
              ],
              [
                "сен барасың",
                "ти йдеш"
              ],
              [
                "ал барат",
                "він іде"
              ]
            ],
            "en": {
              "title": "бар- (to go) — Present Tense"
            }
          }
        ],
        "titleEn": "The Present Tense — A1"
      },
      {
        "id": "past-definite",
        "title": "Минулий час очевидця (-ды) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ды/-ди/-ду/-дү позначає минулу дію, яку мовець бачив особисто або знає напевно.",
            "en": {
              "text": "The suffix -ды/-ди/-ду/-дү marks a past action the speaker witnessed personally or knows for certain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен бардым.",
                "Я пішов (я бачив/знаю точно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Definite (Witnessed) Past (-ды) — A2"
      },
      {
        "id": "past-reportative",
        "title": "Переказовий минулий час (-ыптыр) — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса тюркських мов: окремий суфікс -ыптыр/-иптир позначає дію, про яку мовець дізнався з чужих слів чи висновку, а не бачив особисто — граматичне вираження евіденційності.",
            "en": {
              "text": "A unique feature of Turkic languages: a separate suffix -ыптыр/-иптир marks an action the speaker learned about from hearsay or inference, not witnessed personally — a grammatical marker of evidentiality."
            }
          },
          {
            "type": "formula",
            "title": "Очевидець vs переказ",
            "rows": [
              [
                "ал келди",
                "ал келиптир",
                "він прийшов (я бачив) → він, виявляється, прийшов (я дізнався)"
              ]
            ]
          }
        ],
        "titleEn": "The Reportative Past (-ыптыр) — B1"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -ар/-ер/-ор/-өр, узгодженим за гармонією голосних.",
            "en": {
              "text": "The future tense is formed with the suffix -ар/-ер/-ор/-өр, matching vowel harmony."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен барармын.",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense — A2"
      },
      {
        "id": "present-continuous",
        "title": "Тривалий вид (-ып жатат) — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалу дію виражають дієприслівником на -ып + допоміжне дієслово \"жат-\" (лежати), узгоджене за особою.",
            "en": {
              "text": "An ongoing action is expressed with the converb -ып + the auxiliary \"жат-\" (to lie), agreeing in person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен китеп окуп жатам.",
                "Я зараз читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Continuous Aspect (-ып жатат) — A2"
      },
      {
        "id": "perfect-gan-eken",
        "title": "Перфект (-ган эле/экен) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу на -ган + допоміжне \"эле\" (був) чи \"экен\" (виявляється) утворює перфект із додатковим нюансом очевидності чи здогаду.",
            "en": {
              "text": "The past participle in -ган + the auxiliary \"эле\" (was) or \"экен\" (it turns out) forms the perfect with an extra nuance of certainty or inference."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ал кетип калган экен.",
                "Виявляється, він уже пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect (-ган эле/экен) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова; для ввічливості додається -гыла/-гиле (мн./ввічл.).",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem; politeness/plural adds -гыла/-гиле."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Бар!",
                "Йди!"
              ],
              [
                "Баргыла!",
                "Йдіть!"
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
        "id": "conditional-sa",
        "title": "Умовний спосіб (-са) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне значення виражається суфіксом -са/-се, доданим до дієслова, без окремого слова \"якщо\".",
            "en": {
              "text": "Conditional meaning is expressed with the suffix -са/-се added to the verb, with no separate word for \"if\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Жаан жааса, үйдө калам.",
                "Якщо піде дощ, я залишусь удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional (-са) — B1"
      },
      {
        "id": "desiderative-gy",
        "title": "Бажальний спосіб (-гы келет) — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражають конструкцією дієслово + -гы/-ги + \"келет\" (приходить), буквально \"приходить бажання робити\".",
            "en": {
              "text": "A wish is expressed with verb + -гы/-ги + \"келет\" (comes), literally \"the wish to do comes\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Менин уктагым келет.",
                "Я хочу спати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Desiderative (-гы келет) — B1"
      },
      {
        "id": "necessitative-kerek",
        "title": "Необхідність (керек/тийиш) — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість виражають словами \"керек\" (потрібно) чи \"тийиш\" (мусить), що стоять після дієслова у формі на -ыш/-уш.",
            "en": {
              "text": "Obligation is expressed with the words \"керек\" (need to) or \"тийиш\" (must), standing after the verb in the -ыш/-уш form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен барышым керек.",
                "Мені треба йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Necessity (керек/тийиш) — A2"
      },
      {
        "id": "ability-suffix-ala",
        "title": "Спроможність (-а ал-) — B1",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Спроможність виражають дієслівною основою + допоміжне \"ал-\" (брати/могти), а не окремим модальним словом.",
            "en": {
              "text": "Ability is expressed with the verb stem + the auxiliary \"ал-\" (to take/be able), rather than a separate modal word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен кыргызча сүйлөй алам.",
                "Я вмію говорити киргизькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ability (-а ал-) — B1"
      },
      {
        "id": "passive-voice-yl",
        "title": "Пасивний стан (-ыл-) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -ыл-/-ил-, доданим до основи дієслова перед часовим закінченням.",
            "en": {
              "text": "The passive voice is formed with the suffix -ыл-/-ил-, added to the verb stem before the tense ending."
            }
          },
          {
            "type": "table",
            "title": "жаз- → жазыл-",
            "rows": [
              [
                "жаз- (писати) → жазылды",
                "було написано"
              ]
            ]
          }
        ],
        "titleEn": "The Passive Voice (-ыл-) — B1"
      },
      {
        "id": "causative-dyr",
        "title": "Каузативний суфікс (-дыр-) — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне значення (\"змусити зробити\") утворюється суфіксом -дыр-/-тыр-, доданим до основи дієслова.",
            "en": {
              "text": "The causative meaning (\"to make someone do\") is formed with the suffix -дыр-/-тыр-, added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "жаз- → жаздыр-",
            "rows": [
              [
                "жаз- (писати) → жаздыр-",
                "змусити написати"
              ]
            ]
          }
        ],
        "titleEn": "The Causative Suffix (-дыр-) — B1"
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
        "id": "converb-forms",
        "title": "Дієприслівникові форми (-ып) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ып/-ип/-уп/-үп з'єднує кілька дієслів в один ланцюжок послідовних дій без сполучника — ключовий механізм складних речень у киргизькій.",
            "en": {
              "text": "The converb in -ып/-ип/-уп/-үп chains several verbs into one sequence of actions with no conjunction — a key mechanism for complex sentences in Kyrgyz."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ал туруп, кийинип, чыкты.",
                "Він встав, одягнувся й вийшов. (три дієслова без сполучників)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb Forms (-ып) — B1"
      },
      {
        "id": "case-genitive",
        "title": "Родовий відмінок (-дын) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-дын/-дин/-дун/-дүн, з варіантами за твердістю кінцевого звука) позначає присвійність і стоїть перед означуваним іменником.",
            "en": {
              "text": "The genitive case (-дын/-дин/-дун/-дүн, with variants for the final sound) marks possession and precedes the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тологдун үйү",
                "дім Толога"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Genitive Case (-дын) — A2"
      },
      {
        "id": "case-dative",
        "title": "Давальний відмінок (-га) — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (-га/-ге/-го/-гө) позначає напрямок дії чи непрямий додаток.",
            "en": {
              "text": "The dative case (-га/-ге/-го/-гө) marks the direction of an action or the indirect object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен мектепке барам.",
                "Я йду до школи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Dative Case (-га) — A2"
      },
      {
        "id": "case-accusative",
        "title": "Знахідний відмінок (-ны) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (-ны/-ни/-ну/-нү) позначає конкретний прямий додаток.",
            "en": {
              "text": "The accusative case (-ны/-ни/-ну/-нү) marks a specific direct object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен китепти окудум.",
                "Я прочитав книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Accusative Case (-ны) — A2"
      },
      {
        "id": "case-locative",
        "title": "Місцевий відмінок (-да) — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок (-да/-де/-до/-дө) позначає перебування в місці.",
            "en": {
              "text": "The locative case (-да/-де/-до/-дө) marks being located in a place."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен үйдөмүн.",
                "Я вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Locative Case (-да) — A2"
      },
      {
        "id": "case-ablative",
        "title": "Вихідний відмінок (-дан) — A2",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "Вихідний відмінок (-дан/-ден/-дон/-дөн) позначає рух звідкись.",
            "en": {
              "text": "The ablative case (-дан/-ден/-дон/-дөн) marks motion from somewhere."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен мектептен келдим.",
                "Я прийшов зі школи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ablative Case (-дан) — A2"
      },
      {
        "id": "possessive-suffixes",
        "title": "Присвійні суфікси — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається суфіксом, доданим прямо до іменника, без окремого присвійного займенника-прикметника, подібно до угорської та фінської.",
            "en": {
              "text": "Possession is expressed with a suffix added directly to the noun, with no separate possessive adjective, similar to Hungarian and Finnish."
            }
          },
          {
            "type": "table",
            "title": "үй-үм, үй-үң, үй-ү",
            "rows": [
              [
                "үйүм",
                "мій дім"
              ],
              [
                "үйүң",
                "твій дім"
              ],
              [
                "үйү",
                "його/її дім"
              ]
            ],
            "en": {
              "title": "үй-үм, үй-үң, үй-ү"
            }
          }
        ],
        "titleEn": "Possessive Suffixes — A1"
      },
      {
        "id": "plural-suffix-lar",
        "title": "Суфікс множини -лар — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -лар/-лер/-лор/-лөр (за гармонією голосних).",
            "en": {
              "text": "The plural is formed with the suffix -лар/-лер/-лор/-лөр (following vowel harmony)."
            }
          },
          {
            "type": "table",
            "title": "кыз-дар, үй-лөр",
            "rows": [
              [
                "кыз → кыздар",
                "дівчата"
              ],
              [
                "үй → үйлөр",
                "доми"
              ]
            ],
            "en": {
              "title": "кыз-дар, үй-лөр"
            }
          }
        ],
        "titleEn": "The Plural Suffix -лар — A1"
      },
      {
        "id": "consonant-harmony",
        "title": "Гармонія приголосних — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Крім голосних, початковий приголосний деяких суфіксів теж змінюється залежно від останнього звука кореня (дзвінкий/глухий) — подвійна система узгодження.",
            "en": {
              "text": "Besides vowels, the initial consonant of some suffixes also changes depending on the root's final sound (voiced/voiceless) — a double agreement system."
            }
          },
          {
            "type": "table",
            "title": "-да vs -та",
            "rows": [
              [
                "үйдө (дзвінкий корінь)",
                "у домі"
              ],
              [
                "кыш-та (глухий корінь)",
                "узимку"
              ]
            ],
            "en": {
              "title": "-да vs -та"
            }
          }
        ],
        "titleEn": "Consonant Harmony — B1"
      },
      {
        "id": "postpositions",
        "title": "Післяйменники — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Киргизька послідовно вживає післяйменники, а не прийменники, як більшість тюркських мов.",
            "en": {
              "text": "Kyrgyz consistently uses postpositions, not prepositions, like most Turkic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "үй менен",
                "з домом (менен = з)"
              ],
              [
                "мектепке чейин",
                "до школи (чейин = до)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "comparative-construction",
        "title": "Порівняльна конструкція (-рак) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають вихідним відмінком об'єкта порівняння + суфіксом -рак/-рек на прикметнику.",
            "en": {
              "text": "Comparison is expressed with the ablative case on the comparison object + the suffix -рак/-рек on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ал менден бийигирээк.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (-рак) — A2"
      },
      {
        "id": "superlative-eng",
        "title": "Найвищий ступінь (эң) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється словом \"эң\" (найбільш) перед прикметником.",
            "en": {
              "text": "The superlative is formed with the word \"эң\" (most) before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ал эң бийик.",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (эң) — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Бул\" (цей) вказує на близьке, \"ал/тигил\" (той) — на віддалене.",
            "en": {
              "text": "\"Бул\" (this) points to something near, \"ал/тигил\" (that) to something distant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Бул китеп меники.",
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
        "id": "participial-relative-clause",
        "title": "Дієприкметникове підрядне речення — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в багатьох інших мовах SOV, у киргизькій немає окремого відносного займенника \"який\": дієслово підрядного речення перетворюється на дієприкметник, що стоїть перед означуваним іменником.",
            "en": {
              "text": "As in many other SOV languages, Kyrgyz has no separate relative pronoun \"who/which\": the subordinate clause's verb becomes a participle standing before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "\"Чоловік, що прийшов\"",
            "rows": [
              [
                "келген адам",
                "чоловік, що прийшов (букв. \"прийшов-чоловік\")"
              ]
            ]
          }
        ],
        "titleEn": "The Participial Relative Clause — B2"
      },
      {
        "id": "reflexive-oz",
        "title": "Зворотний займенник өз — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Өз\" (свій/сам) — зворотний займенник, що узгоджується з підметом через присвійний суфікс незалежно від особи.",
            "en": {
              "text": "\"Өз\" (own/self) is the reflexive pronoun, agreeing with the subject via a possessive suffix regardless of person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ал өз үйүндө.",
                "Він у своєму домі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun өз — B1"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники стоять перед іменником, і сам іменник після числівника завжди залишається в однині.",
            "en": {
              "text": "Numerals stand before the noun, and the noun after a numeral always stays in the singular."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "бир",
                "один"
              ],
              [
                "эки",
                "два"
              ],
              [
                "беш",
                "п'ять"
              ],
              [
                "он",
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
        "id": "word-order-sov",
        "title": "Порядок слів SOV — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-додаток-присудок (SOV), дієслово завжди в кінці речення.",
            "en": {
              "text": "The basic order is subject-object-verb (SOV), with the verb always at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен китеп окудум.",
                "Я прочитав книгу. (я-книгу-прочитав)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "SOV Word Order — A1"
      },
      {
        "id": "invariable-adjectives",
        "title": "Незмінні прикметники — A1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники не змінюються за родом, числом чи відмінком — та сама форма стоїть перед будь-яким іменником.",
            "en": {
              "text": "Adjectives don't inflect for gender, number, or case — the same form stands before any noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "чоң үй, чоң үйлөр",
                "великий дім, великі доми (чоң незмінне)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariable Adjectives — A1"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання питальних слів — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ким\" (хто) і \"эмне\" (що) приєднують відмінкові суфікси так само, як і звичайні іменники.",
            "en": {
              "text": "\"Ким\" (who) and \"эмне\" (what) take case suffixes just like ordinary nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Кимге бердиң?",
                "Кому ти дав?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension of Interrogative Words — B1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують слова й речення; підрядне значення часто виражають дієприслівниковою формою замість окремого сполучника.",
            "en": {
              "text": "Coordinating conjunctions join words and clauses; subordinate meaning is often expressed with a converb form instead of a separate conjunction."
            }
          },
          {
            "type": "table",
            "title": "жана / бирок",
            "rows": [
              [
                "жана",
                "і"
              ],
              [
                "бирок",
                "але"
              ]
            ],
            "en": {
              "title": "жана / бирок"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують родовий відмінок першого іменника з другим, подібно до присвійної конструкції.",
            "en": {
              "text": "Compound words often combine the genitive case of the first noun with the second, similar to the possessive construction."
            }
          },
          {
            "type": "table",
            "title": "китеп + кана",
            "rows": [
              [
                "китепкана",
                "бібліотека (книга + кімната)"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "agglutinative-suffix-stacking",
        "title": "Нагромадження суфіксів — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "До одного кореня можна приєднати кілька суфіксів одночасно (множина + присвійність + відмінок) у фіксованому порядку — кожен зберігає власну гармонію голосних відповідно до попереднього складу.",
            "en": {
              "text": "Several suffixes can attach to one root at once (plural + possessive + case) in a fixed order — each keeps its own vowel harmony relative to the preceding syllable."
            }
          },
          {
            "type": "table",
            "title": "үй-лөр-үм-дө",
            "rows": [
              [
                "үйлөрүмдө",
                "у моїх домах (дім+мн.+мій+місцевий)"
              ]
            ]
          }
        ],
        "titleEn": "Stacking Suffixes — B1"
      },
      {
        "id": "buffer-consonants",
        "title": "Вставні звуки між коренем і суфіксом — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли корінь закінчується на голосну, а суфікс починається на голосну, між ними іноді вставляють буферний приголосний (н, й), щоб уникнути збігу двох голосних.",
            "en": {
              "text": "When a root ends in a vowel and a suffix begins with a vowel, a buffer consonant (н, й) is sometimes inserted between them to avoid two vowels colliding."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ата-нын (батька)",
                "вставний н між голосними"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Buffer Consonants between Root and Suffix — B1"
      },
      {
        "id": "vocative-address",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання не потребує окремого відмінка — ім'я чи слово звертання просто ставиться на початку речення.",
            "en": {
              "text": "Direct address needs no separate case — the name or address word is simply placed at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Айбек, бул жакка кел!",
                "Айбеку, йди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — A2"
      },
      {
        "id": "counting-words",
        "title": "Лічильні слова — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Рахуючи людей чи тварин, іноді вживають окреме лічильне слово \"баш\" (голова) після числа й перед іменником, особливо щодо худоби.",
            "en": {
              "text": "When counting people or animals, a separate counting word \"баш\" (head) is sometimes used after the number and before the noun, especially for livestock."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "беш баш кой",
                "п'ять овець (буквально \"п'ять голів овець\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Counting Words — B1"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (узагальнено) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Крім суфікса -са на дієслові (див. розділ часів), умову інколи підсилюють словом \"эгер\" (якщо) на початку речення для більшої виразності.",
            "en": {
              "text": "Besides the verb suffix -са (see the tense section), a condition is sometimes reinforced with the word \"эгер\" (if) at the start of the sentence for extra clarity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Эгер убактым болсо, барам.",
                "Якщо в мене буде час, я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (Reinforced) — B1"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня — переважно запозичення з арабської через ісламський вплив, адаптовані до киргизької фонетики.",
            "en": {
              "text": "The days of the week are mostly Arabic loanwords via Islamic influence, adapted to Kyrgyz phonetics."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "дүйшөмбү",
                "понеділок"
              ],
              [
                "жекшемби",
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
            "text": "Сучасні назви місяців — переважно запозичення з російської через радянську добу, поряд з рідше вживаними питомими кочовими назвами.",
            "en": {
              "text": "Modern month names are mostly borrowed from Russian via the Soviet era, alongside more rarely used native nomadic names."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "январь",
                "січень (запозичене)"
              ],
              [
                "Бугу айы",
                "традиційна назва місяця оленя"
              ]
            ],
            "en": {
              "title": "Months"
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
            "text": "Час запитують \"Саат канча болду?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"Саат канча болду?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Саат үч болду.",
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
            "text": "Кольори — незмінні прикметники, що стоять перед іменником.",
            "en": {
              "text": "Colors are invariable adjectives, standing before the noun."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "ак",
                "білий"
              ],
              [
                "кара",
                "чорний"
              ],
              [
                "кызыл",
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
            "text": "Родинні терміни, як і в інших кочових культурах, точно розрізняють лінію споріднення (материнську/батьківську) й вік.",
            "en": {
              "text": "Kinship terms, as in other nomadic cultures, precisely distinguish the maternal/paternal line and age."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "эне",
                "мати"
              ],
              [
                "ата",
                "батько"
              ],
              [
                "байке",
                "старший брат (ввічливо)"
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
        "id": "greetings",
        "title": "Привітання — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "\"Саламатсызбы?\" (як справи? — буквально \"чи ви в доброму здоров'ї?\") — формальне привітання.",
            "en": {
              "text": "\"Саламатсызбы?\" (how are you? — literally \"are you in good health?\") is the formal greeting."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Саламатсызбы!",
                "Вітаю!"
              ],
              [
                "Ден соолук!",
                "Будьте здорові! (прощання)"
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
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують дієсловом \"жаа-\" (падати) для дощу/снігу.",
            "en": {
              "text": "Weather is described with the verb \"жаа-\" (to fall) for rain/snow."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Жаан жаап турат.",
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
            "text": "Частини тіла — звичайні іменники, незмінні за родом.",
            "en": {
              "text": "Body parts are ordinary nouns, invariant for gender."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "кол",
                "рука"
              ],
              [
                "баш",
                "голова"
              ],
              [
                "бут",
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
            "text": "Вік виражають конструкцією \"X жашта\" (у X років).",
            "en": {
              "text": "Age is expressed with \"X жашта\" (at X years)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен жыйырма жаштамын.",
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
        "id": "manas-epic",
        "title": "Епос \"Манас\" — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "\"Манас\" — найдовша усна епічна поема у світі (понад півмільйона віршованих рядків, у кілька разів довша за \"Іліаду\" й \"Одіссею\" разом), яку традиційно виконують напам'ять спеціальні оповідачі-манасчі без жодного письмового тексту.",
            "en": {
              "text": "\"Manas\" is the world's longest oral epic poem (over half a million verse lines, several times longer than the Iliad and Odyssey combined), traditionally performed from memory by specialized reciters called manaschi with no written text at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Видатні манасчі могли без перерви декламувати епос годинами, а то й днями.",
                "живий пам'ятник усної традиції, визнаний ЮНЕСКО"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Manas Epic — B2"
      },
      {
        "id": "nomadic-pastoral-vocabulary",
        "title": "Кочова пастуша лексика — B1",
        "emoji": "🐎",
        "sections": [
          {
            "type": "intro",
            "text": "Через кочовий спосіб життя киргизька має надзвичайно точну й численну лексику для коней, овець та іншої худоби — набагато детальнішу, ніж в українській.",
            "en": {
              "text": "Due to the nomadic way of life, Kyrgyz has an extremely precise and extensive vocabulary for horses, sheep, and other livestock — far more detailed than Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Кочова лексика",
            "rows": [
              [
                "жылкы",
                "кінь (загальна назва стада)"
              ],
              [
                "боз үй",
                "юрта (буквально \"сірий дім\")"
              ]
            ],
            "en": {
              "title": "Nomadic Vocabulary"
            }
          }
        ],
        "titleEn": "Nomadic Pastoral Vocabulary — B1"
      },
      {
        "id": "cyrillic-script-history",
        "title": "Історія кирилиці — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Киргизька писемність пройшла через арабицю, потім латинку (1920-і), і нарешті кирилицю (з 1940 р., нав'язану радянською владою) — на відміну від Туреччини, Киргизстан досі офіційно використовує кирилицю, хоча точаться дискусії про перехід на латинку.",
            "en": {
              "text": "Kyrgyz writing went through Arabic script, then Latin (1920s), and finally Cyrillic (from 1940, imposed by Soviet authority) — unlike Turkey, Kyrgyzstan still officially uses Cyrillic, though there are ongoing discussions about switching to Latin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сусідній Узбекистан і Казахстан уже розпочали перехід на латинку.",
                "киргизька залишається винятком серед тюркських мов Центральної Азії"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The History of the Cyrillic Script — B2"
      },
      {
        "id": "russian-loanword-layer",
        "title": "Російський шар запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через радянську добу киргизька має значний шар російських запозичень, особливо в технічній, адміністративній і науковій лексиці.",
            "en": {
              "text": "Due to the Soviet era, Kyrgyz has a significant layer of Russian loanwords, especially in technical, administrative, and scientific vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "машина",
                "автомобіль"
              ],
              [
                "телефон",
                "телефон"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The Russian Loanword Layer — B1"
      },
      {
        "id": "politeness-sen-siz",
        "title": "Ввічливість (сен/сиз) — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Сен\" — фамільярне звертання, \"сиз\" — ввічливе й водночас формальна множина, подібно до російського \"вы\".",
            "en": {
              "text": "\"Сен\" is familiar address, \"сиз\" is polite and also the formal plural, similar to Russian \"вы\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сиз кандайсыз?",
                "Як ви почуваєтесь? (ввічливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness (сен/сиз) — A2"
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
                "Ой!",
                "Ой!"
              ],
              [
                "Рахмат!",
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Киргизькі ідіоми часто спираються на коней, гори й кочове життя.",
            "en": {
              "text": "Kyrgyz idioms often draw on horses, mountains, and nomadic life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ат жакшысы чабылат, эр жакшысы сыналат.",
                "Гарного коня пізнають у бігу, гарну людину — у важку хвилину."
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
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 11-19 утворюються поєднанням десяти з одиницею.",
            "en": {
              "text": "Numbers 11-19 are formed by combining ten with the unit."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "он бир",
                "одинадцять (десять+один)"
              ],
              [
                "жыйырма",
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
            "text": "Порядкові числівники утворюються суфіксом -нчы/-нчи, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -нчы/-нчи added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "биринчи",
                "перший"
              ],
              [
                "экинчи",
                "другий"
              ]
            ],
            "en": {
              "title": "Examples"
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
            "text": "\"Кимдир бирөө\" (хтось) і \"бир нерсе\" (щось) — базові неозначені вирази.",
            "en": {
              "text": "\"Кимдир бирөө\" (someone) and \"бир нерсе\" (something) are the basic indefinite expressions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Кимдир бирөө телефон чалды.",
                "Хтось дзвонив."
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
            "text": "\"Эч ким\" (ніхто) і \"эч нерсе\" (нічого) вживаються разом із запереченим дієсловом для повного заперечення.",
            "en": {
              "text": "\"Эч ким\" (no one) and \"эч нерсе\" (nothing) are used together with a negated verb for full negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Эч ким жок эле.",
                "Там нікого не було."
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
            "text": "Розділове питання утворюється фразою \"эмеспи?\" (хіба не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"эмеспи?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Бүгүн аба ырайы жакшы, эмеспи?",
                "Гарна сьогодні погода, чи не так?"
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
        "title": "Цільове підрядне (үчүн) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Үчүн\" (для/щоб) + дієслівний іменник на -уу вводить цільове підрядне речення.",
            "en": {
              "text": "\"Үчүн\" (for/in order to) + the verbal noun in -уу introduces a purpose clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен чоң энем менен сүйлөшүү үчүн кыргызча үйрөндүм.",
                "Я вивчив киргизьку, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (үчүн) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (үчүн/себеби) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Себеби\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Себеби\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мен кечикип калдым, себеби автобустан кечиктим.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (себеби) — A2"
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
            "text": "Кілька частовживаних дієслів (бол-бути/ставати, кел-приходити) мають нерегулярні скорочені форми в розмовній мові, відмінні від очікуваних за правилом.",
            "en": {
              "text": "A few common verbs (бол-to be/become, кел-to come) have irregular contracted forms in colloquial speech, different from what the rule would predict."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Розмовні скорочення дієслівних форм часто відрізняються від офіційно-писемних.",
                "особливість, властива швидкому розмовному мовленню"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "vowel-harmony-exceptions",
        "title": "Винятки в гармонії голосних — B2",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова (особливо з російської й арабської) часто не підкоряються гармонії голосних взагалі: їхні суфікси іноді фіксуються в одній формі незалежно від голосних кореня.",
            "en": {
              "text": "Loanwords (especially from Russian and Arabic) often don't follow vowel harmony at all: their suffixes are sometimes fixed in one form regardless of the root's vowels."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі запозичені слова приєднують суфікс у формі, що не відповідає очікуваній гармонії.",
                "фонологічний виняток для іншомовного шару лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Harmony Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо в благословеннях, пов'язаних із кочовою традицією) зберігають архаїчну граматику, невживану в сучасній мові.",
            "en": {
              "text": "Some common formulas (especially blessings tied to nomadic tradition) preserve archaic grammar not used in the modern language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Малың өссүн!",
                "Хай примножиться твоя худоба! (традиційне побажання достатку)"
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
