// Vymova — data/grammar-data/grammar_ceb.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CEB: GrammarCategory[] = [
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
            "text": "Себуанська, як і тагальська, розрізняє \"ми без вас\" (kami) і \"ми з вами\" (kita).",
            "en": {
              "text": "Cebuano, like Tagalog, distinguishes \"we without you\" (kami) from \"we with you\" (kita)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ako"
              ],
              [
                "ти",
                "ikaw"
              ],
              [
                "він / вона",
                "siya"
              ],
              [
                "ми (без вас)",
                "kami"
              ],
              [
                "ми (з вами)",
                "kita"
              ],
              [
                "ви",
                "kamo"
              ],
              [
                "вони",
                "sila"
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
        "id": "zero-copula-identity",
        "title": "Ототожнення без дієслова \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Себуанська не має окремого дієслова \"бути\" — присудок просто ставиться перед підметом, без жодної зв'язки.",
            "en": {
              "text": "Cebuano has no separate \"to be\" verb — the predicate simply stands before the subject, with no linking word at all."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + підмет (без дієслова)",
            "rows": [
              [
                "Magtutudlo",
                "ako.",
                "я вчитель"
              ],
              [
                "Doktor",
                "siya.",
                "він/вона лікар"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Estudyante ako.",
                "Я студент."
              ]
            ]
          }
        ],
        "titleEn": "Identity Statements Without \"To Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"dili/wala\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Dili заперечує теперішні/майбутні твердження й прикметники, а wala заперечує минулу чи завершену дію та наявність — вибір частки залежить від часу/виду, а не є довільним.",
            "en": {
              "text": "Dili negates present/future statements and adjectives, while wala negates a past/completed action or existence — the particle choice depends on tense/aspect, not arbitrary."
            }
          },
          {
            "type": "formula",
            "title": "dili/wala + присудок",
            "rows": [
              [
                "Magtutudlo ako.",
                "Dili ako magtutudlo.",
                "Я вчитель. → Я не вчитель."
              ],
              [
                "Miadto siya.",
                "Wala siya moadto.",
                "Він пішов. → Він не пішов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dili ako gutom.",
                "Я не голодний."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Dili/Wala — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"ba\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються часткою ba, доданою одразу після присудка чи ключового слова речення.",
            "en": {
              "text": "Yes/no questions are formed with the particle ba, added right after the predicate or the sentence's key word."
            }
          },
          {
            "type": "formula",
            "title": "присудок + ba?",
            "rows": [
              [
                "Gutom ka.",
                "Gutom ka ba?",
                "Ти голодний. → Ти голодний?"
              ],
              [
                "Miadto siya.",
                "Miadto ba siya?",
                "Він пішов. → Він пішов?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kapoy ka ba?",
                "Ти втомлений?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with the Particle Ba — A1"
      },
      {
        "id": "ang-case-marker-overview",
        "title": "Частка \"ang\" — маркер теми речення — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість відмінкових закінчень себуанська вживає окремі частки перед іменником: ang позначає \"тему\" речення (те, про що йдеться), sa/ni — усе інше. Форма дієслова визначає, ЯКА роль (діяч, об'єкт, місце) отримує ang.",
            "en": {
              "text": "Instead of case endings, Cebuano uses separate particles before the noun: ang marks the sentence's \"topic\" (what it's about), sa/ni everything else. The verb's form determines WHICH role (doer, object, place) gets ang."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mipalit ang lalaki ug tinapay.",
                "Чоловік купив хліб (ang на діячі)."
              ],
              [
                "Gipalit sa lalaki ang tinapay.",
                "Хліб був куплений чоловіком (ang на об'єкті)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagbasa ang bata.",
                "Дитина читає."
              ]
            ]
          }
        ],
        "titleEn": "The Particle \"Ang\" — the Sentence's Topic Marker — A2"
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
        "id": "actor-trigger-verbs",
        "title": "Дієслова з фокусом на діячі (mag-/mo-) — A2",
        "titleEn": "Actor-Trigger Verbs (Mag-/Mo-) — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Коли префікс дієслова mag- чи mo-, тема речення (з ang) — це той, хто виконує дію.",
            "en": {
              "text": "When the verb takes the prefix mag- or mo-, the sentence's topic (with ang) is the one performing the action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mopalit ang babaye ug bugas.",
                "Жінка купить рис (тема — жінка, діяч)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Magluto siya ug pagkaon.",
                "Він/вона готуватиме їжу."
              ],
              [
                "Nagtrabaho ang mga lalaki.",
                "Чоловіки працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-trigger-verbs",
        "title": "Дієслова з фокусом на об'єкті (i-/-on) — B1",
        "titleEn": "Object-Trigger Verbs (I-/-On) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Коли дієслово має афікс -on чи i-, тема речення (з ang) — це предмет, над яким виконується дія, а не той, хто діє.",
            "en": {
              "text": "When the verb takes the affix -on or i-, the sentence's topic (with ang) is the thing the action is done to, not the doer."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Paliton sa babaye ang bugas.",
                "Рис буде куплений жінкою (тема — рис, об'єкт)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lutuon niya ang pagkaon.",
                "Він/вона приготує їжу (об'єкт — тема)."
              ],
              [
                "Ihatag ko kanimo ang libro.",
                "Я дам тобі книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-trigger-verbs",
        "title": "Дієслова з фокусом на місці (-an) — B1",
        "titleEn": "Locative-Trigger Verbs (-An) — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Афікс -an робить темою речення (з ang) місце чи ціль дії.",
            "en": {
              "text": "The affix -an makes the location or goal of the action the sentence's topic (with ang)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Hatagan ko ikaw ug libro.",
                "Я дам тобі книгу (тема — ти, отримувач)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sulatan niya ang lamesa.",
                "Він напише на столі (стіл — тема)."
              ],
              [
                "Adtoan namo ang syudad.",
                "Ми поїдемо в місто (місто — тема)."
              ]
            ]
          }
        ]
      },
      {
        "id": "beneficiary-trigger-verbs",
        "title": "Дієслова з фокусом на вигодонабувачі (i-) — B1",
        "titleEn": "Beneficiary-Trigger Verbs (I-) — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий префікс i- також може виносити темою речення особу, для якої виконується дія.",
            "en": {
              "text": "The same prefix i- can also make the person the action benefits the sentence's topic."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ipalit ko ikaw ug tinapay.",
                "Я куплю хліб для тебе (тема — ти)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ilutoan ko siya ug pagkaon.",
                "Я приготую їжу для нього."
              ],
              [
                "Ipadala niya kini kanako.",
                "Він надішле це мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfective-aspect",
        "title": "Доконаний вид (-in- інфікс) — A2",
        "titleEn": "Perfective Aspect (-In- Infix) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершена дія позначається інфіксом -in-, вставленим усередину основи дієслова (для actor-trigger форма змінюється на mi-/ni-).",
            "en": {
              "text": "A completed action is marked with the infix -in-, inserted inside the verb stem (for actor-trigger forms, it shifts to mi-/ni-)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mipalit ang lalaki ug tinapay.",
                "Чоловік купив хліб (завершено)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gipalit sa babaye ang bugas.",
                "Рис був куплений жінкою."
              ],
              [
                "Nikaon na siya.",
                "Він/вона вже поїв(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfective-aspect",
        "title": "Незавершений вид (na- + редуплікація) — A2",
        "titleEn": "Imperfective Aspect (Na- + Reduplication) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала чи звична дія позначається префіксом na-/nag- плюс частковою редуплікацією першого складу основи.",
            "en": {
              "text": "An ongoing or habitual action is marked with the prefix na-/nag- plus partial reduplication of the stem's first syllable."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Nagabasa siya ug libro.",
                "Він/вона зараз читає книгу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagatrabaho sila kada adlaw.",
                "Вони працюють щодня."
              ],
              [
                "Nagaluto ang inahan.",
                "Мама готує."
              ]
            ]
          }
        ]
      },
      {
        "id": "contemplated-aspect",
        "title": "Намічена дія (майбутнє, редуплікація без na-) — A2",
        "titleEn": "Contemplated Aspect (Future/Intended) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Дія, що ще не почалася, але вже намічена (майбутнє), позначається частковою редуплікацією основи БЕЗ префікса na-.",
            "en": {
              "text": "An action not yet begun but already intended (future) is marked with partial reduplication of the stem WITHOUT the na- prefix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mopalit ang lalaki ug tinapay.",
                "Чоловік купить хліб (намічено)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mokaon ako ugma.",
                "Я їстиму завтра."
              ],
              [
                "Moadto sila sa syudad.",
                "Вони поїдуть у місто."
              ]
            ]
          }
        ]
      },
      {
        "id": "neutral-infinitive-form",
        "title": "Нейтральна (словникова) форма дієслова — A1",
        "titleEn": "The Neutral (Dictionary) Verb Form — A1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Основа дієслова без жодного часо-видового афікса — це словникова форма, яка вживається після модальних слів чи в наказовому способі.",
            "en": {
              "text": "The bare verb stem with no aspect affix at all is the dictionary form, used after modal words or in the imperative."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kaon (їсти)",
                "словникова форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gusto ko mokaon.",
                "Я хочу їсти."
              ],
              [
                "Kinahanglan mopalit siya.",
                "Йому треба купити."
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
            "text": "Наказ — це переважно основа дієслова без префікса, іноді з суфіксом -a для об'єкт-фокусних дієслів.",
            "en": {
              "text": "A command is mostly the bare verb stem with no prefix, sometimes with the suffix -a for object-trigger verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kaon!",
                "Їж!"
              ],
              [
                "Palita ang tinapay!",
                "Купи хліб!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lingkod diri!",
                "Сідай тут!"
              ],
              [
                "Ablihi ang pultahan!",
                "Відчини двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "potential-mood-maka-prefix",
        "title": "Здатність/випадковість (maka-) — B1",
        "titleEn": "Potential/Accidental Mood (Maka-) — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс maka- виражає здатність виконати дію або дію, що сталася випадково/несподівано, а не навмисно.",
            "en": {
              "text": "The prefix maka- expresses the ability to do something, or an action that happened accidentally/unexpectedly rather than deliberately."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Makakaon ako ug daghan.",
                "Я можу з'їсти багато."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nakalimtan ko ang libro.",
                "Я випадково забув книгу."
              ],
              [
                "Makahimo ka niini.",
                "Ти можеш це зробити."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-pa-prefix",
        "title": "Каузативний префікс pa- — B1",
        "titleEn": "Causative Prefix Pa- — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс pa-, доданий до дієслова, означає \"змусити/дозволити виконати дію\".",
            "en": {
              "text": "The prefix pa-, added to a verb, means \"to make/let someone do the action\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Gipakaon niya ang bata.",
                "Він нагодував дитину (змусив їсти)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gipatrabaho niya ang mga tawo.",
                "Він змусив людей працювати."
              ],
              [
                "Pasudla ang bisita.",
                "Впусти гостя."
              ]
            ]
          }
        ]
      },
      {
        "id": "reciprocal-verbs",
        "title": "Взаємні дієслова (mag- + подвоєння) — B1",
        "titleEn": "Reciprocal Verbs (Mag- + Reduplication) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія (\"один одного\") виражається префіксом mag- у поєднанні з подвоєною основою дієслова.",
            "en": {
              "text": "A reciprocal action (\"each other\") is expressed with the prefix mag- combined with a reduplicated verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Maghigugmaay sila.",
                "Вони люблять одне одного."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagsultihanay sila.",
                "Вони розмовляли один з одним."
              ],
              [
                "Magtinabangay kita.",
                "Давайте допомагати одне одному."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-trigger-system-overview",
        "title": "Огляд усієї системи фокусу дієслова — B2",
        "titleEn": "Overview of the Whole Verb-Trigger System — B2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Одна й та сама подія може бути виражена кількома реченнями з різним фокусом (тим, що позначено ang) — вибір залежить від того, що є найважливішим у розмові, а не від зміни значення самої події.",
            "en": {
              "text": "The same event can be expressed by several sentences with different focus (whatever is marked by ang) — the choice depends on what's most important in the conversation, not on any change in the meaning of the event itself."
            }
          },
          {
            "type": "table",
            "title": "Одна подія, різний фокус",
            "rows": [
              [
                "Mipalit ang lalaki ug tinapay sa tindahan.",
                "діяч у фокусі"
              ],
              [
                "Gipalit sa lalaki ang tinapay sa tindahan.",
                "об'єкт у фокусі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gipalitan sa lalaki ang tindahan ug tinapay.",
                "місце у фокусі."
              ],
              [
                "Gipalit sa lalaki ang tinapay alang sa bata.",
                "той самий факт, наголос на дії."
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
        "id": "inclusive-exclusive-we-deep",
        "title": "\"Ми\" з вами/без вас у детальному розгляді — B1",
        "titleEn": "Inclusive/Exclusive \"We\" in Depth — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Розрізнення kita (з вами) / kami (без вас) поширюється й на присвійні форми — вибір впливає на кожну частину речення, а не лише на сам займенник.",
            "en": {
              "text": "The kita (inclusive) / kami (exclusive) distinction extends to possessive forms too — the choice affects every part of the sentence, not just the pronoun itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "atong balay (наш дім, з вами)",
                "inclusive"
              ],
              [
                "among balay (наш дім, без вас)",
                "exclusive"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Moadto kita ugma.",
                "Ми (з вами) підемо завтра."
              ],
              [
                "Miabot kami gahapon.",
                "Ми (без вас) прийшли вчора."
              ]
            ]
          }
        ]
      },
      {
        "id": "case-marker-ang-topic",
        "title": "Частка \"ang\" — деталі вживання — A2",
        "titleEn": "The Particle \"Ang\" — Usage Details — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Ang завжди позначає граматичну тему речення — те, про що конкретно йдеться, — незалежно від того, чи це діяч, об'єкт чи місце.",
            "en": {
              "text": "Ang always marks the sentence's grammatical topic — the specific thing being talked about — regardless of whether it's the doer, object, or place."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ang bata (ця дитина, тема)",
                "конкретна, вже відома дитина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagtan-aw ang bata sa TV.",
                "Дитина дивиться телевізор."
              ],
              [
                "Nindot ang balay.",
                "Дім гарний."
              ]
            ]
          }
        ]
      },
      {
        "id": "case-marker-sa-oblique",
        "title": "Частка \"sa\" — непрямий додаток/місце — A2",
        "titleEn": "The Particle \"Sa\" — Oblique/Location — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Sa вводить будь-яку конкретну (означену) частину речення, яка НЕ є темою: непрямий додаток, місце, час чи навіть діяча в об'єкт-фокусному реченні.",
            "en": {
              "text": "Sa introduces any specific (definite) part of the sentence that is NOT the topic: an oblique object, a location, a time, or even the doer in an object-trigger sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "sa balay",
                "у домі (означ.)"
              ],
              [
                "gipalit sa lalaki",
                "куплено чоловіком (діяч, не тема)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagpuyo siya sa Cebu.",
                "Він/вона живе в Себу."
              ],
              [
                "Gihatag niya sa bata ang libro.",
                "Він дав книгу дитині."
              ]
            ]
          }
        ]
      },
      {
        "id": "case-marker-ug-indefinite",
        "title": "Частка \"ug\" — неозначений додаток — A2",
        "titleEn": "The Particle \"Ug\" — Indefinite Object — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Ug вводить неозначений (\"якийсь\") прямий додаток, коли він не є темою речення, — на відміну від sa, яке вживається лише з означеними об'єктами.",
            "en": {
              "text": "Ug introduces an indefinite (\"a/some\") direct object when it's not the sentence's topic — unlike sa, which is used only with definite objects."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mipalit siya ug tinapay.",
                "Він купив (якогось) хліба."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagbasa ako ug libro.",
                "Я читаю (якусь) книгу."
              ],
              [
                "Naa siyay iro.",
                "У нього є собака."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-name-marker-si-ni",
        "title": "Маркер особового імені si/ni — A2",
        "titleEn": "Personal Name Marker Si/Ni — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Перед власними іменами людей вживають окремі частки si (тема) чи ni (непрямий/родовий) замість ang/sa.",
            "en": {
              "text": "Before personal proper names, separate particles si (topic) or ni (oblique/genitive) are used instead of ang/sa."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "si Maria",
                "Марія (тема)"
              ],
              [
                "libro ni Juan",
                "книга Хуана"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Miabot si Pedro.",
                "Педро прийшов."
              ],
              [
                "Gihatag ni Ana ang regalo.",
                "Ана дала подарунок."
              ]
            ]
          }
        ]
      },
      {
        "id": "linker-nga",
        "title": "Зв'язка \"nga\" між означенням та означуваним — A2",
        "titleEn": "The Linker \"Nga\" Between a Modifier and Its Head — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, число чи підрядне речення пов'язується з іменником обов'язковою часткою nga, незалежно від порядку слів.",
            "en": {
              "text": "An adjective, numeral, or clause is linked to the noun by the mandatory particle nga, regardless of word order."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dako nga balay",
                "великий дім"
              ],
              [
                "tulo nga bata",
                "троє дітей"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nindot nga balita kini.",
                "Це гарна новина."
              ],
              [
                "Ang babaye nga nagluto.",
                "Жінка, яка готує."
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
            "text": "Себуанська взагалі не має граматичного роду — той самий займенник siya означає \"він\" і \"вона\", і жоден прикметник не змінюється за родом.",
            "en": {
              "text": "Cebuano has no grammatical gender at all — the same pronoun siya means both \"he\" and \"she\", and no adjective changes for gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "nindot siya",
                "він/вона гарний(-а) (одна форма nindot)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Guwapo siya.",
                "Він гарний."
              ],
              [
                "Guwapa siya.",
                "Вона гарна (окреме слово, не суфікс роду)."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-particle-mga",
        "title": "Множина через частку \"mga\" — A1",
        "titleEn": "Plural via the Particle \"Mga\" — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина не позначається суфіксом, а окремою часткою mga, поставленою перед іменником.",
            "en": {
              "text": "The plural is not marked with a suffix but with the separate particle mga, placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "balay (дім)",
                "mga balay",
                "доми"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nindot ang mga balay.",
                "Доми гарні."
              ],
              [
                "Nagdula ang mga bata.",
                "Діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-plurality-intensity",
        "title": "Редуплікація для підсилення й повторення — B1",
        "titleEn": "Reduplication for Emphasis & Repetition — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова (окрім видових афіксів) підсилює значення прикметника чи вказує на повторювану/тривалу дію.",
            "en": {
              "text": "Repeating a word (beyond the aspect affixes) intensifies an adjective's meaning or indicates a repeated/prolonged action."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dali (швидко)",
                "dalidali",
                "дуже швидко/поспіхом"
              ],
              [
                "hilak (плакати)",
                "hilakhilak",
                "плакати без упину"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dalidali siya nga milakaw.",
                "Він пішов дуже поспіхом."
              ],
              [
                "Naghilakhilak ang bata.",
                "Дитина плакала без упину."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (kini/kana/kadto) — A1",
        "titleEn": "Demonstratives (Kini/Kana/Kadto) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Три ступені відстані: kini (це, близько), kana (те, біля співрозмовника), kadto (он те, далеко) — подібно до тагальської.",
            "en": {
              "text": "Three degrees of distance: kini (this, near), kana (that, near the listener), kadto (that over there, far) — similar to Tagalog."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kini nga libro",
                "ця книга"
              ],
              [
                "kadto nga balay",
                "он той дім"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Akoa kini.",
                "Це моє."
              ],
              [
                "Taas kadto nga bukid.",
                "Он та гора висока."
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
                "akong",
                "мій"
              ],
              [
                "imong",
                "твій"
              ],
              [
                "iyang",
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
                "Dako ang akong balay.",
                "Мій дім великий."
              ],
              [
                "Naa sa lamesa ang iyang libro.",
                "Її книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-construction",
        "title": "Підрядне означальне речення через nga — B1",
        "titleEn": "Relative Clause via Nga — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама зв'язка nga, що поєднує прикметник з іменником, вводить і підрядне означальне речення, без окремого відносного займенника \"який/що\".",
            "en": {
              "text": "The same linker nga that joins an adjective to a noun also introduces a relative clause, with no separate word for \"who/which\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ang tawo nga miabot",
                "людина, яка прийшла"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ang libro nga imong gibasa nindot.",
                "Книга, яку ти читаєш, гарна."
              ],
              [
                "Ang balay nga akong gipuy-an daan na.",
                "Дім, у якому я живу, старий."
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
                "kinsa",
                "хто"
              ],
              [
                "unsa",
                "що"
              ],
              [
                "asa",
                "де"
              ],
              [
                "kanus-a",
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
                "Unsa imong ngalan?",
                "Як тебе звати?"
              ],
              [
                "Asa ka nagpuyo?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-construction",
        "title": "Зворотна конструкція (sa kaugalingon) — B1",
        "titleEn": "Reflexive Construction (Sa Kaugalingon) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"себе\" виражається фразою sa kaugalingon (буквально: до власного) з присвійним займенником.",
            "en": {
              "text": "The reflexive meaning \"oneself\" is expressed with the phrase sa kaugalingon (literally: to one's own) with a possessive."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Gitan-aw niya ang iyang kaugalingon.",
                "Він подивився на себе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gihigugma niya ang iyang kaugalingon.",
                "Він любить себе."
              ],
              [
                "Nasamdan siya sa iyang kaugalingon.",
                "Він поранив сам себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-native",
        "title": "Кількісні числівники (питомі) — A1",
        "titleEn": "Cardinal Numerals (Native) — A1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "usa",
                "1"
              ],
              [
                "duha",
                "2"
              ],
              [
                "tulo",
                "3"
              ],
              [
                "napulo",
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
                "Duha ka igsoong babaye ang naa nako.",
                "У мене дві сестри."
              ],
              [
                "Napulo ka tawo ang miabot.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-spanish-loanword",
        "title": "Іспанські числівники для часу й ціни — A2",
        "titleEn": "Spanish Numerals for Time & Price — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Через 300 років іспанського колоніального панування числа для годин, дат і грошей майже завжди вживають запозичену з іспанської форму, а не питому себуанську.",
            "en": {
              "text": "Due to 300 years of Spanish colonial rule, numbers for time, dates, and money almost always use the Spanish-borrowed form rather than the native Cebuano one."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ala una (1 година, з ісп.)",
                "не \"usa\""
              ],
              [
                "singko pesos (5 песо, з ісп.)",
                "не \"lima\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Alas otso na ang oras.",
                "Уже восьма година."
              ],
              [
                "Beinte pesos ang bugas.",
                "Рис коштує двадцять песо."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier-buok",
        "title": "Класифікатор \"ka/buok\" — A2",
        "titleEn": "Classifier \"Ka/Buok\" — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ka вставляється між числівником та іменником при рахунку майже завжди, а buok додатково підкреслює \"штучність\" предмета.",
            "en": {
              "text": "The particle ka is inserted between the numeral and the noun when counting almost always, and buok additionally emphasizes the countable individuality of the item."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tulo ka libro",
                "три книги"
              ],
              [
                "duha ka buok mangga",
                "два манго (штуки)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Lima ka bata ang nagdula.",
                "П'ятеро дітей грається."
              ],
              [
                "Naa koy usa ka buok saging.",
                "У мене є один банан."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-prepositions-overview",
        "title": "Прийменники — A2",
        "titleEn": "Prepositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "sa",
                "в, у, до"
              ],
              [
                "sa ibabaw",
                "на"
              ],
              [
                "sa ilalom",
                "під"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Naa ang libro sa ibabaw sa lamesa.",
                "Книга на столі."
              ],
              [
                "Naa siya sa balay.",
                "Він/вона вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-vso",
        "title": "Базовий порядок слів VSO — A1",
        "titleEn": "Basic VSO Word Order — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий, нейтральний порядок слів — присудок-підмет-додаток (VSO), дієслово стоїть на початку речення.",
            "en": {
              "text": "The basic, neutral word order is verb-subject-object (VSO), with the verb at the start of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Nagbasa ang bata ug libro.",
                "Дитина читає книгу (буквально: читає дитина книгу)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagluto ang inahan ug pagkaon.",
                "Мама готує їжу."
              ],
              [
                "Nagtuon ang mga estudyante.",
                "Учні навчаються."
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
                "ug",
                "і, та"
              ],
              [
                "apan",
                "але"
              ],
              [
                "o",
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
                "Ako ug ikaw managhigala.",
                "Я і ти — друзі."
              ],
              [
                "Gusto ko moadto, apan wala koy panahon.",
                "Хочу піти, але не маю часу."
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
                "kay",
                "тому що"
              ],
              [
                "kung",
                "якщо/коли"
              ],
              [
                "samtang",
                "поки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Malipay ko kay miabot ka.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Kung gawasnon na ko, motawag ko.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні слова (kinahanglan/pwede) — A2",
        "titleEn": "Modal Words (Kinahanglan/Pwede) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kinahanglan ko moadto.",
                "Мені треба йти."
              ],
              [
                "Pwede ko molangoy.",
                "Я вмію плавати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kinahanglan ka motuon.",
                "Тобі треба вчитися."
              ],
              [
                "Gusto ko motabang.",
                "Я хочу допомогти."
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
                "daghan",
                "багато"
              ],
              [
                "gamay",
                "мало"
              ],
              [
                "pipila",
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
                "Daghan ko ug libro.",
                "У мене багато книг."
              ],
              [
                "Hatagi ko ug gamay nga tubig.",
                "Дай мені трохи води."
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
                "Lunes",
                "понеділок"
              ],
              [
                "Sabado",
                "субота"
              ],
              [
                "Dominggo",
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
                "Lunes karon.",
                "Сьогодні понеділок."
              ],
              [
                "Nagpahulay ko matag Dominggo.",
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
                "Enero",
                "січень"
              ],
              [
                "Mayo",
                "травень"
              ],
              [
                "Disyembre",
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
                "Sa Mayo ang akong adlawng natawhan.",
                "Мій день народження в травні."
              ],
              [
                "Ikanapulo sa Enero karon.",
                "Сьогодні десяте січня."
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
                "Unsa nang orasa?",
                "Котра година?"
              ],
              [
                "Alas tres na.",
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
                "Magkita ta alas sais.",
                "Зустрінемось о шостій."
              ],
              [
                "Udto na karon.",
                "Зараз полудень."
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
                "Maayong adlaw",
                "Доброго дня"
              ],
              [
                "Salamat",
                "Дякую"
              ],
              [
                "Babay",
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
                "Kumusta ka?",
                "Як справи?"
              ],
              [
                "Daghang salamat.",
                "Дуже дякую."
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
                "Init ang adlaw.",
                "Сонячно."
              ],
              [
                "Nag-ulan.",
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
                "Bugnaw karon.",
                "Сьогодні холодно."
              ],
              [
                "Init kaayo.",
                "Дуже жарко."
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
                "taas ug pasensya",
                "терплячий (буквально: довге терпіння)"
              ],
              [
                "init ang ulo",
                "розлючений (буквально: гаряча голова)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Taas siya ug pasensya.",
                "Він дуже терплячий."
              ],
              [
                "Init akong ulo karon.",
                "Я зараз розлючений."
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
                "dali",
                "швидко"
              ],
              [
                "hinay",
                "повільно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dali siya modagan.",
                "Він швидко бігає."
              ],
              [
                "Hinay-hinay pagsulti.",
                "Говори повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Словотвірні афікси — B1",
        "titleEn": "Word-Formation Affixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kaXan",
                "утворює абстрактні іменники (gawasnon→kagawasan, вільний→свобода)"
              ],
              [
                "mag-",
                "утворює назви професій-діячів"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Importante ang kagawasan.",
                "Свобода важлива."
              ],
              [
                "Magtutudlo siya.",
                "Він вчитель (той, хто навчає)."
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
                "kamot (рука) + relo (годинник)",
                "kamot-relo (наручний годинник)"
              ],
              [
                "balay (дім) + tubo (труба)",
                "balay-tubo (щось на кшталт водонапірної вежі)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bag-o akong kamot-relo.",
                "Мій наручний годинник новий."
              ],
              [
                "Daan na ang balay-tubo.",
                "Водонапірна вежа стара."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року (сухий/дощовий сезон) — A2",
        "titleEn": "Seasons (Dry/Rainy Season) — A2",
        "emoji": "🌧️",
        "sections": [
          {
            "type": "intro",
            "text": "На Філіппінах розрізняють переважно два сезони — сухий (tigrangyaw) і дощовий (tig-ulan), а не чотири класичні пори року.",
            "en": {
              "text": "The Philippines mainly distinguishes two seasons — dry (tigrangyaw) and rainy (tig-ulan) — rather than four classic seasons."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tig-init",
                "сухий/спекотний сезон"
              ],
              [
                "tig-ulan",
                "дощовий сезон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nag-abot na ang tig-ulan.",
                "Дощовий сезон уже настав."
              ],
              [
                "Init kaayo sa tig-init.",
                "У сухий сезон дуже жарко."
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
                "Tag-pila kini?",
                "Скільки коштує?"
              ],
              [
                "Usa ka libo ka pesos.",
                "Тисяча песо."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kining libroha dosyentos pesos.",
                "Ця книга коштує двісті песо."
              ],
              [
                "Mahal kaayo.",
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
                "Sa akong hunahuna...",
                "Я думаю, що..."
              ],
              [
                "Alang kanako...",
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
                "Sa akong hunahuna, husto ka.",
                "Я думаю, що ти правий."
              ],
              [
                "Alang kanako, maayo kining ideyaha.",
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
                "karon / ugma / gahapon",
                "сьогодні / завтра / вчора"
              ],
              [
                "karon / unya",
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
                "Magkita ta ugma.",
                "Побачимось завтра."
              ],
              [
                "Busy ko karon.",
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
                "adunay usa",
                "хтось"
              ],
              [
                "adunay butang",
                "щось"
              ],
              [
                "walay usa",
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
                "Adunay mitawag nako.",
                "Хтось мені подзвонив."
              ],
              [
                "Nakadungog ko ug usa ka butang.",
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
                "Uy!",
                "Ой!"
              ],
              [
                "Nindot kaayo!",
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
                "Uy, nindot kaayo!",
                "Ой, як гарно!"
              ],
              [
                "Nindot kaayo nga balita!",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-adunay-naa",
        "title": "Конструкція \"є/немає\" (naa/wala) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Naa/Wala) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Naa tubig.",
                "Є вода."
              ],
              [
                "Wala panahon.",
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
                "Daghang tawo dinhi.",
                "Тут багато людей."
              ],
              [
                "Wala tindahan dinhi.",
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
            "text": "Пестливість часто виражається окремим словом gamay (маленький) перед іменником, а не суфіксом.",
            "en": {
              "text": "Affection/diminutive is often expressed with the separate word gamay (small) before the noun, rather than a suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "gamay nga bata",
                "малятко"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nagtulog ang gamay nga bata.",
                "Малятко спить."
              ],
              [
                "Guwapa akong iyaan.",
                "Моя матусенька гарна."
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
                "Sir/Ma'am (з англ.)",
                "пан/пані (формально)"
              ],
              [
                "Manong/Manang",
                "старший брат/сестра (звертання)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Maayong buntag, Sir.",
                "Доброго ранку, пане."
              ],
              [
                "Manang, tabangi ko.",
                "Сестро, допоможи мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "proverbs-sayings",
        "title": "Прислів'я — B2",
        "titleEn": "Proverbs — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ang way alimpatakan sama sa barko nga way timon.",
                "Хто без плану — як корабель без керма."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ayaw pagsalig sa dagko lang ug bahandi.",
                "Не покладайся лише на багатство."
              ],
              [
                "Ang kasakit maoy modala sa kalipay.",
                "Через труднощі приходить радість."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-spanish-english",
        "title": "Запозичення з іспанської та англійської — B1",
        "titleEn": "Spanish & English Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через колоніальну історію значна частина побутової лексики запозичена з іспанської (300 років правління), а сучасна технічна й адміністративна — з англійської.",
            "en": {
              "text": "Due to colonial history, much everyday vocabulary is borrowed from Spanish (300 years of rule), while modern technical and administrative vocabulary comes from English."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kusina (з ісп. \"cocina\")",
                "кухня"
              ],
              [
                "computer (з англ.)",
                "комп'ютер"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Naa sa kusina ang inahan.",
                "Мама на кухні."
              ],
              [
                "Nadaot akong computer.",
                "Мій комп'ютер зламався."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Порядок прикметника й іменника — A1",
        "titleEn": "Adjective & Noun Order — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник може стояти і перед, і після іменника, залежно від стилю, але завжди з'єднується з ним часткою nga.",
            "en": {
              "text": "The adjective can go either before or after the noun, depending on style, but is always linked to it with the particle nga."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dako nga balay / balay nga dako",
                "великий дім (обидва порядки можливі)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nindot nga bulak kini.",
                "Це гарна квітка."
              ],
              [
                "Gwapa siya kaayo.",
                "Вона дуже гарна."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (mas/labing) — A2",
        "titleEn": "Comparative & Superlative (Mas/Labing) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом mas перед прикметником, найвищий — labing.",
            "en": {
              "text": "The comparative is formed with the word mas before the adjective, the superlative with labing."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "dako (великий)",
                "mas dako",
                "більший"
              ],
              [
                "dako (великий)",
                "labing dako",
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
                "Mas dako kini nga balay.",
                "Цей дім більший."
              ],
              [
                "Siya ang labing maalam sa klase.",
                "Він найрозумніший у класі."
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
                "una",
                "перший"
              ],
              [
                "ikaduha",
                "другий"
              ],
              [
                "ikatulo",
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
                "Kini ang akong unang libro.",
                "Це моя перша книга."
              ],
              [
                "Ikaduha siya nga nidaog.",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличне звертання — A2",
        "titleEn": "Vocative Address — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Nay!",
                "Мамо!"
              ],
              [
                "Uy, Juan!",
                "Гей, Хуане!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nay, dinhi ko!",
                "Мамо, я тут!"
              ],
              [
                "Sir, tabangi ko.",
                "Пане, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-focus-fronting",
        "title": "Винесення теми на початок для наголосу — B1",
        "titleEn": "Topic Fronting for Emphasis — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча базовий порядок VSO, тему речення можна винести на найперше місце (перед дієсловом) для особливого наголосу, зі зв'язкою nga чи без неї.",
            "en": {
              "text": "Although the base order is VSO, the sentence's topic can be fronted to the very first position (before the verb) for special emphasis, with or without the linker nga."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ang bata, nagtan-aw sa TV.",
                "Дитина — саме вона дивиться телевізор."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Si Maria, nagluto siya.",
                "Марія — вона готує."
              ],
              [
                "Ang libro, gibasa nako.",
                "Книгу — я прочитав."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-root-vs-affixed-form",
        "title": "Корінь дієслова проти афіксованої форми — B1",
        "titleEn": "Verb Root vs. Affixed Form — B1",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Словниковий корінь дієслова сам по собі не має ні часу, ні виду, ні фокусу — усі ці значення додаються афіксами, тож потрібно вчити не окреме дієслово, а весь набір можливих афіксованих форм.",
            "en": {
              "text": "The dictionary root of a verb has no tense, aspect, or focus on its own — all these meanings are added by affixes, so one must learn not a single verb but the whole set of possible affixed forms."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kaon (корінь, \"їсти\")",
                "mokaon/nikaon/gikaon/kan-on — різні форми, той самий корінь"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mokaon ako.",
                "Я їстиму."
              ],
              [
                "Kan-on nako kini.",
                "Я з'їм це."
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
        "id": "trigger-system-complexity",
        "title": "Повна складність системи фокусу — понад одну \"пасивну\" форму — B2",
        "titleEn": "The Full Complexity of the Trigger System — More Than One \"Passive\" — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від європейського пасиву (лише один спосіб \"перевернути\" речення), себуанська має цілий ряд різних фокус-афіксів, кожен з яких виносить у тему зовсім іншу семантичну роль (об'єкт, місце, знаряддя, вигодонабувач) — це не варіанти одного явища, а окремі граматичні конструкції, які потрібно вивчати окремо.",
            "en": {
              "text": "Unlike the European passive (just one way to \"flip\" a sentence), Cebuano has a whole range of different focus affixes, each fronting an entirely different semantic role (object, place, instrument, beneficiary) as the topic — these aren't variants of one phenomenon, but separate grammatical constructions that must be learned individually."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Igasaka niya ang bata sa hagdanan.",
                "instrument-фокус: сходи"
              ],
              [
                "Isakay niya ang bata sa awto.",
                "об'єкт-фокус: дитина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gigamit niya ang kutsara sa pagkaon.",
                "Він використав ложку, щоб їсти."
              ],
              [
                "Gikan-an niya ang kan-anan.",
                "Він поїв у їдальні (місце-фокус)."
              ]
            ]
          }
        ]
      },
      {
        "id": "spanish-colonial-lexical-layer",
        "title": "Глибокий шар іспанської лексики — B1",
        "titleEn": "The Deep Spanish Colonial Lexical Layer — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Понад 300 років іспанського панування залишили глибокий слід не лише в числах чи назвах днів, а й у релігійній, родинній та побутовій лексиці — багато щоденних слів виглядають іспанськими, хоча сама граматика себуанської залишається повністю австронезійською, не романською.",
            "en": {
              "text": "Over 300 years of Spanish rule left a deep mark not just on numbers or day names but on religious, family, and everyday vocabulary — many daily words look Spanish, even though Cebuano's grammar itself remains entirely Austronesian, not Romance."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "lamesa (з ісп. \"mesa\")",
                "стіл"
              ],
              [
                "kamiseta (з ісп. \"camiseta\")",
                "футболка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Naa sa lamesa ang libro.",
                "Книга на столі."
              ],
              [
                "Bag-o akong kamiseta.",
                "Моя футболка нова."
              ]
            ]
          }
        ]
      },
      {
        "id": "cebuano-vs-tagalog-mutual-unintelligibility",
        "title": "Себуанська й тагальська — взаємно незрозумілі — B1",
        "titleEn": "Cebuano and Tagalog Are Mutually Unintelligible — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Попри спільну австронезійську структуру й подібну систему фокусу дієслова, себуанська й тагальська (основа стандартної філіппінської мови) — не діалекти однієї мови, а окремі мови, взаємно незрозумілі в живому спілкуванні: майже вся базова лексика різна.",
            "en": {
              "text": "Despite the shared Austronesian structure and similar verb-focus system, Cebuano and Tagalog (the basis of standard Filipino) are not dialects of one language but separate, mutually unintelligible languages in live conversation — almost all basic vocabulary differs."
            }
          },
          {
            "type": "table",
            "title": "Приклад розбіжності",
            "rows": [
              [
                "Себуанська: unsa (що)",
                "тагальська: ano (що) — зовсім інше слово"
              ],
              [
                "Себуанська: dili (не)",
                "тагальська: hindi (не) — інше слово"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Unsa imong ngalan? (себуанська)",
                "Як тебе звати? (тагальською буде зовсім інакше)"
              ],
              [
                "Wala koy sabot sa Tagalog.",
                "Я не розумію тагальської."
              ]
            ]
          }
        ]
      }
    ]
  }
];
