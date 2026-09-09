// Vymova — data/grammar-data/grammar_gn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Ta'anga Rérava — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У ґуарані, як і в кечуа, розрізняють \"ми з вами\" (ñande) і \"ми без вас\" (ore).",
            "en": {
              "text": "Guarani, like Quechua, distinguishes \"we including you\" (ñande) from \"we excluding you\" (ore)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "che"
              ],
              [
                "ти",
                "nde"
              ],
              [
                "він / вона / воно",
                "ha'e"
              ],
              [
                "ми (з вами)",
                "ñande"
              ],
              [
                "ми (без вас)",
                "ore"
              ],
              [
                "ви",
                "peẽ"
              ],
              [
                "вони",
                "ha'ekuéra"
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
        "id": "active-verb-prefixes",
        "title": "Активні дієслівні префікси (набір A) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса ґуарані: дієслова діляться на \"активні\" (дія, яку виконує підмет) і \"стативні\" (стан/якість підмета), кожен клас має власний набір особових префіксів — цілком інша система, ніж дієвідміна в європейських мовах.",
            "en": {
              "text": "Guarani's most defining trait: verbs split into \"active\" (an action the subject performs) and \"stative\" (a state/quality of the subject), each class with its own set of person prefixes — a completely different system from conjugation in European languages."
            }
          },
          {
            "type": "table",
            "title": "guata (ходити) — активний клас",
            "rows": [
              [
                "a-guata",
                "я ходжу"
              ],
              [
                "re-guata",
                "ти ходиш"
              ],
              [
                "o-guata",
                "він/вона ходить"
              ]
            ],
            "en": {
              "title": "guata (to walk) — Active Class"
            }
          }
        ],
        "titleEn": "Active Verb Prefixes (Set A) — A2"
      },
      {
        "id": "stative-verb-prefixes",
        "title": "Стативні префікси й \"бути\" (набір B) — A2",
        "emoji": "🌈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники в ґуарані функціонують як стативні дієслова з набором B (che-/nde-/i-): немає окремого дієслова \"бути\" для якості — сама \"прикметникова\" форма вже відмінюється за особою.",
            "en": {
              "text": "Adjectives in Guarani function as stative verbs with set B prefixes (che-/nde-/i-): there's no separate verb \"to be\" for quality — the \"adjective\" form itself is already inflected for person."
            }
          },
          {
            "type": "table",
            "title": "vai (поганий) — стативний клас",
            "rows": [
              [
                "che-vai",
                "я поганий/недобре почуваюся"
              ],
              [
                "nde-vai",
                "ти поганий"
              ],
              [
                "i-vai",
                "він/воно поганий"
              ]
            ],
            "en": {
              "title": "vai (bad) — Stative Class"
            }
          }
        ],
        "titleEn": "Stative Prefixes and \"to Be\" (Set B) — A2"
      },
      {
        "id": "negation",
        "title": "Заперечення (nd-...-i) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється не одним словом, а циркумфіксом: префікс \"nd-\" (або \"na-\") перед дієсловом і суфікс \"-i\" в кінці — обидві частини потрібні одночасно.",
            "en": {
              "text": "Negation is formed not with a single word but a circumfix: the prefix \"nd-\" (or \"na-\") before the verb and the suffix \"-i\" at the end — both parts are required together."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "A-guata.",
                "Nd-a-guatá-i.",
                "Я ходжу → я не ходжу (nd-...-i)"
              ],
              [
                "Che-vai.",
                "Nda che-vá-i.",
                "Я поганий → я не поганий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nd-a-ju-i ko árape.",
                "Я не прийду сьогодні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (nd-...-i) — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються часткою \"-pa\" в кінці речення; спеціальні — питальними словами разом з тією ж часткою.",
            "en": {
              "text": "Yes/no questions are marked with the particle \"-pa\" at the end of the sentence; wh-questions use question words together with the same particle."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "mávapa",
                "хто"
              ],
              [
                "mba'épa",
                "що"
              ],
              [
                "mo'ãpa",
                "де"
              ],
              [
                "araka'épa",
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
                "Nde-paraguái-pa?",
                "Ти парагваєць?"
              ],
              [
                "Mba'éichapa?",
                "Як справи?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions — A1"
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
        "id": "zero-marked-present",
        "title": "Немаркований теперішній час — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час не має окремого маркера часу: активні чи стативні особові префікси самі по собі виражають дію чи стан \"зараз\", без додаткової частки.",
            "en": {
              "text": "The present tense has no separate tense marker: the active or stative person prefixes by themselves express an action or state \"now\", with no additional particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-guata ko árape.",
                "Я йду сьогодні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Zero-Marked Present — A1"
      },
      {
        "id": "recent-past-kuri",
        "title": "Недавній минулий час (-kuri) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"-kuri\", додана після дієслова, позначає нещодавно завершену дію.",
            "en": {
              "text": "The particle \"-kuri\", added after the verb, marks a recently completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-guata-kuri.",
                "Я щойно ходив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Recent Past (-kuri) — A2"
      },
      {
        "id": "remote-past-rakae",
        "title": "Віддалений минулий час (-raka'e) — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"-raka'e\" позначає давноминулу подію, віддалену в часі — окрема від недавнього минулого \"-kuri\".",
            "en": {
              "text": "The particle \"-raka'e\" marks a distant past event, remote in time — distinct from the recent past \"-kuri\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O-guata-raka'e heta ára.",
                "Він давним-давно ходив багато днів."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Remote Past (-raka'e) — B1"
      },
      {
        "id": "future-ta",
        "title": "Майбутній час (-ta) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"-ta\", додана після дієслова, позначає майбутню дію.",
            "en": {
              "text": "The particle \"-ta\", added after the verb, marks a future action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-guata-ta ko'ẽrõ.",
                "Я піду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense (-ta) — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ утворюється голим коренем дієслова (без активного префікса) для 2 ос. одн.; для ввічливості додають частку \"-na\".",
            "en": {
              "text": "The imperative is formed with the bare verb root (no active prefix) for 2nd person singular; politeness adds the particle \"-na\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eguata!",
                "Йди! (спеціальна наказова форма)"
              ],
              [
                "Eguapy-na.",
                "Сідай, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperative Mood — A2"
      },
      {
        "id": "desiderative-se",
        "title": "Бажальний суфікс -se — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс \"-se\", доданий до дієслова, виражає бажання зробити щось — замінює окреме модальне дієслово \"хотіти\".",
            "en": {
              "text": "The suffix \"-se\", added to the verb, expresses wanting to do something — replacing a separate modal verb \"to want\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-karu-se.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Desiderative Suffix -se — B1"
      },
      {
        "id": "progressive-hina",
        "title": "Тривалий вид (hína) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"hína\" після дієслова позначає дію, що триває саме зараз.",
            "en": {
              "text": "The particle \"hína\" after the verb marks an action happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-karu hína.",
                "Я саме зараз їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Aspect (hína) — B1"
      },
      {
        "id": "perfective-ma",
        "title": "Завершеність (-ma) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"-ma\" (вже) позначає повну завершеність дії, подібно до перфекта.",
            "en": {
              "text": "The particle \"-ma\" (already) marks full completion of an action, similar to a perfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-karu-ma.",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completive Aspect (-ma) — B1"
      },
      {
        "id": "frustrative-rangue",
        "title": "Фрустративний суфікс -rangue — B2",
        "emoji": "😔",
        "sections": [
          {
            "type": "intro",
            "text": "Рідкісна граматична категорія: суфікс \"-rangue\" виражає дію, яка мала статися, але не сталася — \"мав би, але не...\".",
            "en": {
              "text": "A rare grammatical category: the suffix \"-rangue\" expresses an action that was supposed to happen but didn't — \"was going to, but...\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-ju-rangue, ndaikatúi.",
                "Я мав прийти, але не зміг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Frustrative Suffix -rangue — B2"
      },
      {
        "id": "reportative-ndaje",
        "title": "Переказовий маркер ndaje — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ndaje\" вказує, що мовець переказує чужі слова, не ручаючись за їх правдивість — граматичне вираження евіденційності, поширене в мовах Південної Америки.",
            "en": {
              "text": "The particle \"ndaje\" shows the speaker is relaying someone else's words without vouching for their truth — a grammatical expression of evidentiality, common among South American languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O-guata ndaje.",
                "Кажуть, він нібито ходив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reportative Marker ndaje — B1"
      },
      {
        "id": "causative-mbo-mo",
        "title": "Каузативний префікс mbo-/mo- — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"mbo-\" (перед приголосним) або \"mo-\" (перед голосним) перетворює стативне дієслово на каузативне — \"зробити так, щоб X стало Y\".",
            "en": {
              "text": "The prefix \"mbo-\" (before a consonant) or \"mo-\" (before a vowel) turns a stative verb causative — \"to make X become Y\"."
            }
          },
          {
            "type": "table",
            "title": "puku → mbopuku",
            "rows": [
              [
                "puku (довгий) → mbopuku",
                "подовжити"
              ],
              [
                "akỹ (мокрий) → mongy",
                "намочити"
              ]
            ],
            "en": {
              "title": "puku → mbopuku"
            }
          }
        ],
        "titleEn": "The Causative Prefix mbo-/mo- — B1"
      },
      {
        "id": "reflexive-je-ne",
        "title": "Зворотний префікс je-/ñe- — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"je-\" (або \"ñe-\" після носових слів) на перехідному дієслові виражає зворотну дію — \"робити щось із собою\".",
            "en": {
              "text": "The prefix \"je-\" (or \"ñe-\" after nasal words) on a transitive verb expresses a reflexive action — \"to do something to oneself\"."
            }
          },
          {
            "type": "table",
            "title": "juka → jejuka",
            "rows": [
              [
                "juka (вбити) → jejuka",
                "вбити себе"
              ],
              [
                "mbo'e (вчити) → ñemoarandu",
                "вчитися (самому)"
              ]
            ],
            "en": {
              "title": "juka → jejuka"
            }
          }
        ],
        "titleEn": "The Reflexive Prefix je-/ñe- — B1"
      },
      {
        "id": "reciprocal-jo-no",
        "title": "Взаємний префікс jo-/ño- — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"jo-\" (або \"ño-\" після носових) виражає взаємну дію — \"один одного\".",
            "en": {
              "text": "The prefix \"jo-\" (or \"ño-\" after nasal words) expresses a reciprocal action — \"each other\"."
            }
          },
          {
            "type": "table",
            "title": "juka → jojuka",
            "rows": [
              [
                "juka (вбити) → jojuka",
                "вбивати одне одного"
              ]
            ],
            "en": {
              "title": "juka → jojuka"
            }
          }
        ],
        "titleEn": "The Reciprocal Prefix jo-/ño- — B1"
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
        "id": "no-grammatical-gender",
        "title": "Відсутність граматичного роду — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської чи португальської (сусідніх мов Парагваю), ґуарані не має граматичного роду взагалі: іменники, прикметники й артиклеподібні слова не змінюються за родом.",
            "en": {
              "text": "Unlike Spanish or Portuguese (Paraguay's neighboring languages), Guarani has no grammatical gender at all: nouns, adjectives, and article-like words don't change for gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuimba'e i-porã",
                "гарний чоловік (без родових закінчень)"
              ],
              [
                "kuñataĩ i-porã",
                "гарна дівчина (те саме i-porã)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absence of Grammatical Gender — A1"
      },
      {
        "id": "nasal-harmony",
        "title": "Носова гармонія — B1",
        "emoji": "👃",
        "sections": [
          {
            "type": "intro",
            "text": "Ключова фонологічна риса ґуарані: якщо корінь слова містить носовий голосний чи приголосний, уся решта слова (префікси, суфікси) теж стає носовою — гармонія поширюється на все слово.",
            "en": {
              "text": "A core phonological feature of Guarani: if a word's root contains a nasal vowel or consonant, the rest of the word (prefixes, suffixes) becomes nasal too — the harmony spreads across the whole word."
            }
          },
          {
            "type": "table",
            "title": "Носова гармонія у дії",
            "rows": [
              [
                "a-guata (не носовий корінь)",
                "я ходжу"
              ],
              [
                "a-ñe'ẽ (носовий корінь ñe'ẽ)",
                "я говорю (носовий префікс і закінчення)"
              ]
            ],
            "en": {
              "title": "Nasal Harmony in Action"
            }
          }
        ],
        "titleEn": "Nasal Harmony — B1"
      },
      {
        "id": "locative-pe",
        "title": "Локатив -pe — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -pe позначає місце дії — \"у/на\".",
            "en": {
              "text": "The suffix -pe marks the location of an action — \"in/at\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-guata táva-pe.",
                "Я гуляю містом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Locative Suffix -pe — A2"
      },
      {
        "id": "ablative-gui",
        "title": "Аблатив -gui — A2",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -gui позначає рух звідкись або джерело — \"з/від\".",
            "en": {
              "text": "The suffix -gui marks motion from somewhere or a source — \"from\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-ju táva-gui.",
                "Я йду з міста."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ablative Suffix -gui — A2"
      },
      {
        "id": "comitative-ndive",
        "title": "Комітатив -ndive — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ndive виражає \"разом з\", замінюючи прийменник.",
            "en": {
              "text": "The suffix -ndive expresses \"together with\", replacing a preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-guata che angirũ-ndive.",
                "Я гуляю з моїм другом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comitative Suffix -ndive — A2"
      },
      {
        "id": "topic-marker-re",
        "title": "Тема/об'єкт -re — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -re позначає тему розмови чи об'єкт емоційного ставлення — \"про\".",
            "en": {
              "text": "The suffix -re marks the topic of conversation or an object of emotional attitude — \"about\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ro-mandu'a nde-re.",
                "Я згадую про тебе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Topic Marker -re — B1"
      },
      {
        "id": "possession-inalienable",
        "title": "Невідчужувана присвійність — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла й родичі (невідчужуване) приєднують той самий набір префіксів B (che-/nde-/i-), що й стативні дієслова — присвійність і якість використовують ту саму морфологію.",
            "en": {
              "text": "Body parts and kin (inalienable) attach the same set B prefixes (che-/nde-/i-) used for stative verbs — possession and quality share the same morphology."
            }
          },
          {
            "type": "table",
            "title": "che-py, nde-akã",
            "rows": [
              [
                "che-py",
                "моя нога"
              ],
              [
                "nde-akã",
                "твоя голова"
              ]
            ],
            "en": {
              "title": "che-py, nde-akã"
            }
          }
        ],
        "titleEn": "Inalienable Possession — B1"
      },
      {
        "id": "possession-alienable",
        "title": "Відчужувана присвійність — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Відчужувані предмети (не частини тіла й не родичі) вимагають частки \"mba'e\" перед присвійним префіксом, коли самого предмета в реченні немає.",
            "en": {
              "text": "Alienable objects (not body parts or kin) require the particle \"mba'e\" before the possessive prefix when the object itself isn't stated in the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Péa che mba'e.",
                "Це моє."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Alienable Possession — B1"
      },
      {
        "id": "plural-kuera",
        "title": "Множина -kuéra — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -kuéra позначає множину, але вживається не завжди обов'язково — контекст часто підказує число без нього.",
            "en": {
              "text": "The suffix -kuéra marks the plural, but isn't always obligatory — context often signals number without it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mitã → mitã-kuéra",
                "діти"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Plural Suffix -kuéra — A2"
      },
      {
        "id": "diminutive-i",
        "title": "Демінутив -'i — A2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -'i додає відтінок ніжності чи малого розміру, дуже поширений у розмовній мові.",
            "en": {
              "text": "The suffix -'i adds tenderness or smallness, very common in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "mitã → mitã'i",
            "rows": [
              [
                "mitã (дитина) → mitã'i",
                "маленька дитинка"
              ],
              [
                "óga → óga'i",
                "хатинка"
              ]
            ],
            "en": {
              "title": "mitã → mitã'i"
            }
          }
        ],
        "titleEn": "The Diminutive Suffix -'i — A2"
      },
      {
        "id": "augmentative-guasu",
        "title": "Аугментатив -guasu — B1",
        "emoji": "🐘",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -guasu (буквально \"великий\") збільшує розмір слова.",
            "en": {
              "text": "The suffix -guasu (literally \"big\") increases a word's size."
            }
          },
          {
            "type": "table",
            "title": "óga → óga-guasu",
            "rows": [
              [
                "óga (дім) → óga-guasu",
                "величезний дім"
              ]
            ],
            "en": {
              "title": "óga → óga-guasu"
            }
          }
        ],
        "titleEn": "The Augmentative Suffix -guasu — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація для інтенсивності — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення кореня прикметника чи дієслова посилює ознаку або дію.",
            "en": {
              "text": "Reduplicating the adjective or verb root intensifies the quality or action."
            }
          },
          {
            "type": "table",
            "title": "hatã → hatãhatã",
            "rows": [
              [
                "hatã (міцний) → hatãhatã",
                "дуже міцний"
              ]
            ],
            "en": {
              "title": "hatã → hatãhatã"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "reduplication-distributive",
        "title": "Редуплікація для розподільності — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама редуплікація на дієслові може виражати повторювану чи розподілену дію серед кількох об'єктів замість посилення.",
            "en": {
              "text": "The same reduplication on a verb can express a repeated or distributed action across several objects instead of intensification."
            }
          },
          {
            "type": "table",
            "title": "juka → juka-juka",
            "rows": [
              [
                "juka (вбити) → jukajuka",
                "вбивати одного за одним"
              ]
            ],
            "en": {
              "title": "juka → juka-juka"
            }
          }
        ],
        "titleEn": "Reduplication for Distributive Meaning — B1"
      },
      {
        "id": "demonstrative-three-way",
        "title": "Три ступені вказівності — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники розрізняють три ступені: ko (близько до мовця), pe (близько до слухача), amo (далеко від обох).",
            "en": {
              "text": "Demonstratives distinguish three degrees: ko (near the speaker), pe (near the listener), amo (far from both)."
            }
          },
          {
            "type": "table",
            "title": "ko / pe / amo",
            "rows": [
              [
                "ko óga",
                "цей дім (тут)"
              ],
              [
                "pe óga",
                "той дім (у тебе)"
              ],
              [
                "amo óga",
                "он той дім (далеко)"
              ]
            ],
            "en": {
              "title": "ko / pe / amo"
            }
          }
        ],
        "titleEn": "Three-Way Demonstratives — A2"
      },
      {
        "id": "relative-marker-va",
        "title": "Означальний суфікс -va — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -va, доданий до дієслова, перетворює його на означальну конструкцію \"той, хто/те, що\" — заміняючи окреме відносне речення з займенником.",
            "en": {
              "text": "The suffix -va, added to the verb, turns it into a relative construction \"the one who/that\" — replacing a separate relative clause with a pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuñataĩ o-guata-va.",
                "Дівчина, яка йде (буквально \"дівчина йдуча\")."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Suffix -va — B1"
      },
      {
        "id": "postpositions-overview",
        "title": "Післяйменники — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Ґуарані послідовно використовує післяйменники (суфікси чи окремі слова після іменника), а не прийменники, як більшість мов Південної Америки.",
            "en": {
              "text": "Guarani consistently uses postpositions (suffixes or separate words after the noun) rather than prepositions, like most South American languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади післяйменників",
            "rows": [
              [
                "óga rovái",
                "навпроти дому"
              ],
              [
                "óga ári",
                "над домом"
              ]
            ],
            "en": {
              "title": "Postposition Examples"
            }
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "topic-comment-order",
        "title": "Порядок тема-коментар — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Порядок слів досить вільний і часто організований за принципом \"тема спочатку\", а не строгою граматичною роллю (підмет-присудок-додаток).",
            "en": {
              "text": "Word order is fairly flexible and often organized by \"topic first\", rather than a strict grammatical role order (subject-verb-object)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko mitã, a-hayhu chupe.",
                "Ця дитина, я її люблю. (тема винесена наперед)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic-Comment Word Order — B1"
      },
      {
        "id": "stative-negation-forms",
        "title": "Заперечення стативних дієслів — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Циркумфікс заперечення nd-...-i однаково застосовується і до активних, і до стативних дієслів, включно з прикметниками-дієсловами.",
            "en": {
              "text": "The negation circumfix nd-...-i applies equally to active and stative verbs, including adjective-verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nda che-porã-i.",
                "Я негарний."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating Stative Verbs — B1"
      },
      {
        "id": "comparative-construction",
        "title": "Порівняльна конструкція — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають конструкцією \"X ...-ve X-gui\" (X більш ... ніж X), без окремого порівняльного суфікса на прикметнику.",
            "en": {
              "text": "Comparison is expressed with the construction \"X ...-ve X-gui\" (X more ... than X), with no separate comparative suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'e i-puku-ve che-gui.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction — B1"
      },
      {
        "id": "traditional-vs-borrowed-numbers",
        "title": "Питомі vs запозичені числівники — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Ґуарані традиційно мала числівники лише до чотирьох; для більших чисел мовці послідовно вживають іспанські запозичення — сучасні спроби відродити питомі великі числа існують, але не прижилися в побуті.",
            "en": {
              "text": "Guarani traditionally had numerals only up to four; for larger numbers, speakers consistently use Spanish loanwords — modern attempts to revive native large numbers exist but haven't caught on in everyday use."
            }
          },
          {
            "type": "table",
            "title": "Питомі vs запозичені",
            "rows": [
              [
                "peteĩ, mokõi, mbohapy, irundy (1-4, питомі)",
                "1-4"
              ],
              [
                "cinco, seis... (від ісп., 5+)",
                "5 і більше (запозичено)"
              ]
            ],
            "en": {
              "title": "Native vs Borrowed"
            }
          }
        ],
        "titleEn": "Native vs Borrowed Numerals — B1"
      },
      {
        "id": "focus-particle-piko",
        "title": "Фокусна частка piko — B1",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"piko\" у питаннях підкреслює здивування чи наполегливість запитання — приблизно \"а що ж саме\".",
            "en": {
              "text": "The particle \"piko\" in questions emphasizes surprise or insistence in the question — roughly \"but what exactly\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mba'épa piko oiko?",
                "То що ж таки сталося?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Focus Particle piko — B1"
      },
      {
        "id": "contrastive-katu",
        "title": "Контрастна частка katu — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"katu\" виражає контраст або протиставлення — \"а от, натомість\".",
            "en": {
              "text": "The particle \"katu\" expresses contrast or opposition — \"but, on the other hand\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Che a-guata, ha'e katu o-pyta.",
                "Я йду, а він натомість залишається."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Contrastive Particle katu — B1"
      },
      {
        "id": "vocative-address",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання зазвичай не потребує окремої відмінкової форми, на відміну від деяких інших мов з кличним відмінком.",
            "en": {
              "text": "Direct address usually needs no separate case form, unlike some other languages with a vocative case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nde, eju!",
                "Гей ти, ходи сюди!"
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
        "id": "verb-nominalization",
        "title": "Номіналізація дієслова — B1",
        "emoji": "📛",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ha (агентивний, \"той, хто робить\") чи -mby/-pyre (пасивний, \"те, що зроблено\") перетворює дієслово на іменник.",
            "en": {
              "text": "The suffix -ha (agentive, \"one who does\") or -mby/-pyre (passive, \"that which is done\") turns a verb into a noun."
            }
          },
          {
            "type": "table",
            "title": "mbo'e → mbo'eha",
            "rows": [
              [
                "mbo'e (вчити) → mbo'eha",
                "вчитель"
              ],
              [
                "japo (робити) → japopyre",
                "зроблене"
              ]
            ],
            "en": {
              "title": "mbo'e → mbo'eha"
            }
          }
        ],
        "titleEn": "Verb Nominalization — B1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують іменник і дієслово, описуючи предмет через дію чи функцію.",
            "en": {
              "text": "Compound words often join a noun and a verb, describing an object through action or function."
            }
          },
          {
            "type": "table",
            "title": "ñe'ẽ + ryru",
            "rows": [
              [
                "ñe'ẽ (слово) + ryru (сховище) = ñe'ẽryru",
                "словник"
              ]
            ],
            "en": {
              "title": "ñe'ẽ + ryru"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Назви днів тижня — здебільшого запозичення з іспанської, адаптовані до фонетики ґуарані.",
            "en": {
              "text": "The names of the days of the week are mostly borrowed from Spanish, adapted to Guarani phonetics."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "arateĩ",
                "понеділок"
              ],
              [
                "arapokõindy",
                "середа"
              ],
              [
                "arapoteĩ",
                "п'ятниця"
              ],
              [
                "arateĩ-va (kuarahy ára)",
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
            "text": "Питомі назви місяців у ґуарані описові й пов'язані з природними явищами регіону, на відміну від латинських запозичень.",
            "en": {
              "text": "Native Guarani month names are descriptive and tied to regional natural phenomena, unlike Latin-derived borrowings."
            }
          },
          {
            "type": "table",
            "title": "Місяці (питомі назви)",
            "rows": [
              [
                "jasyteĩ (січень)",
                "\"перший місяць\""
              ],
              [
                "jasypateĩ (травень)",
                "п'ятий місяць"
              ]
            ],
            "en": {
              "title": "Months (Native Names)"
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
            "text": "Точний погодинний час часто запозичують з іспанської разом із числами, оскільки традиційний рахунок часу не був погодинним.",
            "en": {
              "text": "Precise clock time is often borrowed from Spanish along with the numbers, since traditional timekeeping wasn't hour-based."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mba'e óra-pa ko'ág̃a?",
                "Котра зараз година?"
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
            "text": "Кольори функціонують як стативні дієслова (набір B), як і будь-які інші \"прикметники\" ґуарані.",
            "en": {
              "text": "Colors function as stative verbs (set B), like any other Guarani \"adjective\"."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "morotĩ",
                "білий"
              ],
              [
                "hũ",
                "чорний"
              ],
              [
                "pytã",
                "червоний"
              ],
              [
                "hovy",
                "синій"
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
            "text": "Родинні терміни — невідчужувані іменники, тому приєднують присвійний префікс безпосередньо, без частки \"mba'e\".",
            "en": {
              "text": "Kinship terms are inalienable nouns, so they attach the possessive prefix directly, with no \"mba'e\" particle."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "sy",
                "мати"
              ],
              [
                "túva",
                "батько"
              ],
              [
                "reindy",
                "сестра (для жінки, про сестру)"
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
            "text": "\"Mba'éichapa\" (як справи?) — найпоширеніше привітання, буквально означає \"як же?\".",
            "en": {
              "text": "\"Mba'éichapa\" (how are you?) is the most common greeting, literally meaning \"how, then?\"."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Mba'éichapa!",
                "Привіт!/Як справи?"
              ],
              [
                "Jajotopáta!",
                "До зустрічі!"
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
            "text": "Погоду описують стативними дієсловами, як і будь-яку іншу якість.",
            "en": {
              "text": "Weather is described with stative verbs, like any other quality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O-ky.",
                "Йде дощ."
              ],
              [
                "Ha-ku.",
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
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла — невідчужувані іменники з обов'язковим присвійним префіксом.",
            "en": {
              "text": "Body parts are inalienable nouns with an obligatory possessive prefix."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "po",
                "рука"
              ],
              [
                "akã",
                "голова"
              ],
              [
                "py",
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
            "text": "Вік виражають конструкцією з числом і словом \"áño\" (запозичення з іспанської), оскільки традиційний рахунок років не був числовим у європейському сенсі.",
            "en": {
              "text": "Age is expressed with the number and the word \"áño\" (a Spanish loanword), since traditional age-counting wasn't numerical in the European sense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Areko 20 áño.",
                "Мені 20 років. (запозичене число + áño)"
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
        "id": "jopara-code-mixing",
        "title": "Хопара — змішаний реєстр — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У повсякденному мовленні більшість парагвайців вживає \"jopará\" — вільне змішування ґуарані й іспанської в одному реченні, з іспанською лексикою, вбудованою в ґуараньську граматику.",
            "en": {
              "text": "In everyday speech, most Paraguayans use \"jopará\" — a free mix of Guarani and Spanish in a single sentence, with Spanish vocabulary embedded in Guarani grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-necesita-eterei pytyvõ.",
                "Мені дуже потрібна допомога. (necesita — ісп. корінь у ґуараньській дієслівній формі)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jopará — the Mixed Register — B2"
      },
      {
        "id": "official-bilingual-status",
        "title": "Офіційна двомовність Парагваю — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Ґуарані — рідкісний приклад мови корінних народів Америки, що є повністю офіційною державною мовою нарівні з іспанською, вживається в парламенті, освіті й на грошових знаках.",
            "en": {
              "text": "Guarani is a rare example of an Indigenous American language that is fully co-official with Spanish at the state level, used in parliament, education, and on currency."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Конституція Парагваю 1992 р. закріпила ґуарані як офіційну мову.",
                "юридичний статус, унікальний для мови корінного народу в Америці"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Paraguay's Official Bilingual Status — B2"
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
                "Ndaje!",
                "Кажуть!/Оце так!"
              ],
              [
                "Aguyje!",
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
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливість часто виражають часткою \"-na\", доданою до наказової форми, а не окремим словом \"будь ласка\".",
            "en": {
              "text": "Politeness is often expressed with the particle \"-na\" added to the imperative form, rather than a separate word for \"please\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eju-na.",
                "Ходи, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness — A2"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Ідіоми ґуарані часто спираються на природу, сільське життя й серце (ñe'ã) як осередок емоцій.",
            "en": {
              "text": "Guarani idioms often draw on nature, rural life, and the heart (ñe'ã) as the seat of emotion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Che ñe'ã guasu.",
                "Я великодушний (букв. \"моє серце велике\")."
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
        "id": "loanword-adaptation",
        "title": "Адаптація запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичення з іспанської адаптуються до фонології ґуарані, часто отримуючи носову гармонію чи спрощену складову структуру.",
            "en": {
              "text": "Spanish loanwords are adapted to Guarani phonology, often taking on nasal harmony or a simplified syllable structure."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "kavaju (від caballo)",
                "кінь"
              ],
              [
                "vaka (від vaca)",
                "корова"
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
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Немає окремої граматичної форми ввічливого \"ви\": вживають \"nde\" до всіх, а ввічливість передають лексично й інтонаційно.",
            "en": {
              "text": "There's no separate grammatical polite \"you\" form: \"nde\" is used with everyone, and politeness is conveyed lexically and by intonation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mba'éichapa nde?",
                "Як твої справи? (до будь-кого)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Forms — A2"
      },
      {
        "id": "purpose-clause",
        "title": "Цільове підрядне (-haguã) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -haguã, доданий до дієслівного іменника, вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "The suffix -haguã, added to the verbal noun, introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-ñemoarandu a-mba'apo-haguã.",
                "Я вчуся, щоб працювати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (-haguã) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (mba'érepa/-gui) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Причину часто вводять словом \"háguã\" чи побудовою з -gui, буквально \"через те, що\".",
            "en": {
              "text": "Cause is often introduced with \"háguã\" or a -gui construction, literally \"because of the fact that\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A-guata-kuri, o-ky-gui.",
                "Я не пішов через те, що йшов дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (mba'érepa/-gui) — B1"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (ramo) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ramo\" після дієслова вводить умовне речення \"якщо/коли\".",
            "en": {
              "text": "The particle \"ramo\" after the verb introduces a conditional clause \"if/when\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Areko-ramo tembiapo, a-mba'apo-ta.",
                "Якщо в мене буде робота, я працюватиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (ramo) — B1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Peteĩva\" (хтось) і \"mba'eve\" (щось/нічого) — базові неозначені займенники.",
            "en": {
              "text": "\"Peteĩva\" (someone) and \"mba'eve\" (something/nothing) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Oĩ peteĩva.",
                "Хтось є."
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
            "text": "\"Mba'eve\" (нічого) і \"avave\" (ніхто) вживаються під запереченням разом із циркумфіксом nd-...-i.",
            "en": {
              "text": "\"Mba'eve\" (nothing) and \"avave\" (no one) are used under negation together with the nd-...-i circumfix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nd-ai-kuaá-i mba'eve.",
                "Я нічого не знаю."
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
            "text": "Розділове питання утворюється часткою \"añete-pa\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the particle \"añete-pa\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iporã ára, añete-pa?",
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
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 (запозичені) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа від 11 і вище практично завжди вживають в іспанській формі, навіть у мовців, які добре знають питомі числа до чотирьох.",
            "en": {
              "text": "Numbers from 11 up are almost always used in Spanish form, even by speakers who know the native numbers up to four well."
            }
          },
          {
            "type": "table",
            "title": "Числа 11+",
            "rows": [
              [
                "once (від ісп.)",
                "одинадцять"
              ],
              [
                "veinte (від ісп.)",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers 11+"
            }
          }
        ],
        "titleEn": "Numbers from 11 On (Borrowed) — A2"
      },
      {
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -ha, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -ha added to the cardinal numeral."
            }
          },
          {
            "type": "table",
            "title": "peteĩha, mokõiha",
            "rows": [
              [
                "peteĩha",
                "перший"
              ],
              [
                "mokõiha",
                "другий"
              ]
            ],
            "en": {
              "title": "peteĩha, mokõiha"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
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
            "text": "Кілька частовживаних дієслів (ju-йти сюди, ho-йти, e'i-казати) мають нерегулярні або суплетивні форми, які не підкоряються стандартним префіксальним парадигмам.",
            "en": {
              "text": "A few common verbs (ju-to come, ho-to go, e'i-to say) have irregular or suppletive forms that don't follow the standard prefix paradigms."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "ju (прийти) → aju",
                "особливий активний префікс, відмінний від стандартного a-"
              ],
              [
                "e'i (сказати) → he'i",
                "3 особа має нерегулярний початок he-"
              ]
            ],
            "en": {
              "title": "Irregular Forms"
            }
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "nasal-harmony-exceptions",
        "title": "Винятки в носовій гармонії — B2",
        "emoji": "👃",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі запозичені з іспанської слова блокують носову гармонію навіть тоді, коли фонологічно вона мала б застосуватися, зберігаючи ротову вимову запозиченого кореня.",
            "en": {
              "text": "Some words borrowed from Spanish block nasal harmony even where it would phonologically apply, keeping the oral pronunciation of the borrowed root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Числівники, запозичені з іспанської, не набувають носової гармонії навіть у носовому контексті.",
                "фонологічний виняток для іншомовного шару лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Exceptions in Nasal Harmony — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо релігійні чи традиційні привітання) зберігають архаїчні форми слів, що вийшли із загального вжитку.",
            "en": {
              "text": "Some common formulas (especially religious or traditional greetings) preserve archaic word forms that have fallen out of general use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tupã nde irũ!",
                "Хай Бог буде з тобою! (архаїчне благословення)"
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
