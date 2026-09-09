// Vymova — data/grammar-data/grammar_is.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_IS: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persónufornöfn — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ісландська зберегла давньоскандинавську систему займенників практично незмінною — вона виглядає майже так само, як тисячу років тому.",
            "en": {
              "text": "Icelandic has preserved the Old Norse pronoun system almost unchanged — it looks nearly the same as it did a thousand years ago."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ég"
              ],
              [
                "ти",
                "þú"
              ],
              [
                "він / вона / воно",
                "hann / hún / það"
              ],
              [
                "ми",
                "við"
              ],
              [
                "ви",
                "þið"
              ],
              [
                "вони (ч./ж./с.р.)",
                "þeir / þær / þau"
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
        "id": "verb-vera",
        "title": "Vera — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Vera\" (бути) — найважливіше й неправильне дієслово ісландської, як і в інших скандинавських мовах.",
            "en": {
              "text": "\"Vera\" (to be) is the most important and irregular verb in Icelandic, as in the other Scandinavian languages."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час vera",
            "rows": [
              [
                "ég er",
                "я є"
              ],
              [
                "þú ert",
                "ти є"
              ],
              [
                "hann/hún er",
                "він/вона є"
              ],
              [
                "við erum",
                "ми є"
              ],
              [
                "þið eruð",
                "ви є"
              ],
              [
                "þeir eru",
                "вони є"
              ]
            ],
            "en": {
              "title": "Present Tense of vera"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég er kennari.",
                "Я вчитель."
              ],
              [
                "Hann er frá Íslandi.",
                "Він з Ісландії."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vera — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ekki — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"ekki\" (не), яке зазвичай стоїть одразу після дієслова.",
            "en": {
              "text": "Negation is formed with the word \"ekki\" (not), which usually stands right after the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ég er hér.",
                "Ég er ekki hér.",
                "Я тут → я не тут"
              ],
              [
                "Hann veit það.",
                "Hann veit það ekki.",
                "Він знає це → він не знає цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég er ekki þreytt(ur).",
                "Я не втомлений(а)."
              ],
              [
                "Hún talar ekki þýsku.",
                "Вона не розмовляє німецькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ekki — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання утворюють інверсією дієслова й підмета; спеціальні — питальними словами на початку речення.",
            "en": {
              "text": "Yes/no questions are formed by inverting the verb and subject; wh-questions use question words at the start of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "hver",
                "хто"
              ],
              [
                "hvað",
                "що"
              ],
              [
                "hvar",
                "де"
              ],
              [
                "hvenær",
                "коли"
              ],
              [
                "hvers vegna",
                "чому"
              ],
              [
                "hvernig",
                "як"
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
                "Ert þú Íslendingur?",
                "Ти ісландець?"
              ],
              [
                "Hvar býrð þú?",
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
        "id": "productive-genitive",
        "title": "Живий і продуктивний родовий відмінок — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від близькоспорідненої фарерської, де живий родовий відмінок майже зник і замінився прийменниковою конструкцією, в ісландській родовий відмінок лишається повністю живим і продуктивним у щоденному мовленні.",
            "en": {
              "text": "Unlike closely related Faroese, where the living genitive case has nearly disappeared and been replaced by a prepositional construction, in Icelandic the genitive remains fully alive and productive in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "Родовий відмінок",
            "rows": [
              [
                "bíll mannsins",
                "машина чоловіка (родовий mannsins, а не прийменникова заміна)"
              ],
              [
                "höfuðborg Íslands",
                "столиця Ісландії"
              ]
            ],
            "en": {
              "title": "The Genitive Case"
            }
          }
        ],
        "titleEn": "The Living, Productive Genitive Case — A2"
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
        "id": "present-weak-verbs",
        "title": "Теперішній час слабких дієслів — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Слабкі дієслова відмінюються регулярно за особовими закінченнями, доданими до основи.",
            "en": {
              "text": "Weak verbs conjugate regularly with personal endings added to the stem."
            }
          },
          {
            "type": "table",
            "title": "kalla (кликати) — теперішній час",
            "rows": [
              [
                "ég kalla",
                "я кличу"
              ],
              [
                "þú kallar",
                "ти кличеш"
              ],
              [
                "hann kallar",
                "він кличе"
              ]
            ],
            "en": {
              "title": "kalla (to call) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Weak Verbs — A1"
      },
      {
        "id": "present-strong-verbs",
        "title": "Теперішній час сильних дієслів — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова часто змінюють кореневий голосний у 2-3 особі однини теперішнього часу.",
            "en": {
              "text": "Strong verbs often change their root vowel in the 2nd/3rd person singular present tense."
            }
          },
          {
            "type": "table",
            "title": "bíta (кусати) — теперішній час",
            "rows": [
              [
                "ég bít",
                "я кусаю"
              ],
              [
                "þú bítur",
                "ти кусаєш"
              ],
              [
                "hann bítur",
                "він кусає"
              ]
            ],
            "en": {
              "title": "bíta (to bite) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Strong Verbs — A2"
      },
      {
        "id": "past-weak-verbs",
        "title": "Минулий час слабких дієслів — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час слабких дієслів утворюється закінченням -aði/-di/-ti залежно від класу дієслова.",
            "en": {
              "text": "The past tense of weak verbs is formed with -aði/-di/-ti depending on the verb class."
            }
          },
          {
            "type": "table",
            "title": "kalla → kallaði",
            "rows": [
              [
                "ég kallaði",
                "я кликав(ла)"
              ],
              [
                "þú kallaðir",
                "ти кликав(ла)"
              ]
            ],
            "en": {
              "title": "kalla → kallaði"
            }
          }
        ],
        "titleEn": "Past Tense of Weak Verbs — A2"
      },
      {
        "id": "past-strong-verbs",
        "title": "Минулий час сильних дієслів (аблаут) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова змінюють кореневий голосний у минулому часі замість додавання закінчення, за одним із семи класичних аблаутних рядів, успадкованих з давньоскандинавської.",
            "en": {
              "text": "Strong verbs change their root vowel in the past tense instead of adding an ending, following one of the seven classical ablaut series inherited from Old Norse."
            }
          },
          {
            "type": "table",
            "title": "bíta → beit",
            "rows": [
              [
                "bíta (кусати) → ég beit",
                "я кусав(ла)"
              ],
              [
                "taka (брати) → ég tók",
                "я брав(ла)"
              ]
            ],
            "en": {
              "title": "bíta → beit"
            }
          }
        ],
        "titleEn": "Past Tense of Strong Verbs (Ablaut) — B1"
      },
      {
        "id": "perfect-hafa",
        "title": "Перфект з hafa — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект більшості дієслів = hafa в теперішньому часі + дієприкметник минулого часу.",
            "en": {
              "text": "The perfect of most verbs = hafa in the present tense + the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég hef lesið bókina.",
                "Я прочитав книгу."
              ],
              [
                "Hann hefur ekki borðað.",
                "Він не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense with hafa — A2"
      },
      {
        "id": "perfect-vera",
        "title": "Перфект з vera (дієслова руху) — B1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в фарерській, деякі дієслова руху й зміни стану утворюють перфект з допоміжним \"vera\" замість \"hafa\" — спільна риса, успадкована з давньоскандинавської.",
            "en": {
              "text": "As in Faroese, some verbs of motion and change of state form the perfect with the auxiliary \"vera\" instead of \"hafa\" — a shared trait inherited from Old Norse."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég er kominn heim.",
                "Я прийшов додому."
              ],
              [
                "Hann er farinn.",
                "Він пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect with vera (Motion Verbs) — B1"
      },
      {
        "id": "future-munu",
        "title": "Майбутній час (munu) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутнє виражають модальним дієсловом \"munu\" (приблизно \"напевно буде\") + інфінітив — інша модальна основа, ніж фарерська конструкція \"fara at\".",
            "en": {
              "text": "The future is expressed with the modal verb \"munu\" (roughly \"will surely\") + infinitive — a different modal base from the Faroese \"fara at\" construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég mun hringja í þig.",
                "Я подзвоню тобі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense (munu) — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова без закінчення; для множини додається -ið.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem with no ending; the plural adds -ið."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Kalla!",
                "Клич!"
              ],
              [
                "Kallið!",
                "Кличте! (мн.)"
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
        "id": "subjunctive-alive",
        "title": "Живий підрядний спосіб — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від фарерської, де підрядний спосіб майже зник із живої мови, в ісландській він лишається продуктивним і регулярно вживається в непрямій мові, побажаннях і підрядних реченнях після дієслів сумніву.",
            "en": {
              "text": "Unlike Faroese, where the subjunctive has nearly vanished from living speech, in Icelandic it remains productive and is regularly used in reported speech, wishes, and subordinate clauses after verbs of doubt."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hann sagði að hann væri veikur.",
                "Він сказав, що він хворий. (væri — підрядний спосіб у непрямій мові)"
              ],
              [
                "Lengi lifi drottningin!",
                "Хай живе королева!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Living Subjunctive Mood — B1"
      },
      {
        "id": "passive-vera",
        "title": "Пасивний стан з vera — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним дієсловом \"vera\" + дієприкметник минулого часу.",
            "en": {
              "text": "The passive voice is formed with the auxiliary \"vera\" + the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Húsið var byggt árið 1990.",
                "Дім був побудований у 1990."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice with vera — B1"
      },
      {
        "id": "middle-voice-st",
        "title": "Зворотно-середній стан на -st — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -st, доданий до дієслова, утворює багатофункціональний зворотно-середній стан — пасивне, зворотне чи спонтанне значення залежно від дієслова; система ширша й продуктивніша, ніж у фарерській.",
            "en": {
              "text": "The suffix -st, added to a verb, forms a multifunctional middle voice — passive, reflexive, or spontaneous meaning depending on the verb; the system is broader and more productive than in Faroese."
            }
          },
          {
            "type": "table",
            "title": "klæða → klæðast",
            "rows": [
              [
                "klæða (одягати когось) → klæðast",
                "одягатися (самому)"
              ],
              [
                "opna → opnast",
                "відчинятися (самостійно)"
              ]
            ],
            "en": {
              "title": "klæða → klæðast"
            }
          }
        ],
        "titleEn": "The Middle Voice Suffix -st — B1"
      },
      {
        "id": "reciprocal-st",
        "title": "Взаємність через -st — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама форма -st може також виражати взаємну дію \"одне одного\", окрему від зворотного й пасивного значення.",
            "en": {
              "text": "The same -st form can also express a reciprocal action \"each other\", distinct from the reflexive and passive meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Við hittumst á morgun.",
                "Ми зустрінемося завтра (одне з одним)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocity via -st — B1"
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова — A2",
        "emoji": "🎛️",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kunna-могти, mega-мати дозвіл, skulu-мусити, vilja-хотіти) поєднуються з голим інфінітивом.",
            "en": {
              "text": "Modal verbs (kunna-can, mega-may, skulu-must, vilja-want) combine with the bare infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég kann að tala íslensku.",
                "Я вмію говорити ісландською."
              ],
              [
                "Þú skalt fara.",
                "Ти мусиш йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verbs — A2"
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
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівноправні частини; підрядні сполучники впливають на порядок слів у підрядному реченні.",
            "en": {
              "text": "Coordinating conjunctions join equal parts; subordinating conjunctions affect word order in the subordinate clause."
            }
          },
          {
            "type": "table",
            "title": "og / en / því að",
            "rows": [
              [
                "og",
                "і"
              ],
              [
                "en",
                "але"
              ],
              [
                "því að",
                "тому що"
              ]
            ],
            "en": {
              "title": "og / en / því að"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "case-accusative",
        "title": "Знахідний відмінок — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок позначає прямий додаток і часто відрізняється від називного, особливо в чоловічому роді.",
            "en": {
              "text": "The accusative marks the direct object and often differs from the nominative, especially in the masculine."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég sé hund.",
                "Я бачу собаку. (знах. hund, наз. hundur)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Accusative Case — A2"
      },
      {
        "id": "case-dative",
        "title": "Давальний відмінок — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок позначає непрямий додаток і керується багатьма прийменниками.",
            "en": {
              "text": "The dative marks the indirect object and is governed by many prepositions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég gef hundinum mat.",
                "Я даю собаці їжу. (давн. hundinum)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Dative Case — A2"
      },
      {
        "id": "case-genitive-declension",
        "title": "Відмінювання родового відмінка — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (-s у чоловічому й середньому роді, -ar/-u в жіночому) активно вживається в щоденній мові для присвійності, на відміну від майже зниклого фарерського родового.",
            "en": {
              "text": "The genitive case (-s in masculine and neuter, -ar/-u in feminine) is actively used in everyday speech for possession, unlike the nearly vanished Faroese genitive."
            }
          },
          {
            "type": "table",
            "title": "hundur → hunds",
            "rows": [
              [
                "hundur → hunds",
                "собаки"
              ],
              [
                "borg → borgar",
                "міста"
              ]
            ],
            "en": {
              "title": "hundur → hunds"
            }
          }
        ],
        "titleEn": "Declining the Genitive Case — B1"
      },
      {
        "id": "u-umlaut",
        "title": "У-умляут (a→ö) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Історичне правило: голосна \"a\" в корені регулярно переходить в \"ö\", коли наступний склад містить \"u\" — системна, а не випадкова зміна.",
            "en": {
              "text": "A historical rule: the root vowel \"a\" regularly shifts to \"ö\" when the following syllable contains \"u\" — a systematic, not random, change."
            }
          },
          {
            "type": "table",
            "title": "land → löndum",
            "rows": [
              [
                "land (країна, одн.)",
                "löndum (країнам, дав. мн. — -um спричиняє a→ö)"
              ]
            ]
          }
        ],
        "titleEn": "U-Umlaut (a→ö) — B1"
      },
      {
        "id": "three-genders",
        "title": "Три граматичні роди — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий, жіночий і середній рід, який визначає закінчення артикля, прикметника й займенника.",
            "en": {
              "text": "Nouns have masculine, feminine, and neuter gender, which determines the endings of the article, adjective, and pronoun."
            }
          },
          {
            "type": "table",
            "title": "Три роди",
            "rows": [
              [
                "hundur (ч.р.)",
                "собака"
              ],
              [
                "bók (ж.р.)",
                "книга"
              ],
              [
                "hús (с.р.)",
                "дім"
              ]
            ],
            "en": {
              "title": "Three Genders"
            }
          }
        ],
        "titleEn": "Three Grammatical Genders — A1"
      },
      {
        "id": "adjective-strong-weak-full",
        "title": "Повна парадигма сильної й слабкої відміни — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки всі чотири відмінки продуктивні, прикметник має повну сильну (з неозначеним іменником) і слабку (з означеним) парадигму в кожному роді, числі й відмінку — значно об'ємнішу за фарерську.",
            "en": {
              "text": "Since all four cases are productive, the adjective has a full strong (with an indefinite noun) and weak (with a definite noun) paradigm in every gender, number, and case — considerably larger than the Faroese one."
            }
          },
          {
            "type": "formula",
            "title": "Сильна → слабка",
            "rows": [
              [
                "stór hundur",
                "stóri hundurinn",
                "великий собака (сильна) → той великий собака (слабка)"
              ]
            ]
          }
        ],
        "titleEn": "The Full Strong/Weak Adjective Paradigm — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодження прикметника — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді, числі й відмінку.",
            "en": {
              "text": "The adjective agrees with the noun in gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "stór, stór, stórt",
            "rows": [
              [
                "stór hundur (ч.р.)",
                "великий собака"
              ],
              [
                "stór bók (ж.р.)",
                "велика книга"
              ],
              [
                "stórt hús (с.р.)",
                "великий дім"
              ]
            ],
            "en": {
              "title": "stór, stór, stórt"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється закінченням -ari, найвищий — -astur.",
            "en": {
              "text": "The comparative is formed with -ari, the superlative with -astur."
            }
          },
          {
            "type": "table",
            "title": "stór → stærri → stærstur",
            "rows": [
              [
                "stór (великий)",
                "stærri (більший)",
                "stærstur (найбільший)"
              ]
            ]
          }
        ],
        "titleEn": "Comparative and Superlative — A2"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома закінченнями залежно від роду й типу основи іменника (-ar, -ir, -Ø, -ur).",
            "en": {
              "text": "The plural is formed with several endings depending on the noun's gender and stem type (-ar, -ir, -Ø, -ur)."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "hundur → hundar",
                "собаки"
              ],
              [
                "bók → bækur",
                "книги"
              ],
              [
                "hús → hús",
                "доми (незмінне)"
              ]
            ],
            "en": {
              "title": "Plural Examples"
            }
          }
        ],
        "titleEn": "Forming the Plural — A2"
      },
      {
        "id": "numbers-gender-agreement",
        "title": "Числівники 1-4 з узгодженням роду — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Як і у фарерській, числівники 1-4 змінюються за родом іменника, який вони супроводжують, і при цьому ще відмінюються за відмінком.",
            "en": {
              "text": "As in Faroese, the numbers 1-4 change form to agree with the gender of the noun they accompany, and they also decline for case."
            }
          },
          {
            "type": "table",
            "title": "einn, ein, eitt",
            "rows": [
              [
                "einn hundur (ч.р.)",
                "один собака"
              ],
              [
                "ein bók (ж.р.)",
                "одна книга"
              ],
              [
                "eitt hús (с.р.)",
                "один дім"
              ]
            ],
            "en": {
              "title": "einn, ein, eitt"
            }
          }
        ],
        "titleEn": "Numbers 1-4 with Gender Agreement — A2"
      },
      {
        "id": "prepositions-accusative",
        "title": "Прийменники зі знахідним — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі прийменники завжди керують знахідним відмінком.",
            "en": {
              "text": "Some prepositions always govern the accusative case."
            }
          },
          {
            "type": "table",
            "title": "um, gegnum",
            "rows": [
              [
                "um húsið",
                "навколо дому"
              ],
              [
                "gegnum skóginn",
                "через ліс"
              ]
            ],
            "en": {
              "title": "um, gegnum"
            }
          }
        ],
        "titleEn": "Prepositions Governing the Accusative — B1"
      },
      {
        "id": "prepositions-dative",
        "title": "Прийменники з давальним — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Інші прийменники завжди керують давальним відмінком.",
            "en": {
              "text": "Other prepositions always govern the dative case."
            }
          },
          {
            "type": "table",
            "title": "frá, hjá",
            "rows": [
              [
                "frá Reykjavík",
                "з Рейк'явіка"
              ],
              [
                "hjá mér",
                "у мене/біля мене"
              ]
            ],
            "en": {
              "title": "frá, hjá"
            }
          }
        ],
        "titleEn": "Prepositions Governing the Dative — B1"
      },
      {
        "id": "prepositions-genitive",
        "title": "Прийменники з родовим — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Невелика, але продуктивна група прийменників керує родовим відмінком — риса, значно менш поширена в сучасній фарерській.",
            "en": {
              "text": "A small but productive group of prepositions governs the genitive case — a trait far less common in modern Faroese."
            }
          },
          {
            "type": "table",
            "title": "til, vegna",
            "rows": [
              [
                "til Íslands",
                "до Ісландії (родовий Íslands)"
              ],
              [
                "vegna veðurs",
                "через погоду (родовий veðurs)"
              ]
            ],
            "en": {
              "title": "til, vegna"
            }
          }
        ],
        "titleEn": "Prepositions Governing the Genitive — B1"
      },
      {
        "id": "prepositions-dual-case",
        "title": "Двовідмінкові прийменники (рух vs стан) — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Як у німецькій, деякі прийменники керують знахідним при русі й давальним при перебуванні на місці.",
            "en": {
              "text": "As in German, some prepositions govern the accusative for motion and the dative for a static location."
            }
          },
          {
            "type": "formula",
            "title": "í + знах. (рух) / í + давн. (стан)",
            "rows": [
              [
                "Ég fer í húsið.",
                "Ég er í húsinu.",
                "Я йду в дім (знах.) / Я в домі (давн.)"
              ]
            ]
          }
        ],
        "titleEn": "Dual-Case Prepositions (Motion vs State) — B1"
      },
      {
        "id": "word-order-v2",
        "title": "Порядок слів V2 — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Відмінюване дієслово завжди стоїть на другій позиції головного речення, навіть якщо перше місце займає не підмет.",
            "en": {
              "text": "The finite verb always stands in second position in the main clause, even when something other than the subject occupies first place."
            }
          },
          {
            "type": "formula",
            "title": "Нейтральний → з обставиною першою",
            "rows": [
              [
                "Ég fer á morgun.",
                "Á morgun fer ég.",
                "Я йду завтра → завтра я йду (дієслово завжди друге)"
              ]
            ]
          }
        ],
        "titleEn": "V2 Word Order — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники узгоджуються з родом іменника, який вони визначають, і відмінюються за всіма чотирма відмінками.",
            "en": {
              "text": "Possessive pronouns agree with the gender of the noun they modify and decline through all four cases."
            }
          },
          {
            "type": "table",
            "title": "minn, mín, mitt",
            "rows": [
              [
                "minn hundur (ч.р.)",
                "мій собака"
              ],
              [
                "mitt hús (с.р.)",
                "мій дім"
              ]
            ],
            "en": {
              "title": "minn, mín, mitt"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "reflexive-possessive-sinn",
        "title": "Sinn vs hans — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sinn\" вживають, коли власник — підмет речення; \"hans/hennar\" — коли власник інша особа. Те саме розрізнення, що й у фарерській sín/hansara, але з власними формами.",
            "en": {
              "text": "\"Sinn\" is used when the owner is the sentence's subject; \"hans/hennar\" when the owner is someone else. The same distinction as Faroese sín/hansara, but with its own forms."
            }
          },
          {
            "type": "formula",
            "title": "sinn vs hans",
            "rows": [
              [
                "Hann tekur bókina sína.",
                "Hann tekur bókina hans.",
                "Він бере свою (власну) книгу → Він бере його (чужу) книгу"
              ]
            ]
          }
        ],
        "titleEn": "sinn vs hans — B1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Þessi\" (цей) вказує на близьке, \"sá\" (той) — на віддалене або вже згадане; обидва відмінюються за родом і відмінком.",
            "en": {
              "text": "\"Þessi\" (this) points to something near, \"sá\" (that) to something distant or already mentioned; both decline for gender and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Þessi hundur er minn.",
                "Цей собака мій."
              ],
              [
                "Sú bók er góð.",
                "Та книга гарна."
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
        "id": "relative-pronoun-sem",
        "title": "Відносний займенник sem — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sem\" — універсальний, незмінюваний відносний займенник \"який/що\", однаковий для всіх родів, чисел і відмінків.",
            "en": {
              "text": "\"Sem\" is the universal, invariable relative pronoun \"who/which/that\", the same for every gender, number, and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maðurinn sem kom er kennari.",
                "Чоловік, що прийшов, — вчитель."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Pronoun sem — A2"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання hver — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Питальний займенник \"hver\" (хто/який) відмінюється за родом, числом і відмінком, як прикметник.",
            "en": {
              "text": "The interrogative pronoun \"hver\" (who/which) declines for gender, number, and case, like an adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hver kom?",
                "Хто прийшов?"
              ],
              [
                "Hvað gerðist?",
                "Що сталося?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension of hver — B1"
      },
      {
        "id": "enclitic-article",
        "title": "Приєднаний означений артикль — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль — не окреме слово, а суфікс, приєднаний до кінця іменника, і відмінюється за родом, числом і відмінком.",
            "en": {
              "text": "The definite article is not a separate word but a suffix attached to the end of the noun, inflecting for gender, number, and case."
            }
          },
          {
            "type": "table",
            "title": "hundur → hundurinn",
            "rows": [
              [
                "hundur (собака) → hundurinn",
                "той собака (ч.р.)"
              ],
              [
                "hús (дім) → húsið",
                "той дім (с.р.)"
              ]
            ],
            "en": {
              "title": "hundur → hundurinn"
            }
          }
        ],
        "titleEn": "The Enclitic Definite Article — A2"
      },
      {
        "id": "double-definiteness",
        "title": "Подвійна означеність — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перед іменником стоїть прикметник, означеність часто виражається двічі: вказівним словом \"hinn\" перед прикметником і суфіксом на іменнику — та сама модель, що й у фарерській.",
            "en": {
              "text": "When an adjective precedes the noun, definiteness is often marked twice: with the demonstrative-like word \"hinn\" before the adjective and the suffix on the noun — the same pattern as Faroese."
            }
          },
          {
            "type": "table",
            "title": "hinn stóri hundurinn",
            "rows": [
              [
                "hinn stóri hundurinn",
                "той великий собака (подвійно означено)"
              ]
            ]
          }
        ],
        "titleEn": "Double Definiteness — B1"
      },
      {
        "id": "adverbs-formation",
        "title": "Утворення прислівників — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу часто утворюються з форми середнього роду прикметника.",
            "en": {
              "text": "Manner adverbs are often formed from the neuter form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "gott → gott (прислівник)",
            "rows": [
              [
                "gott (добрий, с.р.) → gott",
                "добре"
              ],
              [
                "fljótur → fljótt",
                "швидко"
              ]
            ],
            "en": {
              "title": "gott → gott (adverb)"
            }
          }
        ],
        "titleEn": "Forming Adverbs — A2"
      },
      {
        "id": "directional-adverbs",
        "title": "Напрямкові прислівники (рух vs стан) — B1",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "Як у фарерській, прислівники місця мають окремі форми для руху (\"куди\") і перебування (\"де\").",
            "en": {
              "text": "As in Faroese, place adverbs have separate forms for motion (\"to where\") and location (\"where\")."
            }
          },
          {
            "type": "table",
            "title": "þangað / þar",
            "rows": [
              [
                "Ég fer þangað.",
                "Я йду туди. (рух)"
              ],
              [
                "Ég er þar.",
                "Я там. (перебування)"
              ]
            ],
            "en": {
              "title": "þangað / þar"
            }
          }
        ],
        "titleEn": "Directional Adverbs (Motion vs Location) — B1"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від решти скандинавських мов, ісландські назви буднів здебільшого уникають імен давньоскандинавських богів — їх замінили нейтральними церковними назвами через середньовічну заборону.",
            "en": {
              "text": "Unlike the other Scandinavian languages, Icelandic weekday names mostly avoid Old Norse god names — they were replaced with neutral church-based names due to a medieval prohibition."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "mánudagur",
                "понеділок"
              ],
              [
                "miðvikudagur",
                "середа (буквально \"середина тижня\")"
              ],
              [
                "sunnudagur",
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
            "text": "Хоча сучасні місяці запозичені з латини через данську, стародавній ісландський календар мав власні 12 місяців, пов'язаних із сільськогосподарським циклом, деякі з яких досі вживаються поетично.",
            "en": {
              "text": "Though the modern months are borrowed from Latin via Danish, the old Icelandic calendar had its own 12 months tied to the agricultural cycle, some still used poetically today."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "janúar",
                "січень (запозичене)"
              ],
              [
                "Þorri",
                "старовинна назва зимового місяця"
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
            "text": "Час запитують \"Hvað er klukkan?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Hvað er klukkan?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Klukkan er þrjú.",
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
            "text": "Кольори — звичайні прикметники й узгоджуються з іменником у роді, як і всі інші.",
            "en": {
              "text": "Colors are ordinary adjectives and agree with the noun in gender, like any other."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "hvítur",
                "білий"
              ],
              [
                "svartur",
                "чорний"
              ],
              [
                "rauður",
                "червоний"
              ],
              [
                "blár",
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
            "text": "Родинні терміни відмінюються за родом, як звичайні іменники, з властивим ісландським закінченнями.",
            "en": {
              "text": "Kinship terms decline by gender like ordinary nouns, with typical Icelandic endings."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "mamma",
                "мама"
              ],
              [
                "pabbi",
                "тато"
              ],
              [
                "systir",
                "сестра"
              ],
              [
                "bróðir",
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
        "id": "greetings",
        "title": "Привітання — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "\"Hæ\" (від англ. \"hi\") — розмовне привітання; \"Góðan dag\" (добрий день) — офіційніше.",
            "en": {
              "text": "\"Hæ\" (from English \"hi\") is a colloquial greeting; \"Góðan dag\" (good day) is more formal."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Hæ!",
                "Привіт!"
              ],
              [
                "Bless!",
                "Прощавай!"
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
            "text": "Погоду часто описують безособовими конструкціями з \"það\" (воно).",
            "en": {
              "text": "Weather is often described with impersonal constructions using \"það\" (it)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Það er að rigna.",
                "Йде дощ."
              ],
              [
                "Það er kalt úti.",
                "Надворі холодно."
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
              "text": "Body parts are ordinary nouns with inherent gender."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "höndin (ж.р.)",
                "рука"
              ],
              [
                "höfuðið (с.р.)",
                "голова"
              ],
              [
                "fóturinn (ч.р.)",
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
            "text": "Вік виражають дієсловом \"vera\" + число + \"ára\" (років, родовий множини).",
            "en": {
              "text": "Age is expressed with the verb \"vera\" + number + \"ára\" (years, genitive plural)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ég er tuttugu ára.",
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
        "id": "linguistic-purism",
        "title": "Мовний пуризм і неологізми — B2",
        "emoji": "🛡️",
        "sections": [
          {
            "type": "intro",
            "text": "Найзнаменитіша риса ісландської мовної політики: замість запозичувати іноземні слова, для нових понять свідомо створюють слова з питомих коренів — \"tölva\" (комп'ютер) поєднує \"tala\" (число) і \"völva\" (пророчиця).",
            "en": {
              "text": "Icelandic's most famous linguistic-policy trait: instead of borrowing foreign words, new concepts get deliberately coined words from native roots — \"tölva\" (computer) combines \"tala\" (number) and \"völva\" (prophetess)."
            }
          },
          {
            "type": "table",
            "title": "Приклади неологізмів",
            "rows": [
              [
                "tölva",
                "комп'ютер (число + пророчиця)"
              ],
              [
                "sími",
                "телефон (від давнього слова \"нитка\")"
              ]
            ],
            "en": {
              "title": "Neologism Examples"
            }
          }
        ],
        "titleEn": "Linguistic Purism and Neologisms — B2"
      },
      {
        "id": "patronymic-legal-default",
        "title": "Патроніми як юридична норма — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від Фарер, де патроніми — лише один з варіантів, в Ісландії патронім (-son/-dóttir) — юридичний стандарт для більшості громадян: сімейних прізвищ як таких у західному сенсі майже немає, і телефонні довідники впорядковані за іменем, а не прізвищем.",
            "en": {
              "text": "Unlike the Faroe Islands, where patronymics are just one option, in Iceland the patronymic (-son/-dóttir) is the legal default for most citizens: family surnames in the Western sense barely exist, and phone directories are sorted by first name, not surname."
            }
          },
          {
            "type": "table",
            "title": "-son / -dóttir",
            "rows": [
              [
                "Jón Einarsson",
                "Йон, син Ейнара"
              ],
              [
                "Anna Einarsdóttir",
                "Анна, дочка Ейнара"
              ]
            ],
            "en": {
              "title": "-son / -dóttir"
            }
          }
        ],
        "titleEn": "Patronymics as the Legal Default — B2"
      },
      {
        "id": "saga-readability",
        "title": "Читабельність саг без перекладу — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Завдяки мовному консерватизму сучасні ісландці можуть читати середньовічні саги XIII ст. в оригіналі з незначними труднощами — ступінь стабільності мови, безпрецедентний серед живих європейських мов.",
            "en": {
              "text": "Thanks to its linguistic conservatism, modern Icelanders can read 13th-century medieval sagas in the original with only minor difficulty — a degree of language stability unmatched among living European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Njáls saga (XIII ст.) читається сучасними школярами практично без словника.",
                "рідкість — 800 років без розриву зрозумілості"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reading the Sagas without Translation — B2"
      },
      {
        "id": "diminutives",
        "title": "Демінутиви — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі форми утворюються суфіксом -lingur, часто у звертанні до дітей чи тварин.",
            "en": {
              "text": "Diminutive forms are made with the suffix -lingur, often used addressing children or animals."
            }
          },
          {
            "type": "table",
            "title": "hundur → hundlingur",
            "rows": [
              [
                "hundur (собака) → hvolpur",
                "щеня (окреме слово, не суфіксальний демінутив)"
              ]
            ]
          }
        ],
        "titleEn": "Diminutives — B1"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Історична ввічлива форма \"þér\" вийшла з ужитку в XX ст.: сьогодні звертаються на \"þú\" навіть до незнайомих і старших — подібно до сучасної данської.",
            "en": {
              "text": "The historical polite form \"þér\" fell out of use in the 20th century: today \"þú\" is used even with strangers and elders — similar to modern Danish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hvernig hefur þú það?",
                "Як справи? (до будь-кого)"
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
        "id": "exclamations",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію незалежно від граматичної структури.",
            "en": {
              "text": "Interjections express emotional reactions independent of grammatical structure."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Vá!",
                "Ой!/Овва!"
              ],
              [
                "Takk fyrir!",
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
        "id": "loanword-respelling",
        "title": "Переписування небагатьох запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Ті нечисленні запозичення, які все ж проникають у мову (переважно розмовні), фонетично переписуються під ісландську орфографію та відмінкову систему, замінюючи власну вимову оригіналу.",
            "en": {
              "text": "The few loanwords that do enter the language (mostly colloquial) are phonetically respelled to fit Icelandic orthography and the case system, replacing the original's own pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "bíll (від automobile, скорочено)",
                "авто"
              ],
              [
                "dískó",
                "диско"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Respelling the Few Loanwords — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Ісландські ідіоми часто спираються на море, вулкани й овець — центральні елементи традиційного життя острова.",
            "en": {
              "text": "Icelandic idioms often draw on the sea, volcanoes, and sheep — central elements of traditional island life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Það er ekkert að marka þetta.",
                "На це не варто зважати."
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
        "id": "numbers-five-plus",
        "title": "Числівники від 5 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники від п'яти незмінні за родом, на відміну від 1-4.",
            "en": {
              "text": "Numbers from five on are invariable for gender, unlike 1-4."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "fimm",
                "п'ять"
              ],
              [
                "tíu",
                "десять"
              ],
              [
                "tuttugu",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Numbers from Five On — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Порядкові числівники — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються за родом і відмінком, як прикметники, з кількома неправильними формами на початку ряду.",
            "en": {
              "text": "Ordinal numbers agree by gender and case like adjectives, with a few irregular forms at the start of the sequence."
            }
          },
          {
            "type": "table",
            "title": "fyrsti, annar, þriðji",
            "rows": [
              [
                "fyrsti",
                "перший"
              ],
              [
                "annar",
                "другий"
              ],
              [
                "þriðji",
                "третій"
              ]
            ],
            "en": {
              "title": "fyrsti, annar, þriðji"
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
            "text": "\"Einhver\" (хтось/якийсь) і \"eitthvað\" (щось) — базові неозначені займенники, що відмінюються за родом і відмінком.",
            "en": {
              "text": "\"Einhver\" (someone/some) and \"eitthvað\" (something) are the basic indefinite pronouns, declined by gender and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Einhver hringdi.",
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
        "title": "Заперечні займенники — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Engi\" (ніхто/жоден) — заперечний займенник, який замінює \"einhver\" у заперечному контексті й узгоджується за родом і відмінком.",
            "en": {
              "text": "\"Engi\" (no one/none) is a negative pronoun that replaces \"einhver\" in negative contexts and agrees by gender and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Engi kom.",
                "Ніхто не прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Pronouns — B1"
      },
      {
        "id": "tag-questions",
        "title": "Розділові питання — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання утворюється фразою \"er það ekki?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"er það ekki?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fallegt í dag, er það ekki?",
                "Гарно сьогодні, чи не так?"
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
        "id": "subordinate-clause-order",
        "title": "Порядок слів у підрядному реченні — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні заперечення \"ekki\" зазвичай переміщується перед дієсловом, на відміну від головного речення.",
            "en": {
              "text": "In a subordinate clause, the negation \"ekki\" usually moves in front of the verb, unlike in the main clause."
            }
          },
          {
            "type": "formula",
            "title": "Головне → підрядне",
            "rows": [
              [
                "Hann kemur ekki.",
                "...að hann ekki komi.",
                "Він не прийде → ...що він не прийде"
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Subordinate Clauses — B1"
      },
      {
        "id": "compound-words",
        "title": "Продуктивне складання слів — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два чи більше корені без сполучного голосного; продуктивність складання тісно пов'язана з мовним пуризмом — нові поняття часто отримують складене, а не запозичене слово.",
            "en": {
              "text": "Compound words join two or more roots with no linking vowel; productive compounding is closely tied to linguistic purism — new concepts often get a compound rather than a borrowed word."
            }
          },
          {
            "type": "table",
            "title": "sól + skin",
            "rows": [
              [
                "sól (сонце) + skin (сяйво) = sólskin",
                "сонячне світло"
              ]
            ],
            "en": {
              "title": "sól + skin"
            }
          }
        ],
        "titleEn": "Productive Compounding — A2"
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
        "id": "irregular-strong-verbs",
        "title": "Неправильні сильні дієслова — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (vera, fara, koma, segja) мають настільки нерегулярний аблаут або приголосні зміни, що їх варто вивчати окремо, а не за загальними класами.",
            "en": {
              "text": "A few common verbs (vera, fara, koma, segja) have ablaut or consonant changes so irregular that they must be learned individually rather than by the general classes."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "fara (їхати) → fór",
                "минулий час не за жодним стандартним аблаутним рядом"
              ],
              [
                "segja (казати) → sagði",
                "приголосний змінюється нерегулярно"
              ]
            ],
            "en": {
              "title": "Irregular Forms"
            }
          }
        ],
        "titleEn": "Irregular Strong Verbs — B2"
      },
      {
        "id": "irregular-plural-nouns",
        "title": "Неправильна множина іменників — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі часто вживані іменники утворюють множину зі зміною кореневого голосного (умлаут) замість простого додавання закінчення.",
            "en": {
              "text": "Some common nouns form the plural with a root vowel change (umlaut) instead of simply adding an ending."
            }
          },
          {
            "type": "table",
            "title": "bók → bækur",
            "rows": [
              [
                "bók (книга) → bækur",
                "книги (умлаут ó→æ)"
              ],
              [
                "fótur (нога) → fætur",
                "ноги (умлаут ó→æ)"
              ]
            ],
            "en": {
              "title": "bók → bækur"
            }
          }
        ],
        "titleEn": "Irregular Plural Nouns — B1"
      },
      {
        "id": "fixed-genitive-idioms",
        "title": "Застиглі вирази з родовим відмінком — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча родовий відмінок живий, деякі застиглі вирази зберігають архаїчну форму родового, що не підкоряється сучасним продуктивним закінченням.",
            "en": {
              "text": "Although the genitive is alive, some fixed expressions preserve an archaic genitive form that doesn't follow the modern productive endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Til dæmis (\"наприклад\", буквально \"до приклад-у\").",
                "застигла форма, закріплена в ідіомі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Genitive-Case Idioms — B2"
      }
    ]
  }
];
