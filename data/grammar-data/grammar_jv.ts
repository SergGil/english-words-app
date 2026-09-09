// Vymova — data/grammar-data/grammar_jv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_JV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Tembung Sesulih — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У яванській є складна система мовних регістрів (нгоко — розмовний, крама — ввічливий); тут наведено розмовні (нгоко) форми.",
            "en": {
              "text": "Javanese has a complex system of speech registers (ngoko — informal, krama — polite); the informal ngoko forms are shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (нгоко)",
            "rows": [
              [
                "я",
                "aku"
              ],
              [
                "ти",
                "kowé"
              ],
              [
                "він / вона",
                "dhèwèké"
              ],
              [
                "ми",
                "kita"
              ],
              [
                "ви",
                "kowé kabèh"
              ],
              [
                "вони",
                "dhèwèké kabèh"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (ngoko register)"
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
            "text": "У яванській немає окремого дієслова \"бути\": іменне речення будується простим зіставленням підмета й присудка; для чіткого ототожнення вживають слово \"yaiku\" (тобто/а саме).",
            "en": {
              "text": "Javanese has no separate verb \"to be\": a nominal sentence is built by simple juxtaposition of subject and predicate; for explicit identity the word \"yaiku\" (that is/namely) is used."
            }
          },
          {
            "type": "table",
            "title": "Іменне речення",
            "rows": [
              [
                "Aku guru.",
                "Я вчитель. (без \"є\")"
              ],
              [
                "Jenengku yaiku Budi.",
                "Мене звати Буді. (yaiku для ототожнення)"
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
                "Dhèwèké wong Jawa.",
                "Він/вона яванець/яванка."
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
        "title": "Заперечення з ora — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється словом \"ora\" (не) перед дієсловом чи прикметником-присудком.",
            "en": {
              "text": "Negation is formed with the word \"ora\" (not) before the verb or the adjective-predicate."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Aku ngerti.",
                "Aku ora ngerti.",
                "Я розумію → я не розумію"
              ],
              [
                "Dhèwèké guru.",
                "Dhèwèké dudu guru.",
                "Він вчитель → він не вчитель (dudu для іменних речень)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku ora kesel.",
                "Я не втомлений."
              ],
              [
                "Dhèwèké ora iso basa Jawa.",
                "Він/вона не розмовляє яванською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ora — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються лише інтонацією або часткою \"apa\" на початку; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are marked only by intonation, or the particle \"apa\" at the start; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "sapa",
                "хто"
              ],
              [
                "apa",
                "що"
              ],
              [
                "ngendi",
                "де"
              ],
              [
                "kapan",
                "коли"
              ],
              [
                "kenapa",
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
                "Apa kowé wong Jawa?",
                "Ти яванець?"
              ],
              [
                "Kowé manggon ngendi?",
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
        "id": "ngoko-krama-doubling",
        "title": "Подвійна лексика нгоко/крама — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса яванської: тисячі найпоширеніших слів (їсти, іти, говорити, навіть \"я\"/\"ти\") мають повністю різні корені в розмовному нгоко й ввічливому крама — це не стилістичні варіанти одного слова, а окремі слова з тим самим значенням.",
            "en": {
              "text": "Javanese's most defining trait: thousands of the most common words (eat, go, speak, even \"I\"/\"you\") have completely different roots in informal ngoko versus polite krama — these are not stylistic variants of one word, but separate words with the same meaning."
            }
          },
          {
            "type": "table",
            "title": "Нгоко vs крама",
            "rows": [
              [
                "mangan (нгоко)",
                "dhahar (крама) — обидва означають \"їсти\""
              ],
              [
                "lunga (нгоко)",
                "kesah (крама) — обидва означають \"іти\""
              ]
            ],
            "en": {
              "title": "Ngoko vs Krama"
            }
          }
        ],
        "titleEn": "The Ngoko/Krama Vocabulary Doubling — A2"
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
        "id": "completive-wis",
        "title": "Завершеність (wis) — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Замість зміни форми дієслова, завершеність дії позначає слово \"wis\" (вже) перед дієсловом — час у яванській взагалі не змінює саме дієслово.",
            "en": {
              "text": "Instead of changing the verb's form, completion is marked by the word \"wis\" (already) before the verb — tense in Javanese never changes the verb itself at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku wis mangan.",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completive Aspect (wis) — A1"
      },
      {
        "id": "continuous-lagi",
        "title": "Тривалий вид (lagi) — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"lagi\" (саме зараз) перед дієсловом позначає дію, що триває.",
            "en": {
              "text": "The word \"lagi\" (right now) before the verb marks an ongoing action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku lagi mangan.",
                "Я зараз їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Continuous Aspect (lagi) — A1"
      },
      {
        "id": "future-arep",
        "title": "Намір/майбутнє (arep) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"arep\" (збиратися) перед дієсловом виражає намір або близьке майбутнє.",
            "en": {
              "text": "The word \"arep\" (going to) before the verb expresses intention or the near future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku arep turu.",
                "Я збираюся спати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Intention/Future (arep) — A2"
      },
      {
        "id": "active-voice-n-prefix",
        "title": "Активний стан (носовий префікс N-) — B1",
        "emoji": "🅰️",
        "sections": [
          {
            "type": "intro",
            "text": "Активний, дієво-орієнтований стан утворюється носовим префіксом (m-/n-/ng-/ny- залежно від першого звука кореня) — той самий префікс асимілюється до різних форм.",
            "en": {
              "text": "The active, agent-focused voice is formed with a nasal prefix (m-/n-/ng-/ny- depending on the root's first sound) — the same prefix assimilates into different forms."
            }
          },
          {
            "type": "table",
            "title": "tulis → nulis",
            "rows": [
              [
                "tulis (писати) → nulis",
                "писати (активно)"
              ],
              [
                "pangan → mangan",
                "їсти (активно, p→m)"
              ]
            ],
            "en": {
              "title": "tulis → nulis"
            }
          }
        ],
        "titleEn": "Active Voice (Nasal Prefix N-) — B1"
      },
      {
        "id": "passive-voice-di",
        "title": "Пасивний стан (di-) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний, орієнтований на об'єкт стан утворюється префіксом \"di-\", протилежним до активного N-.",
            "en": {
              "text": "The passive, patient-focused voice is formed with the prefix \"di-\", the opposite of the active N-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Buku iki ditulis déning Budi.",
                "Ця книга написана Буді."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Passive Voice (di-) — B1"
      },
      {
        "id": "actor-marked-passive-tak-kok",
        "title": "Пасив з маркуванням діяча (tak-/kok-) — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса: коли діячем є 1 чи 2 особа, замість \"di-\" вживають префікси \"tak-\" (я) чи \"kok-\" (ти) прямо на дієслові — своєрідний \"особовий пасив\".",
            "en": {
              "text": "A unique feature: when the actor is 1st or 2nd person, instead of \"di-\" the prefixes \"tak-\" (by me) or \"kok-\" (by you) are used directly on the verb — a kind of \"personal passive\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Buku iki taktulis.",
                "Цю книгу написав я. (tak- = мною)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Actor-Marked Passive (tak-/kok-) — B2"
      },
      {
        "id": "applicative-suffix-i",
        "title": "Аплікативний суфікс -i — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -i додає локативний або повторюваний відтінок дії — дія спрямована на конкретне місце чи об'єкт неодноразово.",
            "en": {
              "text": "The suffix -i adds a locative or repeated nuance to the action — the action is directed at a specific place or object repeatedly."
            }
          },
          {
            "type": "table",
            "title": "tuku → tukoni",
            "rows": [
              [
                "tuku (купувати) → tukoni",
                "купувати для (когось)/скуповувати"
              ]
            ]
          }
        ],
        "titleEn": "The Applicative Suffix -i — B1"
      },
      {
        "id": "causative-suffix-ake",
        "title": "Каузативний суфікс -ake — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ake утворює каузативне чи бенефактивне значення — \"зробити так, щоб X сталося\" або \"зробити щось для когось\".",
            "en": {
              "text": "The suffix -ake forms a causative or benefactive meaning — \"to make X happen\" or \"to do something for someone\"."
            }
          },
          {
            "type": "table",
            "title": "tuku → tukokake",
            "rows": [
              [
                "tuku (купувати) → tukokake",
                "купити для (когось)"
              ]
            ]
          }
        ],
        "titleEn": "The Causative Suffix -ake — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ утворюється голим коренем дієслова; для ввічливого наказу додається суфікс -a.",
            "en": {
              "text": "The imperative is formed with the bare verb root; a polite command adds the suffix -a."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Mangan!",
                "Їж!"
              ],
              [
                "Mangana!",
                "Їж, будь ласка! (ввічливо)"
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
        "id": "potential-bisa",
        "title": "Потенційна конструкція (bisa) — A2",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Спроможність виражають словом \"bisa\" (могти) перед дієсловом, а не особовим модальним закінченням.",
            "en": {
              "text": "Ability is expressed with the word \"bisa\" (can) before the verb, not a personal modal ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku bisa basa Jawa.",
                "Я вмію яванську."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Potential Construction (bisa) — A2"
      },
      {
        "id": "desiderative-pengin",
        "title": "Бажальна конструкція (péngin) — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражають словом \"péngin\" (хотіти) перед дієсловом.",
            "en": {
              "text": "A wish is expressed with the word \"péngin\" (to want) before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku péngin turu.",
                "Я хочу спати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Desiderative Construction (péngin) — A2"
      },
      {
        "id": "reduplication-continuous",
        "title": "Редуплікація для тривалості (dwilingga) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення кореня дієслова (dwilingga) виражає тривалу, безцільну чи повторювану дію.",
            "en": {
              "text": "Reduplicating the verb root (dwilingga) expresses a prolonged, aimless, or repeated action."
            }
          },
          {
            "type": "table",
            "title": "mlaku → mlaku-mlaku",
            "rows": [
              [
                "mlaku (ходити) → mlaku-mlaku",
                "прогулюватися без мети"
              ]
            ]
          }
        ],
        "titleEn": "Reduplication for Duration (dwilingga) — B1"
      },
      {
        "id": "future-negative-durung",
        "title": "\"Ще не\" (durung) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "\"Durung\" (ще не) — окреме слово від \"ora\" (звичайне заперечення), що вказує, що дія очікується, але поки не відбулася.",
            "en": {
              "text": "\"Durung\" (not yet) is a separate word from \"ora\" (ordinary negation), indicating an action is expected but hasn't happened yet."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku durung mangan.",
                "Я ще не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "\"Not Yet\" (durung) — A2"
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
        "id": "possessive-suffix-e",
        "title": "Присвійний суфікс -é — A2",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс \"-é/-né\" (від займенника \"він/вона\"), доданий до іменника, самостійно позначає означеність або присвійність третьої особи без окремого слова.",
            "en": {
              "text": "The suffix \"-é/-né\" (from the pronoun \"he/she\"), added to a noun, marks definiteness or third-person possession on its own, with no separate word."
            }
          },
          {
            "type": "table",
            "title": "omah → omahé",
            "rows": [
              [
                "omah (дім) → omahé",
                "той дім / його дім (залежно від контексту)"
              ]
            ],
            "en": {
              "title": "omah → omahé"
            }
          }
        ],
        "titleEn": "The Possessive/Definite Suffix -é — A2"
      },
      {
        "id": "krama-inggil",
        "title": "Крама інггіл — високоповажний словник — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Третій шар лексики, крама інггіл, вживають виключно для дій і речей, що стосуються особи, яку поважають (не себе) — окремі слова для \"їсти\", \"говорити\", \"дім\" тощо, коли йдеться про співрозмовника вищого статусу.",
            "en": {
              "text": "A third vocabulary layer, krama inggil, is used exclusively for actions and things belonging to a respected person (not oneself) — separate words for \"eat\", \"speak\", \"house\" and more, when referring to a higher-status listener."
            }
          },
          {
            "type": "table",
            "title": "Три шари для \"їсти\"",
            "rows": [
              [
                "mangan (нгоко)",
                "їсти (звичайно, про себе/рівних)"
              ],
              [
                "dhahar (крама інггіл)",
                "їсти (шанобливо, про поважану особу)"
              ]
            ],
            "en": {
              "title": "Three Layers for \"to Eat\""
            }
          }
        ],
        "titleEn": "Krama Inggil — the Honorific Vocabulary — B2"
      },
      {
        "id": "krama-andhap",
        "title": "Крама андхап — смиренний словник — B2",
        "emoji": "🙇",
        "sections": [
          {
            "type": "intro",
            "text": "Четвертий шар, крама андхап, вживають для власних дій мовця стосовно поважної особи — принижуючи себе, а не підносячи співрозмовника, як крама інггіл.",
            "en": {
              "text": "A fourth layer, krama andhap, is used for the speaker's own actions directed at a respected person — humbling oneself, rather than elevating the listener as krama inggil does."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "matur (крама андхап \"говорити\", коли я говорю до поважної особи)",
                "смиренна форма, відмінна від dhahar-типу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Krama Andhap — the Humble Vocabulary — B2"
      },
      {
        "id": "register-mixing-rules",
        "title": "Правила змішування регістрів (bebasan) — C1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Досвідчені мовці свідомо змішують нгоко-граматику з крама-словами (\"basa bebasan\") у певних соціальних ситуаціях — це не помилка, а окремий, третій зареєстрований стиль спілкування.",
            "en": {
              "text": "Skilled speakers deliberately mix ngoko grammar with krama words (\"basa bebasan\") in certain social situations — this is not an error but a recognized third register style."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Використання bebasan сигналізує проміжний рівень фамільярності й поваги.",
                "тонке соціальне налаштування, якого немає в більшості мов світу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Register-Mixing Rules (bebasan) — C1"
      },
      {
        "id": "possession-duwe-juxtaposition",
        "title": "Присвійність (duwe/зіставлення) — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражають або дієсловом \"duwe\" (мати), або простим зіставленням двох іменників (означуваний + власник) без окремого слова-зв'язки.",
            "en": {
              "text": "Possession is expressed either with the verb \"duwe\" (to have), or by simple juxtaposition of two nouns (possessed + possessor) with no linking word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku duwe buku.",
                "У мене є книга."
              ],
              [
                "bukuné Budi",
                "книга Буді (зіставлення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession (duwe/Juxtaposition) — A2"
      },
      {
        "id": "numbers-classifiers",
        "title": "Числівники з класифікаторами — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Рахуючи людей чи предмети, часто додають класифікатор між числом та іменником, подібно до інших австронезійських мов.",
            "en": {
              "text": "When counting people or objects, a classifier is often added between the number and the noun, similar to other Austronesian languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад класифікатора",
            "rows": [
              [
                "telu wong",
                "троє людей (wong = класифікатор для людей)"
              ]
            ]
          }
        ],
        "titleEn": "Numbers with Classifiers — B1"
      },
      {
        "id": "reduplication-plurality",
        "title": "Редуплікація для множинності — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення іменника позначає множину чи різноманітність, окремо від видового значення редуплікації дієслова.",
            "en": {
              "text": "Reduplicating a noun marks plurality or diversity, distinct from the aspectual meaning of verb reduplication."
            }
          },
          {
            "type": "table",
            "title": "buku → buku-buku",
            "rows": [
              [
                "buku (книга) → buku-buku",
                "книги (різні)"
              ]
            ]
          }
        ],
        "titleEn": "Reduplication for Plurality — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Iki\" (це) вказує на близьке, \"kuwi/kaé\" (те) — на віддалене.",
            "en": {
              "text": "\"Iki\" (this) points to something near, \"kuwi/kaé\" (that) to something distant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Buku iki duwèkku.",
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
        "id": "relative-clause-sing",
        "title": "Відносна частка sing — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sing\" — універсальний відносний займенник \"який/що\", незмінний за родом і числом.",
            "en": {
              "text": "\"Sing\" is the universal relative pronoun \"who/which/that\", invariant for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wong sing teka kuwi kancaku.",
                "Людина, що прийшла, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Particle sing — A2"
      },
      {
        "id": "comparative-construction",
        "title": "Порівняльна конструкція (luwih) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають словом \"luwih\" (більше) перед прикметником і \"tinimbang\" (ніж) перед об'єктом порівняння.",
            "en": {
              "text": "Comparison is expressed with \"luwih\" (more) before the adjective and \"tinimbang\" (than) before the comparison object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dhèwèké luwih dhuwur tinimbang aku.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (luwih) — A2"
      },
      {
        "id": "adjectives-as-predicates",
        "title": "Прикметник як присудок — A2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник функціонує як присудок речення без жодного дієслова \"бути\" — сам прикметник несе граматичну роль присудка.",
            "en": {
              "text": "The adjective functions as the sentence predicate with no verb \"to be\" at all — the adjective itself carries the grammatical role of the predicate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Omahé gedhé.",
                "Його дім великий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Adjective as Predicate — A2"
      },
      {
        "id": "flexible-word-order",
        "title": "Гнучкий порядок слів через стан — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Через систему активного/пасивного стану порядок слів гнучкіший, ніж у мовах із фіксованим SVO: обраний стан визначає, який учасник дії стає граматичним підметом.",
            "en": {
              "text": "Because of the active/passive voice system, word order is more flexible than in fixed-SVO languages: the chosen voice determines which participant becomes the grammatical subject."
            }
          },
          {
            "type": "formula",
            "title": "Активний → пасивний",
            "rows": [
              [
                "Aku nulis layang.",
                "Layang ditulis aku.",
                "Я пишу листа (актив) → Лист пишеться мною (пасив)"
              ]
            ]
          }
        ],
        "titleEn": "Flexible Word Order via Voice — B1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sapa\" (хто) вживається для людей, \"apa\" (що) — для предметів.",
            "en": {
              "text": "\"Sapa\" (who) is used for people, \"apa\" (what) for things."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sapa jenengmu?",
                "Як тебе звати? (буквально \"хто твоє ім'я\")"
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
            "text": "Основні сполучники з'єднують слова й речення без зміни порядку слів.",
            "en": {
              "text": "Basic conjunctions link words and sentences without changing word order."
            }
          },
          {
            "type": "table",
            "title": "lan / nanging / merga",
            "rows": [
              [
                "lan",
                "і"
              ],
              [
                "nanging",
                "але"
              ],
              [
                "merga",
                "тому що"
              ]
            ],
            "en": {
              "title": "lan / nanging / merga"
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
            "text": "Основний прийменник \"ing\" (в/на/при) поєднує в собі кілька просторових значень.",
            "en": {
              "text": "The core preposition \"ing\" (in/at) combines several spatial meanings at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku ana ing omah.",
                "Я вдома."
              ]
            ],
            "en": {
              "title": "Examples"
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
            "text": "Складні слова поєднують два корені, часто описуючи предмет через функцію чи образ.",
            "en": {
              "text": "Compound words join two roots, often describing an object through function or imagery."
            }
          },
          {
            "type": "table",
            "title": "sikil + tangan",
            "rows": [
              [
                "sikil (нога) + tangan (рука) = sikil tangan",
                "кінцівки (загальна назва)"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "hanacaraka-script",
        "title": "Писемність ханачарака — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційне яванське письмо (ханачарака/чаракан) — складова абугіда, успадкована з брахмійських писемностей Індії; сьогодні переважно замінена латинкою, але вживається в культурних і церемоніальних контекстах.",
            "en": {
              "text": "The traditional Javanese script (hanacaraka/carakan) is a syllabic abugida inherited from the Brahmic scripts of India; today it's mostly replaced by the Latin alphabet, but still used in cultural and ceremonial contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ꦲꦤꦕꦫꦏ — перші п'ять символів, що дали назву писемності.",
                "кожен символ традиційно вважається частиною легендарного вірша"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Hanacaraka Script — B2"
      },
      {
        "id": "kawi-literary-layer",
        "title": "Кави — давньояванський літературний шар — C1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Кави (давньояванська, під сильним санскритським впливом) — мова класичної поезії й вистав ваянг, яку сучасні носії частково розуміють, але не використовують у повсякденному мовленні — подібно до церковнослов'янської в українській традиції.",
            "en": {
              "text": "Kawi (Old Javanese, heavily Sanskrit-influenced) is the language of classical poetry and wayang shadow-puppet plays, partly understood by modern speakers but not used in everyday speech — similar to how Church Slavonic relates to Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Далянги (лялькарі ваянг) досі декламують текст кави під час вистав.",
                "живий літературний реєстр, паралельний до повсякденної мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kawi — the Old Javanese Literary Layer — C1"
      },
      {
        "id": "sanskrit-loanword-layer",
        "title": "Санскритський шар запозичень — B1",
        "emoji": "🕉️",
        "sections": [
          {
            "type": "intro",
            "text": "Через давній індуїстсько-буддійський вплив яванська зберігає численні санскритські запозичення, особливо в абстрактній, релігійній і придворній лексиці.",
            "en": {
              "text": "Due to ancient Hindu-Buddhist influence, Javanese retains numerous Sanskrit loanwords, especially in abstract, religious, and courtly vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "basa (від bhāṣā)",
                "мова"
              ],
              [
                "raja",
                "король"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The Sanskrit Loanword Layer — B1"
      },
      {
        "id": "arabic-loanword-layer",
        "title": "Арабський шар запозичень — B1",
        "emoji": "☪️",
        "sections": [
          {
            "type": "intro",
            "text": "Поряд із санскритським шаром, іслам приніс шар арабських запозичень, особливо в релігійній лексиці.",
            "en": {
              "text": "Alongside the Sanskrit layer, Islam brought a layer of Arabic loanwords, especially in religious vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "salat (від salāh)",
                "молитва"
              ],
              [
                "kitab",
                "книга (священна)"
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
        "id": "vocative-address-particle",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання часто просто ставить ім'я чи титул на початку речення, без окремої частки.",
            "en": {
              "text": "Direct address often simply places the name or title at the start of the sentence, with no separate particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Budi, mrénéa!",
                "Буді, йди сюди!"
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
        "id": "diminutive-forms",
        "title": "Пестливі форми — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі форми часто утворюються редуплікацією зменшеної форми імені чи слова.",
            "en": {
              "text": "Affectionate forms are often made by reduplicating a shortened form of the name or word."
            }
          },
          {
            "type": "table",
            "title": "Budi → Di-Di",
            "rows": [
              [
                "Budi → Di-Di",
                "ласкаве скорочення імені"
              ]
            ]
          }
        ],
        "titleEn": "Affectionate Forms — B1"
      },
      {
        "id": "plural-often-unmarked",
        "title": "Множина часто без позначення — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник зазвичай не змінюється у множині взагалі; число видно лише з контексту чи числівника, редуплікація — лише один із опційних способів.",
            "en": {
              "text": "The noun usually doesn't change for plural at all; number is conveyed only by context or a numeral, with reduplication as just one optional way."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku duwe buku.",
                "У мене є книга/книги. (без контексту неоднозначно)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Often Left Unmarked — A2"
      },
      {
        "id": "time-expressions-structure",
        "title": "Структура виразів часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Часові вирази зазвичай стоять на початку чи в кінці речення, а не поряд із дієсловом, оскільки саме дієслово не несе часового значення.",
            "en": {
              "text": "Time expressions usually stand at the start or end of the sentence, not next to the verb, since the verb itself carries no tense meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sésuk aku arep lunga.",
                "Завтра я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Structure of Time Expressions — A2"
      },
      {
        "id": "directional-particles",
        "title": "Напрямкові частки — B1",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "Слова \"mréné\" (сюди) і \"mrana\" (туди) розрізняють рух до й від мовця, подібно до інших австронезійських мов.",
            "en": {
              "text": "The words \"mréné\" (hither) and \"mrana\" (thither) distinguish motion towards and away from the speaker, similar to other Austronesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mréné-a!",
                "Йди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Particles — B1"
      },
      {
        "id": "politeness-particle-nggih",
        "title": "Частка ввічливості (nggih/inggih) — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"nggih\" (крама) чи \"iya\" (нгоко) додається в кінці речення для пом'якшення тону й підкреслення ввічливості, окремо від вибору лексичного регістру.",
            "en": {
              "text": "The particle \"nggih\" (krama) or \"iya\" (ngoko) is added at the end of a sentence to soften the tone and emphasize politeness, separate from the choice of lexical register."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Monggo mlebet, nggih.",
                "Будь ласка, заходьте."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Politeness Particle (nggih/inggih) — A2"
      },
      {
        "id": "five-day-market-week-pasaran",
        "title": "П'ятиденний ринковий тиждень (pasaran) — B1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Паралельно до звичайного семиденного тижня яванці досі активно використовують традиційний п'ятиденний цикл \"пасаран\" — кожен день має власне ім'я й астрологічне значення, а поєднання двох тижнів утворює 35-денний цикл selapan.",
            "en": {
              "text": "Alongside the ordinary seven-day week, Javanese still actively uses the traditional five-day \"pasaran\" cycle — each day has its own name and astrological meaning, and the combination of both weeks forms a 35-day selapan cycle."
            }
          },
          {
            "type": "table",
            "title": "П'ять днів пасаран",
            "rows": [
              [
                "Legi",
                "перший день"
              ],
              [
                "Pahing",
                "другий"
              ],
              [
                "Pon",
                "третій"
              ],
              [
                "Wage",
                "четвертий"
              ],
              [
                "Kliwon",
                "п'ятий"
              ]
            ],
            "en": {
              "title": "The Five Pasaran Days"
            }
          }
        ],
        "titleEn": "The Five-Day Market Week (pasaran) — B1"
      },
      {
        "id": "months",
        "title": "Місяці — A1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Поряд із міжнародним календарем, яванський календар (гібрид ісламського й доісламського) має власні назви місяців, вживані для традиційних свят.",
            "en": {
              "text": "Alongside the international calendar, the Javanese calendar (a hybrid of Islamic and pre-Islamic systems) has its own month names, used for traditional festivals."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Januari",
                "січень (запозичене)"
              ],
              [
                "Sura",
                "перший місяць яванського календаря"
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
            "text": "Час запитують \"Jam pira?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"Jam pira?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jam telu.",
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
            "text": "Кольори функціонують як стативні присудки, як і будь-яка інша якісна ознака.",
            "en": {
              "text": "Colors function as stative predicates, like any other qualitative property."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "putih",
                "білий"
              ],
              [
                "ireng",
                "чорний"
              ],
              [
                "abang",
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
            "text": "Родинні терміни мають окремі нгоко й крама форми, як і решта поширеної лексики.",
            "en": {
              "text": "Kinship terms have separate ngoko and krama forms, like the rest of common vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "ibu/biyung (мати)",
                "мати"
              ],
              [
                "bapak (батько)",
                "батько"
              ],
              [
                "kakang (старший брат)",
                "старший брат"
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
            "text": "\"Piyé kabaré?\" (нгоко, як справи?) і \"Kadospundi kabaripun?\" (крама) — те саме питання у двох реєстрах.",
            "en": {
              "text": "\"Piyé kabaré?\" (ngoko, how are you?) and \"Kadospundi kabaripun?\" (krama) — the same question in two registers."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Sugeng énjang!",
                "Доброго ранку! (крама)"
              ],
              [
                "Matur nuwun!",
                "Дякую!"
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
            "text": "Погоду описують дієсловом \"udan\" (дощити) чи прикметником стану.",
            "en": {
              "text": "Weather is described with the verb \"udan\" (to rain) or a state adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lagi udan.",
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
            "text": "Частини тіла — звичайні іменники, деякі з окремими нгоко/крама формами.",
            "en": {
              "text": "Body parts are ordinary nouns, some with separate ngoko/krama forms."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "tangan",
                "рука"
              ],
              [
                "endhas/mustaka (нгоко/крама)",
                "голова"
              ],
              [
                "sikil",
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
            "text": "Вік виражають конструкцією \"umur X taun\" (X років віку).",
            "en": {
              "text": "Age is expressed with the construction \"umur X taun\" (X years of age)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umurku rong puluh taun.",
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
        "id": "wayang-cultural-vocabulary",
        "title": "Лексика ваянг (тіньового театру) — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Театр тіньових ляльок (ваянг куліт) сформував окремий шар культурної лексики — імена персонажів епосів Магабгарата й Рамаяна вживають ідіоматично для опису рис характеру в повсякденній мові.",
            "en": {
              "text": "Shadow-puppet theater (wayang kulit) shaped a distinct layer of cultural vocabulary — character names from the Mahabharata and Ramayana epics are used idiomatically to describe personality traits in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "\"Kaya Semar\" (як Семар) — про мудру, скромну людину, посилаючись на персонажа ваянг.",
                "культурна алюзія, зрозуміла лише в контексті яванської традиції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Wayang (Shadow Theater) Vocabulary — B2"
      },
      {
        "id": "unggah-ungguh-etiquette",
        "title": "Unggah-ungguh — етикет ширше граматики — C1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Unggah-ungguh\" — цілісна культурна система етикету, яка виходить за межі самої мовної граматики: включає позу тіла, жести й тон голосу поряд із вибором словникового регістру.",
            "en": {
              "text": "\"Unggah-ungguh\" is a whole cultural etiquette system extending beyond language grammar itself: it includes body posture, gestures, and tone of voice alongside vocabulary register choice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Правильне мовлення поєднується з нахилом голови й тримання рук під час розмови зі старшими.",
                "мова й тіло разом кодують повагу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Unggah-Ungguh — Etiquette beyond Grammar — C1"
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
                "Waduh!",
                "Ой!/Овва!"
              ],
              [
                "Matur nuwun!",
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
        "id": "loanword-adaptation-summary",
        "title": "Багатошаровість запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Яванська лексика — шарувата суміш санскриту, арабської, голландської (колоніальна доба) й індонезійської/малайської — рідко коли одне слово повністю \"питоме\" без домішок кількох епох контакту.",
            "en": {
              "text": "Javanese vocabulary is a layered mix of Sanskrit, Arabic, Dutch (colonial era), and Indonesian/Malay — rarely is a word entirely \"native\" without traces of several contact eras."
            }
          },
          {
            "type": "table",
            "title": "Голландські запозичення",
            "rows": [
              [
                "sepatu (від нід.)",
                "взуття"
              ],
              [
                "kantor (від нід.)",
                "офіс"
              ]
            ],
            "en": {
              "title": "Dutch Loanwords"
            }
          }
        ],
        "titleEn": "The Layered Loanword History — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Яванські ідіоми часто спираються на аграрне життя й філософію рівноваги (rukun — гармонія).",
            "en": {
              "text": "Javanese idioms often draw on agrarian life and the philosophy of balance (rukun — harmony)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nrimo ing pandum.",
                "Приймати долю з покорою (центральна яванська цінність)."
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
            "text": "Числа 11-19 утворюються поєднанням десяти з одиницею через суфікс \"-welas\".",
            "en": {
              "text": "Numbers 11-19 are formed by combining ten with the unit via the suffix \"-welas\"."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "sewelas",
                "одинадцять"
              ],
              [
                "rong puluh",
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
            "text": "Порядкові числівники утворюються префіксом \"kaping\" перед кількісним числівником.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix \"kaping\" before the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kaping pisan",
                "перший"
              ],
              [
                "kaping loro",
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
            "text": "\"Sok wong\" (хтось) і \"apa-apa\" (щось) — базові неозначені вирази.",
            "en": {
              "text": "\"Sok wong\" (someone) and \"apa-apa\" (something) are the basic indefinite expressions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ana sing telpon.",
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
            "text": "\"Ora ana sing\" (ніхто/нічого немає) поєднує заперечення існування з відносною часткою \"sing\".",
            "en": {
              "text": "\"Ora ana sing\" (no one/nothing) combines the existential negation with the relative particle \"sing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ora ana wong ing kono.",
                "Там нікого немає."
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
            "text": "Розділове питання утворюється фразою \"ta?\" чи \"ora?\" у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"ta?\" or \"ora?\" at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Apik cuacané dina iki, ta?",
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
        "title": "Цільове підрядне (supaya) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Supaya\" (щоб) вводить цільове підрядне речення.",
            "en": {
              "text": "\"Supaya\" (so that) introduces a purpose clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku sinau basa Jawa supaya bisa ngomong karo simbahku.",
                "Я вивчаю яванську, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (supaya) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (merga) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Merga\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Merga\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aku telat merga ketinggalan bis.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (merga) — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (yèn) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Yèn\" (якщо) вводить умовне речення.",
            "en": {
              "text": "\"Yèn\" (if) introduces a conditional sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yèn aku duwé wektu, aku bakal lunga.",
                "Якби я мав час, я б пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (yèn) — B1"
      },
      {
        "id": "address-titles",
        "title": "Титули звертання (bapak/ibu) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Bapak\" (пане) і \"Ibu\" (пані), буквально \"батько\"/\"мати\", вживають як універсальні шанобливі титули звертання до дорослих незалежно від родинного стосунку.",
            "en": {
              "text": "\"Bapak\" (sir) and \"Ibu\" (madam), literally \"father\"/\"mother\", are used as universal respectful address titles for adults regardless of any family relation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Selamat pagi, Bu!",
                "Доброго ранку, пані!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Titles (bapak/ibu) — A2"
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
            "text": "Кілька частовживаних дієслів (є, iso-могти) мають нерегулярні форми чи взагалі не приєднують стандартні префікси активного/пасивного стану так, як інші дієслова.",
            "en": {
              "text": "A few common verbs (є, iso-to be able) have irregular forms or don't take the standard active/passive prefixes the way other verbs do."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "iso (могти) не має звичайної пасивної форми з di-.",
                "модальні дієслова часто випадають із загальної системи станів"
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
        "id": "nasal-prefix-assimilation-irregularities",
        "title": "Винятки в асиміляції носового префікса — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча носовий префікс N- зазвичай асимілюється передбачувано (p→m, t→n, k→ng, s→ny), деякі запозичені чи односкладові корені не підкоряються цьому правилу й вимагають запам'ятовування форми окремо.",
            "en": {
              "text": "Although the nasal prefix N- usually assimilates predictably (p→m, t→n, k→ng, s→ny), some loanwords or monosyllabic roots don't follow this rule and require the form to be memorized individually."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі корені зберігають початковий приголосний без зміни попри носовий префікс.",
                "виняток із загального правила асиміляції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Exceptions in Nasal Prefix Assimilation — B2"
      },
      {
        "id": "fixed-kawi-expressions",
        "title": "Застиглі вирази з кави — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо в офіційних або весільних промовах) зберігають лексику й синтаксис давньояванської кави, незрозумілу без спеціального навчання.",
            "en": {
              "text": "Some common formulas (especially in official or wedding speeches) preserve Old Javanese Kawi vocabulary and syntax, not understood without special training."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Офіційні весільні промови традиційно містять уривки, майже незрозумілі сучасним слухачам без пояснення.",
                "живий приклад архаїчного шару в церемоніальному мовленні"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Kawi Expressions — B2"
      }
    ]
  }
];
